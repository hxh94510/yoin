/* Synthetic regression audit. Equal-probability choices are NOT real-user norms. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),ctx={window:{},localStorage:{getItem:()=>null}};
vm.createContext(ctx);
for(const f of ['data.js','interests.js','tests.js','parenting.js','anime-catalog.js','anime-calibration.js','anime.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx,{filename:f});
const {YOIN_DATA:D,YOIN_TESTS:T,YOIN_SCORING:S,YOIN_ANIME:A,YOIN_ANIME_CATALOG:C}=ctx.window;
const rng=seed=>()=>((seed=(Math.imul(1664525,seed)+1013904223)>>>0)/4294967296);
function summarize(counts,n){const values=[...counts.values()].sort((a,b)=>b-a);return {samples:n,distinct:values.length,largestShare:+(100*values[0]/n).toFixed(2),top3Share:+(100*values.slice(0,3).reduce((s,v)=>s+v,0)/n).toFixed(2),effectiveOutcomes:+Math.exp(-values.reduce((s,v)=>s+v/n*Math.log(v/n),0)).toFixed(2)};}
function bump(counts,id){counts.set(id,(counts.get(id)||0)+1);}
const seed=20260922,report={reference:'Independent equal-probability options / uniform non-repeating casts; synthetic coverage, not visitor statistics.',seed,quizSamples:20000,animeSamples:5000,tests:{}};
for(const t of T){
  const rand=rng(seed),before=new Map(),after=new Map();
  for(let n=0;n<report.quizSamples;n++){
    const answers=t.questions.map(q=>Math.floor(rand()*q.options.length)),r=S.assess(t,answers);
    // The compatibility path retains the previous scoring for legacy summaries.
    const old=S.rankResult(t,{vector:r.vector,interests:r.interests});
    bump(before,old[0].id);bump(after,r.matches[0].id);
  }
  const result={before:summarize(before,report.quizSamples),after:summarize(after,report.quizSamples),characters:D.characters.map(c=>({id:c.id,name:c.name,before:before.get(c.id)||0,after:after.get(c.id)||0}))};
  assert.equal(result.after.distinct,11);
  assert(result.after.largestShare<16,'Unexpected questionnaire concentration');
  assert(result.characters.every(c=>c.after/report.quizSamples>.025),'Underrepresented result in synthetic coverage');
  report.tests[t.id]=result;
}
const rand=rng(seed),before=new Map(),after=new Map();let swapsChanged=0;
for(let n=0;n<report.animeSamples;n++){
  const cast=A.shuffle(rand),r=A.match(cast);
  const old=r.ranked.slice().sort((a,b)=>b.baseScore-a.baseScore||A.titleById(a.id).rank-A.titleById(b.id).rank)[0];
  bump(before,old.id);bump(after,r.top[0].id);
  if(n<300){const swapped=A.assign(cast,0,cast[2]);if(A.match(swapped).top[0].id!==r.top[0].id)swapsChanged++;}
}
report.anime={before:summarize(before,report.animeSamples),after:summarize(after,report.animeSamples),swaps:{samples:300,changedWinner:swapsChanged},top:[...after].sort((a,b)=>b[1]-a[1]).slice(0,10).map(([id,count])=>({id,name:A.titleById(id).name,count})),poolSize:C.titles.length};
assert(report.anime.after.largestShare<6,'Unexpected anime concentration');
assert(report.anime.after.distinct>200,'Too few reachable titles in synthetic coverage');
assert(swapsChanged>200,'Casting positions lost influence');
const json=process.argv.find(a=>a.startsWith('--json='));if(json)fs.writeFileSync(path.resolve(json.slice(7)),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));

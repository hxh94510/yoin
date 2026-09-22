const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const context={window:{}};vm.createContext(context);
for(const f of ['data.js','interests.js','tests.js','parenting.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'..',f),'utf8'),context,{filename:f});
const {YOIN_DATA:D,YOIN_SCORING:S,YOIN_TESTS:T}=context.window;
const json=x=>JSON.stringify(x);
for(const t of T){
  const answers=t.questions.map((_,i)=>i%4),r=S.assess(t,answers);
  assert.equal(r.scoringVersion,3);assert.equal(r.matches.length,11);
  assert.equal(json(r),json(S.assess(t,answers)),'Same answers must be deterministic');
  assert.equal(json(r.matches),json(S.rankResult(t,r,D.characters.slice().reverse())),'No first-character ordering advantage');
  for(const bad of [null,[],Array(10),Array(10).fill(null),Array(10).fill(-1),Array(10).fill(4),Array(10).fill(.5),Array(10).fill('0')])assert.throws(()=>S.assess(t,bad));
  assert(r.matches.every(m=>Number.isFinite(m.evidence)&&m.similarity>=0&&m.similarity<=100));
  assert.notEqual(r.answers,answers);answers[0]=3;assert.equal(r.answers[0],0,'Snapshot must not mutate');
  const reordered=JSON.parse(json(t));reordered.questions.forEach(q=>q.options.reverse());
  const other=S.assess(reordered,r.answers.map(a=>3-a));
  assert.deepEqual(Array.from(other.matches,m=>m.id),Array.from(r.matches,m=>m.id),'Answer letters must not change results');
  const model=S.evidenceModel(t);
  for(const c of D.characters){
    const parts=model[c.id];
    assert(parts.style.noise>0);if(parts.interest)assert(parts.interest.noise>0);
    // Replacing a selected option with stronger evidence cannot hurt this
    // character, even if a different character remains first overall.
    const coefficient=(i,a)=>parts.style.values[i][a]/parts.style.noise*(parts.interest?t.matchWeights.style:1)+(parts.interest?parts.interest.values[i][a]/parts.interest.noise*t.matchWeights.interests:0);
    for(let i=0;i<t.questions.length;i++){
      const values=t.questions[i].options.map((_,a)=>coefficient(i,a)),better=r.answers.slice();better[i]=values.indexOf(Math.max(...values));
      const previous=r.matches.find(m=>m.id===c.id).evidence,next=S.assess(t,better).matches.find(m=>m.id===c.id).evidence;
      assert(next>=previous-1e-10,'Positive evidence became a penalty');
    }
  }
}
const chat=T.find(t=>t.id==='chat-dna'),child=T.find(t=>t.id==='parenting');
function route(t,style,interests={}){return t.questions.map(q=>{const values=q.options.map(o=>o.vector.reduce((s,v,k)=>s+v*(style[k]||0),0)+Object.entries(interests).reduce((s,[id,w])=>s+w*(o.interests?.[id]||0),0));return values.indexOf(Math.max(...values));});}
const cases=[
 [chat,'规则分析',[1,2,-.5,-.5,.5,-.2],{},['ljq','zl']],
 [chat,'短句共鸣',[-.5,-.5,2,.1,-.5,1],{},['yhj','tkt','chy']],
 [chat,'戏剧加梗',[-.2,0,.2,2,.3,-1],{},['yzz','lyx']],
 [child,'视觉创作',[0,.2,0,0,0,.2],{visual:100,collect:60,role:30},['lh','zl']],
 [child,'音乐舞台',[0,0,.2,0,0,0],{stage:100},['wry','zl']],
 [child,'外出美食',[0,0,0,0,.3,0],{outdoor:100,food:100,sweet:30},['qxn','chy']],
 [child,'故事与感受',[0,0,.4,0,0,.2],{story:100},['yhj','lyx','chy']]
];
for(const [t,label,style,interests,expected] of cases){const answers=route(t,style,interests),r=S.assess(t,answers);assert(expected.includes(r.matches[0].id),`${label}: unexpected ${r.matches[0].id}`);console.log(label,D.characters.find(c=>c.id===r.matches[0].id).name,answers.join(''));}
console.log('PASS: deterministic scoring, malformed inputs, option/character order, immutable snapshots, per-choice monotonicity, semantic routes.');

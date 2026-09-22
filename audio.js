/* YOIN sound layer. Cuelume 0.2.2 handles synthesis; this module owns preferences,
 * music, UI state, and semantic feedback. Autoplay respects saved OFF and browser policy. */
(() => {
  'use strict';
  const defaults={version:1,bgmEnabled:true,sfxEnabled:true,bgmVolume:.20,sfxVolume:.25};
  const clamp=(v,fallback)=>typeof v==='number'&&Number.isFinite(v)?Math.max(0,Math.min(1,v)):fallback;
  let saved;
  try{saved=JSON.parse(localStorage.getItem('yoin:audio'));}catch{}
  const prefs={...defaults};
  if(saved?.version===1){
    for(const key of ['bgmEnabled','sfxEnabled'])if(typeof saved[key]==='boolean')prefs[key]=saved[key];
    for(const key of ['bgmVolume','sfxVolume'])prefs[key]=clamp(saved[key],defaults[key]);
  }
  const music=document.getElementById('yoin-bgm');
  const dock=document.querySelector('.sound-dock');
  const toggle=document.getElementById('bgm-toggle');
  const label=document.getElementById('bgm-label');
  const status=document.getElementById('bgm-status');
  const settings=document.getElementById('sound-settings');
  const panel=document.getElementById('sound-panel');
  const bgmVolume=document.getElementById('bgm-volume');
  const sfxVolume=document.getElementById('sfx-volume');
  const sfxToggle=document.getElementById('sfx-toggle');
  const preview=document.getElementById('sfx-preview');
  const fx=window.Cuelume;
  let pending=false,failed=false,autoplayBlocked=false,buffering=false,hasPlayed=false,fadeId=0,requestId=0;
  let route=null,duckTimer=0,lastCueAt=-Infinity;
  music.volume=prefs.bgmVolume;
  function save(){try{localStorage.setItem('yoin:audio',JSON.stringify(prefs));}catch{}}
  function applyEffects(){fx?.setVolume(prefs.sfxVolume);fx?.setEnabled(prefs.sfxEnabled&&!document.hidden);}
  function update(){
    const playing=!music.paused&&!music.ended&&!buffering&&!failed;
    const audible=playing&&prefs.bgmEnabled&&prefs.bgmVolume>0&&!document.hidden;
    dock.classList.toggle('is-playing',audible);
    dock.classList.toggle('is-loading',pending||buffering);
    const enabled=prefs.bgmEnabled&&(playing||pending||buffering);
    toggle.setAttribute('aria-pressed',String(enabled));
    toggle.setAttribute('aria-label',enabled?'关闭背景音乐':failed?'重试播放背景音乐':'播放背景音乐');
    const heading=failed?'BGM RETRY':pending||buffering?'BGM LOADING':audible?'BGM ON':playing&&prefs.bgmVolume===0?'BGM MUTED':prefs.bgmEnabled?'BGM READY':'BGM OFF';
    const message=failed?'暂未能播放，点击重试':pending||buffering?'正在准备音乐…':audible?'軽快なリズム':playing&&prefs.bgmVolume===0?'音量为零':autoplayBlocked?'轻触页面，开启音乐':prefs.bgmEnabled?'点击继续播放':'点击，让余音响起';
    if(label.textContent!==heading)label.textContent=heading;
    if(status.textContent!==message)status.textContent=message;
    bgmVolume.value=String(Math.round(prefs.bgmVolume*100));
    sfxVolume.value=String(Math.round(prefs.sfxVolume*100));
    document.getElementById('bgm-volume-value').textContent=bgmVolume.value+'%';
    document.getElementById('sfx-volume-value').textContent=sfxVolume.value+'%';
    sfxToggle.setAttribute('aria-checked',String(prefs.sfxEnabled));
    sfxVolume.disabled=!prefs.sfxEnabled;preview.disabled=!prefs.sfxEnabled||prefs.sfxVolume===0;
  }
  function fadeTo(value,milliseconds=350,done){
    cancelAnimationFrame(fadeId);
    const from=music.volume,start=performance.now();
    const step=now=>{
      const progress=Math.min(1,(now-start)/milliseconds);
      music.volume=clamp(from+(value-from)*progress,value);
      if(progress<1)fadeId=requestAnimationFrame(step);else{fadeId=0;done?.();}
    };
    if(milliseconds===0){music.volume=value;done?.();}else fadeId=requestAnimationFrame(step);
  }
  function cue(name,volume=1){
    if(!prefs.sfxEnabled||prefs.sfxVolume===0||document.hidden||!fx)return;
    const now=performance.now();
    // Do not stack multiple short responses from the same interaction.
    if(!['ready','success','error'].includes(name)&&now-lastCueAt<75)return;
    lastCueAt=now;fx.play(name,{volume});
    if(name==='ready'&&!music.paused&&prefs.bgmEnabled){
      clearTimeout(duckTimer);fadeTo(prefs.bgmVolume*.5,130);
      duckTimer=setTimeout(()=>{if(prefs.bgmEnabled&&!music.paused)fadeTo(prefs.bgmVolume,600);},600);
    }
  }
  async function startMusic(automatic=false){
    const token=++requestId;
    clearTimeout(duckTimer);cancelAnimationFrame(fadeId);
    prefs.bgmEnabled=true;pending=true;failed=false;autoplayBlocked=false;buffering=false;save();update();
    // Automatic playback is requested at the chosen volume, never as a muted-policy workaround.
    music.volume=automatic?prefs.bgmVolume:0;
    try{
      if(music.error)music.load();
      // Calling play before awaiting preserves the browser's user activation.
      await music.play();
      if(token!==requestId)return;
      if(!prefs.bgmEnabled||document.hidden){music.pause();pending=false;update();return;}
      hasPlayed=true;pending=false;fadeTo(prefs.bgmVolume,450);update();
    }catch(error){
      if(token!==requestId)return;
      pending=false;buffering=false;
      if(error.name==='NotAllowedError')autoplayBlocked=true;
      else if(error.name!=='AbortError')failed=true;
      update();
    }
  }
  function stopMusic(){
    const token=++requestId;
    prefs.bgmEnabled=false;pending=false;buffering=false;failed=false;autoplayBlocked=false;
    clearTimeout(duckTimer);save();update();
    fadeTo(0,music.paused?0:160,()=>{if(token===requestId){music.pause();update();}});
  }
  function setPanel(open,restoreFocus=false){
    panel.hidden=!open;settings.setAttribute('aria-expanded',String(open));
    if(restoreFocus)settings.focus();
  }
  toggle.addEventListener('click',()=>{
    if(prefs.bgmEnabled&&(!music.paused||pending||buffering))stopMusic();else void startMusic();
  });
  settings.addEventListener('click',()=>{const open=panel.hidden;setPanel(open);cue(open?'whisper':'droplet',.45);});
  document.getElementById('sound-panel-close').addEventListener('click',()=>setPanel(false,true));
  document.addEventListener('pointerdown',e=>{if(!dock.contains(e.target))setPanel(false);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){e.preventDefault();setPanel(false,true);}});
  bgmVolume.addEventListener('input',()=>{
    prefs.bgmVolume=Number(bgmVolume.value)/100;clearTimeout(duckTimer);cancelAnimationFrame(fadeId);
    if(!prefs.bgmEnabled)music.pause();
    music.volume=prefs.bgmVolume;save();update();
  });
  sfxVolume.addEventListener('input',()=>{prefs.sfxVolume=Number(sfxVolume.value)/100;applyEffects();save();update();});
  sfxVolume.addEventListener('change',()=>cue('tick',.65));
  sfxToggle.addEventListener('click',()=>{prefs.sfxEnabled=!prefs.sfxEnabled;applyEffects();save();update();if(prefs.sfxEnabled)cue('toggle',.7);});
  preview.addEventListener('click',()=>cue('chime',.7));
  music.addEventListener('playing',()=>{pending=false;buffering=false;failed=false;hasPlayed=true;update();});
  music.addEventListener('waiting',()=>{if(prefs.bgmEnabled&&!music.paused)buffering=true;update();});
  music.addEventListener('pause',()=>{buffering=false;update();});
  music.addEventListener('ended',update);
  music.addEventListener('error',()=>{failed=true;pending=false;buffering=false;update();});
  document.addEventListener('visibilitychange',()=>{
    applyEffects();
    if(document.hidden){requestId++;clearTimeout(duckTimer);cancelAnimationFrame(fadeId);pending=false;music.pause();update();}
    else if(prefs.bgmEnabled&&hasPlayed)void startMusic();else update();
  });
  // If audible autoplay is blocked, retry in the first genuine click/tap/key gesture.
  function resumeRemembered(e){
    if(!e.isTrusted||!music.paused||pending||failed||!prefs.bgmEnabled||document.hidden||e.target.closest?.('#bgm-toggle'))return;
    if(e.type==='keydown'&&!['Enter',' '].includes(e.key))return;
    void startMusic();
  }
  document.addEventListener('pointerdown',resumeRemembered,{capture:true});
  document.addEventListener('click',resumeRemembered,{capture:true});
  document.addEventListener('keydown',resumeRemembered,{capture:true});
  window.addEventListener('pagehide',()=>{requestId++;clearTimeout(duckTimer);cancelAnimationFrame(fadeId);music.pause();fx?.setEnabled(false);});
  window.addEventListener('pageshow',applyEffects);

  // Capture selection state before the SPA changes it. Native click includes keyboard activation.
  document.addEventListener('click',e=>{
    if(!(e.target instanceof Element)||dock.contains(e.target))return;
    const target=e.target.closest('button,a,summary');
    if(!target||target.matches(':disabled,[aria-disabled="true"]'))return;
    if(target.matches('[data-answer]')){if(target.getAttribute('aria-checked')!=='true')cue('toggle',.7);return;}
    if(target.matches('[data-filter],[data-relation]')){if(target.getAttribute('aria-pressed')!=='true')cue('toggle',.65);return;}
    const action=target.dataset.action;
    if(action==='next'){
      const total=document.querySelectorAll('.progress-track>span').length;
      const index=[...document.querySelectorAll('.progress-track>span')].findIndex(s=>s.classList.contains('current'));
      if(index<total-1)cue('page',.65);
    }else if(action==='previous')cue('page',.5);
    else if(['restart','clear-local'].includes(action))cue('press',.65);
    else if(target.matches('[data-cancel]'))cue('droplet',.4);
    else if(target.matches('[data-confirm]'))cue('toggle',.6);
    else if(action==='clear-search')cue('droplet',.4);
  },true);
  document.addEventListener('change',e=>{if(e.target.matches('#edge-metric,#quote-filter'))cue('scan',.4);});
  document.addEventListener('toggle',e=>{if(e.target instanceof HTMLDetailsElement)cue(e.target.open?'bloom':'droplet',e.target.open ? .45 : .35);},true);
  fx?.bind();applyEffects();update();
  window.YOIN_AUDIO={
    cue,
    onRoute(page,id){
      const key=page+'/'+(id||'');
      document.querySelectorAll('.nav a,.character-card,.network-svg a,.match-row').forEach(el=>el.setAttribute('data-cuelume-hover','tick'));
      if(route!==null&&key!==route){
        if(page==='result'&&route.startsWith('quiz/'))cue('ready',.7);
        else if(page==='quiz'&&!route.startsWith('quiz/'))cue('pulse',.6);
        else if(page==='character')cue('bloom',.45);
        else cue('page',.45);
      }
      route=key;
    },
    feedback(message){
      if(/已复制|已生成|已清除/.test(message))cue('success',.6);
      else if(/不支持|还有一个/.test(message))cue('error',.5);
    }
  };
  if(prefs.bgmEnabled&&!document.hidden)void startMusic(true);
})();

/* Test registry. Add a definition with a unique id, six dimensions and question list.
 * vectors: 追问 / 拆解 / 共鸣 / 玩梗 / 行动 / 精炼; all in [0,100].
 * Scenes and answers are newly authored, not original chat quotations.
 */
(function () {
  const option = (text, vector) => ({text, vector});
  window.YOIN_TESTS = [{
    id:'chat-dna', version:2, title:'你的聊天人格，像谁？', en:'FIND YOUR CHAT DOUBLE',
    description:'群里突然刷了 99+。你会追问、起哄，还是两个字结束战斗？进入 10 个熟悉又离谱的现场，找到你的对话同频。',
    duration:'约 3 分钟', status:'ready', dimensions:['追问','拆解','共鸣','玩梗','行动','精炼'],
    questions:[
      {title:'深夜，群里出现一张没有解释的图。',tag:'未读消息 / 99+',time:'23:47',messages:[['群友 A','[图片：一张看不懂的活动海报]'],['群友 B','不是，这是什么新东西？']],prompt:'手比脑子快，你最想发的是——',options:[
        option('等等，谁发的？这个人之前是不是出现过？',[100,65,35,70,25,45]),
        option('我放大看了，层级有问题，信息根本读不出来。',[65,95,25,25,35,65]),
        option('救命哈哈哈哈，我刚喝的水差点全喷出来。',[20,15,100,75,20,70]),
        option('艺术。',[10,40,35,80,10,100])]},
      {title:'周末聚会，讨论了一小时还没出门。',tag:'行动号召 / WEEKEND',time:'14:06',messages:[['群友 A','去哪？吃啥？'],['群友 B','都行，但不能太远也不能太贵。']],prompt:'你给这场拉锯战补一句——',options:[
        option('还得好吃，还得好拍！我挑两家，三点楼下见。',[45,55,80,80,100,45]),
        option('人数先确定，再按交通时间和预算排一下。',[85,100,30,30,90,30]),
        option('出门！',[10,15,55,40,85,100]),
        option('本群宣布：继续说随便的，自动担任活动总监。',[20,60,60,100,75,20])]},
      {title:'公司突然宣布，每周写一份成长报告。',tag:'职场观察 / MONDAY',time:'09:12',messages:[['群友 A','报告要写成长、反思、愿景。'],['群友 B','但我这周只改了三个按钮。']],prompt:'这时你的回复更接近——',options:[
        option('这个制度在评产出还是在评写作？指标先说清。',[95,100,25,40,60,30]),
        option('昨天还说要减轻负担，今天已经有三个附件了。',[70,85,45,55,45,70]),
        option('为什么周一要经历这些，笑着笑着不笑了。',[35,25,95,85,20,80]),
        option('建议报告标题：按钮的一小步，公司的大跨越。',[25,55,50,100,45,25])]},
      {title:'群友说去喝咖啡，照片里却有两只杯子。',tag:'八卦现场 / COFFEE',time:'16:28',messages:[['群友 A','今天这家不错。'],['群友 B','等等，第二杯是谁的？']],prompt:'你会怎样接这个球？',options:[
        option('等一下，这是不是上次提到的那家？前情补一下。',[100,65,45,85,25,45]),
        option('哈哈哈这照片一发，群里现在比咖啡店还热闹。',[40,30,100,85,45,50]),
        option('一杯冰一杯热，只能说明点了两杯，先别脑补。',[65,95,30,25,40,85]),
        option('恭迎咖啡大使，今天是什么新剧情？',[75,35,60,100,25,50])]},
      {title:'游戏更新了一个看起来很离谱的新机制。',tag:'联机频道 / UPDATE',time:'20:14',messages:[['群友 A','新版本这个技能可以叠十层。'],['群友 B','所以我们今晚玩不玩？']],prompt:'你的关注点是——',options:[
        option('每层独立计算还是相乘？冷却和代价呢？',[100,100,25,50,65,25]),
        option('还可以双排叠？那再拉两个人，现在开！',[65,60,75,90,100,55]),
        option('腿哥，这个职业适合小弟吗？请指示。',[85,50,50,100,55,45]),
        option('版本可以更替，但本游戏的胜利不可避免。',[15,55,65,100,65,10])]},
      {title:'追了三个月的剧，终于更新关键一集。',tag:'追更现场 / ON AIR',time:'21:03',messages:[['群友 A','这集最后五分钟！'],['群友 B','看完的人先别剧透。']],prompt:'看完之后，你打下——',options:[
        option('一天一集真的急死我了，现在立刻给我下一集！',[40,15,100,50,25,90]),
        option('我刚刚从沙发上弹起来，邻居应该听见了哈哈。',[40,30,100,75,55,45]),
        option('最后那个镜头前面埋过，人物动机终于闭环了。',[80,95,45,25,30,50]),
        option('这集不错。',[15,60,35,30,15,100])]},
      {title:'你随口说了一句，群友开始给你升职。',tag:'称号升级 / NEW TITLE',time:'18:42',messages:[['群友 A','不愧是总监！'],['群友 B','请总监发表获奖感言。']],prompt:'轮到你接招了——',options:[
        option('啊？我怎么就总监了，笑死了。',[50,20,95,95,20,85]),
        option('小弟不敢，还请各位前辈多多指教。',[65,35,55,100,30,55]),
        option('即日起，本群实行双休三天制度，望周知。',[15,55,65,100,80,15]),
        option('封神。',[10,25,55,75,10,100])]},
      {title:'群友给新买的东西拍了九张照片。',tag:'审美评审 / NEW DROP',time:'12:35',messages:[['群友 A','你们觉得哪个好看？'],['群友 B','我已经看不出区别了。']],prompt:'你的看图方式是——',options:[
        option('第三张。光更干净。',[20,75,25,30,20,95]),
        option('第二张边缘有点歪，第三张构图舒服但颜色偏了。',[70,100,30,25,45,65]),
        option('这个我记得你之前说过，最后怎么买到的？',[100,65,55,60,45,45]),
        option('啊啊啊这配色！我真的会一直盯着看。',[20,20,100,45,20,95])]},
      {title:'一个冷笑话发出去，群里静了整整十秒。',tag:'气氛急救 / SILENCE',time:'15:19',messages:[['群友 A','刚想到一个笑话……'],['系统','对方正在输入……又停下了。']],prompt:'你决定救一下场——',options:[
        option('还可以再冷点，还能省空调费，走，买冰的。',[45,40,75,95,95,55]),
        option('现任冷场委员会主席，请继续发言。',[70,30,50,100,35,50]),
        option('哈哈哈哈这个有点好笑，怎么就没人接啊。',[45,25,95,95,25,80]),
        option('冷。',[10,25,45,75,10,100])]},
      {title:'聊天已经歪了十次，终于有人问最初在说啥。',tag:'散场之前 / TO BE CONTINUED',time:'00:08',messages:[['群友 A','我们最开始是不是在约饭？'],['群友 B','怎么现在已经在选董事长了。']],prompt:'这场群聊由你收尾——',options:[
        option('前情是先约饭，再聊老板，最后老田当选了。',[95,80,50,90,50,50]),
        option('好，饭照吃。我把时间地点发一下，明晚七点。',[45,65,70,55,100,65]),
        option('董事长就董事长吧，怎么又是我啊，绷不住了。',[45,30,85,95,25,85]),
        option('本次会议圆满结束，未到会成员请全文学习。',[20,65,60,100,70,15])]}
    ]
  }];
  const calibrationCache = new WeakMap();
  function calibration(test) {
    if(calibrationCache.has(test)) return calibrationCache.get(test);
    const prototypes=window.YOIN_DATA.characters;
    const data=test.dimensions.map((_,d)=>{
      const mean=prototypes.reduce((s,c)=>s+c.axes[d],0)/prototypes.length;
      const spread=Math.sqrt(prototypes.reduce((s,c)=>s+(c.axes[d]-mean)**2,0)/prototypes.length);
      let expected=0,variance=0;
      test.questions.forEach(q=>{
        const m=q.options.reduce((s,o)=>s+o.vector[d],0)/q.options.length;
        expected+=m;
        variance+=q.options.reduce((s,o)=>s+(o.vector[d]-m)**2,0)/q.options.length;
      });
      return {mean,spread,expected,noise:Math.sqrt(variance)};
    });
    if(data.some(d=>d.noise===0))throw new Error('测试选项必须覆盖每个维度的差异');
    calibrationCache.set(test,data);return data;
  }
  const api = {
    calibration,
    score(test, answers) {
      if (answers.length !== test.questions.length || answers.some((a,i)=>!Number.isInteger(a)||!test.questions[i].options[a])) throw new Error('请完成全部场景');
      const params=calibration(test);
      return test.dimensions.map((_,d)=>{
        const sum=test.questions.reduce((s,q,i)=>s+q.options[answers[i]].vector[d],0);
        const p=params[d];
        return Math.round(Math.max(0,Math.min(100,p.mean+(sum-p.expected)/p.noise*p.spread)));
      });
    },
    rank(vector, characters) {
      return characters.map(c=>({id:c.id,distance:Math.sqrt(vector.reduce((s,v,i)=>s+(v-c.axes[i])**2,0)/vector.length)}))
        .sort((a,b)=>a.distance-b.distance).map(r=>({...r,similarity:Math.round(100-r.distance)}));
    }
  };
  window.YOIN_SCORING=api;
})();

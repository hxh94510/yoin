/* Parenting scenes are fiction. Character interests are sourced in interests.js. */
(() => {
  const choice = (text, vector, interests, seed) => ({text, vector, interests, seed});
  const test = {
    id: 'parenting', version: 1, kind: 'parenting', status: 'ready',
    title: '你的孩子最像谁？', en: 'GROW A LITTLE CHARACTER', shortName: 'GROWING UP',
    description: '如果由你来养，会养出一位小小的谁？10 个育儿现场，从你怎么接住孩子，到你会陪他探索什么，拼出一条兴趣与性格的成长路线。',
    duration: '约 4 分钟', entryLabel: '开始养成实验', artLabel: '小小的 TA，会长成谁？',
    disclaimer: '趣味养成推演 · 兴趣偏好 + 六维性格',
    sceneName: '你和孩子的日常', answerLabel: 'YOUR LITTLE NEXT STEP',
    sceneFootnote: '想象孩子在小学阶段；无论有没有孩子，都可以代入作答。',
    finishLabel: '看看孩子最像谁',
    dimensions: ['追问', '拆解', '共鸣', '玩梗', '行动', '精炼'],
    matchWeights: {interests: 0.6, style: 0.4},
    questions: [
      {title: '动画结束了，孩子的“为什么”刚开场。', tag: '01 / 好奇心的方向', time: '20:10',
        messages: [['孩子', '坏人为什么又帮了主角？他到底是哪一边的？'], ['孩子', '要是我进去，我可不这么演。']],
        prompt: '你会怎么陪他把这个问题聊下去？', options: [
          choice('一起找前面的线索，画张人物关系图：“你的猜想要靠哪一幕证明？”', [100,95,40,45,55,35], {story:2,systems:2}, '你把追问变成了找线索、讲理由的阅读小游戏。'),
          choice('让他主持一期“动画吐槽大会”，你当观众，把他的精彩点评录下来。', [70,35,85,95,60,70], {variety:2,stage:1}, '你给了孩子一个把观看感受讲成节目的舞台。'),
          choice('拿起玩偶陪他演：“那你来当编剧，我们换个结局试试。”', [75,40,65,100,55,35], {role:2,story:1}, '你用角色扮演接住了孩子的想象，让故事可以由他续写。'),
          choice('拿出画纸：“把你心里的新主角画出来，给他设计一个特别的标志。”', [45,80,50,65,45,85], {visual:2,collect:1}, '你把对角色的兴趣引向了造型、配色和视觉创作。') ]},
      {title: '桌游连输三局，小脸已经皱成一团。', tag: '02 / 怎么接住挫败', time: '18:35',
        messages: [['孩子', '我不玩了！怎么每次都是我输？'], ['孩子', '……可是我还是想赢一次。']],
        prompt: '先让他缓口气，你更愿意接着这样做——', options: [
          choice('陪他把难过说完：“今天只记一句最真实的感受，等你想玩了我们再开。”', [35,20,100,35,20,95], {story:2,variety:1}, '你让感受有了记录的位置，也给重新参与留出了空间。'),
          choice('和他组同一队闯关：“这局你定路线，我来帮忙，咱们一起商量。”', [65,60,75,80,100,55], {team:2,systems:1}, '你把输赢现场换成了合作与分工的练习。'),
          choice('等他平静后复盘一个回合：“如果只改这一步，局面会不会不同？”', [95,100,45,40,75,30], {systems:2,team:1}, '你鼓励把失败拆成可以再试一次的小问题。'),
          choice('请他给这场比赛起个夸张名字，再用一段小表演宣布：“下一回合见！”', [40,35,85,100,40,85], {stage:2,role:1}, '你用命名和表演，让孩子练习把尴尬变成自己的梗。') ]},
      {title: '兴趣体验日，孩子每个教室都想进。', tag: '03 / 第一颗兴趣种子', time: '10:20',
        messages: [['孩子', '画画也想试，乐队也想试，那个闯关的看着也好玩！'], ['孩子', '今天只能选一项，你陪我去哪？']],
        prompt: '都尊重他的选择，但你会先这样邀请——', options: [
          choice('“去合奏室吧。先挑喜欢的节奏，再试着和大家一起把它演出来。”', [40,45,95,70,80,45], {stage:2,team:1}, '你提供的是音乐、节奏和一起上台的体验。'),
          choice('“去观察小队吧。带张地图，去公园找三种平时没注意过的东西。”', [75,55,65,55,100,65], {outdoor:2,team:1}, '你把兴趣的起点放在出门、观察与亲自探索上。'),
          choice('“去绘画工坊吧。试试颜色和材质，做一个可以带回家的小角色。”', [45,85,45,65,50,90], {visual:2,collect:1}, '你让孩子通过颜色、材质和作品建立自己的审美。'),
          choice('“去桌游工坊吧。弄懂一个玩法，再让大家试玩你改过的规则。”', [100,95,40,85,80,30], {systems:2,team:1}, '你给了孩子理解规则、修改规则再验证的机会。') ]},
      {title: '一张画改了三小时，孩子还是不肯收笔。', tag: '04 / 对待投入与细节', time: '16:45',
        messages: [['孩子', '这个颜色不对，衣服也还差一点点。'], ['孩子', '你看不出来吗？换了以后感觉完全不一样！']],
        prompt: '你最可能怎么回应这份认真？', options: [
          choice('“那就摆出三个版本，你选最喜欢的。用一句话说说，差别在哪里。”', [55,90,40,35,45,100], {visual:2,collect:1}, '你珍惜他的审美判断，也邀请他用简短理由表达差别。'),
          choice('“我想认识这个人！他从哪里来、和谁组队？咱们给他写一页设定。”', [95,75,55,100,40,40], {role:2,story:1}, '你把一张画延展成了有来历、有关系的原创角色。'),
          choice('“我们给它办个迷你画展。你挑展位，我帮你做介绍牌。”', [55,55,90,75,95,55], {stage:1,variety:2}, '你让创作有了被展示、被介绍和被分享的机会。'),
          choice('“你的巧思是哪里？比如这根树枝能变成工具吗？我们画个结构试试。”', [90,100,35,65,65,30], {visual:2,systems:1}, '你顺着细节兴趣，把画面变成可解释的设计。') ]},
      {title: '一家人说了半小时“随便”，周末还没安排。', tag: '05 / 兴趣怎样落地', time: '09:30',
        messages: [['孩子', '所以今天到底干什么呀？'], ['孩子', '要不我来当一天队长？']],
        prompt: '你会给这位新队长怎样的任务？', options: [
          choice('让他选一条短途路线和一家想尝的小店，定好出发时间，一家人跟队。', [60,60,75,85,100,60], {outdoor:2,food:1}, '你让想法落实成路线、时间和一次真实出发。'),
          choice('请他邀请几个伙伴来玩合作游戏，给大家分任务，最后一起复盘最爽的一刻。', [55,75,60,90,85,35], {team:2,systems:1}, '你给了他把爱好变成共同活动的组织练习。'),
          choice('一起选一部适龄动画或一本故事书，看完让他讲最喜欢的人物和理由。', [70,55,95,50,35,70], {story:2,visual:1}, '你陪孩子沉浸在作品里，再把喜欢的人物讲清楚。'),
          choice('把客厅变成小剧场，让他选音乐、造型和节目单，全家领角色开演。', [40,55,75,100,75,25], {stage:2,role:1}, '你把周末变成了音乐、角色和临场表达的创作时间。') ]},
      {title: '孩子想带着自己做的奇怪头饰参加活动。', tag: '06 / 对待“不一样”', time: '07:50',
        messages: [['孩子', '这是我设计的森林使者！别人会不会觉得怪？'], ['孩子', '我还是想戴，可是有点不好意思。']],
        prompt: '确认活动允许后，你会怎样支持他？', options: [
          choice('帮他把材质和颜色搭好，再一起选一张最满意的照片留作作品档案。', [45,85,45,50,55,90], {visual:2,collect:1}, '你把特别的造型当成值得打磨和保存的作品。'),
          choice('“给森林使者一个名字和口头禅吧。”先陪他在家演一小段，再由他决定戴不戴。', [75,35,80,100,45,60], {role:2,stage:1}, '你让孩子借角色排练表达，同时保留自己的决定。'),
          choice('“有点紧张很正常。”让他只对一个熟悉的伙伴讲，回来再聊最开心的瞬间。', [55,25,100,60,40,85], {variety:2,story:1}, '你从一个小观众开始，接住表达前后的感受。'),
          choice('“这个机关真有意思。”陪他改到戴着舒服，再请他演示它怎么动。', [95,100,35,55,80,30], {systems:2,visual:1}, '你支持他把大胆想法改造成真正能用的小设计。') ]},
      {title: '孩子做了四杯水果牛奶，全家被拉来当评委。', tag: '07 / 口味与探索', time: '15:15',
        messages: [['孩子', '一杯椰香、一杯水果、一杯原味，还有一杯我的秘密配方！'], ['孩子', '你陪我做下一轮吗？']],
        prompt: '你会把下一轮变成什么小实验？', options: [
          choice('请他挑一杯最喜欢的原味，试着分辨牛奶和水果本来的香气，再讲给家人听。', [45,75,40,35,40,90], {original:2,food:1}, '你把注意力放在食材本来的味道和清楚的品评上。'),
          choice('陪他研究椰香和水果怎样搭，做一份自己喜欢的甜口小点心，大家分着尝。', [45,45,90,70,85,55], {sweet:2,food:1}, '你给了甜口偏好一个动手搭配、分享成品的出口。'),
          choice('请他主持“家庭试吃大会”，给每杯起个有趣名字，记录大家最离谱的点评。', [75,45,80,100,55,60], {variety:2,food:1}, '你让食物变成了记录生活、接住不同反馈的小节目。'),
          choice('让他只换一种配料，做两杯对照：“原味的香气怎么变了？”最后由他选。', [100,100,40,45,65,30], {systems:1,original:2}, '你把口味探索变成了有对照、有自己判断的实验。') ]},
      {title: '出门前，孩子列了三十个想去的地方。', tag: '08 / 带着爱好看世界', time: '11:00',
        messages: [['孩子', '小吃街、森林、展览、故事里的老房子……我都想去！'], ['孩子', '如果今天只能安排一段，你帮我选个方向？']],
        prompt: '你会怎样一起缩小这张愿望清单？', options: [
          choice('选一段适合的步道，让他当地图员，到了之后记录自己发现的三个新东西。', [80,65,55,55,100,65], {outdoor:2,team:1}, '你把旅行交给亲自走、亲自发现的过程。'),
          choice('选一个想尝的新味道，和他记录口感，再在家试着做个简单版本。', [40,55,85,55,80,75], {food:2,outdoor:1}, '你让地方风味连接到品评和动手料理。'),
          choice('去看设计或插画展，只挑三件最喜欢的作品，画成一组小明信片。', [60,90,45,45,55,90], {visual:2,collect:1}, '你让一次出行留下了自己的观察、取舍和视觉作品。'),
          choice('带着一本冒险绘本出门，把路上的地点写进自己的番外故事。', [90,55,60,100,60,40], {story:1,role:2}, '你鼓励孩子把现实观察接进自己的虚构世界。') ]},
      {title: '故事看到结尾，孩子哭着说不想结束。', tag: '09 / 如何珍惜喜欢', time: '20:40',
        messages: [['孩子', '我舍不得他们，明天还有下一集吗？'], ['孩子', '你最喜欢谁？你也会难过吗？']],
        prompt: '你会怎么陪他再待一会儿？', options: [
          choice('抱着他聊最舍不得的一幕，约好下次一起读番外，让他安心把感受说完。', [45,25,100,40,25,95], {story:2,variety:1}, '你让喜欢和不舍都能被说出来，给继续阅读留下期待。'),
          choice('一起听结尾的配乐，请他哼一段，用动作或节奏表达这一幕的心情。', [35,35,100,70,55,65], {stage:2,story:1}, '你陪他用音乐和身体表达作品带来的情绪。'),
          choice('陪他设计一张角色纪念卡，选最喜欢的颜色和一个代表性小道具。', [45,85,60,60,40,85], {visual:1,collect:2}, '你把情感投入变成了一件能收藏、能再次观看的小作品。'),
          choice('等他缓过来，和他找前面埋过的线索，聊聊换一个选择故事会怎样走。', [100,95,50,65,45,35], {story:2,systems:1}, '你让对故事的投入继续变成设定、动机和可能性的讨论。') ]},
      {title: '班里要办兴趣分享日，孩子说“我好像没什么可讲”。', tag: '10 / 把热爱带给别人', time: '19:20',
        messages: [['孩子', '有人会弹琴，有人会好多厉害的东西。'], ['孩子', '我这些小爱好，也可以分享吗？']],
        prompt: '你会怎样帮他找到自己的那一页？', options: [
          choice('“你讲角色故事很有意思。”一起写段小剧本，让愿意的朋友各演一个角色。', [70,50,70,100,60,30], {role:2,stage:1}, '你让想象力找到同伴，成为可以一起完成的作品。'),
          choice('“你总能让大家玩起来。”陪他准备一个合作小游戏，让全班一起体验。', [50,65,75,90,100,45], {team:2,systems:1}, '你肯定他邀请人、讲玩法和推进活动的本领。'),
          choice('“你选东西很有自己的眼光。”挑三件画作或小收藏，每件配一句自己的判断。', [35,80,45,50,45,100], {visual:1,collect:2}, '你支持他用有选择的作品和简洁表达建立自己的风格。'),
          choice('“你记得很多有趣的小事。”一起做张旅行或试吃小报，讲最想推荐的一次体验。', [85,55,90,80,70,60], {variety:2,food:1,outdoor:1}, '你让日常经历成为值得分享的兴趣，而不只看表演技能。') ]}
    ],
    outcomes: {
      hxh: {line: '什么都想知道一点，还能把一次试吃聊成连续剧。', hobby: '迷宫桌游、家庭小节目、带解说的观察笔记', quote: '等一下，上次不是说还有一个版本吗？'},
      wry: {line: '会为一首歌起立鼓掌，也愿意把喜欢的故事和新味道分享给大家。', hobby: '节奏合奏、动画分享会、家庭试吃记录', quote: '你们快来看！刚才这一段真的太好看了！'},
      ljq: {line: '玩之前研究规则，看完故事还要追问整个世界怎样运转。', hobby: '策略桌游、世界观笔记、合作解谜', quote: '先等一下，这条规则如果反过来会怎么样？'},
      lh: {line: '有自己的配色和角色设定，不说很多，但每次选得很有主意。', hobby: '原创角色小册、配色练习、观察写生', quote: '第三个。颜色更舒服。'},
      zl: {line: '眼睛会抓住细节，舞台、幻想角色和小物件都能成为灵感。', hobby: '舞台造型设计、插画、角色纪念卡', quote: '这里换一种颜色，整个感觉就对了。'},
      qxn: {line: '喜欢亲自试、一起去，还会把一次出门安排得甜甜的、热热闹闹。', hobby: '亲子短途探索、水果小点心、家庭观影', quote: '还可以带上这个！现在出发来得及！'},
      chy: {line: '故事会认真追，新味道也要尝，最后用一句话给出自己的评价。', hobby: '适龄解谜故事、小小食评、旅行手账', quote: '好看。下次还来。'},
      tkt: {line: '组队时有参与感，对特别的角色和道具也很容易上头。', hobby: '合作闯关、角色与道具绘画、人物故事卡', quote: '啊？怎么又选我当队长了？那就开！'},
      yhj: {line: '能被一段故事、一张角色图真切打动，喜欢会直接写在脸上。', hobby: '漫画阅读、角色速写、故事感受日记', quote: '我好喜欢这一页！谁懂啊，再看一遍！'},
      lyx: {line: '看故事、看画风，还想给自己加一个身份，把想象的世界演出来。', hobby: '冒险绘本、角色服装手作、迷你情景剧', quote: '那我就是森林大使，请问今天的任务是什么？'},
      yzz: {line: '对喜欢的游戏很有热情，能把大家召集起来，也有坚持的口味。', hobby: '合作桌游、自创游戏说明书、原味食材小实验', quote: '本小队宣布：今天全员加入，快乐不可避免！'}
    }
  };
  window.YOIN_TESTS.push(test);

  const data = window.YOIN_INTERESTS;
  const facetName = id => data.facets.find(([key]) => key === id)?.[1] || id;
  function evidence(id, esc) {
    const profile = data.profiles[id];
    if (!profile) return '';
    return `<div class="interest-evidence">${profile.items.map(item => `<details><summary><b>${esc(item.label)}</b><span>${esc(item.kind)} <i>＋</i></span></summary><div class="interest-proof">${item.evidence.map(e => `<blockquote>${esc(e.text)}</blockquote><p class="subtle">${esc(e.time)} · CSV 记录 #${e.row} · ${e.excerpt ? '原文节选' : '原文'}</p>`).join('')}${item.note ? `<p class="interest-note">${esc(item.note)}</p>` : ''}</div></details>`).join('')}</div>`;
  }

  function result(t, r, {art, radar, miniAvatar, esc, arrow, axes, byId}) {
    const winner = r.matches[0], c = byId(winner.id), outcome = t.outcomes[c.id];
    const interests = r.interests || {};
    const topInterests = Object.entries(interests).sort((a,b) => b[1]-a[1]).filter(([,v]) => v>0).slice(0,3);
    const picks = Array.isArray(r.answers) && r.answers.length === t.questions.length
      ? r.answers.flatMap((a,i) => {
        const option = t.questions[i].options[a];
        if (!option) return [];
        const relevance = Object.entries(option.interests).reduce((sum,[key,value]) => sum+value*(data.profiles[c.id].weights[key]||0),0);
        return [{question:t.questions[i], option, index:i, relevance}];
      }).sort((a,b) => b.relevance-a.relevance).slice(0,3).sort((a,b) => a.index-b.index) : [];
    return `<div class="page-wrap result-page parenting-result" style="--accent:${c.color}">
      <a class="back-link" href="#tests">← 返回测试实验室</a>
      <section class="result-hero"><div class="result-title">
        <span class="pill">GROWING UP / RESULT</span><p class="eyebrow">在这次养成实验里，你的孩子最像</p>
        <h1>${c.name}<span>小小的${c.title}</span></h1><p class="result-blurb">${outcome.line}</p>
        <div class="result-tags">${topInterests.map(([id]) => `<span># ${facetName(id)}</span>`).join('')}<span># 成长可能性</span></div>
        <p class="result-explain">你提供的兴趣机会，加上你回应孩子的方式，拼出了这条路线。${c.name} 的兴趣线索与这次选择相呼应，六维表现也参与了匹配。</p>
        <div class="result-actions"><button class="button dark" data-action="download-result" data-test="${t.id}">保存养成卡 ↓</button><button class="button" data-action="copy-result" data-test="${t.id}">复制结果 ↗</button></div>
        <p class="subtle">趣味养成推演，不代表真实成长预测。</p>
      </div><div class="result-art">${art(c)}<div class="result-seal">LITTLE<br><b>CHARACTER</b><span>${winner.similarity} / 100 契合度</span></div></div></section>
      <section class="growth-preview"><div><p class="eyebrow">A GLIMPSE OF TOMORROW</p><h2>某一天，你可能听见——</h2><blockquote>“${outcome.quote}”</blockquote><p class="subtle">按角色原型创作的想象对白</p></div><div><span class="pill">兴趣小彩蛋</span><h3>${outcome.hobby}</h3><p>这次可以想象的探索方向。角色的真实口味在下方原文里；儿童场景用适龄的活动来类比。</p></div></section>
      <section class="growth-seeds"><div class="section-head"><div><p class="eyebrow">THE CHOICES THAT LED HERE</p><h2>这条路线，是这样长出来的。</h2></div></div>
        <div class="seed-grid">${picks.map(p => `<article><span class="eyebrow">SCENE ${String(p.index+1).padStart(2,'0')}</span><h3>${esc(p.question.title)}</h3><blockquote>${esc(p.option.text)}</blockquote><p>${esc(p.option.seed)}</p><div class="tags">${Object.keys(p.option.interests).map(id=>`<span># ${facetName(id)}</span>`).join('')}</div></article>`).join('')}</div>
      </section>
      <div class="result-grid"><section class="result-dna"><p class="eyebrow">PERSONALITY IN THIS ROUTE</p><h2>性格有轮廓，爱好有方向。</h2>${radar(r.vector,'#ed683f',c.axes)}
        <div class="chart-key"><span><i></i> 这条养成路线</span><span><i class="dashed"></i> ${c.name}的原型</span></div>
        <div class="growth-interest-list">${topInterests.map(([id],i)=>`<span><small>0${i+1}</small>${facetName(id)}</span>`).join('')}</div>
        <p class="subtle">六维呈现回应与引导方式；兴趣另行参与匹配，不从雷达图推断爱好。</p></section>
        <section class="result-matches"><p class="eyebrow">THREE POSSIBLE CHARACTERS</p><h2>成长，也有别的支线。</h2>${r.matches.slice(0,3).map((m,i)=>{const x=byId(m.id);return `<a class="match-row" href="#character/${x.id}"><span class="match-number">0${i+1}</span>${miniAvatar(x.id)}<span><b>${x.name}</b><small>${x.title}</small></span><strong>${m.similarity}<small>/100</small></strong><i>↗</i></a>`;}).join('')}
        <p class="result-reading">${r.matches[1].distance-winner.distance<4?'前两名接近，说明这次选择同时接上了几种兴趣与性格。':'这些角色共享了你选择中的部分兴趣与性格，第一名只是最接近的一条支线。'}</p>
        <p class="subtle">综合契合度：兴趣 60% + 六维 40%，不是预测概率。</p></section></div>
      <section class="growth-sources"><p class="eyebrow">REAL INTERESTS, FROM THE CHAT</p><h2>为什么是 ${c.name}？看看 TA 喜欢什么。</h2><p>${esc(data.profiles[c.id].summary)}</p>
        ${evidence(c.id, esc)}<p class="subtle">已核对发送人与相邻语境；参与讨论不等于长期爱好，记录未提及也不等于不喜欢。</p>
        <a class="text-link" href="#character/${c.id}">查看 ${c.name} 的完整档案 ${arrow}</a></section>
      <section class="result-bottom"><div><h2>你给机会，孩子写自己的故事。</h2><p>这是一场基于群聊兴趣与角色原型的创作推演。真实的喜好会变化，也会有自己的选择。</p></div><button class="button" data-action="restart" data-test="${t.id}">换条养成路线 ↺</button></section>
    </div>`;
  }
  function copyText(t,r,c) {
    const top = Object.entries(r.interests||{}).sort((a,b)=>b[1]-a[1]).filter(([,value])=>value>0).slice(0,3);
    return `余音 YOIN | 你的孩子最像谁？\n这次养成路线最像：${c.name} · ${c.title}\n综合契合度 ${r.matches[0].similarity}/100\n兴趣方向：${top.map(([id])=>facetName(id)).join(' / ')}\n${t.outcomes[c.id].line}\n趣味养成推演，不代表真实成长预测。`;
  }
  window.YOIN_PARENTING = {result, evidence, copyText};
})();

/* Curated from the supplied chat CSV. Row numbers are 1-based data records,
 * excluding the header. Only the cited excerpts are bundled, not the raw chat.
 * Weights express editorial relevance, not population statistics or dislikes.
 */
window.YOIN_INTERESTS = {
  facets: [
    ['systems', '规则与策略'], ['team', '合作游戏'], ['story', '故事与阅读'],
    ['visual', '绘画与设计'], ['stage', '音乐与舞台'], ['role', '角色与想象'],
    ['outdoor', '出行与探索'], ['food', '料理与尝味'], ['collect', '造型与收藏'],
    ['variety', '综艺与生活记录'], ['sweet', '甜口尝味'], ['original', '清爽原味']
  ],
  profiles: {
    hxh: {
      weights: {systems: 3, visual: 2, variety: 3, original: 3},
      summary: '交换礼物综艺、迷宫探索的概念、可变形的角色设计，还有纯美式：会被有巧思、能聊出前情的东西吸引。',
      items: [
        {label: '《康熙》交换礼物节目', kind: '明确偏好', facets: ['variety'], evidence: [{row: 47602, time: '2024/2/6 22:14', text: '我喜欢看康熙每年礼物交换大会'}]},
        {label: '迷宫探索与玩法概念', kind: '明确偏好', facets: ['systems'], evidence: [{row: 99081, time: '2025/5/29 18:35', text: '其实我还挺喜欢世界树迷宫的概念的，如果后来在pc上，兴许能玩下来'}], note: '喜欢概念，同时说过没有玩完；不据此写成通关玩家。'},
        {label: '巧思型角色设计', kind: '明确偏好', facets: ['visual'], evidence: [{row: 64407, time: '2024/7/16 19:55', text: '我比较喜欢那个小哥弓拆双刀的设计'}]},
        {label: '纯美式', kind: '明确偏好', facets: ['original'], evidence: [{row: 69320, time: '2024/8/19 13:41', text: '我喜欢纯美式'}]}
      ]
    },
    wry: {
      weights: {stage: 3, visual: 1, story: 2, food: 3},
      summary: '会细看舞蹈队形、反复听喜欢的歌，也明确偏爱海外动画、热情推荐尝过的奶制品。',
      items: [
        {label: '音乐与舞蹈舞台', kind: '体验与评价', facets: ['stage', 'visual'], evidence: [{row: 446, time: '2023/2/16 10:18', text: '人家这个接力都特意给竖屏排了队型 而且这样直接看跳的也很好'}, {row: 451, time: '2023/2/16 10:19', text: '越听越好听 爱了'}]},
        {label: '海外动画电影', kind: '明确偏好', facets: ['story'], evidence: [{row: 92385, time: '2025/2/11 18:39', text: '但是我更喜欢洋鬼子的动画片'}]},
        {label: '奶制品与美食分享', kind: '体验与评价', facets: ['food'], evidence: [{row: 80212, time: '2024/10/28 15:44', text: '没吃过这么好吃的奶制品'}]}
      ]
    },
    ljq: {
      weights: {systems: 3, story: 3, team: 2, food: 2},
      summary: '会为小说的世界观设定兴奋，也聊任天堂游戏与朋友联机，并把好吃的店认真推荐给群友。',
      items: [
        {label: '长篇小说与世界观设定', kind: '明确偏好', facets: ['story', 'systems'], evidence: [{row: 122621, time: '2026/1/11 9:48', text: '属于设定上我看过的最牛逼的几本小说之一了'}, {row: 122623, time: '2026/1/11 9:49', text: '少有的让我感觉到“能想出这种设定也太他妈天才了吧”'}]},
        {label: '任天堂游戏与朋友联机', kind: '本人体验', facets: ['team', 'systems'], evidence: [{row: 29712, time: '2023/8/12 23:48', text: '我总共买过两次任亏，四个游戏分别是动森、任天堂明星大乱斗、喷喷3和马车8（刚换）'}, {row: 29715, time: '2023/8/12 23:49', text: '（我感觉这个得和现实朋友一起玩。。。'}], note: '购买不等于都喜欢；原文也提到独自玩大乱斗时不太能 get 到。'},
        {label: '蛙遇与聚餐安利', kind: '明确偏好', facets: ['food'], evidence: [{row: 116373, time: '2025/12/22 21:12', text: '像我吃到了好吃的蛙遇一直撺掇群友们去吃'}]}
      ]
    },
    lh: {
      weights: {visual: 3, role: 3, outdoor: 1, sweet: 1},
      summary: '留意原配色，也写过受作品影响的原创角色；会给食物直接短评，聊过自己的爬山体验。',
      items: [
        {label: '配色与角色外观', kind: '明确偏好', facets: ['visual'], evidence: [{row: 138029, time: '2026/3/31 14:14', text: '虽然我最喜欢原配色'}]},
        {label: '原创角色与队伍设定', kind: '本人体验', facets: ['role'], evidence: [{row: 134980, time: '2026/3/11 15:47', text: '甚至后面写oc的时候 队伍配置不知不觉向magi靠'}]},
        {label: '爬山出行', kind: '本人体验', facets: ['outdoor'], evidence: [{row: 19296, time: '2023/4/10 19:58', text: '我是爬山玩都还好'}], note: '只确认聊过体验，不扩写为重度户外爱好者。'},
        {label: '巧克力短评', kind: '单次评价', facets: ['sweet'], evidence: [{row: 43716, time: '2023/12/24 23:05', text: '昨天送那个巧克力好吃哎'}]}
      ]
    },
    zl: {
      weights: {visual: 3, stage: 3, role: 2, collect: 2},
      summary: '喜欢幻想系游戏的气质，关注偶像回归的新造型，也会认真评价手办的脸与外形。',
      items: [
        {label: '偶像回归与舞台造型', kind: '明确偏好', facets: ['stage', 'visual'], evidence: [{row: 5425, time: '2023/2/27 16:39', text: '我好寡，我想看回归，最近aespa的演唱会虽然也有，但是我想看新的'}, {row: 5426, time: '2023/2/27 16:39', text: '每次回归新装造才有意思啊'}]},
        {label: '幻想系游戏美学', kind: '明确偏好', facets: ['role', 'visual'], evidence: [{row: 64161, time: '2024/7/16 19:01', text: '都游戏了还是喜欢幻想系一点的'}]},
        {label: '手办外形鉴赏', kind: '审美评价', facets: ['collect'], evidence: [{row: 20948, time: '2023/4/22 13:22', text: '但是脸算真嗣手办里面最好看的了'}], note: '原文支持外形鉴赏，不据此推断购买或收藏数量。'}
      ]
    },
    qxn: {
      weights: {sweet: 3, food: 2, outdoor: 3, story: 1, systems: 1},
      summary: '明确偏爱甜甜的椰皇拿铁，主动计划出游、买电影票，也分享过在海拉鲁游玩的体验。',
      items: [
        {label: '椰香与甜口饮品', kind: '明确偏好', facets: ['sweet', 'food'], evidence: [{row: 55911, time: '2024/4/8 13:57', text: '点了一杯椰皇拿铁'}, {row: 55913, time: '2024/4/8 13:58', text: '已经荣升为我最爱的咖啡口味了'}, {row: 55916, time: '2024/4/8 14:01', text: '我要甜甜的'}]},
        {label: '旅游与出门体验', kind: '本人计划', facets: ['outdoor'], evidence: [{row: 77486, time: '2024/10/4 19:50', text: '我明天准备出去旅游了！'}]},
        {label: '和家人看电影', kind: '本人体验', facets: ['story'], evidence: [{row: 111837, time: '2025/11/27 18:15', text: '我已经买了电影票了，和我妈一起看'}]},
        {label: '海拉鲁探索', kind: '本人体验', facets: ['systems'], evidence: [{row: 23997, time: '2023/5/20 19:36', text: '我也在海拉鲁度过了'}, {row: 23998, time: '2023/5/20 19:36', text: '神奇的半天'}]}
      ]
    },
    chy: {
      weights: {story: 3, food: 3, outdoor: 2},
      summary: '会追悬疑剧、直接评价好不好看；遇到喜欢的吃食会认真安利，也会讨论旅行目的地。',
      items: [
        {label: '悬疑剧与剧情讨论', kind: '体验与评价', facets: ['story'], evidence: [{row: 145946, time: '2026/5/19 16:32', text: '唐诡好看'}, {row: 20358, time: '2023/4/19 15:38', text: '有看完尘封十三载的吗'}]},
        {label: '地方小吃与美食安利', kind: '明确偏好', facets: ['food'], evidence: [{row: 136946, time: '2026/3/25 15:13', text: '我发现了一家巨牛逼的麻辣烫，巨好吃', excerpt: true}]},
        {label: '旅行目的地', kind: '体验与评价', facets: ['outdoor'], evidence: [{row: 105235, time: '2025/9/11 17:55', text: '其次南法好玩好看'}]}
      ]
    },
    tkt: {
      weights: {team: 3, visual: 2, story: 2, food: 2},
      summary: '反复表达想玩三角洲，喜欢绝区零的武器外形，也在意角色塑造；萨莉亚是聊过的日常口味。',
      items: [
        {label: '三角洲与组队游戏', kind: '明确意愿', facets: ['team'], evidence: [{row: 71319, time: '2024/8/29 21:22', text: '好想玩三角洲行动'}, {row: 71322, time: '2024/8/29 21:23', text: '？但我是真想玩'}]},
        {label: '武器外形设计', kind: '明确偏好', facets: ['visual'], evidence: [{row: 64626, time: '2024/7/16 20:19', text: '我喜欢绝区零的武器'}]},
        {label: '有塑造的角色', kind: '明确偏好', facets: ['story'], evidence: [{row: 121728, time: '2026/1/7 18:35', text: '我喜欢塑造的好的类型'}]},
        {label: '萨莉亚', kind: '本人体验', facets: ['food'], evidence: [{row: 78783, time: '2024/10/15 10:12', text: '萨莉亚感觉还挺好吃'}, {row: 78785, time: '2024/10/15 10:12', text: '我大学每个两周吃一次，寝室旁边有一家'}]}
      ]
    },
    yhj: {
      weights: {story: 3, visual: 2},
      summary: '会从剧版继续补漫画，对角色的设计和风格也有明确喜爱；观看投入与视觉感受是比较清楚的线索。',
      items: [
        {label: '剧版与漫画追更', kind: '本人体验', facets: ['story'], evidence: [{row: 68245, time: '2024/8/7 18:41', text: '我最近也在看剧版和漫画了'}]},
        {label: '角色设计与风格', kind: '明确偏好', facets: ['visual'], evidence: [{row: 145422, time: '2026/5/19 11:41', text: '洛的设计和风格真的很喜欢'}]}
      ]
    },
    lyx: {
      weights: {story: 3, visual: 2, role: 2},
      summary: '明确喜欢寂静岭电影、驱魔少年与 FSR 的画风，也参与过角色服装的细节讨论。',
      items: [
        {label: '悬念故事与漫画', kind: '明确偏好', facets: ['story'], evidence: [{row: 6587, time: '2023/3/1 19:07', text: '寂静岭电影小弟还挺喜欢'}, {row: 134978, time: '2026/3/11 15:47', text: '我觉得驱魔少年挺好看的'}]},
        {label: 'FSR 的画风', kind: '明确偏好', facets: ['visual'], evidence: [{row: 35692, time: '2023/10/23 20:51', text: '这个画风还挺喜欢的'}, {row: 35693, time: '2023/10/23 20:52', text: '指fsr'}]},
        {label: '角色服装讨论', kind: '参与讨论', facets: ['role'], evidence: [{row: 93942, time: '2025/3/2 0:33', text: '有cos服'}], note: '语境是白魔 / 黑魔校服；只证明参与讨论，不代表本人出过这个角色。'}
      ]
    },
    yzz: {
      weights: {team: 3, systems: 2, original: 3},
      summary: '会约人玩游戏、提议桌游；口味上明确偏爱正山小种，不喜欢额外加糖。夸张的游戏安利文不当作真实游玩时长。',
      items: [
        {label: '组队游戏', kind: '主动邀约', facets: ['team'], evidence: [{row: 40, time: '2023/2/14 18:44', text: '但是有玩csgo的'}, {row: 41, time: '2023/2/14 18:44', text: '玩吗 贼刺激'}]},
        {label: '桌游聚会', kind: '主动提议', facets: ['systems', 'team'], evidence: [{row: 55048, time: '2024/3/29 11:28', text: '可以买个桌游玩桌游'}]},
        {label: '正山小种与不加糖', kind: '明确偏好', facets: ['original'], evidence: [{row: 38211, time: '2023/11/10 19:07', text: '都好喝 最喜欢正山小种'}, {row: 38239, time: '2023/11/10 19:13', text: '不喜欢甜的 他这个不放糖刚好'}]}
      ]
    }
  }
};

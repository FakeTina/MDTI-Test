const screen = document.querySelector("#screen");
const toast = document.querySelector("#toast");
const SHARE_URL = "https://faketina.github.io/MDTI-Test/";
const SAMPLE_STORAGE_KEY = "mdtiSampleStatsV1";
const STATS_API_BASE = "https://coffee.cloud-ip.cc/mdti-api";
const STATS_TIMEOUT_MS = 1800;

const codes = {
  LIST: {
    name: "表格驱邪师",
    full: "Lists Instead of Screaming Today",
    ratio: "12.6%",
    rarity: "清单常驻民",
    stamp: "已鉴定：有点靠谱",
    color: "blue",
    animalIcon: "🦫",
    animalName: "Excel 海狸",
    animalDesc: "一紧张就筑坝，把人生洪水拦成 A/B/C 三栏。",
    plantIcon: "🌿",
    plantName: "迷迭香",
    plantDesc: "闻起来很清醒，适合贴在备忘录旁边镇宅。",
    oneLiner: "你相信万物皆可制表，连崩溃也应该有编号。",
    trigger: "别人说“随便”，你脑内立刻弹出三张表：时间表、责任表、谁背锅表。",
    friendVerdict: "你不像朋友，像一个会说人话的 Notion 模板。",
    tinyBug: "你会把人生整理得像文件夹，但偶尔忘了自己不是压缩包。",
    charmTitle: "今日驱邪小动作",
    charmAction: "只写 3 条，不准合并单元格。",
    luckyItem: "方格纸",
    dailyTaboo: "把文件命名为“最终最终版”",
  },
  MUTE: {
    name: "省电菩萨",
    full: "Mentally Unavailable To Everyone",
    ratio: "14.1%",
    rarity: "低电量大户",
    stamp: "已鉴定：有点省电",
    color: "green",
    animalIcon: "🦔",
    animalName: "静音刺猬",
    animalDesc: "不是不理人，是刺已经进入省电模式。",
    plantIcon: "🌱",
    plantName: "含羞草",
    plantDesc: "别人一靠近，它就把自己折叠成勿扰模式。",
    oneLiner: "你的社交方式是：人在，但尽量不要被系统检测到。",
    trigger: "看到“在吗”两个字，你的电量会从 72% 直接掉到礼貌待机。",
    friendVerdict: "你不是失联，你是把自己活成了一个加载失败的头像。",
    tinyBug: "你不是冷漠，你只是把社交音量拧到只剩字幕。",
    charmTitle: "低电量护身符",
    charmAction: "预存一句退场词：我今天电量不太行，先撤。",
    luckyItem: "降噪耳机",
    dailyTaboo: "答应“就聊五分钟”",
  },
  LURK: {
    name: "已读潜艇",
    full: "Looks Until Replying Kills",
    ratio: "10.9%",
    rarity: "深水观察员",
    stamp: "已鉴定：有点深水",
    color: "navy",
    animalIcon: "🦑",
    animalName: "深海乌贼",
    animalDesc: "群聊水面风平浪静，海底已经掌握全部证据。",
    plantIcon: "🪴",
    plantName: "水培绿萝",
    plantDesc: "安静挂着，但根系知道很多不该知道的东西。",
    oneLiner: "你不是不在线，你只是选择不缴纳发言税。",
    trigger: "群里一有火药味，你不会下场，你会把潜望镜慢慢升起来。",
    friendVerdict: "你是群聊里的监控摄像头：不说话，但存档完整。",
    tinyBug: "你掌握太多边角料信息，但经常假装自己只是路过。",
    charmTitle: "潜水换气术",
    charmAction: "今天在一个群里发一次“收到”。",
    luckyItem: "透明手机壳",
    dailyTaboo: "只看不回还截图给别人分析",
  },
  MEME: {
    name: "弹幕祖师",
    full: "Mouth Emits Meme Energy",
    ratio: "13.5%",
    rarity: "梗浓度超标",
    stamp: "已鉴定：有点好玩",
    color: "yellow",
    animalIcon: "🦜",
    animalName: "梗王鹦鹉",
    animalDesc: "还没理解完事实，嘴已经替事实配好字幕。",
    plantIcon: "🌽",
    plantName: "爆米花玉米",
    plantDesc: "一受热就噼里啪啦，空气里全是段子味。",
    oneLiner: "任何破事进入你脑子，出来时都带字幕和音效。",
    trigger: "空气一尴尬，你的嘴会自动申请成为现场字幕组。",
    friendVerdict: "你不是在生活，你是在给生活做弹幕审核。",
    tinyBug: "你的共情还在加载，梗已经穿鞋出门了。",
    charmTitle: "嘴速封印术",
    charmAction: "重要场合先闭嘴 3 秒。",
    luckyItem: "空白表情包",
    dailyTaboo: "把所有沉默都补成梗",
  },
  SAVE: {
    name: "圆场消防栓",
    full: "Social Awkwardness Volunteer Extinguisher",
    ratio: "10.7%",
    rarity: "人情温控器",
    stamp: "已鉴定：有点可爱",
    color: "red",
    animalIcon: "🐕",
    animalName: "工牌边牧",
    animalDesc: "一听见冷场就开始牧羊，把所有尴尬赶回围栏。",
    plantIcon: "🍃",
    plantName: "常春藤",
    plantDesc: "哪里气氛塌了，它就爬过去把墙面糊住。",
    oneLiner: "空气一尴尬，你就开始自动喷水。",
    trigger: "只要有人冷场、破防、掉线，你就会自动打开社交消防栓。",
    friendVerdict: "你是社交场合的创可贴，哪破贴哪，贴完自己过敏。",
    tinyBug: "你太会接住别人，导致大家忘了你也可能正在漏水。",
    charmTitle: "冷场放生术",
    charmAction: "今天允许一次沉默自然死亡。",
    luckyItem: "一杯温水",
    dailyTaboo: "替所有人的嘴善后",
  },
  OOPS: {
    name: "天选倒霉蛋",
    full: "Often Orchestrates Personal Slapstick",
    ratio: "8.8%",
    rarity: "剧情体质",
    stamp: "已鉴定：有点凌乱",
    color: "orange",
    animalIcon: "🦌",
    animalName: "撞门小鹿",
    animalDesc: "不是没看路，是路突然决定参与剧情。",
    plantIcon: "🌵",
    plantName: "反扎仙人掌",
    plantDesc: "看起来很硬，实际上经常被自己的刺教育。",
    oneLiner: "你不是倒霉，你是生活的外包编剧。",
    trigger: "事情一旦出现“应该不会吧”，你就会被剧情抓去当主演。",
    friendVerdict: "你一出门，朋友就开始等后续，因为他们知道剧情会自己上门。",
    tinyBug: "你经常把小问题演成连续剧，还顺手续订第二季。",
    charmTitle: "防翻车小法事",
    charmAction: "出门前默念目的地三遍。",
    luckyItem: "备用充电线",
    dailyTaboo: "说“应该不会有事吧”",
  },
  IDEA: {
    name: "项目孵化怪",
    full: "Imagines Drafts, Evades Action",
    ratio: "11.3%",
    rarity: "项目孵化过度",
    stamp: "已鉴定：有点东西",
    color: "purple",
    animalIcon: "🐙",
    animalName: "八手章鱼",
    animalDesc: "八只手同时开工，最后一起去想新名字。",
    plantIcon: "🌬️",
    plantName: "蒲公英",
    plantDesc: "风一吹，48 个项目飘向 48 个未完成文件夹。",
    oneLiner: "你脑子里有 48 个项目，其中 47 个死在取名阶段。",
    trigger: "任何麻烦到你脑子里，都会先被包装成一个没人融资的项目。",
    friendVerdict: "朋友只是问你近况，你却当场孵化了一个没人投资的项目。",
    tinyBug: "你最稳定的产出是名字、口号、logo 和一个未完成文件夹。",
    charmTitle: "脑洞收摊术",
    charmAction: "今天只准养一个点子，其他全部关进停车场。",
    luckyItem: "便利贴",
    dailyTaboo: "半夜注册新账号",
  },
  CTRL: {
    name: "救火工具人",
    full: "Controls Trouble, Repairs Life",
    ratio: "15.4%",
    rarity: "高频维修工",
    stamp: "已鉴定：有点能修",
    color: "teal",
    animalIcon: "🐝",
    animalName: "扳手工蜂",
    animalDesc: "别人还在尖叫，它已经拿着螺丝刀飞过去了。",
    plantIcon: "🌱",
    plantName: "薄荷",
    plantDesc: "哪里乱长哪里，顺便把空气变得清醒一点。",
    oneLiner: "别人发疯时，你已经戴上隐形安全帽。",
    trigger: "别人开始尖叫时，你已经在问时间、预算、责任人和兜底方案。",
    friendVerdict: "你太会救火了，大家已经默认你不怕烫。",
    tinyBug: "你不是不慌，你只是习惯把慌张伪装成操作手册。",
    charmTitle: "停修一小时",
    charmAction: "今天至少把一个问题原封不动还给它的主人。",
    luckyItem: "小夹子",
    dailyTaboo: "主动接管全世界",
  },
  VOID: {
    name: "离线水母",
    full: "Vanishes Outside Immediate Decisions",
    ratio: "1.8%",
    rarity: "稀有漂浮物",
    stamp: "已鉴定：有点晕乎",
    color: "rare",
    rare: true,
    animalIcon: "🪼",
    animalName: "透明水母",
    animalDesc: "没有明显攻击性，但很难判断它现在在哪个频道。",
    plantIcon: "🪷",
    plantName: "空气凤梨",
    plantDesc: "不沾土也能活，主打一个不解释的悬浮。",
    oneLiner: "你不是反应慢，你像是从另一个频道接收世界。",
    trigger: "别人还在等你表态，你已经从这个频道轻轻漂走了。",
    friendVerdict: "你像一个随机刷新的隐藏事件，没人知道下一秒掉落什么。",
    tinyBug: "你像后台运行的隐藏程序，偶尔弹一句离谱但准确的提示。",
    charmTitle: "落地锚点",
    charmAction: "今天找一个具体动作：洗杯子、晒太阳、走 1200 步。",
    luckyItem: "透明杯",
    dailyTaboo: "连续三次说“随便”",
  },
};

const baseCodeKeys = Object.keys(codes).filter((code) => !codes[code].rare);

const questions = [
  {
    title: "你在会议上被点名，但刚才完全走神。",
    options: [
      { text: "复述最后听到的三个词，拼成结论", code: "CTRL" },
      { text: "低头翻资料，假装答案藏在屏幕里", code: "MUTE" },
      { text: "说“我先梳理一下”，把问题拆成三格", code: "LIST" },
      { text: "先点头说“对”，再等嘴自己施工", code: "OOPS" },
    ],
  },
  {
    title: "你不小心给朋友发了一个只有你自己懂的怪表情包。",
    options: [
      { text: "立刻撤回，假装手机刚才梦游了", code: "MUTE" },
      { text: "不解释，观察他能不能自己悟道", code: "LURK" },
      { text: "顺势宣布：这是小众文化内测版", code: "MEME" },
      { text: "补一句：发错了，但你也可以懂", code: "SAVE" },
    ],
  },
  {
    title: "你试了一件衣服，其实自己还没看明白，店员已经说：“这个真的很显气质，而且很适合你。”",
    options: [
      { text: "偷偷观察她是不是对谁都这么说", code: "LURK" },
      { text: "开始分析灯光、镜子、话术和价格", code: "LIST" },
      { text: "当场信了三秒，钱包开始松动", code: "OOPS" },
      { text: "想做一个“夸夸可信度评分 App”", code: "IDEA" },
    ],
  },
  {
    title: "聚餐突然冷场，所有人都开始低头看手机。",
    options: [
      { text: "主动开个新话题，把空气从冰箱捞出来", code: "SAVE" },
      { text: "也低头看手机，加入沉默互助会", code: "MUTE" },
      { text: "偷偷观察谁会第一个受不了冷场", code: "LURK" },
      { text: "说：这桌现在像低电量动物园", code: "MEME" },
    ],
  },
  {
    title: "快递柜还剩 3 小时过期，你已经躺下了。",
    options: [
      { text: "立刻起身，人生不能欠快递柜钱", code: "CTRL" },
      { text: "再躺五分钟，结果躺出一部连续剧", code: "OOPS" },
      { text: "想做一个小区代取互助组织", code: "IDEA" },
      { text: "问朋友能不能顺手捞我一命", code: "SAVE" },
    ],
  },
  {
    title: "朋友说：“你看我前男/女友新发的朋友圈什么意思？”",
    options: [
      { text: "拆图片、文案、标点和发布时间", code: "LURK" },
      { text: "先劝他别过度解读，把人从悬崖边拉回", code: "SAVE" },
      { text: "列三种可能：暗示你、气别人、纯发疯", code: "LIST" },
      { text: "建议直接问本人，别让脑补非法施工", code: "CTRL" },
    ],
  },
  {
    title: "你正认真打字，你家宠物突然踩上键盘，屏幕上出现一串神秘咒语。",
    options: [
      { text: "先抱走它，再抢救文档现场", code: "CTRL" },
      { text: "盯着那串乱码，怀疑它在通灵", code: "LURK" },
      { text: "发朋友：我家宠物开始办公了", code: "MEME" },
      { text: "想做宠物键盘防空系统", code: "IDEA" },
    ],
  },
  {
    title: "你看到楼下空铺转让，门口还贴着“旺铺”。",
    options: [
      { text: "算租金、人流、回本周期，越算越冷", code: "CTRL" },
      { text: "店名、菜单、开业海报已经在脑内出生", code: "IDEA" },
      { text: "发朋友：这里适合开失败学咖啡馆", code: "MEME" },
      { text: "开始蹲隔壁客流，像民间商业侦探", code: "LURK" },
    ],
  },
  {
    title: "你刚在群里吐槽完一个人，突然发现 TA 也在这个群里。",
    options: [
      { text: "补一句：刚才是梦话，大家别存档", code: "SAVE" },
      { text: "撤回，像给案发现场盖白布", code: "MUTE" },
      { text: "发个表情包，试图把事故变成梗", code: "OOPS" },
      { text: "立刻检查群名单，给眼睛开会", code: "LIST" },
    ],
  },
  {
    title: "你突然意识到自己今天什么都没干。",
    options: [
      { text: "写一篇《今天为什么没干》的复盘", code: "LIST" },
      { text: "宣布这是低功耗修复日，不是摆烂", code: "MEME" },
      { text: "赶紧做一件小事，给今天强行续命", code: "CTRL" },
      { text: "开始制定明日补救方案，假装今天可结转", code: "IDEA" },
    ],
  },
  {
    title: "聚餐时你迟到 5 分钟，一推门所有人都看你。",
    options: [
      { text: "快速道歉，先把现场伤害降到最低", code: "CTRL" },
      { text: "说：不好意思，刚才被红灯劫持了", code: "MEME" },
      { text: "低头坐下，努力把自己降级成家具", code: "MUTE" },
      { text: "抢过服务员的菜上桌，假装自己有用", code: "OOPS" },
    ],
  },
  {
    title: "你看到一篇《普通人如何三个月逆袭》，标题很土但手指很诚实。",
    options: [
      { text: "先收藏，献给未来那个上进版自己", code: "IDEA" },
      { text: "直接看评论区，那里才是真实人类样本", code: "LURK" },
      { text: "算课程价、时间成本，评价割韭菜刀锋利度", code: "CTRL" },
      { text: "转发给朋友：又有人三个月速通人生", code: "MEME" },
    ],
  },
  {
    title: "你和刚认识的人聊天，突然同时找不到话题，只剩杯子很忙。",
    options: [
      { text: "主动开新话题，救一下快沉的船", code: "SAVE" },
      { text: "突然问他星座，把尴尬拐进玄学", code: "OOPS" },
      { text: "说：我们现在是不是进入加载界面了", code: "MEME" },
      { text: "想做一个尴尬自动续话机", code: "IDEA" },
    ],
  },
  {
    title: "凌晨两点，你突然想给前男/女友发消息。",
    options: [
      { text: "写好不发，放到明天接受阳光审判", code: "CTRL" },
      { text: "打开聊天记录考古，看到自己想换星球", code: "LURK" },
      { text: "直接发“突然想到你”，把剧情交给命运", code: "OOPS" },
      { text: "关掉手机，假装这段情绪没有出生", code: "MUTE" },
    ],
  },
  {
    title: "凌晨三点，你家宠物突然开始跑酷、叫唤、扒门，像在开地下演唱会。",
    options: [
      { text: "装睡，假装这不是我的家", code: "MUTE" },
      { text: "起身排查：水、粮、厕所、阴谋", code: "LIST" },
      { text: "崩溃安抚，像给祖宗上夜班", code: "SAVE" },
      { text: "录下来发：家里闹钟长毛了", code: "MEME" },
    ],
  },
  {
    title: "你在朋友圈发了一句很有深意的话，五分钟后觉得太装。",
    options: [
      { text: "删掉，像清理一场精神案发现场", code: "MUTE" },
      { text: "开始盯谁点赞，谁可能看懂了", code: "LURK" },
      { text: "补一句：刚才被月亮夺舍了", code: "MEME" },
      { text: "改成“今日迷惑行为记录”，先自嘲保命", code: "LIST" },
    ],
  },
];

const state = {
  current: 0,
  scores: makeEmptyScores(),
  answers: [],
};

const homeStickers = [
  { icon: "🤡", text: "正常人请走员工通道" },
  { icon: "🧯", text: "本测试不负责修好你" },
  { icon: "🧠", text: "脑内弹窗过多" },
  { icon: "📎", text: "小毛病已归档" },
];

const sceneStickers = [
  { icon: "😶‍🌫️", text: "尴尬指数上升" },
  { icon: "👁️", text: "围观系统启动" },
  { icon: "🧨", text: "一句话引爆现场" },
  { icon: "🫠", text: "体面正在融化" },
  { icon: "📸", text: "可截图素材出现" },
  { icon: "🚨", text: "精神售后排队中" },
];

function makeEmptyScores() {
  return Object.fromEntries(baseCodeKeys.map((code) => [code, 0]));
}

function renderHome() {
  screen.innerHTML = `
    <div class="screen-inner home-screen">
      <div class="sticker-cloud" aria-hidden="true">
        ${homeStickers
          .map(
            (sticker, index) => `
              <div class="meme-sticker sticker-${index + 1}">
                <span>${sticker.icon}</span>
                <strong>${sticker.text}</strong>
              </div>
            `,
          )
          .join("")}
      </div>

      <div class="brand-row">
        <div class="brand-mark" aria-hidden="true">M</div>
        <div>
          <p class="eyebrow">OopsLab</p>
          <h1>OopsLab</h1>
        </div>
      </div>

      <div class="hero-copy">
        <h2 class="hero-title">
          <span>MDTI</span>
          <small>(MaD-Type-Indicator)</small>
          <span>人格测试</span>
        </h2>
        <p>16 个小场面，测出你脑内小剧场的默认发作方式。别装正常，正常人不会点进来。</p>
      </div>

      <div class="hero-warning">
        <span>检测范围</span>
        <strong>已读不回、强行圆场、深夜发疯、窥探小瓜、表格驱邪、命运翻车</strong>
      </div>

      <button class="primary-button" id="startButton">开始暴露</button>
      <p class="privacy-note">不收集个人信息，请放心使用</p>
    </div>
  `;

  screen.querySelector("#startButton").addEventListener("click", startQuiz);
}

function startQuiz() {
  state.current = 0;
  state.answers = [];
  state.scores = makeEmptyScores();
  renderQuestion();
}

function renderQuestion() {
  const question = questions[state.current];
  const progress = Math.round((state.current / questions.length) * 100);
  const sticker = sceneStickers[state.current % sceneStickers.length];

  screen.innerHTML = `
    <div class="screen-inner">
      <div class="question-meme-row">
        <div class="meme-face" aria-hidden="true">
          <span>${sticker.icon}</span>
        </div>
        <div class="scene-alert">
          <span>当前小场面</span>
          <strong>${sticker.text}</strong>
        </div>
      </div>

      <div class="progress-row">
        <div>
          <p class="eyebrow">Question ${String(state.current + 1).padStart(2, "0")} / ${questions.length}</p>
          <h2>${question.title}</h2>
        </div>
        <span>${progress}%</span>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
      <div class="option-list">
        ${question.options
          .map(
            (option, index) => `
              <button class="option-button" data-index="${index}">
                <span>${String.fromCharCode(65 + index)}</span>
                <strong>${option.text}</strong>
                <em>${getOptionTag(option.code)}</em>
              </button>
            `,
          )
          .join("")}
      </div>
    </div>
  `;

  screen.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => {
      const option = question.options[Number(button.dataset.index)];
      state.scores[option.code] += 3;
      state.answers.push(option.code);

      const pairedCode = getPairedCode(option.code, question.options);
      if (pairedCode) {
        state.scores[pairedCode] += 1;
      }

      state.current += 1;

      if (state.current >= questions.length) {
        renderResult();
        return;
      }

      renderQuestion();
    });
  });
}

function getPairedCode(primaryCode, options) {
  const visibleCodes = options.map((option) => option.code).filter((code) => code !== primaryCode);
  const lastPick = state.answers[state.answers.length - 2];

  if (lastPick && visibleCodes.includes(lastPick)) {
    return lastPick;
  }

  const pairMap = {
    LIST: "CTRL",
    CTRL: "LIST",
    MUTE: "LURK",
    LURK: "MUTE",
    MEME: "OOPS",
    OOPS: "MEME",
    SAVE: "CTRL",
    IDEA: "MEME",
  };

  return visibleCodes.includes(pairMap[primaryCode]) ? pairMap[primaryCode] : null;
}

function renderResult() {
  const result = getFinalCode();
  const item = codes[result.code];
  let displayedSample = recordSampleResult(result.code);

  screen.innerHTML = `
    <div class="screen-inner">
      <div class="result-grid">
        <article class="result-card result-${item.color}">
          <p class="eyebrow">OopsLab Result</p>
          <div class="verdict-stamp">${item.stamp}</div>
          <div class="code-line">
            <div class="code-badge">${result.code}</div>
            <div class="ratio-badge ${item.rare ? "rare-tag" : ""}">
              <span>当前样本占比</span>
              <strong id="sampleRatio">${displayedSample.ratio}</strong>
              <em id="sampleDetail">${displayedSample.detail}</em>
            </div>
          </div>
          <h2 class="result-name">${item.name}</h2>
          <p class="one-liner">${item.oneLiner}</p>

          <div class="portrait-grid">
            <div class="portrait-card">
              <span>${item.animalIcon}</span>
              <strong>${item.animalName}</strong>
              <em>动物画像</em>
              <p>${item.animalDesc}</p>
            </div>
            <div class="portrait-card">
              <span>${item.plantIcon}</span>
              <strong>${item.plantName}</strong>
              <em>植物画像</em>
              <p>${item.plantDesc}</p>
            </div>
          </div>
        </article>

        <aside class="report-card">
          <div class="diagnosis-card">
            <span>群众锐评</span>
            <strong>${getRoastLine(result.code)}</strong>
          </div>
          <div class="report-item">
            <span>英文装腔名</span>
            <strong>${item.full}</strong>
          </div>
          <div class="report-item">
            <span>触发时刻</span>
            <strong>${item.trigger}</strong>
          </div>
          <div class="report-item">
            <span>朋友判词</span>
            <strong>${item.friendVerdict}</strong>
          </div>
          <div class="report-item">
            <span>出厂设置</span>
            <strong>${item.tinyBug}</strong>
          </div>
          <div class="report-item charm-item">
            <span>${item.charmTitle}</span>
            <strong>${item.charmAction}</strong>
            <div class="charm-lines">
              <p><b>幸运物</b>${item.luckyItem}</p>
              <p><b>今日忌讳</b>${item.dailyTaboo}</p>
            </div>
          </div>
        </aside>
      </div>

      <div class="action-row">
        <button class="primary-button" id="copyButton">复制结果</button>
        <button class="secondary-button" id="copyImageButton">复制结果图</button>
        <button class="secondary-button" id="restartButton">再测一次</button>
      </div>
    </div>
  `;

  screen
    .querySelector("#copyButton")
    .addEventListener("click", () => copyResult(makeShareText(result.code, item, displayedSample)));
  screen.querySelector("#copyImageButton").addEventListener("click", () => copyResultImage(result.code, item, displayedSample));
  screen.querySelector("#restartButton").addEventListener("click", renderHome);

  syncPublicStats(result.code).then((publicSample) => {
    if (!publicSample) return;

    displayedSample = publicSample;
    const ratioNode = screen.querySelector("#sampleRatio");
    const detailNode = screen.querySelector("#sampleDetail");
    if (ratioNode) ratioNode.textContent = publicSample.ratio;
    if (detailNode) detailNode.textContent = publicSample.detail;
  });
}

function getOptionTag(code) {
  const tags = {
    LIST: "开始做法",
    MUTE: "原地消失",
    LURK: "暗中观察",
    MEME: "嘴先出警",
    SAVE: "人情救火",
    OOPS: "剧情升级",
    IDEA: "项目孵化",
    CTRL: "现场维修",
    VOID: "离线漂浮",
  };
  return tags[code] || "未知路线";
}

function getRoastLine(code) {
  const lines = {
    LIST: "你不是在整理人生，你是在给混乱办入职手续。",
    MUTE: "你的人生座右铭：能不出现，就不产生售后。",
    LURK: "你不是八卦，你只是尊重信息的自然流动。",
    MEME: "世界给你苦难，你给世界加字幕。",
    SAVE: "你是人类尴尬场的共享充电宝，用完还不一定还。",
    OOPS: "别人是生活，你是连续剧，还经常自动续订。",
    IDEA: "你不是想太多，你是脑子里开了孵化器但没交电费。",
    CTRL: "你不是靠谱，你是被全世界临时征用的维修口。",
    VOID: "你像一个隐藏彩蛋，点开之后不一定能退出。",
  };
  return lines[code] || "样本过于离谱，研究员短暂沉默。";
}

function shouldUseRare() {
  const uniqueCount = new Set(state.answers).size;
  const ranked = getRankedCodes();
  const top = ranked[0]?.score || 0;
  const second = ranked[1]?.score || 0;
  const third = ranked[2]?.score || 0;

  return uniqueCount >= 7 && top <= 7 && top - third <= 2 && second >= 5;
}

function getFinalCode() {
  if (shouldUseRare()) {
    return { code: "VOID", score: 1 };
  }
  return getRankedCodes()[0];
}

function getRankedCodes() {
  return Object.entries(state.scores)
    .map(([code, score]) => ({ code, score }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return state.answers.lastIndexOf(b.code) - state.answers.lastIndexOf(a.code);
    });
}

function readSampleStats() {
  const stats = Object.fromEntries(Object.keys(codes).map((code) => [code, 0]));

  try {
    const raw = window.localStorage?.getItem(SAMPLE_STORAGE_KEY);
    if (!raw) return stats;

    const stored = JSON.parse(raw);
    Object.keys(stats).forEach((code) => {
      const value = Number(stored?.[code]);
      stats[code] = Number.isFinite(value) && value > 0 ? Math.floor(value) : 0;
    });
  } catch {
    return stats;
  }

  return stats;
}

function recordSampleResult(code) {
  const stats = readSampleStats();
  stats[code] = (stats[code] || 0) + 1;

  try {
    window.localStorage?.setItem(SAMPLE_STORAGE_KEY, JSON.stringify(stats));
  } catch {
    // 统计只是本机展示，存不了也不影响测试结果。
  }

  return makeSampleSummary(stats, code, "本机");
}

function makeSampleSummary(stats, code, scope) {
  const total = Object.values(stats).reduce((sum, value) => sum + value, 0);
  const count = stats[code] || 0;
  const ratio = total > 0 ? formatPercent((count / total) * 100) : "0%";
  const detail = total <= 1 ? `${scope}首份样本` : `${count}/${total} ${scope}样本`;

  return { count, total, ratio, detail, scope };
}

function formatPercent(value) {
  if (value >= 10 || value === 0 || value === 100) {
    return `${Math.round(value)}%`;
  }

  return `${value.toFixed(1).replace(/\.0$/, "")}%`;
}

function makeCharmSummary(item) {
  return `${item.charmAction} 幸运物：${item.luckyItem}｜今日忌讳：${item.dailyTaboo}`;
}

async function syncPublicStats(code) {
  if (!STATS_API_BASE.trim()) return null;

  try {
    await postPublicResult(code);
    return await fetchPublicStats(code);
  } catch (error) {
    console.warn("Public stats skipped:", error);
    return null;
  }
}

async function postPublicResult(code) {
  const response = await fetchWithTimeout(makeStatsApiUrl("submit"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  });

  if (!response.ok) {
    throw new Error(`Submit failed: ${response.status}`);
  }
}

async function fetchPublicStats(code) {
  const response = await fetchWithTimeout(makeStatsApiUrl("stats"), {
    method: "GET",
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Stats failed: ${response.status}`);
  }

  return normalizePublicStats(await response.json(), code);
}

function normalizePublicStats(data, code) {
  const source = data?.counts || data?.results || data || {};
  const stats = Object.fromEntries(
    Object.keys(codes).map((key) => {
      const value = Number(source[key]);
      return [key, Number.isFinite(value) && value > 0 ? Math.floor(value) : 0];
    }),
  );

  return makeSampleSummary(stats, code, "全站");
}

function makeStatsApiUrl(path) {
  return `${STATS_API_BASE.trim().replace(/\/+$/, "")}/${path}`;
}

function fetchWithTimeout(url, options) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), STATS_TIMEOUT_MS);

  return fetch(url, {
    ...options,
    cache: "no-store",
    signal: controller.signal,
  }).finally(() => window.clearTimeout(timeout));
}

function makeShareText(code, item, sample) {
  return `我的 MDTI 是 ${code}｜${item.name}
当前样本占比：${sample.ratio}（${sample.detail}）
${item.oneLiner}
动物画像：${item.animalIcon} ${item.animalName}，${item.animalDesc}
植物画像：${item.plantIcon} ${item.plantName}，${item.plantDesc}
${item.charmTitle}：${item.charmAction}
幸运物：${item.luckyItem}
今日忌讳：${item.dailyTaboo}`;
}

async function copyResult(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("结果已复制，可以发给那个最像的人。");
  } catch {
    showToast("浏览器不让复制，但截图也很适合传播。");
  }
}

async function copyResultImage(code, item, sample) {
  const button = screen.querySelector("#copyImageButton");
  const originalText = button?.textContent || "复制结果图";

  try {
    if (button) {
      button.disabled = true;
      button.textContent = "生成中";
    }

    const canvas = createResultCanvas(code, item, sample);
    const blob = await canvasToBlob(canvas);

    if (navigator.clipboard?.write && window.ClipboardItem) {
      try {
        await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
        showToast("结果图已复制，去群里投放你的物种证据。");
        return;
      } catch {
        downloadBlob(blob, `MDTI-${code}-${item.name}.png`);
        showToast("浏览器没放行复制图片，已下载结果图。");
        return;
      }
    }

    downloadBlob(blob, `MDTI-${code}-${item.name}.png`);
    showToast("浏览器不支持复制图片，已下载结果图。");
  } catch (error) {
    console.error(error);
    showToast("图片复制失败，先用截图保住证据。");
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = originalText;
    }
  }
}

function createResultCanvas(code, item, sample) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1680;

  const ctx = canvas.getContext("2d");
  const ink = "#202322";
  const muted = "#626865";
  const paper = "#fbfaf3";
  const white = "#fffdf8";
  const red = "#ef5b4c";
  const yellow = "#f0bb3d";
  const palette = {
    blue: "#e8f0ff",
    green: "#e5f3ec",
    navy: "#e8ecf7",
    yellow: "#fff3c9",
    red: "#ffe4df",
    orange: "#ffe8d2",
    purple: "#f0e7ff",
    teal: "#dcf5f4",
    rare: ink,
  };
  const accent = {
    blue: "#3f78d8",
    green: "#2e8b68",
    navy: "#425171",
    yellow: "#f0bb3d",
    red: "#ef5b4c",
    orange: "#ed8a35",
    purple: "#8b65c9",
    teal: "#1c8b8f",
    rare: "#f0bb3d",
  };
  const cardFill = palette[item.color] || palette.blue;
  const accentColor = accent[item.color] || accent.blue;
  const isRare = Boolean(item.rare);
  const cardText = isRare ? white : ink;
  const softText = isRare ? "rgba(255, 253, 248, 0.78)" : muted;

  ctx.textBaseline = "top";
  ctx.fillStyle = "#e8ece3";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawDots(ctx);

  drawRoundedBox(ctx, 42, 42, 996, 1596, 24, paper, ink, 6);
  ctx.setLineDash([14, 12]);
  drawRoundedStroke(ctx, 64, 64, 952, 1552, 18, "rgba(32, 35, 34, 0.26)", 3);
  ctx.setLineDash([]);

  drawRoundedBox(ctx, 84, 82, 84, 84, 16, red, ink, 5);
  drawText(ctx, "M", 111, 98, 52, 1000, white);
  drawText(ctx, "OopsLab", 196, 82, 28, 1000, muted);
  drawText(ctx, "MDTI", 194, 116, 62, 1000, ink);
  drawText(ctx, "(MaD-Type-Indicator) 人格测试", 360, 145, 24, 950, muted);

  drawRoundedBox(ctx, 84, 220, 912, 1162, 26, cardFill, ink, 6);
  ctx.fillStyle = accentColor;
  ctx.fillRect(84, 220, 912, 20);

  drawText(ctx, "OOPSLAB RESULT", 124, 272, 24, 1000, softText);
  drawRoundedBox(ctx, 688, 258, 248, 62, 18, isRare ? yellow : white, ink, 5);
  drawText(ctx, item.stamp, 716, 276, 25, 1000, ink);

  drawRoundedBox(ctx, 124, 352, 302, 156, 18, isRare ? white : ink, ink, 5);
  drawCenteredText(ctx, code, 124, 374, 302, 96, 1000, isRare ? ink : white);
  drawRoundedBox(ctx, 456, 352, 250, 156, 18, white, ink, 5);
  drawText(ctx, "当前样本占比", 486, 376, 22, 1000, muted);
  drawText(ctx, sample.ratio, 486, 414, 58, 1000, ink);
  drawText(ctx, sample.detail, 486, 476, 22, 950, muted);

  const nameSize = fitFontSize(ctx, item.name, 812, 96, 62, 1000);
  drawText(ctx, item.name, 124, 558, nameSize, 1000, cardText);
  drawWrappedText(ctx, item.oneLiner, 126, 668, 808, 42, 30, 950, cardText, 2);

  drawRoundedBox(ctx, 124, 782, 392, 250, 18, white, ink, 5);
  drawText(ctx, item.animalIcon, 154, 812, 70, 900, ink);
  drawText(ctx, item.animalName, 252, 818, 34, 1000, ink);
  drawText(ctx, "动物画像", 254, 862, 21, 1000, muted);
  drawWrappedText(ctx, item.animalDesc, 154, 922, 320, 32, 25, 850, ink, 3);

  drawRoundedBox(ctx, 556, 782, 392, 250, 18, white, ink, 5);
  drawText(ctx, item.plantIcon, 586, 812, 70, 900, ink);
  drawText(ctx, item.plantName, 684, 818, 34, 1000, ink);
  drawText(ctx, "植物画像", 686, 862, 21, 1000, muted);
  drawWrappedText(ctx, item.plantDesc, 586, 922, 320, 32, 25, 850, ink, 3);

  drawShareNote(ctx, 124, 1072, 824, "群众锐评", getRoastLine(code), red);
  drawShareNote(ctx, 124, 1172, 824, "朋友判词", item.friendVerdict, accentColor);
  drawShareNote(ctx, 124, 1272, 824, item.charmTitle, makeCharmSummary(item), yellow);

  drawText(ctx, `我的 MDTI 是 ${code}｜${item.name}`, 84, 1444, 34, 1000, ink);
  drawWrappedText(ctx, "把这张图发出去，让朋友判断你到底是人格，还是事故现场。", 84, 1496, 690, 32, 24, 850, muted, 2);
  drawQrBadge(ctx, 824, 1426, SHARE_URL, ink, white, muted);

  return canvas;
}

function drawQrBadge(ctx, x, y, url, ink, white, muted) {
  drawCenteredText(ctx, "扫码来测", x, y - 30, 172, 22, 1000, muted);
  drawRoundedBox(ctx, x, y, 172, 172, 18, white, ink, 4);
  drawQrCode(ctx, url, x + 12, y + 12, 4, ink, white);
}

function drawQrCode(ctx, text, x, y, scale, dark, light) {
  const modules = makeQrModules(text);

  ctx.fillStyle = light;
  ctx.fillRect(x, y, (modules.length + 8) * scale, (modules.length + 8) * scale);
  ctx.fillStyle = dark;

  modules.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      if (value) {
        ctx.fillRect(x + (colIndex + 4) * scale, y + (rowIndex + 4) * scale, scale, scale);
      }
    });
  });
}

function makeQrModules(text) {
  const version = 3;
  const size = version * 4 + 17;
  const dataCodewords = 55;
  const errorCodewords = 15;
  const mask = 0;
  const modules = Array.from({ length: size }, () => Array(size).fill(false));
  const reserved = Array.from({ length: size }, () => Array(size).fill(false));

  const set = (x, y, value, isReserved = true) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return;
    modules[y][x] = Boolean(value);
    if (isReserved) reserved[y][x] = true;
  };

  addFinder(modules, reserved, 0, 0);
  addFinder(modules, reserved, size - 7, 0);
  addFinder(modules, reserved, 0, size - 7);
  addAlignment(modules, reserved, 22, 22);
  addTimingPatterns(modules, reserved);
  set(8, size - 8, true);

  const codewords = makeQrCodewords(text, dataCodewords, errorCodewords);
  const bits = codewords.flatMap((byte) =>
    Array.from({ length: 8 }, (_, index) => ((byte >>> (7 - index)) & 1) === 1),
  );

  let bitIndex = 0;
  let upward = true;
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right -= 1;

    for (let vertical = 0; vertical < size; vertical += 1) {
      const y = upward ? size - 1 - vertical : vertical;

      for (let offset = 0; offset < 2; offset += 1) {
        const x = right - offset;
        if (reserved[y][x]) continue;

        const bit = bitIndex < bits.length ? bits[bitIndex] : false;
        const masked = bit !== ((x + y) % 2 === mask);
        set(x, y, masked, false);
        bitIndex += 1;
      }
    }

    upward = !upward;
  }

  addFormatBits(modules, reserved, mask);
  return modules;
}

function addFinder(modules, reserved, left, top) {
  const size = modules.length;
  const set = (x, y, value) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return;
    modules[y][x] = Boolean(value);
    reserved[y][x] = true;
  };

  for (let y = -1; y <= 7; y += 1) {
    for (let x = -1; x <= 7; x += 1) {
      const xx = left + x;
      const yy = top + y;
      const isFinder =
        x >= 0 && x <= 6 && y >= 0 && y <= 6 && (x === 0 || x === 6 || y === 0 || y === 6 || (x >= 2 && x <= 4 && y >= 2 && y <= 4));
      set(xx, yy, isFinder);
    }
  }
}

function addAlignment(modules, reserved, centerX, centerY) {
  for (let y = -2; y <= 2; y += 1) {
    for (let x = -2; x <= 2; x += 1) {
      const xx = centerX + x;
      const yy = centerY + y;
      modules[yy][xx] = Math.max(Math.abs(x), Math.abs(y)) !== 1;
      reserved[yy][xx] = true;
    }
  }
}

function addTimingPatterns(modules, reserved) {
  const size = modules.length;
  for (let i = 8; i < size - 8; i += 1) {
    const value = i % 2 === 0;
    modules[6][i] = value;
    modules[i][6] = value;
    reserved[6][i] = true;
    reserved[i][6] = true;
  }
}

function addFormatBits(modules, reserved, mask) {
  const size = modules.length;
  const errorLevelL = 0b01;
  const data = (errorLevelL << 3) | mask;
  const bits = makeFormatBits(data);
  const bit = (index) => ((bits >>> index) & 1) === 1;
  const set = (x, y, value) => {
    modules[y][x] = value;
    reserved[y][x] = true;
  };

  for (let i = 0; i <= 5; i += 1) set(8, i, bit(i));
  set(8, 7, bit(6));
  set(8, 8, bit(7));
  set(7, 8, bit(8));
  for (let i = 9; i < 15; i += 1) set(14 - i, 8, bit(i));
  for (let i = 0; i < 8; i += 1) set(size - 1 - i, 8, bit(i));
  for (let i = 8; i < 15; i += 1) set(8, size - 15 + i, bit(i));
  set(8, size - 8, true);
}

function makeFormatBits(data) {
  let bits = data << 10;
  const generator = 0x537;

  for (let bit = highestBit(bits); bit >= 10; bit = highestBit(bits)) {
    bits ^= generator << (bit - 10);
  }

  return ((data << 10) | bits) ^ 0x5412;
}

function makeQrCodewords(text, dataCodewords, errorCodewords) {
  const bytes = Array.from(new TextEncoder().encode(text));
  const bits = [];
  appendBits(bits, 0b0100, 4);
  appendBits(bits, bytes.length, 8);
  bytes.forEach((byte) => appendBits(bits, byte, 8));

  if (bits.length > dataCodewords * 8) {
    throw new Error("QR content is too long.");
  }

  appendBits(bits, 0, Math.min(4, dataCodewords * 8 - bits.length));
  while (bits.length % 8 !== 0) bits.push(false);

  const data = [];
  for (let i = 0; i < bits.length; i += 8) {
    data.push(bitsToByte(bits.slice(i, i + 8)));
  }

  for (let pad = 0xec; data.length < dataCodewords; pad = pad === 0xec ? 0x11 : 0xec) {
    data.push(pad);
  }

  return [...data, ...makeErrorCorrection(data, errorCodewords)];
}

function appendBits(bits, value, length) {
  for (let i = length - 1; i >= 0; i -= 1) {
    bits.push(((value >>> i) & 1) === 1);
  }
}

function bitsToByte(bits) {
  return bits.reduce((value, bit) => (value << 1) | (bit ? 1 : 0), 0);
}

function makeErrorCorrection(data, degree) {
  const generator = makeGeneratorPolynomial(degree);
  const result = Array(degree).fill(0);

  data.forEach((byte) => {
    const factor = byte ^ result.shift();
    result.push(0);
    generator.slice(1).forEach((coefficient, index) => {
      result[index] ^= gfMultiply(coefficient, factor);
    });
  });

  return result;
}

function makeGeneratorPolynomial(degree) {
  let result = [1];
  for (let i = 0; i < degree; i += 1) {
    const next = [1, gfPow(i)];
    const product = Array(result.length + 1).fill(0);

    result.forEach((left, leftIndex) => {
      next.forEach((right, rightIndex) => {
        product[leftIndex + rightIndex] ^= gfMultiply(left, right);
      });
    });

    result = product;
  }
  return result;
}

function gfMultiply(left, right) {
  if (left === 0 || right === 0) return 0;
  return gfPow(gfLog(left) + gfLog(right));
}

function gfPow(power) {
  let value = 1;
  for (let i = 0; i < power % 255; i += 1) {
    value <<= 1;
    if (value & 0x100) value ^= 0x11d;
  }
  return value;
}

function gfLog(value) {
  let current = 1;
  for (let i = 0; i < 255; i += 1) {
    if (current === value) return i;
    current <<= 1;
    if (current & 0x100) current ^= 0x11d;
  }
  throw new Error("Invalid GF value.");
}

function highestBit(value) {
  let bit = -1;
  while (value > 0) {
    value >>>= 1;
    bit += 1;
  }
  return bit;
}

function drawDots(ctx) {
  ctx.fillStyle = "rgba(32, 35, 34, 0.14)";
  for (let y = 20; y < ctx.canvas.height; y += 30) {
    for (let x = 20; x < ctx.canvas.width; x += 30) {
      ctx.beginPath();
      ctx.arc(x, y, 2.1, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function drawShareNote(ctx, x, y, width, label, text, color) {
  const ink = "#202322";
  const muted = "#626865";
  drawRoundedBox(ctx, x, y, width, 82, 18, "#fffdf8", ink, 4);
  drawRoundedBox(ctx, x + 18, y + 20, 132, 42, 999, color, ink, 3);
  drawCenteredText(ctx, label, x + 18, y + 30, 132, 19, 950, ink);
  drawWrappedText(ctx, text, x + 176, y + 16, width - 206, 27, 21, 900, muted, 2);
}

function drawRoundedBox(ctx, x, y, width, height, radius, fill, stroke, lineWidth) {
  drawRoundedPath(ctx, x, y, width, height, radius);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = stroke;
  ctx.stroke();
}

function drawRoundedStroke(ctx, x, y, width, height, radius, stroke, lineWidth) {
  drawRoundedPath(ctx, x, y, width, height, radius);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = stroke;
  ctx.stroke();
}

function drawRoundedPath(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawText(ctx, text, x, y, size, weight, color) {
  ctx.font = `${weight} ${size}px Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif`;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
}

function drawCenteredText(ctx, text, x, y, width, size, weight, color) {
  ctx.font = `${weight} ${size}px Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif`;
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(text, x + width / 2, y);
  ctx.textAlign = "left";
}

function fitFontSize(ctx, text, maxWidth, startSize, minSize, weight) {
  for (let size = startSize; size >= minSize; size -= 2) {
    ctx.font = `${weight} ${size}px Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif`;
    if (ctx.measureText(text).width <= maxWidth) return size;
  }
  return minSize;
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, size, weight, color, maxLines) {
  ctx.font = `${weight} ${size}px Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif`;
  ctx.fillStyle = color;

  const lines = wrapCanvasText(ctx, text, maxWidth);
  const visibleLines = maxLines ? lines.slice(0, maxLines) : lines;

  if (maxLines && lines.length > maxLines) {
    visibleLines[visibleLines.length - 1] = trimToWidth(ctx, `${visibleLines[visibleLines.length - 1]}...`, maxWidth);
  }

  visibleLines.forEach((line, index) => {
    ctx.fillText(line, x, y + index * lineHeight);
  });

  return y + visibleLines.length * lineHeight;
}

function wrapCanvasText(ctx, text, maxWidth) {
  const chars = Array.from(String(text).replace(/\s+/g, " "));
  const lines = [];
  let line = "";

  chars.forEach((char) => {
    const testLine = line + char;
    if (line && ctx.measureText(testLine).width > maxWidth) {
      lines.push(line);
      line = char.trimStart();
      return;
    }
    line = testLine;
  });

  if (line) lines.push(line);
  return lines;
}

function trimToWidth(ctx, text, maxWidth) {
  let output = text;
  while (output.length > 1 && ctx.measureText(output).width > maxWidth) {
    output = `${output.slice(0, -4)}...`;
  }
  return output;
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
        return;
      }
      reject(new Error("Canvas export failed."));
    }, "image/png");
  });
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName.replace(/[\\/:*?"<>|]/g, "-");
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

renderHome();

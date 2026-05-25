const screen = document.querySelector("#screen");
const toast = document.querySelector("#toast");

const codes = {
  LIST: {
    name: "表格驱邪师",
    full: "Lists Instead of Screaming Today",
    ratio: "12.6%",
    rarity: "清单常驻民",
    color: "blue",
    animalIcon: "🦫",
    animalName: "Excel 海狸",
    animalDesc: "一紧张就筑坝，把人生洪水拦成 A/B/C 三栏。",
    plantIcon: "🌿",
    plantName: "迷迭香",
    plantDesc: "闻起来很清醒，适合贴在备忘录旁边镇宅。",
    oneLiner: "你相信万物皆可制表，连崩溃也应该有编号。",
    trigger: "别人说“我乱了”，你会本能地问：乱在哪里？有截图吗？能不能按时间线说？",
    friendVerdict: "你不像朋友，像一个会说人话的 Notion 模板。",
    tinyBug: "计划写完的瞬间，你会短暂误以为事情已经解决。",
    charmTitle: "今日驱邪小动作",
    charm: "只写 3 条，不准合并单元格。幸运物是方格纸，今日忌讳：把文件命名为“最终最终版”。",
  },
  MUTE: {
    name: "省电菩萨",
    full: "Mentally Unavailable To Everyone",
    ratio: "14.1%",
    rarity: "低电量大户",
    color: "green",
    animalIcon: "🦔",
    animalName: "静音刺猬",
    animalDesc: "不是不理人，是刺已经进入省电模式。",
    plantIcon: "🌱",
    plantName: "含羞草",
    plantDesc: "别人一靠近，它就把自己折叠成勿扰模式。",
    oneLiner: "你的社交方式是：人在，但尽量不要被系统检测到。",
    trigger: "看到“在吗”“来不来”“方便吗”，你会先把手机扣下，让问题自己冷静。",
    friendVerdict: "你不是失联，你是把自己活成了一个加载失败的头像。",
    tinyBug: "你经常靠沉默躲过小事，然后收获一个更大的解释任务。",
    charmTitle: "低电量护身符",
    charm: "预存一句退场词：我今天电量不太行，先撤。幸运物是降噪耳机，今日忌讳：答应“就聊五分钟”。",
  },
  LURK: {
    name: "已读潜艇",
    full: "Looks Until Replying Kills",
    ratio: "10.9%",
    rarity: "深水观察员",
    color: "navy",
    animalIcon: "🦑",
    animalName: "深海乌贼",
    animalDesc: "群聊水面风平浪静，海底已经掌握全部证据。",
    plantIcon: "🪴",
    plantName: "水培绿萝",
    plantDesc: "安静挂着，但根系知道很多不该知道的东西。",
    oneLiner: "你不是不在线，你只是选择不缴纳发言税。",
    trigger: "群里开始吵，你会从第一句看到最后一句，但绝不轻易贡献一个标点。",
    friendVerdict: "你是群聊里的监控摄像头：不说话，但存档完整。",
    tinyBug: "你偶尔说一句“我觉得可以”，大家会先怀疑你被盗号。",
    charmTitle: "潜水换气术",
    charm: "今天在一个群里发一次“收到”。幸运物是透明手机壳，今日忌讳：只看不回还截图给别人分析。",
  },
  MEME: {
    name: "弹幕祖师",
    full: "Mouth Emits Meme Energy",
    ratio: "13.5%",
    rarity: "梗浓度超标",
    color: "yellow",
    animalIcon: "🦜",
    animalName: "梗王鹦鹉",
    animalDesc: "还没理解完事实，嘴已经替事实配好字幕。",
    plantIcon: "🌽",
    plantName: "爆米花玉米",
    plantDesc: "一受热就噼里啪啦，空气里全是段子味。",
    oneLiner: "任何破事进入你脑子，出来时都带字幕和音效。",
    trigger: "越尴尬的场面，你越能在三秒内想出一句“这不就是……”",
    friendVerdict: "你不是在生活，你是在给生活做弹幕审核。",
    tinyBug: "有时候笑点出警太快，共情还在路上堵车。",
    charmTitle: "嘴速封印术",
    charm: "重要场合先闭嘴 3 秒。幸运物是空白表情包，今日忌讳：把所有沉默都补成梗。",
  },
  SAVE: {
    name: "圆场消防栓",
    full: "Social Awkwardness Volunteer Extinguisher",
    ratio: "10.7%",
    rarity: "人情温控器",
    color: "red",
    animalIcon: "🐕",
    animalName: "工牌边牧",
    animalDesc: "一听见冷场就开始牧羊，把所有尴尬赶回围栏。",
    plantIcon: "🍃",
    plantName: "常春藤",
    plantDesc: "哪里气氛塌了，它就爬过去把墙面糊住。",
    oneLiner: "空气一尴尬，你就开始自动喷水。",
    trigger: "饭桌突然安静、群里没人接话、朋友快哭了，你会立刻上线补一句。",
    friendVerdict: "你是社交场合的创可贴，哪破贴哪，贴完自己过敏。",
    tinyBug: "你救完所有人，回家才发现自己一直在冒烟。",
    charmTitle: "冷场放生术",
    charm: "今天允许一次沉默自然死亡。幸运物是一杯温水，今日忌讳：替所有人的嘴善后。",
  },
  OOPS: {
    name: "天选倒霉蛋",
    full: "Often Orchestrates Personal Slapstick",
    ratio: "8.8%",
    rarity: "剧情体质",
    color: "orange",
    animalIcon: "🦌",
    animalName: "撞门小鹿",
    animalDesc: "不是没看路，是路突然决定参与剧情。",
    plantIcon: "🌵",
    plantName: "反扎仙人掌",
    plantDesc: "看起来很硬，实际上经常被自己的刺教育。",
    oneLiner: "你不是倒霉，你是生活的外包编剧。",
    trigger: "别人坐错车会烦，你坐错车会顺便收获一个三幕式故事。",
    friendVerdict: "你一出门，朋友就开始等后续，因为他们知道剧情会自己上门。",
    tinyBug: "你有时会为了节目效果，低估事情真的需要处理。",
    charmTitle: "防翻车小法事",
    charm: "出门前默念目的地三遍。幸运物是备用充电线，今日忌讳：说“应该不会有事吧”。",
  },
  IDEA: {
    name: "项目孵化怪",
    full: "Imagines Drafts, Evades Action",
    ratio: "11.3%",
    rarity: "项目孵化过度",
    color: "purple",
    animalIcon: "🐙",
    animalName: "八手章鱼",
    animalDesc: "八只手同时开工，最后一起去想新名字。",
    plantIcon: "🌬️",
    plantName: "蒲公英",
    plantDesc: "风一吹，48 个项目飘向 48 个未完成文件夹。",
    oneLiner: "你脑子里有 48 个项目，其中 47 个死在取名阶段。",
    trigger: "看到错单、空铺、朋友失恋、满减规则，你都能闻到商业模式的味道。",
    friendVerdict: "朋友只是问你近况，你却当场孵化了一个没人投资的项目。",
    tinyBug: "你的项目最完整的部分通常是名字、口号和第一条朋友圈。",
    charmTitle: "脑洞收摊术",
    charm: "今天只准养一个点子，其他全部关进停车场。幸运物是便利贴，今日忌讳：半夜注册新账号。",
  },
  CTRL: {
    name: "救火工具人",
    full: "Controls Trouble, Repairs Life",
    ratio: "15.4%",
    rarity: "高频维修工",
    color: "teal",
    animalIcon: "🐝",
    animalName: "扳手工蜂",
    animalDesc: "别人还在尖叫，它已经拿着螺丝刀飞过去了。",
    plantIcon: "🌱",
    plantName: "薄荷",
    plantDesc: "哪里乱长哪里，顺便把空气变得清醒一点。",
    oneLiner: "别人发疯时，你已经戴上隐形安全帽。",
    trigger: "一出事你会先问：谁、几点、多少钱、最坏到哪、现在能补什么？",
    friendVerdict: "你太会救火了，大家已经默认你不怕烫。",
    tinyBug: "你的人生像工具箱，里面有充电宝、纸巾、备用方案和对世界的轻微不信任。",
    charmTitle: "停修一小时",
    charm: "今天至少把一个问题原封不动还给它的主人。幸运物是小夹子，今日忌讳：主动接管全世界。",
  },
  VOID: {
    name: "离线水母",
    full: "Vanishes Outside Immediate Decisions",
    ratio: "1.8%",
    rarity: "稀有漂浮物",
    color: "rare",
    rare: true,
    animalIcon: "🪼",
    animalName: "透明水母",
    animalDesc: "没有明显攻击性，但很难判断它现在在哪个频道。",
    plantIcon: "🪷",
    plantName: "空气凤梨",
    plantDesc: "不沾土也能活，主打一个不解释的悬浮。",
    oneLiner: "你不是反应慢，你像是从另一个频道接收世界。",
    trigger: "别人还在选 A/B/C/D，你已经开始怀疑这件事为什么一定要参与。",
    friendVerdict: "你像一个随机刷新的隐藏事件，没人知道下一秒掉落什么。",
    tinyBug: "你会突然沉默，又突然说出一句偏得离谱但莫名准确的话。",
    charmTitle: "落地锚点",
    charm: "今天找一个具体动作：洗杯子、晒太阳、走 1200 步。幸运物是透明杯，今日忌讳：连续三次说“随便”。",
  },
};

const baseCodeKeys = Object.keys(codes).filter((code) => !codes[code].rare);

const questions = [
  {
    title: "你不小心给朋友发了一个只有你自己懂的怪表情包。",
    options: [
      { text: "马上补一句：发错了，不是你不配懂，是它还没公测。", code: "SAVE" },
      { text: "撤回，然后装死，假装刚才是手机在做梦。", code: "MUTE" },
      { text: "不解释，观察他会不会自己脑补出一套世界观。", code: "LURK" },
      { text: "顺势宣布这是新表情，要求他尊重小众文化。", code: "MEME" },
    ],
  },
  {
    title: "你在朋友圈发了一句很有深意的话，五分钟后觉得太装。",
    options: [
      { text: "删掉，像处理案发现场一样清理痕迹。", code: "MUTE" },
      { text: "改成自嘲版：刚才被生活偷袭了一下。", code: "MEME" },
      { text: "补一条解释，把矫情包装成阶段性复盘。", code: "LIST" },
      { text: "不删，开始盯谁点赞、谁沉默、谁可能看懂了。", code: "LURK" },
    ],
  },
  {
    title: "群里有人发：“谁方便做个表？很简单。”",
    options: [
      { text: "装没看见，但把需求逐字看完，等一个倒霉蛋出现。", code: "LURK" },
      { text: "问字段、格式、截止时间，先把锅的形状画清楚。", code: "CTRL" },
      { text: "说“我来吧”，发送瞬间已经开始恨自己。", code: "SAVE" },
      { text: "直接新建模板，连配色和冻结首行都安排好了。", code: "LIST" },
    ],
  },
  {
    title: "聚餐突然冷场，所有人都开始低头看手机。",
    options: [
      { text: "开个新话题，把这桌从停尸房拉回餐厅。", code: "SAVE" },
      { text: "低头假装回消息，加入沉默互助会。", code: "MUTE" },
      { text: "偷偷观察谁最先受不了冷场，像看真人实验。", code: "LURK" },
      { text: "说：我们现在像一桌刚分手但还没分桌的人。", code: "MEME" },
    ],
  },
  {
    title: "你迟到 5 分钟，一推门所有人都看你。",
    options: [
      { text: "快速道歉，解释自己被红灯、电梯和命运联手背刺。", code: "CTRL" },
      { text: "说：不好意思，堵在命运入口了。", code: "MEME" },
      { text: "低头坐下，努力把自己降级成一件家具。", code: "MUTE" },
      { text: "顺手递饮料，假装迟到是为了增加到场价值。", code: "OOPS" },
    ],
  },
  {
    title: "你在会议上被点名，但刚才完全走神。",
    options: [
      { text: "复述最后听到的三个词，拼成一句像结论的话。", code: "CTRL" },
      { text: "低头翻资料，假装答案藏在屏幕深处。", code: "MUTE" },
      { text: "说“这个问题可以分三层看”，先把时间拖住。", code: "LIST" },
      { text: "胡说一个很像战略的句子，赌大家也没认真听。", code: "OOPS" },
    ],
  },
  {
    title: "你看到一篇《普通人如何三个月逆袭》，标题很土但手指很诚实。",
    options: [
      { text: "先收藏，献给未来那个可能会投胎成上进人的自己。", code: "IDEA" },
      { text: "直接看评论区，那里才是人类翻车样本库。", code: "LURK" },
      { text: "算课程价、时间成本、转化率，判断韭菜刀锋利程度。", code: "CTRL" },
      { text: "转发给朋友：又有人三个月速通人生了。", code: "MEME" },
    ],
  },
  {
    title: "你看到楼下空铺转让，门口还贴着“旺铺”。",
    options: [
      { text: "算租金、人流、回本周期，越算越像验尸。", code: "CTRL" },
      { text: "店名、菜单、开业海报已经在脑内试营业。", code: "IDEA" },
      { text: "发朋友：这里适合开一家失败学咖啡馆。", code: "MEME" },
      { text: "开始蹲隔壁店客流，像民间商业侦探。", code: "LURK" },
    ],
  },
  {
    title: "朋友说：“你看我对象新发的朋友圈什么意思？”",
    options: [
      { text: "拆图、文案、标点和发布时间，像做情感刑侦。", code: "LURK" },
      { text: "劝他别过度解读，先把人从悬崖边薅回来。", code: "SAVE" },
      { text: "列出三种可能性：普通发疯、暗示、真的没意思。", code: "LIST" },
      { text: "顺藤摸瓜看对方最近三个月动态，越看越精神。", code: "LURK" },
    ],
  },
  {
    title: "前同事发朋友圈：“终于离开垃圾地方。”",
    options: [
      { text: "默默蹲评论区，看谁会第一个暴露内情。", code: "LURK" },
      { text: "截图发小群：有瓜，先别睡。", code: "MEME" },
      { text: "复盘最近组织架构、离职时间线和传闻可信度。", code: "LIST" },
      { text: "点进点赞列表，看谁也在现场围观。", code: "LURK" },
    ],
  },
  {
    title: "凌晨两点，你突然想给一个很久没联系的人发消息。",
    options: [
      { text: "写好不发，放到明天接受阳光审判。", code: "CTRL" },
      { text: "打开聊天记录一路考古，看到自己想换星球。", code: "LURK" },
      { text: "直接发“突然想到你”，把剧情交给命运。", code: "OOPS" },
      { text: "先看他最近动态，判断自己有没有出场资格。", code: "LURK" },
    ],
  },
  {
    title: "你突然意识到自己今天什么都没干。",
    options: [
      { text: "写一篇《今天为什么没干》的复盘，仪式感拉满。", code: "LIST" },
      { text: "宣布这是低功耗修复日，不是摆烂，是系统维护。", code: "MEME" },
      { text: "赶紧做一件小事，给今天强行续命。", code: "CTRL" },
      { text: "开始翻别人今天干了什么，然后精准加重焦虑。", code: "LURK" },
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
        <h2>Mad人格测试</h2>
        <p>12 个小场面，测出你脑内小剧场的默认发作方式。别装正常，正常人不会点进来。</p>
      </div>

      <div class="hero-warning">
        <span>检测范围</span>
        <strong>已读不回、强行圆场、深夜发疯、窥探小瓜、表格驱邪、命运翻车</strong>
      </div>

      <button class="primary-button" id="startButton">开始暴露</button>
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
  const shareText = makeShareText(result.code, item);

  screen.innerHTML = `
    <div class="screen-inner">
      <div class="result-grid">
        <article class="result-card result-${item.color}">
          <p class="eyebrow">OopsLab Result</p>
          <div class="verdict-stamp">已鉴定：有点东西</div>
          <div class="code-line">
            <div class="code-badge">${result.code}</div>
            <div class="ratio-badge ${item.rare ? "rare-tag" : ""}">
              <span>样本占比</span>
              <strong>${item.ratio}</strong>
              <em>${item.rarity}</em>
            </div>
          </div>
          <h2>${item.name}</h2>
          <p class="one-liner">${item.oneLiner}</p>
          <div class="meme-quote">“这不是性格问题，这是出厂风格。”</div>

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
            <span>被动触发时刻</span>
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
            <strong>${item.charm}</strong>
          </div>
        </aside>
      </div>

      <div class="action-row">
        <button class="primary-button" id="copyButton">复制结果</button>
        <button class="secondary-button" id="restartButton">再测一次</button>
      </div>
    </div>
  `;

  screen.querySelector("#copyButton").addEventListener("click", () => copyResult(shareText));
  screen.querySelector("#restartButton").addEventListener("click", renderHome);
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

function makeShareText(code, item) {
  return `我的 MDTI 是 ${code}｜${item.name}
样本占比：${item.ratio}（${item.rarity}）
${item.oneLiner}
动物画像：${item.animalIcon} ${item.animalName}，${item.animalDesc}
植物画像：${item.plantIcon} ${item.plantName}，${item.plantDesc}
${item.charmTitle}：${item.charm}`;
}

async function copyResult(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("结果已复制，可以发给那个最像的人。");
  } catch {
    showToast("浏览器不让复制，但截图也很适合传播。");
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

renderHome();

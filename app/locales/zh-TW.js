/*
 * 繁體中文，其他語言的對照基準（DEFAULT_LANG）。
 * 這裡有的 key，每個語言都要有；這裡沒有的，別的語言也不能多。
 * 三份清單（rulesHostSteps / rulesPlayerSteps / rulesFaq）的長度也要一致，
 * 少一項或多一項 build 都會擋下來（scripts/build.js 的 checkStrings）。
 *
 * {n} {m} {s} {time} 這種大括號是佔位符，翻譯時要原樣保留。
 */
export default {
  htmlLang: 'zh-Hant-TW',
  ogLocale: 'zh_TW',

  seoTitle: '定時炸彈｜一台手機傳著玩的破冰遊戲，爆在誰手上誰就輸',
  seoDesc:
    '小組聚會、團契、家庭聚會的破冰遊戲。一台手機就是那顆炸彈，圍成一圈傳：畫面出一題，做完按完成、傳給下一個人，什麼時候爆沒有人知道，爆在誰手上誰就是這一輪的輸家。內建 90 題問答與挑戰題，可以自己加題目。免下載、免註冊，打開網頁就能玩。',
  rulesSeoTitle: '定時炸彈 — 玩法說明',
  rulesSeoDesc: '怎麼設定引爆時間、題目分類怎麼挑、自己出題怎麼加，還有主持人開場要講的三句話。',

  navTitle: '定時炸彈',
  navRules: '玩法',
  rulesLinkText: '第一次玩？看看怎麼開始 →',
  langSwitchLabel: '切換語言',
  themeToggleLabel: '切換深淺色',

  heroTitle: '定時炸彈：做完題目，快傳給下一個人',
  heroDesc:
    '整場只要一台手機，它就是炸彈。畫面出一題，拿到的人當場做完、按下「完成」、傳給旁邊的人。什麼時候爆沒有人知道——爆在誰手上，誰就是這一輪的輸家。',

  // ---------- 設定畫面 ----------
  timerHeading: '引爆時間',
  timerHint: '實際爆炸的時間會落在這個區間裡隨機一點，畫面上不會顯示剩幾秒。',
  minTimeLabel: '最短',
  maxTimeLabel: '最長',
  secondsUnit: '{n} 秒',
  minutesUnit: '{n} 分',

  questionsHeading: '題目',
  deckCount: '牌堆 {n} 題',
  groupAsk: '問答型',
  groupDare: '挑戰型',
  catCount: '{n} 題',

  deckEmptyWarning: '至少要選一個分類才能開始。',
  deckThinWarning: '牌堆只有 {n} 題，一輪之內可能會抽到重複的題目。',

  customLabel: '自己出題',
  customPlaceholder: '例如：說出你最喜歡的食物',
  customCategoryLabel: '歸到哪一類',
  customAddButton: '加入',
  customEmpty: '還沒有自己出的題目。',
  customRemoveLabel: '刪掉這題',
  customHint: '自己加的題目會留在這台裝置上，下次打開還在。',

  startButton: '開始遊戲',

  // ---------- 遊戲進行中 ----------
  passButton: '完成！傳給下一個人',
  skipButton: '跳過此題',
  playHint: '做完畫面上這件事，按「完成」，然後把手機傳出去。',
  stuckHint: '卡住了？按「跳過此題」換一題，別讓炸彈停在你手上。',
  bombAlt: '炸彈',

  // ---------- 爆炸 ----------
  boomTitle: '爆炸了！',
  boomStats: '這一輪撐了 {time}，完成 {done} 題',
  boomStatsWithSkips: '這一輪撐了 {time}，完成 {done} 題、跳過 {skipped} 題',
  durationMinSec: '{m} 分 {s} 秒',
  durationSec: '{s} 秒',
  againButton: '再玩一輪',
  backToSetupButton: '改設定',

  // ---------- 離開確認 ----------
  leaveTitle: '要結束這一輪嗎？',
  leaveDesc: '炸彈還在倒數，離開的話這一輪就沒了。',
  leaveConfirm: '結束這輪',
  leaveCancel: '繼續玩',

  // ---------- 規則頁 ----------
  rulesIntro:
    '一台手機、一群人圍成一圈。畫面出一題，拿到手機的人做完就傳給下一個人；炸彈什麼時候爆是隨機的，也看不到剩幾秒。爆在誰手上，誰就是這一輪的輸家。',
  rulesHostHeading: '開始之前（拿手機的那個人）',
  rulesHostSteps: [
    '選「問答型」、「挑戰型」，或兩個都要。新朋友多就先只開問答型。',
    '想加自己小組的梗，用「自己出題」加幾題，選一邊歸進去。',
    '設定引爆區間。第一輪用預設的 1～3 分鐘就好，玩開了想快一點再改成 30 秒～2 分鐘。',
    '開場講三句話：做完畫面上的事、按完成傳給下一個人、爆在誰手上誰就是這輪的輸家。',
  ],
  rulesPlayerHeading: '拿到手機的時候',
  rulesPlayerSteps: [
    '讀畫面上那一題，當場做完——說一句話、學個動物叫、跟旁邊的人擊個掌都算。',
    '按下方那條「完成，傳給下一個人」。',
    '把手機傳給旁邊的人。',
    '做不出來？直接按完成傳下去，沒有人會計較，這不是問答比賽。',
  ],
  rulesFaqHeading: '常見問題',
  rulesFaq: [
    {
      q: '每個人都要有手機嗎？',
      a: '不用。整場只需要一台手機，它就是那顆炸彈，圍成一圈傳。這跟系列裡其他幾個遊戲不一樣，那些是每人一台手機掃 QR code 加入房間。',
    },
    {
      q: '看得到還剩幾秒嗎？',
      a: '看不到，一秒都看不到。這是刻意的——看得到倒數的話，最後十秒沒有人肯接手機，遊戲會卡在原地。滴答聲的快慢也不代表快爆了。',
    },
    {
      q: '題目做不出來可以跳過嗎？',
      a: '可以，直接按完成。沒有分數，也沒有人在記誰跳過幾題。',
    },
    {
      q: '可以加我們自己的題目嗎？',
      a: '可以。設定畫面的「自己出題」加進去、選一個分類，下次打開還在。加的題目留在這台裝置上，不會上傳。',
    },
    {
      q: '手機一直在人手之間傳，有點介意。',
      a: '套個夾鏈袋，或者拿一支不常用的備用機來當炸彈。',
    },
    {
      q: '中途手機鎖屏了會怎樣？',
      a: '遊戲進行中會擋住自動鎖屏。真的被切到背景，回到畫面的當下會立刻重算——如果在背景期間就已經過了引爆時刻，一回來就是爆炸畫面。',
    },
    {
      q: '輸的人要做什麼？',
      a: '由你們自己決定，系統不規定。誰輸了現場所有人都看得到，罰他做什麼是主持人和全場的事。',
    },
  ],
  rulesBack: '← 回到遊戲',
};

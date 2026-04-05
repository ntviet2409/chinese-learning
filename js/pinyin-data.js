// ══════════════════════════════════════════
//  PINYIN DATA — Initials, Finals, Tones
//  From Chinese Express Lesson 1
// ══════════════════════════════════════════

// Each initial has a `char` — the Chinese character the TTS will speak
const INITIALS = [
  { py:'b', char:'波', vn:'Giống "p" nhẹ, không bật hơi', en:'Like "b" in "boy"' },
  { py:'p', char:'坡', vn:'Giống "ph" bật hơi mạnh', en:'Like "p" in "park" (aspirated)' },
  { py:'m', char:'摸', vn:'Giống "m" tiếng Việt', en:'Like "m" in "mother"' },
  { py:'f', char:'佛', vn:'Giống "ph" tiếng Việt', en:'Like "f" in "food"' },
  { py:'d', char:'得', vn:'Giống "t" nhẹ, không bật hơi', en:'Like "d" in "dog"' },
  { py:'t', char:'特', vn:'Giống "th" bật hơi mạnh', en:'Like "t" in "top" (aspirated)' },
  { py:'n', char:'呢', vn:'Giống "n" tiếng Việt', en:'Like "n" in "no"' },
  { py:'l', char:'了', vn:'Giống "l" tiếng Việt', en:'Like "l" in "love"' },
  { py:'g', char:'哥', vn:'Giống "c/k" nhẹ', en:'Like "g" in "go"' },
  { py:'k', char:'科', vn:'Giống "kh" bật hơi', en:'Like "k" in "king" (aspirated)' },
  { py:'h', char:'喝', vn:'Giống "h" tiếng Việt', en:'Like "h" in "hat"' },
  { py:'j', char:'鸡', vn:'Giống "ch" nhẹ, lưỡi phẳng', en:'Like "j" in "jeep" (flat tongue)' },
  { py:'q', char:'七', vn:'Giống "ch" bật hơi', en:'Like "ch" in "cheese" (aspirated)' },
  { py:'x', char:'西', vn:'Giống "s" nhưng lưỡi phẳng', en:'Like "sh" in "she" (flat tongue)' },
  { py:'zh', char:'知', vn:'Giống "tr" tiếng Việt, lưỡi cong', en:'Like "j" in "judge" (tongue curled)' },
  { py:'ch', char:'吃', vn:'Giống "tr" bật hơi mạnh', en:'Like "ch" in "church" (tongue curled)' },
  { py:'sh', char:'师', vn:'Giống "s" lưỡi cong lên', en:'Like "sh" in "ship" (tongue curled)' },
  { py:'r', char:'日', vn:'Giống "r" nhưng nhẹ hơn', en:'Like "r" in "run" (softer)' },
  { py:'z', char:'资', vn:'Giống "d" + "s" nhanh', en:'Like "ds" in "cards"' },
  { py:'c', char:'次', vn:'Giống "ts" bật hơi', en:'Like "ts" in "cats" (aspirated)' },
  { py:'s', char:'思', vn:'Giống "x" tiếng Việt', en:'Like "s" in "sun"' },
  { py:'y', char:'衣', vn:'Giống "d" tiếng Việt (miền Nam)', en:'Like "y" in "yes"' },
  { py:'w', char:'屋', vn:'Giống "qu" hoặc "v"', en:'Like "w" in "we"' },
];

const FINALS = {
  single: [
    { py:'a', char:'啊', vn:'Giống "a" tiếng Việt', en:'Like "a" in "father"' },
    { py:'o', char:'哦', vn:'Giống "o" tiếng Việt', en:'Like "o" in "more"' },
    { py:'e', char:'额', vn:'Giống "ơ" tiếng Việt', en:'Like "e" in "her"' },
    { py:'i', char:'一', vn:'Giống "i" tiếng Việt', en:'Like "ee" in "see"' },
    { py:'u', char:'五', vn:'Giống "u" tiếng Việt', en:'Like "oo" in "moon"' },
    { py:'ü', char:'鱼', vn:'Giống "uy" — môi tròn, lưỡi phẳng', en:'Like French "u" — round lips, say "ee"' },
  ],
  compound: [
    { py:'ai', char:'爱', vn:'Giống "ai" tiếng Việt', en:'Like "eye"' },
    { py:'ei', char:'诶', vn:'Giống "ây" tiếng Việt', en:'Like "ay" in "day"' },
    { py:'ao', char:'奥', vn:'Giống "ao" tiếng Việt', en:'Like "ow" in "cow"' },
    { py:'ou', char:'欧', vn:'Giống "âu" tiếng Việt', en:'Like "oe" in "toe"' },
    { py:'an', char:'安', vn:'Giống "an" tiếng Việt', en:'Like "an" in "can"' },
    { py:'en', char:'门', vn:'Giống "ân" tiếng Việt', en:'Like "en" in "open"' },
    { py:'ang', char:'昂', vn:'Giống "ang" tiếng Việt', en:'Like "ong" in "song"' },
    { py:'eng', char:'鞥', vn:'Giống "ưng"', en:'Like "ung" in "sung"' },
    { py:'ong', char:'嗡', vn:'Giống "ung" tiếng Việt', en:'Like "ong" in "gong"' },
    { py:'ia', char:'呀', vn:'Giống "ia" tiếng Việt', en:'Like "ya"' },
    { py:'ie', char:'也', vn:'Giống "ie" — "i-ê"', en:'Like "ye" in "yes"' },
    { py:'iao', char:'要', vn:'Giống "iao" — "i-ao"', en:'Like "yow"' },
    { py:'iu', char:'有', vn:'Giống "iu" — "i-u"', en:'Like "yo" in "yo-yo"' },
    { py:'ian', char:'烟', vn:'Giống "i-en"', en:'Like "yen"' },
    { py:'in', char:'音', vn:'Giống "in" tiếng Việt', en:'Like "in" in "pin"' },
    { py:'iang', char:'阳', vn:'Giống "i-ang"', en:'Like "yang"' },
    { py:'ing', char:'英', vn:'Giống "inh" tiếng Việt', en:'Like "ing" in "sing"' },
    { py:'iong', char:'用', vn:'Giống "i-ung"', en:'Like "yong"' },
    { py:'ua', char:'蛙', vn:'Giống "ua" tiếng Việt', en:'Like "wa"' },
    { py:'uo', char:'我', vn:'Giống "uo" — "u-o"', en:'Like "wo" in "won"' },
    { py:'uai', char:'外', vn:'Giống "oai" tiếng Việt', en:'Like "why"' },
    { py:'ui', char:'为', vn:'Giống "uây"', en:'Like "way"' },
    { py:'uan', char:'万', vn:'Giống "oan" tiếng Việt', en:'Like "wan"' },
    { py:'un', char:'问', vn:'Giống "uân"', en:'Like "wen"' },
    { py:'uang', char:'王', vn:'Giống "oang"', en:'Like "wong"' },
    { py:'ueng', char:'翁', vn:'Giống "u-ưng"', en:'Like "wung"' },
    { py:'üe', char:'月', vn:'Giống "uy-ê"', en:'Like "yue"' },
    { py:'üan', char:'元', vn:'Giống "uy-ên"', en:'Like "yuan"' },
    { py:'ün', char:'云', vn:'Giống "uyn"', en:'Like "yun"' },
  ]
};

const TONES = [
  { num:1, mark:'ˉ', name:'Thanh 1 — Ngang cao', vn:'Giống thanh ngang tiếng Việt nhưng CAO hơn. Giữ giọng cao đều.', en:'High and level — like singing a steady high note', example:'mā (妈 = mẹ)', char:'妈', color:'#3b82f6' },
  { num:2, mark:'ˊ', name:'Thanh 2 — Lên', vn:'Giống thanh SẮC tiếng Việt. Giọng đi từ trung lên cao.', en:'Rising — like asking "what?" in English', example:'má (麻 = gai)', char:'麻', color:'#22c55e' },
  { num:3, mark:'ˇ', name:'Thanh 3 — Xuống rồi lên', vn:'Giống thanh HỎI tiếng Việt. Giọng xuống thấp rồi lên lại.', en:'Dipping — falls then rises, like "well..." when hesitating', example:'mǎ (马 = ngựa)', char:'马', color:'#f59e0b' },
  { num:4, mark:'ˋ', name:'Thanh 4 — Xuống', vn:'Giống thanh NẶNG tiếng Việt. Giọng rơi từ cao xuống thấp, dứt khoát.', en:'Falling — sharp drop, like saying "No!" firmly', example:'mà (骂 = mắng)', char:'骂', color:'#ef4444' },
  { num:0, mark:'', name:'Thanh nhẹ (không dấu)', vn:'Đọc ngắn, nhẹ, nhanh. Không nhấn. Thường ở âm tiết thứ 2.', en:'Neutral/light — short, quick, unstressed', example:'ma (吗 = hả?)', char:'吗', color:'#94a3b8' },
];

// Pinyin-to-character map for tone practice & syllable table
// TTS reads characters correctly, NOT pinyin romanization
const PY_CHAR_MAP = {
  'mā':'妈','má':'麻','mǎ':'马','mà':'骂',
  'dā':'搭','dá':'答','dǎ':'打','dà':'大',
  'bā':'八','bá':'拔','bǎ':'把','bà':'爸',
  'pō':'坡','pó':'婆','pǒ':'叵','pò':'破',
  'nī':'妮','ní':'尼','nǐ':'你','nì':'逆',
  'hāo':'蒿','háo':'豪','hǎo':'好','hào':'号',
  'wō':'窝','wǒ':'我','wò':'卧',
  'tā':'他','tǎ':'塔','tà':'踏',
  'zhāo':'招','zháo':'着','zhǎo':'找','zhào':'照',
  'jiāo':'交','jiáo':'嚼','jiǎo':'脚','jiào':'叫',
  'zhāng':'张','zhǎng':'长','zhàng':'丈',
  'jiāng':'江','jiǎng':'讲','jiàng':'酱',
  'zōu':'邹','zǒu':'走','zòu':'奏',
  'zuō':'作','zuó':'昨','zuǒ':'左','zuò':'做',
  'qiū':'秋','qiú':'球','qiǔ':'丘',
  'chōu':'抽','chóu':'愁','chǒu':'丑','chòu':'臭',
  'xiē':'些','xié':'鞋','xiě':'写','xiè':'谢',
  'cāi':'猜','cái':'才','cǎi':'彩','cài':'菜',
  'zāi':'栽','zǎi':'宰','zài':'在',
  // Syllable table common chars
  'ba':'八','bo':'波','bai':'白','bao':'包','ban':'班','bang':'帮','ben':'本','bei':'北','beng':'蹦',
  'pa':'怕','po':'坡','pai':'拍','pan':'盘','pang':'旁','pen':'盆','pei':'陪','peng':'朋','pou':'剖',
  'ma':'妈','mo':'摸','me':'么','mai':'买','mao':'猫','man':'慢','mang':'忙','men':'门','mei':'没','meng':'蒙','mou':'某',
  'fa':'发','fo':'佛','fan':'饭','fang':'方','fen':'分','fei':'飞','feng':'风','fou':'否',
  'da':'大','de':'的','dai':'带','dao':'到','dan':'但','dang':'当','den':'扽','dei':'得','deng':'灯','dou':'都','dong':'东',
  'ta':'他','te':'特','tai':'太','tao':'桃','tan':'谈','tang':'汤','teng':'疼','tou':'头','tong':'同',
  'na':'那','ne':'呢','nai':'奶','nao':'脑','nan':'南','nang':'囊','nen':'嫩','nei':'内','neng':'能','nou':'耨','nong':'农',
  'la':'拉','le':'了','lai':'来','lao':'老','lan':'蓝','lang':'浪','lei':'累','leng':'冷','lou':'楼','long':'龙',
  'ga':'嘎','ge':'个','gai':'该','gao':'高','gan':'干','gang':'刚','gen':'跟','gei':'给','geng':'更','gou':'够','gong':'工',
  'ka':'卡','ke':'可','kai':'开','kao':'考','kan':'看','kang':'康','ken':'肯','kei':'剋','keng':'坑','kou':'口','kong':'空',
  'ha':'哈','he':'和','hai':'还','hao':'好','han':'汉','hang':'行','hen':'很','hei':'黑','heng':'横','hou':'后','hong':'红',
};

// Tone practice pairs from the book
const TONE_PRACTICE = [
  ['mā','má','mǎ','mà'],
  ['dā','dá','dǎ','dà'],
  ['bā','bá','bǎ','bà'],
  ['pō','pó','pǒ','pò'],
  ['nī','ní','nǐ','nì'],
  ['hāo','háo','hǎo','hào'],
  ['wō','','wǒ','wò'],
  ['tā','','tǎ','tà'],
  ['zhāo','zháo','zhǎo','zhào'],
  ['jiāo','jiáo','jiǎo','jiào'],
  ['qiū','qiú','qiǔ',''],
  ['chōu','chóu','chǒu','chòu'],
  ['zuō','zuó','zuǒ','zuò'],
  ['xiē','xié','xiě','xiè'],
  ['cāi','cái','cǎi','cài'],
  ['zāi','','zǎi','zài'],
];

// Common syllable table (subset from book pages 3-4)
const SYLLABLE_TABLE_ROWS = [
  { initial:'b', syllables:['ba','bo','','bai','','ban','bang','ben','bei','beng','',''] },
  { initial:'p', syllables:['pa','po','','pai','','pan','pang','pen','pei','peng','pou',''] },
  { initial:'m', syllables:['ma','mo','me','mai','mao','man','mang','men','mei','meng','mou',''] },
  { initial:'f', syllables:['fa','fo','','','','fan','fang','fen','fei','feng','fou',''] },
  { initial:'d', syllables:['da','','de','dai','dao','dan','dang','den','dei','deng','dou','dong'] },
  { initial:'t', syllables:['ta','','te','tai','tao','tan','tang','','','teng','tou','tong'] },
  { initial:'n', syllables:['na','','ne','nai','nao','nan','nang','nen','nei','neng','nou','nong'] },
  { initial:'l', syllables:['la','','le','lai','lao','lan','lang','','lei','leng','lou','long'] },
  { initial:'g', syllables:['ga','','ge','gai','gao','gan','gang','gen','gei','geng','gou','gong'] },
  { initial:'k', syllables:['ka','','ke','kai','kao','kan','kang','ken','kei','keng','kou','kong'] },
  { initial:'h', syllables:['ha','','he','hai','hao','han','hang','hen','hei','heng','hou','hong'] },
];
const SYLLABLE_TABLE_HEADERS = ['a','o','e','ai','ao','an','ang','en','ei','eng','ou','ong'];

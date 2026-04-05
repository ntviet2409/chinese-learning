// ══════════════════════════════════════════
//  PINYIN DATA — Initials, Finals, Tones
//  From Chinese Express Lesson 1
// ══════════════════════════════════════════

const INITIALS = [
  { py:'b', vn:'Giống "p" nhẹ, không bật hơi', en:'Like "b" in "boy"' },
  { py:'p', vn:'Giống "ph" bật hơi mạnh', en:'Like "p" in "park" (aspirated)' },
  { py:'m', vn:'Giống "m" tiếng Việt', en:'Like "m" in "mother"' },
  { py:'f', vn:'Giống "ph" tiếng Việt', en:'Like "f" in "food"' },
  { py:'d', vn:'Giống "t" nhẹ, không bật hơi', en:'Like "d" in "dog"' },
  { py:'t', vn:'Giống "th" bật hơi mạnh', en:'Like "t" in "top" (aspirated)' },
  { py:'n', vn:'Giống "n" tiếng Việt', en:'Like "n" in "no"' },
  { py:'l', vn:'Giống "l" tiếng Việt', en:'Like "l" in "love"' },
  { py:'g', vn:'Giống "c/k" nhẹ', en:'Like "g" in "go"' },
  { py:'k', vn:'Giống "kh" bật hơi', en:'Like "k" in "king" (aspirated)' },
  { py:'h', vn:'Giống "h" tiếng Việt', en:'Like "h" in "hat"' },
  { py:'j', vn:'Giống "ch" nhẹ, lưỡi phẳng', en:'Like "j" in "jeep" (flat tongue)' },
  { py:'q', vn:'Giống "ch" bật hơi', en:'Like "ch" in "cheese" (aspirated)' },
  { py:'x', vn:'Giống "s" nhưng lưỡi phẳng', en:'Like "sh" in "she" (flat tongue)' },
  { py:'zh', vn:'Giống "tr" tiếng Việt, lưỡi cong', en:'Like "j" in "judge" (tongue curled)' },
  { py:'ch', vn:'Giống "tr" bật hơi mạnh', en:'Like "ch" in "church" (tongue curled)' },
  { py:'sh', vn:'Giống "s" lưỡi cong lên', en:'Like "sh" in "ship" (tongue curled)' },
  { py:'r', vn:'Giống "r" nhưng nhẹ hơn', en:'Like "r" in "run" (softer)' },
  { py:'z', vn:'Giống "d" + "s" nhanh', en:'Like "ds" in "cards"' },
  { py:'c', vn:'Giống "ts" bật hơi', en:'Like "ts" in "cats" (aspirated)' },
  { py:'s', vn:'Giống "x" tiếng Việt', en:'Like "s" in "sun"' },
  { py:'y', vn:'Giống "d" tiếng Việt (miền Nam)', en:'Like "y" in "yes"' },
  { py:'w', vn:'Giống "qu" hoặc "v"', en:'Like "w" in "we"' },
];

const FINALS = {
  single: [
    { py:'a', vn:'Giống "a" tiếng Việt', en:'Like "a" in "father"' },
    { py:'o', vn:'Giống "o" tiếng Việt', en:'Like "o" in "more"' },
    { py:'e', vn:'Giống "ơ" tiếng Việt', en:'Like "e" in "her"' },
    { py:'i', vn:'Giống "i" tiếng Việt', en:'Like "ee" in "see"' },
    { py:'u', vn:'Giống "u" tiếng Việt', en:'Like "oo" in "moon"' },
    { py:'ü', vn:'Giống "uy" — môi tròn, lưỡi phẳng', en:'Like French "u" — round lips, say "ee"' },
  ],
  compound: [
    { py:'ai', vn:'Giống "ai" tiếng Việt', en:'Like "eye"' },
    { py:'ei', vn:'Giống "ây" tiếng Việt', en:'Like "ay" in "day"' },
    { py:'ao', vn:'Giống "ao" tiếng Việt', en:'Like "ow" in "cow"' },
    { py:'ou', vn:'Giống "âu" tiếng Việt', en:'Like "oe" in "toe"' },
    { py:'an', vn:'Giống "an" tiếng Việt', en:'Like "an" in "can"' },
    { py:'en', vn:'Giống "ân" tiếng Việt', en:'Like "en" in "open"' },
    { py:'ang', vn:'Giống "ang" tiếng Việt', en:'Like "ong" in "song"' },
    { py:'eng', vn:'Giống "ưng"', en:'Like "ung" in "sung"' },
    { py:'ong', vn:'Giống "ung" tiếng Việt', en:'Like "ong" in "gong"' },
    { py:'ia', vn:'Giống "ia" tiếng Việt', en:'Like "ya"' },
    { py:'ie', vn:'Giống "ie" — "i-ê"', en:'Like "ye" in "yes"' },
    { py:'iao', vn:'Giống "iao" — "i-ao"', en:'Like "yow"' },
    { py:'iu', vn:'Giống "iu" — "i-u"', en:'Like "yo" in "yo-yo"' },
    { py:'ian', vn:'Giống "i-en"', en:'Like "yen"' },
    { py:'in', vn:'Giống "in" tiếng Việt', en:'Like "in" in "pin"' },
    { py:'iang', vn:'Giống "i-ang"', en:'Like "yang"' },
    { py:'ing', vn:'Giống "inh" tiếng Việt', en:'Like "ing" in "sing"' },
    { py:'iong', vn:'Giống "i-ung"', en:'Like "yong"' },
    { py:'ua', vn:'Giống "ua" tiếng Việt', en:'Like "wa"' },
    { py:'uo', vn:'Giống "uo" — "u-o"', en:'Like "wo" in "won"' },
    { py:'uai', vn:'Giống "oai" tiếng Việt', en:'Like "why"' },
    { py:'ui', vn:'Giống "uây"', en:'Like "way"' },
    { py:'uan', vn:'Giống "oan" tiếng Việt', en:'Like "wan"' },
    { py:'un', vn:'Giống "uân"', en:'Like "wen"' },
    { py:'uang', vn:'Giống "oang"', en:'Like "wong"' },
    { py:'ueng', vn:'Giống "u-ưng"', en:'Like "wung"' },
    { py:'üe', vn:'Giống "uy-ê"', en:'Like "yue"' },
    { py:'üan', vn:'Giống "uy-ên"', en:'Like "yuan"' },
    { py:'ün', vn:'Giống "uyn"', en:'Like "yun"' },
  ]
};

const TONES = [
  { num:1, mark:'ˉ', name:'Thanh 1 — Ngang cao', vn:'Giống thanh ngang tiếng Việt nhưng CAO hơn. Giữ giọng cao đều.', en:'High and level — like singing a steady high note', example:'mā (妈 = mẹ)', color:'#3b82f6' },
  { num:2, mark:'ˊ', name:'Thanh 2 — Lên', vn:'Giống thanh SẮC tiếng Việt. Giọng đi từ trung lên cao.', en:'Rising — like asking "what?" in English', example:'má (麻 = gai)', color:'#22c55e' },
  { num:3, mark:'ˇ', name:'Thanh 3 — Xuống rồi lên', vn:'Giống thanh HỎI tiếng Việt. Giọng xuống thấp rồi lên lại.', en:'Dipping — falls then rises, like "well..." when hesitating', example:'mǎ (马 = ngựa)', color:'#f59e0b' },
  { num:4, mark:'ˋ', name:'Thanh 4 — Xuống', vn:'Giống thanh NẶNG tiếng Việt. Giọng rơi từ cao xuống thấp, dứt khoát.', en:'Falling — sharp drop, like saying "No!" firmly', example:'mà (骂 = mắng)', color:'#ef4444' },
  { num:0, mark:'', name:'Thanh nhẹ (không dấu)', vn:'Đọc ngắn, nhẹ, nhanh. Không nhấn. Thường ở âm tiết thứ 2.', en:'Neutral/light — short, quick, unstressed', example:'ma (吗 = hả?)', color:'#94a3b8' },
];

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

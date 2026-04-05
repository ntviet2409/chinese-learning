// ══════════════════════════════════════════
//  CONVERSATIONS & SENTENCE PATTERNS
//  From Chinese Express Lessons 2-5
// ══════════════════════════════════════════

const CONVERSATIONS = [
  // ── Lesson 2: Greetings ──
  {
    lesson: 'L2', topic: 'Chào hỏi', title: 'Greetings',
    convos: [
      {
        title: 'Hỏi thăm sức khỏe',
        lines: [
          { speaker:'A', pinyin:'Nǐ hǎo ma?', hanzi:'你好吗？', en:'How are you?', vn:'Bạn khỏe không?' },
          { speaker:'B', pinyin:'Wǒ hěn hǎo, nǐ ne?', hanzi:'我很好，你呢？', en:'I am fine. And you?', vn:'Tôi rất khỏe, còn bạn?' },
          { speaker:'A', pinyin:'Wǒ yě hěn hǎo.', hanzi:'我也很好。', en:'I am fine, too.', vn:'Tôi cũng rất khỏe.' },
        ]
      },
      {
        title: 'Bận không?',
        lines: [
          { speaker:'A', pinyin:'Nǐ máng ma?', hanzi:'你忙吗？', en:'Are you busy?', vn:'Bạn bận không?' },
          { speaker:'B', pinyin:'Wǒ hěn máng, nǐ ne?', hanzi:'我很忙，你呢？', en:'I am very busy. And you?', vn:'Tôi rất bận, còn bạn?' },
          { speaker:'A', pinyin:'Wǒ bù máng.', hanzi:'我不忙。', en:'I am not busy.', vn:'Tôi không bận.' },
        ]
      },
      {
        title: 'Chào buổi sáng / tối',
        lines: [
          { speaker:'A', pinyin:'Zǎoshang hǎo.', hanzi:'早上好。', en:'Good morning.', vn:'Chào buổi sáng.' },
          { speaker:'B', pinyin:'Zǎoshang hǎo.', hanzi:'早上好。', en:'Good morning.', vn:'Chào buổi sáng.' },
          { speaker:'A', pinyin:'Wǎnshang hǎo.', hanzi:'晚上好。', en:'Good evening.', vn:'Chào buổi tối.' },
        ]
      },
      {
        title: 'Cảm ơn & Xin lỗi',
        lines: [
          { speaker:'A', pinyin:'Xièxie.', hanzi:'谢谢。', en:'Thanks.', vn:'Cảm ơn.' },
          { speaker:'B', pinyin:'Bú kèqi.', hanzi:'不客气。', en:'You\'re welcome.', vn:'Không có gì.' },
          { speaker:'A', pinyin:'Duìbuqǐ.', hanzi:'对不起。', en:'I\'m sorry.', vn:'Xin lỗi.' },
          { speaker:'B', pinyin:'Méi guānxi.', hanzi:'没关系。', en:'It doesn\'t matter.', vn:'Không sao.' },
        ]
      },
    ]
  },

  // ── Lesson 3: Introduction ──
  {
    lesson: 'L3', topic: 'Giới thiệu', title: 'Introduction',
    convos: [
      {
        title: 'Hỏi tên',
        lines: [
          { speaker:'A', pinyin:'Nín guì xìng?', hanzi:'您贵姓？', en:'What is your surname? (formal)', vn:'Xin hỏi quý danh? (trang trọng)' },
          { speaker:'B', pinyin:'Wǒ xìng Liú, nǐ xìng shénme?', hanzi:'我姓刘，你姓什么？', en:'My surname is Liu. And yours?', vn:'Tôi họ Lưu, bạn họ gì?' },
          { speaker:'A', pinyin:'Nǐ jiào shénme?', hanzi:'你叫什么？', en:'What is your name?', vn:'Bạn tên gì?' },
          { speaker:'B', pinyin:'Wǒ jiào Peter.', hanzi:'我叫Peter。', en:'My name is Peter.', vn:'Tôi tên Peter.' },
        ]
      },
      {
        title: 'Quốc tịch',
        lines: [
          { speaker:'A', pinyin:'Nǐ shì nǎ guó rén?', hanzi:'你是哪国人？', en:'Which country are you from?', vn:'Bạn là người nước nào?' },
          { speaker:'B', pinyin:'Wǒ shì Yuènánrén, nǐ ne?', hanzi:'我是越南人，你呢？', en:'I am Vietnamese. And you?', vn:'Tôi là người Việt Nam, còn bạn?' },
          { speaker:'A', pinyin:'Wǒ shì Zhōngguórén.', hanzi:'我是中国人。', en:'I am Chinese.', vn:'Tôi là người Trung Quốc.' },
        ]
      },
      {
        title: 'Nghề nghiệp',
        lines: [
          { speaker:'A', pinyin:'Wǒ shì lǎoshī, nǐ ne?', hanzi:'我是老师，你呢？', en:'I am a teacher. And you?', vn:'Tôi là giáo viên, còn bạn?' },
          { speaker:'B', pinyin:'Wǒ shì yīshēng.', hanzi:'我是医生。', en:'I am a doctor.', vn:'Tôi là bác sĩ.' },
        ]
      },
    ]
  },

  // ── Lesson 4: What Is This ──
  {
    lesson: 'L4', topic: 'Đây là gì?', title: 'What Is This',
    convos: [
      {
        title: 'Hỏi đồ vật',
        lines: [
          { speaker:'A', pinyin:'Zhè shì shénme?', hanzi:'这是什么？', en:'What is this?', vn:'Đây là cái gì?' },
          { speaker:'B', pinyin:'Zhè shì shū.', hanzi:'这是书。', en:'This is a book.', vn:'Đây là sách.' },
          { speaker:'A', pinyin:'Nà shì shénme?', hanzi:'那是什么？', en:'What is that?', vn:'Đó là cái gì?' },
          { speaker:'B', pinyin:'Nà shì kāfēi.', hanzi:'那是咖啡。', en:'That is coffee.', vn:'Đó là cà phê.' },
        ]
      },
      {
        title: 'Sở hữu — 的 (de)',
        lines: [
          { speaker:'A', pinyin:'Zhè shì shéi de shū?', hanzi:'这是谁的书？', en:'Whose book is this?', vn:'Đây là sách của ai?' },
          { speaker:'B', pinyin:'Zhè shì wǒ de shū.', hanzi:'这是我的书。', en:'This is my book.', vn:'Đây là sách của tôi.' },
          { speaker:'A', pinyin:'Nà shì nǐ de diànnǎo ma?', hanzi:'那是你的电脑吗？', en:'Is that your computer?', vn:'Đó có phải máy tính của bạn không?' },
          { speaker:'B', pinyin:'Shì, nà shì wǒ de diànnǎo.', hanzi:'是，那是我的电脑。', en:'Yes, that is my computer.', vn:'Vâng, đó là máy tính của tôi.' },
        ]
      },
    ]
  },

  // ── Lesson 5: Where Are You Going ──
  {
    lesson: 'L5', topic: 'Bạn đi đâu?', title: 'Where Are You Going',
    convos: [
      {
        title: 'Đi đâu?',
        lines: [
          { speaker:'A', pinyin:'Nǐ qù nǎli?', hanzi:'你去哪里？', en:'Where are you going?', vn:'Bạn đi đâu?' },
          { speaker:'B', pinyin:'Wǒ qù chāoshì.', hanzi:'我去超市。', en:'I am going to the supermarket.', vn:'Tôi đi siêu thị.' },
          { speaker:'A', pinyin:'Nǐ jiā zài nǎli?', hanzi:'你家在哪里？', en:'Where is your home?', vn:'Nhà bạn ở đâu?' },
          { speaker:'B', pinyin:'Wǒ jiā zài Běijīng.', hanzi:'我家在北京。', en:'My home is in Beijing.', vn:'Nhà tôi ở Bắc Kinh.' },
        ]
      },
      {
        title: 'Có và Không có',
        lines: [
          { speaker:'A', pinyin:'Nǐ yǒu shū ma?', hanzi:'你有书吗？', en:'Do you have a book?', vn:'Bạn có sách không?' },
          { speaker:'B', pinyin:'Wǒ yǒu shū.', hanzi:'我有书。', en:'I have a book.', vn:'Tôi có sách.' },
          { speaker:'A', pinyin:'Nǐ yǒu bǐ ma?', hanzi:'你有笔吗？', en:'Do you have a pen?', vn:'Bạn có bút không?' },
          { speaker:'B', pinyin:'Wǒ méiyǒu bǐ.', hanzi:'我没有笔。', en:'I don\'t have a pen.', vn:'Tôi không có bút.' },
        ]
      },
    ]
  },
];

// Key sentence patterns (grammar points)
const PATTERNS = [
  { id:'P1', pattern:'Subject + 好 + 吗？', pinyin:'... hǎo ma?', en:'How is...?', vn:'... khỏe không?', example:'你好吗？ Nǐ hǎo ma?', lesson:'L2' },
  { id:'P2', pattern:'Subject + 很 + Adj', pinyin:'... hěn + adj', en:'Subject is very + adj', vn:'... rất + tính từ', example:'我很好 Wǒ hěn hǎo', lesson:'L2' },
  { id:'P3', pattern:'Subject + 也 + Verb/Adj', pinyin:'... yě ...', en:'also/too', vn:'... cũng ...', example:'我也很忙 Wǒ yě hěn máng', lesson:'L2' },
  { id:'P4', pattern:'Subject + 不 + Verb/Adj', pinyin:'... bù ...', en:'not (negation)', vn:'... không ...', example:'我不忙 Wǒ bù máng', lesson:'L2' },
  { id:'P5', pattern:'..., 你呢？', pinyin:'..., nǐ ne?', en:'And you?', vn:'Còn bạn thì sao?', example:'我很好，你呢？', lesson:'L2' },
  { id:'P6', pattern:'Subject + 是 + Noun', pinyin:'... shì ...', en:'Subject is + noun', vn:'... là ...', example:'我是老师 Wǒ shì lǎoshī', lesson:'L3' },
  { id:'P7', pattern:'Subject + 叫 + Name', pinyin:'... jiào ...', en:'Subject is called...', vn:'... tên là ...', example:'我叫Peter Wǒ jiào Peter', lesson:'L3' },
  { id:'P8', pattern:'Subject + 姓 + Surname', pinyin:'... xìng ...', en:'surname is...', vn:'... họ là ...', example:'我姓张 Wǒ xìng Zhāng', lesson:'L3' },
  { id:'P9', pattern:'这/那 + 是 + Noun', pinyin:'zhè/nà shì ...', en:'This/That is...', vn:'Đây/Đó là...', example:'这是书 Zhè shì shū', lesson:'L4' },
  { id:'P10', pattern:'A + 的 + B', pinyin:'A de B', en:'A\'s B (possession)', vn:'B của A', example:'我的书 wǒ de shū', lesson:'L4' },
  { id:'P11', pattern:'Subject + 去 + Place', pinyin:'... qù ...', en:'go to...', vn:'... đi ...', example:'我去超市 Wǒ qù chāoshì', lesson:'L5' },
  { id:'P12', pattern:'Subject + 在 + Place', pinyin:'... zài ...', en:'be at/in...', vn:'... ở ...', example:'我在家 Wǒ zài jiā', lesson:'L5' },
  { id:'P13', pattern:'Subject + 有 + Object', pinyin:'... yǒu ...', en:'have...', vn:'... có ...', example:'我有书 Wǒ yǒu shū', lesson:'L5' },
  { id:'P14', pattern:'Subject + 没有 + Object', pinyin:'... méiyǒu ...', en:'don\'t have...', vn:'... không có ...', example:'我没有笔 Wǒ méiyǒu bǐ', lesson:'L5' },
  { id:'P15', pattern:'Time + Subject + Verb', pinyin:'time + subj + verb', en:'Time goes FIRST in Chinese', vn:'Thời gian đặt ĐẦU câu', example:'明天我去商店 Míngtiān wǒ qù shāngdiàn', lesson:'L5' },
];

// Common mistakes for Vietnamese learners
const VN_MISTAKES = [
  {
    title: 'Nhầm thanh điệu',
    desc: 'Tiếng Việt có 6 thanh, tiếng Trung có 4 + thanh nhẹ. Dễ nhầm nhất:',
    points: [
      'Thanh 1 (ˉ ngang cao) — KHÔNG giống thanh ngang tiếng Việt. Phải CAO hơn bình thường!',
      'Thanh 3 (ˇ xuống-lên) — Giống thanh HỎI nhưng phải xuống THẤP hơn rồi lên',
      'Thanh 4 (ˋ xuống) — Giống thanh NẶNG — rơi nhanh và dứt khoát',
      'Thanh 2 (ˊ lên) — Giống thanh SẮC — dễ nhất cho người Việt',
    ]
  },
  {
    title: 'Nhầm zh/ch/sh với tr/ch/s tiếng Việt',
    desc: 'zh, ch, sh trong tiếng Trung đều CONG LƯỠI (retroflex). Khác với tr, ch tiếng Việt:',
    points: [
      'zh = lưỡi cong chạm vòm miệng, rồi bật ra',
      'ch = giống zh nhưng BẬT HƠI mạnh',
      'sh = lưỡi cong, thổi hơi qua — giống "s" nhưng lưỡi cong',
      'r = giống sh nhưng có rung (voiced)',
      'Mẹo: Đặt ngón tay dưới cằm. Nếu lưỡi cong đúng, sẽ cảm thấy cằm hạ xuống',
    ]
  },
  {
    title: 'Nhầm z/c/s với d/t/x tiếng Việt',
    desc: 'z, c, s trong tiếng Trung là đầu lưỡi phẳng (flat tongue), KHÔNG cong:',
    points: [
      'z = đầu lưỡi chạm răng, giống "d" + "z"',
      'c = giống z nhưng bật hơi, giống "ts"',
      's = giống "x" tiếng Việt',
      'So sánh: zhī (知 biết) vs zī (资 tài nguyên) — cong lưỡi vs phẳng lưỡi',
    ]
  },
  {
    title: 'Không phân biệt j/q/x',
    desc: 'Ba âm này người Việt thường đọc giống nhau. Phải phân biệt bật hơi:',
    points: [
      'j = KHÔNG bật hơi — giống "ch" nhẹ, lưỡi phẳng',
      'q = BẬT HƠI mạnh — giống "ch" mạnh',
      'x = giống "s" — lưỡi phẳng, thổi hơi nhẹ',
      'Test: Đặt tay trước miệng. q phải cảm thấy hơi thổi ra, j thì không',
    ]
  },
  {
    title: 'Quên thanh nhẹ (neutral tone)',
    desc: 'Âm tiết cuối trong nhiều từ đọc NHẸ và NHANH, không nhấn:',
    points: [
      'māma (妈妈) — ma thứ 2 đọc nhẹ',
      'xièxie (谢谢) — xie thứ 2 đọc nhẹ',
      'shénme (什么) — me đọc nhẹ',
      'Quy tắc: Từ lặp lại (mama, baba) thường có thanh nhẹ ở âm tiết 2',
    ]
  },
];

// ══════════════════════════════════════════
//  VOCABULARY DATA — Chinese Express Lessons 2-10
//  Format: [pinyin, hanzi, pos, english, vietnamese]
// ══════════════════════════════════════════

const VOCAB = {
  // ── LESSON 2: Greetings (问好) ──
  'Chào hỏi': {
    id:'L2', name:'Greetings', hanzi:'问好', pinyinTitle:'wènhǎo',
    words: [
      ['wǒ','我','pron.','I; me','tôi'],
      ['nǐ','你','pron.','you','bạn'],
      ['tā','他/她','pron.','he; she','anh ấy; cô ấy'],
      ['wǒmen','我们','pron.','we; us','chúng tôi'],
      ['nǐmen','你们','pron.','you (plural)','các bạn'],
      ['tāmen','他们/她们','pron.','they; them','họ'],
      ['hǎo','好','adj.','good; well','tốt; khỏe'],
      ['ma','吗','particle','question particle','trợ từ nghi vấn'],
      ['hěn','很','adv.','very','rất'],
      ['yě','也','adv.','also; too','cũng'],
      ['ne','呢','particle','and you?','còn (bạn) thì?'],
      ['máng','忙','adj.','busy','bận'],
      ['bù','不','adv.','not; no','không'],
      ['bàba','爸爸','n.','dad','bố; ba'],
      ['māma','妈妈','n.','mum','mẹ; má'],
      ['zǎoshang','早上','n.','morning','buổi sáng'],
      ['wǎnshang','晚上','n.','evening','buổi tối'],
      ['xièxie','谢谢','v.','thanks','cảm ơn'],
      ['bú kèqi','不客气','','you\'re welcome','không có gì'],
      ['duìbuqǐ','对不起','','I\'m sorry','xin lỗi'],
      ['méi guānxi','没关系','','it doesn\'t matter','không sao'],
      ['zàijiàn','再见','','goodbye','tạm biệt'],
      ['xiānsheng','先生','n.','Mr.; sir','ông; anh'],
      ['xiǎojie','小姐','n.','miss','cô'],
      ['tàitai','太太','n.','Mrs.; wife','bà; vợ'],
    ]
  },

  // ── LESSON 3: Introduction (介绍) ──
  'Giới thiệu': {
    id:'L3', name:'Introduction', hanzi:'介绍', pinyinTitle:'jièshào',
    words: [
      ['jiào','叫','v.','to call; to be known as','gọi; tên là'],
      ['shì','是','v.','to be','là'],
      ['xìng','姓','v.','to surname','họ (động từ)'],
      ['xìngmíng','姓名','n.','name','họ tên'],
      ['guì','贵','adj.','honoured','quý'],
      ['shénme','什么','pron.','what','cái gì'],
      ['shéi','谁','pron.','who','ai'],
      ['péngyou','朋友','n.','friend','bạn bè'],
      ['lǎoshī','老师','n.','teacher','giáo viên; thầy/cô'],
      ['yīshēng','医生','n.','doctor','bác sĩ'],
      ['nǎ','哪','pron.','which','nào'],
      ['guó','国','n.','country','nước; quốc gia'],
      ['rén','人','n.','person','người'],
      ['Zhōngguó','中国','n.','China','Trung Quốc'],
      ['Zhōngguórén','中国人','n.','Chinese person','người Trung Quốc'],
      ['Yuènán','越南','n.','Vietnam','Việt Nam'],
      ['Yuènánrén','越南人','n.','Vietnamese person','người Việt Nam'],
      ['Měiguó','美国','n.','USA','Mỹ'],
      ['Yīngguó','英国','n.','UK','Anh'],
      ['Rìběn','日本','n.','Japan','Nhật Bản'],
      ['Hánguó','韩国','n.','Korea','Hàn Quốc'],
      ['Hànyǔ','汉语','n.','Chinese language','tiếng Hán; tiếng Trung'],
      ['Yīngyǔ','英语','n.','English','tiếng Anh'],
    ]
  },

  // ── LESSON 4: What Is This (这是什么) ──
  'Đây là gì?': {
    id:'L4', name:'What Is This', hanzi:'这是什么', pinyinTitle:'zhè shì shénme',
    words: [
      ['zhè','这','pron.','this','đây; này'],
      ['nà','那','pron.','that','đó; kia'],
      ['gè','个','MW','measure word','lượng từ (cái)'],
      ['shū','书','n.','book','sách'],
      ['shuǐ','水','n.','water','nước'],
      ['bǐ','笔','n.','pen','bút'],
      ['chá','茶','n.','tea','trà'],
      ['kāfēi','咖啡','n.','coffee','cà phê'],
      ['diànshì','电视','n.','TV','ti vi'],
      ['diànhuà','电话','n.','telephone','điện thoại'],
      ['diànnǎo','电脑','n.','computer','máy tính'],
      ['de','的','particle','possessive particle','của (trợ từ sở hữu)'],
      ['piàoliang','漂亮','adj.','beautiful','đẹp'],
      ['huār','花儿','n.','flower','hoa'],
    ]
  },

  // ── LESSON 5: Where Are You Going (你去哪里) ──
  'Bạn đi đâu?': {
    id:'L5', name:'Where Are You Going', hanzi:'你去哪里', pinyinTitle:'nǐ qù nǎli',
    words: [
      ['qù','去','v.','to go','đi'],
      ['lái','来','v.','to come','đến'],
      ['huí','回','v.','to return','về; trở về'],
      ['kàn','看','v.','to see; to watch; to read','xem; nhìn; đọc'],
      ['yǒu','有','v.','to have','có'],
      ['zài','在','v./prep.','to be in; at; on','ở; tại'],
      ['jìn','进','v.','to enter','vào'],
      ['qǐng','请','v.','please; to invite','mời; xin'],
      ['shāngdiàn','商店','n.','shop; store','cửa hàng'],
      ['shìchǎng','市场','n.','market','chợ'],
      ['chāoshì','超市','n.','supermarket','siêu thị'],
      ['gōngsī','公司','n.','company','công ty'],
      ['jiā','家','n.','home','nhà'],
      ['nǎr/nǎli','哪儿/哪里','pron.','where','ở đâu'],
      ['méi','没','adv.','not; no','không (phủ định có)'],
      ['bēizi','杯子','n.','cup; glass','cốc; ly'],
      ['bēi','杯','MW','cup of','ly (lượng từ)'],
      ['gōngzuò','工作','v./n.','to work; work; job','làm việc; công việc'],
      ['zǎoshang','早上','n.','early morning','buổi sáng sớm'],
      ['shàngwǔ','上午','n.','morning','buổi sáng'],
      ['zhōngwǔ','中午','n.','noon; lunch time','buổi trưa'],
      ['xiàwǔ','下午','n.','afternoon','buổi chiều'],
      ['wǎnshang','晚上','n.','evening','buổi tối'],
      ['zuótiān','昨天','n.','yesterday','hôm qua'],
      ['jīntiān','今天','n.','today','hôm nay'],
      ['míngtiān','明天','n.','tomorrow','ngày mai'],
    ]
  },

  // ── LESSON 6: May I Have... (我要) ──
  'Tôi muốn...': {
    id:'L6', name:'May I Have...', hanzi:'我要……', pinyinTitle:'wǒ yào',
    words: [
      ['yào','要','v.','to want; to need','muốn; cần'],
      ['mǎi','买','v.','to buy','mua'],
      ['duōshao','多少','pron.','how much; how many','bao nhiêu'],
      ['qián','钱','n.','money','tiền'],
      ['kuài','块','MW','yuan (dollar)','đồng (tệ)'],
      ['máo','毛','MW','0.1 yuan','hào (1/10 tệ)'],
      ['píngguǒ','苹果','n.','apple','táo'],
      ['xiāngjiāo','香蕉','n.','banana','chuối'],
      ['pútao','葡萄','n.','grape','nho'],
      ['xīguā','西瓜','n.','watermelon','dưa hấu'],
      ['jīn','斤','MW','0.5 kg','cân (nửa kg)'],
      ['liǎng','两','num.','two (before MW)','hai (trước lượng từ)'],
      ['gěi','给','v.','to give','cho'],
      ['zhǎo','找','v.','to find; to give change','tìm; trả lại tiền'],
      ['hái','还','adv.','still; also','còn; vẫn'],
      ['bié de','别的','pron.','other; else','khác; cái khác'],
      ['dōngxi','东西','n.','thing; stuff','đồ; thứ'],
    ]
  },

  // ── LESSON 7: Taking a Taxi (打的) ──
  'Đi taxi': {
    id:'L7', name:'Taking a Taxi', hanzi:'打的', pinyinTitle:'dǎ dī',
    words: [
      ['dǎ dī','打的','v.','to take a taxi','đi taxi'],
      ['zuò','坐','v.','to sit; to take (transport)','ngồi; đi (xe)'],
      ['dào','到','v.','to arrive','đến'],
      ['tíng','停','v.','to stop','dừng'],
      ['zǒu','走','v.','to walk; to go','đi; đi bộ'],
      ['lù','路','n.','road','đường'],
      ['yòu','右','n.','right','bên phải'],
      ['zuǒ','左','n.','left','bên trái'],
      ['qiánmiàn','前面','n.','front; ahead','phía trước'],
      ['lùkǒu','路口','n.','intersection','ngã tư; ngã ba'],
      ['hónglǜdēng','红绿灯','n.','traffic light','đèn giao thông'],
      ['yuǎn','远','adj.','far','xa'],
      ['jìn','近','adj.','near','gần'],
      ['fēijī','飞机','n.','airplane','máy bay'],
      ['huǒchē','火车','n.','train','tàu hỏa'],
      ['chūzūchē','出租车','n.','taxi','xe taxi'],
      ['gōnggòngqìchē','公共汽车','n.','bus','xe buýt'],
      ['dìtiě','地铁','n.','subway','tàu điện ngầm'],
    ]
  },

  // ── LESSON 8: What Time Is It (什么时候) ──
  'Mấy giờ?': {
    id:'L8', name:'What Time Is It', hanzi:'什么时候', pinyinTitle:'shénme shíhou',
    words: [
      ['jǐ','几','pron.','how many; which','mấy'],
      ['diǎn','点','MW','o\'clock','giờ (giờ đồng hồ)'],
      ['fēn','分','MW','minute','phút'],
      ['bàn','半','num.','half','nửa; rưỡi'],
      ['kè','刻','MW','quarter (15 min)','khắc (15 phút)'],
      ['xiànzài','现在','n.','now','bây giờ'],
      ['shíhòu','时候','n.','time; moment','lúc; khi nào'],
      ['chī fàn','吃饭','v.','to eat','ăn cơm'],
      ['shuì jiào','睡觉','v.','to sleep','ngủ'],
      ['qǐ chuáng','起床','v.','to get up','thức dậy'],
      ['shàng bān','上班','v.','to go to work','đi làm'],
      ['xià bān','下班','v.','to get off work','tan làm'],
      ['chà','差','v.','to lack; before','kém; thiếu'],
      ['zǎo','早','adj.','early','sớm'],
      ['wǎn','晚','adj.','late','muộn; tối'],
    ]
  },

  // ── LESSON 9: Date (日期) ──
  'Ngày tháng': {
    id:'L9', name:'Date', hanzi:'日期', pinyinTitle:'rìqī',
    words: [
      ['nián','年','n.','year','năm'],
      ['yuè','月','n.','month','tháng'],
      ['rì/hào','日/号','n.','day; date','ngày'],
      ['xīngqī','星期','n.','week','tuần'],
      ['xīngqīyī','星期一','n.','Monday','thứ Hai'],
      ['xīngqīèr','星期二','n.','Tuesday','thứ Ba'],
      ['xīngqīsān','星期三','n.','Wednesday','thứ Tư'],
      ['xīngqīsì','星期四','n.','Thursday','thứ Năm'],
      ['xīngqīwǔ','星期五','n.','Friday','thứ Sáu'],
      ['xīngqīliù','星期六','n.','Saturday','thứ Bảy'],
      ['xīngqītiān','星期天','n.','Sunday','Chủ Nhật'],
      ['shēngrì','生日','n.','birthday','sinh nhật'],
      ['suì','岁','MW','years old','tuổi'],
      ['duō dà','多大','','how old','bao nhiêu tuổi'],
      ['shàng ge yuè','上个月','','last month','tháng trước'],
      ['xià ge yuè','下个月','','next month','tháng sau'],
    ]
  },

  // ── LESSON 10: Food (吃的东西) ──
  'Đồ ăn': {
    id:'L10', name:'Food', hanzi:'吃的东西', pinyinTitle:'chī de dōngxi',
    words: [
      ['mǐfàn','米饭','n.','rice','cơm'],
      ['miàntiáo','面条','n.','noodles','mì; phở'],
      ['jiǎozi','饺子','n.','dumplings','sủi cảo'],
      ['bāozi','包子','n.','steamed bun','bánh bao'],
      ['mántou','馒头','n.','steamed bread','bánh bao không nhân'],
      ['jīdàn','鸡蛋','n.','egg','trứng gà'],
      ['niúnǎi','牛奶','n.','milk','sữa bò'],
      ['niúròu','牛肉','n.','beef','thịt bò'],
      ['zhūròu','猪肉','n.','pork','thịt heo'],
      ['jīròu','鸡肉','n.','chicken','thịt gà'],
      ['yú','鱼','n.','fish','cá'],
      ['qīngcài','青菜','n.','vegetables','rau xanh'],
      ['dòufu','豆腐','n.','tofu','đậu phụ'],
      ['tāng','汤','n.','soup','canh; súp'],
      ['kuàizi','筷子','n.','chopsticks','đũa'],
      ['dāozi','刀子','n.','knife','dao'],
      ['chāzi','叉子','n.','fork','nĩa'],
      ['sháozi','勺子','n.','spoon','thìa; muỗng'],
      ['pánzi','盘子','n.','plate','đĩa'],
      ['wǎn','碗','n.','bowl','bát; chén'],
      ['cānjīn','餐巾','n.','napkin','khăn ăn'],
    ]
  },

  // ── Numbers (Bổ sung — Lesson 3 supplement) ──
  'Số đếm': {
    id:'NUM', name:'Numbers', hanzi:'数字', pinyinTitle:'shùzì',
    words: [
      ['líng','零','num.','zero','số 0'],
      ['yī','一','num.','one','số 1'],
      ['èr','二','num.','two','số 2'],
      ['sān','三','num.','three','số 3'],
      ['sì','四','num.','four','số 4'],
      ['wǔ','五','num.','five','số 5'],
      ['liù','六','num.','six','số 6'],
      ['qī','七','num.','seven','số 7'],
      ['bā','八','num.','eight','số 8'],
      ['jiǔ','九','num.','nine','số 9'],
      ['shí','十','num.','ten','số 10'],
      ['bǎi','百','num.','hundred','trăm'],
      ['qiān','千','num.','thousand','nghìn'],
    ]
  },
};

// All words flattened for flashcards/quiz
function getAllWords() {
  const all = [];
  for (const [topic, data] of Object.entries(VOCAB)) {
    data.words.forEach(w => all.push({ pinyin:w[0], hanzi:w[1], pos:w[2], en:w[3], vn:w[4], topic:topic, lessonId:data.id }));
  }
  return all;
}

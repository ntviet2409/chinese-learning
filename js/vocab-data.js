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
  // ── Phương hướng & Vị trí (Directions & Position) ──
  'Phương hướng & Vị trí': {
    id:'DIR', name:'Directions & Position', hanzi:'方向和位置', pinyinTitle:'fāngxiàng hé wèizhi',
    words: [
      // Phương hướng
      ['dōng','东','n.','east','đông'],
      ['nán','南','n.','south','nam'],
      ['xī','西','n.','west','tây'],
      ['běi','北','n.','north','bắc'],
      ['zuǒ','左','n.','left','trái'],
      ['yòu','右','n.','right','phải'],
      ['qián','前','n.','front','trước'],
      ['hòu','后','n.','back; behind','sau; phía sau'],
      ['shàng','上','n.','up; above; on','trên'],
      ['xià','下','n.','down; below; under','dưới'],
      // Vị trí chi tiết
      ['qiánmiàn','前面','n.','in front of','phía trước'],
      ['hòumiàn','后面','n.','behind','phía sau'],
      ['zuǒbiān','左边','n.','left side','bên trái'],
      ['yòubiān','右边','n.','right side','bên phải'],
      ['shàngmiàn','上面','n.','above; on top of','phía trên; ở trên'],
      ['xiàmiàn','下面','n.','below; underneath','phía dưới; ở dưới'],
      ['lǐmiàn','里面','n.','inside','bên trong'],
      ['wàimiàn','外面','n.','outside','bên ngoài'],
      ['zhōngjiān','中间','n.','middle; between','ở giữa'],
      ['pángbiān','旁边','n.','beside; next to','bên cạnh'],
      ['duìmiàn','对面','n.','opposite; across from','đối diện'],
      ['fùjìn','附近','n.','nearby; vicinity','gần đây; lân cận'],
      ['zhōuwéi','周围','n.','surrounding','xung quanh'],
    ]
  },

  // ── Hỏi đường & Đi lại (Asking Directions & Transport) ──
  'Hỏi đường & Đi lại': {
    id:'NAV', name:'Asking Directions & Transport', hanzi:'问路和交通', pinyinTitle:'wènlù hé jiāotōng',
    words: [
      // Hỏi đường
      ['qǐngwèn','请问','v.','excuse me (to ask)','xin hỏi'],
      ['zěnme zǒu','怎么走','','how to get there','đi thế nào'],
      ['wǎng','往','prep.','towards','về phía'],
      ['yìzhí','一直','adv.','straight','thẳng'],
      ['guǎi','拐','v.','to turn','rẽ; quẹo'],
      ['zuǒ guǎi','左拐','','turn left','rẽ trái'],
      ['yòu guǎi','右拐','','turn right','rẽ phải'],
      ['guò','过','v.','to cross; to pass','qua; băng qua'],
      ['dào','到','v.','to arrive','đến'],
      ['lí','离','prep.','from (distance)','cách'],
      ['lùkǒu','路口','n.','intersection','ngã tư'],
      ['hónglǜdēng','红绿灯','n.','traffic light','đèn giao thông'],
      ['shízìlùkǒu','十字路口','n.','crossroad','ngã tư đường'],
      ['tiānqiáo','天桥','n.','overpass; footbridge','cầu vượt'],
      ['dìxià tōngdào','地下通道','n.','underpass; subway passage','đường hầm'],
      // Phương tiện
      ['chē','车','n.','vehicle; car','xe'],
      ['gōnggòngqìchē','公共汽车','n.','bus','xe buýt'],
      ['dìtiě','地铁','n.','subway; metro','tàu điện ngầm'],
      ['chūzūchē','出租车','n.','taxi','xe taxi'],
      ['huǒchē','火车','n.','train','tàu hỏa'],
      ['fēijī','飞机','n.','airplane','máy bay'],
      ['zìxíngchē','自行车','n.','bicycle','xe đạp'],
      ['chēzhàn','车站','n.','station; bus stop','trạm xe; bến xe'],
      ['jīchǎng','机场','n.','airport','sân bay'],
      ['zuò chē','坐车','v.','to take a vehicle','đi xe'],
      ['kāi chē','开车','v.','to drive','lái xe'],
      ['dǎ chē','打车','v.','to take a taxi','bắt taxi'],
    ]
  },

  // ── Địa điểm & Nơi chốn (Places) ──
  'Địa điểm': {
    id:'PLC', name:'Places', hanzi:'地方', pinyinTitle:'dìfang',
    words: [
      ['yīyuàn','医院','n.','hospital','bệnh viện'],
      ['yào diàn','药店','n.','pharmacy','nhà thuốc'],
      ['xuéxiào','学校','n.','school','trường học'],
      ['dàxué','大学','n.','university','đại học'],
      ['yínháng','银行','n.','bank','ngân hàng'],
      ['yóujú','邮局','n.','post office','bưu điện'],
      ['jǐngchájú','警察局','n.','police station','đồn công an'],
      ['fàndiàn','饭店','n.','hotel; restaurant','khách sạn; nhà hàng'],
      ['cāntīng','餐厅','n.','restaurant; canteen','nhà hàng; căng tin'],
      ['kāfēi diàn','咖啡店','n.','coffee shop','quán cà phê'],
      ['shūdiàn','书店','n.','bookstore','nhà sách'],
      ['chāoshì','超市','n.','supermarket','siêu thị'],
      ['shāngchǎng','商场','n.','shopping mall','trung tâm thương mại'],
      ['gōngyuán','公园','n.','park','công viên'],
      ['tǐyùguǎn','体育馆','n.','gymnasium; stadium','nhà thi đấu'],
      ['túshūguǎn','图书馆','n.','library','thư viện'],
      ['bówùguǎn','博物馆','n.','museum','bảo tàng'],
      ['diànyǐngyuàn','电影院','n.','cinema','rạp chiếu phim'],
      ['cèsuǒ','厕所','n.','toilet; restroom','nhà vệ sinh'],
      ['jiàoshì','教室','n.','classroom','phòng học'],
      ['bàngōngshì','办公室','n.','office','văn phòng'],
    ]
  },

  // ── Bệnh viện & Sức khỏe (Hospital & Health) ──
  'Bệnh viện & Sức khỏe': {
    id:'MED', name:'Hospital & Health', hanzi:'医院和健康', pinyinTitle:'yīyuàn hé jiànkāng',
    words: [
      ['yīshēng','医生','n.','doctor','bác sĩ'],
      ['hùshi','护士','n.','nurse','y tá'],
      ['bìngrén','病人','n.','patient','bệnh nhân'],
      ['kàn bìng','看病','v.','to see a doctor','khám bệnh'],
      ['bìng','病','n./adj.','illness; sick','bệnh; ốm'],
      ['shēntǐ','身体','n.','body','cơ thể'],
      ['tóu','头','n.','head','đầu'],
      ['yǎnjing','眼睛','n.','eyes','mắt'],
      ['ěrduo','耳朵','n.','ears','tai'],
      ['bízi','鼻子','n.','nose','mũi'],
      ['zuǐba','嘴巴','n.','mouth','miệng'],
      ['yáchǐ','牙齿','n.','teeth','răng'],
      ['dùzi','肚子','n.','stomach; belly','bụng'],
      ['tuǐ','腿','n.','leg','chân (đùi)'],
      ['shǒu','手','n.','hand','tay'],
      ['jiǎo','脚','n.','foot','bàn chân'],
      ['tóu téng','头疼','','headache','đau đầu'],
      ['dùzi téng','肚子疼','','stomachache','đau bụng'],
      ['fā shāo','发烧','v.','to have a fever','sốt'],
      ['gǎnmào','感冒','n./v.','cold; to catch a cold','cảm; bị cảm'],
      ['ké sou','咳嗽','v.','to cough','ho'],
      ['yào','药','n.','medicine','thuốc'],
      ['chī yào','吃药','v.','to take medicine','uống thuốc'],
      ['dǎ zhēn','打针','v.','to get an injection','tiêm; chích'],
      ['shū fu','舒服','adj.','comfortable','thoải mái; dễ chịu'],
      ['bù shūfu','不舒服','adj.','not feeling well','không khỏe; khó chịu'],
    ]
  },

  // ── Trường học (School) ──
  'Trường học': {
    id:'SCH', name:'School', hanzi:'学校', pinyinTitle:'xuéxiào',
    words: [
      ['xuéshēng','学生','n.','student','học sinh; sinh viên'],
      ['lǎoshī','老师','n.','teacher','giáo viên'],
      ['tóngxué','同学','n.','classmate','bạn cùng lớp'],
      ['bān','班','n.','class','lớp'],
      ['kè','课','n.','lesson; class','bài; tiết học'],
      ['shàng kè','上课','v.','to attend class','đi học; vào lớp'],
      ['xià kè','下课','v.','to finish class','tan học; hết tiết'],
      ['xuéxí','学习','v.','to study; to learn','học tập'],
      ['kǎoshì','考试','n./v.','exam; to take an exam','thi; kiểm tra'],
      ['zuòyè','作业','n.','homework','bài tập'],
      ['shū','书','n.','book','sách'],
      ['bǐ','笔','n.','pen','bút'],
      ['qiānbǐ','铅笔','n.','pencil','bút chì'],
      ['běnzi','本子','n.','notebook','vở'],
      ['hēibǎn','黑板','n.','blackboard','bảng đen'],
      ['zìdiǎn','字典','n.','dictionary','từ điển'],
      ['wèntí','问题','n.','question; problem','câu hỏi; vấn đề'],
      ['huídá','回答','v.','to answer','trả lời'],
      ['dǒng','懂','v.','to understand','hiểu'],
      ['bù dǒng','不懂','','don\'t understand','không hiểu'],
      ['dú','读','v.','to read aloud','đọc'],
      ['xiě','写','v.','to write','viết'],
      ['shuō','说','v.','to speak; to say','nói'],
      ['tīng','听','v.','to listen','nghe'],
    ]
  },

  // ── Đồ vật & Trong ngoài (Objects & Spatial) ──
  'Đồ vật': {
    id:'OBJ', name:'Objects', hanzi:'东西', pinyinTitle:'dōngxi',
    words: [
      ['zhuōzi','桌子','n.','table; desk','bàn'],
      ['yǐzi','椅子','n.','chair','ghế'],
      ['chuáng','床','n.','bed','giường'],
      ['mén','门','n.','door','cửa'],
      ['chuānghu','窗户','n.','window','cửa sổ'],
      ['qiáng','墙','n.','wall','tường'],
      ['dēng','灯','n.','light; lamp','đèn'],
      ['kōngtiáo','空调','n.','air conditioner','máy lạnh; điều hòa'],
      ['diànshì','电视','n.','TV','ti vi'],
      ['bīngxiāng','冰箱','n.','refrigerator','tủ lạnh'],
      ['xǐyījī','洗衣机','n.','washing machine','máy giặt'],
      ['shǒujī','手机','n.','mobile phone','điện thoại di động'],
      ['diànnǎo','电脑','n.','computer','máy tính'],
      ['yàoshi','钥匙','n.','key','chìa khóa'],
      ['qiánbāo','钱包','n.','wallet','ví tiền'],
      ['bāo','包','n.','bag','túi; balo'],
      ['yǔsǎn','雨伞','n.','umbrella','ô; dù'],
      ['yīfu','衣服','n.','clothes','quần áo'],
      ['xié','鞋','n.','shoes','giày'],
      ['màozi','帽子','n.','hat','mũ; nón'],
      ['yǎnjìng','眼镜','n.','glasses','kính'],
    ]
  },

  // ── Gia đình (Family) ──
  'Gia đình': {
    id:'FAM', name:'Family', hanzi:'家庭', pinyinTitle:'jiātíng',
    words: [
      ['bàba','爸爸','n.','dad','bố; ba'],
      ['māma','妈妈','n.','mom','mẹ; má'],
      ['gēge','哥哥','n.','older brother','anh trai'],
      ['jiějie','姐姐','n.','older sister','chị gái'],
      ['dìdi','弟弟','n.','younger brother','em trai'],
      ['mèimei','妹妹','n.','younger sister','em gái'],
      ['érzi','儿子','n.','son','con trai'],
      ['nǚér','女儿','n.','daughter','con gái'],
      ['zhàngfu','丈夫','n.','husband','chồng'],
      ['qīzi','妻子','n.','wife','vợ'],
      ['yéye','爷爷','n.','grandpa (paternal)','ông nội'],
      ['nǎinai','奶奶','n.','grandma (paternal)','bà nội'],
      ['wàigōng','外公','n.','grandpa (maternal)','ông ngoại'],
      ['wàipó','外婆','n.','grandma (maternal)','bà ngoại'],
      ['háizi','孩子','n.','child; children','con; đứa trẻ'],
      ['jiā','家','n.','home; family','nhà; gia đình'],
      ['jiārén','家人','n.','family members','người nhà'],
    ]
  },

  // ── Thời tiết (Weather) ──
  'Thời tiết': {
    id:'WEA', name:'Weather', hanzi:'天气', pinyinTitle:'tiānqì',
    words: [
      ['tiānqì','天气','n.','weather','thời tiết'],
      ['rè','热','adj.','hot','nóng'],
      ['lěng','冷','adj.','cold','lạnh'],
      ['nuǎnhuo','暖和','adj.','warm','ấm áp'],
      ['liángkuai','凉快','adj.','cool','mát mẻ'],
      ['xià yǔ','下雨','v.','to rain','mưa'],
      ['xià xuě','下雪','v.','to snow','tuyết rơi'],
      ['guā fēng','刮风','v.','to be windy','gió thổi'],
      ['tàiyáng','太阳','n.','sun','mặt trời'],
      ['yún','云','n.','cloud','mây'],
      ['yīn tiān','阴天','n.','cloudy day','trời âm u'],
      ['qíng tiān','晴天','n.','sunny day','trời nắng'],
      ['wēndù','温度','n.','temperature','nhiệt độ'],
      ['dù','度','MW','degree','độ'],
    ]
  },

  // ── Màu sắc (Colors) ──
  'Màu sắc': {
    id:'CLR', name:'Colors', hanzi:'颜色', pinyinTitle:'yánsè',
    words: [
      ['yánsè','颜色','n.','color','màu sắc'],
      ['hóngsè','红色','n.','red','màu đỏ'],
      ['huángsè','黄色','n.','yellow','màu vàng'],
      ['lǜsè','绿色','n.','green','màu xanh lá'],
      ['lánsè','蓝色','n.','blue','màu xanh dương'],
      ['báisè','白色','n.','white','màu trắng'],
      ['hēisè','黑色','n.','black','màu đen'],
      ['fěnsè','粉色','n.','pink','màu hồng'],
      ['zǐsè','紫色','n.','purple','màu tím'],
      ['huīsè','灰色','n.','grey','màu xám'],
      ['chéngsè','橙色','n.','orange','màu cam'],
      ['kāfēisè','咖啡色','n.','brown','màu nâu'],
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

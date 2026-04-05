// ══════════════════════════════════════════
//  CHINESE LEARNING HUB — Main App
//  Matching English Portal format
// ══════════════════════════════════════════

// ── Speech: Google Translate TTS (natural female voice) ──
// Falls back to Web Speech API if Google fails
let currentAudio = null;

function speak(text, rate) {
  // Stop any currently playing audio
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }
  if ('speechSynthesis' in window) speechSynthesis.cancel();

  if (!text) return;

  // Fallback chain: multiple TTS providers → Web Speech API
  const encoded = encodeURIComponent(text);
  const providers = [
    // Youdao Dictionary TTS — natural female voice
    'https://dict.youdao.com/dictvoice?audio=' + encoded + '&le=zh',
    // Google Translate TTS — reliable fallback
    'https://translate.googleapis.com/translate_tts?client=gtx&tl=zh-CN&q=' + encoded,
  ];

  let tried = 0;
  function tryNext() {
    if (tried >= providers.length) {
      // All online providers failed — use browser TTS
      speakFallback(text, rate);
      return;
    }
    const url = providers[tried];
    tried++;
    currentAudio = new Audio();

    // Set up error handling BEFORE setting src
    currentAudio.onerror = function() { tryNext(); };

    // Set timeout — if no sound in 3s, try next
    const timeout = setTimeout(function() {
      if (currentAudio && currentAudio.readyState < 2) {
        currentAudio.pause();
        tryNext();
      }
    }, 3000);

    currentAudio.oncanplaythrough = function() {
      clearTimeout(timeout);
      currentAudio.playbackRate = rate || 1.0;
    };

    currentAudio.src = url;
    currentAudio.play().catch(function() {
      clearTimeout(timeout);
      tryNext();
    });
  }
  tryNext();
}

// Slow mode — for learning, plays at 0.7x speed
function speakSlow(text) {
  speak(text, 0.7);
}

function speakFallback(text, rate) {
  if (!('speechSynthesis' in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'zh-CN';
  u.rate = rate || 0.8;
  u.pitch = 1.1; // slightly higher pitch = more feminine
  const voices = speechSynthesis.getVoices();
  // Priority: female Chinese > any Chinese with female keywords > any Chinese
  const zhVoices = voices.filter(v => v.lang.startsWith('zh'));
  const femaleKeywords = ['female','ting','xiaoxiao','yaoyao','xiaoyi','huihui','lili','nü'];
  const zhFemale = zhVoices.find(v => femaleKeywords.some(k => v.name.toLowerCase().includes(k)));
  const voice = zhFemale || zhVoices[0];
  if (voice) u.voice = voice;
  speechSynthesis.speak(u);
}

// Preload voices for fallback
if ('speechSynthesis' in window) {
  speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
}

// ── Theme ──
function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  document.getElementById('themeToggle').textContent = isDark ? 'Light' : 'Dark';
  localStorage.setItem('zh-theme', isDark ? 'dark' : 'light');
}
(function() {
  if (localStorage.getItem('zh-theme') === 'dark') {
    document.body.classList.add('dark');
    const b = document.getElementById('themeToggle');
    if (b) b.textContent = 'Light';
  }
})();

// ── Mobile Nav ──
function toggleMobileMenu() { document.getElementById('mobileNav').classList.toggle('open'); }
function scrollToSection(id) { document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'}); }

// ── Learned Words (localStorage) ──
let learnedWords = JSON.parse(localStorage.getItem('zh-learned') || '{}');
function toggleLearned(pinyin) {
  if (learnedWords[pinyin]) delete learnedWords[pinyin];
  else learnedWords[pinyin] = true;
  localStorage.setItem('zh-learned', JSON.stringify(learnedWords));
  updateStats();
  renderVocab();
}

// ── Daily Tracking ──
function getTodayKey() { return new Date().toISOString().slice(0,10); }
function getDailyData() { return JSON.parse(localStorage.getItem('zh-daily') || '{}'); }
function saveDailyData(d) { localStorage.setItem('zh-daily', JSON.stringify(d)); }
function getDailyTarget() { return parseInt(localStorage.getItem('zh-dailyTarget') || '10'); }
function updateDailyTarget(v) { localStorage.setItem('zh-dailyTarget', v); updateDashboard(); }

function markWordToday(pinyin) {
  const d = getDailyData();
  const today = getTodayKey();
  if (!d[today]) d[today] = [];
  if (!d[today].includes(pinyin)) d[today].push(pinyin);
  saveDailyData(d);
}

// ── Stats ──
function updateStats() {
  const allWords = getAllWords();
  const total = allWords.length;
  const learned = allWords.filter(w => learnedWords[w.pinyin]).length;
  const el = document.getElementById('vocabStats');
  if (el) el.innerHTML = '<span class="stat-learned">' + learned + '</span> / <span class="stat-total">' + total + '</span> từ đã học';
}

// ── Dashboard ──
function updateDashboard() {
  const today = getTodayKey();
  const daily = getDailyData();
  const todayWords = daily[today] || [];
  const target = getDailyTarget();
  const pct = Math.min(100, Math.round(todayWords.length / target * 100));

  // Date
  const d = new Date();
  const dateStr = d.toLocaleDateString('vi-VN', {weekday:'long', day:'numeric', month:'long', year:'numeric'});
  document.getElementById('dashDate').textContent = dateStr;

  // Progress
  document.getElementById('dailyProgressLabel').textContent = todayWords.length + ' / ' + target + ' từ hôm nay';
  document.getElementById('dailyProgressPct').textContent = pct + '%';
  document.getElementById('dailyProgressFill').style.width = pct + '%';
  document.getElementById('dailyProgressFill').className = 'daily-progress-fill ' + (pct >= 100 ? 'complete' : 'incomplete');
  document.getElementById('dailyTarget').value = target;

  // Heatmap (30 days)
  const heatmap = document.getElementById('heatmap');
  let hm = '';
  for (let i = 29; i >= 0; i--) {
    const dd = new Date(Date.now() - i * 86400000);
    const key = dd.toISOString().slice(0,10);
    const count = (daily[key] || []).length;
    const level = count === 0 ? 0 : count < 3 ? 1 : count < 7 ? 2 : 3;
    hm += '<div class="hm-cell hm-' + level + '" title="' + dd.getDate() + '/' + (dd.getMonth()+1) + ': ' + count + ' từ"></div>';
  }
  heatmap.innerHTML = hm;

  // Topic stats
  const grid = document.getElementById('dashGrid');
  let gh = '';
  for (const [topic, data] of Object.entries(VOCAB)) {
    const total = data.words.length;
    const done = data.words.filter(w => learnedWords[w[0]]).length;
    const p = total > 0 ? Math.round(done/total*100) : 0;
    gh += '<div class="dash-topic"><div class="dt-name">' + topic + '</div><div class="dt-bar"><div class="dt-fill" style="width:'+p+'%"></div></div><div class="dt-count">'+done+'/'+total+'</div></div>';
  }
  grid.innerHTML = gh;
}

// ── Timer ──
let timerInterval = null, timerSeconds = 0, timerRunning = false;
function toggleTimer() {
  if (timerRunning) { clearInterval(timerInterval); timerRunning = false; document.getElementById('timerStartBtn').textContent = 'Bắt đầu'; }
  else { timerInterval = setInterval(() => { timerSeconds++; renderTimer(); }, 1000); timerRunning = true; document.getElementById('timerStartBtn').textContent = 'Dừng'; }
}
function resetTimer() { clearInterval(timerInterval); timerRunning = false; timerSeconds = 0; renderTimer(); document.getElementById('timerStartBtn').textContent = 'Bắt đầu'; }
function renderTimer() {
  const h = Math.floor(timerSeconds/3600), m = Math.floor((timerSeconds%3600)/60), s = timerSeconds%60;
  document.getElementById('timerDigits').textContent = String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
}

// ══════════════════════════════════════════
//  PINYIN SECTION
// ══════════════════════════════════════════
function renderPinyin() {
  // Initials
  const initGrid = document.getElementById('initialsGrid');
  initGrid.innerHTML = INITIALS.map(i =>
    '<div class="py-card" onclick="speak(\''+i.char+'\')"><div class="py-letter">'+i.py+'</div><div class="py-hint">'+i.vn+'</div></div>'
  ).join('');

  // Finals
  const singleGrid = document.getElementById('singleFinals');
  singleGrid.innerHTML = FINALS.single.map(f =>
    '<div class="py-card" onclick="speak(\''+f.char+'\')"><div class="py-letter">'+f.py+'</div><div class="py-hint">'+f.vn+'</div></div>'
  ).join('');

  const compGrid = document.getElementById('compoundFinals');
  // For compound finals, use the pinyin lookup map or construct a character
  compGrid.innerHTML = FINALS.compound.map(f => {
    const ch = PY_CHAR_MAP[f.py] || f.py;
    return '<div class="py-card py-sm" onclick="speak(\''+ch+'\')"><div class="py-letter">'+f.py+'</div></div>';
  }).join('');

  // Tones
  const toneGrid = document.getElementById('tonesGrid');
  toneGrid.innerHTML = TONES.map(t =>
    '<div class="tone-card" style="border-left:4px solid '+t.color+'" onclick="speak(\''+t.char+'\')">' +
    '<div class="tone-num" style="color:'+t.color+'">'+t.name+'</div>' +
    '<div class="tone-vn">'+t.vn+'</div>' +
    '<div class="tone-example">'+t.example+'</div></div>'
  ).join('');

  // Tone practice
  const toneP = document.getElementById('tonePractice');
  toneP.innerHTML = TONE_PRACTICE.map(row =>
    '<div class="tp-row">' + row.map(s => {
      if (!s) return '<span class="tp-cell tp-empty">—</span>';
      const ch = PY_CHAR_MAP[s] || s;
      return '<span class="tp-cell" onclick="speak(\''+ch+'\')">' + s + '</span>';
    }).join('') + '</div>'
  ).join('');

  // Syllable table
  const sylTable = document.getElementById('syllableTable');
  let th = '<tr><th></th>' + SYLLABLE_TABLE_HEADERS.map(h => '<th>'+h+'</th>').join('') + '</tr>';
  let tb = SYLLABLE_TABLE_ROWS.map(r =>
    '<tr><td class="syl-init">'+r.initial+'</td>' +
    r.syllables.map(s => {
      if (!s) return '<td class="syl-empty"></td>';
      const ch = PY_CHAR_MAP[s] || s;
      return '<td class="syl-cell" onclick="speak(\''+ch+'\')">' + s + '</td>';
    }).join('') +
    '</tr>'
  ).join('');
  sylTable.innerHTML = '<thead>'+th+'</thead><tbody>'+tb+'</tbody>';
}

// ══════════════════════════════════════════
//  MISTAKES SECTION
// ══════════════════════════════════════════
function renderMistakes() {
  const el = document.getElementById('mistakesContent');
  el.innerHTML = VN_MISTAKES.map(m =>
    '<div class="card mistake-card">' +
    '<h3>'+m.title+'</h3>' +
    '<p class="mistake-desc">'+m.desc+'</p>' +
    '<ul class="mistake-points">' + m.points.map(p => '<li>'+p+'</li>').join('') + '</ul>' +
    '</div>'
  ).join('');
}

// ══════════════════════════════════════════
//  VOCABULARY SECTION
// ══════════════════════════════════════════
let currentTopic = null;
let vocabSearch = '';

function filterVocab() { vocabSearch = document.getElementById('vocabSearch').value.toLowerCase(); renderVocab(); }

function setTopic(topic) {
  currentTopic = currentTopic === topic ? null : topic;
  document.querySelectorAll('.topic-chip').forEach(c => c.classList.toggle('active', c.dataset.topic === currentTopic));
  renderVocab();
}

function renderTopicChips() {
  const el = document.getElementById('topicChips');
  el.innerHTML = Object.keys(VOCAB).map(t =>
    '<button class="topic-chip" data-topic="'+t+'" onclick="setTopic(\''+t+'\')">'+t+' <span class="chip-count">'+VOCAB[t].words.length+'</span></button>'
  ).join('');
}

function renderVocab() {
  const el = document.getElementById('vocabContent');
  const allWords = getAllWords();
  let filtered = currentTopic ? allWords.filter(w => w.topic === currentTopic) : allWords;
  if (vocabSearch) {
    filtered = filtered.filter(w =>
      w.pinyin.toLowerCase().includes(vocabSearch) ||
      w.hanzi.includes(vocabSearch) ||
      w.en.toLowerCase().includes(vocabSearch) ||
      w.vn.toLowerCase().includes(vocabSearch)
    );
  }

  el.innerHTML = filtered.map(w => {
    const learned = learnedWords[w.pinyin];
    return '<div class="vocab-card ' + (learned ? 'vc-learned' : '') + '">' +
      '<div class="vc-left">' +
      '<div class="vc-pinyin-primary">'+w.pinyin+'</div>' +
      '<div class="vc-hanzi-secondary">'+w.hanzi+'</div>' +
      '<div class="vc-speak-btns">' +
      '<button class="vc-speak" onclick="event.stopPropagation();speak(\''+w.hanzi+'\')">🔊 Nghe</button>' +
      '<button class="vc-speak vc-slow" onclick="event.stopPropagation();speakSlow(\''+w.hanzi+'\')">🐢 Chậm</button>' +
      '</div>' +
      '</div>' +
      '<div class="vc-right">' +
      '<div class="vc-en">'+w.en+'</div>' +
      '<div class="vc-vn">'+w.vn+'</div>' +
      '<div class="vc-pos">'+w.pos+'</div>' +
      '</div>' +
      '<button class="vc-learn-btn ' + (learned ? 'vc-unlearn' : '') + '" onclick="toggleLearned(\''+w.pinyin+'\');markWordToday(\''+w.pinyin+'\')">' +
      (learned ? '✓ Đã học' : 'Đánh dấu đã học') + '</button>' +
      '</div>';
  }).join('');

  if (filtered.length === 0) {
    el.innerHTML = '<div class="vocab-empty">Không tìm thấy từ nào.</div>';
  }
  updateStats();
}

// ══════════════════════════════════════════
//  CONVERSATIONS SECTION
// ══════════════════════════════════════════
function renderConversations() {
  const el = document.getElementById('convoContent');
  el.innerHTML = CONVERSATIONS.map(lesson =>
    '<div class="convo-lesson">' +
    '<h3 class="convo-title">' + lesson.topic + ' — ' + lesson.title + ' <span class="convo-lesson-id">' + lesson.lesson + '</span></h3>' +
    lesson.convos.map(c =>
      '<div class="convo-block">' +
      '<h4 class="convo-sub">' + c.title + '</h4>' +
      c.lines.map(l =>
        '<div class="convo-line" onclick="speak(\''+l.hanzi.replace(/[?？。！，、]/g,'')+'\')">' +
        '<span class="cl-speaker">' + l.speaker + ':</span>' +
        '<div class="cl-content">' +
        '<div class="cl-pinyin">' + l.pinyin + '</div>' +
        '<div class="cl-hanzi-sub">' + l.hanzi + '</div>' +
        '<div class="cl-en">' + l.en + '</div>' +
        '<div class="cl-vn">' + l.vn + '</div>' +
        '</div>' +
        '<span class="cl-speak-icon">🔊</span>' +
        '</div>'
      ).join('') +
      '</div>'
    ).join('') +
    '</div>'
  ).join('');

  // Patterns
  const pEl = document.getElementById('patternsContent');
  pEl.innerHTML = PATTERNS.map(p =>
    '<div class="pattern-card" onclick="speak(\''+p.example.split(' ')[0]+'\')">' +
    '<div class="pt-pattern">' + p.pattern + '</div>' +
    '<div class="pt-pinyin">' + p.pinyin + '</div>' +
    '<div class="pt-meaning"><span class="pt-en">' + p.en + '</span> — <span class="pt-vn">' + p.vn + '</span></div>' +
    '<div class="pt-example">' + p.example + '</div>' +
    '</div>'
  ).join('');
}

// ══════════════════════════════════════════
//  FLASHCARDS & QUIZ
// ══════════════════════════════════════════
let fcWords = [], fcIndex = 0, fcFlipped = false;

function openFlashcards() {
  fcWords = getAllWords().filter(w => currentTopic ? w.topic === currentTopic : true);
  if (fcWords.length === 0) { alert('Không có từ nào!'); return; }
  fcWords.sort(() => Math.random() - 0.5);
  fcIndex = 0; fcFlipped = false;
  renderFlashcard();
  document.getElementById('modalOverlay').style.display = 'flex';
}

function renderFlashcard() {
  const w = fcWords[fcIndex];
  const el = document.getElementById('modalContent');
  el.innerHTML = '<div class="fc-modal">' +
    '<div class="fc-header"><span>'+(fcIndex+1)+'/'+fcWords.length+'</span><button class="fc-close" onclick="closeModal()">✕</button></div>' +
    '<div class="fc-card" onclick="fcFlip()">' +
    (fcFlipped ?
      '<div class="fc-back"><div class="fc-pinyin-big">'+w.pinyin+'</div><div class="fc-hanzi-sub">'+w.hanzi+'</div><div class="fc-en-big">'+w.en+'</div><div class="fc-vn-big">'+w.vn+'</div></div>'
      :
      '<div class="fc-front"><div class="fc-pinyin-big" style="font-size:1.8rem;">'+w.pinyin+'</div><div class="fc-hanzi-sub" style="font-size:1.3rem;opacity:.5;">'+w.hanzi+'</div><div class="fc-tap">Nhấn để lật</div></div>'
    ) +
    '</div>' +
    '<div class="fc-actions">' +
    '<button class="fc-btn" onclick="speak(\''+w.hanzi+'\')">🔊 Nghe</button>' +
    '<button class="fc-btn" onclick="speakSlow(\''+w.hanzi+'\')">🐢 Chậm</button>' +
    '<button class="fc-btn" onclick="fcPrev()">← Trước</button>' +
    '<button class="fc-btn" onclick="fcNext()">Tiếp →</button>' +
    '</div></div>';
}
function fcFlip() { fcFlipped = !fcFlipped; renderFlashcard(); }
function fcNext() { fcIndex = (fcIndex + 1) % fcWords.length; fcFlipped = false; renderFlashcard(); }
function fcPrev() { fcIndex = (fcIndex - 1 + fcWords.length) % fcWords.length; fcFlipped = false; renderFlashcard(); }
function closeModal() { document.getElementById('modalOverlay').style.display = 'none'; }

// Quiz
let quizWords = [], quizIndex = 0, quizScore = 0, quizAnswers = [];
function openQuiz() {
  quizWords = getAllWords().filter(w => currentTopic ? w.topic === currentTopic : true);
  if (quizWords.length < 4) { alert('Cần ít nhất 4 từ!'); return; }
  quizWords.sort(() => Math.random() - 0.5).length = Math.min(10, quizWords.length);
  quizIndex = 0; quizScore = 0; quizAnswers = [];
  renderQuiz();
  document.getElementById('modalOverlay').style.display = 'flex';
}

function renderQuiz() {
  if (quizIndex >= quizWords.length) { renderQuizResults(); return; }
  const w = quizWords[quizIndex];
  const all = getAllWords();
  // Get 3 wrong options
  const wrongs = all.filter(x => x.pinyin !== w.pinyin).sort(() => Math.random()-0.5).slice(0,3);
  const opts = [w, ...wrongs].sort(() => Math.random()-0.5);

  const el = document.getElementById('modalContent');
  el.innerHTML = '<div class="quiz-modal">' +
    '<div class="fc-header"><span>Câu '+(quizIndex+1)+'/'+quizWords.length+'</span><button class="fc-close" onclick="closeModal()">✕</button></div>' +
    '<div class="quiz-q">' +
    '<div class="quiz-pinyin-big" onclick="speak(\''+w.hanzi+'\')">'+w.pinyin+' 🔊</div>' +
    '<div class="quiz-hanzi-sub">'+w.hanzi+'</div>' +
    '<div class="quiz-prompt">Nghĩa tiếng Việt là gì?</div>' +
    '</div>' +
    '<div class="quiz-opts">' +
    opts.map((o,i) => '<button class="quiz-opt" onclick="quizAnswer('+i+','+opts.indexOf(w)+')">'+o.vn+'</button>').join('') +
    '</div></div>';
}

function quizAnswer(chosen, correct) {
  const w = quizWords[quizIndex];
  const isCorrect = chosen === correct;
  if (isCorrect) quizScore++;
  quizAnswers.push({word:w, correct:isCorrect});
  quizIndex++;
  if (isCorrect) {
    // Brief green flash then next
    const opts = document.querySelectorAll('.quiz-opt');
    opts[chosen].classList.add('quiz-correct');
    setTimeout(renderQuiz, 500);
  } else {
    const opts = document.querySelectorAll('.quiz-opt');
    opts[chosen].classList.add('quiz-wrong');
    opts[correct].classList.add('quiz-correct');
    setTimeout(renderQuiz, 1200);
  }
}

function renderQuizResults() {
  const pct = Math.round(quizScore / quizWords.length * 100);
  const el = document.getElementById('modalContent');
  el.innerHTML = '<div class="quiz-results">' +
    '<div class="qr-score">' + quizScore + ' / ' + quizWords.length + '</div>' +
    '<div class="qr-pct">' + pct + '%</div>' +
    '<div class="qr-msg">' + (pct >= 80 ? 'Xuất sắc! 🎉' : pct >= 60 ? 'Khá lắm! 👍' : 'Cần ôn thêm! 📚') + '</div>' +
    '<button class="fc-btn" onclick="closeModal()">Đóng</button>' +
    '</div>';
}

// ══════════════════════════════════════════
//  NOTES
// ══════════════════════════════════════════
function getNotes() { try { return JSON.parse(localStorage.getItem('zh-notes') || '[]'); } catch(e) { return []; } }
function saveNotes(n) { localStorage.setItem('zh-notes', JSON.stringify(n)); updateNotesBadge(); }
function addNote() {
  const input = document.getElementById('noteInput');
  const text = input.value.trim(); if (!text) return;
  const tag = document.getElementById('noteTagSelect').value;
  const section = document.getElementById('noteSectionSelect').value;
  const notes = getNotes();
  notes.unshift({id:Date.now(), text, tag, section, date:new Date().toISOString(), resolved:false});
  saveNotes(notes); input.value = ''; renderNotes();
}
function deleteNote(id) { saveNotes(getNotes().filter(n=>n.id!==id)); renderNotes(); }
function toggleNoteResolved(id) { const n=getNotes(); const f=n.find(x=>x.id===id); if(f) f.resolved=!f.resolved; saveNotes(n); renderNotes(); }
function renderNotes() {
  const notes = getNotes();
  const list = document.getElementById('notesList');
  if (notes.length === 0) { list.innerHTML = '<div class="notes-empty">Chưa có ghi chú.</div>'; return; }
  list.innerHTML = notes.map(n => {
    const d = new Date(n.date);
    return '<div class="note-item '+(n.resolved?'note-resolved':'')+'">' +
      '<div class="note-head"><span class="note-tag nt-'+n.tag+'">'+n.tag+'</span><span class="note-date">'+d.getDate()+'/'+(d.getMonth()+1)+'</span></div>' +
      '<div class="note-body">'+n.text.replace(/</g,'&lt;')+'</div>' +
      '<div class="note-actions"><button onclick="toggleNoteResolved('+n.id+')">'+(n.resolved?'Mở lại':'Xong')+'</button><button class="na-del" onclick="if(confirm(\'Xóa?\'))deleteNote('+n.id+')">Xóa</button></div></div>';
  }).join('');
}
function toggleNotesPanel() { document.getElementById('notesPanel').classList.toggle('open'); renderNotes(); }
function updateNotesBadge() {
  const c = getNotes().filter(n=>!n.resolved).length;
  const b = document.getElementById('notesBadge');
  if(b){b.textContent=c;b.style.display=c>0?'flex':'none';}
}

// ══════════════════════════════════════════
//  EXPORT / IMPORT
// ══════════════════════════════════════════
function exportProgress() {
  const data = { version:1, app:'chinese-hub', exportedAt:new Date().toISOString(), learnedWords, dailyData:getDailyData(), dailyTarget:getDailyTarget(), notes:getNotes() };
  const blob = new Blob([JSON.stringify(data,null,2)], {type:'application/json'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
  a.download = 'chinese-hub-progress-'+getTodayKey()+'.json';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}
function importProgress(e) {
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    try {
      const data = JSON.parse(ev.target.result);
      if(data.app!=='chinese-hub') { alert('File không đúng!'); return; }
      Object.assign(learnedWords, data.learnedWords||{});
      localStorage.setItem('zh-learned', JSON.stringify(learnedWords));
      if(data.dailyData) { const d=getDailyData(); Object.assign(d,data.dailyData); saveDailyData(d); }
      if(data.notes) { const n=getNotes(); data.notes.forEach(x=>{if(!n.find(y=>y.id===x.id))n.push(x);}); saveNotes(n); }
      alert('Đã tải lên thành công!');
      location.reload();
    } catch(err) { alert('Lỗi: '+err.message); }
  };
  reader.readAsText(file); e.target.value='';
}
function resetProgress() {
  if(!confirm('Xóa toàn bộ tiến trình?')) return;
  localStorage.removeItem('zh-learned'); localStorage.removeItem('zh-daily'); localStorage.removeItem('zh-notes');
  learnedWords = {}; location.reload();
}

// ══════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
  renderPinyin();
  renderMistakes();
  renderTopicChips();
  renderVocab();
  renderConversations();
  updateDashboard();
  updateNotesBadge();
  updateStats();
});

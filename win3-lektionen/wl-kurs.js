// Win³ Kurs - Orchestrator
// Einzeiler: <script src="https://solbachsteven.github.io/website/win3-lektionen/wl-kurs.js"></script>
(function() {
    if (window.__WL_KURS_LOADED) return;
    window.__WL_KURS_LOADED = true;

    // ======== REGISTRY ========
    var lessons = {};
    window.__WL_KURS = {
        lessons: lessons,
        register: function(id, data) { lessons[id] = data; }
    };

    // ======== LESSON ORDER ========
    var ORDER = ['w0','w1','w2','w3','w4','w5','w6','w7','w8','w9','a1','a2','a3'];

    // ======== LESSON META (for matrix cards) ========
    var META = {
        w0: { week: 'Woche 0', title: 'Einf\u00fchrung', fw: 'Start' },
        w1: { week: 'W1', title: 'Wer bin ich?', fw: 'IFS Selbst' },
        w2: { week: 'W2', title: 'Die innere Welt', fw: 'Tolle + Wittemann' },
        w3: { week: 'W3', title: 'Schwarz auf Wei\u00df', fw: 'Pennebaker + Ankerpraktik' },
        w4: { week: 'W4', title: 'Deine Fesseln', fw: 'Hawkins Map' },
        w5: { week: 'W5', title: 'Du bist okay', fw: 'Letting-Go' },
        w6: { week: 'W6', title: 'Du als dein Coach', fw: 'Selbstcoaching-Schleife' },
        w7: { week: 'W7', title: 'Dein Platz in der Welt', fw: 'Ikigai' },
        w8: { week: 'W8', title: 'Dein Wert', fw: 'Deborah Price' },
        w9: { week: 'W9', title: 'Zeig dich', fw: 'Integration' },
        a1: { week: 'A1', title: 'Dein Leben auf dem Pr\u00fcfstand', fw: 'Ist vs. Soll' },
        a2: { week: 'A2', title: 'Inneres Alignment', fw: 'Top-Down' },
        a3: { week: 'A3', title: '\u00c4u\u00dferes Alignment', fw: 'Alignment-Plan' }
    };

    // ======== PROGRESS (localStorage) ========
    var STORAGE_KEY = 'wl-progress';
    function getProgress() {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch(e) { return {}; }
    }
    function saveProgress(obj) {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); } catch(e) {}
    }
    function isComplete(id) { return !!getProgress()[id]; }
    function markComplete(id) {
        var p = getProgress();
        p[id] = true;
        saveProgress(p);
    }
    function countComplete() {
        var p = getProgress(), c = 0;
        for (var i = 0; i < ORDER.length; i++) { if (p[ORDER[i]]) c++; }
        return c;
    }

    // ======== STATE ========
    var currentLesson = null;
    var root, matrixView, lessonView, scrollBar, floatEl, ringEl;
    var circumference = 97.4;

    // ======== CREATE ROOT ========
    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];
    root = document.createElement('div');
    root.className = 'wl-kurs-root';
    anchor.parentNode.insertBefore(root, anchor.nextSibling);

    // ======== INJECT CSS ========
    var style = document.createElement('style');
    style.textContent = '\
/* Matrix Navigation */\n\
.wl-kurs-root { font-family: "Poppins", sans-serif; color: #FCF0D6; -webkit-font-smoothing: antialiased; }\n\
.matrix-view { max-width: 960px; margin: 0 auto; padding: 2.5rem 2rem; position: relative; z-index: 2; }\n\
.matrix-header { text-align: center; margin-bottom: 2.5rem; }\n\
.matrix-header h1 { font-size: 2.4rem; font-weight: 700; margin-bottom: 0.4rem; letter-spacing: -0.5px; background: linear-gradient(to bottom, #F5F0E8 0%, rgba(252,240,214,0.9) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }\n\
.matrix-header h1 span { background: linear-gradient(to bottom, #D4A04A 0%, #BC8034 40%, #8B5E24 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }\n\
.matrix-header .tagline { font-family: "Caveat", cursive; font-size: 1.4rem; color: rgba(252,240,214,0.7); }\n\
/* Phase Legend */\n\
.phase-legend { display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; font-size: 0.85rem; }\n\
.phase-legend-item { display: flex; align-items: center; gap: 0.5rem; }\n\
.phase-dot { width: 10px; height: 10px; border-radius: 50%; }\n\
.phase-dot.be { background: #5CB8FF; }\n\
.phase-dot.do { background: #5CFF8A; }\n\
.phase-dot.make { background: #FFD95C; }\n\
/* W0 Intro Card */\n\
.intro-card { background: rgba(252,240,214,0.06); backdrop-filter: blur(12px) saturate(150%); -webkit-backdrop-filter: blur(12px) saturate(150%); border: 1px solid rgba(188,128,52,0.25); border-radius: 12px; padding: 1.2rem 1.5rem; margin-bottom: 1.5rem; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; justify-content: space-between; position: relative; overflow: hidden; }\n\
.intro-card::before { content: ""; position: absolute; top: 0; left: 15%; right: 15%; height: 1px; background: linear-gradient(90deg, transparent, rgba(188,128,52,0.35), transparent); pointer-events: none; }\n\
.intro-card:hover { border-color: #BC8034; transform: translateY(-2px); box-shadow: 0 0 20px rgba(188,128,52,0.15), 0 8px 24px rgba(0,0,0,0.3); }\n\
.intro-card .week { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: #BC8034; margin-bottom: 0.2rem; }\n\
.intro-card .title { font-size: 1rem; font-weight: 500; }\n\
.intro-card .badge { font-size: 0.65rem; background: #8a5e28; color: #FCF0D6; padding: 0.2rem 0.8rem; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.05em; flex-shrink: 0; }\n\
/* Progress Check */\n\
.progress-check { width: 22px; height: 22px; border-radius: 50%; border: 2px solid rgba(245,240,232,0.15); display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; margin-left: 1rem; transition: all 0.3s; pointer-events: none; }\n\
.progress-check.done { border-color: rgba(188,128,52,0.6); background: rgba(188,128,52,0.15); color: #BC8034; }\n\
.progress-check.reading { border-color: #BC8034; background: rgba(188,128,52,0.15); animation: wk-pulse 2s ease-in-out infinite; }\n\
@keyframes wk-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(188,128,52,0.3); } 50% { box-shadow: 0 0 0 4px rgba(188,128,52,0); } }\n\
/* Column Headers */\n\
.col-headers { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 0.5rem; }\n\
.col-header { text-align: center; padding: 0.5rem; border-radius: 8px; font-size: 0.7rem; font-weight: 500; }\n\
.col-header.meta-h { background: rgba(92,184,255,0.08); color: #5CB8FF; border: 1px solid rgba(92,184,255,0.2); }\n\
.col-header.innen-h { background: rgba(92,255,138,0.08); color: #5CFF8A; border: 1px solid rgba(92,255,138,0.2); }\n\
.col-header.aussen-h { background: rgba(255,217,92,0.08); color: #FFD95C; border: 1px solid rgba(255,217,92,0.2); }\n\
.col-header .col-sub { font-family: "Caveat", cursive; font-size: 0.85rem; display: block; margin-top: 1px; }\n\
/* Matrix Grid */\n\
.matrix-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 1.5rem; }\n\
.matrix-row-label { grid-column: 1 / -1; display: flex; align-items: center; gap: 1rem; padding: 0.5rem 0; margin-top: 0.5rem; }\n\
.matrix-row-label:first-child { margin-top: 0; }\n\
.matrix-row-label .phase-name { font-size: 0.85rem; font-weight: 600; white-space: nowrap; }\n\
.matrix-row-label .phase-sub { font-family: "Caveat", cursive; font-size: 0.95rem; color: #b8b0a4; }\n\
.matrix-row-label.be-row .phase-name { color: #5CB8FF; }\n\
.matrix-row-label.do-row .phase-name { color: #5CFF8A; }\n\
.matrix-row-label.make-row .phase-name { color: #FFD95C; }\n\
.matrix-row-label::after { content: ""; flex: 1; height: 1px; background: rgba(245,240,232,0.08); }\n\
/* Matrix Cell */\n\
.matrix-cell { background: rgba(252,240,214,0.06); backdrop-filter: blur(12px) saturate(150%); -webkit-backdrop-filter: blur(12px) saturate(150%); border: 1px solid rgba(252,240,214,0.08); border-radius: 12px; padding: 1rem; cursor: pointer; transition: all 0.3s ease; display: flex; flex-direction: column; min-height: 100px; position: relative; overflow: hidden; }\n\
.matrix-cell::before { content: ""; position: absolute; top: 0; left: 20%; right: 20%; height: 1px; background: linear-gradient(90deg, transparent, rgba(252,240,214,0.12), transparent); pointer-events: none; }\n\
.matrix-cell:hover { border-color: rgba(188,128,52,0.25); transform: translateY(-3px); box-shadow: 0 0 20px rgba(188,128,52,0.15), 0 8px 32px rgba(0,0,0,0.3); }\n\
.matrix-cell.cell-done { background: rgba(188,128,52,0.08); border-color: rgba(188,128,52,0.20); }\n\
.matrix-cell.cell-done::before { background: linear-gradient(90deg, transparent, rgba(188,128,52,0.25), transparent); }\n\
.intro-card.cell-done { background: rgba(188,128,52,0.08); border-color: rgba(188,128,52,0.20); }\n\
.matrix-cell .cell-week { font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.08em; color: #b8b0a4; margin-bottom: 0.3rem; }\n\
.matrix-cell .cell-title { font-size: 0.85rem; font-weight: 500; color: #FCF0D6; line-height: 1.3; flex: 1; }\n\
.matrix-cell .cell-fw { font-family: "Caveat", cursive; font-size: 0.8rem; color: #BC8034; margin-top: 0.4rem; }\n\
.matrix-cell .progress-check { position: absolute; top: 0.7rem; right: 0.7rem; width: 18px; height: 18px; font-size: 10px; margin: 0; }\n\
/* Alignment Section */\n\
.alignment-section { margin-top: 1.5rem; }\n\
.alignment-label { text-align: center; margin-bottom: 1rem; }\n\
.alignment-label h2 { font-family: "Caveat", cursive; font-size: 1.2rem; color: #BC8034; margin-bottom: 0.2rem; }\n\
.alignment-label p { font-size: 0.75rem; color: #b8b0a4; }\n\
.alignment-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }\n\
/* Progress Summary */\n\
.progress-summary { text-align: center; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(245,240,232,0.06); }\n\
.progress-bar-bg { width: 200px; height: 4px; background: rgba(252,240,214,0.03); border-radius: 2px; margin: 0.5rem auto; overflow: hidden; }\n\
.progress-bar-fill { height: 100%; background: linear-gradient(90deg, #BC8034, #D4A04A); border-radius: 2px; width: 0%; transition: width 0.5s ease; box-shadow: 0 0 8px rgba(188,128,52,0.3); }\n\
.progress-text { font-size: 0.75rem; color: #b8b0a4; }\n\
.progress-text span { color: #BC8034; font-weight: 600; }\n\
/* Lesson View */\n\
.wl-lesson-view { display: none; position: relative; z-index: 2; }\n\
.wl-fade-in { animation: wk-fadeIn 0.5s ease-out both; }\n\
@keyframes wk-fadeIn { from { opacity: 0; } to { opacity: 1; } }\n\
/* Back Button */\n\
.wl-back-btn { position: fixed; top: 28px; left: 28px; z-index: 60; background: transparent; border: 1px solid rgba(252,240,214,0.15); border-radius: 50px; color: #b8b0a4; font-family: "Poppins", sans-serif; font-size: 0.8rem; font-weight: 400; padding: 8px 20px; cursor: pointer; transition: color 0.3s, border-color 0.3s; letter-spacing: 0.03em; }\n\
.wl-back-btn:hover { color: #FCF0D6; border-color: rgba(252,240,214,0.3); }\n\
/* Lesson Nav (bottom) */\n\
.wl-lesson-nav { max-width: 780px; margin: 0 auto; padding: 24px 40px 60px; display: flex; justify-content: space-between; align-items: center; gap: 1rem; }\n\
.wl-nav-btn { font-family: "Poppins", sans-serif; font-size: 0.85rem; font-weight: 400; padding: 10px 24px; border-radius: 50px; border: 1px solid rgba(252,240,214,0.15); background: transparent; color: #b8b0a4; cursor: pointer; transition: color 0.3s, border-color 0.3s; letter-spacing: 0.03em; }\n\
.wl-nav-btn:hover { border-color: rgba(252,240,214,0.3); color: #FCF0D6; }\n\
.wl-nav-btn.primary { border: 1px solid #BC8034; color: #BC8034; font-weight: 500; padding: 10px 28px; }\n\
.wl-nav-btn.primary:hover { background: #BC8034; color: #2D2726; }\n\
.wl-nav-btn.primary .arrow { display: inline-block; transition: transform 0.3s ease; }\n\
.wl-nav-btn.primary:hover .arrow { transform: translateX(3px); }\n\
/* Scroll Progress Bar */\n\
.wl-scroll-progress { position: fixed; top: 0; left: 0; width: 0%; height: 3px; background: linear-gradient(90deg, #BC8034, #D96935); z-index: 100; transition: width 0.1s linear; opacity: 0; pointer-events: none; }\n\
.wl-scroll-progress.active { opacity: 1; }\n\
/* Floating Progress */\n\
.wl-progress-float { position: fixed; bottom: 24px; right: 24px; background: rgba(252,240,214,0.06); backdrop-filter: blur(20px) saturate(160%); -webkit-backdrop-filter: blur(20px) saturate(160%); border: 1px solid rgba(188,128,52,0.25); border-radius: 12px; padding: 12px 18px; z-index: 50; box-shadow: 0 0 20px rgba(188,128,52,0.08), 0 8px 32px rgba(0,0,0,0.3); display: flex; align-items: center; gap: 12px; opacity: 0; transform: translateY(10px); transition: opacity 0.3s ease, transform 0.3s ease; pointer-events: none; }\n\
.wl-progress-float.visible { opacity: 1; transform: translateY(0); }\n\
.wl-progress-ring { width: 36px; height: 36px; }\n\
.wl-progress-ring circle { fill: none; stroke-width: 3; stroke-linecap: round; transform: rotate(-90deg); transform-origin: 50% 50%; }\n\
.wl-progress-ring .ring-bg { stroke: rgba(188,128,52,0.15); }\n\
.wl-progress-ring .ring-fill { stroke: #BC8034; transition: stroke-dashoffset 0.3s ease; }\n\
.wl-progress-label { font-size: 12px; font-weight: 400; color: rgba(252,240,214,0.6); line-height: 1.3; }\n\
.wl-progress-section { font-size: 13px; font-weight: 500; color: #FCF0D6; display: block; }\n\
/* Responsive */\n\
@media (max-width: 650px) {\n\
  .matrix-view { padding: 1.5rem 1rem; }\n\
  .matrix-header h1 { font-size: 1.8rem; }\n\
  .matrix-header .tagline { font-size: 1.1rem; }\n\
  .phase-legend { gap: 1rem; font-size: 0.75rem; }\n\
  .matrix-grid, .alignment-grid, .col-headers { grid-template-columns: 1fr; }\n\
  .matrix-cell { min-height: 70px; }\n\
  .wl-back-btn { top: 16px; left: 16px; font-size: 0.75rem; padding: 6px 14px; }\n\
  .wl-lesson-nav { flex-direction: column; padding: 24px 20px 40px; }\n\
  .wl-nav-btn { width: 100%; text-align: center; }\n\
}\n\
';
    document.head.appendChild(style);

    // ======== BUILD MATRIX HTML ========
    function buildCell(id, isDone) {
        var m = META[id];
        var cls = 'matrix-cell' + (isDone ? ' cell-done' : '');
        var checkCls = 'progress-check' + (isDone ? ' done' : '');
        var checkInner = isDone ? '\u2713' : '';
        return '<div class="' + cls + '" data-lesson="' + id + '" tabindex="0" role="button" aria-label="' + m.title + '">'
            + '<div class="' + checkCls + '">' + checkInner + '</div>'
            + '<div class="cell-week">' + m.week + '</div>'
            + '<div class="cell-title">' + m.title + '</div>'
            + '<div class="cell-fw">' + m.fw + '</div>'
            + '</div>';
    }

    function buildMatrix() {
        var done = getProgress();
        var w0done = done.w0 ? ' cell-done' : '';
        var w0check = done.w0 ? 'progress-check done' : 'progress-check';
        var w0tick = done.w0 ? '\u2713' : '';

        var h = '<div class="matrix-header">'
            + '<h1>Win<span>\u00b3</span> Kurs</h1>'
            + '<div class="tagline">Be Yourself. Do Good. Make Money.</div>'
            + '</div>';

        // Phase legend
        h += '<div class="phase-legend">'
            + '<div class="phase-legend-item"><span class="phase-dot be"></span> Be Yourself</div>'
            + '<div class="phase-legend-item"><span class="phase-dot do"></span> Do Good</div>'
            + '<div class="phase-legend-item"><span class="phase-dot make"></span> Make Money</div>'
            + '</div>';

        // W0
        h += '<div class="intro-card' + w0done + '" data-lesson="w0" tabindex="0" role="button" aria-label="Einf\u00fchrung">'
            + '<div><div class="week">Woche 0</div><div class="title">Einf\u00fchrung</div></div>'
            + '<div style="display:flex;align-items:center;gap:0.8rem;">'
            + '<span class="badge">Start</span>'
            + '<div class="' + w0check + '">' + w0tick + '</div>'
            + '</div></div>';

        // Column headers
        h += '<div class="col-headers">'
            + '<div class="col-header meta-h">Meta<span class="col-sub">Verstehen</span></div>'
            + '<div class="col-header innen-h">Innen<span class="col-sub">F\u00fchlen</span></div>'
            + '<div class="col-header aussen-h">Au\u00dfen<span class="col-sub">Handeln</span></div>'
            + '</div>';

        // Be Yourself (W1-W3)
        h += '<div class="matrix-grid">'
            + '<div class="matrix-row-label be-row"><span class="phase-name">Be Yourself</span><span class="phase-sub">Selbsterkenntnis</span></div>'
            + buildCell('w1', done.w1) + buildCell('w2', done.w2) + buildCell('w3', done.w3)
            + '</div>';

        // Do Good (W4-W6)
        h += '<div class="matrix-grid">'
            + '<div class="matrix-row-label do-row"><span class="phase-name">Do Good</span><span class="phase-sub">Selbstbefreiung</span></div>'
            + buildCell('w4', done.w4) + buildCell('w5', done.w5) + buildCell('w6', done.w6)
            + '</div>';

        // Make Money (W7-W9)
        h += '<div class="matrix-grid">'
            + '<div class="matrix-row-label make-row"><span class="phase-name">Make Money</span><span class="phase-sub">Selbstverwirklichung</span></div>'
            + buildCell('w7', done.w7) + buildCell('w8', done.w8) + buildCell('w9', done.w9)
            + '</div>';

        // Alignment
        h += '<div class="alignment-section">'
            + '<div class="alignment-label"><h2>Alignment</h2><p>Hardware-Update - Neurologische Ebenen</p></div>'
            + '<div class="alignment-grid">'
            + buildCell('a1', done.a1) + buildCell('a2', done.a2) + buildCell('a3', done.a3)
            + '</div></div>';

        // Progress summary
        var c = countComplete();
        var pct = Math.round((c / 13) * 100);
        h += '<div class="progress-summary">'
            + '<div class="progress-text"><span>' + c + ' von 13</span> Lektionen abgeschlossen</div>'
            + '<div class="progress-bar-bg"><div class="progress-bar-fill" style="width:' + pct + '%"></div></div>'
            + '</div>';

        return h;
    }

    // ======== BUILD DOM ========
    function buildDOM() {
        // Scroll progress bar
        scrollBar = document.createElement('div');
        scrollBar.className = 'wl-scroll-progress';
        document.body.appendChild(scrollBar);

        // Floating progress
        floatEl = document.createElement('div');
        floatEl.className = 'wl-progress-float';
        floatEl.innerHTML = '<svg class="wl-progress-ring" viewBox="0 0 36 36">'
            + '<circle class="ring-bg" cx="18" cy="18" r="15.5"/>'
            + '<circle class="ring-fill" cx="18" cy="18" r="15.5" stroke-dasharray="97.4" stroke-dashoffset="97.4"/>'
            + '</svg>'
            + '<div class="wl-progress-label"><span class="wl-progress-section">Einf\u00fchrung</span><span class="wl-progress-pct">0%</span></div>';
        document.body.appendChild(floatEl);
        ringEl = floatEl.querySelector('.ring-fill');

        // Matrix view
        matrixView = document.createElement('div');
        matrixView.className = 'matrix-view';
        matrixView.innerHTML = buildMatrix();
        root.appendChild(matrixView);

        // Lesson view
        lessonView = document.createElement('div');
        lessonView.className = 'wl-lesson-view';
        lessonView.innerHTML = '<button class="wl-back-btn">\u2190 \u00dcbersicht</button>'
            + '<div class="wl-lesson-content"></div>'
            + '<div class="wl-lesson-nav"></div>';
        root.appendChild(lessonView);

        // Event delegation: matrix clicks
        matrixView.addEventListener('click', function(e) {
            var el = e.target.closest('[data-lesson]');
            if (el) showLesson(el.getAttribute('data-lesson'));
        });

        // Keyboard a11y
        matrixView.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                var el = e.target.closest('[data-lesson]');
                if (el) { e.preventDefault(); showLesson(el.getAttribute('data-lesson')); }
            }
        });

        // Back button
        lessonView.querySelector('.wl-back-btn').addEventListener('click', showMatrix);

        // Scroll tracking
        window.addEventListener('scroll', updateScrollProgress);
    }

    // ======== NAVIGATION ========
    function showLesson(id) {
        if (!lessons[id]) { console.warn('[WL-KURS] Lektion ' + id + ' nicht geladen.'); return; }
        currentLesson = id;

        matrixView.style.display = 'none';
        lessonView.style.display = 'block';
        lessonView.className = 'wl-lesson-view wl-fade-in';
        scrollBar.classList.add('active');

        // Render lesson content (engine uses anchor.parentNode.insertBefore)
        var container = lessonView.querySelector('.wl-lesson-content');
        container.innerHTML = '';
        var renderAnchor = document.createElement('span');
        container.appendChild(renderAnchor);
        window.__WL_ENGINE.render(lessons[id], renderAnchor);
        renderAnchor.remove();

        // Build nav
        var idx = ORDER.indexOf(id);
        var navHtml = '<button class="wl-nav-btn" data-action="matrix">\u2190 \u00dcbersicht</button>';
        if (idx < ORDER.length - 1) {
            var nextId = ORDER[idx + 1];
            var nextTitle = META[nextId].title;
            navHtml += '<button class="wl-nav-btn primary" data-action="next">Weiter: ' + nextTitle + ' <span class="arrow">\u2192</span></button>';
        } else {
            navHtml += '<button class="wl-nav-btn primary" data-action="complete">Kurs abschlie\u00dfen <span class="arrow">\u2713</span></button>';
        }
        var nav = lessonView.querySelector('.wl-lesson-nav');
        nav.innerHTML = navHtml;

        // Nav button events
        nav.addEventListener('click', function handler(e) {
            var btn = e.target.closest('[data-action]');
            if (!btn) return;
            nav.removeEventListener('click', handler);
            var action = btn.getAttribute('data-action');
            if (action === 'matrix') { markComplete(id); showMatrix(); }
            else if (action === 'next') {
                markComplete(id);
                var ni = ORDER.indexOf(id) + 1;
                if (ni < ORDER.length) showLesson(ORDER[ni]);
                else showMatrix();
            }
            else if (action === 'complete') { markComplete(id); showMatrix(); }
        });

        // Update reading indicator in matrix
        updateMatrixReading(id);

        window.scrollTo(0, 0);

        // ScrollReveal for blocks
        setTimeout(function() {
            var header = container.querySelector('.lesson-header');
            if (header) header.classList.add('visible');
            var blocks = container.querySelectorAll('.lesson-block');
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        setTimeout(function() { entry.target.classList.add('visible'); }, 80);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            blocks.forEach(function(b) { observer.observe(b); });
        }, 100);
    }

    function showMatrix() {
        currentLesson = null;
        lessonView.style.display = 'none';
        matrixView.style.display = 'block';
        matrixView.className = 'matrix-view wl-fade-in';
        scrollBar.classList.remove('active');
        scrollBar.style.width = '0%';
        floatEl.classList.remove('visible');

        // Refresh matrix (progress may have changed)
        matrixView.innerHTML = buildMatrix();
        window.scrollTo(0, 0);
    }

    function updateMatrixReading(id) {
        var cells = matrixView.querySelectorAll('[data-lesson]');
        for (var i = 0; i < cells.length; i++) {
            if (cells[i].getAttribute('data-lesson') === id) {
                var check = cells[i].querySelector('.progress-check');
                if (check && !check.classList.contains('done')) {
                    check.className = 'progress-check reading';
                }
            }
        }
    }

    // ======== SCROLL PROGRESS ========
    function updateScrollProgress() {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        if (h <= 0) return;
        var pct = Math.min(window.scrollY / h, 1);

        scrollBar.style.width = (pct * 100) + '%';
        ringEl.style.strokeDashoffset = circumference * (1 - pct);

        var pctEl = floatEl.querySelector('.wl-progress-pct');
        if (pctEl) pctEl.textContent = Math.round(pct * 100) + '%';

        if (window.scrollY > 200 && currentLesson) {
            floatEl.classList.add('visible');
        } else {
            floatEl.classList.remove('visible');
        }

        // Track current H2
        var h2s = document.querySelectorAll('.lesson-h2');
        var sec = 'Einf\u00fchrung';
        for (var i = 0; i < h2s.length; i++) {
            if (h2s[i].getBoundingClientRect().top < 200) sec = h2s[i].textContent;
        }
        var secEl = floatEl.querySelector('.wl-progress-section');
        if (secEl) secEl.textContent = sec;
    }

    // ======== LOAD ENGINE + LESSONS ========
    var ownScript = document.currentScript || document.querySelector('script[src*="wl-kurs"]');
    var BASE = ownScript && ownScript.src ? ownScript.src.replace(/wl-kurs\.js.*$/, '') : 'https://solbachsteven.github.io/website/win3-lektionen/';
    var scripts = ['wl-engine'].concat(ORDER.map(function(id) { return 'wl-' + id; }));

    function loadNext(i) {
        if (i >= scripts.length) {
            console.log('[WL-KURS] Alle ' + scripts.length + ' Scripts geladen. ' + Object.keys(lessons).length + ' Lektionen registriert.');
            buildDOM();
            return;
        }
        var s = document.createElement('script');
        s.src = BASE + scripts[i] + '.js';
        s.onload = function() { loadNext(i + 1); };
        s.onerror = function() {
            console.error('[WL-KURS] Fehler beim Laden: ' + scripts[i]);
            loadNext(i + 1);
        };
        document.head.appendChild(s);
    }

    // Load fonts first
    var fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;500;600&display=swap';
    document.head.appendChild(fontLink);

    loadNext(0);
})();

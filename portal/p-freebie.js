// Win³ Academy - Freebie Kurs Adapter
// Lädt Freebie-Lektionen im Portal via Dual-Mode-Boot
(function() {
    if (window.__P_FREEBIE) return;

    var LESSONS = [
        { id: 'l0', label: 'Willkommen', title: 'Was ist deine Lebensaufgabe?' },
        { id: 'l1', label: 'Schritt 1', title: 'Dein tieferes Warum' },
        { id: 'l2', label: 'Schritt 2', title: 'Deine Vision einer besseren Welt' },
        { id: 'l3', label: 'Schritt 3', title: 'Dein Mission Statement' },
        { id: 'l4', label: 'Abschluss', title: 'Deine drei Sätze festhalten' },
        { id: 'bonus', label: 'Bonus', title: 'So gewinnst du das Spiel des Lebens' }
    ];

    var FREEBIE_BASE = window.__W3.SITE_BASE + 'freebie-kurs/';

    // ======== DUAL-MODE REGISTRY ========
    window.__FK_KURS = {
        lessons: {},
        register: function(id, data, renderFn) {
            this.lessons[id] = { data: data, renderFn: renderFn || null };
        }
    };

    // ======== PROGRESS ========
    function getProgress() {
        try { return JSON.parse(localStorage.getItem('fk-progress')) || {}; }
        catch(e) { return {}; }
    }
    function markViewed(id) {
        var p = getProgress();
        if (!p[id]) {
            p[id] = Date.now();
            localStorage.setItem('fk-progress', JSON.stringify(p));
        }
    }

    // ======== SCRIPT LOADING ========
    function loadEngine(callback) {
        if (window.__FK_ENGINE) { callback(); return; }
        var existing = document.querySelector('script[src*="fk-engine.js"]');
        if (existing) { existing.addEventListener('load', callback); return; }
        var s = document.createElement('script');
        s.src = FREEBIE_BASE + 'fk-engine.js';
        s.onload = callback;
        s.onerror = function() { console.error('[P-Freebie] Engine nicht geladen'); };
        document.head.appendChild(s);
    }

    function loadLessonScript(id, callback) {
        if (window.__FK_KURS.lessons[id]) { callback(); return; }
        var s = document.createElement('script');
        s.src = FREEBIE_BASE + 'fk-' + id + '.js';
        s.onload = function() { setTimeout(callback, 10); };
        s.onerror = function() { console.error('[P-Freebie] Lektion nicht geladen: ' + id); };
        document.head.appendChild(s);
    }

    // ======== SVG ICONS ========
    var ICONS = {
        arrow_left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
        arrow_right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
        check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
    };

    // ======== CSS ========
    if (!document.querySelector('style[data-section="p-freebie"]')) {
        var style = document.createElement('style');
        style.setAttribute('data-section', 'p-freebie');
        style.textContent = '\
/* === Freebie Lesson List === */\n\
.fk-list { max-width: 800px; margin: 0 auto; padding: 40px 24px; }\n\
.fk-list-header { text-align: center; margin-bottom: 40px; }\n\
.fk-list-title { font-size: 28px; font-weight: 600; margin: 0 0 8px; }\n\
.fk-list-subtitle { font-size: 16px; opacity: 0.5; margin: 0 0 16px; font-weight: 300; }\n\
.fk-list-progress { font-size: 13px; color: #BC8034; }\n\
.fk-list-cards { display: flex; flex-direction: column; gap: 8px; }\n\
.fk-list-card { display: flex; align-items: center; gap: 16px; padding: 18px 20px; background: rgba(252,240,214,0.04); border: 1px solid rgba(188,128,52,0.12); border-radius: 12px; cursor: pointer; transition: all 0.2s; }\n\
.fk-list-card:hover { border-color: rgba(188,128,52,0.35); background: rgba(252,240,214,0.06); }\n\
.fk-list-card.viewed { border-color: rgba(188,128,52,0.2); }\n\
.fk-list-card-num { width: 36px; height: 36px; border-radius: 50%; background: rgba(188,128,52,0.12); color: #BC8034; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }\n\
.fk-list-card.viewed .fk-list-card-num { background: rgba(188,128,52,0.2); }\n\
.fk-list-card-check { width: 18px; height: 18px; display: block; color: #BC8034; }\n\
.fk-list-card-content { flex: 1; min-width: 0; }\n\
.fk-list-card-label { font-size: 11px; color: #BC8034; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 2px; }\n\
.fk-list-card-title { font-size: 15px; font-weight: 500; }\n\
.fk-list-card-arrow { width: 20px; height: 20px; opacity: 0.3; flex-shrink: 0; }\n\
.fk-list-card:hover .fk-list-card-arrow { opacity: 0.6; }\n\
\n\
/* === Lesson Detail === */\n\
.fk-lesson-wrapper { }\n\
.fk-lesson-nav-top { padding: 16px 24px; border-bottom: 1px solid rgba(188,128,52,0.1); }\n\
.fk-lesson-back { display: flex; align-items: center; gap: 8px; background: none; border: none; color: rgba(252,240,214,0.6); font-family: \'Poppins\', sans-serif; font-size: 14px; cursor: pointer; padding: 4px 0; transition: color 0.2s; }\n\
.fk-lesson-back:hover { color: #BC8034; }\n\
.fk-lesson-back-icon { width: 18px; height: 18px; display: block; }\n\
\n\
/* === Bottom Navigation === */\n\
.fk-lesson-nav-bottom { display: flex; justify-content: space-between; gap: 16px; padding: 32px 24px; border-top: 1px solid rgba(188,128,52,0.1); margin-top: 20px; }\n\
.fk-lesson-nav-btn { display: flex; align-items: center; gap: 12px; background: rgba(252,240,214,0.04); border: 1px solid rgba(188,128,52,0.12); border-radius: 12px; padding: 14px 18px; cursor: pointer; transition: all 0.2s; color: inherit; font-family: \'Poppins\', sans-serif; max-width: 48%; text-align: left; }\n\
.fk-lesson-nav-btn:hover { border-color: rgba(188,128,52,0.35); background: rgba(252,240,214,0.06); }\n\
.fk-lesson-nav-icon { width: 20px; height: 20px; display: block; opacity: 0.5; flex-shrink: 0; }\n\
.fk-lesson-nav-info { display: flex; flex-direction: column; }\n\
.fk-lesson-nav-label { font-size: 11px; color: #BC8034; text-transform: uppercase; letter-spacing: 0.08em; }\n\
.fk-lesson-nav-title { font-size: 14px; font-weight: 500; }\n\
\n\
/* === Loading === */\n\
.fk-loading { padding: 80px 24px; text-align: center; opacity: 0.4; font-size: 14px; }\n\
\n\
/* === Responsive === */\n\
@media (max-width: 650px) {\n\
    .fk-list { padding: 24px 16px; }\n\
    .fk-list-title { font-size: 24px; }\n\
    .fk-list-card { padding: 14px 16px; gap: 12px; }\n\
    .fk-list-card-num { width: 32px; height: 32px; font-size: 13px; }\n\
    .fk-lesson-nav-bottom { flex-direction: column; gap: 12px; }\n\
    .fk-lesson-nav-btn { max-width: 100%; }\n\
}\n\
';
        document.head.appendChild(style);
    }

    // ======== RENDER: LESSON LIST ========
    function renderLessonList(container) {
        var progress = getProgress();
        var completedCount = 0;
        LESSONS.forEach(function(l) { if (progress[l.id]) completedCount++; });

        var html = '<div class="fk-list">'
            + '<div class="fk-list-header">'
            + '<h1 class="fk-list-title">Freebie Kurs</h1>'
            + '<p class="fk-list-subtitle">Erkenne deine Lebensaufgabe - in 3 Schritten.</p>';

        if (completedCount > 0) {
            html += '<div class="fk-list-progress">' + completedCount + ' von ' + LESSONS.length + ' angesehen</div>';
        }

        html += '</div><div class="fk-list-cards">';

        LESSONS.forEach(function(lesson, i) {
            var viewed = !!progress[lesson.id];
            html += '<div class="fk-list-card' + (viewed ? ' viewed' : '') + '" onclick="window.__W3.navigate(\'#/freebie/' + lesson.id + '\')">'
                + '<div class="fk-list-card-num">'
                + (viewed ? '<span class="fk-list-card-check">' + ICONS.check + '</span>' : (i + 1))
                + '</div>'
                + '<div class="fk-list-card-content">'
                + '<div class="fk-list-card-label">' + lesson.label + '</div>'
                + '<div class="fk-list-card-title">' + lesson.title + '</div>'
                + '</div>'
                + '<div class="fk-list-card-arrow">' + ICONS.arrow_right + '</div>'
                + '</div>';
        });

        html += '</div></div>';
        container.innerHTML = html;
    }

    // ======== RENDER: LESSON DETAIL ========
    function renderLesson(container, lessonId) {
        var lessonIdx = -1;
        for (var i = 0; i < LESSONS.length; i++) {
            if (LESSONS[i].id === lessonId) { lessonIdx = i; break; }
        }
        if (lessonIdx === -1) {
            container.innerHTML = '<div style="padding:40px;text-align:center;opacity:0.5;">Lektion nicht gefunden</div>';
            return;
        }

        // Build wrapper with back button + bottom nav
        container.innerHTML = '<div class="fk-lesson-wrapper">'
            + '<div class="fk-lesson-nav-top">'
            + '<button class="fk-lesson-back" onclick="window.__W3.navigate(\'#/freebie\')">'
            + '<span class="fk-lesson-back-icon">' + ICONS.arrow_left + '</span>'
            + '<span>\u00dcbersicht</span>'
            + '</button>'
            + '</div>'
            + '<div id="fk-lesson-slot"><div class="fk-loading">Lektion wird geladen...</div></div>'
            + buildBottomNav(lessonIdx)
            + '</div>';

        var slot = document.getElementById('fk-lesson-slot');

        // Load engine, then lesson script, then render
        loadEngine(function() {
            loadLessonScript(lessonId, function() {
                var entry = window.__FK_KURS.lessons[lessonId];
                if (!entry) {
                    slot.innerHTML = '<div style="padding:40px;text-align:center;opacity:0.5;">Lektion konnte nicht geladen werden.</div>';
                    return;
                }

                // Mark as viewed
                markViewed(lessonId);

                // Clear loading message
                slot.innerHTML = '';

                if (entry.renderFn) {
                    // Custom renderer (L4: Form + Pinwand)
                    var anchor = document.createElement('div');
                    slot.appendChild(anchor);
                    entry.renderFn(anchor);
                } else {
                    // Standard lesson: use shared engine
                    var anchor = document.createElement('div');
                    slot.appendChild(anchor);
                    window.__FK_ENGINE.render(entry.data, anchor);
                }
            });
        });
    }

    function buildBottomNav(currentIdx) {
        var prev = currentIdx > 0 ? LESSONS[currentIdx - 1] : null;
        var next = currentIdx < LESSONS.length - 1 ? LESSONS[currentIdx + 1] : null;

        var html = '<div class="fk-lesson-nav-bottom">';

        if (prev) {
            html += '<button class="fk-lesson-nav-btn prev" onclick="window.__W3.navigate(\'#/freebie/' + prev.id + '\')">'
                + '<span class="fk-lesson-nav-icon">' + ICONS.arrow_left + '</span>'
                + '<div class="fk-lesson-nav-info">'
                + '<span class="fk-lesson-nav-label">' + prev.label + '</span>'
                + '<span class="fk-lesson-nav-title">' + prev.title + '</span>'
                + '</div>'
                + '</button>';
        } else {
            html += '<div></div>';
        }

        if (next) {
            html += '<button class="fk-lesson-nav-btn next" onclick="window.__W3.navigate(\'#/freebie/' + next.id + '\')">'
                + '<div class="fk-lesson-nav-info" style="text-align:right;">'
                + '<span class="fk-lesson-nav-label">' + next.label + '</span>'
                + '<span class="fk-lesson-nav-title">' + next.title + '</span>'
                + '</div>'
                + '<span class="fk-lesson-nav-icon">' + ICONS.arrow_right + '</span>'
                + '</button>';
        } else {
            html += '<div></div>';
        }

        html += '</div>';
        return html;
    }

    // ======== ADAPTER ========
    window.__P_FREEBIE = {
        mount: function(container, lessonId) {
            if (!lessonId) {
                renderLessonList(container);
            } else {
                renderLesson(container, lessonId);
            }
        },
        teardown: function() {
            // Content gets cleared by portal.js onRouteChange()
        }
    };
})();

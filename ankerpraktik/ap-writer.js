// Win³ Community - Ankerpraktik Writer View
// 3 Tabs: Schreiben (Layer 1) → Spiegel (Layer 2) → Coach (Layer 3)
(function() {
    if (window.__AP_WRITER_LOADED) return;
    window.__AP_WRITER_LOADED = true;

    // === CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'ap-writer');
    style.textContent = `
/* ======== TABS ======== */
.ap-tabs {
    display: flex;
    gap: 4px;
    margin-bottom: 24px;
    background: rgba(252, 240, 214, 0.04);
    border-radius: 14px;
    padding: 4px;
}
.ap-tab {
    flex: 1;
    padding: 10px 16px;
    border: none;
    background: none;
    color: rgba(252, 240, 214, 0.4);
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.3s ease;
    text-align: center;
}
.ap-tab:hover {
    color: rgba(252, 240, 214, 0.7);
}
.ap-tab.ap-tab-active {
    background: rgba(188, 128, 52, 0.2);
    color: #BC8034;
}
.ap-tab-num {
    display: inline-flex;
    width: 22px;
    height: 22px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(252, 240, 214, 0.1);
    font-size: 12px;
    margin-right: 6px;
    transition: all 0.3s ease;
}
.ap-tab.ap-tab-active .ap-tab-num {
    background: #BC8034;
    color: #2D2726;
}
.ap-tab.ap-tab-done .ap-tab-num {
    background: rgba(40, 167, 69, 0.3);
    color: #7ddf8a;
}

/* ======== LESSON SELECT ======== */
.ap-lesson-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
}
.ap-lesson-bar label {
    font-size: 13px;
    color: rgba(252, 240, 214, 0.5);
    white-space: nowrap;
}

/* ======== LAYER 1: SCHREIBEN ======== */
.ap-writer-area {
    position: relative;
}
.ap-writer-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}
.ap-writer-info {
    font-size: 12px;
    color: rgba(252, 240, 214, 0.35);
    display: flex;
    gap: 16px;
}
.ap-writer-timer {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(188, 128, 52, 0.12);
    border: 1px solid rgba(188, 128, 52, 0.2);
    border-radius: 20px;
    padding: 5px 14px;
    font-size: 13px;
    color: #BC8034;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
}
.ap-writer-timer:hover {
    background: rgba(188, 128, 52, 0.2);
}
.ap-writer-timer.ap-timer-running {
    background: rgba(188, 128, 52, 0.25);
    border-color: #BC8034;
}
.ap-writer-prompt {
    background: rgba(188, 128, 52, 0.08);
    border-left: 3px solid #BC8034;
    padding: 16px 20px;
    margin-bottom: 16px;
    border-radius: 0 10px 10px 0;
    font-size: 14px;
    line-height: 1.6;
    color: rgba(252, 240, 214, 0.7);
    font-style: italic;
}
.ap-autosave-indicator {
    font-size: 11px;
    color: rgba(252, 240, 214, 0.3);
    transition: color 0.3s ease;
}
.ap-autosave-indicator.ap-saving {
    color: #BC8034;
}

/* ======== LAYER 2: SPIEGEL ======== */
.ap-mirror-result {
    background: rgba(100, 149, 237, 0.08);
    border: 1px solid rgba(100, 149, 237, 0.2);
    border-radius: 14px;
    padding: 24px;
    line-height: 1.8;
    font-size: 15px;
    color: rgba(252, 240, 214, 0.85);
    white-space: pre-wrap;
}
.ap-mirror-empty {
    text-align: center;
    padding: 48px 20px;
    color: rgba(252, 240, 214, 0.4);
}
.ap-mirror-empty-icon {
    font-size: 40px;
    margin-bottom: 12px;
}

/* ======== LAYER 3: COACH ======== */
.ap-chat {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 16px;
    max-height: 400px;
    overflow-y: auto;
    padding-right: 4px;
}
.ap-chat::-webkit-scrollbar {
    width: 4px;
}
.ap-chat::-webkit-scrollbar-thumb {
    background: rgba(188, 128, 52, 0.3);
    border-radius: 2px;
}
.ap-chat-msg {
    padding: 14px 18px;
    border-radius: 14px;
    font-size: 14px;
    line-height: 1.7;
    max-width: 85%;
    white-space: pre-wrap;
}
.ap-chat-msg.ap-msg-user {
    background: rgba(188, 128, 52, 0.15);
    border: 1px solid rgba(188, 128, 52, 0.2);
    align-self: flex-end;
    border-bottom-right-radius: 4px;
}
.ap-chat-msg.ap-msg-assistant {
    background: rgba(100, 167, 100, 0.1);
    border: 1px solid rgba(100, 167, 100, 0.15);
    align-self: flex-start;
    border-bottom-left-radius: 4px;
    color: rgba(252, 240, 214, 0.85);
}
.ap-chat-input-wrap {
    display: flex;
    gap: 8px;
}
.ap-chat-input {
    flex: 1;
    background: rgba(252, 240, 214, 0.06);
    border: 1px solid rgba(188, 128, 52, 0.15);
    border-radius: 14px;
    padding: 12px 16px;
    color: #FCF0D6;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    outline: none;
    resize: none;
    min-height: 44px;
    max-height: 120px;
}
.ap-chat-input:focus {
    border-color: #BC8034;
}
.ap-chat-send {
    background: #BC8034;
    color: #2D2726;
    border: none;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    flex-shrink: 0;
}
.ap-chat-send:hover {
    background: #D4973F;
}
.ap-chat-send:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}
.ap-coach-empty {
    text-align: center;
    padding: 40px 20px;
    color: rgba(252, 240, 214, 0.4);
}


/* ======== ACTIONS ======== */
.ap-writer-actions {
    display: flex;
    gap: 12px;
    margin-top: 20px;
    flex-wrap: wrap;
}

/* ======== GOAL SETTINGS ======== */
.ap-settings-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    gap: 16px;
}
.ap-setting-group {
    display: flex;
    align-items: center;
    gap: 6px;
}
.ap-setting-label {
    font-size: 12px;
    color: rgba(252, 240, 214, 0.4);
    white-space: nowrap;
}
.ap-pill-group {
    display: flex;
    gap: 1px;
    background: rgba(252, 240, 214, 0.04);
    border-radius: 12px;
    padding: 2px;
}
.ap-pill {
    padding: 2px 8px;
    border: none;
    background: none;
    color: rgba(252, 240, 214, 0.4);
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.3s ease;
}
.ap-pill:hover { color: rgba(252, 240, 214, 0.7); }
.ap-pill.ap-pill-active {
    background: rgba(188, 128, 52, 0.15);
    color: #BC8034;
}
.ap-pill:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

/* ======== WORD PROGRESS ======== */
.ap-word-progress {
    display: flex;
    align-items: center;
    gap: 8px;
}
.ap-progress-bar {
    width: 60px;
    height: 4px;
    background: rgba(252, 240, 214, 0.08);
    border-radius: 2px;
    overflow: hidden;
}
.ap-progress-fill {
    height: 100%;
    background: #BC8034;
    border-radius: 2px;
    transition: width 0.3s ease;
}
.ap-progress-fill.ap-progress-done { background: #7ddf8a; }
.ap-word-count-goal {
    font-size: 12px;
    color: rgba(252, 240, 214, 0.35);
    transition: color 0.3s ease;
}
.ap-word-count-goal.ap-goal-reached { color: #7ddf8a; }

/* ======== RESEARCH HINT (collapsible) ======== */
.ap-research-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 6px;
    padding: 6px 10px;
    background: rgba(188, 128, 52, 0.04);
    border-radius: 8px;
    border-left: 2px solid rgba(188, 128, 52, 0.15);
    cursor: pointer;
    font-size: 11px;
    color: rgba(252, 240, 214, 0.35);
    transition: color 0.2s ease, background 0.2s ease;
    user-select: none;
}
.ap-research-toggle:hover {
    color: rgba(252, 240, 214, 0.55);
    background: rgba(188, 128, 52, 0.07);
}
.ap-research-toggle svg { opacity: 0.5; flex-shrink: 0; }
.ap-research-chevron {
    margin-left: auto;
    transition: transform 0.3s ease;
    opacity: 0.4;
}
.ap-research-chevron.ap-open { transform: rotate(180deg); }
.ap-research-body {
    font-size: 11px;
    color: rgba(252, 240, 214, 0.3);
    padding: 0 10px;
    line-height: 1.65;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, padding 0.4s ease, margin 0.4s ease;
    background: rgba(188, 128, 52, 0.03);
    border-radius: 0 0 8px 8px;
    margin-bottom: 0;
}
.ap-research-body.ap-open {
    max-height: 600px;
    padding: 10px 12px 12px;
    margin-bottom: 8px;
}
.ap-research-body strong { color: rgba(252, 240, 214, 0.45); }
.ap-research-body p { margin: 0 0 8px; }
.ap-research-body p:last-child { margin-bottom: 0; }
.ap-research-section { margin-top: 10px; }
.ap-research-section-title {
    font-size: 11px;
    font-weight: 600;
    color: rgba(188, 128, 52, 0.6);
    margin-bottom: 4px;
    letter-spacing: 0.3px;
}

/* ======== CELEBRATION ======== */
.ap-confetti-particle {
    position: fixed;
    pointer-events: none;
    z-index: 1000;
}
.ap-firework-trail {
    position: fixed;
    width: 2px;
    pointer-events: none;
    z-index: 999;
    border-radius: 1px;
}
.ap-celebration-ring {
    position: fixed;
    border: 2px solid rgba(188, 128, 52, 0.6);
    border-radius: 50%;
    pointer-events: none;
    z-index: 999;
}

/* ======== RESPONSIVE ======== */
@media (max-width: 600px) {
    .ap-tabs { flex-direction: column; gap: 2px; }
    .ap-tab { padding: 8px 12px; font-size: 13px; }
    .ap-lesson-bar { flex-direction: column; align-items: stretch; gap: 8px; }
    .ap-chat-msg { max-width: 95%; }
    .ap-writer-toolbar { flex-direction: column; align-items: stretch; gap: 8px; }
    .ap-settings-bar { flex-direction: column; align-items: stretch; gap: 8px; }
    .ap-setting-group { justify-content: space-between; }
    .ap-progress-bar { width: 40px; }
}
@media (prefers-reduced-motion: reduce) {
    .ap-confetti-particle { display: none !important; }
    .ap-firework-trail { display: none !important; }
    .ap-celebration-ring { animation: none !important; }
    .ap-progress-fill { transition: none !important; }
}
`;
    document.head.appendChild(style);

    // === WRITER STATE ===
    var ws = {
        tab: 'write',       // 'write' | 'mirror' | 'coach'
        entryId: null,
        lesson: null,
        text: '',
        analysis: null,
        messages: [],
        loading: false,
        error: null,
        timerRunning: false,
        timerSeconds: 0,
        timerInterval: null,
        autoSaveTimeout: null,
        autoSaveStatus: '',
        wordCount: 0,
        // Journaling-Ziele
        wordGoal: parseInt(localStorage.getItem('ap_word_goal')) || 500,
        timerDuration: parseInt(localStorage.getItem('ap_timer_duration')) || 20,
        celebrated: false
    };

    // Lektionsspezifische Prompts fürs freie Schreiben
    var PROMPTS = {
        w0: 'Schreibe frei darüber, was dich zu diesem Kurs geführt hat. Was erhoffst du dir?',
        w1: 'Wer bist du wirklich? Schreibe über die Person hinter all den Rollen und Masken.',
        w2: 'Was willst du wirklich? Nicht was du sollst - was zieht dich an?',
        w3: 'Was hält dich auf? Welche Muster, Ängste oder Glaubenssätze stehen dir im Weg?',
        w4: 'Wofür stehst du? Was sind deine nicht-verhandelbaren Werte?',
        w5: 'Welche inneren Anteile trägst du? Wer meldet sich in schwierigen Momenten?',
        w6: 'Was brauchst du wirklich? Nicht was du willst - was brauchst du?',
        w7: 'Was lässt du los? Was hat dir gedient, aber dient dir nicht mehr?',
        w8: 'Was baust du auf? Was entsteht, wenn du den alten Ballast abwirfst?',
        w9: 'Wie zeigst du dich? Wo versteckst du dich noch?',
        a1: 'Innere Ausrichtung: Sind deine Gedanken, Gefühle und Handlungen im Einklang?',
        a2: 'Äußere Ausrichtung: Spiegelt dein äußeres Leben deine innere Wahrheit?',
        a3: 'Integration: Was hast du gelernt? Was nimmst du mit? Was hat sich verändert?'
    };

    // === RENDER MAIN ===
    window.__AP_WRITER_RENDER = function(container) {
        ws.lesson = window.__AP.state.lesson || 'w1';
        ws.tab = 'write';
        ws.entryId = null;
        ws.text = '';
        ws.analysis = null;
        ws.messages = [];
        ws.error = null;
        ws.loading = false;
        ws.autoSaveStatus = '';
        ws.wordCount = 0;
        ws.celebrated = false;
        ws._autoCoachSent = false;
        stopTimer();

        // Draft aus localStorage wiederherstellen?
        var draft = loadDraft();
        if (!window.__AP._continueEntry && !window.__AP._mirrorText && draft && draft.text) {
            ws.lesson = draft.lesson || ws.lesson;
            ws.text = draft.text;
            ws.wordCount = countWords(ws.text);
            ws.entryId = draft.entryId || null;
            ws.tab = draft.tab || 'write';
            ws.analysis = draft.analysis || null;
            ws.messages = draft.messages || [];
            ws.mirrorSource = draft.mirrorSource || null;
            ws.autoSaveStatus = 'Entwurf geladen';
        }

        // Entry fortsetzen (aus Journal/History)?
        if (window.__AP._continueEntry) {
            var continueId = window.__AP._continueEntry;
            delete window.__AP._continueEntry;
            container.innerHTML = '<div style="padding:80px 24px;text-align:center;opacity:0.4;font-size:14px;">Eintrag wird geladen...</div>';
            window.__AP.api('/ankerpraktik/entries/' + continueId).then(function(data) {
                if (data && data.entry) {
                    var e = data.entry;
                    ws.entryId = e.id;
                    ws.lesson = e.lesson || ws.lesson;
                    ws.text = e.layer1_text || '';
                    ws.wordCount = countWords(ws.text);
                    ws.analysis = e.layer2_analysis || null;
                    ws.mirrorSource = e.source || null;
                    try { ws.messages = JSON.parse(e.layer3_messages || '[]'); } catch(err) { ws.messages = []; }
                    // Zum passenden Tab springen
                    ws.tab = ws.messages.length > 0 ? 'coach' : (ws.analysis ? 'mirror' : 'write');
                    render(container);
                } else {
                    ws.error = 'Eintrag konnte nicht geladen werden.';
                    render(container);
                }
            }).catch(function() {
                ws.error = 'Eintrag konnte nicht geladen werden.';
                render(container);
            });
            return;
        }

        // Auto-Mirror von Persönlichkeitstest?
        if (window.__AP._mirrorText) {
            ws.text = window.__AP._mirrorText;
            ws.wordCount = countWords(ws.text);
            ws.tab = 'mirror';
            ws.mirrorSource = window.__AP._mirrorSource || null;
            delete window.__AP._mirrorText;
            delete window.__AP._mirrorSource;
            var autoTrigger = window.__AP._mirrorAutoTrigger;
            delete window.__AP._mirrorAutoTrigger;
            render(container);
            if (autoTrigger) {
                window.__AP_MIRROR();
            }
            return;
        }

        render(container);
    };

    function render(container) {
        // Lesson Selector
        var lessonOpts = '';
        var lessons = window.__AP.LESSONS;
        for (var key in lessons) {
            lessonOpts += '<option value="' + key + '"' + (ws.lesson === key ? ' selected' : '') + '>' + lessons[key] + '</option>';
        }

        // Tabs
        var writeClass = ws.tab === 'write' ? ' ap-tab-active' : (ws.text ? ' ap-tab-done' : '');
        var mirrorClass = ws.tab === 'mirror' ? ' ap-tab-active' : (ws.analysis ? ' ap-tab-done' : '');
        var coachClass = ws.tab === 'coach' ? ' ap-tab-active' : (ws.messages.length > 0 ? ' ap-tab-done' : '');

        var errorHtml = ws.error ? '<div class="ap-error">' + escapeHtml(ws.error) + '</div>' : '';

        var html = '<div class="ap-fade-in">'
            + '<div class="ap-lesson-bar">'
            + '<label>Lektion:</label>'
            + '<select class="ap-select" id="ap-lesson-select">' + lessonOpts + '</select>'
            + '</div>'
            + '<div class="ap-tabs">'
            + '<button class="ap-tab' + writeClass + '" onclick="window.__AP_TAB(\'write\')"><span class="ap-tab-num">1</span>Schreiben</button>'
            + '<button class="ap-tab' + mirrorClass + '" onclick="window.__AP_TAB(\'mirror\')"><span class="ap-tab-num">2</span>Spiegel</button>'
            + '<button class="ap-tab' + coachClass + '" onclick="window.__AP_TAB(\'coach\')"><span class="ap-tab-num">3</span>Coach</button>'
            + '</div>'
            + errorHtml
            + '<div id="ap-tab-content"></div>'
            + '</div>';

        container.innerHTML = html;

        document.getElementById('ap-lesson-select').addEventListener('change', function() {
            ws.lesson = this.value;
            window.__AP.state.lesson = ws.lesson;
            // Reset bei Lektionswechsel
            ws.entryId = null;
            ws.text = '';
            ws.analysis = null;
            ws.messages = [];
            ws.tab = 'write';
            ws.celebrated = false;
            ws._autoCoachSent = false;
            clearDraft();
            render(container);
        });

        renderTab();
    }

    function renderTab() {
        var tabEl = document.getElementById('ap-tab-content');
        if (!tabEl) return;

        if (ws.tab === 'write') renderWrite(tabEl);
        else if (ws.tab === 'mirror') renderMirror(tabEl);
        else if (ws.tab === 'coach') renderCoach(tabEl);
    }

    // === TAB 1: SCHREIBEN ===
    function renderWrite(el) {
        var prompt = PROMPTS[ws.lesson] || 'Schreibe frei \u00fcber das, was dich gerade bewegt.';
        var defaultTime = formatTime(Math.round(ws.timerDuration * 60));
        var timerText = ws.timerRunning
            ? formatTime(ws.timerSeconds) + ' \u23F8'
            : (ws.timerSeconds > 0 ? formatTime(ws.timerSeconds) + ' \u25B6' : defaultTime + ' \u25B6');

        el.innerHTML = '<div class="ap-writer-area">'
            + '<div class="ap-writer-prompt">' + escapeHtml(prompt) + '</div>'
            + renderResearchHint()
            + renderSettingsBar()
            + '<div class="ap-writer-toolbar">'
            + '<div class="ap-writer-info">'
            + renderWordProgress()
            + '<span class="ap-autosave-indicator" id="ap-autosave">' + ws.autoSaveStatus + '</span>'
            + '</div>'
            + '<button class="ap-writer-timer' + (ws.timerRunning ? ' ap-timer-running' : '') + '" onclick="window.__AP_TIMER()" title="' + ws.timerDuration + '-Minuten Timer">'
            + '\u23F1 ' + timerText
            + '</button>'
            + '</div>'
            + '<textarea class="ap-textarea" id="ap-text" placeholder="Schreibe frei, ungefiltert, nur f\u00fcr dich..." style="min-height:55vh;" maxlength="15000">' + escapeHtml(ws.text) + '</textarea>'
            + '<div class="ap-writer-actions">'
            + '<button class="ap-btn" onclick="window.__AP_SAVE()" ' + (ws.loading ? 'disabled' : '') + '>'
            + (ws.loading ? '<span class="ap-spinner"></span>' : '') + 'Speichern'
            + '</button>'
            + '<button class="ap-btn" onclick="window.__AP_TO_MIRROR()" ' + (!ws.text ? 'disabled' : '') + '>'
            + 'Weiter zum Spiegel \u2192'
            + '</button>'
            + '</div></div>';

        // Research-Hint Toggle
        var toggleEl = document.getElementById('ap-research-toggle');
        if (toggleEl) toggleEl.addEventListener('click', window.__AP_TOGGLE_RESEARCH);

        var textarea = document.getElementById('ap-text');
        textarea.addEventListener('input', function() {
            ws.text = this.value;
            ws.wordCount = countWords(ws.text);
            // Partial DOM-Updates (kein Full-Rerender)
            var wcEl = document.getElementById('ap-word-count');
            if (wcEl) {
                wcEl.textContent = ws.wordCount + ' / ' + ws.wordGoal + ' W\u00f6rter';
                wcEl.className = 'ap-word-count-goal' + (ws.wordCount >= ws.wordGoal ? ' ap-goal-reached' : '');
            }
            var fillEl = document.getElementById('ap-progress-fill');
            if (fillEl) {
                var pct = Math.min(100, Math.round((ws.wordCount / ws.wordGoal) * 100));
                fillEl.style.width = pct + '%';
                fillEl.className = 'ap-progress-fill' + (ws.wordCount >= ws.wordGoal ? ' ap-progress-done' : '');
            }
            checkCelebrationTrigger('words');
            saveDraft();
        });
        // Fokus ans Ende
        textarea.focus();
        textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    }

    // === TAB 2: SPIEGEL ===
    function renderMirror(el) {
        if (!ws.text) {
            el.innerHTML = '<div class="ap-mirror-empty">'
                + '<div class="ap-mirror-empty-icon" style="font-size:32px;opacity:0.4;">&#9998;</div>'
                + '<p style="font-size:16px;margin-bottom:8px;">Zuerst schreiben</p>'
                + '<p style="font-size:14px;opacity:0.6;">Gehe zurück zu Schicht 1 und schreibe deinen Text.</p>'
                + '<button class="ap-btn ap-btn-ghost" onclick="window.__AP_TAB(\'write\')" style="margin-top:16px;">← Zum Schreiben</button>'
                + '</div>';
            return;
        }

        if (ws.analysis) {
            el.innerHTML = '<div>'
                + '<div class="ap-mirror-result">' + escapeHtml(ws.analysis) + '</div>'
                + '<div class="ap-writer-actions">'
                + '<button class="ap-btn ap-btn-ghost" onclick="window.__AP_MIRROR()" ' + (ws.loading ? 'disabled' : '') + '>'
                + '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg> Neu spiegeln'
                + '</button>'
                + '<button class="ap-btn" onclick="window.__AP_TAB(\'coach\')">'
                + 'Weiter zum Coach →'
                + '</button>'
                + '</div></div>';
            return;
        }

        var mirrorError = ws.error ? '<div class="ap-error" style="margin-bottom:16px;">' + escapeHtml(ws.error) + '</div>' : '';
        el.innerHTML = '<div class="ap-mirror-empty">'
            + '<div class="ap-mirror-empty-icon">🪞</div>'
            + '<p style="font-size:16px;margin-bottom:8px;">KI als Spiegel</p>'
            + '<p style="font-size:14px;opacity:0.6;margin-bottom:20px;line-height:1.6;">Die KI liest deinen Text und spiegelt dir zurück, was sie sieht - Muster, Emotionen, blinde Flecken.<br>Kein Rat, keine Diagnose. Nur ein ehrlicher Spiegel.</p>'
            + mirrorError
            + '<button class="ap-btn" onclick="window.__AP_MIRROR()" ' + (ws.loading ? 'disabled' : '') + '>'
            + (ws.loading ? '<span class="ap-spinner"></span> Wird gespiegelt...' : '🪞 Text spiegeln lassen')
            + '</button>'
            + '</div>';
    }

    // === TAB 3: COACH ===
    function renderCoach(el) {
        if (!ws.text) {
            el.innerHTML = '<div class="ap-coach-empty">'
                + '<p style="font-size:16px;margin-bottom:8px;">Zuerst schreiben und spiegeln</p>'
                + '<p style="font-size:14px;opacity:0.6;">Der Coach baut auf deinem Text und der Spiegel-Analyse auf.</p>'
                + '<button class="ap-btn ap-btn-ghost" onclick="window.__AP_TAB(\'write\')" style="margin-top:16px;">← Zum Schreiben</button>'
                + '</div>';
            return;
        }

        if (!ws.entryId) {
            el.innerHTML = '<div class="ap-coach-empty">'
                + '<p style="font-size:16px;margin-bottom:8px;">Zuerst speichern</p>'
                + '<p style="font-size:14px;opacity:0.6;">Speichere deinen Eintrag, bevor du mit dem Coach sprichst.</p>'
                + '<button class="ap-btn" onclick="window.__AP_SAVE_AND_COACH()">Speichern & zum Coach</button>'
                + '</div>';
            return;
        }

        // Auto-Initiation: Coach startet automatisch beim ersten Besuch
        if (ws.messages.length === 0 && ws.analysis && !ws.loading && !ws._autoCoachSent) {
            ws._autoCoachSent = true;
            el.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;min-height:200px;">'
                + '<span class="ap-dots"><span></span><span></span><span></span></span></div>';
            ws.loading = true;
            window.__AP.api('/ankerpraktik/coach', {
                method: 'POST',
                body: { entry_id: ws.entryId, message: '[COACH_START]' }
            }).then(function(data) {
                ws.messages = data.messages || [];
                saveDraft();
            }).catch(function(e) {
                ws.error = e.status === 429
                    ? 'Tageslimit erreicht (20 Coach-Nachrichten pro Tag). Morgen geht es weiter!'
                    : (e.message || 'Coach-Start fehlgeschlagen');
            }).then(function() {
                ws.loading = false;
                renderTab();
            });
            return;
        }

        // Chat-Messages
        var chatHtml = '';
        if (ws.messages.length === 0 && !ws.analysis) {
            chatHtml = '<div class="ap-coach-empty" style="padding:24px;">'
                + '<p style="font-size:15px;margin-bottom:4px;">Dein KI-Coach</p>'
                + '<p style="font-size:13px;opacity:0.6;line-height:1.6;">Stelle eine Frage zu deinem Text oder der Spiegel-Analyse.<br>Der Coach fragt nach, vertieft und reframed - gibt aber keine Antworten.</p>'
                + '</div>';
        } else if (ws.messages.length === 0) {
            chatHtml = '<div style="display:flex;align-items:center;justify-content:center;min-height:200px;">'
                + '<span class="ap-dots"><span></span><span></span><span></span></span></div>';
        } else {
            chatHtml = '<div class="ap-chat" id="ap-chat">';
            for (var i = 0; i < ws.messages.length; i++) {
                var msg = ws.messages[i];
                // Verstecke Auto-Init Trigger-Message
                if (msg.role === 'user' && msg.content === '[COACH_START]') continue;
                chatHtml += '<div class="ap-chat-msg ap-msg-' + msg.role + '">' + escapeHtml(msg.content) + '</div>';
            }
            if (ws.loading) {
                chatHtml += '<div class="ap-chat-msg ap-msg-assistant"><span class="ap-dots"><span></span><span></span><span></span></span></div>';
            }
            chatHtml += '</div>';
        }

        el.innerHTML = chatHtml
            + '<div class="ap-chat-input-wrap">'
            + '<textarea class="ap-chat-input" id="ap-coach-input" placeholder="Schreibe deine Nachricht..." rows="1" maxlength="2000"></textarea>'
            + '<button class="ap-chat-send" onclick="window.__AP_COACH_SEND()" ' + (ws.loading ? 'disabled' : '') + ' title="Senden">↑</button>'
            + '</div>';

        // Auto-scroll
        var chatEl = document.getElementById('ap-chat');
        if (chatEl) chatEl.scrollTop = chatEl.scrollHeight;

        // Enter to send
        var input = document.getElementById('ap-coach-input');
        if (input) {
            input.focus();
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    window.__AP_COACH_SEND();
                }
            });
            // Auto-resize
            input.addEventListener('input', function() {
                this.style.height = 'auto';
                this.style.height = Math.min(this.scrollHeight, 120) + 'px';
            });
        }
    }

    // === ACTIONS ===
    window.__AP_TAB = function(tab) {
        ws.tab = tab;
        ws.error = null;
        renderTab();
    };

    window.__AP_TIMER = function() {
        if (ws.timerRunning) {
            stopTimer();
        } else {
            startTimer();
        }
        renderTab();
    };

    function startTimer() {
        if (ws.timerSeconds === 0) ws.timerSeconds = Math.round(ws.timerDuration * 60);
        ws.timerRunning = true;
        ws.timerInterval = setInterval(function() {
            ws.timerSeconds--;
            if (ws.timerSeconds <= 0) {
                stopTimer();
                ws.timerSeconds = 0;
                checkCelebrationTrigger('timer');
            }
            // Timer-Anzeige updaten ohne volles Re-Render
            var timerBtn = document.querySelector('.ap-writer-timer');
            if (timerBtn) {
                timerBtn.innerHTML = '\u23F1 ' + formatTime(ws.timerSeconds) + (ws.timerRunning ? ' \u23F8' : ' \u25B6');
                timerBtn.className = 'ap-writer-timer' + (ws.timerRunning ? ' ap-timer-running' : '');
            }
        }, 1000);
    }

    function stopTimer() {
        ws.timerRunning = false;
        if (ws.timerInterval) {
            clearInterval(ws.timerInterval);
            ws.timerInterval = null;
        }
    }

    function formatTime(seconds) {
        var m = Math.floor(seconds / 60);
        var s = seconds % 60;
        return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    }

    function countWords(text) {
        if (!text || !text.trim()) return 0;
        return text.trim().split(/\s+/).length;
    }

    // === LOCAL DRAFT (localStorage) ===
    function saveDraft() {
        try {
            localStorage.setItem('ap_draft_' + ws.lesson, JSON.stringify({
                lesson: ws.lesson,
                text: ws.text,
                entryId: ws.entryId,
                tab: ws.tab,
                analysis: ws.analysis,
                messages: ws.messages,
                mirrorSource: ws.mirrorSource
            }));
        } catch(e) {}
        // Update indicator
        var indicator = document.getElementById('ap-autosave');
        if (indicator) {
            indicator.textContent = 'Entwurf gesichert';
            indicator.className = 'ap-autosave-indicator';
        }
    }

    function loadDraft() {
        try {
            var raw = localStorage.getItem('ap_draft_' + ws.lesson);
            if (!raw) return null;
            return JSON.parse(raw);
        } catch(e) { return null; }
    }

    function clearDraft() {
        localStorage.removeItem('ap_draft_' + ws.lesson);
    }

    async function doSave(silent) {
        if (!ws.text.trim()) return;

        if (!silent) {
            ws.loading = true;
            renderTab();
        } else {
            var indicator = document.getElementById('ap-autosave');
            if (indicator) {
                indicator.textContent = 'Speichert...';
                indicator.className = 'ap-autosave-indicator ap-saving';
            }
        }

        try {
            if (ws.entryId) {
                // Update
                await window.__AP.api('/ankerpraktik/entries/' + ws.entryId, {
                    method: 'PUT',
                    body: { layer1_text: ws.text }
                });
            } else {
                // Create
                var data = await window.__AP.api('/ankerpraktik/entries', {
                    method: 'POST',
                    body: { lesson: ws.lesson, layer1_text: ws.text }
                });
                ws.entryId = data.entry_id;
            }

            ws.autoSaveStatus = 'Gespeichert ✓';
            saveDraft(); // Draft mit entryId aktualisieren
            if (silent) {
                var indicator = document.getElementById('ap-autosave');
                if (indicator) {
                    indicator.textContent = 'Gespeichert ✓';
                    indicator.className = 'ap-autosave-indicator';
                }
            }
        } catch(e) {
            ws.autoSaveStatus = '';
            if (!silent) {
                ws.error = e.message || 'Speichern fehlgeschlagen';
            }
        }

        if (!silent) {
            ws.loading = false;
            renderTab();
        }
    }

    window.__AP_SAVE = function() {
        doSave(false);
    };

    window.__AP_TO_MIRROR = function() {
        if (!ws.text.trim()) return;
        // Erst speichern, dann wechseln
        doSave(true).then(function() {
            ws.tab = 'mirror';
            ws.error = null;
            renderTab();
        });
    };

    // === MIRROR ===
    window.__AP_MIRROR = async function() {
        if (!ws.text.trim()) return;
        if (ws.text.trim().length < 50) {
            ws.error = 'Bitte schreibe mindestens 50 Zeichen, bevor du spiegelst.';
            renderTab();
            return;
        }
        ws.loading = true;
        ws.error = null;
        renderTab();

        try {
            var isTestMirror = ws.mirrorSource && ws.mirrorSource.indexOf('test:') === 0;

            // Erst speichern falls nötig (nicht bei Test-Mirrors - die brauchen keinen Journal-Eintrag)
            if (!ws.entryId && !isTestMirror) {
                var saveData = await window.__AP.api('/ankerpraktik/entries', {
                    method: 'POST',
                    body: { lesson: ws.lesson, layer1_text: ws.text }
                });
                ws.entryId = saveData.entry_id;
            }

            var mirrorBody = {
                text: ws.text,
                lesson: isTestMirror ? '_test' : ws.lesson
            };
            if (ws.entryId) mirrorBody.entry_id = ws.entryId;
            if (ws.mirrorSource) {
                mirrorBody.source = ws.mirrorSource;
            }
            var data = await window.__AP.api('/ankerpraktik/mirror', {
                method: 'POST',
                body: mirrorBody
            });
            ws.analysis = data.analysis;
            if (!isTestMirror) {
                ws.entryId = data.entry_id || ws.entryId;
            }
            ws.mirrorSource = null;
            saveDraft();
        } catch(e) {
            ws.error = e.message || 'Spiegelung fehlgeschlagen';
        }

        ws.loading = false;
        renderTab();
    };

    // === COACH ===
    window.__AP_SAVE_AND_COACH = async function() {
        ws.loading = true;
        renderTab();

        try {
            if (!ws.entryId) {
                var saveData = await window.__AP.api('/ankerpraktik/entries', {
                    method: 'POST',
                    body: { lesson: ws.lesson, layer1_text: ws.text }
                });
                ws.entryId = saveData.entry_id;
            }
            ws.tab = 'coach';
            saveDraft();
        } catch(e) {
            ws.error = e.message || 'Speichern fehlgeschlagen';
        }
        ws.loading = false;
        renderTab();
    };

    window.__AP_COACH_SEND = async function() {
        var input = document.getElementById('ap-coach-input');
        if (!input) return;
        var message = input.value.trim();
        if (!message || ws.loading) return;

        ws.loading = true;
        ws.error = null;
        ws.messages.push({ role: 'user', content: message });
        renderTab();

        try {
            var data = await window.__AP.api('/ankerpraktik/coach', {
                method: 'POST',
                body: {
                    entry_id: ws.entryId,
                    message: message
                }
            });
            ws.messages = data.messages;
            saveDraft();
        } catch(e) {
            // User-Message wieder entfernen bei Fehler
            ws.messages.pop();
            ws.error = e.status === 429
                ? 'Tageslimit erreicht (20 Coach-Nachrichten pro Tag). Morgen geht es weiter!'
                : (e.message || 'Coach-Antwort fehlgeschlagen');
        }

        ws.loading = false;
        renderTab();
    };

    // === JOURNALING-ZIELE ===

    function renderResearchHint() {
        var bulbSvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>';
        var chevron = '<svg class="ap-research-chevron" id="ap-research-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

        return '<div class="ap-research-toggle" id="ap-research-toggle">'
            + bulbSvg
            + 'Wie dieses Tool funktioniert und warum es wirkt'
            + chevron
            + '</div>'
            + '<div class="ap-research-body" id="ap-research-body">'

            // Abschnitt 1: Was ist die Ankerpraktik?
            + '<div class="ap-research-section">'
            + '<div class="ap-research-section-title">Die Ankerpraktik \u2013 drei Schichten der Selbsterkenntnis</div>'
            + '<p>Dieses Tool kombiniert drei wissenschaftlich fundierte Methoden in einem Dreischritt-Prozess:</p>'
            + '<p><strong>Schicht 1 \u2013 Schreiben:</strong> '
            + 'Expressives Schreiben nach dem Pennebaker-Protokoll. Du schreibst frei, unzensiert und ohne Pause '
            + '\u00fcber das, was dich gerade besch\u00e4ftigt. Kein Tagebuch im klassischen Sinn \u2013 '
            + 'eher ein Denkprozess durch die Hand. Ziel ist nicht ein sch\u00f6ner Text, '
            + 'sondern der unkontrollierte Zugang zu deinen Gedanken.</p>'
            + '<p><strong>Schicht 2 \u2013 Spiegel:</strong> '
            + 'Eine KI-gest\u00fctzte Textanalyse reflektiert dir zur\u00fcck, was zwischen den Zeilen steht. '
            + 'Wiederkehrende Themen, emotionale Muster, implizite Annahmen \u2013 Dinge, '
            + 'die beim Schreiben oft unsichtbar bleiben. Wie ein aufmerksamer Gespr\u00e4chspartner, '
            + 'der nicht bewertet, sondern fragt.</p>'
            + '<p><strong>Schicht 3 \u2013 Coach:</strong> '
            + 'Ein Dialog mit einer KI, die auf Basis deines Textes und der Spiegel-Analyse gezielte Fragen stellt. '
            + 'Keine Ratschl\u00e4ge, keine Diagnosen \u2013 sondern Fragen, die dich tiefer f\u00fchren.</p>'
            + '</div>'

            // Abschnitt 2: Wissenschaftliche Grundlagen
            + '<div class="ap-research-section">'
            + '<div class="ap-research-section-title">Wissenschaftliche Grundlage</div>'
            + '<p><strong>Expressives Schreiben (Pennebaker, 1986):</strong> '
            + 'In \u00fcber 300 Studien repliziert. James Pennebaker wies nach, dass 15\u201320 Minuten '
            + 'freies Schreiben \u00fcber pers\u00f6nlich bedeutsame Themen messbare physiologische und psychologische '
            + 'Ver\u00e4nderungen bewirkt. Der Mechanismus: Unverarbeitete Erlebnisse binden kognitive Ressourcen. '
            + 'Schreiben \u00fcberf\u00fchrt diffuse Emotionen in sprachliche Struktur \u2013 '
            + 'das Gehirn kann sie dann als \u00abverarbeitet\u00bb ablegen.</p>'
            + '<p><strong>Reflexives Schreiben (Bolton, 2010):</strong> '
            + 'Die therapeutische Wirkung verst\u00e4rkt sich, wenn auf das Schreiben eine strukturierte Reflexion folgt. '
            + 'Der Spiegel-Schritt nutzt dieses Prinzip: Distanz zum eigenen Text schaffen, '
            + 'Muster erkennen, blinde Flecken sichtbar machen.</p>'
            + '<p><strong>Sokratischer Dialog (Carey & Mullan, 2004):</strong> '
            + 'Offene Fragen f\u00fchren zu tieferer Selbsterkenntnis als direkte Antworten. '
            + 'Der Coach-Schritt nutzt sokratische Fragetechnik \u2013 er gibt dir keine L\u00f6sungen, '
            + 'sondern hilft dir, deine eigenen zu finden.</p>'
            + '</div>'

            // Abschnitt 3: Erwartbare Effekte
            + '<div class="ap-research-section">'
            + '<div class="ap-research-section-title">Nachgewiesene Effekte</div>'
            + '<p><strong>Kurzfristig</strong> (ab der ersten Sitzung): '
            + 'Emotionale Entlastung, klarere Gedanken, reduziertes Gr\u00fcbeln. '
            + 'Manche berichten ein Gef\u00fchl von \u00abErleichterung\u00bb oder \u00abOrdnung im Kopf\u00bb.</p>'
            + '<p><strong>Nach 2\u20134 Wochen:</strong> '
            + 'Weniger Stresssymptome (Cortisol-Reduktion), besserer Schlaf, '
            + 'erh\u00f6hte emotionale Klarheit, st\u00e4rkeres Selbstbewusstsein \u00fcber eigene Bed\u00fcrfnisse und Werte.</p>'
            + '<p><strong>Langfristig</strong> (ab 6\u20138 Wochen regelm\u00e4\u00dfiger Praxis): '
            + 'Gest\u00e4rkte Immunfunktion (mehr T-Helferzellen), weniger Arztbesuche, '
            + 'verbesserte Beziehungsqualit\u00e4t, h\u00f6here Lebenszufriedenheit. '
            + 'Die longitudinale Muster-Erkennung der Ankerpraktik zeigt dir deinen Entwicklungsbogen \u00fcber die Zeit.</p>'
            + '</div>'

            // Abschnitt 4: Optimale Praxis
            + '<div class="ap-research-section">'
            + '<div class="ap-research-section-title">Optimale Praxis</div>'
            + '<p><strong>Dauer:</strong> 15\u201320 Minuten. K\u00fcrzer als 10 Minuten reicht selten aus, '
            + 'um in tiefere Gedankenschichten vorzudringen. L\u00e4nger als 30 Minuten bringt keine zus\u00e4tzliche Wirkung.</p>'
            + '<p><strong>Umfang:</strong> 500\u2013750 W\u00f6rter sind der optimale Bereich. '
            + 'Genug, um \u00fcber die Oberfl\u00e4che hinauszukommen \u2013 nicht so viel, dass es zur Pflicht wird.</p>'
            + '<p><strong>Haltung:</strong> Schreibe ohne Pause, ohne zur\u00fcckzulesen, ohne zu korrigieren. '
            + 'Rechtschreibung und Grammatik sind egal. Wenn du stockst, '
            + 'schreibe den letzten Satz nochmal oder schreibe \u00abich wei\u00df nicht was ich schreiben soll\u00bb, '
            + 'bis der n\u00e4chste Gedanke kommt. Er kommt.</p>'
            + '<p><strong>Frequenz:</strong> 2\u20133 Mal pro Woche reicht f\u00fcr sp\u00fcrbare Effekte. '
            + 'T\u00e4glich ist gut, aber kein Muss \u2013 Konstanz z\u00e4hlt mehr als H\u00e4ufigkeit.</p>'
            + '</div>'

            + '</div>';
    }

    window.__AP_TOGGLE_RESEARCH = function() {
        var body = document.getElementById('ap-research-body');
        var chevron = document.getElementById('ap-research-chevron');
        if (body && chevron) {
            body.classList.toggle('ap-open');
            chevron.classList.toggle('ap-open');
        }
    };

    function renderSettingsBar() {
        var wordGoals = [500, 750, 1000];
        var timerDurations = [15, 20, 25, 30];
        // Dev-Mode: Schnelle Test-Optionen
        if (window.__AP_LOCAL) {
            wordGoals = [1, 5].concat(wordGoals);
            timerDurations = [0.017, 0.083].concat(timerDurations); // 1s, 5s
        }
        var timerLocked = ws.timerRunning || ws.timerSeconds > 0;

        var wordPills = '';
        for (var i = 0; i < wordGoals.length; i++) {
            var active = ws.wordGoal === wordGoals[i] ? ' ap-pill-active' : '';
            wordPills += '<button class="ap-pill' + active + '" onclick="window.__AP_SET_WORD_GOAL(' + wordGoals[i] + ')">' + wordGoals[i] + '</button>';
        }

        var timerPills = '';
        for (var j = 0; j < timerDurations.length; j++) {
            var active = ws.timerDuration === timerDurations[j] ? ' ap-pill-active' : '';
            var disabled = timerLocked ? ' disabled' : '';
            var label = timerDurations[j] < 1 ? Math.round(timerDurations[j] * 60) + 's' : timerDurations[j] + ' min';
            timerPills += '<button class="ap-pill' + active + '"' + disabled + ' onclick="window.__AP_SET_TIMER_DURATION(' + timerDurations[j] + ')">' + label + '</button>';
        }

        return '<div class="ap-settings-bar">'
            + '<div class="ap-setting-group">'
            + '<span class="ap-setting-label">Ziel:</span>'
            + '<div class="ap-pill-group">' + wordPills + '</div>'
            + '</div>'
            + '<div class="ap-setting-group">'
            + '<span class="ap-setting-label">Zeit:</span>'
            + '<div class="ap-pill-group">' + timerPills + '</div>'
            + '</div>'
            + '</div>';
    }

    function renderWordProgress() {
        var pct = Math.min(100, Math.round((ws.wordCount / ws.wordGoal) * 100));
        var doneClass = ws.wordCount >= ws.wordGoal ? ' ap-progress-done' : '';
        var goalClass = ws.wordCount >= ws.wordGoal ? ' ap-goal-reached' : '';

        return '<div class="ap-word-progress">'
            + '<div class="ap-progress-bar"><div class="ap-progress-fill' + doneClass + '" id="ap-progress-fill" style="width:' + pct + '%"></div></div>'
            + '<span class="ap-word-count-goal' + goalClass + '" id="ap-word-count">' + ws.wordCount + ' / ' + ws.wordGoal + ' W\u00f6rter</span>'
            + '</div>';
    }

    window.__AP_SET_WORD_GOAL = function(goal) {
        ws.wordGoal = goal;
        localStorage.setItem('ap_word_goal', goal);
        renderTab();
    };

    window.__AP_SET_TIMER_DURATION = function(minutes) {
        if (ws.timerRunning || ws.timerSeconds > 0) return;
        ws.timerDuration = minutes;
        localStorage.setItem('ap_timer_duration', minutes);
        renderTab();
    };

    // === CELEBRATION ===

    function checkCelebrationTrigger(source) {
        if (ws.celebrated) return;

        var shouldCelebrate = false;
        if (source === 'words' && ws.wordCount >= ws.wordGoal) shouldCelebrate = true;
        if (source === 'timer' && ws.timerSeconds <= 0) shouldCelebrate = true;

        if (shouldCelebrate) {
            ws.celebrated = true;
            var origin = null;
            if (source === 'words') {
                origin = document.getElementById('ap-word-count') || document.querySelector('.ap-word-progress');
            } else {
                origin = document.querySelector('.ap-writer-timer');
            }
            triggerCelebration(origin);
        }
    }

    function triggerCelebration(originEl) {
        // Reduced motion: nur kurzer Glow
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            var g = document.createElement('div');
            g.style.cssText = 'position:fixed;inset:0;z-index:998;pointer-events:none;background:radial-gradient(ellipse at center,rgba(188,128,52,0.15) 0%,transparent 70%);';
            document.body.appendChild(g);
            g.animate([{opacity:0},{opacity:1,offset:0.3},{opacity:0}], {duration:2000,fill:'forwards'});
            setTimeout(function() { g.remove(); }, 2100);
            return;
        }

        var vw = window.innerWidth;
        var vh = window.innerHeight;
        var goldPalette = ['#BC8034', '#D4A054', '#E8C47A', '#A06C28', '#F0D890', '#C49040'];
        var symbols = ['\u2726', '\u2727', '\u25C6', '\u2605', '\u2022', '\u2219'];

        // Hintergrund-Glow (laenger, pulsierend)
        var glow = document.createElement('div');
        glow.style.cssText = 'position:fixed;inset:0;z-index:998;pointer-events:none;'
            + 'background:radial-gradient(ellipse at center, rgba(188,128,52,0.1) 0%, transparent 70%);';
        document.body.appendChild(glow);
        glow.animate([
            { opacity: 0 },
            { opacity: 1, offset: 0.08 },
            { opacity: 0.6, offset: 0.3 },
            { opacity: 1, offset: 0.5 },
            { opacity: 0.7, offset: 0.75 },
            { opacity: 0 }
        ], { duration: 8000, easing: 'ease-in-out', fill: 'forwards' });
        setTimeout(function() { glow.remove(); }, 8100);

        // Feuerwerk-Raketen: 5 Stueck, versetzt
        var rockets = [
            { x: vw * 0.5,  delay: 0,    burstY: vh * 0.35, particles: 35 },
            { x: vw * 0.3,  delay: 800,  burstY: vh * 0.30, particles: 28 },
            { x: vw * 0.7,  delay: 1400, burstY: vh * 0.32, particles: 28 },
            { x: vw * 0.4,  delay: 2400, burstY: vh * 0.28, particles: 32 },
            { x: vw * 0.6,  delay: 3200, burstY: vh * 0.25, particles: 30 }
        ];

        rockets.forEach(function(rocket) {
            setTimeout(function() {
                launchRocket(rocket.x, vh, rocket.burstY, rocket.particles, goldPalette, symbols);
            }, rocket.delay);
        });

        // Finale Salve: 3 gleichzeitige kleine Bursts
        setTimeout(function() {
            for (var s = 0; s < 3; s++) {
                var sx = vw * (0.3 + Math.random() * 0.4);
                var sy = vh * (0.2 + Math.random() * 0.2);
                spawnBurst(sx, sy, 18, goldPalette, symbols);
            }
        }, 5000);

        // Cleanup
        setTimeout(function() {
            var all = document.querySelectorAll('.ap-confetti-particle, .ap-firework-trail, .ap-celebration-ring');
            for (var j = 0; j < all.length; j++) all[j].remove();
        }, 9000);
    }

    function launchRocket(startX, startY, burstY, particleCount, palette, symbols) {
        // Aufstiegs-Trail (leuchtende Linie von unten nach oben)
        var trail = document.createElement('div');
        trail.className = 'ap-firework-trail';
        trail.style.left = startX + 'px';
        trail.style.top = startY + 'px';
        trail.style.height = '0px';
        trail.style.background = 'linear-gradient(to top, transparent, #BC8034)';
        document.body.appendChild(trail);

        var riseDur = 600 + Math.random() * 300;
        var riseHeight = startY - burstY;

        trail.animate([
            { top: startY + 'px', height: '0px', opacity: 0.8 },
            { top: (startY - riseHeight * 0.5) + 'px', height: '20px', opacity: 1, offset: 0.5 },
            { top: burstY + 'px', height: '8px', opacity: 0.6 }
        ], { duration: riseDur, easing: 'cubic-bezier(0.2, 0, 0.3, 1)', fill: 'forwards' });

        // Beim Ankommen: Explosion
        setTimeout(function() {
            trail.remove();

            // Ring-Expansion
            var ring = document.createElement('div');
            ring.className = 'ap-celebration-ring';
            ring.style.left = startX + 'px';
            ring.style.top = burstY + 'px';
            ring.style.transform = 'translate(-50%, -50%)';
            document.body.appendChild(ring);
            ring.animate([
                { width: '0px', height: '0px', opacity: 0.7, borderWidth: '2px', borderColor: 'rgba(188,128,52,0.8)' },
                { width: '200px', height: '200px', opacity: 0, borderWidth: '0.5px', borderColor: 'rgba(188,128,52,0)' }
            ], { duration: 1000, easing: 'ease-out', fill: 'forwards' });
            setTimeout(function() { ring.remove(); }, 1100);

            // Partikel-Burst
            spawnBurst(startX, burstY, particleCount, palette, symbols);

        }, riseDur);
    }

    function spawnBurst(cx, cy, count, palette, symbols) {
        for (var i = 0; i < count; i++) {
            (function(index) {
                var delay = Math.random() * 80;
                setTimeout(function() {
                    var p = document.createElement('div');
                    p.className = 'ap-confetti-particle';
                    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
                    p.style.left = cx + 'px';
                    p.style.top = cy + 'px';
                    var color = palette[Math.floor(Math.random() * palette.length)];
                    p.style.color = color;
                    p.style.opacity = '0';
                    p.style.fontSize = (8 + Math.random() * 12) + 'px';
                    p.style.textShadow = '0 0 8px ' + color;
                    document.body.appendChild(p);

                    var angle = (Math.PI * 2 * index) / count + (Math.random() - 0.5) * 0.4;
                    var dist = 60 + Math.random() * 160;
                    var dx = Math.cos(angle) * dist;
                    var dy = Math.sin(angle) * dist;
                    var gravity = 40 + Math.random() * 60;
                    var spin = (Math.random() - 0.5) * 540;

                    var dur = 1800 + Math.random() * 1200;

                    p.animate([
                        { transform: 'translate(0,0) scale(0)', opacity: 0 },
                        { transform: 'translate(' + (dx*0.4) + 'px,' + (dy*0.4-15) + 'px) scale(1.4)', opacity: 1, offset: 0.1 },
                        { transform: 'translate(' + dx + 'px,' + dy + 'px) scale(1)', opacity: 0.8, offset: 0.4 },
                        { transform: 'translate(' + (dx*1.1) + 'px,' + (dy+gravity) + 'px) scale(0.15)', opacity: 0 }
                    ], {
                        duration: dur,
                        easing: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
                        fill: 'forwards'
                    });

                    setTimeout(function() { p.remove(); }, dur + 50);
                }, delay);
            })(i);
        }
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
})();

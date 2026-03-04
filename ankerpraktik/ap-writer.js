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

/* ======== RESPONSIVE ======== */
@media (max-width: 600px) {
    .ap-tabs { flex-direction: column; gap: 2px; }
    .ap-tab { padding: 8px 12px; font-size: 13px; }
    .ap-lesson-bar { flex-direction: column; align-items: stretch; gap: 8px; }
    .ap-chat-msg { max-width: 95%; }
    .ap-writer-toolbar { flex-direction: column; align-items: stretch; gap: 8px; }
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
        wordCount: 0
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
        stopTimer();
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
        var prompt = PROMPTS[ws.lesson] || 'Schreibe frei über das, was dich gerade bewegt.';
        var timerText = ws.timerRunning
            ? formatTime(ws.timerSeconds) + ' ⏸'
            : (ws.timerSeconds > 0 ? formatTime(ws.timerSeconds) + ' ▶' : '20:00 ▶');

        el.innerHTML = '<div class="ap-writer-area">'
            + '<div class="ap-writer-prompt">' + escapeHtml(prompt) + '</div>'
            + '<div class="ap-writer-toolbar">'
            + '<div class="ap-writer-info">'
            + '<span id="ap-word-count">' + ws.wordCount + ' Wörter</span>'
            + '<span class="ap-autosave-indicator" id="ap-autosave">' + ws.autoSaveStatus + '</span>'
            + '</div>'
            + '<button class="ap-writer-timer' + (ws.timerRunning ? ' ap-timer-running' : '') + '" onclick="window.__AP_TIMER()" title="20-Minuten Timer">'
            + '⏱ ' + timerText
            + '</button>'
            + '</div>'
            + '<textarea class="ap-textarea" id="ap-text" placeholder="Schreibe frei, ungefiltert, nur für dich..." style="min-height:300px;" maxlength="15000">' + escapeHtml(ws.text) + '</textarea>'
            + '<div class="ap-writer-actions">'
            + '<button class="ap-btn" onclick="window.__AP_SAVE()" ' + (ws.loading ? 'disabled' : '') + '>'
            + (ws.loading ? '<span class="ap-spinner"></span>' : '💾') + ' Speichern'
            + '</button>'
            + '<button class="ap-btn" onclick="window.__AP_TO_MIRROR()" ' + (!ws.text ? 'disabled' : '') + '>'
            + 'Weiter zum Spiegel →'
            + '</button>'
            + '</div></div>';

        var textarea = document.getElementById('ap-text');
        textarea.addEventListener('input', function() {
            ws.text = this.value;
            ws.wordCount = countWords(ws.text);
            var wcEl = document.getElementById('ap-word-count');
            if (wcEl) wcEl.textContent = ws.wordCount + ' Wörter';
            scheduleAutoSave();
        });
        // Fokus ans Ende
        textarea.focus();
        textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    }

    // === TAB 2: SPIEGEL ===
    function renderMirror(el) {
        if (!ws.text) {
            el.innerHTML = '<div class="ap-mirror-empty">'
                + '<div class="ap-mirror-empty-icon">✍️</div>'
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
                + '🔄 Neu spiegeln'
                + '</button>'
                + '<button class="ap-btn" onclick="window.__AP_TAB(\'coach\')">'
                + 'Weiter zum Coach →'
                + '</button>'
                + '</div></div>';
            return;
        }

        el.innerHTML = '<div class="ap-mirror-empty">'
            + '<div class="ap-mirror-empty-icon">🪞</div>'
            + '<p style="font-size:16px;margin-bottom:8px;">KI als Spiegel</p>'
            + '<p style="font-size:14px;opacity:0.6;margin-bottom:20px;line-height:1.6;">Die KI liest deinen Text und spiegelt dir zurück, was sie sieht - Muster, Emotionen, blinde Flecken.<br>Kein Rat, keine Diagnose. Nur ein ehrlicher Spiegel.</p>'
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
                + '<button class="ap-btn" onclick="window.__AP_SAVE_AND_COACH()">💾 Speichern & zum Coach</button>'
                + '</div>';
            return;
        }

        // Chat-Messages
        var chatHtml = '';
        if (ws.messages.length === 0) {
            chatHtml = '<div class="ap-coach-empty" style="padding:24px;">'
                + '<p style="font-size:15px;margin-bottom:4px;">💬 Dein KI-Coach</p>'
                + '<p style="font-size:13px;opacity:0.6;line-height:1.6;">Stelle eine Frage zu deinem Text oder der Spiegel-Analyse.<br>Der Coach fragt nach, vertieft und reframed - gibt aber keine Antworten.</p>'
                + '</div>';
        } else {
            chatHtml = '<div class="ap-chat" id="ap-chat">';
            for (var i = 0; i < ws.messages.length; i++) {
                var msg = ws.messages[i];
                chatHtml += '<div class="ap-chat-msg ap-msg-' + msg.role + '">' + escapeHtml(msg.content) + '</div>';
            }
            if (ws.loading) {
                chatHtml += '<div class="ap-chat-msg ap-msg-assistant"><span class="ap-spinner"></span></div>';
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
        if (ws.timerSeconds === 0) ws.timerSeconds = 20 * 60;
        ws.timerRunning = true;
        ws.timerInterval = setInterval(function() {
            ws.timerSeconds--;
            if (ws.timerSeconds <= 0) {
                stopTimer();
                // Sanfter Hinweis
                ws.timerSeconds = 0;
            }
            // Timer-Anzeige updaten ohne volles Re-Render
            var timerBtn = document.querySelector('.ap-writer-timer');
            if (timerBtn) {
                timerBtn.innerHTML = '⏱ ' + formatTime(ws.timerSeconds) + (ws.timerRunning ? ' ⏸' : ' ▶');
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

    // === AUTO-SAVE ===
    function scheduleAutoSave() {
        if (ws.autoSaveTimeout) clearTimeout(ws.autoSaveTimeout);
        ws.autoSaveTimeout = setTimeout(function() {
            doSave(true);
        }, 3000);
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
        ws.loading = true;
        ws.error = null;
        renderTab();

        try {
            // Erst speichern falls nötig
            if (!ws.entryId) {
                var saveData = await window.__AP.api('/ankerpraktik/entries', {
                    method: 'POST',
                    body: { lesson: ws.lesson, layer1_text: ws.text }
                });
                ws.entryId = saveData.entry_id;
            }

            var data = await window.__AP.api('/ankerpraktik/mirror', {
                method: 'POST',
                body: {
                    text: ws.text,
                    lesson: ws.lesson,
                    entry_id: ws.entryId
                }
            });
            ws.analysis = data.analysis;
            ws.entryId = data.entry_id || ws.entryId;
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
        } catch(e) {
            // User-Message wieder entfernen bei Fehler
            ws.messages.pop();
            ws.error = e.message || 'Coach-Antwort fehlgeschlagen';
        }

        ws.loading = false;
        renderTab();
    };

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
})();

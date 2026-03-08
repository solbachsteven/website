// Win³ Community - Ankerpraktik Standalone Coach
// Eigenständige Gespräche mit Referenzsystem (Entry, Lektion, Test, Frei)
(function() {
    if (window.__AP_COACH_LOADED) return;
    window.__AP_COACH_LOADED = true;

    // === CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'ap-coach');
    style.textContent = `
/* ======== COACH CONVERSATIONS LIST ======== */
.apc-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}
.apc-title {
    font-size: 22px;
    font-weight: 600;
    color: #FCF0D6;
}
.apc-new-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #BC8034;
    color: #2D2726;
    border: none;
    border-radius: 12px;
    padding: 10px 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}
.apc-new-btn:hover {
    background: #D4973F;
    transform: translateY(-1px);
}
.apc-conv-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.apc-conv-item {
    background: rgba(45, 39, 38, 0.55);
    border: 1px solid rgba(188, 128, 52, 0.15);
    border-radius: 14px;
    padding: 16px 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}
.apc-conv-item:hover {
    border-color: rgba(188, 128, 52, 0.4);
    background: rgba(45, 39, 38, 0.7);
}
.apc-conv-info {
    flex: 1;
    min-width: 0;
}
.apc-conv-title {
    font-size: 15px;
    font-weight: 500;
    color: #FCF0D6;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.apc-conv-meta {
    font-size: 12px;
    color: rgba(252, 240, 214, 0.4);
    display: flex;
    gap: 12px;
    align-items: center;
}
.apc-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: rgba(188, 128, 52, 0.12);
    border: 1px solid rgba(188, 128, 52, 0.2);
    border-radius: 20px;
    padding: 3px 10px;
    font-size: 11px;
    color: #BC8034;
    white-space: nowrap;
}
.apc-badge-free { background: rgba(100, 167, 100, 0.12); border-color: rgba(100, 167, 100, 0.2); color: #7ddf8a; }
.apc-badge-entry { background: rgba(100, 149, 237, 0.12); border-color: rgba(100, 149, 237, 0.2); color: #93b8f0; }
.apc-badge-test { background: rgba(200, 130, 200, 0.12); border-color: rgba(200, 130, 200, 0.2); color: #d4a0d4; }
.apc-empty {
    text-align: center;
    padding: 60px 20px;
    color: rgba(252, 240, 214, 0.4);
}
.apc-empty-icon {
    font-size: 48px;
    margin-bottom: 16px;
    opacity: 0.3;
}

/* ======== REFERENCE PICKER ======== */
.apc-picker-title {
    font-size: 18px;
    font-weight: 500;
    color: #FCF0D6;
    margin-bottom: 8px;
}
.apc-picker-sub {
    font-size: 14px;
    color: rgba(252, 240, 214, 0.5);
    margin-bottom: 28px;
}
.apc-picker-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
}
.apc-picker-card {
    background: rgba(45, 39, 38, 0.55);
    border: 1px solid rgba(188, 128, 52, 0.15);
    border-radius: 16px;
    padding: 24px 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.04);
    text-align: center;
}
.apc-picker-card:hover {
    border-color: rgba(188, 128, 52, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.25);
}
.apc-picker-card.apc-selected {
    border-color: #BC8034;
    background: rgba(188, 128, 52, 0.1);
}
.apc-picker-icon {
    width: 40px;
    height: 40px;
    margin: 0 auto 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #BC8034;
}
.apc-picker-label {
    font-size: 15px;
    font-weight: 500;
    color: #FCF0D6;
    margin-bottom: 4px;
}
.apc-picker-desc {
    font-size: 12px;
    color: rgba(252, 240, 214, 0.4);
    line-height: 1.5;
}
.apc-picker-select {
    margin-top: 14px;
    width: 100%;
    background: rgba(252, 240, 214, 0.06);
    border: 1px solid rgba(188, 128, 52, 0.2);
    border-radius: 10px;
    padding: 8px 12px;
    color: #FCF0D6;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    cursor: pointer;
}
.apc-picker-select option {
    background: #2D2726;
    color: #FCF0D6;
}
.apc-start-btn {
    display: block;
    width: 100%;
    margin-top: 24px;
    background: #BC8034;
    color: #2D2726;
    border: none;
    border-radius: 12px;
    padding: 14px;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}
.apc-start-btn:hover { background: #D4973F; }
.apc-start-btn:disabled { opacity: 0.4; cursor: not-allowed; }

/* ======== CHAT VIEW ======== */
.apc-chat-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
}
.apc-back-btn {
    background: none;
    border: 1px solid rgba(188, 128, 52, 0.2);
    border-radius: 10px;
    padding: 8px 12px;
    color: rgba(252, 240, 214, 0.6);
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.apc-back-btn:hover { border-color: #BC8034; color: #BC8034; }
.apc-chat-title {
    font-size: 16px;
    font-weight: 500;
    color: #FCF0D6;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/* Reuse ap-chat styles from ap-writer */
.apc-messages {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 16px;
    max-height: 500px;
    overflow-y: auto;
    padding-right: 4px;
}
.apc-messages::-webkit-scrollbar { width: 4px; }
.apc-messages::-webkit-scrollbar-thumb { background: rgba(188, 128, 52, 0.3); border-radius: 2px; }
.apc-msg {
    padding: 14px 18px;
    border-radius: 14px;
    font-size: 14px;
    line-height: 1.7;
    max-width: 85%;
    white-space: pre-wrap;
}
.apc-msg-user {
    background: rgba(188, 128, 52, 0.15);
    border: 1px solid rgba(188, 128, 52, 0.2);
    align-self: flex-end;
    border-bottom-right-radius: 4px;
    color: #FCF0D6;
}
.apc-msg-assistant {
    background: rgba(100, 167, 100, 0.1);
    border: 1px solid rgba(100, 167, 100, 0.15);
    align-self: flex-start;
    border-bottom-left-radius: 4px;
    color: rgba(252, 240, 214, 0.85);
}
.apc-input-wrap {
    display: flex;
    gap: 8px;
}
.apc-input {
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
.apc-input:focus { border-color: #BC8034; }
.apc-send {
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
.apc-send:hover { background: #D4973F; }
.apc-send:disabled { opacity: 0.4; cursor: not-allowed; }
.apc-thinking {
    align-self: flex-start;
    padding: 12px 20px;
    border-radius: 14px;
    background: rgba(100, 167, 100, 0.06);
    border: 1px solid rgba(100, 167, 100, 0.1);
}

@media (max-width: 600px) {
    .apc-picker-grid { grid-template-columns: 1fr; }
    .apc-msg { max-width: 95%; }
}
`;
    document.head.appendChild(style);

    // === STATE ===
    var cs = {
        view: 'list', // list | pick | chat
        conversations: [],
        loading: false,
        // Pick state
        refType: null,
        refId: null,
        entries: [],
        // Chat state
        conversationId: null,
        messages: [],
        sending: false,
        chatRefType: null,
        chatRefId: null,
        chatTitle: null
    };

    // === ICONS (inline SVG) ===
    var ICONS = {
        free: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
        entry: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
        lesson: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
        test: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
        back: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>',
        send: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>'
    };

    // === HELPERS ===
    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function formatDate(dateStr) {
        if (!dateStr) return '';
        var d = new Date(dateStr);
        return d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: '2-digit' })
            + ' ' + d.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
    }

    function badgeHtml(refType, refId) {
        var cls = 'apc-badge';
        var label = 'Frei';
        if (refType === 'entry') { cls += ' apc-badge-entry'; label = 'Journal'; }
        else if (refType === 'lesson') {
            cls += ''; // default gold
            var lessons = window.__AP.LESSONS || {};
            label = lessons[refId] || ('Lektion ' + refId);
        }
        else if (refType === 'test') { cls += ' apc-badge-test'; label = 'Test'; }
        else { cls += ' apc-badge-free'; }
        return '<span class="' + cls + '">' + escapeHtml(label) + '</span>';
    }

    function msgCount(conv) {
        try {
            var m = JSON.parse(conv.messages || '[]');
            return m.length;
        } catch(e) { return 0; }
    }

    // === RENDER ===
    function render(container) {
        if (cs.view === 'pick') {
            renderPicker(container);
        } else if (cs.view === 'chat') {
            renderChat(container);
        } else {
            renderList(container);
        }
    }

    // --- VIEW 1: Conversation List ---
    function renderList(container) {
        var html = '<div class="apc-header">'
            + '<span class="apc-title">Dein Coach</span>'
            + '<button class="apc-new-btn" onclick="window.__APC.newConversation()">+ Neues Gespräch</button>'
            + '</div>';

        if (cs.loading) {
            html += '<div class="apc-empty"><p>Lädt...</p></div>';
        } else if (cs.conversations.length === 0) {
            html += '<div class="apc-empty">'
                + '<div class="apc-empty-icon">' + ICONS.free + '</div>'
                + '<p style="margin-bottom:8px;font-size:15px;color:rgba(252,240,214,0.6);">Noch keine Gespräche</p>'
                + '<p style="font-size:13px;">Starte dein erstes Coaching-Gespräch.</p>'
                + '</div>';
        } else {
            html += '<div class="apc-conv-list">';
            for (var i = 0; i < cs.conversations.length; i++) {
                var c = cs.conversations[i];
                var count = msgCount(c);
                html += '<div class="apc-conv-item" onclick="window.__APC.openConversation(' + c.id + ')">'
                    + '<div class="apc-conv-info">'
                    + '<div class="apc-conv-title">' + escapeHtml(c.title || 'Gespräch') + '</div>'
                    + '<div class="apc-conv-meta">'
                    + badgeHtml(c.reference_type, c.reference_id)
                    + '<span>' + count + ' Nachrichten</span>'
                    + '<span>' + formatDate(c.updated_at) + '</span>'
                    + '</div></div></div>';
            }
            html += '</div>';
        }

        container.innerHTML = html;
    }

    // --- VIEW 2: Reference Picker ---
    function renderPicker(container) {
        var html = '<button class="apc-back-btn" onclick="window.__APC.backToList()">'
            + ICONS.back + ' Zurück</button>'
            + '<div style="margin-top:20px;">'
            + '<div class="apc-picker-title">Neues Gespräch</div>'
            + '<div class="apc-picker-sub">Worüber möchtest du sprechen?</div>'
            + '</div>';

        html += '<div class="apc-picker-grid">';

        // Card 1: Free
        html += '<div class="apc-picker-card' + (cs.refType === 'free' ? ' apc-selected' : '') + '" onclick="window.__APC.selectRef(\'free\')">'
            + '<div class="apc-picker-icon">' + ICONS.free + '</div>'
            + '<div class="apc-picker-label">Freies Gespräch</div>'
            + '<div class="apc-picker-desc">Bring dein eigenes Thema mit</div>'
            + '</div>';

        // Card 2: Entry
        html += '<div class="apc-picker-card' + (cs.refType === 'entry' ? ' apc-selected' : '') + '" onclick="window.__APC.selectRef(\'entry\')">'
            + '<div class="apc-picker-icon">' + ICONS.entry + '</div>'
            + '<div class="apc-picker-label">Journal-Eintrag</div>'
            + '<div class="apc-picker-desc">Besprich einen Eintrag</div>';
        if (cs.refType === 'entry') {
            html += '<select class="apc-picker-select" id="apc-entry-select" onchange="window.__APC.setRefId(this.value)">'
                + '<option value="">Eintrag wählen...</option>';
            for (var i = 0; i < cs.entries.length; i++) {
                var e = cs.entries[i];
                var lessons = window.__AP.LESSONS || {};
                var lbl = (lessons[e.lesson] || e.lesson) + ' - ' + formatDate(e.created_at);
                html += '<option value="' + e.id + '"' + (cs.refId == e.id ? ' selected' : '') + '>' + escapeHtml(lbl) + '</option>';
            }
            html += '</select>';
        }
        html += '</div>';

        // Card 3: Lesson
        html += '<div class="apc-picker-card' + (cs.refType === 'lesson' ? ' apc-selected' : '') + '" onclick="window.__APC.selectRef(\'lesson\')">'
            + '<div class="apc-picker-icon">' + ICONS.lesson + '</div>'
            + '<div class="apc-picker-label">Lektion</div>'
            + '<div class="apc-picker-desc">Reflektiere ein Kursthema</div>';
        if (cs.refType === 'lesson') {
            var lessons = window.__AP.LESSONS || {};
            html += '<select class="apc-picker-select" id="apc-lesson-select" onchange="window.__APC.setRefId(this.value)">'
                + '<option value="">Lektion wählen...</option>';
            for (var key in lessons) {
                html += '<option value="' + key + '"' + (cs.refId === key ? ' selected' : '') + '>' + escapeHtml(lessons[key]) + '</option>';
            }
            html += '</select>';
        }
        html += '</div>';

        // Card 4: Test
        html += '<div class="apc-picker-card' + (cs.refType === 'test' ? ' apc-selected' : '') + '" onclick="window.__APC.selectRef(\'test\')">'
            + '<div class="apc-picker-icon">' + ICONS.test + '</div>'
            + '<div class="apc-picker-label">Test-Ergebnis</div>'
            + '<div class="apc-picker-desc">Besprich dein Testergebnis</div>';
        if (cs.refType === 'test') {
            html += '<select class="apc-picker-select" id="apc-test-select" onchange="window.__APC.setRefId(this.value)">'
                + '<option value="">Test wählen...</option>'
                + '<option value="selbstbild"' + (cs.refId === 'selbstbild' ? ' selected' : '') + '>Selbstbild-Test</option>'
                + '<option value="werte"' + (cs.refId === 'werte' ? ' selected' : '') + '>Werte-Test</option>'
                + '<option value="glaubenssaetze"' + (cs.refId === 'glaubenssaetze' ? ' selected' : '') + '>Glaubenssätze-Test</option>'
                + '</select>';
        }
        html += '</div>';

        html += '</div>'; // grid end

        // Start button
        var canStart = cs.refType === 'free' || (cs.refType && cs.refId);
        html += '<button class="apc-start-btn"' + (canStart ? '' : ' disabled') + ' onclick="window.__APC.startChat()">Gespräch starten</button>';

        container.innerHTML = html;
    }

    // --- VIEW 3: Chat ---
    function renderChat(container) {
        var html = '<div class="apc-chat-header">'
            + '<button class="apc-back-btn" onclick="window.__APC.backToList()">' + ICONS.back + ' Zurück</button>'
            + '<span class="apc-chat-title">' + escapeHtml(cs.chatTitle || 'Gespräch') + '</span>'
            + badgeHtml(cs.chatRefType, cs.chatRefId)
            + '</div>';

        html += '<div class="apc-messages" id="apc-messages">';
        if (cs.messages.length === 0 && !cs.sending) {
            html += '<div style="text-align:center;padding:40px 20px;color:rgba(252,240,214,0.4);">'
                + '<p>Stelle deine erste Frage.</p></div>';
        }
        for (var i = 0; i < cs.messages.length; i++) {
            var m = cs.messages[i];
            html += '<div class="apc-msg ' + (m.role === 'user' ? 'apc-msg-user' : 'apc-msg-assistant') + '">'
                + escapeHtml(m.content) + '</div>';
        }
        if (cs.sending) {
            html += '<div class="apc-thinking"><span class="ap-dots"><span></span><span></span><span></span></span></div>';
        }
        html += '</div>';

        html += '<div class="apc-input-wrap">'
            + '<textarea class="apc-input" id="apc-input" placeholder="Deine Nachricht..." rows="1"></textarea>'
            + '<button class="apc-send" id="apc-send" onclick="window.__APC.send()"' + (cs.sending ? ' disabled' : '') + '>' + ICONS.send + '</button>'
            + '</div>';

        container.innerHTML = html;

        // Auto-scroll
        var msgContainer = document.getElementById('apc-messages');
        if (msgContainer) msgContainer.scrollTop = msgContainer.scrollHeight;

        // Focus + Enter-to-send + Auto-resize
        var input = document.getElementById('apc-input');
        if (input && !cs.sending) {
            input.focus();
            input.addEventListener('keydown', function(ev) {
                if (ev.key === 'Enter' && !ev.shiftKey) {
                    ev.preventDefault();
                    window.__APC.send();
                }
            });
            input.addEventListener('input', function() {
                this.style.height = 'auto';
                this.style.height = Math.min(this.scrollHeight, 120) + 'px';
            });
        }
    }

    // === ACTIONS ===
    window.__APC = {
        backToList: async function() {
            cs.view = 'list';
            cs.refType = null;
            cs.refId = null;
            cs.loading = true;
            var container = document.getElementById('ap-view');
            if (container) render(container);

            try {
                var data = await window.__AP.api('/ankerpraktik/coach/conversations');
                cs.conversations = data.conversations || [];
            } catch(e) {
                cs.conversations = [];
            }
            cs.loading = false;
            if (container) render(container);
        },

        newConversation: async function() {
            cs.view = 'pick';
            cs.refType = null;
            cs.refId = null;
            cs.entries = [];

            // Lade Journal-Einträge für Referenz-Auswahl
            try {
                var data = await window.__AP.api('/ankerpraktik/entries');
                cs.entries = data.entries || [];
            } catch(e) {
                cs.entries = [];
            }

            var container = document.getElementById('ap-view');
            if (container) render(container);
        },

        selectRef: function(type) {
            if (cs.refType === type) return; // already selected
            cs.refType = type;
            cs.refId = null;
            var container = document.getElementById('ap-view');
            if (container) render(container);
        },

        setRefId: function(val) {
            cs.refId = val || null;
        },

        startChat: function() {
            // Falls Select-Value nicht via onchange übernommen wurde
            if (cs.refType === 'entry') { var s = document.getElementById('apc-entry-select'); if (s) cs.refId = s.value || cs.refId; }
            if (cs.refType === 'lesson') { var s = document.getElementById('apc-lesson-select'); if (s) cs.refId = s.value || cs.refId; }
            if (cs.refType === 'test') { var s = document.getElementById('apc-test-select'); if (s) cs.refId = s.value || cs.refId; }
            if (cs.refType !== 'free' && !cs.refId) return;
            cs.view = 'chat';
            cs.conversationId = null;
            cs.messages = [];
            cs.sending = false;
            cs.chatRefType = cs.refType;
            cs.chatRefId = cs.refId;
            cs.chatTitle = 'Neues Gespräch';
            var container = document.getElementById('ap-view');
            if (container) render(container);
        },

        openConversation: async function(id) {
            cs.view = 'chat';
            cs.loading = true;
            var container = document.getElementById('ap-view');

            try {
                var data = await window.__AP.api('/ankerpraktik/coach/conversations/' + id);
                var conv = data.conversation;
                cs.conversationId = conv.id;
                cs.chatTitle = conv.title || 'Gespräch';
                cs.chatRefType = conv.reference_type;
                cs.chatRefId = conv.reference_id;
                try { cs.messages = JSON.parse(conv.messages || '[]'); } catch(e) { cs.messages = []; }
            } catch(e) {
                alert('Gespräch konnte nicht geladen werden.');
                cs.view = 'list';
            }

            cs.loading = false;
            if (container) render(container);
        },

        send: async function() {
            var input = document.getElementById('apc-input');
            if (!input) return;
            var text = input.value.trim();
            if (!text || cs.sending) return;

            cs.sending = true;
            cs.messages.push({ role: 'user', content: text });
            var container = document.getElementById('ap-view');
            if (container) render(container);

            try {
                var body = { message: text };
                if (cs.conversationId) {
                    body.conversation_id = cs.conversationId;
                } else {
                    body.reference_type = cs.chatRefType || 'free';
                    if (cs.chatRefId) body.reference_id = cs.chatRefId;
                }

                var data = await window.__AP.api('/ankerpraktik/coach/chat', {
                    method: 'POST',
                    body: body
                });

                cs.conversationId = data.conversation_id;
                cs.messages = data.messages || cs.messages;
                if (!cs.chatTitle || cs.chatTitle === 'Neues Gespräch') {
                    cs.chatTitle = text.substring(0, 60);
                }
            } catch(e) {
                var errMsg = e.status === 429
                    ? 'Tageslimit erreicht (20 Coach-Nachrichten pro Tag). Morgen geht es weiter!'
                    : 'Fehler: ' + (e.message || 'Etwas ist schiefgelaufen.');
                cs.messages.push({ role: 'assistant', content: errMsg });
            }

            cs.sending = false;
            if (container) render(container);
        }
    };

    // === INIT ===
    window.__AP_COACH_RENDER = async function(container) {
        cs.view = 'list';
        cs.loading = true;
        render(container);

        try {
            var data = await window.__AP.api('/ankerpraktik/coach/conversations');
            cs.conversations = data.conversations || [];
        } catch(e) {
            cs.conversations = [];
        }

        cs.loading = false;
        render(container);
    };
})();

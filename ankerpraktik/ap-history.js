// Win³ Community - Ankerpraktik History View
// Journal-Übersicht aller Einträge
(function() {
    if (window.__AP_HISTORY_LOADED) return;
    window.__AP_HISTORY_LOADED = true;

    // === CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'ap-history');
    style.textContent = `
/* ======== HISTORY ======== */
.ap-history-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}
.ap-history-title {
    font-family: 'Caveat', cursive;
    font-size: 28px;
    color: #BC8034;
}
.ap-history-count {
    font-size: 13px;
    color: rgba(252, 240, 214, 0.4);
}

.ap-history-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.ap-history-item {
    background: rgba(252, 240, 214, 0.04);
    border: 1px solid rgba(188, 128, 52, 0.12);
    border-radius: 14px;
    padding: 20px 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    gap: 16px;
    align-items: flex-start;
}
.ap-history-item:hover {
    background: rgba(252, 240, 214, 0.07);
    border-color: rgba(188, 128, 52, 0.25);
    transform: translateY(-1px);
}

.ap-history-lesson-tag {
    background: rgba(188, 128, 52, 0.15);
    color: #BC8034;
    font-size: 11px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 6px;
    white-space: nowrap;
    flex-shrink: 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.ap-history-content {
    flex: 1;
    min-width: 0;
}
.ap-history-preview {
    font-size: 14px;
    color: rgba(252, 240, 214, 0.6);
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 8px;
}
.ap-history-meta {
    display: flex;
    gap: 16px;
    font-size: 12px;
    color: rgba(252, 240, 214, 0.3);
}
.ap-history-layers {
    display: flex;
    gap: 4px;
}
.ap-history-layer-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    opacity: 0.3;
}
.ap-history-layer-dot.ap-layer-done {
    opacity: 1;
}

.ap-history-empty {
    text-align: center;
    padding: 60px 20px;
    color: rgba(252, 240, 214, 0.4);
}
.ap-history-empty-icon {
    font-size: 48px;
    margin-bottom: 16px;
}

/* ======== SINGLE ENTRY VIEW ======== */
.ap-entry-back {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #BC8034;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 20px;
    background: none;
    border: none;
    font-family: 'Poppins', sans-serif;
    padding: 0;
}
.ap-entry-back:hover {
    text-decoration: underline;
}
.ap-entry-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;
}
.ap-entry-date {
    font-size: 13px;
    color: rgba(252, 240, 214, 0.4);
}
.ap-entry-section {
    margin-bottom: 24px;
}
.ap-entry-section-title {
    font-size: 13px;
    font-weight: 600;
    color: #BC8034;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
}
.ap-entry-section-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
}
.ap-entry-text {
    font-size: 15px;
    line-height: 1.8;
    color: rgba(252, 240, 214, 0.8);
    white-space: pre-wrap;
    padding: 20px;
    background: rgba(252, 240, 214, 0.04);
    border-radius: 12px;
}
.ap-entry-chat-msg {
    padding: 10px 14px;
    border-radius: 10px;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 8px;
    white-space: pre-wrap;
}
.ap-entry-chat-user {
    background: rgba(188, 128, 52, 0.12);
    margin-left: 40px;
}
.ap-entry-chat-assistant {
    background: rgba(100, 167, 100, 0.08);
    margin-right: 40px;
}

/* ======== EXPORT ======== */
.ap-export-section {
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid rgba(188, 128, 52, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media (max-width: 600px) {
    .ap-history-item { flex-direction: column; gap: 8px; }
    .ap-history-header { flex-direction: column; gap: 8px; }
    .ap-entry-header { flex-direction: column; gap: 8px; }
}
`;
    document.head.appendChild(style);

    // === STATE ===
    var hs = {
        entries: [],
        loading: true,
        error: null,
        viewEntry: null // Einzelner Eintrag oder null
    };

    // === RENDER ===
    window.__AP_HISTORY_RENDER = function(container) {
        hs.entries = [];
        hs.loading = true;
        hs.error = null;
        hs.viewEntry = null;
        loadEntries(container);
    };

    async function loadEntries(container) {
        try {
            var data = await window.__AP.api('/ankerpraktik/entries');
            hs.entries = data.entries || [];
        } catch(e) {
            hs.error = e.message || 'Einträge konnten nicht geladen werden';
        }
        hs.loading = false;
        render(container);
    }

    function render(container) {
        if (hs.viewEntry) {
            renderEntry(container);
            return;
        }

        if (hs.loading) {
            container.innerHTML = '<div style="text-align:center;padding:60px 0;"><span class="ap-spinner" style="width:32px;height:32px;border-width:3px;"></span></div>';
            return;
        }

        var errorHtml = hs.error ? '<div class="ap-error">' + escapeHtml(hs.error) + '</div>' : '';

        if (hs.entries.length === 0) {
            container.innerHTML = '<div class="ap-fade-in">'
                + errorHtml
                + '<div class="ap-history-empty">'
                + '<div class="ap-history-empty-icon">📖</div>'
                + '<p style="font-size:18px;margin-bottom:8px;">Noch keine Einträge</p>'
                + '<p style="font-size:14px;opacity:0.6;margin-bottom:24px;">Starte mit deiner ersten Ankerpraktik-Session.</p>'
                + '<button class="ap-btn" onclick="window.__AP.navigate(\'writer\')">✍️ Erste Session starten</button>'
                + '</div></div>';
            return;
        }

        var listHtml = '';
        for (var i = 0; i < hs.entries.length; i++) {
            var e = hs.entries[i];
            var lessons = window.__AP.LESSONS;
            var lessonLabel = e.lesson ? e.lesson.toUpperCase() : '?';
            var preview = e.layer1_preview || e.layer1_text || 'Kein Text';
            var date = formatDate(e.created_at);

            // Layer dots
            var l1 = (e.layer1_text || e.layer1_preview) ? 'ap-layer-done' : '';
            var l2 = (e.has_layer2 || e.layer2_analysis) ? 'ap-layer-done' : '';
            var l3 = (e.has_layer3 || (e.layer3_messages && e.layer3_messages !== '[]')) ? 'ap-layer-done' : '';

            listHtml += '<div class="ap-history-item" onclick="window.__AP_VIEW_ENTRY(' + e.id + ')">'
                + '<span class="ap-history-lesson-tag">' + escapeHtml(lessonLabel) + '</span>'
                + '<div class="ap-history-content">'
                + '<div class="ap-history-preview">' + escapeHtml(preview) + '</div>'
                + '<div class="ap-history-meta">'
                + '<span>' + date + '</span>'
                + '<div class="ap-history-layers">'
                + '<span class="ap-history-layer-dot ' + l1 + '" style="background:#FCF0D6;" title="Schreiben"></span>'
                + '<span class="ap-history-layer-dot ' + l2 + '" style="background:#6495ED;" title="Spiegel"></span>'
                + '<span class="ap-history-layer-dot ' + l3 + '" style="background:#64A764;" title="Coach"></span>'
                + '</div></div></div></div>';
        }

        container.innerHTML = '<div class="ap-fade-in">'
            + '<div class="ap-history-header">'
            + '<h2 class="ap-history-title">Dein Journal</h2>'
            + '<span class="ap-history-count">' + hs.entries.length + ' Einträge</span>'
            + '</div>'
            + errorHtml
            + '<div class="ap-history-list">' + listHtml + '</div>'
            + '<div class="ap-export-section">'
            + '<span style="font-size:13px;color:rgba(252,240,214,0.4);">Deine Daten gehören dir.</span>'
            + '<button class="ap-btn ap-btn-ghost" onclick="window.__AP_EXPORT()" style="font-size:13px;">📦 Alle Daten exportieren</button>'
            + '</div></div>';
    }

    // === SINGLE ENTRY VIEW ===
    window.__AP_VIEW_ENTRY = async function(id) {
        var container = document.getElementById('ap-view');
        container.innerHTML = '<div style="text-align:center;padding:60px 0;"><span class="ap-spinner" style="width:32px;height:32px;border-width:3px;"></span></div>';

        try {
            var data = await window.__AP.api('/ankerpraktik/entries/' + id);
            hs.viewEntry = data.entry;
            render(container);
        } catch(e) {
            hs.error = e.message;
            hs.viewEntry = null;
            render(container);
        }
    };

    function renderEntry(container) {
        var e = hs.viewEntry;
        var lessons = window.__AP.LESSONS;
        var lessonName = lessons[e.lesson] || e.lesson;
        var date = formatDate(e.created_at);

        var html = '<div class="ap-fade-in">'
            + '<button class="ap-entry-back" onclick="window.__AP_BACK_TO_LIST()">← Zurück zum Journal</button>'
            + '<div class="ap-entry-header">'
            + '<div><span class="ap-history-lesson-tag" style="font-size:12px;">' + escapeHtml(e.lesson.toUpperCase()) + '</span>'
            + '<h3 style="font-size:18px;margin-top:8px;color:#FCF0D6;">' + escapeHtml(lessonName) + '</h3></div>'
            + '<span class="ap-entry-date">' + date + '</span>'
            + '</div>';

        // Layer 1: Text
        if (e.layer1_text) {
            html += '<div class="ap-entry-section">'
                + '<div class="ap-entry-section-title"><span class="ap-entry-section-dot" style="background:#FCF0D6;"></span>Schicht 1: Freies Schreiben</div>'
                + '<div class="ap-entry-text">' + escapeHtml(e.layer1_text) + '</div>'
                + '</div>';
        }

        // Layer 2: Spiegel
        if (e.layer2_analysis) {
            html += '<div class="ap-entry-section">'
                + '<div class="ap-entry-section-title"><span class="ap-entry-section-dot" style="background:#6495ED;"></span>Schicht 2: KI-Spiegel</div>'
                + '<div class="ap-entry-text" style="border-left:3px solid rgba(100,149,237,0.3);">' + escapeHtml(e.layer2_analysis) + '</div>'
                + '</div>';
        }

        // Layer 3: Coach
        var messages = [];
        try { messages = JSON.parse(e.layer3_messages || '[]'); } catch(err) {}
        if (messages.length > 0) {
            var chatHtml = '';
            for (var i = 0; i < messages.length; i++) {
                var cls = messages[i].role === 'user' ? 'ap-entry-chat-user' : 'ap-entry-chat-assistant';
                chatHtml += '<div class="ap-entry-chat-msg ' + cls + '">' + escapeHtml(messages[i].content) + '</div>';
            }
            html += '<div class="ap-entry-section">'
                + '<div class="ap-entry-section-title"><span class="ap-entry-section-dot" style="background:#64A764;"></span>Schicht 3: KI-Coach (' + messages.length + ' Nachrichten)</div>'
                + chatHtml
                + '</div>';
        }

        // Actions
        html += '<div class="ap-writer-actions" style="margin-top:24px;">'
            + '<button class="ap-btn ap-btn-ghost" onclick="window.__AP_CONTINUE_ENTRY(' + e.id + ',\'' + e.lesson + '\')">✍️ Weiterschreiben</button>'
            + '</div></div>';

        container.innerHTML = html;
    }

    window.__AP_BACK_TO_LIST = function() {
        hs.viewEntry = null;
        var container = document.getElementById('ap-view');
        render(container);
    };

    window.__AP_CONTINUE_ENTRY = function(id, lesson) {
        // Entry in Writer laden
        window.__AP.state.lesson = lesson;
        // Wir navigieren zum Writer, aber der muss den Entry laden
        // Dafür setzen wir einen temporären State
        window.__AP._continueEntry = id;
        window.__AP.navigate('writer');
    };

    // === EXPORT ===
    window.__AP_EXPORT = async function() {
        try {
            var data = await window.__AP.api('/user/export');
            var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = 'ankerpraktik-export-' + new Date().toISOString().split('T')[0] + '.json';
            a.click();
            URL.revokeObjectURL(url);
        } catch(e) {
            alert('Export fehlgeschlagen: ' + (e.message || 'Unbekannter Fehler'));
        }
    };

    // === HELPERS ===
    function formatDate(dateStr) {
        if (!dateStr) return '';
        try {
            var d = new Date(dateStr);
            return d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
        } catch(e) {
            return dateStr;
        }
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
})();

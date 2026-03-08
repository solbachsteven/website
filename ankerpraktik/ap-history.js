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

/* ======== FILTERS ======== */
.ap-history-filters {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
}
.ap-filter-btn {
    background: rgba(252, 240, 214, 0.06);
    border: 1px solid rgba(188, 128, 52, 0.15);
    border-radius: 20px;
    padding: 6px 14px;
    color: rgba(252, 240, 214, 0.5);
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.ap-filter-btn:hover {
    border-color: #BC8034;
    color: #BC8034;
}
.ap-filter-btn.ap-filter-active {
    background: rgba(188, 128, 52, 0.2);
    border-color: #BC8034;
    color: #BC8034;
}

/* ======== MUSTER-SECTION ======== */
.ap-patterns-section {
    margin-bottom: 24px;
}
.ap-patterns-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(188, 128, 52, 0.06);
    border: 1px solid rgba(188, 128, 52, 0.15);
    border-radius: 14px;
    padding: 16px 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.ap-patterns-trigger:hover {
    background: rgba(188, 128, 52, 0.1);
    border-color: rgba(188, 128, 52, 0.3);
}
.ap-patterns-trigger-left {
    display: flex;
    align-items: center;
    gap: 12px;
}
.ap-patterns-trigger-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(188, 128, 52, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #BC8034;
}
.ap-patterns-trigger-text h3 {
    font-size: 15px;
    color: #FCF0D6;
    margin: 0 0 2px 0;
    font-weight: 600;
}
.ap-patterns-trigger-text p {
    font-size: 12px;
    color: rgba(252, 240, 214, 0.4);
    margin: 0;
}
.ap-patterns-result {
    background: rgba(188, 128, 52, 0.06);
    border: 1px solid rgba(188, 128, 52, 0.2);
    border-radius: 14px;
    padding: 24px;
    line-height: 1.8;
    font-size: 15px;
    color: rgba(252, 240, 214, 0.85);
}
.ap-patterns-result p { margin: 0 0 12px 0; }
.ap-patterns-result p:last-child { margin-bottom: 0; }
.ap-patterns-result strong { color: #BC8034; }
.ap-patterns-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
}
.ap-patterns-loading {
    text-align: center;
    padding: 32px 20px;
    color: rgba(252, 240, 214, 0.5);
    font-size: 14px;
}
@keyframes ap-pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
}
.ap-pulse { animation: ap-pulse 1.5s ease-in-out infinite; }

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
        viewEntry: null,
        patternsText: null,
        patternsLoading: false,
        patternsCached: false
    };

    // === RENDER ===
    window.__AP_HISTORY_RENDER = function(container) {
        hs.entries = [];
        hs.loading = true;
        hs.error = null;
        hs.viewEntry = null;
        hs.patternsText = null;
        hs.patternsLoading = false;
        hs.patternsCached = false;

        // Cached patterns aus User-Insights laden
        var insights = (window.__AP.state.user && window.__AP.state.user.insights) || {};
        if (insights.patterns && insights.patterns.text) {
            hs.patternsText = insights.patterns.text;
            hs.patternsCached = true;
        }

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
                + '<button class="ap-btn" onclick="window.__AP.navigate(\'writer\')">Erste Session starten</button>'
                + '</div></div>';
            return;
        }

        var displayEntries = hs.entries;

        // Muster-Section
        var patternsSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>';
        var patternsHtml = '';
        if (hs.entries.length >= 2) {
            if (hs.patternsLoading) {
                patternsHtml = '<div class="ap-patterns-section">'
                    + '<div class="ap-patterns-result"><div class="ap-patterns-loading ap-pulse">'
                    + patternsSvg + ' Analysiere deine Einträge...'
                    + '</div></div></div>';
            } else if (hs.patternsText) {
                var refreshLabel = hs.patternsCached ? 'Aktualisieren' : 'Neu analysieren';
                patternsHtml = '<div class="ap-patterns-section">'
                    + '<div class="ap-patterns-result">' + formatKiText(hs.patternsText) + '</div>'
                    + '<div class="ap-patterns-actions">'
                    + '<button class="ap-btn ap-btn-ghost" onclick="window.__AP_PATTERNS(true)" style="font-size:12px;">'
                    + '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg> ' + refreshLabel
                    + '</button></div></div>';
            } else {
                patternsHtml = '<div class="ap-patterns-section">'
                    + '<div class="ap-patterns-trigger" onclick="window.__AP_PATTERNS(false)">'
                    + '<div class="ap-patterns-trigger-left">'
                    + '<div class="ap-patterns-trigger-icon">' + patternsSvg + '</div>'
                    + '<div class="ap-patterns-trigger-text">'
                    + '<h3>Deine Muster</h3>'
                    + '<p>KI analysiert Themen und Entwicklung über alle Einträge</p>'
                    + '</div></div>'
                    + '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(252,240,214,0.3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>'
                    + '</div></div>';
            }
        }

        var listHtml = '';
        for (var i = 0; i < displayEntries.length; i++) {
            var e = displayEntries[i];
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

        var displayCount = hs.entries.length + ' Einträge';

        container.innerHTML = '<div class="ap-fade-in">'
            + '<div class="ap-history-header">'
            + '<h2 class="ap-history-title">Dein Journal</h2>'
            + '<span class="ap-history-count">' + displayCount + '</span>'
            + '</div>'
            + errorHtml
            + patternsHtml
            + '<div class="ap-history-list">' + listHtml + '</div>'
            + '<div class="ap-export-section">'
            + '<span style="font-size:13px;color:rgba(252,240,214,0.4);">Deine Daten gehören dir.</span>'
            + '<button class="ap-btn ap-btn-ghost" onclick="window.__AP_EXPORT()" style="font-size:13px;">'
            + '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Alle Daten exportieren'
            + '</button>'
            + '</div></div>';
    }

    // === SINGLE ENTRY VIEW ===
    window.__AP_VIEW_ENTRY = async function(id) {
        var container = document.getElementById('ap-view');
        container.innerHTML = '<div style="text-align:center;padding:60px 0;"><span class="ap-spinner" style="width:32px;height:32px;border-width:3px;"></span></div>';

        try {
            var data = await window.__AP.api('/ankerpraktik/entries/' + id);
            hs.viewEntry = data.entry;
            hs.editing = false;
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

        // Layer 1: Text (editierbar)
        if (e.layer1_text) {
            if (hs.editing) {
                html += '<div class="ap-entry-section">'
                    + '<div class="ap-entry-section-title"><span class="ap-entry-section-dot" style="background:#FCF0D6;"></span>Schicht 1: Freies Schreiben</div>'
                    + '<textarea class="ap-textarea" id="ap-edit-text" style="min-height:50vh;margin-top:8px;" maxlength="15000">' + escapeHtml(e.layer1_text) + '</textarea>'
                    + '<div class="ap-writer-actions" style="margin-top:12px;">'
                    + '<button class="ap-btn" onclick="window.__AP_SAVE_EDIT(' + e.id + ')" id="ap-save-edit-btn">Speichern</button>'
                    + '<button class="ap-btn ap-btn-ghost" onclick="window.__AP_CANCEL_EDIT()">Abbrechen</button>'
                    + '</div>'
                    + '</div>';
            } else {
                html += '<div class="ap-entry-section">'
                    + '<div class="ap-entry-section-title" style="display:flex;align-items:center;justify-content:space-between;">'
                    + '<span><span class="ap-entry-section-dot" style="background:#FCF0D6;"></span>Schicht 1: Freies Schreiben</span>'
                    + '<button class="ap-btn ap-btn-ghost" onclick="window.__AP_EDIT_ENTRY()" style="font-size:14px;padding:6px 14px;">✎ Bearbeiten</button>'
                    + '</div>'
                    + '<div class="ap-entry-text">' + escapeHtml(e.layer1_text) + '</div>'
                    + '</div>';
            }
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
            + '<button class="ap-btn ap-btn-ghost" onclick="window.__AP_CONTINUE_ENTRY(' + e.id + ',\'' + e.lesson + '\')">Gespräch weiterführen</button>'
            + '<button class="ap-btn ap-btn-ghost" style="color:rgba(220,53,69,0.6);border-color:rgba(220,53,69,0.2);" onclick="window.__AP_DELETE_ENTRY(' + e.id + ')">'
            + '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>'
            + ' Archivieren</button>'
            + '</div></div>';

        container.innerHTML = html;
    }

    window.__AP_EDIT_ENTRY = function() {
        hs.editing = true;
        var container = document.getElementById('ap-view');
        render(container);
    };

    window.__AP_CANCEL_EDIT = function() {
        hs.editing = false;
        var container = document.getElementById('ap-view');
        render(container);
    };

    window.__AP_SAVE_EDIT = async function(entryId) {
        var textarea = document.getElementById('ap-edit-text');
        if (!textarea) return;
        var newText = textarea.value.trim();
        if (!newText) return;

        var btn = document.getElementById('ap-save-edit-btn');
        if (btn) { btn.disabled = true; btn.textContent = 'Speichert...'; }

        try {
            await window.__AP.api('/ankerpraktik/entries/' + entryId, {
                method: 'PUT',
                body: { layer1_text: newText }
            });
            hs.viewEntry.layer1_text = newText;
            hs.editing = false;
            var container = document.getElementById('ap-view');
            render(container);
        } catch(e) {
            if (btn) { btn.disabled = false; btn.textContent = 'Speichern'; }
            alert('Speichern fehlgeschlagen: ' + (e.message || 'Unbekannter Fehler'));
        }
    };

    window.__AP_BACK_TO_LIST = function() {
        hs.viewEntry = null;
        hs.editing = false;
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

    // === ARCHIVIEREN (Soft-Delete) ===
    window.__AP_DELETE_ENTRY = async function(id) {
        if (!confirm('Möchtest du diesen Eintrag wirklich archivieren?\n\nEr wird aus deinem Journal und dem Coach-Kontext entfernt.')) return;

        try {
            await window.__AP.api('/ankerpraktik/entries/' + id, { method: 'DELETE' });
            hs.entries = hs.entries.filter(function(e) { return e.id !== id; });
            hs.viewEntry = null;
            var container = document.getElementById('ap-view');
            render(container);
        } catch(e) {
            alert('Archivieren fehlgeschlagen: ' + (e.message || 'Unbekannter Fehler'));
        }
    };

    // === PATTERNS ===
    window.__AP_PATTERNS = async function(force) {
        var container = document.getElementById('ap-view');
        hs.patternsLoading = true;
        hs.patternsText = null;
        render(container);

        try {
            var url = '/ankerpraktik/patterns';
            var data = await window.__AP.api(url, {
                method: 'POST',
                body: force ? { force: true } : {}
            });
            hs.patternsText = data.patterns;
            hs.patternsCached = data.cached;

            // User-Insights Cache updaten
            if (window.__AP.state.user) {
                if (!window.__AP.state.user.insights) window.__AP.state.user.insights = {};
                window.__AP.state.user.insights.patterns = { text: data.patterns };
            }
        } catch(e) {
            hs.error = e.message || 'Muster-Analyse fehlgeschlagen';
        }

        hs.patternsLoading = false;
        render(container);
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

    function formatKiText(str) {
        if (!str) return '';
        var html = escapeHtml(str);
        html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
        html = html.replace(/\n\n/g, '</p><p>');
        html = html.replace(/\n/g, '<br>');
        return '<p>' + html + '</p>';
    }
})();

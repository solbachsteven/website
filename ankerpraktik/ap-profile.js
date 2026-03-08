// Win³ Community - Ankerpraktik Profil-Seite
// Zeigt alle abgeschlossenen Test-Ergebnisse
(function() {
    if (window.__AP_PROFILE_LOADED) return;
    window.__AP_PROFILE_LOADED = true;

    // === CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'ap-profile');
    style.textContent = `
.ap-profile-wrap {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px 0;
}
.ap-profile-header {
    text-align: center;
    margin-bottom: 32px;
}
.ap-profile-avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(188, 128, 52, 0.15);
    color: #BC8034;
    font-size: 28px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 12px;
    font-family: 'Poppins', sans-serif;
}
.ap-profile-name {
    font-family: 'Caveat', cursive;
    font-size: 28px;
    color: #BC8034;
    margin-bottom: 4px;
}
.ap-profile-email {
    font-size: 13px;
    color: rgba(252, 240, 214, 0.4);
}

/* Section */
.ap-profile-section {
    margin-bottom: 24px;
}
.ap-profile-section-title {
    font-size: 14px;
    font-weight: 600;
    color: rgba(252, 240, 214, 0.5);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 16px;
}

/* Result cards */
.ap-profile-card {
    background: rgba(252, 240, 214, 0.04);
    border: 1px solid rgba(188, 128, 52, 0.15);
    border-radius: 16px;
    padding: 20px 24px;
    margin-bottom: 12px;
}
.ap-profile-card-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
}
.ap-profile-card-left {
    display: flex;
    align-items: center;
    gap: 12px;
}
.ap-profile-card-icon {
    font-size: 24px;
}
.ap-profile-card-title {
    font-weight: 600;
    font-size: 15px;
    color: #FCF0D6;
}
.ap-profile-card-result {
    font-size: 14px;
    color: #BC8034;
    font-weight: 600;
}
.ap-profile-card-date {
    font-size: 12px;
    color: rgba(252, 240, 214, 0.35);
}
.ap-profile-card-desc {
    font-size: 14px;
    line-height: 1.6;
    color: rgba(252, 240, 214, 0.6);
    margin-bottom: 12px;
}

/* Mini dimension bars */
.ap-profile-mini-dims {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
}
.ap-profile-mini-dim {
    display: flex;
    align-items: center;
    gap: 8px;
}
.ap-profile-mini-label {
    font-size: 11px;
    color: rgba(252, 240, 214, 0.4);
    width: 65px;
    text-align: right;
}
.ap-profile-mini-bar-wrap {
    flex: 1;
    height: 6px;
    background: rgba(252, 240, 214, 0.06);
    border-radius: 3px;
    overflow: hidden;
}
.ap-profile-mini-bar {
    height: 100%;
    background: rgba(188, 128, 52, 0.6);
    border-radius: 3px;
}
.ap-profile-mini-label-r {
    font-size: 11px;
    color: rgba(252, 240, 214, 0.4);
    width: 65px;
}

.ap-profile-card-actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}
.ap-profile-btn {
    font-size: 13px;
    padding: 6px 16px;
    border-radius: 20px;
    border: 1px solid rgba(188, 128, 52, 0.3);
    background: none;
    color: #BC8034;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;
}
.ap-profile-btn:hover {
    background: rgba(188, 128, 52, 0.15);
}

.ap-profile-empty {
    text-align: center;
    padding: 48px 24px;
    color: rgba(252, 240, 214, 0.5);
}
.ap-profile-empty-icon {
    font-size: 48px;
    margin-bottom: 16px;
    opacity: 0.5;
}
.ap-profile-edit-btn {
    background: none;
    border: none;
    color: rgba(252, 240, 214, 0.3);
    font-size: 14px;
    cursor: pointer;
    padding: 2px 6px;
    transition: color 0.3s ease;
}
.ap-profile-edit-btn:hover {
    color: #BC8034;
}
/* ======== INSIGHT SECTIONS ======== */
.ap-insight-section {
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid rgba(188, 128, 52, 0.1);
}
.ap-insight-title {
    font-size: 14px;
    font-weight: 600;
    color: rgba(252, 240, 214, 0.5);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
}
.ap-insight-trigger {
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
.ap-insight-trigger:hover {
    background: rgba(188, 128, 52, 0.1);
    border-color: rgba(188, 128, 52, 0.3);
}
.ap-insight-trigger-left {
    display: flex;
    align-items: center;
    gap: 12px;
}
.ap-insight-trigger-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(188, 128, 52, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #BC8034;
}
.ap-insight-trigger-text h3 {
    font-size: 15px;
    color: #FCF0D6;
    margin: 0 0 2px 0;
    font-weight: 600;
}
.ap-insight-trigger-text p {
    font-size: 12px;
    color: rgba(252, 240, 214, 0.4);
    margin: 0;
}
.ap-insight-result {
    background: rgba(252, 240, 214, 0.04);
    border: 1px solid rgba(188, 128, 52, 0.15);
    border-radius: 14px;
    padding: 24px;
    line-height: 1.8;
    font-size: 15px;
    color: rgba(252, 240, 214, 0.85);
}
.ap-insight-result p { margin: 0 0 12px 0; }
.ap-insight-result p:last-child { margin-bottom: 0; }
.ap-insight-result strong { color: #BC8034; }
.ap-insight-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}
.ap-insight-loading {
    text-align: center;
    padding: 32px 20px;
    color: rgba(252, 240, 214, 0.5);
    font-size: 14px;
}
@keyframes ap-pulse-p {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
}
.ap-pulse-p { animation: ap-pulse-p 1.5s ease-in-out infinite; }

.ap-profile-edit-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 4px;
}
.ap-profile-name-input {
    background: rgba(252, 240, 214, 0.08);
    border: 1px solid rgba(188, 128, 52, 0.4);
    border-radius: 8px;
    padding: 6px 12px;
    color: #BC8034;
    font-family: 'Caveat', cursive;
    font-size: 24px;
    text-align: center;
    outline: none;
    width: 200px;
}
.ap-profile-name-input:focus {
    border-color: #BC8034;
}
`;
    document.head.appendChild(style);

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

    function formatDate(isoStr) {
        if (!isoStr) return '';
        try {
            var d = new Date(isoStr);
            return d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
        } catch(e) {
            return '';
        }
    }

    // Profile state
    var ps = {
        arcText: null,
        arcLoading: false,
        synthesisText: null,
        synthesisLoading: false,
    };

    window.__AP_PROFILE_RENDER = async function(container) {
        var user = window.__AP.state.user;
        if (!user) return;

        // Cached insights laden
        var insights = user.insights || {};
        if (insights.arc && insights.arc.text) ps.arcText = insights.arc.text;
        if (insights.synthesis && insights.synthesis.text) ps.synthesisText = insights.synthesis.text;

        renderProfile(container);
    };

    function renderProfile(container) {
        var user = window.__AP.state.user;
        if (!user) return;

        var defs = window.__AP_TEST_DEFS || {};
        var assessments = user.assessments || {};
        var completedIds = Object.keys(assessments).filter(function(id) {
            return assessments[id] && assessments[id].resultKey;
        });

        var html = '<div class="ap-profile-wrap ap-fade-in">';

        // Header
        var initial = (user.nickname || user.email || '?').charAt(0).toUpperCase();
        html += '<div class="ap-profile-header">'
            + '<div class="ap-profile-avatar">' + escapeHtml(initial) + '</div>'
            + '<div class="ap-profile-edit-row">'
            + '<div class="ap-profile-name" id="ap-profile-name-display">' + escapeHtml(user.nickname || 'User') + '</div>'
            + '<button class="ap-profile-edit-btn" onclick="window.__AP_PROFILE_EDIT_NAME()" title="Name bearbeiten"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg></button>'
            + '</div>'
            + '<div class="ap-profile-email">' + escapeHtml(user.email || '') + '</div>'
            + '</div>';

        // Test-Ergebnisse
        if (completedIds.length > 0) {
            html += '<div class="ap-profile-section">'
                + '<div class="ap-profile-section-title">Deine Testergebnisse</div>';

            for (var i = 0; i < completedIds.length; i++) {
                var testId = completedIds[i];
                var assessment = assessments[testId];
                var def = defs[testId];
                var resultData = def && def.results ? (def.results[assessment.resultKey] || null) : null;

                html += '<div class="ap-profile-card">';

                // Head
                html += '<div class="ap-profile-card-head">'
                    + '<div class="ap-profile-card-left">'
                    + '<span class="ap-profile-card-icon">' + (def ? def.icon || '' : '') + '</span>'
                    + '<span class="ap-profile-card-title">' + escapeHtml(def ? def.title : testId) + '</span>'
                    + '</div>'
                    + '<span class="ap-profile-card-date">' + formatDate(assessment.completed_at) + '</span>'
                    + '</div>';

                // Result
                html += '<div class="ap-profile-card-result">'
                    + escapeHtml(assessment.resultKey)
                    + (resultData ? ' - ' + escapeHtml(resultData.name) : '')
                    + '</div>';

                // Description
                if (resultData && resultData.desc) {
                    html += '<div class="ap-profile-card-desc">' + escapeHtml(resultData.desc) + '</div>';
                }

                // Mini dimension bars
                if (def && def.dimensions && assessment.scores) {
                    html += '<div class="ap-profile-mini-dims">';
                    for (var d = 0; d < def.dimensions.length; d++) {
                        var dim = def.dimensions[d];
                        var val = assessment.scores[dim.key] || 50;
                        html += '<div class="ap-profile-mini-dim">'
                            + '<span class="ap-profile-mini-label">' + escapeHtml(dim.left) + '</span>'
                            + '<div class="ap-profile-mini-bar-wrap">'
                            + '<div class="ap-profile-mini-bar" style="width:' + val + '%"></div>'
                            + '</div>'
                            + '<span class="ap-profile-mini-label-r">' + escapeHtml(dim.right) + '</span>'
                            + '</div>';
                    }
                    html += '</div>';
                }

                // Actions
                html += '<div class="ap-profile-card-actions">'
                    + '<button class="ap-profile-btn" onclick="window.__AP.navigate(\'test\', { testId: \'' + testId + '\' })">Details</button>'
                    + '<button class="ap-profile-btn" onclick="window.__AP_PROFILE_MIRROR(\'' + testId + '\')">Spiegeln</button>'
                    + '</div>';

                html += '</div>';
            }

            html += '</div>';
        } else {
            html += '<div class="ap-profile-empty">'
                + '<div class="ap-profile-empty-icon">\ud83e\udded</div>'
                + '<p>Du hast noch keinen Test gemacht.</p>'
                + '<button class="ap-btn" onclick="window.__AP.navigate(\'tests\')">Starte deinen ersten Test</button>'
                + '</div>';
        }

        // === ENTWICKLUNGSBOGEN ===
        var arcSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>';

        html += '<div class="ap-insight-section">'
            + '<div class="ap-insight-title">' + arcSvg + ' Deine Reise</div>';

        if (ps.arcLoading) {
            html += '<div class="ap-insight-result"><div class="ap-insight-loading ap-pulse-p">'
                + arcSvg + ' Zeichne deinen Entwicklungsbogen nach...'
                + '</div></div>';
        } else if (ps.arcText) {
            html += '<div class="ap-insight-result">' + formatKiText(ps.arcText) + '</div>'
                + '<div class="ap-insight-actions">'
                + '<button class="ap-profile-btn" onclick="window.__AP_PROFILE_ARC(true)" style="font-size:12px;">'
                + '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg> Aktualisieren'
                + '</button></div>';
        } else {
            html += '<div class="ap-insight-trigger" onclick="window.__AP_PROFILE_ARC(false)">'
                + '<div class="ap-insight-trigger-left">'
                + '<div class="ap-insight-trigger-icon">' + arcSvg + '</div>'
                + '<div class="ap-insight-trigger-text">'
                + '<h3>Entwicklung analysieren</h3>'
                + '<p>KI zeichnet deinen Entwicklungsbogen nach</p>'
                + '</div></div>'
                + '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(252,240,214,0.3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>'
                + '</div>';
        }
        html += '</div>';

        // === TEST-SYNTHESE (nur bei 2+ Tests) ===
        if (completedIds.length >= 2) {
            var synthSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';

            html += '<div class="ap-insight-section">'
                + '<div class="ap-insight-title">' + synthSvg + ' Dein Gesamtbild</div>';

            if (ps.synthesisLoading) {
                html += '<div class="ap-insight-result"><div class="ap-insight-loading ap-pulse-p">'
                    + synthSvg + ' Verbinde deine Testergebnisse...'
                    + '</div></div>';
            } else if (ps.synthesisText) {
                html += '<div class="ap-insight-result">' + formatKiText(ps.synthesisText) + '</div>'
                    + '<div class="ap-insight-actions">'
                    + '<button class="ap-profile-btn" onclick="window.__AP_PROFILE_SYNTHESIS(true)" style="font-size:12px;">'
                    + '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg> Aktualisieren'
                    + '</button></div>';
            } else {
                html += '<div class="ap-insight-trigger" onclick="window.__AP_PROFILE_SYNTHESIS(false)">'
                    + '<div class="ap-insight-trigger-left">'
                    + '<div class="ap-insight-trigger-icon">' + synthSvg + '</div>'
                    + '<div class="ap-insight-trigger-text">'
                    + '<h3>Tests verbinden</h3>'
                    + '<p>Was sagen ' + completedIds.length + ' Tests zusammen über dich?</p>'
                    + '</div></div>'
                    + '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(252,240,214,0.3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>'
                    + '</div>';
            }
            html += '</div>';
        }


        html += '</div>';
        container.innerHTML = html;
    }

    // Name bearbeiten
    window.__AP_PROFILE_EDIT_NAME = function() {
        var nameEl = document.getElementById('ap-profile-name-display');
        if (!nameEl) return;
        var current = window.__AP.state.user.nickname || '';
        var row = nameEl.parentNode;
        row.innerHTML = '<input class="ap-profile-name-input" id="ap-profile-name-input" value="' + escapeHtml(current) + '" maxlength="50">'
            + '<button class="ap-profile-btn" onclick="window.__AP_PROFILE_SAVE_NAME()" style="padding:4px 12px;">OK</button>'
            + '<button class="ap-profile-edit-btn" onclick="window.__AP_PROFILE_CANCEL_NAME()" title="Abbrechen"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>';
        var input = document.getElementById('ap-profile-name-input');
        input.focus();
        input.select();
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') window.__AP_PROFILE_SAVE_NAME();
            if (e.key === 'Escape') window.__AP_PROFILE_CANCEL_NAME();
        });
    };

    window.__AP_PROFILE_SAVE_NAME = async function() {
        var input = document.getElementById('ap-profile-name-input');
        if (!input) return;
        var newName = input.value.trim();
        if (!newName) return;
        try {
            await window.__AP.api('/user/profile', { method: 'PUT', body: { nickname: newName } });
            window.__AP.state.user.nickname = newName;
            window.__AP.saveSession();
            // Nav-Badge sofort aktualisieren
            var badge = document.querySelector('.ap-user-badge');
            if (badge) badge.textContent = newName;
            var container = document.getElementById('ap-view');
            if (container) window.__AP_PROFILE_RENDER(container);
        } catch(e) {
            console.error('Name speichern fehlgeschlagen:', e);
        }
    };

    window.__AP_PROFILE_CANCEL_NAME = function() {
        var container = document.getElementById('ap-view');
        if (container) window.__AP_PROFILE_RENDER(container);
    };

    // === ENTWICKLUNGSBOGEN ===
    window.__AP_PROFILE_ARC = async function(force) {
        var container = document.getElementById('ap-view');
        ps.arcLoading = true;
        ps.arcText = null;
        renderProfile(container);

        try {
            var data = await window.__AP.api('/ankerpraktik/development-arc', {
                method: 'POST',
                body: force ? { force: true } : {}
            });
            ps.arcText = data.arc;
            if (window.__AP.state.user) {
                if (!window.__AP.state.user.insights) window.__AP.state.user.insights = {};
                window.__AP.state.user.insights.arc = { text: data.arc };
            }
        } catch(e) {
            ps.arcText = 'Analyse fehlgeschlagen: ' + (e.message || 'Unbekannter Fehler');
        }

        ps.arcLoading = false;
        renderProfile(container);
    };

    // === TEST-SYNTHESE ===
    window.__AP_PROFILE_SYNTHESIS = async function(force) {
        var container = document.getElementById('ap-view');
        ps.synthesisLoading = true;
        ps.synthesisText = null;
        renderProfile(container);

        try {
            var data = await window.__AP.api('/ankerpraktik/test-synthesis', {
                method: 'POST',
                body: force ? { force: true } : {}
            });
            ps.synthesisText = data.synthesis;
            if (window.__AP.state.user) {
                if (!window.__AP.state.user.insights) window.__AP.state.user.insights = {};
                window.__AP.state.user.insights.synthesis = { text: data.synthesis };
            }
        } catch(e) {
            ps.synthesisText = 'Synthese fehlgeschlagen: ' + (e.message || 'Unbekannter Fehler');
        }

        ps.synthesisLoading = false;
        renderProfile(container);
    };

    // Spiegeln von der Profilseite aus
    window.__AP_PROFILE_MIRROR = function(testId) {
        var defs = window.__AP_TEST_DEFS || {};
        var def = defs[testId];
        var assessments = (window.__AP.state.user && window.__AP.state.user.assessments) || {};
        var assessment = assessments[testId];
        if (!def || !assessment || !assessment.resultKey) return;

        var rd = (def.results && def.results[assessment.resultKey]) || { name: assessment.resultKey, desc: '', win3: '' };

        var text;
        if (def.buildMirrorText) {
            text = def.buildMirrorText(assessment.resultKey, assessment.scores, rd);
        } else {
            text = 'Mein Testergebnis (' + def.title + '): ' + assessment.resultKey
                + (rd.name ? ' - ' + rd.name : '') + '.\n\n'
                + (rd.desc || '') + '\n\n'
                + 'Ich frage mich, was das \u00fcber mich aussagt.';
        }

        window.__AP._mirrorText = text;
        window.__AP._mirrorSource = def.mirrorSource || ('test:' + def.id);
        window.__AP._mirrorAutoTrigger = true;
        window.__AP.navigate('writer');
    };
})();

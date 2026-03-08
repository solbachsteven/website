// Win³ Community - Ankerpraktik Test Engine (generisch)
// Rendert jeden Test aus ap-test-defs.js
// Ohne testId: Test-Übersicht | Mit testId: spezifischer Test
(function() {
    if (window.__AP_TEST_LOADED) return;
    window.__AP_TEST_LOADED = true;

    // === CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'ap-test');
    style.textContent = `
.ap-test-wrap {
    max-width: 560px;
    margin: 0 auto;
    padding: 20px 0;
}
.ap-test-title {
    font-family: 'Caveat', cursive;
    font-size: 32px;
    color: #BC8034;
    text-align: center;
    margin-bottom: 8px;
}
.ap-test-subtitle {
    text-align: center;
    font-size: 14px;
    color: rgba(252, 240, 214, 0.5);
    margin-bottom: 32px;
}

/* Progress */
.ap-test-progress {
    background: rgba(252, 240, 214, 0.08);
    border-radius: 12px;
    height: 8px;
    margin-bottom: 32px;
    overflow: hidden;
}
.ap-test-progress-bar {
    height: 100%;
    background: #BC8034;
    border-radius: 12px;
    transition: width 0.4s ease;
}
.ap-test-count {
    text-align: center;
    font-size: 13px;
    color: rgba(252, 240, 214, 0.4);
    margin-bottom: 12px;
}

/* Question */
.ap-test-question {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 28px;
    line-height: 1.5;
    min-height: 54px;
}
.ap-test-options {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.ap-test-option {
    background: rgba(252, 240, 214, 0.05);
    border: 1px solid rgba(188, 128, 52, 0.2);
    border-radius: 16px;
    padding: 20px 24px;
    color: #FCF0D6;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    line-height: 1.5;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
}
.ap-test-option:hover {
    background: rgba(188, 128, 52, 0.12);
    border-color: #BC8034;
    transform: translateY(-1px);
}

/* Likert Scale */
.ap-test-likert {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-top: 16px;
}
.ap-test-likert-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid rgba(188, 128, 52, 0.3);
    background: rgba(252, 240, 214, 0.04);
    color: #FCF0D6;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}
.ap-test-likert-btn:hover {
    background: rgba(188, 128, 52, 0.2);
    border-color: #BC8034;
    transform: scale(1.1);
}
.ap-test-likert-labels {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: rgba(252, 240, 214, 0.4);
    margin-top: 8px;
}

/* Result */
.ap-test-result {
    text-align: center;
}
.ap-test-type {
    font-size: 64px;
    font-weight: 700;
    color: #BC8034;
    letter-spacing: 8px;
    margin-bottom: 8px;
}
.ap-test-type-name {
    font-family: 'Caveat', cursive;
    font-size: 28px;
    color: #FCF0D6;
    margin-bottom: 24px;
}
.ap-test-desc {
    font-size: 15px;
    line-height: 1.8;
    color: rgba(252, 240, 214, 0.8);
    text-align: left;
    margin-bottom: 32px;
}

/* Dimension bars */
.ap-test-dims {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
}
.ap-test-dim {
    display: flex;
    align-items: center;
    gap: 12px;
}
.ap-test-dim-label {
    font-size: 13px;
    font-weight: 500;
    width: 100px;
    text-align: right;
    color: rgba(252, 240, 214, 0.6);
}
.ap-test-dim-bar-wrap {
    flex: 1;
    height: 10px;
    background: rgba(252, 240, 214, 0.08);
    border-radius: 5px;
    overflow: hidden;
    position: relative;
}
.ap-test-dim-bar {
    height: 100%;
    background: #BC8034;
    border-radius: 5px;
    transition: width 0.8s ease;
}
.ap-test-dim-label-right {
    font-size: 13px;
    font-weight: 500;
    width: 100px;
    color: rgba(252, 240, 214, 0.6);
}
.ap-test-dim-pct {
    font-size: 12px;
    color: #BC8034;
    font-weight: 600;
    width: 40px;
    text-align: center;
}

/* Context */
.ap-test-context {
    background: rgba(188, 128, 52, 0.08);
    border: 1px solid rgba(188, 128, 52, 0.2);
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 32px;
    text-align: left;
}
.ap-test-context-title {
    font-size: 14px;
    font-weight: 600;
    color: #BC8034;
    margin-bottom: 12px;
}
.ap-test-context-text {
    font-size: 14px;
    line-height: 1.7;
    color: rgba(252, 240, 214, 0.75);
}

.ap-test-actions {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
}

/* Overview cards */
.ap-test-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 24px;
}
.ap-test-card {
    background: rgba(252, 240, 214, 0.04);
    border: 1px solid rgba(188, 128, 52, 0.15);
    border-radius: 16px;
    padding: 24px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.ap-test-card:hover {
    background: rgba(188, 128, 52, 0.08);
    border-color: rgba(188, 128, 52, 0.4);
    transform: translateY(-2px);
}
.ap-test-card-head {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
}
.ap-test-card-icon {
    font-size: 28px;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(188, 128, 52, 0.1);
    border-radius: 12px;
}
.ap-test-card-title {
    font-weight: 600;
    font-size: 16px;
    color: #FCF0D6;
}
.ap-test-card-sub {
    font-size: 13px;
    color: rgba(252, 240, 214, 0.5);
}
.ap-test-card-desc {
    font-size: 14px;
    line-height: 1.6;
    color: rgba(252, 240, 214, 0.6);
    margin-bottom: 16px;
}
.ap-test-card-status {
    font-size: 13px;
    font-weight: 500;
    padding: 6px 14px;
    border-radius: 20px;
    display: inline-block;
}
.ap-test-card-status.done {
    background: rgba(188, 128, 52, 0.15);
    color: #BC8034;
}
.ap-test-card-status.open {
    background: rgba(252, 240, 214, 0.06);
    color: rgba(252, 240, 214, 0.5);
}

@media (max-width: 600px) {
    .ap-test-type { font-size: 48px; letter-spacing: 4px; }
    .ap-test-dim-label, .ap-test-dim-label-right { width: 70px; font-size: 11px; }
    .ap-test-dim-pct { width: 32px; font-size: 11px; }
    .ap-test-likert-btn { width: 40px; height: 40px; font-size: 14px; }
}
`;
    document.head.appendChild(style);

    // === STATE ===
    var ts = {
        testId: null,       // welcher Test läuft
        testDef: null,      // Test-Definition aus __AP_TEST_DEFS
        step: 0,            // aktuelle Frage
        answers: [],        // Antworten
        result: null,       // { resultKey, scores }
        saved: false,
        retaking: false     // Flag: Test wird wiederholt
    };

    // === HELPERS ===
    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function getDefs() {
        return window.__AP_TEST_DEFS || {};
    }

    function getUserAssessments() {
        var user = window.__AP.state.user;
        return (user && user.assessments) ? user.assessments : {};
    }

    // ============================================================
    // OVERVIEW - Alle verfügbaren Tests
    // ============================================================
    function renderOverview(container) {
        var defs = getDefs();
        var assessments = getUserAssessments();
        var ids = Object.keys(defs);

        var html = '<div class="ap-test-wrap ap-fade-in">'
            + '<div class="ap-test-title">Selbsttests</div>'
            + '<div class="ap-test-subtitle">Entdecke dich durch verschiedene Tests</div>'
            + '<div class="ap-test-grid">';

        for (var i = 0; i < ids.length; i++) {
            var id = ids[i];
            var def = defs[id];
            var result = assessments[id];
            var isDone = result && result.resultKey;
            var resultData = isDone ? (def.results[result.resultKey] || null) : null;

            var statusHtml = isDone
                ? '<span class="ap-test-card-status done">' + escapeHtml(result.resultKey) + (resultData ? ' - ' + escapeHtml(resultData.name) : '') + '</span>'
                : '<span class="ap-test-card-status open">Noch offen</span>';

            html += '<div class="ap-test-card" onclick="window.__AP.navigate(\'test\', { testId: \'' + id + '\' })">'
                + '<div class="ap-test-card-head">'
                + '<div class="ap-test-card-icon">' + (def.icon || '') + '</div>'
                + '<div><div class="ap-test-card-title">' + escapeHtml(def.title) + '</div>'
                + '<div class="ap-test-card-sub">' + escapeHtml(def.subtitle) + '</div></div>'
                + '</div>'
                + '<div class="ap-test-card-desc">' + escapeHtml(def.description) + '</div>'
                + statusHtml
                + '</div>';
        }

        html += '</div></div>';
        container.innerHTML = html;
    }

    // ============================================================
    // TEST ENGINE - Generisch für jeden Test
    // ============================================================
    function startTest(container, testId) {
        var defs = getDefs();
        var def = defs[testId];
        if (!def) {
            container.innerHTML = '<div class="ap-test-wrap"><p>Test "' + escapeHtml(testId) + '" nicht gefunden.</p></div>';
            return;
        }

        ts.testId = testId;
        ts.testDef = def;

        // Existierendes Ergebnis laden? (nicht wenn Test wiederholt wird)
        var assessments = getUserAssessments();
        if (!ts.retaking && assessments[testId] && assessments[testId].resultKey && ts.step === 0 && !ts.result) {
            ts.result = { resultKey: assessments[testId].resultKey, scores: assessments[testId].scores };
            ts.saved = true;
            ts.step = def.questions.length;
        }

        if (ts.step >= def.questions.length && ts.result) {
            renderResult(container);
        } else {
            renderQuestion(container);
        }
    }

    // === FRAGE RENDERN ===
    function renderQuestion(container) {
        var def = ts.testDef;
        var q = def.questions[ts.step];
        var total = def.questions.length;
        var pct = Math.round((ts.step / total) * 100);

        var optionsHtml = '';
        if (def.questionFormat === 'likert') {
            var scale = q.scale || 5;
            optionsHtml = '<div class="ap-test-likert">';
            for (var s = 1; s <= scale; s++) {
                optionsHtml += '<button class="ap-test-likert-btn" onclick="window.__AP_TEST_ANSWER(' + s + ')">' + s + '</button>';
            }
            optionsHtml += '</div>';
            if (q.labels) {
                optionsHtml += '<div class="ap-test-likert-labels"><span>' + escapeHtml(q.labels[0]) + '</span><span>' + escapeHtml(q.labels[q.labels.length - 1]) + '</span></div>';
            }
        } else {
            // forced-choice (default)
            optionsHtml = '<div class="ap-test-options">'
                + '<button class="ap-test-option" onclick="window.__AP_TEST_ANSWER(\'a\')">' + escapeHtml(q.a) + '</button>'
                + '<button class="ap-test-option" onclick="window.__AP_TEST_ANSWER(\'b\')">' + escapeHtml(q.b) + '</button>'
                + '</div>';
        }

        container.innerHTML = '<div class="ap-test-wrap ap-fade-in">'
            + '<div class="ap-test-title">' + escapeHtml(def.title) + '</div>'
            + '<div class="ap-test-subtitle">' + escapeHtml(def.subtitle) + '</div>'
            + '<div class="ap-test-count">Frage ' + (ts.step + 1) + ' von ' + total + '</div>'
            + '<div class="ap-test-progress"><div class="ap-test-progress-bar" style="width:' + pct + '%"></div></div>'
            + '<div class="ap-test-question">' + escapeHtml(q.q) + '</div>'
            + optionsHtml
            + '<div style="text-align:center;margin-top:32px;">'
            + '<button class="ap-btn ap-btn-ghost" style="font-size:13px;padding:6px 20px;" onclick="window.__AP_TEST_CANCEL()">Abbrechen</button>'
            + '</div>'
            + '</div>';
    }

    // === ERGEBNIS RENDERN ===
    function renderResult(container) {
        var def = ts.testDef;
        var r = ts.result;
        var rd = (def.results && def.results[r.resultKey]) || { name: r.resultKey, desc: '', win3: '' };

        var html = '<div class="ap-test-wrap ap-fade-in"><div class="ap-test-result">'
            + '<div class="ap-test-title" style="margin-bottom:24px;">Dein Ergebnis</div>';

        // Result-Display je nach Typ
        if (def.resultDisplay === 'type-with-dims') {
            html += '<div class="ap-test-type">' + escapeHtml(r.resultKey) + '</div>'
                + '<div class="ap-test-type-name">' + escapeHtml(rd.name) + '</div>'
                + '<div class="ap-test-desc">' + escapeHtml(rd.desc) + '</div>';

            // Dimension bars
            if (def.dimensions && r.scores) {
                html += '<div class="ap-test-dims">';
                for (var i = 0; i < def.dimensions.length; i++) {
                    var d = def.dimensions[i];
                    var val = r.scores[d.key] || 50;
                    var pctDisplay = val >= 50 ? val : (100 - val);
                    html += '<div class="ap-test-dim">'
                        + '<div class="ap-test-dim-label">' + escapeHtml(d.left) + '</div>'
                        + '<div class="ap-test-dim-bar-wrap">'
                        + '<div class="ap-test-dim-bar" style="width:' + val + '%;' + (val < 50 ? 'margin-left:auto;background:rgba(188,128,52,0.5);' : '') + '"></div>'
                        + '</div>'
                        + '<div class="ap-test-dim-label-right">' + escapeHtml(d.right) + '</div>'
                        + '<div class="ap-test-dim-pct">' + pctDisplay + '%</div>'
                        + '</div>';
                }
                html += '</div>';
            }
        } else {
            // Fallback: einfache Textanzeige
            html += '<div class="ap-test-type-name">' + escapeHtml(r.resultKey + (rd.name ? ' - ' + rd.name : '')) + '</div>'
                + '<div class="ap-test-desc">' + escapeHtml(rd.desc) + '</div>';
        }

        // Win³ Kontext
        if (rd.win3) {
            html += '<div class="ap-test-context">'
                + '<div class="ap-test-context-title">Im Kontext des Win\u00b3 Kurs</div>'
                + '<div class="ap-test-context-text">' + escapeHtml(rd.win3) + '</div>'
                + '</div>';
        }

        // Save-Badge
        html += ts.saved
            ? '<div id="ap-test-save-badge" style="font-size:13px;color:rgba(252,240,214,0.4);margin-bottom:24px;">Gespeichert - Spiegel und Coach kennen dein Ergebnis</div>'
            : '<div id="ap-test-save-badge" style="font-size:13px;color:#BC8034;margin-bottom:24px;"><span class="ap-spinner" style="margin-right:8px;"></span> Wird gespeichert...</div>';

        // Actions
        html += '<div class="ap-test-actions">'
            + '<button class="ap-btn" onclick="window.__AP_TEST_TO_MIRROR()">Ergebnis spiegeln</button>'
            + '<button class="ap-btn ap-btn-ghost" onclick="window.__AP_TEST_RETAKE()">Test wiederholen</button>'
            + '</div></div></div>';

        container.innerHTML = html;

        if (!ts.saved) {
            saveResult();
        }
    }

    // === SPEICHERN ===
    async function saveResult() {
        try {
            await window.__AP.api('/user/assessments/' + ts.testId, {
                method: 'PUT',
                body: { resultKey: ts.result.resultKey, scores: ts.result.scores }
            });
            ts.saved = true;
            // User-State aktualisieren
            var user = window.__AP.state.user;
            if (user) {
                if (!user.assessments) user.assessments = {};
                user.assessments[ts.testId] = {
                    resultKey: ts.result.resultKey,
                    scores: ts.result.scores,
                    completed_at: new Date().toISOString()
                };
                window.__AP.saveSession();
            }
            var badgeEl = document.getElementById('ap-test-save-badge');
            if (badgeEl) {
                badgeEl.style.color = 'rgba(252, 240, 214, 0.4)';
                badgeEl.textContent = 'Gespeichert - Spiegel und Coach kennen dein Ergebnis';
            }
        } catch(e) {
            console.error('Assessment save failed:', e);
            var badgeEl = document.getElementById('ap-test-save-badge');
            if (badgeEl) {
                badgeEl.style.color = '#e57373';
                badgeEl.textContent = 'Speichern fehlgeschlagen - wird beim nächsten Mal erneut versucht';
            }
        }
    }

    // ============================================================
    // GLOBAL FUNCTIONS
    // ============================================================
    window.__AP_TEST_RENDER = function(container, testId) {
        if (testId) {
            // Reset state wenn anderer Test
            if (ts.testId !== testId) {
                ts.step = 0;
                ts.answers = [];
                ts.result = null;
                ts.saved = false;
            }
            startTest(container, testId);
        } else {
            renderOverview(container);
        }
    };

    window.__AP_TEST_ANSWER = function(choice) {
        if (!ts.testDef) return;
        ts.answers[ts.step] = choice;
        ts.step++;

        if (ts.step >= ts.testDef.questions.length) {
            ts.result = ts.testDef.score(ts.answers, ts.testDef.questions);
            ts.saved = false;
            ts.retaking = false;
        }

        var viewEl = document.getElementById('ap-view');
        if (viewEl) startTest(viewEl, ts.testId);
    };

    window.__AP_TEST_CANCEL = function() {
        ts.step = 0;
        ts.answers = [];
        ts.result = null;
        ts.saved = false;
        ts.retaking = false;
        ts.testId = null;
        ts.testDef = null;
        window.__AP.navigate('tests');
    };

    window.__AP_TEST_RETAKE = function() {
        ts.step = 0;
        ts.answers = [];
        ts.result = null;
        ts.saved = false;
        ts.retaking = true;
        var viewEl = document.getElementById('ap-view');
        if (viewEl && ts.testId) startTest(viewEl, ts.testId);
    };

    window.__AP_TEST_TO_MIRROR = function() {
        if (!ts.result || !ts.testDef) return;
        var def = ts.testDef;
        var rd = (def.results && def.results[ts.result.resultKey]) || { name: ts.result.resultKey, desc: '', win3: '' };

        var text;
        if (def.buildMirrorText) {
            text = def.buildMirrorText(ts.result.resultKey, ts.result.scores, rd);
        } else {
            text = 'Mein Testergebnis (' + def.title + '): ' + ts.result.resultKey
                + (rd.name ? ' - ' + rd.name : '') + '.\n\n'
                + (rd.desc || '') + '\n\n'
                + 'Ich frage mich, was das über mich aussagt.';
        }

        window.__AP._mirrorText = text;
        window.__AP._mirrorSource = def.mirrorSource || ('test:' + def.id);
        window.__AP._mirrorAutoTrigger = true;
        window.__AP.navigate('writer');
    };
})();

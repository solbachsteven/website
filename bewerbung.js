// Win³ Mentoring - Bewerbungsformular (Standalone)
// Multi-Step Form mit Client-Side Scoring + Backend (D1 + Resend Email)
// Qualifiziert → Kalender-Link / Nicht qualifiziert → Win³ Kurs
// Loaded via: <script src="https://solbachsteven.github.io/website/bewerbung.js"></script>
(function() {
    if (window.__BW_LOADED) return;
    window.__BW_LOADED = true;

    // === CONFIG ===
    var API_URL = 'https://win3-community.solbachsteven.workers.dev';
    var TURNSTILE_SITE_KEY = '0x4AAAAAACirN6RQ4esyh2z2';

    // === FONTS ===
    if (!document.querySelector('link[href*="Poppins"]')) {
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap';
        document.head.appendChild(fontLink);
    }

    // === TURNSTILE SCRIPT ===
    if (!document.querySelector('script[src*="turnstile"]')) {
        var ts = document.createElement('script');
        ts.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
        ts.async = true;
        document.head.appendChild(ts);
    }

    // === CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'bw-bewerbung');
    style.textContent = `
/* ======== PAGE ======== */
.bw-page {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;
    background: #1A1A1A;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
}
.bw-page *, .bw-page *::before, .bw-page *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* ======== CARD ======== */
.bw-card {
    background: #F4F0EC;
    border-radius: 28px;
    max-width: 580px;
    width: 100%;
    padding: 52px 44px;
    color: #2C2726;
    position: relative;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
}

/* ======== PROGRESS ======== */
.bw-progress {
    display: flex;
    gap: 6px;
    margin-bottom: 40px;
}
.bw-progress-dot {
    flex: 1;
    height: 3px;
    border-radius: 2px;
    background: rgba(44, 39, 38, 0.1);
    transition: background 0.4s ease;
}
.bw-progress-dot.bw-done {
    background: #BC8034;
}
.bw-progress-dot.bw-current {
    background: linear-gradient(90deg, #BC8034, rgba(188, 128, 52, 0.3));
}

/* ======== STEP ======== */
.bw-step {
    display: none;
    animation: bwFadeIn 0.4s ease;
}
.bw-step.bw-active {
    display: block;
}
@keyframes bwFadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ======== TYPOGRAPHY ======== */
.bw-label {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #BC8034;
    margin-bottom: 12px;
}
.bw-headline {
    font-size: 26px;
    font-weight: 600;
    line-height: 1.3;
    color: #2C2726;
    margin-bottom: 8px;
}
.bw-subline {
    font-family: 'Caveat', cursive;
    font-size: 26px;
    color: #BC8034;
    margin-bottom: 28px;
}
.bw-hint {
    font-size: 13px;
    font-weight: 300;
    color: rgba(44, 39, 38, 0.5);
    margin-bottom: 20px;
}

/* ======== INPUTS ======== */
.bw-input {
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: #2C2726;
    background: #FFFFFF;
    border: 1.5px solid rgba(44, 39, 38, 0.12);
    border-radius: 12px;
    padding: 14px 18px;
    margin-bottom: 14px;
    outline: none;
    transition: border-color 0.2s ease;
}
.bw-input:focus {
    border-color: #BC8034;
}
.bw-input::placeholder {
    color: rgba(44, 39, 38, 0.3);
}
textarea.bw-input {
    resize: vertical;
    min-height: 100px;
}

/* ======== RADIO OPTIONS ======== */
.bw-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
}
.bw-option {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #FFFFFF;
    border: 1.5px solid rgba(44, 39, 38, 0.1);
    border-radius: 12px;
    padding: 14px 18px;
    cursor: pointer;
    transition: border-color 0.2s ease, background 0.2s ease;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.4;
}
.bw-option:hover {
    border-color: rgba(188, 128, 52, 0.3);
    background: rgba(188, 128, 52, 0.03);
}
.bw-option.bw-selected {
    border-color: #BC8034;
    background: rgba(188, 128, 52, 0.06);
}
.bw-option input[type="radio"] {
    display: none;
}
.bw-radio-dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid rgba(44, 39, 38, 0.2);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s ease;
}
.bw-selected .bw-radio-dot {
    border-color: #BC8034;
}
.bw-selected .bw-radio-dot::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #BC8034;
}
.bw-other-input {
    display: none;
    margin-top: 10px;
}
.bw-other-input.bw-show {
    display: block;
}

/* ======== CHECKBOXES ======== */
.bw-checkboxes {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
}
.bw-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
}
.bw-checkbox input[type="checkbox"] {
    display: none;
}
.bw-check-box {
    width: 22px;
    height: 22px;
    min-width: 22px;
    border-radius: 6px;
    border: 2px solid rgba(44, 39, 38, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    margin-top: 2px;
}
.bw-checkbox.bw-checked .bw-check-box {
    background: #BC8034;
    border-color: #BC8034;
}
.bw-checkbox.bw-checked .bw-check-box::after {
    content: '';
    width: 6px;
    height: 10px;
    border: solid #FFF;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-top: -2px;
}

/* ======== BUTTONS ======== */
.bw-btn-row {
    display: flex;
    gap: 12px;
    margin-top: 28px;
}
.bw-btn {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 16px;
    padding: 14px 32px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
}
.bw-btn-next {
    background: #D96935;
    color: #FFF;
    flex: 1;
}
.bw-btn-next:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(217, 105, 53, 0.35);
}
.bw-btn-next:disabled {
    opacity: 0.35;
    cursor: default;
}
.bw-btn-back {
    background: rgba(44, 39, 38, 0.06);
    color: rgba(44, 39, 38, 0.5);
}
.bw-btn-back:hover {
    background: rgba(44, 39, 38, 0.1);
}

/* ======== RESULT ======== */
.bw-result {
    text-align: center;
}
.bw-result-icon {
    font-size: 48px;
    margin-bottom: 20px;
}
.bw-result .bw-headline {
    margin-bottom: 16px;
}
.bw-result-text {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(44, 39, 38, 0.7);
    margin-bottom: 32px;
    max-width: 420px;
    margin-left: auto;
    margin-right: auto;
}
.bw-result-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #FFF;
    background: #D96935;
    border: none;
    border-radius: 20px;
    padding: 16px 44px;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    margin-bottom: 12px;
}
.bw-result-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(217, 105, 53, 0.4);
}
.bw-result-trust {
    font-size: 13px;
    font-weight: 300;
    color: rgba(44, 39, 38, 0.4);
}

/* ======== ERROR ======== */
.bw-error {
    background: #FEE;
    border: 1px solid #E88;
    border-radius: 10px;
    padding: 12px 16px;
    margin-bottom: 16px;
    font-size: 13px;
    color: #922;
    line-height: 1.4;
}

/* ======== LOADING ======== */
.bw-btn-next.bw-loading {
    pointer-events: none;
    opacity: 0.6;
    position: relative;
}
.bw-btn-next.bw-loading::after {
    content: '';
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: #FFF;
    border-radius: 50%;
    animation: bwSpin 0.6s linear infinite;
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
}
@keyframes bwSpin {
    to { transform: rotate(360deg); }
}

/* ======== RESPONSIVE ======== */
@media (max-width: 768px) {
    .bw-page { padding: 30px 12px; }
    .bw-card { padding: 36px 22px; border-radius: 22px; }
    .bw-headline { font-size: 22px; }
    .bw-subline { font-size: 22px; }
    .bw-option { font-size: 14px; padding: 12px 14px; }
    .bw-checkbox { font-size: 14px; }
    .bw-btn { font-size: 14px; padding: 13px 24px; }
    .bw-btn-row { flex-direction: column-reverse; }
    .bw-result-cta { width: 100%; max-width: 320px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var TOTAL_STEPS = 7;

    var steps = [
        {
            id: 'contact',
            label: 'SCHRITT 1 VON 7',
            headline: 'Sch\u00f6n, dass du hier bist.',
            subline: 'Lass uns herausfinden, ob wir zusammenpassen.',
            fields: [
                { type: 'text', name: 'name', placeholder: 'Dein Vorname', required: true },
                { type: 'email', name: 'email', placeholder: 'Deine E-Mail-Adresse', required: true }
            ],
            consent: 'Ich willige ein, dass Steven mich im Rahmen dieser Bewerbung kontaktieren darf.'
        },
        {
            id: 'situation',
            label: 'SCHRITT 2 VON 7',
            headline: 'Wo stehst du gerade?',
            subline: 'Sei ehrlich \u2013 es gibt keine falschen Antworten.',
            question: {
                name: 'situation',
                options: [
                    'Ich f\u00fchle mich festgefahren und wei\u00df nicht weiter',
                    'Ich wei\u00df ungef\u00e4hr was ich will, komme aber nicht ins Handeln',
                    'Ich bin auf dem Weg, will aber schneller vorankommen',
                    'Ich suche erstmal Orientierung'
                ],
                hasOther: true
            }
        },
        {
            id: 'challenge',
            label: 'SCHRITT 3 VON 7',
            headline: 'Was ist gerade deine gr\u00f6\u00dfte Herausforderung?',
            subline: 'Nimm dir einen Moment.',
            textarea: {
                name: 'challenge',
                placeholder: 'Schreib frei von der Seele...',
                required: true
            }
        },
        {
            id: 'goal',
            label: 'SCHRITT 4 VON 7',
            headline: 'Was erhoffst du dir vom Mentoring?',
            subline: 'Was w\u00fcrde den gr\u00f6\u00dften Unterschied machen?',
            question: {
                name: 'goal',
                options: [
                    'Pers\u00f6nliche Begleitung und Accountability',
                    'Schnellere Ergebnisse als alleine',
                    'Einen Sparringspartner auf Augenh\u00f6he',
                    'Hilfe bei einer konkreten Entscheidung'
                ],
                hasOther: true
            }
        },
        {
            id: 'investment',
            label: 'SCHRITT 5 VON 7',
            headline: 'Bist du bereit, Zeit, Geld und Energie in deine Transformation zu investieren?',
            subline: 'Ehrlichkeit hilft uns beiden.',
            question: {
                name: 'investment',
                options: [
                    'Ja, ich bin bereit alles zu geben',
                    'Ja, wenn ich \u00fcberzeugt bin',
                    'Ich muss dar\u00fcber nachdenken',
                    'Eher nicht gerade'
                ],
                hasOther: true
            }
        },
        {
            id: 'timing',
            label: 'SCHRITT 6 VON 7',
            headline: 'Wann willst du starten, dein Leben zu transformieren?',
            subline: 'Es gibt keinen perfekten Moment \u2013 nur deinen.',
            question: {
                name: 'timing',
                options: [
                    'Sofort \u2013 ich bin bereit',
                    'In den n\u00e4chsten Wochen',
                    'In den n\u00e4chsten Monaten',
                    'Ich bin noch unsicher'
                ],
                hasOther: true
            }
        },
        {
            id: 'commitment',
            label: 'SCHRITT 7 VON 7',
            headline: 'Dein Commitment',
            subline: 'Das Mentoring funktioniert nur, wenn du bereit bist.',
            hint: 'Bitte best\u00e4tige alle drei Punkte, um fortzufahren.',
            checkboxes: [
                'Ich bin bereit, ehrlich auf mich zu schauen und mich meinen Schatten zu stellen',
                'Ich bin offen und dankbar f\u00fcr Feedback, auch wenn es unbequem ist',
                'Ich \u00fcbernehme Verantwortung f\u00fcr mein Handeln und Nicht-Handeln und somit f\u00fcr meine Ergebnisse'
            ]
        }
    ];

    var results = {
        qualified: {
            icon: '\u2728',
            headline: 'Du bist bereit.',
            text: 'Deine Antworten zeigen, dass du die richtige Einstellung mitbringst. Der n\u00e4chste Schritt: Buche ein kostenloses Erstgespr\u00e4ch, damit wir herausfinden, wie ich dich am besten begleiten kann.',
            cta: 'Erstgespr\u00e4ch buchen',
            ctaUrl: 'https://solbachsteven.systeme.io/kalender',
            trust: 'Kostenlos \u00b7 Unverbindlich \u00b7 30 Minuten'
        },
        notQualified: {
            icon: '\ud83d\udcab',
            headline: 'Danke f\u00fcr deine Ehrlichkeit.',
            text: 'Basierend auf deinen Antworten empfehle ich dir, erstmal mit dem Win\u00b3 Kurs zu starten. Er gibt dir das Fundament f\u00fcr Selbsterkenntnis und Klarheit \u2013 in deinem eigenen Tempo.',
            cta: 'Win\u00b3 Kurs entdecken',
            ctaUrl: 'https://solbachsteven.systeme.io/win3-kurs',
            trust: 'Eigenst\u00e4ndig \u00b7 297 \u20ac \u00b7 Sofort starten'
        }
    };

    // === STATE ===
    var currentStep = 0;
    var answers = {};
    var submitting = false;
    var submitError = '';
    var turnstileWidgetId = null;
    var turnstileToken = '';

    // === RENDER HELPERS ===
    function renderProgress() {
        var html = '<div class="bw-progress">';
        for (var i = 0; i < TOTAL_STEPS; i++) {
            var cls = i < currentStep ? 'bw-done' : i === currentStep ? 'bw-current' : '';
            html += '<div class="bw-progress-dot ' + cls + '"></div>';
        }
        html += '</div>';
        return html;
    }

    function renderRadioGroup(q) {
        var html = '<div class="bw-options" data-name="' + q.name + '">';
        q.options.forEach(function(opt, i) {
            html += '<label class="bw-option" data-value="' + i + '">' +
                '<input type="radio" name="' + q.name + '" value="' + i + '">' +
                '<span class="bw-radio-dot"></span>' +
                '<span>' + opt + '</span>' +
            '</label>';
        });
        if (q.hasOther) {
            html += '<label class="bw-option" data-value="other">' +
                '<input type="radio" name="' + q.name + '" value="other">' +
                '<span class="bw-radio-dot"></span>' +
                '<span>Andere</span>' +
            '</label>';
        }
        html += '</div>';
        if (q.hasOther) {
            html += '<input type="text" class="bw-input bw-other-input" data-name="' + q.name + '_other" placeholder="Deine Antwort...">';
        }
        return html;
    }

    function renderStep(stepIdx) {
        var s = steps[stepIdx];
        var html = renderProgress();
        html += '<div class="bw-step bw-active">';
        html += '<div class="bw-label">' + s.label + '</div>';
        html += '<h2 class="bw-headline">' + s.headline + '</h2>';
        html += '<div class="bw-subline">' + s.subline + '</div>';

        if (s.hint) {
            html += '<div class="bw-hint">' + s.hint + '</div>';
        }

        // Text fields (step 1)
        if (s.fields) {
            s.fields.forEach(function(f) {
                var val = answers[f.name] || '';
                html += '<input type="' + f.type + '" class="bw-input" data-name="' + f.name + '" placeholder="' + f.placeholder + '" value="' + val + '"' + (f.required ? ' required' : '') + '>';
            });
        }

        // Consent checkbox (step 1)
        if (s.consent) {
            var consentChecked = answers['consent'] ? ' bw-checked' : '';
            html += '<label class="bw-checkbox' + consentChecked + '" style="margin-top: 4px; margin-bottom: 0;">' +
                '<input type="checkbox" data-name="consent"' + (answers['consent'] ? ' checked' : '') + '>' +
                '<span class="bw-check-box"></span>' +
                '<span style="font-size: 13px; color: rgba(44,39,38,0.55);">' + s.consent + '</span>' +
            '</label>';
        }

        // Radio group
        if (s.question) {
            html += renderRadioGroup(s.question);
        }

        // Standalone textarea (challenge step)
        if (s.textarea) {
            var val = answers[s.textarea.name] || '';
            html += '<textarea class="bw-input" data-name="' + s.textarea.name + '" placeholder="' + s.textarea.placeholder + '">' + val + '</textarea>';
        }

        // Checkboxes (step 7)
        if (s.checkboxes) {
            html += '<div class="bw-checkboxes">';
            s.checkboxes.forEach(function(txt, i) {
                var checked = answers['commit_' + i] ? ' bw-checked' : '';
                html += '<label class="bw-checkbox' + checked + '">' +
                    '<input type="checkbox" data-name="commit_' + i + '"' + (answers['commit_' + i] ? ' checked' : '') + '>' +
                    '<span class="bw-check-box"></span>' +
                    '<span>' + txt + '</span>' +
                '</label>';
            });
            html += '</div>';
            // Turnstile Widget (invisible, im letzten Step)
            html += '<div id="bw-turnstile" style="margin-bottom: 8px;"></div>';
        }

        // Error message
        if (submitError) {
            html += '<div class="bw-error">' + submitError + '</div>';
        }

        // Buttons
        html += '<div class="bw-btn-row">';
        if (stepIdx > 0) {
            html += '<button class="bw-btn bw-btn-back" data-action="back">Zur\u00fcck</button>';
        }
        var btnText = stepIdx === TOTAL_STEPS - 1 ? 'Absenden' : 'Weiter';
        html += '<button class="bw-btn bw-btn-next' + (submitting ? ' bw-loading' : '') + '" data-action="next">' + (submitting ? 'Wird gesendet...' : btnText) + '</button>';
        html += '</div>';

        html += '</div>';
        return html;
    }

    function renderResult(qualified) {
        var r = qualified ? results.qualified : results.notQualified;
        var html = renderProgress();
        html += '<div class="bw-step bw-active bw-result">';
        html += '<div class="bw-result-icon">' + r.icon + '</div>';
        html += '<h2 class="bw-headline">' + r.headline + '</h2>';
        html += '<div class="bw-result-text">' + r.text + '</div>';
        html += '<div>';
        html += '<a href="' + r.ctaUrl + '" class="bw-result-cta" target="_blank">' + r.cta + '</a>';
        html += '<div class="bw-result-trust">' + r.trust + '</div>';
        html += '</div>';
        html += '</div>';
        return html;
    }

    // === VALIDATION ===
    function validateStep(stepIdx) {
        var s = steps[stepIdx];

        if (s.fields) {
            for (var i = 0; i < s.fields.length; i++) {
                var f = s.fields[i];
                if (f.required && !answers[f.name]) return false;
                if (f.type === 'email' && answers[f.name] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers[f.name])) return false;
            }
        }

        if (s.consent && !answers['consent']) return false;

        if (s.question && !answers[s.question.name] && answers[s.question.name] !== 0) return false;

        if (s.textarea && s.textarea.required && !answers[s.textarea.name]) return false;

        if (s.checkboxes) {
            for (var j = 0; j < s.checkboxes.length; j++) {
                if (!answers['commit_' + j]) return false;
            }
        }

        return true;
    }

    // === SCORING ===
    function isQualified() {
        // Gate 1: Investment readiness - "Eher nicht" disqualifies
        if (answers.investment === 3) return false;

        // Gate 2: All commitment checkboxes must be checked
        for (var i = 0; i < steps[6].checkboxes.length; i++) {
            if (!answers['commit_' + i]) return false;
        }

        return true;
    }

    // === COLLECT ANSWERS ===
    function collectAnswers() {
        var inputs = card.querySelectorAll('.bw-input[data-name]');
        inputs.forEach(function(el) {
            answers[el.getAttribute('data-name')] = el.value.trim();
        });

        var selectedRadio = card.querySelector('.bw-option.bw-selected input[type="radio"]');
        if (selectedRadio) {
            var name = selectedRadio.name;
            var val = selectedRadio.value;
            if (val === 'other') {
                var otherInput = card.querySelector('.bw-other-input[data-name="' + name + '_other"]');
                answers[name] = 'other';
                if (otherInput) answers[name + '_other'] = otherInput.value.trim();
            } else {
                answers[name] = parseInt(val);
            }
        }

        var checkboxes = card.querySelectorAll('.bw-checkbox input[type="checkbox"]');
        checkboxes.forEach(function(cb) {
            answers[cb.getAttribute('data-name')] = cb.checked;
        });
    }

    // === RENDER CURRENT STEP ===
    function render() {
        if (currentStep >= TOTAL_STEPS) {
            card.innerHTML = renderResult(isQualified());
        } else {
            card.innerHTML = renderStep(currentStep);
            updateNextButton();
        }
        bindEvents();
        // Turnstile im letzten Step initialisieren
        if (currentStep === TOTAL_STEPS - 1) {
            initTurnstile();
        }
    }

    function updateNextButton() {
        var btn = card.querySelector('.bw-btn-next');
        if (btn) {
            btn.disabled = submitting || !validateStep(currentStep);
        }
    }

    // === TURNSTILE ===
    var turnstileRetries = 0;
    function initTurnstile() {
        var container = document.getElementById('bw-turnstile');
        if (typeof turnstile !== 'undefined' && container) {
            if (turnstileWidgetId !== null) {
                try { turnstile.remove(turnstileWidgetId); } catch(e) {}
            }
            turnstileWidgetId = turnstile.render('#bw-turnstile', {
                sitekey: TURNSTILE_SITE_KEY,
                size: 'invisible',
                callback: function(token) { turnstileToken = token; }
            });
            turnstileRetries = 0;
        } else if (turnstileRetries < 20) {
            turnstileRetries++;
            setTimeout(initTurnstile, 250);
        }
    }

    // === SUBMIT ===
    async function submitBewerbung() {
        if (submitting) return;
        submitting = true;
        submitError = '';
        render();

        // Turnstile Token holen
        var token = turnstileToken || (typeof turnstile !== 'undefined' && turnstileWidgetId !== null ? turnstile.getResponse(turnstileWidgetId) : '');

        var qualified = isQualified();
        var payload = {
            name: answers.name || '',
            email: answers.email || '',
            consent: answers.consent ? true : false,
            situation: answers.situation !== undefined ? String(answers.situation) : '',
            situation_other: answers.situation_other || '',
            challenge: answers.challenge || '',
            goal: answers.goal !== undefined ? String(answers.goal) : '',
            goal_other: answers.goal_other || '',
            investment: answers.investment !== undefined ? String(answers.investment) : '',
            investment_other: answers.investment_other || '',
            timing: answers.timing !== undefined ? String(answers.timing) : '',
            timing_other: answers.timing_other || '',
            commit_honest: answers.commit_0 ? true : false,
            commit_feedback: answers.commit_1 ? true : false,
            commit_responsibility: answers.commit_2 ? true : false,
            qualified: qualified,
            turnstileToken: token
        };

        try {
            var resp = await fetch(API_URL + '/bewerbung/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            var data = await resp.json();

            if (!resp.ok) {
                submitting = false;
                submitError = data.error || 'Etwas ist schiefgelaufen. Bitte versuche es erneut.';
                // Turnstile resetten
                if (typeof turnstile !== 'undefined' && turnstileWidgetId !== null) {
                    turnstile.reset(turnstileWidgetId);
                    turnstileToken = '';
                }
                render();
                return;
            }

            // Erfolg - Ergebnis zeigen
            submitting = false;
            currentStep = TOTAL_STEPS; // Triggert renderResult
            render();

        } catch (err) {
            submitting = false;
            submitError = 'Verbindungsfehler. Bitte pruefe deine Internetverbindung und versuche es erneut.';
            if (typeof turnstile !== 'undefined' && turnstileWidgetId !== null) {
                turnstile.reset(turnstileWidgetId);
                turnstileToken = '';
            }
            render();
        }
    }

    // === EVENTS ===
    function bindEvents() {
        // Radio options
        card.querySelectorAll('.bw-option').forEach(function(opt) {
            opt.addEventListener('click', function() {
                var group = opt.closest('.bw-options');
                group.querySelectorAll('.bw-option').forEach(function(o) { o.classList.remove('bw-selected'); });
                opt.classList.add('bw-selected');
                opt.querySelector('input[type="radio"]').checked = true;

                // Show/hide "other" input
                var otherInput = group.nextElementSibling;
                if (otherInput && otherInput.classList.contains('bw-other-input')) {
                    if (opt.getAttribute('data-value') === 'other') {
                        otherInput.classList.add('bw-show');
                        otherInput.focus();
                    } else {
                        otherInput.classList.remove('bw-show');
                    }
                }

                collectAnswers();
                updateNextButton();
            });
        });

        // Checkboxes
        card.querySelectorAll('.bw-checkbox').forEach(function(cb) {
            cb.addEventListener('click', function(e) {
                e.preventDefault();
                var input = cb.querySelector('input[type="checkbox"]');
                input.checked = !input.checked;
                cb.classList.toggle('bw-checked', input.checked);
                collectAnswers();
                updateNextButton();
            });
        });

        // Text inputs
        card.querySelectorAll('.bw-input').forEach(function(inp) {
            inp.addEventListener('input', function() {
                collectAnswers();
                updateNextButton();
            });
        });

        // Next button
        var nextBtn = card.querySelector('[data-action="next"]');
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                collectAnswers();
                if (!validateStep(currentStep)) return;

                // Letzter Step = Absenden an Backend
                if (currentStep === TOTAL_STEPS - 1) {
                    submitBewerbung();
                    return;
                }

                currentStep++;
                render();
                card.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }

        // Back button
        var backBtn = card.querySelector('[data-action="back"]');
        if (backBtn) {
            backBtn.addEventListener('click', function() {
                collectAnswers();
                currentStep--;
                render();
            });
        }

        // Restore selected radio
        var s = steps[currentStep];
        if (s && s.question && answers[s.question.name] !== undefined) {
            var val = answers[s.question.name];
            var selector = val === 'other' ? '[data-value="other"]' : '[data-value="' + val + '"]';
            var opt = card.querySelector('.bw-option' + selector);
            if (opt) {
                opt.classList.add('bw-selected');
                opt.querySelector('input[type="radio"]').checked = true;
                if (val === 'other') {
                    var otherInput = card.querySelector('.bw-other-input');
                    if (otherInput) {
                        otherInput.classList.add('bw-show');
                        otherInput.value = answers[s.question.name + '_other'] || '';
                    }
                }
            }
        }
    }

    // === DOM INSERTION ===
    var pageWrapper = document.createElement('div');
    pageWrapper.className = 'bw-page';
    var card = document.createElement('div');
    card.className = 'bw-card';
    pageWrapper.appendChild(card);

    var target = document.currentScript || document.scripts[document.scripts.length - 1];
    target.parentNode.insertBefore(pageWrapper, target.nextSibling);

    // Initial render
    render();
})();

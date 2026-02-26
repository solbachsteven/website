// Freebie Kurs - Lektion 4: Deine drei Saetze festhalten (Standalone)
// Laedt Engine fuer Base-CSS, rendert selbst (Form + Pinwand Interaktionslogik)
// <script src="https://solbachsteven.github.io/website/freebie-kurs/fk-l4.js"></script>
(function() {
    if (window.__FK_L4) return;
    window.__FK_L4 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    // Turnstile Site Key (Production, Domain: solbachsteven.systeme.io)
    var TURNSTILE_SITE_KEY = '0x4AAAAAACirN6RQ4esyh2z2';

    var LESSON_DATA = {
        meta: {
            chapter: 0,
            lesson: 4,
            label: "ABSCHLUSS",
            title: "Deine drei S\u00e4tze festhalten",
            subtitle: ""
        },
        sections: [
            {
                type: "text",
                content: "Du hast drei S\u00e4tze formuliert. Zusammen beschreiben sie etwas, das die meisten Menschen nie in Worte fassen."
            },
            { type: "divider" },
            {
                type: "heading",
                level: 2,
                content: "Halte sie fest"
            },
            {
                type: "text",
                content: "Trag deine drei S\u00e4tze hier ein - so, wie sie gerade sind. Sie m\u00fcssen nicht perfekt sein. Sie m\u00fcssen wahr sein."
            },
            {
                type: "form",
                fields: [
                    { label: "Mein Warum - was mich antreibt", placeholder: "Was mich antreibt ist ...", color: "warm" },
                    { label: "Die Welt, in der ich leben m\u00f6chte", placeholder: "Ich m\u00f6chte in einer Welt leben, in der ...", color: "teal" },
                    { label: "Wie ich dazu beitragen m\u00f6chte", placeholder: "Mein Beitrag zu dieser Welt ist ...", color: "lilac" }
                ],
                submitText: "Auf die Pinwand setzen"
            },
            { type: "divider" },
            {
                type: "heading",
                level: 2,
                content: "Die Pinwand"
            },
            {
                type: "text",
                content: "Wenn du deine S\u00e4tze einreichst, erscheinst du auf der Pinwand - zusammen mit allen anderen, die diesen Kurs gemacht haben."
            },
            {
                type: "pinwall"
            },
            {
                type: "text",
                content: "Kein Ranking, kein Wettbewerb. Einfach Menschen, die sich getraut haben, hinzuschauen. Vielleicht erkennst du dich in jemandem wieder. Vielleicht inspiriert dich eine Vision, an die du selbst noch nicht gedacht hast."
            }
        ]
    };

    function init() {
        // === L4-SPECIFIC CSS (Form + Pinwall) ===
        var l4style = document.createElement('style');
        l4style.setAttribute('data-section', 'fk-l4');
        l4style.textContent = '\
/* --- Form --- */\n\
.lesson-form { background: var(--lesson-bg-box); border-radius: var(--lesson-radius); padding: 36px; margin: 30px 0; }\n\
.lesson-form-field { margin-bottom: 14px; }\n\
.lesson-form-field:last-of-type { margin-bottom: 20px; }\n\
.lesson-form-label { font-size: 14px; font-weight: 500; color: var(--lesson-gold); margin-bottom: 8px; display: block; }\n\
.lesson-form-field[data-color="warm"]  .lesson-form-label { color: #C87070; }\n\
.lesson-form-field[data-color="teal"]  .lesson-form-label { color: #7FB3B3; }\n\
.lesson-form-field[data-color="lilac"] .lesson-form-label { color: #B89FD4; }\n\
.lesson-form-field[data-color="warm"]  .lesson-form-textarea:focus { border-color: #BC8034; }\n\
.lesson-form-field[data-color="teal"]  .lesson-form-textarea:focus { border-color: #5B8A8A; }\n\
.lesson-form-field[data-color="lilac"] .lesson-form-textarea:focus { border-color: #8B6DAF; }\n\
.lesson-form-textarea { width: 100%; min-height: 80px; background: rgba(255,255,255,0.06); border: 1px solid rgba(188,128,52,0.3); border-radius: 10px; padding: 14px 16px; font-family: var(--lesson-font); font-size: 16px; font-weight: 300; line-height: 1.6; color: var(--lesson-white); resize: none; overflow: hidden; transition: border-color 0.2s; }\n\
.lesson-form-textarea::placeholder { color: rgba(255,255,255,0.3); }\n\
.lesson-form-textarea:focus { outline: none; border-color: var(--lesson-gold); }\n\
.lesson-form-submit { display: block; width: 100%; padding: 16px; background: var(--lesson-gold); color: var(--lesson-dark); border: none; border-radius: 10px; font-family: var(--lesson-font); font-size: 16px; font-weight: 600; cursor: pointer; transition: opacity 0.2s, transform 0.1s; }\n\
@media (hover: hover) { .lesson-form-submit:hover { opacity: 0.9; } }\n\
.lesson-form-submit:active { transform: scale(0.98); }\n\
.lesson-form-submit:disabled { opacity: 0.5; cursor: not-allowed; }\n\
.lesson-form-success { text-align: center; padding: 30px; display: none; }\n\
.lesson-form-success.show { display: block; animation: lesson-fade 0.5s ease; }\n\
.lesson-form-success-text { font-family: var(--lesson-font-hand); font-size: 30px; color: var(--lesson-gold); }\n\
/* --- Name Input --- */\n\
.lesson-form-name { width: 100%; background: rgba(255,255,255,0.06); border: 1px solid rgba(188,128,52,0.3); border-radius: 10px; padding: 14px 16px; font-family: var(--lesson-font-hand); font-size: 22px; font-weight: 500; color: var(--lesson-white); transition: border-color 0.2s; }\n\
.lesson-form-name::placeholder { color: rgba(255,255,255,0.3); }\n\
.lesson-form-name:focus { outline: none; border-color: var(--lesson-gold); }\n\
/* --- Farbwahl --- */\n\
.lesson-form-colors { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }\n\
.lesson-form-colors-label { font-size: 14px; font-weight: 500; color: var(--lesson-gold); margin-bottom: 8px; display: block; }\n\
.lesson-form-color-dot { width: 36px; height: 28px; border-radius: 6px; border: 2px solid transparent; cursor: pointer; transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s; position: relative; }\n\
@media (hover: hover) { .lesson-form-color-dot:hover { transform: scale(1.1); } }\n\
.lesson-form-color-dot.selected { border-color: var(--lesson-white); box-shadow: 0 0 12px rgba(255,255,255,0.2); transform: scale(1.1); }\n\
.lesson-form-divider { border: none; height: 1px; background: rgba(188,128,52,0.15); margin: 8px 0 24px; }\n\
/* --- Zeichenzaehler --- */\n\
.lesson-form-field-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 6px; min-height: 18px; }\n\
.lesson-form-charcount { font-size: 11px; font-weight: 300; color: rgba(255,255,255,0.25); transition: color 0.2s; margin-left: auto; }\n\
.lesson-form-charcount.active { color: rgba(255,255,255,0.4); }\n\
.lesson-form-charcount.warn { color: #C87070; }\n\
.lesson-form-hint { font-size: 11px; font-weight: 300; color: #C87070; opacity: 0; transition: opacity 0.3s; }\n\
.lesson-form-hint.show { opacity: 0.7; }\n\
\n\
/* --- Pinwall --- */\n\
.lesson-pinwall { margin: 30px 0; }\n\
.lesson-pinwall-empty { background: var(--lesson-bg-box); border-radius: var(--lesson-radius); padding: 50px 30px; text-align: center; border: 1px dashed rgba(188,128,52,0.3); }\n\
.lesson-pinwall-empty-text { font-size: 15px; font-weight: 300; opacity: 0.5; line-height: 1.6; }\n\
.lesson-pinwall-grid { column-count: 3; column-gap: 18px; width: 100%; }\n\
.lesson-pinwall-card { background: linear-gradient(135deg, #3D3736 0%, #353030 100%); border-radius: var(--lesson-radius); padding: 28px 28px 24px; break-inside: avoid; margin-bottom: 18px; cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease; opacity: 0; transform: translateY(15px); position: relative; }\n\
.lesson-pinwall-card.visible { opacity: 1; transform: translateY(0); transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease; }\n\
@media (hover: hover) {\n\
.lesson-pinwall-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.35); }\n\
.lesson-pinwall-card.visible:hover { transform: translateY(-4px); }\n\
}\n\
.lesson-pinwall-card-name { font-family: var(--lesson-font-hand); font-size: 24px; font-weight: 500; color: var(--lesson-gold); margin-bottom: 14px; display: flex; align-items: center; justify-content: space-between; line-height: 1.2; }\n\
.lesson-pinwall-card-toggle { width: 26px; height: 26px; border-radius: 50%; border: 1px solid rgba(188,128,52,0.3); background: transparent; flex-shrink: 0; margin-left: 10px; position: relative; transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease; }\n\
.lesson-pinwall-card-toggle::before, .lesson-pinwall-card-toggle::after { content: \"\"; position: absolute; top: 50%; left: 50%; background: var(--lesson-gold); border-radius: 1px; transition: transform 0.3s ease, opacity 0.3s ease; }\n\
.lesson-pinwall-card-toggle::before { width: 10px; height: 1.5px; transform: translate(-50%, -50%); }\n\
.lesson-pinwall-card-toggle::after { width: 1.5px; height: 10px; transform: translate(-50%, -50%); }\n\
@media (hover: hover) { .lesson-pinwall-card:hover .lesson-pinwall-card-toggle { border-color: rgba(188,128,52,0.6); } }\n\
.lesson-pinwall-card.open .lesson-pinwall-card-toggle { border-color: var(--lesson-gold); background: rgba(188,128,52,0.1); transform: rotate(90deg); }\n\
.lesson-pinwall-card.open .lesson-pinwall-card-toggle::after { opacity: 0; transform: translate(-50%, -50%) scaleY(0); }\n\
.lesson-pinwall-card-label { font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 6px; opacity: 0.9; }\n\
.lesson-pinwall-card-label.gold { color: #BC8034; }\n\
.lesson-pinwall-card-label.teal { color: #7FB3B3; }\n\
.lesson-pinwall-card-label.rose { color: #C87070; }\n\
.lesson-pinwall-card-satz { font-size: 15px; font-weight: 300; line-height: 1.6; color: var(--lesson-white); opacity: 0.85; margin-bottom: 12px; }\n\
.lesson-pinwall-card-satz:last-child { margin-bottom: 0; }\n\
.lesson-pinwall-card-hidden { max-height: 0; overflow: hidden; opacity: 0; transition: max-height 0.4s ease, opacity 0.3s ease, margin 0.3s ease; margin-top: 0; }\n\
.lesson-pinwall-card.open .lesson-pinwall-card-hidden { max-height: 600px; opacity: 1; margin-top: 12px; }\n\
.lesson-pinwall-card-divider { height: 1px; background: linear-gradient(90deg, rgba(188,128,52,0.3) 0%, rgba(188,128,52,0.05) 100%); margin: 0 0 14px 0; }\n\
.lesson-pinwall-counter { text-align: center; font-size: 13px; font-weight: 300; color: var(--lesson-white); opacity: 0.4; margin-top: 20px; margin-bottom: 4px; letter-spacing: 0.5px; }\n\
.lesson-pinwall-card-badge { position: absolute; bottom: 10px; right: 14px; font-size: 9px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; color: var(--lesson-white); opacity: 0.25; }\n\
.lesson-pinwall-loadmore { display: block; margin: 28px auto 0; padding: 14px 44px; background: transparent; color: var(--lesson-gold); border: 1px solid rgba(188,128,52,0.3); border-radius: 10px; font-family: var(--lesson-font); font-size: 14px; font-weight: 400; cursor: pointer; letter-spacing: 0.5px; transition: background 0.3s, border-color 0.3s, transform 0.2s; }\n\
@media (hover: hover) { .lesson-pinwall-loadmore:hover { background: rgba(188,128,52,0.08); border-color: var(--lesson-gold); transform: translateY(-1px); } }\n\
@keyframes lesson-fade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }\n\
@keyframes lesson-highlight-pulse { 0% { box-shadow: 0 0 0 0 rgba(188,128,52,0.4); } 50% { box-shadow: 0 0 24px 4px rgba(188,128,52,0.3); } 100% { box-shadow: 0 0 0 0 rgba(188,128,52,0); } }\n\
.lesson-pinwall-card.highlight { animation: lesson-highlight-pulse 1.5s ease 2; }\n\
/* --- Founder Card --- */\n\
.lesson-pinwall-card-founder { border: 1px solid rgba(188,128,52,0.35); box-shadow: 0 0 20px rgba(188,128,52,0.08); }\n\
.lesson-pinwall-card-founder .lesson-pinwall-card-badge.founder-badge { color: var(--lesson-gold); opacity: 0.5; }\n\
\n\
/* --- L4 Responsive --- */\n\
@media (max-width: 900px) {\n\
    .lesson-pinwall-grid { column-count: 2; column-gap: 14px; }\n\
}\n\
@media (max-width: 650px) {\n\
    .lesson-form { padding: 24px 20px; }\n\
    .lesson-pinwall-grid { column-count: 2; column-gap: 10px; }\n\
    .lesson-pinwall-card { padding: 16px 16px 14px; margin-bottom: 10px; border-radius: 12px; }\n\
    .lesson-pinwall-card-name { font-size: 20px; margin-bottom: 8px; }\n\
    .lesson-pinwall-card-label { font-size: 10px; margin-bottom: 3px; letter-spacing: 0.8px; }\n\
    .lesson-pinwall-card-satz { font-size: 13px; line-height: 1.5; margin-bottom: 8px; }\n\
    .lesson-pinwall-card-toggle { width: 22px; height: 22px; }\n\
    .lesson-pinwall-card-toggle::before { width: 8px; }\n\
    .lesson-pinwall-card-toggle::after { height: 8px; }\n\
    .lesson-pinwall-card-hidden { transition: max-height 0.3s ease, opacity 0.25s ease; }\n\
    .lesson-pinwall-loadmore { padding: 12px 32px; font-size: 13px; }\n\
}\n\
@media (max-width: 380px) {\n\
    .lesson-pinwall-card { padding: 14px 14px 12px; }\n\
    .lesson-pinwall-card-name { font-size: 18px; }\n\
    .lesson-pinwall-card-satz { font-size: 12px; }\n\
}\n\
@media (prefers-reduced-motion: reduce) { .lesson-pinwall-card-hidden { transition: none !important; } }\n\
';
        document.head.appendChild(l4style);

        // Load Turnstile Script
        if (!document.querySelector('script[src*="turnstile"]')) {
            var ts = document.createElement('script');
            ts.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
            ts.async = true;
            document.head.appendChild(ts);
        }

        // === RENDER ===
        var data = LESSON_DATA;

        var section = document.createElement('section');
        section.className = 'lesson-section';
        var container = document.createElement('div');
        container.className = 'lesson-container';

        var header = document.createElement('div');
        header.className = 'lesson-header';
        header.innerHTML =
            '<div class="lesson-label">' + data.meta.label + '</div>' +
            '<h1 class="lesson-title">' + data.meta.title + '</h1>' +
            (data.meta.subtitle ? '<p class="lesson-subtitle">' + data.meta.subtitle + '</p>' : '');
        container.appendChild(header);

        var blocks = [];

        data.sections.forEach(function(s) {
            var el;
            switch (s.type) {
                case 'text':
                    el = document.createElement('p');
                    el.className = 'lesson-block lesson-text';
                    el.innerHTML = s.content;
                    break;
                case 'heading':
                    var tag = s.level === 3 ? 'h3' : 'h2';
                    el = document.createElement(tag);
                    el.className = 'lesson-block lesson-h' + (s.level || 2);
                    el.innerHTML = s.content;
                    break;
                case 'callout':
                    el = document.createElement('div');
                    el.className = 'lesson-block lesson-callout';
                    el.innerHTML = s.content;
                    break;
                case 'form':
                    el = document.createElement('div');
                    el.className = 'lesson-block lesson-form';
                    var NAME_COLORS = [
                        { id: 'rose', hex: '#C87070', label: 'Rot' },
                        { id: 'gold', hex: '#BC8034', label: 'Gold' },
                        { id: 'green', hex: '#6BAF7B', label: 'Gr\u00fcn' },
                        { id: 'teal', hex: '#7FB3B3', label: 'Teal' },
                        { id: 'indigo', hex: '#7B8FC7', label: 'Indigo' },
                        { id: 'violet', hex: '#B89FD4', label: 'Violett' }
                    ];
                    var colorDotsHTML = NAME_COLORS.map(function(c) {
                        return '<div class="lesson-form-color-dot" data-color-id="' + c.id + '" data-color-hex="' + c.hex + '" style="background:' + c.hex + ';" title="' + c.label + '"></div>';
                    }).join('');
                    var formHTML = '<div class="lesson-form-field lesson-form-name-field">' +
                        '<label class="lesson-form-label">Dein Name</label>' +
                        '<input type="text" class="lesson-form-name" placeholder="Name" maxlength="50">' +
                    '</div>' +
                    '<div class="lesson-form-field">' +
                        '<label class="lesson-form-colors-label">Deine Farbe auf der Pinwand</label>' +
                        '<div class="lesson-form-colors">' + colorDotsHTML + '</div>' +
                    '</div>' +
                    '<hr class="lesson-form-divider">';
                    s.fields.forEach(function(field, i) {
                        var colorAttr = field.color ? ' data-color="' + field.color + '"' : '';
                        formHTML +=
                            '<div class="lesson-form-field"' + colorAttr + '>' +
                                '<label class="lesson-form-label">' + field.label + '</label>' +
                                '<textarea class="lesson-form-textarea" data-idx="' + i + '" placeholder="' + field.placeholder + '" maxlength="500"></textarea>' +
                                '<div class="lesson-form-field-footer">' +
                                    '<span class="lesson-form-hint" data-idx="' + i + '">Mindestens ein ganzer Satz</span>' +
                                    '<span class="lesson-form-charcount" data-idx="' + i + '">0 / 500</span>' +
                                '</div>' +
                            '</div>';
                    });
                    formHTML += '<div id="lesson-turnstile"></div>';
                    formHTML += '<button class="lesson-form-submit">' + s.submitText + '</button>';
                    formHTML += '<div class="lesson-form-success"><div class="lesson-form-success-text">Deine S\u00e4tze sind auf der Pinwand!</div></div>';
                    el.innerHTML = formHTML;

                    // Turnstile invisible Widget
                    var turnstileWidgetId = null;
                    var turnstileToken = '';
                    var turnstileRetries = 0;
                    function initTurnstile() {
                        if (typeof turnstile !== 'undefined' && document.getElementById('lesson-turnstile')) {
                            turnstileWidgetId = turnstile.render('#lesson-turnstile', {
                                sitekey: TURNSTILE_SITE_KEY,
                                size: 'invisible',
                                callback: function(token) { turnstileToken = token; }
                            });
                        } else if (turnstileRetries < 15) {
                            turnstileRetries++;
                            setTimeout(initTurnstile, 200);
                        }
                    }
                    setTimeout(initTurnstile, 100);

                    // Farbwahl
                    var selectedColor = 'gold';
                    var colorDots = el.querySelectorAll('.lesson-form-color-dot');
                    colorDots.forEach(function(dot) {
                        if (dot.dataset.colorId === 'gold') dot.classList.add('selected');
                        dot.addEventListener('click', function() {
                            colorDots.forEach(function(d) { d.classList.remove('selected'); });
                            dot.classList.add('selected');
                            selectedColor = dot.dataset.colorId;
                            var nameInput = el.querySelector('.lesson-form-name');
                            if (nameInput) nameInput.style.color = dot.dataset.colorHex;
                        });
                    });

                    // Zeichenzaehler + Auto-Expand
                    var textareas = el.querySelectorAll('.lesson-form-textarea');
                    textareas.forEach(function(ta) {
                        var idx = ta.dataset.idx;
                        var counter = el.querySelector('.lesson-form-charcount[data-idx="' + idx + '"]');
                        var hint = el.querySelector('.lesson-form-hint[data-idx="' + idx + '"]');
                        function updateCounter() {
                            var len = ta.value.length;
                            if (counter) {
                                counter.textContent = len + ' / 500';
                                counter.classList.toggle('active', len > 0);
                                counter.classList.toggle('warn', len > 450);
                            }
                            if (hint) {
                                hint.classList.toggle('show', len > 0 && len < 20);
                            }
                        }
                        function autoExpand() {
                            ta.style.height = 'auto';
                            ta.style.height = Math.max(80, ta.scrollHeight) + 'px';
                        }
                        ta.addEventListener('input', function() { updateCounter(); autoExpand(); });
                        ta.addEventListener('focus', function() {
                            if (hint && ta.value.length > 0 && ta.value.length < 20) hint.classList.add('show');
                        });
                        ta.addEventListener('blur', function() {
                            if (hint && ta.value.length >= 20) hint.classList.remove('show');
                        });
                    });

                    // Auto-Save Draft (localStorage)
                    var DRAFT_KEY = 'win3-pinwall-draft';
                    var firstNameInput = el.querySelector('.lesson-form-name');
                    function saveDraft() {
                        try {
                            var draft = { firstName: firstNameInput ? firstNameInput.value : '', nameColor: selectedColor, fields: [] };
                            textareas.forEach(function(ta) { draft.fields.push(ta.value); });
                            localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
                        } catch(e) {}
                    }
                    function loadDraft() {
                        try {
                            var saved = localStorage.getItem(DRAFT_KEY);
                            if (!saved) return;
                            var draft = JSON.parse(saved);
                            if (draft.firstName && firstNameInput) firstNameInput.value = draft.firstName;
                            if (draft.nameColor) {
                                selectedColor = draft.nameColor;
                                colorDots.forEach(function(d) { d.classList.toggle('selected', d.dataset.colorId === draft.nameColor); });
                                if (firstNameInput && draft.nameColor) {
                                    var colorHex = NAME_COLORS.find(function(c) { return c.id === draft.nameColor; });
                                    if (colorHex) firstNameInput.style.color = colorHex.hex;
                                }
                            }
                            if (draft.fields) {
                                textareas.forEach(function(ta, i) {
                                    if (draft.fields[i]) {
                                        ta.value = draft.fields[i];
                                        ta.dispatchEvent(new Event('input'));
                                    }
                                });
                            }
                        } catch(e) {}
                    }
                    function clearDraft() {
                        try { localStorage.removeItem(DRAFT_KEY); } catch(e) {}
                    }
                    loadDraft();
                    if (firstNameInput) firstNameInput.addEventListener('input', saveDraft);
                    textareas.forEach(function(ta) { ta.addEventListener('input', saveDraft); });
                    colorDots.forEach(function(dot) { dot.addEventListener('click', function() { setTimeout(saveDraft, 50); }); });

                    var submitBtn = el.querySelector('.lesson-form-submit');
                    var successEl = el.querySelector('.lesson-form-success');
                    submitBtn.addEventListener('click', function() {
                        var allFilled = true;
                        var tooShort = false;
                        textareas.forEach(function(ta) {
                            if (!ta.value.trim()) allFilled = false;
                            else if (ta.value.trim().length < 20) tooShort = true;
                        });
                        if (!allFilled) {
                            submitBtn.textContent = 'Bitte alle Felder ausf\u00fcllen';
                            setTimeout(function() { submitBtn.textContent = s.submitText; }, 2000);
                            return;
                        }
                        if (tooShort) {
                            submitBtn.textContent = 'Bitte schreib ganze S\u00e4tze';
                            setTimeout(function() { submitBtn.textContent = s.submitText; }, 2000);
                            return;
                        }

                        submitBtn.disabled = true;
                        submitBtn.textContent = 'Wird gesendet\u2026';

                        var firstName = firstNameInput ? firstNameInput.value.trim() : '';
                        if (!firstName) {
                            submitBtn.disabled = false;
                            submitBtn.textContent = 'Bitte trag deinen Namen ein';
                            setTimeout(function() { submitBtn.textContent = s.submitText; }, 2000);
                            return;
                        }

                        var currentToken = turnstileToken || (typeof turnstile !== 'undefined' && turnstileWidgetId ? turnstile.getResponse(turnstileWidgetId) : '');

                        fetch('https://win3-community.solbachsteven.workers.dev/pinwall/submit', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                firstName: firstName,
                                nameColor: selectedColor,
                                turnstileToken: currentToken,
                                satzWarum: textareas[0].value.trim(),
                                satzVision: textareas[1].value.trim(),
                                satzMission: textareas[2].value.trim()
                            })
                        })
                        .then(function(res) {
                            if (res.status === 429) {
                                submitBtn.disabled = false;
                                submitBtn.textContent = 'Du hast heute schon mitgemacht - morgen wieder!';
                                setTimeout(function() { submitBtn.textContent = s.submitText; }, 4000);
                                return;
                            }
                            if (!res.ok) {
                                return res.json().then(function(data) {
                                    throw new Error(data.error || 'Fehler beim Senden');
                                });
                            }
                            submitBtn.style.display = 'none';
                            if (firstNameInput) firstNameInput.disabled = true;
                            textareas.forEach(function(ta) { ta.disabled = true; ta.style.opacity = '0.6'; });
                            var nameColor = COLOR_MAP[selectedColor] || COLOR_MAP.gold;
                            var successTextEl = successEl.querySelector('.lesson-form-success-text');
                            if (successTextEl) {
                                successTextEl.innerHTML = '<span style="color:' + nameColor + '">' + escapeHtml(firstName) + '</span>, deine S\u00e4tze sind auf der Pinwand!';
                            }
                            successEl.classList.add('show');
                            clearDraft();
                            if (typeof turnstile !== 'undefined' && turnstileWidgetId) {
                                turnstile.reset(turnstileWidgetId);
                                turnstileToken = '';
                            }
                            var submittedName = firstName;
                            loadPinwall(function() {
                                setTimeout(function() {
                                    var cards = document.querySelectorAll('.lesson-pinwall-card');
                                    for (var ci = 0; ci < cards.length; ci++) {
                                        var cardName = cards[ci].querySelector('.lesson-pinwall-card-name');
                                        if (cardName && cardName.textContent.trim().replace(/\s+/g, ' ').indexOf(submittedName) === 0) {
                                            cards[ci].classList.add('highlight');
                                            cards[ci].scrollIntoView({ behavior: 'smooth', block: 'center' });
                                            if (window.self !== window.top) {
                                                try {
                                                    var rect = cards[ci].getBoundingClientRect();
                                                    var iframeEl = window.frameElement;
                                                    if (iframeEl) {
                                                        var iframeRect = iframeEl.getBoundingClientRect();
                                                        window.parent.scrollTo({
                                                            top: window.parent.scrollY + iframeRect.top + rect.top - (window.parent.innerHeight / 2),
                                                            behavior: 'smooth'
                                                        });
                                                    }
                                                } catch(e) {}
                                            }
                                            break;
                                        }
                                    }
                                }, 300);
                            });
                        })
                        .catch(function(err) {
                            submitBtn.disabled = false;
                            submitBtn.textContent = err.message || 'Fehler - bitte erneut versuchen';
                            setTimeout(function() { submitBtn.textContent = s.submitText; }, 3000);
                            if (typeof turnstile !== 'undefined' && turnstileWidgetId) {
                                turnstile.reset(turnstileWidgetId);
                                turnstileToken = '';
                            }
                        });
                    });
                    break;
                case 'pinwall':
                    el = document.createElement('div');
                    el.className = 'lesson-block lesson-pinwall';
                    el.id = 'lesson-pinwall';
                    el.innerHTML = '<div class="lesson-pinwall-empty"><div class="lesson-pinwall-empty-text">Pinwand wird geladen\u2026</div></div>';
                    break;
                case 'divider':
                    el = document.createElement('hr');
                    el.className = 'lesson-block lesson-divider';
                    break;
                default:
                    return;
            }
            container.appendChild(el);
            blocks.push(el);
        });

        // === PINWALL HELPERS ===
        function escapeHtml(str) {
            var div = document.createElement('div');
            div.appendChild(document.createTextNode(str));
            return div.innerHTML;
        }

        var PINWALL_PAGE_SIZE = 9;
        var pinwallAllEntries = [];
        var pinwallShown = 0;
        var pinwallOpenCards = [];

        var COLOR_MAP = {
            rose: '#C87070', orange: '#D4956A', gold: '#BC8034',
            green: '#6BAF7B', teal: '#7FB3B3', indigo: '#7B8FC7', violet: '#B89FD4'
        };

        function togglePinwallCard(card) {
            if (card.classList.contains('open')) {
                card.classList.remove('open');
                pinwallOpenCards = pinwallOpenCards.filter(function(c) { return c !== card; });
            } else {
                if (pinwallOpenCards.length >= 2) {
                    pinwallOpenCards[0].classList.remove('open');
                    pinwallOpenCards.shift();
                }
                card.classList.add('open');
                pinwallOpenCards.push(card);
            }
        }

        function buildCardHTML(e) {
            var isFounder = e.is_example === 2;
            var badgeHTML = isFounder ? '<span class="lesson-pinwall-card-badge founder-badge">Kursleiter</span>' : (e.is_example ? '<span class="lesson-pinwall-card-badge">Beispiel</span>' : '');
            var nameColor = COLOR_MAP[e.name_color] || COLOR_MAP.gold;
            var founderClass = isFounder ? ' lesson-pinwall-card-founder' : '';
            return '<div class="lesson-pinwall-card' + founderClass + '">' +
                badgeHTML +
                '<div class="lesson-pinwall-card-name" style="color:' + nameColor + '">' +
                    escapeHtml(e.first_name) +
                    '<span class="lesson-pinwall-card-toggle"></span>' +
                '</div>' +
                '<div class="lesson-pinwall-card-satz">' + escapeHtml(e.satz_mission) + '</div>' +
                '<div class="lesson-pinwall-card-hidden">' +
                    '<div class="lesson-pinwall-card-divider"></div>' +
                    '<div class="lesson-pinwall-card-label teal">Meine Vision</div>' +
                    '<div class="lesson-pinwall-card-satz">' + escapeHtml(e.satz_vision) + '</div>' +
                    '<div class="lesson-pinwall-card-divider"></div>' +
                    '<div class="lesson-pinwall-card-label rose">Mein Warum</div>' +
                    '<div class="lesson-pinwall-card-satz">' + escapeHtml(e.satz_warum) + '</div>' +
                '</div>' +
            '</div>';
        }

        function revealCardsSequentially(gridContainer) {
            var cards = gridContainer.querySelectorAll('.lesson-pinwall-card:not(.visible)');
            requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                    for (var i = 0; i < cards.length; i++) {
                        (function(card, delay) {
                            setTimeout(function() { card.classList.add('visible'); }, delay);
                        })(cards[i], i * 60);
                    }
                });
            });
        }

        function renderPinwallCards(entries, targetEl) {
            if (!entries || entries.length === 0) {
                targetEl.innerHTML = '<div class="lesson-pinwall-empty"><div class="lesson-pinwall-empty-text">Sei der Erste, der seine S\u00e4tze auf die Pinwand setzt!</div></div>';
                return;
            }
            pinwallAllEntries = entries;
            pinwallShown = 0;
            pinwallOpenCards = [];

            var gridHTML = '<div class="lesson-pinwall-grid" id="lesson-pinwall-grid"></div>';
            var counterHTML = '<div class="lesson-pinwall-counter" id="lesson-pinwall-counter"></div>';
            var loadMoreHTML = entries.length > PINWALL_PAGE_SIZE ?
                '<button class="lesson-pinwall-loadmore" id="lesson-pinwall-loadmore">Mehr anzeigen</button>' : '';

            targetEl.innerHTML = gridHTML + counterHTML + loadMoreHTML;

            var grid = document.getElementById('lesson-pinwall-grid');
            showMoreCards(grid);

            grid.addEventListener('click', function(ev) {
                var card = ev.target.closest('.lesson-pinwall-card');
                if (card) togglePinwallCard(card);
            });

            var loadMoreBtn = document.getElementById('lesson-pinwall-loadmore');
            if (loadMoreBtn) {
                loadMoreBtn.addEventListener('click', function() {
                    showMoreCards(grid);
                    if (pinwallShown >= pinwallAllEntries.length) {
                        loadMoreBtn.style.display = 'none';
                    }
                });
            }
        }

        function showMoreCards(grid) {
            var end = Math.min(pinwallShown + PINWALL_PAGE_SIZE, pinwallAllEntries.length);
            var fragment = '';
            for (var i = pinwallShown; i < end; i++) {
                fragment += buildCardHTML(pinwallAllEntries[i]);
            }
            grid.insertAdjacentHTML('beforeend', fragment);
            pinwallShown = end;
            revealCardsSequentially(grid);

            var counter = document.getElementById('lesson-pinwall-counter');
            if (counter) {
                counter.textContent = pinwallShown + ' von ' + pinwallAllEntries.length + ' angezeigt';
            }
        }

        function loadPinwall(callback) {
            var pinwallEl = document.getElementById('lesson-pinwall');
            if (!pinwallEl) return;

            fetch('https://win3-community.solbachsteven.workers.dev/pinwall/entries')
            .then(function(res) { return res.json(); })
            .then(function(data) {
                renderPinwallCards(data.entries || [], pinwallEl);
                if (typeof callback === 'function') callback();
            })
            .catch(function() {
                pinwallEl.innerHTML = '<div class="lesson-pinwall-empty"><div class="lesson-pinwall-empty-text">Die Pinwand konnte nicht geladen werden. Bitte lade die Seite neu.</div></div>';
            });
        }

        // === DOM INSERT ===
        section.appendChild(container);
        if (anchor) {
            anchor.parentNode.insertBefore(section, anchor.nextSibling);
        } else {
            document.body.appendChild(section);
        }

        // Load Pinwall
        loadPinwall();

        // Make all elements visible immediately (L4 needs this for pinwall interaction)
        header.classList.add('visible');
        blocks.forEach(function(b) { b.classList.add('visible'); });
    }

    // === LOAD ENGINE (for base CSS) THEN INIT ===
    if (window.__FK_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://solbachsteven.github.io/website/freebie-kurs/fk-engine.js';
    s.onload = init;
    s.onerror = function() {
        // Fallback: init without engine (base CSS might be missing, but form/pinwall works)
        console.warn('[FK-L4] Engine konnte nicht geladen werden, lade ohne Base-CSS.');
        init();
    };
    document.head.appendChild(s);
})();

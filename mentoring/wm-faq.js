// Win\u00b3 Mentoring Landingpage - FAQ Section (Standalone)
// Accordion mit h\u00e4ufigen Fragen zum Mentoring
// Loaded via: <script src="https://solbachsteven.github.io/website/mentoring/wm-faq.js"></script>
(function() {
    if (window.__WM_FAQ_LOADED) return;
    window.__WM_FAQ_LOADED = true;

    // === SHARED RESOURCES (idempotent) ===
    if (!window.__WM_SHARED) {
        window.__WM_SHARED = true;
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap';
        document.head.appendChild(fontLink);
        var baseStyle = document.createElement('style');
        baseStyle.setAttribute('data-section', 'wm-base');
        baseStyle.textContent = `.wm-page{width:100vw;margin-left:calc(-50vw + 50%);font-family:'Poppins',sans-serif;color:#FFFFFF;background:#1A1A1A;overflow-x:hidden;position:relative;z-index:5}.wm-page *,.wm-page *::before,.wm-page *::after{box-sizing:border-box;margin:0;padding:0}.wm-fade{opacity:0;transform:translateY(30px);transition:opacity .6s ease,transform .6s ease}.wm-fade.visible{opacity:1;transform:translateY(0)}.wm-cta-primary{display:inline-flex;align-items:center;justify-content:center;font-family:'Poppins',sans-serif;font-size:17px;font-weight:500;color:#FFF;background:#D96935;border:none;border-radius:20px;padding:18px 48px;text-decoration:none;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease;margin-bottom:16px}.wm-cta-primary:hover{transform:translateY(-2px);box-shadow:0 12px 35px rgba(217,105,53,.4)}.wm-trust{font-size:13px;font-weight:300;color:rgba(244,240,236,.5);letter-spacing:.3px}.wm-label{font-size:13px;font-weight:500;letter-spacing:2.5px;text-transform:uppercase;color:#BC8034;margin-bottom:20px}.wm-section-headline{font-size:42px;font-weight:600;line-height:1.2;color:#FFF;margin-bottom:16px}.wm-section-subheadline{font-family:'Caveat',cursive;font-size:24px;color:rgba(244,240,236,.6);margin-bottom:48px}@media(max-width:768px){.wm-cta-primary{font-size:15px;padding:16px 36px;width:100%;max-width:340px}.wm-section-headline{font-size:28px}.wm-section-subheadline{font-size:20px;margin-bottom:36px}}`;
        document.head.appendChild(baseStyle);
    }

    // === FAQ CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wm-faq');
    style.textContent = `
/* ======== FAQ SECTION ======== */
.wm-faq {
    padding: 100px 40px;
    background: #1A1A1A;
}
.wm-faq-inner {
    max-width: 750px;
    margin: 0 auto;
    text-align: center;
}

/* FAQ List */
.wm-faq-list {
    display: flex;
    flex-direction: column;
    gap: 0;
    text-align: left;
    margin-top: 16px;
}

/* FAQ Item */
.wm-faq-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    cursor: pointer;
    transition: background 0.3s ease;
}
.wm-faq-item:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.wm-faq-item:hover {
    background: rgba(255, 255, 255, 0.02);
}

/* Question */
.wm-faq-question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 8px;
    gap: 16px;
}
.wm-faq-question-text {
    font-size: 17px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 1.4;
}

/* Toggle Icon */
.wm-faq-toggle {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
}
.wm-faq-item.open .wm-faq-toggle {
    transform: rotate(180deg);
}
.wm-faq-toggle svg {
    width: 18px;
    height: 18px;
}

/* Answer */
.wm-faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, padding 0.3s ease;
}
.wm-faq-item.open .wm-faq-answer {
    max-height: 300px;
}
.wm-faq-answer-text {
    padding: 0 8px 24px;
    font-size: 15px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.6);
    line-height: 1.7;
}

/* ======== RESPONSIVE ======== */
@media (max-width: 768px) {
    .wm-faq { padding: 60px 16px; }
    .wm-faq-question { padding: 20px 4px; }
    .wm-faq-question-text { font-size: 15px; }
    .wm-faq-answer-text { padding: 0 4px 20px; font-size: 14px; }
}
`;
    document.head.appendChild(style);

    // === SVG ===
    var chevronSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="rgba(244,240,236,0.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

    // === DATA ===
    var data = {
        headline: "H\u00e4ufige Fragen zum Mentoring",
        subheadline: "Alles, was du wissen musst - bevor du dich bewirbst.",
        questions: [
            {
                q: "Wie l\u00e4uft das Bewerbungsgespr\u00e4ch ab?",
                a: "Du f\u00fcllst ein kurzes Formular aus. Wenn ich sehe, dass wir zusammenpassen k\u00f6nnten, melde ich mich f\u00fcr ein kostenfreies Kennenlerngespr\u00e4ch. Kein Verkaufsdruck - nur ein ehrliches Gespr\u00e4ch, ob es f\u00fcr uns beide passt."
            },
            {
                q: "Warum gibt es ein Bewerbungsverfahren?",
                a: "Weil ich mit maximal 8 Menschen gleichzeitig arbeite und jede Zusammenarbeit intensiv ist. Ich will sicherstellen, dass ich dir wirklich helfen kann - und dass du bereit bist f\u00fcr diesen Prozess."
            },
            {
                q: "Was kostet das Mentoring?",
                a: "Die Investition betr\u00e4gt 3.000 Euro f\u00fcr 12 Wochen. Darin enthalten sind alle 1:1 Sessions, der WhatsApp-Support, der vollst\u00e4ndige Win\u00b3 Kurs und dein individueller Fahrplan. Ratenzahlung ist m\u00f6glich."
            },
            {
                q: "Wie finden die Sessions statt?",
                a: "Per Video-Call (Zoom oder Google Meet). Du brauchst nur eine stabile Internetverbindung und einen ruhigen Ort. Die Termine vereinbaren wir flexibel, passend zu deinem Kalender."
            },
            {
                q: "Muss ich den Win\u00b3 Kurs vorher gemacht haben?",
                a: "Nein. Der Kurs ist als Fundament inklusive, aber du musst ihn nicht vorher durchgearbeitet haben. Wir k\u00f6nnen ihn parallel nutzen oder komplett individuell arbeiten - je nachdem, was f\u00fcr dich passt."
            },
            {
                q: "Was passiert nach den 12 Wochen?",
                a: "Du gehst mit einem klaren Fahrplan und den Werkzeugen, die du brauchst. Viele meiner Coachees arbeiten danach selbstst\u00e4ndig weiter. Bei Bedarf gibt es die M\u00f6glichkeit f\u00fcr Einzelsessions."
            },
            {
                q: "Was ist, wenn es zwischen uns nicht passt?",
                a: "Genau daf\u00fcr gibt es das Kennenlerngespr\u00e4ch. Wenn einer von uns das Gef\u00fchl hat, dass es nicht stimmt, sagen wir das ehrlich. Das ist keine Niederlage - das ist Integrit\u00e4t."
            }
        ]
    };

    // === RENDER ===
    var faqHTML = '';
    for (var i = 0; i < data.questions.length; i++) {
        var item = data.questions[i];
        faqHTML +=
            '<div class="wm-faq-item wm-fade">' +
                '<div class="wm-faq-question">' +
                    '<div class="wm-faq-question-text">' + item.q + '</div>' +
                    '<div class="wm-faq-toggle">' + chevronSVG + '</div>' +
                '</div>' +
                '<div class="wm-faq-answer">' +
                    '<div class="wm-faq-answer-text">' + item.a + '</div>' +
                '</div>' +
            '</div>';
    }

    var sectionHTML =
        '<section class="wm-faq">' +
            '<div class="wm-faq-inner">' +
                '<h2 class="wm-section-headline wm-fade">' + data.headline + '</h2>' +
                '<div class="wm-section-subheadline wm-fade">' + data.subheadline + '</div>' +
                '<div class="wm-faq-list">' + faqHTML + '</div>' +
            '</div>' +
        '</section>';

    // === DOM INSERTION ===
    var pageWrapper = document.querySelector('.wm-page');
    if (!pageWrapper) {
        pageWrapper = document.createElement('div');
        pageWrapper.className = 'wm-page';
        var target = document.currentScript || document.scripts[document.scripts.length - 1];
        target.parentNode.insertBefore(pageWrapper, target.nextSibling);
    }
    var temp = document.createElement('div');
    temp.innerHTML = sectionHTML;
    while (temp.firstChild) { pageWrapper.appendChild(temp.firstChild); }

    // === ACCORDION TOGGLE ===
    var items = document.querySelectorAll('.wm-faq-item');
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            var wasOpen = this.classList.contains('open');
            items.forEach(function(it) { it.classList.remove('open'); });
            if (!wasOpen) { this.classList.add('open'); }
        });
    });

    // === SCROLL REVEAL ===
    if (!window.__WM_REVEAL_INIT) {
        window.__WM_REVEAL_INIT = true;
        window.__wmInitReveal = function(container) {
            var fadeEls = container.querySelectorAll('.wm-fade:not(.visible)');
            if ('IntersectionObserver' in window) {
                var observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            var parent = entry.target.parentElement;
                            var siblings = parent.querySelectorAll('.wm-fade');
                            var idx = Array.prototype.indexOf.call(siblings, entry.target);
                            setTimeout(function() { entry.target.classList.add('visible'); }, Math.max(0, idx) * 120);
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });
                fadeEls.forEach(function(el) { observer.observe(el); });
            } else { fadeEls.forEach(function(el) { el.classList.add('visible'); }); }
        };
    }
    setTimeout(function() { window.__wmInitReveal(document.querySelector('.wm-page')); }, 100);
})();

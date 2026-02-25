// Win³ Kurs Landingpage - FAQ Section (Standalone)
// Accordion mit häufigen Fragen
// Loaded via: <script src="https://solbachsteven.github.io/website/win3-kurs/wk-faq.js"></script>
(function() {
    if (window.__WK_FAQ_LOADED) return;
    window.__WK_FAQ_LOADED = true;

    // === SHARED RESOURCES (idempotent) ===
    if (!window.__WK_SHARED) {
        window.__WK_SHARED = true;
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap';
        document.head.appendChild(fontLink);
        var baseStyle = document.createElement('style');
        baseStyle.setAttribute('data-section', 'wk-base');
        baseStyle.textContent = `.wk-page{width:100vw;margin-left:calc(-50vw + 50%);font-family:'Poppins',sans-serif;color:#FFFFFF;background:#1A1A1A;overflow-x:hidden;position:relative;z-index:5}.wk-page *,.wk-page *::before,.wk-page *::after{box-sizing:border-box;margin:0;padding:0}.wk-fade{opacity:0;transform:translateY(30px);transition:opacity .6s ease,transform .6s ease}.wk-fade.visible{opacity:1;transform:translateY(0)}.wk-cta-primary{display:inline-flex;align-items:center;justify-content:center;font-family:'Poppins',sans-serif;font-size:17px;font-weight:500;color:#FFF;background:#D96935;border:none;border-radius:20px;padding:18px 48px;text-decoration:none;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease;margin-bottom:16px}.wk-cta-primary:hover{transform:translateY(-2px);box-shadow:0 12px 35px rgba(217,105,53,.4)}.wk-trust{font-size:13px;font-weight:300;color:rgba(244,240,236,.5);letter-spacing:.3px}.wk-label{font-size:13px;font-weight:500;letter-spacing:2.5px;text-transform:uppercase;color:#BC8034;margin-bottom:20px}.wk-section-headline{font-size:42px;font-weight:600;line-height:1.2;color:#FFF;margin-bottom:16px}.wk-section-subheadline{font-family:'Caveat',cursive;font-size:24px;color:rgba(244,240,236,.6);margin-bottom:48px}@media(max-width:768px){.wk-cta-primary{font-size:15px;padding:16px 36px;width:100%;max-width:340px}.wk-section-headline{font-size:28px}.wk-section-subheadline{font-size:20px;margin-bottom:36px}}`;
        document.head.appendChild(baseStyle);
    }

    // === FAQ CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wk-faq');
    style.textContent = `
/* ======== FAQ SECTION ======== */
.wk-faq {
    padding: 100px 40px;
    background: #1A1A1A;
}
.wk-faq-inner {
    max-width: 750px;
    margin: 0 auto;
    text-align: center;
}

/* FAQ List */
.wk-faq-list {
    display: flex;
    flex-direction: column;
    gap: 0;
    text-align: left;
    margin-top: 16px;
}

/* FAQ Item */
.wk-faq-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    cursor: pointer;
    transition: background 0.3s ease;
}
.wk-faq-item:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.wk-faq-item:hover {
    background: rgba(255, 255, 255, 0.02);
}

/* Question */
.wk-faq-question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 8px;
    gap: 16px;
}
.wk-faq-question-text {
    font-size: 17px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 1.4;
}

/* Toggle Icon */
.wk-faq-toggle {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
}
.wk-faq-item.open .wk-faq-toggle {
    transform: rotate(180deg);
}
.wk-faq-toggle svg {
    width: 18px;
    height: 18px;
}

/* Answer */
.wk-faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, padding 0.3s ease;
}
.wk-faq-item.open .wk-faq-answer {
    max-height: 300px;
}
.wk-faq-answer-text {
    padding: 0 8px 24px;
    font-size: 15px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.6);
    line-height: 1.7;
}

/* ======== RESPONSIVE ======== */
@media (max-width: 768px) {
    .wk-faq { padding: 60px 16px; }
    .wk-faq-question { padding: 20px 4px; }
    .wk-faq-question-text { font-size: 15px; }
    .wk-faq-answer-text { padding: 0 4px 20px; font-size: 14px; }
}
`;
    document.head.appendChild(style);

    // === SVG ===
    var chevronSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="rgba(244,240,236,0.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

    // === DATA ===
    var data = {
        headline: "H\u00e4ufige Fragen",
        subheadline: "Alles, was du wissen musst - bevor du startest.",
        questions: [
            {
                q: "Wie lange habe ich Zugang zum Kurs?",
                a: "Dauerhaft. Du kaufst den Kurs einmal und beh\u00e4ltst den Zugang - inklusive aller zuk\u00fcnftigen Updates. Es gibt kein Ablaufdatum und keinen Zeitdruck."
            },
            {
                q: "Brauche ich Vorkenntnisse?",
                a: "Nein. Der Kurs ist so aufgebaut, dass du bei Null starten kannst. Alles wird Schritt f\u00fcr Schritt erkl\u00e4rt. Was du brauchst: Offenheit und die Bereitschaft, ehrlich hinzuschauen."
            },
            {
                q: "Wie funktioniert der KI-Assistent?",
                a: "Der KI-Assistent ist direkt in den Kurs integriert. Er kennt die Inhalte, versteht deinen Fortschritt und stellt dir Reflexionsfragen, die genau zu deiner aktuellen Phase passen. Wie ein Sparringspartner, der rund um die Uhr verf\u00fcgbar ist."
            },
            {
                q: "Was ist, wenn der Kurs nichts f\u00fcr mich ist?",
                a: "Das kann passieren - und ist v\u00f6llig in Ordnung. Deshalb beschreibe ich oben ehrlich, f\u00fcr wen der Kurs gedacht ist und f\u00fcr wen nicht. Lies dir den Abschnitt durch und entscheide in Ruhe."
            },
            {
                q: "Wie viel Zeit muss ich pro Woche einplanen?",
                a: "Das liegt ganz bei dir. Manche arbeiten den Kurs in wenigen Wochen intensiv durch, andere lassen sich Monate Zeit. Rechne mit 2-4 Stunden pro Woche, wenn du in einem guten Rhythmus bleiben willst."
            },
            {
                q: "Gibt es pers\u00f6nliches Coaching dazu?",
                a: "Der Kurs ist als Selbstlernkurs konzipiert - mit dem KI-Assistenten als deinem Begleiter. Pers\u00f6nliches 1:1-Coaching mit Steven ist separat buchbar, aber nicht Teil des Kurses."
            },
            {
                q: "Kann ich den Kurs auch auf dem Handy machen?",
                a: "Ja. Die Kursplattform ist vollst\u00e4ndig mobil nutzbar. Du kannst jede Lektion und jede \u00dcbung auch unterwegs bearbeiten."
            }
        ]
    };

    // === RENDER ===
    var faqHTML = '';
    for (var i = 0; i < data.questions.length; i++) {
        var item = data.questions[i];
        faqHTML +=
            '<div class="wk-faq-item wk-fade">' +
                '<div class="wk-faq-question">' +
                    '<div class="wk-faq-question-text">' + item.q + '</div>' +
                    '<div class="wk-faq-toggle">' + chevronSVG + '</div>' +
                '</div>' +
                '<div class="wk-faq-answer">' +
                    '<div class="wk-faq-answer-text">' + item.a + '</div>' +
                '</div>' +
            '</div>';
    }

    var sectionHTML =
        '<section class="wk-faq">' +
            '<div class="wk-faq-inner">' +
                '<h2 class="wk-section-headline wk-fade">' + data.headline + '</h2>' +
                '<div class="wk-section-subheadline wk-fade">' + data.subheadline + '</div>' +
                '<div class="wk-faq-list">' + faqHTML + '</div>' +
            '</div>' +
        '</section>';

    // === DOM INSERTION ===
    var pageWrapper = document.querySelector('.wk-page');
    if (!pageWrapper) {
        pageWrapper = document.createElement('div');
        pageWrapper.className = 'wk-page';
        var target = document.currentScript || document.scripts[document.scripts.length - 1];
        target.parentNode.insertBefore(pageWrapper, target.nextSibling);
    }
    var temp = document.createElement('div');
    temp.innerHTML = sectionHTML;
    while (temp.firstChild) { pageWrapper.appendChild(temp.firstChild); }

    // === ACCORDION TOGGLE ===
    var items = document.querySelectorAll('.wk-faq-item');
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            var wasOpen = this.classList.contains('open');
            items.forEach(function(it) { it.classList.remove('open'); });
            if (!wasOpen) { this.classList.add('open'); }
        });
    });

    // === SCROLL REVEAL ===
    if (!window.__WK_REVEAL_INIT) {
        window.__WK_REVEAL_INIT = true;
        window.__wkInitReveal = function(container) {
            var fadeEls = container.querySelectorAll('.wk-fade:not(.visible)');
            if ('IntersectionObserver' in window) {
                var observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            var parent = entry.target.parentElement;
                            var siblings = parent.querySelectorAll('.wk-fade');
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
    setTimeout(function() { window.__wkInitReveal(document.querySelector('.wk-page')); }, 100);
})();

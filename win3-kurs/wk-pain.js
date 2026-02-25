// Win³ Kurs Landingpage - Pain/Problem Section (Standalone)
// Loaded via: <script src="https://solbachsteven.github.io/website/win3-kurs/wk-pain.js"></script>
(function() {
    if (window.__WK_PAIN_LOADED) return;
    window.__WK_PAIN_LOADED = true;

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

    // === PAIN CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wk-pain');
    style.textContent = `
/* ======== PAIN SECTION ======== */
.wk-pain {
    padding: 100px 40px;
    background: #1A1A1A;
}
.wk-pain-inner {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}
.wk-pain-headline {
    font-size: 36px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 12px;
}
.wk-pain-subheadline {
    font-family: 'Caveat', cursive;
    font-size: 24px;
    color: rgba(244, 240, 236, 0.5);
    margin-bottom: 56px;
}
.wk-pain-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-bottom: 56px;
}
.wk-pain-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(188, 128, 52, 0.08);
    border-radius: 20px;
    padding: 32px 28px;
    text-align: left;
    transition: transform 0.3s ease, border-color 0.3s ease;
}
.wk-pain-card:hover {
    transform: translateY(-3px);
    border-color: rgba(188, 128, 52, 0.2);
}
.wk-pain-quote {
    font-family: 'Caveat', cursive;
    font-size: 22px;
    line-height: 1.4;
    color: rgba(244, 240, 236, 0.85);
    margin-bottom: 12px;
}
.wk-pain-quote::before {
    content: '\u201e';
    color: #BC8034;
    font-size: 28px;
    margin-right: 2px;
}
.wk-pain-quote::after {
    content: '\u201c';
    color: #BC8034;
    font-size: 28px;
    margin-left: 2px;
}
.wk-pain-context {
    font-size: 14px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.4);
    line-height: 1.6;
}
.wk-pain-bridge {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.8;
    color: rgba(244, 240, 236, 0.7);
    max-width: 640px;
    margin: 0 auto;
}
.wk-pain-bridge strong {
    color: #BC8034;
    font-weight: 500;
}

/* ======== PAIN RESPONSIVE ======== */
@media (max-width: 1024px) {
    .wk-pain { padding: 80px 30px; }
    .wk-pain-headline { font-size: 30px; }
}
@media (max-width: 768px) {
    .wk-pain { padding: 60px 16px; }
    .wk-pain-headline { font-size: 26px; }
    .wk-pain-grid { grid-template-columns: 1fr; gap: 16px; }
    .wk-pain-card { padding: 24px 20px; }
    .wk-pain-quote { font-size: 20px; }
    .wk-pain-bridge { font-size: 16px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        headline: "Kennst du das?",
        subheadline: "Gedanken, die dich nachts wach halten.",
        painPoints: [
            {
                quote: "Ich funktioniere, aber ich lebe nicht wirklich.",
                context: "Du erf\u00fcllst Erwartungen - die der anderen und deine eigenen. Aber am Ende des Tages bleibt ein Gef\u00fchl, dass da noch etwas fehlt."
            },
            {
                quote: "Ich wei\u00df, was ich nicht will - aber nicht, was ich will.",
                context: "Du sp\u00fcrst deutlich, wovon du weg willst. Aber die Richtung, in die du gehen m\u00f6chtest? Die ist noch unklar."
            },
            {
                quote: "Ich sp\u00fcre, da ist mehr in mir - aber ich komme nicht ran.",
                context: "Unter der Oberfl\u00e4che wartet etwas. Ein Potenzial, eine Berufung. Aber irgendetwas h\u00e4lt dich davon ab, es wirklich zu greifen."
            },
            {
                quote: "Ich habe Angst, am Ende auf ein ungelebtes Leben zur\u00fcckzublicken.",
                context: "Die Jahre vergehen. Und die Frage wird lauter: Was, wenn ich nie herausfinde, wof\u00fcr ich hier bin?"
            }
        ],
        bridge: "Wenn sich einer dieser S\u00e4tze anf\u00fchlt, als h\u00e4ttest du ihn selbst geschrieben - dann bist du hier richtig. <strong>Nicht, weil etwas mit dir nicht stimmt. Sondern weil du bereit bist, ehrlich hinzuschauen.</strong>"
    };

    // === RENDER ===
    var cardsHTML = '';
    for (var i = 0; i < data.painPoints.length; i++) {
        var p = data.painPoints[i];
        cardsHTML +=
            '<div class="wk-pain-card wk-fade">' +
                '<div class="wk-pain-quote">' + p.quote + '</div>' +
                '<div class="wk-pain-context">' + p.context + '</div>' +
            '</div>';
    }

    var sectionHTML =
        '<section class="wk-pain">' +
            '<div class="wk-pain-inner">' +
                '<h2 class="wk-pain-headline wk-fade">' + data.headline + '</h2>' +
                '<div class="wk-pain-subheadline wk-fade">' + data.subheadline + '</div>' +
                '<div class="wk-pain-grid">' + cardsHTML + '</div>' +
                '<div class="wk-pain-bridge wk-fade">' + data.bridge + '</div>' +
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

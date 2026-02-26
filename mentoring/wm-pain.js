// Win³ Mentoring Landingpage - Pain/Problem Section (Standalone)
// Zentrierte Headline + 2x2 Card Grid + Bridge Text
// Loaded via: <script src="https://solbachsteven.github.io/website/mentoring/wm-pain.js"></script>
(function() {
    if (window.__WM_PAIN_LOADED) return;
    window.__WM_PAIN_LOADED = true;

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

    // === PAIN CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wm-pain');
    style.textContent = `
/* ======== PAIN SECTION ======== */
.wm-pain {
    padding: 100px 40px;
    background: #1A1A1A;
}
.wm-pain-inner {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}
.wm-pain-headline {
    font-size: 36px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 12px;
}
.wm-pain-subheadline {
    font-family: 'Caveat', cursive;
    font-size: 24px;
    color: rgba(244, 240, 236, 0.5);
    margin-bottom: 56px;
}
.wm-pain-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-bottom: 56px;
}
.wm-pain-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(188, 128, 52, 0.08);
    border-radius: 20px;
    padding: 32px 28px;
    text-align: left;
    transition: transform 0.3s ease, border-color 0.3s ease;
}
.wm-pain-card:hover {
    transform: translateY(-3px);
    border-color: rgba(188, 128, 52, 0.2);
}
.wm-pain-quote {
    font-family: 'Caveat', cursive;
    font-size: 22px;
    line-height: 1.4;
    color: rgba(244, 240, 236, 0.85);
    margin-bottom: 12px;
}
.wm-pain-quote::before {
    content: '\u201e';
    color: #BC8034;
    font-size: 28px;
    margin-right: 2px;
}
.wm-pain-quote::after {
    content: '\u201c';
    color: #BC8034;
    font-size: 28px;
    margin-left: 2px;
}
.wm-pain-context {
    font-size: 14px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.4);
    line-height: 1.6;
}
.wm-pain-bridge {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.8;
    color: rgba(244, 240, 236, 0.7);
    max-width: 640px;
    margin: 0 auto;
}
.wm-pain-bridge strong {
    color: #BC8034;
    font-weight: 500;
}

/* ======== PAIN RESPONSIVE ======== */
@media (max-width: 1024px) {
    .wm-pain { padding: 80px 30px; }
    .wm-pain-headline { font-size: 30px; }
}
@media (max-width: 768px) {
    .wm-pain { padding: 60px 16px; }
    .wm-pain-headline { font-size: 26px; }
    .wm-pain-grid { grid-template-columns: 1fr; gap: 16px; }
    .wm-pain-card { padding: 24px 20px; }
    .wm-pain-quote { font-size: 20px; }
    .wm-pain-bridge { font-size: 16px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        headline: "Du wei\u00dft l\u00e4ngst, dass da mehr ist.",
        subheadline: "Die Frage ist nur: Warum lebst du es noch nicht?",
        painPoints: [
            {
                quote: "Ich lese B\u00fccher, h\u00f6re Podcasts, mache Kurse - aber es ver\u00e4ndert sich nichts wirklich.",
                context: "Du hast Wissen im \u00dcberfluss. Was dir fehlt, ist jemand, der die richtigen Fragen stellt - und dranbleibt, bis du ehrlich antwortest."
            },
            {
                quote: "Ich drehe mich im Kreis und komme alleine nicht weiter.",
                context: "Manche Muster kann man nicht alleine durchschauen. Nicht weil du zu schwach bist - sondern weil du zu nah dran bist."
            },
            {
                quote: "Ich brauche keinen Motivationsredner. Ich brauche jemanden, der mich wirklich sieht.",
                context: "Jemanden, der nicht an der Oberfl\u00e4che bleibt. Der auch die unbequemen Wahrheiten ausspricht - und trotzdem an dich glaubt."
            },
            {
                quote: "Ich habe das Gef\u00fchl, dass ich kurz davor bin - aber den letzten Schritt nicht alleine schaffe.",
                context: "Du stehst nicht am Anfang. Du stehst an einer Schwelle. Und manchmal braucht es genau eine Person, die mit dir hindurchgeht."
            }
        ],
        bridge: "Wenn du dich hier wiedererkennst, bist du nicht gescheitert. Du bist bereit. <strong>Bereit f\u00fcr eine Begleitung, die tiefer geht als jeder Selbstlernkurs es kann.</strong>"
    };

    // === RENDER ===
    var cardsHTML = '';
    for (var i = 0; i < data.painPoints.length; i++) {
        var p = data.painPoints[i];
        cardsHTML +=
            '<div class="wm-pain-card wm-fade">' +
                '<div class="wm-pain-quote">' + p.quote + '</div>' +
                '<div class="wm-pain-context">' + p.context + '</div>' +
            '</div>';
    }

    var sectionHTML =
        '<section class="wm-pain">' +
            '<div class="wm-pain-inner">' +
                '<h2 class="wm-pain-headline wm-fade">' + data.headline + '</h2>' +
                '<div class="wm-pain-subheadline wm-fade">' + data.subheadline + '</div>' +
                '<div class="wm-pain-grid">' + cardsHTML + '</div>' +
                '<div class="wm-pain-bridge wm-fade">' + data.bridge + '</div>' +
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

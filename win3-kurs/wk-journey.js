// Win³ Kurs Landingpage - Journey Section (Standalone) - HERZSTUECK
// Die Reise: Selbsterkenntnis → Selbstbefreiung → Selbstverwirklichung
// Loaded via: <script src="https://solbachsteven.github.io/website/win3-kurs/wk-journey.js"></script>
(function() {
    if (window.__WK_JOURNEY_LOADED) return;
    window.__WK_JOURNEY_LOADED = true;

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

    // === JOURNEY CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wk-journey');
    style.textContent = `
/* ======== JOURNEY SECTION ======== */
.wk-journey {
    padding: 100px 40px;
    background: #1A1A1A;
}
.wk-journey-inner {
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
}
.wk-journey-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    position: relative;
}

/* Verbindungslinien zwischen Karten */
.wk-journey-grid::before,
.wk-journey-grid::after {
    content: '';
    position: absolute;
    top: 50%;
    height: 2px;
    background: linear-gradient(90deg, rgba(188, 128, 52, 0.3), rgba(188, 128, 52, 0.15));
    z-index: 1;
}
.wk-journey-grid::before {
    left: calc(33.33% - 16px);
    width: 32px;
}
.wk-journey-grid::after {
    left: calc(66.66% - 16px);
    width: 32px;
}

/* Journey Card */
.wk-journey-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 24px;
    padding: 48px 32px 40px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, border-color 0.3s ease;
    z-index: 2;
}
.wk-journey-card:hover {
    transform: translateY(-6px);
}

/* Farbiger Top-Accent */
.wk-journey-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
}
.wk-journey-card[data-phase="1"]::before { background: linear-gradient(90deg, #D4A04A, #BC8034); }
.wk-journey-card[data-phase="2"]::before { background: linear-gradient(90deg, #7FB3B3, #5A9E9E); }
.wk-journey-card[data-phase="3"]::before { background: linear-gradient(90deg, #B89FD4, #9B7FC4); }

/* Hover-Glow pro Phase */
.wk-journey-card[data-phase="1"]:hover { border-color: rgba(212, 160, 74, 0.25); box-shadow: 0 20px 50px rgba(212, 160, 74, 0.1); }
.wk-journey-card[data-phase="2"]:hover { border-color: rgba(127, 179, 179, 0.25); box-shadow: 0 20px 50px rgba(127, 179, 179, 0.1); }
.wk-journey-card[data-phase="3"]:hover { border-color: rgba(184, 159, 212, 0.25); box-shadow: 0 20px 50px rgba(184, 159, 212, 0.1); }

/* Phase-Nummer */
.wk-journey-phase {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 20px;
    display: inline-block;
    padding: 5px 14px;
    border-radius: 20px;
}
.wk-journey-card[data-phase="1"] .wk-journey-phase { color: #D4A04A; background: rgba(212, 160, 74, 0.12); }
.wk-journey-card[data-phase="2"] .wk-journey-phase { color: #7FB3B3; background: rgba(127, 179, 179, 0.12); }
.wk-journey-card[data-phase="3"] .wk-journey-phase { color: #B89FD4; background: rgba(184, 159, 212, 0.12); }

/* Icon */
.wk-journey-icon {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
}
.wk-journey-card[data-phase="1"] .wk-journey-icon { background: rgba(212, 160, 74, 0.1); }
.wk-journey-card[data-phase="2"] .wk-journey-icon { background: rgba(127, 179, 179, 0.1); }
.wk-journey-card[data-phase="3"] .wk-journey-icon { background: rgba(184, 159, 212, 0.1); }
.wk-journey-icon svg { width: 28px; height: 28px; }

/* Titel & Text */
.wk-journey-title {
    font-size: 24px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 8px;
    line-height: 1.3;
}
.wk-journey-question {
    font-family: 'Caveat', cursive;
    font-size: 20px;
    margin-bottom: 16px;
}
.wk-journey-card[data-phase="1"] .wk-journey-question { color: #D4A04A; }
.wk-journey-card[data-phase="2"] .wk-journey-question { color: #7FB3B3; }
.wk-journey-card[data-phase="3"] .wk-journey-question { color: #B89FD4; }

.wk-journey-description {
    font-size: 15px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.65);
    line-height: 1.7;
}

/* ======== JOURNEY RESPONSIVE ======== */
@media (max-width: 1024px) {
    .wk-journey { padding: 80px 30px; }
    .wk-journey-card { padding: 36px 24px 32px; }
    .wk-journey-title { font-size: 22px; }
}
@media (max-width: 768px) {
    .wk-journey { padding: 60px 16px; }
    .wk-journey-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    .wk-journey-grid::before,
    .wk-journey-grid::after { display: none; }
    .wk-journey-card { padding: 32px 24px 28px; }
    .wk-journey-title { font-size: 22px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        label: "DIE REISE",
        headline: "Drei Phasen. Ein Weg. Dein Leben.",
        subheadline: "Jede Phase baut auf der vorherigen auf.",
        phases: [
            {
                number: "PHASE 1",
                title: "Selbsterkenntnis",
                question: "Wer bin ich wirklich?",
                description: "Du lernst, hinter deine Rollen zu schauen. Was treibt dich an? Was sind deine echten Werte - nicht die, die du gelernt hast? Hier legst du das Fundament f\u00fcr alles, was kommt.",
                color: "#D4A04A"
            },
            {
                number: "PHASE 2",
                title: "Selbstbefreiung",
                question: "Was h\u00e4lt mich zur\u00fcck?",
                description: "Du erkennst die inneren Muster, die dich bremsen. Nicht um sie zu bek\u00e4mpfen - sondern um sie zu verstehen. Echte Freiheit beginnt, wenn du aufh\u00f6rst, gegen dich selbst zu arbeiten.",
                color: "#7FB3B3"
            },
            {
                number: "PHASE 3",
                title: "Selbstverwirklichung",
                question: "Wie lebe ich mein volles Potenzial?",
                description: "Du baust die Br\u00fccke zwischen dem, wer du bist, und dem, was du in die Welt bringen willst. Hier wird aus Erkenntnis Handlung - und aus Handlung ein Leben, das sich richtig anf\u00fchlt.",
                color: "#B89FD4"
            }
        ]
    };

    // === SVG ICONS ===
    var eyeSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#D4A04A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3" fill="rgba(212,160,74,0.2)"/></svg>';
    var unlockSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#7FB3B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="rgba(127,179,179,0.15)"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>';
    var rocketSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#B89FD4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill="rgba(184,159,212,0.15)"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>';
    var icons = [eyeSVG, unlockSVG, rocketSVG];

    // === RENDER ===
    var cardsHTML = '';
    for (var i = 0; i < data.phases.length; i++) {
        var phase = data.phases[i];
        cardsHTML +=
            '<div class="wk-journey-card wk-fade" data-phase="' + (i + 1) + '">' +
                '<div class="wk-journey-phase">' + phase.number + '</div>' +
                '<div class="wk-journey-icon">' + icons[i] + '</div>' +
                '<div class="wk-journey-title">' + phase.title + '</div>' +
                '<div class="wk-journey-question">' + phase.question + '</div>' +
                '<div class="wk-journey-description">' + phase.description + '</div>' +
            '</div>';
    }

    var sectionHTML =
        '<section class="wk-journey">' +
            '<div class="wk-journey-inner">' +
                '<div class="wk-label wk-fade" style="text-align:center">' + data.label + '</div>' +
                '<h2 class="wk-section-headline wk-fade" style="text-align:center">' + data.headline + '</h2>' +
                '<div class="wk-section-subheadline wk-fade" style="text-align:center">' + data.subheadline + '</div>' +
                '<div class="wk-journey-grid">' + cardsHTML + '</div>' +
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

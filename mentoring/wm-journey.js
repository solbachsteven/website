// Win\u00b3 Mentoring Landingpage - Journey Section (Standalone)
// Die Reise: Selbsterkenntnis \u2192 Selbstbefreiung \u2192 Selbstverwirklichung
// Loaded via: <script src="https://solbachsteven.github.io/website/mentoring/wm-journey.js"></script>
(function() {
    if (window.__WM_JOURNEY_LOADED) return;
    window.__WM_JOURNEY_LOADED = true;

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

    // === JOURNEY CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wm-journey');
    style.textContent = `
/* ======== JOURNEY SECTION ======== */
.wm-journey {
    padding: 100px 40px;
    background: linear-gradient(180deg, #1A1A1A 0%, #1E1E1E 50%, #1A1A1A 100%);
}
.wm-journey-inner {
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
}
.wm-journey-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    position: relative;
}

/* Verbindungslinien zwischen Karten */
.wm-journey-grid::before,
.wm-journey-grid::after {
    content: '';
    position: absolute;
    top: 50%;
    height: 2px;
    background: linear-gradient(90deg, rgba(188, 128, 52, 0.3), rgba(188, 128, 52, 0.15));
    z-index: 1;
}
.wm-journey-grid::before {
    left: calc(33.33% - 16px);
    width: 32px;
}
.wm-journey-grid::after {
    left: calc(66.66% - 16px);
    width: 32px;
}

/* Journey Card */
.wm-journey-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 24px;
    padding: 48px 32px 40px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, border-color 0.3s ease;
    z-index: 2;
}
.wm-journey-card:hover {
    transform: translateY(-6px);
}

/* Farbiger Top-Accent */
.wm-journey-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
}
.wm-journey-card[data-phase="1"]::before { background: linear-gradient(90deg, #D4A04A, #BC8034); }
.wm-journey-card[data-phase="2"]::before { background: linear-gradient(90deg, #7FB3B3, #5A9E9E); }
.wm-journey-card[data-phase="3"]::before { background: linear-gradient(90deg, #B89FD4, #9B7FC4); }

/* Hover-Glow pro Phase */
.wm-journey-card[data-phase="1"]:hover { border-color: rgba(212, 160, 74, 0.25); box-shadow: 0 20px 50px rgba(212, 160, 74, 0.1); }
.wm-journey-card[data-phase="2"]:hover { border-color: rgba(127, 179, 179, 0.25); box-shadow: 0 20px 50px rgba(127, 179, 179, 0.1); }
.wm-journey-card[data-phase="3"]:hover { border-color: rgba(184, 159, 212, 0.25); box-shadow: 0 20px 50px rgba(184, 159, 212, 0.1); }

/* Phase-Nummer */
.wm-journey-phase {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 20px;
    display: inline-block;
    padding: 5px 14px;
    border-radius: 20px;
}
.wm-journey-card[data-phase="1"] .wm-journey-phase { color: #D4A04A; background: rgba(212, 160, 74, 0.12); }
.wm-journey-card[data-phase="2"] .wm-journey-phase { color: #7FB3B3; background: rgba(127, 179, 179, 0.12); }
.wm-journey-card[data-phase="3"] .wm-journey-phase { color: #B89FD4; background: rgba(184, 159, 212, 0.12); }

/* Icon */
.wm-journey-icon {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
}
.wm-journey-card[data-phase="1"] .wm-journey-icon { background: rgba(212, 160, 74, 0.1); }
.wm-journey-card[data-phase="2"] .wm-journey-icon { background: rgba(127, 179, 179, 0.1); }
.wm-journey-card[data-phase="3"] .wm-journey-icon { background: rgba(184, 159, 212, 0.1); }
.wm-journey-icon svg { width: 28px; height: 28px; }

/* Titel & Text */
.wm-journey-title {
    font-size: 24px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 8px;
    line-height: 1.3;
}
.wm-journey-question {
    font-family: 'Caveat', cursive;
    font-size: 20px;
    font-style: italic;
    margin-bottom: 16px;
}
.wm-journey-card[data-phase="1"] .wm-journey-question { color: #D4A04A; }
.wm-journey-card[data-phase="2"] .wm-journey-question { color: #7FB3B3; }
.wm-journey-card[data-phase="3"] .wm-journey-question { color: #B89FD4; }

.wm-journey-description {
    font-size: 15px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.65);
    line-height: 1.7;
}

/* ======== JOURNEY RESPONSIVE ======== */
@media (max-width: 1024px) {
    .wm-journey { padding: 80px 30px; }
    .wm-journey-card { padding: 36px 24px 32px; }
    .wm-journey-title { font-size: 22px; }
}
@media (max-width: 768px) {
    .wm-journey { padding: 60px 16px; }
    .wm-journey-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    .wm-journey-grid::before,
    .wm-journey-grid::after { display: none; }
    .wm-journey-card { padding: 32px 24px 28px; }
    .wm-journey-title { font-size: 22px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        label: "DIE REISE",
        headline: "Drei Phasen. Dein Weg. Meine Begleitung.",
        subheadline: "Derselbe rote Faden - aber mit jemandem an deiner Seite.",
        phases: [
            {
                number: "PHASE 1",
                title: "Selbsterkenntnis",
                question: "Wer bist du, wenn niemand zuschaut?",
                description: "Gemeinsam legen wir frei, was dich im Kern ausmacht. Deine Werte, deine Muster, deine blinden Flecken. Nicht als \u00dcbung auf Papier - sondern im echten Gespr\u00e4ch, mit ehrlicher R\u00fcckmeldung.",
                color: "#D4A04A"
            },
            {
                number: "PHASE 2",
                title: "Selbstbefreiung",
                question: "Was h\u00e4lt dich wirklich zur\u00fcck?",
                description: "Wir schauen auf die Muster, die du alleine nicht durchschauen kannst. Glaubenss\u00e4tze, die sich als Wahrheit tarnen. Gewohnheiten, die sich wie Sicherheit anf\u00fchlen. Hier passiert die Arbeit, die alleine nicht m\u00f6glich ist.",
                color: "#7FB3B3"
            },
            {
                number: "PHASE 3",
                title: "Selbstverwirklichung",
                question: "Wie lebst du, wer du bist?",
                description: "Du baust die Br\u00fccke von der Erkenntnis ins Handeln. Mit konkretem Plan, klaren n\u00e4chsten Schritten und jemandem, der dich accountable h\u00e4lt. Keine Theorie mehr - Umsetzung.",
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
            '<div class="wm-journey-card wm-fade" data-phase="' + (i + 1) + '">' +
                '<div class="wm-journey-phase">' + phase.number + '</div>' +
                '<div class="wm-journey-icon">' + icons[i] + '</div>' +
                '<div class="wm-journey-title">' + phase.title + '</div>' +
                '<div class="wm-journey-question">' + phase.question + '</div>' +
                '<div class="wm-journey-description">' + phase.description + '</div>' +
            '</div>';
    }

    var sectionHTML =
        '<section class="wm-journey">' +
            '<div class="wm-journey-inner">' +
                '<div class="wm-label wm-fade" style="text-align:center">' + data.label + '</div>' +
                '<h2 class="wm-section-headline wm-fade" style="text-align:center">' + data.headline + '</h2>' +
                '<div class="wm-section-subheadline wm-fade" style="text-align:center">' + data.subheadline + '</div>' +
                '<div class="wm-journey-grid">' + cardsHTML + '</div>' +
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

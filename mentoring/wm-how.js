// Win\u00b3 Mentoring Landingpage - How It Works Section (Standalone)
// 12 Wochen Timeline: Standort \u2192 Selbsterkenntnis \u2192 Muster \u2192 Integration
// Loaded via: <script src="https://solbachsteven.github.io/website/mentoring/wm-how.js"></script>
(function() {
    if (window.__WM_HOW_LOADED) return;
    window.__WM_HOW_LOADED = true;

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

    // === HOW CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wm-how');
    style.textContent = `
/* ======== HOW SECTION ======== */
.wm-how {
    padding: 100px 40px;
    background: #1A1A1A;
}
.wm-how-inner {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}

/* Timeline */
.wm-how-timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
    position: relative;
    text-align: left;
    margin-top: 16px;
}
/* Vertical line */
.wm-how-timeline::before {
    content: '';
    position: absolute;
    left: 32px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, rgba(212, 160, 74, 0.4), rgba(127, 179, 179, 0.4), rgba(184, 159, 212, 0.4));
}

/* Timeline Card */
.wm-how-card {
    position: relative;
    padding: 32px 32px 32px 80px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: background 0.3s ease;
}
.wm-how-card:hover {
    background: rgba(255, 255, 255, 0.02);
}
.wm-how-card:last-child {
    border-bottom: none;
}

/* Timeline Dot */
.wm-how-dot {
    position: absolute;
    left: 22px;
    top: 38px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid;
    background: #1A1A1A;
    z-index: 2;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.wm-how-card:hover .wm-how-dot {
    transform: scale(1.2);
}
.wm-how-card[data-week="1"] .wm-how-dot { border-color: #D4A04A; box-shadow: 0 0 8px rgba(212, 160, 74, 0.3); }
.wm-how-card[data-week="2"] .wm-how-dot { border-color: #D4A04A; box-shadow: 0 0 8px rgba(212, 160, 74, 0.3); }
.wm-how-card[data-week="3"] .wm-how-dot { border-color: #7FB3B3; box-shadow: 0 0 8px rgba(127, 179, 179, 0.3); }
.wm-how-card[data-week="4"] .wm-how-dot { border-color: #B89FD4; box-shadow: 0 0 8px rgba(184, 159, 212, 0.3); }

/* Week Label */
.wm-how-week {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 8px;
}
.wm-how-card[data-week="1"] .wm-how-week { color: #D4A04A; }
.wm-how-card[data-week="2"] .wm-how-week { color: #D4A04A; }
.wm-how-card[data-week="3"] .wm-how-week { color: #7FB3B3; }
.wm-how-card[data-week="4"] .wm-how-week { color: #B89FD4; }

/* Title */
.wm-how-title {
    font-size: 22px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 12px;
    line-height: 1.3;
    display: flex;
    align-items: center;
    gap: 12px;
}
.wm-how-title-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}
.wm-how-card[data-week="1"] .wm-how-title-icon { background: rgba(212, 160, 74, 0.1); }
.wm-how-card[data-week="2"] .wm-how-title-icon { background: rgba(212, 160, 74, 0.1); }
.wm-how-card[data-week="3"] .wm-how-title-icon { background: rgba(127, 179, 179, 0.1); }
.wm-how-card[data-week="4"] .wm-how-title-icon { background: rgba(184, 159, 212, 0.1); }
.wm-how-title-icon svg { width: 20px; height: 20px; }

/* Description */
.wm-how-description {
    font-size: 15px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.6);
    line-height: 1.7;
}

/* Rhythm Box */
.wm-how-rhythm {
    margin-top: 48px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(212, 160, 74, 0.15);
    border-radius: 20px;
    padding: 36px 32px;
    text-align: left;
}
.wm-how-rhythm-title {
    font-size: 20px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 24px;
    text-align: center;
}
.wm-how-rhythm-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.wm-how-rhythm-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 15px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.8);
    line-height: 1.6;
}
.wm-how-rhythm-check {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    margin-top: 1px;
}
.wm-how-rhythm-check svg {
    width: 22px;
    height: 22px;
}

/* ======== RESPONSIVE ======== */
@media (max-width: 1024px) {
    .wm-how { padding: 80px 30px; }
}
@media (max-width: 768px) {
    .wm-how { padding: 60px 16px; }
    .wm-how-card { padding: 24px 16px 24px 64px; }
    .wm-how-timeline::before { left: 24px; }
    .wm-how-dot { left: 14px; top: 30px; }
    .wm-how-title { font-size: 19px; }
    .wm-how-rhythm { padding: 28px 20px; }
    .wm-how-rhythm-title { font-size: 18px; }
}
`;
    document.head.appendChild(style);

    // === SVG ICONS ===
    var compassSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#D4A04A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="rgba(212,160,74,0.2)"/></svg>';
    var eyeSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#D4A04A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3" fill="rgba(212,160,74,0.2)"/></svg>';
    var unlockSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#7FB3B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="rgba(127,179,179,0.15)"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>';
    var rocketSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#B89FD4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill="rgba(184,159,212,0.15)"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>';
    var checkGoldSVG = '<svg viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" fill="rgba(212,160,74,0.12)"/><path d="M7 11l3 3 5-6" stroke="#D4A04A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    // === DATA ===
    var data = {
        label: "SO FUNKTIONIERT ES",
        headline: "12 Wochen. Dein Rhythmus. Meine Begleitung.",
        subheadline: "Ein klarer Rahmen - aber dein individueller Weg.",
        weeks: [
            {
                week: "WOCHE 1",
                title: "Standortbestimmung & Zielbild",
                description: "Wo stehst du? Wo willst du hin? Im ersten Gespr\u00e4ch legen wir den Grundstein. Ich lerne dich kennen - und wir definieren, was sich am Ende dieser 12 Wochen ver\u00e4ndert haben soll.",
                icon: "compass"
            },
            {
                week: "WOCHE 2-5",
                title: "Selbsterkenntnis vertiefen",
                description: "Gemeinsam tauchen wir in deine Werte, Muster und blinden Flecken ein. W\u00f6chentliche 90-Minuten-Sessions plus WhatsApp-Support zwischen den Terminen. Der Win\u00b3 Kurs dient als Fundament, aber dein Weg ist individuell.",
                icon: "eye"
            },
            {
                week: "WOCHE 6-9",
                title: "Muster durchbrechen",
                description: "Jetzt wird es unbequem - und genau deshalb brauchst du jemanden an deiner Seite. Wir arbeiten an den Themen, die alleine nicht greifbar sind. Ehrlich, direkt und immer mit dem Blick auf dein Potenzial.",
                icon: "unlock"
            },
            {
                week: "WOCHE 10-12",
                title: "Integration & Umsetzung",
                description: "Erkenntnis wird Handlung. Du gehst mit einem individuellen Fahrplan raus - nicht mit einem Standard-Template. Und du wei\u00dft genau, was deine n\u00e4chsten Schritte sind.",
                icon: "rocket"
            }
        ],
        rhythmTitle: "Dein w\u00f6chentlicher Rhythmus",
        rhythmItems: [
            "90 Minuten 1:1 Session pro Woche (Video-Call)",
            "WhatsApp-Support zwischen den Sessions",
            "Individueller Fahrplan nach jeder Session",
            "Win\u00b3 Kurs als Fundament (im Wert von 297 \u20ac inklusive)"
        ]
    };

    var iconMap = {
        compass: compassSVG,
        eye: eyeSVG,
        unlock: unlockSVG,
        rocket: rocketSVG
    };

    // === RENDER ===
    var cardsHTML = '';
    for (var i = 0; i < data.weeks.length; i++) {
        var w = data.weeks[i];
        cardsHTML +=
            '<div class="wm-how-card wm-fade" data-week="' + (i + 1) + '">' +
                '<div class="wm-how-dot"></div>' +
                '<div class="wm-how-week">' + w.week + '</div>' +
                '<div class="wm-how-title">' +
                    '<span class="wm-how-title-icon">' + iconMap[w.icon] + '</span>' +
                    '<span>' + w.title + '</span>' +
                '</div>' +
                '<div class="wm-how-description">' + w.description + '</div>' +
            '</div>';
    }

    var rhythmHTML = '';
    for (var j = 0; j < data.rhythmItems.length; j++) {
        rhythmHTML +=
            '<li class="wm-how-rhythm-item">' +
                '<span class="wm-how-rhythm-check">' + checkGoldSVG + '</span>' +
                '<span>' + data.rhythmItems[j] + '</span>' +
            '</li>';
    }

    var sectionHTML =
        '<section class="wm-how">' +
            '<div class="wm-how-inner">' +
                '<div class="wm-label wm-fade" style="text-align:center">' + data.label + '</div>' +
                '<h2 class="wm-section-headline wm-fade" style="text-align:center">' + data.headline + '</h2>' +
                '<div class="wm-section-subheadline wm-fade" style="text-align:center">' + data.subheadline + '</div>' +
                '<div class="wm-how-timeline">' + cardsHTML + '</div>' +
                '<div class="wm-how-rhythm wm-fade">' +
                    '<div class="wm-how-rhythm-title">' + data.rhythmTitle + '</div>' +
                    '<ul class="wm-how-rhythm-list">' + rhythmHTML + '</ul>' +
                '</div>' +
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

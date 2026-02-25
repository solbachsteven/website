// Win³ Kurs Landingpage - Modul-Übersicht Section (Standalone)
// 4 Module im Überblick: Modul 0-3
// Loaded via: <script src="https://solbachsteven.github.io/website/win3-kurs/wk-modules.js"></script>
(function() {
    if (window.__WK_MODULES_LOADED) return;
    window.__WK_MODULES_LOADED = true;

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

    // === MODULES CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wk-modules');
    style.textContent = `
/* ======== MODULES SECTION ======== */
.wk-modules {
    padding: 100px 40px;
    background: #1A1A1A;
}
.wk-modules-inner {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}

/* Timeline */
.wk-modules-timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
    position: relative;
    text-align: left;
    margin-top: 16px;
}
/* Vertical line */
.wk-modules-timeline::before {
    content: '';
    position: absolute;
    left: 32px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, rgba(188, 128, 52, 0.4), rgba(184, 159, 212, 0.4));
}

/* Module Card */
.wk-module-card {
    position: relative;
    padding: 32px 32px 32px 80px;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: background 0.3s ease;
}
.wk-module-card:hover {
    background: rgba(255, 255, 255, 0.02);
}
.wk-module-card:last-child {
    border-bottom: none;
}

/* Timeline Dot */
.wk-module-dot {
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
.wk-module-card:hover .wk-module-dot {
    transform: scale(1.2);
}
.wk-module-card[data-module="0"] .wk-module-dot { border-color: rgba(188, 128, 52, 0.5); }
.wk-module-card[data-module="1"] .wk-module-dot { border-color: #D4A04A; box-shadow: 0 0 8px rgba(212, 160, 74, 0.3); }
.wk-module-card[data-module="2"] .wk-module-dot { border-color: #7FB3B3; box-shadow: 0 0 8px rgba(127, 179, 179, 0.3); }
.wk-module-card[data-module="3"] .wk-module-dot { border-color: #B89FD4; box-shadow: 0 0 8px rgba(184, 159, 212, 0.3); }

/* Module Number */
.wk-module-number {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 8px;
}
.wk-module-card[data-module="0"] .wk-module-number { color: rgba(188, 128, 52, 0.6); }
.wk-module-card[data-module="1"] .wk-module-number { color: #D4A04A; }
.wk-module-card[data-module="2"] .wk-module-number { color: #7FB3B3; }
.wk-module-card[data-module="3"] .wk-module-number { color: #B89FD4; }

/* Title */
.wk-module-title {
    font-size: 22px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 8px;
    line-height: 1.3;
}

/* Subtitle */
.wk-module-subtitle {
    font-family: 'Caveat', cursive;
    font-size: 19px;
    margin-bottom: 12px;
}
.wk-module-card[data-module="0"] .wk-module-subtitle { color: rgba(188, 128, 52, 0.5); }
.wk-module-card[data-module="1"] .wk-module-subtitle { color: rgba(212, 160, 74, 0.7); }
.wk-module-card[data-module="2"] .wk-module-subtitle { color: rgba(127, 179, 179, 0.7); }
.wk-module-card[data-module="3"] .wk-module-subtitle { color: rgba(184, 159, 212, 0.7); }

/* Description */
.wk-module-description {
    font-size: 15px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.55);
    line-height: 1.7;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, opacity 0.3s ease;
    opacity: 0;
}
.wk-module-card.open .wk-module-description {
    max-height: 200px;
    opacity: 1;
}

/* Toggle Indicator */
.wk-module-toggle {
    position: absolute;
    right: 32px;
    top: 40px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
}
.wk-module-card.open .wk-module-toggle {
    transform: rotate(180deg);
}
.wk-module-toggle svg {
    width: 16px;
    height: 16px;
}

/* Frameworks/Tags */
.wk-module-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
}
.wk-module-tag {
    font-size: 12px;
    font-weight: 400;
    padding: 4px 12px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    color: rgba(244, 240, 236, 0.5);
}

/* ======== RESPONSIVE ======== */
@media (max-width: 1024px) {
    .wk-modules { padding: 80px 30px; }
}
@media (max-width: 768px) {
    .wk-modules { padding: 60px 16px; }
    .wk-module-card { padding: 24px 16px 24px 64px; }
    .wk-modules-timeline::before { left: 24px; }
    .wk-module-dot { left: 14px; top: 30px; }
    .wk-module-title { font-size: 19px; }
    .wk-module-toggle { right: 16px; top: 30px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        label: "DER KURS",
        headline: "4 Module f\u00fcr deine Transformation",
        subheadline: "Schritt f\u00fcr Schritt. In deinem Tempo.",
        modules: [
            {
                number: "MODUL 0",
                title: "Einf\u00fchrung & Orientierung",
                subtitle: "Dein Startpunkt",
                description: "Bevor es losgeht: Wo stehst du? Was erwartet dich? Hier richtest du deinen inneren Kompass aus und lernst, wie der Kurs funktioniert. Kein Theorieblock - sondern deine erste ehrliche Bestandsaufnahme.",
                tags: ["Standortbestimmung", "Kurs-Setup", "Erste Reflexion"]
            },
            {
                number: "MODUL 1",
                title: "Selbsterkenntnis",
                subtitle: "Be Yourself",
                description: "Wer bist du, wenn niemand zuschaut? Du erforschst deine echten Werte, deine Antriebe und die Rollen, die du spielst. Mit KI-gest\u00fctzten \u00dcbungen und Reflexionsfragen, die tiefer gehen als jeder Pers\u00f6nlichkeitstest.",
                tags: ["Werte-Arbeit", "Rollen-Analyse", "KI-Reflexion"]
            },
            {
                number: "MODUL 2",
                title: "Selbstbefreiung",
                subtitle: "Do Good",
                description: "Was h\u00e4lt dich zur\u00fcck? Hier schaust du auf die Muster, die dich bremsen - Glaubenss\u00e4tze, Gewohnheiten, innere Konflikte. Nicht um sie zu bek\u00e4mpfen, sondern um sie zu verstehen und loszulassen.",
                tags: ["Muster-Erkennung", "Innere Konflikte", "Loslassen"]
            },
            {
                number: "MODUL 3",
                title: "Selbstverwirklichung",
                subtitle: "Make Money",
                description: "Wie bringst du, wer du bist, in die Welt? Du baust die Br\u00fccke von der Erkenntnis zur Handlung. Konkrete Schritte, um dein Potenzial nicht nur zu sp\u00fcren, sondern zu leben - beruflich und privat.",
                tags: ["Potenzial-Umsetzung", "Handlungsplan", "Integration"]
            }
        ]
    };

    // === SVG ===
    var chevronSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="rgba(244,240,236,0.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

    // === RENDER ===
    var cardsHTML = '';
    for (var i = 0; i < data.modules.length; i++) {
        var mod = data.modules[i];
        var tagsHTML = '';
        for (var j = 0; j < mod.tags.length; j++) {
            tagsHTML += '<span class="wk-module-tag">' + mod.tags[j] + '</span>';
        }
        cardsHTML +=
            '<div class="wk-module-card wk-fade" data-module="' + i + '">' +
                '<div class="wk-module-dot"></div>' +
                '<div class="wk-module-toggle">' + chevronSVG + '</div>' +
                '<div class="wk-module-number">' + mod.number + '</div>' +
                '<div class="wk-module-title">' + mod.title + '</div>' +
                '<div class="wk-module-subtitle">' + mod.subtitle + '</div>' +
                '<div class="wk-module-description">' +
                    '<p>' + mod.description + '</p>' +
                    '<div class="wk-module-tags">' + tagsHTML + '</div>' +
                '</div>' +
            '</div>';
    }

    var sectionHTML =
        '<section class="wk-modules">' +
            '<div class="wk-modules-inner">' +
                '<div class="wk-label wk-fade" style="text-align:center">' + data.label + '</div>' +
                '<h2 class="wk-section-headline wk-fade" style="text-align:center">' + data.headline + '</h2>' +
                '<div class="wk-section-subheadline wk-fade" style="text-align:center">' + data.subheadline + '</div>' +
                '<div class="wk-modules-timeline">' + cardsHTML + '</div>' +
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
    var cards = document.querySelectorAll('.wk-module-card');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            var wasOpen = this.classList.contains('open');
            // Alle schliessen
            cards.forEach(function(c) { c.classList.remove('open'); });
            // Wenn nicht offen war, öffnen
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

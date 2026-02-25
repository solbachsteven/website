// Win³ Kurs Landingpage - Features Section (Standalone)
// Was du bekommst - Feature Grid
// Loaded via: <script src="https://solbachsteven.github.io/website/win3-kurs/wk-features.js"></script>
(function() {
    if (window.__WK_FEATURES_LOADED) return;
    window.__WK_FEATURES_LOADED = true;

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

    // === FEATURES CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wk-features');
    style.textContent = `
/* ======== FEATURES SECTION ======== */
.wk-features {
    padding: 100px 40px;
    background: linear-gradient(180deg, #1A1A1A 0%, #1E1E1E 50%, #1A1A1A 100%);
}
.wk-features-inner {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
}

/* Feature Grid */
.wk-features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 16px;
}

/* Feature Card */
.wk-feature-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 20px;
    padding: 36px 28px;
    text-align: left;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
.wk-feature-card:hover {
    transform: translateY(-4px);
    border-color: rgba(188, 128, 52, 0.2);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
}

/* Feature Icon */
.wk-feature-icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: rgba(188, 128, 52, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}
.wk-feature-icon svg {
    width: 24px;
    height: 24px;
}

/* Feature Title */
.wk-feature-title {
    font-size: 17px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 8px;
    line-height: 1.3;
}

/* Feature Description */
.wk-feature-desc {
    font-size: 14px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.55);
    line-height: 1.6;
}

/* ======== RESPONSIVE ======== */
@media (max-width: 1024px) {
    .wk-features { padding: 80px 30px; }
    .wk-features-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
    .wk-features { padding: 60px 16px; }
    .wk-features-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    .wk-feature-card { padding: 28px 24px; }
}
`;
    document.head.appendChild(style);

    // === SVG ICONS ===
    var iconColor = '#BC8034';
    var icons = {
        transform: '<svg viewBox="0 0 24 24" fill="none" stroke="' + iconColor + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
        ai: '<svg viewBox="0 0 24 24" fill="none" stroke="' + iconColor + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" fill="rgba(188,128,52,0.15)"/><path d="M18 14c2 1 3 2.5 3 4.5V20H3v-1.5c0-2 1-3.5 3-4.5"/><circle cx="12" cy="6" r="1" fill="' + iconColor + '"/></svg>',
        text: '<svg viewBox="0 0 24 24" fill="none" stroke="' + iconColor + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
        practice: '<svg viewBox="0 0 24 24" fill="none" stroke="' + iconColor + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" fill="rgba(188,128,52,0.08)"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
        tempo: '<svg viewBox="0 0 24 24" fill="none" stroke="' + iconColor + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" fill="rgba(188,128,52,0.08)"/><polyline points="12 6 12 12 16 14"/></svg>',
        community: '<svg viewBox="0 0 24 24" fill="none" stroke="' + iconColor + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
    };

    // === DATA ===
    var data = {
        headline: "Was du bekommst",
        subheadline: "Alles, was du f\u00fcr deine Transformation brauchst.",
        features: [
            {
                icon: 'transform',
                title: "Komplettes Transformations-System",
                desc: "3 Phasen, 4 Module - ein roter Faden von der ersten Erkenntnis bis zur konkreten Umsetzung in deinem Leben."
            },
            {
                icon: 'ai',
                title: "KI-Assistent rund um die Uhr",
                desc: "Dein pers\u00f6nlicher Sparringspartner, der dich kennt und weiterbringt. Kein Standard-Chatbot, sondern auf dich abgestimmt."
            },
            {
                icon: 'text',
                title: "Schritt-f\u00fcr-Schritt Anleitungen",
                desc: "Klare Textlektionen, die dich durch jeden Schritt f\u00fchren. Kein Raten, kein Suchen - du weisst immer, was als N\u00e4chstes kommt."
            },
            {
                icon: 'practice',
                title: "Praktische \u00dcbungen",
                desc: "In jeder Lektion: konkrete \u00dcbungen, die dich ins Tun bringen. Kein reines Kopfwissen - sondern sp\u00fcrbare Ver\u00e4nderung."
            },
            {
                icon: 'tempo',
                title: "Eigenes Tempo, flexibler Zugang",
                desc: "Kein Gruppenzwang, kein Zeitdruck. Du arbeitest den Kurs in deinem Rhythmus durch - wann und wo du willst."
            },
            {
                icon: 'community',
                title: "3 Monate Community-Zugang",
                desc: "Austausch mit Menschen, die den gleichen Weg gehen. Geteilte Erfahrungen, ehrliche Gespr\u00e4che, echte Verbindung."
            }
        ]
    };

    // === RENDER ===
    var cardsHTML = '';
    for (var i = 0; i < data.features.length; i++) {
        var feat = data.features[i];
        cardsHTML +=
            '<div class="wk-feature-card wk-fade">' +
                '<div class="wk-feature-icon">' + icons[feat.icon] + '</div>' +
                '<div class="wk-feature-title">' + feat.title + '</div>' +
                '<div class="wk-feature-desc">' + feat.desc + '</div>' +
            '</div>';
    }

    var sectionHTML =
        '<section class="wk-features">' +
            '<div class="wk-features-inner">' +
                '<h2 class="wk-section-headline wk-fade">' + data.headline + '</h2>' +
                '<div class="wk-section-subheadline wk-fade">' + data.subheadline + '</div>' +
                '<div class="wk-features-grid">' + cardsHTML + '</div>' +
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

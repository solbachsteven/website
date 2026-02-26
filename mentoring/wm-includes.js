// Win\u00b3 Mentoring Landingpage - Includes/Features Section (Standalone)
// Was du bekommst - 6 Feature Cards
// Loaded via: <script src="https://solbachsteven.github.io/website/mentoring/wm-includes.js"></script>
(function() {
    if (window.__WM_INCLUDES_LOADED) return;
    window.__WM_INCLUDES_LOADED = true;

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

    // === INCLUDES CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wm-includes');
    style.textContent = `
/* ======== INCLUDES SECTION ======== */
.wm-includes {
    padding: 100px 40px;
    background: linear-gradient(180deg, #1A1A1A 0%, #1E1E1E 50%, #1A1A1A 100%);
}
.wm-includes-inner {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
}

/* Feature Grid */
.wm-includes-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 16px;
}

/* Feature Card */
.wm-includes-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 20px;
    padding: 36px 28px;
    text-align: left;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
.wm-includes-card:hover {
    transform: translateY(-4px);
    border-color: rgba(188, 128, 52, 0.2);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
}

/* Feature Icon */
.wm-includes-icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: rgba(188, 128, 52, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}
.wm-includes-icon svg {
    width: 24px;
    height: 24px;
}

/* Feature Title */
.wm-includes-title {
    font-size: 17px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 8px;
    line-height: 1.3;
}

/* Feature Description */
.wm-includes-desc {
    font-size: 14px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.55);
    line-height: 1.6;
}

/* ======== RESPONSIVE ======== */
@media (max-width: 1024px) {
    .wm-includes { padding: 80px 30px; }
    .wm-includes-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
    .wm-includes { padding: 60px 0; }
    .wm-includes-inner { padding: 0 16px; }
    .wm-includes-grid {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: visible;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        gap: 12px;
        padding: 8px 16px 20px;
        margin: 0 -16px;
    }
    .wm-includes-grid::-webkit-scrollbar { display: none; }
    .wm-includes-card {
        flex: 0 0 280px;
        scroll-snap-align: center;
        padding: 28px 24px;
    }
    .wm-includes-card:hover {
        transform: none;
        box-shadow: none;
    }
}

/* Swipe Indicator */
.wm-includes-swipe {
    display: none;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    font-size: 13px;
    color: rgba(244, 240, 236, 0.4);
    gap: 6px;
}
.wm-includes-swipe-arrow {
    animation: wmSwipe 1.5s ease-in-out infinite;
}
@keyframes wmSwipe {
    0%, 100% { transform: translateX(0); opacity: 0.4; }
    50% { transform: translateX(6px); opacity: 1; }
}
@media (max-width: 768px) {
    .wm-includes-swipe { display: flex; }
}
`;
    document.head.appendChild(style);

    // === SVG ICONS ===
    var iconColor = '#BC8034';
    var icons = {
        video: '<svg viewBox="0 0 24 24" fill="none" stroke="' + iconColor + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="15" height="16" rx="2" fill="rgba(188,128,52,0.1)"/><polygon points="23 7 17 12 23 17 23 7"/></svg>',
        chat: '<svg viewBox="0 0 24 24" fill="none" stroke="' + iconColor + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="rgba(188,128,52,0.1)"/></svg>',
        map: '<svg viewBox="0 0 24 24" fill="none" stroke="' + iconColor + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" fill="rgba(188,128,52,0.08)"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>',
        layers: '<svg viewBox="0 0 24 24" fill="none" stroke="' + iconColor + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" fill="rgba(188,128,52,0.1)"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
        bot: '<svg viewBox="0 0 24 24" fill="none" stroke="' + iconColor + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="12" rx="2" fill="rgba(188,128,52,0.08)"/><line x1="12" y1="2" x2="12" y2="8"/><circle cx="12" cy="2" r="1" fill="' + iconColor + '"/><circle cx="8" cy="14" r="1.5" fill="' + iconColor + '"/><circle cx="16" cy="14" r="1.5" fill="' + iconColor + '"/></svg>',
        users: '<svg viewBox="0 0 24 24" fill="none" stroke="' + iconColor + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
    };

    // === DATA ===
    var data = {
        headline: "Was du bekommst",
        subheadline: "Alles, was du f\u00fcr deine Transformation brauchst - und mehr.",
        features: [
            {
                icon: 'video',
                title: "12 w\u00f6chentliche 1:1 Sessions",
                desc: "90 Minuten nur f\u00fcr dich. Kein Gruppenformat. Kein Zeitdruck. Jede Session geht so tief, wie du es brauchst."
            },
            {
                icon: 'chat',
                title: "WhatsApp-Support",
                desc: "Fragen, Erkenntnisse, Durchbr\u00fcche - melde dich, wann immer es wichtig ist. Du bist zwischen den Terminen nicht allein."
            },
            {
                icon: 'map',
                title: "Individueller Fahrplan",
                desc: "Kein Standard-Programm. Dein Weg wird nach jeder Session angepasst und weiterentwickelt."
            },
            {
                icon: 'layers',
                title: "Win\u00b3 Kurs inklusive (297 \u20ac)",
                desc: "Der vollst\u00e4ndige Selbstlernkurs als Fundament. Nutze ihn zwischen den Sessions oder arbeite unabh\u00e4ngig davon."
            },
            {
                icon: 'bot',
                title: "KI-Sparringspartner 24/7",
                desc: "Der KI-Assistent aus dem Win\u00b3 Kurs steht dir zus\u00e4tzlich zur Verf\u00fcgung - f\u00fcr Reflexion au\u00dferhalb der Sessions."
            },
            {
                icon: 'users',
                title: "Community-Zugang",
                desc: "Austausch mit anderen, die denselben Weg gehen. Gemeinsame Erfahrungen st\u00e4rken den eigenen Prozess."
            }
        ]
    };

    // === RENDER ===
    var cardsHTML = '';
    for (var i = 0; i < data.features.length; i++) {
        var feat = data.features[i];
        cardsHTML +=
            '<div class="wm-includes-card wm-fade">' +
                '<div class="wm-includes-icon">' + icons[feat.icon] + '</div>' +
                '<div class="wm-includes-title">' + feat.title + '</div>' +
                '<div class="wm-includes-desc">' + feat.desc + '</div>' +
            '</div>';
    }

    var sectionHTML =
        '<section class="wm-includes">' +
            '<div class="wm-includes-inner">' +
                '<h2 class="wm-section-headline wm-fade">' + data.headline + '</h2>' +
                '<div class="wm-section-subheadline wm-fade">' + data.subheadline + '</div>' +
                '<div class="wm-includes-grid">' + cardsHTML + '</div>' +
                '<div class="wm-includes-swipe"><span>\u2190</span> Wischen <span class="wm-includes-swipe-arrow">\u2192</span></div>' +
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

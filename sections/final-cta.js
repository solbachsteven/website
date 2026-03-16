/* ============================================
   FINAL CTA SECTION - Standalone JS
   Converted from Systeme.io Custom HTML
   ============================================ */

// ======== FONTS ========
(function() {
    var fonts = ['https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=Outfit:wght@300;400;500;600&family=Lora:ital,wght@0,400;1,400;1,500&display=swap'];
    fonts.forEach(function(url) {
        if (!document.querySelector('link[href="' + url + '"]')) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        }
    });

    // ======== CSS ========
    var style = document.createElement('style');
    style.setAttribute('data-section', 'final-cta');
    style.textContent = `
@font-face{
    font-family: "PacificaCondensed";
    src: url("https://db.onlinewebfonts.com/t/3ade034999153f8110b40724ad74f00e.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/3ade034999153f8110b40724ad74f00e.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/3ade034999153f8110b40724ad74f00e.ttf")format("truetype");
    font-weight:normal;
    font-style:normal;
    font-display:swap;
}

/* Win\u00b3 Logo-Text (inline) */
.w3-logo {
    font-family: 'PacificaCondensed', fantasy;
    font-weight: normal;
    font-size: 0.85em;
    letter-spacing: 2px;
    white-space: nowrap;
    color: #FFFFFF;
}

.w3-logo-sup {
    color: #C9A84C;
    font-size: 0.7em;
    margin-left: 1px;
    vertical-align: super;
}

/* ======================================================================
   FINAL CTA SECTION
   ====================================================================== */

/* Aeusserer Wrapper: Full-Width Breakout */
.fcta-wrap {
    position: relative;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-bottom: -1px;
}

/* ======== FADE-IN (IntersectionObserver) ======== */
.fcta-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fcta-fade.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ======== SECTION ======== */
.fcta-section {
    font-family: 'Outfit', sans-serif;
    color: #FAF7F2;
    padding: 100px 0;
    width: 100%;
    position: relative;
    z-index: 5;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px 40px 0 0;

    background:
        radial-gradient(ellipse 80% 60% at 20% 10%, rgba(201,168,76,0.08) 0%, transparent 60%),
        radial-gradient(ellipse 60% 50% at 85% 80%, rgba(201,168,76,0.05) 0%, transparent 55%),
        #111110;
}

/* Dekorative Gold-Linie oben */
.fcta-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg,
        transparent 10%,
        #C9A84C 30%,
        #DFC06A 50%,
        #C9A84C 70%,
        transparent 90%
    );
}

/* Subtiler Grain-Overlay fuer Tiefe */
.fcta-section::after {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
}

.fcta-container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 40px;
    text-align: center;
    position: relative;
    z-index: 2;
}

/* ======== SECTION LABEL ======== */
.fcta-label {
    font-size: 16px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: rgba(250,247,242,0.55);
    margin-bottom: 20px;
}

/* ======== HEADLINE ======== */
.fcta-headline {
    font-family: 'Fraunces', serif;
    font-size: 54px;
    font-weight: 600;
    line-height: 1.15;
    color: #FAF7F2;
    margin-bottom: 16px;
}

/* ======== SUBTITLE ======== */
.fcta-subtitle {
    font-family: 'Lora', serif;
    font-style: italic;
    font-size: 26px;
    color: rgba(250,247,242,0.55);
    margin-bottom: 50px;
}

/* Gold-Trennlinie unter Headline */
.fcta-headline-divider {
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #C9A84C, transparent);
    margin: 0 auto 50px;
}

/* ======== OPTIONS GRID ======== */
.fcta-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    margin-bottom: 0;
}

/* ======== OPTION CARD (Base) ======== */
.fcta-card {
    border-radius: 16px;
    padding: 44px 35px;
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.fcta-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

/* ---- Kurs-Karte: Dark Surface + Gold Accent ---- */
.fcta-card[data-option="kurs"] {
    background: #1A1917;
    border-top: 3px solid #C9A84C;
}

.fcta-card[data-option="kurs"] .fcta-framing {
    color: #C9A84C;
}

.fcta-card[data-option="kurs"] .fcta-title {
    color: #FAF7F2;
}

.fcta-card[data-option="kurs"] .fcta-price {
    color: #FAF7F2;
}

.fcta-card[data-option="kurs"] .fcta-price-note {
    color: #FAF7F2;
    opacity: 0.6;
}

.fcta-card[data-option="kurs"] .fcta-divider {
    background: rgba(250, 247, 242, 0.1);
}

/* ---- Mentoring-Karte: Dark Surface ---- */
.fcta-card[data-option="mentoring"] {
    background: #1A1917;
    border-top: 3px solid rgba(201, 168, 76, 0.4);
}

.fcta-card[data-option="mentoring"] .fcta-framing {
    color: #C9A84C;
}

.fcta-card[data-option="mentoring"] .fcta-title {
    color: #FAF7F2;
}

.fcta-card[data-option="mentoring"] .fcta-price {
    color: #FAF7F2;
}

.fcta-card[data-option="mentoring"] .fcta-price-note {
    color: #FAF7F2;
    opacity: 0.6;
}

.fcta-card[data-option="mentoring"] .fcta-divider {
    background: rgba(250, 247, 242, 0.1);
}

/* ======== CARD CONTENT ======== */
.fcta-framing {
    font-family: 'Lora', serif;
    font-style: italic;
    font-size: 24px;
    margin-bottom: 10px;
    display: block;
}

.fcta-title {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 24px;
}

.fcta-price {
    font-size: 42px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 4px;
}

.fcta-price-note {
    font-size: 13px;
    font-weight: 300;
    margin-bottom: 28px;
}

/* ======== DIVIDER ======== */
.fcta-divider {
    width: 60px;
    height: 1px;
    margin: 0 auto 28px;
}

/* ======== CTA BUTTONS ======== */
.fcta-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    padding: 16px 24px;
    border-radius: 12px;
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-height: 48px;
    line-height: 1;
    box-sizing: border-box;
}

.fcta-cta:hover {
    transform: translateY(-2px);
}

/* Primary: Gold Button */
.fcta-cta-primary {
    background: linear-gradient(135deg, #C9A84C 0%, #B8963F 100%);
    color: #111110;
    border: none;
}

.fcta-cta-primary:hover {
    box-shadow: 0 8px 32px rgba(201, 168, 76, 0.3);
}

/* Ghost: Gold-Glow Border */
.fcta-cta-ghost {
    background: transparent;
    color: #FAF7F2;
    border: 2px solid rgba(250, 247, 242, 0.25);
}

.fcta-cta-ghost:hover {
    border-color: rgba(201, 168, 76, 0.6);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* ======== TABLET ======== */
@media (max-width: 1024px) {
    .fcta-section {
        padding: 80px 0;
        min-height: auto;
    }

    .fcta-container {
        padding: 0 30px;
    }

    .fcta-headline {
        font-size: 44px;
    }

    .fcta-grid {
        gap: 20px;
    }

    .fcta-card {
        padding: 38px 28px;
    }

    .fcta-price {
        font-size: 36px;
    }

    .fcta-title {
        font-size: 18px;
    }
}

/* ======== MOBILE ======== */
@media (max-width: 768px) {
    .fcta-section {
        padding: 40px 0 36px;
        min-height: auto;
        border-radius: 24px 24px 0 0;
    }

    .fcta-container {
        padding: 0 12px;
    }

    .fcta-label {
        font-size: 14px;
        letter-spacing: 0.8px;
        margin-bottom: 12px;
    }

    .fcta-headline {
        font-size: 30px;
        margin-bottom: 8px;
    }

    .fcta-subtitle {
        font-size: 22px;
        margin-bottom: 16px;
    }

    .fcta-headline-divider {
        margin: 0 auto 20px;
        width: 60px;
    }

    .fcta-grid {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .fcta-card {
        padding: 22px 16px;
    }

    .fcta-framing {
        font-size: 22px;
        margin-bottom: 6px;
    }

    .fcta-title {
        font-size: 16px;
        margin-bottom: 16px;
    }

    .fcta-price {
        font-size: 28px;
    }

    .fcta-price-note {
        font-size: 14px;
        margin-bottom: 18px;
    }

    .fcta-divider {
        margin: 0 auto 18px;
    }

    .fcta-cta {
        padding: 14px 20px;
        font-size: 15px;
        min-height: 44px;
    }
}
`;
    document.head.appendChild(style);
})();

// ======== RENDERER ========
(function() {
    // ======== DATA ========
    var CTA_DATA = {
        headline: "Wenn du bereit bist...",

        options: [
            {
                id: "kurs",
                framing: "Erstmal selbst starten",
                title: "Der vollst\u00e4ndige Win\u00b3 Weg",
                price: "297 \u20ac",
                priceNote: "Einmalzahlung \u00b7 Kein Abo",
                cta: {
                    text: "Jetzt starten - 297 \u20ac",
                    url: "https://solbachsteven.systeme.io/academy",
                    style: "primary"
                }
            },
            {
                id: "mentoring",
                framing: "Du wei\u00dft, was du willst",
                title: "12 Wochen intensive 1:1 Begleitung",
                price: "3.000 \u20ac",
                priceNote: "Ratenzahlung m\u00f6glich",
                cta: {
                    text: "Jetzt bewerben",
                    url: "https://solbachsteven.systeme.io/bewerbung",
                    style: "ghost"
                }
            }
        ]
    };

    function w3brand(str) {
        return str.replace(/Win\u00b3/g, '<span class="w3-logo">Win<span class="w3-logo-sup">\u00b3</span></span>');
    }

    // ======== SYSTEME.IO-KOMPATIBEL: HTML via JS generieren ========

    // Aeusserer Wrapper (Full-Width Breakout)
    var wrap = document.createElement('div');
    wrap.className = 'fcta-wrap';

    var section = document.createElement('section');
    section.className = 'fcta-section';

    var container = document.createElement('div');
    container.className = 'fcta-container';

    section.appendChild(container);
    wrap.appendChild(section);

    var target = window.__SS_CONTAINER || document.body;
    target.appendChild(wrap);

    var data = CTA_DATA;

    // ======== LABEL ========
    var label = document.createElement('div');
    label.className = 'fcta-label fcta-fade';
    label.textContent = 'DEIN N\u00c4CHSTER SCHRITT';
    container.appendChild(label);

    // ======== HEADLINE ========
    var headline = document.createElement('h2');
    headline.className = 'fcta-headline fcta-fade';
    headline.textContent = data.headline;
    container.appendChild(headline);

    // ======== SUBTITLE ========
    var subtitle = document.createElement('div');
    subtitle.className = 'fcta-subtitle fcta-fade';
    subtitle.textContent = 'Zwei Wege, wie ich dich unterst\u00fctzen kann';
    container.appendChild(subtitle);

    // ======== GOLD DIVIDER ========
    var divider = document.createElement('div');
    divider.className = 'fcta-headline-divider fcta-fade';
    container.appendChild(divider);

    // ======== OPTIONS GRID ========
    var grid = document.createElement('div');
    grid.className = 'fcta-grid';
    container.appendChild(grid);

    // ======== CARDS ========
    data.options.forEach(function(option) {
        var card = document.createElement('div');
        card.className = 'fcta-card fcta-fade';
        card.setAttribute('data-option', option.id);

        var ctaClass = option.cta.style === 'primary' ? 'fcta-cta-primary' : 'fcta-cta-ghost';

        card.innerHTML =
            '<span class="fcta-framing">' + option.framing + '</span>' +
            '<div class="fcta-title">' + w3brand(option.title) + '</div>' +
            '<div class="fcta-price">' + option.price + '</div>' +
            '<div class="fcta-price-note">' + option.priceNote + '</div>' +
            '<div class="fcta-divider"></div>' +
            '<a href="' + option.cta.url + '" class="fcta-cta ' + ctaClass + '">' + option.cta.text + '</a>';

        grid.appendChild(card);
    });

    // ======== SCROLL FADE-IN (IntersectionObserver) ========
    // Wie in allen anderen Sections: opacity 0->1, translateY 30px->0, 0.6s ease
    var fadeElements = container.querySelectorAll('.fcta-fade');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Gestaffeltes Einblenden: jedes Element 120ms verzoegert
                var idx = Array.prototype.indexOf.call(fadeElements, entry.target);
                var delay = Math.max(0, idx) * 120;
                setTimeout(function() {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    fadeElements.forEach(function(el) {
        observer.observe(el);
    });
})();

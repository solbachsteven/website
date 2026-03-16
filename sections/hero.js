/*
 * Hero Section - Steven Solbach Website
 * Redesign 2026-03-16: Fraunces/Outfit/Lora, Dark Default, Gold #C9A84C
 * "Ruhig & Gewichtig" Motion Identity
 */

// =============================================
// CSS INJECTION
// =============================================
(function() {
    // Fonts werden via header.js geladen (Fraunces, Outfit, Lora, Poppins)
    // Font Awesome fuer andere Sections beibehalten
    var deps = [
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    ];
    deps.forEach(function(url) {
        if (!document.querySelector('link[href="' + url + '"]')) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        }
    });

    var style = document.createElement('style');
    style.setAttribute('data-section', 'hero');
    style.textContent = `
/* ======== BRAND TOKENS ======== */
:root {
    --hero-bg: #111110;
    --hero-gold: #C9A84C;
    --hero-gold-dark: #6B5A1E;
    --hero-text: #FAF7F2;
    --hero-text-muted: rgba(250,247,242,0.55);
    --hero-text-body: rgba(250,247,242,0.8);
    --hero-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

/* ======== W3 LOGO (beibehalten fuer andere Sections) ======== */
@font-face{
    font-family: "PacificaCondensed";
    src: url("https://db.onlinewebfonts.com/t/3ade034999153f8110b40724ad74f00e.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/3ade034999153f8110b40724ad74f00e.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/3ade034999153f8110b40724ad74f00e.ttf")format("truetype");
    font-weight:normal;
    font-style:normal;
    font-display:swap;
}
.w3-logo {
    font-family: 'PacificaCondensed', fantasy;
    font-weight: normal;
    font-size: 0.85em;
    letter-spacing: 2px;
    white-space: nowrap;
    color: var(--hero-text);
}
.w3-logo-sup {
    color: var(--hero-gold);
    font-size: 0.7em;
    margin-left: 1px;
    vertical-align: super;
}

/* ======== WRAPPER ======== */
.hero-wrapper {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    background: var(--hero-bg);
    position: relative;
    overflow: hidden;
    min-height: auto;
    display: flex;
    align-items: center;
}
.hero-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at 70% 40%, rgba(201,168,76,0.07) 0%, transparent 55%);
    pointer-events: none;
}

/* ======== CONTAINER ======== */
.hero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 60px 56px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 0 60px;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    z-index: 5;
}

/* ======== TEXT COLUMN ======== */
.hero-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0;
    grid-column: 1;
}

/* hero-ctas jetzt inline in hero-text */

/* ======== LABEL ======== */
.hero-label {
    font-family: 'Outfit', sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--hero-gold);
    margin-bottom: 16px;
    line-height: 1;
}

/* ======== HEADLINE ======== */
.hero-headline {
    font-family: 'Fraunces', serif;
    font-optical-sizing: auto;
    font-size: 52px;
    font-weight: 600;
    line-height: 1.12;
    letter-spacing: -0.5px;
    color: var(--hero-text);
    margin: 0 0 12px 0;
    text-transform: none;
}
.hero-headline-accent {
    color: var(--hero-gold);
}

/* ======== SUBLINE ======== */
.hero-subline {
    font-family: 'Lora', serif;
    font-style: italic;
    font-size: 18px;
    font-weight: 400;
    color: var(--hero-text-muted);
    margin-bottom: 24px;
    line-height: 1.5;
}

/* ======== BENEFITS ======== */
.hero-benefits {
    list-style: none;
    padding: 0;
    margin: 0 0 24px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.hero-benefits li {
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: var(--hero-text-body);
    display: flex;
    align-items: center;
    gap: 12px;
    line-height: 1.5;
}

.hero-check {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    border: 1.3px solid rgba(201,168,76,0.35);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.hero-check svg {
    width: 12px;
    height: 12px;
    stroke: var(--hero-gold);
    stroke-width: 2.5;
    fill: none;
}

/* ======== CTA ======== */
.hero-ctas {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 280px;
}

.hero-cta-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: var(--hero-bg);
    background: linear-gradient(135deg, var(--hero-gold) 0%, #B8963F 100%);
    border: none;
    border-radius: 12px;
    padding: 14px 32px;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.5s var(--hero-ease), box-shadow 0.5s var(--hero-ease);
    text-align: center;
    letter-spacing: 0.02em;
}
.hero-cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(201,168,76,0.3);
}
.hero-cta-primary .cta-arrow {
    transition: transform 0.5s var(--hero-ease);
    font-size: 18px;
}
.hero-cta-primary:hover .cta-arrow {
    transform: translateX(3px);
}

.hero-cta-context {
    font-family: 'Outfit', sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: var(--hero-text-muted);
    padding-left: 4px;
}

/* ======== IMAGE ======== */
.hero-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 2;
    grid-row: 1;
}

.hero-image img {
    width: 100%;
    max-width: 520px;
    height: auto;
    display: block;
    object-fit: contain;
}

/* ======== MOTION: Ruhig & Gewichtig ======== */
.hero-reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s var(--hero-ease), transform 0.7s var(--hero-ease);
}
.hero-reveal.visible {
    opacity: 1;
    transform: translateY(0);
}
/* Stagger: jedes Element 80ms versetzt */
.hero-reveal.visible.stagger-1 { transition-delay: 0ms; }
.hero-reveal.visible.stagger-2 { transition-delay: 80ms; }
.hero-reveal.visible.stagger-3 { transition-delay: 160ms; }
.hero-reveal.visible.stagger-4 { transition-delay: 240ms; }
.hero-reveal.visible.stagger-5 { transition-delay: 320ms; }
.hero-reveal.visible.stagger-6 { transition-delay: 400ms; }
.hero-reveal.visible.stagger-7 { transition-delay: 480ms; }
.hero-reveal.visible.stagger-8 { transition-delay: 560ms; }

/* ======== RESPONSIVE: Tablet ======== */
@media (max-width: 1024px) {
    .hero-container {
        grid-template-columns: 1fr 1fr;
        gap: 0 40px;
        padding: 36px 40px 40px;
    }
    .hero-headline { font-size: 42px; }
    .hero-subline { font-size: 16px; }
    .hero-benefits li { font-size: 15px; }
    .hero-image img { max-width: 420px; }
}

/* ======== RESPONSIVE: Mobile ======== */
@media (max-width: 768px) {
    .hero-wrapper { min-height: auto; }
    .hero-wrapper::before {
        background: radial-gradient(ellipse at 50% 20%, rgba(201,168,76,0.08) 0%, transparent 60%);
    }
    .hero-container {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: 28px;
        padding: 24px 20px 32px;
        text-align: center;
    }
    .hero-text { align-items: center; order: 1; grid-column: 1; }
    .hero-image { order: 2; grid-column: 1; grid-row: auto; }
    .hero-ctas { max-width: 100%; width: 100%; align-items: center; }
    .hero-label { font-size: 11px; letter-spacing: 2px; }
    .hero-headline { font-size: 40px; }
    .hero-subline { font-size: 15px; margin-bottom: 24px; }
    .hero-benefits { align-items: flex-start; display: inline-flex; text-align: left; }
    .hero-benefits li { font-size: 15px; }
    .hero-check { width: 20px; height: 20px; }
    .hero-check svg { width: 10px; height: 10px; }
    .hero-cta-primary { font-size: 15px; padding: 14px 28px; width: 100%; max-width: 320px; }
    .hero-cta-context { text-align: center; padding-left: 0; }
    .hero-image img { max-width: 340px; }
}

/* ======== RESPONSIVE: Small Mobile ======== */
@media (max-width: 480px) {
    .hero-headline { font-size: 34px; }
    .hero-subline { font-size: 14px; }
    .hero-image img { max-width: 280px; }
}

/* ======== LIGHT MODE ======== */
body.light-mode .hero-wrapper {
    background: #FAF7F2;
}
body.light-mode .hero-wrapper::before {
    background: radial-gradient(ellipse at 70% 40%, rgba(201,168,76,0.05) 0%, transparent 55%);
}
body.light-mode .hero-headline {
    color: #2D2726;
}
body.light-mode .hero-headline-accent {
    color: var(--hero-gold-dark);
}
body.light-mode .hero-subline {
    color: rgba(45,39,38,0.5);
}
body.light-mode .hero-benefits li {
    color: #555;
}
body.light-mode .hero-check {
    border-color: rgba(107,90,30,0.3);
}
body.light-mode .hero-check svg {
    stroke: var(--hero-gold-dark);
}
body.light-mode .hero-cta-context {
    color: rgba(45,39,38,0.45);
}
body.light-mode .hero-label {
    color: var(--hero-gold-dark);
}
`;
    document.head.appendChild(style);
})();

// =============================================
// RENDERER
// =============================================
(function() {
    console.log('[SS-Hero] Renderer gestartet (Redesign v2)');

    // ======== ASSETS ========
    var isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    var ASSETS = isLocal ? '/assets/' : 'https://stevensolbach.de/assets/';

    // DATA
    var d = {
        label: "Für Menschen, die ganz leben wollen",
        headline: "Werde Gestalter:in",
        headlineAccent: "deines eigenen Lebens",
        subline: "Tiefe. Sinn. Erfolg \u2013 auf deine Art.",
        benefits: [
            "Erkenne deine Lebensaufgabe",
            "Befreie dein wahres, ganzes Selbst",
            "Erschaffe ein Leben, das dir auf allen Ebenen entspricht"
        ],
        cta: {
            primary: { text: "Kostenlos starten", url: "#freebie-section" },
            context: "Kein Account n\u00f6tig \u00b7 3 Tage \u00b7 100% kostenlos"
        },
        image: ASSETS + 'steven-hero-dark.png',
        imageFallback: "https://d1yei2z3i6k35z.cloudfront.net/15985342/6978eb69d9665_Removebackgroundproject-22.png"
    };

    // SVG Check Icon (monoline)
    var checkSVG = '<span class="hero-check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span>';

    // Benefits HTML
    var benefitsHTML = '';
    for (var i = 0; i < d.benefits.length; i++) {
        benefitsHTML += '<li class="hero-reveal stagger-' + (i + 4) + '">' + checkSVG + d.benefits[i] + '</li>';
    }

    var html = '' +
        '<div class="hero-wrapper">' +
            '<div class="hero-container">' +
                '<div class="hero-text">' +
                    '<div class="hero-label hero-reveal stagger-1">' + d.label + '</div>' +
                    '<h1 class="hero-headline hero-reveal stagger-2">' +
                        d.headline + '<br>' +
                        '<span class="hero-headline-accent">' + d.headlineAccent + '</span>' +
                    '</h1>' +
                    '<div class="hero-subline hero-reveal stagger-3">' + d.subline + '</div>' +
                    '<ul class="hero-benefits">' + benefitsHTML + '</ul>' +
                    '<div class="hero-ctas hero-reveal stagger-7">' +
                        '<a href="' + d.cta.primary.url + '" class="hero-cta-primary">' +
                            d.cta.primary.text +
                            '<span class="cta-arrow">\u2192</span>' +
                        '</a>' +
                        '<div class="hero-cta-context">' + d.cta.context + '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="hero-image hero-reveal stagger-2">' +
                    '<img src="' + d.image + '" alt="Steven Solbach" loading="eager"' +
                    ' onerror="this.onerror=null;this.src=\'' + d.imageFallback + '\';">' +
                '</div>' +
            '</div>' +
        '</div>';

    // Insert into DOM
    var target = window.__SS_CONTAINER || document.body;
    var wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    target.appendChild(wrapper.firstElementChild);
    console.log('[SS-Hero] DOM eingefuegt in:', target.id || 'body');

    // ======== ENTRANCE: Ruhig & Gewichtig ========
    // Direkte Style-Animation statt CSS-Klassen (vermeidet Timing-Probleme)
    var revealItems = document.querySelectorAll('.hero-reveal');
    var baseDelay = 200; // ms nach DOM-Insert
    var staggerMs = 80;

    function revealElement(el, delay) {
        setTimeout(function() {
            el.style.transition = 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, delay);
    }

    for (var j = 0; j < revealItems.length; j++) {
        var el = revealItems[j];
        // Stagger-Index aus Klasse lesen
        var staggerIdx = 0;
        var classes = el.className.split(' ');
        for (var c = 0; c < classes.length; c++) {
            if (classes[c].indexOf('stagger-') === 0) {
                staggerIdx = parseInt(classes[c].replace('stagger-', ''), 10) - 1;
            }
        }
        revealElement(el, baseDelay + (staggerIdx * staggerMs));
    }
})();

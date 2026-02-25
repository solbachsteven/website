// =============================================================
// DIE DREI WEGE SECTION - Standalone JS (converted from Systeme.io)
// =============================================================

// ======== FONT LOADING ========
(function() {
    var fonts = [
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap'
    ];
    fonts.forEach(function(url) {
        if (!document.querySelector('link[href="' + url + '"]')) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        }
    });

    var style = document.createElement('style');
    style.setAttribute('data-section', 'drei-wege');
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
    color: #BC8034;
    font-size: 0.7em;
    margin-left: 1px;
    vertical-align: super;
}

:root {
    --dw-bg-primary: #2C2726;
    --dw-bg-secondary: #F4F0EC;
    --dw-bg-box: #2C2726;
    --dw-accent-gold: #BC8034;
    --dw-accent-gold-dark: #8B5E20;
    --dw-cta-orange: #D96935;
    --dw-text-white: #FFFFFF;
    --dw-text-dark: #2C2726;
    --dw-radius: 20px;
    --dw-font: 'Poppins', sans-serif;
}

/* ======== SECTION ======== */
.dw-section {
    font-family: var(--dw-font);
    background: transparent;
    color: var(--dw-text-white);
    padding: 80px 0;
    width: 100%;
    position: relative;
    z-index: 5;
}

.dw-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 0px;
}

/* ======== HEADER ======== */
.dw-header {
    text-align: center;
    margin-bottom: 60px;
    opacity: 0;
    transform: translateY(30px);
}

.dw-header.visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.dw-label {
    font-size: 16px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: var(--dw-accent-gold);
    margin-bottom: 10px;
}

.dw-title {
    font-size: 54px;
    line-height: 60px;
}

.dw-title .light { font-weight: 400; }
.dw-title .bold { font-weight: 600; }

.dw-subtitle {
    font-family: 'Caveat', cursive;
    font-size: 26px;
    color: var(--dw-accent-gold);
    margin-top: 12px;
}

/* ======== GRID ======== */
.dw-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr 1fr;
    gap: 20px;
    align-items: stretch;
    margin-bottom: 50px;
}

/* ======== CARD BASE ======== */
.dw-card {
    background: var(--dw-bg-box);
    border-radius: var(--dw-radius);
    padding: 35px 30px;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
}

.dw-card.visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
}

.dw-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.dw-card.visible:hover {
    transform: translateY(-5px);
}

/* ======== HIGHLIGHTED CARD ======== */
.dw-card.dw-highlighted {
    background: var(--dw-bg-secondary);
    color: var(--dw-text-dark);
    padding: 40px 35px;
    border-top: 3px solid var(--dw-accent-gold);
}

.dw-card.dw-highlighted .dw-card-subtitle,
.dw-card.dw-highlighted .dw-price-note,
.dw-card.dw-highlighted .dw-feature-text {
    color: var(--dw-text-dark);
}

.dw-card.dw-highlighted .dw-feature-text.excluded {
    color: var(--dw-text-dark);
    opacity: 0.35;
}

/* ======== BADGE ======== */
.dw-badge {
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 6px 16px;
    border-radius: 30px;
    margin-bottom: 20px;
    align-self: flex-start;
    animation: dwBadgePulse 2s ease-in-out infinite;
}

.dw-badge.dw-badge-gold {
    background: var(--dw-accent-gold);
    color: var(--dw-text-dark);
}

.dw-badge.dw-badge-dark {
    background: var(--dw-bg-primary);
    color: var(--dw-text-white);
}

.dw-badge.dw-badge-white {
    background: transparent;
    color: var(--dw-text-white);
    border: 1.5px solid rgba(255, 255, 255, 0.4);
}

.dw-badge.dw-badge-gold-text {
    background: transparent;
    color: var(--dw-accent-gold);
    border: 1.5px solid var(--dw-accent-gold);
}

@keyframes dwBadgePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

/* ======== CARD IMAGE ======== */
.dw-card-image {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 12px;
    background: var(--dw-bg-primary);
}

/* ======== CARD LOGO ======== */
.dw-card-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 20px;
}

.dw-card-logo.dw-logo-left {
    justify-content: flex-start;
}

/* ======== CARD TEXT LABEL (statt Logo) ======== */
.dw-card-label {
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    padding: 0 0 20px;
}

.dw-card-label .dw-label-circle {
    width: 150px;
    height: 150px;
}

.dw-card-label .dw-label-text {
    font-family: 'PacificaCondensed', fantasy;
    font-size: 26px;
    letter-spacing: 2px;
    color: #F4F0EC;
    white-space: nowrap;
}

/* ======== CARD CONTENT ======== */
.dw-card-subtitle {
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--dw-accent-gold);
    margin-bottom: 8px;
}

.dw-card-title {
    font-size: 22px;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 20px;
}

.dw-price {
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 4px;
    line-height: 1.2;
}

.dw-price-note {
    font-size: 13px;
    font-weight: 300;
    opacity: 0.6;
    margin-bottom: 25px;
    color: var(--dw-text-white);
}

/* ======== DIVIDER ======== */
.dw-divider {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin-bottom: 25px;
}

.dw-card.dw-highlighted .dw-divider {
    background: rgba(45, 39, 38, 0.12);
}

/* ======== FEATURES ======== */
.dw-features {
    list-style: none;
    padding: 0;
    margin: 0 0 30px 0;
    flex-grow: 1;
}

.dw-feature {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 7px 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
}

.dw-feature-icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
}

.dw-feature-icon.included { color: var(--dw-accent-gold); }

.dw-feature-icon.excluded {
    color: var(--dw-text-white);
    opacity: 0.5;
}

.dw-card.dw-highlighted .dw-feature-icon.excluded {
    color: var(--dw-text-dark);
    opacity: 0.5;
}

.dw-feature-text {
    color: var(--dw-text-white);
}

.dw-feature-text.excluded {
    opacity: 0.5;
    text-decoration: line-through;
}

/* ======== CTA BUTTONS ======== */
.dw-cta {
    display: block;
    width: 100%;
    text-align: center;
    padding: 16px 24px;
    border-radius: var(--dw-radius);
    font-family: var(--dw-font);
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin-top: auto;
    min-height: 48px;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dw-cta:hover {
    transform: translateY(-2px);
}

.dw-cta.dw-cta-primary {
    background: var(--dw-cta-orange);
    color: var(--dw-text-white);
    border: none;
}

.dw-cta.dw-cta-primary:hover {
    box-shadow: 0 10px 30px rgba(217, 105, 53, 0.3);
}

.dw-cta.dw-cta-ghost {
    background: transparent;
    color: var(--dw-text-white);
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.dw-cta.dw-cta-ghost:hover {
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.dw-cta.dw-cta-subtle {
    background: #3C3736;
    color: var(--dw-text-white);
    border: none;
}

.dw-cta.dw-cta-subtle:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.dw-card.dw-highlighted .dw-cta.dw-cta-ghost {
    color: var(--dw-text-dark);
    border-color: rgba(45, 39, 38, 0.3);
}

.dw-card.dw-highlighted .dw-cta.dw-cta-ghost:hover {
    border-color: rgba(45, 39, 38, 0.6);
}

/* ======== BRIDGE TEXT ======== */
.dw-bridge {
    padding: 60px 40px;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
}

.dw-bridge .bridge-caveat {
    font-family: 'Caveat', cursive;
    font-size: 28px;
    color: #BC8034;
    margin: 0 0 8px;
    display: block;
}

.dw-bridge .bridge-body {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
}

.dw-bridge-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.dw-bridge-fade.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ======== TABLET ======== */
@media (max-width: 1024px) {
    .dw-title {
        font-size: 44px;
        line-height: 50px;
    }

    .dw-grid {
        grid-template-columns: 1fr 1fr;
    }

    .dw-card[data-plan="kurs"] { order: 1; }
    .dw-card[data-plan="mentoring"] { order: 2; }
    .dw-card[data-plan="starter"] { order: 3; grid-column: 1 / -1; }
}

/* ======== MOBILE ======== */
@media (max-width: 768px) {
    .dw-section {
        padding: 60px 0;
    }

    .dw-container {
        padding: 0 12px;
    }

    .dw-title {
        font-size: 36px;
        line-height: 42px;
    }

    .dw-subtitle {
        font-size: 22px;
    }

    .dw-header {
        margin-bottom: 40px;
    }

    .dw-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    .dw-card[data-plan="kurs"] { order: 1; }
    .dw-card[data-plan="mentoring"] { order: 2; }
    .dw-card[data-plan="starter"] { order: 3; }

    .dw-card {
        padding: 22px 16px;
    }

    .dw-card.dw-highlighted {
        padding: 24px 18px;
    }

    .dw-price {
        font-size: 28px;
    }

    .dw-card-title {
        font-size: 18px;
        margin-bottom: 14px;
    }

    .dw-card-image {
        width: 120px;
        height: 120px;
    }

    .dw-card-logo svg {
        width: 120px;
        height: 120px;
    }

    .dw-card-label .dw-label-circle {
        width: 120px;
        height: 120px;
    }

    .dw-card-logo {
        padding: 0 0 14px;
    }

    .dw-card-label {
        width: 120px;
        padding: 0 0 14px;
    }

    .dw-card-label .dw-label-text {
        font-size: 22px;
    }

    .dw-features {
        margin: 0 0 20px 0;
    }

    .dw-feature {
        font-size: 14px;
        padding: 5px 0;
    }

    .dw-label {
        font-size: 14px;
    }

    .dw-price-note {
        font-size: 13px;
        margin-bottom: 18px;
    }

    .dw-divider {
        margin-bottom: 18px;
    }

    .dw-badge {
        font-size: 11px;
        padding: 5px 12px;
        margin-bottom: 14px;
    }

    .dw-card-subtitle {
        font-size: 12px;
        margin-bottom: 6px;
    }

    .dw-bridge {
        padding: 40px 12px;
    }

    .dw-bridge .bridge-caveat {
        font-size: 24px;
    }

    .dw-bridge .bridge-body {
        font-size: 17px;
    }
}
`;
    document.head.appendChild(style);
})();

// ======== RENDERER ========
(function() {
    // ======== DATA ========
    var PRICING_DATA = {
        // Section Header
        label: "W\u00c4HLE DEINEN WEG",
        titleBold: "Angebote,",
        titleLight: "die dich weiterbringen",
        subtitle: "Drei Wege \u2014 welcher passt zu dir?",

        // =============================================
        // ANGEBOTE
        // =============================================
        plans: [
            {
                id: "starter",
                title: "Erkenne deine Lebensaufgabe",
                subtitle: "Kostenlos starten",
                price: "Kostenlos",
                priceNote: "Kein Abo - Kein Risiko",
                textLabel: "STARTER",
                badge: "Kostenlos",
                badgeStyle: "white",
                highlighted: false,
                features: [
                    { text: "Vollst\u00e4ndig kostenlos", included: true },
                    { text: "5 einfache Schritte", included: true },
                    { text: "Eigenst\u00e4ndiger Mini-Kurs", included: true },
                    { text: "Sofortiger Zugang", included: true },
                    { text: "KI-Assistent", included: false },
                    { text: "1:1 Begleitung", included: false }
                ],
                cta: {
                    text: "Kostenlos starten",
                    url: "https://solbachsteven.systeme.io/lebensaufgabe",
                    style: "ghost"
                },
                mobileOrder: 3
            },
            {
                id: "kurs",
                title: "Der vollst\u00e4ndige Win\u00b3 Kurs",
                subtitle: "F\u00fcr Selber-Macher",
                price: "297 \u20ac",
                priceNote: "Einmalzahlung - Kein Abo",
                logo: "light",
                logoName: "Academy",
                logoAlign: "dw-logo-left",
                badge: "BELIEBTESTE WAHL",
                highlighted: true,
                features: [
                    { text: "Komplettes Transformations-System in 3 Phasen", included: true },
                    { text: "KI-Assistent 24/7", included: true },
                    { text: "Schritt-f\u00fcr-Schritt Textanleitungen", included: true },
                    { text: "Praktische \u00dcbungen", included: true },
                    { text: "Eigenes Tempo, flexibler Zugang", included: true },
                    { text: "1:1 Sessions", included: false }
                ],
                cta: {
                    text: "Jetzt starten - 297 \u20ac",
                    url: "https://solbachsteven.systeme.io/academy",
                    style: "primary"
                },
                mobileOrder: 1
            },
            {
                id: "mentoring",
                title: "12 Wochen intensive<br>1:1 Begleitung",
                subtitle: "F\u00fcr Entschlossene",
                price: "3.000 \u20ac",
                priceNote: "Ratenzahlung m\u00f6glich",
                logo: "dark",
                logoName: "Mentoring",
                logoAlign: "dw-logo-left",
                badge: "NUR 8 PL\u00c4TZE",
                badgeStyle: "gold-text",
                highlighted: false,
                features: [
                    { text: "Kompletter Win\u00b3 Kurs inklusive", included: true },
                    { text: "12\u00d7 1:1 Sessions (90 Min.)", included: true },
                    { text: "WhatsApp-Support", included: true },
                    { text: "Individuelle Roadmap", included: true },
                    { text: "Pers\u00f6nliche Betreuung", included: true },
                    { text: "Beschleunigte Transformation", included: true }
                ],
                cta: {
                    text: "Jetzt bewerben",
                    url: "https://solbachsteven.systeme.io/mentoring",
                    style: "subtle"
                },
                mobileOrder: 2
            }
        ]
    };

    function w3brand(str) {
        return str.replace(/Win\u00b3/g, '<span class="w3-logo">Win<span class="w3-logo-sup">\u00b3</span></span>');
    }

    // ======== HTML via JS generieren ========
    var section = document.createElement('section');
    section.className = 'dw-section';

    var container = document.createElement('div');
    container.className = 'dw-container';

    var header = document.createElement('div');
    header.className = 'dw-header';
    header.id = 'dwHeader';

    var grid = document.createElement('div');
    grid.className = 'dw-grid';
    grid.id = 'dwGrid';

    container.appendChild(header);
    container.appendChild(grid);
    section.appendChild(container);

    // Container-aware insertion
    var target = window.__SS_CONTAINER || document.body;
    target.appendChild(section);

    var data = PRICING_DATA;

    // ======== HEADER ========
    var titleHTML = '';
    if (data.titleBold) titleHTML += '<span class="bold">' + data.titleBold + '</span> ';
    if (data.titleLight) titleHTML += '<span class="light">' + data.titleLight + '</span>';

    header.innerHTML =
        '<div class="dw-label">' + data.label + '</div>' +
        '<h2 class="dw-title">' + titleHTML + '</h2>' +
        (data.subtitle ? '<div class="dw-subtitle">' + data.subtitle + '</div>' : '');

    // ======== LOGO SVG TEMPLATES (Stacked/Vertikal) ========
    var darkIconSVG = '<svg viewBox="0 0 120 120" width="150" height="150"><circle cx="60" cy="60" r="44" stroke="rgba(188,128,52,0.25)" stroke-width="1" fill="rgba(188,128,52,0.06)"/><g transform="translate(60,60)" stroke="#BC8034" stroke-width="1.5" fill="none"><circle cx="0" cy="-13" r="20"/><circle cx="10.4" cy="6" r="20"/><circle cx="-10.4" cy="6" r="20"/></g><circle cx="60" cy="60" r="4" fill="#F5F0EB"/></svg>';
    var lightIconSVG = '<svg viewBox="0 0 120 120" width="150" height="150"><circle cx="60" cy="60" r="44" stroke="rgba(188,128,52,0.25)" stroke-width="1.2" fill="rgba(188,128,52,0.05)"/><g transform="translate(60,60)" stroke="#2C2726" stroke-width="2.0" fill="none"><circle cx="0" cy="-13" r="20"/><circle cx="10.4" cy="6" r="20"/><circle cx="-10.4" cy="6" r="20"/></g><circle cx="60" cy="60" r="4" fill="#BC8034"/></svg>';

    function buildLogoLockup(variant, name, alignClass) {
        var isDark = variant === 'dark';
        var icon = isDark ? darkIconSVG : lightIconSVG;
        var textColor = isDark ? '#F4F0EC' : '#2C2726';
        var textStroke = isDark ? '' : '-webkit-text-stroke:0.3px #2C2726;';
        var supStroke = isDark ? '' : '-webkit-text-stroke:0.3px #BC8034;';
        var cls = 'dw-card-logo' + (alignClass ? ' ' + alignClass : '');
        return '<div class="' + cls + '">' +
            '<div style="display:inline-flex;flex-direction:column;align-items:flex-start;gap:4px;">' +
                icon +
                '<span style="font-family:\'PacificaCondensed\',fantasy;font-size:26px;letter-spacing:2px;color:' + textColor + ';white-space:nowrap;' + textStroke + '">Win<span style="color:#BC8034;font-size:1.15em;margin-left:2px;' + supStroke + '">&#179;</span> ' + name + '</span>' +
            '</div></div>';
    }

    // ======== CHECK / DASH SVG ========
    var checkSVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    var dashSVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>';

    // ======== CARDS ========
    data.plans.forEach(function(plan) {
        var card = document.createElement('div');
        card.className = 'dw-card' + (plan.highlighted ? ' dw-highlighted' : '');
        card.setAttribute('data-plan', plan.id);

        var badgeHTML = '';
        if (plan.badge) {
            var badgeClass = plan.highlighted ? 'dw-badge-gold'
                : plan.badgeStyle === 'white' ? 'dw-badge-white'
                : plan.badgeStyle === 'gold-text' ? 'dw-badge-gold-text'
                : 'dw-badge-dark';
            badgeHTML = '<span class="dw-badge ' + badgeClass + '">' + plan.badge + '</span>';
        }

        var featuresHTML = '';
        plan.features.forEach(function(f) {
            var iconClass = f.included ? 'included' : 'excluded';
            var textClass = f.included ? '' : ' excluded';
            var icon = f.included ? checkSVG : dashSVG;
            featuresHTML +=
                '<li class="dw-feature">' +
                    '<span class="dw-feature-icon ' + iconClass + '">' + icon + '</span>' +
                    '<span class="dw-feature-text' + textClass + '">' + w3brand(f.text) + '</span>' +
                '</li>';
        });

        var ctaClass = plan.cta.style === 'primary' ? 'dw-cta-primary'
            : plan.cta.style === 'subtle' ? 'dw-cta-subtle'
            : 'dw-cta-ghost';

        var priceNoteHTML = plan.priceNote
            ? '<div class="dw-price-note">' + plan.priceNote + '</div>'
            : '<div class="dw-price-note">&nbsp;</div>';

        var imageHTML = '';
        if (plan.textLabel) {
            var circleSVG = '<svg class="dw-label-circle" viewBox="0 0 120 120" width="150" height="150"><circle cx="60" cy="60" r="44" stroke="rgba(188,128,52,0.25)" stroke-width="1" fill="rgba(188,128,52,0.06)"/><circle cx="60" cy="60" r="2.8" fill="#F5F0EB"/></svg>';
            imageHTML = '<div class="dw-card-label">' + circleSVG + '<span class="dw-label-text">' + plan.textLabel + '</span></div>';
        } else if (plan.logo && plan.logoName) {
            var logoAlign = plan.logoAlign || '';
            imageHTML = buildLogoLockup(plan.logo, plan.logoName, logoAlign);
        } else if (plan.image) {
            imageHTML = '<div class="dw-card-logo"><img src="' + plan.image + '" alt="' + plan.title + '" class="dw-card-image" loading="lazy"></div>';
        }

        var contentHTML =
            badgeHTML +
            '<div class="dw-card-subtitle">' + plan.subtitle + '</div>' +
            '<h3 class="dw-card-title">' + w3brand(plan.title) + '</h3>' +
            '<div class="dw-price">' + plan.price + '</div>' +
            priceNoteHTML +
            '<div class="dw-divider"></div>' +
            '<ul class="dw-features">' + featuresHTML + '</ul>' +
            '<a href="' + plan.cta.url + '" class="dw-cta ' + ctaClass + '">' + plan.cta.text + '</a>';

        card.innerHTML = imageHTML + contentHTML;

        grid.appendChild(card);
    });

    // ======== SCROLL REVEAL ========
    var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var allElements = [header].concat(
                    Array.from(grid.children)
                );
                var delay = allElements.indexOf(entry.target) * 120;
                setTimeout(function() {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe header + cards
    observer.observe(header);
    Array.from(grid.children).forEach(function(card) {
        observer.observe(card);
    });
})();

// ======== BRIDGE TEXT: Angebote -> Testimonials ========
(function() {
    var bridge = document.createElement('div');
    bridge.className = 'dw-bridge dw-bridge-fade';
    bridge.innerHTML = '<span class="bridge-caveat">Funktioniert das wirklich?</span><p class="bridge-body">Lass die sprechen, die den Weg schon gegangen sind.</p>';

    // Container-aware insertion
    var target = window.__SS_CONTAINER || document.body;
    target.appendChild(bridge);

    var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
        });
    }, { threshold: 0.1 });
    obs.observe(bridge);
})();

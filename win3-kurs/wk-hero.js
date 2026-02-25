// Win³ Kurs Landingpage - Hero Section (Standalone)
// 2-Spalten Layout: Text links, Kurs-Mockup rechts (Desktop + Mobile Frame)
// Loaded via: <script src="https://solbachsteven.github.io/website/win3-kurs/wk-hero.js"></script>
(function() {
    if (window.__WK_HERO_LOADED) return;
    window.__WK_HERO_LOADED = true;

    // === SHARED RESOURCES (idempotent) ===
    if (!window.__WK_SHARED) {
        window.__WK_SHARED = true;

        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap';
        document.head.appendChild(fontLink);

        var baseStyle = document.createElement('style');
        baseStyle.setAttribute('data-section', 'wk-base');
        baseStyle.textContent = `
/* ======== WK BASE RESET ======== */
.wk-page {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;
    background: #1A1A1A;
    overflow-x: hidden;
    position: relative;
    z-index: 5;
}
.wk-page *, .wk-page *::before, .wk-page *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* ======== SCROLL REVEAL ======== */
.wk-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.wk-fade.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ======== SHARED BUTTON ======== */
.wk-cta-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-weight: 500;
    color: #FFFFFF;
    background: #D96935;
    border: none;
    border-radius: 20px;
    padding: 18px 48px;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    margin-bottom: 16px;
}
.wk-cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(217, 105, 53, 0.4);
}
.wk-trust {
    font-size: 13px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.5);
    letter-spacing: 0.3px;
}

/* ======== SHARED SECTION LABEL ======== */
.wk-label {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #BC8034;
    margin-bottom: 20px;
}
.wk-section-headline {
    font-size: 42px;
    font-weight: 600;
    line-height: 1.2;
    color: #FFFFFF;
    margin-bottom: 16px;
}
.wk-section-subheadline {
    font-family: 'Caveat', cursive;
    font-size: 24px;
    color: rgba(244, 240, 236, 0.6);
    margin-bottom: 48px;
}

/* ======== SHARED MOBILE ======== */
@media (max-width: 768px) {
    .wk-cta-primary {
        font-size: 15px;
        padding: 16px 36px;
        width: 100%;
        max-width: 340px;
    }
    .wk-section-headline { font-size: 28px; }
    .wk-section-subheadline { font-size: 20px; margin-bottom: 36px; }
}
`;
        document.head.appendChild(baseStyle);
    }

    // === HERO CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wk-hero');
    style.textContent = `
/* ======== HERO SECTION ======== */
.wk-hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 40px 80px;
    background: #F4F0EC;
    border-radius: 0 0 80px 0;
    position: relative;
    z-index: 6;
    box-shadow: 0 20px 60px rgba(188, 128, 52, 0.25), 0 8px 24px rgba(188, 128, 52, 0.15);
}
.wk-hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}
.wk-hero-text {
    display: flex;
    flex-direction: column;
}
.wk-hero-label {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #BC8034;
    margin-bottom: 28px;
}
.wk-hero-headline {
    font-size: 44px;
    font-weight: 600;
    line-height: 1.2;
    color: #2C2726;
    margin-bottom: 20px;
}
.wk-hero-subtext {
    font-family: 'Caveat', cursive;
    font-size: 26px;
    color: #BC8034;
    margin-bottom: 16px;
}
.wk-hero-description {
    font-size: 17px;
    font-weight: 300;
    line-height: 1.7;
    color: #2C2726;
    opacity: 0.75;
    margin-bottom: 40px;
    max-width: 480px;
}
.wk-hero .wk-cta-primary {
    font-size: 18px;
    padding: 20px 56px;
    font-weight: 600;
    align-self: flex-start;
}
.wk-hero .wk-trust {
    color: rgba(44, 39, 38, 0.45);
}

/* ======== DESKTOP BROWSER FRAME ======== */
.wk-hero-mockups {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 480px;
}
.wk-mockup-desktop {
    width: 100%;
    max-width: 520px;
    background: #1E1E1E;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 25px 60px rgba(44, 39, 38, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.06);
}
.wk-mockup-titlebar {
    height: 36px;
    background: #2D2D2D;
    display: flex;
    align-items: center;
    padding: 0 12px;
    gap: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.wk-mockup-dots {
    display: flex;
    gap: 6px;
    margin-right: 10px;
}
.wk-mockup-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
.wk-mockup-dot--close { background: #FF5F56; }
.wk-mockup-dot--min { background: #FFBD2E; }
.wk-mockup-dot--max { background: #27C93F; }
.wk-mockup-tab {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #1E1E1E;
    border-radius: 6px 6px 0 0;
    padding: 5px 14px;
    font-size: 9px;
    color: rgba(255, 255, 255, 0.7);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 400;
    position: relative;
    top: 1px;
}
.wk-mockup-tab-icon {
    width: 10px;
    height: 10px;
    background: #D4A04A;
    border-radius: 2px;
    flex-shrink: 0;
}
.wk-mockup-urlbar {
    height: 30px;
    background: #1E1E1E;
    display: flex;
    align-items: center;
    padding: 0 12px;
    gap: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.wk-mockup-nav-btns {
    display: flex;
    gap: 6px;
}
.wk-mockup-nav-btn {
    width: 8px;
    height: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.wk-mockup-nav-btn svg { width: 8px; height: 8px; }
.wk-mockup-url {
    flex: 1;
    background: #2D2D2D;
    border-radius: 5px;
    padding: 3px 10px;
    display: flex;
    align-items: center;
    gap: 5px;
}
.wk-mockup-url-lock svg { width: 8px; height: 8px; }
.wk-mockup-url-text {
    font-size: 9px;
    color: rgba(255, 255, 255, 0.5);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 400;
}
.wk-mockup-desktop-screen {
    width: 100%;
    aspect-ratio: 16 / 10;
    background: #1A1A1A;
    overflow: hidden;
    position: relative;
}

/* ======== MOBILE PHONE FRAME ======== */
.wk-mockup-mobile {
    position: absolute;
    bottom: -24px;
    right: -24px;
    width: 150px;
    background: #1A1A1A;
    border-radius: 28px;
    padding: 10px 8px;
    box-shadow: 0 20px 50px rgba(44, 39, 38, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
}
.wk-mockup-island {
    width: 40px;
    height: 10px;
    background: #000000;
    border-radius: 10px;
    margin: 2px auto 6px;
}
.wk-mockup-mobile-screen {
    width: 100%;
    aspect-ratio: 9 / 18;
    background: #1A1A1A;
    border-radius: 18px;
    overflow: hidden;
    position: relative;
}
.wk-mockup-home-indicator {
    width: 44px;
    height: 4px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 2px;
    margin: 6px auto 2px;
}

/* ======== KURSVORSCHAU INHALTE ======== */
.wk-preview {
    width: 100%;
    height: 100%;
    display: flex;
    font-family: 'Poppins', sans-serif;
}
.wk-preview-sidebar {
    width: 28%;
    background: #141414;
    padding: 12px 8px;
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.wk-preview-sidebar-title {
    font-size: 5.5px;
    font-weight: 600;
    color: #D4A04A;
    padding: 4px 6px 8px;
    letter-spacing: 0.3px;
}
.wk-preview-sidebar-item {
    font-size: 5px;
    color: rgba(244, 240, 236, 0.4);
    padding: 5px 6px;
    border-radius: 4px;
    line-height: 1.4;
    font-weight: 300;
}
.wk-preview-sidebar-item--active {
    background: rgba(212, 160, 74, 0.1);
    color: #D4A04A;
    font-weight: 500;
}
.wk-preview-content {
    flex: 1;
    padding: 16px 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.wk-preview-step-label {
    font-size: 5px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #D4A04A;
    background: rgba(212, 160, 74, 0.1);
    padding: 2px 7px;
    border-radius: 8px;
    display: inline-block;
    align-self: flex-start;
}
.wk-preview-title {
    font-size: 10px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 1.3;
}
.wk-preview-text {
    font-size: 5.5px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.6);
    line-height: 1.7;
}
.wk-preview-emphasis {
    background: rgba(212, 160, 74, 0.06);
    border-left: 2px solid #D4A04A;
    padding: 6px 8px;
    border-radius: 0 6px 6px 0;
}
.wk-preview-emphasis-text {
    font-size: 5.5px;
    font-weight: 400;
    color: #D4A04A;
    line-height: 1.6;
    font-style: italic;
}
.wk-preview-progress {
    margin-top: auto;
    display: flex;
    gap: 3px;
}
.wk-preview-progress-dot {
    flex: 1;
    height: 2px;
    border-radius: 1px;
    background: rgba(255, 255, 255, 0.08);
}
.wk-preview-progress-dot--done { background: #D4A04A; }
.wk-preview-progress-dot--current { background: linear-gradient(90deg, #D4A04A, rgba(212, 160, 74, 0.3)); }

/* Mobile-Kursvorschau */
.wk-preview-m {
    width: 100%;
    height: 100%;
    padding: 8px 7px;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 4px;
    background: #1A1A1A;
}
.wk-preview-m-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 4px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.wk-preview-m-back { font-size: 6px; color: #D4A04A; }
.wk-preview-m-step {
    font-size: 4.5px;
    font-weight: 500;
    color: rgba(244, 240, 236, 0.5);
    letter-spacing: 0.5px;
}
.wk-preview-m-title {
    font-size: 7px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 1.3;
    margin-top: 2px;
}
.wk-preview-m-text {
    font-size: 4px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.55);
    line-height: 1.7;
}
.wk-preview-m-card {
    background: rgba(212, 160, 74, 0.06);
    border-left: 1.5px solid #D4A04A;
    padding: 4px 5px;
    border-radius: 0 4px 4px 0;
    margin-top: 2px;
}
.wk-preview-m-card-text {
    font-size: 4px;
    font-weight: 400;
    color: #D4A04A;
    line-height: 1.5;
    font-style: italic;
}

/* ======== HERO RESPONSIVE - TABLET ======== */
@media (max-width: 1024px) {
    .wk-hero { padding: 80px 30px 60px; }
    .wk-hero-inner { gap: 40px; }
    .wk-hero-headline { font-size: 36px; }
    .wk-mockup-desktop { max-width: 440px; }
    .wk-mockup-mobile { width: 120px; right: -12px; }
    .wk-preview-content { padding: 12px 14px; }
    .wk-preview-title { font-size: 9px; }
}

/* ======== HERO RESPONSIVE - MOBILE ======== */
@media (max-width: 768px) {
    .wk-hero {
        min-height: auto;
        padding: 50px 16px 40px;
        border-radius: 0 0 48px 0;
    }
    .wk-hero-inner { grid-template-columns: 1fr; gap: 36px; }
    .wk-hero-text { text-align: center; align-items: center; }
    .wk-hero-label { font-size: 11px; letter-spacing: 2px; }
    .wk-hero-headline { font-size: 28px; }
    .wk-hero-subtext { font-size: 22px; }
    .wk-hero-description { font-size: 15px; max-width: 100%; }
    .wk-hero .wk-cta-primary { font-size: 16px; padding: 18px 40px; width: 100%; max-width: 340px; align-self: center; }
    .wk-hero-mockups { min-height: 280px; }
    .wk-mockup-desktop { max-width: 360px; }
    .wk-mockup-mobile { width: 110px; right: -8px; bottom: -16px; }
    .wk-preview-sidebar { display: none; }
    .wk-preview-content { padding: 10px 12px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        label: "WIN\u00b3 KURS",
        headline: "Finde heraus, wer du wirklich bist. Und lebe danach.",
        subtext: "Selbsterkenntnis. Selbstbefreiung. Selbstverwirklichung.",
        description: "Ein Kurs, der dich nicht motiviert - sondern dir zeigt, was dich wirklich antreibt. In drei Phasen zu einem Leben, das sich nicht mehr nach Kompromiss anf\u00fchlt.",
        cta: "Jetzt starten - 297 \u20ac",
        ctaUrl: "https://solbachsteven.systeme.io/academy",
        trust: "Einmalzahlung \u00b7 Kein Abo \u00b7 Sofort Zugang"
    };

    // === SVG ICONS ===
    var arrowLeftSVG = '<svg viewBox="0 0 12 12" fill="none"><path d="M8 2L4 6l4 4" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var arrowRightSVG = '<svg viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var lockSVG = '<svg viewBox="0 0 10 10" fill="none"><rect x="2" y="5" width="6" height="4" rx="1" stroke="rgba(255,255,255,0.35)" stroke-width="0.8"/><path d="M3.5 5V3.5a1.5 1.5 0 0 1 3 0V5" stroke="rgba(255,255,255,0.35)" stroke-width="0.8" fill="none"/></svg>';

    // === MOCKUP HTML ===
    var desktopPreviewHTML =
        '<div class="wk-preview">' +
            '<div class="wk-preview-sidebar">' +
                '<div class="wk-preview-sidebar-title">Win\u00b3 Kurs</div>' +
                '<div class="wk-preview-sidebar-item" style="color:rgba(244,240,236,0.2);font-size:4px;padding:2px 6px;text-transform:uppercase;letter-spacing:0.5px;">Modul 0</div>' +
                '<div class="wk-preview-sidebar-item" style="padding-left:12px;display:flex;align-items:center;gap:3px;"><span style="color:#27C93F;font-size:4px;">&#10003;</span> Einf\u00fchrung</div>' +
                '<div class="wk-preview-sidebar-item" style="color:rgba(244,240,236,0.2);font-size:4px;padding:2px 6px;text-transform:uppercase;letter-spacing:0.5px;margin-top:3px;">Modul 1 - Selbsterkenntnis</div>' +
                '<div class="wk-preview-sidebar-item wk-preview-sidebar-item--active" style="padding-left:12px;">Wer bin ich wirklich?</div>' +
                '<div class="wk-preview-sidebar-item" style="padding-left:12px;">Meine Werte & Muster</div>' +
                '<div class="wk-preview-sidebar-item" style="color:rgba(244,240,236,0.2);font-size:4px;padding:2px 6px;text-transform:uppercase;letter-spacing:0.5px;margin-top:3px;">Modul 2 - Selbstbefreiung</div>' +
                '<div class="wk-preview-sidebar-item" style="padding-left:12px;">Was h\u00e4lt mich zur\u00fcck?</div>' +
                '<div class="wk-preview-sidebar-item" style="color:rgba(244,240,236,0.2);font-size:4px;padding:2px 6px;text-transform:uppercase;letter-spacing:0.5px;margin-top:3px;">Modul 3 - Selbstverwirklichung</div>' +
                '<div class="wk-preview-sidebar-item" style="padding-left:12px;">Mein volles Potenzial</div>' +
            '</div>' +
            '<div class="wk-preview-content">' +
                '<div class="wk-preview-step-label">MODUL 01</div>' +
                '<div class="wk-preview-title">Wer bin ich wirklich?</div>' +
                '<div class="wk-preview-text">' +
                    'Hinter deinen Rollen, Gewohnheiten und Erwartungen steckt jemand, den du vielleicht noch nie wirklich kennengelernt hast. In diesem Modul legst du frei, was dich im Kern ausmacht.' +
                '</div>' +
                '<div class="wk-preview-emphasis">' +
                    '<div class="wk-preview-emphasis-text">' +
                        'Du musst dich nicht neu erfinden. Du musst nur anfangen, ehrlich hinzuschauen.' +
                    '</div>' +
                '</div>' +
                '<div class="wk-preview-text">' +
                    'Durch gezielte Reflexions\u00fcbungen und deinen KI-Sparringspartner entdeckst du Muster, die dein Leben pr\u00e4gen.' +
                '</div>' +
                '<div class="wk-preview-progress">' +
                    '<div class="wk-preview-progress-dot wk-preview-progress-dot--done"></div>' +
                    '<div class="wk-preview-progress-dot wk-preview-progress-dot--current"></div>' +
                    '<div class="wk-preview-progress-dot"></div>' +
                    '<div class="wk-preview-progress-dot"></div>' +
                    '<div class="wk-preview-progress-dot"></div>' +
                    '<div class="wk-preview-progress-dot"></div>' +
                    '<div class="wk-preview-progress-dot"></div>' +
                '</div>' +
            '</div>' +
        '</div>';

    var mobilePreviewHTML =
        '<div class="wk-preview-m">' +
            '<div class="wk-preview-m-header">' +
                '<div class="wk-preview-m-back">\u2190</div>' +
                '<div class="wk-preview-m-step">MODUL 1 / 3</div>' +
            '</div>' +
            '<div class="wk-preview-m-title">Wer bin ich wirklich?</div>' +
            '<div class="wk-preview-m-text">' +
                'Hinter deinen Rollen und Erwartungen steckt jemand, den du vielleicht noch nie kennengelernt hast.' +
            '</div>' +
            '<div class="wk-preview-m-card">' +
                '<div class="wk-preview-m-card-text">' +
                    'Du musst dich nicht neu erfinden. Du musst nur anfangen, ehrlich hinzuschauen.' +
                '</div>' +
            '</div>' +
            '<div class="wk-preview-m-text">' +
                'Gezielte Reflexions\u00fcbungen und dein KI-Sparringspartner helfen dir dabei.' +
            '</div>' +
        '</div>';

    // === RENDER ===
    var heroHTML =
        '<section class="wk-hero">' +
            '<div class="wk-hero-inner">' +
                '<div class="wk-hero-text">' +
                    '<div class="wk-hero-label wk-fade">' + data.label + '</div>' +
                    '<h1 class="wk-hero-headline wk-fade">' + data.headline + '</h1>' +
                    '<div class="wk-hero-subtext wk-fade">' + data.subtext + '</div>' +
                    '<div class="wk-hero-description wk-fade">' + data.description + '</div>' +
                    '<div class="wk-fade">' +
                        '<a href="' + data.ctaUrl + '" class="wk-cta-primary">' + data.cta + '</a>' +
                    '</div>' +
                    '<div class="wk-trust wk-fade">' + data.trust + '</div>' +
                '</div>' +
                '<div class="wk-hero-mockups wk-fade">' +
                    '<div class="wk-mockup-desktop">' +
                        '<div class="wk-mockup-titlebar">' +
                            '<div class="wk-mockup-dots">' +
                                '<span class="wk-mockup-dot wk-mockup-dot--close"></span>' +
                                '<span class="wk-mockup-dot wk-mockup-dot--min"></span>' +
                                '<span class="wk-mockup-dot wk-mockup-dot--max"></span>' +
                            '</div>' +
                            '<div class="wk-mockup-tab">' +
                                '<span class="wk-mockup-tab-icon"></span>' +
                                'Win\u00b3 Kurs' +
                            '</div>' +
                        '</div>' +
                        '<div class="wk-mockup-urlbar">' +
                            '<div class="wk-mockup-nav-btns">' +
                                '<span class="wk-mockup-nav-btn">' + arrowLeftSVG + '</span>' +
                                '<span class="wk-mockup-nav-btn">' + arrowRightSVG + '</span>' +
                            '</div>' +
                            '<div class="wk-mockup-url">' +
                                '<span class="wk-mockup-url-lock">' + lockSVG + '</span>' +
                                '<span class="wk-mockup-url-text">solbachsteven.systeme.io/academy</span>' +
                            '</div>' +
                        '</div>' +
                        '<div class="wk-mockup-desktop-screen">' + desktopPreviewHTML + '</div>' +
                    '</div>' +
                    '<div class="wk-mockup-mobile">' +
                        '<div class="wk-mockup-island"></div>' +
                        '<div class="wk-mockup-mobile-screen">' + mobilePreviewHTML + '</div>' +
                        '<div class="wk-mockup-home-indicator"></div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</section>';

    // === DOM INSERTION (Smart Wrapper) ===
    var pageWrapper = document.querySelector('.wk-page');
    if (!pageWrapper) {
        pageWrapper = document.createElement('div');
        pageWrapper.className = 'wk-page';
        var target = document.currentScript || document.scripts[document.scripts.length - 1];
        target.parentNode.insertBefore(pageWrapper, target.nextSibling);
    }
    var temp = document.createElement('div');
    temp.innerHTML = heroHTML;
    while (temp.firstChild) {
        pageWrapper.appendChild(temp.firstChild);
    }

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
                            var delay = Math.max(0, idx) * 120;
                            setTimeout(function() {
                                entry.target.classList.add('visible');
                            }, delay);
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1, rootMargin: '0px' });
                fadeEls.forEach(function(el) { observer.observe(el); });
            } else {
                fadeEls.forEach(function(el) { el.classList.add('visible'); });
            }
        };
    }
    setTimeout(function() {
        window.__wkInitReveal(pageWrapper);
    }, 100);
})();

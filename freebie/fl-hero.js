// Freebie Landingpage - Hero Section (Standalone)
// Loaded via: <script src="https://solbachsteven.github.io/website/freebie/fl-hero.js"></script>
(function() {
    if (window.__FL_HERO_LOADED) return;
    window.__FL_HERO_LOADED = true;

    // === SHARED RESOURCES (idempotent - nur 1x geladen) ===
    if (!window.__FL_SHARED) {
        window.__FL_SHARED = true;

        // Fonts
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap';
        document.head.appendChild(fontLink);

        // Base CSS
        var baseStyle = document.createElement('style');
        baseStyle.setAttribute('data-section', 'fl-base');
        baseStyle.textContent = `
/* ======== FL BASE RESET ======== */
.fl-page {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;
    background: #1A1A1A;
    overflow-x: hidden;
    position: relative;
    z-index: 5;
}
.fl-page *, .fl-page *::before, .fl-page *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* ======== SCROLL REVEAL ======== */
.fl-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.fl-fade.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ======== SHARED BUTTON ======== */
.fl-cta-primary {
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
.fl-cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(217, 105, 53, 0.4);
}
.fl-trust {
    font-size: 13px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.5);
    letter-spacing: 0.3px;
}

/* ======== SHARED MOBILE ======== */
@media (max-width: 768px) {
    .fl-cta-primary {
        font-size: 15px;
        padding: 16px 36px;
        width: 100%;
        max-width: 340px;
    }
}
`;
        document.head.appendChild(baseStyle);
    }

    // === HERO CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'fl-hero');
    style.textContent = `
/* ======== HERO SECTION ======== */
.fl-hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 80px 40px 60px;
    background: #F4F0EC;
    border-radius: 0 0 80px 0;
    position: relative;
    z-index: 6;
    box-shadow: 0 20px 60px rgba(188, 128, 52, 0.25), 0 8px 24px rgba(188, 128, 52, 0.15);
}
.fl-hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}
.fl-hero-text {
    display: flex;
    flex-direction: column;
}
.fl-hero-label {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #BC8034;
    margin-bottom: 20px;
}
.fl-hero-headline {
    font-size: 40px;
    font-weight: 600;
    line-height: 1.25;
    color: #2C2726;
    margin-bottom: 20px;
}
.fl-hero-subtext {
    font-size: 17px;
    font-weight: 300;
    line-height: 1.7;
    color: #2C2726;
    opacity: 0.75;
    margin-bottom: 36px;
    max-width: 480px;
}

/* ======== HERO FORM ======== */
.fl-hero-form {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.fl-hero-form input {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 400;
    padding: 14px 18px;
    border: 1.5px solid rgba(44, 39, 38, 0.15);
    border-radius: 12px;
    background: #FFFFFF;
    color: #2C2726;
    width: 100%;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    outline: none;
}
.fl-hero-form input::placeholder {
    color: rgba(44, 39, 38, 0.4);
    font-weight: 300;
}
.fl-hero-form input:focus {
    border-color: #BC8034;
    box-shadow: 0 0 0 3px rgba(188, 128, 52, 0.1);
}
.fl-hero-form-cta {
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
    padding: 16px 40px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    width: 100%;
    margin-top: 4px;
}
.fl-hero-form-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(217, 105, 53, 0.4);
}
.fl-hero-form-trust {
    font-size: 12px;
    font-weight: 300;
    color: rgba(44, 39, 38, 0.45);
    text-align: center;
    letter-spacing: 0.2px;
}

/* ======== DESKTOP BROWSER FRAME ======== */
.fl-hero-mockups {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 480px;
}
.fl-mockup-desktop {
    width: 100%;
    max-width: 520px;
    background: #1E1E1E;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 25px 60px rgba(44, 39, 38, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.06);
}
.fl-mockup-titlebar {
    height: 36px;
    background: #2D2D2D;
    display: flex;
    align-items: center;
    padding: 0 12px;
    gap: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.fl-mockup-dots {
    display: flex;
    gap: 6px;
    margin-right: 10px;
}
.fl-mockup-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
.fl-mockup-dot--close { background: #FF5F56; }
.fl-mockup-dot--min { background: #FFBD2E; }
.fl-mockup-dot--max { background: #27C93F; }
.fl-mockup-tab {
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
.fl-mockup-tab-icon {
    width: 10px;
    height: 10px;
    background: #D4A04A;
    border-radius: 2px;
    flex-shrink: 0;
}
.fl-mockup-urlbar {
    height: 30px;
    background: #1E1E1E;
    display: flex;
    align-items: center;
    padding: 0 12px;
    gap: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.fl-mockup-nav-btns {
    display: flex;
    gap: 6px;
}
.fl-mockup-nav-btn {
    width: 8px;
    height: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.fl-mockup-nav-btn svg {
    width: 8px;
    height: 8px;
}
.fl-mockup-url {
    flex: 1;
    background: #2D2D2D;
    border-radius: 5px;
    padding: 3px 10px;
    display: flex;
    align-items: center;
    gap: 5px;
}
.fl-mockup-url-lock svg {
    width: 8px;
    height: 8px;
}
.fl-mockup-url-text {
    font-size: 9px;
    color: rgba(255, 255, 255, 0.5);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 400;
}
.fl-mockup-desktop-screen {
    width: 100%;
    aspect-ratio: 16 / 10;
    background: #1A1A1A;
    overflow: hidden;
    position: relative;
}

/* ======== MOBILE PHONE FRAME ======== */
.fl-mockup-mobile {
    position: absolute;
    bottom: -24px;
    right: -24px;
    width: 150px;
    background: #1A1A1A;
    border-radius: 28px;
    padding: 10px 8px;
    box-shadow: 0 20px 50px rgba(44, 39, 38, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
}
.fl-mockup-island {
    width: 40px;
    height: 10px;
    background: #000000;
    border-radius: 10px;
    margin: 2px auto 6px;
}
.fl-mockup-mobile-screen {
    width: 100%;
    aspect-ratio: 9 / 18;
    background: #1A1A1A;
    border-radius: 18px;
    overflow: hidden;
    position: relative;
}
.fl-mockup-home-indicator {
    width: 44px;
    height: 4px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 2px;
    margin: 6px auto 2px;
}

/* ======== KURSVORSCHAU INHALTE ======== */
.fl-preview {
    width: 100%;
    height: 100%;
    display: flex;
    font-family: 'Poppins', sans-serif;
}
.fl-preview-sidebar {
    width: 28%;
    background: #141414;
    padding: 12px 8px;
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.fl-preview-sidebar-title {
    font-size: 5.5px;
    font-weight: 600;
    color: #D4A04A;
    padding: 4px 6px 8px;
    letter-spacing: 0.3px;
}
.fl-preview-sidebar-item {
    font-size: 5px;
    color: rgba(244, 240, 236, 0.4);
    padding: 5px 6px;
    border-radius: 4px;
    line-height: 1.4;
    font-weight: 300;
}
.fl-preview-sidebar-item--active {
    background: rgba(212, 160, 74, 0.1);
    color: #D4A04A;
    font-weight: 500;
}
.fl-preview-content {
    flex: 1;
    padding: 16px 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.fl-preview-step-label {
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
.fl-preview-title {
    font-size: 10px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 1.3;
}
.fl-preview-text {
    font-size: 5.5px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.6);
    line-height: 1.7;
}
.fl-preview-emphasis {
    background: rgba(212, 160, 74, 0.06);
    border-left: 2px solid #D4A04A;
    padding: 6px 8px;
    border-radius: 0 6px 6px 0;
}
.fl-preview-emphasis-text {
    font-size: 5.5px;
    font-weight: 400;
    color: #D4A04A;
    line-height: 1.6;
    font-style: italic;
}
.fl-preview-progress {
    margin-top: auto;
    display: flex;
    gap: 3px;
}
.fl-preview-progress-dot {
    flex: 1;
    height: 2px;
    border-radius: 1px;
    background: rgba(255, 255, 255, 0.08);
}
.fl-preview-progress-dot--done { background: #D4A04A; }
.fl-preview-progress-dot--current { background: linear-gradient(90deg, #D4A04A, rgba(212, 160, 74, 0.3)); }

/* Mobile-Kursvorschau */
.fl-preview-m {
    width: 100%;
    height: 100%;
    padding: 8px 7px;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 4px;
    background: #1A1A1A;
}
.fl-preview-m-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 4px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.fl-preview-m-back { font-size: 6px; color: #D4A04A; }
.fl-preview-m-step {
    font-size: 4.5px;
    font-weight: 500;
    color: rgba(244, 240, 236, 0.5);
    letter-spacing: 0.5px;
}
.fl-preview-m-title {
    font-size: 7px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 1.3;
    margin-top: 2px;
}
.fl-preview-m-text {
    font-size: 4px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.55);
    line-height: 1.7;
}
.fl-preview-m-card {
    background: rgba(212, 160, 74, 0.06);
    border-left: 1.5px solid #D4A04A;
    padding: 4px 5px;
    border-radius: 0 4px 4px 0;
    margin-top: 2px;
}
.fl-preview-m-card-text {
    font-size: 4px;
    font-weight: 400;
    color: #D4A04A;
    line-height: 1.5;
    font-style: italic;
}

/* ======== SYSTEME.IO FORM OVERRIDES ======== */
.fl-page ~ div input[type="text"],
.fl-page ~ div input[type="email"] {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    padding: 14px 18px;
    border: 1.5px solid rgba(44, 39, 38, 0.15);
    border-radius: 12px;
    background: #FFFFFF;
    color: #2C2726;
    width: 100%;
    transition: border-color 0.2s ease;
}
.fl-page ~ div input[type="text"]:focus,
.fl-page ~ div input[type="email"]:focus {
    outline: none;
    border-color: #BC8034;
}
.fl-page ~ div button[type="submit"] {
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-weight: 500;
    color: #FFFFFF;
    background: #D96935;
    border: none;
    border-radius: 20px;
    padding: 16px 40px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    width: 100%;
}
.fl-page ~ div button[type="submit"]:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(217, 105, 53, 0.4);
}

/* ======== HERO RESPONSIVE - TABLET ======== */
@media (max-width: 1024px) {
    .fl-hero { padding: 60px 30px; }
    .fl-hero-inner { gap: 40px; }
    .fl-hero-headline { font-size: 34px; }
    .fl-hero-subtext { font-size: 16px; }
    .fl-mockup-desktop { max-width: 440px; }
    .fl-mockup-mobile { width: 120px; right: -12px; }
    .fl-preview-content { padding: 12px 14px; }
    .fl-preview-title { font-size: 9px; }
}

/* ======== HERO RESPONSIVE - MOBILE ======== */
@media (max-width: 768px) {
    .fl-hero {
        min-height: auto;
        padding: 50px 16px 40px;
        border-radius: 0 0 48px 0;
    }
    .fl-hero-inner { grid-template-columns: 1fr; gap: 36px; }
    .fl-hero-text { text-align: center; align-items: center; }
    .fl-hero-label { font-size: 11px; letter-spacing: 2px; }
    .fl-hero-headline { font-size: 28px; }
    .fl-hero-subtext { font-size: 15px; max-width: 100%; }
    .fl-hero-form { max-width: 100%; }
    .fl-hero-mockups { min-height: 280px; }
    .fl-mockup-desktop { max-width: 360px; }
    .fl-mockup-mobile { width: 110px; right: -8px; bottom: -16px; }
    .fl-preview-sidebar { display: none; }
    .fl-preview-content { padding: 10px 12px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        label: "KOSTENLOSER KURS",
        headline: "Finde heraus, wozu du auf dieser Erde bist und was dich wirklich erf\u00fcllt.",
        subtext: "Ein Kurs, der dein Leben ver\u00e4ndern wird - wenn du bereit bist, die richtigen Fragen zu stellen.",
        cta: "Jetzt kostenlos starten",
        trust: "Kein Abo \u00b7 Kein Spam \u00b7 Sofort starten"
    };

    // === SVG ICONS ===
    var arrowLeftSVG = '<svg viewBox="0 0 12 12" fill="none"><path d="M8 2L4 6l4 4" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var arrowRightSVG = '<svg viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var lockSVG = '<svg viewBox="0 0 10 10" fill="none"><rect x="2" y="5" width="6" height="4" rx="1" stroke="rgba(255,255,255,0.35)" stroke-width="0.8"/><path d="M3.5 5V3.5a1.5 1.5 0 0 1 3 0V5" stroke="rgba(255,255,255,0.35)" stroke-width="0.8" fill="none"/></svg>';

    // === MOCKUP HTML ===
    var desktopPreviewHTML =
        '<div class="fl-preview">' +
            '<div class="fl-preview-sidebar">' +
                '<div class="fl-preview-sidebar-title">Erkenne deine Lebensaufgabe</div>' +
                '<div class="fl-preview-sidebar-item" style="color:rgba(244,240,236,0.2);font-size:4px;padding:2px 6px;text-transform:uppercase;letter-spacing:0.5px;">Einleitung</div>' +
                '<div class="fl-preview-sidebar-item" style="padding-left:12px;display:flex;align-items:center;gap:3px;"><span style="color:#27C93F;font-size:4px;">&#10003;</span> Willkommen</div>' +
                '<div class="fl-preview-sidebar-item" style="color:rgba(244,240,236,0.2);font-size:4px;padding:2px 6px;text-transform:uppercase;letter-spacing:0.5px;margin-top:3px;">Schritt 1</div>' +
                '<div class="fl-preview-sidebar-item fl-preview-sidebar-item--active" style="padding-left:12px;">Dein tieferes Warum</div>' +
                '<div class="fl-preview-sidebar-item" style="color:rgba(244,240,236,0.2);font-size:4px;padding:2px 6px;text-transform:uppercase;letter-spacing:0.5px;margin-top:3px;">Schritt 2</div>' +
                '<div class="fl-preview-sidebar-item" style="padding-left:12px;">Deine Vision</div>' +
                '<div class="fl-preview-sidebar-item" style="color:rgba(244,240,236,0.2);font-size:4px;padding:2px 6px;text-transform:uppercase;letter-spacing:0.5px;margin-top:3px;">Schritt 3</div>' +
                '<div class="fl-preview-sidebar-item" style="padding-left:12px;">Dein Mission Statement</div>' +
                '<div class="fl-preview-sidebar-item" style="color:rgba(244,240,236,0.2);font-size:4px;padding:2px 6px;text-transform:uppercase;letter-spacing:0.5px;margin-top:3px;">Abschluss</div>' +
                '<div class="fl-preview-sidebar-item" style="padding-left:12px;">Deine 3 S\u00e4tze</div>' +
            '</div>' +
            '<div class="fl-preview-content">' +
                '<div class="fl-preview-step-label">SCHRITT 01</div>' +
                '<div class="fl-preview-title">Dein tieferes Warum</div>' +
                '<div class="fl-preview-text">' +
                    'Was treibt dich wirklich an? Nicht das, was du auf LinkedIn schreibst. Nicht das, was andere von dir erwarten. Sondern das, was bleibt, wenn alles Laute verstummt.' +
                '</div>' +
                '<div class="fl-preview-emphasis">' +
                    '<div class="fl-preview-emphasis-text">' +
                        'Dein Warum ist nicht etwas, das du erfindest. Es ist etwas, das du freilegst.' +
                    '</div>' +
                '</div>' +
                '<div class="fl-preview-text">' +
                    'In diesem Schritt gehen wir gemeinsam unter die Oberfl\u00e4che. Du lernst, hinter deine Rollen zu schauen.' +
                '</div>' +
                '<div class="fl-preview-progress">' +
                    '<div class="fl-preview-progress-dot fl-preview-progress-dot--done"></div>' +
                    '<div class="fl-preview-progress-dot fl-preview-progress-dot--current"></div>' +
                    '<div class="fl-preview-progress-dot"></div>' +
                    '<div class="fl-preview-progress-dot"></div>' +
                    '<div class="fl-preview-progress-dot"></div>' +
                '</div>' +
            '</div>' +
        '</div>';

    var mobilePreviewHTML =
        '<div class="fl-preview-m">' +
            '<div class="fl-preview-m-header">' +
                '<div class="fl-preview-m-back">\u2190</div>' +
                '<div class="fl-preview-m-step">SCHRITT 1 / 3</div>' +
            '</div>' +
            '<div class="fl-preview-m-title">Dein tieferes Warum</div>' +
            '<div class="fl-preview-m-text">' +
                'Was treibt dich wirklich an? Nicht das, was du auf LinkedIn schreibst. Sondern das, was bleibt, wenn alles Laute verstummt.' +
            '</div>' +
            '<div class="fl-preview-m-card">' +
                '<div class="fl-preview-m-card-text">' +
                    'Dein Warum ist nicht etwas, das du erfindest. Es ist etwas, das du freilegst.' +
                '</div>' +
            '</div>' +
            '<div class="fl-preview-m-text">' +
                'In diesem Schritt gehen wir gemeinsam unter die Oberfl\u00e4che.' +
            '</div>' +
        '</div>';

    // === RENDER ===
    var heroHTML =
        '<section class="fl-hero">' +
            '<div class="fl-hero-inner">' +
                '<div class="fl-hero-text">' +
                    '<div class="fl-hero-label fl-fade">' + data.label + '</div>' +
                    '<h1 class="fl-hero-headline fl-fade">' + data.headline + '</h1>' +
                    '<div class="fl-hero-subtext fl-fade">' + data.subtext + '</div>' +
                    '<div class="fl-hero-form fl-fade">' +
                        '<input type="text" placeholder="Dein Vorname">' +
                        '<input type="email" placeholder="Deine E-Mail-Adresse">' +
                        '<button class="fl-hero-form-cta" type="button">' + data.cta + '</button>' +
                        '<div class="fl-hero-form-trust">' + data.trust + '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="fl-hero-mockups fl-fade">' +
                    '<div class="fl-mockup-desktop">' +
                        '<div class="fl-mockup-titlebar">' +
                            '<div class="fl-mockup-dots">' +
                                '<span class="fl-mockup-dot fl-mockup-dot--close"></span>' +
                                '<span class="fl-mockup-dot fl-mockup-dot--min"></span>' +
                                '<span class="fl-mockup-dot fl-mockup-dot--max"></span>' +
                            '</div>' +
                            '<div class="fl-mockup-tab">' +
                                '<span class="fl-mockup-tab-icon"></span>' +
                                'Erkenne deine Lebensaufgabe' +
                            '</div>' +
                        '</div>' +
                        '<div class="fl-mockup-urlbar">' +
                            '<div class="fl-mockup-nav-btns">' +
                                '<span class="fl-mockup-nav-btn">' + arrowLeftSVG + '</span>' +
                                '<span class="fl-mockup-nav-btn">' + arrowRightSVG + '</span>' +
                            '</div>' +
                            '<div class="fl-mockup-url">' +
                                '<span class="fl-mockup-url-lock">' + lockSVG + '</span>' +
                                '<span class="fl-mockup-url-text">solbachsteven.systeme.io/kurs</span>' +
                            '</div>' +
                        '</div>' +
                        '<div class="fl-mockup-desktop-screen">' + desktopPreviewHTML + '</div>' +
                    '</div>' +
                    '<div class="fl-mockup-mobile">' +
                        '<div class="fl-mockup-island"></div>' +
                        '<div class="fl-mockup-mobile-screen">' + mobilePreviewHTML + '</div>' +
                        '<div class="fl-mockup-home-indicator"></div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</section>';

    // === DOM INSERTION (Smart Wrapper) ===
    var pageWrapper = document.querySelector('.fl-page');
    if (!pageWrapper) {
        pageWrapper = document.createElement('div');
        pageWrapper.className = 'fl-page';
        var target = document.currentScript || document.scripts[document.scripts.length - 1];
        target.parentNode.insertBefore(pageWrapper, target.nextSibling);
    }
    var temp = document.createElement('div');
    temp.innerHTML = heroHTML;
    while (temp.firstChild) {
        pageWrapper.appendChild(temp.firstChild);
    }

    // === SCROLL REVEAL ===
    if (!window.__FL_REVEAL_INIT) {
        window.__FL_REVEAL_INIT = true;
        window.__flInitReveal = function(container) {
            var fadeEls = container.querySelectorAll('.fl-fade:not(.visible)');
            if ('IntersectionObserver' in window) {
                var observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            var parent = entry.target.parentElement;
                            var siblings = parent.querySelectorAll('.fl-fade');
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
        window.__flInitReveal(pageWrapper);
    }, 100);
})();

// Freebie Landingpage - Standalone JS (GitHub Pages hosted)
// Loaded via: <script src="https://solbachsteven.github.io/website/freebie-landingpage.js"></script>
(function() {
    // Guard
    if (window.__FL_LOADED) return;
    window.__FL_LOADED = true;

    // Font Loading
    var fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap';
    document.head.appendChild(fontLink);

    // CSS Injection
    var styleEl = document.createElement('style');
    styleEl.textContent = `
/* ======================================================================
   FREEBIE LANDINGPAGE - Vollstaendiges Stylesheet
   Prefix: fl-
   ====================================================================== */

/* ======== RESET & BASE ======== */
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

/* ======== FX EFFECTS (Cursor + Particles + Glow) ======== */
.fl-cursor-ring {
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid #BC8034;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999999;
    transition: transform 0.2s ease-out;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    display: none;
    left: 0;
    top: 0;
}

.fl-fx-bg, .fl-fx-fg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.fl-fx-bg { z-index: 0; }
.fl-fx-fg { z-index: 9999990; }

.fl-particle {
    position: absolute;
    background: #BC8034;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: 0 0 4px rgba(188, 128, 52, 0.4);
}

.fl-glow {
    position: fixed;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(188, 128, 52, 0.15) 0%, transparent 70%);
    pointer-events: none;
    transform: translate(-50%, -50%);
    filter: blur(40px);
    z-index: 0;
}

@media (max-width: 768px) {
    .fl-cursor-ring, .fl-glow { display: none !important; }
}

@media (min-width: 769px) {
    .fl-page { cursor: none; }
    .fl-page a, .fl-page button { cursor: none; }
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

/* ======================================================================
   SECTION 1: HERO (Above the Fold)
   Cream-Hintergrund, 2-Spalten: Text links, Mockups rechts
   ====================================================================== */

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

/* --- Linke Spalte: Text --- */
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

/* --- Rechte Spalte: Device Mockups --- */
.fl-hero-mockups {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 480px;
}

/* ======== DESKTOP BROWSER FRAME ======== */
.fl-mockup-desktop {
    width: 100%;
    max-width: 520px;
    background: #1E1E1E;
    border-radius: 12px;
    overflow: hidden;
    box-shadow:
        0 25px 60px rgba(44, 39, 38, 0.25),
        0 0 0 1px rgba(255, 255, 255, 0.06);
}

/* Title Bar: Dots + Tabs */
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

/* URL Bar */
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

/* Screen */
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
    box-shadow:
        0 20px 50px rgba(44, 39, 38, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.08),
        inset 0 0 0 1px rgba(255, 255, 255, 0.04);
}

/* Dynamic Island */
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

/* Home Indicator */
.fl-mockup-home-indicator {
    width: 44px;
    height: 4px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 2px;
    margin: 6px auto 2px;
}

/* ======== KURSVORSCHAU INHALTE ======== */
/* Mini-Kurs fuer Desktop */
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

/* Progress-Bar unten */
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

.fl-preview-progress-dot--done {
    background: #D4A04A;
}

.fl-preview-progress-dot--current {
    background: linear-gradient(90deg, #D4A04A, rgba(212, 160, 74, 0.3));
}

/* Mini-Kurs fuer Mobile */
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

.fl-preview-m-back {
    font-size: 6px;
    color: #D4A04A;
}

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

/* ======== SYSTEME.IO FORM OVERRIDES ========
   Falls das Formular als separater Systeme.io-Block genutzt wird
   ============================================ */
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

/* ======================================================================
   SECTION 3: DIE 3 SCHRITTE
   ====================================================================== */

.fl-steps {
    padding: 100px 40px;
    background: #1A1A1A;
}

.fl-steps-inner {
    max-width: 1000px;
    margin: 0 auto;
}

.fl-steps-label {
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #BC8034;
    text-align: center;
    margin-bottom: 16px;
}

.fl-steps-headline {
    font-size: 42px;
    font-weight: 600;
    line-height: 1.2;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 12px;
}

.fl-steps-subheadline {
    font-family: 'Caveat', cursive;
    font-size: 24px;
    color: rgba(244, 240, 236, 0.6);
    text-align: center;
    margin-bottom: 64px;
}

.fl-steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
}

.fl-step-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(188, 128, 52, 0.1);
    border-radius: 20px;
    padding: 40px 30px 36px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
}

.fl-step-card:hover {
    transform: translateY(-4px);
}

/* Farbiger Top-Border pro Schritt */
.fl-step-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
}

.fl-step-card[data-step="1"]::before { background: #D4A04A; }
.fl-step-card[data-step="2"]::before { background: #7FB3B3; }
.fl-step-card[data-step="3"]::before { background: #B89FD4; }

.fl-step-number {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1.5px;
    margin-bottom: 16px;
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
}

.fl-step-card[data-step="1"] .fl-step-number {
    color: #D4A04A;
    background: rgba(212, 160, 74, 0.12);
}

.fl-step-card[data-step="2"] .fl-step-number {
    color: #7FB3B3;
    background: rgba(127, 179, 179, 0.12);
}

.fl-step-card[data-step="3"] .fl-step-number {
    color: #B89FD4;
    background: rgba(184, 159, 212, 0.12);
}

.fl-step-title {
    font-size: 22px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 14px;
    line-height: 1.3;
}

.fl-step-description {
    font-size: 15px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.7);
    line-height: 1.7;
    margin-bottom: 24px;
}

.fl-step-result {
    font-family: 'Caveat', cursive;
    font-size: 20px;
    line-height: 1.4;
    padding: 14px 18px;
    border-radius: 12px;
    background: rgba(244, 240, 236, 0.08);
}

.fl-step-card[data-step="1"] .fl-step-result { color: #D4A04A; }
.fl-step-card[data-step="2"] .fl-step-result { color: #7FB3B3; }
.fl-step-card[data-step="3"] .fl-step-result { color: #B89FD4; }

.fl-blank-line {
    display: inline-block;
    width: 100px;
    border-bottom: 2px solid currentColor;
    vertical-align: baseline;
    margin: 0 2px;
    opacity: 0.5;
}

/* ======================================================================
   SECTION 4: ERGEBNIS
   ====================================================================== */

.fl-result {
    padding: 100px 40px;
    background: #1A1A1A;
    color: #FFFFFF;
}

.fl-result-inner {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.fl-result-headline {
    font-size: 36px;
    font-weight: 600;
    line-height: 1.25;
    color: #FFFFFF;
    margin-bottom: 12px;
}

.fl-result-subheadline {
    font-family: 'Caveat', cursive;
    font-size: 26px;
    color: #BC8034;
    margin-bottom: 20px;
}

.fl-result-description {
    font-size: 17px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(244, 240, 236, 0.7);
    margin-bottom: 48px;
    max-width: 580px;
    margin-left: auto;
    margin-right: auto;
}

.fl-result-extras {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.fl-result-extra {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(188, 128, 52, 0.2);
    border-radius: 16px;
    padding: 28px 22px;
    font-size: 15px;
    font-weight: 400;
    color: rgba(244, 240, 236, 0.8);
    line-height: 1.5;
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.fl-result-extra:hover {
    transform: translateY(-3px);
    border-color: rgba(188, 128, 52, 0.35);
}

.fl-result-extra-icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(188, 128, 52, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
}

.fl-result-extra-icon svg {
    width: 22px;
    height: 22px;
}

/* ======================================================================
   SECTION 5: FINAL CTA
   ====================================================================== */

.fl-final {
    padding: 100px 40px;
    text-align: center;
    border-radius: 40px 40px 0 0;
    position: relative;
    background:
        radial-gradient(ellipse 80% 60% at 20% 10%, rgba(188, 128, 52, 0.2) 0%, transparent 60%),
        radial-gradient(ellipse 60% 50% at 85% 80%, rgba(188, 128, 52, 0.12) 0%, transparent 55%),
        linear-gradient(180deg, #B8512A 0%, #C45A28 30%, #D96935 70%, #D96935 100%);
}

/* Goldlinie oben */
.fl-final::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent 10%, #BC8034 30%, #D4A04A 50%, #BC8034 70%, transparent 90%);
}

.fl-final-inner {
    max-width: 640px;
    margin: 0 auto;
}

.fl-final-headline {
    font-size: 42px;
    font-weight: 600;
    line-height: 1.2;
    color: #FFFFFF;
    margin-bottom: 16px;
}

.fl-final-subheadline {
    font-family: 'Caveat', cursive;
    font-size: 26px;
    color: #F4F0EC;
    margin-bottom: 44px;
}

.fl-final .fl-cta-primary {
    background: #FFFFFF;
    color: #D96935;
    font-weight: 600;
    padding: 20px 56px;
    font-size: 18px;
}

.fl-final .fl-cta-primary:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
}

.fl-final .fl-trust {
    color: rgba(255, 255, 255, 0.6);
}

/* ======================================================================
   RESPONSIVE - TABLET (<=1024px)
   ====================================================================== */

@media (max-width: 1024px) {
    .fl-hero {
        padding: 60px 30px;
    }

    .fl-hero-inner {
        gap: 40px;
    }

    .fl-hero-headline {
        font-size: 34px;
    }

    .fl-hero-subtext {
        font-size: 16px;
    }

    .fl-mockup-desktop {
        max-width: 440px;
    }

    .fl-mockup-mobile {
        width: 120px;
        right: -12px;
    }

    .fl-preview-content {
        padding: 12px 14px;
    }

    .fl-preview-title {
        font-size: 9px;
    }

    .fl-steps {
        padding: 80px 30px;
    }

    .fl-steps-headline {
        font-size: 36px;
    }

    .fl-result {
        padding: 80px 30px;
    }

    .fl-result-headline {
        font-size: 30px;
        color: #FFFFFF;
    }

    .fl-final {
        padding: 80px 30px;
    }

    .fl-final-headline {
        font-size: 36px;
    }
}

/* ======================================================================
   RESPONSIVE - MOBILE (<=768px)
   ====================================================================== */

@media (max-width: 768px) {
    .fl-hero {
        min-height: auto;
        padding: 50px 16px 40px;
        border-radius: 0 0 48px 0;
    }

    .fl-hero-inner {
        grid-template-columns: 1fr;
        gap: 36px;
    }

    .fl-hero-text {
        text-align: center;
        align-items: center;
    }

    .fl-hero-label {
        font-size: 11px;
        letter-spacing: 2px;
    }

    .fl-hero-headline {
        font-size: 28px;
    }

    .fl-hero-subtext {
        font-size: 15px;
        max-width: 100%;
    }

    .fl-hero-form {
        max-width: 100%;
    }

    .fl-hero-mockups {
        min-height: 280px;
    }

    .fl-mockup-desktop {
        max-width: 360px;
    }

    .fl-mockup-mobile {
        width: 110px;
        right: -8px;
        bottom: -16px;
    }

    .fl-preview-sidebar {
        display: none;
    }

    .fl-preview-content {
        padding: 10px 12px;
    }

    .fl-cta-primary {
        font-size: 15px;
        padding: 16px 36px;
        width: 100%;
        max-width: 340px;
    }

    /* Steps */
    .fl-steps {
        padding: 60px 16px;
    }

    .fl-steps-headline {
        font-size: 28px;
    }

    .fl-steps-subheadline {
        font-size: 20px;
        margin-bottom: 40px;
    }

    .fl-steps-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .fl-step-card {
        padding: 32px 24px 28px;
    }

    .fl-step-title {
        font-size: 20px;
    }

    /* Result */
    .fl-result {
        padding: 60px 16px;
    }

    .fl-result-headline {
        font-size: 26px;
    }

    .fl-result-subheadline {
        font-size: 22px;
    }

    .fl-result-description {
        font-size: 15px;
        margin-bottom: 36px;
    }

    .fl-result-extras {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    .fl-result-extra {
        padding: 24px 20px;
    }

    /* Final CTA */
    .fl-final {
        padding: 60px 16px 50px;
        border-radius: 24px 24px 0 0;
    }

    .fl-final-headline {
        font-size: 28px;
    }

    .fl-final-subheadline {
        font-size: 22px;
        margin-bottom: 36px;
    }

    .fl-final .fl-cta-primary {
        font-size: 16px;
        padding: 18px 40px;
        width: 100%;
        max-width: 340px;
    }
}
`;
    document.head.appendChild(styleEl);

    // Data
    var FREEBIE_LP_DATA = {

        hero: {
            label: "KOSTENLOSER KURS",
            headline: "Finde heraus, wozu du auf dieser Erde bist und was dich wirklich erf\u00fcllt.",
            subtext: "Ein Kurs, der dein Leben ver\u00e4ndern wird - wenn du bereit bist, die richtigen Fragen zu stellen.",
            cta: "Jetzt kostenlos starten"
        },

        steps: {
            label: "DEIN WEG",
            headline: "3 Schritte zu deiner Lebensaufgabe",
            subheadline: "Drei Fragen. Drei Antworten. Dein Kompass.",
            items: [
                {
                    number: "01",
                    title: "Dein tieferes Warum",
                    description: "Was treibt dich von innen heraus an? Worauf basieren all deine Entscheidungen in diesem Leben?",
                    result: "Was mich antreibt ist ___.",
                    color: "#D4A04A"
                },
                {
                    number: "02",
                    title: "Deine Vision",
                    description: "In welcher Welt willst du leben? Wie soll deine Welt sein, damit dein Warum aufbl\u00fchen kann?",
                    result: "Ich m\u00f6chte in einer Welt leben, in der ___.",
                    color: "#7FB3B3"
                },
                {
                    number: "03",
                    title: "Dein Mission Statement",
                    description: "Wie baust du die Br\u00fccke zwischen deinem Warum und der Welt, die du erschaffen willst?",
                    result: "Mein Beitrag zu dieser Welt ist ___.",
                    color: "#B89FD4"
                }
            ]
        },

        result: {
            headline: "Am Ende h\u00e4ltst du 3 S\u00e4tze in den H\u00e4nden",
            subheadline: "Dein Warum. Deine Vision. Dein Mission Statement.",
            description: "Drei S\u00e4tze, die beschreiben, wof\u00fcr du hier bist. Kein vages Gef\u00fchl mehr - sondern Klarheit \u00fcber deinen inneren Kompass.",
            extras: [
                "Gef\u00fchrte Reflexionsfragen in jedem Schritt",
                "Optionale KI-Prompts f\u00fcr tiefere Selbsterforschung",
                "Deine S\u00e4tze auf der Community-Pinwand verewigen"
            ]
        },

        finalCta: {
            headline: "Bereit, deine Lebensaufgabe zu erkennen?",
            subheadline: "Reflexionen, die dir Klarheit bringen.",
            cta: { text: "Jetzt kostenlos starten", url: "#LINK_FREEBIE" },
            trust: "Kein Abo \u00b7 Kein Spam \u00b7 Sofort starten"
        }
    };

    // Renderer
    var d = FREEBIE_LP_DATA;

    // SVG Icons
    var compassSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#BC8034" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="rgba(188,128,52,0.2)"/></svg>';
    var sparkSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#BC8034" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="rgba(188,128,52,0.15)"/></svg>';
    var usersSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#BC8034" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>';

    var extraIcons = [compassSVG, sparkSVG, usersSVG];

    // ======== PAGE WRAPPER ========
    var page = document.createElement('div');
    page.className = 'fl-page';

    // ======== SVG Mini-Icons fuer Browser-Chrome ========
    var arrowLeftSVG = '<svg viewBox="0 0 12 12" fill="none"><path d="M8 2L4 6l4 4" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var arrowRightSVG = '<svg viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var lockSVG = '<svg viewBox="0 0 10 10" fill="none"><rect x="2" y="5" width="6" height="4" rx="1" stroke="rgba(255,255,255,0.35)" stroke-width="0.8"/><path d="M3.5 5V3.5a1.5 1.5 0 0 1 3 0V5" stroke="rgba(255,255,255,0.35)" stroke-width="0.8" fill="none"/></svg>';

    // ======== SECTION 1: HERO (Cream, 2-Spalten) ========
    // Desktop-Kursvorschau (Mini-Lektion mit Sidebar - realistisch)
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

    // Mobile-Kursvorschau (kompakt)
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

    var heroHTML =
        '<section class="fl-hero">' +
            '<div class="fl-hero-inner">' +
                '<div class="fl-hero-text">' +
                    '<div class="fl-hero-label fl-fade">' + d.hero.label + '</div>' +
                    '<h1 class="fl-hero-headline fl-fade">' + d.hero.headline + '</h1>' +
                    '<div class="fl-hero-subtext fl-fade">' + d.hero.subtext + '</div>' +
                    '<div class="fl-hero-form fl-fade">' +
                        '<input type="text" placeholder="Dein Vorname">' +
                        '<input type="email" placeholder="Deine E-Mail-Adresse">' +
                        '<button class="fl-hero-form-cta" type="button">' + d.hero.cta + '</button>' +
                        '<div class="fl-hero-form-trust">' + d.finalCta.trust + '</div>' +
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

    // ======== SECTION 2: DIE 3 SCHRITTE ========
    var stepsCardsHTML = '';
    for (var k = 0; k < d.steps.items.length; k++) {
        var step = d.steps.items[k];
        var resultText = step.result.replace(/___/g, '<span class="fl-blank-line"></span>');
        stepsCardsHTML +=
            '<div class="fl-step-card fl-fade" data-step="' + (k + 1) + '">' +
                '<div class="fl-step-number">SCHRITT ' + step.number + '</div>' +
                '<div class="fl-step-title">' + step.title + '</div>' +
                '<div class="fl-step-description">' + step.description + '</div>' +
                '<div class="fl-step-result">' + resultText + '</div>' +
            '</div>';
    }

    var stepsHTML =
        '<section class="fl-steps">' +
            '<div class="fl-steps-inner">' +
                '<div class="fl-steps-label fl-fade">' + d.steps.label + '</div>' +
                '<h2 class="fl-steps-headline fl-fade">' + d.steps.headline + '</h2>' +
                '<div class="fl-steps-subheadline fl-fade">' + d.steps.subheadline + '</div>' +
                '<div class="fl-steps-grid">' + stepsCardsHTML + '</div>' +
            '</div>' +
        '</section>';

    // ======== SECTION 4: ERGEBNIS ========
    var extrasHTML = '';
    for (var m = 0; m < d.result.extras.length; m++) {
        extrasHTML +=
            '<div class="fl-result-extra fl-fade">' +
                '<div class="fl-result-extra-icon">' + extraIcons[m] + '</div>' +
                d.result.extras[m] +
            '</div>';
    }

    var resultHTML =
        '<section class="fl-result">' +
            '<div class="fl-result-inner">' +
                '<h2 class="fl-result-headline fl-fade">' + d.result.headline + '</h2>' +
                '<div class="fl-result-subheadline fl-fade">' + d.result.subheadline + '</div>' +
                '<div class="fl-result-description fl-fade">' + d.result.description + '</div>' +
                '<div class="fl-result-extras">' + extrasHTML + '</div>' +
            '</div>' +
        '</section>';

    // ======== SECTION 5: FINAL CTA ========
    var finalHTML =
        '<section class="fl-final">' +
            '<div class="fl-final-inner">' +
                '<h2 class="fl-final-headline fl-fade">' + d.finalCta.headline + '</h2>' +
                '<div class="fl-final-subheadline fl-fade">' + d.finalCta.subheadline + '</div>' +
                '<div class="fl-fade">' +
                    '<a href="' + d.finalCta.cta.url + '" class="fl-cta-primary">' + d.finalCta.cta.text + '</a>' +
                '</div>' +
                '<div class="fl-trust fl-fade">' + d.finalCta.trust + '</div>' +
            '</div>' +
        '</section>';

    // ======== ZUSAMMENBAUEN ========
    page.innerHTML = heroHTML + stepsHTML + resultHTML + finalHTML;

    // In DOM einfuegen (external script: use document.currentScript)
    var target = document.currentScript || document.scripts[document.scripts.length - 1];
    target.parentNode.insertBefore(page, target.nextSibling);

    // ======== SCROLL REVEAL (IntersectionObserver) ========
    setTimeout(function() {
        var fadeEls = page.querySelectorAll('.fl-fade');

        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        // Gestaffelt: Geschwister-Elemente mit 120ms Delay
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
            }, {
                threshold: 0.1,
                rootMargin: '0px'
            });

            fadeEls.forEach(function(el) {
                observer.observe(el);
            });
        } else {
            // Fallback: Alles sofort sichtbar
            fadeEls.forEach(function(el) {
                el.classList.add('visible');
            });
        }
    }, 100);

    // ======== FX EFFECTS (Cursor + Particles + Glow) ========
    (function() {
        var isEditor = window.location.href.match(/editor|edit|funnel\/manage/);
        if (isEditor) return;

        var isMobile = window.matchMedia('(max-width: 768px)').matches;

        // Cursor Ring
        var ring = document.createElement('div');
        ring.className = 'fl-cursor-ring';
        document.body.appendChild(ring);

        // FX Layers
        var glow = document.createElement('div');
        glow.className = 'fl-glow';
        document.body.appendChild(glow);

        var bgLayer = document.createElement('div');
        bgLayer.className = 'fl-fx-bg';
        document.body.appendChild(bgLayer);

        var fgLayer = document.createElement('div');
        fgLayer.className = 'fl-fx-fg';
        document.body.appendChild(fgLayer);

        if (!isMobile) ring.style.display = 'block';

        var particles = [];
        var mX = window.innerWidth / 2, mY = window.innerHeight / 2;
        var gX = mX, gY = mY;

        function Particle(parent) {
            this.el = document.createElement('div');
            this.el.className = 'fl-particle';
            parent.appendChild(this.el);
            this.reset();
        }
        Particle.prototype.reset = function() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            this.size = Math.random() * 2.5 + 0.5;
            this.vx = (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3);
            this.vy = (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3);
            this.op = Math.random() * 0.7 + 0.1;
            this.el.style.opacity = this.op;
        };
        Particle.prototype.update = function() {
            this.x += this.vx; this.y += this.vy;
            if (this.x < 0) this.x = window.innerWidth;
            if (this.x > window.innerWidth) this.x = 0;
            if (this.y < 0) this.y = window.innerHeight;
            if (this.y > window.innerHeight) this.y = 0;
            this.el.style.transform = 'translate3d(' + this.x + 'px,' + this.y + 'px,0)';
            this.el.style.width = this.size + 'px';
            this.el.style.height = this.size + 'px';
        };

        function initParticles() {
            bgLayer.innerHTML = '';
            fgLayer.innerHTML = '';
            particles = [];
            var density = isMobile ? 8000 : 18000;
            var total = Math.floor((window.innerWidth * window.innerHeight) / density);
            for (var i = 0; i < total; i++) {
                var parent = (i < total * 0.66) ? bgLayer : fgLayer;
                particles.push(new Particle(parent));
            }
        }

        if (!isMobile) {
            document.addEventListener('mousemove', function(e) {
                mX = e.clientX; mY = e.clientY;
                ring.style.left = (mX - 10) + 'px';
                ring.style.top = (mY - 10) + 'px';
            });
            document.addEventListener('mouseover', function(e) {
                if (e.target.closest('a, button, .fl-cta-primary, .fl-hero-form-cta'))
                    ring.style.transform = 'scale(1.7)';
                else ring.style.transform = 'scale(1)';
            });
        }

        function fxLoop() {
            if (!isMobile) {
                gX += (mX - gX) * 0.08;
                gY += (mY - gY) * 0.08;
                glow.style.left = gX + 'px';
                glow.style.top = gY + 'px';
            }
            for (var i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            requestAnimationFrame(fxLoop);
        }

        window.addEventListener('resize', initParticles);
        initParticles();
        fxLoop();
    })();
})();

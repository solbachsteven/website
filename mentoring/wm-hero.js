// Win³ Mentoring Landingpage - Hero Section (Standalone)
// 2-Spalten Layout: Text links, Coaching-Call-Mockup rechts (Desktop + Mobile Frame)
// Loaded via: <script src="https://solbachsteven.github.io/website/mentoring/wm-hero.js"></script>
(function() {
    if (window.__WM_HERO_LOADED) return;
    window.__WM_HERO_LOADED = true;

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

    // === HERO CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wm-hero');
    style.textContent = `
/* ======== HERO SECTION ======== */
.wm-hero {
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
.wm-hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}
.wm-hero-text {
    display: flex;
    flex-direction: column;
}
.wm-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: linear-gradient(135deg, #BC8034 0%, #D4A04A 100%);
    color: #FFFFFF;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 8px 18px;
    border-radius: 20px;
    margin-bottom: 20px;
    align-self: flex-start;
    box-shadow: 0 4px 16px rgba(188, 128, 52, 0.3);
}
.wm-hero-label {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #BC8034;
    margin-bottom: 28px;
}
.wm-hero-headline {
    font-size: 44px;
    font-weight: 600;
    line-height: 1.2;
    color: #2C2726;
    margin-bottom: 20px;
}
.wm-hero-subtext {
    font-family: 'Caveat', cursive;
    font-size: 26px;
    color: #BC8034;
    margin-bottom: 16px;
}
.wm-hero-description {
    font-size: 17px;
    font-weight: 300;
    line-height: 1.7;
    color: #2C2726;
    opacity: 0.75;
    margin-bottom: 40px;
    max-width: 480px;
}
.wm-hero .wm-cta-primary {
    font-size: 18px;
    padding: 20px 56px;
    font-weight: 600;
    align-self: flex-start;
}
.wm-hero .wm-trust {
    color: rgba(44, 39, 38, 0.45);
}

/* ======== DESKTOP BROWSER FRAME ======== */
.wm-hero-mockups {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 480px;
}
.wm-mockup-desktop {
    width: 100%;
    max-width: 520px;
    background: #1E1E1E;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 25px 60px rgba(44, 39, 38, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.06);
}
.wm-mockup-titlebar {
    height: 36px;
    background: #2D2D2D;
    display: flex;
    align-items: center;
    padding: 0 12px;
    gap: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.wm-mockup-dots {
    display: flex;
    gap: 6px;
    margin-right: 10px;
}
.wm-mockup-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
.wm-mockup-dot--close { background: #FF5F56; }
.wm-mockup-dot--min { background: #FFBD2E; }
.wm-mockup-dot--max { background: #27C93F; }
.wm-mockup-tab {
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
.wm-mockup-tab-icon {
    width: 10px;
    height: 10px;
    background: #D4A04A;
    border-radius: 2px;
    flex-shrink: 0;
}
.wm-mockup-urlbar {
    height: 30px;
    background: #1E1E1E;
    display: flex;
    align-items: center;
    padding: 0 12px;
    gap: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.wm-mockup-nav-btns {
    display: flex;
    gap: 6px;
}
.wm-mockup-nav-btn {
    width: 8px;
    height: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.wm-mockup-nav-btn svg { width: 8px; height: 8px; }
.wm-mockup-url {
    flex: 1;
    background: #2D2D2D;
    border-radius: 5px;
    padding: 3px 10px;
    display: flex;
    align-items: center;
    gap: 5px;
}
.wm-mockup-url-lock svg { width: 8px; height: 8px; }
.wm-mockup-url-text {
    font-size: 9px;
    color: rgba(255, 255, 255, 0.5);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 400;
}
.wm-mockup-desktop-screen {
    width: 100%;
    aspect-ratio: 16 / 10;
    background: #1A1A1A;
    overflow: hidden;
    position: relative;
}

/* ======== VIDEO CALL UI ======== */
.wm-call {
    width: 100%;
    height: 100%;
    display: flex;
    font-family: 'Poppins', sans-serif;
    background: #0F0F0F;
}
.wm-call-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 6px;
}
.wm-call-videos {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
}
.wm-call-video {
    background: #1A1A1A;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
.wm-call-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    color: #FFFFFF;
}
.wm-call-avatar--mentor {
    background: linear-gradient(135deg, #BC8034, #D4A04A);
}
.wm-call-avatar--you {
    background: linear-gradient(135deg, #D96935, #E8854A);
}
.wm-call-name {
    position: absolute;
    bottom: 4px;
    left: 6px;
    font-size: 5px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(0, 0, 0, 0.5);
    padding: 1px 5px;
    border-radius: 3px;
}
.wm-call-mic-icon {
    position: absolute;
    bottom: 4px;
    right: 6px;
    width: 10px;
    height: 10px;
    background: rgba(39, 201, 63, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.wm-call-mic-dot {
    width: 3px;
    height: 3px;
    background: #27C93F;
    border-radius: 50%;
}
.wm-call-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 4px 0 2px;
}
.wm-call-ctrl-btn {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.wm-call-ctrl-btn--mic { background: rgba(255, 255, 255, 0.1); }
.wm-call-ctrl-btn--cam { background: rgba(255, 255, 255, 0.1); }
.wm-call-ctrl-btn--end { background: #FF3B30; }
.wm-call-ctrl-btn--screen { background: rgba(255, 255, 255, 0.1); }
.wm-call-ctrl-icon {
    width: 8px;
    height: 8px;
}
.wm-call-sidebar {
    width: 30%;
    background: #141414;
    border-left: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
}
.wm-call-sidebar-header {
    padding: 6px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    gap: 4px;
}
.wm-call-sidebar-title {
    font-size: 5.5px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.3px;
}
.wm-call-sidebar-badge {
    font-size: 4px;
    background: rgba(212, 160, 74, 0.15);
    color: #D4A04A;
    padding: 1px 4px;
    border-radius: 6px;
    font-weight: 500;
}
.wm-call-messages {
    flex: 1;
    padding: 6px 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow: hidden;
}
.wm-call-msg {
    display: flex;
    flex-direction: column;
    gap: 1px;
}
.wm-call-msg-name {
    font-size: 4px;
    font-weight: 600;
    color: #D4A04A;
}
.wm-call-msg-text {
    font-size: 4.5px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.5);
    line-height: 1.5;
}
.wm-call-msg-time {
    font-size: 3.5px;
    color: rgba(244, 240, 236, 0.2);
    margin-top: 1px;
}
.wm-call-input {
    padding: 4px 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.wm-call-input-box {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
    padding: 3px 6px;
    font-size: 4px;
    color: rgba(244, 240, 236, 0.25);
}

/* ======== MOBILE PHONE FRAME ======== */
.wm-mockup-mobile {
    position: absolute;
    bottom: -24px;
    right: -24px;
    width: 150px;
    background: #1A1A1A;
    border-radius: 28px;
    padding: 10px 8px;
    box-shadow: 0 20px 50px rgba(44, 39, 38, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
}
.wm-mockup-island {
    width: 40px;
    height: 10px;
    background: #000000;
    border-radius: 10px;
    margin: 2px auto 6px;
}
.wm-mockup-mobile-screen {
    width: 100%;
    aspect-ratio: 9 / 18;
    background: #1A1A1A;
    border-radius: 18px;
    overflow: hidden;
    position: relative;
}
.wm-mockup-home-indicator {
    width: 44px;
    height: 4px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 2px;
    margin: 6px auto 2px;
}

/* ======== WHATSAPP MOCKUP ======== */
.wm-wa {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    background: #0B141A;
}
.wm-wa-header {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 6px 7px;
    background: #1F2C34;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.wm-wa-back {
    font-size: 6px;
    color: rgba(255, 255, 255, 0.5);
}
.wm-wa-avatar {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: linear-gradient(135deg, #BC8034, #D4A04A);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5px;
    font-weight: 600;
    color: #FFFFFF;
}
.wm-wa-contact {
    display: flex;
    flex-direction: column;
}
.wm-wa-contact-name {
    font-size: 5px;
    font-weight: 600;
    color: #FFFFFF;
}
.wm-wa-contact-status {
    font-size: 3.5px;
    color: rgba(255, 255, 255, 0.4);
}
.wm-wa-messages {
    flex: 1;
    padding: 6px 5px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    overflow: hidden;
}
.wm-wa-msg {
    max-width: 82%;
    padding: 3px 5px;
    border-radius: 5px;
    position: relative;
}
.wm-wa-msg--them {
    background: #1F2C34;
    align-self: flex-start;
    border-top-left-radius: 0;
}
.wm-wa-msg--me {
    background: #005C4B;
    align-self: flex-end;
    border-top-right-radius: 0;
}
.wm-wa-msg-text {
    font-size: 4px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.5;
}
.wm-wa-msg-time {
    font-size: 3px;
    color: rgba(255, 255, 255, 0.3);
    text-align: right;
    margin-top: 1px;
}
.wm-wa-input {
    padding: 4px 5px;
    display: flex;
    align-items: center;
    gap: 3px;
}
.wm-wa-input-box {
    flex: 1;
    background: #1F2C34;
    border-radius: 12px;
    padding: 3px 6px;
    font-size: 3.5px;
    color: rgba(255, 255, 255, 0.25);
}
.wm-wa-send {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #00A884;
    display: flex;
    align-items: center;
    justify-content: center;
}
.wm-wa-send-icon {
    width: 0;
    height: 0;
    border-left: 4px solid #FFFFFF;
    border-top: 2.5px solid transparent;
    border-bottom: 2.5px solid transparent;
    margin-left: 1px;
}

/* ======== HERO RESPONSIVE - TABLET ======== */
@media (max-width: 1024px) {
    .wm-hero { padding: 80px 30px 60px; }
    .wm-hero-inner { gap: 40px; }
    .wm-hero-headline { font-size: 36px; }
    .wm-mockup-desktop { max-width: 440px; }
    .wm-mockup-mobile { width: 120px; right: -12px; }
}

/* ======== HERO RESPONSIVE - MOBILE ======== */
@media (max-width: 768px) {
    .wm-hero {
        min-height: auto;
        padding: 50px 16px 40px;
        border-radius: 0 0 48px 0;
    }
    .wm-hero-inner { grid-template-columns: 1fr; gap: 36px; }
    .wm-hero-text { text-align: center; align-items: center; }
    .wm-hero-badge { align-self: center; }
    .wm-hero-label { font-size: 11px; letter-spacing: 2px; }
    .wm-hero-headline { font-size: 28px; }
    .wm-hero-subtext { font-size: 22px; }
    .wm-hero-description { font-size: 15px; max-width: 100%; }
    .wm-hero .wm-cta-primary { font-size: 16px; padding: 18px 40px; width: 100%; max-width: 340px; align-self: center; }
    .wm-hero-mockups { min-height: 280px; }
    .wm-mockup-desktop { max-width: 360px; }
    .wm-mockup-mobile { width: 110px; right: -8px; bottom: -16px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        badge: "NUR 8 PL\u00c4TZE",
        label: "WIN\u00b3 MENTORING",
        headline: "12 Wochen, die alles ver\u00e4ndern.",
        subtext: "1:1 Mentoring mit Steven Solbach",
        description: "Nicht noch ein Kurs. Sondern jemand, der mit dir geht. 12 Wochen pers\u00f6nliche Begleitung auf deinem Weg zu einem Leben, das sich nicht mehr nach Kompromiss anf\u00fchlt.",
        cta: "Jetzt bewerben",
        ctaUrl: "https://solbachsteven.systeme.io/bewerbung",
        trust: "Bewerbungsbasiert \u00b7 Begrenzte Pl\u00e4tze \u00b7 3.000 \u20ac"
    };

    // === SVG ICONS ===
    var arrowLeftSVG = '<svg viewBox="0 0 12 12" fill="none"><path d="M8 2L4 6l4 4" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var arrowRightSVG = '<svg viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var lockSVG = '<svg viewBox="0 0 10 10" fill="none"><rect x="2" y="5" width="6" height="4" rx="1" stroke="rgba(255,255,255,0.35)" stroke-width="0.8"/><path d="M3.5 5V3.5a1.5 1.5 0 0 1 3 0V5" stroke="rgba(255,255,255,0.35)" stroke-width="0.8" fill="none"/></svg>';
    var micSVG = '<svg viewBox="0 0 10 10" fill="none"><rect x="3.5" y="1" width="3" height="5" rx="1.5" stroke="rgba(255,255,255,0.5)" stroke-width="0.6"/><path d="M2.5 5.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5" stroke="rgba(255,255,255,0.5)" stroke-width="0.6"/><line x1="5" y1="8" x2="5" y2="9.5" stroke="rgba(255,255,255,0.5)" stroke-width="0.6"/></svg>';
    var camSVG = '<svg viewBox="0 0 10 10" fill="none"><rect x="1" y="2.5" width="6" height="5" rx="1" stroke="rgba(255,255,255,0.5)" stroke-width="0.6"/><path d="M7 4l2-1v4l-2-1" stroke="rgba(255,255,255,0.5)" stroke-width="0.6"/></svg>';
    var phoneSVG = '<svg viewBox="0 0 10 10" fill="none"><path d="M2 3.5c0-1 .5-1.5 1.5-1.5h.5l.5 1.5-.8.5c.3.8.9 1.4 1.7 1.7l.5-.8L7.5 5.5v.5c0 1-.5 1.5-1.5 1.5C3.5 7.5 2 6 2 3.5z" stroke="#FFFFFF" stroke-width="0.6"/></svg>';
    var screenSVG = '<svg viewBox="0 0 10 10" fill="none"><rect x="1.5" y="2" width="7" height="5" rx="0.5" stroke="rgba(255,255,255,0.5)" stroke-width="0.6"/><line x1="3.5" y1="8.5" x2="6.5" y2="8.5" stroke="rgba(255,255,255,0.5)" stroke-width="0.6"/></svg>';

    // === MOCKUP HTML: VIDEO CALL ===
    var desktopPreviewHTML =
        '<div class="wm-call">' +
            '<div class="wm-call-main">' +
                '<div class="wm-call-videos">' +
                    '<div class="wm-call-video">' +
                        '<div class="wm-call-avatar wm-call-avatar--mentor">SS</div>' +
                        '<div class="wm-call-name">Steven Solbach</div>' +
                        '<div class="wm-call-mic-icon"><div class="wm-call-mic-dot"></div></div>' +
                    '</div>' +
                    '<div class="wm-call-video">' +
                        '<div class="wm-call-avatar wm-call-avatar--you">DU</div>' +
                        '<div class="wm-call-name">Du</div>' +
                        '<div class="wm-call-mic-icon"><div class="wm-call-mic-dot"></div></div>' +
                    '</div>' +
                '</div>' +
                '<div class="wm-call-controls">' +
                    '<div class="wm-call-ctrl-btn wm-call-ctrl-btn--mic"><span class="wm-call-ctrl-icon">' + micSVG + '</span></div>' +
                    '<div class="wm-call-ctrl-btn wm-call-ctrl-btn--cam"><span class="wm-call-ctrl-icon">' + camSVG + '</span></div>' +
                    '<div class="wm-call-ctrl-btn wm-call-ctrl-btn--end"><span class="wm-call-ctrl-icon">' + phoneSVG + '</span></div>' +
                    '<div class="wm-call-ctrl-btn wm-call-ctrl-btn--screen"><span class="wm-call-ctrl-icon">' + screenSVG + '</span></div>' +
                '</div>' +
            '</div>' +
            '<div class="wm-call-sidebar">' +
                '<div class="wm-call-sidebar-header">' +
                    '<div class="wm-call-sidebar-title">Notizen</div>' +
                    '<div class="wm-call-sidebar-badge">Session 4</div>' +
                '</div>' +
                '<div class="wm-call-messages">' +
                    '<div class="wm-call-msg">' +
                        '<div class="wm-call-msg-name">Steven</div>' +
                        '<div class="wm-call-msg-text">Was hat sich seit letzter Woche ver\u00e4ndert?</div>' +
                        '<div class="wm-call-msg-time">14:02</div>' +
                    '</div>' +
                    '<div class="wm-call-msg">' +
                        '<div class="wm-call-msg-name" style="color:#E8854A;">Du</div>' +
                        '<div class="wm-call-msg-text">Ich habe das Gespr\u00e4ch gef\u00fchrt. Es war hart, aber befreiend.</div>' +
                        '<div class="wm-call-msg-time">14:03</div>' +
                    '</div>' +
                    '<div class="wm-call-msg">' +
                        '<div class="wm-call-msg-name">Steven</div>' +
                        '<div class="wm-call-msg-text">Genau da wollten wir hin. Lass uns tiefer gehen.</div>' +
                        '<div class="wm-call-msg-time">14:04</div>' +
                    '</div>' +
                '</div>' +
                '<div class="wm-call-input">' +
                    '<div class="wm-call-input-box">Notiz hinzuf\u00fcgen...</div>' +
                '</div>' +
            '</div>' +
        '</div>';

    // === MOCKUP HTML: WHATSAPP ===
    var mobilePreviewHTML =
        '<div class="wm-wa">' +
            '<div class="wm-wa-header">' +
                '<div class="wm-wa-back">\u2190</div>' +
                '<div class="wm-wa-avatar">SS</div>' +
                '<div class="wm-wa-contact">' +
                    '<div class="wm-wa-contact-name">Steven Solbach</div>' +
                    '<div class="wm-wa-contact-status">online</div>' +
                '</div>' +
            '</div>' +
            '<div class="wm-wa-messages">' +
                '<div class="wm-wa-msg wm-wa-msg--them">' +
                    '<div class="wm-wa-msg-text">Hey, wie lief die Woche?</div>' +
                    '<div class="wm-wa-msg-time">Mo 09:14</div>' +
                '</div>' +
                '<div class="wm-wa-msg wm-wa-msg--me">' +
                    '<div class="wm-wa-msg-text">Besser als erwartet. Habe den ersten Schritt gemacht.</div>' +
                    '<div class="wm-wa-msg-time">Mo 09:22</div>' +
                '</div>' +
                '<div class="wm-wa-msg wm-wa-msg--them">' +
                    '<div class="wm-wa-msg-text">Stark. Das besprechen wir Donnerstag in der Session.</div>' +
                    '<div class="wm-wa-msg-time">Mo 09:23</div>' +
                '</div>' +
                '<div class="wm-wa-msg wm-wa-msg--me">' +
                    '<div class="wm-wa-msg-text">\ud83d\ude4f</div>' +
                    '<div class="wm-wa-msg-time">Mo 09:24</div>' +
                '</div>' +
            '</div>' +
            '<div class="wm-wa-input">' +
                '<div class="wm-wa-input-box">Nachricht...</div>' +
                '<div class="wm-wa-send"><div class="wm-wa-send-icon"></div></div>' +
            '</div>' +
        '</div>';

    // === RENDER ===
    var heroHTML =
        '<section class="wm-hero">' +
            '<div class="wm-hero-inner">' +
                '<div class="wm-hero-text">' +
                    '<div class="wm-hero-badge wm-fade">' + data.badge + '</div>' +
                    '<div class="wm-hero-label wm-fade">' + data.label + '</div>' +
                    '<h1 class="wm-hero-headline wm-fade">' + data.headline + '</h1>' +
                    '<div class="wm-hero-subtext wm-fade">' + data.subtext + '</div>' +
                    '<div class="wm-hero-description wm-fade">' + data.description + '</div>' +
                    '<div class="wm-fade">' +
                        '<a href="' + data.ctaUrl + '" class="wm-cta-primary">' + data.cta + '</a>' +
                    '</div>' +
                    '<div class="wm-trust wm-fade">' + data.trust + '</div>' +
                '</div>' +
                '<div class="wm-hero-mockups wm-fade">' +
                    '<div class="wm-mockup-desktop">' +
                        '<div class="wm-mockup-titlebar">' +
                            '<div class="wm-mockup-dots">' +
                                '<span class="wm-mockup-dot wm-mockup-dot--close"></span>' +
                                '<span class="wm-mockup-dot wm-mockup-dot--min"></span>' +
                                '<span class="wm-mockup-dot wm-mockup-dot--max"></span>' +
                            '</div>' +
                            '<div class="wm-mockup-tab">' +
                                '<span class="wm-mockup-tab-icon"></span>' +
                                'Win\u00b3 Mentoring' +
                            '</div>' +
                        '</div>' +
                        '<div class="wm-mockup-urlbar">' +
                            '<div class="wm-mockup-nav-btns">' +
                                '<span class="wm-mockup-nav-btn">' + arrowLeftSVG + '</span>' +
                                '<span class="wm-mockup-nav-btn">' + arrowRightSVG + '</span>' +
                            '</div>' +
                            '<div class="wm-mockup-url">' +
                                '<span class="wm-mockup-url-lock">' + lockSVG + '</span>' +
                                '<span class="wm-mockup-url-text">meet.solbachsteven.de/session</span>' +
                            '</div>' +
                        '</div>' +
                        '<div class="wm-mockup-desktop-screen">' + desktopPreviewHTML + '</div>' +
                    '</div>' +
                    '<div class="wm-mockup-mobile">' +
                        '<div class="wm-mockup-island"></div>' +
                        '<div class="wm-mockup-mobile-screen">' + mobilePreviewHTML + '</div>' +
                        '<div class="wm-mockup-home-indicator"></div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</section>';

    // === DOM INSERTION (Smart Wrapper) ===
    var pageWrapper = document.querySelector('.wm-page');
    if (!pageWrapper) {
        pageWrapper = document.createElement('div');
        pageWrapper.className = 'wm-page';
        var target = document.currentScript || document.scripts[document.scripts.length - 1];
        target.parentNode.insertBefore(pageWrapper, target.nextSibling);
    }
    var temp = document.createElement('div');
    temp.innerHTML = heroHTML;
    while (temp.firstChild) {
        pageWrapper.appendChild(temp.firstChild);
    }

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
        window.__wmInitReveal(document.querySelector('.wm-page'));
    }, 100);
})();

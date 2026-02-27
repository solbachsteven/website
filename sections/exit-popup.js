// Exit-Intent Popup - Freebie Rettungsanker
// Zeigt kostenlosen Freebie-Kurs an wenn User die Seite verlassen will
// Trigger: Mouse verlässt Viewport (Desktop) / 60s Inaktivität (Mobile)
// Loaded via: <script src="https://solbachsteven.github.io/website/sections/exit-popup.js"></script>
(function() {
    if (window.__EP_LOADED) return;
    window.__EP_LOADED = true;

    // Bereits in dieser Session gezeigt?
    if (sessionStorage.getItem('ep_shown')) return;

    // === FONTS (idempotent) ===
    if (!document.querySelector('link[href*="Poppins"]')) {
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap';
        document.head.appendChild(fontLink);
    }

    // === CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'exit-popup');
    style.textContent = `
/* ======== EXIT-INTENT OVERLAY ======== */
.ep-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    backdrop-filter: blur(4px);
}
.ep-overlay.ep-visible {
    opacity: 1;
    visibility: visible;
}

/* ======== POPUP CARD ======== */
.ep-card {
    background: #F4F0EC;
    border-radius: 24px;
    max-width: 480px;
    width: 100%;
    padding: 48px 40px;
    position: relative;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(188, 128, 52, 0.15);
    transform: scale(0.9) translateY(20px);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.ep-overlay.ep-visible .ep-card {
    transform: scale(1) translateY(0);
}

/* ======== CLOSE BUTTON ======== */
.ep-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
    border: none;
    background: rgba(44, 39, 38, 0.06);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease;
    padding: 0;
}
.ep-close:hover {
    background: rgba(44, 39, 38, 0.12);
}
.ep-close svg {
    width: 14px;
    height: 14px;
}

/* ======== CONTENT ======== */
.ep-label {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #BC8034;
    margin-bottom: 16px;
}
.ep-headline {
    font-size: 28px;
    font-weight: 600;
    line-height: 1.3;
    color: #2C2726;
    margin-bottom: 12px;
}
.ep-subline {
    font-family: 'Caveat', cursive;
    font-size: 22px;
    color: #BC8034;
    margin-bottom: 20px;
}
.ep-description {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
    color: #2C2726;
    opacity: 0.7;
    margin-bottom: 32px;
    max-width: 380px;
    margin-left: auto;
    margin-right: auto;
}
.ep-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #FFF;
    background: #D96935;
    border: none;
    border-radius: 20px;
    padding: 16px 44px;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    margin-bottom: 12px;
}
.ep-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(217, 105, 53, 0.4);
}
.ep-trust {
    font-size: 13px;
    font-weight: 300;
    color: rgba(44, 39, 38, 0.4);
    letter-spacing: 0.3px;
}
.ep-dismiss {
    display: block;
    margin-top: 20px;
    font-size: 13px;
    font-weight: 400;
    color: rgba(44, 39, 38, 0.35);
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    text-decoration: underline;
    text-underline-offset: 2px;
}
.ep-dismiss:hover {
    color: rgba(44, 39, 38, 0.55);
}

/* ======== RESPONSIVE ======== */
@media (max-width: 768px) {
    .ep-card {
        padding: 40px 24px;
        border-radius: 20px;
    }
    .ep-headline { font-size: 24px; }
    .ep-subline { font-size: 20px; }
    .ep-description { font-size: 14px; }
    .ep-cta { font-size: 15px; padding: 15px 36px; width: 100%; max-width: 300px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        label: "KOSTENLOS",
        headline: "Warte kurz \u2013 das hier ist f\u00fcr dich.",
        subline: "Erkenne deine Lebensaufgabe",
        description: "Ein kostenloser Mini-Kurs, der dir in drei Schritten zeigt, was dich wirklich antreibt. Kein Spam, kein Risiko \u2013 nur Klarheit.",
        cta: "Kostenlosen Kurs starten",
        ctaUrl: "https://solbachsteven.systeme.io/freebie",
        trust: "100% kostenlos \u00b7 Kein Abo \u00b7 Sofort starten",
        dismiss: "Nein danke, ich bin nicht interessiert"
    };

    // === RENDER ===
    var closeSVG = '<svg viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="#2C2726" stroke-width="1.8" stroke-linecap="round"/></svg>';

    var overlay = document.createElement('div');
    overlay.className = 'ep-overlay';
    overlay.innerHTML =
        '<div class="ep-card">' +
            '<button class="ep-close" aria-label="Schlie\u00dfen">' + closeSVG + '</button>' +
            '<div class="ep-label">' + data.label + '</div>' +
            '<h2 class="ep-headline">' + data.headline + '</h2>' +
            '<div class="ep-subline">' + data.subline + '</div>' +
            '<div class="ep-description">' + data.description + '</div>' +
            '<div>' +
                '<a href="' + data.ctaUrl + '" class="ep-cta" target="_blank">' + data.cta + '</a>' +
                '<div class="ep-trust">' + data.trust + '</div>' +
            '</div>' +
            '<button class="ep-dismiss">' + data.dismiss + '</button>' +
        '</div>';

    document.body.appendChild(overlay);

    // === SHOW / HIDE LOGIC ===
    function showPopup() {
        if (sessionStorage.getItem('ep_shown')) return;
        sessionStorage.setItem('ep_shown', '1');
        overlay.classList.add('ep-visible');
        document.body.style.overflow = 'hidden';
    }

    function hidePopup() {
        overlay.classList.remove('ep-visible');
        document.body.style.overflow = '';
    }

    // Close: X-Button
    overlay.querySelector('.ep-close').addEventListener('click', hidePopup);

    // Close: Overlay-Klick (nicht Card)
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) hidePopup();
    });

    // Close: Escape-Taste
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') hidePopup();
    });

    // Close: Dismiss-Link
    overlay.querySelector('.ep-dismiss').addEventListener('click', hidePopup);

    // CTA-Klick: Popup schliessen nach Navigation
    overlay.querySelector('.ep-cta').addEventListener('click', function() {
        setTimeout(hidePopup, 300);
    });

    // === TRIGGER: Desktop - Mouse verlässt Viewport nach oben ===
    var armed = false;
    // Erst nach 5 Sekunden aktivieren (kein sofortiges Popup)
    setTimeout(function() { armed = true; }, 5000);

    document.addEventListener('mouseout', function(e) {
        if (!armed) return;
        if (e.clientY <= 0 && e.relatedTarget === null) {
            showPopup();
        }
    });

    // === TRIGGER: Mobile - 60 Sekunden Inaktivität ===
    var mobileTimer = null;
    var isMobile = window.innerWidth <= 768;

    if (isMobile) {
        function resetMobileTimer() {
            clearTimeout(mobileTimer);
            mobileTimer = setTimeout(showPopup, 60000);
        }
        resetMobileTimer();
        document.addEventListener('touchstart', resetMobileTimer, { passive: true });
        document.addEventListener('scroll', resetMobileTimer, { passive: true });
    }
})();

/*
 * Header / Navigation - Steven Solbach Website
 * Sticky Header mit Logo, Navigation, Academy-CTA
 * Transparent → Solid bei Scroll, Mobile Hamburger
 */
(function() {
    if (window.__SS_HEADER_LOADED) return;
    window.__SS_HEADER_LOADED = true;

    // ======== ASSETS ========
    var isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    var ASSETS = isLocal ? '/assets/' : 'https://stevensolbach.de/assets/';

    // ======== FONTS ========
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

    // ======== CSS ========
    var style = document.createElement('style');
    style.setAttribute('data-section', 'ss-header');
    style.textContent = '\
@font-face {\
    font-family: "PacificaCondensed";\
    src: url("https://db.onlinewebfonts.com/t/3ade034999153f8110b40724ad74f00e.woff2") format("woff2"),\
         url("https://db.onlinewebfonts.com/t/3ade034999153f8110b40724ad74f00e.woff") format("woff"),\
         url("https://db.onlinewebfonts.com/t/3ade034999153f8110b40724ad74f00e.ttf") format("truetype");\
    font-weight: normal;\
    font-style: normal;\
    font-display: swap;\
}\
\
/* ======== HEADER ======== */\
.ss-header {\
    position: fixed;\
    top: 0;\
    left: 0;\
    right: 0;\
    z-index: 1000;\
    background: transparent;\
    transition: background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease;\
}\
.ss-header-inner::before,\
.ss-header-inner::after {\
    content: "";\
    position: absolute;\
    left: 0;\
    right: 0;\
    height: 2px;\
    background: #BC8034;\
    pointer-events: none;\
    z-index: 1;\
    -webkit-mask-image: var(--line-mask, none);\
    mask-image: var(--line-mask, none);\
}\
.ss-header-inner::before { top: 0; }\
.ss-header-inner::after { bottom: 0; }\
.ss-header.scrolled {\
    background: rgba(26,26,26,0.92);\
    backdrop-filter: blur(16px);\
    -webkit-backdrop-filter: blur(16px);\
    box-shadow: 0 4px 24px rgba(0,0,0,0.3);\
}\
.ss-header-inner {\
    position: relative;\
    max-width: 1200px;\
    margin: 0 auto;\
    padding: 0 60px;\
    height: 140px;\
    display: flex;\
    align-items: center;\
    justify-content: space-between;\
}\
\
/* ======== LOGO ======== */\
.ss-header-logo {\
    display: block;\
    text-decoration: none;\
    flex-shrink: 0;\
    height: 130px;\
}\
.ss-header-logo img {\
    height: 100%;\
    width: auto;\
    object-fit: contain;\
}\
\
/* ======== NAV (Desktop) ======== */\
.ss-header-nav {\
    display: flex;\
    align-items: center;\
    gap: 8px;\
}\
.ss-header-link {\
    font-family: "Poppins", sans-serif;\
    font-size: 14px;\
    font-weight: 400;\
    color: rgba(255,255,255,0.6);\
    text-decoration: none;\
    padding: 8px 14px;\
    border-radius: 8px;\
    transition: color 0.2s, background 0.2s;\
    cursor: pointer;\
    white-space: nowrap;\
}\
.ss-header-link:hover {\
    color: #FFFFFF;\
    background: rgba(255,255,255,0.06);\
}\
.ss-header-divider {\
    width: 1px;\
    height: 24px;\
    background: rgba(188,128,52,0.2);\
    margin: 0 8px;\
}\
.ss-header-cta {\
    font-family: "Poppins", sans-serif;\
    font-size: 14px;\
    font-weight: 500;\
    color: #2D2726;\
    background: linear-gradient(135deg, #BC8034 0%, #D4A057 100%);\
    border: none;\
    border-radius: 20px;\
    padding: 9px 22px;\
    text-decoration: none;\
    cursor: pointer;\
    transition: transform 0.2s, box-shadow 0.2s;\
    display: inline-flex;\
    align-items: center;\
    gap: 7px;\
    white-space: nowrap;\
    letter-spacing: 0.01em;\
}\
.ss-header-cta:hover {\
    transform: translateY(-1px);\
    box-shadow: 0 4px 20px rgba(188,128,52,0.35);\
}\
.ss-header-cta svg {\
    width: 15px;\
    height: 15px;\
    stroke: #2D2726;\
}\
\
/* ======== HAMBURGER (Mobile) ======== */\
.ss-header-hamburger {\
    display: none;\
    background: none;\
    border: none;\
    cursor: pointer;\
    padding: 8px;\
    color: #FFFFFF;\
}\
.ss-header-hamburger svg {\
    width: 24px;\
    height: 24px;\
    display: block;\
}\
\
/* ======== MOBILE MENU ======== */\
.ss-mobile-overlay {\
    display: none;\
    position: fixed;\
    inset: 0;\
    background: rgba(0,0,0,0.5);\
    z-index: 999;\
    opacity: 0;\
    transition: opacity 0.3s;\
}\
.ss-mobile-overlay.open {\
    opacity: 1;\
}\
.ss-mobile-menu {\
    display: none;\
    position: fixed;\
    top: 0;\
    right: -280px;\
    width: 280px;\
    height: 100%;\
    background: #2D2726;\
    z-index: 1001;\
    padding: 24px;\
    transition: right 0.3s ease;\
    box-shadow: -4px 0 24px rgba(0,0,0,0.4);\
    overflow-y: auto;\
}\
.ss-mobile-menu.open {\
    right: 0;\
}\
.ss-mobile-close {\
    background: none;\
    border: none;\
    color: rgba(255,255,255,0.5);\
    cursor: pointer;\
    padding: 8px;\
    position: absolute;\
    top: 16px;\
    right: 16px;\
}\
.ss-mobile-close svg {\
    width: 24px;\
    height: 24px;\
    display: block;\
}\
.ss-mobile-menu-logo {\
    margin-bottom: 40px;\
    padding-right: 40px;\
}\
.ss-mobile-nav {\
    display: flex;\
    flex-direction: column;\
    gap: 4px;\
}\
.ss-mobile-nav a {\
    font-family: "Poppins", sans-serif;\
    font-size: 16px;\
    font-weight: 400;\
    color: rgba(255,255,255,0.7);\
    text-decoration: none;\
    padding: 14px 16px;\
    border-radius: 12px;\
    transition: color 0.2s, background 0.2s;\
    display: flex;\
    align-items: center;\
    gap: 12px;\
}\
.ss-mobile-nav a:hover,\
.ss-mobile-nav a:active {\
    color: #FFFFFF;\
    background: rgba(188,128,52,0.1);\
}\
.ss-mobile-nav a svg {\
    width: 20px;\
    height: 20px;\
    flex-shrink: 0;\
    opacity: 0.5;\
}\
.ss-mobile-nav .ss-mobile-cta {\
    margin-top: 20px;\
    font-weight: 500;\
    color: #2D2726;\
    background: linear-gradient(135deg, #BC8034 0%, #D4A057 100%);\
    justify-content: center;\
    border-radius: 20px;\
}\
.ss-mobile-nav .ss-mobile-cta:hover {\
    color: #2D2726;\
    background: linear-gradient(135deg, #D4A057 0%, #BC8034 100%);\
}\
.ss-mobile-nav .ss-mobile-cta svg {\
    opacity: 1;\
    stroke: #2D2726;\
}\
\
/* ======== SPACER ======== */\
.ss-header-spacer {\
    height: 140px;\
}\
\
/* ======== RESPONSIVE ======== */\
@media (max-width: 900px) {\
    .ss-header-inner {\
        padding: 0 24px;\
        height: 120px;\
    }\
    .ss-header-spacer {\
        height: 120px;\
    }\
    .ss-header-logo {\
        height: 100px;\
    }\
    .ss-header-nav {\
        display: none;\
    }\
    .ss-header-hamburger {\
        display: block;\
    }\
    .ss-mobile-overlay,\
    .ss-mobile-menu {\
        display: block;\
    }\
}\
@media (max-width: 480px) {\
    .ss-header-inner {\
        padding: 0 16px;\
        height: 100px;\
    }\
    .ss-header-spacer {\
        height: 100px;\
    }\
    .ss-header-logo {\
        height: 80px;\
    }\
}\
';
    document.head.appendChild(style);

    // ======== ICONS ========
    var icons = {
        login: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>',
        menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
        close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
        framework: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
        offers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
        testimonials: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
        about: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
    };

    // ======== DATA ========
    var portalUrl = window.__SS_PORTAL_URL || '/portal.html';

    var navLinks = [
        { label: 'Framework', href: '#win3Section', icon: icons.framework },
        { label: 'Angebote', href: '#drei-wege', icon: icons.offers },
        { label: 'Testimonials', href: '#testimonials-section', icon: icons.testimonials },
        { label: '\u00dcber mich', href: '#storytelling-section', icon: icons.about }
    ];

    // ======== RENDER ========
    // Desktop nav links
    var navHtml = '';
    for (var i = 0; i < navLinks.length; i++) {
        navHtml += '<a href="' + navLinks[i].href + '" class="ss-header-link">' + navLinks[i].label + '</a>';
    }

    // Mobile nav links
    var mobileNavHtml = '';
    for (var j = 0; j < navLinks.length; j++) {
        mobileNavHtml += '<a href="' + navLinks[j].href + '" class="ss-mobile-link">'
            + navLinks[j].icon
            + navLinks[j].label
            + '</a>';
    }

    var headerHtml = ''
        // Fixed Header
        + '<header class="ss-header" id="ss-header">'
        +   '<div class="ss-header-inner">'
        // Logo
        +     '<a href="#" class="ss-header-logo" onclick="window.scrollTo({top:0,behavior:\'smooth\'});return false;">'
        +       '<img src="' + ASSETS + 'steven-solbach-logo.png" alt="Steven Solbach">'
        +     '</a>'
        // Desktop Nav
        +     '<nav class="ss-header-nav">'
        +       navHtml
        +       '<div class="ss-header-divider"></div>'
        +       '<a href="' + portalUrl + '" class="ss-header-cta">' + icons.login + ' Academy</a>'
        +     '</nav>'
        // Mobile Hamburger
        +     '<button class="ss-header-hamburger" onclick="window.__SS_HEADER.openMenu()" aria-label="Men\u00fc">'
        +       icons.menu
        +     '</button>'
        +   '</div>'
        + '</header>'
        // Mobile Overlay
        + '<div class="ss-mobile-overlay" id="ss-mobile-overlay" onclick="window.__SS_HEADER.closeMenu()"></div>'
        // Mobile Menu
        + '<nav class="ss-mobile-menu" id="ss-mobile-menu">'
        +   '<button class="ss-mobile-close" onclick="window.__SS_HEADER.closeMenu()" aria-label="Schlie\u00dfen">'
        +     icons.close
        +   '</button>'
        +   '<div class="ss-mobile-menu-logo">'
        +     '<img src="' + ASSETS + 'steven-solbach-logo.png" alt="Steven Solbach" style="height:40px;width:auto;">'
        +   '</div>'
        +   '<div class="ss-mobile-nav">'
        +     mobileNavHtml
        +     '<a href="' + portalUrl + '" class="ss-mobile-cta ss-mobile-link">'
        +       icons.login + ' Academy'
        +     '</a>'
        +   '</div>'
        + '</nav>'
        // Spacer
        + '<div class="ss-header-spacer"></div>';

    // Insert
    var target = window.__SS_CONTAINER || document.body;
    var wrapper = document.createElement('div');
    wrapper.innerHTML = headerHtml;
    while (wrapper.firstChild) {
        target.appendChild(wrapper.firstChild);
    }

    // ======== SCROLL EFFECT ========
    var header = document.getElementById('ss-header');
    var lastScroll = 0;

    function onScroll() {
        var y = window.scrollY || window.pageYOffset;
        if (header) {
            header.classList.toggle('scrolled', y > 30);
        }
        lastScroll = y;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initial check

    // ======== GOLD LINE GAP (nur rundes Logo unterbricht) ========
    // Pseudo-Elemente liegen auf .ss-header-inner (max-width begrenzt).
    // Mask-Gradient wird komplett in JS gebaut - so koennen Edge Cases
    // (Mobile: kein Platz fuer linkes Segment) sauber behandelt werden.
    function updateLogoGap() {
        var h = document.getElementById('ss-header');
        if (!h) return;
        var inner = h.querySelector('.ss-header-inner');
        var logoImg = h.querySelector('.ss-header-logo img');
        if (!inner || !logoImg) return;
        var innerRect = inner.getBoundingClientRect();
        var imgRect = logoImg.getBoundingClientRect();
        var imgH = imgRect.height;
        var W = innerRect.width;
        // Kreis-Zentrum: ~48% der Bildhoehe von der linken Bildkante
        var cx = imgRect.left + imgH * 0.48;
        var cr = imgH * 0.35; // Hauptkreis-Radius
        var pad = 6;
        var gapL = (cx - cr - pad) - innerRect.left;
        var gapR = (cx + cr + pad) - innerRect.left;
        if (gapL < 0) gapL = 0;
        if (gapR > W) gapR = W;
        // Inset + Taper proportional (4%), min 10px
        var inset = Math.max(10, Math.round(W * 0.04));
        var taper = Math.max(10, Math.round(W * 0.04));
        var rightSpace = W - gapR;
        // Gradient-Stops bauen - Inset/Taper adaptiv an verfuegbaren Platz
        var stops = [];
        // LINKES Segment
        if (gapL > 20) {
            // Inset/Taper an verfuegbaren Platz anpassen
            var lI = Math.min(inset, Math.round(gapL * 0.15));
            var lT = Math.min(taper, Math.round(gapL * 0.3));
            stops.push('transparent 0');
            stops.push('transparent ' + lI + 'px');
            stops.push('black ' + (lI + lT) + 'px');
            stops.push('black ' + Math.max(lI + lT, gapL - lT) + 'px');
            stops.push('transparent ' + gapL + 'px');
        } else {
            stops.push('transparent 0');
            stops.push('transparent ' + gapL + 'px');
        }
        // RECHTES Segment
        if (rightSpace > 20) {
            var rI = Math.min(inset, Math.round(rightSpace * 0.15));
            var rT = Math.min(taper, Math.round(rightSpace * 0.3));
            stops.push('transparent ' + gapR + 'px');
            stops.push('black ' + (gapR + rT) + 'px');
            stops.push('black ' + (W - rI - rT) + 'px');
            stops.push('transparent ' + (W - rI) + 'px');
            stops.push('transparent 100%');
        } else {
            stops.push('transparent ' + gapR + 'px');
            stops.push('transparent 100%');
        }
        var mask = 'linear-gradient(to right, ' + stops.join(', ') + ')';
        inner.style.setProperty('--line-mask', mask);
    }

    // Initial + bei Resize aktualisieren
    updateLogoGap();
    window.addEventListener('resize', updateLogoGap);

    // Nach Logo-Bild-Load nochmal aktualisieren (Bild kann spaeter laden)
    var logoImg = header ? header.querySelector('.ss-header-logo img') : null;
    if (logoImg) {
        if (logoImg.complete) {
            updateLogoGap();
        } else {
            logoImg.addEventListener('load', updateLogoGap);
        }
    }

    // ======== SMOOTH SCROLL ========
    target.addEventListener('click', function(e) {
        var link = e.target.closest('.ss-header-link, .ss-mobile-link');
        if (!link) return;
        var href = link.getAttribute('href');
        if (!href || href.charAt(0) !== '#') return;

        var el = document.querySelector(href) || document.getElementById(href.slice(1));
        if (el) {
            e.preventDefault();
            window.__SS_HEADER.closeMenu();
            var offset = header ? header.offsetHeight : 72;
            var top = el.getBoundingClientRect().top + window.scrollY - offset - 8;
            window.scrollTo({ top: top, behavior: 'smooth' });
        }
    });

    // ======== MOBILE MENU ========
    window.__SS_HEADER = {
        openMenu: function() {
            var menu = document.getElementById('ss-mobile-menu');
            var overlay = document.getElementById('ss-mobile-overlay');
            if (menu) menu.classList.add('open');
            if (overlay) overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        },
        closeMenu: function() {
            var menu = document.getElementById('ss-mobile-menu');
            var overlay = document.getElementById('ss-mobile-overlay');
            if (menu) menu.classList.remove('open');
            if (overlay) overlay.classList.remove('open');
            document.body.style.overflow = '';
        }
    };

    console.log('[SS-Header] Header geladen, Academy-Link: ' + portalUrl);
})();

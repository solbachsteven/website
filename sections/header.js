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
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap',
        'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=Outfit:wght@300;400;500;600&family=Lora:ital,wght@0,400;1,400;1,500&display=swap'
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
    transition: background 0.4s ease, backdrop-filter 0.4s ease, transform 0.3s ease;\
}\
.ss-header-inner::before,\
.ss-header-inner::after {\
    content: "";\
    position: absolute;\
    left: 0;\
    right: 0;\
    height: 1px;\
    background: linear-gradient(to right, #C9A84C, #DFC06A, #C9A84C);\
    pointer-events: none;\
    z-index: 1;\
    opacity: 0;\
    transition: opacity 0.4s ease;\
    -webkit-mask-image: var(--line-mask);\
    mask-image: var(--line-mask);\
}\
.ss-header-inner.lines-ready::before,\
.ss-header-inner.lines-ready::after {\
    opacity: 1;\
}\
.ss-header-inner::before { top: 20px; }\
.ss-header-inner::after { bottom: 20px; }\
.ss-header-glass {\
    position: absolute;\
    top: 20px;\
    bottom: 20px;\
    left: 0;\
    right: 0;\
    border-radius: 16px;\
    background: rgba(26,26,26,0.85);\
    backdrop-filter: blur(12px);\
    -webkit-backdrop-filter: blur(12px);\
    border: 1px solid rgba(201,168,76,0.12);\
    pointer-events: none;\
    z-index: 0;\
    opacity: 0;\
    transition: opacity 0.4s ease;\
}\
.ss-header-inner.lines-ready .ss-header-glass {\
    opacity: 1;\
}\
.ss-header-logo-bg {\
    position: absolute;\
    border-radius: 50%;\
    background: #1a1a1a;\
    pointer-events: none;\
    z-index: 0;\
    opacity: 0;\
    transition: opacity 0.4s ease;\
}\
.ss-header-inner.lines-ready .ss-header-logo-bg {\
    opacity: 1;\
}\
.ss-header.scrolled {\
    background: transparent;\
}\
.ss-header.header-hidden {\
    transform: translateY(-100%);\
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
    position: relative;\
    z-index: 2;\
}\
.ss-header-logo img {\
    height: 100%;\
    width: auto;\
    object-fit: contain;\
}\
\
/* ======== NAV (Desktop) ======== */\
.ss-header-nav {\
    position: relative;\
    z-index: 2;\
    display: flex;\
    align-items: center;\
    gap: 8px;\
}\
.ss-header-link {\
    font-family: "Outfit", sans-serif;\
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
    background: rgba(201,168,76,0.2);\
    margin: 0 8px;\
}\
.ss-header-cta {\
    font-family: "Outfit", sans-serif;\
    font-size: 14px;\
    font-weight: 500;\
    color: #111110;\
    background: #C9A84C;\
    border: none;\
    border-radius: 12px;\
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
    box-shadow: 0 4px 20px rgba(201,168,76,0.35);\
}\
.ss-header-cta svg {\
    width: 15px;\
    height: 15px;\
    stroke: #111110;\
}\
\
/* ======== HAMBURGER (Mobile) ======== */\
.ss-header-hamburger {\
    display: none;\
    position: relative;\
    z-index: 2;\
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
    background: #1a1a1a;\
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
    font-family: "Outfit", sans-serif;\
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
    background: rgba(201,168,76,0.1);\
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
    color: #111110;\
    background: #C9A84C;\
    justify-content: center;\
    border-radius: 12px;\
}\
.ss-mobile-nav .ss-mobile-cta:hover {\
    color: #111110;\
    background: #DFC06A;\
}\
.ss-mobile-nav .ss-mobile-cta svg {\
    opacity: 1;\
    stroke: #111110;\
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
        // Glaseffekt-Leiste + Logo-Hintergrund
        +     '<div class="ss-header-logo-bg"></div>'
        +     '<div class="ss-header-glass"></div>'
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
            // Runter scrollen = verstecken, hoch scrollen = zeigen
            if (y > 100 && y > lastScroll) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
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
        if (!logoImg.naturalWidth || !logoImg.complete) return;
        var innerRect = inner.getBoundingClientRect();
        var imgRect = logoImg.getBoundingClientRect();
        var imgH = imgRect.height;
        var W = innerRect.width;
        // Kreis-Zentrum: Natuerliches Bild 600x250, Kreis-Mitte bei ~x=155
        // = 155/600 * displayWidth von links. Radius: ~42% der Bildhoehe.
        var cx = imgRect.left + (143 / logoImg.naturalWidth) * imgRect.width;
        var cr = imgH * 0.36; // Hauptkreis-Radius (enger am goldenen Ring)
        var pad = 6;
        var gapL = (cx - cr - pad) - innerRect.left;
        var gapR = (cx + cr + pad) - innerRect.left;
        if (gapL < 0) gapL = 0;
        if (gapR > W) gapR = W;
        // Taper-Werte: Edge-Taper adaptiv, Gap-Taper symmetrisch
        var edgeInset = Math.max(10, Math.round(W * 0.04));
        var edgeTaper = Math.max(10, Math.round(W * 0.04));
        var gapTaper = Math.max(15, Math.round(cr * 0.4)); // symmetrisch am Gap
        var rightSpace = W - gapR;
        var stops = [];
        // LINKES Segment
        if (gapL > 20) {
            var lI = Math.min(edgeInset, Math.round(gapL * 0.15));
            var lT = Math.min(edgeTaper, Math.round(gapL * 0.3));
            var lGT = Math.min(gapTaper, Math.round(gapL * 0.4)); // Gap-Taper links
            stops.push('transparent 0');
            stops.push('transparent ' + lI + 'px');
            stops.push('black ' + (lI + lT) + 'px');
            stops.push('black ' + Math.max(lI + lT, gapL - lGT) + 'px');
            stops.push('transparent ' + gapL + 'px');
        } else {
            stops.push('transparent 0');
            stops.push('transparent ' + gapL + 'px');
        }
        // RECHTES Segment
        if (rightSpace > 20) {
            var rI = Math.min(edgeInset, Math.round(rightSpace * 0.15));
            var rT = Math.min(edgeTaper, Math.round(rightSpace * 0.3));
            var rGT = Math.min(gapTaper, Math.round(rightSpace * 0.4)); // Gap-Taper rechts
            var rEnd = W - rI - rT;
            if (rEnd < gapR + rGT) rEnd = gapR + rGT;
            stops.push('transparent ' + gapR + 'px');
            stops.push('black ' + (gapR + rGT) + 'px');
            stops.push('black ' + rEnd + 'px');
            stops.push('transparent ' + (W - rI) + 'px');
            stops.push('transparent ' + W + 'px');
        } else {
            stops.push('transparent ' + gapR + 'px');
            stops.push('transparent 100%');
        }
        var mask = 'linear-gradient(to right, ' + stops.join(', ') + ')';
        inner.style.setProperty('--line-mask', mask);

        // Logo-BG-Kreis positionieren
        var logoBg = inner.querySelector('.ss-header-logo-bg');
        if (logoBg) {
            var d = cr * 2 + pad * 2;
            var bgCx = cx - innerRect.left;
            var bgCy = innerRect.height / 2;
            logoBg.style.width = d + 'px';
            logoBg.style.height = d + 'px';
            logoBg.style.left = (bgCx - d / 2) + 'px';
            logoBg.style.top = (bgCy - d / 2) + 'px';
        }
    }

    // Einmalig korrekt berechnen wenn Bild geladen, dann einblenden
    var logoImg = header ? header.querySelector('.ss-header-logo img') : null;
    function initLines() {
        if (!logoImg || !logoImg.complete || !logoImg.naturalWidth) return;
        updateLogoGap();
        var inner = header.querySelector('.ss-header-inner');
        if (inner) inner.classList.add('lines-ready');
    }
    if (logoImg) {
        if (logoImg.complete && logoImg.naturalWidth) {
            // Bild aus Cache - warten bis Layout steht
            window.addEventListener('load', function() {
                requestAnimationFrame(initLines);
            });
            // Fallback falls load schon gefeuert hat
            requestAnimationFrame(initLines);
        } else {
            logoImg.addEventListener('load', function() {
                requestAnimationFrame(initLines);
            });
        }
    }
    // Bei Resize neu berechnen (kein Flashing - Linien sind bereits sichtbar)
    window.addEventListener('resize', updateLogoGap);

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

// Win³ Kurs Landingpage - Hero Section (Standalone)
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
    text-align: center;
}
.wk-hero-inner {
    max-width: 780px;
    margin: 0 auto;
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
    font-size: 48px;
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
    max-width: 580px;
    margin-left: auto;
    margin-right: auto;
}
.wk-hero .wk-cta-primary {
    font-size: 18px;
    padding: 20px 56px;
    font-weight: 600;
}
.wk-hero .wk-trust {
    color: rgba(44, 39, 38, 0.45);
}

/* ======== HERO RESPONSIVE ======== */
@media (max-width: 1024px) {
    .wk-hero { padding: 80px 30px 60px; }
    .wk-hero-headline { font-size: 40px; }
}
@media (max-width: 768px) {
    .wk-hero {
        min-height: auto;
        padding: 60px 16px 50px;
        border-radius: 0 0 48px 0;
    }
    .wk-hero-headline { font-size: 32px; }
    .wk-hero-subtext { font-size: 22px; }
    .wk-hero-description { font-size: 15px; }
    .wk-hero .wk-cta-primary { font-size: 16px; padding: 18px 40px; width: 100%; max-width: 340px; }
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

    // === RENDER ===
    var heroHTML =
        '<section class="wk-hero">' +
            '<div class="wk-hero-inner">' +
                '<div class="wk-hero-label wk-fade">' + data.label + '</div>' +
                '<h1 class="wk-hero-headline wk-fade">' + data.headline + '</h1>' +
                '<div class="wk-hero-subtext wk-fade">' + data.subtext + '</div>' +
                '<div class="wk-hero-description wk-fade">' + data.description + '</div>' +
                '<div class="wk-fade">' +
                    '<a href="' + data.ctaUrl + '" class="wk-cta-primary">' + data.cta + '</a>' +
                '</div>' +
                '<div class="wk-trust wk-fade">' + data.trust + '</div>' +
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

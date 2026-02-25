// Freebie Landingpage - Ergebnis Section (Standalone)
// Loaded via: <script src="https://solbachsteven.github.io/website/freebie/fl-result.js"></script>
(function() {
    if (window.__FL_RESULT_LOADED) return;
    window.__FL_RESULT_LOADED = true;

    // === SHARED RESOURCES (idempotent) ===
    if (!window.__FL_SHARED) {
        window.__FL_SHARED = true;
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap';
        document.head.appendChild(fontLink);

        var baseStyle = document.createElement('style');
        baseStyle.setAttribute('data-section', 'fl-base');
        baseStyle.textContent = `
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
.fl-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.fl-fade.visible {
    opacity: 1;
    transform: translateY(0);
}
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

    // === RESULT CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'fl-result');
    style.textContent = `
/* ======== ERGEBNIS SECTION ======== */
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

/* ======== RESULT RESPONSIVE - TABLET ======== */
@media (max-width: 1024px) {
    .fl-result { padding: 80px 30px; }
    .fl-result-headline { font-size: 30px; color: #FFFFFF; }
}

/* ======== RESULT RESPONSIVE - MOBILE ======== */
@media (max-width: 768px) {
    .fl-result { padding: 60px 16px; }
    .fl-result-headline { font-size: 26px; }
    .fl-result-subheadline { font-size: 22px; }
    .fl-result-description { font-size: 15px; margin-bottom: 36px; }
    .fl-result-extras { grid-template-columns: 1fr; gap: 16px; }
    .fl-result-extra { padding: 24px 20px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        headline: "Am Ende h\u00e4ltst du 3 S\u00e4tze in den H\u00e4nden",
        subheadline: "Dein Warum. Deine Vision. Dein Mission Statement.",
        description: "Drei S\u00e4tze, die beschreiben, wof\u00fcr du hier bist. Kein vages Gef\u00fchl mehr - sondern Klarheit \u00fcber deinen inneren Kompass.",
        extras: [
            "Gef\u00fchrte Reflexionsfragen in jedem Schritt",
            "Optionale KI-Prompts f\u00fcr tiefere Selbsterforschung",
            "Deine S\u00e4tze auf der Community-Pinwand verewigen"
        ]
    };

    // === SVG ICONS ===
    var compassSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#BC8034" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="rgba(188,128,52,0.2)"/></svg>';
    var sparkSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#BC8034" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="rgba(188,128,52,0.15)"/></svg>';
    var usersSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#BC8034" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>';
    var icons = [compassSVG, sparkSVG, usersSVG];

    // === RENDER ===
    var extrasHTML = '';
    for (var m = 0; m < data.extras.length; m++) {
        extrasHTML +=
            '<div class="fl-result-extra fl-fade">' +
                '<div class="fl-result-extra-icon">' + icons[m] + '</div>' +
                data.extras[m] +
            '</div>';
    }

    var sectionHTML =
        '<section class="fl-result">' +
            '<div class="fl-result-inner">' +
                '<h2 class="fl-result-headline fl-fade">' + data.headline + '</h2>' +
                '<div class="fl-result-subheadline fl-fade">' + data.subheadline + '</div>' +
                '<div class="fl-result-description fl-fade">' + data.description + '</div>' +
                '<div class="fl-result-extras">' + extrasHTML + '</div>' +
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
    temp.innerHTML = sectionHTML;
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
        window.__flInitReveal(document.querySelector('.fl-page'));
    }, 100);
})();

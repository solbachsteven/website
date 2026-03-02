// Community Pinnwand - Final CTA Section (Standalone)
// Loaded via: <script src="https://solbachsteven.github.io/website/community/cp-final-cta.js"></script>
(function() {
    if (window.__CP_FINAL_LOADED) return;
    window.__CP_FINAL_LOADED = true;

    // === SHARED RESOURCES (idempotent) ===
    if (!window.__CP_SHARED) {
        window.__CP_SHARED = true;
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap';
        document.head.appendChild(fontLink);

        var baseStyle = document.createElement('style');
        baseStyle.setAttribute('data-section', 'cp-base');
        baseStyle.textContent = `
.cp-page {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;
    background: #1A1A1A;
    overflow-x: hidden;
    position: relative;
    z-index: 5;
}
.cp-page *, .cp-page *::before, .cp-page *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.cp-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.cp-fade.visible {
    opacity: 1;
    transform: translateY(0);
}
.cp-cta-primary {
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
.cp-cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(217, 105, 53, 0.4);
}
.cp-trust {
    font-size: 13px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.5);
    letter-spacing: 0.3px;
}
@media (max-width: 768px) {
    .cp-cta-primary {
        font-size: 15px;
        padding: 16px 36px;
        width: 100%;
        max-width: 340px;
    }
}
`;
        document.head.appendChild(baseStyle);
    }

    // === FINAL CTA CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'cp-final-cta');
    style.textContent = `
/* ======== FINAL CTA SECTION ======== */
.cp-final {
    padding: 100px 40px;
    text-align: center;
    border-radius: 40px 40px 0 0;
    position: relative;
    background:
        radial-gradient(ellipse 80% 60% at 20% 10%, rgba(188, 128, 52, 0.2) 0%, transparent 60%),
        radial-gradient(ellipse 60% 50% at 85% 80%, rgba(188, 128, 52, 0.12) 0%, transparent 55%),
        linear-gradient(180deg, #B8512A 0%, #C45A28 30%, #D96935 70%, #D96935 100%);
}
.cp-final::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent 10%, #BC8034 30%, #D4A04A 50%, #BC8034 70%, transparent 90%);
}
.cp-final-inner {
    max-width: 640px;
    margin: 0 auto;
}
.cp-final-headline {
    font-size: 42px;
    font-weight: 600;
    line-height: 1.2;
    color: #FFFFFF;
    margin-bottom: 16px;
}
.cp-final-subheadline {
    font-family: 'Caveat', cursive;
    font-size: 26px;
    color: #F4F0EC;
    margin-bottom: 44px;
}
.cp-final .cp-cta-primary {
    background: #FFFFFF;
    color: #D96935;
    font-weight: 600;
    padding: 20px 56px;
    font-size: 18px;
}
.cp-final .cp-cta-primary:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
}
.cp-final .cp-trust {
    color: rgba(255, 255, 255, 0.6);
}

/* ======== FINAL CTA RESPONSIVE - TABLET ======== */
@media (max-width: 1024px) {
    .cp-final { padding: 80px 30px; }
    .cp-final-headline { font-size: 36px; }
}

/* ======== FINAL CTA RESPONSIVE - MOBILE ======== */
@media (max-width: 768px) {
    .cp-final { padding: 60px 16px 50px; border-radius: 24px 24px 0 0; }
    .cp-final-headline { font-size: 28px; }
    .cp-final-subheadline { font-size: 22px; margin-bottom: 36px; }
    .cp-final .cp-cta-primary { font-size: 16px; padding: 18px 40px; width: 100%; max-width: 340px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        headline: "Bereit, deinen Eintrag zu hinterlassen?",
        subheadline: "Deine drei S\u00e4tze warten auf dich.",
        cta: { text: "Zum kostenlosen Kurs", url: "https://solbachsteven.systeme.io/freebie" },
        trust: "Kostenlos \u00b7 Kein Spam \u00b7 Direkt starten"
    };

    // === RENDER ===
    var sectionHTML =
        '<section class="cp-final">' +
            '<div class="cp-final-inner">' +
                '<h2 class="cp-final-headline cp-fade">' + data.headline + '</h2>' +
                '<div class="cp-final-subheadline cp-fade">' + data.subheadline + '</div>' +
                '<div class="cp-fade">' +
                    '<a href="' + data.cta.url + '" class="cp-cta-primary">' + data.cta.text + '</a>' +
                '</div>' +
                '<div class="cp-trust cp-fade">' + data.trust + '</div>' +
            '</div>' +
        '</section>';

    // === DOM INSERTION (Smart Wrapper) ===
    var pageWrapper = document.querySelector('.cp-page');
    if (!pageWrapper) {
        pageWrapper = document.createElement('div');
        pageWrapper.className = 'cp-page';
        var target = document.currentScript || document.scripts[document.scripts.length - 1];
        target.parentNode.insertBefore(pageWrapper, target.nextSibling);
    }
    var temp = document.createElement('div');
    temp.innerHTML = sectionHTML;
    while (temp.firstChild) {
        pageWrapper.appendChild(temp.firstChild);
    }

    // === SCROLL REVEAL ===
    if (!window.__CP_REVEAL_INIT) {
        window.__CP_REVEAL_INIT = true;
        window.__cpInitReveal = function(container) {
            var fadeEls = container.querySelectorAll('.cp-fade:not(.visible)');
            if ('IntersectionObserver' in window) {
                var observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            var parent = entry.target.parentElement;
                            var siblings = parent.querySelectorAll('.cp-fade');
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
        window.__cpInitReveal(document.querySelector('.cp-page'));
    }, 100);
})();

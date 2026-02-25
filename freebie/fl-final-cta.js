// Freebie Landingpage - Final CTA Section (Standalone)
// Loaded via: <script src="https://solbachsteven.github.io/website/freebie/fl-final-cta.js"></script>
(function() {
    if (window.__FL_FINAL_LOADED) return;
    window.__FL_FINAL_LOADED = true;

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

    // === FINAL CTA CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'fl-final-cta');
    style.textContent = `
/* ======== FINAL CTA SECTION ======== */
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

/* ======== FINAL CTA RESPONSIVE - TABLET ======== */
@media (max-width: 1024px) {
    .fl-final { padding: 80px 30px; }
    .fl-final-headline { font-size: 36px; }
}

/* ======== FINAL CTA RESPONSIVE - MOBILE ======== */
@media (max-width: 768px) {
    .fl-final { padding: 60px 16px 50px; border-radius: 24px 24px 0 0; }
    .fl-final-headline { font-size: 28px; }
    .fl-final-subheadline { font-size: 22px; margin-bottom: 36px; }
    .fl-final .fl-cta-primary { font-size: 16px; padding: 18px 40px; width: 100%; max-width: 340px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        headline: "Bereit, deine Lebensaufgabe zu erkennen?",
        subheadline: "Reflexionen, die dir Klarheit bringen.",
        cta: { text: "Jetzt kostenlos starten", url: "#LINK_FREEBIE" },
        trust: "Kein Abo \u00b7 Kein Spam \u00b7 Sofort starten"
    };

    // === RENDER ===
    var sectionHTML =
        '<section class="fl-final">' +
            '<div class="fl-final-inner">' +
                '<h2 class="fl-final-headline fl-fade">' + data.headline + '</h2>' +
                '<div class="fl-final-subheadline fl-fade">' + data.subheadline + '</div>' +
                '<div class="fl-fade">' +
                    '<a href="' + data.cta.url + '" class="fl-cta-primary">' + data.cta.text + '</a>' +
                '</div>' +
                '<div class="fl-trust fl-fade">' + data.trust + '</div>' +
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

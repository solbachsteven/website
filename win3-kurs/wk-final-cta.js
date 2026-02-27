// Win³ Kurs Landingpage - Final CTA Section (Standalone)
// Letzter Push mit emotionaler Headline und CTA
// Loaded via: <script src="https://solbachsteven.github.io/website/win3-kurs/wk-final-cta.js"></script>
(function() {
    if (window.__WK_FINALCTA_LOADED) return;
    window.__WK_FINALCTA_LOADED = true;

    // === SHARED RESOURCES (idempotent) ===
    if (!window.__WK_SHARED) {
        window.__WK_SHARED = true;
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap';
        document.head.appendChild(fontLink);
        var baseStyle = document.createElement('style');
        baseStyle.setAttribute('data-section', 'wk-base');
        baseStyle.textContent = `.wk-page{width:100vw;margin-left:calc(-50vw + 50%);font-family:'Poppins',sans-serif;color:#FFFFFF;background:#1A1A1A;overflow-x:hidden;position:relative;z-index:5}.wk-page *,.wk-page *::before,.wk-page *::after{box-sizing:border-box;margin:0;padding:0}.wk-fade{opacity:0;transform:translateY(30px);transition:opacity .6s ease,transform .6s ease}.wk-fade.visible{opacity:1;transform:translateY(0)}.wk-cta-primary{display:inline-flex;align-items:center;justify-content:center;font-family:'Poppins',sans-serif;font-size:17px;font-weight:500;color:#FFF;background:#D96935;border:none;border-radius:20px;padding:18px 48px;text-decoration:none;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease;margin-bottom:16px}.wk-cta-primary:hover{transform:translateY(-2px);box-shadow:0 12px 35px rgba(217,105,53,.4)}.wk-trust{font-size:13px;font-weight:300;color:rgba(244,240,236,.5);letter-spacing:.3px}.wk-label{font-size:13px;font-weight:500;letter-spacing:2.5px;text-transform:uppercase;color:#BC8034;margin-bottom:20px}.wk-section-headline{font-size:42px;font-weight:600;line-height:1.2;color:#FFF;margin-bottom:16px}.wk-section-subheadline{font-family:'Caveat',cursive;font-size:24px;color:rgba(244,240,236,.6);margin-bottom:48px}@media(max-width:768px){.wk-cta-primary{font-size:15px;padding:16px 36px;width:100%;max-width:340px}.wk-section-headline{font-size:28px}.wk-section-subheadline{font-size:20px;margin-bottom:36px}}`;
        document.head.appendChild(baseStyle);
    }

    // === FINAL CTA CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wk-final-cta');
    style.textContent = `
/* ======== FINAL CTA SECTION ======== */
.wk-final-cta {
    padding: 100px 40px;
    text-align: center;
    border-radius: 40px 40px 0 0;
    position: relative;
    background:
        radial-gradient(ellipse 80% 60% at 20% 10%, rgba(188, 128, 52, 0.2) 0%, transparent 60%),
        radial-gradient(ellipse 60% 50% at 85% 80%, rgba(188, 128, 52, 0.12) 0%, transparent 55%),
        linear-gradient(180deg, #B8512A 0%, #C45A28 30%, #D96935 70%, #D96935 100%);
    overflow: hidden;
}

/* Gold line at top */
.wk-final-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent 10%, #BC8034 30%, #D4A04A 50%, #BC8034 70%, transparent 90%);
}

.wk-final-cta-inner {
    max-width: 640px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

/* Headline */
.wk-final-cta .wk-section-headline {
    color: #FFFFFF;
    font-size: 42px;
}

/* Subline */
.wk-final-cta-subline {
    font-family: 'Caveat', cursive;
    font-size: 26px;
    color: #F4F0EC;
    margin-bottom: 44px;
    line-height: 1.4;
}

/* White CTA Button */
.wk-final-cta .wk-cta-primary {
    background: #FFFFFF;
    color: #D96935;
    font-weight: 600;
    padding: 20px 56px;
    font-size: 18px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}
.wk-final-cta .wk-cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
}

/* Trust */
.wk-final-cta .wk-trust {
    color: rgba(255, 255, 255, 0.6);
}

/* Coming Soon */
.wk-final-cta .wk-cta-soon {
    opacity: 0.4;
    cursor: default;
    pointer-events: none;
}

/* ======== RESPONSIVE ======== */
@media (max-width: 1024px) {
    .wk-final-cta { padding: 80px 30px; }
    .wk-final-cta .wk-section-headline { font-size: 36px; }
}
@media (max-width: 768px) {
    .wk-final-cta { padding: 60px 16px 50px; border-radius: 24px 24px 0 0; }
    .wk-final-cta .wk-section-headline { font-size: 28px; }
    .wk-final-cta-subline { font-size: 22px; margin-bottom: 36px; }
    .wk-final-cta .wk-cta-primary { font-size: 16px; padding: 18px 40px; width: 100%; max-width: 340px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        headline: "Bereit f\u00fcr den n\u00e4chsten Schritt?",
        subline: "Du musst nicht alles wissen. Du musst nur anfangen, ehrlich hinzuschauen.",
        cta: "Bald verf\u00fcgbar",
        ctaUrl: "#",
        trust: "Der Kurs wird bald er\u00f6ffnet"
    };

    // === RENDER ===
    var sectionHTML =
        '<section class="wk-final-cta">' +
            '<div class="wk-final-cta-inner">' +
                '<h2 class="wk-section-headline wk-fade">' + data.headline + '</h2>' +
                '<div class="wk-final-cta-subline wk-fade">' + data.subline + '</div>' +
                '<div class="wk-fade">' +
                    '<span class="wk-cta-primary wk-cta-soon">' + data.cta + '</span>' +
                    '<div class="wk-trust">' + data.trust + '</div>' +
                '</div>' +
            '</div>' +
        '</section>';

    // === DOM INSERTION ===
    var pageWrapper = document.querySelector('.wk-page');
    if (!pageWrapper) {
        pageWrapper = document.createElement('div');
        pageWrapper.className = 'wk-page';
        var target = document.currentScript || document.scripts[document.scripts.length - 1];
        target.parentNode.insertBefore(pageWrapper, target.nextSibling);
    }
    var temp = document.createElement('div');
    temp.innerHTML = sectionHTML;
    while (temp.firstChild) { pageWrapper.appendChild(temp.firstChild); }

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
                            setTimeout(function() { entry.target.classList.add('visible'); }, Math.max(0, idx) * 120);
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });
                fadeEls.forEach(function(el) { observer.observe(el); });
            } else { fadeEls.forEach(function(el) { el.classList.add('visible'); }); }
        };
    }
    setTimeout(function() { window.__wkInitReveal(document.querySelector('.wk-page')); }, 100);
})();

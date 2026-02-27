// Win\u00b3 Mentoring Landingpage - Final CTA Section (Standalone)
// Letzter Push mit Badge, emotionaler Headline und CTA
// Loaded via: <script src="https://solbachsteven.github.io/website/mentoring/wm-final-cta.js"></script>
(function() {
    if (window.__WM_FINALCTA_LOADED) return;
    window.__WM_FINALCTA_LOADED = true;

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

    // === FINAL CTA CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wm-final-cta');
    style.textContent = `
/* ======== FINAL CTA SECTION ======== */
.wm-final-cta {
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
.wm-final-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent 10%, #BC8034 30%, #D4A04A 50%, #BC8034 70%, transparent 90%);
}

.wm-final-cta-inner {
    max-width: 640px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

/* Badge */
.wm-final-cta-badge {
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #FFFFFF;
    background: #BC8034;
    padding: 8px 20px;
    border-radius: 30px;
    margin-bottom: 28px;
}

/* Headline */
.wm-final-cta .wm-section-headline {
    color: #FFFFFF;
    font-size: 42px;
}

/* Subline */
.wm-final-cta-subline {
    font-family: 'Caveat', cursive;
    font-size: 26px;
    color: #F4F0EC;
    margin-bottom: 44px;
    line-height: 1.4;
}

/* White CTA Button */
.wm-final-cta .wm-cta-primary {
    background: #FFFFFF;
    color: #D96935;
    font-weight: 600;
    padding: 20px 56px;
    font-size: 18px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}
.wm-final-cta .wm-cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
}

/* Trust */
.wm-final-cta .wm-trust {
    color: rgba(255, 255, 255, 0.6);
}

/* ======== RESPONSIVE ======== */
@media (max-width: 1024px) {
    .wm-final-cta { padding: 80px 30px; }
    .wm-final-cta .wm-section-headline { font-size: 36px; }
}
@media (max-width: 768px) {
    .wm-final-cta { padding: 60px 16px 50px; border-radius: 24px 24px 0 0; }
    .wm-final-cta .wm-section-headline { font-size: 28px; }
    .wm-final-cta-subline { font-size: 22px; margin-bottom: 36px; }
    .wm-final-cta .wm-cta-primary { font-size: 16px; padding: 18px 40px; width: 100%; max-width: 340px; }
    .wm-final-cta-badge { font-size: 11px; padding: 6px 16px; margin-bottom: 22px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        badge: "NUR 8 PL\u00c4TZE",
        headline: "Bereit, den n\u00e4chsten Schritt zu gehen?",
        subline: "Nicht irgendwann. Nicht alleine. Sondern jetzt - mit jemandem, der mit dir geht.",
        cta: "Jetzt bewerben",
        ctaUrl: "https://solbachsteven.systeme.io/bewerbung",
        trust: "Kostenfreies Kennenlerngespr\u00e4ch \u00b7 Kein Risiko \u00b7 Ehrliche Beratung"
    };

    // === RENDER ===
    var sectionHTML =
        '<section class="wm-final-cta">' +
            '<div class="wm-final-cta-inner">' +
                '<div class="wm-fade"><div class="wm-final-cta-badge">' + data.badge + '</div></div>' +
                '<h2 class="wm-section-headline wm-fade">' + data.headline + '</h2>' +
                '<div class="wm-final-cta-subline wm-fade">' + data.subline + '</div>' +
                '<div class="wm-fade">' +
                    '<a href="' + data.ctaUrl + '" class="wm-cta-primary">' + data.cta + '</a>' +
                    '<div class="wm-trust">' + data.trust + '</div>' +
                '</div>' +
            '</div>' +
        '</section>';

    // === DOM INSERTION ===
    var pageWrapper = document.querySelector('.wm-page');
    if (!pageWrapper) {
        pageWrapper = document.createElement('div');
        pageWrapper.className = 'wm-page';
        var target = document.currentScript || document.scripts[document.scripts.length - 1];
        target.parentNode.insertBefore(pageWrapper, target.nextSibling);
    }
    var temp = document.createElement('div');
    temp.innerHTML = sectionHTML;
    while (temp.firstChild) { pageWrapper.appendChild(temp.firstChild); }

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
                            setTimeout(function() { entry.target.classList.add('visible'); }, Math.max(0, idx) * 120);
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });
                fadeEls.forEach(function(el) { observer.observe(el); });
            } else { fadeEls.forEach(function(el) { el.classList.add('visible'); }); }
        };
    }
    setTimeout(function() { window.__wmInitReveal(document.querySelector('.wm-page')); }, 100);
})();

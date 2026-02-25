// Win³ Kurs Landingpage - Pricing Section (Standalone)
// Einzelne Kurs-Card (297€) mit Feature-Liste und CTA
// Loaded via: <script src="https://solbachsteven.github.io/website/win3-kurs/wk-pricing.js"></script>
(function() {
    if (window.__WK_PRICING_LOADED) return;
    window.__WK_PRICING_LOADED = true;

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

    // === PRICING CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wk-pricing');
    style.textContent = `
/* ======== PRICING SECTION ======== */
.wk-pricing {
    padding: 100px 40px;
    background: linear-gradient(180deg, #1A1A1A 0%, #1E1C1B 50%, #1A1A1A 100%);
}
.wk-pricing-inner {
    max-width: 560px;
    margin: 0 auto;
    text-align: center;
}

/* Pricing Card */
.wk-pricing-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(188, 128, 52, 0.2);
    border-radius: 28px;
    padding: 48px 40px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.wk-pricing-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 60px rgba(188, 128, 52, 0.12);
}

/* Gold Top Accent */
.wk-pricing-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #BC8034, #D4A04A, #BC8034);
}

/* Badge */
.wk-pricing-badge {
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #D4A04A;
    background: rgba(212, 160, 74, 0.12);
    padding: 6px 16px;
    border-radius: 20px;
    margin-bottom: 24px;
}

/* Title */
.wk-pricing-title {
    font-size: 24px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 24px;
    line-height: 1.3;
}

/* Price */
.wk-pricing-price {
    font-size: 56px;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 1;
    margin-bottom: 8px;
}
.wk-pricing-price span {
    font-size: 28px;
    font-weight: 400;
    color: rgba(244, 240, 236, 0.6);
}

/* Price Note */
.wk-pricing-note {
    font-size: 14px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.45);
    margin-bottom: 32px;
}

/* Divider */
.wk-pricing-divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.08);
    margin: 0 -40px 32px;
}

/* Feature List */
.wk-pricing-features {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 36px;
    text-align: left;
}
.wk-pricing-feature {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 15px;
    font-weight: 400;
    color: rgba(244, 240, 236, 0.8);
    line-height: 1.5;
}
.wk-pricing-feature-icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-top: 2px;
}
.wk-pricing-feature-icon svg {
    width: 20px;
    height: 20px;
}

/* CTA */
.wk-pricing-cta {
    margin-top: 8px;
}

/* ======== RESPONSIVE ======== */
@media (max-width: 768px) {
    .wk-pricing { padding: 60px 16px; }
    .wk-pricing-card { padding: 36px 24px; }
    .wk-pricing-price { font-size: 44px; }
    .wk-pricing-price span { font-size: 22px; }
    .wk-pricing-divider { margin: 0 -24px 28px; }
}
`;
    document.head.appendChild(style);

    // === SVG ===
    var checkSVG = '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="rgba(212,160,74,0.12)"/><path d="M6 10l3 3 5-6" stroke="#D4A04A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    // === DATA ===
    var data = {
        badge: "EINMALZAHLUNG",
        title: "Der vollst\u00e4ndige Win\u00b3 Kurs",
        price: "297",
        currency: "\u20ac",
        note: "Einmalig. Kein Abo. Kein Kleingedrucktes.",
        features: [
            "4 Module mit Schritt-f\u00fcr-Schritt Anleitungen",
            "KI-Assistent als pers\u00f6nlicher Sparringspartner",
            "Praktische \u00dcbungen in jeder Lektion",
            "Eigenes Tempo - flexibler, dauerhafter Zugang",
            "3 Monate Community-Zugang inklusive",
            "Regelm\u00e4\u00dfige Updates und neue Inhalte"
        ],
        cta: "Jetzt starten - 297 \u20ac",
        ctaUrl: "https://solbachsteven.systeme.io/academy",
        trust: "Sofort Zugang \u00b7 Eigenes Tempo \u00b7 Kein Risiko"
    };

    // === RENDER ===
    var featuresHTML = '';
    for (var i = 0; i < data.features.length; i++) {
        featuresHTML +=
            '<li class="wk-pricing-feature">' +
                '<span class="wk-pricing-feature-icon">' + checkSVG + '</span>' +
                '<span>' + data.features[i] + '</span>' +
            '</li>';
    }

    var sectionHTML =
        '<section class="wk-pricing">' +
            '<div class="wk-pricing-inner">' +
                '<div class="wk-pricing-card wk-fade">' +
                    '<div class="wk-pricing-badge">' + data.badge + '</div>' +
                    '<div class="wk-pricing-title">' + data.title + '</div>' +
                    '<div class="wk-pricing-price">' + data.price + ' <span>' + data.currency + '</span></div>' +
                    '<div class="wk-pricing-note">' + data.note + '</div>' +
                    '<div class="wk-pricing-divider"></div>' +
                    '<ul class="wk-pricing-features">' + featuresHTML + '</ul>' +
                    '<div class="wk-pricing-cta">' +
                        '<a href="' + data.ctaUrl + '" class="wk-cta-primary" target="_blank">' + data.cta + '</a>' +
                        '<div class="wk-trust">' + data.trust + '</div>' +
                    '</div>' +
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

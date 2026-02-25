// Win³ Kurs Landingpage - Für Wen Section (Standalone)
// Zwei Spalten: "Das bist du" / "Das bist du nicht"
// Loaded via: <script src="https://solbachsteven.github.io/website/win3-kurs/wk-for-whom.js"></script>
(function() {
    if (window.__WK_FORWHOM_LOADED) return;
    window.__WK_FORWHOM_LOADED = true;

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

    // === FOR-WHOM CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wk-for-whom');
    style.textContent = `
/* ======== FOR-WHOM SECTION ======== */
.wk-for-whom {
    padding: 100px 40px;
    background: #1A1A1A;
}
.wk-for-whom-inner {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}

/* Two-Column Grid */
.wk-for-whom-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-top: 16px;
    text-align: left;
}

/* Column Card */
.wk-for-whom-col {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 24px;
    padding: 40px 32px;
    position: relative;
    overflow: hidden;
}

/* Positive Column */
.wk-for-whom-col.positive {
    border-color: rgba(212, 160, 74, 0.15);
}
.wk-for-whom-col.positive::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #D4A04A, #BC8034);
}

/* Negative Column - kein opacity, stattdessen subtiler Kontrast */
.wk-for-whom-col.negative {
    background: rgba(255, 255, 255, 0.02);
    border-color: rgba(255, 255, 255, 0.04);
}
.wk-for-whom-col.negative::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: rgba(255, 255, 255, 0.08);
}

/* Column Title */
.wk-for-whom-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.wk-for-whom-col.positive .wk-for-whom-title { color: #D4A04A; }
.wk-for-whom-col.negative .wk-for-whom-title { color: rgba(244, 240, 236, 0.7); }

/* Title Icon */
.wk-for-whom-title-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}
.wk-for-whom-col.positive .wk-for-whom-title-icon { background: rgba(212, 160, 74, 0.15); }
.wk-for-whom-col.negative .wk-for-whom-title-icon { background: rgba(255, 255, 255, 0.05); }

/* List Items */
.wk-for-whom-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.wk-for-whom-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.6;
}
.wk-for-whom-col.positive .wk-for-whom-item { color: rgba(244, 240, 236, 0.8); }
.wk-for-whom-col.negative .wk-for-whom-item { color: rgba(244, 240, 236, 0.65); }

/* Check / X Icon */
.wk-for-whom-icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-top: 2px;
}
.wk-for-whom-icon svg {
    width: 20px;
    height: 20px;
}

/* ======== RESPONSIVE ======== */
@media (max-width: 1024px) {
    .wk-for-whom { padding: 80px 30px; }
}
@media (max-width: 768px) {
    .wk-for-whom { padding: 60px 16px; }
    .wk-for-whom-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    .wk-for-whom-col { padding: 32px 24px; }
}
`;
    document.head.appendChild(style);

    // === SVG ICONS ===
    var checkSVG = '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="rgba(212,160,74,0.12)"/><path d="M6 10l3 3 5-6" stroke="#D4A04A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var xSVG = '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="rgba(255,255,255,0.06)"/><path d="M7 7l6 6M13 7l-6 6" stroke="rgba(244,240,236,0.45)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var heartSVG = '<svg viewBox="0 0 16 16" fill="none" stroke="#D4A04A" stroke-width="1.5"><path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 8 4a3.5 3.5 0 0 1 5.5 3c0 3.5-5.5 7-5.5 7z" fill="rgba(212,160,74,0.2)"/></svg>';
    var minusSVG = '<svg viewBox="0 0 16 16" fill="none" stroke="rgba(244,240,236,0.3)" stroke-width="1.5"><line x1="4" y1="8" x2="12" y2="8"/></svg>';

    // === DATA ===
    var data = {
        headline: "Ist der Win\u00b3 Kurs f\u00fcr dich?",
        subheadline: "Ehrlich gesagt: Er ist nicht f\u00fcr jeden.",
        positive: {
            title: "Das bist du",
            items: [
                "Du sp\u00fcrst, dass da mehr in dir steckt - und willst endlich rausfinden, was.",
                "Du bist bereit, ehrlich hinzuschauen - auch wenn es unbequem wird.",
                "Du willst nicht nur funktionieren, sondern ein Leben f\u00fchren, das sich richtig anf\u00fchlt.",
                "Du suchst keinen Quick-Fix, sondern echte, tiefe Ver\u00e4nderung.",
                "Du bist offen f\u00fcr neue Werkzeuge - auch KI als Sparringspartner.",
                "Du willst selbst aktiv werden, nicht nur konsumieren."
            ]
        },
        negative: {
            title: "Das bist du nicht",
            items: [
                "Du suchst eine magische L\u00f6sung, die alles \u00fcber Nacht ver\u00e4ndert.",
                "Du willst Tipps und Tricks, aber nicht wirklich an dir arbeiten.",
                "Du erwartest, dass jemand anderes die Arbeit f\u00fcr dich macht.",
                "Du hast kein Interesse an Selbstreflexion oder innerer Arbeit.",
                "Du willst motiviert werden, statt dich selbst zu verstehen."
            ]
        }
    };

    // === RENDER ===
    var positiveHTML = '';
    for (var i = 0; i < data.positive.items.length; i++) {
        positiveHTML +=
            '<li class="wk-for-whom-item">' +
                '<span class="wk-for-whom-icon">' + checkSVG + '</span>' +
                '<span>' + data.positive.items[i] + '</span>' +
            '</li>';
    }

    var negativeHTML = '';
    for (var j = 0; j < data.negative.items.length; j++) {
        negativeHTML +=
            '<li class="wk-for-whom-item">' +
                '<span class="wk-for-whom-icon">' + xSVG + '</span>' +
                '<span>' + data.negative.items[j] + '</span>' +
            '</li>';
    }

    var sectionHTML =
        '<section class="wk-for-whom">' +
            '<div class="wk-for-whom-inner">' +
                '<h2 class="wk-section-headline wk-fade">' + data.headline + '</h2>' +
                '<div class="wk-section-subheadline wk-fade">' + data.subheadline + '</div>' +
                '<div class="wk-for-whom-grid">' +
                    '<div class="wk-for-whom-col positive wk-fade">' +
                        '<div class="wk-for-whom-title">' +
                            '<span class="wk-for-whom-title-icon">' + heartSVG + '</span>' +
                            data.positive.title +
                        '</div>' +
                        '<ul class="wk-for-whom-list">' + positiveHTML + '</ul>' +
                    '</div>' +
                    '<div class="wk-for-whom-col negative wk-fade">' +
                        '<div class="wk-for-whom-title">' +
                            '<span class="wk-for-whom-title-icon">' + minusSVG + '</span>' +
                            data.negative.title +
                        '</div>' +
                        '<ul class="wk-for-whom-list">' + negativeHTML + '</ul>' +
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

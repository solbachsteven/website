// Win\u00b3 Mentoring Landingpage - F\u00fcr Wen Section (Standalone)
// Zwei Spalten: "Das Mentoring ist f\u00fcr dich" / "Das Mentoring ist nichts f\u00fcr dich"
// Loaded via: <script src="https://solbachsteven.github.io/website/mentoring/wm-for-whom.js"></script>
(function() {
    if (window.__WM_FORWHOM_LOADED) return;
    window.__WM_FORWHOM_LOADED = true;

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

    // === FOR-WHOM CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wm-for-whom');
    style.textContent = `
/* ======== FOR-WHOM SECTION ======== */
.wm-for-whom {
    padding: 100px 40px;
    background: #1A1A1A;
}
.wm-for-whom-inner {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}

/* Two-Column Grid */
.wm-for-whom-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-top: 16px;
    text-align: left;
}

/* Column Card */
.wm-for-whom-col {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 24px;
    padding: 40px 32px;
    position: relative;
    overflow: hidden;
}

/* Positive Column */
.wm-for-whom-col.positive {
    border-color: rgba(212, 160, 74, 0.15);
}
.wm-for-whom-col.positive::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #D4A04A, #BC8034);
}

/* Negative Column - kein opacity, subtiler Kontrast */
.wm-for-whom-col.negative {
    background: rgba(255, 255, 255, 0.02);
    border-color: rgba(255, 255, 255, 0.04);
}
.wm-for-whom-col.negative::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: rgba(255, 255, 255, 0.08);
}

/* Column Title */
.wm-for-whom-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.wm-for-whom-col.positive .wm-for-whom-title { color: #D4A04A; }
.wm-for-whom-col.negative .wm-for-whom-title { color: rgba(244, 240, 236, 0.7); }

/* Title Icon */
.wm-for-whom-title-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}
.wm-for-whom-col.positive .wm-for-whom-title-icon { background: rgba(212, 160, 74, 0.15); }
.wm-for-whom-col.negative .wm-for-whom-title-icon { background: rgba(255, 255, 255, 0.05); }

/* List Items */
.wm-for-whom-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.wm-for-whom-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.6;
}
.wm-for-whom-col.positive .wm-for-whom-item { color: rgba(244, 240, 236, 0.8); }
.wm-for-whom-col.negative .wm-for-whom-item { color: rgba(244, 240, 236, 0.65); }

/* Check / X Icon */
.wm-for-whom-icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-top: 2px;
}
.wm-for-whom-icon svg {
    width: 20px;
    height: 20px;
}

/* ======== RESPONSIVE ======== */
@media (max-width: 1024px) {
    .wm-for-whom { padding: 80px 30px; }
}
@media (max-width: 768px) {
    .wm-for-whom { padding: 60px 16px; }
    .wm-for-whom-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    .wm-for-whom-col { padding: 32px 24px; }
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
        headline: "Ist das Mentoring f\u00fcr dich?",
        subheadline: "Ehrlich gesagt: Es ist nicht f\u00fcr jeden. Und genau deshalb gibt es ein Bewerbungsgespr\u00e4ch.",
        positive: {
            title: "Das Mentoring ist f\u00fcr dich, wenn",
            items: [
                "Du an einem Punkt stehst, an dem Selbstlernkurse nicht mehr reichen.",
                "Du bereit bist, dich wirklich jemandem zu zeigen - auch die unbequemen Seiten.",
                "Du willst, dass jemand dranbleibt, auch wenn du selbst aufgeben w\u00fcrdest.",
                "Du suchst Tiefe, nicht Tipps. Transformation, nicht Motivation.",
                "Du bist bereit, Zeit und Geld in dich zu investieren - weil du wei\u00dft, was auf dem Spiel steht.",
                "Du willst Klarheit \u00fcber deinen Weg - und jemanden, der dich accountable h\u00e4lt."
            ]
        },
        negative: {
            title: "Das Mentoring ist nichts f\u00fcr dich, wenn",
            items: [
                "Du einen schnellen Fix suchst, der alles in 12 Wochen l\u00f6st.",
                "Du nicht bereit bist, zwischen den Sessions selbst aktiv zu werden.",
                "Du erwartest, dass ich dir sage, was du tun sollst.",
                "Du die Investition als Risiko siehst, nicht als Entscheidung f\u00fcr dich.",
                "Du gerade in einer akuten psychischen Krise steckst (hier ist Therapie der richtige Weg)."
            ]
        }
    };

    // === RENDER ===
    var positiveHTML = '';
    for (var i = 0; i < data.positive.items.length; i++) {
        positiveHTML +=
            '<li class="wm-for-whom-item">' +
                '<span class="wm-for-whom-icon">' + checkSVG + '</span>' +
                '<span>' + data.positive.items[i] + '</span>' +
            '</li>';
    }

    var negativeHTML = '';
    for (var j = 0; j < data.negative.items.length; j++) {
        negativeHTML +=
            '<li class="wm-for-whom-item">' +
                '<span class="wm-for-whom-icon">' + xSVG + '</span>' +
                '<span>' + data.negative.items[j] + '</span>' +
            '</li>';
    }

    var sectionHTML =
        '<section class="wm-for-whom">' +
            '<div class="wm-for-whom-inner">' +
                '<h2 class="wm-section-headline wm-fade">' + data.headline + '</h2>' +
                '<div class="wm-section-subheadline wm-fade">' + data.subheadline + '</div>' +
                '<div class="wm-for-whom-grid">' +
                    '<div class="wm-for-whom-col positive wm-fade">' +
                        '<div class="wm-for-whom-title">' +
                            '<span class="wm-for-whom-title-icon">' + heartSVG + '</span>' +
                            data.positive.title +
                        '</div>' +
                        '<ul class="wm-for-whom-list">' + positiveHTML + '</ul>' +
                    '</div>' +
                    '<div class="wm-for-whom-col negative wm-fade">' +
                        '<div class="wm-for-whom-title">' +
                            '<span class="wm-for-whom-title-icon">' + minusSVG + '</span>' +
                            data.negative.title +
                        '</div>' +
                        '<ul class="wm-for-whom-list">' + negativeHTML + '</ul>' +
                    '</div>' +
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

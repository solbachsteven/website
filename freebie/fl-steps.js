// Freebie Landingpage - 3 Schritte Section (Standalone)
// Loaded via: <script src="https://solbachsteven.github.io/website/freebie/fl-steps.js"></script>
(function() {
    if (window.__FL_STEPS_LOADED) return;
    window.__FL_STEPS_LOADED = true;

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

    // === STEPS CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'fl-steps');
    style.textContent = `
/* ======== 3 SCHRITTE SECTION ======== */
.fl-steps {
    padding: 100px 40px;
    background: #1A1A1A;
}
.fl-steps-inner {
    max-width: 1000px;
    margin: 0 auto;
}
.fl-steps-label {
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #BC8034;
    text-align: center;
    margin-bottom: 16px;
}
.fl-steps-headline {
    font-size: 42px;
    font-weight: 600;
    line-height: 1.2;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 12px;
}
.fl-steps-subheadline {
    font-family: 'Caveat', cursive;
    font-size: 24px;
    color: rgba(244, 240, 236, 0.6);
    text-align: center;
    margin-bottom: 64px;
}
.fl-steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
}
.fl-step-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(188, 128, 52, 0.1);
    border-radius: 20px;
    padding: 40px 30px 36px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
}
.fl-step-card:hover {
    transform: translateY(-4px);
}
.fl-step-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
}
.fl-step-card[data-step="1"]::before { background: #D4A04A; }
.fl-step-card[data-step="2"]::before { background: #7FB3B3; }
.fl-step-card[data-step="3"]::before { background: #B89FD4; }
.fl-step-number {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1.5px;
    margin-bottom: 16px;
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
}
.fl-step-card[data-step="1"] .fl-step-number { color: #D4A04A; background: rgba(212, 160, 74, 0.12); }
.fl-step-card[data-step="2"] .fl-step-number { color: #7FB3B3; background: rgba(127, 179, 179, 0.12); }
.fl-step-card[data-step="3"] .fl-step-number { color: #B89FD4; background: rgba(184, 159, 212, 0.12); }
.fl-step-title {
    font-size: 22px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 14px;
    line-height: 1.3;
}
.fl-step-description {
    font-size: 15px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.7);
    line-height: 1.7;
    margin-bottom: 24px;
}
.fl-step-result {
    font-family: 'Caveat', cursive;
    font-size: 20px;
    line-height: 1.4;
    padding: 14px 18px;
    border-radius: 12px;
    background: rgba(244, 240, 236, 0.08);
}
.fl-step-card[data-step="1"] .fl-step-result { color: #D4A04A; }
.fl-step-card[data-step="2"] .fl-step-result { color: #7FB3B3; }
.fl-step-card[data-step="3"] .fl-step-result { color: #B89FD4; }
.fl-blank-line {
    display: inline-block;
    width: 100px;
    border-bottom: 2px solid currentColor;
    vertical-align: baseline;
    margin: 0 2px;
    opacity: 0.5;
}

/* ======== STEPS RESPONSIVE - TABLET ======== */
@media (max-width: 1024px) {
    .fl-steps { padding: 80px 30px; }
    .fl-steps-headline { font-size: 36px; }
}

/* ======== STEPS RESPONSIVE - MOBILE ======== */
@media (max-width: 768px) {
    .fl-steps { padding: 60px 16px; }
    .fl-steps-headline { font-size: 28px; }
    .fl-steps-subheadline { font-size: 20px; margin-bottom: 40px; }
    .fl-steps-grid { grid-template-columns: 1fr; gap: 20px; }
    .fl-step-card { padding: 32px 24px 28px; }
    .fl-step-title { font-size: 20px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        label: "DEIN WEG",
        headline: "3 Schritte zu deiner Lebensaufgabe",
        subheadline: "Drei Fragen. Drei Antworten. Dein Kompass.",
        items: [
            {
                number: "01",
                title: "Dein tieferes Warum",
                description: "Was treibt dich von innen heraus an? Worauf basieren all deine Entscheidungen in diesem Leben?",
                result: "Was mich antreibt ist ___.",
                color: "#D4A04A"
            },
            {
                number: "02",
                title: "Deine Vision",
                description: "In welcher Welt willst du leben? Wie soll deine Welt sein, damit dein Warum aufbl\u00fchen kann?",
                result: "Ich m\u00f6chte in einer Welt leben, in der ___.",
                color: "#7FB3B3"
            },
            {
                number: "03",
                title: "Dein Mission Statement",
                description: "Wie baust du die Br\u00fccke zwischen deinem Warum und der Welt, die du erschaffen willst?",
                result: "Mein Beitrag zu dieser Welt ist ___.",
                color: "#B89FD4"
            }
        ]
    };

    // === RENDER ===
    var cardsHTML = '';
    for (var k = 0; k < data.items.length; k++) {
        var step = data.items[k];
        var resultText = step.result.replace(/___/g, '<span class="fl-blank-line"></span>');
        cardsHTML +=
            '<div class="fl-step-card fl-fade" data-step="' + (k + 1) + '">' +
                '<div class="fl-step-number">SCHRITT ' + step.number + '</div>' +
                '<div class="fl-step-title">' + step.title + '</div>' +
                '<div class="fl-step-description">' + step.description + '</div>' +
                '<div class="fl-step-result">' + resultText + '</div>' +
            '</div>';
    }

    var sectionHTML =
        '<section class="fl-steps">' +
            '<div class="fl-steps-inner">' +
                '<div class="fl-steps-label fl-fade">' + data.label + '</div>' +
                '<h2 class="fl-steps-headline fl-fade">' + data.headline + '</h2>' +
                '<div class="fl-steps-subheadline fl-fade">' + data.subheadline + '</div>' +
                '<div class="fl-steps-grid">' + cardsHTML + '</div>' +
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

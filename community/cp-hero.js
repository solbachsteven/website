// Community Pinnwand - Hero Section (Standalone)
// Loaded via: <script src="https://stevensolbach.de/community/cp-hero.js"></script>
(function() {
    if (window.__CP_HERO_LOADED) return;
    window.__CP_HERO_LOADED = true;

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
/* ======== CP BASE RESET ======== */
.cp-page {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;
    background: transparent;
    overflow-x: hidden;
    position: relative;
    z-index: 5;
}
.cp-page *, .cp-page *::before, .cp-page *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* ======== SCROLL REVEAL ======== */
.cp-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.cp-fade.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ======== SHARED BUTTON ======== */
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

/* ======== SHARED MOBILE ======== */
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

    // === HERO CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'cp-hero');
    style.textContent = `
/* ======== COMMUNITY HERO SECTION ======== */
.cp-hero {
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 120px 40px 80px;
    background: transparent;
    position: relative;
}
.cp-hero-inner {
    max-width: 720px;
    margin: 0 auto;
}
.cp-hero-label {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #BC8034;
    margin-bottom: 28px;
}
.cp-hero-headline {
    font-size: 56px;
    font-weight: 700;
    line-height: 1.1;
    color: #FFFFFF;
    margin-bottom: 24px;
}
.cp-hero-subtext {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(244, 240, 236, 0.7);
    margin-bottom: 40px;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
}
.cp-hero-counter {
    font-family: 'Caveat', cursive;
    font-size: 28px;
    color: #BC8034;
    margin-bottom: 48px;
}
.cp-hero-counter span {
    font-size: 36px;
    font-weight: 700;
}
.cp-hero-scroll {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: rgba(244, 240, 236, 0.4);
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: color 0.3s ease;
}
.cp-hero-scroll:hover {
    color: #BC8034;
}
.cp-hero-scroll-arrow {
    width: 20px;
    height: 20px;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(45deg);
    animation: cp-bounce 2s ease infinite;
}
@keyframes cp-bounce {
    0%, 20%, 50%, 80%, 100% { transform: rotate(45deg) translateY(0); }
    40% { transform: rotate(45deg) translateY(6px); }
    60% { transform: rotate(45deg) translateY(3px); }
}

/* ======== HERO RESPONSIVE - TABLET ======== */
@media (max-width: 1024px) {
    .cp-hero { padding: 100px 30px 60px; }
    .cp-hero-headline { font-size: 44px; }
}

/* ======== HERO RESPONSIVE - MOBILE ======== */
@media (max-width: 768px) {
    .cp-hero { padding: 80px 16px 50px; min-height: 60vh; }
    .cp-hero-headline { font-size: 36px; }
    .cp-hero-subtext { font-size: 16px; }
    .cp-hero-counter { font-size: 24px; }
    .cp-hero-counter span { font-size: 30px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        label: "EINE GEMEINSCHAFT MIT AUFTRAG",
        headline: "Was bewegt dich?",
        subtext: "Jeder Mensch hat drei S\u00e4tze in sich: Sein Warum. Seine Vision. Seinen Beitrag. Diese Menschen haben ihre in Worte gefasst.",
        counterPrefix: "",
        counterSuffix: " Menschen haben sich eingetragen",
        scrollText: "Zur Pinnwand"
    };

    // === RENDER ===
    var sectionHTML =
        '<section class="cp-hero">' +
            '<div class="cp-hero-inner">' +
                '<div class="cp-hero-label cp-fade">' + data.label + '</div>' +
                '<h1 class="cp-hero-headline cp-fade">' + data.headline + '</h1>' +
                '<p class="cp-hero-subtext cp-fade">' + data.subtext + '</p>' +
                '<div class="cp-hero-counter cp-fade" id="cp-hero-counter"></div>' +
                '<div class="cp-hero-scroll cp-fade" id="cp-hero-scroll">' +
                    '<span>' + data.scrollText + '</span>' +
                    '<div class="cp-hero-scroll-arrow"></div>' +
                '</div>' +
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

    // === LIVE COUNTER ===
    var counterEl = document.getElementById('cp-hero-counter');
    if (counterEl) {
        fetch('https://win3-community.solbachsteven.workers.dev/pinwall/entries')
        .then(function(res) { return res.json(); })
        .then(function(resData) {
            var count = (resData.entries || []).length;
            counterEl.innerHTML = '<span>' + count + '</span>' + data.counterSuffix;
        })
        .catch(function() {
            counterEl.style.display = 'none';
        });
    }

    // === SCROLL TO PINWALL ===
    var scrollBtn = document.getElementById('cp-hero-scroll');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function() {
            var pinwall = document.querySelector('.cp-pinwall');
            if (pinwall) pinwall.scrollIntoView({ behavior: 'smooth' });
        });
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

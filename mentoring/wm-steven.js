// Win³ Mentoring Landingpage - Steven als Mentor Section (Standalone)
// 2-Spalten Layout: Steven-Foto links, Text + Trait Cards rechts
// Loaded via: <script src="https://solbachsteven.github.io/website/mentoring/wm-steven.js"></script>
(function() {
    if (window.__WM_STEVEN_LOADED) return;
    window.__WM_STEVEN_LOADED = true;

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

    // === STEVEN CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wm-steven');
    style.textContent = `
/* ======== STEVEN SECTION ======== */
.wm-steven {
    padding: 100px 40px;
    background: #1A1A1A;
}
.wm-steven-inner {
    max-width: 1100px;
    margin: 0 auto;
}
.wm-steven-grid {
    display: grid;
    grid-template-columns: 340px 1fr;
    gap: 60px;
    align-items: start;
}
.wm-steven-image-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}
.wm-steven-image {
    width: 300px;
    height: 400px;
    background: #2D2726;
    border-radius: 20px;
    border: 2px solid rgba(188, 128, 52, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}
.wm-steven-image::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 60%, rgba(45, 39, 38, 0.8) 100%);
}
.wm-steven-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    z-index: 1;
}
.wm-steven-quote {
    font-family: 'Caveat', cursive;
    font-size: 20px;
    color: #BC8034;
    text-align: center;
    line-height: 1.4;
    max-width: 300px;
    font-style: italic;
}
.wm-steven-text-col {
    display: flex;
    flex-direction: column;
}
.wm-steven-label {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #BC8034;
    margin-bottom: 16px;
}
.wm-steven-headline {
    font-size: 38px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 12px;
}
.wm-steven-subtext {
    font-family: 'Caveat', cursive;
    font-size: 24px;
    color: rgba(244, 240, 236, 0.5);
    margin-bottom: 24px;
}
.wm-steven-description {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.8;
    color: rgba(244, 240, 236, 0.6);
    margin-bottom: 40px;
    max-width: 540px;
}
.wm-steven-traits {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.wm-steven-trait {
    background: rgba(255, 255, 255, 0.03);
    border-left: 3px solid #BC8034;
    border-radius: 0 12px 12px 0;
    padding: 20px 24px;
    transition: transform 0.3s ease, background 0.3s ease;
}
.wm-steven-trait:hover {
    transform: translateX(4px);
    background: rgba(255, 255, 255, 0.05);
}
.wm-steven-trait-title {
    font-size: 16px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 6px;
}
.wm-steven-trait-text {
    font-size: 14px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.45);
    line-height: 1.6;
}

/* ======== STEVEN RESPONSIVE - TABLET ======== */
@media (max-width: 1024px) {
    .wm-steven { padding: 80px 30px; }
    .wm-steven-grid {
        grid-template-columns: 280px 1fr;
        gap: 40px;
    }
    .wm-steven-image { width: 260px; height: 350px; }
    .wm-steven-headline { font-size: 32px; }
}

/* ======== STEVEN RESPONSIVE - MOBILE ======== */
@media (max-width: 768px) {
    .wm-steven { padding: 60px 16px; }
    .wm-steven-grid {
        grid-template-columns: 1fr;
        gap: 36px;
    }
    .wm-steven-image-col {
        order: 0;
    }
    .wm-steven-text-col {
        order: 1;
        align-items: center;
        text-align: center;
    }
    .wm-steven-image { width: 240px; height: 320px; }
    .wm-steven-quote { font-size: 18px; }
    .wm-steven-headline { font-size: 28px; }
    .wm-steven-subtext { font-size: 20px; }
    .wm-steven-description { font-size: 15px; max-width: 100%; }
    .wm-steven-trait {
        text-align: left;
    }
    .wm-steven-trait-title { font-size: 15px; }
    .wm-steven-trait-text { font-size: 13px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        label: "DEIN MENTOR",
        headline: "Steven Solbach",
        subtext: "Nicht oben herab. Auf Augenh\u00f6he.",
        description: "Ich begleite Menschen, die sp\u00fcren, dass da mehr ist - und den Mut haben, hinzuschauen. Kein Coaching nach Schema F. Keine Motivationsphrasen. Sondern ehrliche Gespr\u00e4che, tiefe Fragen und jemand, der mit dir geht - auch wenn es unbequem wird.",
        quote: "Ich bin nicht dein Guru. Ich bin dein Sparringspartner.",
        traits: [
            {
                title: "Ehrliche Spiegelung",
                text: "Ich sage dir, was ich sehe - nicht, was du h\u00f6ren willst."
            },
            {
                title: "Tiefe statt Breite",
                text: "Wir arbeiten nicht 20 Themen oberfl\u00e4chlich durch. Wir gehen dahin, wo es wirklich z\u00e4hlt."
            },
            {
                title: "Spiritualit\u00e4t trifft Pragmatismus",
                text: "Innere Arbeit muss nicht esoterisch sein. Bei mir bekommst du Tiefgang mit klarem Verstand."
            },
            {
                title: "Eigene Erfahrung",
                text: "Ich rede nicht \u00fcber Transformation - ich habe sie selbst durchlebt."
            }
        ]
    };

    // === RENDER ===
    var traitsHTML = '';
    for (var i = 0; i < data.traits.length; i++) {
        var t = data.traits[i];
        traitsHTML +=
            '<div class="wm-steven-trait wm-fade">' +
                '<div class="wm-steven-trait-title">' + t.title + '</div>' +
                '<div class="wm-steven-trait-text">' + t.text + '</div>' +
            '</div>';
    }

    var sectionHTML =
        '<section class="wm-steven">' +
            '<div class="wm-steven-inner">' +
                '<div class="wm-steven-grid">' +
                    '<div class="wm-steven-image-col wm-fade">' +
                        '<div class="wm-steven-image">' +
                            '<img src="https://d1yei2z3i6k35z.cloudfront.net/15985342/6978eb69d9665_Removebackgroundproject-22.png" alt="Steven Solbach">' +
                        '</div>' +
                        '<div class="wm-steven-quote">\u201e' + data.quote + '\u201c</div>' +
                    '</div>' +
                    '<div class="wm-steven-text-col">' +
                        '<div class="wm-steven-label wm-fade">' + data.label + '</div>' +
                        '<h2 class="wm-steven-headline wm-fade">' + data.headline + '</h2>' +
                        '<div class="wm-steven-subtext wm-fade">' + data.subtext + '</div>' +
                        '<div class="wm-steven-description wm-fade">' + data.description + '</div>' +
                        '<div class="wm-steven-traits">' + traitsHTML + '</div>' +
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

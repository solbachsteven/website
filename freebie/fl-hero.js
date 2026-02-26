// Freebie Landingpage - Hero Section (Standalone)
// Loaded via: <script src="https://solbachsteven.github.io/website/freebie/fl-hero.js"></script>
(function() {
    if (window.__FL_HERO_LOADED) return;
    window.__FL_HERO_LOADED = true;

    // === SHARED RESOURCES (idempotent - nur 1x geladen) ===
    if (!window.__FL_SHARED) {
        window.__FL_SHARED = true;

        // Fonts
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap';
        document.head.appendChild(fontLink);

        // Base CSS
        var baseStyle = document.createElement('style');
        baseStyle.setAttribute('data-section', 'fl-base');
        baseStyle.textContent = `
/* ======== FL BASE RESET ======== */
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

/* ======== SCROLL REVEAL ======== */
.fl-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.fl-fade.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ======== SHARED BUTTON ======== */
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

/* ======== SHARED MOBILE ======== */
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

    // === HERO CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'fl-hero');
    style.textContent = `
/* ======== HERO SECTION ======== */
.fl-hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 80px 40px 60px;
    background: #F4F0EC;
    border-radius: 0 0 80px 0;
    position: relative;
    z-index: 6;
    box-shadow: 0 20px 60px rgba(188, 128, 52, 0.25), 0 8px 24px rgba(188, 128, 52, 0.15);
}
.fl-hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

/* ======== LEFT: TEXT + FORM (Platzhalter) ======== */
.fl-hero-text {
    display: flex;
    flex-direction: column;
}
.fl-hero-label {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #BC8034;
    margin-bottom: 20px;
}
.fl-hero-headline {
    font-size: 40px;
    font-weight: 600;
    line-height: 1.25;
    color: #2C2726;
    margin-bottom: 20px;
}
.fl-hero-subtext {
    font-size: 17px;
    font-weight: 300;
    line-height: 1.7;
    color: #2C2726;
    opacity: 0.75;
    margin-bottom: 36px;
    max-width: 480px;
}
.fl-hero-form {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.fl-hero-form input {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 400;
    padding: 14px 18px;
    border: 1.5px solid rgba(44, 39, 38, 0.15);
    border-radius: 12px;
    background: #FFFFFF;
    color: #2C2726;
    width: 100%;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    outline: none;
}
.fl-hero-form input::placeholder {
    color: rgba(44, 39, 38, 0.4);
    font-weight: 300;
}
.fl-hero-form input:focus {
    border-color: #BC8034;
    box-shadow: 0 0 0 3px rgba(188, 128, 52, 0.1);
}
.fl-hero-form-cta {
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
    padding: 16px 40px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    width: 100%;
    margin-top: 4px;
}
.fl-hero-form-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(217, 105, 53, 0.4);
}
.fl-hero-form-trust {
    font-size: 12px;
    font-weight: 300;
    color: rgba(44, 39, 38, 0.45);
    text-align: center;
    letter-spacing: 0.2px;
}

/* ======== RIGHT: PINWAND-VORSCHAU + TICKER ======== */
.fl-hero-proof {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

/* Pinwand-Fenster mit Fade */
.fl-hero-pinwall {
    position: relative;
    width: 100%;
    max-width: 480px;
    max-height: 400px;
    overflow: hidden;
    border-radius: 20px;
}
.fl-hero-pinwall::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, rgba(244, 240, 236, 0), #F4F0EC);
    pointer-events: none;
    z-index: 2;
}

/* Masonry Grid */
.fl-hero-pinwall-grid {
    columns: 2;
    column-gap: 12px;
    padding: 4px;
}

/* Einzelne Karte */
.fl-hero-pinwall-card {
    break-inside: avoid;
    margin-bottom: 12px;
    background: #FFFFFF;
    border-radius: 12px;
    padding: 14px 16px;
    box-shadow: 0 2px 12px rgba(44, 39, 38, 0.06), 0 1px 2px rgba(44, 39, 38, 0.03);
    border-left: 3px solid #BC8034;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.4s ease, transform 0.4s ease;
}
.fl-hero-pinwall-card.visible {
    opacity: 1;
    transform: translateY(0);
}
@media (hover: hover) {
    .fl-hero-pinwall-card:hover {
        box-shadow: 0 4px 20px rgba(44, 39, 38, 0.1), 0 2px 4px rgba(44, 39, 38, 0.05);
    }
}
.fl-hero-pinwall-card-name {
    font-family: 'Caveat', cursive;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 6px;
    line-height: 1.2;
}
.fl-hero-pinwall-card-label {
    font-size: 9px;
    font-weight: 500;
    color: rgba(44, 39, 38, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 3px;
}
.fl-hero-pinwall-card-text {
    font-size: 12.5px;
    font-weight: 300;
    color: #2C2726;
    opacity: 0.6;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Ticker unter Pinwand */
.fl-hero-ticker {
    text-align: center;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.fl-hero-ticker.visible {
    opacity: 1;
    transform: translateY(0);
}
.fl-hero-ticker-count {
    font-size: 13px;
    font-weight: 400;
    color: #BC8034;
    margin-bottom: 6px;
}
.fl-hero-ticker-names {
    font-family: 'Caveat', cursive;
    font-size: 18px;
    font-weight: 400;
    color: rgba(44, 39, 38, 0.45);
    height: 26px;
    overflow: hidden;
    position: relative;
}
.fl-hero-ticker-name {
    position: absolute;
    width: 100%;
    text-align: center;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}
.fl-hero-ticker-name.active {
    opacity: 1;
    transform: translateY(0);
}

/* ======== SYSTEME.IO FORM OVERRIDES ======== */
.fl-page ~ div input[type="text"],
.fl-page ~ div input[type="email"] {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    padding: 14px 18px;
    border: 1.5px solid rgba(44, 39, 38, 0.15);
    border-radius: 12px;
    background: #FFFFFF;
    color: #2C2726;
    width: 100%;
    transition: border-color 0.2s ease;
}
.fl-page ~ div input[type="text"]:focus,
.fl-page ~ div input[type="email"]:focus {
    outline: none;
    border-color: #BC8034;
}
.fl-page ~ div button[type="submit"] {
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-weight: 500;
    color: #FFFFFF;
    background: #D96935;
    border: none;
    border-radius: 20px;
    padding: 16px 40px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    width: 100%;
}
.fl-page ~ div button[type="submit"]:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(217, 105, 53, 0.4);
}

/* ======== HERO RESPONSIVE - TABLET ======== */
@media (max-width: 1024px) {
    .fl-hero { padding: 60px 30px; }
    .fl-hero-inner { gap: 40px; }
    .fl-hero-headline { font-size: 34px; }
    .fl-hero-subtext { font-size: 16px; }
    .fl-hero-pinwall { max-width: 420px; max-height: 360px; }
    .fl-hero-pinwall-card { padding: 12px 14px; }
}

/* ======== HERO RESPONSIVE - MOBILE ======== */
@media (max-width: 768px) {
    .fl-hero {
        min-height: auto;
        padding: 50px 16px 40px;
        border-radius: 0 0 48px 0;
    }
    .fl-hero-inner { grid-template-columns: 1fr; gap: 36px; }
    .fl-hero-text { text-align: center; align-items: center; }
    .fl-hero-label { font-size: 11px; letter-spacing: 2px; }
    .fl-hero-headline { font-size: 28px; }
    .fl-hero-subtext { font-size: 15px; max-width: 100%; }
    .fl-hero-form { max-width: 100%; }
    .fl-hero-pinwall { max-width: 100%; max-height: 300px; border-radius: 16px; }
    .fl-hero-pinwall-grid { column-gap: 10px; }
    .fl-hero-pinwall-card { padding: 12px 14px; margin-bottom: 10px; }
    .fl-hero-pinwall-card-name { font-size: 16px; }
    .fl-hero-pinwall-card-text { font-size: 12px; }
    .fl-hero-ticker-count { font-size: 12px; }
    .fl-hero-ticker-names { font-size: 16px; height: 24px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        label: "KOSTENLOSER KURS",
        headline: "Finde heraus, wozu du auf dieser Erde bist und was dich wirklich erf\u00fcllt.",
        subtext: "Ein Kurs, der dein Leben ver\u00e4ndern wird - wenn du bereit bist, die richtigen Fragen zu stellen.",
        cta: "Jetzt kostenlos starten",
        trust: "Kein Abo \u00b7 Kein Spam \u00b7 Sofort starten"
    };

    // === RENDER ===
    var heroHTML =
        '<section class="fl-hero">' +
            '<div class="fl-hero-inner">' +
                // Linke Seite: Platzhalter (Form wird manuell in Systeme.io erstellt)
                '<div class="fl-hero-text">' +
                    '<div class="fl-hero-label fl-fade">' + data.label + '</div>' +
                    '<h1 class="fl-hero-headline fl-fade">' + data.headline + '</h1>' +
                    '<div class="fl-hero-subtext fl-fade">' + data.subtext + '</div>' +
                    '<div class="fl-hero-form fl-fade">' +
                        '<input type="text" placeholder="Dein Vorname">' +
                        '<input type="email" placeholder="Deine E-Mail-Adresse">' +
                        '<button class="fl-hero-form-cta" type="button">' + data.cta + '</button>' +
                        '<div class="fl-hero-form-trust">' + data.trust + '</div>' +
                    '</div>' +
                '</div>' +
                // Rechte Seite: Pinwand-Ausschnitt + Ticker
                '<div class="fl-hero-proof">' +
                    '<div class="fl-hero-pinwall" id="fl-hero-pinwall">' +
                        '<div class="fl-hero-pinwall-grid" id="fl-hero-pinwall-grid"></div>' +
                    '</div>' +
                    '<div class="fl-hero-ticker" id="fl-hero-ticker"></div>' +
                '</div>' +
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
    temp.innerHTML = heroHTML;
    while (temp.firstChild) {
        pageWrapper.appendChild(temp.firstChild);
    }

    // === PINWAND SOCIAL PROOF (Karten + Ticker) ===
    (function() {
        var gridEl = document.getElementById('fl-hero-pinwall-grid');
        var ticker = document.getElementById('fl-hero-ticker');
        if (!gridEl && !ticker) return;

        var CHAKRA = ['#E84040','#E8782A','#D4A04A','#4CAF50','#42A5C7','#5B6ABF','#9B59B6'];
        var STATEMENTS = [
            { field: 'satz_mission', label: 'Meine Mission' },
            { field: 'satz_warum', label: 'Mein Warum' },
            { field: 'satz_vision', label: 'Meine Vision' }
        ];
        var CLAMPS = [3, 2, 3, 2, 3, 2];

        fetch('https://win3-community.solbachsteven.workers.dev/pinwall/entries')
        .then(function(res) { return res.json(); })
        .then(function(result) {
            var entries = result.entries || [];
            if (entries.length < 3) return;

            // --- Pinwand-Karten (rechte Seite) ---
            if (gridEl) {
                var cardEntries = entries.filter(function(e) { return e.is_example != 2; }).slice(0, 6);
                if (cardEntries.length < 4) cardEntries = entries.slice(0, 6);

                cardEntries.forEach(function(e, i) {
                    var ci = e.first_name.length % CHAKRA.length;
                    var color = CHAKRA[ci];
                    var stmt = STATEMENTS[i % 3];
                    var text = e[stmt.field] || e.satz_mission || e.satz_vision || e.satz_warum || '';
                    var clamp = CLAMPS[i % CLAMPS.length];

                    var card = document.createElement('div');
                    card.className = 'fl-hero-pinwall-card';
                    card.style.borderLeftColor = color;
                    card.style.transitionDelay = (i * 0.08) + 's';
                    card.innerHTML =
                        '<div class="fl-hero-pinwall-card-name" style="color:' + color + ';">' + e.first_name + '</div>' +
                        '<div class="fl-hero-pinwall-card-label">' + stmt.label + '</div>' +
                        '<div class="fl-hero-pinwall-card-text" style="-webkit-line-clamp:' + clamp + ';">' + text + '</div>';
                    gridEl.appendChild(card);
                });

                // Gestaffeltes Einblenden
                setTimeout(function() {
                    var cards = gridEl.querySelectorAll('.fl-hero-pinwall-card');
                    cards.forEach(function(c) { c.classList.add('visible'); });
                }, 300);
            }

            // --- Ticker unter der Pinwand ---
            if (ticker) {
                var names = entries.map(function(e) { return e.first_name; });
                var count = entries.length;

                ticker.innerHTML =
                    '<div class="fl-hero-ticker-count">' + count + ' Menschen haben ihre Lebensaufgabe formuliert</div>' +
                    '<div class="fl-hero-ticker-names" id="fl-hero-ticker-names"></div>';

                var namesEl = document.getElementById('fl-hero-ticker-names');
                names.forEach(function(name) {
                    var span = document.createElement('span');
                    span.className = 'fl-hero-ticker-name';
                    span.textContent = name;
                    namesEl.appendChild(span);
                });

                var nameEls = namesEl.querySelectorAll('.fl-hero-ticker-name');
                var currentIdx = 0;
                nameEls[0].classList.add('active');

                setInterval(function() {
                    nameEls[currentIdx].classList.remove('active');
                    currentIdx = (currentIdx + 1) % nameEls.length;
                    nameEls[currentIdx].classList.add('active');
                }, 2500);

                setTimeout(function() { ticker.classList.add('visible'); }, 800);
            }
        })
        .catch(function() {
            // Stille Fehlerbehandlung - bleibt unsichtbar
        });
    })();

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
        window.__flInitReveal(pageWrapper);
    }, 100);
})();

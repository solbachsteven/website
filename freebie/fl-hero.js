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

/* ======== RIGHT: PINWAND-VORSCHAU ======== */
.fl-hero-proof {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
}

/* Dunkles Pinwand-Fenster */
.fl-hero-pinwall {
    position: relative;
    width: 100%;
    max-width: 440px;
    max-height: 320px;
    overflow: hidden;
    border-radius: 16px;
    background: #1A1A1A;
    box-shadow: 0 20px 50px rgba(44, 39, 38, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.04);
}
.fl-hero-pinwall::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 90px;
    background: linear-gradient(to bottom, transparent, #1A1A1A);
    pointer-events: none;
    z-index: 2;
    border-radius: 0 0 16px 16px;
}

/* Masonry Grid */
.fl-hero-pinwall-grid {
    columns: 2;
    column-gap: 10px;
    padding: 10px;
}

/* Einzelne Karte (dunkles Theme) */
.fl-hero-pinwall-card {
    break-inside: avoid;
    margin-bottom: 10px;
    background: rgba(244, 240, 236, 0.04);
    border-radius: 10px;
    padding: 11px 13px;
    opacity: 0;
    transform: scale(0.95);
    transition: opacity 0.4s ease, transform 0.4s ease;
}
.fl-hero-pinwall-card.visible {
    opacity: 1;
    transform: scale(1);
}
.fl-hero-pinwall-card-name {
    font-family: 'Caveat', cursive;
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 5px;
    line-height: 1.2;
}
.fl-hero-pinwall-card-label {
    font-size: 7.5px;
    font-weight: 600;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    opacity: 0.5;
    margin-bottom: 3px;
}
.fl-hero-pinwall-card-text {
    font-size: 11px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.55);
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
    .fl-hero-pinwall { max-width: 380px; max-height: 290px; }
}

/* ======== HERO RESPONSIVE - MOBILE ======== */
@media (max-width: 768px) {
    .fl-hero {
        min-height: auto;
        padding: 50px 16px 40px;
        border-radius: 0 0 48px 0;
    }
    .fl-hero-inner { grid-template-columns: 1fr; gap: 32px; }
    .fl-hero-text { text-align: center; align-items: center; }
    .fl-hero-label { font-size: 11px; letter-spacing: 2px; }
    .fl-hero-headline { font-size: 28px; }
    .fl-hero-subtext { font-size: 15px; max-width: 100%; }
    .fl-hero-form { max-width: 100%; }
    .fl-hero-pinwall { max-width: 100%; max-height: 260px; border-radius: 14px; }
    .fl-hero-pinwall-grid { column-gap: 8px; padding: 8px; }
    .fl-hero-pinwall-card { padding: 9px 11px; margin-bottom: 8px; }
    .fl-hero-pinwall-card-name { font-size: 14px; }
    .fl-hero-pinwall-card-text { font-size: 10px; }
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

    // === KURATIERTE PINWAND-EINTR\u00c4GE ===
    var HERO_ENTRIES = [
        { name: 'Lisa', color: '#E84040', label: 'MEINE MISSION', text: 'Menschen zeigen, dass Neuanf\u00e4nge in jedem Alter m\u00f6glich sind - und sich lohnen.' },
        { name: 'Thomas', color: '#4CAF50', label: 'MEIN WARUM', text: '15 Jahre im falschen Job. Dieses Gef\u00fchl soll keiner so lange aushalten m\u00fcssen.' },
        { name: 'Nils', color: '#9B59B6', label: 'MEINE MISSION', text: 'Klarheit bringen, wenn alles sich anf\u00fchlt wie funktionieren statt leben.' },
        { name: 'Marco', color: '#42A5C7', label: 'MEINE VISION', text: 'Eine Welt, in der V\u00e4ter ohne schlechtes Gewissen sagen: Ich brauche auch Zeit f\u00fcr mich.' },
        { name: 'Sarah', color: '#E8782A', label: 'MEIN WARUM', text: 'Das Gef\u00fchl, dass ich mehr zu geben habe als das, was auf meiner Visitenkarte steht.' },
        { name: 'David', color: '#5B6ABF', label: 'MEINE MISSION', text: 'Jugendlichen zeigen, dass ihre Unsicherheit kein Fehler ist, sondern ein Anfang.' },
        { name: 'Julia', color: '#D4A04A', label: 'MEINE VISION', text: 'Frauen m\u00fcssen sich nicht zwischen Karriere und Familie entscheiden.' },
        { name: 'Kai', color: '#E84040', label: 'MEIN WARUM', text: 'Meine Tochter fragte: Papa, bist du gl\u00fccklich? Ich konnte nicht antworten.' },
        { name: 'Nina', color: '#4CAF50', label: 'MEINE MISSION', text: 'R\u00e4ume schaffen, in denen Ehrlichkeit kein Risiko ist.' },
        { name: 'Felix', color: '#9B59B6', label: 'MEINE VISION', text: 'Niemand sch\u00e4mt sich f\u00fcr seine Tr\u00e4ume. Auch nicht die leisen.' },
        { name: 'Elif', color: '#E8782A', label: 'MEIN WARUM', text: 'Die Sehnsucht nach einem Leben, das sich wirklich meins anf\u00fchlt.' },
        { name: 'Carla', color: '#42A5C7', label: 'MEINE MISSION', text: 'Frauen helfen, die alles haben und trotzdem sp\u00fcren: Da fehlt was.' },
        { name: 'Jan', color: '#5B6ABF', label: 'MEIN WARUM', text: 'Die wichtigsten Gespr\u00e4che finden nie statt. Ich will den Anfang machen.' },
        { name: 'Melina', color: '#D4A04A', label: 'MEINE VISION', text: 'Verletzlichkeit gilt als Mut, nicht als Schw\u00e4che.' },
        { name: 'Andreas', color: '#E84040', label: 'MEIN WARUM', text: 'Mit 45 verstanden: Erfolg ist, wenn dein Kalender zu deinen Werten passt.' }
    ];

    // Line-Clamp Variation fuer natuerliche Hoehen
    var CLAMPS = [3, 2, 3, 2, 3, 2];

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

    // === PINWAND-KARTEN MIT SWAP-ANIMATION ===
    (function() {
        var gridEl = document.getElementById('fl-hero-pinwall-grid');
        if (!gridEl) return;

        var displayed = HERO_ENTRIES.slice(0, 6);
        var pool = HERO_ENTRIES.slice(6);
        var cardEls = [];

        function buildCardHTML(entry, clamp) {
            return '<div class="fl-hero-pinwall-card-name" style="color:' + entry.color + ';">' + entry.name + '</div>' +
                '<div class="fl-hero-pinwall-card-label" style="color:' + entry.color + ';">' + entry.label + '</div>' +
                '<div class="fl-hero-pinwall-card-text" style="-webkit-line-clamp:' + clamp + ';">' + entry.text + '</div>';
        }

        // Karten initial rendern
        displayed.forEach(function(entry, i) {
            var card = document.createElement('div');
            card.className = 'fl-hero-pinwall-card';
            card.innerHTML = buildCardHTML(entry, CLAMPS[i % CLAMPS.length]);
            gridEl.appendChild(card);
            cardEls.push(card);
        });

        // Gestaffeltes Einblenden
        setTimeout(function() {
            cardEls.forEach(function(c, i) {
                setTimeout(function() { c.classList.add('visible'); }, i * 80);
            });
        }, 300);

        // Swap-Animation: alle 3.5s eine Karte austauschen
        var lastSwapped = -1;
        setTimeout(function() {
            setInterval(function() {
                if (pool.length === 0) return;

                // Zufaellige Karte waehlen (nicht dieselbe wie zuletzt)
                var idx;
                do {
                    idx = Math.floor(Math.random() * cardEls.length);
                } while (idx === lastSwapped && cardEls.length > 1);
                lastSwapped = idx;

                var card = cardEls[idx];

                // Fade Out
                card.classList.remove('visible');

                setTimeout(function() {
                    // Entry tauschen
                    var newEntry = pool.shift();
                    pool.push(displayed[idx]);
                    displayed[idx] = newEntry;

                    // DOM aktualisieren
                    card.innerHTML = buildCardHTML(newEntry, CLAMPS[idx % CLAMPS.length]);

                    // Fade In
                    card.classList.add('visible');
                }, 450);
            }, 3500);
        }, 2500);
    })();

    // === TICKER (echte API-Daten) ===
    (function() {
        var ticker = document.getElementById('fl-hero-ticker');
        if (!ticker) return;

        fetch('https://win3-community.solbachsteven.workers.dev/pinwall/entries')
        .then(function(res) { return res.json(); })
        .then(function(result) {
            var entries = result.entries || [];
            if (entries.length < 3) return;

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
        })
        .catch(function() {});
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

/* ============================================
   FUER WEN SECTION - Standalone JS
   Converted from Systeme.io Custom HTML
   ============================================ */

// ======== FONTS ========
(function() {
    var fonts = ['https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap'];
    fonts.forEach(function(url) {
        if (!document.querySelector('link[href="' + url + '"]')) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        }
    });

    // ======== CSS ========
    var style = document.createElement('style');
    style.setAttribute('data-section', 'fuer-wen');
    style.textContent = `
:root {
    --fw-bg-primary: #2C2726;
    --fw-bg-secondary: #F4F0EC;
    --fw-bg-box: #2C2726;
    --fw-accent-gold: #BC8034;
    --fw-green: #4CAF50;
    --fw-red: #E74C3C;
    --fw-text-white: #FFFFFF;
    --fw-text-dark: #2C2726;
    --fw-radius: 20px;
    --fw-font: 'Poppins', sans-serif;
}

/* ======== SECTION ======== */
.fw-section {
    font-family: var(--fw-font);
    background: transparent;
    color: var(--fw-text-white);
    padding: 80px 0;
    width: 100%;
    position: relative;
    z-index: 5;
}

.fw-container {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 0px;
}

/* ======== HEADER ======== */
.fw-header {
    text-align: center;
    margin-bottom: 50px;
    opacity: 0;
    transform: translateY(30px);
}

.fw-header.visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fw-label {
    font-size: 16px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: var(--fw-accent-gold);
    margin-bottom: 10px;
}

.fw-title {
    font-size: 36px;
    font-weight: 400;
    line-height: 1.3;
}

/* ======== GRID ======== */
.fw-grid {
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    gap: 16px;
    align-items: start;
}

/* ======== BOX BASE ======== */
.fw-box {
    border-radius: var(--fw-radius);
    padding: 40px 35px;
    opacity: 0;
    transform: translateY(30px);
}

.fw-box.visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
}

.fw-box.visible:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

/* ======== FOR YOU BOX (Beige / Highlighted) ======== */
.fw-box-yes {
    background: var(--fw-bg-secondary);
    color: var(--fw-text-dark);
    padding: 45px 40px;
}

/* ======== NOT FOR YOU BOX (Grau / Standard) ======== */
.fw-box-no {
    background: var(--fw-bg-box);
    color: var(--fw-text-white);
}

/* ======== BOX HEADING ======== */
.fw-box-heading {
    font-family: var(--fw-font);
    font-size: 26px;
    font-weight: 600;
    text-transform: none;
    letter-spacing: 0;
    margin-bottom: 25px;
    padding-bottom: 18px;
    border-bottom: 2px solid var(--fw-accent-gold);
}

.fw-box-yes .fw-box-heading {
    color: var(--fw-text-dark);
}

.fw-box-no .fw-box-heading {
    color: var(--fw-text-white);
}

/* ======== LIST ======== */
.fw-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.fw-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 10px 8px;
    margin: 0 -8px;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 8px;
    transition: background 0.2s ease;
}

.fw-box-yes .fw-item:hover {
    background: rgba(188, 128, 52, 0.08);
}

.fw-box-no .fw-item:hover {
    background: rgba(255, 255, 255, 0.05);
}

.fw-item + .fw-item {
    border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.fw-box-no .fw-item + .fw-item {
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}

/* ======== ICONS ======== */
.fw-icon {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1px;
}

.fw-icon-yes {
    color: var(--fw-green);
}

.fw-icon-no {
    color: var(--fw-red);
    opacity: 0.7;
}

/* ======== ITEM TEXT ======== */
.fw-box-yes .fw-item-text {
    color: var(--fw-text-dark);
}

.fw-box-no .fw-item-text {
    color: var(--fw-text-white);
    opacity: 0.85;
}

/* ======== TABLET ======== */
@media (max-width: 1024px) {
    .fw-title {
        font-size: 30px;
    }

    .fw-box {
        padding: 35px 30px;
    }

    .fw-box-yes {
        padding: 38px 32px;
    }

    .fw-box-heading {
        font-size: 23px;
    }
}

/* ======== MOBILE ======== */
@media (max-width: 768px) {
    .fw-section {
        padding: 60px 0;
    }

    .fw-container {
        padding: 0 12px;
    }

    .fw-header {
        margin-bottom: 30px;
    }

    .fw-title {
        font-size: 26px;
    }

    .fw-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    .fw-box {
        padding: 28px 20px;
    }

    .fw-box-yes {
        padding: 28px 20px;
    }

    .fw-box-heading {
        font-size: 22px;
        margin-bottom: 20px;
        padding-bottom: 14px;
    }

    .fw-item {
        font-size: 14px;
    }
}
`;
    document.head.appendChild(style);
})();

// ======== RENDERER ========
(function() {
    // ======== DATA ========
    var FORWEN_DATA = {
        // Section Header
        label: "F\u00dcR WEN?",
        title: "Meine Angebote sind das Richtige f\u00fcr dich, wenn...",

        // =============================================
        // FUER DICH (Beige Box, gruene Haken)
        // =============================================
        forYou: {
            heading: "F\u00fcr dich, wenn...",
            items: [
                "Du bereit bist, dich ehrlich mit dir selbst auseinanderzusetzen",
                "Du nicht mehr funktionieren, sondern authentisch leben willst",
                "Du mit deiner Lebenszeit einen echten Unterschied machen willst",
                "Du deine Gaben & Talente in den Dienst anderer stellen m\u00f6chtest",
                "Dir wichtig ist, dass dein Leben Sinn & Bedeutung hat",
                "Du langfristig denkst und bereit bist, in dich selbst zu investieren",
                "Du bereit bist f\u00fcr echte Ver\u00e4nderung",
                "Du dein Leben zu deinem machen willst"
            ]
        },

        // =============================================
        // NICHT FUER DICH (Graue Box, rote Kreuze)
        // =============================================
        notForYou: {
            heading: "Nicht f\u00fcr dich, wenn...",
            items: [
                "Du eine schnelle L\u00f6sung ohne eigenes Investment suchst",
                "Du nicht bereit bist, dich selbst zu hinterfragen",
                "Du Tipps und Tricks willst - keine Transformation",
                "Du Ergebnisse ohne Commitment erwartest",
                "Du glaubst, jemand anderes kann das f\u00fcr dich tun",
                "Du nicht bereit bist, Geld, Zeit und Energie zu investieren",
                "Innere Arbeit f\u00fcr dich Esoterik oder Zeitverschwendung ist",
                "Du auf den perfekten Moment wartest statt jetzt anzufangen"
            ]
        }
    };

    // ======== SYSTEME.IO-KOMPATIBEL: HTML via JS generieren ========
    var section = document.createElement('section');
    section.className = 'fw-section';

    var container = document.createElement('div');
    container.className = 'fw-container';

    var header = document.createElement('div');
    header.className = 'fw-header';
    header.id = 'fwHeader';

    var grid = document.createElement('div');
    grid.className = 'fw-grid';
    grid.id = 'fwGrid';

    container.appendChild(header);
    container.appendChild(grid);
    section.appendChild(container);

    var target = window.__SS_CONTAINER || document.body;
    target.appendChild(section);

    var data = FORWEN_DATA;

    // ======== HEADER ========
    header.innerHTML =
        '<div class="fw-label">' + data.label + '</div>' +
        '<h2 class="fw-title">' + data.title + '</h2>';

    // ======== SVG ICONS ========
    var checkSVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    var crossSVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

    // ======== HELPER: Build Box ========
    function buildBox(boxData, type) {
        var box = document.createElement('div');
        box.className = 'fw-box fw-box-' + type;

        var headingHTML = '<div class="fw-box-heading">' + boxData.heading + '</div>';

        var listHTML = '<ul class="fw-list">';
        boxData.items.forEach(function(text) {
            var icon = type === 'yes' ? checkSVG : crossSVG;
            var iconClass = type === 'yes' ? 'fw-icon-yes' : 'fw-icon-no';
            listHTML +=
                '<li class="fw-item">' +
                    '<span class="fw-icon ' + iconClass + '">' + icon + '</span>' +
                    '<span class="fw-item-text">' + text + '</span>' +
                '</li>';
        });
        listHTML += '</ul>';

        box.innerHTML = headingHTML + listHTML;
        return box;
    }

    // ======== BUILD BOXES ========
    var yesBox = buildBox(data.forYou, 'yes');
    var noBox = buildBox(data.notForYou, 'no');

    grid.appendChild(yesBox);
    grid.appendChild(noBox);

    // ======== SCROLL REVEAL ========
    var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var allElements = [header, yesBox, noBox];
                var delay = allElements.indexOf(entry.target) * 120;
                setTimeout(function() {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(header);
    observer.observe(yesBox);
    observer.observe(noBox);
})();

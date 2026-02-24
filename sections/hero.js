/*
 * Hero Section - Steven Solbach Website
 * Standalone JS - laedt CSS + HTML + Animationen selbst
 * Source of Truth: Obsidian Vault > Hero Section Code.md
 */

// =============================================
// DATA - Texte und Links hier aendern
// =============================================
var HERO_DATA = {
    label: "FÜR MENSCHEN DIE GANZ LEBEN WOLLEN",
    headline: "BECOME THE CREATOR -",
    subheadline: "Lebe authentisch, erfüllt und frei.",
    benefits: [
        "Erkenne dein wahres Selbst",
        "Befreie dich von alten Mustern & Blockaden",
        "Verwirkliche deine Traum-Realität"
    ],
    mission: "Ich begleite ambitionierte Seelen darin, ihre wahre Essenz zu erkennen und von Innen nach Außen ein Leben zu gestalten, das ihnen auf allen Ebenen entspricht.",
    cta: {
        primary: { text: "Für Coaching bewerben", url: "https://solbachsteven.systeme.io/mentoring" },
        secondary: { text: "Das Win³ Framework kennenlernen", subtitle: "Dein Weg zur Ganzheit", url: "#win3Section" }
    },
    image: "https://d1yei2z3i6k35z.cloudfront.net/15985342/6978eb69d9665_Removebackgroundproject-22.png"
};

// =============================================
// CSS INJECTION
// =============================================
(function() {
    // Google Fonts + Font Awesome via <link>
    var fonts = [
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    ];
    fonts.forEach(function(url) {
        if (!document.querySelector('link[href="' + url + '"]')) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        }
    });

    // Custom CSS
    var style = document.createElement('style');
    style.setAttribute('data-section', 'hero');
    style.textContent = `
@font-face{
    font-family: "PacificaCondensed";
    src: url("https://db.onlinewebfonts.com/t/3ade034999153f8110b40724ad74f00e.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/3ade034999153f8110b40724ad74f00e.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/3ade034999153f8110b40724ad74f00e.ttf")format("truetype");
    font-weight:normal;
    font-style:normal;
    font-display:swap;
}

.w3-logo {
    font-family: 'PacificaCondensed', fantasy;
    font-weight: normal;
    font-size: 0.85em;
    letter-spacing: 2px;
    white-space: nowrap;
    color: #FFFFFF;
}

.w3-logo-sup {
    color: #BC8034;
    font-size: 0.7em;
    margin-left: 1px;
    vertical-align: super;
}

.hero-wrapper {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    background: transparent;
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    align-items: center;
}

.hero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 60px 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 0 60px;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    z-index: 5;
}

.hero-text {
    display: flex;
    flex-direction: column;
    gap: 0;
    grid-column: 1;
}

.hero-ctas-wrap {
    grid-column: 1;
}

.hero-label {
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 0;
    text-transform: uppercase;
    color: #BC8034;
    margin-bottom: 16px;
    line-height: 24px;
}

.hero-headline {
    font-family: 'Poppins', sans-serif;
    font-size: 77px;
    font-weight: 700;
    line-height: 65px;
    letter-spacing: -1px;
    color: #FFFFFF;
    margin: 0 0 20px 0;
    text-transform: uppercase;
}

.hero-subheadline {
    font-family: 'Poppins', sans-serif;
    font-size: 29px;
    font-weight: 300;
    letter-spacing: -0.3px;
    color: #BC8034;
    margin-bottom: 32px;
    line-height: 24px;
}

.hero-benefits {
    list-style: none;
    padding: 0;
    margin: 0 0 28px 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.hero-benefits li {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 300;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    gap: 10px;
    line-height: 34px;
}

.hero-benefits li .hero-check {
    color: #BC8034;
    font-size: 18px;
    flex-shrink: 0;
    width: 22px;
    text-align: center;
}

.hero-mission {
    font-family: 'Poppins', sans-serif;
    font-size: 19px;
    font-weight: 300;
    line-height: 32px;
    color: #FFFFFF;
    margin-bottom: 36px;
    max-width: 520px;
}

.hero-ctas {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 420px;
}

.hero-cta-primary {
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
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    text-align: center;
}

.hero-cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(217,105,53,0.4);
}

.hero-cta-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-weight: 500;
    color: #FFFFFF;
    background: transparent;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 20px;
    padding: 16px 40px;
    text-decoration: none;
    cursor: pointer;
    transition: border-color 0.2s ease, transform 0.2s ease;
    gap: 4px;
}

.hero-cta-secondary:hover {
    border-color: #BC8034;
    transform: translateY(-2px);
}

.hero-cta-secondary .cta-sub {
    font-size: 15px;
    font-weight: 300;
    color: #BC8034;
}

.hero-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 2;
    grid-row: 1 / 3;
}

.hero-image img {
    width: 100%;
    max-width: 560px;
    height: auto;
    display: block;
    object-fit: contain;
}

.hero-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.hero-fade.visible {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 1024px) {
    .hero-container {
        grid-template-columns: 1fr 1fr;
        gap: 0 40px;
        padding: 60px 40px 50px;
    }
    .hero-label { font-size: 16px; }
    .hero-headline { font-size: 56px; line-height: 52px; }
    .hero-subheadline { font-size: 23px; }
    .hero-benefits li { font-size: 17px; line-height: 28px; }
    .hero-mission { font-size: 16px; line-height: 28px; }
    .hero-image img { max-width: 440px; }
}

@media (max-width: 768px) {
    .hero-wrapper { min-height: auto; }
    .hero-container {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: 30px;
        padding: 50px 12px 40px;
        text-align: center;
    }
    .hero-text { align-items: center; order: 1; grid-column: 1; }
    .hero-image { order: 2; grid-column: 1; grid-row: auto; }
    .hero-ctas-wrap { order: 3; grid-column: 1; }
    .hero-ctas { max-width: 100%; width: 100%; align-items: center; }
    .hero-label { font-size: 15px; line-height: 22px; }
    .hero-headline { font-size: 64px; line-height: 58px; }
    .hero-subheadline { font-size: 22px; line-height: 26px; margin-bottom: 24px; }
    .hero-benefits { align-items: flex-start; display: inline-flex; text-align: left; }
    .hero-benefits li { font-size: 13px; line-height: 24px; }
    .hero-benefits li .hero-check { font-size: 14px; width: 18px; }
    .hero-mission { font-size: 15px; line-height: 24px; max-width: 100%; margin-bottom: 0; padding: 0 12px; }
    .hero-cta-primary { font-size: 15px; padding: 14px 28px; }
    .hero-cta-secondary { font-size: 14px; padding: 12px 28px; }
    .hero-cta-secondary .cta-sub { font-size: 13px; }
    .hero-image img { max-width: 320px; }
}

@media (max-width: 480px) {
    .hero-headline { font-size: 52px; line-height: 48px; }
    .hero-subheadline { font-size: 19px; }
    .hero-image img { max-width: 260px; }
}
`;
    document.head.appendChild(style);
})();

// =============================================
// RENDERER
// =============================================
(function() {
    var d = HERO_DATA;

    function w3brand(str) {
        return str.replace(/Win\u00b3/g, '<span class="w3-logo">Win<span class="w3-logo-sup">\u00b3</span></span>');
    }

    var checkIcon = '<i class="fa-solid fa-check-double hero-check"></i>';

    var benefitsHTML = '';
    for (var i = 0; i < d.benefits.length; i++) {
        benefitsHTML += '<li class="hero-fade">' + checkIcon + d.benefits[i] + '</li>';
    }

    var arrowIcon = '<i class="fa-solid fa-angles-down" style="margin-left:8px;font-size:14px;"></i>';
    var secondaryInner = '<span>' + w3brand(d.cta.secondary.text) + ' ' + arrowIcon + '</span>';
    if (d.cta.secondary.subtitle) {
        secondaryInner += '<span class="cta-sub">' + d.cta.secondary.subtitle + '</span>';
    }

    var html = '' +
        '<div class="hero-wrapper">' +
            '<div class="hero-container">' +
                '<div class="hero-text">' +
                    '<div class="hero-label hero-fade">' + d.label + '</div>' +
                    '<h1 class="hero-headline hero-fade">' + d.headline + '</h1>' +
                    '<div class="hero-subheadline hero-fade">' + d.subheadline + '</div>' +
                    '<ul class="hero-benefits">' + benefitsHTML + '</ul>' +
                    '<div class="hero-mission hero-fade">"' + d.mission + '"</div>' +
                '</div>' +
                '<div class="hero-image hero-fade">' +
                    '<img src="' + d.image + '" alt="Steven Solbach" loading="eager">' +
                '</div>' +
                '<div class="hero-ctas-wrap hero-fade">' +
                    '<div class="hero-ctas">' +
                        '<a href="' + d.cta.primary.url + '" class="hero-cta-primary">' + d.cta.primary.text + '</a>' +
                        '<a href="' + d.cta.secondary.url + '" class="hero-cta-secondary">' + secondaryInner + '</a>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';

    // Insert into DOM
    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];
    var container = document.createElement('div');
    container.innerHTML = html;
    anchor.parentNode.insertBefore(container.firstElementChild, anchor.nextSibling);

    // Scroll reveal
    setTimeout(function() {
        var items = document.querySelectorAll('.hero-fade');
        if ('IntersectionObserver' in window) {
            var obs = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            for (var j = 0; j < items.length; j++) {
                obs.observe(items[j]);
            }
        } else {
            for (var k = 0; k < items.length; k++) {
                items[k].classList.add('visible');
            }
        }
    }, 100);
})();

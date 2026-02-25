// Win³ Kurs Landingpage - Testimonials Section (Standalone)
// Exaktes Template von Website testimonials.js: Masonry Grid, Title Card, Mobile Swipe
// Loaded via: <script src="https://solbachsteven.github.io/website/win3-kurs/wk-testimonials.js"></script>
(function() {
    if (window.__WK_TESTIMONIALS_LOADED) return;
    window.__WK_TESTIMONIALS_LOADED = true;

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

    // === TESTIMONIALS CSS (Website-Pattern) ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wk-testimonials');
    style.textContent = `
/* ======== TESTIMONIALS SECTION (Website Pattern) ======== */
.wk-testimonials {
    padding: 80px 0;
    background: transparent;
}
.wk-testimonials-container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
}
.wk-testimonials-grid {
    column-count: 3;
    column-gap: 20px;
    width: 100%;
}

/* Title Card */
.wk-testi-title-card {
    background: transparent;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
    opacity: 0;
    transform: translateY(30px);
    break-inside: avoid;
    margin-bottom: 20px;
}
.wk-testi-title-card.visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.wk-testi-label {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #BC8034;
    margin-bottom: 10px;
}
.wk-testi-section-title {
    font-size: 54px;
    line-height: 60px;
}
.wk-testi-section-title .light {
    font-weight: 400;
    display: block;
}
.wk-testi-section-title .bold {
    font-weight: 600;
    display: block;
}

/* Animated Arrow */
.wk-testi-arrow {
    display: flex;
    align-items: center;
    margin-top: 20px;
    color: #BC8034;
}
.wk-testi-arrow svg {
    width: 40px;
    height: 40px;
    animation: wkArrowBounce 1.5s ease-in-out infinite;
}
@keyframes wkArrowBounce {
    0%, 100% { transform: translateX(0); opacity: 0.6; }
    50% { transform: translateX(10px); opacity: 1; }
}

/* Testimonial Cards */
.wk-testi-card {
    background: #2C2726;
    border-radius: 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    min-width: 0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
    break-inside: avoid;
    margin-bottom: 20px;
}
.wk-testi-card.visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
}
.wk-testi-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}
.wk-testi-card.visible:hover {
    transform: translateY(-5px);
}

/* Highlighted Card */
.wk-testi-card.wk-testi-highlighted {
    background: #F4F0EC;
    color: #2C2726;
    padding: 35px;
    margin-left: -5px;
    margin-right: -5px;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
}
.wk-testi-card.wk-testi-highlighted .wk-testi-role {
    color: #2C2726;
    opacity: 0.7;
}
.wk-testi-card.wk-testi-highlighted .wk-testi-quote {
    color: #2C2726;
    opacity: 0.9;
}
.wk-testi-card.wk-testi-highlighted .wk-testi-star {
    color: #BC8034;
}

/* Author */
.wk-testi-author {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 20px;
}
.wk-testi-avatar {
    width: 150px;
    height: 100px;
    border-radius: 12px;
    object-fit: cover;
    background: #2C2726;
    flex-shrink: 0;
}
.wk-testi-card.wk-testi-highlighted .wk-testi-avatar {
    background: #2C2726;
}
.wk-testi-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-top: 5px;
}
.wk-testi-name {
    font-weight: 600;
    font-size: 16px;
}
.wk-testi-role {
    font-size: 14px;
    font-weight: 300;
    opacity: 0.6;
}

/* Stars */
.wk-testi-stars {
    display: flex;
    gap: 3px;
    margin-top: 8px;
}
.wk-testi-star {
    color: #BC8034;
    width: 18px;
    height: 18px;
}

/* Quote */
.wk-testi-quote {
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    opacity: 0.85;
}

/* Mobile Swipe Indicator */
.wk-testi-swipe-indicator {
    display: none;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    color: #FFFFFF;
    opacity: 0.6;
    font-size: 14px;
    width: 100%;
}
.wk-testi-swipe-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
}
.wk-testi-swipe-arrow {
    font-size: 18px;
    width: 24px;
    text-align: center;
    display: inline-block;
}
.wk-testi-swipe-text {
    padding: 0 4px;
}
.wk-testi-swipe-arrow.left {
    animation: wkSwipeLeft 1.5s ease-in-out infinite;
}
.wk-testi-swipe-arrow.right {
    animation: wkSwipeRight 1.5s ease-in-out infinite;
}
@keyframes wkSwipeLeft {
    0%, 100% { transform: translateX(0); opacity: 0.4; }
    50% { transform: translateX(-8px); opacity: 1; }
}
@keyframes wkSwipeRight {
    0%, 100% { transform: translateX(0); opacity: 0.4; }
    50% { transform: translateX(8px); opacity: 1; }
}

.wk-testi-dots {
    display: none;
    justify-content: center;
    gap: 8px;
    margin-top: 15px;
}
.wk-testi-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #2C2726;
    transition: background 0.3s ease, transform 0.3s ease;
}
.wk-testi-dot.active {
    background: #BC8034;
    transform: scale(1.2);
}

/* Tablet */
@media (max-width: 1024px) {
    .wk-testimonials-grid { column-count: 2; }
    .wk-testi-section-title { font-size: 44px; line-height: 50px; }
}

/* Mobile */
@media (max-width: 768px) {
    .wk-testimonials { padding: 50px 12px; }
    .wk-testimonials-grid {
        column-count: unset;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        gap: 12px;
        padding-bottom: 30px;
    }
    .wk-testimonials-grid::-webkit-scrollbar { display: none; }
    .wk-testi-title-card {
        flex: 0 0 300px;
        scroll-snap-align: center;
        opacity: 1;
        transform: none;
        margin-bottom: 0;
        order: 0;
    }
    .wk-testi-card {
        flex: 0 0 300px;
        scroll-snap-align: center;
        opacity: 1;
        transform: none;
        margin-bottom: 0;
    }
    .wk-testi-card.wk-testi-highlighted {
        flex: 0 0 310px;
        margin: 0;
        padding: 30px;
    }
    .wk-testi-section-title { font-size: 40px; line-height: 46px; }
    .wk-testi-avatar { width: 100px; height: 100px; }
    .wk-testi-swipe-indicator { display: flex; }
    .wk-testi-dots { display: flex; }
}
`;
    document.head.appendChild(style);

    // === SVGs ===
    var starSVG = '<svg class="wk-testi-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    var arrowSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';

    // === DATA (gleiche Testimonials wie Website - Texte/Bilder werden spaeter angepasst) ===
    var data = {
        label: "TESTIMONIALS",
        titleLine1: "Was meine",
        titleLine2: "Coachees",
        titleLine3: "sagen",
        items: [
            {
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/69739098a7332_Anna.png",
                name: "Anna Herpel",
                role: "Coach, \u00c4rztin",
                quote: "Neben Herzensw\u00e4rme und bedingungsloser Annahme zeichnet ihn seine treffsichere Analyse, seine spirituelle Anbindung ans H\u00f6here, welche er in Alltagstipps einflie\u00dfen l\u00e4sst, und die F\u00e4higkeit, sich in menschliche H\u00f6hen und Tiefen zu bewegen aus. Absolut empfehlenswert!",
                highlighted: false,
                mobileOrder: 3
            },
            {
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/697390a0449e4_Julia.png",
                name: "Julia Adam",
                role: "Massagetherapeutin & Content Creator",
                quote: "Steven hat ein gro\u00dfes Talent darin, mir liebevoll meine inneren Themen aufzuzeigen und mich zu begleiten, meine eigene St\u00e4rke zu finden. Seine intelligenten Fragen bringen mich zum tieferen Nachdenken: Was ist mein Weg? Wie kann ich ihn gehen? Was darf ich daf\u00fcr lernen?",
                highlighted: true,
                mobileOrder: 6
            },
            {
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/6973908ac3e4b_Maya.png",
                name: "Maya Devi",
                role: "Coachin & Singkreisleiterin",
                quote: "Steven ist einer der inspirierendsten Menschen, die ich kennengelernt habe. Ich habe gelernt, Verantwortung zu \u00fcbernehmen f\u00fcr mein Wirken und Schatten integriert, die mich bisher davon abgehalten haben, meine Gaben in die Welt zu bringen. Er ist liebevoll, aufrichtig, sieht dich und dein Potenzial und hilft dir, es zu entfalten.",
                highlighted: true,
                mobileOrder: 1
            },
            {
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/697390906210e_Simon.png",
                name: "Simon Kocksch",
                role: "Physiotherapeut",
                quote: "In einer Lebensphase voller Chaos hat Steven mir geholfen, die L\u00fccken zwischen meinen Gedanken zu schlie\u00dfen. Durch ihn ist mir klar geworden, dass es m\u00f6glich ist, die Distanz zwischen Gef\u00fchl und Reaktion zu vergr\u00f6\u00dfern. Dadurch treffe ich Entscheidungen, die mich meinen Zielen n\u00e4her bringen.",
                highlighted: false,
                mobileOrder: 4
            },
            {
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/697390a4df5d7_Natasha.png",
                name: "Natascha",
                role: "Musikp\u00e4dagogin",
                quote: "Ich mag an dir deine ruhige, freundliche und klare Art. Du bist f\u00fcr mich ein Vorbild in Sachen Selbstliebe, jemand, der schon so manche H\u00fcrde genommen hat auf dem Weg der Innenarbeit. Ich erlebe dich als einen Menschen, dem es am Herzen liegt, anderen auf ihrem Weg zu helfen.",
                highlighted: false,
                mobileOrder: 7
            },
            {
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/697390aa98acb_Sabrina.png",
                name: "Dr. Sabrina Schmitz",
                role: "Coachin, Heilbegleiterin",
                quote: "An Steven ist wunderbar, dass er so klar und mit der Absicht von Liebe spiegelt, was in mir los ist. Er ist ein geduldiger, zuversichtlicher und sehr angebundener Lehrer f\u00fcr das Leben, Beziehungen und spirituelle Dimensionen. Gro\u00dfe Kennenlernempfehlung mit Lebensbereicherungspotential.",
                highlighted: false,
                mobileOrder: 2
            },
            {
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/6973909cab82e_Henry.png",
                name: "Henry",
                role: "Coach, Ex-Banker",
                quote: "Ich sch\u00e4tze Stevens F\u00e4higkeit, aktiv und mit offenem Herzen zuzuh\u00f6ren. Er hat mir geholfen, meine eigene psychologische Struktur besser zu begreifen und zu erkennen, wo meine Entwicklungspunkte liegen. Steven ist eine Inspiration, weil er innere Arbeit mit einer gelassenen Haltung verbindet.",
                highlighted: true,
                mobileOrder: 5
            },
            {
                image: "https://placehold.co/150x150/2D2726/BC8034?text=?",
                name: "Michael B.",
                role: "Gr\u00fcnder & CEO",
                quote: "Die Kombination aus spiritueller Tiefe und praktischer Umsetzung ist einzigartig. Genau das, was ich gesucht habe.",
                highlighted: false,
                mobileOrder: 8
            }
        ]
    };

    // === BUILD DOM ===
    var sectionEl = document.createElement('section');
    sectionEl.className = 'wk-testimonials';

    var containerEl = document.createElement('div');
    containerEl.className = 'wk-testimonials-container';

    var grid = document.createElement('div');
    grid.className = 'wk-testimonials-grid';

    var swipeIndicator = document.createElement('div');
    swipeIndicator.className = 'wk-testi-swipe-indicator';
    swipeIndicator.innerHTML = '<div class="wk-testi-swipe-inner"><span class="wk-testi-swipe-arrow left">\u2190</span><span class="wk-testi-swipe-text">Wischen</span><span class="wk-testi-swipe-arrow right">\u2192</span></div>';

    var dotsContainer = document.createElement('div');
    dotsContainer.className = 'wk-testi-dots';

    containerEl.appendChild(grid);
    containerEl.appendChild(swipeIndicator);
    containerEl.appendChild(dotsContainer);
    sectionEl.appendChild(containerEl);

    // Title Card
    var titleCard = document.createElement('div');
    titleCard.className = 'wk-testi-title-card';
    titleCard.style.order = '0';
    titleCard.innerHTML =
        '<div class="wk-testi-label">' + data.label + '</div>' +
        '<h2 class="wk-testi-section-title">' +
            '<span class="light">' + data.titleLine1 + '</span>' +
            '<span class="light">' + data.titleLine2 + '</span>' +
            '<span class="bold">' + data.titleLine3 + '</span>' +
        '</h2>' +
        '<div class="wk-testi-arrow">' + arrowSVG + '</div>';
    grid.appendChild(titleCard);

    // Testimonial Cards
    data.items.forEach(function(item, index) {
        var card = document.createElement('div');
        card.className = 'wk-testi-card' + (item.highlighted ? ' wk-testi-highlighted' : '');
        card.style.order = item.mobileOrder || (index + 1);
        card.innerHTML =
            '<div class="wk-testi-author">' +
                '<img src="' + item.image + '" alt="' + item.name + '" class="wk-testi-avatar">' +
                '<div class="wk-testi-info">' +
                    '<span class="wk-testi-name">' + item.name + '</span>' +
                    '<span class="wk-testi-role">' + item.role + '</span>' +
                    '<div class="wk-testi-stars">' +
                        starSVG + starSVG + starSVG + starSVG + starSVG +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<p class="wk-testi-quote">\u201e' + item.quote + '\u201c</p>';
        grid.appendChild(card);
    });

    // Swipe Dots
    var totalItems = data.items.length + 1;
    for (var i = 0; i < totalItems; i++) {
        var dot = document.createElement('span');
        dot.className = 'wk-testi-dot' + (i === 0 ? ' active' : '');
        dotsContainer.appendChild(dot);
    }

    // === DOM INSERTION ===
    var pageWrapper = document.querySelector('.wk-page');
    if (!pageWrapper) {
        pageWrapper = document.createElement('div');
        pageWrapper.className = 'wk-page';
        var target = document.currentScript || document.scripts[document.scripts.length - 1];
        target.parentNode.insertBefore(pageWrapper, target.nextSibling);
    }
    pageWrapper.appendChild(sectionEl);

    // Mobile swipe dots
    var dots = dotsContainer.querySelectorAll('.wk-testi-dot');
    grid.addEventListener('scroll', function() {
        var scrollLeft = grid.scrollLeft;
        var cardWidth = 300 + 12;
        var activeIndex = Math.round(scrollLeft / cardWidth);
        for (var j = 0; j < dots.length; j++) {
            dots[j].classList.toggle('active', j === activeIndex);
        }
    });

    // Scroll reveal (desktop masonry)
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var delay = Array.from(grid.children).indexOf(entry.target) * 120;
                setTimeout(function() {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    var allCards = sectionEl.querySelectorAll('.wk-testi-title-card, .wk-testi-card');
    for (var k = 0; k < allCards.length; k++) {
        observer.observe(allCards[k]);
    }
})();

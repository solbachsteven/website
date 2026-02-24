// =============================================================
// TESTIMONIALS SECTION - Standalone JS (converted from Systeme.io)
// =============================================================

// ======== FONT LOADING ========
(function() {
    var fonts = [
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap'
    ];
    fonts.forEach(function(url) {
        if (!document.querySelector('link[href="' + url + '"]')) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        }
    });

    var style = document.createElement('style');
    style.setAttribute('data-section', 'testimonials');
    style.textContent = `
:root {
    --bg-primary: #2C2726;
    --bg-secondary: #F4F0EC;
    --bg-box: #2C2726;
    --accent-gold: #BC8034;
    --text-white: #FFFFFF;
    --radius: 20px;
    --font-main: 'Poppins', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.testimonial-section {
    font-family: var(--font-main);
    background: transparent;
    color: var(--text-white);
    padding: 60px 0px;
    width: 100%;
    max-width: 100%;
    margin: 0;
}

.testimonial-container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
}

.testimonial-grid {
    column-count: 3;
    column-gap: 20px;
    width: 100%;
}

/* Title Card */
.title-card {
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

.title-card.visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.section-label {
    font-family: var(--font-main);
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: var(--accent-gold);
    margin-bottom: 10px;
}

.section-title {
    font-size: 54px;
    line-height: 60px;
}

.section-title .light {
    font-weight: 400;
    display: block;
}

.section-title .bold {
    font-weight: 600;
    display: block;
}

/* Animated Arrow */
.title-arrow {
    display: flex;
    align-items: center;
    margin-top: 20px;
    color: var(--accent-gold);
}

.title-arrow svg {
    width: 40px;
    height: 40px;
    animation: arrowBounce 1.5s ease-in-out infinite;
}

@keyframes arrowBounce {
    0%, 100% { transform: translateX(0); opacity: 0.6; }
    50% { transform: translateX(10px); opacity: 1; }
}

/* Testimonial Cards */
.testimonial-card {
    background: var(--bg-box);
    border-radius: var(--radius);
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

.testimonial-card.visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.testimonial-card.visible:hover {
    transform: translateY(-5px);
}

/* Highlighted Card - visually larger */
.testimonial-card.highlighted {
    background: var(--bg-secondary);
    color: var(--bg-primary);
    padding: 35px;
    margin-left: -5px;
    margin-right: -5px;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
}

.testimonial-card.highlighted .testimonial-role {
    color: var(--bg-primary);
    opacity: 0.7;
}

.testimonial-card.highlighted .testimonial-quote {
    color: var(--bg-primary);
    opacity: 0.9;
}

.testimonial-card.highlighted .star {
    color: var(--accent-gold);
}

/* Author */
.testimonial-author {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 20px;
}

.testimonial-avatar {
    width: 150px;
    height: 100px;
    border-radius: 12px;
    object-fit: cover;
    background: var(--bg-primary);
    flex-shrink: 0;
}

.testimonial-card.highlighted .testimonial-avatar {
    background: var(--bg-box);
}

.testimonial-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-top: 5px;
}

.testimonial-name {
    font-weight: 600;
    font-size: 16px;
}

.testimonial-role {
    font-size: 14px;
    font-weight: 300;
    opacity: 0.6;
}

/* Stars - under name/role */
.testimonial-stars {
    display: flex;
    gap: 3px;
    margin-top: 8px;
}

.star {
    color: var(--accent-gold);
    width: 18px;
    height: 18px;
}

/* Quote */
.testimonial-quote {
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    opacity: 0.85;
}

/* Mobile Swipe Indicator - properly centered */
.swipe-indicator {
    display: none;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    color: var(--text-white);
    opacity: 0.6;
    font-size: 14px;
    width: 100%;
}

.swipe-indicator-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
}

.swipe-arrow {
    font-size: 18px;
    width: 24px;
    text-align: center;
    display: inline-block;
}

.swipe-text {
    padding: 0 4px;
}

.swipe-arrow.left {
    animation: swipeOutLeft 1.5s ease-in-out infinite;
}

.swipe-arrow.right {
    animation: swipeOutRight 1.5s ease-in-out infinite;
}

@keyframes swipeOutLeft {
    0%, 100% { transform: translateX(0); opacity: 0.4; }
    50% { transform: translateX(-8px); opacity: 1; }
}

@keyframes swipeOutRight {
    0%, 100% { transform: translateX(0); opacity: 0.4; }
    50% { transform: translateX(8px); opacity: 1; }
}

.swipe-dots {
    display: none;
    justify-content: center;
    gap: 8px;
    margin-top: 15px;
}

.swipe-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--bg-box);
    transition: background 0.3s ease, transform 0.3s ease;
}

.swipe-dot.active {
    background: var(--accent-gold);
    transform: scale(1.2);
}

/* ======== BRIDGE TEXT ======== */
.testi-bridge {
    padding: 60px 40px;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
}

.testi-bridge .bridge-caveat {
    font-family: 'Caveat', cursive;
    font-size: 28px;
    color: #BC8034;
    margin: 0 0 8px;
    display: block;
}

.testi-bridge .bridge-body {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
}

.testi-bridge-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.testi-bridge-fade.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Tablet */
@media (max-width: 1024px) {
    .testimonial-grid {
        column-count: 2;
    }

    .section-title {
        font-size: 44px;
        line-height: 50px;
    }
}

/* Mobile */
@media (max-width: 768px) {
    .testimonial-section {
        padding: 50px 12px;
    }

    .testimonial-grid {
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

    .testimonial-grid::-webkit-scrollbar {
        display: none;
    }

    .title-card {
        flex: 0 0 300px;
        scroll-snap-align: center;
        opacity: 1;
        transform: none;
        margin-bottom: 0;
        order: 0;
    }

    .testimonial-card {
        flex: 0 0 300px;
        scroll-snap-align: center;
        opacity: 1;
        transform: none;
        margin-bottom: 0;
    }

    .testimonial-card.highlighted {
        flex: 0 0 310px;
        margin: 0;
        padding: 30px;
    }

    .section-title {
        font-size: 40px;
        line-height: 46px;
    }

    .testimonial-avatar {
        width: 100px;
        height: 100px;
    }

    .swipe-indicator {
        display: flex;
    }

    .swipe-dots {
        display: flex;
    }

    .testi-bridge {
        padding: 40px 12px;
    }

    .testi-bridge .bridge-caveat {
        font-size: 24px;
    }

    .testi-bridge .bridge-body {
        font-size: 17px;
    }
}
`;
    document.head.appendChild(style);
})();

// ======== RENDERER ========
(function() {
    // ======== DATA ========
    var data = {
        // Section Header
        label: "TESTIMONIALS",
        titleLine1: "Was meine",
        titleLine2: "Coachees",
        titleLine3: "sagen",

        // =============================================
        // TESTIMONIALS LISTE
        // =============================================
        items: [
            {
                // Position 1 (3. gelesen) - mobileOrder: 3
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/69739098a7332_Anna.png",
                name: "Anna Herpel",
                role: "Coach, \u00c4rztin",
                quote: "Neben Herzensw\u00e4rme und bedingungsloser Annahme zeichnet ihn seine treffsichere Analyse, seine spirituelle Anbindung ans H\u00f6here, welche er in Alltagstipps einflie\u00dfen l\u00e4sst, und die F\u00e4higkeit, sich in menschliche H\u00f6hen und Tiefen zu bewegen aus. Absolut empfehlenswert!",
                highlighted: false,
                mobileOrder: 3
            },
            {
                // Position 2 (6. gelesen) - HIGHLIGHTED - mobileOrder: 6
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/697390a0449e4_Julia.png",
                name: "Julia Adam",
                role: "Massagetherapeutin & Content Creator",
                quote: "Steven hat ein gro\u00dfes Talent darin, mir liebevoll meine inneren Themen aufzuzeigen und mich zu begleiten, meine eigene St\u00e4rke zu finden. Seine intelligenten Fragen bringen mich zum tieferen Nachdenken: Was ist mein Weg? Wie kann ich ihn gehen? Was darf ich daf\u00fcr lernen?",
                highlighted: true,
                mobileOrder: 6
            },
            {
                // Position 3 (1. gelesen) - HIGHLIGHTED - mobileOrder: 1
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/6973908ac3e4b_Maya.png",
                name: "Maya Devi",
                role: "Coachin & Singkreisleiterin",
                quote: "Steven ist einer der inspirierendsten Menschen, die ich kennengelernt habe. Ich habe gelernt, Verantwortung zu \u00fcbernehmen f\u00fcr mein Wirken und Schatten integriert, die mich bisher davon abgehalten haben, meine Gaben in die Welt zu bringen. Er ist liebevoll, aufrichtig, sieht dich und dein Potenzial und hilft dir, es zu entfalten.",
                highlighted: true,
                mobileOrder: 1
            },
            {
                // Position 4 (4. gelesen) - mobileOrder: 4
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/697390906210e_Simon.png",
                name: "Simon Kocksch",
                role: "Physiotherapeut",
                quote: "In einer Lebensphase voller Chaos hat Steven mir geholfen, die L\u00fccken zwischen meinen Gedanken zu schlie\u00dfen. Durch ihn ist mir klar geworden, dass es m\u00f6glich ist, die Distanz zwischen Gef\u00fchl und Reaktion zu vergr\u00f6\u00dfern. Dadurch treffe ich Entscheidungen, die mich meinen Zielen n\u00e4her bringen.",
                highlighted: false,
                mobileOrder: 4
            },
            {
                // Position 5 (7. gelesen) - mobileOrder: 7
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/697390a4df5d7_Natasha.png",
                name: "Natascha",
                role: "Musikp\u00e4dagogin",
                quote: "Ich mag an dir deine ruhige, freundliche und klare Art. Du bist f\u00fcr mich ein Vorbild in Sachen Selbstliebe, jemand, der schon so manche H\u00fcrde genommen hat auf dem Weg der Innenarbeit. Ich erlebe dich als einen Menschen, dem es am Herzen liegt, anderen auf ihrem Weg zu helfen.",
                highlighted: false,
                mobileOrder: 7
            },
            {
                // Position 6 (2. gelesen) - mobileOrder: 2
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/697390aa98acb_Sabrina.png",
                name: "Dr. Sabrina Schmitz",
                role: "Coachin, Heilbegleiterin",
                quote: "An Steven ist wunderbar, dass er so klar und mit der Absicht von Liebe spiegelt, was in mir los ist. Er ist ein geduldiger, zuversichtlicher und sehr angebundener Lehrer f\u00fcr das Leben, Beziehungen und spirituelle Dimensionen. Gro\u00dfe Kennenlernempfehlung mit Lebensbereicherungspotential.",
                highlighted: false,
                mobileOrder: 2
            },
            {
                // Position 7 (5. gelesen) - HIGHLIGHTED - mobileOrder: 5
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/6973909cab82e_Henry.png",
                name: "Henry",
                role: "Coach, Ex-Banker",
                quote: "Ich sch\u00e4tze Stevens F\u00e4higkeit, aktiv und mit offenem Herzen zuzuh\u00f6ren. Er hat mir geholfen, meine eigene psychologische Struktur besser zu begreifen und zu erkennen, wo meine Entwicklungspunkte liegen. Steven ist eine Inspiration, weil er innere Arbeit mit einer gelassenen Haltung verbindet.",
                highlighted: true,
                mobileOrder: 5
            },
            {
                // Position 8 (8. gelesen) - Placeholder - mobileOrder: 8
                image: "https://placehold.co/150x150/2D2726/BC8034?text=?",
                name: "Michael B.",
                role: "Gr\u00fcnder & CEO",
                quote: "Die Kombination aus spiritueller Tiefe und praktischer Umsetzung ist einzigartig. Genau das, was ich gesucht habe.",
                highlighted: false,
                mobileOrder: 8
            }
        ]
    };

    // Build section HTML structure
    var sectionEl = document.createElement('section');
    sectionEl.className = 'testimonial-section';

    var containerEl = document.createElement('div');
    containerEl.className = 'testimonial-container';

    var grid = document.createElement('div');
    grid.className = 'testimonial-grid';
    grid.id = 'testimonialGrid';

    var swipeIndicator = document.createElement('div');
    swipeIndicator.className = 'swipe-indicator';
    swipeIndicator.innerHTML = '<div class="swipe-indicator-inner"><span class="swipe-arrow left">\u2190</span><span class="swipe-text">Wischen</span><span class="swipe-arrow right">\u2192</span></div>';

    var dotsContainer = document.createElement('div');
    dotsContainer.className = 'swipe-dots';
    dotsContainer.id = 'swipeDots';

    containerEl.appendChild(grid);
    containerEl.appendChild(swipeIndicator);
    containerEl.appendChild(dotsContainer);
    sectionEl.appendChild(containerEl);

    // Container-aware insertion
    var target = window.__SS_CONTAINER || document.body;
    target.appendChild(sectionEl);

    // Star SVG
    var starSVG = '<svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';

    // Arrow SVG
    var arrowSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';

    // Create Title Card
    var titleCard = document.createElement('div');
    titleCard.className = 'title-card';
    titleCard.style.order = '0';
    titleCard.innerHTML =
        '<div class="section-label">' + data.label + '</div>' +
        '<h2 class="section-title">' +
            '<span class="light">' + data.titleLine1 + '</span>' +
            '<span class="light">' + data.titleLine2 + '</span>' +
            '<span class="bold">' + data.titleLine3 + '</span>' +
        '</h2>' +
        '<div class="title-arrow">' + arrowSVG + '</div>';
    grid.appendChild(titleCard);

    // Create Testimonial Cards with mobile order
    data.items.forEach(function(item, index) {
        var card = document.createElement('div');
        card.className = 'testimonial-card' + (item.highlighted ? ' highlighted' : '');
        card.style.order = item.mobileOrder || (index + 1);
        card.innerHTML =
            '<div class="testimonial-author">' +
                '<img src="' + item.image + '" alt="' + item.name + '" class="testimonial-avatar">' +
                '<div class="testimonial-info">' +
                    '<span class="testimonial-name">' + item.name + '</span>' +
                    '<span class="testimonial-role">' + item.role + '</span>' +
                    '<div class="testimonial-stars">' +
                        starSVG + starSVG + starSVG + starSVG + starSVG +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<p class="testimonial-quote">"' + item.quote + '"</p>';
        grid.appendChild(card);
    });

    // Create Swipe Dots (title + testimonials)
    var totalItems = data.items.length + 1;
    for (var i = 0; i < totalItems; i++) {
        var dot = document.createElement('span');
        dot.className = 'swipe-dot' + (i === 0 ? ' active' : '');
        dotsContainer.appendChild(dot);
    }

    // Mobile swipe dots indicator
    var dots = dotsContainer.querySelectorAll('.swipe-dot');
    grid.addEventListener('scroll', function() {
        var scrollLeft = grid.scrollLeft;
        var cardWidth = 300 + 12;
        var activeIndex = Math.round(scrollLeft / cardWidth);

        for (var j = 0; j < dots.length; j++) {
            if (j === activeIndex) {
                dots[j].classList.add('active');
            } else {
                dots[j].classList.remove('active');
            }
        }
    });

    // Scroll reveal animation
    var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

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
    }, observerOptions);

    // Observe all cards
    var allCards = sectionEl.querySelectorAll('.title-card, .testimonial-card');
    for (var k = 0; k < allCards.length; k++) {
        observer.observe(allCards[k]);
    }
})();

// ======== BRIDGE TEXT: Testimonials -> F\u00fcr Wen ========
(function() {
    var bridge = document.createElement('div');
    bridge.className = 'testi-bridge testi-bridge-fade';
    bridge.innerHTML = '<span class="bridge-caveat">Mein Ansatz ist nicht f\u00fcr jeden.</span><p class="bridge-body">Bevor du dich entscheidest - ein ehrlicher Selbst-Check.</p>';

    // Container-aware insertion
    var target = window.__SS_CONTAINER || document.body;
    target.appendChild(bridge);

    var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
        });
    }, { threshold: 0.1 });
    obs.observe(bridge);
})();

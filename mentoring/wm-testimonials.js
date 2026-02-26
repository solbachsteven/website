// Win\u00b3 Mentoring Landingpage - Testimonials Section (Standalone)
// Masonry Grid mit Title Card, Mobile Swipe, Dots
// Loaded via: <script src="https://solbachsteven.github.io/website/mentoring/wm-testimonials.js"></script>
(function() {
    if (window.__WM_TESTIMONIALS_LOADED) return;
    window.__WM_TESTIMONIALS_LOADED = true;

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

    // === TESTIMONIALS CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wm-testimonials');
    style.textContent = `
/* ======== TESTIMONIALS SECTION ======== */
.wm-testimonials {
    padding: 80px 0;
    background: transparent;
}
.wm-testimonials-container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
}
.wm-testi-grid {
    column-count: 3;
    column-gap: 20px;
    width: 100%;
}

/* Title Card */
.wm-testi-title-card {
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
.wm-testi-title-card.visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.wm-testi-label {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #BC8034;
    margin-bottom: 10px;
}
.wm-testi-section-title {
    font-size: 54px;
    line-height: 60px;
}
.wm-testi-section-title .light {
    font-weight: 400;
    display: block;
}
.wm-testi-section-title .bold {
    font-weight: 600;
    display: block;
    color: #BC8034;
}

/* Animated Arrow */
.wm-testi-arrow {
    display: flex;
    align-items: center;
    margin-top: 20px;
    color: #BC8034;
}
.wm-testi-arrow svg {
    width: 40px;
    height: 40px;
    animation: wmArrowBounce 1.5s ease-in-out infinite;
}
@keyframes wmArrowBounce {
    0%, 100% { transform: translateX(0); opacity: 0.6; }
    50% { transform: translateX(10px); opacity: 1; }
}

/* Testimonial Cards */
.wm-testi-card {
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
    border: 1px solid rgba(188, 128, 52, 0.08);
}
.wm-testi-card.visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
}
.wm-testi-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}
.wm-testi-card.visible:hover {
    transform: translateY(-5px);
}

/* Highlighted Card */
.wm-testi-card.wm-testi-highlighted {
    background: #F4F0EC;
    color: #2C2726;
    padding: 35px;
    margin-left: -5px;
    margin-right: -5px;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
    border: none;
}
.wm-testi-card.wm-testi-highlighted .wm-testi-role {
    color: #2C2726;
    opacity: 0.7;
}
.wm-testi-card.wm-testi-highlighted .wm-testi-quote {
    color: #2C2726;
    opacity: 0.9;
}
.wm-testi-card.wm-testi-highlighted .wm-testi-star {
    color: #BC8034;
}

/* Author */
.wm-testi-author {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 20px;
}
.wm-testi-avatar {
    width: 150px;
    height: 100px;
    border-radius: 12px;
    object-fit: cover;
    background: #2C2726;
    flex-shrink: 0;
}
.wm-testi-card.wm-testi-highlighted .wm-testi-avatar {
    background: #2C2726;
}
.wm-testi-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-top: 5px;
}
.wm-testi-name {
    font-weight: 600;
    font-size: 16px;
}
.wm-testi-role {
    font-size: 14px;
    font-weight: 300;
    opacity: 0.6;
}

/* Stars */
.wm-testi-stars {
    display: flex;
    gap: 3px;
    margin-top: 8px;
}
.wm-testi-star {
    color: #BC8034;
    width: 18px;
    height: 18px;
}

/* Quote */
.wm-testi-quote {
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    opacity: 0.85;
}

/* Mobile Swipe Indicator */
.wm-testi-swipe-indicator {
    display: none;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    color: #FFFFFF;
    opacity: 0.6;
    font-size: 14px;
    width: 100%;
}
.wm-testi-swipe-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
}
.wm-testi-swipe-arrow {
    font-size: 18px;
    width: 24px;
    text-align: center;
    display: inline-block;
}
.wm-testi-swipe-text {
    padding: 0 4px;
}
.wm-testi-swipe-arrow.left {
    animation: wmSwipeLeft 1.5s ease-in-out infinite;
}
.wm-testi-swipe-arrow.right {
    animation: wmSwipeRight 1.5s ease-in-out infinite;
}
@keyframes wmSwipeLeft {
    0%, 100% { transform: translateX(0); opacity: 0.4; }
    50% { transform: translateX(-8px); opacity: 1; }
}
@keyframes wmSwipeRight {
    0%, 100% { transform: translateX(0); opacity: 0.4; }
    50% { transform: translateX(8px); opacity: 1; }
}

.wm-testi-dots {
    display: none;
    justify-content: center;
    gap: 8px;
    margin-top: 15px;
}
.wm-testi-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #2C2726;
    transition: background 0.3s ease, transform 0.3s ease;
}
.wm-testi-dot.active {
    background: #BC8034;
    transform: scale(1.2);
}

/* Tablet */
@media (max-width: 1024px) {
    .wm-testi-grid { column-count: 2; }
    .wm-testi-section-title { font-size: 44px; line-height: 50px; }
}

/* Mobile */
@media (max-width: 768px) {
    .wm-testimonials { padding: 50px 12px; }
    .wm-testi-grid {
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
    .wm-testi-grid::-webkit-scrollbar { display: none; }
    .wm-testi-title-card {
        flex: 0 0 300px;
        scroll-snap-align: center;
        opacity: 1;
        transform: none;
        margin-bottom: 0;
        order: 0;
    }
    .wm-testi-card {
        flex: 0 0 300px;
        scroll-snap-align: center;
        opacity: 1;
        transform: none;
        margin-bottom: 0;
    }
    .wm-testi-card.wm-testi-highlighted {
        flex: 0 0 310px;
        margin: 0;
        padding: 30px;
    }
    .wm-testi-section-title { font-size: 40px; line-height: 46px; }
    .wm-testi-avatar { width: 100px; height: 100px; }
    .wm-testi-swipe-indicator { display: flex; }
    .wm-testi-dots { display: flex; }
}
`;
    document.head.appendChild(style);

    // === SVGs ===
    var starSVG = '<svg class="wm-testi-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    var arrowSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';

    // === DATA ===
    var data = {
        label: "TESTIMONIALS",
        titleLine1: "Was meine",
        titleLine2: "Coachees",
        titleLine3: "sagen",
        items: [
            {
                image: "https://solbachsteven.github.io/website/images/simon.jpg",
                name: "Simon Kocksch",
                role: "Physiotherapeut",
                quote: "In einer Lebensphase voller Chaos hat Steven mir geholfen, die L\u00fccken zwischen meinen Gedanken zu schlie\u00dfen. Durch ihn ist mir klar geworden, dass es m\u00f6glich ist, die Distanz zwischen Gef\u00fchl und Reaktion zu vergr\u00f6\u00dfern. Dadurch treffe ich Entscheidungen, die mich meinen Zielen n\u00e4her bringen.",
                highlighted: true,
                mobileOrder: 1
            },
            {
                image: "https://solbachsteven.github.io/website/images/anna.jpg",
                name: "Anna Herpel",
                role: "Coach, \u00c4rztin",
                quote: "Neben Herzensw\u00e4rme und bedingungsloser Annahme zeichnet ihn seine treffsichere Analyse, seine spirituelle Anbindung ans H\u00f6here, welche er in Alltagstipps einflie\u00dfen l\u00e4sst, und die F\u00e4higkeit, sich in menschliche H\u00f6hen und Tiefen zu bewegen aus. Absolut empfehlenswert!",
                highlighted: false,
                mobileOrder: 2
            },
            {
                image: "https://solbachsteven.github.io/website/images/natascha.jpg",
                name: "Natascha",
                role: "Musikp\u00e4dagogin",
                quote: "Ich mag an dir deine ruhige, freundliche und klare Art. Du bist f\u00fcr mich ein Vorbild in Sachen Selbstliebe, jemand, der schon so manche H\u00fcrde genommen hat auf dem Weg der Innenarbeit. Ich erlebe dich als einen Menschen, dem es am Herzen liegt, anderen auf ihrem Weg zu helfen.",
                highlighted: false,
                mobileOrder: 3
            },
            {
                image: "https://solbachsteven.github.io/website/images/julia.jpg",
                name: "Julia Adam",
                role: "Massagetherapeutin & Content Creator",
                quote: "Steven hat ein gro\u00dfes Talent darin, mir liebevoll meine inneren Themen aufzuzeigen und mich zu begleiten, meine Schatten zu erkennen. Durch seine einf\u00fchlsame und zugleich direkte Art hat er mir geholfen, ehrlich hinzuschauen.",
                highlighted: false,
                mobileOrder: 4
            },
            {
                image: "https://solbachsteven.github.io/website/images/sabrina.jpg",
                name: "Dr. Sabrina Schmitz",
                role: "Coachin, Heilbegleiterin",
                quote: "An Steven ist wunderbar, dass er so klar und deutlich spricht - und dadurch genau die blinden Flecken trifft, die man alleine nicht sieht. Gleichzeitig strahlt er eine Ruhe und W\u00e4rme aus, in der man sich sicher f\u00fchlt.",
                highlighted: false,
                mobileOrder: 5
            },
            {
                image: "https://solbachsteven.github.io/website/images/sophie.jpg",
                name: "Sophie",
                role: "Psychologiestudentin",
                quote: "Stevens Coaching hat mir geholfen, meine St\u00e4rken zu erkennen und Klarheit \u00fcber meinen Weg zu gewinnen. Seine authentische Art macht es leicht, sich zu \u00f6ffnen.",
                highlighted: true,
                mobileOrder: 6
            },
            {
                image: "https://solbachsteven.github.io/website/images/stefan.jpg",
                name: "Stefan",
                role: "Unternehmer",
                quote: "Was mich beeindruckt hat: Steven gibt keine fertigen Antworten. Er stellt die Fragen, die dich selbst zur Antwort f\u00fchren. Das ist nachhaltiger als jeder Ratschlag.",
                highlighted: false,
                mobileOrder: 7
            },
            {
                image: "https://solbachsteven.github.io/website/images/maria.jpg",
                name: "Maria",
                role: "Lehrerin",
                quote: "Ich war skeptisch, ob Coaching etwas f\u00fcr mich ist. Nach den Sessions mit Steven wei\u00df ich: Es war eine der besten Entscheidungen meines Lebens.",
                highlighted: false,
                mobileOrder: 8
            }
        ]
    };

    // === BUILD DOM ===
    var sectionEl = document.createElement('section');
    sectionEl.className = 'wm-testimonials';

    var containerEl = document.createElement('div');
    containerEl.className = 'wm-testimonials-container';

    var grid = document.createElement('div');
    grid.className = 'wm-testi-grid';

    var swipeIndicator = document.createElement('div');
    swipeIndicator.className = 'wm-testi-swipe-indicator';
    swipeIndicator.innerHTML = '<div class="wm-testi-swipe-inner"><span class="wm-testi-swipe-arrow left">\u2190</span><span class="wm-testi-swipe-text">Wischen</span><span class="wm-testi-swipe-arrow right">\u2192</span></div>';

    var dotsContainer = document.createElement('div');
    dotsContainer.className = 'wm-testi-dots';

    containerEl.appendChild(grid);
    containerEl.appendChild(swipeIndicator);
    containerEl.appendChild(dotsContainer);
    sectionEl.appendChild(containerEl);

    // Title Card
    var titleCard = document.createElement('div');
    titleCard.className = 'wm-testi-title-card';
    titleCard.style.order = '0';
    titleCard.innerHTML =
        '<div class="wm-testi-label">' + data.label + '</div>' +
        '<h2 class="wm-testi-section-title">' +
            '<span class="light">' + data.titleLine1 + '</span>' +
            '<span class="light">' + data.titleLine2 + '</span>' +
            '<span class="bold">' + data.titleLine3 + '</span>' +
        '</h2>' +
        '<div class="wm-testi-arrow">' + arrowSVG + '</div>';
    grid.appendChild(titleCard);

    // Testimonial Cards
    data.items.forEach(function(item, index) {
        var card = document.createElement('div');
        card.className = 'wm-testi-card' + (item.highlighted ? ' wm-testi-highlighted' : '');
        card.style.order = item.mobileOrder || (index + 1);
        card.innerHTML =
            '<div class="wm-testi-author">' +
                '<img src="' + item.image + '" alt="' + item.name + '" class="wm-testi-avatar">' +
                '<div class="wm-testi-info">' +
                    '<span class="wm-testi-name">' + item.name + '</span>' +
                    '<span class="wm-testi-role">' + item.role + '</span>' +
                    '<div class="wm-testi-stars">' +
                        starSVG + starSVG + starSVG + starSVG + starSVG +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<p class="wm-testi-quote">\u201e' + item.quote + '\u201c</p>';
        grid.appendChild(card);
    });

    // Swipe Dots
    var totalItems = data.items.length + 1;
    for (var i = 0; i < totalItems; i++) {
        var dot = document.createElement('span');
        dot.className = 'wm-testi-dot' + (i === 0 ? ' active' : '');
        dotsContainer.appendChild(dot);
    }

    // === DOM INSERTION ===
    var pageWrapper = document.querySelector('.wm-page');
    if (!pageWrapper) {
        pageWrapper = document.createElement('div');
        pageWrapper.className = 'wm-page';
        var target = document.currentScript || document.scripts[document.scripts.length - 1];
        target.parentNode.insertBefore(pageWrapper, target.nextSibling);
    }
    pageWrapper.appendChild(sectionEl);

    // Mobile swipe dots
    var dots = dotsContainer.querySelectorAll('.wm-testi-dot');
    grid.addEventListener('scroll', function() {
        var scrollLeft = grid.scrollLeft;
        var cardWidth = 300 + 12;
        var activeIndex = Math.round(scrollLeft / cardWidth);
        for (var j = 0; j < dots.length; j++) {
            dots[j].classList.toggle('active', j === activeIndex);
        }
    });

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

    // Masonry reveal (desktop)
    var masonryObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var delay = Array.from(grid.children).indexOf(entry.target) * 120;
                setTimeout(function() {
                    entry.target.classList.add('visible');
                }, delay);
                masonryObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    var allCards = sectionEl.querySelectorAll('.wm-testi-title-card, .wm-testi-card');
    for (var k = 0; k < allCards.length; k++) {
        masonryObserver.observe(allCards[k]);
    }
})();

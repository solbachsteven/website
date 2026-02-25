// Win³ Kurs Landingpage - Testimonials Section (Standalone)
// Übernimmt Template-Struktur von Website testimonials.js mit Platzhalter-Daten
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

    // === TESTIMONIALS CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wk-testimonials');
    style.textContent = `
/* ======== TESTIMONIALS SECTION ======== */
.wk-testimonials {
    padding: 100px 40px;
    background: #1E1C1B;
}
.wk-testimonials-inner {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
}

/* Grid */
.wk-testimonials-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 16px;
}

/* Card */
.wk-testimonial-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 20px;
    padding: 32px 28px;
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.wk-testimonial-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
}

/* Highlighted Card */
.wk-testimonial-card.wk-highlighted {
    background: #F4F0EC;
    border-color: transparent;
}
.wk-testimonial-card.wk-highlighted .wk-testimonial-name { color: #2D2726; }
.wk-testimonial-card.wk-highlighted .wk-testimonial-role { color: rgba(45, 39, 38, 0.6); }
.wk-testimonial-card.wk-highlighted .wk-testimonial-quote { color: rgba(45, 39, 38, 0.85); }

/* Author Row */
.wk-testimonial-author {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 20px;
}

/* Avatar */
.wk-testimonial-avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: rgba(188, 128, 52, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
}
.wk-testimonial-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.wk-testimonial-avatar svg {
    width: 28px;
    height: 28px;
}

/* Name & Role */
.wk-testimonial-name {
    font-size: 16px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 1.3;
}
.wk-testimonial-role {
    font-size: 13px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.5);
}

/* Stars */
.wk-testimonial-stars {
    display: flex;
    gap: 2px;
    margin-bottom: 16px;
}
.wk-testimonial-stars svg {
    width: 16px;
    height: 16px;
    fill: #BC8034;
}

/* Quote */
.wk-testimonial-quote {
    font-size: 15px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.75);
    line-height: 1.7;
    font-style: italic;
}

/* ======== RESPONSIVE ======== */
@media (max-width: 768px) {
    .wk-testimonials { padding: 60px 16px; }
    .wk-testimonials-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    .wk-testimonial-card { padding: 28px 24px; }
}
`;
    document.head.appendChild(style);

    // === SVG ===
    var starSVG = '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    var stars5 = starSVG + starSVG + starSVG + starSVG + starSVG;
    var avatarSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="rgba(188,128,52,0.5)" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>';

    // === DATA (Platzhalter - werden spaeter ersetzt) ===
    var data = {
        label: "STIMMEN",
        headline: "Was Teilnehmer sagen",
        subheadline: "Echte Menschen, echte Erfahrungen.",
        testimonials: [
            {
                name: "Maya Devi",
                role: "Coachin & Singkreisleiterin",
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/6973908ac3e4b_Maya.png",
                quote: "Steven ist einer der inspirierendsten Menschen, die ich kennengelernt habe. Er ist liebevoll, aufrichtig, sieht dich und dein Potenzial und hilft dir, es zu entfalten.",
                highlighted: true
            },
            {
                name: "Simon Kocksch",
                role: "Physiotherapeut",
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/697390906210e_Simon.png",
                quote: "Durch Steven ist mir klar geworden, dass es m\u00f6glich ist, die Distanz zwischen Gef\u00fchl und Reaktion zu vergr\u00f6\u00dfern. Dadurch treffe ich Entscheidungen, die mich meinen Zielen n\u00e4her bringen.",
                highlighted: false
            },
            {
                name: "Henry",
                role: "Coach, Ex-Banker",
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/6973909cab82e_Henry.png",
                quote: "Steven hat mir geholfen, meine eigene psychologische Struktur besser zu begreifen. Er ist eine Inspiration, weil er innere Arbeit mit einer gelassenen Haltung verbindet.",
                highlighted: false
            },
            {
                name: "Dr. Sabrina Schmitz",
                role: "Coachin & Heilbegleiterin",
                image: "https://d1yei2z3i6k35z.cloudfront.net/thumb_150/697390aa98acb_Sabrina.png",
                quote: "Steven spiegelt mit Klarheit und Liebe, was in dir los ist. Ein geduldiger, zuversichtlicher Lehrer f\u00fcr das Leben, Beziehungen und spirituelle Dimensionen.",
                highlighted: true
            }
        ]
    };

    // === RENDER ===
    var cardsHTML = '';
    for (var i = 0; i < data.testimonials.length; i++) {
        var t = data.testimonials[i];
        var avatarHTML = t.image
            ? '<img src="' + t.image + '" alt="' + t.name + '">'
            : avatarSVG;
        cardsHTML +=
            '<div class="wk-testimonial-card wk-fade' + (t.highlighted ? ' wk-highlighted' : '') + '">' +
                '<div class="wk-testimonial-author">' +
                    '<div class="wk-testimonial-avatar">' + avatarHTML + '</div>' +
                    '<div>' +
                        '<div class="wk-testimonial-name">' + t.name + '</div>' +
                        '<div class="wk-testimonial-role">' + t.role + '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="wk-testimonial-stars">' + stars5 + '</div>' +
                '<div class="wk-testimonial-quote">\u201e' + t.quote + '\u201c</div>' +
            '</div>';
    }

    var sectionHTML =
        '<section class="wk-testimonials">' +
            '<div class="wk-testimonials-inner">' +
                '<div class="wk-label wk-fade">' + data.label + '</div>' +
                '<h2 class="wk-section-headline wk-fade">' + data.headline + '</h2>' +
                '<div class="wk-section-subheadline wk-fade">' + data.subheadline + '</div>' +
                '<div class="wk-testimonials-grid">' + cardsHTML + '</div>' +
            '</div>' +
        '</section>';

    // === DOM INSERTION ===
    var pageWrapper = document.querySelector('.wk-page');
    if (!pageWrapper) {
        pageWrapper = document.createElement('div');
        pageWrapper.className = 'wk-page';
        var target = document.currentScript || document.scripts[document.scripts.length - 1];
        target.parentNode.insertBefore(pageWrapper, target.nextSibling);
    }
    var temp = document.createElement('div');
    temp.innerHTML = sectionHTML;
    while (temp.firstChild) { pageWrapper.appendChild(temp.firstChild); }

    // === SCROLL REVEAL ===
    if (!window.__WK_REVEAL_INIT) {
        window.__WK_REVEAL_INIT = true;
        window.__wkInitReveal = function(container) {
            var fadeEls = container.querySelectorAll('.wk-fade:not(.visible)');
            if ('IntersectionObserver' in window) {
                var observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            var parent = entry.target.parentElement;
                            var siblings = parent.querySelectorAll('.wk-fade');
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
    setTimeout(function() { window.__wkInitReveal(document.querySelector('.wk-page')); }, 100);
})();

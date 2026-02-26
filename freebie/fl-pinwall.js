// Freebie Landingpage - Pinwall Section (Standalone)
// Social Proof: Echte Saetze von Kursteilnehmern
// Loaded via: <script src="https://solbachsteven.github.io/website/freebie/fl-pinwall.js"></script>
(function() {
    if (window.__FL_PINWALL_LOADED) return;
    window.__FL_PINWALL_LOADED = true;

    // === SHARED RESOURCES (idempotent) ===
    if (!window.__FL_SHARED) {
        window.__FL_SHARED = true;
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap';
        document.head.appendChild(fontLink);

        var baseStyle = document.createElement('style');
        baseStyle.setAttribute('data-section', 'fl-base');
        baseStyle.textContent = `
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
.fl-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.fl-fade.visible {
    opacity: 1;
    transform: translateY(0);
}
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

    // === PINWALL CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'fl-pinwall');
    style.textContent = `
/* ======== PINWALL SECTION (Social Proof) ======== */
.fl-pinwall {
    padding: 100px 40px;
    text-align: center;
    background: #1A1A1A;
}
.fl-pinwall-inner {
    max-width: 960px;
    margin: 0 auto;
}
.fl-pinwall-headline {
    font-size: 42px;
    font-weight: 600;
    line-height: 1.2;
    color: #FFFFFF;
    margin-bottom: 12px;
}
.fl-pinwall-subtext {
    font-family: 'Caveat', cursive;
    font-size: 24px;
    color: rgba(255,255,255,0.5);
    margin-bottom: 56px;
}

/* Masonry Grid */
.fl-pinwall-grid {
    column-count: 3;
    column-gap: 18px;
    width: 100%;
    text-align: left;
}

/* Card */
.fl-pinwall-card {
    background: linear-gradient(135deg, #2A2A2A 0%, #242424 100%);
    border-radius: 16px;
    padding: 28px 28px 24px;
    break-inside: avoid;
    margin-bottom: 18px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    transform: translateY(15px);
    border: 1px solid rgba(188,128,52,0.08);
}
.fl-pinwall-card.visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease;
}
@media (hover: hover) {
    .fl-pinwall-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 16px 40px rgba(0,0,0,0.35);
    }
    .fl-pinwall-card.visible:hover {
        transform: translateY(-4px);
    }
}

/* Name */
.fl-pinwall-card-name {
    font-family: 'Caveat', cursive;
    font-size: 24px;
    font-weight: 500;
    color: #BC8034;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1.2;
}

/* Toggle Icon */
.fl-pinwall-card-toggle {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid rgba(188,128,52,0.3);
    background: transparent;
    flex-shrink: 0;
    margin-left: 10px;
    position: relative;
    transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
}
.fl-pinwall-card-toggle::before,
.fl-pinwall-card-toggle::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background: #BC8034;
    border-radius: 1px;
    transition: transform 0.3s ease, opacity 0.3s ease;
}
.fl-pinwall-card-toggle::before {
    width: 10px;
    height: 1.5px;
    transform: translate(-50%, -50%);
}
.fl-pinwall-card-toggle::after {
    width: 1.5px;
    height: 10px;
    transform: translate(-50%, -50%);
}
@media (hover: hover) {
    .fl-pinwall-card:hover .fl-pinwall-card-toggle {
        border-color: rgba(188,128,52,0.6);
    }
}
.fl-pinwall-card.open .fl-pinwall-card-toggle {
    border-color: #BC8034;
    background: rgba(188,128,52,0.1);
    transform: rotate(90deg);
}
.fl-pinwall-card.open .fl-pinwall-card-toggle::after {
    opacity: 0;
    transform: translate(-50%, -50%) scaleY(0);
}

/* Labels und Texte */
.fl-pinwall-card-label {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin-bottom: 6px;
    opacity: 0.9;
}
.fl-pinwall-card-label.gold { color: #BC8034; }
.fl-pinwall-card-label.teal { color: #7FB3B3; }
.fl-pinwall-card-label.rose { color: #C87070; }

.fl-pinwall-card-satz {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.6;
    color: #FFFFFF;
    opacity: 0.85;
    margin-bottom: 12px;
}
.fl-pinwall-card-satz:last-child { margin-bottom: 0; }

/* Akkordeon */
.fl-pinwall-card-hidden {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.4s ease, opacity 0.3s ease, margin 0.3s ease;
    margin-top: 0;
}
.fl-pinwall-card.open .fl-pinwall-card-hidden {
    max-height: 600px;
    opacity: 1;
    margin-top: 12px;
}

.fl-pinwall-card-divider {
    height: 1px;
    background: linear-gradient(90deg, rgba(188,128,52,0.3) 0%, rgba(188,128,52,0.05) 100%);
    margin: 0 0 14px 0;
}

/* Badge */
.fl-pinwall-card-badge {
    position: absolute;
    bottom: 10px;
    right: 14px;
    font-size: 9px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #FFFFFF;
    opacity: 0.25;
}

/* Counter */
.fl-pinwall-counter {
    text-align: center;
    font-size: 13px;
    font-weight: 300;
    color: #FFFFFF;
    opacity: 0.4;
    margin-top: 20px;
    margin-bottom: 4px;
    letter-spacing: 0.5px;
}

/* Mehr laden */
.fl-pinwall-loadmore {
    display: block;
    margin: 28px auto 0;
    padding: 14px 44px;
    background: transparent;
    color: #BC8034;
    border: 1px solid rgba(188,128,52,0.3);
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    letter-spacing: 0.5px;
    transition: background 0.3s, border-color 0.3s, transform 0.2s;
}
@media (hover: hover) {
    .fl-pinwall-loadmore:hover {
        background: rgba(188,128,52,0.08);
        border-color: #BC8034;
        transform: translateY(-1px);
    }
}

/* CTA unter Pinwand */
.fl-pinwall-cta {
    margin-top: 48px;
}

/* ======== PINWALL RESPONSIVE - TABLET ======== */
@media (max-width: 1024px) {
    .fl-pinwall { padding: 80px 30px; }
    .fl-pinwall-headline { font-size: 36px; }
    .fl-pinwall-grid { column-count: 2; column-gap: 14px; }
}

/* ======== PINWALL RESPONSIVE - MOBILE ======== */
@media (max-width: 768px) {
    .fl-pinwall { padding: 60px 16px; }
    .fl-pinwall-headline { font-size: 28px; }
    .fl-pinwall-subtext { font-size: 20px; margin-bottom: 36px; }
    .fl-pinwall-grid { column-count: 2; column-gap: 10px; }
    .fl-pinwall-card {
        padding: 16px 16px 14px;
        margin-bottom: 10px;
        border-radius: 12px;
    }
    .fl-pinwall-card-name { font-size: 20px; margin-bottom: 8px; }
    .fl-pinwall-card-label { font-size: 10px; margin-bottom: 3px; letter-spacing: 0.8px; }
    .fl-pinwall-card-satz { font-size: 13px; line-height: 1.5; margin-bottom: 8px; }
    .fl-pinwall-card-toggle { width: 22px; height: 22px; }
    .fl-pinwall-card-toggle::before { width: 8px; }
    .fl-pinwall-card-toggle::after { height: 8px; }
    .fl-pinwall-card-hidden { transition: max-height 0.3s ease, opacity 0.25s ease; }
    .fl-pinwall-loadmore { padding: 12px 32px; font-size: 13px; }
    .fl-pinwall-cta { margin-top: 36px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        headline: "Das sagen Teilnehmer",
        subtext: "Echte S\u00e4tze von echten Menschen - geschrieben am Ende dieses Kurses.",
        cta: "Das will ich auch",
        pageSize: 6
    };

    var COLOR_MAP = {
        rose: '#C87070', orange: '#D4956A', gold: '#BC8034',
        green: '#6BAF7B', teal: '#7FB3B3', indigo: '#7B8FC7', violet: '#B89FD4'
    };

    // === HELPERS ===
    function escapeHtml(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    var allEntries = [];
    var shown = 0;
    var openCards = [];

    function buildCardHTML(e) {
        var nameColor = COLOR_MAP[e.name_color] || COLOR_MAP.gold;
        var badgeHTML = e.is_example ? '<span class="fl-pinwall-card-badge">Beispiel</span>' : '';
        return '<div class="fl-pinwall-card">' +
            badgeHTML +
            '<div class="fl-pinwall-card-name" style="color:' + nameColor + '">' +
                escapeHtml(e.first_name) +
                '<span class="fl-pinwall-card-toggle"></span>' +
            '</div>' +
            '<div class="fl-pinwall-card-satz">' + escapeHtml(e.satz_mission) + '</div>' +
            '<div class="fl-pinwall-card-hidden">' +
                '<div class="fl-pinwall-card-divider"></div>' +
                '<div class="fl-pinwall-card-label teal">Meine Vision</div>' +
                '<div class="fl-pinwall-card-satz">' + escapeHtml(e.satz_vision) + '</div>' +
                '<div class="fl-pinwall-card-divider"></div>' +
                '<div class="fl-pinwall-card-label rose">Mein Warum</div>' +
                '<div class="fl-pinwall-card-satz">' + escapeHtml(e.satz_warum) + '</div>' +
            '</div>' +
        '</div>';
    }

    function toggleCard(card) {
        if (card.classList.contains('open')) {
            card.classList.remove('open');
            openCards = openCards.filter(function(c) { return c !== card; });
        } else {
            if (openCards.length >= 2) {
                openCards[0].classList.remove('open');
                openCards.shift();
            }
            card.classList.add('open');
            openCards.push(card);
        }
    }

    function revealCards(container) {
        var cards = container.querySelectorAll('.fl-pinwall-card:not(.visible)');
        requestAnimationFrame(function() {
            requestAnimationFrame(function() {
                for (var i = 0; i < cards.length; i++) {
                    (function(card, delay) {
                        setTimeout(function() { card.classList.add('visible'); }, delay);
                    })(cards[i], i * 60);
                }
            });
        });
    }

    function showMore(grid) {
        var end = Math.min(shown + data.pageSize, allEntries.length);
        var fragment = '';
        for (var i = shown; i < end; i++) {
            fragment += buildCardHTML(allEntries[i]);
        }
        grid.insertAdjacentHTML('beforeend', fragment);
        shown = end;
        revealCards(grid);

        var counter = document.getElementById('fl-pinwall-counter');
        if (counter) {
            counter.textContent = shown + ' von ' + allEntries.length;
        }
    }

    function renderPinwall(entries, containerEl) {
        if (!entries || entries.length === 0) {
            containerEl.innerHTML = '<div style="text-align:center;padding:40px 0;opacity:0.4;font-size:15px;">Noch keine Eintr\u00e4ge auf der Pinwand.</div>';
            return;
        }
        allEntries = entries;
        shown = 0;
        openCards = [];

        var gridHTML = '<div class="fl-pinwall-grid" id="fl-pinwall-grid"></div>';
        var counterHTML = '<div class="fl-pinwall-counter" id="fl-pinwall-counter"></div>';
        var loadMoreHTML = entries.length > data.pageSize ?
            '<button class="fl-pinwall-loadmore" id="fl-pinwall-loadmore">Mehr anzeigen</button>' : '';

        containerEl.innerHTML = gridHTML + counterHTML + loadMoreHTML;

        var grid = document.getElementById('fl-pinwall-grid');
        showMore(grid);

        grid.addEventListener('click', function(ev) {
            var card = ev.target.closest('.fl-pinwall-card');
            if (card) toggleCard(card);
        });

        var loadMoreBtn = document.getElementById('fl-pinwall-loadmore');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', function() {
                showMore(grid);
                if (shown >= allEntries.length) {
                    loadMoreBtn.style.display = 'none';
                }
            });
        }
    }

    // === RENDER SECTION HTML ===
    var sectionHTML =
        '<section class="fl-pinwall">' +
            '<div class="fl-pinwall-inner">' +
                '<h2 class="fl-pinwall-headline fl-fade">' + data.headline + '</h2>' +
                '<div class="fl-pinwall-subtext fl-fade">' + data.subtext + '</div>' +
                '<div id="fl-pinwall-container" class="fl-fade">' +
                    '<div style="text-align:center;padding:40px 0;opacity:0.4;font-size:15px;">Pinwand wird geladen\u2026</div>' +
                '</div>' +
                '<div class="fl-pinwall-cta fl-fade">' +
                    '<a href="#" class="fl-cta-primary" id="fl-pinwall-cta-btn">' + data.cta + '</a>' +
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
    temp.innerHTML = sectionHTML;
    while (temp.firstChild) {
        pageWrapper.appendChild(temp.firstChild);
    }

    // === FETCH PINWALL DATA ===
    var containerEl = document.getElementById('fl-pinwall-container');
    if (containerEl) {
        fetch('https://win3-community.solbachsteven.workers.dev/pinwall/entries')
        .then(function(res) { return res.json(); })
        .then(function(resData) {
            renderPinwall(resData.entries || [], containerEl);
        })
        .catch(function() {
            containerEl.innerHTML = '<div style="text-align:center;padding:40px 0;opacity:0.4;font-size:15px;">Die Pinwand konnte nicht geladen werden.</div>';
        });
    }

    // === CTA: Scroll to Hero ===
    var ctaBtn = document.getElementById('fl-pinwall-cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function(ev) {
            ev.preventDefault();
            var hero = document.querySelector('.fl-hero');
            if (hero) hero.scrollIntoView({ behavior: 'smooth' });
        });
    }

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
        window.__flInitReveal(document.querySelector('.fl-page'));
    }, 100);
})();

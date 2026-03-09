// Community Pinnwand - Pinwall Section (Standalone)
// Display-only: Zeigt Eintraege an, kein Formular
// Loaded via: <script src="https://stevensolbach.de/community/cp-pinwall.js"></script>
(function() {
    if (window.__CP_PINWALL_LOADED) return;
    window.__CP_PINWALL_LOADED = true;

    // === SHARED RESOURCES (idempotent) ===
    if (!window.__CP_SHARED) {
        window.__CP_SHARED = true;
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap';
        document.head.appendChild(fontLink);

        var baseStyle = document.createElement('style');
        baseStyle.setAttribute('data-section', 'cp-base');
        baseStyle.textContent = `
.cp-page {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;
    background: transparent;
    overflow-x: hidden;
    position: relative;
    z-index: 5;
}
.cp-page *, .cp-page *::before, .cp-page *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.cp-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.cp-fade.visible {
    opacity: 1;
    transform: translateY(0);
}
.cp-cta-primary {
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
.cp-cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(217, 105, 53, 0.4);
}
.cp-trust {
    font-size: 13px;
    font-weight: 300;
    color: rgba(244, 240, 236, 0.5);
    letter-spacing: 0.3px;
}
@media (max-width: 768px) {
    .cp-cta-primary {
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
    style.setAttribute('data-section', 'cp-pinwall');
    style.textContent = `
/* ======== PINWALL SECTION (Community Showcase) ======== */
.cp-pinwall {
    padding: 100px 40px;
    text-align: center;
    background: transparent;
}
.cp-pinwall-inner {
    max-width: 960px;
    margin: 0 auto;
}
.cp-pinwall-headline {
    font-size: 42px;
    font-weight: 600;
    line-height: 1.2;
    color: #FFFFFF;
    margin-bottom: 12px;
}
.cp-pinwall-subtext {
    font-family: 'Caveat', cursive;
    font-size: 24px;
    color: rgba(255,255,255,0.5);
    margin-bottom: 56px;
}

/* Masonry Grid */
.cp-pinwall-grid {
    column-count: 3;
    column-gap: 18px;
    width: 100%;
    text-align: left;
}

/* Card */
.cp-pinwall-card {
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
    position: relative;
}
.cp-pinwall-card.visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease;
}
@media (hover: hover) {
    .cp-pinwall-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 16px 40px rgba(0,0,0,0.35);
    }
    .cp-pinwall-card.visible:hover {
        transform: translateY(-4px);
    }
}

/* Name */
.cp-pinwall-card-name {
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
.cp-pinwall-card-toggle {
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
.cp-pinwall-card-toggle::before,
.cp-pinwall-card-toggle::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background: #BC8034;
    border-radius: 1px;
    transition: transform 0.3s ease, opacity 0.3s ease;
}
.cp-pinwall-card-toggle::before {
    width: 10px;
    height: 1.5px;
    transform: translate(-50%, -50%);
}
.cp-pinwall-card-toggle::after {
    width: 1.5px;
    height: 10px;
    transform: translate(-50%, -50%);
}
@media (hover: hover) {
    .cp-pinwall-card:hover .cp-pinwall-card-toggle {
        border-color: rgba(188,128,52,0.6);
    }
}
.cp-pinwall-card.open .cp-pinwall-card-toggle {
    border-color: #BC8034;
    background: rgba(188,128,52,0.1);
    transform: rotate(90deg);
}
.cp-pinwall-card.open .cp-pinwall-card-toggle::after {
    opacity: 0;
    transform: translate(-50%, -50%) scaleY(0);
}

/* Labels und Texte */
.cp-pinwall-card-label {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin-bottom: 6px;
    opacity: 0.9;
}
.cp-pinwall-card-label.gold { color: #BC8034; }
.cp-pinwall-card-label.teal { color: #7FB3B3; }
.cp-pinwall-card-label.rose { color: #C87070; }

.cp-pinwall-card-satz {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.6;
    color: #FFFFFF;
    opacity: 0.85;
    margin-bottom: 12px;
}
.cp-pinwall-card-satz:last-child { margin-bottom: 0; }

/* Akkordeon */
.cp-pinwall-card-hidden {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.4s ease, opacity 0.3s ease, margin 0.3s ease;
    margin-top: 0;
}
.cp-pinwall-card.open .cp-pinwall-card-hidden {
    max-height: 1500px;
    opacity: 1;
    margin-top: 12px;
}

.cp-pinwall-card-divider {
    height: 1px;
    background: linear-gradient(90deg, rgba(188,128,52,0.3) 0%, rgba(188,128,52,0.05) 100%);
    margin: 0 0 14px 0;
}

/* Badge */
.cp-pinwall-card-badge {
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

/* Founder Card */
.cp-pinwall-card-founder {
    border: 1px solid rgba(188,128,52,0.35);
    box-shadow: 0 0 20px rgba(188,128,52,0.08);
    padding-bottom: 38px;
}
.cp-pinwall-card-founder .cp-pinwall-card-badge.founder-badge {
    color: #BC8034;
    opacity: 0.5;
    font-size: 18px;
    letter-spacing: 0;
}

/* Counter */
.cp-pinwall-counter {
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
.cp-pinwall-loadmore {
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
    .cp-pinwall-loadmore:hover {
        background: rgba(188,128,52,0.08);
        border-color: #BC8034;
        transform: translateY(-1px);
    }
}

/* CTA unter Pinwand */
.cp-pinwall-cta {
    margin-top: 48px;
}

/* ======== PINWALL RESPONSIVE - TABLET ======== */
@media (max-width: 1024px) {
    .cp-pinwall { padding: 80px 30px; }
    .cp-pinwall-headline { font-size: 36px; }
    .cp-pinwall-grid { column-count: 2; column-gap: 14px; }
}

/* ======== PINWALL RESPONSIVE - MOBILE ======== */
@media (max-width: 768px) {
    .cp-pinwall { padding: 60px 16px; }
    .cp-pinwall-headline { font-size: 28px; }
    .cp-pinwall-subtext { font-size: 20px; margin-bottom: 36px; }
    .cp-pinwall-grid { column-count: 2; column-gap: 10px; }
    .cp-pinwall-card {
        padding: 16px 16px 14px;
        margin-bottom: 10px;
        border-radius: 12px;
    }
    .cp-pinwall-card-name { font-size: 20px; margin-bottom: 8px; }
    .cp-pinwall-card-label { font-size: 10px; margin-bottom: 3px; letter-spacing: 0.8px; }
    .cp-pinwall-card-satz { font-size: 13px; line-height: 1.5; margin-bottom: 8px; }
    .cp-pinwall-card-toggle { width: 22px; height: 22px; }
    .cp-pinwall-card-toggle::before { width: 8px; }
    .cp-pinwall-card-toggle::after { height: 8px; }
    .cp-pinwall-card-hidden { transition: max-height 0.3s ease, opacity 0.25s ease; }
    .cp-pinwall-loadmore { padding: 12px 32px; font-size: 13px; }
    .cp-pinwall-cta { margin-top: 36px; }
}
`;
    document.head.appendChild(style);

    // === DATA ===
    var data = {
        headline: "Das sagt die Community",
        subtext: "Echte Menschen. Echte Antworten auf die gro\u00dfen Fragen.",
        cta: { text: "Deinen Eintrag hinzuf\u00fcgen", url: "https://solbachsteven.systeme.io/freebie" },
        pageSize: 9
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
        var isFounder = e.is_example == 2;
        var badgeHTML = isFounder ? '<span class="cp-pinwall-card-badge founder-badge">\u2764</span>' : (e.is_example ? '<span class="cp-pinwall-card-badge">Beispiel</span>' : '');
        var founderClass = isFounder ? ' cp-pinwall-card-founder' : '';
        return '<div class="cp-pinwall-card' + founderClass + '">' +
            badgeHTML +
            '<div class="cp-pinwall-card-name" style="color:' + nameColor + '">' +
                escapeHtml(e.first_name) +
                '<span class="cp-pinwall-card-toggle"></span>' +
            '</div>' +
            '<div class="cp-pinwall-card-satz">' + escapeHtml(e.satz_mission) + '</div>' +
            '<div class="cp-pinwall-card-hidden">' +
                '<div class="cp-pinwall-card-divider"></div>' +
                '<div class="cp-pinwall-card-label teal">Meine Vision</div>' +
                '<div class="cp-pinwall-card-satz">' + escapeHtml(e.satz_vision) + '</div>' +
                '<div class="cp-pinwall-card-divider"></div>' +
                '<div class="cp-pinwall-card-label rose">Mein Warum</div>' +
                '<div class="cp-pinwall-card-satz">' + escapeHtml(e.satz_warum) + '</div>' +
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
        var cards = container.querySelectorAll('.cp-pinwall-card:not(.visible)');
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

        var counter = document.getElementById('cp-pinwall-counter');
        if (counter) {
            counter.textContent = shown + ' von ' + allEntries.length;
        }
    }

    function renderPinwall(entries, containerEl) {
        if (!entries || entries.length === 0) {
            containerEl.innerHTML = '<div style="text-align:center;padding:40px 0;opacity:0.4;font-size:15px;">Noch keine Eintr\u00e4ge auf der Pinnwand.</div>';
            return;
        }
        // Founder (is_example == 2) immer nach vorne sortieren
        entries.sort(function(a, b) {
            var aFounder = a.is_example == 2 ? 1 : 0;
            var bFounder = b.is_example == 2 ? 1 : 0;
            return bFounder - aFounder;
        });
        allEntries = entries;
        shown = 0;
        openCards = [];

        var gridHTML = '<div class="cp-pinwall-grid" id="cp-pinwall-grid"></div>';
        var counterHTML = '<div class="cp-pinwall-counter" id="cp-pinwall-counter"></div>';
        var loadMoreHTML = entries.length > data.pageSize ?
            '<button class="cp-pinwall-loadmore" id="cp-pinwall-loadmore">Mehr anzeigen</button>' : '';

        containerEl.innerHTML = gridHTML + counterHTML + loadMoreHTML;

        var grid = document.getElementById('cp-pinwall-grid');
        showMore(grid);

        grid.addEventListener('click', function(ev) {
            var card = ev.target.closest('.cp-pinwall-card');
            if (card) toggleCard(card);
        });

        var loadMoreBtn = document.getElementById('cp-pinwall-loadmore');
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
        '<section class="cp-pinwall">' +
            '<div class="cp-pinwall-inner">' +
                '<h2 class="cp-pinwall-headline cp-fade">' + data.headline + '</h2>' +
                '<div class="cp-pinwall-subtext cp-fade">' + data.subtext + '</div>' +
                '<div id="cp-pinwall-container" class="cp-fade">' +
                    '<div style="text-align:center;padding:40px 0;opacity:0.4;font-size:15px;">Pinnwand wird geladen\u2026</div>' +
                '</div>' +
                '<div class="cp-pinwall-cta cp-fade">' +
                    '<a href="' + data.cta.url + '" class="cp-cta-primary">' + data.cta.text + '</a>' +
                '</div>' +
            '</div>' +
        '</section>';

    // === DOM INSERTION (Smart Wrapper) ===
    var pageWrapper = document.querySelector('.cp-page');
    if (!pageWrapper) {
        pageWrapper = document.createElement('div');
        pageWrapper.className = 'cp-page';
        var target = document.currentScript || document.scripts[document.scripts.length - 1];
        target.parentNode.insertBefore(pageWrapper, target.nextSibling);
    }
    var temp = document.createElement('div');
    temp.innerHTML = sectionHTML;
    while (temp.firstChild) {
        pageWrapper.appendChild(temp.firstChild);
    }

    // === FETCH PINWALL DATA ===
    var containerEl = document.getElementById('cp-pinwall-container');
    if (containerEl) {
        fetch('https://win3-community.solbachsteven.workers.dev/pinwall/entries')
        .then(function(res) { return res.json(); })
        .then(function(resData) {
            renderPinwall(resData.entries || [], containerEl);
        })
        .catch(function() {
            containerEl.innerHTML = '<div style="text-align:center;padding:40px 0;opacity:0.4;font-size:15px;">Die Pinnwand konnte nicht geladen werden. Bitte lade die Seite neu.</div>';
        });
    }

    // === SCROLL REVEAL ===
    if (!window.__CP_REVEAL_INIT) {
        window.__CP_REVEAL_INIT = true;
        window.__cpInitReveal = function(container) {
            var fadeEls = container.querySelectorAll('.cp-fade:not(.visible)');
            if ('IntersectionObserver' in window) {
                var observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            var parent = entry.target.parentElement;
                            var siblings = parent.querySelectorAll('.cp-fade');
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
        window.__cpInitReveal(document.querySelector('.cp-page'));
    }, 100);
})();

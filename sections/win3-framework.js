/*
 * Win³ Framework Section - Steven Solbach Website
 * Standalone JS
 * Source of Truth: Obsidian Vault > Win³ Framework Section Code.md
 */

/* ======== FONT LOADING ======== */
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
    var style = document.createElement('style');
    style.setAttribute('data-section', 'win3-framework');
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

/* ======== SECTION HEADER ======== */
.w3s-header {
    text-align: center;
    padding: 80px 40px 40px;
    max-width: 900px;
    margin: 0 auto;
}

.w3s-label {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: #BC8034;
    margin-bottom: 10px;
    line-height: 24px;
}

.w3s-title {
    font-family: 'Poppins', sans-serif;
    font-size: 54px;
    font-weight: 600;
    line-height: 60px;
    color: #FFFFFF;
    margin: 0 0 12px 0;
}

.w3s-subtitle {
    font-family: 'Caveat', cursive;
    font-size: 26px;
    font-weight: 400;
    color: #BC8034;
    margin: 12px 0 0;
    line-height: 1.4;
}

/* Scroll Reveal */
.w3s-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.w3s-fade.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ======== CONTENT GRID (Venn + Timeline) ======== */
.w3s-grid {
    display: grid;
    grid-template-columns: 55fr 45fr;
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px 60px;
    align-items: center;
}

/* ======== VENN-DIAGRAMM (linke Spalte) ======== */
:root {
    --bg-secondary: #F4F0EC;
    --accent-gold: #BC8034;
    --accent-gold-light: #D4A04A;
    --accent-gold-dark: #8B5E20;
    --text-dark: #2C2726;
}

.win3-container * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.win3-container {
    font-family: 'Poppins', sans-serif;
    width: 100%;
}

.win3-section {
    width: 100%;
    background: transparent;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.win3-progress-bar {
    display: none;
    width: 300px;
    max-width: 90%;
    text-align: center;
    margin-bottom: 20px;
}

.win3-progress-text {
    font-size: 16px;
    font-weight: 400;
    color: var(--accent-gold);
    margin-bottom: 12px;
}

.win3-progress-indicator {
    width: 100%;
    height: 3px;
    background: rgba(188, 128, 52, 0.2);
    border-radius: 2px;
    overflow: hidden;
}

.win3-progress-fill {
    height: 100%;
    background: var(--accent-gold);
    width: 0%;
    transition: width 0.1s linear;
}

.win3-animation-container {
    position: relative;
    width: 100%;
    max-width: 820px;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.win3-circles-svg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
}

.win3-circle {
    fill: none;
    stroke: #BC8034;
    stroke-width: 1.5;
}

.win3-label-group {
    opacity: 0;
    transition: opacity 0.5s ease;
}
.win3-label-group.visible {
    opacity: 1;
}

.win3-label-icon {
    font-size: 26px;
    fill: #BC8034;
}

.win3-label-title {
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-weight: 600;
    fill: #FFFFFF;
}

.win3-label-desc {
    font-family: 'Poppins', sans-serif;
    font-size: 11.5px;
    font-weight: 400;
    fill: rgba(255, 255, 255, 0.7);
}

.win3-center-symbol {
    opacity: 0;
    transition: opacity 0.6s ease;
}
.win3-center-symbol.visible {
    opacity: 1;
}

.gold-gradient-stop1 { stop-color: #D4A04A; }
.gold-gradient-stop2 { stop-color: #BC8034; }
.gold-gradient-stop3 { stop-color: #8B5E20; }

/* ======== TIMELINE (rechte Spalte) ======== */
#win3-timeline-wrapper {
    max-width: 700px;
    margin: 0 auto;
    padding: 20px 0px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100%;
}

.win3-timeline-container {
    position: relative;
    padding-left: 100px;
}

.win3-timeline-line-base,
.win3-timeline-line-progress {
    position: absolute;
    width: 2px;
    border-radius: 1px;
    /* left wird per JS auf Icon-Mitte gesetzt */
}

.win3-timeline-line-base {
    background: rgba(188, 128, 52, 0.2);
}

.win3-timeline-line-progress {
    background: #BC8034;
    transform-origin: top;
}

.win3-step {
    position: relative;
    margin-bottom: 50px;
    transition: all 0.3s ease;
}

.win3-step:last-child {
    margin-bottom: 0;
}

.win3-step-icon {
    position: absolute;
    left: -80px;
    top: 0;
    width: 42px;
    height: 42px;
    background: transparent;
    border: 2px solid #BC8034;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #BC8034;
    z-index: 2;
    transition: all 0.4s ease;
}

.win3-step.active .win3-step-icon {
    background: #F4F0EC;
    border-color: #F4F0EC;
    color: #2C2726;
    transform: scale(1.05);
}

.win3-step-4 .win3-step-icon {
    background: transparent;
    border: none;
    width: auto;
    height: auto;
    border-radius: 0;
    top: 50%;
    transform: translateY(-50%);
}

.win3-step-icon-svg svg {
    display: block;
}

.win3-step-4.active .win3-step-icon {
    background: transparent;
    border: none;
    transform: translateY(-50%) scale(1.05);
}

.win3-step-number {
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    font-weight: 500;
    color: #BC8034;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    opacity: 0.4;
    transition: opacity 0.3s ease;
}

.win3-step.active .win3-step-number {
    opacity: 1;
}

.win3-step-title {
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #FFFFFF;
    line-height: 1.3;
    opacity: 0.4;
    transition: opacity 0.3s ease;
}

.win3-step.active .win3-step-title {
    opacity: 1;
}

.win3-step-description {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
    opacity: 0.3;
    color: #FFFFFF;
    transition: opacity 0.3s ease;
}

.win3-step.active .win3-step-description {
    opacity: 0.85;
}

.win3-step-4 .win3-step-title {
    margin-bottom: 0;
}

/* Win\u00b3 Logo-Text (inline, \u00fcberall verwendbar) */
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

/* =============================== */
/*        RESPONSIVE               */
/* =============================== */

@media (max-width: 1024px) {
    .w3s-header {
        padding: 60px 30px 30px;
    }
    .w3s-title {
        font-size: 44px;
        line-height: 50px;
    }
    .w3s-subtitle {
        font-size: 24px;
    }
    .w3s-grid {
        gap: 20px;
        padding: 0 30px 50px;
    }

    /* Timeline Tablet */
    .win3-timeline-container {
        padding-left: 70px;
    }
    .win3-step-icon {
        left: -57px;
    }
}

@media (max-width: 768px) {
    .w3s-header {
        padding: 50px 12px 24px;
    }
    .w3s-label {
        font-size: 14px;
    }
    .w3s-title {
        font-size: 36px;
        line-height: 42px;
    }
    .w3s-subtitle {
        font-size: 22px;
    }
    .w3s-grid {
        grid-template-columns: 1fr;
        padding: 0 12px 40px;
    }

    /* Venn Mobile */
    .win3-section {
        padding: 0;
    }
    .win3-animation-container {
        max-width: 500px;
    }

    /* Timeline Mobile */
    #win3-timeline-wrapper {
        padding: 20px 0;
    }
    .win3-timeline-container {
        padding-left: 60px;
    }
    .win3-step {
        margin-bottom: 70px;
    }
    .win3-step-icon {
        left: -52px;
        width: 34px;
        height: 34px;
        font-size: 15px;
    }
    .win3-step-4 .win3-step-icon {
        width: auto;
        height: auto;
    }
    .win3-step-icon-svg svg {
        width: 65px;
        height: 65px;
    }
    .win3-step-title {
        font-size: 22px;
    }
    .win3-step-description {
        font-size: 14px;
    }
}
`;
    document.head.appendChild(style);
})();

/* ======== DATA OBJECTS ======== */
var WIN3_SECTION_DATA = {
    label: "DIE PHILOSOPHIE",
    headline: "Das Win\u00b3 Framework",
    subheadline: "Dein Weg zur Ganzheit"
};

/* ======== RENDERER ======== */
(function() {
    var d = WIN3_SECTION_DATA;

    function w3brand(str) {
        return str.replace(/Win\u00b3/g, '<span class="w3-logo">Win<span class="w3-logo-sup">\u00b3</span></span>');
    }

    // ======== SECTION HEADER ========
    var headerHTML = '<div class="w3s-header">' +
        '<div class="w3s-label w3s-fade">' + d.label + '</div>' +
        '<h2 class="w3s-title w3s-fade">' + w3brand(d.headline) + '</h2>' +
        '<p class="w3s-subtitle w3s-fade">' + d.subheadline + '</p>' +
    '</div>';

    // ======== VENN-DIAGRAMM ========
    var vennHTML = '<div class="win3-container"><div class="win3-section" id="win3Section">' +
        '<div class="win3-progress-bar"><div class="win3-progress-text" id="win3ProgressText">0%</div>' +
        '<div class="win3-progress-indicator"><div class="win3-progress-fill" id="win3ProgressFill"></div></div></div>' +
        '<div class="win3-animation-container" id="win3AnimationContainer">' +
        '<svg class="win3-circles-svg" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet" id="win3CirclesSvg">' +
            '<defs>' +
                '<linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">' +
                    '<stop offset="0%" class="gold-gradient-stop1"/>' +
                    '<stop offset="50%" class="gold-gradient-stop2"/>' +
                    '<stop offset="100%" class="gold-gradient-stop3"/>' +
                '</linearGradient>' +
                '<radialGradient id="goldRadial" cx="30%" cy="30%" r="70%">' +
                    '<stop offset="0%" stop-color="#E8C068"/>' +
                    '<stop offset="50%" stop-color="#BC8034"/>' +
                    '<stop offset="100%" stop-color="#8B5E20"/>' +
                '</radialGradient>' +
                '<filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">' +
                    '<feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#8B5E20" flood-opacity="0.3"/>' +
                '</filter>' +
            '</defs>' +
            '<circle id="win3Circle1" class="win3-circle" cx="300" cy="-100" r="140"></circle>' +
            '<circle id="win3Circle2" class="win3-circle" cx="-50" cy="550" r="140"></circle>' +
            '<circle id="win3Circle3" class="win3-circle" cx="650" cy="550" r="140"></circle>' +
            '<g id="win3Label1" class="win3-label-group">' +
                '<text class="win3-label-icon" text-anchor="middle" dominant-baseline="middle"><tspan id="win3Icon1">\u2726</tspan></text>' +
                '<text class="win3-label-title" text-anchor="middle" dominant-baseline="middle"><tspan id="win3Title1">Be Yourself</tspan></text>' +
                '<text class="win3-label-desc" text-anchor="middle"><tspan id="win3Desc1a">Werde der Mensch, der du</tspan><tspan id="win3Desc1b" dy="16">immer sein wolltest</tspan></text>' +
            '</g>' +
            '<g id="win3Label2" class="win3-label-group">' +
                '<text class="win3-label-icon" text-anchor="middle" dominant-baseline="middle"><tspan id="win3Icon2">\u2B22</tspan></text>' +
                '<text class="win3-label-title" text-anchor="middle" dominant-baseline="middle"><tspan id="win3Title2">Make Money</tspan></text>' +
                '<text class="win3-label-desc" text-anchor="middle"><tspan id="win3Desc2a">Verdiene Geld mit dem, was</tspan><tspan id="win3Desc2b" dy="16">du sowieso tun m\u00f6chtest</tspan></text>' +
            '</g>' +
            '<g id="win3Label3" class="win3-label-group">' +
                '<text class="win3-label-icon" text-anchor="middle" dominant-baseline="middle"><tspan id="win3Icon3">\u2665</tspan></text>' +
                '<text class="win3-label-title" text-anchor="middle" dominant-baseline="middle"><tspan id="win3Title3">Do Good</tspan></text>' +
                '<text class="win3-label-desc" text-anchor="middle"><tspan id="win3Desc3a">Trage zu der Welt bei,</tspan><tspan id="win3Desc3b" dy="16">in der du leben m\u00f6chtest</tspan></text>' +
            '</g>' +
            '<g id="win3CenterSymbol" class="win3-center-symbol">' +
                '<circle cx="300" cy="300" r="285" stroke="rgba(188,128,52,0.25)" stroke-width="1" fill="rgba(188,128,52,0.06)"/>' +
                '<circle cx="300" cy="300" r="20" fill="#F5F0EB"/>' +
            '</g>' +
        '</svg></div></div></div>';

    // ======== TIMELINE ========
    var timelineHTML = '<div id="win3-timeline-wrapper">' +
        '<div class="win3-timeline-container" id="win3TimelineContainer">' +
            '<div class="win3-timeline-line-base" id="win3BaseLine"></div>' +
            '<div class="win3-timeline-line-progress" id="win3ProgressLine"></div>' +
            '<div class="win3-step win3-step-1">' +
                '<div class="win3-step-icon">\u2726</div>' +
                '<div class="win3-step-content">' +
                    '<div class="win3-step-number">Schritt 1</div>' +
                    '<h3 class="win3-step-title">Be Yourself</h3>' +
                    '<p class="win3-step-description">Du bist ganz du selbst \u2013 authentisch, kraftvoll und im Reinen mit dir. Du erkennst dein wahres Selbst und lebst danach, statt dich zu verbiegen.</p>' +
                '</div>' +
            '</div>' +
            '<div class="win3-step win3-step-2">' +
                '<div class="win3-step-icon">\u2665</div>' +
                '<div class="win3-step-content">' +
                    '<div class="win3-step-number">Schritt 2</div>' +
                    '<h3 class="win3-step-title">Do Good</h3>' +
                    '<p class="win3-step-description">Du gibst den Menschen nicht nur was sie wollen, sondern das, was sie wirklich brauchen. Dein Wirken tr\u00e4gt zu einer besseren Welt bei \u2013 der Welt, in der du leben m\u00f6chtest.</p>' +
                '</div>' +
            '</div>' +
            '<div class="win3-step win3-step-3">' +
                '<div class="win3-step-icon">\u2B22</div>' +
                '<div class="win3-step-content">' +
                    '<div class="win3-step-number">Schritt 3</div>' +
                    '<h3 class="win3-step-title">Make Money</h3>' +
                    '<p class="win3-step-description">Geld, Ressourcen und neue M\u00f6glichkeiten kommen als nat\u00fcrliche Folge. Du verdienst deinen Lebensunterhalt mit dem, was deinen Werten entspricht.</p>' +
                '</div>' +
            '</div>' +
            '<div class="win3-step win3-step-4">' +
                '<div class="win3-step-icon win3-step-icon-svg"><svg viewBox="0 0 80 80" width="80" height="80"><circle cx="40" cy="40" r="30" stroke="rgba(188,128,52,0.25)" stroke-width="1" fill="rgba(188,128,52,0.06)"/><g transform="translate(40,40)" stroke="#BC8034" stroke-width="1.5" fill="none"><circle cx="0" cy="-9" r="14"/><circle cx="7.3" cy="4.2" r="14"/><circle cx="-7.3" cy="4.2" r="14"/></g><circle cx="40" cy="40" r="2.8" fill="#F5F0EB"/></svg></div>' +
                '<div class="win3-step-content">' +
                    '<h3 class="win3-step-title">' + w3brand('Win\u00b3 Synthese') + '</h3>' +
                '</div>' +
            '</div>' +
        '</div></div>';

    // ======== COMBINED HTML ========
    var html = headerHTML +
        '<div class="w3s-grid">' + vennHTML + timelineHTML + '</div>';

    // Insert into DOM (container-aware)
    var target = window.__SS_CONTAINER || document.body;
    var wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    target.appendChild(wrapper);

    // ======== SCROLL REVEAL (Header) ========
    setTimeout(function() {
        var fadeItems = document.querySelectorAll('.w3s-fade');
        if ('IntersectionObserver' in window) {
            var obs = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            for (var j = 0; j < fadeItems.length; j++) {
                obs.observe(fadeItems[j]);
            }
        } else {
            for (var k = 0; k < fadeItems.length; k++) {
                fadeItems[k].classList.add('visible');
            }
        }
    }, 100);

    // ======== VENN-DIAGRAMM ANIMATION ========
    (function() {
        var circle1 = document.getElementById('win3Circle1');
        var circle2 = document.getElementById('win3Circle2');
        var circle3 = document.getElementById('win3Circle3');
        var progressText = document.getElementById('win3ProgressText');
        var progressFill = document.getElementById('win3ProgressFill');

        var label1 = document.getElementById('win3Label1');
        var label2 = document.getElementById('win3Label2');
        var label3 = document.getElementById('win3Label3');
        var icon1 = document.getElementById('win3Icon1');
        var title1v = document.getElementById('win3Title1');
        var desc1a = document.getElementById('win3Desc1a');
        var desc1b = document.getElementById('win3Desc1b');
        var icon2 = document.getElementById('win3Icon2');
        var title2v = document.getElementById('win3Title2');
        var desc2a = document.getElementById('win3Desc2a');
        var desc2b = document.getElementById('win3Desc2b');
        var icon3 = document.getElementById('win3Icon3');
        var title3v = document.getElementById('win3Title3');
        var desc3a = document.getElementById('win3Desc3a');
        var desc3b = document.getElementById('win3Desc3b');
        var centerSymbol = document.getElementById('win3CenterSymbol');

        var RADIUS = 140;
        var CENTER_X = 300;
        var CENTER_Y = 300;
        var OVERLAP_DISTANCE = 115;
        var LABEL_OFFSET_FACTOR = 0.28;

        var START_POSITIONS = {
            circle1: { cx: 300, cy: -100 },
            circle2: { cx: -50, cy: 550 },
            circle3: { cx: 650, cy: 550 }
        };

        var END_POSITIONS = {
            circle1: { cx: CENTER_X, cy: CENTER_Y - OVERLAP_DISTANCE },
            circle2: { cx: CENTER_X - (OVERLAP_DISTANCE * Math.cos(Math.PI / 6)), cy: CENTER_Y + (OVERLAP_DISTANCE * Math.sin(Math.PI / 6)) },
            circle3: { cx: CENTER_X + (OVERLAP_DISTANCE * Math.cos(Math.PI / 6)), cy: CENTER_Y + (OVERLAP_DISTANCE * Math.sin(Math.PI / 6)) }
        };

        function lerp(start, end, progress) { return start + (end - start) * progress; }
        function easeInOutCubic(x) { return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }

        function calculateLabelOffset(cx, cy) {
            var dx = cx - CENTER_X, dy = cy - CENTER_Y;
            var length = Math.sqrt(dx * dx + dy * dy);
            if (length > 0) return { x: (dx / length) * RADIUS * LABEL_OFFSET_FACTOR, y: (dy / length) * RADIUS * LABEL_OFFSET_FACTOR };
            return { x: 0, y: 0 };
        }

        function updateLabelPositions() {
            var o1 = calculateLabelOffset(END_POSITIONS.circle1.cx, END_POSITIONS.circle1.cy);
            var cx1 = END_POSITIONS.circle1.cx + o1.x, cy1 = END_POSITIONS.circle1.cy + o1.y;
            icon1.setAttribute('x', cx1); icon1.setAttribute('y', cy1 - 45);
            title1v.setAttribute('x', cx1); title1v.setAttribute('y', cy1 - 10);
            desc1a.setAttribute('x', cx1); desc1a.setAttribute('y', cy1 + 18); desc1b.setAttribute('x', cx1);

            var o2 = calculateLabelOffset(END_POSITIONS.circle2.cx, END_POSITIONS.circle2.cy);
            var cx2 = END_POSITIONS.circle2.cx + o2.x, cy2 = END_POSITIONS.circle2.cy + o2.y;
            icon2.setAttribute('x', cx2); icon2.setAttribute('y', cy2 - 45);
            title2v.setAttribute('x', cx2); title2v.setAttribute('y', cy2 - 10);
            desc2a.setAttribute('x', cx2); desc2a.setAttribute('y', cy2 + 18); desc2b.setAttribute('x', cx2);

            var o3 = calculateLabelOffset(END_POSITIONS.circle3.cx, END_POSITIONS.circle3.cy);
            var cx3 = END_POSITIONS.circle3.cx + o3.x, cy3 = END_POSITIONS.circle3.cy + o3.y;
            icon3.setAttribute('x', cx3); icon3.setAttribute('y', cy3 - 45);
            title3v.setAttribute('x', cx3); title3v.setAttribute('y', cy3 - 10);
            desc3a.setAttribute('x', cx3); desc3a.setAttribute('y', cy3 + 18); desc3b.setAttribute('x', cx3);
        }

        function updatePositions(progress) {
            var ep = easeInOutCubic(progress);
            circle1.setAttribute('cx', lerp(START_POSITIONS.circle1.cx, END_POSITIONS.circle1.cx, ep));
            circle1.setAttribute('cy', lerp(START_POSITIONS.circle1.cy, END_POSITIONS.circle1.cy, ep));
            circle2.setAttribute('cx', lerp(START_POSITIONS.circle2.cx, END_POSITIONS.circle2.cx, ep));
            circle2.setAttribute('cy', lerp(START_POSITIONS.circle2.cy, END_POSITIONS.circle2.cy, ep));
            circle3.setAttribute('cx', lerp(START_POSITIONS.circle3.cx, END_POSITIONS.circle3.cx, ep));
            circle3.setAttribute('cy', lerp(START_POSITIONS.circle3.cy, END_POSITIONS.circle3.cy, ep));

            if (progress >= 0.7) { label1.classList.add('visible'); label2.classList.add('visible'); label3.classList.add('visible'); }
            else { label1.classList.remove('visible'); label2.classList.remove('visible'); label3.classList.remove('visible'); }

            if (progress >= 0.92) centerSymbol.classList.add('visible');
            else centerSymbol.classList.remove('visible');

            var pct = Math.round(progress * 100);
            progressText.textContent = pct + '%';
            progressFill.style.width = pct + '%';
        }

        function onScroll() {
            var vc = document.getElementById('win3AnimationContainer');
            if (!vc) return;
            var rect = vc.getBoundingClientRect();
            var wh = window.innerHeight;
            var progress = (wh - (rect.top + rect.height / 2)) / (wh - wh / 2);
            progress = Math.max(0, Math.min(1, progress));
            updatePositions(progress);
        }

        updateLabelPositions();
        updatePositions(0);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    })();

    // ======== TIMELINE ANIMATION ========
    (function() {
        var tlContainer = document.getElementById('win3TimelineContainer');
        var progressLine = document.getElementById('win3ProgressLine');
        var baseLine = document.getElementById('win3BaseLine');
        var steps = tlContainer.querySelectorAll('.win3-step');
        var icons = tlContainer.querySelectorAll('.win3-step-icon');
        var ACTIVATION_OFFSET_PERCENT = 0;

        function getIconPositions() {
            var cr = tlContainer.getBoundingClientRect();
            var pos = [];
            icons.forEach(function(icon) {
                var ir = icon.getBoundingClientRect();
                pos.push((ir.top - cr.top) + (ir.height / 2));
            });
            return pos;
        }

        function calculateLinePositions() {
            var ip = getIconPositions();
            if (ip.length < 2) return;
            var fy = ip[0];
            var ly = ip[ip.length - 1];
            var h = ly - fy;
            /* left: messe Icon-Mitte horizontal */
            var cr = tlContainer.getBoundingClientRect();
            var ir = icons[0].getBoundingClientRect();
            var cx = Math.round((ir.left - cr.left) + (ir.width / 2));
            baseLine.style.left = (cx - 1) + 'px';
            progressLine.style.left = (cx - 1) + 'px';
            baseLine.style.top = fy + 'px'; baseLine.style.height = h + 'px';
            progressLine.style.top = fy + 'px'; progressLine.style.height = h + 'px';
            /* Step-4 SVG zentrieren auf Linienmitte */
            var lastIcon = icons[icons.length - 1];
            if (lastIcon.classList.contains('win3-step-icon-svg')) {
                var stepRect = lastIcon.parentElement.getBoundingClientRect();
                var lineCenterInStep = Math.round((ir.left - stepRect.left) + (ir.width / 2));
                lastIcon.style.left = Math.round(lineCenterInStep - lastIcon.offsetWidth / 2) + 'px';
            }
        }

        function updateTimeline() {
            var cr = tlContainer.getBoundingClientRect();
            var wh = window.innerHeight;
            var vcy = wh / 2;
            var aly = vcy + (wh * ACTIVATION_OFFSET_PERCENT);
            var vcic = vcy - cr.top;
            var alic = aly - cr.top;
            var ip = getIconPositions();
            var td = ip[ip.length - 1] - ip[0];
            var cd = vcic - ip[0];
            var progress = Math.max(0, Math.min(1, cd / td));
            progressLine.style.transform = 'scaleY(' + progress + ')';

            steps.forEach(function(step, index) {
                if (index === 0) { step.classList.add('active'); return; }
                if (alic >= ip[index]) step.classList.add('active');
                else step.classList.remove('active');
            });
        }

        function tick() { calculateLinePositions(); updateTimeline(); }
        window.addEventListener('scroll', tick, { passive: true });
        window.addEventListener('resize', tick);
        tick();
    })();
})();

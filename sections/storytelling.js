/*
 * Storytelling Flow - Steven Solbach Website
 * Standalone JS
 * Source of Truth: Obsidian Vault > Storytelling Flow Code.md
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
    style.setAttribute('data-section', 'storytelling');
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

/* Win\u00b3 Logo-Text (inline) */
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

/* ======================================================================
   STORYTELLING FLOW
   ====================================================================== */

/* Section Header */
.story-header {
    text-align: center;
    padding: 80px 40px 20px;
    max-width: 900px;
    margin: 0 auto;
}

.story-header-label {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: #BC8034;
    margin-bottom: 10px;
    line-height: 24px;
}

.story-header-title {
    font-family: 'Poppins', sans-serif;
    font-size: 54px;
    font-weight: 600;
    line-height: 60px;
    color: #FFFFFF;
    margin: 0 0 12px 0;
}

.story-header-title em {
    font-style: normal;
    color: #BC8034;
}

.story-header-subtitle {
    font-family: 'Caveat', cursive;
    font-size: 26px;
    font-weight: 400;
    color: #BC8034;
    margin: 0;
}

.story-header-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.story-header-fade.visible {
    opacity: 1;
    transform: translateY(0);
}

.story-flow {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 20px;
    position: relative;
}

/* Zentrale Linie */
.story-flow-line {
    position: absolute;
    left: 50%;
    top: 0;
    width: 2px;
    background: linear-gradient(180deg,
        transparent 0%,
        rgba(188, 128, 52, 0.3) 40px,
        rgba(188, 128, 52, 0.5) 10%,
        rgba(188, 128, 52, 0.5) 90%,
        rgba(188, 128, 52, 0.3) calc(100% - 40px),
        transparent 100%
    );
    transform: translateX(-50%);
    pointer-events: none;
}

/* Fliessender Lichtpunkt */
.story-flow-line::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 6px;
    height: 60px;
    background: linear-gradient(180deg, transparent, #BC8034, transparent);
    transform: translateX(-50%);
    animation: storyFlowPulse 4s ease-in-out infinite;
    border-radius: 3px;
}

@keyframes storyFlowPulse {
    0% { top: 0%; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { top: calc(100% - 60px); opacity: 0; }
}

/* Story Items Container */
.story-flow-items {
    display: flex;
    flex-direction: column;
    gap: 0;
    position: relative;
    z-index: 2;
}

/* ======== ALTERNATING ITEMS (links/rechts) ======== */
.story-item {
    display: grid;
    grid-template-columns: 1fr 80px 1fr;
    align-items: center;
    min-height: 120px;
    opacity: 0;
    transition: opacity 0.6s ease;
}

.story-item.visible {
    opacity: 1;
}

/* Content Boxes */
.story-content {
    padding: 30px 20px;
}

.story-item.left .story-content {
    grid-column: 1;
    text-align: right;
    padding-right: 30px;
    transform: translateX(-30px);
    transition: transform 0.6s ease;
}

.story-item.right .story-content {
    grid-column: 3;
    text-align: left;
    padding-left: 30px;
    transform: translateX(30px);
    transition: transform 0.6s ease;
}

.story-item.visible .story-content {
    transform: translateX(0);
}

/* Spacer fuer die andere Seite */
.story-spacer {
    display: block;
}

.story-item.left .story-spacer {
    grid-column: 3;
}

.story-item.right .story-spacer {
    grid-column: 1;
}

/* Node - Punkt auf der Linie */
.story-node {
    grid-column: 2;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.story-node-dot {
    width: 14px;
    height: 14px;
    background: #BC8034;
    border-radius: 50%;
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.story-item.visible .story-node-dot {
    box-shadow: 0 0 25px rgba(188, 128, 52, 0.6);
}

/* Ripple Effekt */
.story-node::before {
    content: '';
    position: absolute;
    width: 36px;
    height: 36px;
    border: 1px solid rgba(188, 128, 52, 0.3);
    border-radius: 50%;
    animation: storyNodeRipple 2.5s ease-out infinite;
}

.story-item:nth-child(2n) .story-node::before {
    animation-delay: 0.5s;
}

.story-item:nth-child(3n) .story-node::before {
    animation-delay: 1s;
}

@keyframes storyNodeRipple {
    0% { transform: scale(0.5); opacity: 0.8; }
    100% { transform: scale(1.8); opacity: 0; }
}

/* ======== TYPOGRAPHY ======== */
.story-title {
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-weight: 600;
    color: #BC8034;
    margin-top: 20px;
    margin-bottom: 30px;
    line-height: 1.3;
}

.story-text {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    line-height: 1.75;
    font-weight: 300;
    color: #FFFFFF;
    opacity: 0.9;
    margin: 0;
}

.story-text em {
    font-style: normal;
    color: #BC8034;
    font-weight: 400;
}

.story-subtext {
    font-family: 'Caveat', cursive;
    font-size: 26px;
    color: #BC8034;
    margin-top: 12px;
    display: block;
}

/* ======== ZENTRIERTE BL\u00d6CKE (Synthese + Einladung) ======== */
.story-item.center {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px 0;
}

.story-item.center .story-content {
    text-align: center;
    padding: 0;
    transform: translateY(30px);
    transition: transform 0.6s ease;
    width: 100%;
}

.story-item.center.visible .story-content {
    transform: translateY(0);
}

/* Synthese-Node (gr\u00f6sserer Abschluss-Punkt) */
.story-item.center .story-node {
    width: auto;
    height: auto;
    margin-bottom: 5px;
}

.story-item.center.story-synthese .story-node-dot {
    width: 20px;
    height: 20px;
}

.story-item.center.story-synthese .story-node::before {
    width: 48px;
    height: 48px;
}

/* Synthese - mehr Abstand zwischen Node und Titel */
.story-item.center.story-synthese .story-node {
    margin-bottom: 35px;
}

/* Synthese - Titel */
.story-item.center.story-synthese .story-title {
    font-size: 28px;
    color: #FFFFFF;
    margin-bottom: 30px;
}

/* ======== SYNTHESE DREIECK (SVG) ======== */
.story-tri-svg {
    width: 100%;
    max-width: 660px;
    height: auto;
    display: block;
    margin: 0 auto;
    overflow: visible;
}

/* Ripple-Animation auf Nodes */
@keyframes storyTriRipple {
    0% { r: 12; opacity: 0.6; }
    100% { r: 28; opacity: 0; }
}

.story-tri-ripple {
    fill: none;
    stroke: rgba(188, 128, 52, 0.3);
    stroke-width: 1;
    animation: storyTriRipple 4s ease-out infinite;
}

.story-tri-ripple-2 { animation-delay: 0.5s; }
.story-tri-ripple-3 { animation-delay: 1.0s; }

/* Fliessende Lichtpunkte im Kreislauf */
@keyframes storyTriFlow {
    0%   { offset-distance: 0%; }
    100% { offset-distance: 100%; }
}

.story-tri-dot {
    offset-path: path('M90,410 L470,410 L280,80 Z');
    offset-rotate: 0deg;
    opacity: 0.9;
    animation: storyTriFlow 12s linear infinite;
}

.story-tri-dot-2 { animation-delay: 4s; }
.story-tri-dot-3 { animation-delay: 8s; }

.story-item.center.story-synthese .story-subtext {
    color: #BC8034;
    font-size: 28px;
    margin-top: 18px;
}

/* Einladung (schlicht, ohne Box) */
.story-item.center.story-closing .story-content {
    padding: 30px 20px;
}

.story-item.center.story-closing .story-text {
    font-size: 20px;
    font-weight: 300;
}

.story-item.center.story-closing .story-subtext {
    font-size: 30px;
    margin-top: 15px;
}

/* ======== BRIDGE TEXT ======== */
.story-bridge {
    padding: 60px 40px;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
}

.story-bridge .bridge-caveat {
    font-family: 'Caveat', cursive;
    font-size: 28px;
    color: #BC8034;
    margin: 0 0 8px;
    display: block;
}

.story-bridge .bridge-body {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
}

.story-bridge-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.story-bridge-fade.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ======== TABLET ======== */
@media (min-width: 769px) and (max-width: 1024px) {
    .story-header {
        padding: 60px 30px 16px;
    }
    .story-header-title {
        font-size: 44px;
        line-height: 50px;
    }
    .story-header-subtitle {
        font-size: 24px;
    }
    .story-item:not(.center) {
        grid-template-columns: 1fr 60px 1fr;
    }

    .story-node {
        width: 60px;
        height: 60px;
    }

    .story-content {
        padding: 20px 15px;
    }

    .story-item.left .story-content {
        padding-right: 20px;
    }

    .story-item.right .story-content {
        padding-left: 20px;
    }

    .story-text {
        font-size: 17px;
    }

    .story-item.center {
        max-width: 100%;
    }

    .story-tri-svg {
        max-width: 440px;
    }

}

/* ======== MOBILE ======== */
@media (max-width: 768px) {
    .story-header {
        padding: 50px 12px 16px;
    }
    .story-header-label {
        font-size: 14px;
    }
    .story-header-title {
        font-size: 36px;
        line-height: 42px;
    }
    .story-header-subtitle {
        font-size: 22px;
    }
    .story-flow {
        padding: 30px 12px;
    }

    .story-item:not(.center) {
        grid-template-columns: 50px 1fr;
        grid-template-rows: auto;
        gap: 0 12px;
        min-height: auto;
        padding: 20px 0;
    }

    /* Linie wird per JS auf Dot-Mitte positioniert */

    .story-node {
        grid-column: 1;
        grid-row: 1;
        width: 50px;
        height: 50px;
        align-self: start;
        margin-top: 5px;
    }

    .story-node-dot {
        width: 12px;
        height: 12px;
    }

    .story-node::before {
        width: 28px;
        height: 28px;
    }

    .story-item.left .story-content,
    .story-item.right .story-content {
        grid-column: 2;
        grid-row: 1;
        text-align: left;
        padding: 0;
        transform: translateX(20px);
    }

    .story-item.visible .story-content {
        transform: translateX(0);
    }

    .story-spacer {
        display: none;
    }

    .story-title {
        font-size: 18px;
        margin-bottom: 8px;
    }

    .story-text {
        font-size: 16px;
        line-height: 1.65;
    }

    .story-subtext {
        font-size: 22px;
        margin-top: 10px;
    }

    /* Zentrierte Bl\u00f6cke auf Mobile */
    .story-item.center {
        max-width: 100%;
        padding: 20px 0;
    }

    .story-item.center .story-node {
        display: none;
    }

    .story-item.center.story-synthese .story-title {
        font-size: 26px;
        margin-bottom: 18px;
    }

    .story-tri-svg {
        max-width: 300px;
    }

    .story-tri-svg text {
        font-size: 28 !important;
    }

    .story-item.center.story-synthese .story-subtext {
        font-size: 24px;
    }

    .story-item.center.story-closing .story-text {
        font-size: 17px;
    }

    .story-item.center.story-closing .story-subtext {
        font-size: 26px;
    }

    .story-bridge {
        padding: 40px 12px;
    }

    .story-bridge .bridge-caveat {
        font-size: 24px;
    }

    .story-bridge .bridge-body {
        font-size: 17px;
    }
}
`;
    document.head.appendChild(style);
})();

/* ======== DATA OBJECTS ======== */
var STORY_SECTION = {
    label: "DIE WIN\u00b3 SYNTHESE",
    headline: "Was w\u00e4re, wenn du dich <em>nicht mehr</em> entscheiden m\u00fcsstest?",
    subtitle: "Ein Leben jenseits von Kompromissen"
};

var STORY_BLOCKS = [
    // =============================================
    // BLOCK 1: BE YOURSELF (links)
    // =============================================
    {
        title: "Be Yourself",
        text: "Du gestaltest ein Leben, das sich in jeder Faser <em>wahr</em> und <em>richtig</em> anf\u00fchlt. Gef\u00fchrt von deiner inneren Wahrheit \u2014 nicht von dem, was andere von dir erwarten.",
        subtext: "Endlich GANZ du selbst."
    },
    // =============================================
    // BLOCK 2: DO GOOD (rechts)
    // =============================================
    {
        title: "Do Good",
        text: "Du erschaffst etwas, das gr\u00f6\u00dfer ist als du selbst. Nicht weil es von dir erwartet wird \u2014 sondern weil du wei\u00dft, dass dein Beitrag einen echten Unterschied macht.",
        subtext: "Sch\u00f6pfer statt Zahnrad im Getriebe."
    },
    // =============================================
    // BLOCK 3: MAKE MONEY (links)
    // =============================================
    {
        title: "Make Money",
        text: "Und das Geld? <em>Es flie\u00dft.</em> Nicht weil du dich verkaufst \u2014 sondern weil du gibst, was die Welt wirklich braucht. F\u00fclle kommt als nat\u00fcrliche Folge.",
        subtext: "Erfolg, der dir entspricht und dich w\u00fcrdigt."
    },
    // =============================================
    // BLOCK 4: WIN³ SYNTHESE (SVG-Dreieck)
    // =============================================
    {
        title: "Die Win\u00b3 Synthese",
        subtext: "",
        center: true,
        triangle: true
    },
    // =============================================
    // BLOCK 5: EINLADUNG (zentriert, schlicht)
    // =============================================
    {
        title: "",
        text: "Das ist kein unerreichbarer Traum. Viele leben ihre Tr\u00e4ume bereits. Es ist eine <em>Wahl</em>, die Entschlossenheit, Mut und konsequentes Handeln braucht.",
        subtext: "",
        center: true
    }
];

/* ======== RENDERER ======== */
(function() {
    function w3brand(str) {
        return str.replace(/Win\u00b3/g, '<span class="w3-logo">Win<span class="w3-logo-sup">\u00b3</span></span>');
    }

    // ======== SECTION HEADER ========
    var s = STORY_SECTION;

    var header = document.createElement('div');
    header.className = 'story-header';
    header.innerHTML =
        '<div class="story-header-label story-header-fade">' + s.label + '</div>' +
        '<h2 class="story-header-title story-header-fade">' + s.headline + '</h2>' +
        (s.subtitle ? '<div class="story-header-subtitle story-header-fade">' + s.subtitle + '</div>' : '');

    // ======== SYSTEME.IO-KOMPATIBEL: HTML via JS generieren ========
    var section = document.createElement('section');
    section.className = 'story-flow';

    var line = document.createElement('div');
    line.className = 'story-flow-line';

    var itemsContainer = document.createElement('div');
    itemsContainer.className = 'story-flow-items';

    section.appendChild(line);
    section.appendChild(itemsContainer);

    // Insert into DOM (container-aware)
    var target = window.__SS_CONTAINER || document.body;
    var wrapper = document.createElement('div');
    wrapper.appendChild(header);
    wrapper.appendChild(section);
    target.appendChild(wrapper);

    // ======== DATEN LESEN ========
    if (!STORY_BLOCKS || STORY_BLOCKS.length === 0) return;

    var sideIndex = 0;

    // ======== LINIE NUR BIS ZUM LETZTEN ALTERNIERENDEN BLOCK ========
    var lastAlternatingIndex = -1;
    for (var x = 0; x < STORY_BLOCKS.length; x++) {
        if (!STORY_BLOCKS[x].center) lastAlternatingIndex = x;
    }

    for (var i = 0; i < STORY_BLOCKS.length; i++) {
        var block = STORY_BLOCKS[i];

        var hasTitle = block.title && block.title.trim() !== '';
        var hasText = block.text && block.text.trim() !== '';
        var hasSubtext = block.subtext && block.subtext.trim() !== '';

        if (!hasTitle && !hasText && !hasSubtext) continue;

        var item = document.createElement('div');

        if (block.center) {
            // ======== ZENTRIERTER BLOCK ========
            var isFirst = true;
            for (var check = 0; check < i; check++) {
                if (STORY_BLOCKS[check].center) { isFirst = false; break; }
            }
            var extraClass = isFirst ? ' story-synthese' : ' story-closing';
            item.className = 'story-item center' + extraClass;

            var nodeHTML = isFirst ? '<div class="story-node"><div class="story-node-dot"></div></div>' : '';
            var contentHTML = '';
            if (hasTitle) contentHTML += '<h3 class="story-title">' + w3brand(block.title) + '</h3>';

            // SVG-Dreieck (Synthese)
            if (block.triangle) {
                contentHTML += '<svg class="story-tri-svg" viewBox="0 0 560 520" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<defs>' +
                    '<linearGradient id="triE1" x1="280" y1="80" x2="90" y2="410" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="rgba(188,128,52,0.45)"/><stop offset="50%" stop-color="rgba(188,128,52,0.12)"/><stop offset="100%" stop-color="rgba(188,128,52,0.45)"/></linearGradient>' +
                    '<linearGradient id="triE2" x1="280" y1="80" x2="470" y2="410" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="rgba(188,128,52,0.45)"/><stop offset="50%" stop-color="rgba(188,128,52,0.12)"/><stop offset="100%" stop-color="rgba(188,128,52,0.45)"/></linearGradient>' +
                    '<linearGradient id="triE3" x1="90" y1="410" x2="470" y2="410" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="rgba(188,128,52,0.45)"/><stop offset="50%" stop-color="rgba(188,128,52,0.12)"/><stop offset="100%" stop-color="rgba(188,128,52,0.45)"/></linearGradient>' +
                    '<radialGradient id="triGlow"><stop offset="0%" stop-color="rgba(188,128,52,0.5)"/><stop offset="100%" stop-color="transparent"/></radialGradient>' +
                    '</defs>' +
                    '<line x1="280" y1="80" x2="90" y2="410" stroke="url(#triE1)" stroke-width="2"/>' +
                    '<line x1="280" y1="80" x2="470" y2="410" stroke="url(#triE2)" stroke-width="2"/>' +
                    '<line x1="90" y1="410" x2="470" y2="410" stroke="url(#triE3)" stroke-width="2"/>' +
                    '<circle r="4" fill="#BC8034" class="story-tri-dot"/>' +
                    '<circle r="4" fill="#BC8034" class="story-tri-dot story-tri-dot-2"/>' +
                    '<circle r="4" fill="#BC8034" class="story-tri-dot story-tri-dot-3"/>' +
                    '<circle cx="280" cy="80" r="22" fill="url(#triGlow)"/><circle cx="280" cy="80" r="10" fill="#BC8034" opacity="0.85"/><circle cx="280" cy="80" class="story-tri-ripple"/>' +
                    '<circle cx="90" cy="410" r="22" fill="url(#triGlow)"/><circle cx="90" cy="410" r="10" fill="#BC8034" opacity="0.85"/><circle cx="90" cy="410" class="story-tri-ripple story-tri-ripple-2"/>' +
                    '<circle cx="470" cy="410" r="22" fill="url(#triGlow)"/><circle cx="470" cy="410" r="10" fill="#BC8034" opacity="0.85"/><circle cx="470" cy="410" class="story-tri-ripple story-tri-ripple-3"/>' +
                    '<text x="280" y="42" text-anchor="middle" font-family="Poppins, sans-serif" font-size="19" font-weight="600" fill="#FFFFFF">Das gro\u00dfe Ganze gewinnt</text>' +
                    '<text x="90" y="462" text-anchor="middle" font-family="Poppins, sans-serif" font-size="19" font-weight="600" fill="#FFFFFF">Du gewinnst</text>' +
                    '<text x="470" y="462" text-anchor="middle" font-family="Poppins, sans-serif" font-size="19" font-weight="600" fill="#FFFFFF">Andere gewinnen</text>' +
                    '</svg>';
            } else if (hasText) {
                contentHTML += '<p class="story-text">' + block.text + '</p>';
            }

            if (hasSubtext) contentHTML += '<span class="story-subtext">' + block.subtext + '</span>';

            item.innerHTML = nodeHTML + '<div class="story-content">' + contentHTML + '</div>';
        } else {
            // ======== ALTERNIERENDER BLOCK (links/rechts) ========
            var side = sideIndex % 2 === 0 ? 'left' : 'right';
            sideIndex++;

            item.className = 'story-item ' + side;

            var contentHTML2 = '';
            if (hasTitle) contentHTML2 += '<h3 class="story-title">' + w3brand(block.title) + '</h3>';
            if (hasText) contentHTML2 += '<p class="story-text">' + block.text + '</p>';
            if (hasSubtext) contentHTML2 += '<span class="story-subtext">' + block.subtext + '</span>';

            if (side === 'left') {
                item.innerHTML = '<div class="story-content">' + contentHTML2 + '</div>' +
                    '<div class="story-node"><div class="story-node-dot"></div></div>' +
                    '<div class="story-spacer"></div>';
            } else {
                item.innerHTML = '<div class="story-spacer"></div>' +
                    '<div class="story-node"><div class="story-node-dot"></div></div>' +
                    '<div class="story-content">' + contentHTML2 + '</div>';
            }
        }

        itemsContainer.appendChild(item);
    }

    // ======== LINIE POSITIONIEREN (bombensicher: messe erste Node) ========
    function positionLine() {
        var firstNode = section.querySelector('.story-node-dot');
        if (!firstNode) return;
        var sectionRect = section.getBoundingClientRect();
        var dotRect = firstNode.getBoundingClientRect();
        // Horizontale Mitte des ersten Dots = Linienmitte
        var dotCenterX = (dotRect.left - sectionRect.left) + (dotRect.width / 2);
        line.style.left = dotCenterX + 'px';
        line.style.transform = 'none';

        // H\u00f6he: bis zum letzten alternierenden Block
        var allItems = itemsContainer.querySelectorAll('.story-item');
        var lastAltItem = null;
        for (var m = 0; m < allItems.length; m++) {
            if (!allItems[m].classList.contains('center')) {
                lastAltItem = allItems[m];
            }
        }
        if (lastAltItem) {
            var itemRect = lastAltItem.getBoundingClientRect();
            var lineEnd = itemRect.bottom - sectionRect.top + 20;
            line.style.bottom = 'auto';
            line.style.height = lineEnd + 'px';
        }
    }
    setTimeout(positionLine, 200);
    window.addEventListener('resize', function() { setTimeout(positionLine, 50); });

    // ======== SCROLL REVEAL ========
    var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    var items = section.querySelectorAll('.story-item');
    for (var j = 0; j < items.length; j++) {
        observer.observe(items[j]);
    }

    // Header fade-in
    var headerFades = header.querySelectorAll('.story-header-fade');
    for (var h = 0; h < headerFades.length; h++) {
        observer.observe(headerFades[h]);
    }

    setTimeout(function() {
        var allItems2 = section.querySelectorAll('.story-item');
        for (var k = 0; k < allItems2.length; k++) {
            var rect = allItems2[k].getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                allItems2[k].classList.add('visible');
            }
        }
        // Header initial check
        for (var hh = 0; hh < headerFades.length; hh++) {
            var hRect = headerFades[hh].getBoundingClientRect();
            if (hRect.top < window.innerHeight * 0.85) {
                headerFades[hh].classList.add('visible');
            }
        }
    }, 100);
})();

/* ======== BRIDGE TEXT: Storytelling -> Angebote ======== */
(function() {
    var target = window.__SS_CONTAINER || document.body;
    var bridge = document.createElement('div');
    bridge.className = 'story-bridge story-bridge-fade';
    bridge.innerHTML = '<span class="bridge-caveat">Bist du bereit?</span><p class="bridge-body">Hier sind drei Wege, wie ich dich weiterbringen kann.</p>';
    target.appendChild(bridge);

    var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
        });
    }, { threshold: 0.1 });
    obs.observe(bridge);
})();

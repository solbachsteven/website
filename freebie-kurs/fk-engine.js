// Freebie Kurs - Shared Engine (CSS + Renderer)
// Wird automatisch von den Lesson-Dateien geladen.
// NICHT direkt einbinden - nutze die Einzeiler der jeweiligen Lektion.
(function() {
    if (window.__FK_ENGINE) return;

    // === FONT ===
    if (!document.querySelector('link[href*="Poppins"]')) {
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;500;600&display=swap';
        document.head.appendChild(fontLink);
    }

    // === CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'fk-engine');
    style.textContent = '\
/* ======== FREEBIE KURS ENGINE CSS ======== */\n\
:root {\n\
    --lesson-bg: #2D2726;\n\
    --lesson-bg-cream: #FCF0D6;\n\
    --lesson-bg-box: #3D3736;\n\
    --lesson-gold: #BC8034;\n\
    --lesson-orange: #D96935;\n\
    --lesson-white: #FFFFFF;\n\
    --lesson-dark: #2D2726;\n\
    --lesson-radius: 16px;\n\
    --lesson-font: \'Poppins\', sans-serif;\n\
    --lesson-font-hand: \'Caveat\', cursive;\n\
    --lesson-max-width: 780px;\n\
}\n\
\n\
.lesson-section {\n\
    font-family: var(--lesson-font);\n\
    color: var(--lesson-white);\n\
    padding: 60px 0;\n\
    width: 100%;\n\
}\n\
.lesson-section * { box-sizing: border-box; }\n\
.lesson-container {\n\
    width: 100%;\n\
    max-width: var(--lesson-max-width);\n\
    margin: 0 auto;\n\
    padding: 0 40px;\n\
}\n\
\n\
/* --- Header --- */\n\
.lesson-header { text-align: center; margin-bottom: 60px; opacity: 0; transform: translateY(30px); }\n\
.lesson-header.visible { opacity: 1; transform: translateY(0); transition: opacity 0.8s ease, transform 0.8s ease; }\n\
.lesson-label { font-size: 14px; font-weight: 300; text-transform: uppercase; letter-spacing: 1.5px; color: var(--lesson-gold); margin-bottom: 12px; }\n\
.lesson-title { font-size: 36px; font-weight: 600; line-height: 1.25; margin: 0 0 12px 0; }\n\
.lesson-subtitle { font-family: var(--lesson-font-hand); font-size: 24px; letter-spacing: -1px; color: var(--lesson-gold); margin: 0; }\n\
\n\
/* --- Content Blocks --- */\n\
.lesson-block { opacity: 0; transform: translateY(20px); }\n\
.lesson-block.visible { opacity: 1; transform: translateY(0); transition: opacity 0.5s ease, transform 0.5s ease; }\n\
\n\
/* --- Text --- */\n\
.lesson-text { font-size: 17px; font-weight: 300; line-height: 1.8; margin-bottom: 24px; color: var(--lesson-white); opacity: 0.92; }\n\
\n\
/* --- Headings --- */\n\
.lesson-h2 { font-size: 26px; font-weight: 600; line-height: 1.3; margin: 60px 0 24px 0; color: var(--lesson-white); }\n\
.lesson-h3 { font-size: 20px; font-weight: 500; line-height: 1.3; margin: 40px 0 16px 0; color: var(--lesson-white); }\n\
\n\
/* --- Emphasis --- */\n\
.lesson-emphasis { font-family: var(--lesson-font-hand); font-size: 28px; font-weight: 400; line-height: 1.6; letter-spacing: -1px; margin: 30px 0; padding: 20px 0; color: var(--lesson-gold); }\n\
\n\
/* --- Callout --- */\n\
.lesson-callout { background: var(--lesson-bg-cream); border-radius: var(--lesson-radius); padding: 30px; margin: 30px 0; border-left: 3px solid var(--lesson-gold); color: var(--lesson-dark); font-size: 16px; font-weight: 400; line-height: 1.7; }\n\
\n\
/* --- Quote --- */\n\
.lesson-quote { font-family: var(--lesson-font-hand); font-size: 30px; letter-spacing: -1px; color: var(--lesson-gold); text-align: center; padding: 30px 20px; line-height: 1.5; font-style: italic; }\n\
.lesson-quote-attribution { display: block; font-family: var(--lesson-font); font-size: 14px; font-weight: 300; font-style: normal; margin-top: 10px; opacity: 0.7; }\n\
\n\
/* --- Copyblock (KI-Prompt) --- */\n\
.lesson-copyblock { background: var(--lesson-bg-box); border-radius: var(--lesson-radius); padding: 30px; margin: 30px 0; font-size: 15px; font-weight: 300; line-height: 1.7; opacity: 0.88; }\n\
.lesson-copyblock-text p { margin: 0 0 16px 0; }\n\
.lesson-copyblock-text p:last-child { margin-bottom: 0; }\n\
.lesson-copy-btn { display: block; margin: 20px auto 0; background: var(--lesson-gold); color: var(--lesson-dark); border: none; border-radius: 8px; padding: 8px 16px; font-family: var(--lesson-font); font-size: 13px; font-weight: 500; cursor: pointer; transition: opacity 0.2s; }\n\
.lesson-copy-btn:hover { opacity: 0.85; }\n\
\n\
/* --- Celebration --- */\n\
.lesson-celebration { text-align: center; padding: 30px 0; margin: 20px 0; }\n\
.lesson-celebration-icon { font-size: 48px; margin-bottom: 12px; animation: lesson-celebrate 0.6s ease; }\n\
.lesson-celebration-text { font-family: var(--lesson-font-hand); font-size: 30px; letter-spacing: -1px; color: var(--lesson-gold); }\n\
@keyframes lesson-celebrate { 0% { transform: scale(0); opacity: 0; } 50% { transform: scale(1.3); } 100% { transform: scale(1); opacity: 1; } }\n\
\n\
/* --- Levels (6 Ebenen) --- */\n\
.lesson-levels { display: flex; flex-direction: column; gap: 10px; margin: 30px 0; }\n\
.lesson-level { background: var(--lesson-bg-box); border-radius: var(--lesson-radius); padding: 22px 28px; border-left: 3px solid var(--lesson-gold); position: relative; }\n\
.lesson-level[data-color="violet"]  { border-left-color: #9B59B6; }\n\
.lesson-level[data-color="indigo"]  { border-left-color: #6C5CE7; }\n\
.lesson-level[data-color="blue"]    { border-left-color: #4A9BD9; }\n\
.lesson-level[data-color="green"]   { border-left-color: #4CAF7D; }\n\
.lesson-level[data-color="orange"]  { border-left-color: #D9853B; }\n\
.lesson-level[data-color="red"]     { border-left-color: #C0554E; }\n\
.lesson-level-num { position: absolute; top: 18px; right: 20px; width: 30px; height: 30px; border-radius: 50%; background: rgba(188,128,52,0.15); color: var(--lesson-gold); font-size: 13px; font-weight: 600; display: flex; align-items: center; justify-content: center; }\n\
.lesson-level[data-color="violet"]  .lesson-level-num { background: rgba(155,89,182,0.15); color: #B97FD0; }\n\
.lesson-level[data-color="indigo"]  .lesson-level-num { background: rgba(108,92,231,0.15); color: #9B8FEF; }\n\
.lesson-level[data-color="blue"]    .lesson-level-num { background: rgba(74,155,217,0.15); color: #6FB5E8; }\n\
.lesson-level[data-color="green"]   .lesson-level-num { background: rgba(76,175,125,0.15); color: #6EC99B; }\n\
.lesson-level[data-color="orange"]  .lesson-level-num { background: rgba(217,133,59,0.15); color: #E5A060; }\n\
.lesson-level[data-color="red"]     .lesson-level-num { background: rgba(192,85,78,0.15); color: #D47A74; }\n\
.lesson-level-title { font-size: 16px; font-weight: 600; margin-bottom: 4px; padding-right: 50px; color: var(--lesson-gold); }\n\
.lesson-level[data-color="violet"]  .lesson-level-title { color: #B97FD0; }\n\
.lesson-level[data-color="indigo"]  .lesson-level-title { color: #9B8FEF; }\n\
.lesson-level[data-color="blue"]    .lesson-level-title { color: #6FB5E8; }\n\
.lesson-level[data-color="green"]   .lesson-level-title { color: #6EC99B; }\n\
.lesson-level[data-color="orange"]  .lesson-level-title { color: #E5A060; }\n\
.lesson-level[data-color="red"]     .lesson-level-title { color: #D47A74; }\n\
.lesson-level-desc { font-size: 15px; font-weight: 300; line-height: 1.6; opacity: 0.85; padding-right: 50px; }\n\
\n\
/* --- Big Three (3 Kurs-Ziele) --- */\n\
.lesson-bigthree { display: flex; flex-direction: column; gap: 0; margin: 40px 0; text-align: left; }\n\
.lesson-bigthree-item { padding: 28px 20px; }\n\
.lesson-bigthree-item:not(:last-child) { border-bottom: 1px solid rgba(188,128,52,0.15); }\n\
.lesson-bigthree-item[data-color="warm"]:not(:last-child) { border-bottom-color: rgba(188,128,52,0.2); }\n\
.lesson-bigthree-item[data-color="teal"]:not(:last-child) { border-bottom-color: rgba(91,138,138,0.2); }\n\
.lesson-bigthree-num { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; background: var(--lesson-gold); color: var(--lesson-dark); font-size: 17px; font-weight: 700; margin-bottom: 14px; }\n\
.lesson-bigthree-item[data-color="warm"]  .lesson-bigthree-num { background: #BC8034; }\n\
.lesson-bigthree-item[data-color="teal"]  .lesson-bigthree-num { background: #5B8A8A; }\n\
.lesson-bigthree-item[data-color="lilac"] .lesson-bigthree-num { background: #8B6DAF; }\n\
.lesson-bigthree-title { font-size: 20px; font-weight: 600; margin-bottom: 8px; color: var(--lesson-white); }\n\
.lesson-bigthree-item[data-color="warm"]  .lesson-bigthree-title { color: #D4A04A; }\n\
.lesson-bigthree-item[data-color="teal"]  .lesson-bigthree-title { color: #7FB3B3; }\n\
.lesson-bigthree-item[data-color="lilac"] .lesson-bigthree-title { color: #B89FD4; }\n\
.lesson-bigthree-desc { font-size: 16px; font-weight: 300; line-height: 1.7; opacity: 0.88; }\n\
\n\
/* --- Four Points (Mission Statement) --- */\n\
.lesson-fourpoints { display: flex; flex-direction: column; gap: 10px; margin: 30px 0; }\n\
.lesson-fourpoint { background: var(--lesson-bg-box); border-radius: var(--lesson-radius); padding: 22px 28px; border-left: 3px solid #8B6DAF; }\n\
.lesson-fourpoint-title { font-size: 16px; font-weight: 600; margin-bottom: 4px; color: #B89FD4; }\n\
.lesson-fourpoint-desc { font-size: 15px; font-weight: 300; line-height: 1.6; opacity: 0.85; }\n\
\n\
/* --- Table of Contents --- */\n\
.lesson-toc { background: var(--lesson-bg-box); border-radius: var(--lesson-radius); padding: 32px 36px; margin: 30px 0; }\n\
.lesson-toc-title { font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 1.5px; color: var(--lesson-gold); margin-bottom: 20px; }\n\
.lesson-toc-list { list-style: none; padding: 0; margin: 0; counter-reset: toc; }\n\
.lesson-toc-item { counter-increment: toc; margin-bottom: 10px; }\n\
.lesson-toc-item:last-child { margin-bottom: 0; }\n\
.lesson-toc-link { display: flex; align-items: baseline; gap: 12px; color: var(--lesson-white); text-decoration: none; font-size: 16px; font-weight: 300; line-height: 1.5; opacity: 0.85; transition: opacity 0.2s, color 0.2s; cursor: pointer; }\n\
.lesson-toc-link:hover { opacity: 1; color: var(--lesson-gold); }\n\
.lesson-toc-num { color: var(--lesson-gold); font-size: 14px; font-weight: 600; min-width: 20px; }\n\
.lesson-toc-num::before { content: counter(toc) "."; }\n\
\n\
/* --- Cycle (Kreislauf-Grafik) --- */\n\
.lesson-cycle { margin: 40px 0; display: flex; align-items: center; justify-content: center; gap: 40px; }\n\
.lesson-cycle-svg { flex-shrink: 0; width: 240px; height: 240px; }\n\
.lesson-cycle-labels { display: flex; flex-direction: column; gap: 16px; }\n\
.lesson-cycle-label { display: flex; align-items: center; gap: 12px; }\n\
.lesson-cycle-dot { width: 14px; height: 14px; border-radius: 50%; flex-shrink: 0; }\n\
.lesson-cycle-name { font-size: 19px; font-weight: 500; color: var(--lesson-white); }\n\
\n\
/* --- Reflection --- */\n\
.lesson-reflection { background: var(--lesson-bg-box); border-radius: var(--lesson-radius); padding: 40px; margin: 30px 0; text-align: center; border-top: 2px solid var(--lesson-gold); }\n\
.lesson-reflection-label { font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 1.5px; color: var(--lesson-gold); margin-bottom: 16px; }\n\
.lesson-reflection-prompt { font-family: var(--lesson-font-hand); font-size: 30px; letter-spacing: -1px; line-height: 1.5; color: var(--lesson-white); font-style: italic; }\n\
\n\
/* --- Signoff --- */\n\
.lesson-signoff { text-align: center; padding: 20px 0; }\n\
.lesson-signoff-text { font-size: 17px; font-weight: 300; line-height: 1.8; opacity: 0.88; white-space: pre-line; margin-bottom: 20px; }\n\
.lesson-signoff-name { font-family: var(--lesson-font-hand); font-size: 32px; letter-spacing: -1px; color: var(--lesson-gold); }\n\
\n\
/* --- Divider --- */\n\
.lesson-divider { border: none; height: 1px; background: rgba(188,128,52,0.2); margin: 40px 0; }\n\
\n\
/* --- Responsive: Tablet --- */\n\
@media (max-width: 900px) {\n\
    .lesson-title { font-size: 30px; }\n\
    .lesson-container { padding: 0 30px; }\n\
}\n\
\n\
/* --- Responsive: Mobile --- */\n\
@media (max-width: 650px) {\n\
    .lesson-section { padding: 40px 0; }\n\
    .lesson-container { padding: 0 20px; }\n\
    .lesson-title { font-size: 26px; }\n\
    .lesson-subtitle { font-size: 20px; }\n\
    .lesson-text { font-size: 16px; }\n\
    .lesson-h2 { font-size: 22px; margin-top: 40px; }\n\
    .lesson-h3 { font-size: 18px; margin-top: 30px; }\n\
    .lesson-emphasis { font-size: 24px; }\n\
    .lesson-callout, .lesson-copyblock { padding: 24px 20px; }\n\
    .lesson-quote { font-size: 26px; }\n\
    .lesson-level { padding: 18px 20px; }\n\
    .lesson-level-title, .lesson-level-desc { padding-right: 40px; }\n\
    .lesson-level-num { width: 26px; height: 26px; font-size: 12px; top: 14px; right: 14px; }\n\
    .lesson-bigthree-item { padding: 22px 16px; }\n\
    .lesson-bigthree-num { width: 38px; height: 38px; font-size: 15px; }\n\
    .lesson-bigthree-title { font-size: 18px; }\n\
    .lesson-bigthree-desc { font-size: 15px; }\n\
    .lesson-fourpoint { padding: 18px 20px; }\n\
    .lesson-toc { padding: 24px 20px; }\n\
    .lesson-toc-link { font-size: 15px; }\n\
    .lesson-cycle { flex-direction: column; gap: 24px; }\n\
    .lesson-cycle-svg { width: 180px; height: 180px; }\n\
    .lesson-cycle-name { font-size: 15px; }\n\
    .lesson-reflection { padding: 24px 20px; }\n\
    .lesson-reflection-prompt { font-size: 26px; }\n\
}\n\
\n\
/* --- Reduced Motion --- */\n\
@media (prefers-reduced-motion: reduce) {\n\
    .lesson-block, .lesson-header {\n\
        opacity: 1 !important;\n\
        transform: none !important;\n\
        transition: none !important;\n\
    }\n\
    .lesson-celebration-icon { animation: none !important; }\n\
}\n\
';
    document.head.appendChild(style);

    // === RENDERER ===
    window.__FK_ENGINE = {
        render: function(lessonData, anchor) {
            var data = lessonData;

            var section = document.createElement('section');
            section.className = 'lesson-section';
            var container = document.createElement('div');
            container.className = 'lesson-container';

            // Header
            var header = document.createElement('div');
            header.className = 'lesson-header';
            header.innerHTML =
                '<div class="lesson-label">' + data.meta.label + '</div>' +
                '<h1 class="lesson-title">' + data.meta.title + '</h1>' +
                (data.meta.subtitle ? '<p class="lesson-subtitle">' + data.meta.subtitle + '</p>' : '');
            container.appendChild(header);

            // Content Blocks
            var blocks = [];

            data.sections.forEach(function(s) {
                var el;
                switch (s.type) {
                    case 'text':
                        el = document.createElement('p');
                        el.className = 'lesson-block lesson-text';
                        el.innerHTML = s.content;
                        break;

                    case 'heading':
                        var tag = s.level === 3 ? 'h3' : 'h2';
                        el = document.createElement(tag);
                        el.className = 'lesson-block lesson-h' + (s.level || 2);
                        el.innerHTML = s.content;
                        var numMatch = s.content.match(/^(\d+)\./);
                        if (numMatch) { el.id = 'rule-' + numMatch[1]; }
                        break;

                    case 'emphasis':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-emphasis';
                        el.innerHTML = s.content;
                        break;

                    case 'callout':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-callout';
                        el.innerHTML = s.content;
                        break;

                    case 'quote':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-quote';
                        el.innerHTML = '\u201E' + s.content + '\u201C' +
                            (s.attribution ? '<span class="lesson-quote-attribution">\u2014 ' + s.attribution + '</span>' : '');
                        break;

                    case 'copyblock':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-copyblock';
                        var copyText = s.content.replace(/\\n/g, '\n');
                        var htmlText = copyText.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
                        var textDiv = document.createElement('div');
                        textDiv.className = 'lesson-copyblock-text';
                        textDiv.innerHTML = '<p>' + htmlText + '</p>';
                        el.appendChild(textDiv);
                        var btn = document.createElement('button');
                        btn.className = 'lesson-copy-btn';
                        btn.textContent = 'Kopieren';
                        btn.addEventListener('click', function() {
                            navigator.clipboard.writeText(copyText).then(function() {
                                btn.textContent = 'Kopiert!';
                                setTimeout(function() { btn.textContent = 'Kopieren'; }, 2000);
                            });
                        });
                        el.appendChild(btn);
                        break;

                    case 'celebration':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-celebration';
                        el.innerHTML =
                            '<div class="lesson-celebration-icon">\u2728</div>' +
                            '<div class="lesson-celebration-text">Geschafft!</div>';
                        break;

                    case 'levels':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-levels';
                        var lvlHTML = '';
                        s.items.forEach(function(item) {
                            var colorAttr = item.color ? ' data-color="' + item.color + '"' : '';
                            lvlHTML +=
                                '<div class="lesson-level"' + colorAttr + '>' +
                                    '<div class="lesson-level-num">' + item.number + '</div>' +
                                    '<div class="lesson-level-title">' + item.title + '</div>' +
                                    '<div class="lesson-level-desc">' + item.description + '</div>' +
                                '</div>';
                        });
                        el.innerHTML = lvlHTML;
                        break;

                    case 'bigthree':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-bigthree';
                        var btHTML = '';
                        s.items.forEach(function(item, i) {
                            var colorAttr = item.color ? ' data-color="' + item.color + '"' : '';
                            btHTML +=
                                '<div class="lesson-bigthree-item"' + colorAttr + '>' +
                                    '<div class="lesson-bigthree-num">' + (i + 1) + '</div>' +
                                    '<div class="lesson-bigthree-title">' + item.title + '</div>' +
                                    '<div class="lesson-bigthree-desc">' + item.description + '</div>' +
                                '</div>';
                        });
                        el.innerHTML = btHTML;
                        break;

                    case 'fourpoints':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-fourpoints';
                        var fpHTML = '';
                        s.items.forEach(function(item) {
                            fpHTML +=
                                '<div class="lesson-fourpoint">' +
                                    '<div class="lesson-fourpoint-title">' + item.title + '</div>' +
                                    '<div class="lesson-fourpoint-desc">' + item.description + '</div>' +
                                '</div>';
                        });
                        el.innerHTML = fpHTML;
                        break;

                    case 'toc':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-toc';
                        var tocHTML = '<div class="lesson-toc-title">Inhalt</div><ol class="lesson-toc-list">';
                        s.items.forEach(function(item, i) {
                            var anchorId = 'rule-' + (i + 1);
                            tocHTML +=
                                '<li class="lesson-toc-item">' +
                                    '<a class="lesson-toc-link" data-anchor="' + anchorId + '">' +
                                        '<span class="lesson-toc-num"></span>' +
                                        '<span>' + item + '</span>' +
                                    '</a>' +
                                '</li>';
                        });
                        tocHTML += '</ol>';
                        el.innerHTML = tocHTML;
                        break;

                    case 'cycle':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-cycle';
                        var colors = s.items.map(function(it) { return it.color; });
                        var svgNS = 'http://www.w3.org/2000/svg';
                        var svgSize = 180, cx = 90, cy = 90, r = 65;
                        var svg = document.createElementNS(svgNS, 'svg');
                        svg.setAttribute('viewBox', '0 0 ' + svgSize + ' ' + svgSize);
                        svg.setAttribute('class', 'lesson-cycle-svg');
                        var angles = [-90, 30, 150];
                        var arcSpan = 100;
                        for (var ai = 0; ai < 3; ai++) {
                            var startA = angles[ai] * Math.PI / 180;
                            var endA = (angles[ai] + arcSpan) * Math.PI / 180;
                            var x1 = cx + r * Math.cos(startA);
                            var y1 = cy + r * Math.sin(startA);
                            var x2 = cx + r * Math.cos(endA);
                            var y2 = cy + r * Math.sin(endA);
                            var path = document.createElementNS(svgNS, 'path');
                            path.setAttribute('d', 'M' + x1 + ',' + y1 + ' A' + r + ',' + r + ' 0 0,1 ' + x2 + ',' + y2);
                            path.setAttribute('fill', 'none');
                            path.setAttribute('stroke', colors[ai]);
                            path.setAttribute('stroke-width', '3.5');
                            path.setAttribute('stroke-linecap', 'round');
                            svg.appendChild(path);
                            var tipA = endA;
                            var arrLen = 10, arrAng = 0.45;
                            var tx = x2, ty = y2;
                            var tangent = tipA + Math.PI / 2;
                            var la1x = tx - arrLen * Math.cos(tangent - arrAng);
                            var la1y = ty - arrLen * Math.sin(tangent - arrAng);
                            var la2x = tx - arrLen * Math.cos(tangent + arrAng);
                            var la2y = ty - arrLen * Math.sin(tangent + arrAng);
                            var arrow = document.createElementNS(svgNS, 'polygon');
                            arrow.setAttribute('points', tx+','+ty+' '+la1x+','+la1y+' '+la2x+','+la2y);
                            arrow.setAttribute('fill', colors[ai]);
                            svg.appendChild(arrow);
                        }
                        el.appendChild(svg);
                        var labelsDiv = document.createElement('div');
                        labelsDiv.className = 'lesson-cycle-labels';
                        s.items.forEach(function(it) {
                            labelsDiv.innerHTML +=
                                '<div class="lesson-cycle-label">' +
                                    '<div class="lesson-cycle-dot" style="background:' + it.color + '"></div>' +
                                    '<div class="lesson-cycle-name">' + it.label + '</div>' +
                                '</div>';
                        });
                        el.appendChild(labelsDiv);
                        break;

                    case 'reflection':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-reflection';
                        el.innerHTML =
                            '<div class="lesson-reflection-label">Zum Nachdenken</div>' +
                            '<div class="lesson-reflection-prompt">' + s.prompt + '</div>';
                        break;

                    case 'signoff':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-signoff';
                        el.innerHTML =
                            '<div class="lesson-signoff-text">' + s.text.replace(/\\n/g, '\n') + '</div>' +
                            '<div class="lesson-signoff-name">' + s.name + '</div>';
                        break;

                    case 'divider':
                        el = document.createElement('hr');
                        el.className = 'lesson-block lesson-divider';
                        break;

                    default:
                        return;
                }
                container.appendChild(el);
                blocks.push(el);
            });

            section.appendChild(container);

            // DOM Insert
            if (anchor) {
                anchor.parentNode.insertBefore(section, anchor.nextSibling);
            } else {
                document.body.appendChild(section);
            }

            // TOC click handler
            var tocLinks = container.querySelectorAll('.lesson-toc-link[data-anchor]');
            tocLinks.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    var target = document.getElementById(link.getAttribute('data-anchor'));
                    if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
                });
            });

            // Scroll Reveal
            var isEditor = window.location.href.indexOf('/editor') > -1;
            if (!isEditor) {
                var revealElements = [header].concat(blocks);
                var observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            var idx = revealElements.indexOf(entry.target);
                            var delay = Math.min(idx * 80, 400);
                            setTimeout(function() {
                                entry.target.classList.add('visible');
                            }, delay);
                            observer.unobserve(entry.target);
                        }
                    });
                }, { root: null, rootMargin: '0px', threshold: 0.1 });
                revealElements.forEach(function(el) { observer.observe(el); });
            } else {
                header.classList.add('visible');
                blocks.forEach(function(b) { b.classList.add('visible'); });
            }

            return { section: section, container: container, header: header, blocks: blocks };
        }
    };
})();

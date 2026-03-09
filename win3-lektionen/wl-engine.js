// Win³ Kurs - Shared Engine (CSS + 21 Block-Renderer + Interaktivität)
// Wird automatisch von den Lesson-Dateien geladen.
// NICHT direkt einbinden - nutze die Einzeiler der jeweiligen Lektion.
(function() {
    if (window.__WL_ENGINE) return;

    // === FONT ===
    if (!document.querySelector('link[href*="Poppins"]')) {
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;500;600&display=swap';
        document.head.appendChild(fontLink);
    }

    // === CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wl-engine');
    style.textContent = '\
/* ======== WIN3 KURS ENGINE CSS ======== */\n\
:root {\n\
    --lesson-bg: #2D2726;\n\
    --lesson-bg-light: #3a3130;\n\
    --lesson-bg-card: #352f2e;\n\
    --lesson-bg-box: #3D3736;\n\
    --lesson-bg-cream: #FCF0D6;\n\
    --lesson-gold: #BC8034;\n\
    --lesson-gold-bright: #D4A04A;\n\
    --lesson-gold-dim: #8a5e28;\n\
    --lesson-orange: #D96935;\n\
    --lesson-cream: #FCF0D6;\n\
    --lesson-cream-dim: #b8b0a4;\n\
    --lesson-white: #FFFFFF;\n\
    --lesson-dark: #2D2726;\n\
    --lesson-text: rgba(252,240,214,0.85);\n\
    /* Spektrum-Reihenfolge: Rot → Violett */\n\
    --lesson-c1: #FF5C8A;\n\
    --lesson-c2: #FF9E5C;\n\
    --lesson-c3: #FFD95C;\n\
    --lesson-c4: #5CFF8A;\n\
    --lesson-c5: #00C9A7;\n\
    --lesson-c6: #5CB8FF;\n\
    --lesson-c7: #8A5CFF;\n\
    --lesson-c8: #C77DFF;\n\
    /* Phase-Farben */\n\
    --lesson-be: var(--lesson-c6);\n\
    --lesson-do: var(--lesson-c4);\n\
    --lesson-make: var(--lesson-c3);\n\
    --lesson-radius: 16px;\n\
    --lesson-font: \'Poppins\', sans-serif;\n\
    --lesson-font-hand: \'Caveat\', cursive;\n\
    /* Surface System */\n\
    --lesson-surface-1: rgba(252,240,214,0.03);\n\
    --lesson-surface-2: rgba(252,240,214,0.06);\n\
    --lesson-surface-3: rgba(252,240,214,0.09);\n\
    --lesson-border: rgba(252,240,214,0.08);\n\
    --lesson-border-hover: rgba(252,240,214,0.15);\n\
    --lesson-border-gold: rgba(188,128,52,0.25);\n\
    /* Opacity Hierarchy */\n\
    --lesson-text-primary: rgba(252,240,214,0.95);\n\
    --lesson-text-secondary: rgba(252,240,214,0.70);\n\
    --lesson-text-tertiary: rgba(252,240,214,0.50);\n\
    --lesson-text-muted: rgba(252,240,214,0.35);\n\
    /* Glow System */\n\
    --lesson-glow-gold: 0 0 20px rgba(188,128,52,0.15);\n\
    --lesson-glow-gold-strong: 0 0 30px rgba(188,128,52,0.25), 0 0 60px rgba(188,128,52,0.1);\n\
    /* Spacing */\n\
    --lesson-space-xs: 4px;\n\
    --lesson-space-sm: 8px;\n\
    --lesson-space-md: 16px;\n\
    --lesson-space-lg: 24px;\n\
    --lesson-space-xl: 32px;\n\
    --lesson-space-2xl: 48px;\n\
    --lesson-space-3xl: 64px;\n\
    --lesson-space-4xl: 96px;\n\
}\n\
\n\
/* ======== BASE ======== */\n\
.lesson-section {\n\
    font-family: var(--lesson-font);\n\
    color: var(--lesson-white);\n\
    background: var(--lesson-bg);\n\
    max-width: 100%;\n\
    -webkit-font-smoothing: antialiased;\n\
    -moz-osx-font-smoothing: grayscale;\n\
    text-rendering: optimizeLegibility;\n\
}\n\
.lesson-section * { box-sizing: border-box; margin: 0; padding: 0; }\n\
.lesson-container {\n\
    max-width: 780px;\n\
    margin: 0 auto;\n\
    padding: 60px 40px;\n\
}\n\
\n\
/* ======== SCROLL REVEAL ======== */\n\
.lesson-block {\n\
    opacity: 0;\n\
    transform: translateY(20px);\n\
    transition: opacity 0.6s ease, transform 0.6s ease;\n\
}\n\
.lesson-block.visible {\n\
    opacity: 1;\n\
    transform: translateY(0);\n\
}\n\
\n\
/* ======== HEADER ======== */\n\
.lesson-header {\n\
    text-align: center;\n\
    padding: 80px 40px 60px;\n\
    max-width: 780px;\n\
    margin: 0 auto;\n\
    opacity: 0;\n\
    transition: opacity 0.8s ease 0.15s;\n\
}\n\
.lesson-header.visible { opacity: 1; }\n\
.lesson-label {\n\
    display: block;\n\
    font-size: 14px;\n\
    font-weight: 300;\n\
    letter-spacing: 0.15em;\n\
    text-transform: uppercase;\n\
    color: var(--lesson-gold);\n\
    margin-bottom: 16px;\n\
}\n\
.lesson-title {\n\
    font-family: var(--lesson-font);\n\
    font-size: 36px;\n\
    font-weight: 600;\n\
    line-height: 1.15;\n\
    letter-spacing: -0.02em;\n\
    color: var(--lesson-cream);\n\
    margin-bottom: 1rem;\n\
}\n\
.lesson-subtitle {\n\
    font-family: var(--lesson-font-hand);\n\
    font-size: 22px;\n\
    color: var(--lesson-gold);\n\
    font-weight: 400;\n\
}\n\
\n\
/* ======== TEXT ======== */\n\
.lesson-text {\n\
    font-size: 17px;\n\
    line-height: 1.8;\n\
    color: var(--lesson-white);\n\
    margin-bottom: 24px;\n\
    font-weight: 300;\n\
}\n\
.lesson-text strong { font-weight: 500; color: var(--lesson-white); }\n\
\n\
/* ======== H2 ======== */\n\
.lesson-h2 {\n\
    font-size: 24px;\n\
    font-weight: 600;\n\
    letter-spacing: -0.01em;\n\
    line-height: 1.25;\n\
    color: var(--lesson-cream);\n\
    margin-top: 60px;\n\
    margin-bottom: 24px;\n\
}\n\
\n\
/* ======== H3 ======== */\n\
.lesson-h3 {\n\
    font-size: 20px;\n\
    font-weight: 500;\n\
    line-height: 1.3;\n\
    color: var(--lesson-cream);\n\
    margin-top: 40px;\n\
    margin-bottom: 16px;\n\
}\n\
\n\
/* ======== EMPHASIS ======== */\n\
.lesson-emphasis {\n\
    font-family: var(--lesson-font-hand);\n\
    font-size: 22px;\n\
    font-weight: 500;\n\
    text-align: center;\n\
    color: var(--lesson-gold);\n\
    padding: 40px 0;\n\
    margin: 24px 0;\n\
}\n\
\n\
/* ======== DIVIDER ======== */\n\
.lesson-divider {\n\
    border: none;\n\
    height: 1px;\n\
    background: rgba(188,128,52,0.3);\n\
    margin: 40px 0;\n\
}\n\
\n\
/* ======== CALLOUT ======== */\n\
.lesson-callout {\n\
    background: var(--lesson-bg-cream);\n\
    border-left: 3px solid var(--lesson-gold);\n\
    border-radius: 16px;\n\
    padding: 30px;\n\
    margin: 24px 0;\n\
    font-size: 16px;\n\
    line-height: 1.7;\n\
    color: var(--lesson-dark);\n\
    font-weight: 400;\n\
}\n\
.lesson-callout strong { color: var(--lesson-dark); font-weight: 600; }\n\
\n\
/* ======== QUOTE ======== */\n\
.lesson-quote {\n\
    text-align: center;\n\
    padding: 48px 24px;\n\
    margin: 32px 0;\n\
    font-family: var(--lesson-font-hand);\n\
    font-size: 28px;\n\
    font-weight: 500;\n\
    line-height: 1.5;\n\
    color: var(--lesson-gold);\n\
    border-top: 1px solid rgba(188,128,52,0.2);\n\
    border-bottom: 1px solid rgba(188,128,52,0.2);\n\
}\n\
.lesson-quote-attribution {\n\
    display: block;\n\
    margin-top: 20px;\n\
    font-family: var(--lesson-font);\n\
    font-size: 14px;\n\
    font-weight: 400;\n\
    color: var(--lesson-cream-dim);\n\
    letter-spacing: 0.05em;\n\
}\n\
\n\
/* ======== COPYBLOCK ======== */\n\
.lesson-copyblock {\n\
    background: var(--lesson-bg-box);\n\
    border-radius: 16px;\n\
    padding: 30px;\n\
    margin: 24px 0;\n\
    font-size: 16px;\n\
    line-height: 1.7;\n\
    color: var(--lesson-cream);\n\
    position: relative;\n\
}\n\
.lesson-copyblock::before {\n\
    content: \'KI-PROMPT\';\n\
    display: block;\n\
    color: var(--lesson-gold);\n\
    font-size: 14px;\n\
    font-weight: 500;\n\
    letter-spacing: 0.1em;\n\
    margin-bottom: 12px;\n\
}\n\
.lesson-copy-btn {\n\
    display: block;\n\
    margin-top: 1rem;\n\
    margin-left: auto;\n\
    background: transparent;\n\
    border: 1px solid var(--lesson-gold);\n\
    color: var(--lesson-gold);\n\
    font-family: var(--lesson-font);\n\
    font-size: 0.75rem;\n\
    font-weight: 500;\n\
    padding: 6px 18px;\n\
    border-radius: 50px;\n\
    cursor: pointer;\n\
    transition: background 0.3s, color 0.3s;\n\
    letter-spacing: 0.05em;\n\
}\n\
.lesson-copy-btn:hover {\n\
    background: var(--lesson-gold);\n\
    color: var(--lesson-dark);\n\
}\n\
\n\
/* ======== CELEBRATION ======== */\n\
.lesson-celebration {\n\
    text-align: center;\n\
    padding: 3rem 0;\n\
    margin: 2rem 0;\n\
}\n\
.lesson-celebration-btn {\n\
    display: inline-block;\n\
    background: transparent;\n\
    border: 1px solid var(--lesson-gold);\n\
    border-radius: 50px;\n\
    padding: 12px 36px;\n\
    cursor: pointer;\n\
    transition: all 0.3s ease;\n\
    font-family: var(--lesson-font);\n\
    font-size: 17px;\n\
    font-weight: 500;\n\
    color: var(--lesson-gold);\n\
    letter-spacing: 0.03em;\n\
    position: relative;\n\
    overflow: visible;\n\
}\n\
.lesson-celebration-btn:hover {\n\
    background: var(--lesson-gold);\n\
    color: var(--lesson-dark);\n\
}\n\
.confetti-particle {\n\
    position: fixed;\n\
    width: 8px;\n\
    height: 8px;\n\
    border-radius: 2px;\n\
    pointer-events: none;\n\
    z-index: 1000;\n\
}\n\
.celebration-ring {\n\
    position: absolute;\n\
    top: 50%; left: 50%;\n\
    width: 0; height: 0;\n\
    border-radius: 50%;\n\
    border: 2px solid var(--lesson-gold);\n\
    transform: translate(-50%, -50%);\n\
    pointer-events: none;\n\
    animation: wl-ring-expand 0.8s ease-out forwards;\n\
}\n\
@keyframes wl-ring-expand {\n\
    0% { width: 0; height: 0; opacity: 1; }\n\
    100% { width: 200px; height: 200px; opacity: 0; }\n\
}\n\
\n\
/* ======== BIG THREE ======== */\n\
.lesson-bigthree {\n\
    display: flex;\n\
    flex-direction: column;\n\
    gap: 0;\n\
    margin: 2.5rem 0;\n\
    padding-left: 3rem;\n\
    position: relative;\n\
}\n\
.lesson-bigthree::before {\n\
    content: \'\';\n\
    position: absolute;\n\
    left: 9px; top: 0; bottom: 0;\n\
    width: 1px;\n\
    background: rgba(252,240,214,0.12);\n\
}\n\
.lesson-bigthree-item {\n\
    display: flex;\n\
    flex-direction: column;\n\
    padding: 1.5rem 0;\n\
    position: relative;\n\
    background: none;\n\
    border: none;\n\
    border-radius: 0;\n\
    min-height: 60px;\n\
}\n\
.lesson-bigthree-item::before {\n\
    content: \'\';\n\
    position: absolute;\n\
    left: -3rem; top: 50%;\n\
    transform: translateY(-50%);\n\
    width: 18px; height: 18px;\n\
    border-radius: 50%;\n\
    border: 1.5px solid var(--lesson-gold);\n\
    background: var(--lesson-bg);\n\
    z-index: 2;\n\
}\n\
.lesson-bigthree-item[data-color="be"]::before { border-color: var(--lesson-be); }\n\
.lesson-bigthree-item[data-color="do"]::before { border-color: var(--lesson-do); }\n\
.lesson-bigthree-item[data-color="make"]::before { border-color: var(--lesson-make); }\n\
.lesson-bigthree-num { display: none; }\n\
.lesson-bigthree-title {\n\
    font-size: 20px;\n\
    font-weight: 600;\n\
    color: var(--lesson-cream);\n\
    margin-bottom: 0.35rem;\n\
}\n\
.lesson-bigthree-item[data-color="be"] .lesson-bigthree-title { color: var(--lesson-be); }\n\
.lesson-bigthree-item[data-color="do"] .lesson-bigthree-title { color: var(--lesson-do); }\n\
.lesson-bigthree-item[data-color="make"] .lesson-bigthree-title { color: var(--lesson-make); }\n\
.lesson-bigthree-desc {\n\
    font-size: 17px;\n\
    line-height: 1.7;\n\
    color: var(--lesson-white);\n\
    font-weight: 300;\n\
}\n\
\n\
/* ======== LEVELS ======== */\n\
.lesson-levels {\n\
    position: relative;\n\
    margin: 2.5rem 0;\n\
    padding-left: 3rem;\n\
}\n\
.lesson-levels::before {\n\
    content: \'\';\n\
    position: absolute;\n\
    left: 9px; top: 12px; bottom: 12px;\n\
    width: 1px;\n\
    background: rgba(252,240,214,0.12);\n\
}\n\
.lesson-level {\n\
    padding: 1.5rem 0;\n\
    position: relative;\n\
}\n\
.lesson-level:last-child { padding-bottom: 0; }\n\
.lesson-level-num {\n\
    position: absolute;\n\
    left: -3rem; top: 1.75rem;\n\
    width: 18px; height: 18px;\n\
    border-radius: 50%;\n\
    display: flex;\n\
    align-items: center;\n\
    justify-content: center;\n\
    font-size: 0; color: transparent;\n\
    z-index: 2;\n\
    background: var(--lesson-bg);\n\
}\n\
.lesson-level[data-color="be"] .lesson-level-num { border: 1.5px solid var(--lesson-be); }\n\
.lesson-level[data-color="do"] .lesson-level-num { border: 1.5px solid var(--lesson-do); }\n\
.lesson-level[data-color="make"] .lesson-level-num { border: 1.5px solid var(--lesson-make); }\n\
.lesson-level-title {\n\
    font-size: 20px;\n\
    font-weight: 600;\n\
    color: var(--lesson-cream);\n\
    margin-bottom: 0.3rem;\n\
}\n\
.lesson-level[data-color="be"] .lesson-level-title { color: var(--lesson-be); }\n\
.lesson-level[data-color="do"] .lesson-level-title { color: var(--lesson-do); }\n\
.lesson-level[data-color="make"] .lesson-level-title { color: var(--lesson-make); }\n\
.lesson-level-desc {\n\
    font-size: 17px;\n\
    line-height: 1.7;\n\
    color: var(--lesson-white);\n\
    font-weight: 300;\n\
}\n\
\n\
/* ======== STEPS ======== */\n\
.lesson-steps {\n\
    margin: 2.5rem 0;\n\
    padding-left: 3.5rem;\n\
    position: relative;\n\
}\n\
.lesson-steps::before {\n\
    content: \'\';\n\
    position: absolute;\n\
    left: 13px; top: 0; bottom: 0;\n\
    width: 1px;\n\
    background: rgba(252,240,214,0.12);\n\
}\n\
.lesson-steps-title {\n\
    font-size: 20px;\n\
    font-weight: 500;\n\
    color: var(--lesson-gold);\n\
    margin-bottom: 1.5rem;\n\
    margin-left: -3.5rem;\n\
    padding-left: 3.5rem;\n\
}\n\
.lesson-step {\n\
    padding: 1.25rem 0;\n\
    position: relative;\n\
}\n\
.lesson-step:last-child { padding-bottom: 0; }\n\
.lesson-step-num {\n\
    position: absolute;\n\
    left: -3.5rem; top: 1.35rem;\n\
    width: 28px; height: 28px;\n\
    border-radius: 50%;\n\
    background: var(--lesson-gold);\n\
    display: flex;\n\
    align-items: center;\n\
    justify-content: center;\n\
    font-size: 13px;\n\
    font-weight: 700;\n\
    color: var(--lesson-dark);\n\
    z-index: 2;\n\
    -webkit-text-fill-color: var(--lesson-dark);\n\
}\n\
.lesson-step-title {\n\
    font-size: 20px;\n\
    font-weight: 500;\n\
    color: var(--lesson-cream);\n\
    margin-bottom: 0.25rem;\n\
}\n\
.lesson-step-desc {\n\
    font-size: 17px;\n\
    line-height: 1.7;\n\
    color: var(--lesson-white);\n\
    font-weight: 300;\n\
}\n\
\n\
/* ======== REFLECTION ======== */\n\
.lesson-reflection {\n\
    margin: 3.5rem 0;\n\
    text-align: center;\n\
    padding: 3rem 0;\n\
    border-top: 1px solid rgba(252,240,214,0.08);\n\
    border-bottom: 1px solid rgba(252,240,214,0.08);\n\
}\n\
.lesson-reflection-label {\n\
    font-size: 24px;\n\
    font-weight: 600;\n\
    color: var(--lesson-cream);\n\
    margin-bottom: 24px;\n\
}\n\
.lesson-reflection-prompt {\n\
    font-family: var(--lesson-font-hand);\n\
    font-size: 22px;\n\
    line-height: 1.6;\n\
    color: var(--lesson-gold);\n\
    max-width: 520px;\n\
    margin: 0 auto;\n\
}\n\
\n\
/* ======== ANCHOR PRACTICE ======== */\n\
.lesson-anchorpractice {\n\
    margin: 2.5rem 0;\n\
    border: 1px solid rgba(252,240,214,0.1);\n\
    border-radius: 16px;\n\
    overflow: hidden;\n\
}\n\
.lesson-anchorpractice-label {\n\
    font-size: 14px;\n\
    font-weight: 600;\n\
    letter-spacing: 0.15em;\n\
    text-transform: uppercase;\n\
    color: var(--lesson-gold);\n\
    padding: 24px 30px 16px;\n\
}\n\
.lesson-anchorpractice-layer {\n\
    padding: 16px 30px;\n\
    border-top: 1px solid rgba(252,240,214,0.06);\n\
}\n\
.lesson-anchorpractice-layer-label {\n\
    font-size: 16px;\n\
    font-weight: 600;\n\
    color: var(--lesson-cream);\n\
    margin-bottom: 8px;\n\
}\n\
.lesson-anchorpractice-layer:nth-child(2) .lesson-anchorpractice-layer-label { color: var(--lesson-be); }\n\
.lesson-anchorpractice-layer:nth-child(3) .lesson-anchorpractice-layer-label { color: var(--lesson-do); }\n\
.lesson-anchorpractice-layer:nth-child(4) .lesson-anchorpractice-layer-label { color: var(--lesson-make); }\n\
.lesson-anchorpractice-layer-prompt {\n\
    font-size: 17px;\n\
    line-height: 1.7;\n\
    color: var(--lesson-white);\n\
    font-weight: 300;\n\
}\n\
\n\
/* ======== GRAPHIC ======== */\n\
.lesson-graphic { margin: 2rem 0; }\n\
.lesson-graphic-label {\n\
    font-size: 14px;\n\
    font-weight: 600;\n\
    letter-spacing: 0.1em;\n\
    text-transform: uppercase;\n\
    color: var(--lesson-gold);\n\
    margin-bottom: 16px;\n\
    text-align: center;\n\
}\n\
.lesson-graphic-content {\n\
    max-width: 420px;\n\
    margin: 0 auto;\n\
}\n\
.lesson-graphic-content svg { width: 100%; height: auto; }\n\
\n\
/* ======== PROGRESS BAR ======== */\n\
.lesson-progress-bar-block { margin: 1.5rem 0; }\n\
.lesson-progress-bar-label {\n\
    font-size: 17px;\n\
    font-weight: 500;\n\
    color: var(--lesson-cream);\n\
    margin-bottom: 12px;\n\
}\n\
.lesson-progress-bar-track {\n\
    width: 100%; height: 8px;\n\
    background: var(--lesson-surface-2);\n\
    border-radius: 4px;\n\
    overflow: hidden;\n\
}\n\
.lesson-progress-bar-fill-inline {\n\
    height: 100%;\n\
    background: linear-gradient(90deg, var(--lesson-gold), var(--lesson-gold-bright));\n\
    border-radius: 4px;\n\
    transition: width 0.5s ease;\n\
}\n\
.lesson-progress-bar-detail {\n\
    font-size: 14px;\n\
    font-weight: 300;\n\
    color: var(--lesson-cream-dim);\n\
    margin-top: 8px;\n\
}\n\
\n\
/* ======== CHECKLIST ======== */\n\
.lesson-checklist {\n\
    margin: 1.5rem 0;\n\
    display: flex;\n\
    flex-direction: column;\n\
    gap: 0;\n\
}\n\
.lesson-checklist-item {\n\
    display: flex;\n\
    align-items: center;\n\
    gap: 16px;\n\
    cursor: pointer;\n\
    padding: 8px 0;\n\
    font-size: 17px;\n\
    font-weight: 300;\n\
    color: var(--lesson-white);\n\
    transition: opacity 0.3s;\n\
}\n\
.lesson-checklist-box {\n\
    width: 24px; height: 24px;\n\
    border: 2px solid rgba(252,240,214,0.2);\n\
    border-radius: 6px;\n\
    flex-shrink: 0;\n\
    transition: all 0.3s;\n\
    position: relative;\n\
}\n\
.lesson-checklist-item.checked .lesson-checklist-box {\n\
    border-color: var(--lesson-gold);\n\
    background: rgba(188,128,52,0.2);\n\
}\n\
.lesson-checklist-item.checked .lesson-checklist-box::after {\n\
    content: \'\\2713\';\n\
    position: absolute;\n\
    top: 50%; left: 50%;\n\
    transform: translate(-50%, -50%);\n\
    color: var(--lesson-gold);\n\
    font-size: 14px;\n\
    font-weight: 700;\n\
}\n\
.lesson-checklist-item.checked span {\n\
    text-decoration: line-through;\n\
    opacity: 0.5;\n\
}\n\
\n\
/* ======== TEXTAREA ======== */\n\
.lesson-textarea-block { margin: 1.5rem 0; }\n\
.lesson-textarea-label {\n\
    display: block;\n\
    font-size: 17px;\n\
    font-weight: 500;\n\
    color: var(--lesson-cream);\n\
    margin-bottom: 12px;\n\
}\n\
.lesson-textarea {\n\
    width: 100%;\n\
    background: var(--lesson-bg-box);\n\
    border: 1px solid rgba(252,240,214,0.1);\n\
    border-radius: 16px;\n\
    padding: 20px;\n\
    font-family: var(--lesson-font);\n\
    font-size: 17px;\n\
    font-weight: 300;\n\
    color: var(--lesson-cream);\n\
    line-height: 1.7;\n\
    resize: vertical;\n\
    outline: none;\n\
    transition: border-color 0.3s;\n\
}\n\
.lesson-textarea:focus { border-color: var(--lesson-gold); }\n\
.lesson-textarea::placeholder { color: rgba(252,240,214,0.3); }\n\
\n\
/* ======== HIGHLIGHT ======== */\n\
.lesson-highlight {\n\
    display: flex;\n\
    gap: 20px;\n\
    align-items: flex-start;\n\
    background: rgba(188,128,52,0.08);\n\
    border: 1px solid rgba(188,128,52,0.25);\n\
    border-radius: 16px;\n\
    padding: 30px;\n\
    margin: 1.5rem 0;\n\
}\n\
.lesson-highlight-icon {\n\
    font-size: 24px;\n\
    color: var(--lesson-gold);\n\
    flex-shrink: 0;\n\
    line-height: 1;\n\
}\n\
.lesson-highlight-title {\n\
    font-size: 17px;\n\
    font-weight: 600;\n\
    color: var(--lesson-gold);\n\
    margin-bottom: 8px;\n\
}\n\
.lesson-highlight-text {\n\
    font-size: 17px;\n\
    font-weight: 300;\n\
    line-height: 1.7;\n\
    color: var(--lesson-white);\n\
}\n\
\n\
/* ======== COMPARE ======== */\n\
.lesson-compare {\n\
    display: grid;\n\
    grid-template-columns: 1fr 1fr;\n\
    gap: 16px;\n\
    margin: 1.5rem 0;\n\
}\n\
.lesson-compare-col {\n\
    border: 1px solid rgba(252,240,214,0.1);\n\
    border-radius: 16px;\n\
    overflow: hidden;\n\
}\n\
.lesson-compare-header {\n\
    padding: 12px 20px;\n\
    font-size: 14px;\n\
    font-weight: 600;\n\
    letter-spacing: 0.1em;\n\
    text-transform: uppercase;\n\
    text-align: center;\n\
}\n\
.lesson-compare-before {\n\
    background: rgba(255,217,92,0.12);\n\
    color: var(--lesson-make);\n\
}\n\
.lesson-compare-after {\n\
    background: rgba(92,184,255,0.12);\n\
    color: var(--lesson-be);\n\
}\n\
.lesson-compare-body {\n\
    padding: 20px;\n\
    font-size: 17px;\n\
    font-weight: 300;\n\
    line-height: 1.7;\n\
    color: var(--lesson-white);\n\
}\n\
\n\
/* ======== AUDIO ======== */\n\
.lesson-audio {\n\
    display: flex;\n\
    align-items: center;\n\
    gap: 16px;\n\
    background: var(--lesson-bg-box);\n\
    border-radius: 16px;\n\
    padding: 20px 24px;\n\
    margin: 1.5rem 0;\n\
}\n\
.lesson-audio-icon {\n\
    font-size: 24px;\n\
    color: var(--lesson-gold);\n\
    flex-shrink: 0;\n\
}\n\
.lesson-audio-info { flex: 1; }\n\
.lesson-audio-title {\n\
    font-size: 17px;\n\
    font-weight: 500;\n\
    color: var(--lesson-cream);\n\
}\n\
.lesson-audio-duration {\n\
    font-size: 14px;\n\
    font-weight: 300;\n\
    color: var(--lesson-cream-dim);\n\
    margin-top: 2px;\n\
}\n\
.lesson-audio-btn {\n\
    background: transparent;\n\
    border: 1px solid var(--lesson-gold);\n\
    color: var(--lesson-gold);\n\
    font-family: var(--lesson-font);\n\
    font-size: 14px;\n\
    font-weight: 500;\n\
    padding: 8px 24px;\n\
    border-radius: 50px;\n\
    cursor: pointer;\n\
    transition: background 0.3s, color 0.3s;\n\
    flex-shrink: 0;\n\
}\n\
.lesson-audio-btn:hover {\n\
    background: var(--lesson-gold);\n\
    color: var(--lesson-dark);\n\
}\n\
\n\
/* ======== SIGNOFF ======== */\n\
.lesson-signoff {\n\
    text-align: center;\n\
    padding: 3rem 0 2rem;\n\
}\n\
.lesson-signoff-text {\n\
    font-size: 1rem;\n\
    line-height: 1.7;\n\
    color: rgba(252,240,214,0.65);\n\
    font-weight: 300;\n\
    max-width: 480px;\n\
    margin: 0 auto 1.5rem;\n\
}\n\
.lesson-signoff-name {\n\
    font-family: var(--lesson-font-hand);\n\
    font-size: 2rem;\n\
    font-weight: 600;\n\
    color: var(--lesson-gold);\n\
}\n\
\n\
/* ======== RESPONSIVE: Tablet ======== */\n\
@media (max-width: 900px) {\n\
    .lesson-container { padding: 40px 20px; }\n\
    .lesson-header { padding: 60px 20px 40px; }\n\
    .lesson-title { font-size: 30px; }\n\
}\n\
\n\
/* ======== RESPONSIVE: Mobile ======== */\n\
@media (max-width: 650px) {\n\
    .lesson-container { padding: 30px 16px; }\n\
    .lesson-header { padding: 40px 16px 30px; }\n\
    .lesson-title { font-size: 26px; }\n\
    .lesson-text { font-size: 16px; }\n\
    .lesson-h2 { font-size: 20px; margin-top: 40px; }\n\
    .lesson-h3 { font-size: 18px; }\n\
    .lesson-bigthree,\n\
    .lesson-levels { padding-left: 2.5rem; }\n\
    .lesson-bigthree-item::before { left: -2.5rem; width: 16px; height: 16px; }\n\
    .lesson-level-num { left: -2.5rem; width: 16px; height: 16px; }\n\
    .lesson-bigthree::before,\n\
    .lesson-levels::before { left: 7px; }\n\
    .lesson-steps { padding-left: 2.5rem; }\n\
    .lesson-step-num { left: -2.5rem; width: 24px; height: 24px; font-size: 11px; }\n\
    .lesson-steps::before { left: 11px; }\n\
    .lesson-compare { grid-template-columns: 1fr; }\n\
    .lesson-audio { flex-wrap: wrap; }\n\
    .lesson-highlight { flex-direction: column; gap: 12px; }\n\
}\n\
\n\
/* ======== REDUCED MOTION ======== */\n\
@media (prefers-reduced-motion: reduce) {\n\
    .lesson-block, .lesson-header {\n\
        opacity: 1 !important;\n\
        transform: none !important;\n\
        transition: none !important;\n\
    }\n\
}\n\
';
    document.head.appendChild(style);

    // === CELEBRATION ===
    function triggerCelebration(btn) {
        var ring = document.createElement('div');
        ring.className = 'celebration-ring';
        btn.appendChild(ring);
        setTimeout(function() { ring.remove(); }, 800);

        var rect = btn.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var colors = ['#BC8034', '#D4A04A', '#D96935', '#5CFF8A', '#5CB8FF', '#FCF0D6'];
        for (var i = 0; i < 30; i++) {
            var p = document.createElement('div');
            p.className = 'confetti-particle';
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.left = cx + (Math.random() - 0.5) * 60 + 'px';
            p.style.top = cy + 'px';
            p.style.width = (Math.random() * 6 + 4) + 'px';
            p.style.height = (Math.random() * 6 + 4) + 'px';
            document.body.appendChild(p);
            var dur = Math.random() * 0.8 + 0.8;
            p.animate([
                { transform: 'translate(0, 0) rotate(0deg) scale(1)', opacity: 1 },
                { transform: 'translate(' + (Math.random() - 0.5) * 300 + 'px, ' + (-(Math.random() * 150 + 50)) + 'px) rotate(' + (Math.random() * 720) + 'deg) scale(0.2)', opacity: 0 }
            ], { duration: dur * 1000, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', fill: 'forwards' });
            (function(el, d) { setTimeout(function() { el.remove(); }, d * 1000 + 100); })(p, dur);
        }

        btn.style.background = 'rgba(188,128,52,0.15)';
        btn.style.borderColor = 'var(--lesson-gold-bright)';
        setTimeout(function() {
            btn.style.background = '';
            btn.style.borderColor = '';
        }, 1500);
    }

    // === RENDERER ===
    window.__WL_ENGINE = {
        triggerCelebration: triggerCelebration,

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

            data.sections.forEach(function(s, sIdx) {
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
                        break;

                    case 'emphasis':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-emphasis';
                        el.innerHTML = s.content;
                        break;

                    case 'divider':
                        el = document.createElement('hr');
                        el.className = 'lesson-block lesson-divider';
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
                        textDiv.innerHTML = '<p>' + htmlText + '</p>';
                        el.appendChild(textDiv);
                        var copyBtn = document.createElement('button');
                        copyBtn.className = 'lesson-copy-btn';
                        copyBtn.textContent = 'Kopieren';
                        copyBtn.addEventListener('click', function() {
                            navigator.clipboard.writeText(copyText).then(function() {
                                copyBtn.textContent = 'Kopiert!';
                                setTimeout(function() { copyBtn.textContent = 'Kopieren'; }, 2000);
                            });
                        });
                        el.appendChild(copyBtn);
                        break;

                    case 'celebration':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-celebration';
                        var cBtn = document.createElement('button');
                        cBtn.className = 'lesson-celebration-btn';
                        cBtn.textContent = s.text || 'Geschafft!';
                        cBtn.addEventListener('click', function() {
                            triggerCelebration(cBtn);
                        });
                        el.appendChild(cBtn);
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

                    case 'steps':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-steps';
                        var stHTML = '';
                        if (s.title) {
                            stHTML += '<div class="lesson-steps-title">' + s.title + '</div>';
                        }
                        s.items.forEach(function(item, i) {
                            stHTML +=
                                '<div class="lesson-step">' +
                                    '<div class="lesson-step-num">' + (i + 1) + '</div>' +
                                    '<div class="lesson-step-content">' +
                                        '<div class="lesson-step-title">' + item.title + '</div>' +
                                        '<div class="lesson-step-desc">' + item.description + '</div>' +
                                    '</div>' +
                                '</div>';
                        });
                        el.innerHTML = stHTML;
                        break;

                    case 'reflection':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-reflection';
                        el.innerHTML =
                            '<div class="lesson-reflection-label">' + (s.label || 'Zum Nachdenken') + '</div>' +
                            '<div class="lesson-reflection-prompt">' + s.prompt + '</div>';
                        break;

                    case 'anchorpractice':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-anchorpractice';
                        var apHTML = '<div class="lesson-anchorpractice-label">Ankerpraktik diese Lektion</div>';
                        s.layers.forEach(function(layer) {
                            apHTML +=
                                '<div class="lesson-anchorpractice-layer">' +
                                    '<div class="lesson-anchorpractice-layer-label">' + layer.label + '</div>' +
                                    '<div class="lesson-anchorpractice-layer-prompt">' + layer.prompt + '</div>' +
                                '</div>';
                        });
                        el.innerHTML = apHTML;
                        break;

                    case 'graphic':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-graphic';
                        var gHTML = '';
                        if (s.label) {
                            gHTML += '<div class="lesson-graphic-label">' + s.label + '</div>';
                        }
                        gHTML += '<div class="lesson-graphic-content">' + s.svg + '</div>';
                        el.innerHTML = gHTML;
                        break;

                    case 'compare':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-compare';
                        el.innerHTML =
                            '<div class="lesson-compare-col">' +
                                '<div class="lesson-compare-header lesson-compare-before">' + s.before.header + '</div>' +
                                '<div class="lesson-compare-body">' + s.before.content + '</div>' +
                            '</div>' +
                            '<div class="lesson-compare-col">' +
                                '<div class="lesson-compare-header lesson-compare-after">' + s.after.header + '</div>' +
                                '<div class="lesson-compare-body">' + s.after.content + '</div>' +
                            '</div>';
                        break;

                    case 'checklist':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-checklist';
                        s.items.forEach(function(itemText) {
                            var cItem = document.createElement('div');
                            cItem.className = 'lesson-checklist-item';
                            cItem.innerHTML = '<div class="lesson-checklist-box"></div><span>' + itemText + '</span>';
                            cItem.addEventListener('click', function() {
                                cItem.classList.toggle('checked');
                            });
                            el.appendChild(cItem);
                        });
                        break;

                    case 'textarea':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-textarea-block';
                        el.innerHTML =
                            '<label class="lesson-textarea-label">' + s.label + '</label>' +
                            '<textarea class="lesson-textarea" placeholder="' + (s.placeholder || 'Schreib einfach drauflos...') + '" rows="' + (s.rows || 5) + '"></textarea>';
                        break;

                    case 'highlight':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-highlight';
                        el.innerHTML =
                            '<div class="lesson-highlight-icon">&#9733;</div>' +
                            '<div class="lesson-highlight-content">' +
                                '<div class="lesson-highlight-title">' + s.title + '</div>' +
                                '<div class="lesson-highlight-text">' + s.content + '</div>' +
                            '</div>';
                        break;

                    case 'audio':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-audio';
                        el.innerHTML =
                            '<div class="lesson-audio-icon">&#9835;</div>' +
                            '<div class="lesson-audio-info">' +
                                '<div class="lesson-audio-title">' + s.title + '</div>' +
                                '<div class="lesson-audio-duration">' + s.duration + '</div>' +
                            '</div>';
                        var aBtn = document.createElement('button');
                        aBtn.className = 'lesson-audio-btn';
                        aBtn.textContent = 'Abspielen';
                        aBtn.addEventListener('click', function() {
                            aBtn.textContent = aBtn.textContent === 'Abspielen' ? 'Pause' : 'Abspielen';
                        });
                        el.appendChild(aBtn);
                        break;

                    case 'signoff':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-signoff';
                        el.innerHTML =
                            '<div class="lesson-signoff-text">' + s.text.replace(/\\n/g, '\n') + '</div>' +
                            '<div class="lesson-signoff-name">' + s.name + '</div>';
                        break;

                    case 'progress-bar':
                        el = document.createElement('div');
                        el.className = 'lesson-block lesson-progress-bar-block';
                        el.innerHTML =
                            '<div class="lesson-progress-bar-label">' + s.label + '</div>' +
                            '<div class="lesson-progress-bar-track">' +
                                '<div class="lesson-progress-bar-fill-inline" style="width:' + s.percent + '%"></div>' +
                            '</div>' +
                            (s.detail ? '<div class="lesson-progress-bar-detail">' + s.detail + '</div>' : '');
                        break;

                    default:
                        return;
                }
                // Reference-Daten für Click-to-Reference
                el.setAttribute('data-block-idx', sIdx);
                el.setAttribute('data-block-type', s.type);
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

            // Lesson-Metadaten für Click-to-Reference speichern
            window.__WL_ENGINE._lastLesson = {
                meta: data.meta,
                sectionCount: data.sections.length,
                sections: data.sections
            };

            return { section: section, container: container, header: header, blocks: blocks };
        }
    };
})();

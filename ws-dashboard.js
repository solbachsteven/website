// WS Dashboard - Wer bin ich (Standalone)
// 15 Systeme: MBTI, Enneagram, DISC, Human Design, VIA, Numerologie, Big Five, etc.
// Loaded via: <script src="https://solbachsteven.github.io/website/ws-dashboard.js"></script>
(function() {
    if (window.__WS_DASHBOARD_LOADED) return;
    window.__WS_DASHBOARD_LOADED = true;

    // === FONTS ===
    if (!document.querySelector('link[href*="Poppins"]')) {
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Caveat:wght@400;500;600;700&display=swap';
        document.head.appendChild(fontLink);
    }

    // === CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'ws-dashboard');
    style.textContent = `
/* ======== WS DASHBOARD ======== */
.ws-dashboard-page *, .ws-dashboard-page *::before, .ws-dashboard-page *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.ws-dashboard-page {
    background: #0F0F0F;
    color: #F4F0EC;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    position: relative;
}

.ws-canvas {
    max-width: 820px;
    margin: 30px auto;
    padding: 0 24px;
}

.ws-name-header {
    text-align: center;
    margin-bottom: 28px;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.ws-name-header.ws-visible { opacity: 1; transform: translateY(0); }
.ws-name-header h1 {
    font-size: 32px;
    font-weight: 800;
    letter-spacing: 4px;
    background: linear-gradient(90deg, #BC8034, #D4A04A, #F4F0EC, #D4A04A, #BC8034);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: wsShimmer 4s linear infinite;
}
.ws-name-header .ws-tagline {
    font-family: 'Caveat', cursive;
    font-size: 18px;
    color: #D4A04A;
    margin-top: 2px;
}
@keyframes wsShimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
}

.ws-intro {
    text-align: center;
    margin-bottom: 28px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}
.ws-intro p {
    font-size: 14px;
    line-height: 1.8;
    color: rgba(244, 240, 236, 0.55);
    font-weight: 300;
}

.ws-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    grid-auto-flow: dense;
}
.ws-span2 { grid-column: span 2; }

.ws-el {
    opacity: 0;
    transform: translateY(12px) scale(0.97);
    transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.ws-el.ws-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.ws-card {
    background: #1E1B1A;
    border: 1px solid rgba(188, 128, 52, 0.18);
    border-radius: 14px;
    padding: 22px 24px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.ws-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #BC8034, transparent);
    opacity: 0;
    transition: opacity 0.3s;
}
.ws-card:hover::before { opacity: 1; }
.ws-card:hover {
    border-color: rgba(188, 128, 52, 0.5);
    box-shadow: 0 0 25px rgba(188, 128, 52, 0.1), 0 4px 16px rgba(0,0,0,0.3);
    transform: translateY(-2px) scale(1.01);
}
.ws-card::after {
    content: '+';
    position: absolute;
    top: 16px; right: 18px;
    width: 20px; height: 20px;
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; font-weight: 300;
    color: rgba(188, 128, 52, 0.35);
    border: 1px solid rgba(188, 128, 52, 0.15);
    border-radius: 50%;
    transition: color 0.3s, border-color 0.3s, transform 0.3s;
}
.ws-card:hover::after {
    color: #D4A04A;
    border-color: rgba(212, 160, 74, 0.5);
}
.ws-card.ws-expanded::after {
    content: '\\2212';
    color: rgba(188, 128, 52, 0.5);
    transform: rotate(0deg);
}

.ws-card-hint {
    display: flex; align-items: center; justify-content: center; gap: 6px;
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid rgba(188, 128, 52, 0.08);
    font-size: 11px;
    letter-spacing: 0.5px;
    color: rgba(212, 160, 74, 0.6);
    animation: wsHintPulse 2.5s ease-in-out infinite;
    transition: opacity 0.4s, max-height 0.4s, margin-top 0.4s, padding-top 0.4s;
}
.ws-card-hint svg {
    animation: wsHintBounce 2.5s ease-in-out infinite;
}
.ws-card.ws-expanded .ws-card-hint { opacity: 0; max-height: 0; margin-top: 0; padding-top: 0; pointer-events: none; overflow: hidden; }
@keyframes wsHintPulse {
    0%, 100% { color: rgba(212, 160, 74, 0.4); }
    50% { color: rgba(212, 160, 74, 0.85); }
}
@keyframes wsHintBounce {
    0%, 100% { transform: translateY(0); }
    40% { transform: translateY(-3px); }
    60% { transform: translateY(1px); }
}

.ws-mini {
    background: #1E1B1A;
    border: 1px solid rgba(188, 128, 52, 0.18);
    border-radius: 14px;
    padding: 20px 16px;
    cursor: default;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 8px;
    overflow: hidden;
}
.ws-mini::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #BC8034, transparent);
    opacity: 0;
    transition: opacity 0.3s;
}
.ws-mini:hover::before { opacity: 1; }
.ws-mini:hover {
    border-color: rgba(188, 128, 52, 0.5);
    box-shadow: 0 0 25px rgba(188, 128, 52, 0.1), 0 4px 16px rgba(0,0,0,0.3);
    transform: translateY(-2px) scale(1.01);
}

.ws-mini-icon { line-height: 1; display: flex; align-items: center; justify-content: center; }
.ws-mini-icon svg { width: 28px; height: 28px; }
.ws-mini-label { font-size: 9px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #BC8034; }
.ws-mini-value { font-size: 15px; font-weight: 600; color: #F4F0EC; line-height: 1.3; }
.ws-mini-sub { font-size: 11px; color: rgba(244, 240, 236, 0.45); }

.ws-anim-pulse { animation: wsIconPulse 3s ease-in-out infinite; }
.ws-anim-heartbeat { animation: wsIconHeartbeat 2s ease-in-out infinite; }
.ws-anim-glow { animation: wsIconGlow 3s ease-in-out infinite; }
.ws-anim-sway { animation: wsIconSway 4s ease-in-out infinite; }
.ws-anim-float { animation: wsIconFloat 3.5s ease-in-out infinite; }

@keyframes wsIconPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.12); opacity: 0.85; }
}
@keyframes wsIconHeartbeat {
    0%, 100% { transform: scale(1); }
    14% { transform: scale(1.2); }
    28% { transform: scale(1); }
    42% { transform: scale(1.15); }
    56% { transform: scale(1); }
}
@keyframes wsIconGlow {
    0%, 100% { filter: drop-shadow(0 0 2px rgba(188, 128, 52, 0.2)); }
    50% { filter: drop-shadow(0 0 8px rgba(188, 128, 52, 0.6)); }
}
@keyframes wsIconSway {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(6deg); }
    75% { transform: rotate(-6deg); }
}
@keyframes wsIconFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
}

.ws-label { font-size: 9px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #BC8034; margin-bottom: 8px; }
.ws-title { font-size: 22px; font-weight: 700; line-height: 1.2; margin-bottom: 4px; }
.ws-subtitle { font-family: 'Caveat', cursive; font-size: 17px; color: #D4A04A; }
.ws-dim { color: rgba(244, 240, 236, 0.35); }
.ws-bright { color: #F4F0EC; font-weight: 600; }
.ws-gold { color: #BC8034; }
.ws-gold-bright { color: #D4A04A; font-weight: 600; }

.ws-detail {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, margin-top 0.3s ease, padding-top 0.3s ease;
    margin-top: 0;
    padding-top: 0;
    border-top: 1px solid transparent;
}
.ws-card.ws-expanded .ws-detail {
    max-height: 500px;
    margin-top: 16px;
    padding-top: 16px;
    border-top-color: rgba(188, 128, 52, 0.12);
}

.ws-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) scale(0.95);
    background: #2D2726;
    border: 1px solid rgba(188, 128, 52, 0.35);
    border-radius: 10px;
    padding: 12px 16px;
    font-size: 12px;
    line-height: 1.5;
    white-space: normal;
    width: max-content;
    max-width: 260px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s, transform 0.25s;
    z-index: 100;
    box-shadow: 0 6px 24px rgba(0,0,0,0.5);
}
.ws-tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #2D2726;
}
.ws-mini:hover .ws-tooltip { opacity: 1; transform: translateX(-50%) scale(1); pointer-events: auto; }

.ws-spectrum { display: flex; align-items: center; gap: 10px; margin: 7px 0; font-size: 12px; }
.ws-spectrum-pole { width: 24px; text-align: center; font-weight: 600; font-size: 13px; }
.ws-spectrum-pole.ws-active { color: #D4A04A; }
.ws-spectrum-pole.ws-inactive { color: rgba(244, 240, 236, 0.25); }
.ws-spectrum-track { flex: 1; height: 2px; background: rgba(244, 240, 236, 0.1); position: relative; border-radius: 1px; }
.ws-spectrum-dot {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #D4A04A;
    box-shadow: 0 0 6px rgba(188, 128, 52, 0.5);
    transition: left 1s ease 0.3s;
    left: 50%;
}
.ws-visible .ws-spectrum-dot { left: var(--pos); }

.ws-stack-item { display: flex; align-items: center; gap: 10px; padding: 6px 0; font-size: 12px; }
.ws-stack-badge { width: 30px; height: 30px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 11px; flex-shrink: 0; }
.ws-stack-1 { background: rgba(188, 128, 52, 0.3); color: #D4A04A; }
.ws-stack-2 { background: rgba(188, 128, 52, 0.2); color: #BC8034; }
.ws-stack-3 { background: rgba(188, 128, 52, 0.1); color: rgba(188, 128, 52, 0.6); }
.ws-stack-4 { background: rgba(244, 240, 236, 0.04); color: rgba(244, 240, 236, 0.25); }

.ws-ocean-row { display: flex; align-items: center; gap: 8px; margin: 8px 0; font-size: 12px; }
.ws-ocean-left { width: 120px; text-align: right; flex-shrink: 0; }
.ws-ocean-right { width: 120px; text-align: left; flex-shrink: 0; }
.ws-ocean-track { flex: 1; height: 2px; background: rgba(244, 240, 236, 0.1); position: relative; border-radius: 1px; }
.ws-ocean-dot {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #D4A04A;
    box-shadow: 0 0 6px rgba(188, 128, 52, 0.5);
    transition: left 1.3s ease 0.3s;
    left: 50%;
}
.ws-visible .ws-ocean-dot { left: var(--pos); }

.ws-via-item { display: flex; align-items: center; gap: 10px; padding: 5px 0; }
.ws-via-rank { width: 22px; height: 22px; border-radius: 50%; background: rgba(188, 128, 52, 0.2); display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; color: #D4A04A; flex-shrink: 0; }
.ws-via-name { font-weight: 500; font-size: 13px; }
.ws-via-virtue { font-size: 11px; color: rgba(244, 240, 236, 0.4); margin-left: auto; }

.ws-num-grid { display: flex; gap: 12px; justify-content: space-between; }
.ws-num-cell { text-align: center; flex: 1; }
.ws-num-big { font-size: 26px; font-weight: 800; color: #D4A04A; line-height: 1; }
.ws-num-label { font-size: 8px; text-transform: uppercase; letter-spacing: 1px; color: rgba(244, 240, 236, 0.4); margin-top: 4px; }
.ws-num-meaning { font-size: 9px; color: rgba(244, 240, 236, 0.35); margin-top: 2px; }

.ws-disc-row { display: flex; align-items: center; gap: 10px; margin: 5px 0; font-size: 12px; }
.ws-disc-letter { width: 20px; font-weight: 700; font-size: 14px; }
.ws-disc-bar { flex: 1; height: 8px; background: rgba(244, 240, 236, 0.08); border-radius: 4px; overflow: hidden; }
.ws-disc-bar .ws-fill { height: 100%; border-radius: 4px; transition: width 1.3s ease 0.3s; width: 0; }
.ws-visible .ws-disc-bar .ws-fill { width: var(--fill); }
.ws-disc-desc { font-size: 11px; color: rgba(244, 240, 236, 0.45); width: 140px; text-align: right; flex-shrink: 0; }

.ws-bg-geo {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 500px; height: 500px;
    opacity: 0.02;
    pointer-events: none;
    z-index: 0;
    animation: wsGeoRotate 90s linear infinite;
}
@keyframes wsGeoRotate { to { transform: translate(-50%, -50%) rotate(360deg); } }

.ws-particle {
    position: absolute;
    width: 2px; height: 2px;
    background: #BC8034;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    animation: wsPFloat 8s ease-in-out infinite;
}
@keyframes wsPFloat {
    0% { opacity: 0; transform: translateY(0) scale(0); }
    15% { opacity: 0.25; transform: translateY(-15px) scale(1); }
    85% { opacity: 0.08; transform: translateY(-60px) scale(0.4); }
    100% { opacity: 0; transform: translateY(-80px) scale(0); }
}

@media (max-width: 700px) {
    .ws-grid { grid-template-columns: 1fr; }
    .ws-span2 { grid-column: span 1; }
    .ws-name-header h1 { font-size: 24px; }
    .ws-ocean-left, .ws-ocean-right { width: 90px; font-size: 10px; }
    .ws-disc-desc { width: 110px; font-size: 10px; }
}
`;
    document.head.appendChild(style);

    // === HTML ===
    var container = document.createElement('div');
    container.className = 'ws-dashboard-page';
    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];
    anchor.parentNode.insertBefore(container, anchor.nextSibling);

    container.innerHTML = `
<svg class="ws-bg-geo" viewBox="0 0 400 400">
  <circle cx="200" cy="200" r="180" fill="none" stroke="#BC8034" stroke-width="0.5"/>
  <circle cx="200" cy="200" r="130" fill="none" stroke="#BC8034" stroke-width="0.3"/>
  <circle cx="200" cy="200" r="80" fill="none" stroke="#BC8034" stroke-width="0.3"/>
  <polygon points="200,20 370,295 30,295" fill="none" stroke="#BC8034" stroke-width="0.3"/>
  <polygon points="200,380 30,105 370,105" fill="none" stroke="#BC8034" stroke-width="0.3"/>
</svg>

<div class="ws-canvas">
  <div class="ws-name-header ws-el">
    <h1>STEVEN SOLBACH</h1>
    <div class="ws-tagline">Eine Seele mit einem Auftrag</div>
  </div>

  <div class="ws-intro ws-el">
    <p>Wer bin ich - wirklich? Nicht die Kurzversion f\u00fcr LinkedIn. Sondern das volle Bild: 15 Systeme, die zusammen zeigen, wie ich denke, f\u00fchle, entscheide und f\u00fchre. Kein System allein erz\u00e4hlt die ganze Geschichte. Aber zusammen ergeben sie ein Muster, das sich nicht erfinden l\u00e4sst.</p>
  </div>

  <div class="ws-grid">
    <!-- ENFP -->
    <div class="ws-el ws-card ws-span2" onclick="this.classList.toggle('ws-expanded')">
      <div class="ws-label">Myers-Briggs</div>
      <div class="ws-title">ENFP</div>
      <div class="ws-subtitle">Vision\u00e4r mit Wertekompass</div>
      <div style="margin-top:12px;">
        <div class="ws-spectrum"><span class="ws-spectrum-pole ws-active">E</span><div class="ws-spectrum-track"><div class="ws-spectrum-dot" style="--pos:25%;"></div></div><span class="ws-spectrum-pole ws-inactive">I</span></div>
        <div class="ws-spectrum"><span class="ws-spectrum-pole ws-active">N</span><div class="ws-spectrum-track"><div class="ws-spectrum-dot" style="--pos:10%;"></div></div><span class="ws-spectrum-pole ws-inactive">S</span></div>
        <div class="ws-spectrum"><span class="ws-spectrum-pole ws-active">F</span><div class="ws-spectrum-track"><div class="ws-spectrum-dot" style="--pos:35%;"></div></div><span class="ws-spectrum-pole ws-inactive">T</span></div>
        <div class="ws-spectrum"><span class="ws-spectrum-pole ws-active">P</span><div class="ws-spectrum-track"><div class="ws-spectrum-dot" style="--pos:20%;"></div></div><span class="ws-spectrum-pole ws-inactive">J</span></div>
      </div>
      <div class="ws-detail">
        <div style="font-size:9px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#BC8034; margin-bottom:8px;">Kognitiver Stack</div>
        <div class="ws-stack-item"><div class="ws-stack-badge ws-stack-1">Ne</div><div><span class="ws-bright">Extravertierte Intuition</span><br><span style="font-size:10px; color:rgba(244,240,236,0.45);">Dominant - Muster, M\u00f6glichkeiten, Verbindungen</span></div></div>
        <div class="ws-stack-item"><div class="ws-stack-badge ws-stack-2">Fi</div><div><span class="ws-bright">Introvertiertes F\u00fchlen</span><br><span style="font-size:10px; color:rgba(244,240,236,0.45);">Auxiliar - Innerer Wertekompass, Authentizit\u00e4t</span></div></div>
        <div class="ws-stack-item"><div class="ws-stack-badge ws-stack-3">Te</div><div><span style="color:rgba(244,240,236,0.5);">Extravertiertes Denken</span><br><span style="font-size:10px; color:rgba(244,240,236,0.3);">Terti\u00e4r - Systematisches Umsetzen</span></div></div>
        <div class="ws-stack-item"><div class="ws-stack-badge ws-stack-4">Si</div><div><span class="ws-dim">Introvertiertes Empfinden</span><br><span style="font-size:10px; color:rgba(244,240,236,0.18);">Inferior - Routine, Details</span></div></div>
        <div style="margin-top:10px; padding:8px; background:rgba(188,128,52,0.06); border-radius:6px; font-size:10px; color:rgba(244,240,236,0.45);"><span class="ws-gold">Temperament:</span> NF Idealist \u00b7 <span class="ws-gold">Style:</span> Get Things Going</div>
      </div>
      <div class="ws-card-hint">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        Klicke um zu \u00f6ffnen
      </div>
    </div>

    <!-- Enneagram -->
    <div class="ws-el ws-card" onclick="this.classList.toggle('ws-expanded')">
      <div class="ws-label">Enneagram</div>
      <div class="ws-title">5w4</div>
      <div class="ws-subtitle">Der Bilderst\u00fcrmer</div>
      <div style="margin-top:8px; font-size:12px; color:rgba(244,240,236,0.5);">"Ich muss verstehen" + k\u00fcnstlerische Tiefe</div>
      <div class="ws-detail">
        <div style="font-size:9px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#BC8034; margin-bottom:8px;">Tritype 5-4-1</div>
        <div style="display:flex; gap:6px; margin-bottom:12px;">
          <div style="flex:1; text-align:center; padding:10px 4px; background:rgba(188,128,52,0.1); border-radius:8px;"><div style="font-size:8px; text-transform:uppercase; letter-spacing:1px; color:#BC8034;">Kopf</div><div style="font-size:22px; font-weight:800; color:#D4A04A;">5</div><div style="font-size:9px; color:rgba(244,240,236,0.45);">Verstehen</div></div>
          <div style="flex:1; text-align:center; padding:10px 4px; background:rgba(188,128,52,0.07); border-radius:8px;"><div style="font-size:8px; text-transform:uppercase; letter-spacing:1px; color:#BC8034;">Herz</div><div style="font-size:22px; font-weight:800; color:#D4A04A;">4</div><div style="font-size:9px; color:rgba(244,240,236,0.45);">Echt sein</div></div>
          <div style="flex:1; text-align:center; padding:10px 4px; background:rgba(188,128,52,0.04); border-radius:8px;"><div style="font-size:8px; text-transform:uppercase; letter-spacing:1px; color:#BC8034;">Bauch</div><div style="font-size:22px; font-weight:800; color:#D4A04A;">1</div><div style="font-size:9px; color:rgba(244,240,236,0.45);">Richtig machen</div></div>
        </div>
        <div style="font-size:9px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#BC8034; margin-bottom:6px;">Instinktvariante</div>
        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <span style="padding:3px 10px; background:rgba(188,128,52,0.15); border-radius:16px; font-size:11px;"><span class="ws-gold-bright">sx</span> <span style="color:rgba(244,240,236,0.45);">Intensit\u00e4t</span></span>
          <span style="padding:3px 10px; background:rgba(188,128,52,0.07); border-radius:16px; font-size:11px;"><span class="ws-gold">sp</span> <span style="color:rgba(244,240,236,0.45);">Sicherheit</span></span>
          <span style="padding:3px 10px; background:rgba(244,240,236,0.02); border-radius:16px; font-size:11px;"><span class="ws-dim">so</span> <span class="ws-dim">Sozial</span></span>
        </div>
      </div>
    </div>

    <!-- DISC -->
    <div class="ws-el ws-card" onclick="this.classList.toggle('ws-expanded')">
      <div class="ws-label">DISC</div>
      <div class="ws-title" style="font-size:24px;">ID</div>
      <div style="margin-top:8px;">
        <div class="ws-disc-row"><span class="ws-disc-letter ws-gold-bright">I</span><div class="ws-disc-bar"><div class="ws-fill" style="--fill:80%; background:#D4A04A;"></div></div><span class="ws-disc-desc">Begeistern, mitnehmen</span></div>
        <div class="ws-disc-row"><span class="ws-disc-letter ws-gold">D</span><div class="ws-disc-bar"><div class="ws-fill" style="--fill:68%; background:#BC8034;"></div></div><span class="ws-disc-desc">Richtung geben</span></div>
        <div class="ws-disc-row"><span class="ws-disc-letter" style="color:rgba(188,128,52,0.4);">C</span><div class="ws-disc-bar"><div class="ws-fill" style="--fill:50%; background:rgba(188,128,52,0.35);"></div></div><span class="ws-disc-desc">Analyse als Check</span></div>
        <div class="ws-disc-row"><span class="ws-disc-letter ws-dim">S</span><div class="ws-disc-bar"><div class="ws-fill" style="--fill:20%; background:rgba(244,240,236,0.12);"></div></div><span class="ws-disc-desc" style="color:rgba(244,240,236,0.25);">Routine meiden</span></div>
      </div>
      <div class="ws-detail">
        <div style="font-size:11px; line-height:1.7; color:rgba(244,240,236,0.45);">
          <span class="ws-gold">I f\u00fchrt:</span> Menschen inspirieren und Begeisterung entfachen.<br>
          <span class="ws-gold">D unterst\u00fctzt:</span> Klare Richtung vorgeben, wenn es drauf ankommt.<br>
          <span style="color:rgba(188,128,52,0.4);">C als Check:</span> Analytisch pr\u00fcfen bevor es rausgeht.<br>
          <span class="ws-dim">S bewusst niedrig:</span> Kein Bed\u00fcrfnis nach Stabilit\u00e4t oder Routine.
        </div>
      </div>
    </div>

    <!-- Human Design -->
    <div class="ws-el ws-card ws-span2" onclick="this.classList.toggle('ws-expanded')">
      <div class="ws-label">Human Design</div>
      <div class="ws-title" style="font-size:18px;">4/6 Manifestierender Generator</div>
      <div class="ws-subtitle">Reagiert UND initiiert</div>
      <div style="margin-top:10px; display:flex; gap:12px; font-size:11px; flex-wrap:wrap;">
        <span><span class="ws-gold">Strategie:</span> Bauchreaktion folgen</span>
        <span><span class="ws-gold">Signatur:</span> Zufriedenheit</span>
        <span><span class="ws-gold">Nicht-Selbst:</span> <span class="ws-dim">Frustration</span></span>
      </div>
      <div class="ws-detail">
        <div style="font-size:9px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#BC8034; margin-bottom:8px;">Inkarnationskreuz der Sphinx</div>
        <div style="font-size:11px; color:rgba(244,240,236,0.4); margin-bottom:10px;">Alle 4 Tore im G-Zentrum (Identit\u00e4t) - extrem selten</div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
          <div style="padding:8px; background:rgba(188,128,52,0.07); border-radius:6px;"><span style="font-size:18px; font-weight:800; color:#D4A04A;">13</span> <span style="font-size:11px;">Zuh\u00f6rer</span><div style="font-size:9px; color:rgba(244,240,236,0.35);">Weisheit durch Geschichten</div></div>
          <div style="padding:8px; background:rgba(188,128,52,0.07); border-radius:6px;"><span style="font-size:18px; font-weight:800; color:#D4A04A;">7</span> <span style="font-size:11px;">F\u00fchrung</span><div style="font-size:9px; color:rgba(244,240,236,0.35);">Vorbild, nicht Macht</div></div>
          <div style="padding:8px; background:rgba(188,128,52,0.07); border-radius:6px;"><span style="font-size:18px; font-weight:800; color:#D4A04A;">1</span> <span style="font-size:11px;">Selbstausdruck</span><div style="font-size:9px; color:rgba(244,240,236,0.35);">Kreativit\u00e4t, Originalit\u00e4t</div></div>
          <div style="padding:8px; background:rgba(188,128,52,0.07); border-radius:6px;"><span style="font-size:18px; font-weight:800; color:#D4A04A;">2</span> <span style="font-size:11px;">Richtung</span><div style="font-size:9px; color:rgba(244,240,236,0.35);">Innerer Kompass</div></div>
        </div>
        <div style="margin-top:10px; display:flex; gap:8px; font-size:11px;">
          <span style="padding:4px 10px; background:rgba(188,128,52,0.05); border-radius:6px;"><span class="ws-gold">4</span> Opportunist</span>
          <span style="padding:4px 10px; background:rgba(188,128,52,0.05); border-radius:6px;"><span class="ws-gold">6</span> Rollenvorbild</span>
        </div>
      </div>
    </div>

    <!-- VIA -->
    <div class="ws-el ws-card" onclick="this.classList.toggle('ws-expanded')">
      <div class="ws-label">VIA Signaturst\u00e4rken</div>
      <div class="ws-via-item"><div class="ws-via-rank">1</div><div class="ws-via-name">Ehrlichkeit</div><div class="ws-via-virtue">Mut</div></div>
      <div class="ws-via-item"><div class="ws-via-rank">2</div><div class="ws-via-name">Spiritualit\u00e4t</div><div class="ws-via-virtue">Transzendenz</div></div>
      <div class="ws-via-item"><div class="ws-via-rank">3</div><div class="ws-via-name">Weitsicht</div><div class="ws-via-virtue">Weisheit</div></div>
      <div class="ws-via-item"><div class="ws-via-rank">4</div><div class="ws-via-name">Klugheit</div><div class="ws-via-virtue">M\u00e4\u00dfigung</div></div>
      <div class="ws-via-item"><div class="ws-via-rank">5</div><div class="ws-via-name">Liebe</div><div class="ws-via-virtue">Menschlichkeit</div></div>
      <div class="ws-detail">
        <div style="font-size:11px; color:rgba(244,240,236,0.45); line-height:1.5;"><span class="ws-gold">Wahrheit und Tiefe f\u00fchren</span>, gepaart mit <span class="ws-gold">Herz</span>. Mut zur Ehrlichkeit als st\u00e4rkste Kraft.</div>
      </div>
    </div>

    <!-- Numerologie -->
    <div class="ws-el ws-card" onclick="this.classList.toggle('ws-expanded')">
      <div class="ws-label">Numerologie</div>
      <div class="ws-num-grid">
        <div class="ws-num-cell"><div class="ws-num-big">3</div><div class="ws-num-label">Life Path</div><div class="ws-num-meaning">Ausdruck</div></div>
        <div class="ws-num-cell"><div class="ws-num-big">5</div><div class="ws-num-label">Birthday</div><div class="ws-num-meaning">Freiheit</div></div>
        <div class="ws-num-cell"><div class="ws-num-big">1</div><div class="ws-num-label">Expression</div><div class="ws-num-meaning">F\u00fchrung</div></div>
        <div class="ws-num-cell"><div class="ws-num-big">8</div><div class="ws-num-label">Soul Urge</div><div class="ws-num-meaning">Meisterschaft</div></div>
        <div class="ws-num-cell"><div class="ws-num-big">11</div><div style="font-size:11px; color:rgba(212,160,74,0.6); margin-top:-3px;">/2</div><div class="ws-num-label">Personality</div><div class="ws-num-meaning">Intuition</div></div>
      </div>
      <div class="ws-detail">
        <div style="font-size:11px; line-height:1.7; color:rgba(244,240,236,0.5);">
          <span class="ws-gold">3</span> Kommunikator, kreativer Ausdruck \u00b7 <span class="ws-gold">5</span> Freiheit, Vielseitigkeit \u00b7 <span class="ws-gold">1</span> Unabh\u00e4ngigkeit, F\u00fchrung<br>
          <span class="ws-gold">8</span> Materielle Meisterschaft \u00b7 <span class="ws-gold">11/2</span> Master Number - Spirituelle Intuition und Inspiration
        </div>
      </div>
    </div>

    <!-- Big Five -->
    <div class="ws-el ws-card ws-span2" onclick="this.classList.toggle('ws-expanded')">
      <div class="ws-label">Big Five / OCEAN</div>
      <div style="margin-top:6px;">
        <div class="ws-ocean-row"><span class="ws-ocean-left ws-bright">Offenheit</span><div class="ws-ocean-track"><div class="ws-ocean-dot" style="--pos:5%;"></div></div><span class="ws-ocean-right ws-dim">Konventionalit\u00e4t</span></div>
        <div class="ws-ocean-row"><span class="ws-ocean-left" style="color:rgba(244,240,236,0.55);">Gewissenhaftigkeit</span><div class="ws-ocean-track"><div class="ws-ocean-dot" style="--pos:58%;"></div></div><span class="ws-ocean-right" style="color:rgba(244,240,236,0.55);">Flexibilit\u00e4t</span></div>
        <div class="ws-ocean-row"><span class="ws-ocean-left" style="color:rgba(244,240,236,0.55);">Extraversion</span><div class="ws-ocean-track"><div class="ws-ocean-dot" style="--pos:50%;"></div></div><span class="ws-ocean-right" style="color:rgba(244,240,236,0.55);">Introversion</span></div>
        <div class="ws-ocean-row"><span class="ws-ocean-left" style="color:rgba(244,240,236,0.55);">Vertr\u00e4glichkeit</span><div class="ws-ocean-track"><div class="ws-ocean-dot" style="--pos:65%;"></div></div><span class="ws-ocean-right" style="color:rgba(244,240,236,0.55);">Unabh\u00e4ngigkeit</span></div>
        <div class="ws-ocean-row"><span class="ws-ocean-left" style="color:rgba(244,240,236,0.55);">Reaktivit\u00e4t</span><div class="ws-ocean-track"><div class="ws-ocean-dot" style="--pos:85%;"></div></div><span class="ws-ocean-right ws-bright">Stabilit\u00e4t</span></div>
      </div>
      <div class="ws-detail">
        <div style="font-size:11px; line-height:1.7; color:rgba(244,240,236,0.45);">
          <span class="ws-gold">Offenheit extrem hoch:</span> Neugier, Kreativit\u00e4t, unkonventionelles Denken.<br>
          <span class="ws-gold">Gewissenhaftigkeit gespalten:</span> Standards hoch, Beharrlichkeit niedrig.<br>
          <span class="ws-gold">Extraversion ambivert:</span> Braucht Menschen UND Alleinsein.<br>
          <span class="ws-gold">Unabh\u00e4ngigkeit:</span> Wahrheit vor Harmonie, direkt statt diplomatisch.<br>
          <span class="ws-gold">Emotional stabil:</span> Belastbar, gelassen unter Druck.
        </div>
      </div>
    </div>

    <!-- Mini-Cards: Astrologie + Chronotyp -->
    <div class="ws-el ws-mini">
      <div class="ws-mini-icon ws-anim-glow"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A04A" stroke-width="1.5" stroke-linecap="round"><path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z"/><path d="M5 17l1 3 3-1M19 17l-1 3-3-1M12 19v3" opacity="0.4"/></svg></div>
      <div class="ws-mini-label">Astrologie</div>
      <div style="font-size:12px; line-height:1.8;"><div><span class="ws-gold">\u2609 Sonne</span> <span class="ws-bright">Wassermann</span></div><div><span class="ws-gold">\u263d Mond</span> <span class="ws-bright">Sch\u00fctze</span></div><div><span class="ws-gold">AC</span> <span class="ws-bright">Steinbock</span></div></div>
      <div class="ws-tooltip"><span class="ws-gold">Sonne</span> = Kern: unabh\u00e4ngig, vision\u00e4r<br><span class="ws-gold">Mond</span> = Innenleben: optimistisch, frei<br><span class="ws-gold">Aszendent</span> = Auftreten: strukturiert</div>
    </div>

    <div class="ws-el ws-mini">
      <div class="ws-mini-icon ws-anim-pulse"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A04A" stroke-width="1.5" stroke-linecap="round"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/></svg></div>
      <div class="ws-mini-label">Chronotyp</div>
      <div class="ws-mini-value">Wolf</div>
      <div class="ws-mini-sub">Nachtaktiv. Kreativ ab 22 Uhr.</div>
      <div class="ws-tooltip">Sp\u00e4ttyp. Kreative Energie abends und nachts. Morgenroutinen = nat\u00fcrlicher Feind.</div>
    </div>

    <!-- Mini-Cards: Chinesisch + Love Language -->
    <div class="ws-el ws-mini">
      <div class="ws-mini-icon ws-anim-sway"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A04A" stroke-width="1.5" stroke-linecap="round"><path d="M12 22V8"/><path d="M12 8c-2-3-5-5-9-5 0 4 2 7 5 9"/><path d="M12 8c2-3 5-5 9-5 0 4-2 7-5 9"/></svg></div>
      <div class="ws-mini-label">Chinesisch</div>
      <div class="ws-mini-value">Holz-Hund</div>
      <div class="ws-mini-sub">Loyal \u00b7 Idealistisch \u00b7 1994</div>
      <div class="ws-tooltip">Loyal, idealistisch, ehrlich. Der w\u00e4rmste aller Hund-Typen. Holz = Wachstum, Mitgef\u00fchl, Flexibilit\u00e4t.</div>
    </div>

    <div class="ws-el ws-mini">
      <div class="ws-mini-icon ws-anim-heartbeat"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A04A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg></div>
      <div class="ws-mini-label">Love Language</div>
      <div class="ws-mini-value">Acts of Service</div>
      <div class="ws-mini-sub">Liebe durch Handlungen</div>
      <div class="ws-tooltip">Nicht Worte, nicht Geschenke - tun. Hilfsbereitschaft ist die tiefste Form der Zuneigung.</div>
    </div>

    <!-- Mini-Cards: Four Tendencies + Attachment -->
    <div class="ws-el ws-mini">
      <div class="ws-mini-icon ws-anim-float"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A04A" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r="0.5" fill="#D4A04A"/></svg></div>
      <div class="ws-mini-label">Four Tendencies</div>
      <div class="ws-mini-value">Questioner</div>
      <div class="ws-mini-sub">Innere \u00dcberzeugung zuerst</div>
      <div class="ws-tooltip">Hinterfragt alles - innere UND \u00e4u\u00dfere Erwartungen. Handelt nur, wenn es f\u00fcr ihn Sinn ergibt.</div>
    </div>

    <div class="ws-el ws-mini">
      <div class="ws-mini-icon ws-anim-glow"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A04A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
      <div class="ws-mini-label">Attachment Style</div>
      <div class="ws-mini-value">Secure</div>
      <div class="ws-mini-sub">Sicher + Autonomie</div>
      <div class="ws-tooltip">Sicher gebunden, braucht Freiraum. Bindungsf\u00e4hig ohne sich zu verlieren.</div>
    </div>

    <!-- Geburtsdaten -->
    <div class="ws-el ws-mini ws-span2">
      <div class="ws-mini-icon ws-anim-pulse"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A04A" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="2" fill="#D4A04A"/></svg></div>
      <div class="ws-mini-label">Geburtsdaten</div>
      <div class="ws-mini-value">05.02.1994 \u00b7 7:10 \u00b7 Kirchen (Sieg)</div>
      <div class="ws-mini-sub">Basis f\u00fcr Astrologie, Human Design, Numerologie</div>
    </div>
  </div>
</div>
`;

    // === PARTICLES ===
    var i;
    for (i = 0; i < 12; i++) {
        var p = document.createElement('div');
        p.className = 'ws-particle';
        p.style.left = (Math.random() * 100) + '%';
        p.style.top = (Math.random() * 100) + '%';
        p.style.animationDelay = (Math.random() * 8) + 's';
        p.style.animationDuration = (6 + Math.random() * 4) + 's';
        container.appendChild(p);
    }

    // === INTERSECTION OBSERVER ===
    var els = container.querySelectorAll('.ws-el');

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var el = entry.target;
                    var idx = Array.prototype.indexOf.call(els, el);
                    setTimeout(function() {
                        el.classList.add('ws-visible');
                    }, idx * 80);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.1 });

        for (i = 0; i < els.length; i++) {
            observer.observe(els[i]);
        }
    }

    // === FALLBACK: trigger above-fold elements ===
    setTimeout(function() {
        for (var j = 0; j < els.length; j++) {
            var rect = els[j].getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                (function(el, delay) {
                    setTimeout(function() { el.classList.add('ws-visible'); }, delay);
                })(els[j], j * 80);
            }
        }
    }, 100);

})();

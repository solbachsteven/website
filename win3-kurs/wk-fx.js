// Win³ Kurs Landingpage - FX Effects (Standalone)
// Cursor Ring, Particles, Glow - Optional Enhancement
// Loaded via: <script src="https://solbachsteven.github.io/website/win3-kurs/wk-fx.js"></script>
(function() {
    if (window.__WK_FX_LOADED) return;
    window.__WK_FX_LOADED = true;

    // Skip in editor mode
    var isEditor = window.location.href.match(/editor|edit|funnel\/manage/);
    if (isEditor) return;

    // === FX CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'wk-fx');
    style.textContent = `
/* ======== FX EFFECTS ======== */
.wk-cursor-ring {
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid #BC8034;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999999;
    transition: transform 0.2s ease-out;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    display: none;
    left: 0;
    top: 0;
}
.wk-fx-bg, .wk-fx-fg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
.wk-fx-bg { z-index: 0; }
.wk-fx-fg { z-index: 9999990; }
.wk-particle {
    position: absolute;
    background: #BC8034;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: 0 0 4px rgba(188, 128, 52, 0.4);
}
.wk-glow {
    position: fixed;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(188, 128, 52, 0.15) 0%, transparent 70%);
    pointer-events: none;
    transform: translate(-50%, -50%);
    filter: blur(40px);
    z-index: 0;
}
@media (max-width: 768px) {
    .wk-cursor-ring, .wk-glow { display: none !important; }
}
@media (min-width: 769px) {
    .wk-page { cursor: none; }
    .wk-page a, .wk-page button { cursor: none; }
}
`;
    document.head.appendChild(style);

    // === FX LOGIC ===
    var isMobile = window.matchMedia('(max-width: 768px)').matches;

    // Cursor Ring
    var ring = document.createElement('div');
    ring.className = 'wk-cursor-ring';
    document.body.appendChild(ring);

    // FX Layers
    var glow = document.createElement('div');
    glow.className = 'wk-glow';
    document.body.appendChild(glow);

    var bgLayer = document.createElement('div');
    bgLayer.className = 'wk-fx-bg';
    document.body.appendChild(bgLayer);

    var fgLayer = document.createElement('div');
    fgLayer.className = 'wk-fx-fg';
    document.body.appendChild(fgLayer);

    if (!isMobile) ring.style.display = 'block';

    var particles = [];
    var mX = window.innerWidth / 2, mY = window.innerHeight / 2;
    var gX = mX, gY = mY;

    function Particle(parent) {
        this.el = document.createElement('div');
        this.el.className = 'wk-particle';
        parent.appendChild(this.el);
        this.reset();
    }
    Particle.prototype.reset = function() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 2.5 + 0.5;
        this.vx = (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3);
        this.vy = (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3);
        this.op = Math.random() * 0.7 + 0.1;
        this.el.style.opacity = this.op;
    };
    Particle.prototype.update = function() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0) this.x = window.innerWidth;
        if (this.x > window.innerWidth) this.x = 0;
        if (this.y < 0) this.y = window.innerHeight;
        if (this.y > window.innerHeight) this.y = 0;
        this.el.style.transform = 'translate3d(' + this.x + 'px,' + this.y + 'px,0)';
        this.el.style.width = this.size + 'px';
        this.el.style.height = this.size + 'px';
    };

    function initParticles() {
        bgLayer.innerHTML = '';
        fgLayer.innerHTML = '';
        particles = [];
        var density = isMobile ? 8000 : 18000;
        var total = Math.floor((window.innerWidth * window.innerHeight) / density);
        for (var i = 0; i < total; i++) {
            var parent = (i < total * 0.66) ? bgLayer : fgLayer;
            particles.push(new Particle(parent));
        }
    }

    if (!isMobile) {
        document.addEventListener('mousemove', function(e) {
            mX = e.clientX; mY = e.clientY;
            ring.style.left = (mX - 10) + 'px';
            ring.style.top = (mY - 10) + 'px';
        });
        document.addEventListener('mouseover', function(e) {
            if (e.target.closest('a, button, .wk-cta-primary'))
                ring.style.transform = 'scale(1.7)';
            else ring.style.transform = 'scale(1)';
        });
    }

    function fxLoop() {
        if (!isMobile) {
            gX += (mX - gX) * 0.08;
            gY += (mY - gY) * 0.08;
            glow.style.left = gX + 'px';
            glow.style.top = gY + 'px';
        }
        for (var i = 0; i < particles.length; i++) {
            particles[i].update();
        }
        requestAnimationFrame(fxLoop);
    }

    window.addEventListener('resize', initParticles);
    initParticles();
    fxLoop();
})();

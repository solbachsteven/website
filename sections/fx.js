/*
 * FX Hintergrund und Mauseffekte - Steven Solbach Website
 * Standalone JS - laedt CSS + HTML + Animationen selbst
 * Source of Truth: Obsidian Vault > FX Hintergrund und Mauseffekte Code.md
 */

/* === CSS Injection === */
(function() {
    var style = document.createElement('style');
    style.setAttribute('data-section', 'fx-effects');
    style.textContent = `
/* 1. DER CURSOR - VORDERGRUND */
.cursor-ring {
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid #BC8034;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999999 !important;
    transition: transform 0.2s ease-out;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    display: none;
    left: 0;
    top: 0;
}

/* 2. DIE EBENEN DER PARTIKEL */
#fx-bg-layer, #fx-fg-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

#fx-bg-layer { z-index: 0; }
#fx-fg-layer { z-index: 9999990; }

.particle {
    position: absolute;
    background: #BC8034;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: 0 0 4px rgba(188, 128, 52, 0.4);
}

/* 3. DAS LICHT (GLOW) */
.glow-element {
    position: fixed;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(188, 128, 52, 0.15) 0%, transparent 70%);
    pointer-events: none;
    transform: translate(-50%, -50%);
    filter: blur(40px);
    z-index: 0;
}

/* 4. CONTENT-LIFT */
.section, .container, .elText, .elHeadline, .elButton {
    position: relative;
    z-index: 5;
}

/* 5. MOBILE WEICHE (CSS) */
@media (max-width: 768px) {
    .cursor-ring, .glow-element {
        display: none !important;
    }
    body.fx-active {
        cursor: auto !important; /* Normaler Finger-Cursor am Handy */
    }
}

@media (min-width: 769px) {
    body.fx-active { cursor: none !important; }
    body.fx-active a, body.fx-active button { cursor: none !important; }
}
    `;
    document.head.appendChild(style);
})();

/* === FX Renderer === */
(function() {
    var isEditor = window.location.href.match(/editor|edit|funnel\/manage/);
    if (isEditor) return;

    // Mobile Check
    var isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Cursor ring appends to body (needs to be on top of everything)
    var ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(ring);

    // FX layers append to body (particles need to be behind/in front of everything)
    var wrapper = document.createElement('div');
    wrapper.id = 'fx-master-wrapper';
    wrapper.innerHTML =
        '<div class="glow-element"></div>' +
        '<div id="fx-bg-layer"></div>' +
        '<div id="fx-fg-layer"></div>';
    document.body.appendChild(wrapper);

    document.body.classList.add('fx-active');
    var glow = wrapper.querySelector('.glow-element');
    var bgLayer = wrapper.querySelector('#fx-bg-layer');
    var fgLayer = wrapper.querySelector('#fx-fg-layer');

    // Ring nur auf Desktop zeigen
    if (!isMobile) ring.style.display = 'block';

    var particles = [];
    var mX = window.innerWidth / 2, mY = window.innerHeight / 2;
    var gX = mX, gY = mY;

    function Particle(parent) {
        this.el = document.createElement('div');
        this.el.className = 'particle';
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

        this.el.style.transform = 'translate3d(' + this.x + 'px, ' + this.y + 'px, 0)';
        this.el.style.width = this.size + 'px';
        this.el.style.height = this.size + 'px';
    };

    function init() {
        bgLayer.innerHTML = '';
        fgLayer.innerHTML = '';
        particles = [];

        // Mobile Dichte erhoehen, damit es nicht leer wirkt
        var density = isMobile ? 8000 : 18000;
        var total = Math.floor((window.innerWidth * window.innerHeight) / density);

        for (var i = 0; i < total; i++) {
            var parent = (i < total * 0.66) ? bgLayer : fgLayer;
            particles.push(new Particle(parent));
        }
    }

    // Maus-Events nur auf Desktop
    if (!isMobile) {
        document.addEventListener('mousemove', function(e) {
            mX = e.clientX; mY = e.clientY;
            ring.style.left = mX - 10 + 'px';
            ring.style.top = mY - 10 + 'px';
        });

        document.addEventListener('mouseover', function(e) {
            if (e.target.closest('a, button, .elButton')) ring.style.transform = 'scale(1.7)';
            else ring.style.transform = 'scale(1)';
        });
    }

    function loop() {
        if (!isMobile) {
            gX += (mX - gX) * 0.08;
            gY += (mY - gY) * 0.08;
            glow.style.left = gX + 'px';
            glow.style.top = gY + 'px';
        }

        for (var i = 0; i < particles.length; i++) {
            particles[i].update();
        }
        requestAnimationFrame(loop);
    }

    window.addEventListener('resize', init);
    init();
    loop();
})();

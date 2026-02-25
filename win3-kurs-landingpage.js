/*
 * Win³ Kurs Landingpage - Orchestrator
 * Laedt alle Win³-Kurs-Sections sequentiell in der richtigen Reihenfolge.
 *
 * Systeme.io Einzeiler:
 * <script src="https://solbachsteven.github.io/website/win3-kurs-landingpage.js"></script>
 *
 * Oder einzelne Sections standalone laden:
 * <script src="https://solbachsteven.github.io/website/win3-kurs/wk-hero.js"></script>
 * <script src="https://solbachsteven.github.io/website/win3-kurs/wk-pain.js"></script>
 * <script src="https://solbachsteven.github.io/website/win3-kurs/wk-journey.js"></script>
 * <script src="https://solbachsteven.github.io/website/win3-kurs/wk-modules.js"></script>
 * <script src="https://solbachsteven.github.io/website/win3-kurs/wk-features.js"></script>
 * <script src="https://solbachsteven.github.io/website/win3-kurs/wk-for-whom.js"></script>
 * <script src="https://solbachsteven.github.io/website/win3-kurs/wk-testimonials.js"></script>
 * <script src="https://solbachsteven.github.io/website/win3-kurs/wk-pricing.js"></script>
 * <script src="https://solbachsteven.github.io/website/win3-kurs/wk-faq.js"></script>
 * <script src="https://solbachsteven.github.io/website/win3-kurs/wk-final-cta.js"></script>
 * <script src="https://solbachsteven.github.io/website/win3-kurs/wk-fx.js"></script>
 */
(function() {
    if (window.__WK_LOADED) {
        console.warn('[WK] Loader bereits ausgefuehrt - ueberspringe.');
        return;
    }
    window.__WK_LOADED = true;

    // Container fuer alle Sections
    var container = document.createElement('div');
    container.className = 'wk-page';
    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];
    anchor.parentNode.insertBefore(container, anchor.nextSibling);

    var BASE = 'https://solbachsteven.github.io/website/win3-kurs/';
    var sections = [
        'wk-hero',
        'wk-pain',
        'wk-journey',
        'wk-modules',
        'wk-features',
        'wk-for-whom',
        'wk-testimonials',
        'wk-pricing',
        'wk-faq',
        'wk-final-cta',
        'wk-fx'
    ];

    function loadNext(i) {
        if (i >= sections.length) {
            console.log('[WK] Alle ' + sections.length + ' Sections geladen.');
            return;
        }
        console.log('[WK] Lade ' + (i+1) + '/' + sections.length + ': ' + sections[i]);
        var s = document.createElement('script');
        s.src = BASE + sections[i] + '.js';
        s.onload = function() {
            console.log('[WK] OK: ' + sections[i]);
            loadNext(i + 1);
        };
        s.onerror = function() {
            console.error('[WK] FEHLER: ' + sections[i]);
            loadNext(i + 1);
        };
        document.head.appendChild(s);
    }
    loadNext(0);
})();

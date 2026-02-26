/*
 * Win\u00b3 Mentoring Landingpage - Orchestrator
 * Laedt alle Mentoring-Sections sequentiell in der richtigen Reihenfolge.
 *
 * Systeme.io Einzeiler:
 * <script src="https://solbachsteven.github.io/website/mentoring-landingpage.js"></script>
 *
 * Oder einzelne Sections standalone laden:
 * <script src="https://solbachsteven.github.io/website/mentoring/wm-hero.js"></script>
 * <script src="https://solbachsteven.github.io/website/mentoring/wm-pain.js"></script>
 * <script src="https://solbachsteven.github.io/website/mentoring/wm-steven.js"></script>
 * <script src="https://solbachsteven.github.io/website/mentoring/wm-journey.js"></script>
 * <script src="https://solbachsteven.github.io/website/mentoring/wm-how.js"></script>
 * <script src="https://solbachsteven.github.io/website/mentoring/wm-includes.js"></script>
 * <script src="https://solbachsteven.github.io/website/mentoring/wm-for-whom.js"></script>
 * <script src="https://solbachsteven.github.io/website/mentoring/wm-testimonials.js"></script>
 * <script src="https://solbachsteven.github.io/website/mentoring/wm-faq.js"></script>
 * <script src="https://solbachsteven.github.io/website/mentoring/wm-final-cta.js"></script>
 * <script src="https://solbachsteven.github.io/website/mentoring/wm-fx.js"></script>
 */
(function() {
    if (window.__WM_LOADED) {
        console.warn('[WM] Loader bereits ausgefuehrt - ueberspringe.');
        return;
    }
    window.__WM_LOADED = true;

    // Container fuer alle Sections
    var container = document.createElement('div');
    container.className = 'wm-page';
    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];
    anchor.parentNode.insertBefore(container, anchor.nextSibling);

    var BASE = 'https://solbachsteven.github.io/website/mentoring/';
    var sections = [
        'wm-hero',
        'wm-pain',
        'wm-steven',
        'wm-journey',
        'wm-how',
        'wm-includes',
        'wm-for-whom',
        'wm-testimonials',
        'wm-faq',
        'wm-final-cta',
        'wm-fx'
    ];

    function loadNext(i) {
        if (i >= sections.length) {
            console.log('[WM] Alle ' + sections.length + ' Sections geladen.');
            return;
        }
        console.log('[WM] Lade ' + (i+1) + '/' + sections.length + ': ' + sections[i]);
        var s = document.createElement('script');
        s.src = BASE + sections[i] + '.js';
        s.onload = function() {
            console.log('[WM] OK: ' + sections[i]);
            loadNext(i + 1);
        };
        s.onerror = function() {
            console.error('[WM] FEHLER: ' + sections[i]);
            loadNext(i + 1);
        };
        document.head.appendChild(s);
    }
    loadNext(0);
})();

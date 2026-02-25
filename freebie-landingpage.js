/*
 * Freebie Landingpage - Orchestrator
 * Laedt alle Freebie-Sections sequentiell in der richtigen Reihenfolge.
 *
 * Systeme.io Einzeiler:
 * <script src="https://solbachsteven.github.io/website/freebie-landingpage.js"></script>
 *
 * Oder einzelne Sections standalone laden:
 * <script src="https://solbachsteven.github.io/website/freebie/fl-hero.js"></script>
 * <script src="https://solbachsteven.github.io/website/freebie/fl-steps.js"></script>
 * <script src="https://solbachsteven.github.io/website/freebie/fl-result.js"></script>
 * <script src="https://solbachsteven.github.io/website/freebie/fl-final-cta.js"></script>
 * <script src="https://solbachsteven.github.io/website/freebie/fl-fx.js"></script>
 */
(function() {
    if (window.__FL_LOADED) {
        console.warn('[FL] Loader bereits ausgefuehrt - ueberspringe.');
        return;
    }
    window.__FL_LOADED = true;

    // Container fuer alle Sections
    var container = document.createElement('div');
    container.className = 'fl-page';
    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];
    anchor.parentNode.insertBefore(container, anchor.nextSibling);

    var BASE = 'https://solbachsteven.github.io/website/freebie/';
    var sections = [
        'fl-hero',
        'fl-steps',
        'fl-result',
        'fl-final-cta',
        'fl-fx'
    ];

    function loadNext(i) {
        if (i >= sections.length) {
            console.log('[FL] Alle ' + sections.length + ' Sections geladen.');
            return;
        }
        console.log('[FL] Lade ' + (i+1) + '/' + sections.length + ': ' + sections[i]);
        var s = document.createElement('script');
        s.src = BASE + sections[i] + '.js';
        s.onload = function() {
            console.log('[FL] OK: ' + sections[i]);
            loadNext(i + 1);
        };
        s.onerror = function() {
            console.error('[FL] FEHLER: ' + sections[i]);
            loadNext(i + 1);
        };
        document.head.appendChild(s);
    }
    loadNext(0);
})();

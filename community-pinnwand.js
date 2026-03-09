/*
 * Community Pinnwand - Orchestrator
 * Laedt alle Community-Sections sequentiell in der richtigen Reihenfolge.
 *
 * Systeme.io Einzeiler:
 * <script src="https://stevensolbach.de/community-pinnwand.js"></script>
 *
 * Oder einzelne Sections standalone laden:
 * <script src="https://stevensolbach.de/community/cp-hero.js"></script>
 * <script src="https://stevensolbach.de/community/cp-pinwall.js"></script>
 * <script src="https://stevensolbach.de/community/cp-final-cta.js"></script>
 * <script src="https://stevensolbach.de/community/cp-fx.js"></script>
 */
(function() {
    if (window.__CP_LOADED) {
        console.warn('[CP] Loader bereits ausgefuehrt - ueberspringe.');
        return;
    }
    window.__CP_LOADED = true;

    // Container fuer alle Sections
    var container = document.createElement('div');
    container.className = 'cp-page';
    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];
    anchor.parentNode.insertBefore(container, anchor.nextSibling);

    var BASE = 'https://stevensolbach.de/community/';
    var sections = [
        'cp-hero',
        'cp-pinwall',
        'cp-final-cta',
        'cp-fx'
    ];

    function loadNext(i) {
        if (i >= sections.length) {
            console.log('[CP] Alle ' + sections.length + ' Sections geladen.');
            return;
        }
        console.log('[CP] Lade ' + (i+1) + '/' + sections.length + ': ' + sections[i]);
        var s = document.createElement('script');
        s.src = BASE + sections[i] + '.js';
        s.onload = function() {
            console.log('[CP] OK: ' + sections[i]);
            loadNext(i + 1);
        };
        s.onerror = function() {
            console.error('[CP] FEHLER: ' + sections[i]);
            loadNext(i + 1);
        };
        document.head.appendChild(s);
    }
    loadNext(0);
})();

/*
 * Steven Solbach Website - Central Loader
 * Laedt alle Sections sequentiell in der richtigen Reihenfolge.
 *
 * Systeme.io Einzeiler:
 * <script src="https://solbachsteven.github.io/website/website.js"></script>
 */
(function() {
    // Guard: verhindere doppelte Ausfuehrung
    if (window.__SS_LOADED) {
        console.warn('[SS-Website] Loader bereits ausgefuehrt - ueberspringe.');
        return;
    }
    window.__SS_LOADED = true;

    // Container fuer alle Sections - wird an der Stelle des Loader-Scripts eingefuegt
    var container = document.createElement('div');
    container.id = 'ss-website';
    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];
    anchor.parentNode.insertBefore(container, anchor.nextSibling);
    window.__SS_CONTAINER = container;

    var BASE = 'https://solbachsteven.github.io/website/sections/';
    var sections = [
        'fx',
        'hero',
        'scroll-indicator',
        'win3-framework',
        'storytelling',
        'drei-wege',
        'testimonials',
        'fuer-wen',
        'final-cta',
        'exit-popup'
    ];

    function loadNext(i) {
        if (i >= sections.length) {
            console.log('[SS-Website] Alle ' + sections.length + ' Sections geladen.');
            return;
        }
        console.log('[SS-Website] Lade ' + (i+1) + '/' + sections.length + ': ' + sections[i]);
        var s = document.createElement('script');
        s.src = BASE + sections[i] + '.js';
        s.onload = function() {
            console.log('[SS-Website] OK: ' + sections[i]);
            loadNext(i + 1);
        };
        s.onerror = function() {
            console.error('[SS-Website] FEHLER: ' + sections[i]);
            loadNext(i + 1);
        };
        document.head.appendChild(s);
    }
    loadNext(0);
})();

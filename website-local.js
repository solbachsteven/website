/*
 * Steven Solbach Website - Universal Loader
 * Laedt alle Sections sequentiell in der richtigen Reihenfolge.
 *
 * Standalone: <script src="website-local.js"></script>
 * Cloudflare Pages: stevensolbach.de
 */
(function() {
    if (window.__SS_LOADED) {
        console.warn('[SS-Website] Loader bereits ausgefuehrt - ueberspringe.');
        return;
    }
    window.__SS_LOADED = true;

    // Container fuer alle Sections
    var container = document.createElement('div');
    container.id = 'ss-website';
    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];
    anchor.parentNode.insertBefore(container, anchor.nextSibling);
    window.__SS_CONTAINER = container;

    var BASE = 'sections/';

    // Portal-URL (fuer Header-Link)
    window.__SS_PORTAL_URL = '/portal.html';

    var sections = [
        'fx',
        'header',
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

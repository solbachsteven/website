// Win³ Academy - Hauptkurs Adapter
// Lädt wl-kurs.js im Portal via Dual-Mode-Boot
(function() {
    if (window.__P_KURS) return;

    var KURS_BASE = window.__W3.SITE_BASE + 'win3-lektionen/';

    // ======== CSS ========
    if (!document.querySelector('style[data-section="p-kurs"]')) {
        var style = document.createElement('style');
        style.setAttribute('data-section', 'p-kurs');
        style.textContent = '\
.wl-loading { padding: 80px 24px; text-align: center; opacity: 0.4; font-size: 14px; }\n\
';
        document.head.appendChild(style);
    }

    // ======== ADAPTER ========
    window.__P_KURS = {
        mount: function(container, lessonId) {
            // Tier-Locking wird von portal.js gehandhabt (renderLockScreen)

            if (window.__WL_KURS_LOADED && window.__WL_KURS && window.__WL_KURS.remount) {
                // Kurs war schon geladen - Root wieder einhängen
                window.__WL_KURS.remount(container);
                if (lessonId) {
                    window.__WL_KURS.showLesson(lessonId);
                } else {
                    window.__WL_KURS.showMatrix();
                }
                return;
            }

            // Erstmaliges Laden
            container.innerHTML = '<div class="wl-loading">Kurs wird geladen...</div>';

            // Portal-Container setzen, damit wl-kurs.js dort rendert
            window.__WL_PORTAL_CONTAINER = container;

            var s = document.createElement('script');
            s.src = KURS_BASE + 'wl-kurs.js';
            s.onload = function() {
                // wl-kurs.js lädt Engine + 13 Lektionen async, dann buildDOM()
                // Warten bis showLesson verfügbar (wird am Ende von buildDOM gesetzt)
                var check = setInterval(function() {
                    if (window.__WL_KURS && window.__WL_KURS.showLesson) {
                        clearInterval(check);
                        // Wenn Deep-Link: zur Lektion navigieren
                        if (lessonId) {
                            window.__WL_KURS.showLesson(lessonId);
                        }
                    }
                }, 100);
            };
            s.onerror = function() {
                container.innerHTML = '<div class="wl-loading">Kurs konnte nicht geladen werden.</div>';
            };
            document.head.appendChild(s);
        },

        teardown: function() {
            if (window.__WL_KURS && window.__WL_KURS.teardown) {
                window.__WL_KURS.teardown();
            }
        }
    };
})();

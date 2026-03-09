// Win³ Academy - Ankerpraktik Adapter
// Token-Passthrough + Embedded Mode
(function() {
    if (window.__P_ANKERPRAKTIK) return;

    var AP_SCRIPT_URL = window.__W3.SITE_BASE + 'ankerpraktik.js';

    // ======== CSS: Portal-Modus-Anpassungen ========
    if (!document.querySelector('style[data-section="p-ankerpraktik"]')) {
        var style = document.createElement('style');
        style.setAttribute('data-section', 'p-ankerpraktik');
        style.textContent = '\
.ap-portal-mode { justify-content: center; padding: 12px 24px; border-bottom: 1px solid rgba(188,128,52,0.1); }\n\
.ap-portal-mode .ap-nav { gap: 4px; }\n\
';
        document.head.appendChild(style);
    }

    // ======== TOKEN SYNC ========
    function syncTokens() {
        // Portal-Session → AP-Session kopieren
        var w3Token = localStorage.getItem('w3_token');
        var w3User = localStorage.getItem('w3_user');
        if (w3Token) {
            // w3_token ist base64-encoded JSON {id, t} - AP braucht denselben Token
            localStorage.setItem('ap_token', w3Token);
        }
        if (w3User) {
            localStorage.setItem('ap_user', w3User);
        }
    }

    // ======== ADAPTER ========
    window.__P_ANKERPRAKTIK = {
        mount: function(container, param) {
            // Tier-Locking wird von portal.js gehandhabt

            // Token-Passthrough
            syncTokens();

            // Portal-Container setzen
            window.__AP_PORTAL_CONTAINER = container;

            if (window.__AP_LOADED && window.__AP && window.__AP.renderApp) {
                // AP war schon geladen - neu rendern
                window.__AP.loadSession();
                window.__AP.renderApp();
            } else {
                // Erstmaliges Laden
                container.innerHTML = '<div style="padding:80px 24px;text-align:center;opacity:0.4;font-size:14px;">Ankerpraktik wird geladen...</div>';

                // __AP_LOCAL Flag setzen wenn auf localhost
                if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
                    window.__AP_LOCAL = true;
                }

                // BASE_PATH setzen bevor AP-Script lädt (verhindert falsche Erkennung von p-ankerpraktik.js)
                window.__AP_BASE_PATH = window.__W3.SITE_BASE + 'ankerpraktik/';

                var s = document.createElement('script');
                s.src = AP_SCRIPT_URL;
                s.onerror = function() {
                    container.innerHTML = '<div style="padding:80px 24px;text-align:center;opacity:0.4;">Ankerpraktik konnte nicht geladen werden.</div>';
                };
                document.head.appendChild(s);
            }
        },

        teardown: function() {
            // Container-Referenz aufräumen (AP wrapper wird durch portal.js content.innerHTML='' zerstört)
            window.__AP_PORTAL_CONTAINER = null;
        }
    };
})();

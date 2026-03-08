// Win³ Community - Ankerpraktik Orchestrator
// Lädt Auth, Writer, History als Module
// Loaded via: <script src="https://solbachsteven.github.io/website/ankerpraktik.js"></script>
(function() {
    if (window.__AP_LOADED) return;
    window.__AP_LOADED = true;

    // === CONFIG ===
    // Cloudflare Worker: Auth, Data (D1) + KI (Anthropic API)
    var API_URL = 'https://win3-community.solbachsteven.workers.dev';
    // Dev-Modus: KI-Calls lokal via claude -p CLI
    var LOCAL_AI_URL = (typeof location !== 'undefined' && (location.hostname === 'localhost' || location.hostname === '127.0.0.1'))
        ? 'http://localhost:3465' : null;
    var LOCAL_KI_PATHS = ['/ankerpraktik/mirror', '/ankerpraktik/coach', '/ankerpraktik/patterns', '/ankerpraktik/development-arc', '/ankerpraktik/test-synthesis'];
    // BASE_PATH dynamisch: Portal-Override, lokal oder GitHub Pages
    var BASE_PATH;
    if (window.__AP_BASE_PATH) {
        BASE_PATH = window.__AP_BASE_PATH;
    } else {
        var scripts = document.getElementsByTagName('script');
        var selfSrc = '';
        for (var si = 0; si < scripts.length; si++) {
            // Exakter Match: nur /ankerpraktik.js am Ende, nicht p-ankerpraktik.js
            if (scripts[si].src && scripts[si].src.match(/\/ankerpraktik\.js(\?|$)/)) {
                selfSrc = scripts[si].src;
                break;
            }
        }
        BASE_PATH = selfSrc ? selfSrc.replace(/ankerpraktik\.js(\?.*)?$/, 'ankerpraktik/') : '/ankerpraktik/';
    }

    // === STATE ===
    var state = {
        user: null,
        token: null,
        currentView: null,
        lesson: null,
        testId: null
    };

    // === FONTS ===
    if (!document.querySelector('link[href*="Poppins"]')) {
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap';
        document.head.appendChild(fontLink);
    }

    // === CSS (Basis) ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'ap-base');
    style.textContent = `
/* ======== RESET & PAGE ======== */
.ap-page {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    color: #FCF0D6;
    background: #2D2726;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.ap-page *, .ap-page *::before, .ap-page *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* ======== HEADER ======== */
.ap-header {
    width: 100%;
    max-width: 800px;
    padding: 24px 24px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.ap-logo {
    font-family: 'Caveat', cursive;
    font-size: 28px;
    color: #BC8034;
    cursor: pointer;
}
.ap-nav {
    display: flex;
    gap: 2px;
    align-items: center;
    background: rgba(45, 39, 38, 0.55);
    border: 1px solid rgba(188, 128, 52, 0.15);
    border-radius: 14px;
    padding: 4px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}
.ap-nav-btn {
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: rgba(252, 240, 214, 0.45);
    padding: 8px 14px 6px;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
}
.ap-nav-btn svg {
    width: 18px;
    height: 18px;
    stroke-width: 1.8;
}
.ap-nav-btn:hover {
    color: rgba(252, 240, 214, 0.7);
    background: rgba(252, 240, 214, 0.04);
}
.ap-nav-btn.ap-active {
    color: #BC8034;
    border-bottom-color: #BC8034;
    background: rgba(188, 128, 52, 0.08);
}
.ap-nav-btn .ap-nav-label {
    font-size: 10px;
    letter-spacing: 0.3px;
}
.ap-user-badge {
    font-size: 12px;
    color: rgba(252, 240, 214, 0.5);
    margin-right: 8px;
}

/* ======== MAIN ======== */
.ap-main {
    width: 100%;
    max-width: 800px;
    padding: 24px;
    flex: 1;
}

/* ======== SHARED COMPONENTS ======== */
.ap-btn {
    background: #BC8034;
    color: #2D2726;
    border: none;
    padding: 12px 28px;
    border-radius: 24px;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}
.ap-btn:hover {
    background: #D4973F;
    transform: translateY(-1px);
}
.ap-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
}
.ap-btn-ghost {
    background: none;
    color: #BC8034;
    border: 1px solid rgba(188, 128, 52, 0.4);
}
.ap-btn-ghost:hover {
    background: rgba(188, 128, 52, 0.1);
}

.ap-card {
    background: rgba(252, 240, 214, 0.05);
    border: 1px solid rgba(188, 128, 52, 0.15);
    border-radius: 16px;
    padding: 28px;
}

.ap-input {
    width: 100%;
    background: rgba(252, 240, 214, 0.08);
    border: 1px solid rgba(188, 128, 52, 0.2);
    border-radius: 12px;
    padding: 14px 18px;
    color: #FCF0D6;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    outline: none;
    transition: border-color 0.3s ease;
}
.ap-input:focus {
    border-color: #BC8034;
}
.ap-input::placeholder {
    color: rgba(252, 240, 214, 0.3);
}

.ap-textarea {
    width: 100%;
    background: rgba(252, 240, 214, 0.06);
    border: 1px solid rgba(188, 128, 52, 0.15);
    border-radius: 12px;
    padding: 18px;
    color: #FCF0D6;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    line-height: 1.7;
    outline: none;
    resize: vertical;
    min-height: 60vh;
    max-height: 80vh;
    transition: border-color 0.3s ease;
}
.ap-textarea:focus {
    border-color: #BC8034;
}
.ap-textarea::placeholder {
    color: rgba(252, 240, 214, 0.25);
}
/* Globale Scrollbar fuer alle AP-Elemente */
.ap-page, .ap-page * {
    scrollbar-color: #BC8034 rgba(45, 39, 38, 0.3);
}

.ap-label {
    display: block;
    font-size: 13px;
    font-weight: 500;
    color: #BC8034;
    margin-bottom: 8px;
}

.ap-error {
    background: rgba(220, 53, 69, 0.15);
    border: 1px solid rgba(220, 53, 69, 0.3);
    color: #ff8a8a;
    padding: 12px 16px;
    border-radius: 10px;
    font-size: 14px;
    margin-bottom: 16px;
}

.ap-success {
    background: rgba(40, 167, 69, 0.15);
    border: 1px solid rgba(40, 167, 69, 0.3);
    color: #7ddf8a;
    padding: 12px 16px;
    border-radius: 10px;
    font-size: 14px;
    margin-bottom: 16px;
}

.ap-spinner {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 2px solid rgba(188, 128, 52, 0.3);
    border-top-color: #BC8034;
    border-radius: 50%;
    animation: ap-spin 0.6s linear infinite;
}
@keyframes ap-spin {
    to { transform: rotate(360deg); }
}

.ap-dots {
    display: inline-flex;
    gap: 4px;
    align-items: center;
    padding: 4px 0;
}
.ap-dots span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(252, 240, 214, 0.4);
    animation: ap-bounce 1.2s ease-in-out infinite;
}
.ap-dots span:nth-child(2) { animation-delay: 0.15s; }
.ap-dots span:nth-child(3) { animation-delay: 0.3s; }
@keyframes ap-bounce {
    0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
    30% { transform: translateY(-6px); opacity: 1; }
}

.ap-fade-in {
    animation: ap-fadeIn 0.4s ease;
}
@keyframes ap-fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ======== SELECT ======== */
.ap-select {
    background: rgba(252, 240, 214, 0.08);
    border: 1px solid rgba(188, 128, 52, 0.2);
    border-radius: 12px;
    padding: 12px 18px;
    color: #FCF0D6;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23BC8034' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    padding-right: 36px;
}
.ap-select option {
    background: #2D2726;
    color: #FCF0D6;
}

/* ======== RESPONSIVE ======== */
@media (max-width: 600px) {
    .ap-header { padding: 16px 16px 0; }
    .ap-main { padding: 16px; }
    .ap-card { padding: 20px; }
    .ap-logo { font-size: 24px; }
    .ap-nav { gap: 0; padding: 3px; }
    .ap-nav-btn { padding: 6px 10px 4px; }
    .ap-nav-btn .ap-nav-label { display: none; }
}
`;
    document.head.appendChild(style);

    // === API HELPER ===
    window.__AP = {
        API_URL: API_URL,
        state: state,

        api: async function(path, options) {
            options = options || {};
            var headers = { 'Content-Type': 'application/json' };
            if (state.token) {
                headers['Authorization'] = 'Bearer ' + state.token;
            }
            // Dev-Modus: KI-Calls lokal routen
            var baseUrl = API_URL;
            if (LOCAL_AI_URL && LOCAL_KI_PATHS.some(function(p) { return path === p; })) {
                baseUrl = LOCAL_AI_URL;
            }
            var resp = await fetch(baseUrl + path, {
                method: options.method || 'GET',
                headers: headers,
                body: options.body ? JSON.stringify(options.body) : undefined
            });
            var data = await resp.json();
            if (!resp.ok) throw { status: resp.status, message: data.error || 'Fehler' };
            return data;
        },

        navigate: function(view, params) {
            params = params || {};
            state.currentView = view;
            if (params.lesson) state.lesson = params.lesson;
            if (params.testId) state.testId = params.testId;
            renderApp();
        },

        logout: function() {
            state.user = null;
            state.token = null;
            localStorage.removeItem('ap_token');
            localStorage.removeItem('ap_user');
            // Portal-Logout nutzen wenn verfügbar
            if (window.__W3 && window.__W3.logout) {
                window.__W3.logout();
            } else {
                location.href = '/portal.html';
            }
        },

        saveSession: function() {
            if (state.token) localStorage.setItem('ap_token', state.token);
            if (state.user) localStorage.setItem('ap_user', JSON.stringify(state.user));
        },

        loadSession: function() {
            state.token = localStorage.getItem('ap_token');
            try {
                state.user = JSON.parse(localStorage.getItem('ap_user'));
            } catch(e) {
                state.user = null;
            }
        }
    };

    // === LEKTIONEN ===
    window.__AP.LESSONS = {
        w0: 'Lektion 0 - Einführung',
        w1: 'Lektion 1 - Wer bin ich?',
        w2: 'Lektion 2 - Was will ich?',
        w3: 'Lektion 3 - Was stoppt mich?',
        w4: 'Lektion 4 - Wofür stehe ich?',
        w5: 'Lektion 5 - Welche Anteile trage ich?',
        w6: 'Lektion 6 - Was brauche ich?',
        w7: 'Lektion 7 - Was lasse ich los?',
        w8: 'Lektion 8 - Was baue ich auf?',
        w9: 'Lektion 9 - Wie zeige ich mich?',
        a1: 'Alignment 1 - Innere Ausrichtung',
        a2: 'Alignment 2 - Äußere Ausrichtung',
        a3: 'Alignment 3 - Integration'
    };

    // === CONTAINER ===
    var wrapper = document.querySelector('.ap-page');
    if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.className = 'ap-page';
        var target = window.__AP_PORTAL_CONTAINER || document.querySelector('[data-ankerpraktik]') || document.body;
        if (target === document.body) {
            document.body.innerHTML = '';
        } else if (window.__AP_PORTAL_CONTAINER) {
            // Loading-Placeholder entfernen
            target.innerHTML = '';
        }
        target.appendChild(wrapper);
    }

    // === MODULE LOADER ===
    var modulesLoaded = {};

    function loadModule(name, callback) {
        if (modulesLoaded[name]) {
            if (callback) callback();
            return;
        }
        var script = document.createElement('script');
        script.src = BASE_PATH + name + '.js';
        script.onload = function() {
            modulesLoaded[name] = true;
            if (callback) callback();
        };
        script.onerror = function() {
            console.error('Modul nicht geladen: ' + name);
        };
        document.head.appendChild(script);
    }

    // === RENDER ===
    function renderApp() {
        // Re-create wrapper if destroyed (portal navigation)
        if (!wrapper.parentNode) {
            var target = window.__AP_PORTAL_CONTAINER || document.querySelector('[data-ankerpraktik]') || document.body;
            if (target === document.body) {
                document.body.innerHTML = '';
            }
            target.appendChild(wrapper);
        }

        var headerHtml = '';
        var mainHtml = '';
        var inPortal = !!window.__AP_PORTAL_CONTAINER;

        if (state.user) {
            headerHtml = '<div class="ap-header' + (inPortal ? ' ap-portal-mode' : '') + '">'
                + (inPortal ? '' : '<span class="ap-logo" onclick="window.__AP.navigate(\'writer\')">Ankerpraktik</span>')
                + '<div class="ap-nav">'
                + (inPortal ? '' : '<span class="ap-user-badge">' + escapeHtml(state.user.nickname) + '</span>')
                + '<button class="ap-nav-btn' + (state.currentView === 'writer' ? ' ap-active' : '') + '" onclick="window.__AP.navigate(\'writer\')">'
                + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>'
                + '<span class="ap-nav-label">Schreiben</span></button>'
                + '<button class="ap-nav-btn' + (state.currentView === 'history' ? ' ap-active' : '') + '" onclick="window.__AP.navigate(\'history\')">'
                + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'
                + '<span class="ap-nav-label">Journal</span></button>'
                + '<button class="ap-nav-btn' + (state.currentView === 'tests' || state.currentView === 'test' ? ' ap-active' : '') + '" onclick="window.__AP.navigate(\'tests\')">'
                + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>'
                + '<span class="ap-nav-label">Tests</span></button>'
                + '<button class="ap-nav-btn' + (state.currentView === 'coach' ? ' ap-active' : '') + '" onclick="window.__AP.navigate(\'coach\')">'
                + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
                + '<span class="ap-nav-label">Coach</span></button>'
                + '<button class="ap-nav-btn' + (state.currentView === 'profile' ? ' ap-active' : '') + '" onclick="window.__AP.navigate(\'profile\')">'
                + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
                + '<span class="ap-nav-label">Profil</span></button>'
                + (inPortal ? '' : '<button class="ap-nav-btn" onclick="window.__AP.logout()">'
                + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>'
                + '<span class="ap-nav-label">Logout</span></button>')
                + '</div></div>';
        } else if (!inPortal) {
            headerHtml = '<div class="ap-header">'
                + '<span class="ap-logo">Ankerpraktik</span>'
                + '</div>';
        }

        wrapper.innerHTML = headerHtml + '<div class="ap-main" id="ap-view"></div>';

        var viewEl = document.getElementById('ap-view');

        if (!state.user) {
            // Kein eigener Auth-Screen mehr - Portal ist der Einstiegspunkt
            var inPortal = !!window.__AP_PORTAL_CONTAINER;
            if (!inPortal) {
                // Standalone-Zugriff: auf Portal umleiten
                var portalUrl = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
                    ? '/portal.html#/ankerpraktik'
                    : 'https://solbachsteven.github.io/website/portal.html#/ankerpraktik';
                location.href = portalUrl;
                return;
            }
            // Im Portal: Hinweis (sollte nie passieren, Portal synct Token vorher)
            viewEl.innerHTML = '<div style="text-align:center;padding:60px 24px;opacity:0.5;">'
                + '<p>Sitzung abgelaufen. Bitte neu einloggen.</p>'
                + '</div>';
            return;
        }

        if (state.currentView === 'history') {
            loadModule('ap-history', function() {
                if (window.__AP_HISTORY_RENDER) window.__AP_HISTORY_RENDER(viewEl);
            });
        } else if (state.currentView === 'tests') {
            loadModule('ap-test-defs', function() {
                loadModule('ap-test', function() {
                    if (window.__AP_TEST_RENDER) window.__AP_TEST_RENDER(viewEl, null);
                });
            });
        } else if (state.currentView === 'test') {
            loadModule('ap-test-defs', function() {
                loadModule('ap-test', function() {
                    if (window.__AP_TEST_RENDER) window.__AP_TEST_RENDER(viewEl, state.testId);
                });
            });
        } else if (state.currentView === 'coach') {
            loadModule('ap-coach', function() {
                if (window.__AP_COACH_RENDER) window.__AP_COACH_RENDER(viewEl);
            });
        } else if (state.currentView === 'profile') {
            loadModule('ap-test-defs', function() {
                loadModule('ap-profile', function() {
                    if (window.__AP_PROFILE_RENDER) window.__AP_PROFILE_RENDER(viewEl);
                });
            });
        } else {
            // Default: Writer
            state.currentView = 'writer';
            loadModule('ap-writer', function() {
                if (window.__AP_WRITER_RENDER) window.__AP_WRITER_RENDER(viewEl);
            });
        }
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    // === URL PARAMETER ===
    function parseUrlParams() {
        var params = new URLSearchParams(window.location.search);
        if (params.get('lesson')) {
            state.lesson = params.get('lesson');
        }
        if (params.get('auth_token')) {
            // Magic Link Verify
            verifyMagicLink(params.get('auth_token'));
            return true;
        }
        return false;
    }

    async function verifyMagicLink(token) {
        try {
            var data = await window.__AP.api('/auth/verify', {
                method: 'POST',
                body: { token: token }
            });
            state.token = data.session_token;
            state.user = data.user;
            window.__AP.saveSession();
            // URL aufräumen
            var url = new URL(window.location);
            url.searchParams.delete('auth_token');
            window.history.replaceState({}, '', url);
            renderApp();
        } catch(e) {
            renderApp();
            setTimeout(function() {
                var viewEl = document.getElementById('ap-view');
                if (viewEl) {
                    viewEl.innerHTML = '<div class="ap-card ap-fade-in" style="text-align:center;margin-top:60px;">'
                        + '<p style="font-size:18px;margin-bottom:12px;">Link ungültig oder abgelaufen</p>'
                        + '<p style="font-size:14px;opacity:0.6;margin-bottom:24px;">Bitte fordere einen neuen Magic Link an.</p>'
                        + '<button class="ap-btn" onclick="location.href=\'/portal.html\'">Zum Login</button>'
                        + '</div>';
                }
            }, 100);
        }
    }

    // Portal-API: renderApp exponieren
    window.__AP.renderApp = renderApp;

    // === SESSION RESTORE ===
    async function init() {
        window.__AP.loadSession();

        // URL-Params zuerst prüfen (Magic Link, Lesson)
        if (parseUrlParams()) return; // Magic Link wird async verarbeitet

        // Bestehende Session validieren
        if (state.token) {
            try {
                var data = await window.__AP.api('/auth/session', {
                    method: 'POST'
                });
                state.user = data.user;
                window.__AP.saveSession();
            } catch(e) {
                // Token ungültig
                state.token = null;
                state.user = null;
                localStorage.removeItem('ap_token');
                localStorage.removeItem('ap_user');
            }
        }

        renderApp();
    }

    init();
})();

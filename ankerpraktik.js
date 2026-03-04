// Win³ Community - Ankerpraktik Orchestrator
// Lädt Auth, Writer, History als Module
// Loaded via: <script src="https://solbachsteven.github.io/website/ankerpraktik.js"></script>
(function() {
    if (window.__AP_LOADED) return;
    window.__AP_LOADED = true;

    // === CONFIG ===
    var API_URL = 'https://win3-community.solbachsteven.workers.dev';
    // BASE_PATH dynamisch: lokal oder GitHub Pages
    var scripts = document.getElementsByTagName('script');
    var selfSrc = '';
    for (var si = 0; si < scripts.length; si++) {
        if (scripts[si].src && scripts[si].src.indexOf('ankerpraktik.js') !== -1) {
            selfSrc = scripts[si].src;
            break;
        }
    }
    var BASE_PATH = selfSrc ? selfSrc.replace('ankerpraktik.js', 'ankerpraktik/') : '/ankerpraktik/';

    // === STATE ===
    var state = {
        user: null,
        token: null,
        currentView: null,
        lesson: null
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
    gap: 8px;
    align-items: center;
}
.ap-nav-btn {
    background: none;
    border: 1px solid rgba(188, 128, 52, 0.3);
    color: #BC8034;
    padding: 6px 14px;
    border-radius: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.ap-nav-btn:hover {
    background: rgba(188, 128, 52, 0.15);
    border-color: #BC8034;
}
.ap-nav-btn.ap-active {
    background: #BC8034;
    color: #2D2726;
    border-color: #BC8034;
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
    min-height: 200px;
    transition: border-color 0.3s ease;
}
.ap-textarea:focus {
    border-color: #BC8034;
}
.ap-textarea::placeholder {
    color: rgba(252, 240, 214, 0.25);
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
    .ap-nav-btn { padding: 5px 10px; font-size: 12px; }
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
            var resp = await fetch(API_URL + path, {
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
            renderApp();
        },

        logout: function() {
            state.user = null;
            state.token = null;
            localStorage.removeItem('ap_token');
            localStorage.removeItem('ap_user');
            window.__AP.navigate('auth');
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
        var target = document.querySelector('[data-ankerpraktik]') || document.body;
        if (target === document.body) {
            document.body.innerHTML = '';
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
        var headerHtml = '';
        var mainHtml = '';

        if (state.user) {
            headerHtml = '<div class="ap-header">'
                + '<span class="ap-logo" onclick="window.__AP.navigate(\'writer\')">Ankerpraktik</span>'
                + '<div class="ap-nav">'
                + '<span class="ap-user-badge">' + escapeHtml(state.user.nickname) + '</span>'
                + '<button class="ap-nav-btn' + (state.currentView === 'writer' ? ' ap-active' : '') + '" onclick="window.__AP.navigate(\'writer\')">Schreiben</button>'
                + '<button class="ap-nav-btn' + (state.currentView === 'history' ? ' ap-active' : '') + '" onclick="window.__AP.navigate(\'history\')">Journal</button>'
                + '<button class="ap-nav-btn" onclick="window.__AP.logout()">Logout</button>'
                + '</div></div>';
        } else {
            headerHtml = '<div class="ap-header">'
                + '<span class="ap-logo">Ankerpraktik</span>'
                + '</div>';
        }

        wrapper.innerHTML = headerHtml + '<div class="ap-main" id="ap-view"></div>';

        var viewEl = document.getElementById('ap-view');

        if (!state.user) {
            loadModule('ap-auth', function() {
                if (window.__AP_AUTH_RENDER) window.__AP_AUTH_RENDER(viewEl);
            });
            return;
        }

        if (state.currentView === 'history') {
            loadModule('ap-history', function() {
                if (window.__AP_HISTORY_RENDER) window.__AP_HISTORY_RENDER(viewEl);
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
                        + '<button class="ap-btn" onclick="window.__AP.navigate(\'auth\')">Zum Login</button>'
                        + '</div>';
                }
            }, 100);
        }
    }

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

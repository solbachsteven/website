// Win³ Academy - Portal Orchestrator
// Einzeiler: <script src="https://stevensolbach.de/portal/portal.js"></script>
(function() {
    if (window.__W3_LOADED) return;
    window.__W3_LOADED = true;

    // ======== CONFIG ========
    // Remote-Worker fuer Auth + API (Daten online in Cloudflare D1)
    var API_URL = 'https://win3-community.solbachsteven.workers.dev';
    // Lokaler KI-Server (Dev-Login + KI-Calls)
    var LOCAL_URL = (typeof location !== 'undefined' && (location.hostname === 'localhost' || location.hostname === '127.0.0.1'))
        ? 'http://localhost:3465' : null;

    // BASE_PATH: Pfad zum portal/ Ordner
    var scripts = document.getElementsByTagName('script');
    var selfSrc = '';
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src && scripts[i].src.indexOf('portal/portal.js') !== -1) {
            selfSrc = scripts[i].src;
            break;
        }
    }
    var PORTAL_BASE = selfSrc ? selfSrc.replace('portal.js', '') : '/portal/';
    var SITE_BASE = PORTAL_BASE.replace('portal/', '');

    // ======== FONTS ========
    if (!document.querySelector('link[href*="Poppins"]')) {
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap';
        document.head.appendChild(fontLink);
    }
    if (!document.querySelector('style[data-font="pacifica"]')) {
        var fs = document.createElement('style');
        fs.setAttribute('data-font', 'pacifica');
        fs.textContent = '@font-face{font-family:"PacificaCondensed";src:url("https://db.onlinewebfonts.com/t/3ade034999153f8110b40724ad74f00e.woff2") format("woff2"),url("https://db.onlinewebfonts.com/t/3ade034999153f8110b40724ad74f00e.woff") format("woff");font-display:swap;}';
        document.head.appendChild(fs);
    }

    // ======== CSS ========
    var cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = PORTAL_BASE + 'portal.css';
    document.head.appendChild(cssLink);

    // ======== FX PARTICLES ========
    if (!window.__SS_FX_LOADED) {
        var fxScript = document.createElement('script');
        fxScript.src = SITE_BASE + 'sections/fx.js';
        document.head.appendChild(fxScript);
    }

    // ======== STATE ========
    var state = {
        user: null,
        token: null,
        isAdmin: false,
        adminView: true, // true = Admin-Ansicht, false = User-Ansicht (Toggle)
        currentRoute: null,
        currentAdapter: null,
        sidebarOpen: false
    };

    // ======== SVG ICONS ========
    var ICONS = {
        home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
        book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',
        graduation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg>',
        pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
        user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
        lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>',
        logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
        menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
        globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
        video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',
        dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
        users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
        clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
        toggle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="16" cy="12" r="3"/></svg>'
    };

    // Website URL
    var WEBSITE_URL = '/index.html';

    // ======== NAV CONFIG ========
    var NAV_ITEMS = [
        { id: 'dashboard', label: 'Dashboard',    hash: '#/',            icon: ICONS.home,       tiers: ['free','kurs','community','mentoring'] },
        { id: 'freebie',   label: 'Freebie Kurs',  hash: '#/freebie',     icon: ICONS.book,       tiers: ['free','kurs','community','mentoring'] },
        { id: 'kurs',      label: 'Win\u00b3 Kurs',hash: '#/kurs',        icon: ICONS.graduation, tiers: ['kurs','community','mentoring'] },
        { id: 'tools',     label: 'Ankerpraktik',  hash: '#/ankerpraktik',icon: ICONS.pen,        tiers: ['community','mentoring'] },
        { id: 'coaching',  label: 'Coaching',      hash: '#/coaching',    icon: ICONS.video,      tiers: ['mentoring'] },
        { id: 'profile',   label: 'Profil',        hash: '#/profile',     icon: ICONS.user,       tiers: ['free','kurs','community','mentoring'] }
    ];

    // Admin navigation items (only shown when isAdmin && adminView)
    var ADMIN_NAV_ITEMS = [
        { id: 'admin',           label: 'Dashboard',    hash: '#/admin',           icon: ICONS.dashboard },
        { id: 'admin-coaching',  label: 'Coaching',     hash: '#/admin/coaching',  icon: ICONS.video },
        { id: 'admin-bewerbungen', label: 'Bewerbungen', hash: '#/admin/bewerbungen', icon: ICONS.clipboard },
        { id: 'admin-users',    label: 'User',         hash: '#/admin/users',     icon: ICONS.users }
    ];

    var TIER_LABELS = {
        free: 'Free',
        kurs: 'Kurs',
        community: 'Community',
        mentoring: 'Mentoring'
    };

    // ======== GLOBAL API ========
    window.__W3 = {
        API_URL: API_URL,
        LOCAL_URL: LOCAL_URL,
        PORTAL_BASE: PORTAL_BASE,
        SITE_BASE: SITE_BASE,
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
            if (!resp.ok) {
                if (resp.status === 401) {
                    window.__W3.logout();
                    return;
                }
                throw { status: resp.status, message: data.error || 'Fehler' };
            }
            return data;
        },

        navigate: function(hash) {
            window.location.hash = hash;
        },

        logout: function() {
            state.user = null;
            state.token = null;
            localStorage.removeItem('w3_token');
            localStorage.removeItem('w3_user');
            // Auch AP-Session clearen
            localStorage.removeItem('ap_token');
            localStorage.removeItem('ap_user');
            renderApp();
        },

        saveSession: function() {
            if (state.token) localStorage.setItem('w3_token', state.token);
            if (state.user) localStorage.setItem('w3_user', JSON.stringify(state.user));
            // AP-Session synchron halten
            if (state.token) localStorage.setItem('ap_token', state.token);
            if (state.user) localStorage.setItem('ap_user', JSON.stringify(state.user));
        },

        loadSession: function() {
            state.token = localStorage.getItem('w3_token');
            try {
                state.user = JSON.parse(localStorage.getItem('w3_user'));
            } catch(e) {
                state.user = null;
            }
        },

        hasTier: function(requiredTiers) {
            if (!state.user) return false;
            var tier = state.user.tier || 'free';
            return requiredTiers.indexOf(tier) !== -1;
        },

        isAdminView: function() {
            return state.isAdmin && state.adminView;
        },

        toggleView: function() {
            state.adminView = !state.adminView;
            // Re-render the whole app to switch nav
            renderApp();
            // Navigate to appropriate dashboard
            if (state.adminView) {
                window.location.hash = '#/admin';
            } else {
                window.location.hash = '#/';
            }
        },

        closeSidebar: function() {
            state.sidebarOpen = false;
            var sidebar = document.querySelector('.w3-sidebar');
            var overlay = document.querySelector('.w3-overlay');
            var hamburger = document.querySelector('.w3-hamburger');
            if (sidebar) sidebar.classList.remove('open');
            if (overlay) overlay.classList.remove('visible');
            if (hamburger) hamburger.classList.remove('is-active');
        }
    };

    // ======== ADAPTER LOADING ========
    var adaptersLoaded = {};

    var ADAPTER_VERSION = '2026031105';

    function loadAdapter(name, callback) {
        if (adaptersLoaded[name]) {
            if (callback) callback();
            return;
        }
        var script = document.createElement('script');
        script.src = PORTAL_BASE + name + '.js?v=' + ADAPTER_VERSION;
        script.onload = function() {
            adaptersLoaded[name] = true;
            if (callback) callback();
        };
        script.onerror = function() {
            console.error('Adapter nicht geladen: ' + name);
        };
        document.head.appendChild(script);
    }

    // ======== ROUTER ========
    function getRoute() {
        var hash = window.location.hash || '#/';
        if (hash === '#' || hash === '') hash = '#/';
        // Parse: #/section/param
        var parts = hash.replace('#/', '').split('/');
        return {
            section: parts[0] || 'dashboard',
            param: parts[1] || null,
            full: hash
        };
    }

    function onRouteChange() {
        var route = getRoute();

        // Skip if same route
        if (state.currentRoute && state.currentRoute.full === route.full) return;

        // Teardown current adapter
        if (state.currentAdapter && state.currentAdapter.teardown) {
            state.currentAdapter.teardown();
        }
        state.currentAdapter = null;

        state.currentRoute = route;

        // Clear content
        var content = document.getElementById('w3-content');
        if (!content) return;
        content.innerHTML = '';

        // Close sidebar on mobile
        window.__W3.closeSidebar();

        // Update nav active state
        updateNavActive(route.section);

        // Route to adapter
        routeToAdapter(route, content);
    }

    function routeToAdapter(route, content) {
        var section = route.section;

        // Check access
        var navItem = null;
        for (var i = 0; i < NAV_ITEMS.length; i++) {
            if (NAV_ITEMS[i].id === section || NAV_ITEMS[i].hash === '#/' + section) {
                navItem = NAV_ITEMS[i];
                break;
            }
        }

        // Map 'ankerpraktik' to tools nav item
        if (section === 'ankerpraktik' && !navItem) {
            navItem = NAV_ITEMS[3]; // tools
        }

        if (navItem && !window.__W3.hasTier(navItem.tiers)) {
            renderLockScreen(content, navItem);
            return;
        }

        // Route dispatch
        switch (section) {
            case 'dashboard':
            case '':
                loadAdapter('p-dashboard', function() {
                    if (window.__P_DASHBOARD) {
                        state.currentAdapter = window.__P_DASHBOARD;
                        window.__P_DASHBOARD.mount(content, route.param);
                    }
                });
                break;

            case 'freebie':
                loadAdapter('p-freebie', function() {
                    if (window.__P_FREEBIE) {
                        state.currentAdapter = window.__P_FREEBIE;
                        window.__P_FREEBIE.mount(content, route.param);
                    }
                });
                break;

            case 'kurs':
                loadAdapter('p-kurs', function() {
                    if (window.__P_KURS) {
                        state.currentAdapter = window.__P_KURS;
                        window.__P_KURS.mount(content, route.param);
                    }
                });
                break;

            case 'ankerpraktik':
                loadAdapter('p-ankerpraktik', function() {
                    if (window.__P_ANKERPRAKTIK) {
                        state.currentAdapter = window.__P_ANKERPRAKTIK;
                        window.__P_ANKERPRAKTIK.mount(content, route.param);
                    }
                });
                break;

            case 'coaching':
                loadAdapter('p-coaching', function() {
                    if (window.__P_COACHING_ADAPTER) {
                        state.currentAdapter = window.__P_COACHING_ADAPTER;
                        window.__P_COACHING_ADAPTER.mount(content, route.param);
                    }
                });
                break;

            case 'profile':
                loadAdapter('p-profile', function() {
                    if (window.__P_PROFILE) {
                        state.currentAdapter = window.__P_PROFILE;
                        window.__P_PROFILE.mount(content, route.param);
                    }
                });
                break;

            // Admin routes
            case 'admin':
                if (!state.isAdmin) { content.innerHTML = '<div style="padding:40px;text-align:center;opacity:0.5;">Kein Zugriff</div>'; break; }
                // Sub-routes: admin/coaching, admin/bewerbungen, admin/users
                if (route.param === 'coaching') {
                    loadAdapter('p-admin-coaching', function() {
                        if (window.__P_ADMIN_COACHING) {
                            state.currentAdapter = window.__P_ADMIN_COACHING;
                            window.__P_ADMIN_COACHING.mount(content);
                        }
                    });
                } else if (route.param === 'bewerbungen') {
                    loadAdapter('p-admin-bewerbungen', function() {
                        if (window.__P_ADMIN_BEWERBUNGEN) {
                            state.currentAdapter = window.__P_ADMIN_BEWERBUNGEN;
                            window.__P_ADMIN_BEWERBUNGEN.mount(content);
                        }
                    });
                } else if (route.param === 'users') {
                    loadAdapter('p-admin-users', function() {
                        if (window.__P_ADMIN_USERS) {
                            state.currentAdapter = window.__P_ADMIN_USERS;
                            window.__P_ADMIN_USERS.mount(content);
                        }
                    });
                } else {
                    // Admin Dashboard (default)
                    loadAdapter('p-admin', function() {
                        if (window.__P_ADMIN) {
                            state.currentAdapter = window.__P_ADMIN;
                            window.__P_ADMIN.mount(content);
                        }
                    });
                }
                break;

            default:
                content.innerHTML = '<div style="padding:40px;text-align:center;opacity:0.5;">Seite nicht gefunden</div>';
        }
    }

    function renderLockScreen(container, navItem) {
        var tier = state.user ? (state.user.tier || 'free') : 'free';
        var upgradeText = '';
        if (navItem.id === 'kurs') {
            upgradeText = 'Der Win\u00b3 Kurs ist f\u00fcr Kursteilnehmer und Mentoring-Kunden verf\u00fcgbar.';
        } else if (navItem.id === 'tools') {
            upgradeText = 'Die Ankerpraktik und Selbsttests sind Teil der Win\u00b3 Community.';
        } else if (navItem.id === 'coaching') {
            upgradeText = '1:1 Coaching ist Teil des Win\u00b3 Mentoring-Programms.';
        }

        container.innerHTML = '<div class="w3-lock-overlay">'
            + '<div class="w3-lock-icon">' + ICONS.lock + '</div>'
            + '<div class="w3-lock-title">' + escapeHtml(navItem.label) + '</div>'
            + '<p class="w3-lock-text">' + upgradeText + '</p>'
            + '</div>';
    }

    function updateNavActive(section) {
        var route = getRoute();
        var mapped = section === 'ankerpraktik' ? 'tools' : section;
        // For admin sub-routes: admin/coaching → admin-coaching
        if (section === 'admin' && route.param) {
            mapped = 'admin-' + route.param;
        }
        var btns = document.querySelectorAll('.w3-nav-item');
        btns.forEach(function(btn) {
            var id = btn.getAttribute('data-nav');
            if (!id) return;
            btn.classList.toggle('active', id === mapped || (mapped === '' && id === 'dashboard'));
        });
    }

    // ======== RENDER ========
    function renderApp() {
        var portal = document.getElementById('win3-portal');
        if (!portal) return;

        if (!state.user) {
            // Login-View
            portal.className = '';
            portal.innerHTML = '';
            loadAdapter('p-auth', function() {
                if (window.__P_AUTH) window.__P_AUTH.mount(portal);
            });
            return;
        }

        portal.className = 'w3-portal';

        var tier = state.user.tier || 'free';
        var initial = (state.user.nickname || state.user.email || '?').charAt(0).toUpperCase();

        // Sidebar HTML
        var navHtml = '';
        var showAdmin = state.isAdmin && state.adminView;

        if (showAdmin) {
            // Admin navigation
            for (var i = 0; i < ADMIN_NAV_ITEMS.length; i++) {
                var aItem = ADMIN_NAV_ITEMS[i];
                navHtml += '<button class="w3-nav-item" data-nav="' + aItem.id + '"'
                    + ' onclick="window.__W3.navigate(\'' + aItem.hash + '\')">'
                    + '<span class="w3-nav-icon">' + aItem.icon + '</span>'
                    + '<span>' + aItem.label + '</span>'
                    + '</button>';
            }
        } else {
            // User navigation
            for (var i = 0; i < NAV_ITEMS.length; i++) {
                var item = NAV_ITEMS[i];
                var hasAccess = window.__W3.hasTier(item.tiers);
                var isLocked = !hasAccess;

                navHtml += '<button class="w3-nav-item' + (isLocked ? ' locked' : '') + '"'
                    + ' data-nav="' + item.id + '"'
                    + (isLocked ? '' : ' onclick="window.__W3.navigate(\'' + item.hash + '\')"')
                    + '>'
                    + '<span class="w3-nav-icon">' + item.icon + '</span>'
                    + '<span>' + item.label + '</span>'
                    + (isLocked ? '<span class="w3-nav-lock">' + ICONS.lock + '</span>' : '')
                    + '</button>';

                // Separator after Ankerpraktik
                if (item.id === 'tools') {
                    navHtml += '<div class="w3-nav-separator"></div>';
                }
            }
        }

        // View toggle for admins
        var viewToggleHtml = '';
        if (state.isAdmin) {
            var toggleLabel = showAdmin ? 'User-Ansicht' : 'Admin-Ansicht';
            viewToggleHtml = '<button class="w3-nav-item w3-view-toggle" onclick="window.__W3.toggleView()">'
                + '<span class="w3-nav-icon">' + ICONS.toggle + '</span>'
                + '<span>' + toggleLabel + '</span>'
                + '</button>';
        }

        portal.innerHTML = ''
            // Mobile Logo (fixed, always visible on mobile)
            + '<div class="w3-mobile-logo">'
            +   '<svg viewBox="0 0 80 80" width="47" height="47" style="flex-shrink:0"><circle cx="40" cy="40" r="30" stroke="rgba(188,128,52,0.25)" stroke-width="1" fill="rgba(188,128,52,0.06)"/><g transform="translate(40,40)" stroke="#BC8034" stroke-width="1.5" fill="none"><circle cx="0" cy="-9" r="14"/><circle cx="7.3" cy="4.2" r="14"/><circle cx="-7.3" cy="4.2" r="14"/></g><circle cx="40" cy="40" r="2.8" fill="#F5F0EB"/></svg>'
            +   '<span style="font-family:PacificaCondensed,fantasy;font-size:26px;letter-spacing:1px;color:#F4F0EC;white-space:nowrap;">Win<span style="color:#BC8034;font-size:1.15em;margin-left:2px;">&#179;</span> Academy</span>'
            + '</div>'
            // Hamburger → X toggle (top right on mobile)
            + '<button class="w3-hamburger" onclick="toggleSidebar()">'
            +   '<div class="w3-hamburger-icon">'
            +     '<span></span><span></span><span></span>'
            +   '</div>'
            + '</button>'
            // Overlay
            + '<div class="w3-overlay" onclick="window.__W3.closeSidebar()"></div>'
            // Sidebar
            + '<aside class="w3-sidebar">'
            +   '<div class="w3-sidebar-logo">'
            +     '<svg viewBox="0 0 80 80" width="47" height="47" style="flex-shrink:0"><circle cx="40" cy="40" r="30" stroke="rgba(188,128,52,0.25)" stroke-width="1" fill="rgba(188,128,52,0.06)"/><g transform="translate(40,40)" stroke="#BC8034" stroke-width="1.5" fill="none"><circle cx="0" cy="-9" r="14"/><circle cx="7.3" cy="4.2" r="14"/><circle cx="-7.3" cy="4.2" r="14"/></g><circle cx="40" cy="40" r="2.8" fill="#F5F0EB"/></svg>'
            +     '<span style="font-family:PacificaCondensed,fantasy;font-size:26px;letter-spacing:1px;color:#F4F0EC;white-space:nowrap;">Win<span style="color:#BC8034;font-size:1.15em;margin-left:2px;">&#179;</span> Academy</span>'
            +   '</div>'
            +   '<nav class="w3-sidebar-nav">' + navHtml + '</nav>'
            +   viewToggleHtml
            +   '<a href="' + WEBSITE_URL + '" class="w3-nav-item w3-website-link" style="margin:0 12px;opacity:0.5;font-size:13px;">'
            +     '<span class="w3-nav-icon">' + ICONS.globe + '</span>'
            +     '<span>Zur Website</span>'
            +   '</a>'
            +   '<div class="w3-sidebar-user">'
            +     '<div class="w3-user-avatar">' + initial + '</div>'
            +     '<div class="w3-user-info">'
            +       '<div class="w3-user-name">' + escapeHtml(state.user.nickname || state.user.email) + '</div>'
            +       '<div class="w3-user-tier">' + (TIER_LABELS[tier] || tier) + '</div>'
            +     '</div>'
            +     '<button class="w3-logout-btn" onclick="window.__W3.logout()" title="Logout">'
            +       '<span style="width:18px;height:18px;display:block">' + ICONS.logout + '</span>'
            +     '</button>'
            +   '</div>'
            + '</aside>'
            // Content
            + '<main class="w3-content" id="w3-content"></main>';

        // Start routing
        onRouteChange();
    }

    // ======== SIDEBAR TOGGLE ========
    window.toggleSidebar = function() {
        state.sidebarOpen = !state.sidebarOpen;
        var sidebar = document.querySelector('.w3-sidebar');
        var overlay = document.querySelector('.w3-overlay');
        var hamburger = document.querySelector('.w3-hamburger');
        if (sidebar) sidebar.classList.toggle('open', state.sidebarOpen);
        if (overlay) overlay.classList.toggle('visible', state.sidebarOpen);
        if (hamburger) hamburger.classList.toggle('is-active', state.sidebarOpen);
    };

    // ======== UTILS ========
    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    // ======== URL PARAMS (Magic Link) ========
    function parseUrlParams() {
        var params = new URLSearchParams(window.location.search);
        if (params.get('auth_token')) {
            verifyMagicLink(params.get('auth_token'));
            return true;
        }
        return false;
    }

    async function verifyMagicLink(token) {
        try {
            var data = await window.__W3.api('/auth/verify', {
                method: 'POST',
                body: { token: token }
            });
            state.token = data.session_token;
            state.user = data.user;
            state.isAdmin = !!(data.user && data.user.is_admin);
            window.__W3.saveSession();
            // URL aufr\u00e4umen
            var url = new URL(window.location);
            url.searchParams.delete('auth_token');
            window.history.replaceState({}, '', url);
            renderApp();
        } catch(e) {
            console.error('Magic Link Fehler:', e);
            renderApp();
        }
    }

    // ======== INIT ========
    async function init() {
        window.__W3.loadSession();

        // Magic Link check
        if (parseUrlParams()) return;

        // Session validieren
        if (state.token) {
            try {
                var data = await window.__W3.api('/auth/session', { method: 'POST' });
                if (data && data.user) {
                    state.user = data.user;
                    state.isAdmin = !!(data.user && data.user.is_admin);
                    window.__W3.saveSession();
                }
            } catch(e) {
                state.token = null;
                state.user = null;
                localStorage.removeItem('w3_token');
                localStorage.removeItem('w3_user');
            }
        }

        renderApp();

        // Hash change listener
        window.addEventListener('hashchange', onRouteChange);
    }

    init();
})();

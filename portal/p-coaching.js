// Win³ Academy - Coaching Session Management Adapter
// Übersicht, Buchung (Cal.com), Video-Call (Daily.co), Session-Detail
(function() {
    if (window.__P_COACHING) return;
    window.__P_COACHING = true;

    var W3 = window.__W3;

    // ======== CSS ========
    if (!document.querySelector('style[data-section="p-coaching"]')) {
        var style = document.createElement('style');
        style.setAttribute('data-section', 'p-coaching');
        style.textContent = '\
.pc-wrap { max-width:860px; margin:0 auto; padding:32px 20px; }\n\
.pc-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:32px; flex-wrap:wrap; gap:12px; }\n\
.pc-title { font-size:24px; font-weight:600; }\n\
.pc-btn { display:inline-flex; align-items:center; gap:8px; padding:10px 20px; border-radius:12px; border:none; cursor:pointer; font-size:14px; font-weight:500; font-family:inherit; transition:all 0.2s; }\n\
.pc-btn-primary { background:#BC8034; color:#1a1715; }\n\
.pc-btn-primary:hover { background:#d4983f; }\n\
.pc-btn-secondary { background:rgba(252,240,214,0.06); color:#FCF0D6; border:1px solid rgba(188,128,52,0.2); }\n\
.pc-btn-secondary:hover { border-color:rgba(188,128,52,0.4); }\n\
.pc-btn-small { padding:6px 14px; font-size:13px; border-radius:8px; }\n\
\n\
/* Package Card */\n\
.pc-package { background:rgba(45,39,38,0.55); border:1px solid rgba(188,128,52,0.2); border-radius:16px; padding:24px; backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); box-shadow:0 4px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.04); margin-bottom:24px; }\n\
.pc-package-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; flex-wrap:wrap; gap:8px; }\n\
.pc-package-title { font-size:16px; font-weight:500; }\n\
.pc-progress-bar { height:8px; background:rgba(252,240,214,0.08); border-radius:99px; overflow:hidden; margin-bottom:8px; }\n\
.pc-progress-fill { height:100%; background:linear-gradient(90deg,#BC8034,#d4983f); border-radius:99px; transition:width 0.6s ease; }\n\
.pc-progress-label { font-size:13px; color:rgba(252,240,214,0.5); }\n\
\n\
/* Next Session */\n\
.pc-next { background:rgba(188,128,52,0.08); border:1px solid rgba(188,128,52,0.25); border-radius:16px; padding:20px 24px; margin-bottom:24px; display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; }\n\
.pc-next-label { font-size:12px; text-transform:uppercase; letter-spacing:0.06em; color:#BC8034; margin-bottom:4px; }\n\
.pc-next-time { font-size:18px; font-weight:600; }\n\
.pc-next-date { font-size:13px; color:rgba(252,240,214,0.5); margin-top:2px; }\n\
\n\
/* Session List */\n\
.pc-sessions-title { font-size:15px; font-weight:500; margin-bottom:16px; color:rgba(252,240,214,0.7); }\n\
.pc-session-card { background:rgba(45,39,38,0.55); border:1px solid rgba(188,128,52,0.12); border-radius:12px; padding:16px 20px; margin-bottom:10px; display:flex; align-items:center; justify-content:space-between; gap:12px; cursor:pointer; transition:all 0.2s; backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); }\n\
.pc-session-card:hover { border-color:rgba(188,128,52,0.35); }\n\
.pc-session-nr { width:32px; height:32px; border-radius:50%; background:rgba(188,128,52,0.15); color:#BC8034; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:600; flex-shrink:0; }\n\
.pc-session-info { flex:1; min-width:0; }\n\
.pc-session-date { font-size:14px; font-weight:500; }\n\
.pc-session-meta { font-size:12px; color:rgba(252,240,214,0.4); margin-top:2px; }\n\
\n\
/* Status Badges */\n\
.pc-badge { display:inline-block; padding:3px 10px; border-radius:99px; font-size:11px; font-weight:500; text-transform:uppercase; letter-spacing:0.04em; }\n\
.pc-badge-scheduled { background:rgba(59,130,246,0.15); color:#60a5fa; }\n\
.pc-badge-in_progress { background:rgba(251,191,36,0.15); color:#fbbf24; }\n\
.pc-badge-completed { background:rgba(34,197,94,0.15); color:#22c55e; }\n\
.pc-badge-cancelled { background:rgba(239,68,68,0.15); color:#ef4444; }\n\
.pc-badge-no_show { background:rgba(156,163,175,0.15); color:#9ca3af; }\n\
.pc-badge-rescheduled { background:rgba(168,85,247,0.15); color:#a855f7; }\n\
\n\
/* Session Detail */\n\
.pc-detail-header { margin-bottom:32px; }\n\
.pc-detail-back { font-size:13px; color:rgba(252,240,214,0.5); cursor:pointer; margin-bottom:16px; display:inline-flex; align-items:center; gap:6px; }\n\
.pc-detail-back:hover { color:#FCF0D6; }\n\
.pc-detail-title { font-size:22px; font-weight:600; margin-bottom:8px; }\n\
.pc-detail-time { font-size:14px; color:rgba(252,240,214,0.5); }\n\
\n\
.pc-section { background:rgba(45,39,38,0.55); border:1px solid rgba(188,128,52,0.12); border-radius:16px; padding:20px 24px; margin-bottom:16px; backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); }\n\
.pc-section-title { font-size:14px; font-weight:600; color:#BC8034; margin-bottom:12px; display:flex; align-items:center; gap:8px; }\n\
.pc-section-body { font-size:14px; line-height:1.7; color:rgba(252,240,214,0.8); }\n\
.pc-section-body ul { margin:8px 0; padding-left:20px; }\n\
.pc-section-body li { margin-bottom:6px; }\n\
\n\
.pc-transcript-toggle { font-size:13px; color:#BC8034; cursor:pointer; margin-top:8px; }\n\
.pc-transcript-toggle:hover { text-decoration:underline; }\n\
.pc-transcript-content { max-height:300px; overflow-y:auto; margin-top:12px; padding:16px; background:rgba(0,0,0,0.2); border-radius:8px; font-size:13px; line-height:1.8; white-space:pre-wrap; }\n\
\n\
/* Video Call */\n\
.pc-call-frame { width:100%; height:calc(100vh - 120px); border:none; border-radius:12px; background:#000; }\n\
.pc-call-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; }\n\
\n\
/* Booking */\n\
.pc-book-frame { width:100%; min-height:600px; border:none; border-radius:12px; background:transparent; }\n\
\n\
/* Empty State */\n\
.pc-empty { text-align:center; padding:60px 24px; color:rgba(252,240,214,0.4); }\n\
.pc-empty-icon { font-size:48px; margin-bottom:16px; opacity:0.3; }\n\
.pc-empty-text { font-size:15px; margin-bottom:24px; }\n\
\n\
/* Loading */\n\
.pc-loading { text-align:center; padding:80px 24px; color:rgba(252,240,214,0.3); font-size:14px; }\n\
';
        document.head.appendChild(style);
    }

    // ======== SVG ICONS (inline, kein Emoji) ========
    var ICON = {
        back: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
        play: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
        calendar: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
        mic: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
        file: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
        brain: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A5.5 5.5 0 005 7.5c0 .96.25 1.87.7 2.65A5.5 5.5 0 003 15a5.5 5.5 0 005.5 5.5h.5V22h6v-1.5h.5A5.5 5.5 0 0021 15a5.5 5.5 0 00-2.7-4.85c.45-.78.7-1.69.7-2.65A5.5 5.5 0 0014.5 2h-5z"/></svg>',
        check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
        video: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>'
    };

    // ======== HELPERS ========
    function esc(str) {
        if (!str) return '';
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function formatDate(iso) {
        if (!iso) return '';
        var d = new Date(iso);
        var days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
        var months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
        return days[d.getDay()] + ', ' + d.getDate() + '. ' + months[d.getMonth()] + ' ' + d.getFullYear();
    }

    function formatTime(iso) {
        if (!iso) return '';
        var d = new Date(iso);
        return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
    }

    function formatDateTime(iso) {
        return formatDate(iso) + ' um ' + formatTime(iso) + ' Uhr';
    }

    function statusLabel(s) {
        var map = {
            scheduled: 'Geplant',
            in_progress: 'Läuft',
            completed: 'Abgeschlossen',
            cancelled: 'Storniert',
            no_show: 'Nicht erschienen',
            rescheduled: 'Umgebucht'
        };
        return map[s] || s;
    }

    function badge(status) {
        return '<span class="pc-badge pc-badge-' + esc(status) + '">' + statusLabel(status) + '</span>';
    }

    function formatDuration(seconds) {
        if (!seconds) return '';
        var m = Math.floor(seconds / 60);
        return m + ' Min.';
    }

    // ======== DATA ========
    var cache = { packages: null, sessions: null };

    async function loadPackages() {
        try {
            var data = await W3.api('/coaching/packages');
            cache.packages = data.packages || [];
            return cache.packages;
        } catch (e) {
            cache.packages = [];
            return [];
        }
    }

    async function loadSessions(params) {
        try {
            var query = params ? '?' + new URLSearchParams(params).toString() : '';
            var data = await W3.api('/coaching/sessions' + query);
            cache.sessions = data.sessions || [];
            return cache.sessions;
        } catch (e) {
            cache.sessions = [];
            return [];
        }
    }

    async function loadSession(id) {
        try {
            return await W3.api('/coaching/sessions/' + id);
        } catch (e) {
            return null;
        }
    }

    async function joinSession(id) {
        try {
            return await W3.api('/coaching/sessions/' + id + '/join');
        } catch (e) {
            return null;
        }
    }

    // ======== VIEWS ========

    // --- Overview ---
    async function renderOverview(container) {
        container.innerHTML = '<div class="pc-loading">Coaching wird geladen...</div>';

        var packages = await loadPackages();
        var sessions = await loadSessions();

        var html = '<div class="pc-wrap">';

        // Header
        html += '<div class="pc-header">'
            + '<h1 class="pc-title">Coaching</h1>';
        if (packages.length > 0 && getActivePackage(packages)) {
            html += '<button class="pc-btn pc-btn-primary" onclick="window.location.hash=\'#/coaching/book\'">'
                + ICON.calendar + ' Session buchen</button>';
        }
        html += '</div>';

        // Active Package
        var pkg = getActivePackage(packages);
        if (pkg) {
            var pct = Math.round((pkg.used_sessions / pkg.total_sessions) * 100);
            var remaining = pkg.total_sessions - pkg.used_sessions;
            html += '<div class="pc-package">'
                + '<div class="pc-package-header">'
                +   '<span class="pc-package-title">Coaching-Kontingent</span>'
                +   '<span class="pc-badge pc-badge-' + (pkg.status === 'active' ? 'scheduled' : 'completed') + '">'
                +     (pkg.status === 'active' ? 'Aktiv' : esc(pkg.status)) + '</span>'
                + '</div>'
                + '<div class="pc-progress-bar"><div class="pc-progress-fill" style="width:' + pct + '%"></div></div>'
                + '<div class="pc-progress-label">'
                +   '<strong>' + pkg.used_sessions + ' / ' + pkg.total_sessions + '</strong> Sessions genutzt'
                +   (remaining > 0 ? ' &mdash; ' + remaining + ' verbleibend' : '')
                +   (pkg.expires_at ? ' &mdash; Gültig bis ' + formatDate(pkg.expires_at) : '')
                + '</div>'
                + '</div>';
        } else if (packages.length === 0) {
            html += '<div class="pc-empty">'
                + '<div class="pc-empty-icon">' + ICON.video + '</div>'
                + '<div class="pc-empty-text">Du hast noch kein Coaching-Paket.<br>Sprich mit Steven, um loszulegen.</div>'
                + '</div>';
            html += '</div>';
            container.innerHTML = html;
            return;
        }

        // Next upcoming session
        var next = getNextSession(sessions);
        if (next) {
            var canJoin = isJoinable(next);
            html += '<div class="pc-next">'
                + '<div>'
                +   '<div class="pc-next-label">Nächste Session</div>'
                +   '<div class="pc-next-time">' + formatDate(next.scheduled_start) + '</div>'
                +   '<div class="pc-next-date">' + formatTime(next.scheduled_start) + ' Uhr &mdash; Session #' + (next.session_number || '?') + '</div>'
                + '</div>'
                + '<div>'
                + (canJoin
                    ? '<button class="pc-btn pc-btn-primary" onclick="window.location.hash=\'#/coaching/call-' + next.id + '\'">' + ICON.video + ' Beitreten</button>'
                    : '<button class="pc-btn pc-btn-secondary pc-btn-small" onclick="window.location.hash=\'#/coaching/' + next.id + '\'">' + ICON.file + ' Details</button>')
                + '</div>'
                + '</div>';
        }

        // Session List
        if (sessions.length > 0) {
            html += '<div class="pc-sessions-title">Alle Sessions</div>';
            for (var i = 0; i < sessions.length; i++) {
                var s = sessions[i];
                html += '<div class="pc-session-card" onclick="window.location.hash=\'#/coaching/' + s.id + '\'">'
                    + '<div class="pc-session-nr">' + (s.session_number || '-') + '</div>'
                    + '<div class="pc-session-info">'
                    +   '<div class="pc-session-date">' + formatDateTime(s.scheduled_start) + '</div>'
                    +   '<div class="pc-session-meta">' + esc(sessionTypeLabel(s.session_type)) + '</div>'
                    + '</div>'
                    + badge(s.status)
                    + '</div>';
            }
        }

        html += '</div>';
        container.innerHTML = html;
    }

    // --- Session Detail ---
    async function renderDetail(container, sessionId) {
        container.innerHTML = '<div class="pc-loading">Session wird geladen...</div>';

        var session = await loadSession(sessionId);
        if (!session) {
            container.innerHTML = '<div class="pc-wrap"><div class="pc-empty"><div class="pc-empty-text">Session nicht gefunden.</div></div></div>';
            return;
        }

        var html = '<div class="pc-wrap">';

        // Back + Header
        html += '<div class="pc-detail-header">'
            + '<div class="pc-detail-back" onclick="window.location.hash=\'#/coaching\'">' + ICON.back + ' Zurück zur Übersicht</div>'
            + '<div class="pc-detail-title">Session #' + (session.session_number || '?') + ' ' + badge(session.status) + '</div>'
            + '<div class="pc-detail-time">' + formatDateTime(session.scheduled_start)
            +   (session.scheduled_end ? ' - ' + formatTime(session.scheduled_end) + ' Uhr' : '') + '</div>'
            + '</div>';

        // Join Button (if scheduled and within window)
        if (isJoinable(session)) {
            html += '<div style="margin-bottom:24px;">'
                + '<button class="pc-btn pc-btn-primary" onclick="window.location.hash=\'#/coaching/call-' + session.id + '\'">'
                + ICON.video + ' Session beitreten</button></div>';
        }

        // Reschedule / Cancel / Add to Calendar (nur für geplante Sessions mit Cal-Buchung)
        if (session.cal_booking_uid && (session.status === 'scheduled' || session.status === 'rescheduled')) {
            html += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px;">';
            // Add to Calendar
            var calStart = (session.scheduled_start || '').replace(/[-:]/g, '').replace('.000', '');
            var calEnd = (session.scheduled_end || '').replace(/[-:]/g, '').replace('.000', '');
            var calTitle = encodeURIComponent('Coaching Session - Win³');
            var googleCalUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + calTitle + '&dates=' + calStart + '/' + calEnd;
            html += '<a href="' + googleCalUrl + '" target="_blank" class="pc-btn pc-btn-secondary pc-btn-small">' + ICON.calendar + ' Google Calendar</a>';
            // Reschedule
            html += '<a href="https://cal.com/reschedule/' + esc(session.cal_booking_uid) + '" target="_blank" class="pc-btn pc-btn-secondary pc-btn-small">' + ICON.calendar + ' Umbuchen</a>';
            // Cancel
            html += '<a href="https://cal.com/cancel/' + esc(session.cal_booking_uid) + '" target="_blank" class="pc-btn pc-btn-secondary pc-btn-small" style="color:#ef4444;border-color:rgba(239,68,68,0.3);">Stornieren</a>';
            html += '</div>';
        }

        // Booking Notes
        if (session.booking_notes) {
            html += '<div class="pc-section">'
                + '<div class="pc-section-title">' + ICON.file + ' Notizen zur Buchung</div>'
                + '<div class="pc-section-body">' + esc(session.booking_notes) + '</div>'
                + '</div>';
        }

        // Guests
        if (session.booking_guests) {
            var guests = safeParseJSON(session.booking_guests);
            if (guests && guests.length > 0) {
                html += '<div class="pc-section">'
                    + '<div class="pc-section-title">' + ICON.video + ' Teilnehmer</div>'
                    + '<div class="pc-section-body"><ul>';
                for (var g = 0; g < guests.length; g++) {
                    html += '<li>' + esc(guests[g].name || guests[g].email) + (guests[g].name && guests[g].email ? ' (' + esc(guests[g].email) + ')' : '') + '</li>';
                }
                html += '</ul></div></div>';
            }
        }

        // AI Summary
        if (session.ai_summary) {
            html += '<div class="pc-section">'
                + '<div class="pc-section-title">' + ICON.brain + ' KI-Zusammenfassung</div>'
                + '<div class="pc-section-body">' + esc(session.ai_summary) + '</div>'
                + '</div>';
        }

        // Action Items
        if (session.ai_action_items) {
            var items = safeParseJSON(session.ai_action_items);
            if (items && items.length > 0) {
                html += '<div class="pc-section">'
                    + '<div class="pc-section-title">' + ICON.check + ' Action Items</div>'
                    + '<div class="pc-section-body"><ul>';
                for (var a = 0; a < items.length; a++) {
                    html += '<li>' + esc(items[a]) + '</li>';
                }
                html += '</ul></div></div>';
            }
        }

        // Key Themes
        if (session.ai_key_themes) {
            var themes = safeParseJSON(session.ai_key_themes);
            if (themes && themes.length > 0) {
                html += '<div class="pc-section">'
                    + '<div class="pc-section-title">Kernthemen</div>'
                    + '<div class="pc-section-body">'
                    + themes.map(function(t) { return '<span style="display:inline-block;padding:4px 12px;margin:4px;border-radius:99px;background:rgba(188,128,52,0.12);color:#BC8034;font-size:13px;">' + esc(t) + '</span>'; }).join('')
                    + '</div></div>';
            }
        }

        // Recording
        if (session.recording_url) {
            html += '<div class="pc-section">'
                + '<div class="pc-section-title">' + ICON.play + ' Aufzeichnung'
                + (session.recording_duration ? ' <span style="font-weight:400;opacity:0.5;">(' + formatDuration(session.recording_duration) + ')</span>' : '')
                + '</div>'
                + '<div class="pc-section-body">'
                + '<video controls style="width:100%;border-radius:8px;background:#000;" src="' + esc(session.recording_url) + '"></video>'
                + '</div></div>';
        }

        // Transcript
        if (session.transcript_text) {
            html += '<div class="pc-section">'
                + '<div class="pc-section-title">' + ICON.mic + ' Transkript</div>'
                + '<div class="pc-section-body">'
                + '<div class="pc-transcript-toggle" id="pc-transcript-toggle" onclick="toggleTranscript()">Transkript anzeigen</div>'
                + '<div class="pc-transcript-content" id="pc-transcript-content" style="display:none;">' + esc(session.transcript_text) + '</div>'
                + '</div></div>';
        }

        // Coach Notes
        if (session.coach_notes) {
            html += '<div class="pc-section">'
                + '<div class="pc-section-title">' + ICON.file + ' Coach Notizen</div>'
                + '<div class="pc-section-body">' + esc(session.coach_notes) + '</div>'
                + '</div>';
        }

        // Talk to Coach about this session
        if (session.status === 'completed' && session.ai_summary) {
            html += '<div style="text-align:center;margin-top:24px;">'
                + '<button class="pc-btn pc-btn-secondary" onclick="talkAboutSession(' + session.id + ')">'
                + ICON.brain + ' Mit dem Coach über diese Session sprechen</button></div>';
        }

        html += '</div>';
        container.innerHTML = html;

        // Register transcript toggle
        window.toggleTranscript = function() {
            var el = document.getElementById('pc-transcript-content');
            var btn = document.getElementById('pc-transcript-toggle');
            if (el && btn) {
                var visible = el.style.display !== 'none';
                el.style.display = visible ? 'none' : 'block';
                btn.textContent = visible ? 'Transkript anzeigen' : 'Transkript ausblenden';
            }
        };

        // Talk about session in Coach
        window.talkAboutSession = function(sid) {
            // Navigate to Ankerpraktik Coach with session reference
            // The coach supports reference_type: 'session'
            window.location.hash = '#/ankerpraktik/coach?ref=session&id=' + sid;
        };
    }

    // --- Video Call ---
    async function renderCall(container, sessionId) {
        container.innerHTML = '<div class="pc-wrap"><div class="pc-loading">Verbindung wird hergestellt...</div></div>';

        var join = await joinSession(sessionId);
        if (!join || !join.room_url) {
            container.innerHTML = '<div class="pc-wrap"><div class="pc-empty">'
                + '<div class="pc-empty-text">Session kann nicht gestartet werden.<br>Bitte prüfe, ob der Termin korrekt gebucht ist.</div>'
                + '<button class="pc-btn pc-btn-secondary" onclick="window.location.hash=\'#/coaching\'">' + ICON.back + ' Zurück</button>'
                + '</div></div>';
            return;
        }

        var html = '<div style="padding:8px 20px;">'
            + '<div class="pc-call-header">'
            + '<div class="pc-detail-back" onclick="leaveCall()">' + ICON.back + ' Session verlassen</div>'
            + '<div>' + badge('in_progress') + '</div>'
            + '</div>'
            + '<iframe class="pc-call-frame" id="pc-daily-frame" allow="camera;microphone;autoplay;display-capture" '
            + 'src="' + esc(join.room_url) + '?t=' + esc(join.token) + '"></iframe>'
            + '</div>';

        container.innerHTML = html;

        // Listen for Daily.co postMessage events (left-meeting)
        window.__pcDailyHandler = function(event) {
            try {
                var data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
                if (data && data.action === 'left-meeting') {
                    window.location.hash = '#/coaching/' + sessionId;
                }
            } catch (e) {}
        };
        window.addEventListener('message', window.__pcDailyHandler);

        window.leaveCall = function() {
            if (confirm('Session wirklich verlassen?')) {
                window.location.hash = '#/coaching/' + sessionId;
            }
        };
    }

    // --- Booking ---
    function renderBooking(container) {
        var user = W3.state.user;
        var pkg = cache.packages ? getActivePackage(cache.packages) : null;

        var html = '<div class="pc-wrap">'
            + '<div class="pc-detail-back" onclick="window.location.hash=\'#/coaching\'">' + ICON.back + ' Zurück zur Übersicht</div>'
            + '<h1 class="pc-title" style="margin:16px 0 24px;">Session buchen</h1>';

        if (!pkg) {
            html += '<div class="pc-empty"><div class="pc-empty-text">Kein aktives Coaching-Paket vorhanden.</div></div>';
        } else if (pkg.used_sessions >= pkg.total_sessions) {
            html += '<div class="pc-empty"><div class="pc-empty-text">Alle Sessions deines Pakets sind verbraucht.</div></div>';
        } else {
            // Cal.com Embed placeholder
            // Real integration needs Cal.com account details
            html += '<div class="pc-section" style="text-align:center;padding:48px 24px;">'
                + '<div style="margin-bottom:16px;opacity:0.5;">' + ICON.calendar + '</div>'
                + '<p style="font-size:15px;color:rgba(252,240,214,0.6);margin-bottom:8px;">Cal.com Buchungskalender</p>'
                + '<p style="font-size:13px;color:rgba(252,240,214,0.4);">Wird aktiviert sobald Cal.com konfiguriert ist.</p>'
                + '<div id="pc-cal-embed"></div>'
                + '</div>';

            // If Cal.com is configured, load embed
            // The embed URL will be: https://cal.com/USERNAME/coaching?metadata[user_id]=X&metadata[package_id]=Y
            // For now: placeholder, later replaced by Cal.com inline embed script
        }

        html += '</div>';
        container.innerHTML = html;
    }

    // ======== LOGIC HELPERS ========
    function getActivePackage(packages) {
        for (var i = 0; i < packages.length; i++) {
            if (packages[i].status === 'active') return packages[i];
        }
        return null;
    }

    function getNextSession(sessions) {
        var now = new Date().toISOString();
        var upcoming = [];
        for (var i = 0; i < sessions.length; i++) {
            if (sessions[i].status === 'scheduled' && sessions[i].scheduled_start > now) {
                upcoming.push(sessions[i]);
            }
        }
        // Sort ascending
        upcoming.sort(function(a, b) { return a.scheduled_start < b.scheduled_start ? -1 : 1; });
        return upcoming[0] || null;
    }

    function isJoinable(session) {
        if (session.status !== 'scheduled' && session.status !== 'in_progress') return false;
        var start = new Date(session.scheduled_start);
        var now = new Date();
        // Joinable: 15 min before until 2h after start
        var minsBefore = (start - now) / 60000;
        return minsBefore <= 15 && minsBefore > -120;
    }

    function sessionTypeLabel(type) {
        var map = {
            coaching: 'Coaching',
            strategy: 'Strategiegespräch',
            network: 'Netzwerk',
            live: 'Live-Abend'
        };
        return map[type] || type;
    }

    function safeParseJSON(str) {
        try { return JSON.parse(str); } catch (e) { return null; }
    }

    // ======== ADAPTER INTERFACE ========
    window.__P_COACHING_ADAPTER = {
        mount: function(container, param) {
            // Cleanup previous Daily.co listener
            if (window.__pcDailyHandler) {
                window.removeEventListener('message', window.__pcDailyHandler);
                window.__pcDailyHandler = null;
            }

            if (!param) {
                // #/coaching → Overview
                renderOverview(container);
            } else if (param === 'book') {
                // #/coaching/book → Cal.com Booking
                // Ensure packages are loaded for booking check
                if (cache.packages) {
                    renderBooking(container);
                } else {
                    loadPackages().then(function() { renderBooking(container); });
                }
            } else if (param.indexOf('call-') === 0) {
                // #/coaching/call-42 → Video Call
                var sid = parseInt(param.replace('call-', ''), 10);
                if (sid) renderCall(container, sid);
            } else {
                // #/coaching/42 → Session Detail
                var id = parseInt(param, 10);
                if (id) {
                    renderDetail(container, id);
                } else {
                    container.innerHTML = '<div class="pc-wrap"><div class="pc-empty"><div class="pc-empty-text">Seite nicht gefunden.</div></div></div>';
                }
            }
        },

        teardown: function() {
            // Cleanup Daily.co message listener
            if (window.__pcDailyHandler) {
                window.removeEventListener('message', window.__pcDailyHandler);
                window.__pcDailyHandler = null;
            }
            // Cleanup global handlers
            delete window.toggleTranscript;
            delete window.leaveCall;
            delete window.talkAboutSession;
        }
    };
})();

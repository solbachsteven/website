// Win³ Academy - Admin Dashboard Adapter
// Morning Dashboard: Wochen-Kalender, neue Bewerbungen, Stats
(function() {
    if (window.__P_ADMIN) return;

    var W3 = window.__W3;
    var calendarState = { weekStart: null, sessions: [] };

    var TYPE_COLORS = {
        coaching: '#27ae60',
        strategy: '#2980b9',
        personal: '#8e44ad',
        network: '#BC8034',
        live: '#e74c3c'
    };

    var TYPE_LABELS = {
        coaching: 'Coaching',
        strategy: 'Strategie',
        personal: 'Persönlich',
        network: 'Network',
        live: 'Live'
    };

    var DAY_NAMES = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
    var MONTH_NAMES = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];

    window.__P_ADMIN = {
        mount: async function(container) {
            var user = W3.state.user;
            var name = user.first_name || user.nickname || user.email;

            // Init: aktuelle Woche (Montag)
            calendarState.weekStart = getMonday(new Date());

            container.innerHTML = '<div class="adm-dash" style="max-width:960px;margin:0 auto;padding:32px 24px;font-family:Poppins,sans-serif;">'
                + '<div style="margin-bottom:32px;">'
                + '<h1 style="font-size:24px;font-weight:600;margin-bottom:4px;">Guten Morgen, ' + escapeHtml(name) + '</h1>'
                + '<p style="font-size:14px;color:rgba(252,240,214,0.4);">' + formatDateLong(new Date()) + '</p>'
                + '</div>'
                + '<div class="adm-loading" style="text-align:center;padding:40px;color:rgba(252,240,214,0.4);">Lade Dashboard...</div>'
                + '</div>';

            try {
                var weekEnd = new Date(calendarState.weekStart.getTime() + 7 * 86400000);
                var [dashData, calData] = await Promise.all([
                    W3.api('/admin/dashboard'),
                    W3.api('/admin/calendar?start=' + toDateStr(calendarState.weekStart) + '&end=' + toDateStr(weekEnd))
                ]);
                calendarState.sessions = calData.sessions || [];
                renderDashboard(container.querySelector('.adm-dash'), dashData, calData);
            } catch(e) {
                container.querySelector('.adm-loading').textContent = 'Fehler: ' + (e.message || e);
            }
        },

        teardown: function() {
            calendarState = { weekStart: null, sessions: [] };
        }
    };

    function renderDashboard(wrap, data, calData) {
        var loading = wrap.querySelector('.adm-loading');
        if (loading) loading.remove();

        var userStats = data.user_stats || {};
        var bewCount = data.new_bewerbungen ? data.new_bewerbungen.count : 0;

        // Stats row
        var statsHtml = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:28px;">'
            + statCard('User', userStats.total || 0)
            + statCard('Sessions', data.sessions_this_week || 0, 'diese Woche')
            + statCard('Bewerbungen', bewCount, 'neu')
            + statCard('Pinwand', (data.recent_pinwall || []).length, 'neue')
            + '</div>';

        // Calendar section
        var calendarHtml = '<div id="adm-calendar-wrap" style="margin-bottom:28px;"></div>';

        // New Bewerbungen
        var bewRecent = data.new_bewerbungen ? (data.new_bewerbungen.recent || []) : [];
        var bewHtml = '<div style="margin-bottom:28px;">'
            + '<h2 style="font-size:16px;font-weight:600;margin-bottom:12px;">Neue Bewerbungen' + (bewCount > 0 ? ' (' + bewCount + ')' : '') + '</h2>';

        if (bewRecent.length === 0) {
            bewHtml += '<p style="color:rgba(252,240,214,0.4);font-size:14px;">Keine neuen Bewerbungen</p>';
        } else {
            bewRecent.forEach(function(b) {
                var date = new Date(b.created_at);
                bewHtml += '<div style="' + cardStyle() + 'margin-bottom:8px;padding:16px 20px;cursor:pointer;" onclick="window.__W3.navigate(\'#/admin/bewerbungen\')">'
                    + '<div style="display:flex;justify-content:space-between;align-items:center;">'
                    + '<div>'
                    + '<span style="font-weight:500;font-size:14px;">' + escapeHtml(b.name) + '</span>'
                    + '<span style="font-size:12px;color:rgba(252,240,214,0.4);margin-left:12px;">' + escapeHtml(b.email) + '</span>'
                    + '</div>'
                    + '<span style="font-size:12px;color:rgba(252,240,214,0.4);">' + formatDateShort(date) + '</span>'
                    + '</div>'
                    + '</div>';
            });
        }
        bewHtml += '</div>';

        // Recent pinwall
        var pinHtml = '';
        if (data.recent_pinwall && data.recent_pinwall.length > 0) {
            pinHtml = '<div style="margin-bottom:28px;">'
                + '<h2 style="font-size:16px;font-weight:600;margin-bottom:12px;">Neue Pinwand-Einträge</h2>';
            data.recent_pinwall.forEach(function(p) {
                pinHtml += '<div style="' + cardStyle() + 'margin-bottom:8px;padding:14px 20px;">'
                    + '<span style="font-weight:500;font-size:14px;color:#BC8034;">' + escapeHtml(p.first_name) + '</span>'
                    + '<p style="font-size:13px;color:rgba(252,240,214,0.5);margin-top:4px;">' + escapeHtml(truncate(p.satz_warum || '', 100)) + '</p>'
                    + '</div>';
            });
            pinHtml += '</div>';
        }

        wrap.insertAdjacentHTML('beforeend', statsHtml + calendarHtml + bewHtml + pinHtml);

        // Render calendar into its container
        renderCalendar();
    }

    // === CALENDAR ===

    function renderCalendar() {
        var wrap = document.getElementById('adm-calendar-wrap');
        if (!wrap) return;

        var ws = calendarState.weekStart;
        var we = new Date(ws.getTime() + 6 * 86400000);
        var sessions = calendarState.sessions;

        // Header
        var weekLabel = ws.getDate() + '. - ' + we.getDate() + '. ' + MONTH_NAMES[we.getMonth()] + ' ' + we.getFullYear();

        var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">'
            + '<h2 style="font-size:16px;font-weight:600;margin:0;">Kalender</h2>'
            + '<div style="display:flex;align-items:center;gap:8px;">'
            + '<button id="cal-prev" style="' + navBtnStyle() + '">&#9664;</button>'
            + '<button id="cal-today" style="' + todayBtnStyle() + '">Heute</button>'
            + '<span style="font-size:14px;color:rgba(252,240,214,0.6);min-width:180px;text-align:center;">' + weekLabel + '</span>'
            + '<button id="cal-next" style="' + navBtnStyle() + '">&#9654;</button>'
            + '</div>'
            + '</div>';

        // Legend
        html += '<div style="display:flex;gap:16px;margin-bottom:12px;flex-wrap:wrap;">';
        Object.keys(TYPE_COLORS).forEach(function(t) {
            html += '<span style="display:flex;align-items:center;gap:4px;font-size:11px;color:rgba(252,240,214,0.5);">'
                + '<span style="width:10px;height:10px;border-radius:3px;background:' + TYPE_COLORS[t] + ';"></span>'
                + (TYPE_LABELS[t] || t)
                + '</span>';
        });
        html += '</div>';

        // Group sessions by day index (0=Mo, 6=So)
        var dayBuckets = [[], [], [], [], [], [], []];
        sessions.forEach(function(s) {
            var d = new Date(s.scheduled_start);
            var dayIdx = getDayIndex(d, ws);
            if (dayIdx >= 0 && dayIdx < 7) {
                dayBuckets[dayIdx].push(s);
            }
        });

        // Check container width for responsive
        var isNarrow = wrap.offsetWidth < 560;

        if (isNarrow) {
            // Mobile: Tages-Liste
            html += renderCalendarList(dayBuckets, ws);
        } else {
            // Desktop: 7-Spalten Grid
            html += renderCalendarGrid(dayBuckets, ws);
        }

        wrap.innerHTML = html;

        // Event listeners
        var prevBtn = document.getElementById('cal-prev');
        var nextBtn = document.getElementById('cal-next');
        var todayBtn = document.getElementById('cal-today');
        if (prevBtn) prevBtn.onclick = function() { navigateWeek(-1); };
        if (nextBtn) nextBtn.onclick = function() { navigateWeek(1); };
        if (todayBtn) todayBtn.onclick = function() { navigateToToday(); };

        // Session click handlers
        wrap.querySelectorAll('[data-session-id]').forEach(function(el) {
            el.onclick = function() {
                var sid = el.getAttribute('data-session-id');
                var s = sessions.find(function(x) { return String(x.id) === sid; });
                if (s) showSessionPopup(s);
            };
        });
    }

    function renderCalendarGrid(dayBuckets, ws) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);

        var html = '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:6px;">';

        // Day headers
        for (var i = 0; i < 7; i++) {
            var d = new Date(ws.getTime() + i * 86400000);
            var isToday = d.getTime() === today.getTime();
            var headerBg = isToday ? 'rgba(188,128,52,0.15)' : 'transparent';
            var headerColor = isToday ? '#BC8034' : 'rgba(252,240,214,0.5)';
            html += '<div style="text-align:center;padding:8px 4px;border-radius:8px 8px 0 0;background:' + headerBg + ';">'
                + '<div style="font-size:11px;color:' + headerColor + ';font-weight:600;">' + DAY_NAMES[i] + '</div>'
                + '<div style="font-size:16px;color:' + (isToday ? '#BC8034' : 'rgba(252,240,214,0.7)') + ';font-weight:' + (isToday ? '700' : '400') + ';">' + d.getDate() + '</div>'
                + '</div>';
        }

        // Session cells
        for (var i = 0; i < 7; i++) {
            var d = new Date(ws.getTime() + i * 86400000);
            var isToday = d.getTime() === today.getTime();
            var cellBorder = isToday ? 'border:1px solid rgba(188,128,52,0.25);' : 'border:1px solid rgba(252,240,214,0.06);';

            html += '<div style="min-height:80px;padding:6px;border-radius:0 0 8px 8px;' + cellBorder + 'background:rgba(45,39,38,0.3);">';

            var bucket = dayBuckets[i];
            if (bucket.length === 0) {
                html += '<div style="height:100%;display:flex;align-items:center;justify-content:center;">'
                    + '<span style="font-size:11px;color:rgba(252,240,214,0.15);">-</span></div>';
            } else {
                bucket.forEach(function(s) {
                    html += renderSessionCard(s, true);
                });
            }
            html += '</div>';
        }

        html += '</div>';
        return html;
    }

    function renderCalendarList(dayBuckets, ws) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        var html = '';

        for (var i = 0; i < 7; i++) {
            var bucket = dayBuckets[i];
            if (bucket.length === 0) continue;

            var d = new Date(ws.getTime() + i * 86400000);
            var isToday = d.getTime() === today.getTime();
            var dayLabel = DAY_NAMES[i] + ', ' + d.getDate() + '. ' + MONTH_NAMES[d.getMonth()];

            html += '<div style="margin-bottom:12px;">'
                + '<div style="font-size:13px;font-weight:600;color:' + (isToday ? '#BC8034' : 'rgba(252,240,214,0.5)') + ';margin-bottom:6px;'
                + (isToday ? 'padding:4px 8px;background:rgba(188,128,52,0.1);border-radius:6px;display:inline-block;' : '') + '">'
                + dayLabel + (isToday ? ' (Heute)' : '') + '</div>';

            bucket.forEach(function(s) {
                html += renderSessionCard(s, false);
            });
            html += '</div>';
        }

        if (!html) {
            html = '<p style="color:rgba(252,240,214,0.4);font-size:14px;padding:16px 0;">Keine Sessions diese Woche</p>';
        }
        return html;
    }

    function renderSessionCard(s, compact) {
        var color = TYPE_COLORS[s.session_type] || '#BC8034';
        var time = formatTime(new Date(s.scheduled_start));
        var displayName = s.first_name || s.nickname || (s.email ? s.email.split('@')[0] : 'Unbekannt');
        var typeLabel = TYPE_LABELS[s.session_type] || s.session_type || '?';

        if (compact) {
            // Grid card: kompakt
            return '<div data-session-id="' + s.id + '" style="border-left:3px solid ' + color + ';padding:5px 8px;margin-bottom:4px;border-radius:4px;'
                + 'background:rgba(45,39,38,0.6);cursor:pointer;transition:background 0.15s;" '
                + 'onmouseover="this.style.background=\'rgba(188,128,52,0.12)\'" onmouseout="this.style.background=\'rgba(45,39,38,0.6)\'">'
                + '<div style="font-size:11px;color:rgba(252,240,214,0.7);font-weight:500;">' + time + '</div>'
                + '<div style="font-size:12px;color:rgba(252,240,214,0.85);margin-top:2px;">' + escapeHtml(displayName) + '</div>'
                + '</div>';
        } else {
            // List card: mit Typ-Label
            return '<div data-session-id="' + s.id + '" style="' + cardStyle() + 'border-left:3px solid ' + color + ';margin-bottom:6px;padding:12px 16px;cursor:pointer;" '
                + 'onmouseover="this.style.borderColor=\'rgba(188,128,52,0.4)\'" onmouseout="this.style.borderColor=\'rgba(188,128,52,0.15)\'">'
                + '<div style="display:flex;justify-content:space-between;align-items:center;">'
                + '<div>'
                + '<span style="font-weight:500;font-size:14px;">' + escapeHtml(displayName) + '</span>'
                + '<span style="font-size:11px;color:' + color + ';margin-left:10px;padding:2px 6px;border-radius:4px;background:' + hexToRgba(color, 0.12) + ';">' + typeLabel + '</span>'
                + '</div>'
                + '<span style="font-size:13px;color:#BC8034;">' + time + '</span>'
                + '</div>'
                + '</div>';
        }
    }

    function showSessionPopup(s) {
        // Remove existing popup
        var existing = document.getElementById('cal-session-popup');
        if (existing) existing.remove();

        var color = TYPE_COLORS[s.session_type] || '#BC8034';
        var typeLabel = TYPE_LABELS[s.session_type] || s.session_type || '?';
        var displayName = [s.first_name, s.last_name].filter(Boolean).join(' ') || s.nickname || s.email || 'Unbekannt';
        var start = new Date(s.scheduled_start);
        var end = s.scheduled_end ? new Date(s.scheduled_end) : null;
        var timeStr = formatTime(start) + (end ? ' - ' + formatTime(end) : '');
        var dateStr = start.getDate() + '. ' + MONTH_NAMES[start.getMonth()] + ' ' + start.getFullYear();

        var html = '<div id="cal-session-popup" style="position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999;display:flex;align-items:center;justify-content:center;font-family:Poppins,sans-serif;">'
            + '<div style="position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.6);" onclick="document.getElementById(\'cal-session-popup\').remove()"></div>'
            + '<div style="position:relative;width:90%;max-width:420px;background:rgba(45,39,38,0.95);border:1px solid rgba(188,128,52,0.25);border-radius:16px;padding:28px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);">'
            + '<button onclick="document.getElementById(\'cal-session-popup\').remove()" style="position:absolute;top:12px;right:16px;background:none;border:none;color:rgba(252,240,214,0.4);font-size:20px;cursor:pointer;padding:4px 8px;">&times;</button>'
            + '<div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">'
            + '<span style="width:12px;height:12px;border-radius:4px;background:' + color + ';flex-shrink:0;"></span>'
            + '<span style="font-size:11px;color:' + color + ';padding:2px 8px;border-radius:4px;background:' + hexToRgba(color, 0.12) + ';font-weight:500;">' + typeLabel + '</span>'
            + '</div>'
            + '<div style="font-size:18px;font-weight:600;margin-bottom:4px;">' + escapeHtml(displayName) + '</div>'
            + '<div style="font-size:13px;color:rgba(252,240,214,0.5);margin-bottom:16px;">' + escapeHtml(s.email || '') + '</div>'
            + '<div style="display:grid;grid-template-columns:auto 1fr;gap:6px 12px;font-size:13px;margin-bottom:16px;">'
            + '<span style="color:rgba(252,240,214,0.4);">Datum</span><span>' + dateStr + '</span>'
            + '<span style="color:rgba(252,240,214,0.4);">Uhrzeit</span><span>' + timeStr + '</span>'
            + '<span style="color:rgba(252,240,214,0.4);">Status</span><span style="text-transform:capitalize;">' + escapeHtml(s.status || 'scheduled') + '</span>'
            + '</div>';

        if (s.booking_notes) {
            html += '<div style="margin-bottom:16px;">'
                + '<div style="font-size:11px;color:rgba(252,240,214,0.4);margin-bottom:4px;">Notizen</div>'
                + '<div style="font-size:13px;color:rgba(252,240,214,0.7);line-height:1.5;">' + escapeHtml(truncate(s.booking_notes, 200)) + '</div>'
                + '</div>';
        }

        if (s.ai_summary) {
            html += '<div style="margin-bottom:16px;">'
                + '<div style="font-size:11px;color:rgba(252,240,214,0.4);margin-bottom:4px;">KI-Zusammenfassung</div>'
                + '<div style="font-size:13px;color:rgba(252,240,214,0.7);line-height:1.5;">' + escapeHtml(truncate(s.ai_summary, 200)) + '</div>'
                + '</div>';
        }

        // Action buttons
        html += '<div style="display:flex;gap:8px;margin-top:8px;">';
        if (s.daily_room_url) {
            html += '<a href="' + escapeHtml(s.daily_room_url) + '" target="_blank" style="flex:1;text-align:center;padding:10px;border-radius:8px;background:rgba(188,128,52,0.15);color:#BC8034;font-size:13px;font-weight:500;text-decoration:none;border:1px solid rgba(188,128,52,0.25);">Daily.co Room</a>';
        }
        html += '<button onclick="window.__W3.navigate(\'#/admin/coaching\');document.getElementById(\'cal-session-popup\').remove();" style="flex:1;padding:10px;border-radius:8px;background:rgba(252,240,214,0.06);color:rgba(252,240,214,0.7);font-size:13px;border:1px solid rgba(252,240,214,0.1);cursor:pointer;">Alle Sessions</button>';
        html += '</div></div></div>';

        document.body.insertAdjacentHTML('beforeend', html);
    }

    async function navigateWeek(offset) {
        var ws = calendarState.weekStart;
        calendarState.weekStart = new Date(ws.getTime() + offset * 7 * 86400000);
        await fetchCalendarData();
    }

    async function navigateToToday() {
        calendarState.weekStart = getMonday(new Date());
        await fetchCalendarData();
    }

    async function fetchCalendarData() {
        var wrap = document.getElementById('adm-calendar-wrap');
        if (!wrap) return;

        // Show loading indicator
        var header = wrap.querySelector('h2');
        if (header) header.style.opacity = '0.4';

        try {
            var ws = calendarState.weekStart;
            var we = new Date(ws.getTime() + 7 * 86400000);
            var data = await W3.api('/admin/calendar?start=' + toDateStr(ws) + '&end=' + toDateStr(we));
            calendarState.sessions = data.sessions || [];
        } catch(e) {
            calendarState.sessions = [];
        }

        renderCalendar();
    }

    // === HELPERS ===

    function getMonday(date) {
        var d = new Date(date);
        var day = d.getDay(); // 0=So, 1=Mo...
        var diff = day === 0 ? -6 : 1 - day;
        d.setDate(d.getDate() + diff);
        d.setHours(0, 0, 0, 0);
        return d;
    }

    function getDayIndex(date, weekStart) {
        var diff = date.getTime() - weekStart.getTime();
        return Math.floor(diff / 86400000);
    }

    function toDateStr(d) {
        return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    }

    function formatTime(d) {
        return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
    }

    function hexToRgba(hex, alpha) {
        var r = parseInt(hex.slice(1, 3), 16);
        var g = parseInt(hex.slice(3, 5), 16);
        var b = parseInt(hex.slice(5, 7), 16);
        return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
    }

    function statCard(label, value, sub) {
        return '<div style="' + cardStyle() + 'padding:20px;text-align:center;">'
            + '<div style="font-size:28px;font-weight:700;color:#BC8034;">' + (value || 0) + '</div>'
            + '<div style="font-size:13px;color:rgba(252,240,214,0.5);margin-top:4px;">' + label + '</div>'
            + (sub ? '<div style="font-size:11px;color:rgba(252,240,214,0.3);margin-top:2px;">' + sub + '</div>' : '')
            + '</div>';
    }

    function cardStyle() {
        return 'background:rgba(45,39,38,0.55);border:1px solid rgba(188,128,52,0.15);border-radius:12px;transition:border-color 0.2s;';
    }

    function navBtnStyle() {
        return 'background:rgba(252,240,214,0.06);border:1px solid rgba(252,240,214,0.1);color:rgba(252,240,214,0.6);padding:6px 10px;border-radius:6px;cursor:pointer;font-size:12px;';
    }

    function todayBtnStyle() {
        return 'background:rgba(188,128,52,0.12);border:1px solid rgba(188,128,52,0.2);color:#BC8034;padding:6px 12px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:500;';
    }

    function formatDateLong(d) {
        var days = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];
        return days[d.getDay()] + ', ' + d.getDate() + '. ' + MONTH_NAMES[d.getMonth()] + ' ' + d.getFullYear();
    }

    function formatDateShort(d) {
        return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
    }

    function truncate(str, len) {
        if (!str) return '';
        return str.length > len ? str.substring(0, len) + '...' : str;
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
})();

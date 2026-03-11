// Win³ Academy - Admin Dashboard Adapter
// Morning Dashboard: Nächste Sessions, neue Bewerbungen, Stats
(function() {
    if (window.__P_ADMIN) return;

    var W3 = window.__W3;

    window.__P_ADMIN = {
        mount: async function(container) {
            var user = W3.state.user;
            var name = user.first_name || user.nickname || user.email;

            container.innerHTML = '<div class="adm-dash" style="max-width:960px;margin:0 auto;padding:32px 24px;">'
                + '<div style="margin-bottom:32px;">'
                + '<h1 style="font-size:24px;font-weight:600;margin-bottom:4px;">Guten Morgen, ' + escapeHtml(name) + '</h1>'
                + '<p style="font-size:14px;color:rgba(252,240,214,0.4);">' + formatDate(new Date()) + '</p>'
                + '</div>'
                + '<div class="adm-loading" style="text-align:center;padding:40px;color:rgba(252,240,214,0.4);">Lade Dashboard...</div>'
                + '</div>';

            try {
                var data = await W3.api('/admin/dashboard');
                renderDashboard(container.querySelector('.adm-dash'), data);
            } catch(e) {
                container.querySelector('.adm-loading').textContent = 'Fehler: ' + (e.message || e);
            }
        },

        teardown: function() {}
    };

    function renderDashboard(wrap, data) {
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

        // Next sessions
        var upSessions = data.upcoming_sessions || [];
        var sessionsHtml = '<div style="margin-bottom:28px;">'
            + '<h2 style="font-size:16px;font-weight:600;margin-bottom:12px;">Nächste Sessions</h2>';

        if (upSessions.length === 0) {
            sessionsHtml += '<p style="color:rgba(252,240,214,0.4);font-size:14px;">Keine geplanten Sessions</p>';
        } else {
            upSessions.forEach(function(s) {
                var date = new Date(s.scheduled_start);
                var name = [s.first_name, s.last_name].filter(Boolean).join(' ') || s.email || 'Unbekannt';
                var prevSummary = s.prev_summary ? '<p style="font-size:12px;color:rgba(252,240,214,0.35);margin-top:6px;line-height:1.5;">' + escapeHtml(truncate(s.prev_summary, 120)) + '</p>' : '';

                sessionsHtml += '<div style="' + cardStyle() + 'margin-bottom:8px;padding:16px 20px;cursor:pointer;" onclick="window.__W3.navigate(\'#/admin/coaching\')">'
                    + '<div style="display:flex;justify-content:space-between;align-items:center;">'
                    + '<div>'
                    + '<span style="font-weight:500;font-size:14px;">' + escapeHtml(name) + '</span>'
                    + '<span style="font-size:12px;color:rgba(252,240,214,0.4);margin-left:12px;">' + escapeHtml(s.session_type || 'coaching') + '</span>'
                    + '</div>'
                    + '<span style="font-size:13px;color:#BC8034;">' + formatDateTime(date) + '</span>'
                    + '</div>'
                    + prevSummary
                    + '</div>';
            });
        }
        sessionsHtml += '</div>';

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

        wrap.insertAdjacentHTML('beforeend', statsHtml + sessionsHtml + bewHtml + pinHtml);
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

    function formatDate(d) {
        var days = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];
        var months = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
        return days[d.getDay()] + ', ' + d.getDate() + '. ' + months[d.getMonth()] + ' ' + d.getFullYear();
    }

    function formatDateTime(d) {
        var day = d.getDate() + '.' + (d.getMonth() + 1) + '.';
        var h = d.getHours().toString().padStart(2, '0');
        var m = d.getMinutes().toString().padStart(2, '0');
        return day + ' ' + h + ':' + m;
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

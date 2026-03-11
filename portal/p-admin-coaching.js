// Win³ Academy - Admin Coaching Adapter
// Alle Sessions verwalten: Liste, Status, Details, Notizen
(function() {
    if (window.__P_ADMIN_COACHING) return;

    var W3 = window.__W3;
    var sessions = [];
    var container = null;

    window.__P_ADMIN_COACHING = {
        mount: async function(el) {
            container = el;
            container.innerHTML = '<div class="adm-coaching" style="max-width:960px;margin:0 auto;padding:32px 24px;">'
                + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">'
                + '<h1 style="font-size:22px;font-weight:600;">Coaching Sessions</h1>'
                + '<button class="w3-btn" style="font-size:13px;padding:8px 20px;" onclick="window.__P_ADMIN_COACHING.showCreate()">+ Neue Session</button>'
                + '</div>'
                + '<div id="adm-coaching-list" style="color:rgba(252,240,214,0.4);">Lade Sessions...</div>'
                + '</div>';

            await loadSessions();
        },

        teardown: function() { container = null; },

        showCreate: function() {
            var list = document.getElementById('adm-coaching-list');
            if (!list) return;

            list.innerHTML = '<div style="' + cardStyle() + 'padding:24px;margin-bottom:16px;">'
                + '<h3 style="font-size:16px;font-weight:600;margin-bottom:16px;">Neue Session erstellen</h3>'
                + '<div style="display:grid;gap:12px;max-width:500px;">'
                + inputField('Email des Coachees', 'adm-cs-email', 'email')
                + selectField('Typ', 'adm-cs-type', [
                    {v:'coaching',l:'Coaching'},{v:'strategy',l:'Strategy'},{v:'personal',l:'Personal'},{v:'network',l:'Network'},{v:'live',l:'Live'}
                  ])
                + inputField('Termin (optional)', 'adm-cs-date', 'datetime-local')
                + '<div style="display:flex;gap:12px;margin-top:8px;">'
                + '<button class="w3-btn" style="font-size:13px;padding:8px 20px;" onclick="window.__P_ADMIN_COACHING.doCreate()">Erstellen</button>'
                + '<button class="w3-btn" style="font-size:13px;padding:8px 20px;background:transparent;color:#BC8034;border:1px solid rgba(188,128,52,0.3);" onclick="window.__P_ADMIN_COACHING.cancelCreate()">Abbrechen</button>'
                + '</div>'
                + '<div id="adm-cs-msg" style="font-size:13px;margin-top:8px;"></div>'
                + '</div>'
                + '</div>';
        },

        cancelCreate: async function() { await loadSessions(); },

        doCreate: async function() {
            var email = document.getElementById('adm-cs-email').value.trim();
            var type = document.getElementById('adm-cs-type').value;
            var date = document.getElementById('adm-cs-date').value;
            var msg = document.getElementById('adm-cs-msg');

            if (!email) { msg.textContent = 'Email erforderlich'; msg.style.color = '#e74c3c'; return; }

            msg.textContent = 'Erstelle...'; msg.style.color = 'rgba(252,240,214,0.5)';

            try {
                var body = { email: email, session_type: type };
                if (date) body.scheduled_at = new Date(date).toISOString();

                await W3.api('/coaching/sessions', { method: 'POST', body: body });
                msg.textContent = 'Session erstellt!'; msg.style.color = '#27ae60';
                setTimeout(function() { loadSessions(); }, 1000);
            } catch(e) {
                msg.textContent = 'Fehler: ' + (e.message || e); msg.style.color = '#e74c3c';
            }
        },

        showDetail: function(idx) {
            var s = sessions[idx];
            if (!s) return;
            var list = document.getElementById('adm-coaching-list');
            if (!list) return;

            var statusBadge = '<span style="font-size:12px;padding:3px 10px;border-radius:20px;background:' + statusColor(s.status) + ';color:#1a1a1a;font-weight:600;">' + escapeHtml(s.status) + '</span>';
            var name = s.client_name || s.client_email || 'Unbekannt';

            var html = '<div style="' + cardStyle() + 'padding:24px;margin-bottom:16px;">'
                + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">'
                + '<h3 style="font-size:18px;font-weight:600;">' + escapeHtml(name) + '</h3>'
                + statusBadge
                + '</div>'
                + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px 24px;font-size:13px;color:rgba(252,240,214,0.6);margin-bottom:16px;">'
                + infoRow('Typ', s.session_type || 'coaching')
                + infoRow('Termin', s.scheduled_at ? formatDateTime(new Date(s.scheduled_at)) : '-')
                + infoRow('Dauer', s.duration_minutes ? s.duration_minutes + ' Min.' : '-')
                + infoRow('Daily Room', s.daily_room_name || '-')
                + '</div>';

            // AI Summary
            if (s.ai_summary) {
                html += '<div style="margin-bottom:16px;">'
                    + '<h4 style="font-size:14px;font-weight:600;margin-bottom:8px;">KI-Summary</h4>'
                    + '<div style="font-size:13px;color:rgba(252,240,214,0.6);line-height:1.7;white-space:pre-wrap;">' + escapeHtml(s.ai_summary) + '</div>'
                    + '</div>';
            }

            // Coach Notes
            html += '<div style="margin-bottom:16px;">'
                + '<h4 style="font-size:14px;font-weight:600;margin-bottom:8px;">Coach-Notizen</h4>'
                + '<textarea id="adm-cs-notes" style="' + textareaStyle() + '" rows="4" placeholder="Notizen zur Session...">' + escapeHtml(s.coach_notes || '') + '</textarea>'
                + '<button class="w3-btn" style="font-size:12px;padding:6px 16px;margin-top:8px;" onclick="window.__P_ADMIN_COACHING.saveNotes(' + s.id + ')">Speichern</button>'
                + '<span id="adm-cs-notes-msg" style="font-size:12px;margin-left:12px;"></span>'
                + '</div>';

            // Status change
            html += '<div style="margin-bottom:16px;">'
                + '<h4 style="font-size:14px;font-weight:600;margin-bottom:8px;">Status ändern</h4>'
                + '<div style="display:flex;gap:8px;flex-wrap:wrap;">';
            ['scheduled','in_progress','completed','cancelled','no_show'].forEach(function(st) {
                var active = s.status === st;
                html += '<button style="font-size:12px;padding:6px 14px;border-radius:20px;border:1px solid ' + (active ? '#BC8034' : 'rgba(188,128,52,0.2)') + ';background:' + (active ? 'rgba(188,128,52,0.2)' : 'transparent') + ';color:' + (active ? '#BC8034' : 'rgba(252,240,214,0.5)') + ';cursor:pointer;font-family:Poppins,sans-serif;" onclick="window.__P_ADMIN_COACHING.changeStatus(' + s.id + ',\'' + st + '\')">' + st + '</button>';
            });
            html += '</div></div>';

            // Back button
            html += '<button class="w3-btn" style="font-size:13px;padding:8px 20px;background:transparent;color:#BC8034;border:1px solid rgba(188,128,52,0.3);" onclick="window.__P_ADMIN_COACHING.cancelCreate()">Zurück</button>'
                + '</div>';

            list.innerHTML = html;
        },

        saveNotes: async function(id) {
            var notes = document.getElementById('adm-cs-notes').value;
            var msg = document.getElementById('adm-cs-notes-msg');
            try {
                await W3.api('/coaching/sessions/' + id + '/notes', { method: 'PUT', body: { coach_notes: notes } });
                msg.textContent = 'Gespeichert'; msg.style.color = '#27ae60';
            } catch(e) {
                msg.textContent = 'Fehler'; msg.style.color = '#e74c3c';
            }
        },

        changeStatus: async function(id, newStatus) {
            try {
                await W3.api('/coaching/sessions/' + id + '/status', { method: 'PUT', body: { status: newStatus } });
                await loadSessions();
                // Re-open detail
                for (var i = 0; i < sessions.length; i++) {
                    if (sessions[i].id === id) {
                        window.__P_ADMIN_COACHING.showDetail(i);
                        break;
                    }
                }
            } catch(e) {
                console.error('Status change failed:', e);
            }
        }
    };

    async function loadSessions() {
        var list = document.getElementById('adm-coaching-list');
        if (!list) return;

        try {
            var data = await W3.api('/coaching/sessions');
            sessions = data.sessions || data || [];

            if (sessions.length === 0) {
                list.innerHTML = '<p style="color:rgba(252,240,214,0.4);font-size:14px;">Keine Sessions vorhanden</p>';
                return;
            }

            // Sort: scheduled first (newest), then completed
            sessions.sort(function(a, b) {
                var aDate = a.scheduled_at || a.created_at;
                var bDate = b.scheduled_at || b.created_at;
                return new Date(bDate) - new Date(aDate);
            });

            var html = '';
            sessions.forEach(function(s, idx) {
                var name = s.client_name || s.client_email || 'Unbekannt';
                var date = s.scheduled_at ? formatDateTime(new Date(s.scheduled_at)) : '-';
                var badge = '<span style="font-size:11px;padding:2px 8px;border-radius:12px;background:' + statusColor(s.status) + ';color:#1a1a1a;font-weight:600;">' + escapeHtml(s.status) + '</span>';

                html += '<div style="' + cardStyle() + 'padding:14px 20px;margin-bottom:6px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;" onclick="window.__P_ADMIN_COACHING.showDetail(' + idx + ')">'
                    + '<div style="display:flex;align-items:center;gap:12px;">'
                    + '<span style="font-weight:500;font-size:14px;">' + escapeHtml(name) + '</span>'
                    + '<span style="font-size:12px;color:rgba(252,240,214,0.35);">' + escapeHtml(s.session_type || 'coaching') + '</span>'
                    + badge
                    + '</div>'
                    + '<span style="font-size:13px;color:rgba(252,240,214,0.4);">' + date + '</span>'
                    + '</div>';
            });

            list.innerHTML = html;
        } catch(e) {
            list.innerHTML = '<p style="color:#e74c3c;">Fehler: ' + escapeHtml(e.message || String(e)) + '</p>';
        }
    }

    function statusColor(s) {
        switch(s) {
            case 'scheduled': return 'rgba(188,128,52,0.7)';
            case 'in_progress': return 'rgba(52,152,219,0.7)';
            case 'completed': return 'rgba(39,174,96,0.7)';
            case 'cancelled': return 'rgba(149,165,166,0.5)';
            case 'no_show': return 'rgba(231,76,60,0.6)';
            default: return 'rgba(188,128,52,0.4)';
        }
    }

    function cardStyle() {
        return 'background:rgba(45,39,38,0.55);border:1px solid rgba(188,128,52,0.15);border-radius:12px;transition:border-color 0.2s;';
    }

    function textareaStyle() {
        return 'width:100%;background:rgba(26,26,26,0.6);border:1px solid rgba(188,128,52,0.15);border-radius:8px;color:#FCF0D6;font-family:Poppins,sans-serif;font-size:13px;padding:12px;resize:vertical;';
    }

    function inputField(label, id, type) {
        return '<label style="font-size:13px;color:rgba(252,240,214,0.5);">' + label
            + '<input id="' + id + '" type="' + (type || 'text') + '" style="display:block;width:100%;margin-top:4px;background:rgba(26,26,26,0.6);border:1px solid rgba(188,128,52,0.15);border-radius:8px;color:#FCF0D6;font-family:Poppins,sans-serif;font-size:14px;padding:10px 12px;" />'
            + '</label>';
    }

    function selectField(label, id, options) {
        var opts = '';
        options.forEach(function(o) { opts += '<option value="' + o.v + '">' + o.l + '</option>'; });
        return '<label style="font-size:13px;color:rgba(252,240,214,0.5);">' + label
            + '<select id="' + id + '" style="display:block;width:100%;margin-top:4px;background:rgba(26,26,26,0.6);border:1px solid rgba(188,128,52,0.15);border-radius:8px;color:#FCF0D6;font-family:Poppins,sans-serif;font-size:14px;padding:10px 12px;">' + opts + '</select>'
            + '</label>';
    }

    function infoRow(label, value) {
        return '<div><span style="color:rgba(252,240,214,0.35);">' + label + ':</span> ' + escapeHtml(value) + '</div>';
    }

    function formatDateTime(d) {
        return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + ' ' + d.getHours().toString().padStart(2,'0') + ':' + d.getMinutes().toString().padStart(2,'0');
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
})();

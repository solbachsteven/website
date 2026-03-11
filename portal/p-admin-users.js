// Win³ Academy - Admin Users Adapter
// User-Verwaltung: Liste, Einladung, Tier-Änderung
(function() {
    if (window.__P_ADMIN_USERS) return;

    var W3 = window.__W3;
    var users = [];
    var container = null;

    window.__P_ADMIN_USERS = {
        mount: async function(el) {
            container = el;
            container.innerHTML = '<div class="adm-users" style="max-width:960px;margin:0 auto;padding:32px 24px;">'
                + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">'
                + '<h1 style="font-size:22px;font-weight:600;">User-Verwaltung</h1>'
                + '<button class="w3-btn" style="font-size:13px;padding:8px 20px;" onclick="window.__P_ADMIN_USERS.showInvite()">+ Einladen</button>'
                + '</div>'
                + '<div id="adm-users-list" style="color:rgba(252,240,214,0.4);">Lade User...</div>'
                + '</div>';

            await loadUsers();
        },

        teardown: function() { container = null; },

        showInvite: function() {
            var list = document.getElementById('adm-users-list');
            if (!list) return;

            list.innerHTML = '<div style="' + cardStyle() + 'padding:24px;margin-bottom:16px;">'
                + '<h3 style="font-size:16px;font-weight:600;margin-bottom:16px;">User einladen</h3>'
                + '<div style="display:grid;gap:12px;max-width:500px;">'
                + inputField('Email', 'adm-inv-email', 'email')
                + inputField('Vorname (optional)', 'adm-inv-first', 'text')
                + inputField('Nachname (optional)', 'adm-inv-last', 'text')
                + inputField('Nickname (optional)', 'adm-inv-nick', 'text')
                + selectField('Tier', 'adm-inv-tier', [
                    {v:'free',l:'Free'},{v:'kurs',l:'Kurs'},{v:'community',l:'Community'},{v:'mentoring',l:'Mentoring'}
                  ])
                + '<div style="display:flex;gap:12px;margin-top:8px;">'
                + '<button class="w3-btn" style="font-size:13px;padding:8px 20px;" onclick="window.__P_ADMIN_USERS.doInvite()">Einladen</button>'
                + '<button class="w3-btn" style="font-size:13px;padding:8px 20px;background:transparent;color:#BC8034;border:1px solid rgba(188,128,52,0.3);" onclick="window.__P_ADMIN_USERS.cancelInvite()">Abbrechen</button>'
                + '</div>'
                + '<div id="adm-inv-msg" style="font-size:13px;margin-top:8px;"></div>'
                + '</div>'
                + '</div>';
        },

        cancelInvite: async function() { await loadUsers(); },

        doInvite: async function() {
            var email = document.getElementById('adm-inv-email').value.trim();
            var first = document.getElementById('adm-inv-first').value.trim();
            var last = document.getElementById('adm-inv-last').value.trim();
            var nick = document.getElementById('adm-inv-nick').value.trim();
            var tier = document.getElementById('adm-inv-tier').value;
            var msg = document.getElementById('adm-inv-msg');

            if (!email) { msg.textContent = 'Email erforderlich'; msg.style.color = '#e74c3c'; return; }

            msg.textContent = 'Sende Einladung...'; msg.style.color = 'rgba(252,240,214,0.5)';

            try {
                var body = { email: email, tier: tier };
                if (first) body.first_name = first;
                if (last) body.last_name = last;
                if (nick) body.nickname = nick;

                await W3.api('/admin/users/invite', { method: 'POST', body: body });
                msg.textContent = 'Einladung gesendet!'; msg.style.color = '#27ae60';
                setTimeout(function() { loadUsers(); }, 1500);
            } catch(e) {
                msg.textContent = 'Fehler: ' + (e.message || e); msg.style.color = '#e74c3c';
            }
        },

        showDetail: function(idx) {
            var u = users[idx];
            if (!u) return;
            var list = document.getElementById('adm-users-list');
            if (!list) return;

            var name = [u.first_name, u.last_name].filter(Boolean).join(' ') || u.nickname || u.email;

            var html = '<div style="' + cardStyle() + 'padding:24px;">'
                + '<h3 style="font-size:18px;font-weight:600;margin-bottom:16px;">' + escapeHtml(name) + '</h3>'
                + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px 24px;font-size:13px;color:rgba(252,240,214,0.6);margin-bottom:20px;">'
                + infoRow('Email', u.email)
                + infoRow('Nickname', u.nickname || '-')
                + infoRow('Tier', u.tier || 'free')
                + infoRow('Admin', u.is_admin ? 'Ja' : 'Nein')
                + infoRow('Erstellt', u.created_at ? formatDate(new Date(u.created_at)) : '-')
                + infoRow('Letzter Login', u.last_login ? formatDate(new Date(u.last_login)) : '-')
                + '</div>';

            // Tier change
            html += '<div style="margin-bottom:20px;">'
                + '<h4 style="font-size:14px;font-weight:600;margin-bottom:8px;">Tier ändern</h4>'
                + '<div style="display:flex;gap:8px;flex-wrap:wrap;">';
            ['free','kurs','community','mentoring'].forEach(function(t) {
                var active = (u.tier || 'free') === t;
                html += '<button style="font-size:12px;padding:6px 14px;border-radius:20px;border:1px solid ' + (active ? '#BC8034' : 'rgba(188,128,52,0.2)') + ';background:' + (active ? 'rgba(188,128,52,0.2)' : 'transparent') + ';color:' + (active ? '#BC8034' : 'rgba(252,240,214,0.5)') + ';cursor:pointer;font-family:Poppins,sans-serif;" onclick="window.__P_ADMIN_USERS.changeTier(\'' + u.id + '\',\'' + t + '\',' + idx + ')">' + t + '</button>';
            });
            html += '</div><span id="adm-user-tier-msg" style="font-size:12px;margin-left:8px;"></span></div>';

            html += '<button class="w3-btn" style="font-size:13px;padding:8px 20px;background:transparent;color:#BC8034;border:1px solid rgba(188,128,52,0.3);" onclick="window.__P_ADMIN_USERS.cancelInvite()">Zurück</button>'
                + '</div>';

            list.innerHTML = html;
        },

        changeTier: async function(userId, newTier, idx) {
            var msg = document.getElementById('adm-user-tier-msg');
            try {
                await W3.api('/admin/users/' + userId + '/tier', { method: 'PUT', body: { tier: newTier } });
                users[idx].tier = newTier;
                if (msg) { msg.textContent = 'Gespeichert'; msg.style.color = '#27ae60'; }
                window.__P_ADMIN_USERS.showDetail(idx);
            } catch(e) {
                if (msg) { msg.textContent = 'Fehler'; msg.style.color = '#e74c3c'; }
            }
        }
    };

    async function loadUsers() {
        var list = document.getElementById('adm-users-list');
        if (!list) return;

        try {
            var data = await W3.api('/admin/users');
            users = data.users || data || [];

            if (users.length === 0) {
                list.innerHTML = '<p style="color:rgba(252,240,214,0.4);font-size:14px;">Keine User</p>';
                return;
            }

            var html = '<div style="font-size:12px;color:rgba(252,240,214,0.3);margin-bottom:8px;">' + users.length + ' User</div>';

            users.forEach(function(u, idx) {
                var name = [u.first_name, u.last_name].filter(Boolean).join(' ') || u.nickname || '';
                var tierBadge = '<span style="font-size:11px;padding:2px 8px;border-radius:12px;background:' + tierColor(u.tier) + ';color:#1a1a1a;font-weight:600;">' + escapeHtml(u.tier || 'free') + '</span>';
                var adminBadge = u.is_admin ? ' <span style="font-size:10px;color:#BC8034;">ADMIN</span>' : '';

                html += '<div style="' + cardStyle() + 'padding:14px 20px;margin-bottom:6px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;" onclick="window.__P_ADMIN_USERS.showDetail(' + idx + ')">'
                    + '<div style="display:flex;align-items:center;gap:12px;">'
                    + '<span style="font-weight:500;font-size:14px;">' + escapeHtml(name || u.email) + '</span>'
                    + (name ? '<span style="font-size:12px;color:rgba(252,240,214,0.35);">' + escapeHtml(u.email) + '</span>' : '')
                    + tierBadge + adminBadge
                    + '</div>'
                    + '<span style="font-size:12px;color:rgba(252,240,214,0.35);">' + (u.last_login ? formatDate(new Date(u.last_login)) : 'Nie') + '</span>'
                    + '</div>';
            });

            list.innerHTML = html;
        } catch(e) {
            list.innerHTML = '<p style="color:#e74c3c;">Fehler: ' + escapeHtml(e.message || String(e)) + '</p>';
        }
    }

    function tierColor(tier) {
        switch(tier) {
            case 'mentoring': return 'rgba(188,128,52,0.8)';
            case 'community': return 'rgba(52,152,219,0.7)';
            case 'kurs': return 'rgba(39,174,96,0.7)';
            default: return 'rgba(149,165,166,0.5)';
        }
    }

    function cardStyle() {
        return 'background:rgba(45,39,38,0.55);border:1px solid rgba(188,128,52,0.15);border-radius:12px;transition:border-color 0.2s;';
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
        return '<div><span style="color:rgba(252,240,214,0.35);">' + label + ':</span> ' + escapeHtml(String(value)) + '</div>';
    }

    function formatDate(d) {
        return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
})();

// Win³ Academy - Profil Adapter
(function() {
    if (window.__P_PROFILE) return;

    var W3 = window.__W3;

    window.__P_PROFILE = {
        mount: function(container) {
            var user = W3.state.user;
            var tier = user.tier || 'free';
            var TIER_LABELS = { free: 'Free', kurs: 'Kurs-Teilnehmer', community: 'Community-Mitglied', mentoring: 'Mentoring-Kunde' };

            container.innerHTML = '<div style="max-width:600px;margin:0 auto;padding:40px 24px;">'
                + '<h1 style="font-size:24px;font-weight:600;margin-bottom:32px;">Dein Profil</h1>'
                // Info Card
                + '<div style="background:rgba(252,240,214,0.04);border:1px solid rgba(188,128,52,0.15);border-radius:16px;padding:28px;margin-bottom:20px;">'
                +   '<div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;">'
                +     '<div style="width:48px;height:48px;border-radius:50%;background:rgba(188,128,52,0.15);border:1px solid rgba(188,128,52,0.3);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:600;color:#BC8034;">'
                +       (user.nickname || user.email || '?').charAt(0).toUpperCase()
                +     '</div>'
                +     '<div>'
                +       '<div style="font-size:18px;font-weight:500;">' + escapeHtml(user.nickname || 'Kein Name') + '</div>'
                +       '<div style="font-size:13px;color:rgba(252,240,214,0.4);">' + escapeHtml(user.email) + '</div>'
                +     '</div>'
                +   '</div>'
                +   '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">'
                +     infoItem('Mitgliedschaft', TIER_LABELS[tier] || tier)
                +     infoItem('Mitglied seit', user.created_at ? formatDate(user.created_at) : '-')
                +   '</div>'
                + '</div>'
                // Dev Tier Switcher (Phase 0 - self-service)
                + '<div style="background:rgba(252,240,214,0.04);border:1px solid rgba(188,128,52,0.15);border-radius:16px;padding:28px;margin-bottom:20px;">'
                +   '<div style="font-size:11px;color:#BC8034;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:12px;">Mitgliedschaft ändern</div>'
                +   '<div style="display:flex;gap:8px;flex-wrap:wrap;" id="w3-dev-tier-btns"></div>'
                + '</div>'
                // Logout
                + '<button class="w3-btn" style="width:100%;justify-content:center;background:none;border:1px solid rgba(188,128,52,0.3);color:#BC8034;" onclick="window.__W3.logout()">'
                +   'Abmelden'
                + '</button>'
                + '</div>';
        },

        teardown: function() {},

        _initDevTier: function() {
            var wrap = document.getElementById('w3-dev-tier-btns');
            if (!wrap) return;
            var TIER_NAMES = { free: 'Free', kurs: 'Kurs', community: 'Community', mentoring: 'Mentoring' };
            var tiers = ['free', 'kurs', 'community', 'mentoring'];
            var current = (W3.state.user && W3.state.user.tier) || 'free';
            tiers.forEach(function(t) {
                var btn = document.createElement('button');
                btn.textContent = TIER_NAMES[t];
                btn.style.cssText = 'padding:8px 16px;border-radius:20px;font-family:Poppins,sans-serif;font-size:13px;cursor:pointer;transition:all 0.2s;border:1px solid rgba(188,128,52,0.3);'
                    + (t === current
                        ? 'background:#BC8034;color:#2D2726;font-weight:600;'
                        : 'background:none;color:rgba(252,240,214,0.5);');
                btn.onclick = async function() {
                    btn.disabled = true;
                    btn.textContent = '...';
                    try {
                        var data = await W3.api('/user/set-tier', {
                            method: 'PUT',
                            body: { tier: t }
                        });
                        W3.state.user.tier = t;
                        W3.saveSession();
                        location.reload();
                    } catch(e) {
                        btn.textContent = TIER_NAMES[t];
                        btn.disabled = false;
                        alert('Fehler: ' + (e.message || 'Unbekannt'));
                    }
                };
                wrap.appendChild(btn);
            });
        }
    };

    // Auto-init nach mount
    var _origMount = window.__P_PROFILE.mount;
    window.__P_PROFILE.mount = function(container) {
        _origMount(container);
        window.__P_PROFILE._initDevTier();
    };

    function infoItem(label, value) {
        return '<div>'
            + '<div style="font-size:11px;color:#BC8034;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">' + label + '</div>'
            + '<div style="font-size:15px;">' + escapeHtml(value) + '</div>'
            + '</div>';
    }

    function formatDate(iso) {
        try {
            var d = new Date(iso);
            return d.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
        } catch(e) {
            return iso;
        }
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
})();

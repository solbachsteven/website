// Win³ Academy - Auth Adapter
// Login / Register via Magic Link
(function() {
    if (window.__P_AUTH) return;

    var W3 = window.__W3;

    // PacificaCondensed Font
    if (!document.querySelector('style[data-font="pacifica"]')) {
        var fs = document.createElement('style');
        fs.setAttribute('data-font', 'pacifica');
        fs.textContent = '@font-face{font-family:"PacificaCondensed";src:url("https://db.onlinewebfonts.com/t/3ade034999153f8110b40724ad74f00e.woff2") format("woff2"),url("https://db.onlinewebfonts.com/t/3ade034999153f8110b40724ad74f00e.woff") format("woff");font-display:swap;}';
        document.head.appendChild(fs);
    }

    window.__P_AUTH = {
        mount: function(container) {
            container.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px;">'
                + '<div style="width:100%;max-width:400px;" id="w3-auth-view"></div>'
                + '</div>';

            var view = document.getElementById('w3-auth-view');
            renderLoginForm(view);
        },

        teardown: function() {}
    };

    function renderLoginForm(container) {
        container.innerHTML = ''
            + '<div style="text-align:center;margin-bottom:32px;display:flex;flex-direction:column;align-items:center;gap:4px;">'
            +   '<svg viewBox="0 0 120 120" width="120" height="120"><circle cx="60" cy="60" r="44" stroke="rgba(188,128,52,0.25)" stroke-width="1" fill="rgba(188,128,52,0.06)"/><g transform="translate(60,60)" stroke="#BC8034" stroke-width="1.5" fill="none"><circle cx="0" cy="-13" r="20"/><circle cx="10.5" cy="6" r="20"/><circle cx="-10.5" cy="6" r="20"/></g><circle cx="60" cy="60" r="4" fill="#F5F0EB"/></svg>'
            +   '<span style="font-family:PacificaCondensed,fantasy;font-size:26px;letter-spacing:2px;color:#F4F0EC;white-space:nowrap;">Win<span style="color:#BC8034;font-size:1.15em;margin-left:2px;">&#179;</span> Academy</span>'
            + '</div>'
            + '<div style="background:rgba(45,39,38,0.55);border:1px solid rgba(188,128,52,0.2);border-radius:16px;padding:32px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:0 4px 16px rgba(0,0,0,0.15),inset 0 1px 0 rgba(255,255,255,0.04);">'
            +   '<div id="w3-auth-msg"></div>'
            +   '<label style="display:block;font-size:13px;font-weight:500;color:#BC8034;margin-bottom:8px;font-family:Poppins,sans-serif;">Email</label>'
            +   '<input type="email" id="w3-auth-email" placeholder="deine@email.de" style="'
            +     'width:100%;background:rgba(252,240,214,0.08);border:1px solid rgba(188,128,52,0.2);'
            +     'border-radius:12px;padding:14px 18px;color:#FCF0D6;font-family:Poppins,sans-serif;'
            +     'font-size:15px;outline:none;margin-bottom:16px;box-sizing:border-box;'
            +   '">'
            +   '<div id="w3-auth-nickname-wrap" style="display:none;margin-bottom:16px;">'
            +     '<label style="display:block;font-size:13px;font-weight:500;color:#BC8034;margin-bottom:8px;font-family:Poppins,sans-serif;">Dein Name</label>'
            +     '<input type="text" id="w3-auth-nickname" placeholder="Wie sollen wir dich nennen?" style="'
            +       'width:100%;background:rgba(252,240,214,0.08);border:1px solid rgba(188,128,52,0.2);'
            +       'border-radius:12px;padding:14px 18px;color:#FCF0D6;font-family:Poppins,sans-serif;'
            +       'font-size:15px;outline:none;box-sizing:border-box;'
            +     '">'
            +   '</div>'
            +   '<button id="w3-auth-submit" class="w3-btn" style="width:100%;justify-content:center;" onclick="window.__P_AUTH_SUBMIT()">'
            +     'Magic Link senden'
            +   '</button>'
            +   '<p style="font-size:12px;color:rgba(252,240,214,0.3);text-align:center;margin-top:16px;line-height:1.5;font-family:Poppins,sans-serif;">'
            +     'Wir senden dir einen Link per Email. Kein Passwort n\u00f6tig.'
            +   '</p>'
            // Dev Login (nur lokal)
            + (location.hostname === 'localhost' || location.hostname === '127.0.0.1'
                ? '<div style="border-top:1px solid rgba(188,128,52,0.1);margin-top:20px;padding-top:16px;text-align:center;">'
                +   '<button style="background:none;border:1px solid rgba(188,128,52,0.2);color:rgba(252,240,214,0.4);'
                +     'padding:8px 20px;border-radius:20px;font-family:Poppins,sans-serif;font-size:12px;cursor:pointer;"'
                +     ' onclick="window.__P_AUTH_DEV()">Dev Login</button>'
                + '</div>'
                : '')
            + '</div>';

        // Focus email field
        setTimeout(function() {
            var emailEl = document.getElementById('w3-auth-email');
            if (emailEl) emailEl.focus();
        }, 100);

        // Enter key
        setTimeout(function() {
            var emailEl = document.getElementById('w3-auth-email');
            var nickEl = document.getElementById('w3-auth-nickname');
            if (emailEl) emailEl.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') window.__P_AUTH_SUBMIT();
            });
            if (nickEl) nickEl.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') window.__P_AUTH_SUBMIT();
            });
        }, 150);
    }

    function showMsg(text, isError) {
        var el = document.getElementById('w3-auth-msg');
        if (!el) return;
        el.innerHTML = '<div style="'
            + 'background:' + (isError ? 'rgba(220,53,69,0.15)' : 'rgba(40,167,69,0.15)') + ';'
            + 'border:1px solid ' + (isError ? 'rgba(220,53,69,0.3)' : 'rgba(40,167,69,0.3)') + ';'
            + 'color:' + (isError ? '#ff8a8a' : '#7ddf8a') + ';'
            + 'padding:12px 16px;border-radius:10px;font-size:14px;margin-bottom:16px;font-family:Poppins,sans-serif;'
            + '">' + text + '</div>';
    }

    function setLoading(loading) {
        var btn = document.getElementById('w3-auth-submit');
        if (!btn) return;
        btn.disabled = loading;
        btn.textContent = loading ? 'Wird gesendet...' : 'Magic Link senden';
    }

    // ======== MAGIC LINK ========
    window.__P_AUTH_SUBMIT = async function() {
        var email = (document.getElementById('w3-auth-email').value || '').trim();
        var nickname = (document.getElementById('w3-auth-nickname').value || '').trim();

        if (!email || email.indexOf('@') === -1) {
            showMsg('Bitte gib eine g\u00fcltige Email ein.', true);
            return;
        }

        setLoading(true);

        try {
            var body = { email: email };
            if (nickname) body.nickname = nickname;

            await W3.api('/auth/request', {
                method: 'POST',
                body: body
            });

            showMsg('Magic Link gesendet! Pr\u00fcfe dein Postfach.', false);
            setLoading(false);
        } catch(e) {
            if (e.status === 400 && e.message && e.message.indexOf('nickname') !== -1) {
                // Neuer User - Name wird ben\u00f6tigt
                document.getElementById('w3-auth-nickname-wrap').style.display = 'block';
                document.getElementById('w3-auth-nickname').focus();
                showMsg('Willkommen! Bitte gib noch deinen Namen ein.', false);
                setLoading(false);
            } else {
                showMsg(e.message || 'Fehler beim Senden.', true);
                setLoading(false);
            }
        }
    };

    // ======== DEV LOGIN ========
    window.__P_AUTH_DEV = async function() {
        var email = (document.getElementById('w3-auth-email').value || '').trim() || 'dev@test.de';

        try {
            var data = await W3.api('/auth/dev-login', {
                method: 'POST',
                body: { email: email, nickname: 'Developer' }
            });

            W3.state.token = data.session_token;
            W3.state.user = data.user;
            W3.saveSession();

            // Reload portal
            location.reload();
        } catch(e) {
            showMsg('Dev Login fehlgeschlagen: ' + (e.message || 'Unbekannter Fehler'), true);
        }
    };
})();

// Win³ Community - Ankerpraktik Auth View
// Magic Link Login/Register
(function() {
    if (window.__AP_AUTH_LOADED) return;
    window.__AP_AUTH_LOADED = true;

    // === CSS ===
    var style = document.createElement('style');
    style.setAttribute('data-section', 'ap-auth');
    style.textContent = `
.ap-auth-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 100px);
    padding: 20px 0;
}
.ap-auth-card {
    background: rgba(252, 240, 214, 0.05);
    border: 1px solid rgba(188, 128, 52, 0.2);
    border-radius: 24px;
    padding: 48px 40px;
    max-width: 440px;
    width: 100%;
    text-align: center;
}
.ap-auth-icon {
    font-size: 48px;
    margin-bottom: 16px;
}
.ap-auth-title {
    font-family: 'Caveat', cursive;
    font-size: 32px;
    color: #BC8034;
    margin-bottom: 8px;
}
.ap-auth-subtitle {
    font-size: 15px;
    color: rgba(252, 240, 214, 0.6);
    margin-bottom: 32px;
    line-height: 1.6;
}
.ap-auth-form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    text-align: left;
}
.ap-auth-footer {
    margin-top: 24px;
    font-size: 12px;
    color: rgba(252, 240, 214, 0.35);
    line-height: 1.5;
}
.ap-auth-sent {
    text-align: center;
}
.ap-auth-sent-icon {
    font-size: 56px;
    margin-bottom: 16px;
}
.ap-auth-sent-email {
    font-weight: 600;
    color: #BC8034;
}
.ap-auth-resend {
    background: none;
    border: none;
    color: #BC8034;
    font-size: 13px;
    cursor: pointer;
    text-decoration: underline;
    padding: 4px;
    font-family: 'Poppins', sans-serif;
    margin-top: 16px;
}
.ap-auth-resend:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    text-decoration: none;
}

@media (max-width: 500px) {
    .ap-auth-card { padding: 36px 24px; }
    .ap-auth-title { font-size: 28px; }
}
`;
    document.head.appendChild(style);

    // === STATE ===
    var authState = {
        step: 'form', // 'form' | 'sent'
        email: '',
        nickname: '',
        loading: false,
        error: null,
        isNewUser: false,
        resendCooldown: 0
    };

    // === RENDER ===
    window.__AP_AUTH_RENDER = function(container) {
        authState.step = 'form';
        authState.error = null;
        authState.loading = false;
        render(container);
    };

    function render(container) {
        if (authState.step === 'sent') {
            renderSent(container);
            return;
        }

        var errorHtml = authState.error
            ? '<div class="ap-error">' + authState.error + '</div>'
            : '';

        var nicknameField = authState.isNewUser
            ? '<div>'
                + '<label class="ap-label">Dein Name (wird angezeigt)</label>'
                + '<input class="ap-input" type="text" id="ap-auth-nickname" placeholder="Wie sollen wir dich nennen?" value="' + escapeHtml(authState.nickname) + '">'
                + '</div>'
            : '';

        container.innerHTML = '<div class="ap-auth-wrap ap-fade-in">'
            + '<div class="ap-auth-card">'
            + '<div class="ap-auth-icon">✍️</div>'
            + '<h2 class="ap-auth-title">Ankerpraktik</h2>'
            + '<p class="ap-auth-subtitle">Dein persönliches Journal mit KI-Spiegel und KI-Coach.<br>Kein Passwort nötig - wir senden dir einen Magic Link.</p>'
            + errorHtml
            + '<form class="ap-auth-form" id="ap-auth-form">'
            + '<div>'
            + '<label class="ap-label">Email</label>'
            + '<input class="ap-input" type="email" id="ap-auth-email" placeholder="deine@email.de" value="' + escapeHtml(authState.email) + '" required>'
            + '</div>'
            + nicknameField
            + '<button class="ap-btn" type="submit" style="width:100%;justify-content:center;margin-top:8px;" ' + (authState.loading ? 'disabled' : '') + '>'
            + (authState.loading ? '<span class="ap-spinner"></span> Wird gesendet...' : '📧 Magic Link senden')
            + '</button>'
            + '</form>'
            + (authState.isNewUser ? '' : '<p style="margin-top:16px;font-size:13px;color:rgba(252,240,214,0.4);">Noch kein Konto? <button style="background:none;border:none;color:#BC8034;cursor:pointer;font-size:13px;font-family:Poppins,sans-serif;text-decoration:underline;" onclick="window.__AP_AUTH_TOGGLE_NEW()">Registrieren</button></p>')
            + (authState.isNewUser ? '<p style="margin-top:16px;font-size:13px;color:rgba(252,240,214,0.4);">Schon registriert? <button style="background:none;border:none;color:#BC8034;cursor:pointer;font-size:13px;font-family:Poppins,sans-serif;text-decoration:underline;" onclick="window.__AP_AUTH_TOGGLE_NEW()">Anmelden</button></p>' : '')
            + '<p class="ap-auth-footer">Deine Daten gehören dir. Du kannst sie jederzeit exportieren oder löschen.</p>'
            + '</div></div>';

        document.getElementById('ap-auth-form').addEventListener('submit', function(e) {
            e.preventDefault();
            handleSubmit(container);
        });
    }

    function renderSent(container) {
        var resendText = authState.resendCooldown > 0
            ? 'Erneut senden (' + authState.resendCooldown + 's)'
            : 'Erneut senden';

        container.innerHTML = '<div class="ap-auth-wrap ap-fade-in">'
            + '<div class="ap-auth-card ap-auth-sent">'
            + '<div class="ap-auth-sent-icon">📬</div>'
            + '<h2 class="ap-auth-title">Check deine Mails!</h2>'
            + '<p style="font-size:15px;color:rgba(252,240,214,0.7);margin-bottom:8px;line-height:1.6;">'
            + 'Wir haben einen Magic Link an<br><span class="ap-auth-sent-email">' + escapeHtml(authState.email) + '</span><br>gesendet.'
            + '</p>'
            + '<p style="font-size:13px;color:rgba(252,240,214,0.4);margin-bottom:24px;">Klicke auf den Link in der Mail, um dich einzuloggen. Er ist 15 Minuten gültig.</p>'
            + '<button class="ap-auth-resend" onclick="window.__AP_AUTH_RESEND()" ' + (authState.resendCooldown > 0 ? 'disabled' : '') + '>' + resendText + '</button>'
            + '<div style="margin-top:24px;">'
            + '<button class="ap-btn ap-btn-ghost" onclick="window.__AP_AUTH_BACK()" style="font-size:13px;">← Andere Email verwenden</button>'
            + '</div></div></div>';
    }

    // === HANDLERS ===
    async function handleSubmit(container) {
        var emailEl = document.getElementById('ap-auth-email');
        var nicknameEl = document.getElementById('ap-auth-nickname');
        authState.email = emailEl ? emailEl.value.trim() : '';
        authState.nickname = nicknameEl ? nicknameEl.value.trim() : '';

        if (!authState.email) {
            authState.error = 'Bitte gib deine Email ein.';
            render(container);
            return;
        }

        if (authState.isNewUser && !authState.nickname) {
            authState.error = 'Bitte gib einen Namen ein.';
            render(container);
            return;
        }

        authState.loading = true;
        authState.error = null;
        render(container);

        try {
            var body = { email: authState.email };
            if (authState.nickname) body.nickname = authState.nickname;

            await window.__AP.api('/auth/request', {
                method: 'POST',
                body: body
            });

            authState.step = 'sent';
            authState.loading = false;
            startResendCooldown(container);
            render(container);
        } catch(e) {
            authState.loading = false;
            authState.error = e.message || 'Etwas ist schiefgelaufen. Bitte versuche es erneut.';
            render(container);
        }
    }

    function startResendCooldown(container) {
        authState.resendCooldown = 60;
        var interval = setInterval(function() {
            authState.resendCooldown--;
            if (authState.resendCooldown <= 0) {
                clearInterval(interval);
            }
            if (authState.step === 'sent') {
                render(container);
            }
        }, 1000);
    }

    window.__AP_AUTH_TOGGLE_NEW = function() {
        var container = document.getElementById('ap-view');
        authState.isNewUser = !authState.isNewUser;
        authState.error = null;
        render(container);
    };

    window.__AP_AUTH_RESEND = function() {
        if (authState.resendCooldown > 0) return;
        var container = document.getElementById('ap-view');
        authState.step = 'form';
        handleSubmit(container);
    };

    window.__AP_AUTH_BACK = function() {
        var container = document.getElementById('ap-view');
        authState.step = 'form';
        authState.error = null;
        render(container);
    };

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
})();

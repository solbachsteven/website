// Win³ Academy - Dashboard Adapter
(function() {
    if (window.__P_DASHBOARD) return;

    var W3 = window.__W3;

    window.__P_DASHBOARD = {
        mount: function(container) {
            var user = W3.state.user;
            var tier = user.tier || 'free';
            var name = user.nickname || user.email;

            container.innerHTML = '<div style="max-width:800px;margin:0 auto;padding:40px 24px;">'
                // Greeting
                + '<div style="margin-bottom:40px;">'
                +   '<h1 style="font-size:28px;font-weight:600;margin-bottom:8px;">Hallo, ' + escapeHtml(name) + '</h1>'
                +   '<p style="font-size:15px;color:rgba(252,240,214,0.5);line-height:1.6;">'
                +     'Willkommen in deiner Win\u00b3 Academy.'
                +   '</p>'
                + '</div>'
                // Quick Actions
                + '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;">'
                +   quickCard('Freebie Kurs', 'Erkenne deine Lebensaufgabe', '#/freebie', true)
                +   quickCard('Win\u00b3 Kurs', '13 Lektionen zur Transformation', '#/kurs', tier !== 'free')
                +   quickCard('Ankerpraktik', 'Dein KI-gest\u00fctztes Journal', '#/ankerpraktik', tier === 'community' || tier === 'mentoring')
                +   quickCard('Coaching', '1:1 Sessions mit Steven', '#/coaching', tier === 'mentoring')
                + '</div>'
                + '</div>';
        },

        teardown: function() {}
    };

    function quickCard(title, desc, hash, unlocked) {
        var opacity = unlocked ? '1' : '0.35';
        var cursor = unlocked ? 'pointer' : 'default';
        var onclick = unlocked ? 'window.__W3.navigate(\'' + hash + '\')' : '';

        return '<div style="'
            + 'background:rgba(252,240,214,0.04);border:1px solid rgba(188,128,52,0.15);'
            + 'border-radius:16px;padding:24px;cursor:' + cursor + ';transition:all 0.2s;opacity:' + opacity + ';'
            + '" ' + (onclick ? 'onclick="' + onclick + '"' : '')
            + (unlocked ? ' onmouseover="this.style.borderColor=\'rgba(188,128,52,0.4)\'"'
                + ' onmouseout="this.style.borderColor=\'rgba(188,128,52,0.15)\'"' : '')
            + '>'
            + '<h3 style="font-size:16px;font-weight:600;margin-bottom:8px;color:' + (unlocked ? '#FCF0D6' : 'inherit') + ';">' + title + '</h3>'
            + '<p style="font-size:13px;color:rgba(252,240,214,0.5);line-height:1.5;">' + desc + '</p>'
            + (unlocked ? '' : '<p style="font-size:11px;color:#BC8034;margin-top:12px;text-transform:uppercase;letter-spacing:0.05em;">Gesperrt</p>')
            + '</div>';
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
})();

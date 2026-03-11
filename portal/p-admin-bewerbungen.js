// Win³ Academy - Admin Bewerbungen Adapter
// Bewerbungs-Pipeline: Liste, Detail, Status-Workflow
(function() {
    if (window.__P_ADMIN_BEWERBUNGEN) return;

    var W3 = window.__W3;
    var bewerbungen = [];
    var filter = 'all';
    var container = null;

    window.__P_ADMIN_BEWERBUNGEN = {
        mount: async function(el) {
            container = el;
            container.innerHTML = '<div class="adm-bew" style="max-width:960px;margin:0 auto;padding:32px 24px;">'
                + '<h1 style="font-size:22px;font-weight:600;margin-bottom:24px;">Bewerbungen</h1>'
                + '<div id="adm-bew-filters" style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;"></div>'
                + '<div id="adm-bew-list" style="color:rgba(252,240,214,0.4);">Lade...</div>'
                + '</div>';

            await loadBewerbungen();
        },

        teardown: function() { container = null; },

        setFilter: function(f) {
            filter = f;
            renderList();
        },

        showDetail: function(idx) {
            var b = bewerbungen[idx];
            if (!b) return;
            var list = document.getElementById('adm-bew-list');
            if (!list) return;

            var html = '<div style="' + cardStyle() + 'padding:24px;">'
                + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">'
                + '<h3 style="font-size:18px;font-weight:600;">' + escapeHtml(b.name) + '</h3>'
                + statusBadge(b.status)
                + '</div>'
                + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px 24px;font-size:13px;color:rgba(252,240,214,0.6);margin-bottom:20px;">'
                + infoRow('Email', b.email)
                + infoRow('Datum', formatDate(new Date(b.created_at)))
                + infoRow('Qualifiziert', b.qualified ? 'Ja' : 'Nein')
                + infoRow('Investment', investmentLabel(b.investment, b.investment_other))
                + infoRow('Timing', timingLabel(b.timing, b.timing_other))
                + '</div>';

            // Situation
            html += section('Situation', b.situation === 'other' ? b.situation_other : situationLabel(b.situation));

            // Herausforderung
            html += section('Herausforderung', b.challenge);

            // Ziel
            html += section('Ziel', b.goal === 'other' ? b.goal_other : goalLabel(b.goal));

            // Commitment
            html += '<div style="margin-bottom:16px;">'
                + '<h4 style="font-size:14px;font-weight:600;margin-bottom:8px;">Commitment</h4>'
                + '<div style="font-size:13px;color:rgba(252,240,214,0.6);line-height:1.7;">'
                + commitItem('Ehrlichkeit', b.commit_honest)
                + commitItem('Feedback', b.commit_feedback)
                + commitItem('Verantwortung', b.commit_responsibility)
                + '</div></div>';

            // Status workflow
            html += '<div style="margin-bottom:20px;">'
                + '<h4 style="font-size:14px;font-weight:600;margin-bottom:8px;">Status ändern</h4>'
                + '<div style="display:flex;gap:8px;flex-wrap:wrap;">';
            ['new','contacted','scheduled','completed','rejected'].forEach(function(st) {
                var active = b.status === st;
                html += '<button style="font-size:12px;padding:6px 14px;border-radius:20px;border:1px solid ' + (active ? '#BC8034' : 'rgba(188,128,52,0.2)') + ';background:' + (active ? 'rgba(188,128,52,0.2)' : 'transparent') + ';color:' + (active ? '#BC8034' : 'rgba(252,240,214,0.5)') + ';cursor:pointer;font-family:Poppins,sans-serif;" onclick="window.__P_ADMIN_BEWERBUNGEN.changeStatus(' + b.id + ',\'' + st + '\',' + idx + ')">' + st + '</button>';
            });
            html += '</div></div>';

            html += '<button class="w3-btn" style="font-size:13px;padding:8px 20px;background:transparent;color:#BC8034;border:1px solid rgba(188,128,52,0.3);" onclick="window.__P_ADMIN_BEWERBUNGEN.backToList()">Zurück</button>'
                + '</div>';

            list.innerHTML = html;
        },

        backToList: function() { renderList(); },

        changeStatus: async function(id, newStatus, idx) {
            try {
                await W3.api('/admin/bewerbungen/' + id, { method: 'PUT', body: { status: newStatus } });
                bewerbungen[idx].status = newStatus;
                window.__P_ADMIN_BEWERBUNGEN.showDetail(idx);
            } catch(e) {
                console.error('Status-Änderung fehlgeschlagen:', e);
            }
        }
    };

    async function loadBewerbungen() {
        try {
            var data = await W3.api('/admin/bewerbungen');
            bewerbungen = data.bewerbungen || data || [];
            renderFilters();
            renderList();
        } catch(e) {
            var list = document.getElementById('adm-bew-list');
            if (list) list.innerHTML = '<p style="color:#e74c3c;">Fehler: ' + escapeHtml(e.message || String(e)) + '</p>';
        }
    }

    function renderFilters() {
        var filtersEl = document.getElementById('adm-bew-filters');
        if (!filtersEl) return;

        var counts = { all: bewerbungen.length };
        bewerbungen.forEach(function(b) { counts[b.status] = (counts[b.status] || 0) + 1; });

        var html = '';
        ['all','new','contacted','scheduled','completed','rejected'].forEach(function(f) {
            var active = filter === f;
            var label = f === 'all' ? 'Alle' : f;
            var count = counts[f] || 0;
            html += '<button style="font-size:12px;padding:5px 12px;border-radius:16px;border:1px solid ' + (active ? '#BC8034' : 'rgba(188,128,52,0.15)') + ';background:' + (active ? 'rgba(188,128,52,0.15)' : 'transparent') + ';color:' + (active ? '#BC8034' : 'rgba(252,240,214,0.5)') + ';cursor:pointer;font-family:Poppins,sans-serif;" onclick="window.__P_ADMIN_BEWERBUNGEN.setFilter(\'' + f + '\')">' + label + ' (' + count + ')</button>';
        });

        filtersEl.innerHTML = html;
    }

    function renderList() {
        var list = document.getElementById('adm-bew-list');
        if (!list) return;

        var filtered = filter === 'all' ? bewerbungen : bewerbungen.filter(function(b) { return b.status === filter; });

        if (filtered.length === 0) {
            list.innerHTML = '<p style="color:rgba(252,240,214,0.4);font-size:14px;">Keine Bewerbungen' + (filter !== 'all' ? ' mit Status "' + filter + '"' : '') + '</p>';
            return;
        }

        var html = '';
        filtered.forEach(function(b) {
            var origIdx = bewerbungen.indexOf(b);
            html += '<div style="' + cardStyle() + 'padding:14px 20px;margin-bottom:6px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;" onclick="window.__P_ADMIN_BEWERBUNGEN.showDetail(' + origIdx + ')">'
                + '<div style="display:flex;align-items:center;gap:12px;">'
                + '<span style="font-weight:500;font-size:14px;">' + escapeHtml(b.name) + '</span>'
                + '<span style="font-size:12px;color:rgba(252,240,214,0.35);">' + escapeHtml(b.email) + '</span>'
                + statusBadge(b.status)
                + (b.qualified ? '<span style="font-size:10px;color:#27ae60;">qualifiziert</span>' : '')
                + '</div>'
                + '<span style="font-size:12px;color:rgba(252,240,214,0.35);">' + formatDate(new Date(b.created_at)) + '</span>'
                + '</div>';
        });

        list.innerHTML = html;
        renderFilters();
    }

    function statusBadge(status) {
        var colors = { new: '#BC8034', contacted: '#3498db', scheduled: '#2ecc71', completed: '#27ae60', rejected: '#95a5a6' };
        var c = colors[status] || '#BC8034';
        return '<span style="font-size:11px;padding:2px 8px;border-radius:12px;background:' + c + ';color:#1a1a1a;font-weight:600;">' + escapeHtml(status) + '</span>';
    }

    function section(title, text) {
        if (!text) return '';
        return '<div style="margin-bottom:16px;">'
            + '<h4 style="font-size:14px;font-weight:600;margin-bottom:6px;">' + title + '</h4>'
            + '<p style="font-size:13px;color:rgba(252,240,214,0.6);line-height:1.7;">' + escapeHtml(text) + '</p>'
            + '</div>';
    }

    function commitItem(label, val) {
        var icon = val ? '<span style="color:#27ae60;">&#10003;</span>' : '<span style="color:#e74c3c;">&#10007;</span>';
        return icon + ' ' + label + '<br>';
    }

    function situationLabel(v) {
        var map = { '1': 'Angestellt, will Veränderung', '2': 'Selbstständig, will wachsen', '3': 'In Transition', '4': 'Orientierungsphase' };
        return map[v] || v;
    }

    function goalLabel(v) {
        var map = { '1': 'Klarheit über Richtung', '2': 'Authentischer leben/arbeiten', '3': 'Business aufbauen/skalieren', '4': 'Work-Life-Balance' };
        return map[v] || v;
    }

    function investmentLabel(v, other) {
        if (v === 'other') return other || v;
        var map = { '1': 'Bereit zu investieren', '2': 'Offen, brauche Details', '3': 'Eher nicht', '4': 'Muss nachdenken' };
        return map[v] || v;
    }

    function timingLabel(v, other) {
        if (v === 'other') return other || v;
        var map = { '1': 'Sofort', '2': 'In 1-2 Wochen', '3': 'In 1-2 Monaten', '4': 'Unbestimmt' };
        return map[v] || v;
    }

    function cardStyle() {
        return 'background:rgba(45,39,38,0.55);border:1px solid rgba(188,128,52,0.15);border-radius:12px;transition:border-color 0.2s;';
    }

    function infoRow(label, value) {
        return '<div><span style="color:rgba(252,240,214,0.35);">' + label + ':</span> ' + escapeHtml(value) + '</div>';
    }

    function formatDate(d) {
        return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
})();

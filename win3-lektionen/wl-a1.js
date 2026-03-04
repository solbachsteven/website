// Win³ Kurs - Alignment 1: Dein Leben auf dem Prüfstand
// Einzeiler: <script src="https://solbachsteven.github.io/website/win3-lektionen/wl-a1.js"></script>
(function() {
    if (window.__WL_A1) return;
    window.__WL_A1 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "ALIGNMENT 1",
            title: "Dein Leben auf dem Pr\u00fcfstand",
            subtitle: "Alignment"
        },
        sections: [
            // --- Intro ---
            { type: "text", content: "Du hast ein neues Betriebssystem." },
            { type: "text", content: "Neun Lektionen. Du hast erkannt, wer du jenseits deiner Rollen bist. Du warst in deiner inneren Welt unterwegs. Kennengelernt hast du dort Teile, die dein Leben lenken. Du hast Werkzeuge bekommen: dich ausdr\u00fccken, Blockaden f\u00fchlen, loslassen. Coach wurdest du deswegen selbst. Dein Platz. Dein Verh\u00e4ltnis zu Geld. Und dass du dich zeigst." },
            { type: "emphasis", content: "Das ist kein kleines Ding. Das ist ein komplettes Software-Update." },
            { type: "text", content: "Aber: L\u00e4uft die neue Software auf der richtigen Hardware?" },

            { type: "divider" },

            // --- Die Frage hinter der Frage ---
            { type: "heading", level: 2, content: "Die Frage hinter der Frage" },
            { type: "text", content: "Du verstehst dich besser. Du hast Werkzeuge. Du wei\u00dft, wer du bist. Aber: Was ist mit der Au\u00dfenwelt?" },
            { type: "text", content: "Lebst du an einem Ort, der zu dir passt? Umgibst du dich mit Menschen, die dich n\u00e4hren? Tust du t\u00e4glich Dinge, die zu dir passen? Oder hast du ein neues Bewusstsein - und ein altes Leben?" },
            { type: "text", content: "Das ist normal. Ver\u00e4nderung: innen zuerst, dann au\u00dfen. Erst erkannt, dann gelebt. Deshalb gibt es diese drei letzten Lektionen. W0 bis W9 war das Software-Update. A1 bis A3 ist das Hardware-Update." },
            { type: "emphasis", content: "Also: zuerst den Ist-Zustand pr\u00fcfen." },

            { type: "divider" },

            // --- Sechs Ebenen ---
            { type: "heading", level: 2, content: "Sechs Ebenen, eine Pyramide" },
            { type: "text", content: "Ein Modell von <strong>Gregory Bateson</strong> und <strong>Robert Dilts</strong>. Ein Diagnose-Werkzeug. Es beschreibt sechs Ebenen, die aufeinander aufbauen wie Stockwerke eines Geb\u00e4udes." },
            { type: "text", content: "Von unten nach oben:" },

            { type: "levels", items: [
                { number: 1, title: "Umgebung", description: "Wo bist du? Mit wem? Wann? Deine Wohnung, dein Arbeitsplatz, die Menschen um dich herum.", color: "#5CB8FF" },
                { number: 2, title: "Verhalten", description: "Was tust du t\u00e4glich? Deine Gewohnheiten, Routinen, Handlungen. Nicht was du gerne tun w\u00fcrdest - was du tats\u00e4chlich tust.", color: "#4ECB71" },
                { number: 3, title: "F\u00e4higkeiten", description: "Was kannst du? Welche F\u00e4higkeiten hast du entwickelt? Welche fehlen? Selbstcoaching, Letting-Go, Ankerpraktik, Kalibrieren.", color: "#FFC947" },
                { number: 4, title: "\u00dcberzeugungen", description: "Was glaubst du? Was sind deine Werte? Manche bewusst gew\u00e4hlt. Manche sitzen so tief, dass du sie f\u00fcr Realit\u00e4t h\u00e4ltst.", color: "#FF8E53" },
                { number: 5, title: "Identit\u00e4t", description: "Wer bist du? Dein Selbstbild. Dein Weltbild. Spiegelt dein \u00e4u\u00dferes Leben dieses innere Wissen wider?", color: "#D946EF" },
                { number: 6, title: "Zugeh\u00f6rigkeit", description: "Wem oder was dienst du? Wovon bist du Teil? Hast du ein Ziel, das gr\u00f6\u00dfer ist als du selbst?", color: "#BC8034" }
            ]},

            { type: "text", content: "Sechs Ebenen. Von der sichtbarsten zur tiefsten. Von der leichtesten zu ver\u00e4ndern bis zur m\u00e4chtigsten." },

            { type: "divider" },

            // --- Zwei Richtungen ---
            { type: "heading", level: 2, content: "Zwei Richtungen" },
            { type: "text", content: "Das Modell funktioniert in zwei Richtungen. Und beide machen v\u00f6llig unterschiedliche Dinge." },
            { type: "heading", level: 3, content: "Von unten nach oben: So wird die Welt erfahren" },
            { type: "text", content: "Du nimmst deine Umgebung wahr. Du beobachtest dein Verhalten. Du merkst, was du kannst und nicht. Du formst \u00dcberzeugungen. Ein Selbstbild. Und wenn du tief genug gehst: Wof\u00fcr?" },
            { type: "text", content: "Genau so hat dieser Kurs funktioniert. W1 bis W3: Wer bin ich? W4 bis W6: Was h\u00e4lt mich fest? W7 bis W9: Was bringe ich in die Welt? Ein Aufstieg von unten nach oben. Von der Erfahrung zur Erkenntnis." },
            { type: "heading", level: 3, content: "Von oben nach unten: So wird aufger\u00e4umt" },
            { type: "text", content: "Wenn du wei\u00dft, wof\u00fcr du lebst, wird klar, wer du bist. Wenn klar ist, wer du bist, sortieren sich deine \u00dcberzeugungen. Wenn deine \u00dcberzeugungen sortiert sind, wei\u00dft du, welche F\u00e4higkeiten du brauchst. Wenn du die F\u00e4higkeiten hast, \u00e4ndert sich dein Verhalten. Wenn sich dein Verhalten \u00e4ndert, ver\u00e4ndert sich deine Umgebung." },
            { type: "emphasis", content: "Klarheit flie\u00dft nach unten. Jede h\u00f6here Ebene ordnet die darunter." },
            { type: "text", content: "Das Software-Update (W0-W9) war der Aufstieg. Das Hardware-Update (A1-A3) ist der Abstieg. Nicht negativ. Wie Regen, der den Boden erreicht. Wie Klarheit, die Realit\u00e4t wird." },

            { type: "divider" },

            // --- Alignment-Check ---
            { type: "heading", level: 2, content: "Der Alignment-Check" },
            { type: "text", content: "Geh jede Ebene durch. Nicht schnell. Nimm dir Zeit. Stell dir bei jeder Ebene zwei Fragen: Wo stehe ich? Wo will ich hin?" },
            { type: "text", content: "<strong>Zugeh\u00f6rigkeit.</strong> Habe ich ein h\u00f6chstes Ziel? Wei\u00df ich, wof\u00fcr ich lebe? Oder lebe ich von Tag zu Tag, ohne Richtung?" },
            { type: "text", content: "<strong>Identit\u00e4t.</strong> Stimmt mein Selbstbild mit dem \u00fcberein, was ich in W1 erkannt habe? Lebe ich als der, der ich bin - oder spiele ich noch Rollen, die l\u00e4ngst nicht mehr passen?" },
            { type: "text", content: "<strong>\u00dcberzeugungen.</strong> Welche \u00dcberzeugungen unterst\u00fctzen mein wahres Selbst? Welche stehen im Weg? Was habe ich bewusst behalten, obwohl es nicht mehr dient - weil es sich vertraut anf\u00fchlt?" },
            { type: "text", content: "<strong>F\u00e4higkeiten.</strong> Was kann ich jetzt, was ich vor neun Wochen nicht konnte? Selbstcoaching, Letting-Go, Kalibrieren, die Ankerpraktik. Aber was fehlt noch?" },
            { type: "text", content: "<strong>Verhalten.</strong> Spiegelt mein Alltag mein wahres Selbst wider? Wo tue ich t\u00e4glich Dinge, die nicht zu mir passen? Wo lebe ich noch alte Muster - aus Gewohnheit, aus Angst, aus Bequemlichkeit?" },
            { type: "text", content: "<strong>Umgebung.</strong> Ist wo ich lebe im Einklang? Sind die Menschen um mich herum Menschen, die mich n\u00e4hren - oder die mich in alten Mustern halten?" },
            { type: "highlight", title: "Dein Hebel", content: "Sechs Ebenen. Ist-Zustand und Soll-Zustand. Die L\u00fccke dazwischen ist dein Misalignment. Die gr\u00f6\u00dfte L\u00fccke ist dein gr\u00f6\u00dfter Hebel." },

            { type: "divider" },

            // --- Warum die größte Lücke? ---
            { type: "heading", level: 2, content: "Warum die gr\u00f6\u00dfte L\u00fccke?" },
            { type: "text", content: "Ver\u00e4nderung auf einer h\u00f6heren Ebene beeinflusst alles darunter. Wenn du dein h\u00f6chstes Ziel findest (Ebene 6), ordnet sich dein Selbstbild (Ebene 5). Wenn sich dein Selbstbild ordnet, sortieren sich deine \u00dcberzeugungen (Ebene 4). Und so weiter, bis zur Umgebung." },
            { type: "text", content: "Das hei\u00dft nicht, dass du nur oben anfangen kannst. Manchmal ist die gr\u00f6\u00dfte L\u00fccke unten. Manchmal lebst du in einer Umgebung, die so toxisch ist, dass du dich nicht konzentrieren kannst. Dann fang dort an. Aber wisse: Je h\u00f6her die Ebene, desto gr\u00f6\u00dfer die Wirkung." },
            { type: "text", content: "Ein Beispiel. Du willst dein Verhalten \u00e4ndern - sagen wir, du willst morgens fr\u00fcher aufstehen. Du kannst dir einen Wecker stellen (Umgebung). Du kannst eine Routine etablieren (Verhalten). Beides hilft. Aber wenn du nicht wei\u00dft, wof\u00fcr du fr\u00fch aufstehen willst, wenn du dich nicht als jemand siehst, der das verdient, wenn du glaubst, dass du sowieso nicht diszipliniert genug bist - dann wird der Wecker irgendwann leiser gestellt." },
            { type: "emphasis", content: "Ver\u00e4nderung, die bei den oberen Ebenen ansetzt, ist nachhaltiger. Nicht leichter. Nachhaltiger." },

            { type: "divider" },

            // --- Einladung: Alignment-Map ---
            { type: "heading", level: 2, content: "Einladung: Deine Alignment-Map" },
            { type: "text", content: "Nimm dir 45 bis 60 Minuten. Du brauchst ein gro\u00dfes Blatt Papier oder dein Journal." },
            { type: "text", content: "Zeichne sechs Zeilen. Jede Zeile steht f\u00fcr eine Ebene. Von oben nach unten: Zugeh\u00f6rigkeit, Identit\u00e4t, \u00dcberzeugungen, F\u00e4higkeiten, Verhalten, Umgebung." },
            { type: "text", content: "Auf der linken Seite jeder Zeile schreibst du den Ist-Zustand. Wo stehst du heute? Sei ehrlich. Nicht wo du gerne stehen w\u00fcrdest. Wo du tats\u00e4chlich stehst." },
            { type: "text", content: "Auf der rechten Seite schreibst du den Soll-Zustand. Wo willst du hin? Was w\u00e4re Alignment auf dieser Ebene?" },
            { type: "text", content: "Wenn du fertig bist, schau auf die sechs Zeilen. Wo ist die gr\u00f6\u00dfte L\u00fccke zwischen links und rechts? Das ist dein Startpunkt." },
            { type: "text", content: "Markiere sie. Kreise sie ein. Unterstreiche sie. Was auch immer sich richtig anf\u00fchlt. Diese L\u00fccke ist dein Hebel." },
            { type: "callout", content: "Keine Handlung n\u00f6tig. Noch nicht. Nur erkennen. Nur sehen, was ist. Die Ankerpraktik hat dich darin trainiert. Du wei\u00dft, wie man hinschaut, ohne zu urteilen." },

            { type: "divider" },

            // --- Was du jetzt hast ---
            { type: "heading", level: 2, content: "Was du jetzt hast" },
            { type: "text", content: "Du siehst dein ganzes Leben auf einen Blick. Alle sechs Ebenen. Nicht als Urteil. Als Landkarte." },
            { type: "text", content: "Manche Ebenen werden gut aussehen. Du siehst Bereiche, in denen du bereits im Einklang lebst. Vielleicht mehr als du dachtest. Manche Ebenen werden wehtun. Du siehst L\u00fccken, die nicht leicht anzusehen sind. Das ist Information." },
            { type: "text", content: "Du hast Werkzeuge. Neun Wochen lang gesammelt - f\u00fcr genau diesen Moment. Nicht zur Reparatur. Zum Abgleich zwischen Leben und Selbst." },

            { type: "divider" },

            // --- Was kommt ---
            { type: "heading", level: 2, content: "Was kommt" },
            { type: "text", content: "In der n\u00e4chsten Lektion: die oberen drei Ebenen. Zugeh\u00f6rigkeit, Identit\u00e4t, \u00dcberzeugungen. Das sind deine Hebel. Die, die Klarheit nach unten bringen." },
            { type: "text", content: "Dort wird es um die schwerste und wichtigste Frage gehen: Wof\u00fcr lebst du? Nicht was du tust. Wof\u00fcr du es tust. Was ist dein h\u00f6chstes Ziel?" },
            { type: "text", content: "Und in der letzten Lektion fassen wir dein Leben an. Die unteren drei Ebenen. F\u00e4higkeiten, Verhalten, Umgebung. Dort wird innere Klarheit zu \u00e4u\u00dferer Ver\u00e4nderung. Konkret. Diese Woche, diesen Monat, dieses Jahr." },
            { type: "emphasis", content: "Software-Update abgeschlossen. Hardware-Update beginnt jetzt." },

            { type: "divider" },

            // --- Progress + Checklist + Signoff ---
            { type: "progress-bar", label: "Alignment 1 von 3", percent: 33, detail: "Alignment" },

            { type: "checklist", items: [
                "Lektion vollst\u00e4ndig gelesen",
                "Alignment-Map erstellt",
                "Gr\u00f6\u00dfte L\u00fccke identifiziert"
            ]},

            { type: "signoff", text: "Dein Leben auf einen Blick. Sechs Ebenen. Ist und Soll.\\n\\nN\u00e4chste Lektion: Inneres Alignment - die Frage, die alles ordnet.", name: "Steven" }
        ]
    };

    if (window.__WL_KURS) { window.__WL_KURS.register('a1', LESSON_DATA); return; }
    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://solbachsteven.github.io/website/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

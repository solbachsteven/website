// Win³ Kurs - Alignment 2: Inneres Alignment
// Einzeiler: <script src="https://solbachsteven.github.io/website/win3-lektionen/wl-a2.js"></script>
(function() {
    if (window.__WL_A2) return;
    window.__WL_A2 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "ALIGNMENT 2",
            title: "Inneres Alignment",
            subtitle: "Alignment"
        },
        sections: [
            // --- Intro ---
            { type: "emphasis", content: "Gibt es etwas, wof\u00fcr du dein Leben geben w\u00fcrdest?" },
            { type: "text", content: "Nicht als Floskel. Nicht als rhetorische Frage in einem Selbsthilfebuch, \u00fcber die man kurz nachdenkt und dann weiterbl\u00e4ttert. Als echte Frage. An dich. Jetzt." },
            { type: "text", content: "Gibt es eine Sache, eine Idee, einen Menschen, ein Ziel - etwas, das so gro\u00df, so wahr, so unverhandelbar ist, dass du daf\u00fcr alles riskieren w\u00fcrdest?" },
            { type: "text", content: "Nimm dir einen Moment. Nicht f\u00fcr die schnelle Antwort. F\u00fcr die wahre." },

            { type: "divider" },

            // --- Warum diese Frage ---
            { type: "heading", level: 2, content: "Warum diese Frage alles ver\u00e4ndert" },
            { type: "text", content: "In der letzten Lektion hast du dein Leben auf den Pr\u00fcfstand gestellt. Sechs Ebenen, Ist gegen Soll, die L\u00fccken markiert. Du hast die Landkarte. Du siehst, wo es stimmt und wo nicht." },
            { type: "text", content: "Jetzt geht es ans Aufr\u00e4umen. Und Aufr\u00e4umen beginnt oben. Nicht bei den Gewohnheiten. Nicht bei der Umgebung. Ganz oben. Bei der Frage, die alles andere ordnet." },
            { type: "text", content: "Warum? Ohne einen Kompass lebst du reaktiv. Du kannst an allem herumschrauben - Gewohnheiten, Umgebung, Beziehungen - aber wenn du nicht wei\u00dft, wohin du willst, ist es nur Besch\u00e4ftigung." },
            { type: "emphasis", content: "Die Frage nach dem h\u00f6chsten Ziel ist die Frage nach deinem Kompass. Und wenn der Kompass stimmt, ordnet sich erstaunlich viel von selbst." },

            { type: "divider" },

            // --- Zugehörigkeit ---
            { type: "heading", level: 2, content: "Zugeh\u00f6rigkeit: Mehr als ein sch\u00f6nes Wort" },
            { type: "text", content: "Die sechste Neurologische Ebene hei\u00dft Zugeh\u00f6rigkeit. Das klingt nach Gemeinschaft, nach Dazugeh\u00f6ren, nach \"Wovon bin ich Teil?\" Und ja, das ist ein Aspekt. Aber der eigentliche Kern ist h\u00e4rter. Klarer. Ungem\u00fctlicher." },
            { type: "emphasis", content: "Zugeh\u00f6rigkeit fragt: Was ist das Ziel, dem ich diene?" },
            { type: "text", content: "Nicht welchen Verein du besuchst. Nicht welcher Gruppe du angeh\u00f6rst. Sondern: Was ist die Sache, f\u00fcr die du lebst?" },
            { type: "text", content: "Das kann vieles sein. Das Wohl deiner Familie. Gerechtigkeit. Dass kein Kind hungrig schlafen gehen muss. Dass Menschen aufwachen und erkennen, wer sie wirklich sind. Dass das Gute gewinnt. Dass Liebe st\u00e4rker ist als Angst." },
            { type: "text", content: "Es muss nicht weltbewegend klingen. Es muss wahr sein." },
            { type: "text", content: "Und es macht etwas mit dir. Wenn du wei\u00dft, wof\u00fcr du lebst, werden Entscheidungen einfach. Nicht leicht. Einfach. Weil du einen Ma\u00dfstab hast. F\u00fchrt das, was ich gerade tue, zu meinem Ziel - oder f\u00fchrt es mich davon weg? Diese eine Frage ersetzt tausend andere." },
            { type: "text", content: "Integer leben - das Wort kommt von \"integer\", ganz, unversehrt - bedeutet nichts anderes als: im Einklang mit deinem h\u00f6chsten Ziel leben. Jede Handlung, jede Entscheidung, jeder Tag durch diesen Filter. Nicht perfekt. Aber ausgerichtet." },

            { type: "divider" },

            // --- Der erste Gedanke ---
            { type: "heading", level: 2, content: "Der erste Gedanke ist selten der wahre" },
            { type: "callout", content: "<strong>Warnung:</strong> Wenn du dich fragst \"Was ist mein h\u00f6chstes Ziel?\", kommt oft zuerst eine Antwort, die gut klingt. Edel. Richtig. Die Antwort, von der du denkst, dass sie die richtige sein sollte. Das ist nicht die Antwort, die du suchst." },
            { type: "text", content: "Die wahre Antwort sitzt tiefer. Sie ist nicht die Antwort, von der du denkst, dass sie richtig sein sollte. Manchmal unbequem. Manchmal so einfach, dass du sie \u00fcbersehen hast. Manchmal so gro\u00df, dass du dich nicht traust, sie laut zu sagen." },
            { type: "text", content: "In W1 hast du gelernt, unter die Stimmen zu schauen. In W3 hast du gelernt, frei zu schreiben, ohne zu filtern. Genau diese F\u00e4higkeiten brauchst du jetzt. Schreib nicht die polierte Version. Schreib die echte." },
            { type: "text", content: "Und wenn du sie noch nicht kennst? Dann ist die Antwort: \"Ich wei\u00df es noch nicht.\" Das ist Ehrlichkeit. Und Ehrlichkeit ist immer der bessere Startpunkt als eine sch\u00f6ne L\u00fcge." },

            { type: "divider" },

            // --- Klarheit fließt nach unten ---
            { type: "heading", level: 2, content: "Klarheit flie\u00dft nach unten" },
            { type: "text", content: "Wenn das h\u00f6chste Ziel klar ist, passiert etwas. Nicht sofort. Nicht dramatisch. Aber unaufhaltsam." },
            { type: "emphasis", content: "Dein Selbstbild ordnet sich neu." },
            { type: "text", content: "In W1 hast du erkannt, wer du jenseits deiner Rollen bist. Das war die innere Wahrheit. Jetzt kommt die n\u00e4chste Frage: Wer bist du im Kontext deines h\u00f6chsten Ziels?" },
            { type: "text", content: "Das sind zwei verschiedene Dinge. Das eine ist: Wer bin ich, wenn alles wegf\u00e4llt? Das andere ist: Wer bin ich, wenn ich mich in den Dienst von etwas stelle?" },
            { type: "text", content: "Dein Selbstbild ordnet sich neu. Deine innere Wahrheit muss in die Au\u00dfenwelt passen - deine Rolle, deine Arbeit, dein Alltag. Und wenn beides zusammenpasst, entsteht eine Klarheit, die schwer zu beschreiben und unm\u00f6glich zu \u00fcbersehen ist." },
            { type: "text", content: "Wo passt es zusammen? Wo lebst du bereits als der, der du im Dienst deines Ziels bist? Das sind die Stellen, an denen du Energie gewinnst, statt sie zu verlieren. Wo Arbeit nicht wie Arbeit anf\u00fchlt." },
            { type: "text", content: "Wo passt es nicht zusammen? Wo spielst du noch eine Rolle, die nicht mehr deine ist? Wo tr\u00e4gst du ein Selbstbild, das zu einem fr\u00fcheren Leben geh\u00f6rt? Nicht falsch. Aber \u00fcberholt. Wie ein Mantel, der dir vor f\u00fcnf Jahren gepasst hat und jetzt an den Schultern spannt." },

            { type: "divider" },

            // --- Überzeugungen prüfen ---
            { type: "heading", level: 2, content: "\u00dcberzeugungen pr\u00fcfen" },
            { type: "text", content: "Unter der Identit\u00e4t sitzen die \u00dcberzeugungen. Die Geschichten, die du f\u00fcr wahr h\u00e4ltst. \u00dcber dich, \u00fcber andere, \u00fcber die Welt." },
            { type: "text", content: "In W4 hast du gelernt, \u00dcberzeugungen zu kalibrieren. Die Hawkins-Skala als Diagnosewerkzeug. In W5 hast du gelernt, loszulassen. In W6 hast du die Selbstcoaching-Schleife gebaut: Verstehen, F\u00fchlen, Handeln." },
            { type: "text", content: "Jetzt nutzt du all das - mit einem neuen Filter. Dem Filter deines h\u00f6chsten Ziels." },
            { type: "text", content: "Nimm deine Alignment-Map aus A1. Schau auf die vierte Ebene, die \u00dcberzeugungen. Was steht dort? Welche \u00dcberzeugungen dienen deinem Ziel? Welche stehen im Weg?" },
            { type: "text", content: "Ein Beispiel. Dein h\u00f6chstes Ziel ist, dass Menschen aufwachen und erkennen, wer sie wirklich sind. Aber du glaubst: \"Wer bin ich, anderen etwas beizubringen?\" Das ist eine \u00dcberzeugung, die deinem Ziel direkt widerspricht. Du hast sie vielleicht in W4 oder W8 angeschaut. Aber jetzt siehst du sie in einem neuen Licht. Nicht als pers\u00f6nliche Unsicherheit. Als Misalignment zwischen dem, was du glaubst, und dem, wof\u00fcr du lebst." },
            { type: "highlight", title: "Perspektivwechsel", content: "Es ist nicht mehr \"ich muss an meinem Selbstwert arbeiten\". Es ist: \"Diese \u00dcberzeugung steht zwischen mir und dem, wof\u00fcr ich hier bin.\"" },
            { type: "text", content: "Du hast die Werkzeuge. Kalibrieren. F\u00fchlen. Loslassen. Wende sie an. Nicht generisch. Gezielt. Auf die \u00dcberzeugungen, die deinem h\u00f6chsten Ziel im Weg stehen." },

            { type: "divider" },

            // --- Die Kaskade ---
            { type: "heading", level: 2, content: "Die Kaskade" },
            { type: "text", content: "Das ist der Kaskadeneffekt. Kompass klar - Identit\u00e4t richtet sich aus - \u00dcberzeugungen sortieren sich. Nicht erzwungen. Das passiert von selbst, wenn du auf einer h\u00f6heren Ebene Klarheit schaffst. Wie Wasser, das einen Hang hinunterf\u00e4llt. Du musst es nicht schieben. Du musst nur den Weg freimachen." },
            { type: "text", content: "Das bedeutet nicht, dass es leicht wird. Manche \u00dcberzeugungen sitzen seit Jahrzehnten. Sie f\u00fchlen sich wie Naturgesetze an: \"So bin ich halt. Das war immer so. Ich kann das nicht \u00e4ndern.\"" },
            { type: "text", content: "Falsch. Du hast neun Wochen gelernt, wie es geht. Der einzige Unterschied jetzt: Du tust es nicht mehr blind. Du tust es im Dienst von etwas. Und das gibt der Arbeit eine Kraft, die sie vorher nicht hatte." },

            { type: "divider" },

            // --- Einladung: Top-Down-Processing ---
            { type: "heading", level: 2, content: "Einladung: Top-Down-Processing" },
            { type: "text", content: "Nimm dir 45 bis 60 Minuten. Du brauchst deine Alignment-Map aus A1 und dein Journal." },
            { type: "text", content: "Drei Durchg\u00e4nge. Einer pro Ebene. Von oben nach unten." },

            { type: "steps", title: "Top-Down-Processing", items: [
                { title: "Zugeh\u00f6rigkeit (15 Minuten)", description: "Schreib dein h\u00f6chstes Ziel auf. Nicht den ersten Gedanken. Den wahren. Wof\u00fcr bist du bereit, alles zu geben? Wof\u00fcr w\u00fcrdest du aufstehen, wenn alles andere wegf\u00e4llt? Schreib ohne Filter. Wenn nichts kommt: Schreib das auf. \"Ich wei\u00df nicht, wof\u00fcr ich lebe.\" Das ist ein Ausgangspunkt." },
                { title: "Identit\u00e4t (15 Minuten)", description: "Wer bist du im Dienst dieses Ziels? Wo stimmt dein aktuelles Selbstbild mit dieser Rolle \u00fcberein? Wo nicht? Nimm die gr\u00f6\u00dfte L\u00fccke und wende die Selbstcoaching-Schleife an: Verstehen, F\u00fchlen, Handeln." },
                { title: "\u00dcberzeugungen (15 Minuten)", description: "Welche \u00dcberzeugungen stehen zwischen dir und deinem Ziel? Nimm die st\u00e4rkste. Kalibriere sie auf der Hawkins-Skala. Lass los, was nicht mehr dient. Du wei\u00dft wie. Vier Schritte. Du hast es in W5 gelernt." }
            ]},

            { type: "divider" },

            // --- Was du jetzt hast ---
            { type: "heading", level: 2, content: "Was du jetzt hast" },
            { type: "text", content: "Du bist innerlich ausgerichtet. Nicht perfekt. Nicht fertig. Aber ausgerichtet." },
            { type: "text", content: "Dein Kompass zeigt. Du wei\u00dft - oder du bist ehrlich dar\u00fcber, dass du es noch nicht wei\u00dft - wof\u00fcr du hier bist. Du siehst, wer du im Dienst dieses Ziels bist. Und du hast die \u00dcberzeugungen identifiziert, die noch im Weg stehen." },
            { type: "emphasis", content: "Die meisten Menschen stellen sich diese Fragen nie. Du hast." },
            { type: "text", content: "Die innere Arbeit ist getan. Nicht abgeschlossen - innere Arbeit ist nie abgeschlossen. Aber dein Kompass ist gesetzt." },

            { type: "divider" },

            // --- Was kommt ---
            { type: "heading", level: 2, content: "Was kommt" },
            { type: "emphasis", content: "Jetzt \u00e4nderst du dein Leben." },
            { type: "text", content: "In der n\u00e4chsten und letzten Lektion geht es um die unteren drei Ebenen. F\u00e4higkeiten, Verhalten, Umgebung. Die Ebenen, die du sehen, anfassen, ver\u00e4ndern kannst. Die Ebenen, an denen innere Klarheit \u00e4u\u00dfere Realit\u00e4t wird." },
            { type: "text", content: "Nicht alles auf einmal. Nicht morgen. Aber mit einem Kompass, der zeigt." },

            { type: "divider" },

            // --- Progress + Checklist + Signoff ---
            { type: "progress-bar", label: "Alignment 2 von 3", percent: 67, detail: "Alignment" },

            { type: "checklist", items: [
                "Lektion vollst\u00e4ndig gelesen",
                "Top-Down-Processing durchgef\u00fchrt",
                "\u00dcberzeugungen kalibriert"
            ]},

            { type: "signoff", text: "Dein Kompass zeigt. Inneres Alignment steht.\\n\\nLetzte Lektion: \u00c4u\u00dferes Alignment - dein Leben anfassen.", name: "Steven" }
        ]
    };

    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://solbachsteven.github.io/website/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

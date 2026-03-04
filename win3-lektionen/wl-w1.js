// Win³ Kurs - Lektion 1: Wer bin ich?
// Einzeiler: <script src="https://solbachsteven.github.io/website/win3-lektionen/wl-w1.js"></script>
(function() {
    if (window.__WL_W1) return;
    window.__WL_W1 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "LEKTION 1",
            title: "Wer bin ich?",
            subtitle: "Phase 1: Be Yourself"
        },
        sections: [
            // --- Intro ---
            { type: "text", content: "Du hast eine Stimme im Kopf." },
            { type: "text", content: "Gerade jetzt. W\u00e4hrend du das liest. Sie kommentiert. Bewertet. Sortiert ein. Vielleicht sagt sie gerade: \"Ja klar, meine innere Stimme, die kenne ich.\" Oder: \"Was soll das jetzt?\" Oder sie liest einfach mit und wartet, wo das hinf\u00fchrt." },
            { type: "text", content: "Jeder Mensch hat diese Stimme. Manche erleben sie als Strom von W\u00f6rtern, manche eher als Bilder oder als ein Gef\u00fchl, das sofort wei\u00df, was es von etwas h\u00e4lt - bevor ein einziger Gedanke formuliert ist." },
            { type: "text", content: "Die meisten Menschen halten diese Stimme f\u00fcr sich selbst." },
            { type: "emphasis", content: "Das bist du nicht." },

            { type: "divider" },

            // --- Die Stimme ---
            { type: "heading", level: 2, content: "Die Stimme, die du f\u00fcr dich h\u00e4ltst" },
            { type: "text", content: "Achte mal darauf, was diese Stimme den ganzen Tag \u00fcber tut. Sie bewertet alles. \"Das war gut.\" \"Das war peinlich.\" \"Hoffentlich hat keiner gemerkt, dass ich keine Ahnung hatte.\" Sie plant, sie sorgt sich, sie motiviert. \"Jetzt rei\u00df dich zusammen.\" Und manchmal tr\u00f6stet sie: \"Ist doch nicht so schlimm.\"" },
            { type: "text", content: "Manchmal spricht sie in deiner eigenen Stimme. Manchmal klingt sie verd\u00e4chtig nach deiner Mutter. Oder deinem Vater. Oder dem Lehrer aus der f\u00fcnften Klasse, der gesagt hat, aus dir wird nichts." },
            { type: "text", content: "Es ist nicht immer dieselbe Stimme. Es sind mehrere. Manchmal ziehen sie in die gleiche Richtung. Oft nicht. Der eine Teil sagt: \"Spring!\" Der andere: \"Bleib wo du bist.\" Der eine: \"Zeig dich.\" Der andere: \"Blo\u00df nicht auffallen.\"" },
            { type: "text", content: "Du kennst das. Dieses Hin-und-Her. Dieses Gef\u00fchl, zerrissen zu sein zwischen dem, was du willst, und dem, was du dich traust. Zwischen dem, was du wei\u00dft, und dem, was du tust." },
            { type: "text", content: "Das ist nicht dein Versagen. Das ist nicht Willensschw\u00e4che. Das sind Teile von dir, die verschiedene Dinge wollen. Und keiner von ihnen ist das ganze Bild." },

            { type: "divider" },

            // --- IFS / Selbst ---
            { type: "heading", level: 2, content: "Was unter den Stimmen liegt" },
            { type: "text", content: "In der letzten Lektion habe ich dir eine Karte gezeigt: dein Selbst. Dreizehn nat\u00fcrliche Qualit\u00e4ten - Ruhe, Klarheit, Neugier, Mitgef\u00fchl und neun weitere. Ich habe gesagt: Die sind schon da. Versch\u00fcttet vielleicht, verdeckt - aber da." },
            { type: "text", content: "Jetzt schauen wir genauer hin." },
            { type: "text", content: "Die Psychologie hat ein Modell daf\u00fcr, wie unsere innere Welt aufgebaut ist. Es hei\u00dft <strong>IFS</strong> - <strong>Internal Family Systems</strong>. Und es sagt etwas Einfaches, aber Tiefgreifendes:" },
            { type: "emphasis", content: "Du bestehst aus Teilen. Und du bist mehr als deine Teile." },
            { type: "text", content: "Die Stimmen in deinem Kopf - der Kritiker, der Antreiber, das \u00e4ngstliche Kind, der Rebell - das sind Teile. Jeder davon hat eine Rolle. Jeder glaubt, er besch\u00fctzt dich - und dass ohne ihn alles zusammenbrechen w\u00fcrde." },
            { type: "text", content: "Unter all diesen Teilen liegt etwas anderes. Nicht eine weitere Stimme. Nicht eine bessere, kl\u00fcgere, spirituellere Version von dir. Sondern das, was alle Stimmen kennt, ohne selbst eine zu sein. Das Selbst." },
            { type: "text", content: "Wenn ein Teil von dir w\u00fctend ist - wer bemerkt die Wut? Wer sp\u00fcrt die Angst, wenn ein Teil Angst hat? Und wer h\u00f6rt eigentlich zu, wenn alle Stimmen durcheinanderreden?" },
            { type: "emphasis", content: "Das bist du." },
            { type: "text", content: "Nicht der Inhalt. Der Raum, in dem der Inhalt erscheint." },

            { type: "divider" },

            // --- Erwachen ---
            { type: "heading", level: 2, content: "Was ist Erwachen?" },
            { type: "text", content: "Das Wort \"Erwachen\" klingt gro\u00df. Mystisch. Nach Blitz und Erleuchtung und einem Moment, in dem sich alles ver\u00e4ndert. Vergiss das." },
            { type: "text", content: "Erwachen ist nicht mystisch. Erwachen ist der Moment, in dem du den Unterschied erkennst zwischen den Teilen und dem Selbst. Zwischen dem, was du zu sein glaubst, und dem, was du bist." },
            { type: "text", content: "Das ist kein einmaliges Event. Es ist ein Prozess. Manchmal erkennst du es f\u00fcr eine Sekunde - und dann \u00fcbernehmen die Teile wieder das Steuer. Manchmal h\u00e4lt es l\u00e4nger. Mit der Zeit wird der Zugang stabiler. Nicht weil du etwas erreichst, sondern weil du aufh\u00f6rst, dich mit den Stimmen zu verwechseln." },
            { type: "text", content: "In der letzten Lektion habe ich dir die <strong>Hawkins-Karte</strong> gezeigt. Die Schwelle bei 200 - alles darunter destruktiv, alles dar\u00fcber konstruktiv. Hier wird sie lebendig:" },
            { type: "text", content: "Unter 200 lebst du aus den Teilen heraus. Angst, \u00c4rger, Stolz, Scham - das sind nicht \"du\". Das sind Teile, die das Steuer \u00fcbernommen haben. Sie sehen die Welt durch ihren Filter und reagieren entsprechend." },
            { type: "text", content: "\u00dcber 200 beginnt etwas anderes durchzuscheinen. Mut. Akzeptanz. Neugier. Das sind nicht neue Eigenschaften, die du dir antrainierst. Das sind Qualit\u00e4ten des Selbst, die sichtbar werden, wenn die Teile ein St\u00fcck zur Seite treten." },
            { type: "callout", content: "Erwachen ist der Moment, in dem du erkennst, was wahr ist. Erleuchtung geht weiter: die vollst\u00e4ndige Verk\u00f6rperung von dem, was wahr ist. Nicht nur erkennen. Leben. Durchgehend. Das ist ein Zustand, der entsteht, wenn die Teile zur Ruhe kommen und das Selbst nicht mehr verdeckt ist." },

            { type: "divider" },

            // --- Bildschirm-Metapher ---
            { type: "heading", level: 2, content: "Der Bildschirm und der Film" },
            { type: "text", content: "Ein Bildschirm. Auf dem Bildschirm laufen Filme - Dramen, Kom\u00f6dien, Horrorfilme. Manche rei\u00dfen dich mit, manche langweilen dich." },
            { type: "text", content: "Der Bildschirm wird nie nass, wenn es im Film regnet. Er trauert nicht, wenn jemand stirbt. Er zeigt alles - und wird von nichts davon ber\u00fchrt." },
            { type: "emphasis", content: "Du bist der Bildschirm. Nicht der Film." },
            { type: "text", content: "Deine Gedanken, Gef\u00fchle, \u00c4ngste - das sind Filme. Sie sind real, sie sind lebendig, sie sind wichtig. Aber sie sind nicht das, was du bist. Du bist das, was sie erm\u00f6glicht." },
            { type: "text", content: "Klingt abstrakt? Ist es nicht. Es ist das Konkreteste, was es gibt. Weil es die Frage beantwortet, mit der diese Lektion begonnen hat." },
            { type: "text", content: "Wer bin ich?" },
            { type: "text", content: "Nicht meine Gedanken, nicht meine Gef\u00fchle, nicht meine Geschichte. Sondern das, was all das kennt." },

            { type: "divider" },

            // --- Ramana ---
            { type: "heading", level: 2, content: "Die Frage, die keine Antwort braucht" },
            { type: "quote", content: "Wer bin ich?", attribution: "Ramana Maharshi" },
            { type: "text", content: "Der indische Weise <strong>Ramana Maharshi</strong> hat sein ganzes Leben auf eine einzige Frage reduziert: \"Wer bin ich?\"" },
            { type: "text", content: "Seine Methode war radikal einfach. Wenn ein Gedanke auftaucht, frag: Wer denkt das? Die Antwort kommt: \"Ich.\" Dann frag weiter: Wer ist dieses \"Ich\"?" },
            { type: "text", content: "Das ist keine intellektuelle \u00dcbung. Es ist eher wie eine Taschenlampe, die du nach innen richtest. Jede Antwort, die kommt, ist ein Teil. \"Ich bin Steven.\" Teil. \"Ich bin Coach.\" Teil. \"Ich bin \u00e4ngstlich.\" Teil. \"Ich bin der, der all das beobachtet.\" Auch das - ein Teil, der sich f\u00fcr das Ganze h\u00e4lt." },
            { type: "text", content: "Was bleibt, wenn keine Antwort mehr kommt?" },
            { type: "text", content: "Du musst das nicht beantworten. Die Frage selbst ist das Werkzeug. Sie r\u00e4umt auf. Sie zieht Schicht um Schicht ab. Nicht brutal, nicht gewaltsam - eher wie Wasser, das langsam den Stein freilegt." },
            { type: "callout", content: "Es ist die Beziehung zwischen deinem Selbstbild und deinem Weltbild. Und du bist die Kapazit\u00e4t f\u00fcr beides. Das, was Selbstbilder und Weltbilder hat - ohne eines davon zu sein." },

            { type: "divider" },

            // --- Bedeutung ---
            { type: "heading", level: 2, content: "Was das f\u00fcr dein Leben bedeutet" },
            { type: "text", content: "Okay, aber was bringt dir das?" },
            { type: "text", content: "Ehrliche Antwort: Diese Lektion noch nichts Spektakul\u00e4res. Du baust ein Fundament. Du lernst eine neue Art, dich selbst zu sehen. Und das ver\u00e4ndert mehr, als du gerade ahnst." },
            { type: "text", content: "Wenn du anf\u00e4ngst, deine inneren Stimmen als Teile zu erkennen statt als \"dich selbst\", passiert etwas Entscheidendes: Du bekommst Abstand. Nicht kalten Abstand. Eher den Abstand von jemandem, der alle Stimmen kennt - und keiner von ihnen auf den Leim geht." },
            { type: "text", content: "Dieser Abstand ist der Anfang von allem, was in diesem Kurs kommt. In Phase 2 lernst du, mit diesen Teilen zu arbeiten - sie zu verstehen, zu befreien, zu aktualisieren. In Phase 3 lebst du aus dem Selbst heraus in die Welt hinein. Aber all das braucht ein Fundament. Und das Fundament ist die Erkenntnis dieser Lektion:" },
            { type: "highlight", title: "Das Fundament", content: "Du bist nicht deine Teile. Du bist das, was deine Teile kennt." },

            { type: "divider" },

            // --- Übung ---
            { type: "heading", level: 2, content: "Deine \u00dcbung" },
            { type: "text", content: "In dieser Lektion hast du die Wahl. Drei Optionen - w\u00e4hle die, die dich anspricht. Mach sie mindestens dreimal." },

            { type: "heading", level: 3, content: "Option A: \"Ich bin.\" (Kontemplation)" },
            { type: "text", content: "Setz dich hin. F\u00fcnf Minuten. Schlie\u00df die Augen." },
            { type: "text", content: "Sag innerlich: \"Ich bin.\"" },
            { type: "text", content: "Ohne irgendetwas dahinter. Kein \"Ich bin Steven.\" Kein \"Ich bin gut.\" Kein \"Ich bin m\u00fcde.\" Nur: Ich bin." },
            { type: "text", content: "Was ist schon da - ohne dass du dem etwas hinzuf\u00fcgen musst? Beobachte. F\u00fchle. Keine Antwort n\u00f6tig. Nur da sein mit dem, was ist." },

            { type: "heading", level: 3, content: "Option B: \"Wer denkt das?\" (Alltags\u00fcbung)" },
            { type: "text", content: "Keine Extrazeit n\u00f6tig. Diese \u00dcbung passiert mitten im Alltag." },
            { type: "text", content: "Wenn ein Gedanke kommt - egal welcher - frag: \"Wer denkt das?\" Wenn ein Gef\u00fchl kommt: \"Wer f\u00fchlt das?\" Wenn eine Bewertung auftaucht: \"Wer bewertet hier?\"" },
            { type: "text", content: "Keine Antwort n\u00f6tig. Die Frage reicht. Sie unterbricht den Autopiloten f\u00fcr eine Sekunde. Und in dieser Sekunde bist du das Selbst." },

            { type: "heading", level: 3, content: "Option C: Stimmen-Inventar (Journaling)" },
            { type: "text", content: "Nimm dir zwanzig Minuten. Papier oder Bildschirm." },
            { type: "text", content: "Schreibe f\u00fcnf innere Stimmen auf, die du regelm\u00e4\u00dfig h\u00f6rst. Der Kritiker. Der Antreiber. Der \u00c4ngstliche. Der Perfektionist. Das verletzte Kind. Wer auch immer in dir spricht - gib jeder Stimme einen Namen oder eine Rolle." },
            { type: "text", content: "Dann frag dich: Wer hat gerade diese Liste geschrieben? Wer konnte alle diese Stimmen erkennen, ohne selbst eine davon zu sein?" },

            { type: "divider" },

            // --- Was kommt ---
            { type: "heading", level: 2, content: "Was kommt" },
            { type: "text", content: "Du hast jetzt ein Konzept. Eine Idee davon, was das Selbst ist und was die Teile sind. Das ist wertvoll. Und es reicht nicht." },
            { type: "emphasis", content: "\u00dcber Schwimmen zu lesen macht dich nicht zum Schwimmer." },
            { type: "text", content: "In der n\u00e4chsten Lektion springen wir rein. Du wirst deine innere Welt direkt erkunden - nicht als Konzept, sondern als Erfahrung. Du wirst die verschiedenen Stimmen und Teile in dir kennenlernen. Nicht theoretisch. Praktisch." },

            { type: "divider" },

            // --- Progress + Checklist + Signoff ---
            { type: "progress-bar", label: "Lektion 1 von 9", percent: 11, detail: "Phase 1: Be Yourself" },

            { type: "checklist", items: [
                "Lektion vollst\u00e4ndig gelesen",
                "\u00dcbung mindestens einmal durchgef\u00fchrt",
                "Reflexionsfrage beantwortet"
            ]},

            { type: "signoff", text: "Du hast die Karte. In W2 betrittst du das Terrain.", name: "Steven" }
        ]
    };

    if (window.__WL_KURS) { window.__WL_KURS.register('w1', LESSON_DATA); return; }
    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://solbachsteven.github.io/website/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

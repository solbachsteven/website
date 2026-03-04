// Win³ Kurs - Woche 0: Einführung
// Einzeiler: <script src="https://solbachsteven.github.io/website/win3-lektionen/wl-w0.js"></script>
(function() {
    if (window.__WL_W0) return;
    window.__WL_W0 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "WOCHE 0",
            title: "Einf\u00fchrung",
            subtitle: "Dein Ger\u00e4t kam ohne Anleitung"
        },
        sections: [
            // --- Intro ---
            { type: "text", content: "Du hast ein Ger\u00e4t bekommen. Das komplizierteste Ger\u00e4t, das es gibt. Und wahrscheinlich das faszinierendste." },
            { type: "emphasis", content: "Dein Leben." },
            { type: "text", content: "Es kam ohne Anleitung. Kein Handbuch. Kein Beipackzettel. Du bist irgendwann aufgewacht, und da war die Welt. Mit Eltern, die selbst keine Anleitung hatten. Mit Lehrern, die dir beigebracht haben, wie die Welt funktioniert - aber nicht, wie du funktionierst. Mit einer Gesellschaft, die dir gesagt hat, was du tun sollst - aber nie, wer du bist." },
            { type: "text", content: "Also hast du improvisiert. Wie jeder." },
            { type: "text", content: "Du hast Rollen \u00fcbernommen. Erwartungen erf\u00fcllt. Strategien entwickelt, die funktioniert haben - zumindest eine Zeit lang. Und irgendwann hast du etwas gesp\u00fcrt. Nicht laut, eher wie ein leises Summen im Hintergrund: Das funktioniert. Aber es reicht nicht. Da ist mehr. Oder etwas anderes. Etwas, das du nicht benennen kannst, aber das dich nicht in Ruhe l\u00e4sst." },
            { type: "text", content: "Wenn du dieses Summen kennst, bist du hier richtig." },

            { type: "divider" },

            // --- Drei Fragen ---
            { type: "heading", level: 2, content: "Drei Fragen" },
            { type: "text", content: "Jeder Mensch tr\u00e4gt drei Fragen in sich. Manche stellen sie sich bewusst. Manche sp\u00fcren sie nur als Unruhe, als L\u00fccke, als ein diffuses \"Irgendwas stimmt nicht.\"" },
            { type: "text", content: "<strong>Wer bin ich?</strong>" },
            { type: "text", content: "Nicht dein Name. Nicht dein Beruf. Nicht deine Rolle als Partner, Mutter, Vater, Kollege. Wer bist du, wenn all das wegf\u00e4llt? Wer ist da, wenn es still wird?" },
            { type: "text", content: "<strong>Was h\u00e4lt mich fest - und wie befreie ich mich?</strong>" },
            { type: "text", content: "Du wei\u00dft vermutlich genau, was du \u00e4ndern m\u00fcsstest. Du hast B\u00fccher gelesen, Podcasts geh\u00f6rt, vielleicht Therapie gemacht. Du verstehst dein Problem. Und trotzdem sitzt du fest. Nicht weil du dumm bist. Nicht weil du faul bist. Sondern weil Verstehen und Befreien zwei v\u00f6llig verschiedene Dinge sind." },
            { type: "text", content: "<strong>Was bringe ich in die Welt?</strong>" },
            { type: "text", content: "Nicht was du tun sollst. Was du zu geben hast. Was nur du sehen, f\u00fchlen, schaffen kannst - und ja, wof\u00fcr du auch bezahlt werden darfst." },
            { type: "text", content: "Dieser Kurs beantwortet alle drei Fragen. Nicht mit Theorie. Mit Erfahrung." },

            { type: "divider" },

            // --- Zwei Karten ---
            { type: "heading", level: 2, content: "Zwei Karten" },
            { type: "text", content: "Bevor wir losgehen, brauchst du Orientierung. Nicht eine Landkarte - zwei. Eine f\u00fcr deine Innenwelt. Eine f\u00fcr deine Au\u00dfenwelt." },

            { type: "heading", level: 3, content: "Karte 1: Dein Selbst" },
            { type: "text", content: "Du ziehst alles aus, was du dir im Laufe deines Lebens angezogen hast. Rollen, die du gespielt hast. \u00dcberzeugungen, die gar nicht deine waren. Strategien, Masken. Die ganzen Stimmen im Kopf, die immer wissen, was du sollst." },
            { type: "text", content: "Was bleibt?" },
            { type: "text", content: "Die Psychologie nennt es \"das Selbst\". Nicht eine weitere Stimme. Nicht eine bessere Version von dir. Sondern das, was unter allen Stimmen liegt. Das, was alle Stimmen kennt, ohne selbst eine zu sein." },
            { type: "text", content: "Dieses Selbst hat nat\u00fcrliche Qualit\u00e4ten. Nicht Ziele, die du erreichen musst - Eigenschaften, die bereits da sind. Ruhe, Klarheit, Neugier, Mitgef\u00fchl - um nur ein paar zu nennen. Dreizehn Qualit\u00e4ten insgesamt. Kreativit\u00e4t, Mut, Verbundenheit, Freude, Beharrlichkeit, Pr\u00e4senz, Spielfreude, Geduld und Perspektive. Versch\u00fcttet vielleicht. Verdeckt durch Jahrzehnte von Anpassung und Selbstschutz. Aber da." },
            { type: "text", content: "In den n\u00e4chsten Wochen wirst du sie freilegen. Nicht indem du etwas hinzuf\u00fcgst. Indem du erkennst, was schon da ist." },

            { type: "heading", level: 3, content: "Karte 2: Bewusstsein" },
            { type: "text", content: "Die zweite Karte zeigt die Landschaft, in der du dich bewegst. Und diese Landschaft ist nicht flach." },
            { type: "text", content: "<strong>David Hawkins</strong> hat \u00fcber Jahrzehnte eine Karte des menschlichen Bewusstseins erstellt. Sie zeigt: Unser Erleben bewegt sich auf einer Skala. Am unteren Ende stehen Scham, Schuld, Apathie, Angst. Am oberen Ende Akzeptanz, Liebe, Frieden." },
            { type: "text", content: "Dazwischen liegt eine entscheidende Schwelle: Mut. Bei 200 auf Hawkins' Skala. Alles darunter wirkt destruktiv - gegen dich selbst, gegen andere, gegen das Leben. Alles dar\u00fcber wirkt konstruktiv - f\u00fcr dich, f\u00fcr andere, f\u00fcr das Ganze." },
            { type: "text", content: "Das ist keine Bewertung. Es ist eine Beobachtung. Und sie erkl\u00e4rt, warum manches in deinem Leben sich so schwer anf\u00fchlt: Nicht weil du versagst. Sondern weil bestimmte Teile von dir noch unterhalb dieser Schwelle operieren. Das ist kein Urteil. Das ist eine Diagnose. Und eine Diagnose ist der erste Schritt zur Ver\u00e4nderung." },

            { type: "heading", level: 3, content: "Beide Karten zusammen" },
            { type: "text", content: "Dein Inneres und dein \u00c4u\u00dferes bedingen sich gegenseitig. Wer innerlich in Angst lebt, sieht \u00fcberall Bedrohung. Das ist kein Charakterfehler - das ist Physik. Und umgekehrt: Wer aus dem Selbst heraus lebt, sieht M\u00f6glichkeiten, wo vorher W\u00e4nde waren." },
            { type: "text", content: "Dieser Kurs arbeitet immer mit beiden Karten gleichzeitig. Wer du innen bist und wie du au\u00dfen lebst. Die Beziehung zwischen beiden - das ist der eigentliche Weg." },

            { type: "divider" },

            // --- Win³ ---
            { type: "heading", level: 2, content: "Win\u00b3: Drei Dimensionen, ein Weg" },
            { type: "text", content: "Drei Fragen, drei Antworten. Und drei Dimensionen, die alle zum selben Weg geh\u00f6ren." },

            { type: "bigthree", items: [
                { title: "Be Yourself", description: "Erkenne, wer du bist. Nicht wer du sein sollst - wer du bist. Unter den Rollen, den Erwartungen, dem L\u00e4rm.", color: "be" },
                { title: "Do Good", description: "Befreie dich von dem, was dich festh\u00e4lt. Nicht indem du dich reparierst - indem du erkennst, was dich blockiert, und es losl\u00e4sst. Dann tu das, was richtig ist. F\u00fcr dich und f\u00fcr andere. Beides ist dasselbe.", color: "do" },
                { title: "Make Money", description: "Bring das, was du bist und kannst, in die Welt. Schaffe Wert. Und nimm die Wertsch\u00e4tzung an - auch die finanzielle. Nicht aus Gier. Aus Integrit\u00e4t.", color: "make" }
            ]},

            { type: "text", content: "Drei Dimensionen. Nicht drei Schritte, die nacheinander abgehakt werden. Sondern drei Aspekte desselben Lebens, die gleichzeitig wirken. In diesem Kurs gehen wir sie nacheinander durch - aber sie geh\u00f6ren zusammen. Wie die drei Seiten eines Dreiecks. Nimm eine weg, und das Ganze f\u00e4llt in sich zusammen." },
            { type: "emphasis", content: "Dreiklang wird Einklang." },

            { type: "divider" },

            // --- Einkaufsladen ---
            { type: "heading", level: 2, content: "Das Einkaufsladen-Prinzip" },
            { type: "text", content: "Bevor wir starten, die wichtigste Sache." },
            { type: "text", content: "Dieser Kurs ist wie ein Einkaufsladen. Du gehst durch die Regale. Du schaust dir an, was da liegt. Manches spricht dich an, manches nicht. Manches verstehst du sofort, manches erst Wochen sp\u00e4ter. Manches vielleicht nie." },
            { type: "emphasis", content: "Du entscheidest, was du mitnimmst." },
            { type: "text", content: "Ich habe diesen Kurs nach bestem Wissen und Gewissen gemacht. Alles hier ist darauf ausgerichtet, dir zu dienen. Aber ich bin ein Mensch mit Verzerrungen, blinden Flecken und Grenzen. Das hier ist meine beste Sicht auf die Wahrheit - nicht die Wahrheit selbst." },
            { type: "callout", content: "<strong>Gleiche alles mit deiner eigenen Intuition ab.</strong> Hier und \u00fcberall sonst. Du bist die h\u00f6chste Autorit\u00e4t in deinem Leben. Nicht ich. Nicht ein Buch. Nicht ein Lehrer. Du. Das meine ich nicht als nette Geste - ich meine es als Grundprinzip. Wenn etwas in diesem Kurs sich falsch anf\u00fchlt, vertrau dir. Nicht mir." },

            { type: "divider" },

            // --- Nordstern ---
            { type: "heading", level: 2, content: "Dein Nordstern" },
            { type: "text", content: "Bevor es losgeht, eine Sache." },
            { type: "text", content: "Nimm dir f\u00fcnf Minuten. Augen zu. Ein paar tiefe Atemz\u00fcge. Und dann stell dir eine Frage:" },

            { type: "reflection", label: "Dein Nordstern", prompt: "Wenn ich alles weglasse - jede Erwartung, jede Pflicht, jede Angst - was bleibt? Was will wirklich gelebt werden?" },

            { type: "text", content: "Kein Druck. Einfach nur lauschen." },
            { type: "text", content: "Vielleicht kommt was. Ein Bild, ein Gef\u00fchl. Vielleicht auch nicht. Beides ist egal. Die Frage arbeitet weiter, auch wenn du jetzt nichts h\u00f6rst." },
            { type: "text", content: "Wenn etwas kommt, schreib es auf. Das ist dein Nordstern. Nicht f\u00fcr immer - f\u00fcr jetzt. Ein Punkt am Himmel, nach dem du dich ausrichten kannst, wenn der Weg un\u00fcbersichtlich wird." },

            { type: "divider" },

            // --- Commitment ---
            { type: "heading", level: 2, content: "Dein Commitment" },
            { type: "text", content: "Ein Kurs ist nur so gut wie deine Entscheidung, ihn wirklich zu machen. Nicht \"mal reinschauen\". Nicht \"wenn ich Zeit habe\". Sondern: Ich mache das." },
            { type: "text", content: "Hier ist eine Sache, die die meisten Menschen nicht wissen: Ein Commitment ohne sofortige Handlung ist ein frommer Wunsch. Es f\u00fchlt sich gut an, es verfl\u00fcchtigt sich schnell. Aber ein Commitment mit sofortiger Handlung ist ein Versprechen, das in deinem K\u00f6rper verankert ist. Der Unterschied ist nicht die Intensit\u00e4t der Absicht - es ist der Moment, in dem du etwas tust." },
            { type: "highlight", title: "Deine erste Handlung", content: "Wann machst du die n\u00e4chste Lektion? Nicht \"irgendwann diese Woche.\" Ein Tag. Eine Uhrzeit. Trag es ein. Jetzt. Nicht gleich. Jetzt. Das ist deine erste Handlung in diesem Kurs. Klein und konkret. Aber verbindlich." },

            { type: "divider" },

            // --- Was kommt ---
            { type: "heading", level: 2, content: "Was kommt" },
            { type: "text", content: "Der Kurs hat drei Phasen und ein Hardware-Update." },

            { type: "levels", items: [
                { number: 1, title: "Phase 1: Be Yourself", description: "Wer bin ich? Du erkennst dein wahres Selbst, erkundest deine innere Welt direkt, und lernst ein Werkzeug, das dich ab dann durch den ganzen Kurs begleitet.", color: "be" },
                { number: 2, title: "Phase 2: Do Good", description: "Was h\u00e4lt mich fest? Du erkennst deine Blockaden, lernst sie zu f\u00fchlen und loszulassen, und wirst dein eigener Coach.", color: "do" },
                { number: 3, title: "Phase 3: Make Money", description: "Was bringe ich in die Welt? Du findest deinen Platz, kl\u00e4rst dein Verh\u00e4ltnis zu Wert und Geld, und zeigst dich - unversteckt.", color: "make" }
            ]},

            { type: "text", content: "<strong>Alignment</strong> - Stimmt mein Leben? Du pr\u00fcfst alle Ebenen deines Lebens - von deinem h\u00f6chsten Ziel bis zu deinem Alltag - und bringst sie in Einklang." },
            { type: "text", content: "Jede Phase baut auf der vorherigen auf. Was du in Phase 1 \u00fcber dich erkennst, brauchst du in Phase 2, um dich zu befreien. Und was du da befreist, wird in Phase 3 zu etwas Neuem. Im Alignment pr\u00fcfst du dann, ob dein tats\u00e4chliches Leben das widerspiegelt." },

            { type: "divider" },

            // --- Checklist ---
            { type: "checklist", items: [
                "Lektion vollst\u00e4ndig gelesen",
                "Nordstern-Frage beantwortet",
                "N\u00e4chste Lektion im Kalender eingetragen"
            ]},

            // --- Signoff ---
            { type: "signoff", text: "N\u00e4chste Woche beginnen wir mit der ersten und wichtigsten Frage: Wer bist du wirklich?\\n\\nNicht wer du glaubst zu sein oder wer andere in dir sehen. Sondern wer du bist, wenn das alles wegf\u00e4llt.\\n\\nBis dahin.", name: "Steven" }
        ]
    };

    if (window.__WL_KURS) { window.__WL_KURS.register('w0', LESSON_DATA); return; }
    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://solbachsteven.github.io/website/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

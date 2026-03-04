// Win³ Kurs - Lektion 6: Du als dein Coach
// Einzeiler: <script src="https://solbachsteven.github.io/website/win3-lektionen/wl-w6.js"></script>
(function() {
    if (window.__WL_W6) return;
    window.__WL_W6 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "LEKTION 6",
            title: "Du als dein Coach",
            subtitle: "Phase 2: Do Good"
        },
        sections: [
            // --- Intro ---
            { type: "text", content: "Du wei\u00dft, was du tun solltest." },
            { type: "text", content: "Ges\u00fcnder essen. Fr\u00fcher aufstehen. Das Gespr\u00e4ch, das du vor dir herschiebst. Den Job, die Beziehung, den ersten Schritt." },
            { type: "text", content: "Du wei\u00dft es. Und trotzdem tust du es nicht." },
            { type: "text", content: "Nicht aus Faulheit. Nicht aus Unwissen. Es ist ein Graben zwischen Erkennen und Tun. Und den schaffen die meisten nicht." },
            { type: "text", content: "In Lektion 4 hast du erkannt, was dich festh\u00e4lt. In Lektion 5, wie du es losl\u00e4sst. Das reicht nicht." },
            { type: "emphasis", content: "Es braucht eine Br\u00fccke zur Handlung. Diese Woche baust du sie." },

            { type: "divider" },

            // --- Selbstcoaching-Schleife ---
            { type: "heading", level: 2, content: "Die Selbstcoaching-Schleife" },
            { type: "text", content: "Drei Schritte. Immer die gleichen. F\u00fcr alles." },
            { type: "emphasis", content: "Verstehen. F\u00fchlen. Handeln." },
            { type: "text", content: "Und dann wieder von vorn." },
            { type: "text", content: "Das ist die gleiche Struktur wie der gesamte Kurs. Meta, Innen, Au\u00dfen. Lektion 4 war Verstehen. Lektion 5 war F\u00fchlen. Lektion 6 ist Handeln. Was der Kurs im Gro\u00dfen macht, machst du jetzt im Kleinen." },
            { type: "text", content: "Die Schleife ist kein Weg mit Start und Ziel. Sie dreht sich. Jede Handlung f\u00fchrt zu neuen Erkenntnissen. Die f\u00fchren zu neuen Gef\u00fchlen. Die erm\u00f6glichen neue Handlung. Mit jeder Runde gehst du tiefer." },
            { type: "text", content: "Du kennst die einzelnen Teile bereits. Jetzt lernst du, sie bewusst als Prozess einzusetzen." },

            { type: "divider" },

            // --- Schritt 1: Verstehen ---
            { type: "heading", level: 2, content: "Schritt 1: Verstehen" },
            { type: "emphasis", content: "Was ist eigentlich los?" },
            { type: "text", content: "Das ist die Frage, an der die meisten scheitern. Nicht weil sie keine Antwort h\u00e4tten - sondern weil ihre Antwort zu vage ist. \"Irgendwas stimmt nicht.\" \"Ich bin unzufrieden.\" \"Ich stecke fest.\" Das ist keine Klarheit. Das ist ein Gef\u00fchl, das sich als Gedanke ausgibt." },
            { type: "text", content: "Was hilft: Sch\u00e4rfe. Die Dinge beim Namen nennen." },
            { type: "text", content: "Nimm dir ein Blatt Papier oder \u00f6ffne dein Journal und stell dir diese Fragen:" },
            { type: "text", content: "<strong>Was genau besch\u00e4ftigt mich gerade?</strong> Nicht \"meine Karriere\". Der konkrete Punkt: \"Ich traue mich nicht, meinem Chef zu sagen, dass ich andere Aufgaben will.\"" },
            { type: "text", content: "<strong>Was ist die Geschichte, die ich mir dar\u00fcber erz\u00e4hle?</strong> Jede Situation hat eine Geschichte. \"Wenn ich das sage, verliere ich meinen Job.\" \"Ich bin nicht gut genug.\" Schreib das auf, wie es ist." },
            { type: "text", content: "<strong>Was davon ist Fakt, was ist Interpretation?</strong> Fakt: Ich habe meinem Chef noch nicht gesagt, was ich will. Interpretation: Wenn ich es sage, verliere ich meinen Job. Fakten: Was w\u00fcrde eine Kamera zeigen. Der Rest ist dein Kopf, der Geschichten erfindet." },
            { type: "text", content: "<strong>Pr\u00fcfe die Geschichte.</strong> <strong>Byron Katie</strong> hat vier Fragen entwickelt, die jede Geschichte auf ihre Wahrheit pr\u00fcfen. Sie nennt es \"The Work\":" },

            { type: "steps", title: "The Work - Vier Fragen", items: [
                { title: "Ist das wahr?", description: "Dein st\u00e4rkster Gedanke - \"Ich werde abgelehnt\", \"Ich bin nicht gut genug\" - ist das wahr?" },
                { title: "Kannst du mit absoluter Sicherheit wissen, dass das wahr ist?", description: "Wirklich? Mit absoluter Sicherheit?" },
                { title: "Wie reagierst du, wenn du diesen Gedanken glaubst?", description: "Was passiert in dir? Was tust du? Was tust du nicht?" },
                { title: "Wer w\u00e4rst du ohne diesen Gedanken?", description: "Stell dir vor, du k\u00f6nntest diesen Gedanken nicht denken. Wer w\u00e4rst du dann? Was w\u00e4re m\u00f6glich?" }
            ]},

            { type: "text", content: "Und dann die Umkehrung: Was ist das Gegenteil deiner Geschichte? Nicht glauben. Nur einen Moment damit sitzen. Oft zeigt die Umkehrung etwas, das mindestens genauso wahr ist wie das Original." },
            { type: "text", content: "Schreib alles auf. Nicht im Kopf kreisen lassen - auf Papier oder Bildschirm bringen." },

            { type: "divider" },

            // --- Schritt 2: Fühlen ---
            { type: "heading", level: 2, content: "Schritt 2: F\u00fchlen" },
            { type: "emphasis", content: "Was l\u00f6st das in mir aus?" },
            { type: "text", content: "Hier brechen die meisten ab. Du hast verstanden, was los ist - und springst direkt zur L\u00f6sung. Neuer Plan. Neue Strategie. Neue Willenskraft." },
            { type: "text", content: "Und es funktioniert nicht. Du hast den wichtigen Teil \u00fcbersprungen." },
            { type: "text", content: "Die Letting-Go-Methode aus Lektion 5 - nutze sie jetzt. Nicht separat. Hier, direkt, in deinem Coaching." },
            { type: "text", content: "<strong>Was f\u00fchle ich, wenn ich an dieses Thema denke?</strong> Nicht was du denkst - was du f\u00fchlst. Im K\u00f6rper, nicht im Kopf." },
            { type: "text", content: "<strong>Wo sitzt es?</strong> Bauch, Brust, Kehle, Schultern? Geh mit deiner Aufmerksamkeit dorthin." },
            { type: "text", content: "<strong>Welcher Anteil meldet sich?</strong> Du kennst deine Anteile aus Lektion 2 und 4. Wer ist hier aktiv? Der \u00c4ngstliche? Der Perfektionist? Das verletzte Kind?" },
            { type: "text", content: "<strong>Kann ich die Story loslassen und beim reinen Gef\u00fchl bleiben?</strong> Du wei\u00dft, wie das geht. Schritt 2 der Letting-Go-Methode. Die Geschichte loslassen, beim K\u00f6rpergef\u00fchl bleiben, erlauben." },
            { type: "text", content: "Nimm dir Zeit. Der Wechsel vom Kopf in den K\u00f6rper braucht manchmal Minuten, nicht Sekunden. Das ist nicht ineffizient - das ist der Prozess. Wenn du diesen Schritt \u00fcberspringst, baust du auf Sand." },

            { type: "divider" },

            // --- Schritt 3: Handeln ---
            { type: "heading", level: 2, content: "Schritt 3: Handeln" },
            { type: "emphasis", content: "Was ist der kleinste n\u00e4chste Schritt?" },
            { type: "text", content: "Nicht der perfekte Plan. Ein Schritt. So klein, dass dein Widerstand keine Chance hat." },
            { type: "text", content: "<strong>Was w\u00e4re ein konkreter Schritt, den ich als N\u00e4chstes tun k\u00f6nnte?</strong> Ein Schritt. Nicht f\u00fcnf. Nicht ein ganzer Aktionsplan. Einer. So konkret, dass du morgen wei\u00dft, was zu tun ist." },
            { type: "text", content: "<strong>Was h\u00e4lt mich davon ab?</strong> Die wichtigste Frage. Wenn die Antwort ein Gef\u00fchl ist - zur\u00fcck zu Schritt 2. Ein Gedanke - zur\u00fcck zu Schritt 1." },
            { type: "text", content: "<strong>Woran merke ich, dass sich etwas ver\u00e4ndert hat?</strong> Nicht zur Kontrolle. Um zu sehen, was sich ver\u00e4ndert. Ver\u00e4nderung ist klein. Du siehst sie nur, wenn du wei\u00dft, worauf du achten musst." },
            { type: "text", content: "Wenn du nicht handeln kannst, gibt es etwas Unerledigtes zwischen Verstehen und F\u00fchlen. Geh zur\u00fcck. Die Schleife erlaubt das." },

            { type: "divider" },

            // --- KI als Coaching-Partner ---
            { type: "heading", level: 2, content: "KI als Coaching-Partner" },
            { type: "text", content: "Die Selbstcoaching-Schleife funktioniert komplett allein. Du brauchst nichts au\u00dfer dich selbst, dein Journal und ehrliche Fragen." },
            { type: "text", content: "Aber du kannst sie mit KI verst\u00e4rken. Und das ver\u00e4ndert die Tiefe erheblich." },
            { type: "text", content: "Deine Ankerpraktik - das 3-Schichten-Journaling aus Lektion 3 - ist im Grunde schon Coaching. Schicht 1 ist freies Schreiben. Schicht 2 ist KI als Spiegel. Schicht 3 ist KI als Coach. Jetzt verbindest du beides bewusst." },

            { type: "heading", level: 3, content: "Verstehen verst\u00e4rken" },
            { type: "text", content: "Beschreibe deine Situation einer KI. Und dann lass sie nicht antworten - lass sie fragen. KI hat kein Ego, kein Urteil, keine Agenda. Ein neutraler Spiegel." },
            { type: "copyblock", content: "Ich beschreibe dir eine Situation, die mich besch\u00e4ftigt. Stelle mir kl\u00e4rende Fragen - keine Ratschl\u00e4ge, nur Fragen. Hilf mir zu verstehen, was wirklich los ist." },

            { type: "heading", level: 3, content: "F\u00fchlen verst\u00e4rken" },
            { type: "text", content: "Teile, was du f\u00fchlst. Lass die KI deine Empfindungen spiegeln und benennen. Manchmal reicht es, wenn jemand sagt: \"Das ist Trauer.\" Und dann wei\u00dft du, was es ist." },
            { type: "copyblock", content: "Ich habe erkannt: [deine Erkenntnis]. Das l\u00f6st folgendes in mir aus: [beschreibe]. Hilf mir, das Gef\u00fchl genauer zu benennen und zu verstehen, welcher innere Anteil sich meldet." },

            { type: "heading", level: 3, content: "Handeln verst\u00e4rken" },
            { type: "text", content: "Lass die KI dir helfen, den Schritt zu konkretisieren. Von \"ich sollte mutiger sein\" zu \"ich spreche Montag meinen Kollegen auf das Thema an.\" Vom Vagen zum Konkreten." },
            { type: "copyblock", content: "Ich habe verstanden: [deine Erkenntnis]. Ich f\u00fchle: [dein Gef\u00fchl]. Hilf mir, EINEN konkreten, kleinen Schritt zu finden, den ich diese Woche umsetzen kann." },

            { type: "text", content: "Diese drei Prompts sind dein Werkzeugkasten. Kopiere sie, speichere sie, nutze sie so oft du willst. Sie sind bewusst einfach gehalten - einfach bedeutet hier nicht oberfl\u00e4chlich." },

            { type: "divider" },

            // --- Du kannst dir selbst helfen ---
            { type: "heading", level: 2, content: "Du kannst dir selbst helfen" },
            { type: "text", content: "Das ist das Ziel dieser Technik. Nicht dass du nie wieder Hilfe brauchst. Nicht dass du alles alleine machen musst. Sondern dass du wei\u00dft: Du hast Werkzeuge. Du hast Fragen. Du hast eine Praxis." },
            { type: "text", content: "Du kannst dich selbst durch schwierige Situationen begleiten. Nicht perfekt. Nicht immer. Aber immer \u00f6fter. Und mit der Zeit wirst du feststellen, dass sich etwas fundamental ver\u00e4ndert hat. Nicht die Umst\u00e4nde - dein Verh\u00e4ltnis zu den Umst\u00e4nden." },
            { type: "highlight", title: "Agency", content: "Du bist nicht mehr ausgeliefert. Du bist handlungsf\u00e4hig. Nicht Unabh\u00e4ngigkeit. Nicht die Illusion, alles zu kontrollieren. Sondern zu wissen: Du kannst dich selbst anfangen. Du musst nicht warten, bis jemand kommt." },

            { type: "divider" },

            // --- Was Selbstcoaching nicht kann ---
            { type: "heading", level: 2, content: "Was Selbstcoaching nicht kann" },
            { type: "text", content: "Ehrlichkeit geh\u00f6rt hierher. Nicht am Ende, als Fu\u00dfnote. Sondern als Teil des Werkzeugs." },
            { type: "text", content: "Manche Dinge schaffst du allein nicht. Tiefe Traumata. Muster von Jahrzehnten. Blinde Flecken, die du nicht sehen kannst - egal wie sehr du dich fragst." },
            { type: "text", content: "Daf\u00fcr gibt es erfahrene Menschen. Coaches, Therapeuten, Mentoren. Selbstcoaching ersetzt sie nicht. Es erg\u00e4nzt sie. Es macht dich zu einem besseren Klienten, weil du bereits vorgearbeitet hast." },
            { type: "callout", content: "<strong>Meine Haltung:</strong> Jeder Mensch sollte einen Coach haben. Nicht als Zeichen von Schw\u00e4che. Als Zeichen von Ernsthaftigkeit. Spitzensportler haben Trainer. Musiker haben Lehrer. Du navigierst dein Leben allein? Selbstcoaching ist dein t\u00e4gliches Werkzeug. Ein guter Coach bringt die Durchbr\u00fcche. Du brauchst beides." },

            { type: "divider" },

            // --- Übung ---
            { type: "heading", level: 2, content: "Einladung: Dein erster Selbstcoaching-Durchlauf" },
            { type: "text", content: "Keine Pflicht. Eine Einladung. Und ich meine das ernst." },
            { type: "text", content: "Nimm dir 30 bis 45 Minuten. Du brauchst: Schreibmaterial oder dein Journal. Optional: eine KI." },

            { type: "heading", level: 3, content: "W\u00e4hle ein aktuelles Thema" },
            { type: "text", content: "Etwas, das dich gerade besch\u00e4ftigt. Etwas, das dich belastet, wo du feststeckst, wo du nicht weiterkommst. Nichts Theoretisches. Etwas Echtes." },

            { type: "heading", level: 3, content: "Der Durchlauf" },
            { type: "steps", title: "Selbstcoaching-Durchlauf", items: [
                { title: "Verstehen (10 Minuten)", description: "Schreib auf, was los ist. Was ist das Thema? Die Geschichte? Was ist Fakt? Sei ehrlich." },
                { title: "F\u00fchlen (10 Minuten)", description: "Vom Kopf in den K\u00f6rper. Wo sitzt es? Was meldet sich? Welcher Anteil? Wenn es zu viel wird, nutze die Letting-Go-Methode aus Lektion 5. Erlaube es, \u00e4ndere es nicht." },
                { title: "Handeln (10 Minuten)", description: "Was ist dein n\u00e4chster Schritt? Schreib ihn auf - so konkret, dass du morgen wei\u00dft, was zu tun ist. Nicht \"mutiger sein\". \"Am Dienstag anrufen.\" So konkret." }
            ]},

            { type: "text", content: "Wenn du magst, wiederhole den Durchlauf mit KI-Unterst\u00fctzung. Nutze die Prompts von oben. Und vergleiche, was anders wird." },

            { type: "divider" },

            // --- Ankerpraktik ---
            { type: "heading", level: 2, content: "Ankerpraktik diese Lektion" },
            { type: "text", content: "Dein 3-Schichten-Journaling wird zum Coaching-Ritual. Das war es immer schon, jetzt machst du es bewusst." },

            { type: "anchorpractice", layers: [
                { label: "Schicht 1 (Freies Schreiben)", prompt: "Was besch\u00e4ftigt mich? Was steckt dahinter?" },
                { label: "Schicht 2 (KI als Spiegel)", prompt: "Zeig mir, was ich nicht sehe." },
                { label: "Schicht 3 (KI als Coach)", prompt: "Was ist mein n\u00e4chster Schritt?" }
            ]},

            { type: "divider" },

            // --- Phase 2: Abschluss ---
            { type: "heading", level: 2, content: "Phase 2: Abschluss" },
            { type: "text", content: "Du hast jetzt ein vollst\u00e4ndiges Werkzeugset." },
            { type: "text", content: "Lektion 4: Erkennen. Du wei\u00dft, was dich festh\u00e4lt und wo deine Anteile auf der Skala leben." },
            { type: "text", content: "Lektion 5: F\u00fchlen. Du wei\u00dft, wie du diese Anteile versorgst, statt sie zu reparieren. Du hast die Letting-Go-Methode als Praxis." },
            { type: "text", content: "Lektion 6: Handeln. Du wei\u00dft, wie du dich selbst coachst. Verstehen, F\u00fchlen, Handeln - die Schleife, die alles verbindet." },
            { type: "emphasis", content: "Das ist die Do-Good-Phase. Selbstbefreiung." },
            { type: "text", content: "Du bist nicht mehr nur Zuschauer. Du bist handlungsf\u00e4hig. Du erkennst, versorgst, begleitest dich selbst. Nicht perfekt. Du machst es." },

            { type: "divider" },

            // --- Was kommt ---
            { type: "heading", level: 2, content: "Was kommt" },
            { type: "text", content: "Phase 3 beginnt. Make Money." },
            { type: "text", content: "Und bevor du zusammenzuckst: Es geht nicht darum, irgendwas zu verkaufen. Es geht darum, das, was du bist und kannst, in die Welt zu bringen. Die Energie, die du in Phase 1 und 2 freigesetzt hast - die Erkenntnis, die Befreiung - will irgendwohin. Sie will nicht nur in dir bleiben. Sie will wirken." },
            { type: "text", content: "Woche 7 beginnt mit der Frage: Was ist deine einzigartige Position? Was siehst nur du? Was kannst nur du? Nicht als gro\u00dfspurige Behauptung - als ehrliche Inventur." },
            { type: "emphasis", content: "Du verstehst dich. Du kannst dich begleiten. Die Frage ist jetzt: Was willst du damit in die Welt bringen?" },

            { type: "divider" },

            // --- Progress + Checklist + Signoff ---
            { type: "progress-bar", label: "Lektion 6 von 9", percent: 67, detail: "Phase 2: Do Good" },

            { type: "checklist", items: [
                "Lektion vollst\u00e4ndig gelesen",
                "Selbstcoaching-Durchlauf durchgef\u00fchrt",
                "KI-Prompts ausprobiert"
            ]},

            { type: "signoff", text: "Phase 2 ist abgeschlossen. Du hast die Werkzeuge. Du bist handlungsf\u00e4hig.\\n\\nPhase 3 beginnt: Was bringst du in die Welt?", name: "Steven" }
        ]
    };

    if (window.__WL_KURS) { window.__WL_KURS.register('w6', LESSON_DATA); return; }
    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://solbachsteven.github.io/website/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

// Win³ Kurs - Woche 3: Schwarz auf Weiß
// Einzeiler: <script src="https://solbachsteven.github.io/website/win3-lektionen/wl-w3.js"></script>
(function() {
    if (window.__WL_W3) return;
    window.__WL_W3 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "WOCHE 3",
            title: "Schwarz auf Wei\u00df",
            subtitle: "Phase 1: Be Yourself"
        },
        sections: [
            // --- Intro ---
            { type: "text", content: "In W1 hast du verstanden, was das Selbst ist. In W2 hast du es erlebt - du bist nach innen gegangen, hast deine Teile gesehen, deine inneren Konflikte auf Papier gebracht. Du hast gemerkt: Da drin ist es voll. Und du bist mehr als die Summe all dessen, was da lebt." },
            { type: "emphasis", content: "Jetzt drehen wir uns um. Nach au\u00dfen." },

            { type: "divider" },

            // --- Der Spiegel ---
            { type: "heading", level: 2, content: "Der Spiegel, den niemand liest" },
            { type: "text", content: "Deine Beziehungen. Dein Beruf. Deine Gewohnheiten. Deine wiederkehrenden Probleme. Die Situationen, die dich immer wieder triggern. Die Muster, die du kennst, aber nicht loswirst." },
            { type: "emphasis", content: "Das ist kein Zufall. Das ist ein Spiegel." },
            { type: "text", content: "Alles, was du in W2 nach innen gesehen hast, zeigt sich auch nach au\u00dfen. Die Teile, die in dir ziehen, ziehen auch an deinem Leben. Der Anteil, der Sicherheit will, h\u00e4lt dich in der Komfortzone - in dem Job, der dich nicht erf\u00fcllt, aber zahlt. Der Anteil, der Anerkennung sucht, treibt dich zur \u00dcberfunktion - du arbeitest mehr, gibst mehr, leistest mehr, und es ist nie genug. Der Anteil, der Ablehnung f\u00fcrchtet, l\u00e4sst dich verstummen - in Meetings, in Beziehungen, im Leben." },
            { type: "text", content: "Du siehst es in dem, was sich immer wiederholt. Du wechselst den Job, und nach zwei Jahren ist es wieder dasselbe Gef\u00fchl. Du beendest eine Beziehung, und die n\u00e4chste hat ein verbl\u00fcffend \u00e4hnliches Muster. Du nimmst dir vor, Grenzen zu setzen - und drei Wochen sp\u00e4ter sagst du wieder zu allem Ja." },
            { type: "text", content: "Das ist nicht dein Versagen. Das ist dein Inneres, das sich nach au\u00dfen zeigt. Die meisten Menschen sehen den Spiegel und reagieren auf das Spiegelbild. Sie \u00e4ndern Umst\u00e4nde. Neuer Job. Neuer Partner. Neue Stadt. Und wundern sich, warum das Muster mitreist." },
            { type: "text", content: "Das Muster reist mit, weil es nicht im Au\u00dfen lebt. Es lebt in dir. In den Anteilen, die du letzte Woche kennengelernt hast." },
            { type: "text", content: "Die gute Nachricht: Du kannst den Spiegel lesen lernen. Und das m\u00e4chtigste Werkzeug daf\u00fcr ist etwas, das du jeden Tag tust, ohne seine Kraft zu ahnen." },
            { type: "emphasis", content: "Schreiben." },

            { type: "divider" },

            // --- Warum Schreiben ---
            { type: "heading", level: 2, content: "Warum Schreiben alles ver\u00e4ndert" },
            { type: "text", content: "<strong>James Pennebaker</strong> ist Psychologieprofessor an der University of Texas. Seit den 1980er-Jahren erforscht er eine einfache Frage: Was passiert, wenn Menschen \u00fcber das schreiben, was sie wirklich besch\u00e4ftigt?" },
            { type: "text", content: "Die Antwort, belegt in \u00fcber 200 Studien: Fast alles wird besser. Immunsystem. Stressverarbeitung. Emotionale Klarheit. Weniger Arztbesuche. Besserer Schlaf. Klarere Entscheidungen." },
            { type: "text", content: "Nicht weil Schreiben magisch ist. Sondern weil es etwas tut, das sonst selten passiert: Es zwingt dich, den Film in deinem Kopf anzuhalten und ihn in W\u00f6rter zu \u00fcbersetzen. In dem Moment, in dem du einen Gedanken aufschreibst, ist er nicht mehr nur ein nebul\u00f6ses Gef\u00fchl, das durch dich hindurchrauscht. Er steht da. Schwarz auf wei\u00df. Du kannst ihn anschauen. Er kann dich nicht mehr von innen steuern, weil er jetzt au\u00dfen liegt." },
            { type: "text", content: "Das ist die Br\u00fccke zwischen Innen und Au\u00dfen. Genau die Br\u00fccke, die dieser Kurs in dieser Woche schl\u00e4gt." },
            { type: "text", content: "In W1 hast du Konzepte kennengelernt, in W2 bist du nach innen gegangen. Jetzt bringst du das, was innen lebt, nach au\u00dfen. Nicht indem du dar\u00fcber redest - indem du es aufschreibst. Ungefiltert. Unzensiert. Ohne Publikum." },

            { type: "divider" },

            // --- Die Methode ---
            { type: "heading", level: 2, content: "Die Methode" },
            { type: "text", content: "<strong>Pennebakers</strong> Methode ist so einfach, dass sie fast beleidigend wirkt. Und genau deshalb funktioniert sie." },
            { type: "text", content: "Du schreibst. 20 Minuten. \u00dcber das, was dich wirklich besch\u00e4ftigt. Was dich nachts wachh\u00e4lt. Was du niemandem erz\u00e4hlen w\u00fcrdest. Was du selbst kaum zugeben kannst. Die Angst, die Wut, die Scham. Was unter der Oberfl\u00e4che brodelt." },
            { type: "callout", content: "<strong>Die Regeln:</strong> Schreib. H\u00f6r nicht auf. Wenn dir nichts einf\u00e4llt, schreib \"Mir f\u00e4llt nichts ein\" bis etwas kommt. Es kommt immer etwas. Filter nicht. Zensiere nicht. Korrigiere keine Grammatik, keinen Satzbau, keine Wiederholungen. Niemand liest das au\u00dfer du." },
            { type: "text", content: "Das ist kein Tagebuch im klassischen Sinn. Du schreibst nicht \"Heute war ein guter Tag, ich habe das und das gemacht.\" Du gehst dorthin, wo es weh tut. Wo es echt wird. Wo die Teile in dir ihre ungefilterte Stimme haben d\u00fcrfen." },
            { type: "text", content: "Es kann sein, dass das am Anfang unangenehm ist. Dass Sachen hochkommen, die du lieber in der Schublade gelassen h\u00e4ttest. Das ist normal. Das ist sogar der Punkt. Was hochkommt, war schon da. Du gibst ihm nur endlich einen Weg nach drau\u00dfen." },

            { type: "divider" },

            // --- Ankerpraktik ---
            { type: "heading", level: 2, content: "Die Ankerpraktik: 3-Schichten-Journaling" },
            { type: "text", content: "Was ich dir jetzt vorstelle, ist nicht einfach eine \u00dcbung f\u00fcr diese Woche. Es ist die Praxis, die dich ab jetzt durch den gesamten Kurs begleitet. Jede Woche. Jede Phase. Bis zum Ende." },
            { type: "text", content: "Drei Schichten. Aufeinander aufbauend. Du startest diese Woche mit Schicht 1 und 2. Schicht 3 erkl\u00e4re ich dir jetzt, damit du wei\u00dft, was kommt - aber du brauchst sie noch nicht." },

            { type: "anchorpractice", layers: [
                { label: "Schicht 1 (Freies Schreiben)", prompt: "Was besch\u00e4ftigt mich?" },
                { label: "Schicht 2 (KI als Spiegel)", prompt: "Was sehe ich nicht?" },
                { label: "Schicht 3 (KI als Coach)", prompt: "Was ist mein n\u00e4chster Schritt?" }
            ]},

            { type: "heading", level: 3, content: "Schicht 1: Freies Schreiben (Du allein)" },
            { type: "text", content: "Das ist Pennebaker pur. 20 Minuten. Ungefiltert. Nur du und das Papier - oder der Bildschirm, wenn dir das lieber ist." },
            { type: "text", content: "Keine Struktur. Kein Ziel. Kein \"Ich sollte \u00fcber X schreiben.\" Was auch immer kommt - schreib es auf. Wut, Verwirrung, Langeweile - egal. Klarheit, Widerspr\u00fcche, was auch immer. Alles gilt." },
            { type: "text", content: "Mach das jeden Tag. Wenn das nicht geht: Mindestens dreimal pro Woche. Am besten morgens, bevor der Tag deine Aufmerksamkeit fordert. Aber jeder Zeitpunkt ist besser als keiner." },
            { type: "text", content: "Diese Schicht ist das Fundament. Hier entsteht das Rohmaterial. Hier sprichst du mit dir selbst, ohne dass jemand zuh\u00f6rt oder bewertet. Ohne diese Schicht funktionieren die anderen beiden nicht." },

            { type: "heading", level: 3, content: "Schicht 2: KI als Spiegel" },
            { type: "text", content: "Das ist der Punkt, an dem dieser Kurs etwas macht, was kein Kurs vor ihm machen konnte." },
            { type: "text", content: "Nachdem du geschrieben hast, gibst du deinen Text an eine KI. ChatGPT, Claude, was auch immer du nutzt. Und du fragst:" },
            { type: "copyblock", content: "Was siehst du in diesem Text, das ich vielleicht nicht sehe? Welche Muster erkennst du? Welche Emotionen stehen zwischen den Zeilen?" },
            { type: "text", content: "Die KI gibt dir keine Ratschl\u00e4ge. Sie gibt dir keine Diagnose. Sie h\u00e4lt dir einen Spiegel vor. Sie erkennt Muster, die du nicht siehst, weil du mittendrin steckst. Wiederkehrende Themen. Blinde Flecken. Widerspr\u00fcche zwischen dem, was du sagst, und dem, was du meinst." },
            { type: "text", content: "Das ist kein Ersatz f\u00fcr einen Therapeuten oder Coach. Es ist ein Spiegel, der jederzeit verf\u00fcgbar ist und nicht urteilt. Und der \u00fcber Wochen und Monate Muster erkennen kann, die du selbst nie sehen w\u00fcrdest." },
            { type: "text", content: "Benutze Schicht 2, wann immer du willst. Nicht jedes Mal. Aber besonders nach emotional aufgeladenen Eintr\u00e4gen. Wenn du das Gef\u00fchl hast, da war etwas Wichtiges - aber du kommst nicht ran." },

            { type: "heading", level: 3, content: "Schicht 3: KI als Coach (Vorschau)" },
            { type: "text", content: "Du gehst mit der KI in den Dialog. Aber nicht die KI f\u00fchrt - du f\u00fchrst. Du bestimmst das Thema. Du bestimmst die Tiefe. Die KI stellt Fragen. Sokratisches Coaching: \"Was w\u00fcrde passieren, wenn das stimmt?\" Reframing: \"Wie s\u00e4he die Situation aus der Perspektive deines Selbst aus?\"" },
            { type: "text", content: "Diese Schicht wird ab Phase 2 richtig kraftvoll, wenn du anf\u00e4ngst, deine Blockaden zu bearbeiten. Jetzt wei\u00dft du, dass sie existiert. Du wei\u00dft, was kommt. Wenn du neugierig bist, probier es aus. Wenn nicht, reichen Schicht 1 und 2 vollkommen." },

            { type: "divider" },

            // --- Was ab jetzt ---
            { type: "heading", level: 2, content: "Was ab jetzt jede Woche passiert" },
            { type: "text", content: "Ich will, dass du das verstehst, weil es wichtig ist: Die Ankerpraktik ist nicht eine \u00dcbung unter vielen. Sie ist das Werkzeug." },
            { type: "text", content: "Ab n\u00e4chster Woche hat jede Lektion ein spezifisches Thema. In Phase 2 geht es um Blockaden, Loslassen, Beziehungen. In Phase 3 um Werte, Mindset, dein Angebot an die Welt. Und jedes dieser Themen bearbeitest du mit dem 3-Schichten-Journaling." },
            { type: "text", content: "Das Thema \u00e4ndert sich. Die Praxis bleibt. Wie ein Musiker, der jeden Tag Tonleitern spielt - nicht weil Tonleitern das Ziel sind, sondern weil sie die Grundlage f\u00fcr alles Weitere bilden." },
            { type: "text", content: "In Phase 2 wird Schreiben zum Befreiungswerkzeug. Du erkennst Blockaden auf dem Papier, bevor sie dich im Leben blockieren. Und du l\u00f6st Konflikte im Schreiben, statt sie in Beziehungen auszuagieren." },
            { type: "text", content: "In Phase 3 wird Schreiben zum Kl\u00e4rungswerkzeug. Du entwickelst deine Werte, deine Positionierung, dein Angebot - alles schreibend. Nicht im Kopf. Auf dem Papier." },
            { type: "emphasis", content: "Das ist der rote Faden. Und er beginnt heute." },

            { type: "divider" },

            // --- Übung ---
            { type: "heading", level: 2, content: "Deine \u00dcbung: Die erste Expressive Writing Session" },
            { type: "text", content: "Keine Wahl. Keine drei Optionen. Das hier machst du. Jetzt. Oder heute Abend. Aber heute." },

            { type: "steps", title: "Expressive Writing Session", items: [
                { title: "Vorbereitung", description: "Stell einen Timer auf 20 Minuten. Papier oder Bildschirm - was dir leichter f\u00e4llt. Sorge daf\u00fcr, dass dich niemand st\u00f6rt. Handy weg. T\u00fcr zu. Nur du und die leere Seite." },
                { title: "Schreiben (20 Minuten)", description: "Was besch\u00e4ftigt dich gerade am meisten? Was h\u00e4lt dich nachts wach? Was hast du in W2 \u00fcber deine inneren Anteile entdeckt? H\u00f6r nicht auf zu schreiben. Filter nicht. Zensiere nicht. Das ist nur f\u00fcr dich." },
                { title: "Schicht 2 (empfohlen)", description: "Gib deinen Text in eine KI und nutze den Prompt unten. Lies, was kommt. Nicht als Urteil. Als Spiegel." }
            ]},

            { type: "copyblock", content: "Was siehst du in diesem Text, das ich vielleicht nicht sehe? Welche Muster erkennst du? Welche Emotionen stehen zwischen den Zeilen?" },

            { type: "divider" },

            // --- Verankern ---
            { type: "heading", level: 2, content: "Die Ankerpraktik verankern" },
            { type: "highlight", title: "Ab jetzt", content: "Schicht 1 mindestens dreimal pro Woche. Besser t\u00e4glich. 20 Minuten. Morgens ist ideal, aber jeder Zeitpunkt ist besser als keiner. Schicht 2, wann immer du tiefer schauen willst." },
            { type: "text", content: "Das ist kein Zusatz zum Kurs. Das ist der Kurs. Alles andere baut darauf auf." },

            { type: "divider" },

            // --- Drei Wochen ---
            { type: "heading", level: 2, content: "Drei Wochen, drei Schritte" },
            { type: "text", content: "Phase 1 neigt sich dem Ende zu. Schau zur\u00fcck auf das, was passiert ist:" },
            { type: "text", content: "W1 war die Karte - das Konzept, wie dein Inneres aufgebaut ist. W2 war der Gang nach innen, die Anteile, der Beobachter. Und diese Woche hast du eine Br\u00fccke zwischen innen und au\u00dfen gebaut." },
            { type: "emphasis", content: "Verstehen, f\u00fchlen, handeln. Be Yourself." },

            { type: "divider" },

            // --- Was kommt ---
            { type: "heading", level: 2, content: "Was kommt" },
            { type: "text", content: "Du kannst jetzt nach innen schauen. Du kannst es aufschreiben. Du hast Zugang zu deinem Selbst - nicht perfekt, nicht dauerhaft, aber real." },
            { type: "text", content: "Ab n\u00e4chster Woche beginnt Phase 2: Do Good. Und dort wird es anders." },
            { type: "text", content: "In Phase 1 hast du erkannt, wer du bist. In Phase 2 lernst du, dich zu befreien. Die Teile, die du in W2 kennengelernt hast - du lernst, mit ihnen zu arbeiten. Die Konflikte zu l\u00f6sen. Die Muster zu unterbrechen, die sich in deinem Leben wiederholen." },
            { type: "text", content: "Dein Schreibwerkzeug wird dabei zum Befreiungswerkzeug. Was du diese Woche als Br\u00fccke zwischen innen und au\u00dfen gebaut hast, wird in Phase 2 zum Hebel." },
            { type: "emphasis", content: "Du hast das Fundament. Jetzt bauen wir darauf." },

            { type: "divider" },

            // --- Progress + Checklist + Signoff ---
            { type: "progress-bar", label: "Woche 3 von 9", percent: 33, detail: "Phase 1: Be Yourself" },

            { type: "checklist", items: [
                "Lektion vollst\u00e4ndig gelesen",
                "Erste Expressive Writing Session (20 Min.) durchgef\u00fchrt",
                "Schicht 2 (KI als Spiegel) ausprobiert"
            ]},

            { type: "signoff", text: "Phase 1 ist abgeschlossen. Du wei\u00dft, wer du bist. Du hast deine innere Welt betreten. Du hast ein Werkzeug.\\n\\nAb n\u00e4chster Woche nutzen wir es.", name: "Steven" }
        ]
    };

    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://solbachsteven.github.io/website/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

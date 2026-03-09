// Win³ Kurs - Lektion 9: Selbstbewusst
// Einzeiler: <script src="https://stevensolbach.de/win3-lektionen/wl-w9.js"></script>
(function() {
    if (window.__WL_W9) return;
    window.__WL_W9 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "LEKTION 9",
            title: "Selbstbewusst",
            subtitle: "Phase 3: Make Money"
        },
        sections: [
            // --- Intro ---
            { type: "emphasis", content: "In W8 haben wir uns angeschaut, was viele davon abhält, den Gegenwert für ihre Arbeit anzunehmen - Geld-Archetypen, unsichtbare Überzeugungen und die Erlaubnis, die nur von innen kommen kann. Diese Woche schauen wir auf das, was danach kommt: Sichtbarkeit. Und auf ein Wort, das den gesamten Kurs in sich trägt." },

            { type: "divider" },

            // --- Ein Wort, zwei Bedeutungen ---
            { type: "heading", level: 2, content: "Ein Wort, zwei Bedeutungen" },
            { type: "text", content: "Im Deutschen gibt es ein Wort, das etwas Bemerkenswertes tut. Es beschreibt zwei Zustände, die die meisten Menschen für getrennt halten, und steckt sie in dieselbe Hülle: Selbstbewusstsein." },
            { type: "text", content: "Die erste Bedeutung: sich seiner selbst bewusst sein. Wissen, wer man ist. Die eigenen Muster kennen, die eigenen Anteile, die eigenen Überzeugungen - nicht als Theorie, sondern als gelebte Erfahrung. Das, woran wir in den letzten acht Wochen gearbeitet haben." },
            { type: "text", content: "Die zweite Bedeutung: selbstbewusst auftreten. Sichtbar sein, Raum einnehmen, die eigene Stimme nutzen. Das, was die meisten Menschen meinen, wenn sie sagen: \"Ich wünschte, ich wäre selbstbewusster.\"" },
            { type: "text", content: "Das Interessante ist die Reihenfolge. Die zweite Bedeutung folgt aus der ersten. Wer sich seiner selbst bewusst ist, tritt selbstbewusst auf - nicht weil er es trainiert hat, sondern weil nichts mehr im Weg steht." },

            { type: "divider" },

            // --- Der umgekehrte Weg ---
            { type: "heading", level: 2, content: "Der umgekehrte Weg" },
            { type: "text", content: "Die meisten Programme, die Selbstbewusstsein versprechen, starten am falschen Ende. Sie trainieren das Auftreten: Körpersprache, Stimmübungen, Power-Posen, Elevator Pitches. Techniken, die funktionieren wie ein Anzug, der nicht passt - von außen sieht es vielleicht überzeugend aus, aber wer ihn trägt, spürt bei jeder Bewegung, dass etwas nicht stimmt." },
            { type: "text", content: "Das liegt daran, dass äußeres Auftreten kein eigenständiges Problem ist. Wenn jemand sich nicht traut, in einem Meeting zu sprechen, liegt das selten daran, dass er nicht weiß, wie man spricht. Es liegt an dem, was passiert, wenn er den Mund aufmacht: ein Anteil, der sagt \"Wer will das schon hören\", eine Überzeugung, die sagt \"Halt dich zurück, sonst fällst du auf\", ein Gefühl, das den Brustkorb eng macht, bevor der erste Satz herauskommt." },
            { type: "text", content: "Diese Schichten haben wir in den letzten Wochen freigelegt - nicht mit Techniken, sondern mit Werkzeugen, die dort ansetzen, wo das eigentliche Geschehen stattfindet." },

            { type: "divider" },

            // --- Neun Wochen, ein Weg ---
            { type: "heading", level: 2, content: "Neun Wochen, ein Weg" },
            { type: "text", content: "Wenn wir jetzt zurückschauen, wird der Bogen sichtbar." },
            { type: "text", content: "In <strong>Phase 1</strong> ging es um Erkennen. Wer bin ich, wenn ich aufhöre zu funktionieren? W1 hat die Frage gestellt. W2 hat gezeigt, dass wir aus vielen Anteilen bestehen und dass keiner davon schlecht ist. W3 hat uns ein Werkzeug gegeben, um mit diesen Anteilen ins Gespräch zu kommen: das Schreiben als Spiegel, in dem sichtbar wird, was im Kopf noch ungeformt kreist." },
            { type: "text", content: "In <strong>Phase 2</strong> ging es um Befreien. W4 hat uns die Hawkins-Skala gegeben, um zu erkennen, aus welchem inneren Ort unsere Überzeugungen und Reaktionen kommen. W5 hat gezeigt, wie wir festgehaltene Gefühle durchlassen können, statt sie zu unterdrücken oder wegzuanalysieren. W6 hat die drei Schritte zu einem Kreislauf verbunden - Verstehen, Fühlen, Handeln -, eine Schleife, die bei jedem Thema funktioniert." },
            { type: "text", content: "In <strong>Phase 3</strong> ging es um Verwirklichen. W7 hat gefragt: Was sehe ich, das andere nicht sehen? Wo ist mein Platz? W8 hat die unsichtbaren Blockaden freigelegt, die viele davon abhalten, für ihren Beitrag auch den Gegenwert anzunehmen." },
            { type: "text", content: "Drei Phasen, neun Wochen. Von \"Wer bin ich?\" zu \"Das zeige ich jetzt.\"" },

            { type: "divider" },

            // --- Die letzte Schicht ---
            { type: "heading", level: 2, content: "Die letzte Schicht" },
            { type: "text", content: "Es gibt eine Angst, die sich erst zeigt, wenn die anderen aus dem Weg sind. Sie war die ganze Zeit da, aber vergraben unter Schichten von Selbstzweifeln, Geld-Blockaden und der Frage, ob wir überhaupt etwas zu sagen haben." },
            { type: "text", content: "Es ist die Angst, wirklich gesehen zu werden." },
            { type: "text", content: "Nicht die Maske, die wir für Bewerbungsgespräche aufsetzen. Nicht die Rolle, die wir auf Familienfeiern spielen. Sondern das, was übrig bleibt, wenn all das wegfällt - die Angst, dass jemand sieht, wer wir wirklich sind, und dass das nicht reicht." },
            { type: "text", content: "Brené Brown hat zwanzig Jahre lang zu diesem Thema geforscht. Was sie herausgefunden hat, klingt paradox: Genau das, was wir vermeiden wollen - uns verletzlich zeigen, gesehen werden ohne Schutzschicht - ist die Voraussetzung für echte Verbindung. Wir können nicht gleichzeitig unsichtbar bleiben und verbunden sein. Die Panzerung, die uns vor Ablehnung schützt, hält auch alles andere draußen." },
            { type: "text", content: "Diese letzte Schicht lässt sich nicht durch einen einzigen mutigen Moment abstreifen. Aber wir haben inzwischen alles, was wir brauchen, um mit ihr zu arbeiten. Wir können den Anteil erkennen, der uns schützen will. Wir können das Gefühl auf der Hawkins-Skala einordnen. Wir können es durchlassen, statt dagegen zu kämpfen. Und wir können einen kleinen Schritt machen - nicht den großen Auftritt, sondern den ehrlichen Moment." },

            { type: "divider" },

            // --- Signal ohne Störgeräusch ---
            { type: "heading", level: 2, content: "Signal ohne Störgeräusch" },
            { type: "text", content: "In W5 gab es einen Punkt, an dem Innen und Innen sich trafen - der Moment, in dem wir aufhörten, gegen uns selbst zu kämpfen, und anfingen, uns so zu sehen, wie wir sind." },
            { type: "text", content: "W9 ist das Spiegelbild. Hier treffen Innen und Außen aufeinander." },
            { type: "text", content: "Wenn das, was wir zeigen, mit dem übereinstimmt, was wir sind, entsteht etwas, das sich schwer in ein einzelnes Wort fassen lässt. Manche nennen es Authentizität, andere Präsenz oder Charisma. Aber keines dieser Wörter trifft es ganz, weil sie alle nach etwas klingen, das man haben oder nicht haben kann - wie eine Eigenschaft, die manche mitbringen und andere eben nicht." },
            { type: "text", content: "Treffender ist vielleicht das Bild eines Signals ohne Störgeräusch. Wenn jemand spricht und das, was er sagt, mit dem zusammenpasst, was er denkt und fühlt, dann kommt die Botschaft klar an. Kein Rauschen, kein Widerspruch, keine doppelten Böden. Andere merken das, nicht weil sie es analysieren, sondern weil sich etwas entspannt, wenn ein Mensch keine widersprüchlichen Signale sendet." },
            { type: "text", content: "Dieses Signal lässt sich nicht fälschen. Es entsteht, wenn drei Bedingungen zusammenkommen: wissen, wer wir sind; die inneren Konflikte soweit bearbeitet haben, dass sie uns nicht mehr steuern; und uns die Erlaubnis gegeben haben, das zu zeigen." },
            { type: "text", content: "Phase 1, Phase 2, Phase 3. In genau dieser Reihenfolge." },

            { type: "divider" },

            // --- Werkzeuge fürs Leben ---
            { type: "heading", level: 2, content: "Werkzeuge fürs Leben" },
            { type: "text", content: "Dieser Kurs ist ein Anfang, kein Ende. Die Themen ändern sich - neue Beziehungen, berufliche Entscheidungen, Lebensphasen, die alles auf den Kopf stellen. Aber die Werkzeuge bleiben." },
            { type: "text", content: "<strong>Die Ankerpraktik.</strong> Jeden Tag ein paar Minuten, in denen wir hinschauen statt zu funktionieren. Die Fragen wechseln je nach Lebensphase, die Praxis bleibt. Sie ist der Anker, der verhindert, dass wir uns in der Geschwindigkeit des Alltags verlieren." },
            { type: "text", content: "<strong>Die Selbstcoaching-Schleife.</strong> Verstehen, Fühlen, Handeln (W6). Bei jedem Thema, das uns beschäftigt - beruflich, privat, in Beziehungen - funktioniert dieser Dreischritt. Erst die Überzeugung erkennen, dann das Gefühl dahinter durchlassen, dann einen konkreten Schritt machen." },
            { type: "text", content: "<strong>Die Letting-Go-Methode.</strong> Wenn emotionale Ladung auftaucht - und sie wird auftauchen, das gehört zum Menschsein -, wissen wir, was zu tun ist. Nicht kämpfen, nicht wegdrücken, nicht analysieren. Fühlen, zulassen, durchlassen. Diese Fähigkeit wird mit der Zeit einfacher und verändert den Umgang mit allem, was uns begegnet." },
            { type: "text", content: "Drei Werkzeuge, die keinen Therapeuten und kein Coaching ersetzen, aber etwas geben, das die meisten Menschen nicht haben: einen Weg, mit sich selbst zu arbeiten, wann immer sie ihn brauchen." },
            { type: "text", content: "In den Bonus-Lektionen (A1 bis A3) schauen wir uns an, ob das äußere Leben zum inneren passt - eine Art Hardware-Update, nachdem wir in den letzten neun Wochen das Software-Update gemacht haben." },

            { type: "divider" },

            // --- Übung: Zeig dich einem Menschen ---
            { type: "heading", level: 2, content: "Übung: Zeig dich einem Menschen" },
            { type: "text", content: "Diese Übung ist einfach zu beschreiben und schwer zu machen." },
            { type: "text", content: "Wähle eine Person in deinem Leben, jemand, dem du vertraust. Das kann ein Freund sein, ein Partner, ein Familienmitglied, ein Kollege. Und teile eine Erkenntnis aus diesem Kurs mit ihr." },
            { type: "text", content: "Nicht als Vortrag und nicht als Zusammenfassung, sondern als echtes Gespräch: \"Ich habe etwas über mich verstanden, und ich möchte es mit dir teilen.\"" },
            { type: "text", content: "Vielleicht ist es ein Muster, das du erkannt hast. Vielleicht eine Überzeugung, die du losgelassen hast. Vielleicht die Erkenntnis, dass ein Anteil, den du immer für eine Schwäche gehalten hast, dich in Wahrheit beschützt hat." },
            { type: "text", content: "Es geht nicht darum, perfekt zu formulieren. Es geht darum, einen Menschen an etwas Echtem teilhaben zu lassen. Das ist Sichtbarkeit im Kleinen - und oft der mutigste Schritt." },

            { type: "divider" },

            // --- Ankerpraktik ---
            { type: "heading", level: 2, content: "Ankerpraktik: Sichtbar sein" },
            { type: "text", content: "Ab dieser Woche hat die Ankerpraktik zwei Fragen:" },
            { type: "text", content: "<strong>\"Wo habe ich mich heute gezeigt, wie ich wirklich bin?\"</strong>" },
            { type: "text", content: "Das kann ein Moment gewesen sein, in dem wir gesagt haben, was wir wirklich denken, statt das Erwartete. Ein Gespräch, in dem wir ehrlich waren, obwohl es einfacher gewesen wäre auszuweichen. Eine Situation, in der wir Raum eingenommen haben, ohne uns dafür zu rechtfertigen." },
            { type: "text", content: "<strong>\"Wo habe ich mich versteckt - und warum?\"</strong>" },
            { type: "text", content: "Diese Frage ist kein Urteil. Sie ist eine Einladung zum Hinschauen. Oft steckt ein Anteil dahinter, der gute Gründe hat. Manchmal ist das Verstecken sogar die klügere Wahl. Aber es ist ein Unterschied, ob wir uns bewusst entscheiden oder ob ein altes Muster für uns entscheidet." },

            { type: "anchorpractice", layers: [
                { label: "Schicht 1 (Freies Schreiben)", prompt: "Wo habe ich mich heute gezeigt, wie ich wirklich bin?" },
                { label: "Schicht 2 (Reflexion)", prompt: "Wo habe ich mich versteckt - und warum?" },
                { label: "Schicht 3 (Vertiefen)", prompt: "Was würde ich tun, wenn ich wüsste, dass die Welt mich sehen will?" }
            ]},

            { type: "divider" },

            // --- Closing ---
            { type: "emphasis", content: "In neun Wochen sind wir einen Weg gegangen, der von innen nach außen führt - von der Frage \"Wer bin ich?\" über \"Was hält mich?\" bis zu \"Das zeige ich jetzt.\" Die Werkzeuge, die wir kennengelernt haben, gehören uns. Sie funktionieren bei jedem Thema und in jeder Lebensphase. In den Bonus-Lektionen (A1 bis A3) prüfen wir, ob das äußere Leben zum inneren passt: das Hardware-Update nach dem Software-Update." },

            { type: "divider" },

            // --- Celebration + Progress + Checklist + Signoff ---
            { type: "celebration", text: "Neun Wochen. Drei Phasen. Dein Weg." },

            { type: "progress-bar", label: "Lektion 9 von 9", percent: 100, detail: "Phase 3: Make Money" },

            { type: "checklist", items: [
                "Lektion vollständig gelesen",
                "Einer Person eine Erkenntnis geteilt",
                "Ankerpraktik: Sichtbar sein begonnen"
            ]},

            { type: "signoff", text: "Neun Wochen. Von \"Wer bin ich?\" zu \"Das zeige ich jetzt.\" Die Werkzeuge gehören dir.\\n\\nWeiter geht es mit den Alignment-Lektionen.", name: "Steven" }
        ]
    };

    if (window.__WL_KURS) { window.__WL_KURS.register('w9', LESSON_DATA); return; }
    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://stevensolbach.de/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

// Win³ Kurs - Lektion 5: Du bist okay
// Einzeiler: <script src="https://stevensolbach.de/win3-lektionen/wl-w5.js"></script>
(function() {
    if (window.__WL_W5) return;
    window.__WL_W5 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "LEKTION 5",
            title: "Du bist okay",
            subtitle: "Phase 2: Do Good"
        },
        sections: [
            // --- Intro ---
            { type: "text", content: "Letzte Woche hast du einen Anteil kalibriert. Du hast ihm eine Ebene auf der Hawkins-Skala zugeordnet, gespürt, wo er im Körper sitzt, und aufgeschrieben, was er braucht." },
            { type: "text", content: "Vielleicht hast du dabei etwas bemerkt: Es ist eine Sache, das Wort \"Mitgefühl\" auf ein Blatt Papier zu schreiben. Es ist eine ganz andere, es tatsächlich zu fühlen - einem Anteil gegenüber, der dich seit Jahren im Kreis laufen lässt." },
            { type: "text", content: "Genau darum geht es diese Woche. Wir gehen vom Erkennen ins Fühlen, vom Verstehen ins Versorgen. Und wir beginnen mit einer Frage, die unbequemer ist, als sie klingt." },

            { type: "divider" },

            // --- Was, wenn du gar nicht kaputt bist? ---
            { type: "heading", level: 2, content: "Was, wenn du gar nicht kaputt bist?" },
            { type: "text", content: "Die meisten von uns tragen eine Grundannahme mit sich herum, die so selbstverständlich geworden ist, dass wir sie gar nicht mehr bemerken: Irgendetwas an mir muss repariert werden." },
            { type: "text", content: "Wir lesen Bücher darüber, wie wir besser denken, fühlen, handeln könnten. Wir machen Kurse, um uns zu optimieren. Wir vergleichen uns mit Versionen von uns selbst, die produktiver, gelassener, disziplinierter sind, und der Abstand zwischen dem, was wir sind, und dem, was wir sein sollten, fühlt sich an wie ein Defizit." },
            { type: "text", content: "Aber Richard Schwartz, der Begründer von IFS, hat bei tausenden Patienten etwas beobachtet, das dieser Annahme widerspricht: Sobald die Anteile Platz machen, taucht das Selbst auf - ruhig, klar, mitfühlend. Bei jedem. Zuverlässig." },
            { type: "text", content: "In W1 haben wir das als Idee kennengelernt. Die dreizehn Qualitäten des Selbst - Ruhe, Klarheit, Neugier, Mitgefühl und die anderen - sind kein Ziel, das erreicht werden muss. Sie sind der Ausgangszustand, der zum Vorschein kommt, wenn die Anteile nicht mehr das Steuer halten." },
            { type: "text", content: "Das Problem ist: Die Anteile wissen das nicht." },
            { type: "text", content: "Für den Wächter, den Kritiker, den Perfektionisten ist Loslassen keine Erleichterung, sondern eine Bedrohung. Ihre ganze Existenz dreht sich um eine Geschichte, die sie einmal gelernt haben: \"Du bist in Gefahr. Wenn ich aufhöre, dich zu schützen, passiert etwas Schlimmes.\" Diese Geschichte war vielleicht einmal wahr - in der Kindheit, in einer bestimmten Situation, in einem Moment, in dem Schutz tatsächlich nötig war." },
            { type: "text", content: "Aber die Situation hat sich längst geändert. Und die Geschichte läuft trotzdem weiter." },

            { type: "divider" },

            // --- Was wir abspalten, verschwindet nicht ---
            { type: "heading", level: 2, content: "Was wir abspalten, verschwindet nicht" },
            { type: "text", content: "Carl Jung hat vor über hundert Jahren etwas formuliert, das die Psychologie bis heute beschäftigt: Was wir an uns selbst ablehnen, verschwindet nicht. Es wandert ins Unbewusste und wirkt von dort aus weiter." },
            { type: "text", content: "Jung nannte es den Schatten - alles, was wir verdrängen, abspalten oder verleugnen, weil es nicht in unser Selbstbild passt. Die Wut, die wir nicht zeigen dürfen. Die Traurigkeit, die wir für Schwäche halten. Die Bedürfnisse, die wir uns abgewöhnt haben, weil sie als Kind nicht willkommen waren." },
            { type: "text", content: "Diese abgespaltenen Teile melden sich trotzdem. Als überstarke Reaktionen auf Kleinigkeiten, als Muster in Beziehungen, die sich immer wiederholen, als eine Erschöpfung, die mit Schlaf nicht besser wird. Je mehr Energie ins Verdrängen fließt, desto weniger bleibt für alles andere." },
            { type: "text", content: "Integration bedeutet das Gegenteil von Abspalten: Was als getrennt von uns gesehen wurde, wieder zurückholen. Den Anteilen, die wir in W2 kennengelernt haben, erlauben, Teil von uns zu sein, statt gegen sie zu kämpfen." },
            { type: "text", content: "Das klingt theoretisch. Es wird gleich sehr praktisch." },

            { type: "divider" },

            // --- Der Schmerzkörper ---
            { type: "heading", level: 2, content: "Der Schmerzkörper" },
            { type: "text", content: "Bevor wir zur Methode kommen, muss etwas gesagt werden. Denn wenn wir anfangen, unterdrückte Emotionen bewusst zu fühlen, kann etwas passieren, das sich überwältigend anfühlt, wenn man nicht darauf vorbereitet ist." },
            { type: "text", content: "Eckhart Tolle beschreibt ein Phänomen, das er den Schmerzkörper nennt: eine Ansammlung alter, ungefühlter Emotionen, die sich irgendwann aktiviert und das Steuer übernimmt. Der Auslöser kann eine Bemerkung sein, ein Geruch, eine Situation, die einer alten Verletzung ähnelt. Plötzlich ist da eine emotionale Intensität, die in keinem Verhältnis zum Anlass steht." },
            { type: "text", content: "In solchen Momenten denkt niemand: \"Oh, das ist eine alte Emotion, die gerade hochkommt.\" Man denkt: \"Ich bin wütend, ich bin traurig, ich bin verletzt\" - und meint es vollkommen ernst. Die alte Emotion hat sich mit dem Ich verschmolzen, und alles wird durch diesen Filter eingefärbt." },
            { type: "text", content: "Tolle sagt: Der erste und wichtigste Schritt ist, den Schmerzkörper zu bemerken, wenn er aktiv wird. \"Das ist der Schmerzkörper, nicht ich.\" Diese Unterscheidung allein verändert alles, weil sie eine minimale Distanz schafft zwischen dem, der beobachtet, und dem, was gefühlt wird." },
            { type: "text", content: "Wenn das passiert, helfen drei Dinge:" },
            { type: "text", content: "<strong>Erstens, nicht einsteigen.</strong> Der Schmerzkörper bietet Geschichten an - Geschichten darüber, wer dir Unrecht getan hat, was alles schiefgelaufen ist, warum alles keinen Sinn hat. Diese Geschichten fühlen sich absolut wahr an, aber sie sind das Futter, von dem der Schmerzkörper lebt. Jeder Gedanke, den du der Geschichte hinterherschickst, gibt ihm Energie." },
            { type: "text", content: "<strong>Zweitens, nicht wegdrücken.</strong> Der Schmerzkörper ist nicht der Feind. Er ist gespeicherte Erfahrung, die endlich gefühlt werden will. Ihn wegzudrücken ist genau das, was ihn all die Jahre am Leben gehalten hat." },
            { type: "text", content: "<strong>Drittens, da sein.</strong> Bemerken, dass etwas in dir aktiv ist, und es beobachten, wie jemand am Ufer eines Flusses steht und zuschaut, wie das Wasser vorbeizieht. Das Wasser ist real und die Strömung ist stark, aber du stehst am Ufer." },

            { type: "divider" },

            // --- Die Letting-Go-Methode ---
            { type: "heading", level: 2, content: "Die Letting-Go-Methode" },
            { type: "text", content: "In W0 haben wir David Hawkins' vierten Weg kennengelernt: Gefühle durchlassen, statt sie zu unterdrücken, auszuleben oder zu vermeiden. Jetzt wird dieser Weg konkret." },
            { type: "text", content: "Hawkins hat in \"Letting Go\" eine Methode beschrieben, die so einfach ist, dass man ihr kaum zutraut, etwas zu bewirken. Vier Schritte." },

            { type: "heading", level: 3, content: "Schritt 1: Im Körper fühlen" },
            { type: "text", content: "Der erste Schritt ist, das Gefühl nicht im Kopf zu suchen, sondern im Körper. Wo sitzt es? Im Bauch, in der Brust, im Hals, in den Schultern? Was passiert dort genau - ein Druck, eine Enge, eine Hitze, ein Ziehen?" },
            { type: "text", content: "Das ist der entscheidende Unterschied zum Nachdenken über ein Gefühl. Wer über Angst nachdenkt, erzeugt meistens mehr Angst, weil der Verstand sofort anfängt, Szenarien durchzuspielen. Wer Angst im Körper spürt, bemerkt vielleicht ein Zusammenziehen im Magen und eine flache Atmung - und das ist alles. Es ist körperliche Empfindung, und als solche ist sie aushaltbar." },

            { type: "heading", level: 3, content: "Schritt 2: Die Geschichte loslassen" },
            { type: "text", content: "Jedes Gefühl kommt mit einer Geschichte. Die Angst kommt mit \"Was wenn das schiefgeht?\", die Wut mit \"Das hätte nicht passieren dürfen\", die Scham mit \"Ich bin nicht gut genug.\"" },
            { type: "text", content: "Hawkins sagt: Lass die Geschichte fallen und bleib beim reinen Gefühl. Das bedeutet nicht, dass die Geschichte falsch ist. Es bedeutet, dass sie gerade nicht hilft. Die Geschichte hält das Gefühl fest, weil jeder Gedanke über die Ursache das Gefühl neu entfacht. Ohne die Geschichte ist ein Gefühl nur Energie im Körper, und Energie, die nicht festgehalten wird, löst sich auf." },

            { type: "heading", level: 3, content: "Schritt 3: Erlauben" },
            { type: "text", content: "Hier wird es kontraintuitiv: Statt das Gefühl loswerden zu wollen, erlaubst du ihm, da zu sein. Vollständig, so wie es ist." },
            { type: "text", content: "Hawkins nennt das Allowing - die Bereitschaft, dem Gefühl Raum zu geben. Widerstand ist es, der ein Gefühl am Leben hält. Wer gegen Angst ankämpft, erzeugt Angst vor der Angst. Wer Trauer nicht zulässt, verwandelt sie in eine chronische Schwere, die sich wie Erschöpfung anfühlt. Erlauben ist das Gegenteil von Widerstand, und ohne Widerstand hat ein Gefühl keinen Grund zu bleiben." },

            { type: "heading", level: 3, content: "Schritt 4: Liebevolle Aufmerksamkeit" },
            { type: "text", content: "Der letzte Schritt bringt alles zusammen. Du gibst dem Gefühl nicht nur Raum, sondern Zuwendung - so wie jemand mit einem Kind umgeht, das weint. Nicht \"Hör auf zu weinen\", nicht \"Es ist doch gar nicht so schlimm.\" Sondern daneben sitzen, da sein und das Kind weinen lassen, so lange es weinen muss." },
            { type: "text", content: "Und hier schließt sich der Kreis zu W1. Die Qualitäten des Selbst - Ruhe, Mitgefühl, Präsenz - sind keine abstrakten Tugenden, die wir irgendwann erreichen sollten. Sie sind genau das, was ein verletzter Anteil braucht, um seine Last abzulegen. Das Selbst ist der innere Elternteil, den der Anteil nie hatte." },
            { type: "text", content: "Der Anteil bei Scham braucht Annahme. Der bei Angst braucht Präsenz. Der bei Trauer braucht jemanden, der bleibt. All das sind Qualitäten, die bereits in dir vorhanden sind - sie müssen nicht erzeugt werden, sondern nur den Anteilen zugänglich gemacht werden, die sie brauchen." },

            { type: "divider" },

            // --- Pflichtübung: Letting-Go-Session ---
            { type: "heading", level: 2, content: "Pflichtübung: Letting-Go-Session" },
            { type: "text", content: "Plane dafür 20 bis 30 Minuten ein, in denen du ungestört bist. Das ist keine Übung, die nebenbei funktioniert." },
            { type: "text", content: "<strong>Vorbereitung:</strong> Nimm das Arbeitsblatt aus W4 - den Anteil, den du kalibriert hast. Lies durch, was du über ihn aufgeschrieben hast: seine Rolle, seine Hawkins-Ebene, wo er im Körper sitzt, was er braucht." },
            { type: "text", content: "<strong>Die vier Schritte:</strong>" },
            { type: "text", content: "Setz dich bequem hin und schließ die Augen. Denk an eine Situation, in der dieser Anteil zuletzt aktiv war - und dann geh die Schritte durch:" },

            { type: "steps", title: "Letting-Go-Session", items: [
                { title: "Fühlen", description: "Spüre ins Körpergefühl hinein. Wo meldet sich dieser Anteil? Was passiert dort?" },
                { title: "Geschichte loslassen", description: "Wenn Gedanken kommen - über die Situation, über die Person, über dich selbst -, lass sie ziehen und komm zurück zum Körpergefühl." },
                { title: "Erlauben", description: "Kämpf nicht dagegen, versuch nicht, es zu verändern. Lass das Gefühl da sein, so wie es ist." },
                { title: "Zuwendung", description: "Wende dich dem Gefühl zu, als würdest du neben einem Freund sitzen, der gerade eine schwere Zeit durchmacht. Du musst nichts sagen und nichts tun. Da sein reicht." }
            ]},

            { type: "callout", content: "<strong>Wenn starke Emotionen kommen:</strong> Öffne die Augen. Spüre deine Füße auf dem Boden. Schau dich um, benenne drei Dinge, die du siehst. Das bringt dich zurück ins Hier und Jetzt. Du kannst jederzeit abbrechen und es ein anderes Mal versuchen. Es gibt kein Richtig oder Falsch, und es gibt keine Eile." },

            { type: "text", content: "<strong>Nach der Übung:</strong> Schreib auf, was du erlebt hast. Was hast du gefühlt? Was hat sich verändert? Was hat dich überrascht?" },

            { type: "divider" },

            // --- Ankerpraktik ---
            { type: "heading", level: 2, content: "Ankerpraktik: Der Anteil des Tages" },
            { type: "text", content: "Die Ankerpraktik bekommt diese Woche zwei Fragen, die du in dein tägliches Schreiben mitnehmen kannst:" },
            { type: "text", content: "<strong>\"Welcher Anteil meldet sich heute?\"</strong> - Nicht jeder Tag bringt denselben Anteil zum Vorschein. Mal ist es der Kritiker, mal der Ängstliche, mal einer, den du noch gar nicht benannt hast. Die Frage hilft, den Autopiloten zu unterbrechen und zu bemerken, was gerade im Hintergrund läuft." },
            { type: "text", content: "<strong>\"Welche Geschichte habe ich heute geglaubt, die vielleicht nicht wahr ist?\"</strong> - Jeder Anteil erzählt Geschichten. \"Du schaffst das nicht.\" \"Die anderen sind besser.\" \"Es reicht nie.\" Diese Geschichten fühlen sich an wie Fakten, solange man sie nicht hinterfragt. Die Frage \"Ist das wahr?\" ist oft alles, was es braucht, um die Geschichte als Geschichte zu erkennen." },

            { type: "anchorpractice", layers: [
                { label: "Schicht 1 (Freies Schreiben)", prompt: "Welcher Anteil meldet sich heute? Was erzählt er?" },
                { label: "Schicht 2 (Reflexion)", prompt: "Welche Geschichte habe ich heute geglaubt, die vielleicht nicht wahr ist?" },
                { label: "Schicht 3 (Zuwendung)", prompt: "Was braucht der Anteil, der sich heute meldet? Was wäre liebevoll?" }
            ]},

            { type: "divider" },

            // --- Closing ---
            { type: "emphasis", content: "In W1 hast du die Qualitäten deines Selbst kennengelernt. In W4 hast du erkannt, was deine Anteile festhält. Diese Woche hast du die beiden zusammengebracht: Die Qualitäten des Selbst sind genau das, was die Anteile brauchen, um loszulassen. In W6 gehen wir einen Schritt weiter - du wirst dein eigener Coach und lernst, diese innere Arbeit gezielt und eigenständig fortzuführen." },

            { type: "divider" },

            // --- Progress + Checklist + Signoff ---
            { type: "progress-bar", label: "Lektion 5 von 9", percent: 56, detail: "Phase 2: Do Good" },

            { type: "checklist", items: [
                "Lektion vollständig gelesen",
                "Letting-Go-Session durchgeführt (20-30 Min)",
                "Ankerpraktik: Anteil des Tages beantwortet"
            ]},

            { type: "signoff", text: "Die Qualitäten des Selbst sind genau das, was deine Anteile brauchen, um loszulassen. In W6 wirst du dein eigener Coach.", name: "Steven" }
        ]
    };

    if (window.__WL_KURS) { window.__WL_KURS.register('w5', LESSON_DATA); return; }
    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://stevensolbach.de/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

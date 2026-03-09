// Win³ Kurs - Lektion 4: Deine Fesseln
// Einzeiler: <script src="https://stevensolbach.de/win3-lektionen/wl-w4.js"></script>
(function() {
    if (window.__WL_W4) return;
    window.__WL_W4 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "LEKTION 4",
            title: "Deine Fesseln",
            subtitle: "Phase 2: Do Good"
        },
        sections: [
            // --- Intro ---
            { type: "text", content: "In den letzten drei Wochen ist viel passiert. Du hast gesehen, dass hinter dem, was du für deine Persönlichkeit hältst, etwas Ruhigeres liegt - das Selbst. Du hast die Anteile kennengelernt, die an deinem inneren Konferenztisch sitzen, jeder mit seiner Rolle und seiner Geschichte. Und du hast angefangen zu schreiben - das Innere nach außen zu bringen, auf Papier, wo du es anschauen kannst." },
            { type: "text", content: "Du weißt jetzt, was los ist." },
            { type: "text", content: "Und genau hier stecken die meisten Menschen fest." },

            { type: "divider" },

            // --- Der Wissens-Graben ---
            { type: "heading", level: 2, content: "Der Wissens-Graben" },
            { type: "text", content: "Es gibt einen Graben, der so breit ist, dass ganze Bücherregale hineinfallen, ohne ihn zu füllen. Auf der einen Seite steht das Verstehen, auf der anderen die Veränderung." },
            { type: "text", content: "Jemand kann genau erklären, warum der innere Wächter ihn davon abhält, sich in Meetings zu äußern. Kann das Muster benennen, die Herkunft nachzeichnen, die Dynamik in klugen Worten beschreiben. Und sitzt am nächsten Morgen in der Teamrunde und sagt wieder nichts." },
            { type: "text", content: "Das ist kein Versagen und keine Willensschwäche. In der Psychologie heißt dieses Phänomen der Insight-Action-Gap: Problematische Muster leben nicht im bewussten Denken. Sie leben in impliziten Erinnerungssystemen, in automatischen emotionalen Reaktionen, in Gewohnheiten, die schneller greifen als jeder Vorsatz. Diese Muster aktualisieren sich nicht einfach dadurch, dass wir etwas Neues über sie erfahren." },
            { type: "text", content: "Phase 1 war Erkenntnis - du hast die Karte studiert und das Terrain erkundet. Ab jetzt beginnt Phase 2: Befreiung. Das ist ein anderer Vorgang, und er folgt anderen Regeln." },

            { type: "divider" },

            // --- Emotionen sind keine Gedanken ---
            { type: "heading", level: 2, content: "Emotionen sind keine Gedanken" },
            { type: "text", content: "Der Grund, warum Verstehen allein nicht reicht, ist einfacher als gedacht: Blockaden sitzen nicht im Kopf, sondern im Körper." },
            { type: "text", content: "Wenn der Wächter aktiv wird, passiert das nicht als Gedanke. Es passiert als Enge im Brustkorb, als flacher Atem, als Anspannung in den Schultern - bevor überhaupt ein Wort gedacht wird. Das Nervensystem reagiert schneller als der Verstand. Bis jemand merkt, dass er Angst hat, hat der Körper längst entschieden, dass Schweigen die sicherere Option ist." },
            { type: "text", content: "Die Anteile, die wir in W2 kennengelernt haben, tragen emotionale Lasten in sich. Richard Schwartz nennt sie Bürden - Überbleibsel aus Erfahrungen, die nie verarbeitet wurden. Diese Lasten sind gespeicherte Energie: die Scham aus einem Moment, in dem jemand bloßgestellt wurde. Die Angst aus einer Zeit, in der Sicherheit nicht selbstverständlich war. Die Wut über etwas, das nie ausgesprochen werden durfte." },
            { type: "text", content: "Eine Angst lässt sich nicht wegdenken. Wer versucht, sie mit Argumenten zu überzeugen, merkt schnell, dass der Gedanke \u201eIch brauche keine Angst zu haben\u201c und das Gefühl im Bauch zwei völlig verschiedene Gespräche führen." },
            { type: "text", content: "Um an diese Lasten heranzukommen, brauchen wir eine andere Sprache als die des Verstandes - eine Karte, die zeigt, wo ein Anteil emotional steht und was er auf dieser Ebene braucht." },

            { type: "divider" },

            // --- Die Hawkins-Skala als Befreiungskarte ---
            { type: "heading", level: 2, content: "Die Hawkins-Skala als Befreiungskarte" },
            { type: "text", content: "In W0 haben wir die Map of Consciousness als Weltbild kennengelernt: eine Skala von 20 bis 1000, die beschreibt, aus welchem inneren Zustand heraus wir die Welt erleben. Damals ging es um das große Bild." },
            { type: "text", content: "Jetzt wird diese Skala persönlich. Ab heute ist sie kein Landschaftsbild mehr, sondern ein Diagnosewerkzeug für die Arbeit mit deinen Anteilen." },

            { type: "heading", level: 3, content: "Die Ebenen unter 200" },
            { type: "text", content: "Alles unterhalb von 200 kostet Energie. Hier operieren die Anteile, die in alten Erfahrungen feststecken. Jede Ebene hat eine eigene Qualität:" },
            { type: "text", content: "<strong>Scham (20)</strong> liegt am unteren Ende. Wer hier feststeckt, will unsichtbar sein - der Impuls ist, sich zu verstecken, zu verschwinden, nicht aufzufallen. \u201eMit mir stimmt etwas nicht\u201c ist der Kernsatz dieser Ebene." },
            { type: "text", content: "<strong>Schuld (30)</strong> dreht sich um das, was getan oder nicht getan wurde. Die Gedanken kreisen um vergangene Fehler, um Dinge, die sich nicht wiedergutmachen lassen. Der Anteil auf dieser Ebene bestraft sich selbst, immer wieder." },
            { type: "text", content: "<strong>Apathie (50)</strong> fühlt sich an wie eine bleierne Decke. Nichts scheint einen Unterschied zu machen. \u201eEs ist egal\u201c und \u201eEs hat keinen Sinn\u201c sind die Sätze, die hier wohnen - erlernte Hilflosigkeit in ihrer reinsten Form." },
            { type: "text", content: "<strong>Trauer (75)</strong> ist der Ort von Verlust und Bedauern. Anders als Apathie ist Trauer nicht leer, sondern voll: voll von dem, was fehlt, was hätte sein können, was verloren ging." },
            { type: "text", content: "<strong>Angst (100)</strong> zeigt sich als ständige Alarmbereitschaft. Die Welt erscheint voller Bedrohungen, und der Körper reagiert, bevor der Kopf denkt. Angst verengt den Blick und macht die Zukunft zu einem Ort, vor dem man sich schützen muss." },
            { type: "text", content: "<strong>Verlangen (125)</strong> ist die Ebene der Sucht - nicht nur nach Substanzen, sondern nach Anerkennung, Status, Bestätigung. Das ständige Gefühl, dass etwas fehlt, gepaart mit der Überzeugung, es da draußen finden zu können." },
            { type: "text", content: "<strong>Wut (150)</strong> hat mehr Energie als alles darunter. Wut bewegt, aber sie bewegt blind - Frustration über das, was nicht sein dürfte, Groll über erlittenes Unrecht. Die Hitze im Körper, die nach einem Ventil sucht." },
            { type: "text", content: "<strong>Stolz (175)</strong> fühlt sich zum ersten Mal gut an, aber auf dünnem Eis. Stolz braucht Vergleich: besser als andere, weiter als andere, stärker als andere. Sobald der Vergleich kippt, bricht das Fundament weg." },

            { type: "heading", level: 3, content: "Die Schwelle: Mut (200)" },
            { type: "text", content: "Bei 200 liegt die Grenze zwischen Überleben und Leben. David Hawkins nennt Mut den Wendepunkt, ab dem ein Mensch anfängt, die Welt als Chance zu sehen statt als Bedrohung. Hier beginnt die Bereitschaft, sich dem zu stellen, was ist - ohne zu fliehen und ohne dagegen zu kämpfen." },

            { type: "heading", level: 3, content: "Die Ebenen über 200" },
            { type: "text", content: "<strong>Neutralität (250)</strong> bedeutet innere Gelassenheit. Die Dinge müssen nicht auf eine bestimmte Art laufen, damit es in Ordnung ist." },
            { type: "text", content: "<strong>Bereitschaft (310)</strong> bringt Optimismus und die ehrliche Absicht zu wachsen. Wer hier steht, wartet nicht mehr darauf, dass sich etwas ändert, sondern fängt an." },
            { type: "text", content: "<strong>Akzeptanz (350)</strong> geht tiefer als Neutralität. Hier entsteht echte Verantwortung: die Erkenntnis, dass niemand anders kommen wird, um das eigene Leben in Ordnung zu bringen." },

            { type: "divider" },

            // --- Was braucht dieser Anteil? ---
            { type: "heading", level: 2, content: "Was braucht dieser Anteil?" },
            { type: "text", content: "Die Hawkins-Ebene eines Anteils verrät, was er braucht, um seine Last abzulegen. Das ist der Punkt, an dem die Skala vom Diagnose- zum Befreiungswerkzeug wird." },
            { type: "text", content: "Ein Anteil bei <strong>Scham</strong> braucht vor allem eines: die Erfahrung, dass er da sein darf. Scham löst sich nicht durch Argumente, sondern durch Sicherheit und Annahme. Der Anteil wurde irgendwann mit der Botschaft geprägt, dass etwas an ihm grundlegend falsch ist. Was heilt, ist das Gegenteil: gesehen werden, ohne dass jemand wegschaut." },
            { type: "text", content: "Ein Anteil bei <strong>Schuld</strong> braucht Vergebung - nicht die große, feierliche Art, sondern die leise: die Erlaubnis, ein Mensch zu sein, der Fehler macht." },
            { type: "text", content: "Bei <strong>Apathie</strong> braucht der Anteil Präsenz. Die bleierne Decke hebt sich dadurch, dass jemand darunter ausharrt, ohne etwas zu erwarten." },
            { type: "text", content: "Ein Anteil bei <strong>Angst</strong> braucht Führung und Perspektive: jemanden, der die Gefahr ebenfalls sieht und trotzdem dasteht. Und er braucht Mut - nicht als Abwesenheit von Angst, sondern als Bereitschaft, trotzdem einen Schritt zu machen." },
            { type: "text", content: "Bei <strong>Wut</strong> braucht der Anteil Verständnis. Wut entsteht, weil eine Grenze verletzt wurde, und meistens hat der Anteil damit recht. Was hilft, ist die ehrliche Frage: Was muss hier geschützt werden?" },
            { type: "text", content: "Das Entscheidende: Dieses \u201eJemand\u201c, der da sein kann, Sicherheit geben kann, Verständnis aufbringen kann - das bist du. Dein Selbst, das wir in W1 kennengelernt haben, mit seinen Qualitäten wie Ruhe, Klarheit und Mitgefühl, ist genau die Instanz, die den Anteilen geben kann, was sie brauchen. Das Selbst ist der Teil von dir, der schon jetzt zuhören kann, ohne zu urteilen und ohne zu fliehen." },

            { type: "divider" },

            // --- Übung ---
            { type: "heading", level: 2, content: "Übung: Den lautesten Anteil kalibrieren" },
            { type: "text", content: "Diese Übung verbindet alles, was wir bisher erarbeitet haben. Das Ergebnis ist ein Arbeitsblatt, das in W5 und W6 direkt weiterverwendet wird." },

            { type: "steps", title: "Den lautesten Anteil kalibrieren", items: [
                { title: "Wähle den lautesten Anteil", description: "Schau auf deine Innere-Kräfte-Map aus W2. Welcher Anteil ist gerade am aktivsten? Nicht der interessanteste, nicht der sympathischste - der lauteste. Der, den du am häufigsten hörst, der am meisten Raum einnimmt." },
                { title: "Spüre nach", description: "Schließ für einen Moment die Augen und denk an eine Situation, in der dieser Anteil zuletzt aufgetaucht ist. Wo im Körper meldet er sich? Was passiert dort - Enge, Hitze, Schwere, Unruhe?" },
                { title: "Kalibriere auf der Skala", description: "Lies die Beschreibungen der Hawkins-Ebenen oben noch einmal. Welche passt am besten zu dem, was dieser Anteil trägt? Vertrau deiner Intuition - es gibt keine falsche Antwort, weil sich die Zuordnung in den nächsten Wochen ohnehin verfeinern wird." },
                { title: "Frag, was er braucht", description: "Wenn du die Ebene gefunden hast, schau in den Abschnitt \u201eWas braucht dieser Anteil?\u201c Was wäre das Erste, das du diesem Anteil geben könntest?" },
                { title: "Schreib es auf", description: "Halte fest: Name oder Rolle des Anteils, Hawkins-Ebene (Zahl und Name), wo im Körper du ihn spürst, was er braucht. Dieses Blatt wird in den nächsten zwei Wochen dein Ausgangspunkt." }
            ]},

            { type: "divider" },

            // --- Ankerpraktik ---
            { type: "heading", level: 2, content: "Ankerpraktik: Die Blockade, die festhält" },
            { type: "text", content: "Diese Woche hat die Ankerpraktik einen konkreten Fokus: Schreib über die Blockade, die dich am meisten festhält." },
            { type: "text", content: "Du hast jetzt einen Anteil kalibriert und weißt, auf welcher Ebene er operiert. Nimm das mit in dein freies Schreiben." },

            { type: "anchorpractice", layers: [
                { label: "Schicht 1 (Freies Schreiben)", prompt: "Zwanzig Minuten, ungefiltert. Schreib über diese Blockade, diesen Anteil, diese Ebene. Was hält dich fest? Wo merkst du es im Alltag? Was wäre anders, wenn diese Last nicht da wäre?" },
                { label: "Schicht 2 (KI als Spiegel)", prompt: "Was siehst du in diesem Text, das ich vielleicht nicht sehe?" }
            ]},

            { type: "divider" },

            // --- Progress + Checklist + Signoff ---
            { type: "progress-bar", label: "Lektion 4 von 9", percent: 44, detail: "Phase 2: Do Good" },

            { type: "checklist", items: [
                "Lektion vollständig gelesen",
                "Lautesten Anteil kalibriert (Rolle + Ebene + Bedürfnis)",
                "Ankerpraktik mit Blockaden-Fokus durchgeführt"
            ]},

            { type: "signoff", text: "In Phase 1 hast du erkannt, wer du bist und wer an deinem inneren Tisch sitzt. Ab jetzt lernst du, diesen Anteilen zu geben, was sie brauchen, damit sie ihre Last ablegen können. In W5 kommt das Werkzeug dafür: die Letting-Go-Methode nach David Hawkins - fühlen und loslassen, was du hier erkannt hast. In W6 wirst du dein eigener Coach.", name: "Steven" }
        ]
    };

    if (window.__WL_KURS) { window.__WL_KURS.register('w4', LESSON_DATA); return; }
    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://stevensolbach.de/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

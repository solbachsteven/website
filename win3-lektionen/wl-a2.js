// Win³ Kurs - Alignment 2: Inneres Alignment
// Einzeiler: <script src="https://stevensolbach.de/win3-lektionen/wl-a2.js"></script>
(function() {
    if (window.__WL_A2) return;
    window.__WL_A2 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "ALIGNMENT 2",
            title: "Inneres Alignment",
            subtitle: "Inneres Alignment"
        },
        sections: [
            // --- Intro ---
            { type: "emphasis", content: "In A1 haben wir die Alignment-Map erstellt: sechs Ebenen, Ist-Zustand neben Soll-Zustand, und irgendwo dazwischen die größte Lücke. Jetzt arbeiten wir mit dieser Lücke, und zwar von oben nach unten. Die oberen drei Ebenen zuerst, weil sie alles bestimmen, was darunter passiert." },

            { type: "divider" },

            // --- Warum von oben? ---
            { type: "heading", level: 2, content: "Warum von oben?" },
            { type: "text", content: "In A1 haben wir gesehen, dass Veränderungen auf höheren Ebenen nach unten durchkaskadieren. Wer seine Identität klärt, verändert damit auch seine Überzeugungen, sein Verhalten und oft seine Umgebung. Umgekehrt funktioniert es selten: Wer nur die Umgebung wechselt, ohne die tieferen Ebenen anzufassen, baut sich am neuen Ort dasselbe Leben wieder auf." },
            { type: "text", content: "Die oberen drei Ebenen - Zugehörigkeit, Identität und Überzeugungen - sind die inneren Ebenen. Sie sind nicht sichtbar, nicht messbar und selten Gegenstand von Gesprächen am Abendessen. Aber sie bestimmen alles, was wir tun, wie wir es tun und wo wir es tun. Wer auf diesen drei Ebenen Klarheit hat, für den ordnen sich viele Fragen auf den unteren Ebenen von selbst. Wer sie überspringt und direkt am Verhalten oder an der Umgebung arbeitet, repariert Symptome." },
            { type: "text", content: "Diese Lektion nimmt alle drei Ebenen nacheinander durch, von oben nach unten. Zugehörigkeit gibt der Identität einen Rahmen, und die Identität gibt den Überzeugungen eine Richtung." },

            { type: "divider" },

            // --- Die Frage, die alles ordnet ---
            { type: "heading", level: 2, content: "Die Frage, die alles ordnet" },
            { type: "text", content: "Die höchste Ebene im Modell von Dilts heißt Zugehörigkeit: Wovon bin ich Teil? Was ist größer als ich?" },
            { type: "text", content: "Dahinter steckt eine Frage, die einfach klingt und schwer zu beantworten ist: Gibt es etwas, wofür ich alles geben würde?" },
            { type: "text", content: "Für manche ist das die Familie. Für andere eine Überzeugung - Gerechtigkeit, Bildung, eine bestimmte Vision davon, wie die Welt sein könnte. Für wieder andere ist es ein spirituelles Anliegen, ein Gefühl der Verbundenheit mit allem Lebendigen. Es gibt keine richtige Antwort. Und die erste Antwort ist selten die wahre. Die wahre kommt meistens erst, wenn wir die naheliegenden Antworten hinter uns gelassen haben." },
            { type: "text", content: "Viktor Frankl, Psychiater und Auschwitz-Überlebender, nannte diese innere Ausrichtung den \u201eWillen zum Sinn\u201c. In seinen Jahren im Konzentrationslager beobachtete er, dass Menschen fast alles ertragen können, solange sie wissen, wofür. Der Sinn funktioniert wie ein Kompass: Er zeigt nicht den Weg, aber er zeigt die Richtung. Und wer die Richtung kennt, kann Entscheidungen treffen, auch wenn der Weg unklar ist." },
            { type: "text", content: "Das ist die Funktion der Zugehörigkeits-Ebene. Wer sein höchstes Ziel kennt, hat einen Maßstab für alles, was darunter kommt. Jede Entscheidung lässt sich daran messen: Bringt mich das näher oder weiter weg? Wer dieses Ziel nicht kennt, dem fehlt dieser Maßstab, und jede Kreuzung wird zur Überforderung, weil alle Richtungen gleich aussehen." },
            { type: "text", content: "Und hier eine wichtige Einschränkung: Der erste Gedanke ist selten der wahre. Wenn wir uns diese Frage stellen, kommt oft zuerst eine Antwort, die gut klingt - edel, richtig, vorzeigbar. Das ist meistens die sozial erwünschte Antwort, nicht die eigene. Die wahre Antwort sitzt tiefer. In W1 haben wir gelernt, unter die Oberfläche zu schauen. In W3 haben wir gelernt, ohne Filter zu schreiben. Diese Fähigkeiten brauchen wir jetzt." },
            { type: "text", content: "Und wenn die Antwort noch nicht kommt? Dann ist \u201eIch weiß es noch nicht\u201c die ehrlichste Antwort und damit der beste Ausgangspunkt." },

            { type: "divider" },

            // --- Identität im Kontext ---
            { type: "heading", level: 2, content: "Identität im Kontext" },
            { type: "text", content: "In W1 haben wir eine grundlegende Frage gestellt: Wer bin ich, wenn ich alle Rollen abziehe? Die Antwort war das Selbst - ruhig, klar, mitfühlend, unabhängig von den Anteilen, die sich in den Vordergrund drängen." },
            { type: "text", content: "Jetzt kommt die nächste Frage, und sie ist anders: Wer bin ich im Kontext meines höchsten Ziels?" },
            { type: "text", content: "In W1 ging es darum, das Selbst überhaupt zu erkennen, es von den Anteilen zu unterscheiden. Hier geht es darum, dieses Selbst in Beziehung zu setzen - zu dem, was größer ist als wir. Das Selbstbild trifft das Weltbild." },
            { type: "text", content: "Wenn jemand auf der Zugehörigkeits-Ebene erkannt hat, dass Bildung sein höchstes Anliegen ist, dann folgt daraus eine Identitätsfrage: Wer bin ich im Dienst dieses Anliegens? Jemand, der Wissen teilt? Jemand, der Zugänge schafft? Jemand, der Systeme verändert? Die Antwort muss nicht groß sein. Sie muss stimmig sein." },
            { type: "text", content: "Und dann der ehrliche Blick: Wo lebe ich noch eine Version von mir, die zu einem anderen Ziel gehört? Welche Rolle spiele ich im Alltag, die nicht mehr meine ist? Vielleicht die Rolle des Angepassten, die in der Kindheit nützlich war, aber längst nicht mehr zum eigenen Weg passt. Vielleicht die Rolle des Experten in einem Feld, das einen nicht mehr bewegt. Solche alten Identitäten halten sich hartnäckig, weil sie einmal funktioniert haben und weil das Umfeld sie weiterhin erwartet." },
            { type: "text", content: "Die Selbstcoaching-Schleife aus W6 ist hier ein gutes Werkzeug: den Anteil wahrnehmen, der an der alten Rolle festhält, verstehen, was er schützen will, und prüfen, ob dieser Schutz noch gebraucht wird." },

            { type: "divider" },

            // --- Überzeugungen prüfen ---
            { type: "heading", level: 2, content: "Überzeugungen prüfen" },
            { type: "text", content: "Wenn Zugehörigkeit und Identität klarer werden, zeigt sich auf der dritten Ebene schnell, was passt und was nicht." },
            { type: "text", content: "Überzeugungen sind Sätze, die wir für wahr halten, ohne sie regelmäßig zu überprüfen. In W4 und W8 haben wir solche Sätze untersucht: über Geld, über Erfolg, über das, was möglich ist und was nicht. Damals haben wir sie einzeln betrachtet. Jetzt gibt es einen übergeordneten Filter: das höchste Ziel." },
            { type: "text", content: "Die Frage ist nicht mehr nur \u201eStimmt diese Überzeugung?\u201c, sondern \u201eDient sie meinem höchsten Ziel oder steht sie ihm im Weg?\u201c" },
            { type: "text", content: "Jemand, der für sich erkannt hat, dass Freiheit sein höchstes Anliegen ist, kann seine Überzeugungen gegen diesen Maßstab halten. \u201eSicherheit geht vor\u201c ist dann nicht mehr nur ein vernünftiger Satz, sondern ein Satz, der geprüft werden darf: Schützt mich diese Überzeugung tatsächlich, oder hält sie mich in einer Enge, die meinem eigentlichen Ziel widerspricht?" },
            { type: "text", content: "Oder ein anderes Beispiel: Jemand, dessen höchstes Ziel es ist, dass Menschen aufwachen und erkennen, wer sie wirklich sind, der aber gleichzeitig glaubt \u201eWer bin ich, anderen etwas beizubringen?\u201c - das ist kein Selbstwertproblem. Das ist ein Misalignment zwischen dem, was diese Person glaubt, und dem, wofür sie lebt. Und dieser Blickwinkel verändert den Umgang damit." },
            { type: "text", content: "Die Werkzeuge dafür haben wir: Kalibrieren auf der Hawkins-Skala - liegt die Überzeugung über oder unter 200? Kommt sie aus Mut, Akzeptanz und Klarheit? Oder aus Angst, Pflichtgefühl und Resignation? Und wenn sie unter 200 liegt: die Letting-Go-Methode aus W5, um das Gefühl durchzulassen, das unter der Überzeugung sitzt." },
            { type: "text", content: "Nicht jede Überzeugung, die unter 200 kalibriert, muss sofort losgelassen werden. Manche brauchen Zeit, manche brauchen wiederholtes Hinschauen. Aber die Richtung ist klar: Überzeugungen, die aus Angst entstanden sind, tragen nicht auf einem Weg, der aus Klarheit kommt." },

            { type: "divider" },

            // --- Integer leben ---
            { type: "heading", level: 2, content: "Integer leben" },
            { type: "text", content: "Das lateinische Wort \u201eintegritas\u201c bedeutet ungeteilt, ganz, eins mit dem Ganzen. Integrität hat in seinem Ursprung nichts mit Moral zu tun. Es beschreibt einen Zustand: Das Innere und das Äußere zeigen in dieselbe Richtung. Was jemand sagt, denkt, glaubt und tut, stimmt überein." },
            { type: "text", content: "Wenn die oberen drei Ebenen ausgerichtet sind - wenn das höchste Ziel klar ist, die Identität dazu passt und die Überzeugungen es tragen statt zu untergraben - dann entsteht dieser Zustand. Entscheidungen fallen leichter, weil der Maßstab da ist. Konflikte verlieren ihre Schärfe, weil klar ist, wofür wir stehen. Die Energie, die vorher in innere Widersprüche geflossen ist, wird frei für das, was wirklich zählt." },
            { type: "text", content: "Carl Rogers nannte es Kongruenz. Frankl nannte es Sinn. Dilts nannte es Alignment. Gemeint ist dasselbe: ein Leben aus einem Guss." },
            { type: "text", content: "Das bedeutet nicht, dass es keine Widersprüche mehr gibt. Es bedeutet, dass die Widersprüche sichtbar werden und dass es einen Rahmen gibt, um mit ihnen zu arbeiten. Die Alignment-Map aus A1 ist dieser Rahmen. Die Arbeit an den oberen drei Ebenen in dieser Lektion ist der Anfang. Und in A3 werden wir das Äußere anfassen - Fähigkeiten, Verhalten und Umgebung." },

            { type: "divider" },

            // --- Übung: Top-Down-Processing ---
            { type: "heading", level: 2, content: "Übung: Top-Down-Processing" },
            { type: "text", content: "Diese Übung baut auf der Alignment-Map aus A1 auf. Nimm dir 45 bis 60 Minuten, einen ruhigen Ort und deine Alignment-Map." },
            { type: "text", content: "Wir arbeiten die oberen drei Ebenen nacheinander durch, von oben nach unten. Für jede Ebene gibt es eine Aufgabe und eine Zeitempfehlung. Die Reihenfolge ist bewusst gewählt: Jede Ebene braucht die Klarheit der darüberliegenden, um sinnvoll bearbeitet zu werden." },

            { type: "steps", title: "Top-Down-Processing", items: [
                { title: "Zugehörigkeit (15 Minuten)", description: "Schreibe dein höchstes Ziel auf. Nicht den ersten Gedanken, nicht die sozial erwünschte Antwort, sondern das, was bleibt, wenn alles andere wegfällt. Was ist das Anliegen, dem dein Leben dienen soll? Wenn die Antwort nicht kommt, hilft manchmal die umgekehrte Frage: Was wäre, wenn es dieses Anliegen nicht gäbe? Was würde fehlen? Was würde sich sinnlos anfühlen? Schreibe den Satz auf, auch wenn er sich vorläufig anfühlt. Vorläufig ist besser als leer." },
                { title: "Identität (15 Minuten)", description: "Lies deinen Satz von der Zugehörigkeits-Ebene. Dann frage: Wer bin ich im Dienst dieses Ziels? Was für ein Mensch lebt dieses Anliegen? Vergleiche diese Antwort mit dem Ist-Zustand auf der Identitäts-Ebene deiner Alignment-Map. Wo stimmt es überein? Wo gibt es eine Lücke? Wenn die Lücke groß ist, wende die Selbstcoaching-Schleife an. Welcher Anteil hält an der alten Identität fest? Was schützt er? Was braucht er, um loslassen zu können?" },
                { title: "Überzeugungen (15 Minuten)", description: "Lies deine Antworten von den oberen beiden Ebenen. Dann schau auf die Überzeugungen in deiner Alignment-Map: Welche stehen zwischen dir und deinem Ziel? Nimm die stärkste und kalibriere sie auf der Hawkins-Skala: Liegt sie über oder unter 200? Kommt sie aus Mut und Klarheit, oder aus Angst und Gewohnheit? Wenn sie unter 200 liegt, nutze die Letting-Go-Methode. Lass das Gefühl da sein, das unter der Überzeugung sitzt. Nicht analysieren, nicht wegschieben, einfach da sein lassen. Schreibe am Ende auf, was sich verändert hat und was noch offen ist." }
            ]},

            { type: "divider" },

            // --- Ankerpraktik ---
            { type: "heading", level: 2, content: "Ankerpraktik" },
            { type: "quote", content: "Was habe ich heute getan, das meinem höchsten Ziel dient? Was hat mich davon weggeführt?" },

            { type: "divider" },

            // --- Ausblick ---
            { type: "emphasis", content: "In A2 haben wir die oberen drei Ebenen durchgearbeitet: Zugehörigkeit, Identität und Überzeugungen. Die innere Ausrichtung steht. In A3 fassen wir das äußere Leben an - Fähigkeiten, Verhalten und Umgebung. Was sich innen geklärt hat, wird dort sichtbar." },

            { type: "divider" },

            // --- Progress + Checklist + Signoff ---
            { type: "progress-bar", label: "Alignment 2 von 3", percent: 67, detail: "Alignment" },

            { type: "checklist", items: [
                "Lektion vollständig gelesen",
                "Top-Down-Processing durchgeführt (drei Ebenen)",
                "Höchstes Ziel formuliert",
                "Überzeugungen gegen das höchste Ziel geprüft"
            ]},

            { type: "signoff", text: "Die innere Ausrichtung steht. Zugehörigkeit, Identität, Überzeugungen.\\n\\nNächste Lektion: Dein Leben anfassen - Fähigkeiten, Verhalten, Umgebung.", name: "Steven" }
        ]
    };

    if (window.__WL_KURS) { window.__WL_KURS.register('a2', LESSON_DATA); return; }
    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://stevensolbach.de/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

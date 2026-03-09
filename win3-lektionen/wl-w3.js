// Win³ Kurs - Lektion 3: Schwarz auf Weiß
// Einzeiler: <script src="https://stevensolbach.de/win3-lektionen/wl-w3.js"></script>
(function() {
    if (window.__WL_W3) return;
    window.__WL_W3 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "LEKTION 3",
            title: "Schwarz auf Weiß",
            subtitle: "Phase 1: Be Yourself"
        },
        sections: [
            // --- Intro ---
            { type: "text", content: "Letzte Woche hast du auf ein Blatt Papier geschaut und gesehen, wer an deinem inneren Konferenztisch sitzt. Der Wächter, der Antreiber, der Perfektionist - jeder mit seiner Rolle, seinem Bedürfnis, seiner Geschichte." },
            { type: "text", content: "Was wir uns noch nicht angeschaut haben: Diese Figuren bleiben nicht brav an ihrem Tisch sitzen. Sie laufen mit durch den Tag." },

            { type: "divider" },

            // --- Der Spiegel ---
            { type: "heading", level: 2, content: "Der Spiegel" },
            { type: "text", content: "Der Wächter, der in der Inneren-Kräfte-Map als \u201eVorsicht\u201c aufgetaucht ist, sitzt nicht nur im Kopf. Er sitzt mit am Tisch, wenn jemand mit dem Chef spricht. Er steht daneben, wenn eine Nachricht dreimal umformuliert wird, bevor sie abgeschickt wird. Er sorgt dafür, dass in der Teamrunde nichts gesagt wird, obwohl eine klare Meinung da wäre." },
            { type: "text", content: "Und der Antreiber? Der klingelt sonntags um sechs, weil die Präsentation ja noch besser werden könnte. Der lässt den LinkedIn-Feed zu einem Wettbewerb werden, bei dem jeder Erfolg anderer als eigener Rückstand erscheint. Der macht aus einer Pause etwas, das sich nach Versagen anfühlt." },
            { type: "text", content: "Richard Schwartz hat dafür eine Formulierung gefunden, die in ihrer Einfachheit schmerzt: Du tust dir selbst an, was dir angetan wurde, und du tust anderen an, was du dir selbst antust. Die Teile, die in der Vergangenheit eingefroren sind - die wir in W2 kennengelernt haben -, laufen mit ihren alten Programmen. Und diese Programme steuern nicht nur Gedanken, sondern Entscheidungen, Gewohnheiten und Beziehungsmuster." },
            { type: "text", content: "Wer sich fragt, warum dieselbe Art Konflikt immer wiederkommt, warum bestimmte Chancen liegen bleiben oder warum der Tag erschöpfender war, als er hätte sein müssen - die Antwort steht meistens schon auf der Map von letzter Woche." },

            { type: "divider" },

            // --- Die Lücke ---
            { type: "heading", level: 2, content: "Die Lücke" },
            { type: "text", content: "In W1 haben wir die Karte studiert: das Selbst und die Anteile als Konzept. In W2 sind wir ins Terrain gegangen und haben erfahren, wer in unserer inneren Welt lebt. Jetzt wissen wir, was los ist." },
            { type: "text", content: "Und hier entsteht eine Lücke, die den meisten Menschen nicht auffällt." },
            { type: "text", content: "Verstehen und Verändern sind zwei verschiedene Dinge. Jemand kann genau wissen, dass der innere Wächter ihn davon abhält, sich zu zeigen, kann es sogar in einem Gespräch eloquent erklären - und sitzt am nächsten Morgen wieder in der Teamrunde und sagt nichts." },
            { type: "text", content: "Wissen allein reicht nicht, weil die Anteile nicht auf der Ebene des Verstandes operieren. Sie sitzen tiefer: im Körper, in automatischen Reaktionen, in Mustern, die schneller sind als jeder Gedanke. Um an sie heranzukommen, braucht es eine Brücke zwischen dem, was wir denken, und dem, was wir fühlen - zwischen dem Konferenzraum im Kopf und dem, was tatsächlich in uns lebt." },
            { type: "text", content: "Diese Brücke ist das Schreiben." },

            { type: "divider" },

            // --- Was Schreiben kann ---
            { type: "heading", level: 2, content: "Was Schreiben kann" },
            { type: "text", content: "James Pennebaker war Professor für Psychologie an der University of Texas. Im Herbst 1983 machte er ein Experiment, das seine Karriere veränderte." },
            { type: "text", content: "Er teilte Studenten in zwei Gruppen auf. Die eine Gruppe sollte vier Tage lang jeweils fünfzehn Minuten über etwas schreiben, das sie emotional tief beschäftigte - eine Erfahrung, die sie nie richtig verarbeitet hatten, ein Geheimnis, eine Angst. Die einzige Regel: nicht aufhören, nicht den Stift absetzen, nicht zensieren. Die andere Gruppe schrieb über neutrale Themen wie ihren Tagesablauf." },
            { type: "text", content: "Die Studenten, die über ihre emotionalen Themen geschrieben hatten, gingen in den folgenden sechs Monaten nur halb so oft zum Arzt wie die Kontrollgruppe. Als Pennebaker das Experiment zusammen mit den Immunologen Kiecolt-Glaser und Glaser wiederholte, fanden sie messbare Veränderungen im Immunsystem: Die Schreibgruppe zeigte einen signifikanten Anstieg der Lymphozyten, also genau der Zellen, die den Körper vor Krankheit schützen." },
            { type: "text", content: "Inzwischen haben über hundert Studien diese Ergebnisse bestätigt. Expressives Schreiben verbessert die Stressverarbeitung, die emotionale Klarheit und die Fähigkeit, schwierige Erfahrungen einzuordnen. Die körperlichen Effekte sind dabei sogar stärker als die psychologischen - was darauf hindeutet, dass es nicht um Wohlbefinden geht, sondern um etwas Tieferes." },
            { type: "text", content: "Pennebakers Erklärung ist einfach: Wenn wir Erfahrungen unterdrücken, kostet das den Körper Energie. Diese Unterdrückung ist physiologische Arbeit - der Organismus hält ständig etwas unten, und das bindet Ressourcen. Sobald wir das Erlebte in Worte fassen, endet diese Arbeit. Das Unausgesprochene wird zu etwas, das sich verarbeiten lässt." },
            { type: "text", content: "Pennebaker nennt diesen Vorgang \u201ekognitive Integration\u201c: Diffuse Gefühle werden in Sprache übersetzt, und Sprache lässt sich ordnen. Was vorher ein Knäuel war, bekommt Struktur. Was im Kreis lief, findet einen Anfang und ein Ende." },
            { type: "text", content: "Und genau hier schließt sich der Kreis zu dem, was wir in den ersten beiden Lektionen erarbeitet haben. Die Anteile am Konferenztisch, die wir in W2 gesehen haben, tragen Erfahrungen in sich, die nie ausgesprochen wurden. Das Schreiben gibt ihnen zum ersten Mal eine Stimme - auf dem Papier, wo wir sie anschauen können, statt von ihnen gesteuert zu werden." },

            { type: "divider" },

            // --- Die Ankerpraktik ---
            { type: "heading", level: 2, content: "Die Ankerpraktik" },
            { type: "text", content: "In W1 haben wir das Konzept verstanden. In W2 haben wir die direkte Erfahrung gemacht. Jetzt kommt der dritte Schritt: das, was in uns lebt, nach außen bringen." },
            { type: "text", content: "Ab dieser Woche begleitet eine Praxis den gesamten Kurs - wir nennen sie die Ankerpraktik, weil sie genau das tut: einen festen Punkt setzen im Strom des Alltags, an dem regelmäßig innegehalten und hingeschaut wird." },
            { type: "text", content: "Die Ankerpraktik besteht aus drei Schichten, die aufeinander aufbauen." },

            { type: "heading", level: 3, content: "Schicht 1: Freies Schreiben" },
            { type: "text", content: "Zwanzig Minuten, allein, ohne Unterbrechung. Timer stellen und schreiben. Alles, was kommt - Wut, Verwirrung, Langeweile, Klarheit, Widersprüche. Kein Thema vorgegeben, keine Struktur, kein Ziel." },
            { type: "text", content: "Das ist Pennebakers Methode in ihrer reinsten Form. Der Stift bleibt auf dem Papier, die Finger auf der Tastatur. Kein Innehalten, kein Korrigieren, kein Überlegen, ob das Sinn ergibt. Was dabei herauskommt, überrascht oft: Themen, die gar nicht auf dem Radar waren. Zusammenhänge, die erst beim Schreiben sichtbar werden. Sätze, bei denen klar wird, dass da etwas gemeint ist, was vorher keine Worte hatte." },
            { type: "text", content: "Diese Schicht gehört dir allein. Was hier entsteht, muss niemand lesen." },

            { type: "heading", level: 3, content: "Schicht 2: KI als Spiegel" },
            { type: "text", content: "Hier macht dieser Kurs etwas, das vor wenigen Jahren noch unmöglich gewesen wäre." },
            { type: "text", content: "Nach dem Schreiben gibst du den Text an eine KI - ChatGPT, Claude, was immer du nutzt - und stellst eine einzige Frage: \u201eWas siehst du in diesem Text, das ich vielleicht nicht sehe?\u201c" },
            { type: "text", content: "Die KI hat keinen emotionalen Anteil an deiner Geschichte. Sie wird weder trösten noch recht geben. Sie kann wiederkehrende Wörter erkennen, Themen die umkreist werden, ohne direkt angesprochen zu werden, und Widersprüche zwischen dem Gesagten und dem Gemeinten." },
            { type: "text", content: "Das ist kein Ersatz für einen Therapeuten oder ein gutes Gespräch. Es ist ein Spiegel, der jederzeit verfügbar ist, der keine eigene Agenda hat und der über Wochen Muster sehen kann, die einem selbst nie auffallen würden." },

            { type: "heading", level: 3, content: "Schicht 3: KI als Coach" },
            { type: "text", content: "Die dritte Schicht ist ein Dialog. Du nimmst, was die KI gespiegelt hat, und gehst tiefer. Stell Rückfragen. Bitte um sokratische Fragen - also Fragen, die nicht erklären, sondern aufdecken: \u201eWas könnte dahinterstecken?\u201c, \u201eWelches Bedürfnis zeigt sich hier?\u201c, \u201eWas wäre, wenn das Gegenteil wahr wäre?\u201c" },
            { type: "text", content: "Sokratische Fragen funktionieren, weil sie keine Antwort von außen liefern, sondern dorthin führen, wo die Antwort bereits liegt. Die KI wird zum Gesprächspartner, der die richtigen Fragen stellt, ohne vorzugeben, was dabei herauskommen soll." },

            { type: "heading", level: 3, content: "Wie die Schichten zusammenspielen" },
            { type: "text", content: "Schicht 1 ist das Fundament: allein, ehrlich, ungefiltert. Schicht 2 bringt Perspektive von außen. Schicht 3 vertieft. Nicht jedes Mal müssen alle drei Schichten durchlaufen werden, aber Schicht 1 - das freie Schreiben - ist jede Woche Pflicht." },
            { type: "text", content: "Jede Woche hat die Ankerpraktik einen anderen Fokus. Diese Woche geht es darum, die Praxis kennenzulernen und die erste Erfahrung zu machen. In Phase 2 wird das Schreiben zum Befreiungswerkzeug: Blockaden erkennen, innere Konflikte auf dem Papier lösen, statt sie in Beziehungen auszuagieren. In Phase 3 wird es zum Klärungswerkzeug: Werte schärfen, Positionierung finden, den eigenen Platz in der Welt definieren." },
            { type: "text", content: "Das Thema ändert sich. Die Praxis bleibt." },

            { type: "divider" },

            // --- Übung ---
            { type: "heading", level: 2, content: "Übung: Deine erste Expressive Writing Session" },
            { type: "text", content: "Das hier ist keine optionale Aufgabe. Sie ist das Fundament für alles, was in diesem Kurs noch kommt." },
            { type: "text", content: "<strong>Was du brauchst:</strong> Zwanzig Minuten ungestörte Zeit, einen Timer und etwas zum Schreiben - Papier oder Bildschirm, beides funktioniert." },
            { type: "text", content: "<strong>Schritt 1: Timer stellen.</strong> Zwanzig Minuten." },
            { type: "text", content: "<strong>Schritt 2: Schreiben.</strong> Schreib über das, was dich gerade am meisten beschäftigt. Das kann etwas Großes sein - eine Lebensphase, eine Beziehung, eine Entscheidung, die seit Wochen aufgeschoben wird. Es kann auch etwas sein, das klein erscheint, aber nicht aufhört, im Kopf zu kreisen." },
            { type: "text", content: "Die Regeln:" },
            { type: "text", content: "- Nicht aufhören, bis der Timer klingelt.\n- Nicht korrigieren, nicht streichen, nicht umformulieren.\n- Nicht zensieren. Niemand wird das lesen.\n- Wenn nichts kommt, schreib \u201eMir fällt nichts ein\u201c und mach weiter. Es kommt etwas." },
            { type: "text", content: "<strong>Schritt 3 (optional): KI-Spiegel.</strong> Kopiere deinen Text in eine KI deiner Wahl und stell die Frage: \u201eWas siehst du in diesem Text, das ich vielleicht nicht sehe?\u201c Lies die Antwort, ohne dich zu verteidigen. Lass sie wirken." },
            { type: "text", content: "<strong>Ab jetzt:</strong> Schicht 1, mindestens dreimal pro Woche. Morgens ist ideal, aber jeder Zeitpunkt ist besser als keiner." },

            { type: "divider" },

            // --- Progress + Checklist + Signoff ---
            { type: "progress-bar", label: "Lektion 3 von 9", percent: 33, detail: "Phase 1: Be Yourself" },

            { type: "checklist", items: [
                "Lektion vollständig gelesen",
                "Erste Expressive Writing Session (20 Min.) durchgeführt",
                "Schicht 2 (KI als Spiegel) ausprobiert"
            ]},

            { type: "signoff", text: "In W1 hast du die Karte studiert - das Selbst und die Anteile als Konzept. In W2 bist du ins Terrain gegangen und hast gesehen, wer in deiner inneren Welt lebt. In dieser Woche hast du die Brücke gebaut: Schreiben als Werkzeug, um das Innere sichtbar zu machen und zu verarbeiten. Ab W4 beginnt Phase 2 - dort wird das Schreiben zum Befreiungswerkzeug, mit dem du anfängst, alte Muster zu lösen.", name: "Steven" }
        ]
    };

    if (window.__WL_KURS) { window.__WL_KURS.register('w3', LESSON_DATA); return; }
    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://stevensolbach.de/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

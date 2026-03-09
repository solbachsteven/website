// Win³ Kurs - Lektion 1: Wer bin ich?
// Einzeiler: <script src="https://stevensolbach.de/win3-lektionen/wl-w1.js"></script>
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
            { type: "text", content: "Du stehst unter der Dusche, und mitten im Shampoo meldet sich eine Stimme: \u201eDu hättest gestern anders reagieren sollen.\u201c Eine halbe Sekunde später eine zweite: \u201eLass es gut sein, ist doch vorbei.\u201c Und dann eine dritte, leiser: \u201eAber was, wenn sie jetzt schlecht von dir denkt?\u201c" },
            { type: "text", content: "Die meisten Menschen halten diese Stimmen für sich selbst. Für das eigene Denken, den eigenen Verstand, die eigene Persönlichkeit. Aber wenn du genau hinschaust, merkst du etwas Seltsames: Die Stimmen widersprechen sich. Die eine will vorwärts, die andere bremst. Die eine sagt \u201etrau dich\u201c, die andere sagt \u201ebloß nicht\u201c. Wenn das alles du wärst, müsstest du dich permanent selbst widersprechen." },
            { type: "text", content: "Die Wahrheit ist einfacher und gleichzeitig weitreichender: Das sind Teile von dir, aber sie sind nicht du." },

            { type: "divider" },

            // --- Die Teile ---
            { type: "heading", level: 2, content: "Die Teile" },
            { type: "text", content: "In der letzten Lektion habe ich Richard Schwartz vorgestellt, den Familientherapeuten, der seine Patienten wörtlich nahm, als sie sagten: \u201eEin Teil von mir will das, ein anderer Teil will das Gegenteil.\u201c Er fing an, diese Teile direkt anzusprechen, und sie antworteten." },
            { type: "text", content: "Was er über Jahrzehnte bei tausenden von Menschen beobachtete, war immer dasselbe Muster: Wir tragen verschiedene innere Anteile in uns. Einen Kritiker, der uns antreibt und nie zufrieden ist. Einen Ängstlichen, der Risiken sieht, wo andere Chancen sehen. Einen Perfektionisten, der lieber gar nicht anfängt, als etwas Mittelmäßiges abzuliefern. Einen Rebellen, der alles über den Haufen werfen will." },
            { type: "text", content: "Diese Anteile sind keine Fehler. Sie sind Schutzstrategien, die irgendwann einmal einen Zweck erfüllt haben. Das Kind, das lernte, es allen recht zu machen, weil Widerspruch bestraft wurde, trägt diesen Anpassungs-Teil auch mit dreißig und vierzig noch in sich. Er ist nicht mehr nötig, aber er weiß das nicht. Er tut weiterhin, was er immer getan hat: schützen." },
            { type: "text", content: "Das Problem ist nicht, dass wir Teile haben. Das Problem ist, dass wir sie für uns selbst halten." },

            { type: "divider" },

            // --- Das Selbst ---
            { type: "heading", level: 2, content: "Das Selbst" },
            { type: "text", content: "Schwartz beobachtete etwas, das er nicht erwartet hatte. Wenn in einer Therapiesitzung alle Teile bereit waren, einen Schritt zurückzutreten - der Kritiker, der Ängstliche, der Kontrolleur -, dann tauchte bei den Patienten ein Zustand auf, der sich erstaunlich ähnlich anfühlte. Unabhängig von Alter, Herkunft oder Lebensgeschichte. Ein Zustand von Ruhe, Klarheit und Mitgefühl, der nicht erzeugt oder trainiert werden musste. Er war einfach da, sobald die Teile Platz machten." },
            { type: "text", content: "Schwartz nannte es das Selbst." },
            { type: "text", content: "Er beschrieb dreizehn natürliche Qualitäten dieses Selbst, die in zwei Gruppen zusammengefasst werden: die acht C's - Calm, Clarity, Curiosity, Compassion, Confidence, Courage, Creativity, Connectedness - und die fünf P's - Presence, Patience, Persistence, Perspective, Playfulness." },
            { type: "text", content: "Das Entscheidende an diesen Qualitäten: Sie sind keine Ziele. Du musst sie nicht entwickeln, nicht üben, nicht verdienen. Sie sind bereits da - verdeckt von den Schutzschichten, die sich im Laufe eines Lebens aufgebaut haben. Erinnere dich an das Bild aus der letzten Lektion: Die Sonne scheint immer, auch wenn der Himmel schwarz ist vor Wolken. Die Wolken sind die Teile, die Sonne ist das Selbst." },
            { type: "text", content: "Und genau das macht den Unterschied zu fast jedem anderen Ansatz, der dir sagt, du müsstest an dir arbeiten, dich verbessern, eine bessere Version deiner selbst werden. IFS sagt das Gegenteil: Du bist schon da. Du musst nur das aus dem Weg räumen, was dich verdeckt." },

            { type: "divider" },

            // --- Erwachen ---
            { type: "heading", level: 2, content: "Erwachen" },
            { type: "text", content: "\u201eErwachen\u201c ist ein Wort, das viel Ballast mit sich trägt. Es klingt nach Räucherstäbchen und Lotussitz, nach einem blitzartigen Erleuchtungserlebnis, das das gesamte Leben von einer Sekunde auf die nächste verändert." },
            { type: "text", content: "In Wirklichkeit ist Erwachen viel unspektakulärer: Es bedeutet, den Unterschied zu bemerken zwischen den Teilen und dem Selbst. Zwischen den Stimmen unter der Dusche und dem, was die Stimmen hört." },
            { type: "text", content: "Ramana Maharshi, ein indischer Weiser des 20. Jahrhunderts, wurde berühmt für eine einzige Frage:" },
            { type: "emphasis", content: "Wer bin ich?" },
            { type: "text", content: "Er meinte damit keine philosophische Übung und kein intellektuelles Rätsel. Er meinte es als Einladung, die Aufmerksamkeit nach innen zu richten. Wer ist das, der gerade denkt? Wer ist das, der die Stimmen hört? Wer ist das, der sich Sorgen macht, der plant, der urteilt?" },
            { type: "text", content: "Wenn du dieser Frage folgst, passiert etwas Merkwürdiges: Du findest keinen Denker. Du findest Gedanken, aber niemanden, der sie denkt. Du findest Gefühle, aber niemanden, der sie hat. Du findest Meinungen, Erinnerungen, Pläne - aber kein festes, greifbares Ich, dem das alles gehört." },
            { type: "text", content: "Was du stattdessen findest, ist etwas, das sich schwer in Worte fassen lässt: ein stilles Gewahrsein, das all diese Inhalte kennt, ohne selbst ein Inhalt zu sein. Die Teile kommen und gehen, aber das, was sie bemerkt, bleibt." },
            { type: "text", content: "Das ist das Selbst, von dem Schwartz spricht. Und es ist genau das, worauf Ramana Maharshi zeigt." },

            { type: "divider" },

            // --- Der Bildschirm und der Film ---
            { type: "heading", level: 2, content: "Der Bildschirm und der Film" },
            { type: "text", content: "Ramana Maharshi nutzte ein Bild, das bis heute eine der klarsten Beschreibungen für diesen Unterschied ist: die Kinoleinwand." },
            { type: "text", content: "Auf einer Leinwand laufen Filme. Liebesfilme, Actionfilme, Dramen, Komödien. Auf der Leinwand brennen Häuser, fließen Tränen, explodieren Bomben, küssen sich Menschen. Aber die Leinwand selbst wird nie nass, nie heiß, nie traurig. Sie bleibt, was sie ist, egal welcher Film gerade läuft. Und wenn der Film zu Ende ist, ist die Leinwand immer noch da - unverändert, unberührt, bereit für den nächsten Film." },
            { type: "text", content: "Wir verwechseln uns mit dem Film. Wir glauben, wir sind die Geschichte, die gerade läuft - die Rolle, der Beruf, die Beziehung, die Sorgen, die Erfolge. Und wenn der Film dramatisch wird, leiden wir, weil wir vergessen haben, dass wir die Leinwand sind." },
            { type: "text", content: "Die Teile, von denen Schwartz spricht, sind Figuren im Film. Der Kritiker ist eine Figur. Der Ängstliche ist eine Figur. Der Ehrgeizige, der Kontrolleur, der Anpasser - alles Figuren, die ihre Rollen spielen, manchmal überzeugend, manchmal übertrieben, aber immer auf der Leinwand." },
            { type: "text", content: "Das Selbst ist die Leinwand." },
            { type: "text", content: "Diese Unterscheidung klingt abstrakt, hat aber praktische Konsequenzen. Wenn du dich mit einer Figur im Film verwechselst, bist du ihr ausgeliefert. Wenn der Ängstliche Angst hat, hast du Angst. Wenn der Kritiker urteilt, glaubst du das Urteil. Aber wenn du merkst, dass du die Leinwand bist, ändert sich deine Beziehung zu den Figuren. Du kannst den Ängstlichen hören, ohne von der Angst überwältigt zu werden. Du kannst den Kritiker bemerken, ohne sein Urteil für die Wahrheit zu halten." },
            { type: "text", content: "Das bedeutet nicht, dass die Gefühle verschwinden. Auf der Leinwand laufen weiterhin Filme, und manche davon sind intensiv. Aber du weißt, wer du bist: nicht der Film, sondern das, was den Film möglich macht." },

            { type: "divider" },

            // --- Übung ---
            { type: "heading", level: 2, content: "Übung: Drei Wege zur selben Frage" },
            { type: "text", content: "Diese Woche geht es darum, die Unterscheidung zwischen den Teilen und dem Selbst nicht nur zu verstehen, sondern zu erleben. Wähle eine der drei Optionen, die am besten zu dir passt. Es gibt keine richtige Wahl - nur deine." },

            { type: "heading", level: 3, content: "Option A: Die \u201eIch bin\u201c-Kontemplation (5 Minuten Stille)" },
            { type: "text", content: "Setz dich hin, schließ die Augen und stell dir leise die Frage: \u201eWer bin ich?\u201c Nicht als Frage, auf die du eine Antwort erwartest, sondern als Einladung, nach innen zu schauen. Wenn Antworten kommen - \u201eIch bin Mutter\u201c, \u201eIch bin Angestellter\u201c, \u201eIch bin ängstlich\u201c -, bemerk sie und frag erneut: Und wer ist es, der das weiß? Bleib bei der Frage, nicht bei den Antworten. Fünf Minuten reichen." },

            { type: "heading", level: 3, content: "Option B: \u201eWer denkt das?\u201c im Alltag (passiv, über die Woche verteilt)" },
            { type: "text", content: "Wenn du diese Woche merkst, dass eine innere Stimme besonders laut ist - der Kritiker, der Zweifler, der Sorgenträger -, halte kurz inne und frag dich: \u201eWer bemerkt diese Stimme gerade?\u201c Du musst nichts tun, nichts verändern, nichts lösen. Nur bemerken, dass da jemand ist, der bemerkt." },

            { type: "heading", level: 3, content: "Option C: Stimmen-Inventar (aktiv, 15 Minuten Journaling)" },
            { type: "text", content: "Nimm ein Blatt Papier und schreib die inneren Stimmen auf, die du in den letzten Tagen gehört hast. Gib jeder einen Namen oder eine Rolle: der Antreiber, der Skeptiker, die Perfektionistin, der Harmoniesüchtige. Beschreib kurz, was jede Stimme typischerweise sagt und in welchen Situationen sie auftaucht. Wenn du fertig bist, schau auf die Liste und stell dir eine Frage: Wer hat diese Liste geschrieben? Wer kennt alle diese Stimmen, ohne selbst eine von ihnen zu sein?" },

            { type: "divider" },

            // --- Progress + Checklist + Signoff ---
            { type: "progress-bar", label: "Lektion 1 von 9", percent: 11, detail: "Phase 1: Be Yourself" },

            { type: "checklist", items: [
                "Lektion vollständig gelesen",
                "Eine der drei Übungen mindestens einmal durchgeführt",
                "Den Unterschied zwischen Teilen und Selbst erlebt"
            ]},

            { type: "signoff", text: "In W0 hast du die zwei Karten kennengelernt: die Innenwelt-Karte (IFS) und die Entwicklungs-Karte (Hawkins). Diese Woche hast du die erste Karte genauer studiert - das Selbst und die Teile. In W2 wirst du deine innere Welt direkt erkunden und die Teile kennenlernen, die dein Leben lenken, ohne dass du es merkst.", name: "Steven" }
        ]
    };

    if (window.__WL_KURS) { window.__WL_KURS.register('w1', LESSON_DATA); return; }
    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://stevensolbach.de/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

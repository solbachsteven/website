// Win³ Kurs - Lektion 6: Dein eigener Coach
// Einzeiler: <script src="https://stevensolbach.de/win3-lektionen/wl-w6.js"></script>
(function() {
    if (window.__WL_W6) return;
    window.__WL_W6 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "LEKTION 6",
            title: "Dein eigener Coach",
            subtitle: "Phase 2: Do Good"
        },
        sections: [
            // --- Intro ---
            { type: "text", content: "In den letzten Wochen ist einiges passiert. Wir haben Anteile kennengelernt, die seit Jahren das Steuer halten, ohne dass wir es bemerkt haben. Wir haben sie auf der Hawkins-Skala eingeordnet und zum ersten Mal gesehen, auf welcher Ebene sie operieren. Wir haben gelernt, Gefühle durchzulassen, statt sie zu unterdrücken oder wegzudrücken. Wir haben einem Anteil liebevolle Aufmerksamkeit geschenkt, vielleicht zum ersten Mal." },
            { type: "text", content: "Und trotzdem: Irgendwann kommt der Moment, in dem man morgens aufwacht und alles genauso ist wie vorher. Die Einsicht ist da. Das Wissen ist da. Aber zwischen dem, was wir verstanden haben, und dem, was sich im Alltag tatsächlich verändert, liegt ein Abstand, den reines Verstehen nicht überbrückt." },

            { type: "divider" },

            // --- Der Graben ---
            { type: "heading", level: 2, content: "Der Graben" },
            { type: "text", content: "Die alten Griechen hatten ein Wort dafür: Akrasia - das Handeln gegen besseres Wissen. Wir wissen, dass Bewegung uns guttut, und bleiben auf dem Sofa. Wir wissen, dass ein Gespräch längst überfällig ist, und schieben es auf. Wir wissen, welcher Anteil uns gerade steuert, und lassen ihn trotzdem machen." },
            { type: "text", content: "Das ist kein Versagen. Das ist die menschliche Grundausstattung." },
            { type: "text", content: "Verstehen, Fühlen und Handeln sind drei verschiedene Vorgänge, und die meisten Menschen beherrschen einen davon gut und vernachlässigen die anderen. Manche verstehen alles, können ihre Muster benennen wie ein Lehrbuch, analysieren sich brillant - und trotzdem ändert sich nichts. Andere fühlen tief und intensiv, sind im Kontakt mit ihrem Innenleben - aber es bleibt beim Fühlen, ohne dass daraus eine Richtung entsteht. Und wieder andere handeln ständig, sind immer beschäftigt, immer produktiv - ohne zu wissen, wohin und warum." },
            { type: "text", content: "Zwischen Erkenntnis und Handlung liegt ein Graben. Er ist nicht breit, aber tief genug, dass die meisten Menschen davor stehen bleiben - nicht weil ihnen der Wille fehlt, sondern weil Wissen allein keine Brücke baut." },
            { type: "text", content: "Diese Lektion baut die Brücke." },

            { type: "divider" },

            // --- Die Selbstcoaching-Schleife ---
            { type: "heading", level: 2, content: "Die Selbstcoaching-Schleife" },
            { type: "text", content: "Was wir in den letzten Wochen gelernt haben - Anteile erkennen, Gefühle durchlassen, den eigenen Standort bestimmen -, das waren einzelne Werkzeuge. Jetzt verbinden wir sie zu einem Kreislauf, der auf jedes Thema im Leben anwendbar ist: Verstehen, Fühlen, Handeln." },
            { type: "text", content: "Es ist eine Schleife, kein gerader Weg. Nach dem Handeln verstehen wir oft etwas Neues, etwas Tieferes, und der nächste Durchlauf beginnt." },

            { type: "heading", level: 3, content: "Verstehen: Was ist eigentlich los?" },
            { type: "text", content: "Der erste Schritt klingt banal, ist aber der, an dem die meisten scheitern. Denn was wir für Verständnis halten, ist oft schon Interpretation." },
            { type: "text", content: "Ein Beispiel: \"Mein Chef hat mich in der Besprechung übergangen.\" Das klingt wie ein Fakt, ist aber eine Geschichte. Der Fakt wäre: \"Mein Chef hat drei Kolleginnen nach ihrer Meinung gefragt und mich nicht.\" Alles andere - übergangen, absichtlich, weil er mich nicht ernst nimmt - ist Deutung. Und Deutungen fühlen sich an wie Wahrheiten, besonders wenn sie alte Wunden berühren." },
            { type: "text", content: "Byron Katie hat eine Methode entwickelt, die sie \"The Work\" nennt. Im Kern besteht sie aus einer einzigen Frage: \"Ist das wahr?\" Und wenn die Antwort Ja lautet, kommt die zweite: \"Kannst du mit absoluter Sicherheit wissen, dass es wahr ist?\"" },
            { type: "text", content: "Die meisten stressauslösenden Gedanken überleben die zweite Frage nicht. Nicht weil sie erfunden wären, sondern weil die absolute Sicherheit fehlt. Der Abstand zwischen \"Ich glaube das\" und \"Ich weiß das\" ist genau der Raum, in dem Klarheit entsteht." },
            { type: "text", content: "\"The Work\" muss keine formale Praxis werden. Aber die Gewohnheit, bei einem belastenden Gedanken innezuhalten und zu fragen \"Ist das ein Fakt oder eine Interpretation?\" verändert, wie wir mit uns selbst umgehen." },

            { type: "heading", level: 3, content: "Fühlen: Was löst das in mir aus?" },
            { type: "text", content: "Wenn der Fakt von der Interpretation getrennt ist, bleibt trotzdem etwas übrig. Ein Ziehen in der Brust, ein Knoten im Magen, eine Anspannung in den Schultern. Das ist der Anteil, der sich meldet." },
            { type: "text", content: "Hier kommt Letting-Go aus W5 zum Einsatz. Statt das Gefühl zu analysieren (\"Warum fühle ich mich so?\"), gehen wir in den Körper. Wo sitzt es? Wie fühlt es sich an? Welcher Anteil ist das - der Kritiker, der Verlassene, der Perfektionist?" },
            { type: "text", content: "Das Gefühl muss nicht gelöst und nicht verstanden werden. Es darf da sein. Das ist der ganze Schritt: bemerken, im Körper spüren, erlauben. Was in W5 als eigenständige Übung gelernt wurde, wird hier zum Werkzeug für den Alltag." },
            { type: "text", content: "Manchmal löst sich etwas dabei. Manchmal nicht. Beides ist in Ordnung. Der Punkt ist, dass das Gefühl aufhört zu steuern, auch wenn es bleibt." },

            { type: "heading", level: 3, content: "Handeln: Was ist der kleinste nächste Schritt?" },
            { type: "text", content: "Jetzt kommt der Moment, an dem die meisten Ansätze versagen. Verstanden, was los ist. Gefühlt, was da ist. Und dann sagt jemand: \"Jetzt musst du ins Handeln kommen.\" Und der innere Reaktion ist: Ja, morgen." },
            { type: "text", content: "Das Problem mit \"ins Handeln kommen\" ist, dass es nach etwas Großem klingt. Ein Gespräch führen, eine Kündigung einreichen, eine Gewohnheit ändern. Der Widerstand, der dabei aufkommt, ist keine Faulheit - es ist ein Anteil, der Angst hat. Und gegen Angst hilft kein Motivationsvideo." },
            { type: "text", content: "Was hilft: den Schritt so klein machen, dass der Widerstand keine Chance hat." },
            { type: "text", content: "Nicht \"Ich fange an, Sport zu machen\", sondern \"Ich lege heute Abend die Laufschuhe neben die Tür.\" Nicht \"Ich spreche das Problem an\", sondern \"Ich schreibe mir auf, was ich sagen will.\" Nicht \"Ich meditiere jeden Morgen\", sondern \"Ich setze mich hin und atme dreimal bewusst.\"" },
            { type: "text", content: "Wenn auch das zu groß wirkt, ist das ein Signal: Der Verstehen- oder Fühlen-Schritt ist noch nicht abgeschlossen. Dann geht es zurück in die Schleife - nicht als Rückschritt, sondern als notwendige Runde." },

            { type: "divider" },

            // --- KI als Coaching-Partner ---
            { type: "heading", level: 2, content: "KI als Coaching-Partner" },
            { type: "text", content: "In W3 haben wir die Ankerpraktik kennengelernt - das tägliche Schreiben, das hilft, den Tag bewusst zu beginnen. Jetzt wird sie zum Coaching-Ritual." },
            { type: "text", content: "Die Selbstcoaching-Schleife funktioniert auch mit einer KI als Gesprächspartner. Kein Ersatz für einen Menschen, aber ein Sparringspartner, der um drei Uhr morgens genauso geduldig zuhört wie um drei Uhr nachmittags. Drei Prompts, einer pro Schritt:" },

            { type: "heading", level: 3, content: "Verstehen" },
            { type: "copyblock", content: "Hier ist eine Situation, die mich belastet: [Situation]. Hilf mir, Fakten von Interpretationen zu trennen. Was weiß ich sicher, und was ist meine Deutung?" },

            { type: "heading", level: 3, content: "Fühlen" },
            { type: "copyblock", content: "Ich spüre [körperliche Empfindung] und fühle [Gefühl]. Welcher innerer Anteil könnte sich da melden? Was braucht er?" },

            { type: "heading", level: 3, content: "Handeln" },
            { type: "copyblock", content: "Ich verstehe jetzt besser, was los ist und habe das Gefühl zugelassen. Was ist ein konkreter nächster Schritt, den ich heute tun kann - so klein, dass ich keine Ausrede finde, ihn nicht zu tun?" },

            { type: "text", content: "Das sind Ausgangspunkte, keine Formeln. Verändern, Teile weglassen, ergänzen - alles erlaubt. Die KI wird besser, je ehrlicher man mit ihr ist. Sie hat kein Ego, das urteilt, und kein Interesse daran, jemanden gut aussehen zu lassen." },

            { type: "divider" },

            // --- Was Selbstcoaching nicht kann ---
            { type: "heading", level: 2, content: "Was Selbstcoaching nicht kann" },
            { type: "text", content: "Es gibt eine Grenze, und es wäre unehrlich, sie zu verschweigen." },
            { type: "text", content: "Selbstcoaching funktioniert gut bei dem, was im Alltag auftaucht: wiederkehrende Muster, emotionale Reaktionen, Entscheidungen, die vor sich hergeschoben werden. Es funktioniert weniger gut bei Material, das so tief verschüttet ist, dass wir allein nicht drankommen." },
            { type: "text", content: "Tiefe Traumata sitzen in Schichten, die der bewusste Verstand allein nicht erreicht. Eingebrannte Muster - die Geschichten, die das Nervensystem seit der Kindheit erzählt - brauchen manchmal einen Zeugen, der von außen sieht, was von innen unsichtbar bleibt. Und manche blinden Flecken sind per Definition unsichtbar: Wir können nicht hinterfragen, was wir für so selbstverständlich halten, dass wir es gar nicht bemerken." },
            { type: "text", content: "Dafür gibt es Therapeuten, Coaches und Menschen, die diesen Weg schon gegangen sind. Selbstcoaching ergänzt ihre Arbeit. Es ersetzt sie nicht." },

            { type: "divider" },

            // --- Übung: Erster Selbstcoaching-Durchlauf ---
            { type: "heading", level: 2, content: "Übung: Erster Selbstcoaching-Durchlauf (30-45 Minuten)" },
            { type: "text", content: "Nimm dir ein aktuelles Thema - etwas, das dich gerade beschäftigt, das sich aber bewältigbar anfühlt. Kein Lebensthema, kein Trauma. Etwas Konkretes aus den letzten Tagen: eine Entscheidung, die du aufschiebst, ein Gespräch, das du vermeidest, eine Gewohnheit, die du ändern willst." },

            { type: "steps", title: "Selbstcoaching-Durchlauf", items: [
                { title: "Verstehen (10-15 Min)", description: "Schreib die Situation auf. Geh deinen Text durch und unterstreiche alles, was Interpretation ist. Was bleibt als Fakt? Frag dich bei jedem belastenden Gedanken: \"Ist das wahr? Kann ich mit absoluter Sicherheit wissen, dass es wahr ist?\"" },
                { title: "Fühlen (10-15 Min)", description: "Schließ die Augen. Spür in deinen Körper hinein. Wo meldet sich etwas? Was für eine Empfindung ist das - Druck, Enge, Hitze, Schwere? Lass es da sein. Gib dem Gefühl Raum, wie du es in W5 geübt hast." },
                { title: "Handeln (10-15 Min)", description: "Öffne die Augen. Schreib auf: Was ist der kleinste nächste Schritt, den ich heute tun kann? Wenn dir nichts einfällt oder alles zu groß wirkt, frag dich: Was müsste ich zuerst verstehen oder fühlen, damit ein Schritt möglich wird? Dann geh zurück in die Schleife." }
            ]},

            { type: "text", content: "<strong>Optional:</strong> Nutze die drei KI-Prompts als Begleitung. Jeden Schritt zuerst allein versuchen und die KI danach als Spiegel nutzen." },

            { type: "divider" },

            // --- Ankerpraktik ---
            { type: "heading", level: 2, content: "Ankerpraktik: Das Coaching-Ritual" },
            { type: "text", content: "Ab dieser Woche bekommt die Ankerpraktik eine neue Struktur. Drei Schichten, die den drei Schritten der Selbstcoaching-Schleife entsprechen:" },
            { type: "text", content: "<strong>Schicht 1: Was beschäftigt mich?</strong> Das ist der Verstehen-Schritt. Was ist heute präsent? Was davon ist Fakt, was ist Geschichte?" },
            { type: "text", content: "<strong>Schicht 2: Was sehe ich nicht?</strong> Das ist der Fühlen-Schritt. Was liegt unter der Oberfläche? Welcher Anteil meldet sich, den ich noch nicht bemerkt habe?" },
            { type: "text", content: "<strong>Schicht 3: Was tue ich als Nächstes?</strong> Das ist der Handeln-Schritt. Ein konkreter Schritt, so klein wie nötig." },
            { type: "text", content: "Fünf Minuten am Morgen reichen. Nicht jede Schicht braucht jeden Tag gleich viel Raum. Manchmal genügt ein Satz pro Schicht. An anderen Tagen füllen sich drei Seiten zur ersten Schicht, und die dritte fällt aus. Beides ist richtig." },

            { type: "anchorpractice", layers: [
                { label: "Schicht 1 (Verstehen)", prompt: "Was beschäftigt mich? Was davon ist Fakt, was ist Geschichte?" },
                { label: "Schicht 2 (Fühlen)", prompt: "Was sehe ich nicht? Welcher Anteil meldet sich unter der Oberfläche?" },
                { label: "Schicht 3 (Handeln)", prompt: "Was tue ich als Nächstes? Ein konkreter Schritt, so klein wie nötig." }
            ]},

            { type: "divider" },

            // --- Closing ---
            { type: "emphasis", content: "Mit dieser Lektion schließt sich Phase 2 des Kurses. In W4 hast du erkannt, was dich festhält. In W5 hast du gelernt, es zu fühlen und loszulassen. Und jetzt hast du einen Kreislauf, der beides mit Handeln verbindet - anwendbar auf jedes Thema, in jeder Situation, so oft du ihn brauchst. In Phase 3 beginnt etwas Neues: Die Energie, die in Phase 1 und 2 freigesetzt wurde, wird schöpferisch. Wir richten den Blick nach außen und fragen: Was machst du mit dem, was du hast?" },

            { type: "divider" },

            // --- Progress + Checklist + Signoff ---
            { type: "progress-bar", label: "Lektion 6 von 9", percent: 67, detail: "Phase 2: Do Good" },

            { type: "checklist", items: [
                "Lektion vollständig gelesen",
                "Selbstcoaching-Durchlauf durchgeführt (30-45 Min)",
                "KI-Prompts ausprobiert",
                "Ankerpraktik: Coaching-Ritual begonnen"
            ]},

            { type: "signoff", text: "Phase 2 ist abgeschlossen. In W4 erkannt, in W5 gefühlt, in W6 gehandelt. Phase 3 beginnt: Was bringst du in die Welt?", name: "Steven" }
        ]
    };

    if (window.__WL_KURS) { window.__WL_KURS.register('w6', LESSON_DATA); return; }
    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://stevensolbach.de/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

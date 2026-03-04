// Win³ Kurs - Woche 4: Deine Fesseln
// Einzeiler: <script src="https://solbachsteven.github.io/website/win3-lektionen/wl-w4.js"></script>
(function() {
    if (window.__WL_W4) return;
    window.__WL_W4 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "WOCHE 4",
            title: "Deine Fesseln",
            subtitle: "Phase 2: Do Good"
        },
        sections: [
            // --- Intro ---
            { type: "text", content: "Du verstehst dein Problem." },
            { type: "text", content: "Das ist das Verr\u00fcckte daran. Du hast das Ding durchgekaut. Nachgelesen. \u00dcberlegt. Du kannst es deinen Freunden erkl\u00e4ren. Du kannst es auf zwei Arten analysieren, auf drei Ebenen verstehen. Du bist der kl\u00fcgste Gefangene im Raum." },
            { type: "emphasis", content: "Und trotzdem: sitzt du fest." },
            { type: "text", content: "Nicht weil du dumm bist. Nicht weil du faul bist. Nicht weil dir Disziplin fehlt. Sondern weil Verstehen und Befreien zwei verschiedene Dinge sind. Du verwechselst sie. Fast alle tun das. Und dann verbringen sie Jahre damit, ihre Ketten zu analysieren, statt sie abzulegen." },
            { type: "text", content: "Phase 1 war Erkenntnis. Du hast dein Selbst kennengelernt. Die inneren Anteile gesp\u00fcrt. Angefangen zu schreiben." },
            { type: "emphasis", content: "Phase 2 ist Befreiung." },
            { type: "text", content: "Das Selbst wird jetzt aktiv. Nicht mehr beobachtend. Es sieht, wo die Anteile feststecken. Es wei\u00df, was sie brauchen. Und es gibt ihnen das. Nicht sp\u00e4ter. Jetzt." },
            { type: "text", content: "Diese Woche: Die Landschaft sehen. Ehrlich. Ohne Besch\u00f6nigung." },

            { type: "divider" },

            // --- Emotionen sind keine Gedanken ---
            { type: "heading", level: 2, content: "Emotionen sind keine Gedanken" },
            { type: "text", content: "Hier liegt der Fehler." },
            { type: "text", content: "Du denkst, die Blockaden sind Gedankenfehler. Also rationalisierst du sie weg. Du argumentierst gegen deine Angst. Du erkl\u00e4rst dir selbst, warum deine Wut keinen Grund hat. Du versuchst dich selbst zu \u00fcberzeugen, dass du es schaffen kannst." },
            { type: "emphasis", content: "Nichts passiert." },
            { type: "text", content: "Blockaden sitzen im Kopf und im K\u00f6rper. Im Nervensystem. Seit Jahren aktiv. Manchmal seit Jahrzehnten. Der Fehler ist zu glauben, dass sie nur Gedankenfehler sind. Dass du sie wegdenken kannst. Scham weg-argumentieren. Trauer analysieren. Nein. Die emotionale Ladung sitzt tiefer." },
            { type: "text", content: "Du kennst die Anteile aus Woche 2. Jeder tr\u00e4gt eine emotionale Ladung. Der \u00e4ngstliche Anteil operiert nicht auf der Ebene von falschen Gedanken. Er operiert auf Furcht. Der w\u00fctende auf Wut. Der resignierte auf Apathie." },
            { type: "text", content: "Sie denken nicht falsch. Sie f\u00fchlen etwas, das noch nicht verarbeitet ist." },
            { type: "text", content: "Das erkl\u00e4rt, warum all die B\u00fccher dir nicht geholfen haben. Sie setzten am falschen Ort an." },

            { type: "divider" },

            // --- Hawkins-Skala ---
            { type: "heading", level: 2, content: "Die Hawkins-Skala als Befreiungskarte" },
            { type: "text", content: "Du kennst die <strong>Hawkins-Karte</strong> schon. Scham unten. Frieden oben. Mit einer Schwelle bei 200: Mut." },
            { type: "text", content: "Jetzt ist die Karte ein Diagnose-Werkzeug. F\u00fcr dich. Nicht f\u00fcr die Menschheit. Wo genau steckst du fest?" },

            { type: "heading", level: 3, content: "Unter 200: Die Felder, die festhalten" },
            { type: "text", content: "Alles unter 200 arbeitet gegen dich. Nicht weil du schlecht bist. Diese Felder sind destruktiv." },
            { type: "text", content: "<strong>Scham (20)</strong> - \"Ich bin falsch.\" Die tiefste Ebene. Nicht \"Ich habe was Falsches getan\" - sondern \"Ich BIN falsch.\" Ein Anteil will unsichtbar sein. Versteckt sich. Die Botschaft: Wenn ich mich zeige, sto\u00dfen sie mich aus." },
            { type: "text", content: "<strong>Schuld (30)</strong> - \"Ich habe was Schlimmes getan.\" Schuld richtet sich nach innen. Ein Anteil bestraft sich. Er glaubt, er verdient nichts Besseres. Also sabotiert er sich selbst." },
            { type: "text", content: "<strong>Apathie (50)</strong> - \"Es ist sowieso egal.\" Resignation. Ein Anteil hat aufgegeben. Nicht aus Weisheit - aus Ersch\u00f6pfung. Er glaubt nicht mehr, dass sich etwas \u00e4ndert. Apathie sieht wie Faulheit aus. Ist es nicht." },
            { type: "text", content: "<strong>Trauer (75)</strong> - \"Ich habe verloren.\" Ein Anteil h\u00e4lt fest an dem, was war. An einer Beziehung, einer Version von sich selbst, einem Traum, der nicht wahr wurde. Trauer ist notwendig. Unverarbeitet wird sie zum Gef\u00e4ngnis." },
            { type: "text", content: "<strong>Angst (100)</strong> - \"Es k\u00f6nnte schlimm werden.\" Vermeidung. Kontrolle. Ein Anteil will alles absichern und verhindert dabei das Leben. Das Mantra: Bleib sitzen. Keine Risiken. Hier ist es sicher." },
            { type: "text", content: "<strong>Verlangen (125)</strong> - \"Ich brauche das.\" Abh\u00e4ngigkeit. Ein Anteil glaubt, dass etwas \u00c4u\u00dferes ihn vervollst\u00e4ndigt. Eine Beziehung. Anerkennung. Erfolg. Die n\u00e4chste Ablenkung. Die Botschaft: Ohne das bin ich nicht vollst\u00e4ndig." },
            { type: "text", content: "<strong>Wut (150)</strong> - \"Das ist nicht fair.\" Kampfenergie. Ein Anteil rennt gegen etwas an. Wut zeigt dir, wenn eine Grenze verletzt wurde. Das ist wertvoll. Als Dauerzustand frisst sie dich auf." },
            { type: "text", content: "<strong>Stolz (175)</strong> - \"Ich bin besser.\" Die subtilste Falle. Stolz f\u00fchlt sich gut an - viel besser als Scham oder Angst. Aber er braucht Vergleich. Du brauchst jemanden, der schlechter ist. Das macht dich abh\u00e4ngig." },

            { type: "heading", level: 3, content: "\u00dcber 200: Die Felder, die befreien" },
            { type: "text", content: "Ab 200 \u00e4ndert sich was. Die Energie dreht sich. Statt gegen dich zu arbeiten, arbeitet sie mit dir." },
            { type: "text", content: "<strong>Mut (200)</strong> - Die kritische Schwelle. \"Ich stelle mich dem.\" Hier \u00fcbernimmst du. Der Punkt, wo du sagst: Ab jetzt bin ich dran. Mut ist nicht: keine Angst. Es ist: Schritt trotz Angst." },
            { type: "text", content: "<strong>Neutralit\u00e4t (250)</strong> - \"Es ist, wie es ist.\" Du brauchst nicht mehr gegen alles zu k\u00e4mpfen. Nicht jede Meinung muss verteidigt werden. Nicht jede Situation muss bewertet werden. Das ist Gelassenheit." },
            { type: "text", content: "<strong>Bereitschaft (310)</strong> - \"Ich bin offen.\" Etwas hat sich ge\u00f6ffnet. Du willst nicht mehr nur \u00fcberleben. Du willst wachsen. Ein Anteil, der morgens aufsteht und neugierig ist." },
            { type: "text", content: "<strong>Akzeptanz (350)</strong> - \"Ich nehme es an.\" Nicht Resignation - Frieden. Du k\u00e4mpfst nicht mehr gegen Realit\u00e4t. Du arbeitest von dort aus. Die Kraft kommt, weil der Widerstand aufh\u00f6rt." },

            { type: "divider" },

            // --- Entscheidende Frage ---
            { type: "heading", level: 2, content: "Die entscheidende Frage" },
            { type: "text", content: "Jetzt wird's konkret." },
            { type: "text", content: "Wenn du wei\u00dft, wo dein Anteil sitzt, wei\u00dft du, was er braucht. Nicht alle brauchen das gleiche." },
            { type: "text", content: "<strong>Ein Anteil bei Scham oder Schuld</strong> braucht innere Eltern. Sicherheit. Bedingungslose Annahme. Die Erfahrung: Ich geh\u00f6re hierher. Ich bin nicht falsch." },
            { type: "text", content: "<strong>Ein Anteil bei Apathie</strong> braucht nur Pr\u00e4senz. Nicht repariert. Nicht motiviert. Nur da sein. Er hat geh\u00f6rt, dass alles besser werden muss. Er glaubt niemanden mehr. Er braucht jemanden, der nichts von ihm will." },
            { type: "text", content: "<strong>Ein Anteil bei Angst</strong> braucht einen inneren Coach. Mut. F\u00fchrung. Jemanden, der sagt: Ich verstehe. Und ich zeige dir, dass du sicher bist." },
            { type: "text", content: "<strong>Ein Anteil bei Wut</strong> braucht Verst\u00e4ndnis. Welche Grenze wurde verletzt? Wut zeigt dir, wo was nicht stimmt. Sie braucht \u00dcbersetzung: Was dahinter?" },
            { type: "text", content: "<strong>Ein Anteil bei Stolz</strong> braucht Ehrlichkeit. Vergleich ist keine St\u00e4rke. Du brauchst nicht besser zu sein." },
            { type: "callout", content: "Und hier die Realit\u00e4t: Dein Selbst kann all das. Es hat die Qualit\u00e4ten daf\u00fcr. Ruhe, Klarheit, Mitgef\u00fchl, Mut, Geduld - das sind nicht abstrakt. Das sind Werkzeuge. Dein Selbst ist der innere Elternteil. Der Coach. Das Verst\u00e4ndnis. Die Pr\u00e4senz. Alles in einem." },
            { type: "text", content: "In Woche 5 lernst du die Selbstf\u00fcrsorge - wie du diesen Anteilen gibst, was sie brauchen. In Woche 6 das Selbstcoaching - wie du dich durch den Prozess begleitest." },
            { type: "text", content: "Aber zuerst musst du wissen, wo du stehst." },

            { type: "divider" },

            // --- Warum Erkenntnis nicht reicht ---
            { type: "heading", level: 2, content: "Warum Erkenntnis nicht reicht" },
            { type: "text", content: "Erkenntnis operiert auf der Ebene von Verstand. Befreiung operiert auf der Ebene von Emotionen und K\u00f6rper. Das sind zwei verschiedene Stockwerke. Du kannst im oberen alles verstehen. Im unteren sitzt trotzdem die Angst." },
            { type: "text", content: "Du kannst wissen, dass deine Angst irrational ist. Du kannst wissen, dass du genug bist. Du kannst wissen, dass du nichts zu beweisen hast. Und es trotzdem f\u00fchlen. Jeden Tag." },
            { type: "text", content: "Das ist kein Versagen. Das ist kein Zeichen, dass du nicht genug getan hast. Das ist die Realit\u00e4t von zwei verschiedenen Ebenen." },
            { type: "highlight", title: "Der Unterschied", content: "Phase 1 hat dir Erkenntnis geschenkt. Du wei\u00dft, wer du bist. Du hast dein Selbst gesp\u00fcrt. Phase 2 arbeitet auf der zweiten Ebene. Du wirst die emotionalen Felder nicht nur verstehen. Du wirst sie f\u00fchlen, versorgen und loslassen." },
            { type: "text", content: "Das beginnt diese Woche. Mit Klarheit dar\u00fcber, wo du stehst." },

            { type: "divider" },

            // --- Übung ---
            { type: "heading", level: 2, content: "Pflicht\u00fcbung: Den lautesten Anteil kalibrieren" },
            { type: "text", content: "Das hier ist keine Theorie. Das ist dein Arbeitsblatt f\u00fcr die n\u00e4chsten zwei Wochen." },

            { type: "steps", title: "Den lautesten Anteil kalibrieren", items: [
                { title: "Den lautesten Anteil w\u00e4hlen", description: "Welcher innere Anteil ist gerade am aktivsten? Nicht der, von dem du denkst, du solltest an ihm arbeiten. Der, der sich am h\u00e4ufigsten meldet. Der, der am meisten Energie bindet. Der, der dich nachts wach h\u00e4lt oder morgens schwer macht." },
                { title: "Auf der Skala verorten", description: "Wo lebt dieser Anteil? Schau dir die Hawkins-Ebenen an. Nicht mit dem Kopf - mit dem Gef\u00fchl. Wenn dieser Anteil sich meldet, welche Ebene passt? Ist es eher Angst? Eher Scham? Eher Wut? Eher Trauer?" },
                { title: "Was braucht er?", description: "Basierend auf seiner Ebene: Was k\u00f6nnte diesem Anteil helfen? Innere Eltern? Einen inneren Coach? Verst\u00e4ndnis? Pr\u00e4senz? Lies die Zuordnung von oben noch mal durch und frag dich: Was davon klingt wahr f\u00fcr diesen Anteil?" },
                { title: "Aufschreiben", description: "Schreib es auf. Klar und einfach: Name oder Rolle des Anteils. Hawkins-Ebene. Was er braucht. Das ist dein Arbeitsblatt. Bewahre es auf - du brauchst es in Woche 5 und 6." }
            ]},

            { type: "divider" },

            // --- Ankerpraktik ---
            { type: "heading", level: 2, content: "Ankerpraktik diese Woche" },
            { type: "text", content: "Ab jetzt richtest du dein Schreiben gezielt auf Blockaden. Dein 3-Schichten-Journaling bekommt einen neuen Fokus:" },

            { type: "anchorpractice", layers: [
                { label: "Schicht 1 (Freies Schreiben)", prompt: "Schreib \u00fcber die Blockade, die dich am meisten festh\u00e4lt." },
                { label: "Schicht 2 (KI als Spiegel)", prompt: "Welche Hawkins-Ebene erkennst du in meinem Text?" },
                { label: "Schicht 3 (KI als Coach)", prompt: "Was braucht dieser Anteil von mir?" }
            ]},

            { type: "divider" },

            // --- Was kommt ---
            { type: "heading", level: 2, content: "Was kommt" },
            { type: "text", content: "Du wei\u00dft jetzt, was dich festh\u00e4lt. Du hast es nicht nur durchdacht. Du hast es verortet. Du hast deinem lautesten Anteil ein Gesicht gegeben. Eine Position auf der Karte. Eine erste Ahnung davon, was er braucht." },
            { type: "text", content: "N\u00e4chste Woche gehst du weiter. Du lernst, diesen Anteil zu f\u00fchlen, nicht nur zu verstehen. Zu versorgen. Zu integrieren, statt ihn loszuwerden." },
            { type: "text", content: "N\u00e4chste Woche hei\u00dft: Du bist okay. Auch wenn dein lautester Anteil das nicht glaubt." },

            { type: "divider" },

            // --- Progress + Checklist + Signoff ---
            { type: "progress-bar", label: "Woche 4 von 9", percent: 44, detail: "Phase 2: Do Good" },

            { type: "checklist", items: [
                "Lektion vollst\u00e4ndig gelesen",
                "Lautesten Anteil kalibriert (Rolle + Ebene + Bed\u00fcrfnis)",
                "Ankerpraktik mit Blockaden-Fokus durchgef\u00fchrt"
            ]},

            { type: "signoff", text: "Du wei\u00dft jetzt, wo du stehst. In W5 lernst du, was du damit tun kannst.", name: "Steven" }
        ]
    };

    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://solbachsteven.github.io/website/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

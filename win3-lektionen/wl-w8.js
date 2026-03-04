// Win³ Kurs - Woche 8: Dein Wert
// Einzeiler: <script src="https://solbachsteven.github.io/website/win3-lektionen/wl-w8.js"></script>
(function() {
    if (window.__WL_W8) return;
    window.__WL_W8 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "WOCHE 8",
            title: "Dein Wert",
            subtitle: "Phase 3: Make Money"
        },
        sections: [
            // --- Intro ---
            { type: "text", content: "Du wei\u00dft jetzt, was du in die Welt bringen kannst." },
            { type: "text", content: "Letzte Woche hast du vier Kreise gezeichnet. Du hast hingeschaut, was du liebst, was du kannst, was die Welt braucht. Vielleicht war dein Mapping unvollst\u00e4ndig. Vielleicht voller Fragezeichen. Vielleicht hast du zum ersten Mal schwarz auf wei\u00df gesehen, was du eigentlich schon l\u00e4ngst gesp\u00fcrt hast." },
            { type: "emphasis", content: "Und trotzdem." },
            { type: "text", content: "Da ist etwas zwischen dir und dem Tun. Ein leises Fl\u00fcstern. Manchmal kaum h\u00f6rbar. Manchmal ohrenbet\u00e4ubend." },
            { type: "emphasis", content: "\"Wer bin ich, dass ich daf\u00fcr Geld nehme?\"" },

            { type: "divider" },

            // --- Das Flüstern ---
            { type: "heading", level: 2, content: "Das Fl\u00fcstern, das du kennst" },
            { type: "text", content: "Es klingt vern\u00fcnftig. Bescheiden sogar. Und wer will schon arrogant wirken." },
            { type: "text", content: "Klingt gut. Ist aber gef\u00e4hrlich." },
            { type: "text", content: "Denn hinter diesem Fl\u00fcstern steckt nicht Bescheidenheit. Da steckt eine \u00dcberzeugung. Alte. Tief. \u00dcber deinen Wert." },
            { type: "text", content: "Und die meisten Menschen merken nicht einmal, dass sie da ist." },
            { type: "text", content: "Sie ist kein gro\u00dfes Drama. Das ist das Perfide. Sie ist unsichtbar. Eine Quittung, die du zahlst, ohne es zu merken. Jedes Mal, wenn du deine Arbeit unter Wert anbietest. Jedes Mal, wenn du \"Ach, das war doch nichts\" sagst, obwohl es etwas war. Jedes Mal, wenn du das Kompliment wegwischst. Jedes Mal, wenn du Ja sagst, aber kein Geld daf\u00fcr nimmst." },
            { type: "emphasis", content: "Das ist sie: die unsichtbare Quittung." },
            { type: "text", content: "Du zahlst sie t\u00e4glich. Nicht sichtbar. Nicht bewusst. Nur unbewusst. Diese Woche schauen wir, warum das passiert." },

            { type: "divider" },

            // --- Geld als Spiegel ---
            { type: "heading", level: 2, content: "Geld als Spiegel" },
            { type: "text", content: "Geld ist keine abstrakte Zahl. Es ist ein Spiegel." },
            { type: "text", content: "In W7 hast du auf die eine Seite geschaut: Was bringe ich in die Welt? Was ist mein Beitrag? Diese Woche schauen wir auf die andere Seite: Was bin ich bereit, daf\u00fcr anzunehmen?" },
            { type: "text", content: "Denn die meisten k\u00f6nnen Wert schaffen. Das Problem ist nicht das Schaffen. Das Problem ist das Annehmen. Sie tun es t\u00e4glich - privat, beruflich, \u00fcberall - nur nicht f\u00fcr sich selbst." },
            { type: "emphasis", content: "Woran sie scheitern, ist das Annehmen." },
            { type: "text", content: "Geld zeigt dir, wo du stehst in dieser Frage. Nicht weil Geld das Ma\u00df aller Dinge ist. Sondern weil Geld der Bereich ist, in dem deine \u00dcberzeugungen \u00fcber Selbstwert am deutlichsten sichtbar werden. Du kannst dir viel zutrauen - und dich trotzdem unwohl f\u00fchlen, wenn die Rechnung kommt." },
            { type: "text", content: "Da liegt eine tiefere Schicht. Unter dem, was du denkst, dass du denkst." },

            { type: "divider" },

            // --- Geld-Archetypen ---
            { type: "heading", level: 2, content: "Deine Geld-Archetypen" },
            { type: "text", content: "<strong>Deborah Price</strong>, Gr\u00fcnderin des Money Coaching Institute, hat acht Geld-Archetypen identifiziert - Muster, die auf der Tiefenpsychologie <strong>C.G. Jungs</strong> basieren. Jeder Mensch tr\u00e4gt mehrere davon in sich. Manche bewusst, manche unsichtbar." },
            { type: "text", content: "F\u00fcr diesen Kurs sind vier besonders relevant - die vier, die dich am h\u00e4ufigsten daran hindern, deinen Wert anzunehmen." },

            { type: "heading", level: 3, content: "Der Unschuldige" },
            { type: "text", content: "\"Geld ist mir nicht so wichtig.\" Der Unschuldige will sich sicher f\u00fchlen und vermeidet alles, was mit Geld zu tun hat. Er schaut nicht auf Kontoausz\u00fcge. Er plant nicht. Er hofft, dass es irgendwie gut wird." },
            { type: "text", content: "Was dahintersteckt: Nicht Gleichg\u00fcltigkeit - Angst. Angst, dass Geld ihn ver\u00e4ndern w\u00fcrde. Dass Reichtum und Integrit\u00e4t nicht zusammenpassen. Der Unschuldige hat entschieden: Wenn ich mich nicht damit besch\u00e4ftige, kann es mir nicht schaden." },
            { type: "text", content: "Die unsichtbare Quittung: Er bleibt dauerhaft unter seinen M\u00f6glichkeiten. Nicht weil er nicht kann - sondern weil er nicht hinschaut." },

            { type: "heading", level: 3, content: "Der M\u00e4rtyrer" },
            { type: "text", content: "\"Ich helfe gerne - das ist mir Belohnung genug.\" Der M\u00e4rtyrer gibt. Und gibt. Und gibt. Er ber\u00e4t umsonst. Er arbeitet \u00fcber seine Grenzen. Er sagt nie Nein, wenn jemand seine Hilfe braucht." },
            { type: "text", content: "Was dahintersteckt: Die \u00dcberzeugung, dass Helfen und Verdienen sich ausschlie\u00dfen. Dass wer Geld nimmt, nicht wirklich helfen will. Dass gute Menschen nicht reich sind. Der M\u00e4rtyrer hat Geben mit Sich-Aufopfern verwechselt." },
            { type: "text", content: "Die unsichtbare Quittung: Er brennt aus. Nicht weil er zu viel gibt - sondern weil er nichts zur\u00fccknimmt. Die Gleichung ist dauerhaft unbalanciert." },

            { type: "heading", level: 3, content: "Der Idealist" },
            { type: "text", content: "\"Wenn es perfekt ist, darf ich daf\u00fcr Geld nehmen.\" Price nennt diesen Archetyp den Creator/Artist - jemand, der seine innere Vision \u00fcber alles stellt. Im Kontext dieses Kurses zeigt er sich als Perfektionist: noch eine Qualifikation, noch ein Kurs, noch eine \u00dcberarbeitung. Nie fertig genug." },
            { type: "text", content: "Was dahintersteckt: Angst vor Bewertung. Die \u00dcberzeugung, dass er so wie er jetzt ist, nicht ausreicht. Dass das Werk erst perfekt sein muss, bevor er daf\u00fcr etwas verlangen darf." },
            { type: "text", content: "Die unsichtbare Quittung: Er startet nie. Oder er startet und sabotiert sich, indem er das Ergebnis f\u00fcr nicht gut genug erkl\u00e4rt. Die perfekte Version existiert nur in seinem Kopf - und dort bleibt sie auch." },

            { type: "heading", level: 3, content: "Das Opfer" },
            { type: "text", content: "\"Bei mir funktioniert das nicht.\" Das Opfer f\u00fchlt sich den Umst\u00e4nden ausgeliefert. Andere k\u00f6nnen das. Andere haben Gl\u00fcck. Bei ihm ist alles anders - schwieriger, unfairer, aussichtsloser." },
            { type: "text", content: "Was dahintersteckt: Tiefe \u00dcberzeugung, nicht genug zu sein. Nicht klug genug. Nicht talentiert genug. Oft eine Erfahrung, in der sein Wert nicht gesehen oder aktiv abgesprochen wurde. Das Opfer hat gelernt: Ich kann nichts daran \u00e4ndern. Also versuche ich es nicht." },
            { type: "text", content: "Die unsichtbare Quittung: Er lebt dauerhaft unter seinem Potenzial. Nicht weil die Welt ihn begrenzt - sondern weil er sich selbst begrenzt." },

            { type: "text", content: "Price beschreibt noch vier weitere Archetypen - den Krieger, den Narren, den Tyrannen und den Magier. Wenn dich das Thema tiefer interessiert, schau dir ihre Arbeit an. F\u00fcr unsere Zwecke reichen diese vier: Sie zeigen die h\u00e4ufigsten Muster, die Menschen daran hindern, ihren Wert anzunehmen." },

            { type: "divider" },

            // --- Welcher bist du? ---
            { type: "heading", level: 2, content: "Welcher bist du?" },
            { type: "text", content: "Lies sie nochmal durch. Wo zuckst du zusammen? Das ist deine Antwort." },
            { type: "text", content: "Es geht nicht um den, der sich richtig anh\u00f6rt. Es geht um den, der sich im Bauch anf\u00fchlt. Dein K\u00f6rper kennt die Antwort." },
            { type: "emphasis", content: "Genau da schau hin." },
            { type: "text", content: "Die meisten Menschen haben einen dominanten Archetyp und einen zweiten, der sich in bestimmten Situationen meldet. Der M\u00e4rtyrer im Privaten, der Perfektionist im Beruflichen. Der Vermeider bei gro\u00dfen Summen, der Unw\u00fcrdige bei pers\u00f6nlichen Themen." },
            { type: "text", content: "Erkenn das Muster. Das ist alles. Du kannst es nur ver\u00e4ndern, wenn du es siehst." },

            { type: "divider" },

            // --- Deine Geld-Geschichte ---
            { type: "heading", level: 2, content: "Deine Geld-Geschichte" },
            { type: "text", content: "Sie kommen nicht von nirgendwo. Das ist antrainiert. Durch tausend Momente, nicht durch einen." },
            { type: "text", content: "Was hast du als Kind \u00fcber Geld geh\u00f6rt?" },
            { type: "text", content: "\"Geld verdirbt den Charakter.\" \"Wir k\u00f6nnen uns das nicht leisten.\" \"Reiche Menschen sind gierig.\" \"Sei froh mit dem, was du hast.\" \"Geld w\u00e4chst nicht auf B\u00e4umen.\"" },
            { type: "text", content: "Solche S\u00e4tze. Beim Essen. Am Tisch. Wenn die Rechnung kam. Nebenbei. Immer." },
            { type: "text", content: "Nicht als Lektion pr\u00e4sentiert. Waren aber welche." },
            { type: "text", content: "Wer hat in deiner Familie das Geld verdient? Wie wurde dar\u00fcber gesprochen? War Geld ein Tabuthema? Ein Angstthema? Ein Machtthema? War es immer knapp - oder war es da, wurde aber trotzdem als Problem behandelt?" },
            { type: "text", content: "Was war deine erste eigene Erfahrung mit Geld verdienen? Dein erster Job, dein erstes Taschengeld, dein erstes eigenes Einkommen. Wie hat sich das angef\u00fchlt? Stolz? Scham? Erleichterung? Oder etwas dazwischen?" },
            { type: "text", content: "Das sind Wurzeln. Wenn jemand fragt \"Was kostet das?\", dann antwortet hier deine Geschichte mit." },

            { type: "divider" },

            // --- Kalibrieren ---
            { type: "heading", level: 2, content: "Kalibrieren - du kennst das" },
            { type: "text", content: "Du hast die Werkzeuge. Alle. W4 - emotionale Felder. W5 - loslassen. W6 - selbst coachen. Jetzt machst du dasselbe mit Geld." },
            { type: "text", content: "Nimm deinen st\u00e4rksten Geld-Satz. Den, der dir wahr vorkommt. \"Ich darf nicht.\" Oder: \"Ich bin nicht genug.\" Oder \"Geld ist schmutzig.\" Dein Satz." },
            { type: "text", content: "Und dann frag:" },
            { type: "text", content: "Auf welcher Ebene sitzt er? Ist das Scham - die tiefste Frequenz, das \"Ich bin falsch\"? Ist es Angst - \"Wenn ich mich zeige, werde ich verletzt\"? Ist es Stolz - \"Ich stehe \u00fcber so etwas wie Geld\"? Du kennst die <strong>Hawkins-Karte</strong>. Nutze sie." },
            { type: "text", content: "Welcher Anteil tr\u00e4gt diese \u00dcberzeugung? Ein innerer Besch\u00fctzer vielleicht - einer, der dich klein h\u00e4lt, um dich sicher zu halten? Gibt es einen Teil, der vor langer Zeit entschieden hat, dass es gef\u00e4hrlich ist, sich seinen Wert einzugestehen?" },
            { type: "text", content: "Was br\u00e4uchte dieser Anteil, um loslassen zu k\u00f6nnen?" },
            { type: "text", content: "Derselbe Prozess. Erkennen, f\u00fchlen, loslassen - das kennst du. Nur dass es jetzt um Geld geht." },

            { type: "divider" },

            // --- Du darfst ---
            { type: "heading", level: 2, content: "Du darfst" },
            { type: "text", content: "Was kommt jetzt, ist wichtig." },
            { type: "highlight", title: "Erlaubnis", content: "Du darfst Wert schaffen und Geld daf\u00fcr nehmen. Du darfst zeigen, was du kannst. Du darfst erfolgreich sein und gleichzeitig eine gute Person. Beides geht." },
            { type: "emphasis", content: "Erlaubnis ist ein einfaches Wort. Und f\u00fcr die meisten unm\u00f6glich." },
            { type: "text", content: "Weil die einzige Erlaubnis, die z\u00e4hlt, kommt von dir. Nicht von au\u00dfen. Nicht von mir. Von innen." },
            { type: "text", content: "Niemand kann dir die Erlaubnis geben. Das ist eine T\u00fcr, die nur von innen aufgeht. Du musst hindurchgehen." },
            { type: "text", content: "Vielleicht ist jetzt dein Moment. Nicht irgendwann. Jetzt." },
            { type: "emphasis", content: "Du darfst." },

            { type: "divider" },

            // --- Geld-Archetyp-Session ---
            { type: "heading", level: 2, content: "Deine Einladung: Geld-Archetyp-Session" },
            { type: "text", content: "Nimm dir 30 bis 45 Minuten. Journal. Dein Hawkins-Arbeitsblatt, falls du es magst." },

            { type: "steps", title: "Geld-Archetyp-Session", items: [
                { title: "Archetyp erkennen (10 Minuten)", description: "Lies die vier Archetypen nochmal. Welcher l\u00f6st die st\u00e4rkste Reaktion aus? Welcher hat dich innerlich zusammenzucken lassen? Das ist dein wahrscheinlich. Schreib auf, in welchen konkreten Situationen er sich zeigt." },
                { title: "\u00dcberzeugung finden (10 Minuten)", description: "Was ist der automatische Satz? \"Ich darf nicht...\" \"Ich bin nicht genug...\" Der, der wahr klingt. Der, bei dem du etwas sp\u00fcrst. Nicht den, der am kl\u00fcgsten klingt. Schreib ihn auf." },
                { title: "Kalibrieren (5 Minuten)", description: "Welche Hawkins-Ebene? Welcher Anteil spricht hier? Wie alt ist er? Wann hat er angefangen, das zu glauben?" },
                { title: "Selbstcoaching-Schleife (15 Minuten)", description: "Verstehen: Was besch\u00fctzt dieser Anteil? Wof\u00fcr war die \u00dcberzeugung n\u00f6tig? F\u00fchlen: Was sitzt darunter? Welches Gef\u00fchl? Handeln: Dein kleinster n\u00e4chster Schritt. Nicht gro\u00df. Winzig." }
            ]},

            { type: "divider" },

            // --- Ankerpraktik ---
            { type: "heading", level: 2, content: "Ankerpraktik diese Woche" },
            { type: "text", content: "Jeden Tag eine Frage:" },

            { type: "anchorpractice", layers: [
                { label: "Schicht 1 (Freies Schreiben)", prompt: "Wo hab ich mich selbst kleiner gemacht?" },
                { label: "Schicht 2 (Muster)", prompt: "Wo habe ich mir die Erlaubnis verweigert?" },
                { label: "Schicht 3 (Vertiefen)", prompt: "Was w\u00fcrde ich tun, wenn ich w\u00fcsste, dass ich es verdiene?" }
            ]},

            { type: "text", content: "Die dritte Frage ist die sch\u00e4rfste. Sie zeigt die L\u00fccke: was du tust versus was du tun w\u00fcrdest, wenn du dich nicht im Weg st\u00fcndest." },

            { type: "divider" },

            // --- Zum Schluss ---
            { type: "heading", level: 2, content: "Zum Schluss" },
            { type: "text", content: "Geld-Mindset ist keine neue Sache. Es ist eine Anwendung. Von allem, was du in sieben Wochen gelernt hast." },
            { type: "text", content: "W2, W4, W5, W6 - alles das brauchst du hier. Nur ist das Thema Geld. Das Thema, das die meisten vermeiden." },
            { type: "text", content: "Wenn du dein Geld-Mindset kl\u00e4rst, kl\u00e4rst du dein Verh\u00e4ltnis zu dir selbst. Nicht nur Geld. Selbstwert. Sichtbarkeit. Erlaubnis. Das ist alles dabei." },
            { type: "emphasis", content: "In W9 kommt die letzte Sache. Die alte Geschichte ist weg. Du wei\u00dft, was du brauchst. Du erlaubst es dir. Dann zeigst du dich." },

            { type: "divider" },

            // --- Progress + Checklist + Signoff ---
            { type: "progress-bar", label: "Woche 8 von 9", percent: 89, detail: "Phase 3: Make Money" },

            { type: "checklist", items: [
                "Lektion vollst\u00e4ndig gelesen",
                "Geld-Archetyp-Session durchgef\u00fchrt",
                "Ankerpraktik begonnen"
            ]},

            { type: "signoff", text: "Dein Wert ist kein Preisschild. Er ist deine Erlaubnis, ganz hier zu sein.\\n\\nN\u00e4chste Woche: Zeig dich.", name: "Steven" }
        ]
    };

    if (window.__WL_KURS) { window.__WL_KURS.register('w8', LESSON_DATA); return; }
    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://solbachsteven.github.io/website/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

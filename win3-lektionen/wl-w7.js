// Win³ Kurs - Lektion 7: Dein Platz in der Welt
// Einzeiler: <script src="https://stevensolbach.de/win3-lektionen/wl-w7.js"></script>
(function() {
    if (window.__WL_W7) return;
    window.__WL_W7 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "LEKTION 7",
            title: "Dein Platz in der Welt",
            subtitle: "Phase 3: Make Money"
        },
        sections: [
            // --- Intro ---
            { type: "emphasis", content: "Phase 2 ist abgeschlossen. In den letzten drei Wochen haben wir nach innen geschaut: erkannt, was uns festhält (W4), gelernt, es zu fühlen und loszulassen (W5), und einen Kreislauf gebaut, der Verstehen, Fühlen und Handeln verbindet (W6). Die Energie, die dabei frei geworden ist, sucht jetzt eine Richtung. Phase 3 richtet den Blick nach außen." },

            { type: "divider" },

            // --- Die Purpose-Falle ---
            { type: "heading", level: 2, content: "Die Purpose-Falle" },
            { type: "text", content: "Irgendwann nach der inneren Arbeit taucht eine Frage auf, die sich dringend anfühlt: \"Was ist mein Purpose?\"" },
            { type: "text", content: "Es gibt eine ganze Industrie, die auf diese Frage wartet. Bücher, Kurse, Retreats - sie alle versprechen, dir deinen Lebenszweck zu enthüllen, als läge er irgendwo vergraben wie ein Schatz, den du nur noch ausgraben musst. Manche Menschen suchen jahrelang, probieren fünf Karrieren, drei Länder und zwei Lebensmodelle und fühlen sich am Ende schlechter als vorher, weil sie \"ihren Purpose\" immer noch nicht gefunden haben." },
            { type: "text", content: "Das Problem ist die Annahme, dass es einen fertigen Purpose gibt, der auf uns wartet." },
            { type: "text", content: "Cal Newport, Informatik-Professor und Autor von \"So Good They Can't Ignore You\", hat sich genau dieses Thema vorgenommen. Die Idee, dass jeder Mensch eine vorbestimmte Berufung hat, die er nur finden muss, hält er für einen der schädlichsten Karrieremythen überhaupt. Was er stattdessen beobachtete: Menschen, die ihren Beruf lieben, haben diese Liebe nicht gefunden - sie haben sie entwickelt. Durch Kompetenz, durch Tiefe, durch die langsame Erfahrung, in etwas wirklich gut zu werden." },
            { type: "text", content: "Purpose wird gebaut. Und das Material, aus dem wir ihn bauen, haben wir bereits - es ist das, was wir in den letzten sechs Wochen über uns herausgefunden haben." },

            { type: "divider" },

            // --- Make Money - ein missverstandenes Wort ---
            { type: "heading", level: 2, content: "Make Money - ein missverstandenes Wort" },
            { type: "text", content: "Phase 3 des Win³-Modells heißt Make Money. Das klingt, als ginge es jetzt ums Geld." },
            { type: "text", content: "Geld spielt eine Rolle, aber eine andere als die meisten denken. Make Money bedeutet: etwas Wertvolles schaffen und bereit sein, dafür Wertschätzung anzunehmen - auch finanzielle." },
            { type: "text", content: "Viele Menschen, die innere Arbeit machen, tragen einen unausgesprochenen Glaubenssatz mit sich: dass Geld und Sinn sich gegenseitig ausschließen. Dass wer Geld will, oberflächlich ist. Dass echte Erfüllung unbezahlbar sein sollte, im wörtlichsten Sinne." },
            { type: "text", content: "Dabei ist Geld ein Spiegel. Es zeigt zwei Dinge gleichzeitig: wie viel Wert wir in die Welt bringen, und wie viel davon wir bereit sind anzunehmen. Viele scheitern am zweiten Teil. Sie geben, helfen, schaffen Wert - und wenn jemand dafür bezahlen will, winken sie ab. \"Das mache ich doch gern.\" Als ob Freude und Vergütung nicht zusammenpassen würden." },
            { type: "text", content: "In W8 schauen wir uns die Überzeugungen an, die zwischen uns und dem Annehmen stehen. Aber zuerst brauchen wir Klarheit darüber, was wir überhaupt in die Welt bringen wollen." },

            { type: "divider" },

            // --- Ikigai - vier Kreise, eine Frage ---
            { type: "heading", level: 2, content: "Ikigai - vier Kreise, eine Frage" },
            { type: "text", content: "Es gibt ein japanisches Wort, das zusammenfasst, worum es geht: Ikigai. Wörtlich übersetzt bedeutet es so etwas wie \"das, wofür es sich lohnt aufzustehen.\"" },
            { type: "text", content: "Eine kleine Ehrlichkeit vorweg: Das Venn-Diagramm mit den vier Kreisen, das im Internet überall als \"Ikigai\" gezeigt wird, stammt gar nicht aus Japan. Ein britischer Blogger hat es 2014 entworfen und mit dem Begriff verknüpft. In Japan selbst hat Ikigai eine breitere Bedeutung - es muss nichts mit Karriere zu tun haben. Für manche ist es der Morgentee, für andere der Garten. In einer Umfrage unter 2.000 Japanern betrachtete nur ein Drittel die Arbeit als ihr Ikigai." },
            { type: "text", content: "Das Venn-Diagramm ist trotzdem nützlich - als westliches Denkwerkzeug, das vier wichtige Fragen stellt:" },
            { type: "text", content: "<strong>Was liebst du?</strong> Wo vergisst du den Unterschied zwischen einer Stunde und vier Stunden? Wo bist du nach einem langen Tag aufgeladen statt erschöpft? Die Momente, in denen Flow entsteht, in denen du ganz in einer Tätigkeit aufgehst. In W1 und W2 haben wir angefangen, diese Momente sichtbar zu machen." },
            { type: "text", content: "<strong>Was kannst du gut?</strong> Fähigkeiten und natürliche Stärken, auch die, die du für selbstverständlich hältst. Gerade das, was dir leichtfällt, ist oft das, was anderen schwerfällt. Wir sind blind für unsere eigenen Stärken, weil sie sich nicht wie Leistung anfühlen." },
            { type: "text", content: "<strong>Was braucht die Welt?</strong> Welches Problem fällt dir auf, das andere übersehen? Welche Ungerechtigkeit lässt dich nicht los? Das muss nichts Globales sein. Manchmal ist es sehr nah: eine Lücke in der Schule der eigenen Kinder, ein Thema, über das niemand ehrlich spricht, ein Kollege, der seit Wochen nicht weiterkommt und dem niemand die richtige Frage stellt." },
            { type: "text", content: "<strong>Wofür können wir bezahlt werden?</strong> Die Marktfrage. Gibt es Menschen, die für das, was wir anbieten, Geld ausgeben würden? Dieser Kreis ist der, vor dem sich viele drücken. Aber er gehört dazu, weil er eine Verbindung zur Welt herstellt. Wer bezahlt wird, liefert etwas, das anderen etwas wert ist." },
            { type: "text", content: "Die Schnittmenge aller vier Kreise ist das, was das Diagramm Ikigai nennt. Aber der wichtige Punkt: Niemand startet mit allen vier Kreisen gleichzeitig gefüllt. Die meisten Menschen haben zwei, vielleicht drei. Das reicht für den Anfang. Der vierte kommt oft durch Ausprobieren, durch Versuche und Korrekturen, durch das langsame Herantasten an den eigenen Beitrag." },

            { type: "divider" },

            // --- Die einzigartige Linse ---
            { type: "heading", level: 2, content: "Die einzigartige Linse" },
            { type: "text", content: "Es gibt etwas, das auf keinem Venn-Diagramm auftaucht und das vielleicht das Wichtigste ist." },
            { type: "text", content: "Jeder Mensch sieht die Welt durch eine Linse, die kein anderer hat. Diese Linse besteht aus allem, was wir erlebt haben - den Kämpfen, den Umwegen, den Erkenntnissen, die sich erst Jahre später als wertvoll herausgestellt haben. Sie besteht aus der Kombination unserer Fähigkeiten, Interessen und Erfahrungen, die in genau dieser Form bei keinem zweiten Menschen existiert." },
            { type: "text", content: "Jemand, der als Kind zwischen zwei Kulturen aufgewachsen ist, sieht Kommunikation anders als jemand, der immer in derselben Stadt gelebt hat. Jemand, der eine schwere Krankheit überstanden hat, sieht Gesundheit anders. Jemand, der in einem Handwerksbetrieb groß geworden ist und dann Informatik studiert hat, verbindet Welten, die für die meisten getrennt sind." },
            { type: "text", content: "Die Anteile, die wir in Phase 1 und 2 kennengelernt haben - der Perfektionist, der Ängstliche, der Beschützer - sind Teil dieser Linse. Auch unsere Wunden formen, wie wir die Welt sehen. Wer selbst einen Verlust erlebt hat, erkennt Trauer in anderen, bevor sie es aussprechen. Wer sich lange anpassen musste, hat ein feines Gespür für Dynamiken in Gruppen entwickelt. Diese Fähigkeiten sind kein Zufall und keine Schwäche - sie sind Rohmaterial." },
            { type: "text", content: "Was sehe ich, das andere übersehen? Diese eine Frage ist oft wertvoller als das ganze Diagramm." },

            { type: "divider" },

            // --- Übung: Ikigai-Mapping ---
            { type: "heading", level: 2, content: "Übung: Ikigai-Mapping (30-45 Minuten)" },
            { type: "text", content: "Nimm ein großes Blatt Papier, quer. Zeichne vier Kreise, die sich in der Mitte überlappen, wie eine Blume mit vier Blütenblättern. Beschrifte sie:" },
            { type: "text", content: "Oben: <strong>Was ich liebe</strong>" },
            { type: "text", content: "Rechts: <strong>Was ich kann</strong>" },
            { type: "text", content: "Unten: <strong>Was die Welt braucht</strong>" },
            { type: "text", content: "Links: <strong>Wofür ich bezahlt werden kann</strong>" },
            { type: "text", content: "Jetzt nimm alles, was du in den letzten sechs Wochen über dich herausgefunden hast. Die Erkenntnisse aus W1 über deine Prägungen. Die Anteile aus W2. Die Momente, in denen du dich lebendig gefühlt hast. Die Muster, die du in W4 erkannt hast. Schreib alles in den Kreis, zu dem es gehört. Manches wird in zwei oder drei Kreise gleichzeitig passen - umso besser." },
            { type: "text", content: "Wenn die Kreise gefüllt sind, schau dir die Überlappungen an. Wo treffen sich zwei Kreise? Drei? Das sind die Stellen, an denen etwas entsteht." },
            { type: "text", content: "<strong>Drei Hinweise:</strong>" },
            { type: "text", content: "Der vierte Kreis - wofür du bezahlt werden kannst - darf dünn sein. Wenn dort nur ein oder zwei Einträge stehen, ist das normal. Dieser Kreis füllt sich mit der Zeit, durch Erfahrung und Experimente, selten am Schreibtisch." },
            { type: "text", content: "Lass den inneren Kritiker nicht redigieren. Der Satz \"Das kann doch jeder\" ist fast immer falsch. Schreib auf, was dir einfällt, ohne zu bewerten." },
            { type: "text", content: "Und erwarte kein Ergebnis. Das Ikigai-Mapping ist kein Test mit einer richtigen Antwort, sondern eine Bestandsaufnahme, ein Bild dessen, was da ist. Das Bild wird sich verändern - in einem Monat, in einem Jahr. Gut so." },

            { type: "divider" },

            // --- Ankerpraktik ---
            { type: "heading", level: 2, content: "Ankerpraktik: Die einzigartige Linse" },
            { type: "text", content: "Ab dieser Woche bekommt die Ankerpraktik einen neuen Fokus. Zusätzlich zu den drei Schichten aus W6 kommt eine Frage dazu, die den Blick nach außen richtet:" },
            { type: "text", content: "<strong>\"Was habe ich heute gesehen, das andere nicht sehen?\"</strong>" },
            { type: "text", content: "oder:" },
            { type: "text", content: "<strong>\"Was hat mich heute berührt, das andere nicht berührt?\"</strong>" },
            { type: "text", content: "Das können kleine Dinge sein. Ein Gespräch, bei dem dir auffiel, was zwischen den Zeilen gesagt wurde. Ein Problem bei der Arbeit, bei dem du sofort einen Lösungsweg gesehen hast, den sonst niemand vorgeschlagen hat. Ein Moment, in dem du etwas wahrgenommen hast, das die Leute um dich herum scheinbar nicht bemerkt haben." },
            { type: "text", content: "Diese Momente sind Hinweise. Sie zeigen, wo die eigene Linse am schärfsten ist, wo unser Blick etwas erfasst, das für andere unsichtbar bleibt. Über Wochen und Monate entsteht daraus ein Muster, das klarer ist als jeder Persönlichkeitstest." },

            { type: "anchorpractice", layers: [
                { label: "Schicht 1 (Freies Schreiben)", prompt: "Was habe ich heute gesehen, das andere nicht sehen?" },
                { label: "Schicht 2 (Reflexion)", prompt: "Was hat mich heute berührt - und warum gerade das?" },
                { label: "Schicht 3 (Vertiefen)", prompt: "Welche Verbindung sehe nur ich?" }
            ]},

            { type: "divider" },

            // --- Closing ---
            { type: "emphasis", content: "In Phase 1 haben wir herausgefunden, wer wir sind. In Phase 2 haben wir losgelassen, was uns daran hindert, es zu leben. Jetzt in Phase 3 beginnt die Frage: Was machen wir damit? Das Ikigai-Mapping ist der erste Schritt, eine Bestandsaufnahme dessen, was wir haben und was wir sehen. In W8 schauen wir uns an, was viele davon abhält, den nächsten Schritt zu gehen: unser Verhältnis zu Geld." },

            { type: "divider" },

            // --- Progress + Checklist + Signoff ---
            { type: "progress-bar", label: "Lektion 7 von 9", percent: 78, detail: "Phase 3: Make Money" },

            { type: "checklist", items: [
                "Lektion vollständig gelesen",
                "Ikigai-Mapping durchgeführt (30-45 Min)",
                "Ankerpraktik: Einzigartige Linse begonnen"
            ]},

            { type: "signoff", text: "Purpose wird gebaut, nicht gefunden. Dein Ikigai-Mapping ist der erste Entwurf. In W8 schauen wir uns an, was viele davon abhält, den Gegenwert anzunehmen.", name: "Steven" }
        ]
    };

    if (window.__WL_KURS) { window.__WL_KURS.register('w7', LESSON_DATA); return; }
    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://stevensolbach.de/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

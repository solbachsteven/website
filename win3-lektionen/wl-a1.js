// Win³ Kurs - Alignment 1: Dein Leben auf dem Prüfstand
// Einzeiler: <script src="https://stevensolbach.de/win3-lektionen/wl-a1.js"></script>
(function() {
    if (window.__WL_A1) return;
    window.__WL_A1 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "ALIGNMENT 1",
            title: "Dein Leben auf dem Prüfstand",
            subtitle: "Dein Leben auf dem Prüfstand"
        },
        sections: [
            // --- Intro ---
            { type: "emphasis", content: "In W9 haben wir den Bogen geschlagen: von der Frage \u201eWer bin ich?\u201c über das Loslassen alter Muster bis hin zur Sichtbarkeit. Neun Wochen innere Arbeit, drei Phasen, ein Software-Update. Jetzt stellt sich die Frage: Läuft diese neue Software auf der richtigen Hardware?" },

            { type: "divider" },

            // --- Nach dem Software-Update ---
            { type: "heading", level: 2, content: "Nach dem Software-Update" },
            { type: "text", content: "Neun Wochen lang haben wir nach innen geschaut. Wir haben Anteile kennengelernt, Überzeugungen hinterfragt, festgehaltene Gefühle durchgelassen und uns die Erlaubnis gegeben, sichtbar zu sein. Das war das Software-Update." },
            { type: "text", content: "Aber die äußeren Umstände haben sich in dieser Zeit nicht automatisch mitverändert. Der Job ist noch derselbe. Die Wohnung, die Gewohnheiten, der Freundeskreis - alles steht noch da, wo es vor neun Wochen stand. Und das muss kein Problem sein. Manchmal passt das äußere Leben bereits zum inneren. Oft aber entsteht eine Reibung, die sich vorher nicht so deutlich bemerkbar gemacht hat." },
            { type: "text", content: "Carl Rogers, der Begründer der humanistischen Psychologie, nannte diesen Zustand Kongruenz: wenn inneres Erleben und äußeres Leben in dieselbe Richtung zeigen. Fehlt sie, entsteht eine Grundspannung, die Energie kostet, auch wenn wir sie nicht immer benennen können. Ein beruflicher Alltag, der nichts von dem nutzt, was wir in W7 über uns herausgefunden haben. Ein Umfeld, das den Menschen bestärkt, der wir vor dem Kurs waren, nicht den, der wir jetzt sind. Routinen, die aus einer Zeit stammen, in der wir andere Überzeugungen hatten." },
            { type: "text", content: "Die Bonus-Lektionen sind das Hardware-Update. Wir prüfen, ob das äußere Leben zum inneren passt, und finden heraus, wo die größte Lücke klafft." },

            { type: "divider" },

            // --- Ein Werkzeug zum Vergleichen ---
            { type: "heading", level: 2, content: "Ein Werkzeug zum Vergleichen" },
            { type: "text", content: "Um diese Prüfung systematisch zu machen, brauchen wir ein Modell, das alle Bereiche des Lebens abdeckt, von den äußersten Umständen bis zur innersten Überzeugung." },
            { type: "text", content: "1976 besuchte ein junger Student namens Robert Dilts eine Vorlesung an der University of California in Santa Cruz. Der Dozent war Gregory Bateson, Anthropologe, Systemtheoretiker und einer der originellsten Denker des 20. Jahrhunderts. Bateson hatte beobachtet, dass Lernen nicht gleich Lernen ist. Es gibt einen Unterschied zwischen dem Erlernen einer neuen Fähigkeit, dem Verändern einer Gewohnheit und dem Hinterfragen der eigenen Identität. Jede dieser Veränderungen findet auf einer anderen logischen Ebene statt, und die Ebenen bauen aufeinander auf wie die Stockwerke eines Gebäudes." },
            { type: "text", content: "Dilts nahm diesen Gedanken und formte daraus ein praktisches Werkzeug: die Neurologischen Ebenen. Sechs Schichten, die unser Leben organisieren, von außen nach innen, von der Oberfläche zum Kern." },

            { type: "levels", items: [
                { number: 1, title: "Umgebung", description: "Wo bin ich? Mit wem umgebe ich mich? Der Schreibtisch, die Stadt, die Räume, in denen wir unsere Tage verbringen. Die Menschen, mit denen wir die meiste Zeit teilen.", color: "#5CB8FF" },
                { number: 2, title: "Verhalten", description: "Was tue ich tatsächlich? Nicht was wir vorhaben oder uns wünschen, sondern was ein Beobachter sehen würde, der einen Tag lang mitliefe. Wie wir morgens starten, womit wir unsere Stunden verbringen, wie wir die Abende gestalten.", color: "#4ECB71" },
                { number: 3, title: "Fähigkeiten", description: "Was kann ich, und was fehlt mir? Die Ebene der Kompetenz - gelernte und ungenutzte Talente, vorhandene und fehlende Werkzeuge.", color: "#FFC947" },
                { number: 4, title: "Überzeugungen", description: "Was glaube ich über mich und die Welt? Welche Werte leiten mein Handeln? Hier sitzen die Sätze, die wir in W4 und W8 untersucht haben: die unsichtbaren Regeln, nach denen wir leben, oft ohne es zu merken.", color: "#FF8E53" },
                { number: 5, title: "Identität", description: "Wer bin ich? Das gelebte Selbstbild, die Rolle, die wir im Alltag einnehmen. In W1 und W2 haben wir den Unterschied zwischen dem Selbst und unseren Anteilen kennengelernt. Diese Ebene fragt: Wer führt gerade - das Selbst oder ein Anteil?", color: "#D946EF" },
                { number: 6, title: "Zugehörigkeit", description: "Wovon bin ich Teil? Was ist größer als ich? In W7 haben wir über Ikigai gesprochen - den Schnittpunkt zwischen dem, was wir lieben, was wir können, was die Welt braucht und wofür wir bezahlt werden können. Diese Ebene geht noch weiter: Zu welcher Gemeinschaft, welchem Anliegen, welchem größeren Ganzen gehöre ich?", color: "#BC8034" }
            ]},

            { type: "divider" },

            // --- Zwei Richtungen ---
            { type: "heading", level: 2, content: "Zwei Richtungen" },
            { type: "text", content: "Dilts' Modell hat eine entscheidende Eigenschaft: Veränderungen auf einer höheren Ebene wirken automatisch auf alle darunterliegenden. Umgekehrt gilt das nicht." },
            { type: "text", content: "Wer seine Überzeugungen verändert (Ebene 4), verändert damit auch sein Verhalten (Ebene 2) und oft seine Umgebung (Ebene 1). Aber wer nur die Umgebung wechselt, ohne an den tieferen Ebenen etwas zu verändern, baut sich am neuen Ort schnell dasselbe Leben wieder auf. Der Umzug in eine andere Stadt, der neue Job, die Trennung - Veränderungen auf den unteren Ebenen, die verpuffen, wenn die oberen gleich bleiben. Jemand, der seinen Job kündigt, weil er sich eingeengt fühlt, aber nicht geklärt hat, welche Überzeugung das Gefühl der Enge erzeugt, wird im nächsten Job wieder dieselbe Enge spüren. Deshalb scheitern so viele Neuanfänge: Sie setzen an der falschen Ebene an." },
            { type: "text", content: "Dieses Prinzip erklärt auch den Aufbau des Kurses. Wir sind von unten nach oben gegangen, Schicht für Schicht. Von der Umgebung (dem, was wir wahrnehmen) über das Verhalten (was wir tun) und die Fähigkeiten (Schreiben als Spiegel, die Selbstcoaching-Schleife, Letting Go) zu den Überzeugungen (die Hawkins-Skala, Geld-Glaubenssätze), zur Identität (Selbst vs. Anteile) und schließlich zur Zugehörigkeit (Ikigai, Sichtbarkeit, der eigene Platz)." },
            { type: "text", content: "Dieser Bottom-Up-Weg war nötig, um die innere Landschaft kennenzulernen. Jetzt, wo wir oben angekommen sind, arbeiten wir in die andere Richtung: Top-Down. Von der Klarheit auf den oberen Ebenen herunter zu den konkreten Veränderungen im Alltag. Das ist die Stärke des Modells - Klarheit auf einer höheren Ebene ordnet alles darunter." },

            { type: "divider" },

            // --- Der Alignment-Check ---
            { type: "heading", level: 2, content: "Der Alignment-Check" },
            { type: "text", content: "Die Frage ist jetzt: Wo stimmen Innen und Außen überein, und wo tun sie es nur scheinbar?" },
            { type: "text", content: "Für jede der sechs Ebenen gibt es einen Ist-Zustand und einen Soll-Zustand. Der Ist-Zustand ist das, was gerade tatsächlich da ist. Der Soll-Zustand ist das, was wir in den letzten neun Wochen über uns herausgefunden haben - das, was aus dem Selbst kommt, nicht aus einem Schutzmechanismus." },
            { type: "text", content: "Nehmen wir die Ebene der Überzeugungen. In W4 und W5 haben viele von uns Überzeugungen entdeckt, die nicht unsere eigenen waren, sondern übernommene Sätze aus Kindheit, Kultur und Erfahrung. Der Ist-Zustand auf dieser Ebene wäre: Nach welchen Überzeugungen handle ich im Alltag noch immer? Der Soll-Zustand: Welche Überzeugungen habe ich als meine eigenen erkannt?" },
            { type: "text", content: "Oder die Ebene der Identität. In W1 und W2 haben wir das Selbst von den Anteilen unterschieden. Der Ist-Zustand: Welche Rolle nehme ich in meinem beruflichen und privaten Alltag ein? Der Soll-Zustand: Wer bin ich, wenn das Selbst führt?" },
            { type: "text", content: "Dieser Vergleich zeigt, wo das Leben bereits stimmig ist und wo die größte Kluft liegt. Und genau diese Kluft ist der wichtigste Ausgangspunkt, weil eine Veränderung dort nach unten durchkaskadiert und Dinge in Bewegung bringt, die wir auf den unteren Ebenen einzeln nicht hätten lösen können." },

            { type: "divider" },

            // --- Übung: Deine Alignment-Map ---
            { type: "heading", level: 2, content: "Übung: Deine Alignment-Map" },
            { type: "text", content: "Diese Übung braucht Zeit - mindestens 45 Minuten, besser eine Stunde. Nimm dir einen ruhigen Moment, ein Blatt Papier oder ein leeres Dokument, und erstelle eine Tabelle mit drei Spalten: <strong>Ebene</strong>, <strong>Ist-Zustand</strong>, <strong>Soll-Zustand</strong>." },
            { type: "text", content: "Geh alle sechs Ebenen von oben nach unten durch, also von Zugehörigkeit bis Umgebung. Die Reihenfolge ist bewusst gewählt: Die oberen Ebenen geben den Rahmen vor, innerhalb dessen die unteren ihren Platz finden." },

            { type: "steps", title: "Alignment-Map: Sechs Ebenen, von oben nach unten", items: [
                { title: "Zugehörigkeit", description: "Wovon bin ich Teil? Was ist mein Beitrag zu etwas Größerem? (Denk an dein Ikigai aus W7.)" },
                { title: "Identität", description: "Wer bin ich im Alltag? Wer führt - das Selbst oder ein Anteil? (Denk an W1 und W2.)" },
                { title: "Überzeugungen", description: "Nach welchen Überzeugungen und Werten handle ich tatsächlich? Welche davon sind wirklich meine? (Denk an W4, W5 und W8.)" },
                { title: "Fähigkeiten", description: "Was kann ich? Was brauche ich noch? Nutze ich die Werkzeuge aus W3 und W6 regelmäßig?" },
                { title: "Verhalten", description: "Was tue ich tatsächlich an einem normalen Tag? Passt das zu dem, was auf den oberen Ebenen steht?" },
                { title: "Umgebung", description: "Wo verbringe ich meine Zeit? Mit wem? Unterstützt mein Umfeld den Menschen, der ich sein will?" }
            ]},

            { type: "text", content: "Wenn die Tabelle fertig ist, lies sie einmal von oben nach unten. Markiere die Ebene, auf der die Lücke zwischen Ist und Soll am größten ist. Das ist der Punkt mit dem stärksten Hebel - der Ort, an dem eine Veränderung am meisten in Bewegung setzt." },
            { type: "text", content: "Diese Ebene nehmen wir mit in die nächsten beiden Lektionen." },
            { type: "text", content: "Ein Hinweis: Manche Ebenen fallen leicht, weil die Arbeit der letzten neun Wochen bereits Klarheit geschaffen hat. Andere tun weh, weil schwarz auf weiß sichtbar wird, wo das äußere Leben noch den alten Zuschnitt hat, obwohl sich innen längst etwas verändert hat. Das ist kein Rückschlag. Das ist der Moment, in dem die Arbeit beginnt, die wirklich zählt. Und wenn beim Schreiben ein Anteil laut wird, der sagt, dass das alles unrealistisch ist, oder wenn emotionale Ladung hochkommt - dann nutze die Werkzeuge, die du hast. Die Selbstcoaching-Schleife, die Letting-Go-Methode, die Ankerpraktik. Sie sind genau für solche Momente gemacht." },

            { type: "divider" },

            // --- Ankerpraktik ---
            { type: "heading", level: 2, content: "Ankerpraktik" },
            { type: "quote", content: "Wenn ich mein Leben als Ganzes betrachte - wo stimmt das Äußere mit dem Inneren überein, und wo tut es nur so?" },

            { type: "divider" },

            // --- Ausblick ---
            { type: "emphasis", content: "In A1 haben wir ein Diagnose-Werkzeug kennengelernt, das zeigt, wo das äußere Leben zum inneren passt und wo die größte Lücke liegt. In A2 arbeiten wir an den oberen drei Ebenen: Zugehörigkeit, Identität und Überzeugungen - die nach innen zeigen. In A3 an den unteren drei: Fähigkeiten, Verhalten und Umgebung - die nach außen zeigen." },

            { type: "divider" },

            // --- Progress + Checklist + Signoff ---
            { type: "progress-bar", label: "Alignment 1 von 3", percent: 33, detail: "Alignment" },

            { type: "checklist", items: [
                "Lektion vollständig gelesen",
                "Alignment-Map erstellt (sechs Ebenen, Ist vs. Soll)",
                "Größte Lücke identifiziert und markiert"
            ]},

            { type: "signoff", text: "Sechs Ebenen. Ist und Soll. Die größte Lücke ist dein stärkster Hebel.\\n\\nNächste Lektion: Inneres Alignment - Zugehörigkeit, Identität und Überzeugungen.", name: "Steven" }
        ]
    };

    if (window.__WL_KURS) { window.__WL_KURS.register('a1', LESSON_DATA); return; }
    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://stevensolbach.de/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

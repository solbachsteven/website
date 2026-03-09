// Win³ Kurs - Lektion 8: Die unsichtbare Quittung
// Einzeiler: <script src="https://stevensolbach.de/win3-lektionen/wl-w8.js"></script>
(function() {
    if (window.__WL_W8) return;
    window.__WL_W8 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "LEKTION 8",
            title: "Die unsichtbare Quittung",
            subtitle: "Phase 3: Make Money"
        },
        sections: [
            // --- Intro ---
            { type: "emphasis", content: "In W7 haben wir herausgefunden, was wir in die Welt bringen können - durch das Ikigai-Mapping, durch die einzigartige Linse, durch die Frage, was wir sehen, das andere nicht sehen. Diese Woche schauen wir uns an, was viele davon abhält, den nächsten Schritt zu gehen: unser Verhältnis zu Geld und Wert." },

            { type: "divider" },

            // --- Eine Szene, drei Varianten ---
            { type: "heading", level: 2, content: "Eine Szene, drei Varianten" },
            { type: "text", content: "Ein Handwerker renoviert seit drei Wochen die Wohnung eines Bekannten. Neue Böden, Wände gestrichen, Badezimmer gefliest. Als der Bekannte fragt, was er schuldet, winkt der Handwerker ab. \"Lass mal, wir kennen uns doch.\" Drei Wochen Arbeit, Material hat er selbst bezahlt. Auf dem Heimweg rechnet er im Kopf und merkt, dass er seit zwei Monaten von seinen Ersparnissen lebt." },
            { type: "text", content: "Eine Entwicklerin baut eine Website für ein Startup. Responsive Design, Datenbank-Anbindung, Content-Management-System - siebzig Stunden Arbeit, Abende und Wochenenden. Als sie die Rechnung schreibt, steht dort ein Betrag, der ungefähr dem entspricht, was ein Berufseinsteiger für zwanzig Stunden berechnen würde. Sie schaut auf die Zahl, findet sie zu niedrig, ändert nichts und drückt auf Senden." },
            { type: "text", content: "Eine Beraterin tippt ein Angebot für einen Workshop. Sie schreibt eine Zahl. Löscht sie. Schreibt eine niedrigere. Löscht sie wieder. Schreibt eine noch niedrigere, bei der sich ihr Magen zusammenzieht. Drückt auf Senden. Am nächsten Tag sagt der Kunde sofort zu, ohne zu verhandeln, und sie weiß in diesem Moment, dass sie zu wenig verlangt hat." },
            { type: "text", content: "Drei verschiedene Menschen, drei verschiedene Berufe, dasselbe Muster: Sie stellen sich selbst eine Quittung aus, auf der weniger steht als sie wert sind." },

            { type: "divider" },

            // --- Geld als Spiegel ---
            { type: "heading", level: 2, content: "Geld als Spiegel" },
            { type: "text", content: "Geld misst nicht den Wert eines Menschen. Das ist wichtig, und es stimmt. Aber Geld zeigt etwas anderes mit einer Genauigkeit, die unbequem ist: die Lücke zwischen dem, was wir geben, und dem, was wir dafür annehmen." },
            { type: "text", content: "Der Handwerker ist gut in dem, was er tut. Die Entwicklerin auch. Die Beraterin erst recht. Am Können liegt es nicht. Am Markt liegt es auch nicht - Studien zeigen, dass Selbstständige im Schnitt zwanzig bis vierzig Prozent weniger verlangen, als Kunden bereit wären zu zahlen. Die Lücke entsteht woanders." },
            { type: "text", content: "Sie entsteht in dem, was wir über uns selbst glauben." },
            { type: "text", content: "Brad Klontz, Finanzpsychologe und Autor von \"Mind Over Money\", hat dafür den Begriff \"Money Scripts\" geprägt: unbewusste Überzeugungen über Geld, die in der Kindheit entstehen und unser finanzielles Verhalten als Erwachsene steuern. Wie ein Programm, das im Hintergrund läuft, ohne dass wir wissen, dass es existiert." },

            { type: "divider" },

            // --- Vier Geld-Archetypen ---
            { type: "heading", level: 2, content: "Vier Geld-Archetypen" },
            { type: "text", content: "In der Forschung zu Money Scripts und Geld-Psychologie tauchen vier Muster besonders häufig auf - vor allem bei Menschen, die innere Arbeit machen und etwas Sinnvolles in die Welt bringen wollen." },

            { type: "text", content: "<strong>Der Vermeider.</strong> \"Geld ist mir nicht so wichtig.\" Das klingt nach Freiheit, aber dahinter steckt oft etwas anderes: die Angst, dass Geld den Charakter verdirbt. Dass wer gut verdient, irgendwo einen Kompromiss gemacht hat. Der Vermeider schaut nicht auf seinen Kontostand, öffnet Rechnungen spät, redet ungern über Finanzen. Die Überzeugung, die ihn steuert: Geld und gute Menschen passen nicht zusammen." },

            { type: "text", content: "<strong>Der Märtyrer.</strong> \"Ich helfe gerne, dafür braucht man mich nicht zu bezahlen.\" Die Beraterin mit dem Workshop-Angebot kennt dieses Muster. Helfen fühlt sich richtig an, Geld nehmen fühlt sich falsch an - als ob beides sich gegenseitig ausschließen würde. Der Märtyrer gibt und gibt, bis er erschöpft ist, und wundert sich dann, warum niemand sieht, wie viel er geleistet hat. Die verborgene Überzeugung: Wer für Hilfe Geld nimmt, hilft nicht wirklich." },

            { type: "text", content: "<strong>Der Perfektionist.</strong> \"Wenn es perfekt ist, darf ich Geld verlangen.\" Die Entwicklerin mit der Website erkennt sich hier vielleicht wieder. Es gibt immer noch einen Bug zu fixen, eine Funktion zu verbessern, einen Rand zu polieren. Der Moment, in dem der Preis gerechtfertigt wäre, wird auf einen Zeitpunkt verschoben, der nie kommt - denn nichts ist jemals perfekt genug. Was dahintersteckt, ist weniger der Wunsch nach Qualität als die Angst vor Bewertung. Und da nichts makellos ist, muss man sich der Bewertung nie stellen." },

            { type: "text", content: "<strong>Der Unwürdige.</strong> \"Wer bin ich, dass ich das verdiene?\" Dieses Muster ist das leiseste und das tiefste. Es hat nichts mit der Qualität der Arbeit zu tun und alles mit dem Bild, das jemand von sich selbst trägt. Der Unwürdige kann sehen, dass andere für vergleichbare Arbeit mehr verlangen. Er kann es sogar für richtig halten. Aber wenn er selbst an der Reihe ist, greift etwas tiefer als Logik: die Überzeugung, dass es zu viel wäre, dass er irgendwann auffliegt, dass ihm dieser Platz eigentlich nicht zusteht." },

            { type: "text", content: "Die meisten Menschen finden sich in mehr als einem Archetyp wieder. Und die meisten sind überrascht, wie tief diese Muster sitzen." },

            { type: "divider" },

            // --- Woher kommt das? ---
            { type: "heading", level: 2, content: "Woher kommt das?" },
            { type: "text", content: "Kein Mensch wird mit der Überzeugung geboren, dass Geld verdienen etwas Schlechtes sei. Diese Muster werden gelernt - früh, beiläufig und so gründlich, dass sie sich anfühlen wie Tatsachen." },
            { type: "text", content: "Klontz nennt die prägenden Momente \"Financial Flashpoints\": Erlebnisse rund um Geld, die eine emotionale Ladung hatten. Das muss kein dramatisches Ereignis gewesen sein. Manchmal reicht der Blick des Vaters, wenn die Mutter etwas \"Teures\" gekauft hat. Das Schweigen am Esstisch, als eine Rechnung kam. Die beiläufige Bemerkung einer Tante beim Familienessen." },
            { type: "text", content: "Welche Sätze haben wir als Kinder über Geld gehört?" },
            { type: "text", content: "\"Geld verdirbt den Charakter.\" \"Über Geld spricht man nicht.\" \"Sei froh mit dem, was du hast.\" \"Die Reichen werden immer reicher und die Armen immer ärmer.\" \"Geld wächst nicht auf Bäumen.\"" },
            { type: "text", content: "Diese Sätze sitzen deshalb so tief, weil wir sie gehört haben, bevor wir sie einordnen konnten. Für ein Kind ist das, was die Eltern sagen, die Realität. Es gibt keinen Filter, kein \"Das ist deren Meinung.\" Es geht direkt ins System, wird Teil des Betriebssystems und steuert dreißig Jahre später, wie die Beraterin auf ihre Angebotsmail schaut, bevor sie auf Senden drückt." },

            { type: "divider" },

            // --- Bekannte Werkzeuge, neues Terrain ---
            { type: "heading", level: 2, content: "Bekannte Werkzeuge, neues Terrain" },
            { type: "text", content: "Die gute Nachricht: Wir haben in den letzten Wochen alles kennengelernt, was wir brauchen, um diese Muster zu verändern. Das Thema ist neu, die Methode ist dieselbe." },
            { type: "text", content: "<strong>Kalibrierung (W4).</strong> In Woche 4 haben wir gelernt, Überzeugungen auf der Hawkins-Skala einzuordnen. Jetzt können wir dasselbe mit Geld-Überzeugungen tun. \"Ich darf kein Geld für Hilfe nehmen\" - wo steht dieser Satz? Für die meisten kalibriert er zwischen Schuld (30) und Angst (100). Allein das Erkennen, aus welchem inneren Ort eine Überzeugung kommt, verändert den Umgang mit ihr." },
            { type: "text", content: "<strong>Letting Go (W5).</strong> Die Überzeugung \"Ich bin es nicht wert\" ist kein Gedanke. Sie sitzt im Körper - als Enge im Brustkorb, als Schwere im Magen, als das Zusammenziehen, das die Beraterin spürt, bevor sie auf Senden drückt. In Woche 5 haben wir gelernt, Gefühle durchzulassen statt sie zu unterdrücken, zu analysieren oder wegzudrücken. Diese Methode funktioniert auf Geld-Blockaden genauso wie auf jede andere festgehaltene Emotion." },
            { type: "text", content: "<strong>Selbstcoaching-Schleife (W6).</strong> Verstehen, Fühlen, Handeln. Der Kreislauf aus Woche 6 gibt uns den Rahmen: Erst die Überzeugung erkennen (Verstehen), dann das Gefühl dahinter durchlassen (Fühlen), dann einen konkreten Schritt machen (Handeln). Keine der drei Stufen allein reicht - zusammen bewegen sie etwas." },

            { type: "divider" },

            // --- Die Erlaubnis ---
            { type: "heading", level: 2, content: "Die Erlaubnis" },
            { type: "text", content: "Es gibt einen Satz, den viele Menschen irgendwann in ihrer inneren Arbeit brauchen und den ihnen niemand sagen kann außer sie sich selbst: Ich darf Wert schaffen und dafür bezahlt werden." },
            { type: "text", content: "Keine Instanz von außen kann diese Erlaubnis erteilen. Kein Kurs, kein Coach, kein Partner, der sagt \"Du bist es wert.\" Das kann bestätigend sein, aber es ändert nichts an der inneren Überzeugung, solange die Erlaubnis nicht von innen kommt." },
            { type: "text", content: "Und sie kommt selten als große Erkenntnis. Sie kommt als kleiner Moment - wenn jemand zum ersten Mal einen Preis nennt und nicht sofort relativiert. Wenn jemand \"Danke\" sagt statt \"Das war doch nichts.\" Wenn jemand eine Rechnung schreibt und sie abschickt, ohne sie vorher dreimal nach unten zu korrigieren." },
            { type: "text", content: "Diese Momente sind der Anfang. Jeder einzelne dehnt den Raum, in dem die neue Überzeugung Platz finden kann." },

            { type: "divider" },

            // --- Übung: Geld-Archetyp-Session ---
            { type: "heading", level: 2, content: "Übung: Geld-Archetyp-Session (30-45 Minuten)" },
            { type: "text", content: "Nimm dir einen ruhigen Ort und etwas zum Schreiben. Diese Übung verbindet die Werkzeuge der letzten Wochen und richtet sie auf ein Thema, das die meisten Menschen lieber vermeiden." },

            { type: "steps", title: "Geld-Archetyp-Session", items: [
                { title: "Archetyp erkennen", description: "Lies die vier Archetypen oben noch einmal. In welchem erkennst du dich am stärksten wieder? Es können auch zwei sein. Schreib auf, welcher es ist und in welchen konkreten Situationen er auftaucht." },
                { title: "Überzeugung finden", description: "Was ist der Satz, der unter dem Muster liegt? Nicht der vernünftige, den du jemandem erzählen würdest, sondern der echte - der, bei dem sich etwas im Körper bewegt, wenn du ihn aussprichst. \"Ich bin es nicht wert.\" \"Wenn ich Geld nehme, bin ich gierig.\" \"Meine Arbeit ist nicht gut genug.\" Schreib ihn auf." },
                { title: "Kalibrieren", description: "Wo steht dieser Satz auf der Hawkins-Skala? Kommt er aus Scham, Schuld oder Angst? Welcher Anteil spricht ihn, und was versucht er zu beschützen? Schreib die Zahl daneben - als Standortbestimmung, nicht als Urteil." },
                { title: "Fühlen", description: "Lies den Satz laut vor. Was passiert im Körper? Wo spürst du etwas? Lass das Gefühl da sein, ohne es wegzuschieben oder zu analysieren. Atme. Lass es durch dein System laufen, wie in W5 geübt." },
                { title: "Kleinster nächster Schritt", description: "Was wäre eine Handlung in den nächsten sieben Tagen, die das Muster um einen Millimeter verschiebt? Den Preis nicht senken. Das Kompliment annehmen statt abzuwehren. Die Rechnung am selben Tag schicken statt drei Wochen zu warten. Schreib den Schritt auf, und dann mach ihn." }
            ]},

            { type: "divider" },

            // --- Ankerpraktik ---
            { type: "heading", level: 2, content: "Ankerpraktik: Wert sichtbar machen" },
            { type: "text", content: "Ab dieser Woche bekommt die Ankerpraktik einen neuen Fokus, der die Frage aus W7 ergänzt. Neben \"Was habe ich heute gesehen, das andere nicht sehen?\" kommt eine zweite Frage dazu:" },
            { type: "text", content: "<strong>\"Wo habe ich heute meinen Wert kleiner gemacht?\"</strong>" },
            { type: "text", content: "Das kann überall passieren. Im Gespräch mit einem Kunden, der nach einem Rabatt fragt. In der Antwort auf ein Kompliment. In der Art, wie wir über unsere eigene Arbeit sprechen: \"Das war ja nichts Besonderes.\" \"Das hätte jeder gekonnt.\" \"Ach, das war nicht so viel Aufwand.\"" },
            { type: "text", content: "Und als Gegengewicht, einmal am Tag:" },
            { type: "text", content: "<strong>\"Was würde ich tun, wenn ich wüsste, dass ich es verdiene?\"</strong>" },
            { type: "text", content: "Diese Frage muss nicht zu einer Handlung führen. Manchmal reicht es, sie zu stellen und zu bemerken, was als Antwort kommt." },

            { type: "anchorpractice", layers: [
                { label: "Schicht 1 (Freies Schreiben)", prompt: "Wo habe ich heute meinen Wert kleiner gemacht?" },
                { label: "Schicht 2 (Reflexion)", prompt: "Welcher Geld-Archetyp hat sich heute gezeigt?" },
                { label: "Schicht 3 (Vertiefen)", prompt: "Was würde ich tun, wenn ich wüsste, dass ich es verdiene?" }
            ]},

            { type: "divider" },

            // --- Closing ---
            { type: "emphasis", content: "In W7 haben wir gesehen, was wir in die Welt bringen können. Heute haben wir uns angeschaut, was viele davon abhält, den Gegenwert anzunehmen, und woher diese Blockaden stammen. Die Werkzeuge, um sie zu lösen, haben wir bereits. Was bleibt, wenn die innere Erlaubnis da ist, ist die Frage nach dem Außen: Wie zeigen wir uns? Wie werden wir sichtbar? Darum geht es in W9." },

            { type: "divider" },

            // --- Progress + Checklist + Signoff ---
            { type: "progress-bar", label: "Lektion 8 von 9", percent: 89, detail: "Phase 3: Make Money" },

            { type: "checklist", items: [
                "Lektion vollständig gelesen",
                "Geld-Archetyp-Session durchgeführt (30-45 Min)",
                "Ankerpraktik: Wert sichtbar machen begonnen"
            ]},

            { type: "signoff", text: "Die Werkzeuge, um Geld-Blockaden zu lösen, hast du bereits. Was bleibt, ist die Frage: Wie zeigst du dich? Darum geht es in W9.", name: "Steven" }
        ]
    };

    if (window.__WL_KURS) { window.__WL_KURS.register('w8', LESSON_DATA); return; }
    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://stevensolbach.de/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

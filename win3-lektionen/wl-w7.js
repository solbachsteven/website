// Win³ Kurs - Woche 7: Dein Platz in der Welt
// Einzeiler: <script src="https://solbachsteven.github.io/website/win3-lektionen/wl-w7.js"></script>
(function() {
    if (window.__WL_W7) return;
    window.__WL_W7 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "WOCHE 7",
            title: "Dein Platz in der Welt",
            subtitle: "Phase 3: Make Money"
        },
        sections: [
            // --- Intro ---
            { type: "text", content: "Du hast dich befreit." },
            { type: "text", content: "Sechs Wochen. Du hast erkannt, wer du bist - nicht die Rollen, nicht die Stimmen im Kopf. Du kannst nach innen schauen ohne Panik. Du siehst die Blockaden, setzt sie um, lernst selbst zu coachen." },
            { type: "text", content: "Du stehst hier anders. Leichter. Klarer." },
            { type: "emphasis", content: "Und die Frage, die jetzt kommt, ist die nat\u00fcrlichste der Welt: Was mache ich damit?" },

            { type: "divider" },

            // --- Die Purpose-Falle ---
            { type: "heading", level: 2, content: "Die Purpose-Falle" },
            { type: "text", content: "Die meisten Menschen fallen hier in die n\u00e4chste Falle. Sie fangen an, nach einem \"Purpose\" zu suchen. Nach ihrer \"Bestimmung\". Als ob deine Bestimmung irgendwo wartete, und du m\u00fcsstest sie nur finden." },
            { type: "text", content: "Das ist eine romantische Vorstellung. Und sie ist ein Gef\u00e4ngnis." },
            { type: "text", content: "Solange du suchst, lebst du nicht wirklich. Und w\u00e4hrend du auf eine Antwort wartest, \u00fcbersiehst du, wo sie tats\u00e4chlich entsteht." },
            { type: "emphasis", content: "In dir." },
            { type: "text", content: "Purpose wird gebaut, nicht gefunden. Aus dem, was du bist, kannst, siehst. Du legst keine Schatzsuche quer durch die Welt hin - du schaust auf das, was schon vor dir liegt, und f\u00e4ngst an, etwas daraus zu machen." },
            { type: "emphasis", content: "Kein Moment. Eine langsame Frage stattdessen: Was kann nur ich in die Welt bringen?" },

            { type: "divider" },

            // --- Make Money ---
            { type: "heading", level: 2, content: "Make Money - anders als du denkst" },
            { type: "text", content: "Phase 3. Make Money." },
            { type: "text", content: "Und ja, ich wei\u00df, worauf ihr gewartet habt. Der Money-Teil. Manche denken: Geld? Nicht mein Thema." },
            { type: "text", content: "Gut. Dann lass uns kurz kl\u00e4ren, was Make Money in diesem Kurs bedeutet." },
            { type: "text", content: "Es bedeutet nicht Geldgier, nicht Reichtum, nicht dass dein Wert in Euro messbar ist." },
            { type: "emphasis", content: "Make Money bedeutet: Wert schaffen und daf\u00fcr Wertsch\u00e4tzung empfangen. Auch finanziell." },
            { type: "text", content: "Das ist ein vollst\u00e4ndiger Satz." },
            { type: "text", content: "Wert schaffen: etwas in die Welt bringen, das andere brauchen. Wertsch\u00e4tzung empfangen: bereit sein, daf\u00fcr etwas anzunehmen - echte, auch finanzielle Wertsch\u00e4tzung." },
            { type: "text", content: "Geld ist ein Spiegel - aber kein vollst\u00e4ndiger. Es zeigt dir, wie viel du in einem Bereich bringst, in dem Menschen bereit und in der Lage sind, daf\u00fcr zu zahlen. Und wie viel du bereit bist, daf\u00fcr anzunehmen. Viele der wertvollsten Dinge, die du tust, werden nie mit Geld verg\u00fctet. Das macht sie nicht weniger wertvoll. Aber dort, wo Geld flie\u00dft, zeigt es dir etwas \u00fcber dein Verh\u00e4ltnis zu deinem eigenen Wert." },
            { type: "text", content: "Diese Woche schauen wir auf das Erste - das Schaffen. In W8 schauen wir auf das Zweite - das Annehmen. Beides geh\u00f6rt zusammen." },

            { type: "divider" },

            // --- Was du schon weißt ---
            { type: "heading", level: 2, content: "Was du schon wei\u00dft" },
            { type: "text", content: "Du hast in sechs Wochen mehr \u00fcber dich gelernt als die meisten in Jahren." },
            { type: "text", content: "Die meisten leben, ohne nach innen zu schauen. Ohne ihre Teile zu kennen. Ohne zu lernen, welche \u00dcberzeugungen sie fesseln." },
            { type: "emphasis", content: "Du hast das alles getan." },
            { type: "text", content: "In W1 hast du erkannt: Du bist nicht deine Gedanken, nicht deine Gef\u00fchle, nicht deine Geschichte. Unter den Stimmen liegt etwas, das sie alle kennt." },
            { type: "text", content: "In W2 bist du in deine innere Welt gegangen - nicht als Theorie, als Erfahrung. Deine Teile: der Kritiker, der Besch\u00fctzer, das Kind. Du lerntest, sie zu verstehen statt zu bek\u00e4mpfen." },
            { type: "text", content: "In W3 die Ankerpraktik: freies Schreiben, Muster, vertiefen. Ein Werkzeug, das bleibt." },
            { type: "text", content: "In W4 hast du Blockaden als Felder erkannt. <strong>Hawkins-Skala</strong> zur Diagnose. Du lerntest kalibrieren: verstehen, wo du stehst." },
            { type: "text", content: "In W5 losgelassen - nicht als Methode, als Erkenntnis. Du bist nicht kaputt. Integration hei\u00dft, Raum zu machen." },
            { type: "text", content: "In W6 lerntest du coachen: verstehen, f\u00fchlen, handeln. Die Schleife, die dich frei macht." },
            { type: "text", content: "Das ist keine Theorie. Erfahrung. Du kennst das im K\u00f6rper, nicht nur im Kopf." },
            { type: "emphasis", content: "Daraus entsteht jetzt etwas Neues." },

            { type: "divider" },

            // --- Die vier Kreise ---
            { type: "heading", level: 2, content: "Die vier Kreise" },
            { type: "text", content: "<strong>Ikigai</strong> - japanisch, \"Grund aufzustehen\". Einfach, und es bringt Klarheit." },
            { type: "text", content: "Ikigai besteht aus vier Kreisen, die sich \u00fcberlappen:" },
            { type: "text", content: "<strong>Was du liebst.</strong> Was vergisst du nicht. Was du tust, selbst wenn niemand zusieht." },
            { type: "text", content: "<strong>Was du kannst.</strong> Was dir leicht f\u00e4llt. Wo andere k\u00e4mpfen." },
            { type: "text", content: "<strong>Was die Welt braucht.</strong> Welches Problem siehst nur du? Was f\u00e4llt dir auf, das andere nicht sehen?" },
            { type: "text", content: "<strong>Wof\u00fcr du bezahlt werden kannst.</strong> Wo gibt es einen Markt? Welche Form k\u00f6nnte es haben?" },
            { type: "text", content: "Dort, wo sich alle vier treffen: dein Ikigai." },
            { type: "text", content: "Die Falle ist dieselbe wie bei Purpose: erst perfekt, dann anfangen. Falsch. Du brauchst nur genug zum ersten Schritt." },

            { type: "divider" },

            // --- Was nur du siehst ---
            { type: "heading", level: 2, content: "Was nur du siehst" },
            { type: "text", content: "Das n\u00e4chste ist Mathematik, keine Motivation." },
            { type: "text", content: "Du bist eine einzigartige Mischung - Erfahrung, F\u00e4higkeiten, Perspektive, K\u00e4mpfe. Statistisch: niemand sonst hat deine Kombination." },
            { type: "text", content: "Deine Lebensgeschichte. Deine K\u00e4mpfe. Die Dinge, die du durchgemacht hast. Die Erkenntnisse aus diesem Kurs. Die Art, wie du die Welt siehst. All das formt eine Linse, durch die nur du schaust." },
            { type: "emphasis", content: "Das ist dein Verm\u00f6gen." },
            { type: "text", content: "Frag dich: Was siehst nur du? Wof\u00fcr braust du auf, wenn dich niemand stoppt?" },
            { type: "text", content: "Was dich \u00e4rgert, zeigt den Unterschied: wie es ist vs. wie es sein k\u00f6nnte. Dieser Unterschied ist dein Rohstoff." },
            { type: "text", content: "Du siehst, dass Menschen Muster wiederholen. Dass Teams aneinander vorbei reden. Dass Schulen F\u00e4higkeiten abtrennen. Dass elegante L\u00f6sungen \u00fcbersehen werden." },
            { type: "text", content: "Was du siehst, ist nicht zuf\u00e4llig. Es ist deine Geschichte trifft deine Person." },

            { type: "divider" },

            // --- Ikigai ist kein Beruf ---
            { type: "heading", level: 2, content: "Ikigai ist kein Beruf" },
            { type: "text", content: "Ikigai ist nicht Jobtitel, nicht Businessplan, nicht die Antwort auf \"Was mache ich beruflich?\"" },
            { type: "emphasis", content: "Es ist gr\u00f6\u00dfer." },
            { type: "text", content: "Es kann ein Beruf sein. Oder die Art, wie du Gespr\u00e4che f\u00fchrst, wie du Teams h\u00e4ltst, wie du Probleme l\u00f6st, an denen andere scheitern. Vielleicht machst du das l\u00e4ngst - nur unbewusst." },
            { type: "text", content: "Die \u00dcbung ist: Erkenne, was du bist und anbietest. Dann frag dich, ob du das bewusster tust." },
            { type: "text", content: "Der Beruf ist eine Form. Nicht die einzige." },

            { type: "divider" },

            // --- Vorausblick ---
            { type: "heading", level: 2, content: "Vorausblick" },
            { type: "text", content: "Diese Woche: dein Fundament. Dann liegt noch etwas dazwischen, bevor du tust." },
            { type: "text", content: "In W8: was dich abh\u00e4lt, deinen Wert anzunehmen. Dein Mindset zu Geld. Die Stimme, die fragt: Wer bin ich, dass ich bezahlt werde?" },
            { type: "text", content: "In W9 nach au\u00dfen: sichtbar werden, dich zeigen - echt, nicht poliert." },
            { type: "text", content: "Eins nach dem anderen. Diese Woche: Klarheit." },

            { type: "divider" },

            // --- Ikigai-Mapping ---
            { type: "heading", level: 2, content: "Deine Einladung: Ikigai-Mapping" },
            { type: "text", content: "Nimm dir 30 bis 45 Minuten. Kein Bildschirm - Papier. Ein gro\u00dfes Blatt, mindestens A4, besser gr\u00f6\u00dfer." },
            { type: "text", content: "Zeichne vier gro\u00dfe, \u00fcberlappende Kreise. Beschrifte sie:" },
            { type: "text", content: "<strong>Kreis 1: Was ich liebe.</strong> Was hat dich bewegt? Welche Themen bleiben h\u00e4ngen? Wo kommst du in Flow?" },
            { type: "text", content: "<strong>Kreis 2: Was ich kann.</strong> Welche F\u00e4higkeiten hast du? Was sagen andere? Wo k\u00e4mpfen andere?" },
            { type: "text", content: "<strong>Kreis 3: Was die Welt braucht.</strong> Welches Problem h\u00e4ltst du nicht aus? Wo siehst du einen anderen Weg?" },
            { type: "text", content: "<strong>Kreis 4: Wof\u00fcr ich bezahlt werden k\u00f6nnte.</strong> Erste Ideen. Keine Zensur. Alles aufschreiben." },
            { type: "text", content: "Wenn gef\u00fcllt: Schau auf die \u00dcberlappungen. Da entsteht das Gr\u00f6\u00dfere." },
            { type: "text", content: "Dein Mapping ist nicht perfekt. Es w\u00e4chst. Der erste Entwurf - der steht." },

            { type: "divider" },

            // --- Ankerpraktik ---
            { type: "heading", level: 2, content: "Ankerpraktik diese Woche" },
            { type: "text", content: "Jeden Tag: \"Was habe ich gesehen, das andere nicht sehen? Was hat mich ber\u00fchrt? Welche Verbindung nur ich?\"" },
            { type: "text", content: "Keine Arroganz. Aufmerksamkeit. Du lernst deine Perspektive zu sehen - einzigartig, nicht besser." },

            { type: "anchorpractice", layers: [
                { label: "Schicht 1 (Freies Schreiben)", prompt: "Was habe ich heute gesehen, das andere nicht sehen?" },
                { label: "Schicht 2 (Muster)", prompt: "Was hat mich ber\u00fchrt - und warum gerade das?" },
                { label: "Schicht 3 (Vertiefen)", prompt: "Welche Verbindung sehe nur ich?" }
            ]},

            { type: "divider" },

            // --- Zum Schluss ---
            { type: "heading", level: 2, content: "Zum Schluss" },
            { type: "text", content: "Phase 3 beginnt mit Klarheit. Verstehe erst, was du bietest. Nicht was du sollst, nicht was der Markt will." },
            { type: "text", content: "Was nur du gibst. Dein Platz ist nicht da drau\u00dfen. Er ist deine Mischung: wer du bist, was du kannst, was du siehst." },
            { type: "emphasis", content: "Jetzt geht es nach au\u00dfen." },

            { type: "divider" },

            // --- Progress + Checklist + Signoff ---
            { type: "progress-bar", label: "Woche 7 von 9", percent: 78, detail: "Phase 3: Make Money" },

            { type: "checklist", items: [
                "Lektion vollst\u00e4ndig gelesen",
                "Ikigai-Mapping durchgef\u00fchrt",
                "Ankerpraktik begonnen"
            ]},

            { type: "signoff", text: "Dein Platz in der Welt ist keine Adresse. Er ist deine Mischung.\\n\\nN\u00e4chste Woche: Dein Wert - und warum du ihn annehmen darfst.", name: "Steven" }
        ]
    };

    if (window.__WL_KURS) { window.__WL_KURS.register('w7', LESSON_DATA); return; }
    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://solbachsteven.github.io/website/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

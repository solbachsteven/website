// Win³ Kurs - Lektion 9: Zeig dich
// Einzeiler: <script src="https://solbachsteven.github.io/website/win3-lektionen/wl-w9.js"></script>
(function() {
    if (window.__WL_W9) return;
    window.__WL_W9 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "LEKTION 9",
            title: "Zeig dich",
            subtitle: "Phase 3: Make Money"
        },
        sections: [
            // --- Intro ---
            { type: "emphasis", content: "Selbstbewusstsein." },
            { type: "text", content: "Ein Wort. Zwei Bedeutungen. Und darin liegt alles, was du in neun Lektionen gelernt hast." },
            { type: "text", content: "Sich seiner selbst bewusst sein. Das ist die eine Bedeutung. Die stille. Die nach innen gerichtete. Die Frage: Wer bin ich? Und die Antwort, die kein Satz ist, sondern eine Erfahrung." },
            { type: "text", content: "Selbstbewusst auftreten. Das ist die andere. Die laute. Die nach au\u00dfen gerichtete. Die Art, wie du in einen Raum gehst, wie du sprichst, wie du stehst, wenn dich jemand fragt, was du tust." },
            { type: "text", content: "Die meisten Menschen trainieren die zweite Bedeutung, ohne die erste jemals ber\u00fchrt zu haben. Sie \u00fcben K\u00f6rpersprache. Stimme. Elevator Pitch. Und wundern sich, warum es sich hohl anf\u00fchlt." },
            { type: "emphasis", content: "Weil es hohl ist." },
            { type: "text", content: "Echtes Selbstbewusstsein beginnt nicht mit einer Technik. Es beginnt damit, dass du wei\u00dft, wer du bist. Und aufh\u00f6rst, es zu verstecken." },

            { type: "divider" },

            // --- Der Bogen ---
            { type: "heading", level: 2, content: "Der Bogen" },
            { type: "text", content: "Schau zur\u00fcck. Nicht als Liste. Als Bogen. Als Bewegung." },
            { type: "text", content: "Du hast mit der Frage angefangen: Wer bin ich? Du hast gelernt, dass die Stimmen in deinem Kopf nicht du sind. Dass es darunter etwas gibt - das, das alle Rollen kennt, ohne selbst eine zu sein." },
            { type: "text", content: "Du bist in deine innere Welt gegangen. Der Kritiker. Der Besch\u00fctzer. Das verletzte Kind - du hast gelernt, mit ihnen zu reden, nicht gegen sie zu k\u00e4mpfen. Du hast gelernt, unverf\u00e4lscht zu schreiben." },
            { type: "text", content: "Dann kam Phase 2. Du hast die Blockaden gesehen. Klar: Auf welcher Ebene? Welcher Anteil tr\u00e4gt sie? Du hast gelernt, loszulassen - nicht durch Willenskraft, sondern durch Hingabe. Nicht indem du k\u00e4mpfst, sondern indem du aufh\u00f6rst zu k\u00e4mpfen. Du hast dich selbst coachen gelernt. Verstehen. F\u00fchlen. Handeln. Die Schleife, die dich unabh\u00e4ngig macht." },
            { type: "text", content: "Phase 3 war anders. Du hast die vier Kreise angeschaut. Was du liebst, kannst, die Welt braucht. Du hast erkannt, wo du dir selbst im Weg stehst - beim Geld, bei der Erlaubnis. Und dann hast du die Erlaubnis gegeben." },
            { type: "text", content: "Das war kein Zufall. Das war ein Bogen. Be Yourself. Do Good. Make Money. Erkennen. Befreien. Verwirklichen." },
            { type: "emphasis", content: "Drei Phasen. Neun Lektionen. Ein Weg." },
            { type: "text", content: "Und jetzt stehst du hier." },

            { type: "divider" },

            // --- Was Sichtbarkeit wirklich ist ---
            { type: "heading", level: 2, content: "Was Sichtbarkeit wirklich ist" },
            { type: "text", content: "Die meisten Programme sagen dir an dieser Stelle: Sei mutig. Zeig dich. Trau dich. Spring ins kalte Wasser. Fake it till you make it." },
            { type: "text", content: "Das ist nicht was hier passiert." },
            { type: "emphasis", content: "Sichtbarkeit ist kein Willensakt. Sichtbarkeit ist das, was passiert, wenn du aufh\u00f6rst, dich zu verstecken." },
            { type: "text", content: "Und du h\u00f6rst auf, dich zu verstecken, wenn drei Dinge zusammenkommen:" },
            { type: "text", content: "Du wei\u00dft, wer du bist. Das ist Phase 1. Das Fundament." },
            { type: "text", content: "Du hast die inneren Konflikte gel\u00f6st, die dich dazu bringen, dich zu verstecken. Das ist Phase 2. Die Befreiung." },
            { type: "text", content: "Du hast dir selbst die Erlaubnis gegeben. Das ist Phase 3. Die Verwirklichung." },
            { type: "text", content: "Wenn diese drei zusammenkommen, passiert es. Nicht weil du dich zwingst. Weil nichts dich mehr bremst. So wie eine Pflanze nicht beschlie\u00dft, zur Sonne zu wachsen - sie tut es, wenn nichts sie blockiert." },
            { type: "text", content: "Du brauchst Mut. Nicht den gro\u00dfen, dramatischen Mut. Den stillen Mut, dich nicht mehr kleiner zu machen als du bist. Den Mut, einen Schritt zu gehen, auch wenn die Angst noch da ist. Das ist kein Widerspruch zu allem, was du gelernt hast - es ist die logische Konsequenz." },

            { type: "divider" },

            // --- Die letzte Schicht ---
            { type: "heading", level: 2, content: "Die letzte Schicht" },
            { type: "text", content: "Vielleicht liest du das und denkst: Ja, aber." },
            { type: "text", content: "Ja, aber bei mir ist das anders. Ja, aber ich habe noch nicht alles gel\u00f6st. Ja, aber ich bin noch nicht bereit." },
            { type: "text", content: "Das ist normal. Sichtbarkeit ist die letzte Schicht, weil sie zuletzt kommt. Die Angst davor, wirklich wahrgenommen zu werden. Nicht die Maske. Nicht die Rolle. Nicht die polierte Version. Du." },
            { type: "text", content: "Die Schicht ist bis jetzt nicht sichtbar geworden. Sie wartet. Weil sie erst jetzt relevant wird - wenn du wirklich nach au\u00dfen gehen musst." },
            { type: "callout", content: "<strong>Du hast alle Werkzeuge.</strong> Erkennen: Was ist diese letzte Angst? Welcher Anteil meldet sich? Was ist sein Satz? \"Wenn die Menschen mich wirklich sehen, dann...\" Dann was? F\u00fchlen: Wo sitzt es im K\u00f6rper? Welche Ebene auf der Hawkins-Karte? Lass es da sein, ohne etwas zu tun. Die Letting-Go-Methode aus W5. Nicht k\u00e4mpfen. F\u00fchlen. Handeln: Was ist der kleinste Schritt? Nicht der gro\u00dfe Auftritt. Der kleinste Schritt." },
            { type: "text", content: "Vielleicht gibt es diese letzte Schicht bei dir nicht. Vielleicht hast du sie schon in den letzten Wochen gel\u00f6st, ohne es zu merken. Dann ist dieser Abschnitt eine Best\u00e4tigung." },
            { type: "text", content: "Und vielleicht ist sie da. Dann ist dieser Abschnitt eine Einladung." },

            { type: "divider" },

            // --- Dich zeigen ---
            { type: "heading", level: 2, content: "Dich zeigen" },
            { type: "text", content: "Nicht die perfekte Version. Nicht die polierte Fassade. Nicht das Instagram-Bild. Dich." },
            { type: "text", content: "Sichtbarkeit beginnt nicht mit einer B\u00fchne. Nicht mit einem Podcast. Nicht mit einem Social-Media-Post. Nicht mit einem Business Launch." },
            { type: "emphasis", content: "Sichtbarkeit beginnt mit einem einzigen Moment der Echtheit." },
            { type: "text", content: "Ein Gespr\u00e4ch, in dem du sagst, was du wirklich denkst, statt was du glaubst sagen zu m\u00fcssen. Eine Situation, in der du nicht lachst, wenn du nicht lachen willst. Ein Moment, in dem du Ja sagst und Ja meinst. Oder Nein sagst und Nein meinst." },
            { type: "text", content: "Es ist nicht klein. F\u00fcr jemanden, der lange die Maske gewechselt hat, ist ein Moment der Echtheit ein Erdbeben." },
            { type: "text", content: "Und es baut sich auf. Ein Moment wird zwei. Zwei werden f\u00fcnf. F\u00fcnf werden ein neuer Standard. Nicht weil du es erzwingst. Sondern weil du merkst, wie es sich anf\u00fchlt. Und weil du nicht mehr zur\u00fcck willst." },

            { type: "divider" },

            // --- Resonanz ---
            { type: "heading", level: 2, content: "Resonanz" },
            { type: "text", content: "W5 war ein Resonanzpunkt. Innen trifft Innen. Du hast nach innen geschaut und dort etwas gefunden, das nicht kaputt war. Frieden. Nicht den gro\u00dfen, kosmischen Frieden. Den stillen, einfachen. Das \"Es ist okay, so wie es ist.\"" },
            { type: "text", content: "W9 ist das Spiegelbild. Au\u00dfen trifft Au\u00dfen. Dein \u00c4u\u00dferes trifft die \u00e4u\u00dfere Welt. Und wenn beides \u00fcbereinstimmt - wer du innen bist und wie du dich au\u00dfen zeigst - entsteht etwas, das schwer in Worte zu fassen ist." },
            { type: "text", content: "Menschen nennen es Authentizit\u00e4t. Charisma. Pr\u00e4senz. Ausstrahlung." },
            { type: "text", content: "Es ist nichts davon." },
            { type: "emphasis", content: "Es ist \u00dcbereinstimmung." },
            { type: "text", content: "Wenn du aufh\u00f6rst zu spielen, wenn das, was du sagst, auch das ist, das du denkst und f\u00fchlst - dann kommt Klarheit an, die andere sp\u00fcren. Nicht weil du etwas ausstrahlst. Sondern weil du aufgeh\u00f6rt hast, etwas zu verbergen." },
            { type: "text", content: "Das ist keine Magie. Es ist Physik. Ein Signal ohne St\u00f6rger\u00e4usche kommt klarer an. Wenn du aufh\u00f6rst, widerspr\u00fcchliche Signale zu senden - \"Ich bin selbstbewusst\" plus \"Bitte bewerte mich nicht\" - dann kommt an, was du wirklich bist." },
            { type: "emphasis", content: "Und das reicht." },

            { type: "divider" },

            // --- Was kommt danach ---
            { type: "heading", level: 2, content: "Was kommt danach" },
            { type: "text", content: "Dieser Kurs hatte neun Lektionen. Er ist ein Anfang. Kein Ende." },
            { type: "text", content: "Du hast Werkzeuge, die du f\u00fcr den Rest deines Lebens nutzen kannst. Nicht als Marketingsatz. Als Tatsache." },
            { type: "text", content: "Die Ankerpraktik. Freies Schreiben, Muster, vertiefen. Das h\u00e4lt dich in Kontakt mit dir selbst. Immer." },
            { type: "text", content: "Die Selbstcoaching-Schleife: Verstehen, F\u00fchlen, Handeln. Bei jedem Thema, das kommt." },
            { type: "text", content: "Die Letting-Go-Methode. Wenn emotionale Ladung auftaucht - und sie wird auftauchen, immer wieder - wei\u00dft du, was zu tun ist. Nicht k\u00e4mpfen. F\u00fchlen. Zulassen. Loslassen." },
            { type: "text", content: "Das sind keine Kurs-Methoden. Das sind Lebens-Methoden. Du nimmst sie mit. Sie geh\u00f6ren dir." },

            { type: "divider" },

            // --- Einladung ---
            { type: "heading", level: 2, content: "Deine Einladung: Zeig dich einer Person" },
            { type: "text", content: "Nicht gro\u00df. Nicht f\u00fcr die Welt. Sondern simpel und gleichzeitig schwer." },
            { type: "emphasis", content: "Zeig dich einem Menschen." },
            { type: "text", content: "Teile eine Erkenntnis aus diesem Kurs mit jemandem in deinem Leben. Nicht als Vortrag. Nicht als \"Ich habe einen Kurs gemacht und jetzt wei\u00df ich alles.\" Nicht als Belehrung." },
            { type: "text", content: "Sondern so: \"Ich habe etwas \u00fcber mich verstanden, und ich m\u00f6chte es mit dir teilen.\"" },
            { type: "text", content: "Vielleicht ist es eine Erkenntnis \u00fcber einen inneren Anteil, den du kennengelernt hast. Vielleicht eine \u00dcberzeugung, die du loslassen konntest. Vielleicht eine neue Art, wie du dich selbst siehst. Vielleicht einfach der Satz: \"Ich merke, dass ich mich oft kleiner mache als ich bin.\"" },
            { type: "text", content: "Es spielt keine Rolle, was du teilst. Es spielt eine Rolle, dass du es tust. Echt. Ungefiltert. Ohne die Reaktion des anderen zu kontrollieren." },
            { type: "text", content: "Das ist Sichtbarkeit. Das ist Selbstbewusstsein. Das ist der Anfang." },

            { type: "divider" },

            // --- Ankerpraktik ---
            { type: "heading", level: 2, content: "Ankerpraktik diese Lektion" },
            { type: "text", content: "Jeden Tag, einmal:" },

            { type: "anchorpractice", layers: [
                { label: "Schicht 1 (Freies Schreiben)", prompt: "Wo habe ich mich heute gezeigt, wie ich wirklich bin?" },
                { label: "Schicht 2 (Muster)", prompt: "Wo habe ich mich versteckt - und warum?" },
                { label: "Schicht 3 (Vertiefen)", prompt: "Was w\u00fcrde ich tun, wenn die Welt mich sehen will?" }
            ]},

            { type: "text", content: "Schau dir die letzte Frage an. Was w\u00fcrde ich tun, wenn die Welt mich sehen will? Nicht blo\u00df zulassen. Wirklich wollen. Was w\u00e4re, wenn das stimmt?" },

            { type: "divider" },

            // --- Dreiklang wird Einklang ---
            { type: "heading", level: 2, content: "Dreiklang wird Einklang" },
            { type: "text", content: "Drei Phasen. Neun Lektionen. Ein Bogen." },

            { type: "bigthree", items: [
                { title: "Be Yourself", description: "Du hast erkannt, wer du bist. Nicht deine Rollen. Nicht deine Geschichte. Das, was alle Rollen und Geschichten kennt.", color: "be" },
                { title: "Do Good", description: "Du hast dich befreit. Von alten \u00dcberzeugungen. Von emotionalen Feldern, die dich festgehalten haben. Du hast gelernt, dich selbst zu versorgen. Dich selbst zu coachen.", color: "do" },
                { title: "Make Money", description: "Du hast deinen Platz gefunden. Dein Geld-Mindset gekl\u00e4rt. Dir die Erlaubnis gegeben. Und angefangen, dich zu zeigen.", color: "make" }
            ]},

            { type: "text", content: "Nicht drei getrennte Dinge. Selbsterkenntnis ohne Befreiung bleibt Wissen. Befreiung ohne Handeln bleibt Flucht. Handeln ohne Fundament bleibt blind. Erst zusammen sind sie vollst\u00e4ndig." },
            { type: "emphasis", content: "Dreiklang wird Einklang." },

            { type: "divider" },

            // --- Was noch kommt ---
            { type: "heading", level: 2, content: "Was noch kommt" },
            { type: "emphasis", content: "Du bist nicht fertig. Du bist angefangen. Und das ist genug." },
            { type: "text", content: "Dieser Kurs hat dir Werkzeuge gegeben. Werkzeuge, die du jetzt nutzen kannst - nicht irgendwann, nicht wenn du bereit bist. Jetzt. Jeden Tag. Bei jedem Thema, das auftaucht." },
            { type: "text", content: "In den Alignment-Lektionen, die nach dieser Lektion kommen, geht es um etwas anderes. Nicht um neue Werkzeuge. Sondern um die Ebenen, auf denen Ver\u00e4nderung tats\u00e4chlich stattfindet. Neurologische Ebenen. Ist versus Soll. Das Hardware-Update, das daf\u00fcr sorgt, dass die Software, die du in neun Wochen installiert hast, auch wirklich l\u00e4uft." },
            { type: "text", content: "Diese Lektionen sind kein Bonus. Sie sind der Pr\u00fcfstand - die innere Arbeit, die sicherstellt, dass alle drei Ebenen wirklich zusammenspielen. Alignment. Aber der Kern ist dieser:" },
            { type: "text", content: "Du wei\u00dft jetzt, wer du bist. Du bist frei genug, um dich zu zeigen. Du hast dir die Erlaubnis gegeben." },
            { type: "text", content: "Der Rest ist Praxis. Nicht perfekte Praxis. Echte Praxis. Stolpernde, lernende, wachsende Praxis. Die Art von Praxis, die nicht aufh\u00f6rt, wenn der Kurs aufh\u00f6rt." },
            { type: "emphasis", content: "Weil es nie um den Kurs ging. Es ging um dich." },

            { type: "divider" },

            // --- Celebration + Progress + Checklist + Signoff ---
            { type: "celebration", text: "Neun Wochen. Drei Phasen. Dein Weg." },

            { type: "progress-bar", label: "Lektion 9 von 9", percent: 100, detail: "Phase 3: Make Money" },

            { type: "checklist", items: [
                "Lektion vollst\u00e4ndig gelesen",
                "Einer Person etwas geteilt",
                "Ankerpraktik begonnen"
            ]},

            { type: "signoff", text: "Du bist nicht fertig. Du bist angefangen. Und das ist genug.\\n\\nWeiter geht es mit den Alignment-Lektionen.", name: "Steven" }
        ]
    };

    if (window.__WL_KURS) { window.__WL_KURS.register('w9', LESSON_DATA); return; }
    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://solbachsteven.github.io/website/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

// Win³ Kurs - Alignment 3: Äußeres Alignment
// Einzeiler: <script src="https://solbachsteven.github.io/website/win3-lektionen/wl-a3.js"></script>
(function() {
    if (window.__WL_A3) return;
    window.__WL_A3 = true;

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];

    var LESSON_DATA = {
        meta: {
            label: "ALIGNMENT 3",
            title: "\u00c4u\u00dferes Alignment",
            subtitle: "Alignment"
        },
        sections: [
            // --- Intro ---
            { type: "text", content: "Innen stimmt es." },
            { type: "text", content: "Du wei\u00dft, wof\u00fcr du lebst. Du wei\u00dft, wer du bist. Deine \u00dcberzeugungen sind sortiert - zumindest die wichtigsten. Der Kompass zeigt." },
            { type: "emphasis", content: "Jetzt das Au\u00dfen." },
            { type: "text", content: "Nicht alles auf einmal. Nutze die Klarheit aus den letzten beiden Lektionen. Damit kannst du anfangen. St\u00fcck f\u00fcr St\u00fcck. Entscheidung f\u00fcr Entscheidung." },
            { type: "text", content: "Dein Leben anfassen. Das ist nicht schauen. Das ist tun. Ver\u00e4ndern." },

            { type: "divider" },

            // --- Die drei äußeren Ebenen ---
            { type: "heading", level: 2, content: "Die drei \u00e4u\u00dferen Ebenen" },
            { type: "text", content: "A1 waren alle sechs Ebenen. A2 hast du die inneren drei gekl\u00e4rt - Zugeh\u00f6rigkeit, Identit\u00e4t, \u00dcberzeugungen. Jetzt kommen die \u00e4u\u00dferen drei. F\u00e4higkeiten, Verhalten, Umgebung." },
            { type: "text", content: "Das sind die Ebenen, an denen Ver\u00e4nderung sichtbar wird. Die, an denen andere Menschen merken, dass sich etwas getan hat." },
            { type: "emphasis", content: "Das ist der Knackpunkt." },
            { type: "text", content: "Du kannst alles wissen und morgens aufstehen und alles bleibt gleich. Innere Klarheit ist eine Sache. \u00c4u\u00dfere Ver\u00e4nderung eine andere. Du brauchst beides." },
            { type: "text", content: "Blind handeln ist doof. Nur wissen und nicht handeln ist noch d\u00fcmmer. Beides zusammen." },

            { type: "divider" },

            // --- Fähigkeiten ---
            { type: "heading", level: 2, content: "F\u00e4higkeiten: Was darf ich noch lernen?" },
            { type: "text", content: "F\u00e4higkeiten sind das, was du kannst. Und was du noch nicht kannst." },
            { type: "text", content: "Neun Wochen. Du hast gelernt, dich selbst zu coachen. Du kennst deine Werkzeuge - die Ankerpraktik, wie man Emotionen f\u00fchlt und losl\u00e4sst, wie man tiefer geht. Das sind echte F\u00e4higkeiten jetzt." },
            { type: "text", content: "Die meisten Menschen lernen das nie. Das ist der Unterschied." },
            { type: "text", content: "Aber f\u00fcr dein Ziel brauchst du vielleicht noch mehr F\u00e4higkeiten. Andere." },
            { type: "text", content: "W7 hast du dein Ikigai-Mapping gemacht. Da siehst du, wo L\u00fccken sind. Dinge, die du liebst und k\u00f6nntest, aber nicht bekommst bezahlt. Oder was die Welt braucht und du nicht kannst. F\u00e4higkeits-L\u00fccken." },
            { type: "text", content: "Das ist keine Schw\u00e4che. Das zeigt dir, was noch kommt." },
            { type: "text", content: "Du hast auch F\u00e4higkeiten, die dir zu selbstverst\u00e4ndlich sind. Du siehst sie nicht, weil sie dir leicht fallen. Die anderen aber schon." },
            { type: "callout", content: "Es gibt Dinge, die nicht gelernt, sondern gel\u00f6st werden wollen. \"Ich kann nicht vor Menschen sprechen\" - manchmal ist das eine fehlende F\u00e4higkeit. Manchmal ist es Angst. Du wirst es sp\u00fcren, wenn du hinf\u00fchlst." },

            { type: "divider" },

            // --- Verhalten ---
            { type: "heading", level: 2, content: "Verhalten: Wo lebt mein Alltag noch das alte Muster?" },
            { type: "text", content: "Verhalten ist, was du jeden Tag wirklich tust. Nicht was du planst. Das wird brutale Ehrlichkeit." },
            { type: "text", content: "Du kannst alles wissen. Aber wenn du morgens aufstehst und machst das Gleiche wie vorher, hat sich nichts ver\u00e4ndert." },
            { type: "emphasis", content: "Jedes Verhalten, das nicht zu deinem Ziel passt, ist ein Misalignment. Ein rotes Licht." },
            { type: "text", content: "Wo sind die Gewohnheiten, die nicht mehr passen? Das Handy morgens. Die Stunde Fernsehen abends, die dir nichts gibt. Die Ja-Sagen zu Dingen, die du nicht willst." },
            { type: "text", content: "Merkst du, wo du dich schon ver\u00e4ndert hast? Ruhiger wirst, Dinge sagst, die du fr\u00fcher nicht gesagt h\u00e4ttest? Das ist nicht Zufall. Das ist, dass dein Inneres anf\u00e4ngt, dein \u00c4u\u00dferes zu bestimmen." },
            { type: "text", content: "Nicht alles auf einmal \u00e4ndern. Such dir eine. Die eine, wo du wei\u00dft: Das ver\u00e4ndert den Rest." },
            { type: "text", content: "Eine Gewohnheit, die wenn du sie \u00e4nderst, alles andere leichter wird. Vielleicht ist es die Art, wie du deinen Morgen beginnst. Vielleicht ist es ein Gespr\u00e4ch, das du seit Wochen aufschiebst. Vielleicht ist es die Entscheidung, mit etwas aufzuh\u00f6ren, das dir nicht mehr dient." },
            { type: "emphasis", content: "Fang klein an. Der n\u00e4chste Schritt, nicht die Revolution." },

            { type: "divider" },

            // --- Umgebung ---
            { type: "heading", level: 2, content: "Umgebung: Die h\u00e4rteste Frage" },
            { type: "text", content: "Die Umgebung ist eine andere Sache. Hier z\u00f6gern die meisten Menschen am l\u00e4ngsten." },
            { type: "text", content: "Passt wo du lebst zu dir? Und die Menschen um dich herum - n\u00e4hren sie dich? Oder nehmen sie dir Energie?" },
            { type: "text", content: "Ist dein Arbeitsplatz ein Ort, der zu deinem Ziel passt? Oder gehst du jeden Morgen irgendwohin, wo ein Teil von dir stirbt?" },
            { type: "text", content: "Das sind schwere Fragen. Manche lassen sich gleich l\u00f6sen - den Schreibtisch umstellen. Andere brauchen Monate - einen Job suchen. Wieder andere Jahre - den Ort wechseln." },
            { type: "text", content: "Manche Antworten werden weh tun. Wenn du merkst, dass ein Mensch, den du liebst, nicht zu dem Leben passt, das du f\u00fchren willst." },
            { type: "text", content: "Du wei\u00dft aber jetzt, wie du damit umgehen kannst. F\u00fchlen, nicht verdr\u00e4ngen. Dann loslassen." },
            { type: "text", content: "Du wei\u00dft die Selbstcoaching-Schleife: Verstehen, F\u00fchlen, Handeln. Du brauchst keine Antworten von au\u00dfen." },

            { type: "divider" },

            // --- Alignment ist ein Prozess ---
            { type: "heading", level: 2, content: "Alignment ist ein Prozess, kein Event" },
            { type: "text", content: "Eines ist wichtig: Dein Leben muss sich nicht morgen \u00e4ndern." },
            { type: "text", content: "Alignment ist kein Moment, wo alles klickt. Es ist ein Prozess. Manche Dinge \u00e4ndern sich in Tagen. Manche brauchen Jahre." },
            { type: "emphasis", content: "Die Richtung z\u00e4hlt, nicht die Geschwindigkeit." },
            { type: "text", content: "Du musst nicht alles auf einmal verstehen. Du musst wissen, in welche Richtung du gehst. Und du musst gehen. Einen Schritt. Dann den n\u00e4chsten." },
            { type: "text", content: "Der Alignment-Plan ist kein Versprechen. Es ist eine Orientierung. Ein Bild davon, wie es aussehen k\u00f6nnte." },
            { type: "text", content: "Manche Dinge \u00e4ndern sich schneller als gedacht. Manche langsamer. Manche ganz anders. Das ist normal." },

            { type: "divider" },

            // --- Einladung: Alignment-Plan ---
            { type: "heading", level: 2, content: "Einladung: Dein Alignment-Plan" },
            { type: "text", content: "30 bis 45 Minuten. Alignment-Map und Journal. Das ist alles, was du brauchst." },
            { type: "text", content: "Was ver\u00e4ndere ich? Jetzt? In ein paar Monaten? Sp\u00e4ter?" },

            { type: "heading", level: 3, content: "F\u00e4higkeiten" },
            { type: "text", content: "Was lernst du als N\u00e4chstes? Eine Sache. Die, die dein Ziel voranbringt. Wann fange ich an? Diese Woche? Dieser Monat?" },
            { type: "text", content: "Welche Blockade ist getarnt als fehlende F\u00e4higkeit? Wo ist Angst im Spiel, und du redest von \"Ich kann nicht\"?" },
            { type: "text", content: "Was kannst du schon, siehst es aber nicht?" },

            { type: "heading", level: 3, content: "Verhalten" },
            { type: "text", content: "Welche Gewohnheit \u00e4ndert sich diese Woche? Die mit dem gr\u00f6\u00dften Effekt. Vielleicht etwas Neues anfangen. Vielleicht etwas Altes lassen." },
            { type: "text", content: "Welche Verhaltensweise passt nicht mehr zu dem, wer du bist?" },

            { type: "heading", level: 3, content: "Umgebung" },
            { type: "text", content: "Was \u00e4ndert sich sofort? Der Arbeitsplatz. Ein Gespr\u00e4ch, das du schiebst." },
            { type: "text", content: "Was \u00e4ndert sich in den n\u00e4chsten Monaten? Job? Wo du lebst? Wer dein Leben mit dir teilt?" },
            { type: "text", content: "Wie sieht dein Leben in einem Jahr aus? Nicht detailliert - die Richtung reicht." },
            { type: "text", content: "Schreib es auf. Nicht als Versprechen. Als Orientierung." },

            { type: "divider" },

            // --- Dreiklang wird Einklang ---
            { type: "heading", level: 2, content: "Dreiklang wird Einklang" },
            { type: "text", content: "Schau zur\u00fcck. Nicht nur auf diese drei Lektionen. Auf den ganzen Weg." },

            { type: "bigthree", items: [
                { title: "Be Yourself", description: "Du wei\u00dft jetzt, wer du bist. Unter den Rollen und Masken. Das ist Erfahrung, nicht Theorie.", color: "be" },
                { title: "Do Good", description: "Du wei\u00dft jetzt, wie du mit dir selbst arbeitest. Nicht weil dich alles gel\u00f6st hat, sondern weil du wei\u00dft, wie es geht.", color: "do" },
                { title: "Make Money", description: "Du zeigst dich jetzt. Nicht perfekt. Du. Und du hast dein Verh\u00e4ltnis zu Geld gekl\u00e4rt.", color: "make" }
            ]},

            { type: "text", content: "Drei Bereiche. Ein Weg. Das ist die Idee." },
            { type: "text", content: "Das ist kein Versprechen auf ein perfektes Leben. Das ist ein Prozess, der heute anf\u00e4ngt. Dieser Prozess hat vor zehn Wochen angefangen. Jetzt erreicht er die n\u00e4chste Stufe." },

            { type: "divider" },

            // --- Was bleibt ---
            { type: "heading", level: 2, content: "Was bleibt" },
            { type: "text", content: "Du hast Werkzeuge jetzt. Keine Theorien." },
            { type: "text", content: "Die Ankerpraktik. Journaling. Das h\u00e4lt dich mit dir selbst verbunden. Es zeigt dir, was in dir arbeitet." },
            { type: "text", content: "Verstehen. F\u00fchlen. Handeln. Das ist deine Schleife f\u00fcr jedes Problem. Du brauchst keinen Coach. Du hast dich selbst." },
            { type: "text", content: "Letting-Go-Methode. Vier Schritte. F\u00fcr alles, das dich blockiert." },
            { type: "text", content: "Die Neurologischen Ebenen sind dein Kompass. Du kannst jederzeit pr\u00fcfen: Stimmt mein Leben noch?" },
            { type: "text", content: "Das sind echte Werkzeuge. Sie funktionieren f\u00fcr immer. Sie werden besser, weil du besser wirst, nicht weil sie sich \u00e4ndern." },

            { type: "divider" },

            // --- Der letzte Satz ---
            { type: "heading", level: 2, content: "Der letzte Satz" },
            { type: "emphasis", content: "Du bist nicht fertig. Das ist keine Kritik. Das ist Freiheit." },
            { type: "text", content: "Du bist nicht fertig. Keiner ist fertig. Das ist das Leben, nicht ein Problem." },
            { type: "text", content: "Aber du wei\u00dft jetzt, wer du bist und wof\u00fcr du lebst. Du hast Werkzeuge. Du hast einen Plan. Das reicht." },
            { type: "emphasis", content: "Du bist nicht fertig. Aber du wei\u00dft, wohin es geht. Das gen\u00fcgt." },

            { type: "divider" },

            // --- Celebration + Progress + Checklist + Signoff ---
            { type: "celebration", text: "Der gesamte Win\u00b3 Kurs - geschafft." },

            { type: "progress-bar", label: "Alignment 3 von 3", percent: 100, detail: "Alignment" },

            { type: "checklist", items: [
                "Lektion vollst\u00e4ndig gelesen",
                "Alignment-Plan erstellt",
                "Einen ersten Schritt geplant"
            ]},

            { type: "signoff", text: "Du bist nicht fertig. Aber du wei\u00dft, wohin es geht.\\n\\nDas gen\u00fcgt.", name: "Steven" }
        ]
    };

    function init() { window.__WL_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__WL_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://solbachsteven.github.io/website/win3-lektionen/wl-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

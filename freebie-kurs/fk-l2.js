// Freebie Kurs - Lektion 2: Deine Vision einer besseren Welt (Standalone)
// <script src="https://solbachsteven.github.io/website/freebie-kurs/fk-l2.js"></script>
(function() {
    if (window.__FK_L2) return;
    window.__FK_L2 = true;

    var LESSON_DATA = {
    meta: {
        chapter: 0,
        lesson: 2,
        label: "SCHRITT 2",
        title: "Deine Vision einer besseren Welt",
        subtitle: ""
    },
    sections: [
        {
            type: "text",
            content: "Du wei\u00dft jetzt, was dich antreibt. Aber wohin zeigt es?"
        },
        {
            type: "text",
            content: "Jeder Antrieb tr\u00e4gt ein Bild in sich \u2014 ein Bild von einer besseren Welt. Nicht perfekt. Nicht utopisch. Aber anders als jetzt. Etwas in dir wei\u00df, wie es sein k\u00f6nnte. Und dieses Bild wollen wir jetzt finden."
        },
        { type: "divider" },

        {
            type: "heading",
            level: 2,
            content: "Vom Selbstbild zum Weltbild"
        },
        {
            type: "text",
            content: "Im ersten Schritt hast du nach innen geschaut: Was treibt mich an?"
        },
        {
            type: "text",
            content: "Jetzt schauen wir nach au\u00dfen: Wie sieht die bessere Welt aus, auf die dein Warum zeigt?"
        },
        {
            type: "text",
            content: "Das sind zwei Seiten derselben Medaille. Was dich innerlich antreibt, hat einen Bezug zur Welt da drau\u00dfen. Es zeigt auf einen Wunsch nach Ver\u00e4nderung \u2014 auf etwas, das du gerne anders sehen w\u00fcrdest. Nicht in der Weltpolitik. In deiner Welt. In dem Raum, den du mit deinem Sein und deinen Taten ber\u00fchrst."
        },
        {
            type: "text",
            content: "Dein Warum tr\u00e4gt deine Vision bereits in sich. Du musst sie nicht neu erfinden \u2014 nur hinh\u00f6ren."
        },
        { type: "divider" },

        {
            type: "heading",
            level: 2,
            content: "\u00dcbung: Deine Vision finden"
        },
        {
            type: "text",
            content: "Nimm deinen Warum-Satz und stell dir die folgenden Fragen. Lass dir Zeit. Es geht hier nicht um Logik, sondern um Bilder und Gef\u00fchle, die in dir auftauchen."
        },
        {
            type: "heading",
            level: 3,
            content: "1. Wenn du dein Warum lebst \u2014 vollst\u00e4ndig, jeden Tag \u2014 was ver\u00e4ndert sich um dich herum?"
        },
        {
            type: "text",
            content: "Stell dir einen konkreten Tag vor. Du wachst auf und dein Warum, das was dich von innen heraus antreibt, bestimmt deinen Tag. Kein Pflichtprogramm, sondern nat\u00fcrlicher Ausdruck. Wie sieht dieser Tag aus? Was tust du? Wie reagieren die Menschen auf dich?"
        },
        {
            type: "heading",
            level: 3,
            content: "2. Welche Welt m\u00fcsste existieren, damit dein Warum voll zur Entfaltung kommt?"
        },
        {
            type: "text",
            content: "Was m\u00fcsste anders sein? Welche Bedingungen, welche Werte, welche Umgangsformen? Denk nicht daran, ob das realistisch ist. Denk daran, was du dir w\u00fcnschst."
        },
        {
            type: "heading",
            level: 3,
            content: "3. Was fehlt in der Welt, solange du dein Warum nicht lebst?"
        },
        {
            type: "text",
            content: "Wenn es einen Beitrag zu einer besseren Welt gibt \u2014 im Kleinen wie im Gro\u00dfen \u2014 den nur du auf deine Art leisten kannst: Was bleibt ungesagt, ungetan, unerschaffen, solange du es nicht tust?"
        },
        { type: "divider" },

        {
            type: "heading",
            level: 2,
            content: "Deine Vision formulieren"
        },
        {
            type: "text",
            content: "Aus deinen Antworten formt sich ein Bild. Nicht die L\u00f6sung aller Weltprobleme. Sondern dein ganz pers\u00f6nlicher Blick auf das, was besser sein k\u00f6nnte."
        },
        {
            type: "quote",
            content: "Es gibt eine sch\u00f6nere Welt, von der unsere Herzen wissen, dass sie m\u00f6glich ist.",
            attribution: "Charles Eisenstein"
        },
        {
            type: "text",
            content: "Dein Herz wei\u00df es. Jetzt gib dem Bild Worte. Die Vision der Welt, in der du aufwachen m\u00f6chtest, wenn du morgens die Augen aufmachst."
        },
        {
            type: "text",
            content: "Formuliere dieses Bild als Satz:"
        },
        {
            type: "emphasis",
            content: "\"Ich m\u00f6chte in einer Welt leben, in der ___.\""
        },
        {
            type: "text",
            content: "Nicht was du tust. Sondern wie die Welt aussieht, zu der du beitragen willst."
        },
        { type: "divider" },

        {
            type: "heading",
            level: 2,
            content: "KI-Prompt"
        },
        {
            type: "text",
            content: "Optional \u2014 kopiere den Text in eine KI deiner Wahl:"
        },
        {
            type: "copyblock",
            content: "Ich arbeite an meiner pers\u00f6nlichen Vision. Mein Warum \u2014 das, was mich antreibt \u2014 ist: \"[DEIN WARUM-SATZ]\".\n\nJetzt m\u00f6chte ich herausfinden, welche Welt ich mir w\u00fcnsche. Stelle mir nacheinander 3 Fragen und warte jeweils meine Antwort ab:\n1) Wenn du dein Warum jeden Tag voll lebst \u2014 was ver\u00e4ndert sich um dich herum? Beschreib einen konkreten Tag.\n2) Welche Welt m\u00fcsste existieren, damit dein Warum voll zur Entfaltung kommt? Was m\u00fcsste anders sein?\n3) Was fehlt in der Welt, solange du dein Warum nicht lebst?\nNach meinen Antworten: Hilf mir, meine Vision zu formulieren. Mach einen Vorschlag f\u00fcr den Satz \"Ich m\u00f6chte in einer Welt leben, in der ___.\" Ehrlich und konkret."
        },
        { type: "divider" },

        {
            type: "heading",
            level: 2,
            content: "Checkpoint"
        },
        {
            type: "text",
            content: "Lies deine beiden S\u00e4tze zusammen \u2014 deinen Warum-Satz und deinen Vision-Satz. Sp\u00fcrst du, wie das eine zum anderen f\u00fchrt? Dein Warum und deine Vision sind keine getrennten Dinge. Sie sind zwei Perspektiven auf dieselbe Wahrheit."
        },
        {
            type: "celebration"
        },
        {
            type: "text",
            content: "Im n\u00e4chsten Schritt verbinden wir sie. Dort wird aus dem, was du erkannt hast, etwas, das du tun kannst."
        }
    ]
};

    var anchor = document.currentScript || document.scripts[document.scripts.length - 1];
    function init() { window.__FK_ENGINE.render(LESSON_DATA, anchor); }
    if (window.__FK_ENGINE) { init(); return; }
    var s = document.createElement('script');
    s.src = 'https://solbachsteven.github.io/website/freebie-kurs/fk-engine.js';
    s.onload = init;
    document.head.appendChild(s);
})();

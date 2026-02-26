// Freebie Kurs - Lektion 1: Dein tieferes Warum (Standalone)
// <script src="https://solbachsteven.github.io/website/freebie-kurs/fk-l1.js"></script>
(function() {
    if (window.__FK_L1) return;
    window.__FK_L1 = true;

    var LESSON_DATA = {
    meta: {
        chapter: 0,
        lesson: 1,
        label: "SCHRITT 1",
        title: "Dein tieferes Warum",
        subtitle: ""
    },
    sections: [
        {
            type: "text",
            content: "Irgendwo in dir gibt es etwas, das schon da war, bevor du einen Namen daf\u00fcr hattest."
        },
        {
            type: "text",
            content: "Ein Thema, das dich immer wieder begeistert. Gespr\u00e4che, bei denen du hellwach wirst. Ein Gef\u00fchl von \"Ja, genau das\" \u2014 auch wenn du nicht erkl\u00e4ren kannst, warum."
        },
        {
            type: "text",
            content: "In diesem Schritt gehen wir auf die Suche danach. Nicht nach einem Beruf, nicht nach einer Rolle. Sondern nach dem, was dich von innen heraus antreibt \u2014 unabh\u00e4ngig davon, ob jemand daf\u00fcr bezahlt oder applaudiert."
        },
        { type: "divider" },

        {
            type: "heading",
            level: 2,
            content: "Was \"Warum\" hier bedeutet"
        },
        {
            type: "text",
            content: "Wenn ich von deinem \"Warum\" spreche, meine ich nicht deinen Lebenszweck im gro\u00dfen kosmischen Sinne. Ich meine etwas viel N\u00e4heres."
        },
        {
            type: "text",
            content: "Dein Warum ist das, was dich in Bewegung bringt, ohne dass jemand dich schubsen muss. Es ist der Grund, warum du bei bestimmten Themen hellwach wirst, w\u00e4hrend andere dich kaltlassen. Warum du bestimmte Gespr\u00e4che stundenlang f\u00fchren k\u00f6nntest und bei anderen nach drei Minuten abschaltest."
        },
        {
            type: "text",
            content: "Dein Warum ist kein Konzept, das du dir ausdenkst. Es ist ein Muster, das schon in dir liegt. Es hinterl\u00e4sst Spuren und begleitet dich dein ganzes Leben lang."
        },
        {
            type: "quote",
            content: "Wer ein Warum zum Leben hat, ertr\u00e4gt fast jedes Wie.",
            attribution: "Friedrich Nietzsche"
        },
        {
            type: "text",
            content: "Dein Warum gibt dir Orientierung. Es zeigt dir, wof\u00fcr es sich lohnt, Widerst\u00e4nde zu \u00fcberwinden \u2014 und welche K\u00e4mpfe gar nicht deine sind."
        },
        {
            type: "text",
            content: "Die Aufgabe in diesem Schritt ist nicht, etwas Neues zu erschaffen. Sondern die Spuren zu lesen, die schon da sind."
        },
        { type: "divider" },

        {
            type: "heading",
            level: 2,
            content: "\u00dcbung: Deine Spuren lesen"
        },
        {
            type: "text",
            content: "Nimm dir f\u00fcr die folgenden Fragen so viel Zeit, wie du brauchst. Es gibt keine Musterl\u00f6sung. Manche Fragen werden sofort etwas ausl\u00f6sen, bei anderen wirst du vielleicht erst einmal nichts finden. Beides ist normal."
        },
        {
            type: "heading",
            level: 3,
            content: "1. Was tust du, wenn niemand zuschaut?"
        },
        {
            type: "text",
            content: "Nicht was du tun solltest. Was du tats\u00e4chlich tust, wenn kein Druck da ist, keine Erwartung, keine Belohnung. Wenn ein freier Nachmittag vor dir liegt und du niemandem Rechenschaft schuldig bist \u2014 wohin zieht es dich? Das ist kein Zufall. Das ist ein Hinweis."
        },
        {
            type: "heading",
            level: 3,
            content: "2. Was hat dich als Kind begeistert?"
        },
        {
            type: "text",
            content: "Bevor das System dir gesagt hat, was \"wichtig\" ist und was nicht \u2014 was hat dich angezogen? Welche Fragen hast du gestellt? Was konntest du stundenlang tun? Kinder filtern nicht. Sie folgen dem, was sie wirklich interessiert. Diese fr\u00fchen Faszinationen sind oft die ehrlichsten Wegweiser."
        },
        {
            type: "heading",
            level: 3,
            content: "3. Was emp\u00f6rt dich?"
        },
        {
            type: "text",
            content: "Nicht was dich nervt \u2014 das Wetter, der Verkehr, der Nachbar. Sondern was dich auf einer tieferen Ebene trifft. Welche Ungerechtigkeit, welche Ignoranz, welches Versagen l\u00e4sst dich nicht kalt? Emp\u00f6rung zeigt, wo deine Werte liegen. Sie zeigt, was dir wirklich wichtig oder \"ganz und gar nicht egal\" ist."
        },
        {
            type: "heading",
            level: 3,
            content: "4. Wobei vergisst du die Zeit?"
        },
        {
            type: "text",
            content: "Es gibt Momente, in denen du so aufgehst in dem, was du tust, dass die Uhr irrelevant wird. Das sind Flow-Zust\u00e4nde. Du bist nah an etwas, das dir entspricht. Was ist es?"
        },
        {
            type: "heading",
            level: 3,
            content: "5. Wor\u00fcber kannst du reden, ohne m\u00fcde zu werden?"
        },
        {
            type: "text",
            content: "Jeder hat dieses eine Thema. Oder diese zwei, drei Themen. Die, bei denen du pl\u00f6tzlich lebendig wirst. Bei denen du Dinge wei\u00dft, die du nie bewusst gelernt hast, weil dich das Thema so fasziniert, dass du es aufgesogen hast wie ein Schwamm. Was sind deine?"
        },
        { type: "divider" },

        {
            type: "heading",
            level: 2,
            content: "Den roten Faden finden"
        },
        {
            type: "text",
            content: "Lies deine Antworten durch \u2014 nicht analytisch, sondern mit offenem Blick. Such nicht nach der einen perfekten Antwort. Such nach dem Muster."
        },
        {
            type: "text",
            content: "Vielleicht taucht ein Thema in mehreren Antworten auf. Vielleicht ist es ein Gef\u00fchl, das sich durchzieht. Vielleicht eine bestimmte Art von T\u00e4tigkeit."
        },
        {
            type: "text",
            content: "Stell dir die Frage: Wenn ich das alles zusammennehme \u2014 was sagt das \u00fcber mich?"
        },
        {
            type: "text",
            content: "Vielleicht kommst du auf ein Wort. Vielleicht auf einen Satz. Vielleicht auf ein Bild."
        },
        {
            type: "text",
            content: "Formuliere es \u2014 so, wie es sich f\u00fcr dich richtig anf\u00fchlt:"
        },
        {
            type: "emphasis",
            content: "\"Was mich antreibt ist ___.\""
        },
        {
            type: "text",
            content: "Dieser Satz darf unfertig sein. Er darf sich in den n\u00e4chsten Tagen ver\u00e4ndern. Aber schreib ihn auf. Etwas aufzuschreiben macht es real."
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
            content: "Ich m\u00f6chte herausfinden, was mich im tiefsten Inneren antreibt \u2014 mein pers\u00f6nliches Warum. Stelle mir die folgenden 5 Fragen, eine nach der anderen. Warte immer meine Antwort ab. Fass nicht zusammen, bewerte nicht \u2014 frag h\u00f6chstens nach, wenn du etwas nicht verstehst. Nach allen 5 Antworten: Hilf mir, den roten Faden zu finden. Welches Muster siehst du? Formuliere einen Vorschlag f\u00fcr meinen Satz \"Was mich antreibt ist ___.\" \u2014 aber \u00e4ndere nichts, ohne dass ich zustimme.\n\nDie Fragen:\n1) Was tust du, wenn niemand zuschaut und du niemandem Rechenschaft schuldest?\n2) Was hat dich als Kind fasziniert, bevor dir jemand gesagt hat, was realistisch ist?\n3) Was emp\u00f6rt dich auf einer tieferen Ebene \u2014 nicht was dich nervt, sondern was dich wirklich trifft?\n4) Wobei vergisst du die Zeit?\n5) Wor\u00fcber kannst du reden, ohne m\u00fcde zu werden?"
        },
        { type: "divider" },

        {
            type: "heading",
            level: 2,
            content: "Checkpoint"
        },
        {
            type: "text",
            content: "Du hast deinen ersten Satz. Deinen Warum-Satz."
        },
        {
            type: "celebration"
        },
        {
            type: "text",
            content: "Vielleicht f\u00fchlt er sich schon klar an. Vielleicht arbeitet er noch in dir. Beides ist gut und richtig."
        },
        {
            type: "text",
            content: "Schreib ihn auf und nimm ihn mit in den n\u00e4chsten Schritt. Dort schauen wir, was dein Warum mit der Welt da drau\u00dfen zu tun hat."
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

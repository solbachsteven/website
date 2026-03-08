// Win³ Community - Ankerpraktik Test-Definitionen
// Isomorph: Browser (window.__AP_TEST_DEFS) + Node.js (module.exports)
// Jeder Test ist ein Eintrag mit Fragen, Scoring, Ergebnissen und Prompt-Integration
(function(exports) {
    'use strict';

    // ============================================================
    // MBTI - 16 Persönlichkeitstypen
    // ============================================================
    exports.mbti = {
        id: 'mbti',
        title: 'Persönlichkeitstest',
        subtitle: '16 Persönlichkeiten - Finde deinen Typ',
        category: 'personality',
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BC8034" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="rgba(188,128,52,0.2)" stroke="#BC8034"/></svg>',
        description: 'Entdecke deinen Persönlichkeitstyp basierend auf den 16 Typen. 20 Fragen, ca. 5 Minuten.',

        questionFormat: 'forced-choice',
        questions: [
            // E/I - Energiequelle
            { dim: 'EI', q: 'Nach einem intensiven Tag tanke ich Energie am liebsten...', a: 'unter Menschen - reden, lachen, etwas unternehmen', b: 'allein oder mit einer engen Person - Ruhe, Nachdenken' },
            { dim: 'EI', q: 'In einer neuen Gruppe...', a: 'komme ich schnell ins Gespräch und lerne viele kennen', b: 'beobachte ich erst und öffne mich langsam' },
            { dim: 'EI', q: 'Meine besten Ideen kommen mir...', a: 'im Gespräch mit anderen - beim Brainstormen und Diskutieren', b: 'wenn ich allein nachdenke - beim Spazieren oder Schreiben' },
            { dim: 'EI', q: 'Wenn mich etwas beschäftigt...', a: 'spreche ich darüber - das hilft mir, Klarheit zu finden', b: 'denke ich erst allein nach, bevor ich es teile' },
            { dim: 'EI', q: 'Mein idealer Arbeitstag hat...', a: 'viel Austausch, Meetings, gemeinsames Arbeiten', b: 'lange Fokus-Phasen, wenig Unterbrechungen' },

            // S/N - Informationsverarbeitung
            { dim: 'SN', q: 'Wenn ich ein Problem löse, verlasse ich mich eher auf...', a: 'Fakten, Erfahrungen und bewährte Methoden', b: 'Intuition, Muster und neue Möglichkeiten' },
            { dim: 'SN', q: 'In einem Gespräch achte ich mehr auf...', a: 'konkrete Details und was genau gesagt wird', b: 'die Stimmung, das Ungesagte und die größere Bedeutung' },
            { dim: 'SN', q: 'Ich lese oder höre am liebsten Inhalte die...', a: 'praktisch anwendbar sind - Schritt-für-Schritt', b: 'zum Denken anregen - Theorien, Visionen, Was-wäre-wenn' },
            { dim: 'SN', q: 'Wenn jemand mir etwas erklärt, will ich zuerst...', a: 'die konkreten Fakten und Details verstehen', b: 'das große Bild und den Zusammenhang sehen' },
            { dim: 'SN', q: 'In meinem Alltag bin ich eher...', a: 'im Hier und Jetzt - pragmatisch und realistisch', b: 'in der Zukunft - visionär und ideenreich' },

            // T/F - Entscheidungsfindung
            { dim: 'TF', q: 'Bei einer wichtigen Entscheidung achte ich mehr auf...', a: 'Logik und Fairness - was objektiv am besten ist', b: 'Werte und Harmonie - wie es sich für alle anfühlt' },
            { dim: 'TF', q: 'Wenn ein Freund einen Fehler macht...', a: 'sage ich ehrlich meine Meinung, auch wenn es unangenehm ist', b: 'achte ich darauf, wie ich es sage, damit es nicht verletzt' },
            { dim: 'TF', q: 'Kritik nehme ich am ehesten an, wenn sie...', a: 'sachlich und klar formuliert ist - Fakten statt Gefühle', b: 'wertschätzend verpackt ist und meine Mühe anerkennt' },
            { dim: 'TF', q: 'In einem Konflikt ist mir wichtiger...', a: 'dass das Richtige getan wird, auch wenn es wehtut', b: 'dass die Beziehung intakt bleibt und alle gehört werden' },
            { dim: 'TF', q: 'Andere würden mich eher beschreiben als...', a: 'analytisch, direkt und lösungsorientiert', b: 'einfühlsam, warmherzig und mitfühlend' },

            // J/P - Lebensführung
            { dim: 'JP', q: 'Ich arbeite am produktivsten, wenn ich...', a: 'einen klaren Plan habe und Schritt für Schritt vorgehe', b: 'flexibel bleibe und auf den Moment reagieren kann' },
            { dim: 'JP', q: 'Deadlines sind für mich...', a: 'hilfreich - sie geben Struktur und Motivation', b: 'einengend - ich liefere oft die besten Ergebnisse spontan' },
            { dim: 'JP', q: 'Mein Schreibtisch / Workspace ist meistens...', a: 'aufgeräumt und organisiert - alles hat seinen Platz', b: 'kreatives Chaos - ich weiß wo alles ist, auch wenn es nicht so aussieht' },
            { dim: 'JP', q: 'Am Wochenende...', a: 'habe ich meistens einen Plan, was ich machen möchte', b: 'entscheide ich spontan, worauf ich Lust habe' },
            { dim: 'JP', q: 'Wenn sich Pläne plötzlich ändern...', a: 'nervt mich das meistens - ich mag Verlässlichkeit', b: 'finde ich das oft spannend - Überraschungen können gut sein' }
        ],

        // Scoring-Funktion: answers = Array of 'a'|'b', questions = this.questions
        score: function(answers, questions) {
            var dims = { EI: 0, SN: 0, TF: 0, JP: 0 };
            var counts = { EI: 0, SN: 0, TF: 0, JP: 0 };

            for (var i = 0; i < questions.length; i++) {
                var dim = questions[i].dim;
                counts[dim]++;
                if (answers[i] === 'a') dims[dim]++;
            }

            var scores = {};
            var type = '';

            // EI: a=E, b=I - hoher Wert = mehr E
            var ePct = Math.round((dims.EI / counts.EI) * 100);
            scores.EI = ePct;
            type += ePct >= 50 ? 'E' : 'I';

            // SN: a=S, b=N - invertiert: hoher Wert = mehr N
            var sPct = Math.round((dims.SN / counts.SN) * 100);
            scores.SN = 100 - sPct;
            type += scores.SN >= 50 ? 'N' : 'S';

            // TF: a=T, b=F - invertiert: hoher Wert = mehr F
            var tPct = Math.round((dims.TF / counts.TF) * 100);
            scores.TF = 100 - tPct;
            type += scores.TF >= 50 ? 'F' : 'T';

            // JP: a=J, b=P - invertiert: hoher Wert = mehr P
            var jPct = Math.round((dims.JP / counts.JP) * 100);
            scores.JP = 100 - jPct;
            type += scores.JP >= 50 ? 'P' : 'J';

            return { resultKey: type, scores: scores };
        },

        // Ergebnis-Daten (Key = resultKey)
        results: {
            ISTJ: { name: 'Der Inspektor', desc: 'Pflichtbewusst, gründlich und verlässlich. Du baust auf Fakten und Erfahrung und schaffst Ordnung wo andere Chaos sehen.', win3: 'Deine Stärke im Win\u00b3 Kurs: Du setzt konsequent um. Achte darauf, dass Perfektionismus dich nicht bremst - manchmal ist "gut genug" der mutigere Schritt.' },
            ISFJ: { name: 'Der Beschützer', desc: 'Fürsorglich, loyal und aufmerksam. Du siehst was andere brauchen, oft bevor sie es selbst wissen.', win3: 'Deine Stärke im Win\u00b3 Kurs: Du verstehst Menschen intuitiv. Die Herausforderung: auch dir selbst diese Fürsorge zu geben - nicht nur anderen.' },
            INFJ: { name: 'Der Advokat', desc: 'Tiefgründig, idealistisch und visionär. Du lebst für Bedeutung und willst die Welt ein Stück besser machen.', win3: 'Deine Stärke im Win\u00b3 Kurs: Du erkennst Muster in deiner inneren Welt. Achte darauf, deine Visionen auch in konkrete Schritte zu übersetzen.' },
            INTJ: { name: 'Der Architekt', desc: 'Strategisch, unabhängig und zielstrebig. Du siehst Systeme und Verbesserungsmöglichkeiten wo andere Status quo sehen.', win3: 'Deine Stärke im Win\u00b3 Kurs: Du planst langfristig und denkst systematisch. Die Herausforderung: Gefühle nicht als Ineffizienz abzutun.' },
            ISTP: { name: 'Der Virtuose', desc: 'Praktisch, anpassungsfähig und ruhig-analytisch. Du lernst am besten durch Ausprobieren und löst Probleme mit kühlem Kopf.', win3: 'Deine Stärke im Win\u00b3 Kurs: Du probierst einfach aus statt endlos zu planen. Achte darauf, auch die emotionale Ebene zuzulassen.' },
            ISFP: { name: 'Der Abenteurer', desc: 'Sensibel, kreativ und authentisch. Du lebst nach deinen Werten und drückst dich am liebsten durch Taten statt Worte aus.', win3: 'Deine Stärke im Win\u00b3 Kurs: Du spürst sofort was sich echt anfühlt. Die Herausforderung: deine leise Stimme auch laut werden zu lassen.' },
            INFP: { name: 'Der Mediator', desc: 'Idealistisch, empathisch und kreativ. Du trägst eine reiche innere Welt in dir und suchst tiefere Bedeutung in allem.', win3: 'Deine Stärke im Win\u00b3 Kurs: Das Expressive Writing ist wie für dich gemacht. Achte darauf, von der inneren Welt auch ins Handeln zu kommen.' },
            INTP: { name: 'Der Logiker', desc: 'Analytisch, neugierig und unkonventionell. Du liebst es, Dinge zu verstehen und denkst in Systemen und Modellen.', win3: 'Deine Stärke im Win\u00b3 Kurs: Du analysierst dich selbst mit Schärfe. Die Herausforderung: nicht alles zu rationalisieren - manche Wahrheiten fühlst du.' },
            ESTP: { name: 'Der Unternehmer', desc: 'Energisch, pragmatisch und direkt. Du lebst im Moment, packst an und findest Lösungen wo andere noch diskutieren.', win3: 'Deine Stärke im Win\u00b3 Kurs: Du setzt sofort um. Die Herausforderung: auch mal innezuhalten und die tieferen Muster zu sehen.' },
            ESFP: { name: 'Der Entertainer', desc: 'Spontan, großzügig und lebendig. Du bringst Energie in jeden Raum und lebst das Leben mit vollen Zügen.', win3: 'Deine Stärke im Win\u00b3 Kurs: Deine Authentizität ist ansteckend. Achte darauf, auch die unbequemen Gefühle nicht zu überspielen.' },
            ENFP: { name: 'Der Entdecker', desc: 'Enthusiastisch, kreativ und menschenverbunden. Du siehst in jedem Menschen und jeder Situation Potenzial und Möglichkeiten.', win3: 'Deine Stärke im Win\u00b3 Kurs: Du verbindest Ideen und Menschen intuitiv. Die Herausforderung: bei einer Sache zu bleiben und sie zu Ende zu bringen.' },
            ENTP: { name: 'Der Debattierer', desc: 'Erfinderisch, provokativ und intellektuell. Du hinterfragst alles und findest in jeder Regel eine kreative Ausnahme.', win3: 'Deine Stärke im Win\u00b3 Kurs: Du erkennst blinde Flecken sofort. Die Herausforderung: nicht nur zu analysieren, sondern auch zu fühlen.' },
            ESTJ: { name: 'Der Direktor', desc: 'Organisiert, entschlossen und verantwortungsbewusst. Du schaffst Strukturen und bringst Projekte zuverlässig ins Ziel.', win3: 'Deine Stärke im Win\u00b3 Kurs: Du ziehst durch was du anfängst. Achte darauf, dass Kontrolle nicht zum Schutzschild gegen Verletzlichkeit wird.' },
            ESFJ: { name: 'Der Konsul', desc: 'Warmherzig, gewissenhaft und kooperativ. Du sorgst dafür, dass es allen gut geht und schaffst Gemeinschaft.', win3: 'Deine Stärke im Win\u00b3 Kurs: Du verstehst soziale Dynamiken intuitiv. Die Herausforderung: dich nicht über die Erwartungen anderer zu definieren.' },
            ENFJ: { name: 'Der Protagonist', desc: 'Charismatisch, inspirierend und fürsorglich. Du siehst das Beste in Menschen und hilfst ihnen, es zu erreichen.', win3: 'Deine Stärke im Win\u00b3 Kurs: Du bist ein geborener Coach für andere. Die Herausforderung: denselben Dienst auch dir selbst zu erweisen.' },
            ENTJ: { name: 'Der Kommandeur', desc: 'Visionär, entschlossen und führungsstark. Du denkst groß, planst strategisch und scheust keine Verantwortung.', win3: 'Deine Stärke im Win\u00b3 Kurs: Du setzt große Ziele und erreichst sie. Die Herausforderung: Verletzlichkeit als Stärke zu entdecken, nicht als Schwäche.' }
        },

        // Dimensions für Balken-Anzeige
        dimensions: [
            { key: 'EI', left: 'Introvertiert', right: 'Extravertiert' },
            { key: 'SN', left: 'Sensorisch', right: 'Intuitiv' },
            { key: 'TF', left: 'Denkend', right: 'Fühlend' },
            { key: 'JP', left: 'Urteilend', right: 'Wahrnehmend' }
        ],

        resultDisplay: 'type-with-dims',

        // Mirror-Integration
        mirrorSource: 'test:mbti',

        buildMirrorText: function(resultKey, scores, resultData) {
            return 'Mein Persönlichkeitstyp: ' + resultKey + ' - ' + resultData.name + '.\n\n'
                + resultData.desc + '\n\n'
                + 'Im Kontext meiner Selbstentwicklung: ' + resultData.win3 + '\n\n'
                + 'Ich frage mich, was das über mich aussagt. '
                + 'Wo erkenne ich mich wieder, wo nicht? '
                + 'Was davon ist eine Stärke, was hält mich zurück?';
        },

        // Prompt-Kontext für alle Spiegel/Coach-Prompts
        buildPromptContext: function(assessment) {
            var labels = {
                E: 'Extravertiert', I: 'Introvertiert',
                S: 'Sensorisch', N: 'Intuitiv',
                T: 'Denkend', F: 'Fühlend',
                J: 'Urteilend', P: 'Wahrnehmend'
            };
            var letters = assessment.resultKey.split('');
            var labelStr = letters.map(function(l) { return labels[l] || l; }).join(', ');
            return 'MBTI-Typ: ' + assessment.resultKey + ' (' + labelStr + ')';
        },

        // Mirror-Prompt-Erweiterung (testspezifisch)
        mirrorPromptBlock: 'Der User hat einen Persönlichkeitstest (MBTI/16 Typen) gemacht.\n'
            + 'Spiegele die Bedeutung der Persönlichkeitsmuster für das Leben des Users.\n'
            + 'Benenne Stärken UND Schattenseiten ehrlich.\n'
            + 'Verbinde die Muster mit typischen Selbstentwicklungsthemen.\n'
            + 'Kein Schubladendenken - der Typ ist ein Spiegel, keine Identität.',

        // Coach-Prompt-Erweiterung (testspezifisch)
        coachPromptBlock: 'Der User hat einen Persönlichkeitstest (MBTI/16 Typen) gemacht und möchte seine Ergebnisse vertiefen.\n'
            + 'Stelle vertiefende Fragen zum Persönlichkeitstyp und dessen Bedeutung im Alltag.\n'
            + 'Kein Schubladendenken.'
    };

    // ============================================================
    // Hier kommen weitere Tests hin:
    // exports.enneagram = { ... };
    // exports.values = { ... };
    // exports.alignment_check = { ... };
    // ============================================================

})(typeof module !== 'undefined' && module.exports ? module.exports : (window.__AP_TEST_DEFS = window.__AP_TEST_DEFS || {}));

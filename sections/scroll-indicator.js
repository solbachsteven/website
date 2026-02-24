/*
 * Scroll Indicator - Steven Solbach Website
 * Standalone JS - laedt CSS + HTML + Animationen selbst
 * Source of Truth: Obsidian Vault > Scroll Indicator Code.md
 */

/* === Font + CSS Injection === */
(function() {
    var fonts = ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap'];
    fonts.forEach(function(url) {
        if (!document.querySelector('link[href="' + url + '"]')) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        }
    });

    var style = document.createElement('style');
    style.setAttribute('data-section', 'scroll-indicator');
    style.textContent = `
.scroll-v2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    padding: 40px 0;
}

.scroll-v2-text {
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    letter-spacing: 0.5px;
    opacity: 0.9;
}

.scroll-v2-circle {
    width: 50px;
    height: 50px;
    border: 1px solid rgba(188, 128, 52, 0.4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.scroll-v2-circle::before {
    content: '';
    position: absolute;
    inset: -6px;
    border: 1px solid rgba(188, 128, 52, 0.2);
    border-radius: 50%;
    animation: v2Pulse 2s ease-out infinite;
}

.scroll-v2-arrow {
    width: 20px;
    height: 20px;
    color: #BC8034;
    animation: v2Bounce 1.5s ease-in-out infinite;
}

@keyframes v2Pulse {
    0% { transform: scale(1); opacity: 0.5; }
    100% { transform: scale(1.5); opacity: 0; }
}

@keyframes v2Bounce {
    0%, 100% { transform: translateY(-3px); }
    50% { transform: translateY(3px); }
}

@media (max-width: 768px) {
    .scroll-v2 {
        display: none;
    }
}
    `;
    document.head.appendChild(style);
})();

/* === Scroll Indicator Renderer === */
(function() {
    var html = '' +
        '<div class="scroll-v2">' +
            '<div class="scroll-v2-text"></div>' +
            '<div class="scroll-v2-circle">' +
                '<svg class="scroll-v2-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                    '<polyline points="6 9 12 15 18 9"></polyline>' +
                '</svg>' +
            '</div>' +
        '</div>';

    var target = window.__SS_CONTAINER || document.body;
    var wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    target.appendChild(wrapper.firstElementChild);
})();

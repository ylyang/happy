document.addEventListener('DOMContentLoaded', () => {
    const characterImg = document.getElementById('character-img');
    const hitBtn = document.getElementById('hit-btn');
    const kissBtn = document.getElementById('kiss-btn');

    let timeoutId = null;

    function resetCharacter() {
        characterImg.src = 'normal.png';
        characterImg.classList.remove('shake-animation', 'pulse-animation');
    }

    hitBtn.addEventListener('click', () => {
        // Clear existing timeout if user clicks rapidly
        if (timeoutId) clearTimeout(timeoutId);

        // Change state
        characterImg.src = 'hit.png';

        // Reset animations
        characterImg.classList.remove('pulse-animation');
        characterImg.classList.remove('shake-animation');

        // Force reflow to restart animation
        void characterImg.offsetWidth;

        characterImg.classList.add('shake-animation');

        // Reset after delay
        timeoutId = setTimeout(resetCharacter, 1500);
    });

    kissBtn.addEventListener('click', () => {
        // Clear existing timeout if user clicks rapidly
        if (timeoutId) clearTimeout(timeoutId);

        // Change state
        characterImg.src = 'kiss.png';

        // Reset animations
        characterImg.classList.remove('shake-animation');
        characterImg.classList.remove('pulse-animation');

        // Force reflow to restart animation
        void characterImg.offsetWidth;

        characterImg.classList.add('pulse-animation');

        // Reset after delay
        timeoutId = setTimeout(resetCharacter, 1500);
    });
});

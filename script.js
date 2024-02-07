document.getElementById('showLove').addEventListener('click', function() {
    var heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);

    // Calculate random positions within the viewport
    var xPos = Math.random() * (window.innerWidth - 100); // Subtract 100 to account for heart size
    var yPos = Math.random() * (window.innerHeight - 100); // Subtract 100 to account for heart size

    // Apply random positions and initiate explosion animation
    heart.style.left = xPos + 'px';
    heart.style.top = yPos + 'px';
    heart.style.position = 'absolute';

    setTimeout(() => {
        heart.style.animation = 'explode 0.75s forwards';
    }, 10);

    // Remove the heart after the animation completes
    setTimeout(() => {
        heart.remove();
    }, 750); // Match the duration of the explode animation
});

document.addEventListener('DOMContentLoaded', function() {
    const phrases = ["You could hold moonlight in your hands", "'til the night I held you", "you are my moonlight","Labyu, dong"];
    let currentPhraseIndex = 0;

    const typingElement = document.getElementById('typing');

    function changeText() {
        typingElement.textContent = phrases[currentPhraseIndex];
        typingElement.style.animation = 'none'; // Reset animation
        typingElement.offsetHeight; // Trigger reflow
        typingElement.style.animation = null; // Reapply animation

        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to next phrase or loop back
    }

    // Initial typing effect
    setTimeout(changeText, 3500); // Match the duration of the typing animation

    // Re-type with new text every 3.5 seconds + some pause
    setInterval(changeText, 4000); // Adjust time as needed
});

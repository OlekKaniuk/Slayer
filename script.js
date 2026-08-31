const cards = document.querySelectorAll('.photoCart');

const audioPlayer = new Audio();

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        const soundPath = card.getAttribute('data-sound');

        if (soundPath) {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;

            audioPlayer.src = soundPath;
            audioPlayer.play();
        }
    })
})
const cards = document.querySelectorAll('.photoCart');
const audioPlayer = new Audio();
const scrollTopBtn = document.getElementById('scrollTopBtn');

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        const soundPath = card.getAttribute('data-sound');

        if (soundPath) {
            cards.forEach(c => c.classList.remove('is-speaking'));
            audioPlayer.onended = null;

            audioPlayer.pause();
            audioPlayer.currentTime = 0;

            card.classList.add('is-speaking');
            audioPlayer.src = soundPath;
            audioPlayer.play();

            audioPlayer.onended = () => {
                card.classList.remove('is-speaking');
            };
        }
    });
});

// Показуємо кнопку, коли користувач прокрутив вниз на 300px
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Плавний скрол нагору при кліку
scrollTopBtn.addEventListener('click', (e) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
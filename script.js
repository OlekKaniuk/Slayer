const cards = document.querySelectorAll('.photoCart');
const audioPlayer = new Audio();
const scrollTopBtn = document.getElementById('scrollTopBtn');

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
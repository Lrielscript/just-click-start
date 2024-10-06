const bgMusic = document.getElementById('bgMusic');
const clickSound = document.getElementById('clickSound');
const button = document.getElementById('startGame');

window.onload = () => {
    bgMusic.volume = localStorage.getItem('bgVolume') || 1;
    clickSound.volume = localStorage.getItem('clickVolume') || 1;

    startMusicRandomly();

    button.onmouseenter = () => button.classList.add('flicker-cursor');
    button.onmouseleave = () => button.classList.remove('flicker-cursor');
    button.onclick = () => handleClick('game.html');
    
    document.getElementById('options').onclick = () => handleClick('options.html');
    document.getElementById('exit').onclick = () => handleClick('credits.html');
    
    document.body.onclick = startMusicRandomly;
};

const handleClick = (url) => {
    playClickSound();
    startMusicRandomly();
    setTimeout(() => window.location.href = url, 1000);
};

const playClickSound = () => {
    clickSound.currentTime = 0;
    clickSound.play();
};

const startMusicRandomly = () => {
    bgMusic.play().then(() => {
        bgMusic.currentTime = Math.random() * bgMusic.duration;
    }).catch(console.error);
};

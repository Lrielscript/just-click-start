window.onload = () => {
  const bgMusic = document.getElementById('bgMusic'), clickSound = document.getElementById('clickSound');
  [bgMusic.volume, clickSound.volume] = [localStorage.getItem('bgVolume') || 1, localStorage.getItem('clickVolume') || 1];
  const handleClick = (url) => { clickSound.currentTime = 0; clickSound.play(); setTimeout(() => location.href = url, 1000); };
  const startMusicRandomly = () => bgMusic.play().then(() => bgMusic.currentTime = Math.random() * bgMusic.duration).catch(console.error);
  
  startMusicRandomly();
  document.getElementById('startGame').onmouseenter = e => e.target.classList.add('flicker-cursor');
  document.getElementById('startGame').onmouseleave = e => e.target.classList.remove('flicker-cursor');
  ['startGame', 'options', 'exit'].forEach(id => document.getElementById(id).onclick = () => handleClick(`${id === 'startGame' ? 'game' : id}.html`));
  document.body.onclick = startMusicRandomly;
};

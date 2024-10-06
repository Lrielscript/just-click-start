  const bgMusic = document.getElementById('bgMusic');
    const clickSound = document.getElementById('clickSound');
    const button = document.getElementById('startGame'); // Get the button

    // Load settings from localStorage
window.onload = function() {
    const savedBgVolume = localStorage.getItem('bgVolume');
    const savedClickVolume = localStorage.getItem('clickVolume');

    if (savedBgVolume !== null) {
        bgMusic.volume = savedBgVolume; // Set background music volume
    }
    if (savedClickVolume !== null) {
        clickSound.volume = savedClickVolume; // Set click sound volume
    }

    startMusicRandomly(); // Start background music with random start time
};

    // Function to play the click sound
    function playClickSound() {
        clickSound.currentTime = 0; // Reset to the beginning
        clickSound.play(); // Play the click sound
    }

    // Function to start the background music from a random time
    function startMusicRandomly() {
        bgMusic.play().then(() => {
            const randomTime = Math.random() * bgMusic.duration; // Random time between 0 and the music's total duration
            bgMusic.currentTime = randomTime; // Set the music to start from this random time
        }).catch(error => {
            console.log("Error playing the music:", error);
        });
    }

    // Flicker effect for the cursor
    function startFlicker() {
        button.classList.add('flicker-cursor'); // Add the flicker class
        setInterval(() => {
            if (button.classList.contains('flicker-cursor')) {
                button.classList.remove('flicker-cursor'); // Remove the flicker class
            } else {
                button.classList.add('flicker-cursor'); // Add the flicker class
            }
        }, 300); // Change every 300 milliseconds (adjust as needed)
    }

    // Stop flicker effect
    function stopFlicker() {
        button.classList.remove('flicker-cursor'); // Remove the flicker class when not hovering
    }

    // Start game button
    button.addEventListener('mouseenter', startFlicker); // Start flicker on hover
    button.addEventListener('mouseleave', stopFlicker); // Stop flicker when not hovering
    button.addEventListener('click', function() {
        playClickSound();
        startMusicRandomly(); // Start music with random start time
        setTimeout(() => {
            window.location.href = 'game.html'; // Redirect to game page after 1 second
        }, 1000); // 1000 milliseconds = 1 second
    });

    document.getElementById('options').addEventListener('click', function() {
        playClickSound();
        window.location.href = 'options.html'; // Redirect to game page after 1 second
    });

    document.getElementById('exit').addEventListener('click', function() {
        playClickSound();
        window.location.href = 'credits.html'; // Redirect to game page after 1 second
    });

    // On the first user interaction, autoplay restrictions are lifted
    document.body.addEventListener('click', () => {
        startMusicRandomly(); // Start background music with a random start time
    });
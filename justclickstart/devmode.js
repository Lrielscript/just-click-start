// Dev mode code
let devMode = false;
let typedString = '';
let devModeIndicator;

document.addEventListener('keydown', function(event) {
    typedString += event.key;
    if (typedString.includes('devmode')) {
        enableDevMode();
        typedString = ''; // Reset the string after devmode is typed
    }
});

function enableDevMode() {
    if (!devMode) {
        devMode = true;
        alert('Developer Mode Enabled');

        // Create and style the Dev Mode indicator
        devModeIndicator = document.createElement('div');
        devModeIndicator.textContent = 'Dev Mode On!';
        devModeIndicator.style.position = 'fixed';
        devModeIndicator.style.top = '10px';
        devModeIndicator.style.left = '50%';
        devModeIndicator.style.transform = 'translateX(-50%)';
        devModeIndicator.style.color = '#00ff00'; // Bright green color
        devModeIndicator.style.fontSize = '14px'; // Smaller font size
        devModeIndicator.style.zIndex = '200'; // Make sure it's on top
        document.body.appendChild(devModeIndicator);

        // Show dev options in settings modal
        const devSection = document.createElement('div');
        devSection.innerHTML = `
            <h4>Developer Options</h4>
            <label for="levelInput">Set Level:</label>
            <input type="number" id="levelInput" min="0" value="${count}">
            <button id="setLevelButton">Set Level</button><br><br>

            <label for="bgMusicToggle">Toggle Background Music:</label>
            <button id="bgMusicToggle">Turn Off</button><br><br>

            <label for="resetButton">Reset Game:</label>
            <button id="resetButton">Reset</button><br><br>

            <label for="clickSpeedInput">Set Click Speed (in ms):</label>
            <input type="number" id="clickSpeedInput" min="100" step="100" value="1000">
            <button id="setClickSpeedButton">Set Click Speed</button><br><br>

            <label for="skipLevels">Skip Levels (increment by 10):</label>
            <button id="skipLevels">Skip 10 Levels</button><br><br>

            <label for="setBackgroundColor">Set Background Color:</label>
            <input type="color" id="backgroundColorInput" value="#000000">
            <button id="setBackgroundColorButton">Change Background</button><br><br>

            <label for="toggleFloatingBlocks">Toggle Floating Blocks:</label>
            <button id="toggleFloatingBlocksButton">Turn Off</button>
        `;

        document.getElementById('settingsModal').appendChild(devSection);

        // Add event listeners for developer options
        setupDevOptions();
    }
}

function setupDevOptions() {
    // Set Level
    document.getElementById('setLevelButton').onclick = function() {
        const level = parseInt(document.getElementById('levelInput').value);
        if (!isNaN(level)) {
            count = level;
            numberDisplay.textContent = count;
            alert(`Level set to ${count}`);
            displaySentence();
            handleCountEffects();
        }
    };

    // Toggle Background Music On/Off
    let musicPlaying = true;
    document.getElementById('bgMusicToggle').onclick = function() {
        if (musicPlaying) {
            bgMusic.pause();
            this.textContent = 'Turn On';
            musicPlaying = false;
        } else {
            bgMusic.play();
            this.textContent = 'Turn Off';
            musicPlaying = true;
        }
    };

    // Reset Game Button
    document.getElementById('resetButton').onclick = function() {
        count = 0;
        numberDisplay.textContent = count;
        startButton.style.position = 'relative';
        restartButton.style.display = 'none';
        document.body.style.backgroundColor = '#000';
        document.body.style.transform = 'none';
        document.body.style.filter = 'none';
        removeFloatingBlocks(); // Ensure this function exists
        document.body.classList.remove('glitch'); // Remove glitch effect
        alert("Game has been reset.");
    };

    // Set Click Speed
    document.getElementById('setClickSpeedButton').onclick = function() {
        const speed = parseInt(document.getElementById('clickSpeedInput').value);
        if (!isNaN(speed)) {
            alert(`Click speed set to ${speed}ms`);
            // Implement any click speed changes here if applicable
        }
    };

    // Skip Levels
    document.getElementById('skipLevels').onclick = function() {
        count += 10;
        numberDisplay.textContent = count;
        displaySentence();
        handleCountEffects();
        alert(`Skipped to level ${count}`);
    };

    // Change Background Color
    document.getElementById('setBackgroundColorButton').onclick = function() {
        const color = document.getElementById('backgroundColorInput').value;
        document.body.style.backgroundColor = color;
        alert(`Background color changed to ${color}`);
    };

    // Toggle Floating Blocks
    let floatingBlocksEnabled = true;
    document.getElementById('toggleFloatingBlocksButton').onclick = function() {
        if (floatingBlocksEnabled) {
            removeFloatingBlocks(); // Ensure this function exists
            this.textContent = 'Turn On';
            floatingBlocksEnabled = false;
        } else {
            createFloatingBlocks(); // Ensure this function exists
            this.textContent = 'Turn Off';
            floatingBlocksEnabled = true;
        }
    };
}

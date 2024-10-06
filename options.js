// Load settings from localStorage
  window.onload = function() {
      const savedBgVolume = localStorage.getItem('bgVolume');
      const savedClickVolume = localStorage.getItem('clickVolume');

      if (savedBgVolume !== null) {
          document.getElementById('bgVolume').value = savedBgVolume; // Set saved volume
          document.getElementById('bgMusic').volume = savedBgVolume; // Apply volume to music
      }
      if (savedClickVolume !== null) {
          document.getElementById('clickVolume').value = savedClickVolume; // Set saved click volume
          document.getElementById('clickSound').volume = savedClickVolume; // Apply volume to click sound
      }
  };

  // Update background music volume
  document.getElementById('bgVolume').oninput = function() {
      const volume = this.value;
      document.getElementById('bgMusic').volume = volume; // Set volume
      localStorage.setItem('bgVolume', volume); // Save volume to localStorage
  };

  // Update click sound volume
  document.getElementById('clickVolume').oninput = function() {
      const volume = this.value;
      document.getElementById('clickSound').volume = volume; // Set volume
      localStorage.setItem('clickVolume', volume); // Save volume to localStorage
  };

  // Back to index.html
  document.getElementById('backButton').onclick = function() {
      window.location.href = 'index.html'; // Redirect to index.html
  };
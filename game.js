const bgMusic = document.getElementById("bgMusic"),
    clickSound = document.getElementById("clickSound");
let count = 0;
const numberDisplay = document.getElementById("numberDisplay"),
    startButton = document.getElementById("startButton"),
    restartButton = document.getElementById("restartButton"),
    loadingScreen = document.getElementById("loadingScreen");

function playClickSound() {
    clickSound.currentTime = 0, clickSound.play()
}

function startMusicRandomly() {
    bgMusic.play().then(() => {
        let e = Math.random() * bgMusic.duration;
        bgMusic.currentTime = e
    }).catch(e => console.log("Error playing the music:", e))
}

function handleCountEffects() {
    switch (document.body.style.backgroundColor = "", document.body.style.transform = "", document.body.style.filter = "", count) {
        case 1:
            document.body.style.backgroundColor = "purple", document.body.style.transform = "rotate(72deg) scale(0.72)";
            break;
        case 10:
            document.body.style.filter = "invert(100%)";
            break;
        case 16:
            document.body.style.filter = "grayscale(100%)", document.body.style.transform = "scale(0.75)", createFloatingBlocks();
            break;
        case 11:
            document.body.style.filter = "invert(50%)", createFloatingBlocks();
            break;
        case 20:
            document.body.style.filter = "brightness(150%)";
            break;
        case 35:
            document.body.style.filter = "grayscale(50%)";
            break;
        case 40:
            document.body.style.transform = "scale(1.1)";
            break;
        case 30:
            document.body.style.backgroundColor = "orange";
            break;
        case 23:
            document.body.style.filter = "grayscale(100%)", createFloatingBlocks();
            break;
        case 45:
            document.body.style.transform = "scale(1.1)", document.body.style.transform = "direction(0.5)";
            break;
        case 55:
            document.body.style.transform = "rotate(30deg)", document.body.style.transform = "scale(0.8)";
            break;
        case 50:
            alert("I can try to delay you..."), createFloatingBlocks();
            break;
        case 60:
            document.body.style.filter = "hue-rotate(90deg)", createFloatingBlocks();
            break;
        case 70:
            document.body.style.backgroundColor = "cyan", document.body.style.transform = "scale(1.1)";
            break;
        case 80:
            alert("Why did lriel create me?"), document.body.style.filter = "blur(5px)", createFloatingBlocks();
            break;
        case 90:
            alert("Don't give up!"), document.body.style.transform = "scale(1.2)";
            break;
        case 100:
            alert("Are you even playing?");
            break;
        case 110:
            document.body.style.backgroundColor = "green";
            break;
        case 120:
            document.body.style.backgroundColor = "red", document.body.style.transform = "scale(1.2)";
            break;
        case 130:
            alert("Almost there...");
            break;
        case 140:
            document.body.style.transform = "rotate(-30deg)";
            break;
        case 150:
            document.body.style.backgroundColor = "blue", document.body.style.transform = "scale(0.8)";
            break;
        case 160:
            alert("I LOVE TO BE IN THE BACKGROUND"), alert("I EAT SWEDISH DONUTS ON TUESDAY NIGHTS LIL BRO");
            break;
        case 170:
            document.body.style.filter = "sepia(100%)";
            break;
        case 180:
            document.body.style.filter = "contrast(150%)";
            break;
        case 190:
            alert("You're doing great!");
            break;
        case 200:
            document.body.style.backgroundColor = "black";
            break;
        case 210:
            alert("Keep it up!");
            break;
        case 220:
            document.body.style.filter = "grayscale(100%)";
            break;
        case 230:
            document.body.style.backgroundColor = "magenta";
            break;
        case 240:
            alert("You are almost at the finish line!");
            break;
        case 250:
            document.body.style.transform = "scale(1.3)";
            break;
        case 260:
            document.body.style.filter = "blur(10px)";
            break;
        case 270:
            alert("Final push!");
            break;
        case 280:
            document.body.style.backgroundColor = "yellow";
            break;
        case 290:
            alert("Just a bit more!");
            break;
        case 300:
            document.body.style.backgroundColor = "darkblue";
            break;
        default:
            teleportButton()
    }
}

function teleportButton() {
    let e = window.innerWidth - startButton.offsetWidth,
        t = window.innerHeight - startButton.offsetHeight;
    startButton.style.left = Math.random() * e + "px", startButton.style.top = Math.random() * t + "px"
}

function displaySentence() {
    let e;
    switch (count) {
        case 0:
            e = "tip: go slow";
            break;
        case 1:
            e = "HEY";
            break;
        case 2:
            e = "SLOW DOWN";
            break;
        case 3:
            e = "LISTEN";
            break;
        case 4:
            e = "LET ME TELL YOU SOMETHING";
            break;
        case 5:
            e = "stop";
            break;
        case 10:
            e = "if you can't see me try change the size of your browser around...";
            break;
        case 20:
            e = "and don't press me much";
            break;
        case 30:
            e = "I'm getting bored...";
            break;
        case 40:
            e = "I'm going to hide";
            break;
        case 50:
            e = "try harder";
            break;
        case 60:
            e = "you think you can catch me?";
            break;
        case 69:
            e = "I'm not a number!";
            break;
        case 70:
            e = "it's just a prank, bro";
            break;
        case 72:
            e = "RUN AWAY!";
            break;
        case 100:
            e = "are you even playing?";
            break;
        case 120:
            e = "You're almost there!";
            break;
        case 150:
            e = "This is your moment!";
            break;
        case 200:
            e = "You've reached the milestone!";
            break;
        case 250:
            e = "You're a champion!";
            break;
        case 290:
            e = "Just a little further...";
            break;
        default:
            e = ""
    }
    e ? numberDisplay.innerText = e : numberDisplay.innerText = count
}
window.onload = function() {
    let e = localStorage.getItem("bgVolume"),
        t = localStorage.getItem("clickVolume");
    null !== e && (bgMusic.volume = e), null !== t && (clickSound.volume = t), startMusicRandomly(), setTimeout(() => {
        loadingScreen.style.opacity = 0, setTimeout(() => {
            loadingScreen.style.display = "none"
        }, 500)
    }, 2e3)
}, startButton.addEventListener("click", () => {
    count++, displaySentence(), playClickSound(), handleCountEffects()
}), restartButton.addEventListener("click", () => {
    count = 0, numberDisplay.innerText = "0", restartButton.style.display = "none"
}), document.getElementById("settingsButton").addEventListener("click", () => {
    document.getElementById("settingsModal").style.display = "block"
}), document.getElementById("closeSettings").addEventListener("click", () => {
    document.getElementById("settingsModal").style.display = "none"
});
const bgVolumeInput = document.getElementById("bgVolume"),
    clickVolumeInput = document.getElementById("clickVolume");
bgVolumeInput.addEventListener("input", () => {
    bgMusic.volume = bgVolumeInput.value, localStorage.setItem("bgVolume", bgVolumeInput.value)
}), clickVolumeInput.addEventListener("input", () => {
    clickSound.volume = clickVolumeInput.value, localStorage.setItem("clickVolume", clickVolumeInput.value)
});
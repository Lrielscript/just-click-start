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
    bgMusic.play().then((() => {
        let e = Math.random() * bgMusic.duration;
        bgMusic.currentTime = e
    })).catch((e => console.log("Error playing the music:", e)))
}

function handleCountEffects() {
    switch (count) {
        case 1:
            document.body.style.backgroundColor = "purple", document.body.style.filter = "contrast(120%) brightness(150%)";
            break;
        case 2:
            document.body.style.filter = "blur(2px) saturate(200%)", teleportButton();
            break;
        case 3:
            document.body.style.transform = "rotate(5deg)", teleportButton();
            break;
        case 4:
            document.body.style.filter = "sepia(20%)", teleportButton();
            break;
        case 5:
            document.body.style.backgroundColor = "orange", document.body.style.filter = "hue-rotate(60deg)", teleportButton();
            break;
        case 6:
            document.body.style.filter = "invert(50%)", teleportButton();
            break;
        case 7:
            document.body.style.transform = "scale(1.1)";
            break;
        case 8:
            document.body.style.filter = "contrast(150%) brightness(90%)";
            break;
        case 9:
            document.body.style.filter = "grayscale(80%)", teleportButton();
            break;
        case 10:
            document.body.style.backgroundColor = "cyan", document.body.style.filter = "drop-shadow(5px 5px 10px black)";
            break;
        case 11:
            document.body.style.filter = "opacity(70%) hue-rotate(90deg)";
            break;
        case 12:
            document.body.style.transform = "rotate(-10deg)";
            break;
        case 13:
            document.body.style.filter = "sepia(40%) saturate(150%)";
            break;
        case 14:
            document.body.style.backgroundColor = "lightgreen", document.body.style.filter = "brightness(120%)";
            break;
        case 15:
            document.body.style.filter = "blur(3px) grayscale(30%)";
            break;
        case 16:
            document.body.style.transform = "scale(1.2)", document.body.style.filter = "invert(100%)", teleportButton();
            break;
        case 17:
            document.body.style.filter = "contrast(200%) brightness(80%)";
            break;
        case 18:
            document.body.style.backgroundColor = "pink", document.body.style.filter = "hue-rotate(-60deg)", teleportButton();
            break;
        case 19:
            document.body.style.transform = "rotate(15deg)", document.body.style.filter = "sepia(50%)", teleportButton();
            break;
        case 20:
            document.body.style.filter = "blur(5px) saturate(120%)", teleportButton();
            break;
        case 21:
            document.body.style.backgroundColor = "red", document.body.style.filter = "brightness(150%)", teleportButton();
            break;
        case 22:
            document.body.style.filter = "opacity(80%) contrast(80%)", teleportButton();
            break;
        case 23:
            document.body.style.transform = "scale(0.9)", document.body.style.filter = "invert(80%)", teleportButton();
            break;
        case 24:
            document.body.style.filter = "hue-rotate(45deg) drop-shadow(2px 2px 4px gray)", teleportButton();
            break;
        case 25:
            document.body.style.backgroundColor = "blue", document.body.style.filter = "grayscale(100%) brightness(70%)", teleportButton();
            break;
        case 26:
            document.body.style.transform = "rotate(-20deg)", document.body.style.filter = "contrast(150%)", teleportButton();
            break;
        case 27:
            document.body.style.filter = "blur(1px) opacity(60%)";
            break;
        case 28:
            document.body.style.backgroundColor = "yellow", document.body.style.filter = "saturate(200%) sepia(30%)";
            break;
        case 29:
            document.body.style.transform = "scale(1.1) rotate(5deg)";
            break;
        case 30:
            document.body.style.filter = "brightness(90%) drop-shadow(0 0 10px blue)";
            break;
        case 31:
            document.body.style.backgroundColor = "violet", document.body.style.filter = "opacity(75%)";
            break;
        case 32:
            document.body.style.filter = "invert(30%) blur(2px)";
            break;
        case 33:
        case 81:
            document.body.style.transform = "scale(0.95)";
            break;
        case 34:
            document.body.style.filter = "contrast(90%) hue-rotate(-30deg)";
            break;
        case 35:
            document.body.style.backgroundColor = "brown", document.body.style.filter = "saturate(150%) sepia(70%)";
            break;
        case 36:
            document.body.style.transform = "rotate(10deg) scale(1.05)", teleportButton();
            break;
        case 37:
            document.body.style.filter = "blur(4px) grayscale(60%)";
            break;
        case 38:
            document.body.style.backgroundColor = "gold", document.body.style.filter = "brightness(200%)", teleportButton();
            break;
        case 39:
            document.body.style.transform = "scale(1.2) rotate(-15deg)", teleportButton();
            break;
        case 40:
            document.body.style.filter = "hue-rotate(90deg) saturate(50%)", teleportButton();
            break;
        case 41:
            document.body.style.backgroundColor = "limegreen", document.body.style.filter = "contrast(150%) blur(1px)", teleportButton(), teleportButton();
            break;
        case 42:
            document.body.style.transform = "scale(0.85)";
            break;
        case 43:
            document.body.style.filter = "opacity(70%) brightness(90%)", teleportButton();
            break;
        case 44:
            document.body.style.backgroundColor = "slateblue", document.body.style.filter = "drop-shadow(3px 3px 6px black)";
            break;
        case 45:
            document.body.style.transform = "scale(1.1) rotate(10deg)";
            break;
        case 46:
            document.body.style.filter = "blur(3px) grayscale(100%)", teleportButton();
            break;
        case 47:
            document.body.style.backgroundColor = "lightgray", document.body.style.filter = "contrast(120%)", teleportButton();
            break;
        case 48:
            document.body.style.transform = "rotate(30deg)";
            break;
        case 49:
            document.body.style.filter = "hue-rotate(180deg)";
            break;
        case 50:
            document.body.style.backgroundColor = "lightpink", document.body.style.filter = "saturate(300%) brightness(150%)";
            break;
        case 51:
        case 78:
            document.body.style.transform = "scale(1.1) rotate(-10deg)";
            break;
        case 52:
            document.body.style.filter = "opacity(50%) blur(5px)";
            break;
        case 53:
            document.body.style.backgroundColor = "teal", document.body.style.filter = "invert(40%)", teleportButton();
            break;
        case 54:
            document.body.style.transform = "scale(1.2)", teleportButton();
            break;
        case 55:
            document.body.style.filter = "contrast(200%) grayscale(50%)";
            break;
        case 56:
            document.body.style.backgroundColor = "darkblue", document.body.style.filter = "brightness(50%)";
            break;
        case 57:
            document.body.style.transform = "rotate(45deg)", teleportButton();
            break;
        case 58:
            document.body.style.filter = "hue-rotate(-45deg)";
            break;
        case 59:
            document.body.style.backgroundColor = "maroon", document.body.style.filter = "opacity(60%)";
            break;
        case 60:
            document.body.style.transform = "scale(0.75)";
            break;
        case 61:
            document.body.style.filter = "blur(4px) brightness(120%)";
            break;
        case 62:
            document.body.style.backgroundColor = "darkorange", document.body.style.filter = "contrast(80%)";
            break;
        case 63:
            document.body.style.transform = "scale(1.3)";
            break;
        case 64:
            document.body.style.filter = "invert(60%)";
            break;
        case 65:
            document.body.style.backgroundColor = "forestgreen", document.body.style.filter = "saturate(150%) brightness(70%)", teleportButton();
            break;
        case 66:
            document.body.style.transform = "rotate(-30deg)";
            break;
        case 67:
            document.body.style.filter = "opacity(70%) blur(2px)";
            break;
        case 68:
            document.body.style.backgroundColor = "deepskyblue", document.body.style.filter = "drop-shadow(0 0 15px white)";
            break;
        case 69:
        case 90:
            document.body.style.transform = "scale(0.9)", teleportButton();
            break;
        case 70:
            document.body.style.filter = "hue-rotate(30deg)", teleportButton();
            break;
        case 71:
            document.body.style.backgroundColor = "indigo", document.body.style.filter = "contrast(120%) brightness(90%)";
            break;
        case 72:
            document.body.style.transform = "scale(1.2)";
            break;
        case 73:
            document.body.style.filter = "blur(2px) grayscale(40%)";
            break;
        case 74:
            document.body.style.backgroundColor = "chartreuse", document.body.style.filter = "opacity(80%)", teleportButton();
            break;
        case 75:
            document.body.style.transform = "rotate(15deg)", teleportButton();
            break;
        case 76:
            document.body.style.filter = "brightness(60%) contrast(150%)";
            break;
        case 77:
            document.body.style.backgroundColor = "mediumvioletred", document.body.style.filter = "saturate(120%) sepia(30%)";
            break;
        case 79:
            document.body.style.filter = "opacity(70%) hue-rotate(-30deg)";
            break;
        case 80:
            document.body.style.backgroundColor = "dodgerblue", teleportButton(), document.body.style.filter = "blur(3px)";
            break;
        case 82:
            document.body.style.filter = "invert(50%) brightness(100%)";
            break;
        case 83:
            document.body.style.backgroundColor = "lightseagreen", teleportButton(), document.body.style.filter = "contrast(90%)";
            break;
        case 84:
            document.body.style.transform = "rotate(5deg)";
            break;
        case 85:
            document.body.style.filter = "hue-rotate(90deg) blur(1px)";
            break;
        case 86:
            document.body.style.backgroundColor = "lightblue", document.body.style.filter = "opacity(75%)";
            break;
        case 87:
            document.body.style.transform = "scale(1.3)", teleportButton();
            break;
        case 88:
            document.body.style.filter = "grayscale(50%) brightness(90%)", teleportButton();
            break;
        case 89:
            document.body.style.backgroundColor = "mediumturquoise", document.body.style.filter = "invert(40%)", teleportButton();
            break;
        case 91:
            document.body.style.filter = "blur(5px) brightness(110%)";
            break;
        case 92:
            document.body.style.backgroundColor = "crimson", document.body.style.filter = "contrast(120%)";
            break;
        case 93:
            document.body.style.transform = "rotate(-5deg)";
            break;
        case 94:
            document.body.style.filter = "hue-rotate(-60deg)";
            break;
        case 95:
            document.body.style.backgroundColor = "saddlebrown", document.body.style.filter = "saturate(130%)";
            break;
        case 96:
            document.body.style.transform = "scale(1.15)";
            break;
        case 97:
            document.body.style.filter = "opacity(50%) brightness(150%)";
            break;
        case 98:
            document.body.style.backgroundColor = "darkviolet", document.body.style.filter = "blur(2px) invert(20%)";
            break;
        case 99:
            document.body.style.transform = "rotate(30deg)", teleportButton();
            break;
        case 100:
            document.body.style.filter = "contrast(200%) brightness(100%)", alert("YOUR HURTING ME!"), teleportButton();
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
        case 250:
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
            e = "You're failing!";
            break;
        case 150:
            e = "SOTP SOTPP STOPP!";
            break;
        case 200:
            e = "STIOOPP SOTP.";
            break;
        case 290:
            e = "Justop.";
            break;
        default:
            e = ""
    }
    numberDisplay.innerText = e || count
}
window.onload = function() {
    let e = localStorage.getItem("bgVolume"),
        t = localStorage.getItem("clickVolume");
    null !== e && (bgMusic.volume = e), null !== t && (clickSound.volume = t), startMusicRandomly(), setTimeout((() => {
        loadingScreen.style.opacity = 0, setTimeout((() => {
            loadingScreen.style.display = "none"
        }), 500)
    }), 2e3)
}, startButton.addEventListener("click", (() => {
    count++, displaySentence(), playClickSound(), handleCountEffects()
})), restartButton.addEventListener("click", (() => {
    count = 0, numberDisplay.innerText = "0", restartButton.style.display = "none"
})), document.getElementById("settingsButton").addEventListener("click", (() => {
    document.getElementById("settingsModal").style.display = "block"
})), document.getElementById("closeSettings").addEventListener("click", (() => {
    document.getElementById("settingsModal").style.display = "none"
}));
const bgVolumeInput = document.getElementById("bgVolume"),
    clickVolumeInput = document.getElementById("clickVolume");
bgVolumeInput.addEventListener("input", (() => {
    bgMusic.volume = bgVolumeInput.value, localStorage.setItem("bgVolume", bgVolumeInput.value)
})), clickVolumeInput.addEventListener("input", (() => {
    clickSound.volume = clickVolumeInput.value, localStorage.setItem("clickVolume", clickVolumeInput.value)
}))
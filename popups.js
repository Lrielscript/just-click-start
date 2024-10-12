let popUpCount = 0,
    popUpFrequency = 2e3;

function generateRandomString() {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-[]{}|;:,.<>?";
    let e = "";
    const o = Math.floor(10 * Math.random()) + 5;
    for (let n = 0; n < o; n++) e += t.charAt(Math.floor(88 * Math.random()));
    return e
}

function createPopUp() {
    const t = document.createElement("div"),
        e = generateRandomString();
    t.textContent = e, t.style.position = "absolute", t.style.backgroundColor = "rgba(255, 255, 255, 0.8)", t.style.border = "2px solid #000", t.style.borderRadius = "5px", t.style.padding = "10px", t.style.fontSize = "14px", t.style.cursor = "pointer";
    const o = Math.random() * (window.innerWidth - 100),
        n = Math.random() * (window.innerHeight - 50);
    t.style.left = `${o}px`, t.style.top = `${n}px`, t.addEventListener("click", (function() {
        document.body.removeChild(t), popUpCount++, popUpCount % 10 == 0 && (popUpFrequency = Math.max(500, popUpFrequency - 200)), console.log(`Pop-up count: ${popUpCount}`)
    })), document.body.appendChild(t), setTimeout((() => {
        document.body.contains(t) && document.body.removeChild(t)
    }), 5e3)
}

function startGeneratingPopUps() {
    setInterval(createPopUp, popUpFrequency)
}
startGeneratingPopUps();
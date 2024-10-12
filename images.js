let imagePopUpCount = 0,
    imagePopUpFrequency = 5e3;

function getRandomImageUrl() {
    return `https://picsum.photos/id/${Math.floor(1e3*Math.random())}/100/100`
}

function createImagePopUp() {
    const e = document.createElement("img"),
        t = getRandomImageUrl();
    e.src = t, e.style.position = "absolute", e.style.width = "100px", e.style.height = "100px", e.style.cursor = "pointer";
    const o = Math.random() * (window.innerWidth - 100),
        n = Math.random() * (window.innerHeight - 100);
    e.style.left = `${o}px`, e.style.top = `${n}px`, e.addEventListener("click", (function() {
        document.body.removeChild(e), imagePopUpCount++, imagePopUpCount % 5 == 0 && (imagePopUpFrequency = Math.max(1e3, imagePopUpFrequency - 500)), console.log(`Image pop-up count: ${imagePopUpCount}`)
    })), document.body.appendChild(e), setTimeout((() => {
        document.body.contains(e) && document.body.removeChild(e)
    }), 5e3)
}

function startGeneratingImagePopUps() {
    setInterval(createImagePopUp, imagePopUpFrequency)
}
startGeneratingImagePopUps();
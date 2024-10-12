const emojis = ["😀", "😂", "😍", "😎", "🤔", "😢", "😱", "😴", "👻", "🎉", "🥳", "💀", "❤️", "🔥", "✨", "🌈", "💀"],
    emojiCount = 10,
    emojiElements = [];

function createEmoji() {
    const t = document.createElement("div"),
        e = emojis[Math.floor(Math.random() * emojis.length)],
        n = Math.floor(50 * Math.random()) + 20;
    t.textContent = e, t.style.position = "absolute", t.style.fontSize = `${n}px`, t.style.pointerEvents = "none", t.style.transition = "transform 0.1s";
    const o = Math.random() * (window.innerWidth - n),
        i = Math.random() * (window.innerHeight - n);
    t.style.left = `${o}px`, t.style.top = `${i}px`, document.body.appendChild(t), emojiElements.push({
        element: t,
        dx: 2 * Math.random() + 1,
        dy: 2 * Math.random() + 1
    }), bounceEmoji(t)
}

function bounceEmoji(t) {
    const e = emojiElements.find((e => e.element === t));
    ! function n() {
        const o = t.getBoundingClientRect();
        t.style.transform = `translate(${e.dx}px, ${e.dy}px)`, (o.right + e.dx > window.innerWidth || o.left + e.dx < 0) && (e.dx *= -1, t.style.fontSize = `${Math.floor(50*Math.random())+20}px`), (o.bottom + e.dy > window.innerHeight || o.top + e.dy < 0) && (e.dy *= -1, t.style.fontSize = `${Math.floor(50*Math.random())+20}px`), requestAnimationFrame(n)
    }()
}
for (let t = 0; t < 10; t++) createEmoji();
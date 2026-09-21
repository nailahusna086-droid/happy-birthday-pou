const opening = document.getElementById("opening");
const birthday = document.getElementById("birthday");
const letterSection = document.getElementById("letterSection");
const gallerySection = document.getElementById("gallerySection");
const final = document.getElementById("final");

const music = document.getElementById("music");


/* OPEN ENVELOPE */

function openEnvelope() {

    opening.classList.add("hidden");

    birthday.classList.remove("hidden");

    music.play().catch(() => {
        console.log("Music membutuhkan interaksi pengguna.");
    });

    createHearts();
}


/* SHOW LETTER */

function showLetter() {

    birthday.classList.add("hidden");

    letterSection.classList.remove("hidden");

    createHearts();
}


/* SHOW GALLERY */

function showGallery() {

    letterSection.classList.add("hidden");

    gallerySection.classList.remove("hidden");

    createHearts();
}


/* FINAL SURPRISE */

function surprise() {

    gallerySection.classList.add("hidden");

    final.classList.remove("hidden");

    createHearts();
}


/* HEART ANIMATION */

function createHearts() {

    for (let i = 0; i < 20; i++) {

        const heart =
            document.createElement("div");

        heart.classList.add("heart");

        const icons = [
            "💗",
            "💕",
            "💖",
            "✨",
            "🌸"
        ];

        heart.innerHTML =
            icons[
                Math.floor(
                    Math.random() *
                    icons.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        heart.style.animationDelay =
            Math.random() + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
}


/* CONFETTI */

function confetti() {

    const message =
        document.getElementById("finalMessage");

    message.innerHTML =
        "Your wish has been sent to the universe. ✨💗";

    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("heart");

        piece.innerHTML =
            Math.random() > 0.5
            ? "🎉"
            : "✨";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.fontSize =
            (15 + Math.random() * 25) + "px";

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 6000);
    }
}

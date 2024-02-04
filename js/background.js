const images = [
    "cin que terre.jpeg",
    "grindelwald.jpeg",
    "firenze.jpeg",
    "rome.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

// document.body.style.backgroundImage = bgImage.src;


const images = [
    "nightsky.jpg",
    "redstar.jpg",
    "river.jpg"
];

const choseImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");
image.src =`img/${choseImage}`;

document.body.appendChild(image);
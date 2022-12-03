const images = [
    "nightsky.jpg",
    "redstar.jpg",
    "river.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");
image.src =`img/${chosenImage}`;

document.body.appendChild(image);
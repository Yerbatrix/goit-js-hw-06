function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const span = document.querySelector(".color");
const button = document.querySelector(".change-color");
const background = document.body;

button.addEventListener("click", changeColor);

function changeColor() {
  background.style.backgroundColor = getRandomHexColor();
}

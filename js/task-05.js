const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", changeName);

function changeName() {
  const inputName = input.value;
  const outputName = inputName.trim();
  output.textContent = outputName;
}

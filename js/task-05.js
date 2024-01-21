const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", changeName);

function changeName() {
  if (input.value === "") {
    output.textContent = "Anonymous";
  } else {
    const inputName = input.value;
    const outputName = inputName.trim();
    output.textContent = outputName;
  }
}

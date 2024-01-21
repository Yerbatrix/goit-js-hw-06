const input = document.querySelector("#validation-input");
input.addEventListener("blur", validationCheck);

function validationCheck() {
  const inputText = input.value;
  const finalText = inputText.trim();

  if (finalText.length === 6) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

const fontSizeSelector = document.querySelector("#font-size-control");
const changingText = document.querySelector("#text");

fontSizeSelector.addEventListener("input", fontChange);

function fontChange() {
  changingText.style.fontSize = fontSizeSelector.value + "px";
}

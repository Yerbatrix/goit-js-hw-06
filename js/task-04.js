let counterValue = 0;

const value = document.querySelector("#value");

const buttonDecrement = document.querySelector(
  `button[data-action="decrement"]`
);
buttonDecrement.addEventListener("click", decrease);

const buttonIncrement = document.querySelector(
  `button[data-action="increment"]`
);
buttonIncrement.addEventListener("click", increase);

function increase() {
  counterValue += 1;
  value.innerHTML = counterValue;
}

function decrease() {
  counterValue -= 1;
  value.innerHTML = counterValue;
}

let counterValue = 0;

const counter = document.querySelector("#counter");
const value = counter.querySelector("#value");
const incrementButton = counter.querySelector("[data-action='increment']");
const decrementButton = counter.querySelector("[data-action='decrement']");

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}
function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

const input = document.getElementById("font-size-control");
const text = document.getElementById("text");
input.addEventListener("input", (event) => {
  text.style.fontSize = `${event.target.value}px`;
});

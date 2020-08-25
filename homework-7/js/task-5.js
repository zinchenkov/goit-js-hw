const input = document.getElementById("name-input");
const output = document.getElementById("name-output");
input.addEventListener("input", controlName);

function controlName(e) {
  output.textContent = event.target.value;
  if (event.target.value == "") {
    output.textContent = "незнакомец";
  }
}

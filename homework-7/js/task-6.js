const input = document.getElementById("validation-input");
input.addEventListener("blur", (event) => {
  if (event.target.value.length == input.dataset.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});

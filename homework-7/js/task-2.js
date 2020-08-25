const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulToPaste = document.querySelector("#ingredients");
const liArray = [];

for (let i = 0; i < ingredients.length; i++) {
  const eachLi = document.createElement("li");
  eachLi.textContent = ingredients[i];
  liArray.push(eachLi);
}
const wrapper = document.createDocumentFragment();

liArray.forEach((el) => {
  wrapper.appendChild(el);
});
ulToPaste.append(wrapper);

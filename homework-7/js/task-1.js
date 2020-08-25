const li = document.querySelector("#categories");

const liItem = li.querySelectorAll(".item");
console.log(`В списке ${liItem.length} категории.`);
liItem.forEach((el) => {
  const categorie = el.querySelector("h2").innerText;
  const innerUl = el.querySelectorAll("li");
  console.log(`Категория: ${categorie}`);
  console.log(`Количество элементов: ${innerUl.length}`);
});

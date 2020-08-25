let input;
let total = 0;

// while (input !== null) {
//   input = prompt("Введите любое число:");
//   total = total + Number(input);
// }
// alert(`Общая сумма чисел равна ${total}.`);
do {
  input = prompt("Введите любое число:");
  if (Number.isNaN(Number(input))) {
    alert("Введите число");
  } else {
    total = total + Number(input);
  }
} while (input !== null);

alert(`Общая сумма = ${total}`);

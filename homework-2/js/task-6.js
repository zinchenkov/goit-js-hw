let input;
const numbers = [];
let total = 0;

/* Мне кажется вариант без фор проще и понятнее */

// do {
//     input = prompt('Введите любое число:');
//     if (Number.isNaN(Number(input))) {
//         alert('Было введено не число, попробуйте еще раз');
//     } else {
//         numbers.push(Number(input));
//         total += Number(input);
//     }
// } while (input !== null);
// if (total) {
// alert(`Общая сумма чисел равна ${total}`);
//}

do {
  input = prompt("Введите любое число:");
  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    if (input !== null) {
      numbers.push(Number(input));
    }
  }
} while (input !== null);

if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
}
alert(`Общая сумма чисел равна ${total}`);

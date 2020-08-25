let credits = 23580;
const pricePerDroid = 3000;
const droidsToBuy = prompt("Сколько дроидов Вы хотите купить?");

if (droidsToBuy === null) {
  console.log("Отменено пользователем!");
} else {
  const totalPrice = pricePerDroid * droidsToBuy;
  if (credits < totalPrice) {
    console.log("Недостаточно средств на счету!");
  } else {
    console.log(
      `Вы купили ${droidsToBuy}, на счету осталось ${
        credits - pricePerDroid * droidsToBuy
      }.`
    );
  }
}

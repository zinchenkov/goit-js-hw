const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const userPassword = prompt("Введите пароль:");

if (userPassword === null) {
  message = "Отменено пользователем!";
} else if (userPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещён, неверный пароль!";
}

alert(message);

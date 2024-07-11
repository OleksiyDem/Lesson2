// ----------------------------------//
// ----------------------------------//
// Вивід данних/ Ввід данних
// ----------------------------------//
// ----------------------------------//

// const message = "JavaScript is awesome!";

// Виведення

// alert(message);

// console.log(message);

// Отримання

// confirm

// const isConfirm = confirm("Please confirm reservation");
// console.log(isConfirm);

// const test = confirm("Yes or no?");
// console.log(test);

// prompt
// const userName = prompt("Please enter your name:");
// console.log(userName);

// const number = prompt("Please enter a number");
// console.log(number);

// ----------------------------------//
// ----------------------------------//
// Перетворення типу
// ----------------------------------//
// ----------------------------------//

// const value = prompt("Please enter a number!");
// console.log(typeof value); // 'string'
// console.log(value); // '5'

// let value;

// ---String--- //

// value = false;
// console.log(typeof value); // boolean

// const newValue = String(value);
// console.log(typeof newValue); // string

// ---Number--- //

// value = "123";
// console.log(typeof value); //string
// const newValue = Number(value);
// console.log(typeof newValue); // number

// const test = Number("qwerty");
// console.log(test); //NaN

// ---Boolean--- //

// Правила перетворення:

// Значення, які інтуїтивно “порожні”, такі як 0,
// порожній рядок, null, undefined та NaN, стають false.
// Інші значення стають true.

// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false

// console.log(Boolean("вітаю")); // true
// console.log(Boolean("")); // false

// console.log(Boolean(NaN)); //false
// console.log(Boolean(null)); //false

// ----------------------------------//
// ----------------------------------//
// Оператори
// ----------------------------------//
// ----------------------------------//

//Терміни: “унарний”, “бінарний”, “операнд”

//Операнд – це те, до чого застосовуються оператори.
//Наприклад, у множенні 5 * 2 є два операнди: лівий операнд 5 і правий операнд 2.
//Іноді їх називають “аргументами”

//Оператор є унарним, якщо він має один операнд
//let x = 1;

//x = -x;

//Оператор є бінарним, якщо він має два операнди

// let x = 1, y = 3;
// alert( y - x );

//JavaScript підтримує такі математичні операції:

// Додавання +,
// Віднімання -,
// Множення *,
// Ділення /,
// Остача від ділення %,
// Піднесення до степеня **.

// // // Додавання
// console.log(2 + 2);

// // // Віднімання
// console.log(10 - 4);

// // // Множення
// console.log(5 * 5);

// // // Ділення
// console.log(5 / 2);

//Остача від ділення %

// console.log(8 % 3); // 2
// console.log(10 % 3); // 1
// console.log(10 % 2); // 0

//Піднесення до степеня **

// console.log(5 ** 2); // 25
// console.log(4 ** 4); // 256

// -------Оператори порівняння------//

// результатом вертають буль

// a > b и a < b //- більше/меньше
// a >= b и a <= b  //- більше/меньше або дорівнює
// a == b //- дорівнює
// a != b //- не дорівнює
// a === b //- строго дорівнює
// a !== b //- строго не дорівнює

// console.log(5 > 3); // true
// console.log(5 < 3); // false
// console.log(5 >= 5); // true
// console.log(7 <= 5); // false

// let value = "0";
// console.log(value == 0); // true
// == приведення до типу

// ----------------------------------//
// ----------------------------------//
// or -and -not //
// ----------------------------------//
// ----------------------------------//

//   -----and (&&)------  //

// console.log(5 === 6 && 6 > 3); // false
// console.log(6 + 3 >= 9 && 8 + 1 === 9); // true

//   -----or (||)------ //

// console.log(5 * 5 === 25 || 2 * 2 === 6); // true
// console.log(5 * 5 === 26 || 2 + 3 >= 6); // false

//   -----not (!) ------ //

// console.log(!false); // true
// console.log(!true); //false
// console.log(5 !== 2); // true

// ----------------------------------//
// ----------------------------------//
// Умови if/else
// ----------------------------------//
// ----------------------------------//

//--- одинарні

// if (5 * 5 === 25) {
//   console.log("1");

//--- бінарні

// if (5 * 5 === 25) {
//   console.log("1");
// } else {
//   console.log("2");
// }

// if (2 + 2 === 6) {
//   console.log("Hello");
// } else {
//   console.log("No Hello");
// }

/// ------Тернарний оператор------///

// 2 + 2 === 4 ? console.log("1") : console.log("2"); // 1

// 5 * 5 === 24 ? console.log(true) : console.log(false); // false

// Нетрадиційне використання ‘?’
// Не рекомендується використовувати оператор “знак питання” таким чином.

// let age = prompt("Скільки вам років", 100); // 100 - Необов'язковий другий параметр, який встановлює початкове значення у полі для тексту у вікні.
// age > 18 ? alert("Доступ дозволено") : alert("Ідіть геть");

// ------Множинні вирази------///

// if (5 + 5 === 7) {
//   console.log("5+5 === 7");
// } else if (2 + 2 === 4) {
//   console.log("2+2 === 4"); // 2+2 === 4
// } else {
//   console.log("no");
// }

// let leng = "ua";

// if (leng === "ua") {
//   console.log("Понеділок"); // Понеділок
// } else if (leng === "en") {
//   console.log("Monday");
// } else {
//   console.log("Unknown language");
// }

// ----------------------------------//
// ----------------------------------//
// switch/case // кращій аналог if/else
// ----------------------------------//
// ----------------------------------//

// let num = 5;
// switch (num) {
//   case 0:
//     console.log(0);
//     break; // починає виконання коду із відповідного case до найближчого break або до кінця всієї конструкції switch
//   case 5:
//     console.log(5); // 5
//     break;
//   case 10:
//     console.log(10);
//     break;
// }

// let cost;
// const sub = "pro11";

// switch (sub) {
//   case "free":
//     cost = 0;
//     break;
//   case "pro":
//     cost = 100;
//     break;
//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Unknown sub"); // умова яка виконається у будь якому випадку  // Unknown sub
// }
// console.log(cost); // undefined

// ----------------------------------//
// ----------------------------------//
// Вирішення логічних задач та побудова алгоритмів
// ----------------------------------//
// ----------------------------------//
// 1. Визначити на яку чверть години припадає хвилина

// const min = prompt("Введіть хвилину");

// if (min >= 0 && min <= 14) {
//   console.log("Перша чверть");
// } else if (min >= 15 && min <= 29) {
//   console.log("Друга чверть");
// } else if (min >= 30 && min <= 44) {
//   console.log("Третя чверть");
// } else if (min >= 45 && min <= 60) {
//   console.log("Четверта чверть");
// } else {
//   console.log("Введіть іншу цифру");
// }

// 2. Оголошення покупцеві вартості товару
const value = prompt("Введіть назву товару").toLowerCase();

let cost;

switch (value) {
  case "яблуко":
    cost = 10;
    alert(`${value} коштує ${cost} гривень`);
    break;
  case "вишня":
    cost = 50;
    alert(`${value} коштує ${cost} гривень`);
    break;
  case "грушка":
    cost = 45;
    alert(`${value} коштує ${cost} гривень`);
    break;
  case "кавун":
    cost = 70;
    alert(`${value} коштує ${cost} гривень`);
    break;
  case "чорниця":
    cost = 110;
    alert(`${value} коштує ${cost} гривень`);
    break;
  case "диня":
    cost = 150;
    alert(`${value} коштує ${cost} гривень`);
    break;

  default:
    alert(`Товару ${value} немає в наявності`);
    break;
}

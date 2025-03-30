/* 
  Конструкция switch заменяет собой сразу несколько if.
  Это более наглядный способ сравнить выражение сразу с несколькими вариантами
*/

const log = console.log;

const x = 5 + 5;

switch(x) {
  case 3:
    log('Мимо!');
    break;
  case 6:
    log('Ещё нет!');
    break;
  case 10:
    log('Правильно');
    break;
  default: 
    log('Нет ответа');
}

// -----------------------------

const num = prompt('Введите число от 0 до 7!'); // будет возвращаться строка

switch(num) {
  case '0':
  case '1':
  case '2':
    log('Числа: 0 - 2 !');
    break;
  case '3':
  case '4':
  case '5':
  case '6':
  case '7':
    log('Числа: 3 - 6 !');
    break;
  case 7:
    log('Мы сюда не попадем, так как это число');
    break;
  default:
    log('Нет ответа'); 
}

// -------------------------
const today = new Date();
const month = today.getMonth();

switch (month) {
  case 0:
    log('Январь');
    break;
  case 1:
    log('Февраль');
    break;
  case 2:
    log('Март');
    break;
  case 3:
    log('Апрель');
    break;
  case 4:
    log('Май');
    break;
  case 5:
    log('Июнь');
    break;
  case 6:
    log('Июль');
    break;
  case 7:
    log('Август');
    break;
  case 8:
    log('Сентябрь');
    break;
  case 9:
    log('Октябрь');
    break;
  case 10:
    log('Ноябрь');
    break;
  case 11:
    log('Декабрь');
    break;
  default:
    log('Без даты'); 
}

const hour = today.getHours();
log(hour);

switch (true) {
  case hour < 12:
    log('Доброе утро!'); 
    break;
  case hour < 18:
    log('Добрый день!'); 
    break;
  case hour < 22:
    log('Добрый вечер!'); 
    break;
  default:
    log('Доброй ночи!'); 
}
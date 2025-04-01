// Function - callbacks, iife, arrow functions

const log = console.log;

function greeting() {
  log('Hello my friends!');
}

function showGreeting(callback) {
  callback();
}

showGreeting(greeting); // greeting передаем как ссылку

// ----------------------

function getInfo(name, age) {
  return `Name: ${ name }; Age: ${ age }`;
}

function getInfoWithCurrentDate(callback) { 
  const now = new Date();

  log(`Today: ${ now.toISOString() } \n ${ callback('Artem', 37) }`);
}

getInfoWithCurrentDate(getInfo);

// callback -> можно писать и так cb (он тоже может встречаться в проектах)

// --------------------------------------------

function survey(question, agreedFn, disagreedFn) { // опрос(запрос, ответ, ответ)
  if (confirm(question)) {
    agreedFn();
  } else {
    disagreedFn();
  }
}

survey(
  'Ты мой друг!',
  function () { log('Ты согласился, что ты мой друг!😀')},
  function () { log('Ты на согласился, получается что ты не друг!😡')}
);


// ---------- Стрелочные функции (arrow functions) ----------

const sum = (a, b) => {
  return a + b;
}

log(sum(3, 5)); // 8

const multiplication = (a, b) => a * b; // тут уже есть return внутри если пишем без фигурных скобок

log(multiplication(3, 5)); // 15

const showName = name => `Name: ${ name }`;

log(showName('Artem'));

// -------------- IIFE -----------------
// Немедленно вызывающая функция 
// Immediately-invoked function expressions 

(
  function () {
    var message = 'Hello!';
    log(message);
  }
)();

// log(message); // тут мы получим ошибку, так раньше делали чтобы var не выходил за глобальную 
// область видимости, (тут пишем функцию)(), т.е. таким методом ограничиваем область видимости var

(
  function (name) {
    var message = 'Hello!';
    log(message, name); // Hello! Anna
  }
)('Anna'); 

// Call Stack (Стек вызовов)

/* 
function one() {
  log('One');
}

function two() {
  log('Two');
}

function three() {
  log('Three');
}

// тут всё вызовется по порядку
one();
two();
three(); 
*/

function one() {
  log('One');
  two();
}

function two() {
  log('Two');
  three();
}

function three() {
  log('Three');
}

one();
// ответ будет такой:
// One
// Two
// Three


// Function - scope, default, values, declaration vs expression

const log = console.log;

// ------- Function Declaration vs Function Expression ---------

// Function Declaration
greeting(); // функцию можно вызвать до ее объявления
// почему так происходит, потому что сначала javaScript читает скрипты со словом function
// поэтому так и происходит что можно вызвать функцию до ёё объявления, а когда будет загружаться 
// страница в браузере, то с начала javaScript читает скрипты со словом function
function greeting() {
  log('Hello World!');
}

// greeting();

// Function Expression

// greetingFn(); при вызове функции до её объявления работать не будет
// потому что функция greetingFn объявлена в виде переменной и JS читает сверху вниз
// поэтому работать не будет 

const greetingFn = function greeting() { // функциональное выражение
  log('Hello Function Expression');
}

greetingFn();

// -------------- Scope (область видимости) -----------------

// Глобальная область видимости (global scope)
const num1 = 10;

{
  // тут уже локальная область видимости
  const num2 = 20;
  log(num1); // 10 // сработает, локальный scope видит глобальный
  log(num2); // 20 // сработает , а за пределами фигурных скобок не сработает

  var num3 = 100; // var - исключение 
}

log(num3); // 100 // сработает // var - всегда глобальная область видимости, где бы он не находился

log(num1);
// log(num2); // error // не сработает

function showScopeExample() {
  const num4 = 1000;
  log('showScopeExample', num1, num4);

  function nestedFn() { // вложенная функция
    const num5 = 3000;
    log('showScopeExample', num4, num5);
  }
  nestedFn();
}

showScopeExample(); 
// nestedFn(); // не сработает, так как она локальная область видимости
// log(num4); // тоже не сработает , локальная область видимости

// ----------- Default values - Значения по умолчанию ---------------

// function formatGreeting(name, emoji = '👽') {
//   log(`Hello ${ name } ${ emoji }`);
// }

function formatGreeting(name, emoji = '👽') {
  return `Hello ${ name } ${ emoji }`;
}

// formatGreeting('Artem', '🙂');
// formatGreeting('Artem');

log(formatGreeting('Artem', '🙂')); // Hello Artem 🙂
log(formatGreeting('Artem')); // Hello Artem 👽

// результат работы функции 
const formattedGreeting = formatGreeting('Artem', '👊👊👊👊👊');
log(formattedGreeting); // Hello Artem 👊👊👊👊👊

// function expression 

const formattedGreeting2 = formatGreeting;
log(formattedGreeting2('Artem', '🤘🤘🤘🤘🤘🤘🤘🤘🤘🤘')); // Hello Artem 🤘🤘🤘🤘🤘🤘🤘🤘🤘🤘
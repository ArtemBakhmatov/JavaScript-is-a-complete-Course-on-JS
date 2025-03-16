// переменная - это коробочка с данными 
// Декларирование let x
// Присваивание x = 1
// Переменные могут быть в JS var, let, const 
// var оставлен для обратной совместимости, для чтения для старых браузеров
// при обновлении js старые фичи не удаляются

var x1 = 1;
let x2 = 1;
const x3 = 1;

// соглашение об именовании переменных
// только буквы, цифры, нижнее подчеркивание и знак доллара

console.log(x1, x2, x3); // 1 1 1

// let a;
// a = 2;
// console.log(a); 2

// let a = 1, b = 1; c = 1;
// let a, b, c;

// console.log(a)
// let a = 1; // тут будет ошибка Uncaught ReferenceError: can't access lexical declaration 'a' before initialization
// var a = 1; // undefined // имеет глобальную область видимости

// let a = 1;
// a = 10; // можно перезаписать переменную 
// console.log(a);

// const b = 2;
// b = 20; // получим ошибку, так как const нельзя перезаписать 
// console.log(b);

// {
//   const x = 100;
//   console.log(x); // 100
// }
// console.log(x); // будет ошибка

// {
//   var x = 100;
//   console.log(x); // 100
// }
// console.log(x); // 100 // переменную var видно в любом месте

// переменные называть осознано
const firstName = 'Artem';
const age = 37;

console.log(typeof firstName);  // string
console.log(typeof age);        // number
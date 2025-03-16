// 8 типов данных 
// number, bigInt, string, boolean, undefined, null, object, symbol

// Number 
const age = 28;
console.log(typeof age); // number

// String 
const firstName = 'Artem';
console.log(typeof firstName); // string

// BigInt
const bigNumber = 1287644238009876543356n; // в конце больших чисел добавляем букву n
console.log(typeof bigNumber); // bigint

// Boolean (true или false)
const isActive = true;
const isConfirmed = false;
console.log(typeof isActive); // boolean

// Null - это пусто, либо ничего, другими словами ничего не значит 
const city = null; // значение присвоено 
console.log(typeof city); // object //  это не правильно, это значение оставили для совместимости старых браузеров
// null показывает что это object (просто нужно запомнить)

// Undefined - переменная есть, но она не имеет значения
let isLoading; // значение не присвоено 
console.log(isLoading); // undefined // значение 
console.log(typeof isLoading); // undefined // тип данных 
// isLoading = undefined;
isLoading = false;
console.log(isLoading); // false

// Symbol - используется для уникальных идентификаторов в объекте
const id = Symbol('123');
console.log(typeof id); // symbol

// Ссылочные типы
// Object
const person = {
  name: 'Alex', // ключ объекта: значение объекта
  age: 24,      // ключ объекта: значение объекта
  id: id,       // ключ объекта: значение объекта
  isActive: isActive // если ключ и значение совпадают, то можно просто записывать ключ isActive
};
console.log(typeof person); // object
console.log(person); // Object { name: "Alex", age: 24, id: Symbol("123"), isActive: true }

// Array (относится к объекту)
const numArr = [1, 2, 3, 4, 5];
console.log(typeof numArr); // object
console.log(numArr); // Array(5) [ 1, 2, 3, 4, 5 ]

// function (относится к объекту, но тип данных у неё выводится как function, )
function info() {
  return 'Hello World!';
}
console.log(typeof info); // function (тип данных function нет в js, это объект, нужно запомнить правило)


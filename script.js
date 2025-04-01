// Arrays - Массивы

/* 
  Если необходима упорядоченная коллекция данных, в которой присутствуют 1-й, 2-й, 3-й 
  элементы и т.д. Например, для хранения списка пользователей, товаров, элементов и т.д..

  В этом случае пользовать объект неудобно, так как он не предоставляет методов управления
  порядком элементов. Нельзя вставить новое свойство "между" уже существующими.
  Объекты просто не предназначены для этих целей

  Для хранения упорядоченных коллекций существует особая структура данных, которая 
  называется массив
*/

const log = console.log;

// const arr = [];
const arr = new Array();

const numbers = [1, 10, 33, 45, 99, 130];
const arrayMix = [1, 2, 'hello', true, undefined, null, {}, []];
// массив внутри массива называется "матрица" или "двумерный массив"

log(numbers); // Array(6) [ 1, 10, 33, 45, 99, 130 ]
log(numbers[0]); // 1
log(numbers[1]); // 10

log(arrayMix); // Array(8) [ 1, 2, "hello", true, undefined, null, {}, [] ]
log(typeof numbers); // object

// -----------------------------
let x = numbers[5];
log(x); // 130

x = numbers[5] + numbers[1];
log(x); // 140

// -----------------------------
numbers[5] = 1000;
log(numbers[5]); // 1000

log(numbers.length); // 6 // длина массива

// -----------------------------
const newArray = new Array(1, 2, 3, 5, 'hello');
log(newArray); // Array(5) [ 1, 2, 3, 5, "hello" ]

// --------------------------
// копирование массивов

const copiedArray = numbers;
log(copiedArray === numbers); // true

copiedArray[0] = 999;
log(copiedArray === numbers); // true
log(copiedArray[0], numbers[0]); // 999 999

// ------- методы -----------
numbers.unshift(111); // добавляет в нулевой массив, а остальные смещаются вперед
log(numbers); // Array(7) [ 111, 999, 10, 33, 45, 99, 1000 ]

numbers.push(777); // Добавляет в самый конец массива
log(numbers); // Array(8) [ 111, 999, 10, 33, 45, 99, 1000, 777 ]

numbers.shift(); // удаляет нулевой массив (первый элемент)
log(numbers); // Array(7) [ 999, 10, 33, 45, 99, 1000, 777 ]

numbers.pop(); // удаляет самый последний элемент в массиве
log(numbers); // Array(6) [ 999, 10, 33, 45, 99, 1000 ]

const lastValue = numbers.pop();
log(numbers); // Array(5) [ 999, 10, 33, 45, 99 ]
log(lastValue); // 1000
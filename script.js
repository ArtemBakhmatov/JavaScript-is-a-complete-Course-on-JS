// Number (числа)

let x = 10;

x = Number(100); // 100 // number
x = new Number(1000); // Number { 1000 }
x = x.valueOf(); // 1000 // number

console.log(x);

// ----------------- Методы -------------------
// строка
let num = 20;

num = num.toFixed(); // 20 // приводит значение к строке // после запетой можно убрать числа
num = 20.3333;
num = num.toFixed(2); // 20.33 // это строка, если нет ничего в скобках, то вернет только целое число , строка
num = 20.4444;
num = num.toPrecision(3); // 20.4 // строка // тут числа убираются от начала целого числа
num = num.toString(); // 20.4 // также преобразует в строку
num = num.toString().length; // 4 // получаем длину строки 

console.log(num);

num = new Number(0) // Number { 0 } // число  // экземпляр класса

if (num) { // условие сработает так как num сейчас объект
  console.log('check');
}

// --------------------------------

const maxNumber = Number.MAX_VALUE;
const minNumber = Number.MIN_VALUE;

console.log(maxNumber); // 1.7976931348623157e+308
console.log(minNumber); // 5e-324



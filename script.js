let value = 10;

// число в строку 

value = value + '';         // 1 вариант преобразования в строку
value = `${ value }`;       // 2 вариант преобразования в строку
value = value.toString();   // 3 вариант преобразования в строку
value = String(value);      // 4 вариант преобразования в строку
console.log(value);   // 10 // string

// строку в число

value = Number(value);      // 1 вариант преобразования в число
value = '10';
value = +value;             // 2 вариант преобразования в число
value = '10a'
value = parseInt(value);    // 3 вариант преобразования в число, буквы удаляет, '10a' -> 10
console.log(value);   // 10 // number

value = '10.333';
value = parseFloat(value); // превращает число с плавающей точкой
console.log(value);   // 10.333 // number

value = parseInt(value); // этот метод делает целое число и удаляет буквы
console.log(value);   // 10 // number 

value = 10.12345;
value = value.toFixed(3); // после плавающей точки остается три числа и становится строкой
console.log(value);   // 10.123 // string 

value = parseFloat(value); // преобразуем в число с плавающей точкой
console.log(value);   // 10.123 // number

// -----------------------------
// Casting

value = 10 + '10';
console.log(value);   // 1010 // string

value = 10 * '10';
console.log(value);   // 100 // number

value = 10 / '10';
console.log(value);   // 1 // number

value = 10 - '10';
console.log(value);   // 0 // number

value = 10 % '10';
console.log(value);   // 0 // number

value = 10 + true; // true -> это 1
console.log(value);   // 11 // number

value = 10 + false; // false -> это 0
console.log(value);   // 10 // number

value = 10 + null; // null -> это ничего 
console.log(value);   // 10 // number

value = 10 + undefined; // undefined нельзя сложить с другим числом
console.log(value);   // NaN // не число

value = 10 + NaN; // NaN нельзя сложить с другим числом
console.log(value);   // NaN // не число

value = 10 + []; // число складываем с пустым массивом будет строка
console.log(value);   // 10 // string

value = 10 + {}; // число складываем с пустым объектом будет строка
console.log(value);   // 10[object Object] // string

value = true + true;
console.log(value);   // 2 // number

value = true + false;
console.log(value);   // 1 // number

value = false + false;
console.log(value);   // 1 // number

// -----------------------------
// == сравнивается с приведением к одному типу
// === сравнивается по типу и по значению без приведения к одному типу

let res;

res = true == true;
console.log(res); // true

res = true === true;
console.log(res); // true

res = true == 1;  // тут сравнением по значению
console.log(res); // true

res = true === 1; // тут сравнением по значению и по типу данных
console.log(res); // false 

res = false == 0; // тут сравнением по значению
console.log(res); // true

res = false === 0; // тут сравнением по значению и по типу данных
console.log(res); // false 

res = 1 == '1'; 
console.log(res); // true

res = 1 === '1'; 
console.log(res); // false

res = null == undefined;
console.log(res); // true

res = null === undefined;
console.log(res); // false

res = '' == [];
console.log(res); // true

res = '' === [];
console.log(res); // false
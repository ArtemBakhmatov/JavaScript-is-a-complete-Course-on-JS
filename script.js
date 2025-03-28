// Строки JS, Методы строк, Шаблонизация, Юникод
// Strings (строки)

const log = console.log;

let str = 'Hello World!'; // Hello World!
str = 'Hello \nWorld!'; // Hello // перенос строки
                        // World!
str = 'Hello \'World!\''; // Hello 'World!'
str = '👍'; // 👍
str = String.fromCodePoint(128077); // 👍 // 128077 - кодировка из UTF-32BE

str = 'U+1F44D'; // U+1F44D // мы юникод скопировали и вставили сюда, но работать не будет
str = '\u{1F44D}'; // 👍 // сработало, вместо U+ я поставил \u и далее фигурные скобки
// если в фигурных скобках меньше пяти символов то можно писать и без фигурных скобок

const copyRight = '\u00A9'; // ©

log(str);
log(copyRight);

// ------------------------------------
const filePath = String.raw`C:\Development\profile\aboutMe.html`; // метод raw пишем так raw``, а не так raw() 

log(filePath); // C:\Development\profile\aboutMe.html

// ------------------------------------

const firstName = 'Anna';
str = `Hello ${ firstName }`; // Hello Anna

str = `User:
  - Alex
  - Nik
  - Julia
  - Margarita
`;

// ответ в консоли будет такой:
/* 
User:
  - Alex
  - Nik
  - Julia
  - Margarita 
*/

log(str);

// ------------------------------------
let text = 'World';

log(text.length); // 5 // Длина символов
log(text.toUpperCase()); // WORLD // верхний регистр 
log(text.toLowerCase()); // world // нижний регистр
log(text.repeat(3)); // WorldWorldWorld // повторится три раза

// для массивов отчет начинается с нуля
log(text[0]); // W
log(text[1]); // o
log(text[3]); // l

log(text.at(3)); // l // тут отчет начинается тоже с 0, 

let me = 'I am ' + text.at(1) + text.at(3) + text.at(4); // I am old
me = `I am ${ text.at(1) }${ text.at(3) }${ text.at(4) }`; // I am old

log(me);

// методы charAt() и at() - одинаковые, но at() может работать и с отрицательными числами

// ------------------------------------

str = '    JavaScript is awesome       ';

str = str.trim(); // JavaScript is awesome // убирает пробелы слева и с права
str = str.trimEnd(); // JavaScript is awesome // убирает пробелы с правой стороны
str = str.trimStart(); // JavaScript is awesome // убирает пробелы с левой стороны
log(str);

log(str.replace('Script', '')); // Java is awesome
log(str.replace('Script', '----')); // Java---- is awesome

log(str.indexOf('S')); // 4
log(str.indexOf('Script')); // 4
log(str.indexOf('Java')); // 0
log(str.indexOf('W')); // -1

str = 'JavaScript is awesome';

if (str.indexOf('Java')) { // 0 // falsy значение (false)
  log('Проверка не пройдена');
}
// в с условиях с indexOf всегда делаем неравенство !== -1 // это уже правильное решение
if (str.indexOf('Java') !== -1) { // 0 не равняется -1 // true // условие сработает
  log('Проверка пройдена');
}

// ------------------------------------

log(str); // JavaScript is awesome
log(str.includes('is')); // true // возвращает boolean значение // проверяет есть ли такие данные 
log(str.startsWith('Java')); // true // проверка строка начинается с Java?
log(str.endsWith('Java')); // false // так как не заканчивается со словом Java
log(str.endsWith('some')); // true // так как заканчивается со словом some

// ------------------------------------
// substring, slice, substr (устаревший метод)

// substring(start, end)
// slice(start, end)
// substr(start, length)

str = 'hardcore';

log(str.substring(0, 4)); // 'hard' // подрезает слова // возвращает подстроку
log(str.substring(4)); // 'core'
log(str.substring(8, 4)); // 'core' // автоматически меняет на (4, 8)

log(str.slice(0, 4)); // 'hard'
log(str.slice(8, 4)); // тут вообще ничего не получим // пустая строка

log(str.substr(8, 4)); // тут вообще ничего не получим // пустая строка
log(str.substr(1, 3)); // 'ard'

// ------------------------------------

let random = 'abc';

log(random.padStart('10', '0')); // 0000000abc
// padStart('количество символов', 'какие символы устанавливать')
log(random.padStart('10', '0').length); // 10

log(random.padEnd('10', '0')); // abc0000000
log(random.padEnd('13', Math.random())); // abc0.59506270

// Arrays - Methods (Методы)
// forEach, indexOf, lastIndexOf, find, findIndex,
// some, every, slice, splice, toSpliced,
// filter, map, reduce

const log = console.log;

const skills = ['html', 'css', 'scss', 'js', 'git', 'ts', 'react', 'css'];

// ----------- Перебор массива -------------

// ------- Перебор массива (перебирает массив как for, for of) ---------
skills.forEach((value) => log(value));
skills.forEach((value, index) => log(value, index));
skills.forEach((value, index, thisArr) => log(value, index, thisArr));

const logValues = (value) => log(value);
skills.forEach(logValues);

function logValueFn(value) {
  log(value);
}
skills.forEach(logValueFn);


// ----------- Поиск в массиве -------------
// indexOf, lastIndexOf (возвращает индекс запрашиваемого элемента)

log(skills.indexOf('js')); // 3 // возвращает индекс массива
log(skills.indexOf('js', 2)); // 3
log(skills.indexOf('js', 4)); // -1

log(skills.indexOf('css')); // 1
log(skills.lastIndexOf('css')); // 7

log(skills.indexOf('git')); // 4
log(skills.lastIndexOf('git')); // 4

// -- some, every (возвращают true/false если по условию элемент / элементы найдены / не найдены)

const isJs = skills.some((skill) => skill === 'js');
log(isJs); // true
// some() противоположен every()
const isJs2 = skills.every((skill) => skill === 'js');
log(isJs2); // false

const phones = [
  { id: 1, title: 'samsungA50' },
  { id: 2, title: 'iphone10' },
  { id: 3, title: 'nokia3310' },
  { id: 4, title: 'xiaomi' }
];

const everyHasTitles = phones.every((phone) => 'title' in phone);
const someHasTitles = phones.some((phone) => 'title' in phone);

log(everyHasTitles); // true
log(someHasTitles); // true

// ----------------- find ------------------
// находит и возвращает первый найденный элемент по условию

const nokia = phones.find((phone) => phone.title === 'nokia3310');
log(nokia); // Object { id: 3, title: "nokia3310" }

const nokiaIndex = phones.findIndex((phone) => phone.title === 'nokia3310');
log(nokiaIndex); // 2

const filteredSkills = skills.filter((skill) => skill.includes('c'));
log(filteredSkills); // Array(4) [ "css", "scss", "react", "css" ]

const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(num => num % 2 === 0);
log(evenNumbers); // Array(5) [ 2, 4, 6, 8, 10 ]

const clients = [
  { id: 1, level: 3, name: 'Lucy', status: 'online' },
  { id: 2, level: 1, name: 'Rick', status: 'offline' },
  { id: 3, level: 3, name: 'Jack', status: 'online' },
  { id: 4, level: 2, name: 'Helen', status: 'online' },
  { id: 5, level: 1, name: 'Alice', status: 'offline' },
  { id: 6, level: 1, name: 'Derek', status: 'offline' },
  { id: 7, level: 3, name: 'Megan', status: 'online' },
];

const clientsWithHightLevel = clients.filter(client => client.level === 3);
log(clientsWithHightLevel);
/* 
  Array(3) [ {…}, {…}, {…} ]
  0: Object { id: 1, level: 3, name: "Lucy", … }
  1: Object { id: 3, level: 3, name: "Jack", … }
  2: Object { id: 7, level: 3, name: "Megan", … } 
*/

/* 
  slice - возвращает новый массив, в который копирует все элементы с индекса star да end
*/

const newPhones = phones.slice(0, 2);
log(newPhones);

/* 
  Array [ {…}, {…} ]
  0: Object { id: 1, title: "samsungA50" }
  1: Object { id: 2, title: "iphone10" } 
*/

// delete phones[nokiaIndex];
// log(phones);

/* 
  Array(4) [ {…}, {…}, <1 empty slot>, {…} ]
  0: Object { id: 1, title: "samsungA50" }
  1: Object { id: 2, title: "iphone10" }
  3: Object { id: 4, title: "xiaomi" } 
  длина у него все равно 4, лучше такой метод не использовать
*/

/* 
  splice - изменяет исходный массив, умеет добавлять, удалять и заменять элементы
*/

log(phones.splice(nokiaIndex, 1)); // 0: Object { id: 3, title: "nokia3310" }
log(phones);

/* 
  Array(3) [ {…}, {…}, {…} ]
  0: Object { id: 1, title: "samsungA50" }
  1: Object { id: 2, title: "iphone10" }
  2: Object { id: 4, title: "xiaomi" } 
*/

log(phones.splice(1, 0, {id: 5, title: 'iphone16'})); // []
log(phones);

/* 
  Array(4) [ {…}, {…}, {…}, {…} ]
  0: Object { id: 1, title: "samsungA50" }
  1: Object { id: 5, title: "iphone16" }
  2: Object { id: 2, title: "iphone10" }
  3: Object { id: 4, title: "xiaomi" } 
*/

/*
  toSpliced, тот же splice, но только делает копию массива, а не изменяет исходный массив
*/

const phones2025 = phones.toSpliced();
log(phones);

/* 
  Array(4) [ {…}, {…}, {…}, {…} ]
  0: Object { id: 1, title: "samsungA50" }
  1: Object { id: 5, title: "iphone16" }
  2: Object { id: 2, title: "iphone10" }
  3: Object { id: 4, title: "xiaomi" } 
*/

const phones2025_2 = phones.toSpliced(2, 1, { id: 5, title: "iphone16" });
log(phones2025_2);

/* 
  Array(4) [ {…}, {…}, {…}, {…} ]
  0: Object { id: 1, title: "samsungA50" }
  1: Object { id: 5, title: "iphone16" }
  2: Object { id: 5, title: "iphone16" }
  3: Object { id: 4, title: "xiaomi" } 
*/

// ----- Преобразование элементов ------

const str = 'hello';
log(str.split('')); // Array(5) [ "h", "e", "l", "l", "o" ]
log(str.split('').reverse()); // Array(5) [ "o", "l", "l", "e", "h" ]
log(str.split('').reverse().join('')); // olleh

// --------------------------------------------------------

/*
  map - один из наиболее полезных и часто используемых.

  map - вызывает функцию для каждого элемента массива 
  и возвращает массив результатов выполнения этой функции
*/

const clientNames = clients.map(client => client.name);
log(clientNames); // Array(7) [ "Lucy", "Rick", "Jack", "Helen", "Alice", "Derek", "Megan" ]

// 2-й вариант решения используя {} и return
// const clientNames = clients.map(client => {
//   return client.name
// });

const clientNamesAndStatuses = clients.map(client => {
  return {
    age: Math.random() * 50 + 30,
    name: client.name,
    status: client.status
  }
});

log(clientNamesAndStatuses);

/* 
  Array(7) [ {…}, {…}, {…}, {…}, {…}, {…}, {…} ]
  0: Object { age: 43.06233835725487, name: "Lucy", status: "online" }
  1: Object { age: 54.03797938519695, name: "Rick", status: "offline" }
  2: Object { age: 51.72938227893147, name: "Jack", status: "online" }
  3: Object { age: 40.593154008800084, name: "Helen", status: "online" }
  4: Object { age: 76.95601729537722, name: "Alice", status: "offline" }
  5: Object { age: 55.9931481141255, name: "Derek", status: "offline" }
  6: Object { age: 37.60279166009777, name: "Megan", status: "online" }
*/

const clientNamesAndStatuses2 = clients.map(client => {
  return {
    name: client.name,
    status: client.status
  }
}).map(client => {
  if (client.status === 'online') {
    client.status = 'online 🤔'
  } else {
    client.status = 'offline 🥱'
  }

  return client;
});

log(clientNamesAndStatuses2);

/* 
  Array(7) [ {…}, {…}, {…}, {…}, {…}, {…}, {…} ]
  0: Object { name: "Lucy", status: "online 🤔" }
  1: Object { name: "Rick", status: "offline 🥱" }
  2: Object { name: "Jack", status: "online 🤔" }
  3: Object { name: "Helen", status: "online 🤔" }
  4: Object { name: "Alice", status: "offline 🥱" }
  5: Object { name: "Derek", status: "offline 🥱" }
  6: Object { name: "Megan", status: "online 🤔" } 
*/

const clientNamesAndStatuses3 = clients.map(client => {
  return {
    name: client.name,
    status: client.status
  }
}).map(client => {
  if (client.status === 'online') {
    client.status = 'online 🤔'
  } else {
    client.status = 'offline 🥱'
  }

  return client;
}).filter(c => c.status.startsWith('on'));

log(clientNamesAndStatuses3);

/* 
  Array(4) [ {…}, {…}, {…}, {…} ]
  0: Object { name: "Lucy", status: "online 🤔" }
  1: Object { name: "Jack", status: "online 🤔" }
  2: Object { name: "Helen", status: "online 🤔" }
  3: Object { name: "Megan", status: "online 🤔" }
*/

// ---------------------------------------------------------------------

/*
  reduce -> используется для вычисления единого значения на основе всего массива

  arr.reduce((accumulator, item, index, array) => {
    // ...
  }, [initial]);

  Аргументы:
  accumulator - результат предыдущего вызова этой функции, равен initial при первом вызове 
  (если передан initial)
  item - очередной элемента массива
  index - его позиция
  array - сам массив
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1-й вариант решения 
const sumAllNumbers = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
  // тут идет процесс такой: 0 + 1 = 1; 1 + 2 = 3; 3 + 3 = 6; 4 + 6 = 10 и т.д. и получим 55
}, 0);

// 2-й вариант решения 
// const sumAllNumbers = numbers.reduce((s, v) => s + v, 0);

log(sumAllNumbers); // 55

const books = [
  { id: 1, title: 'Гарри Поттер', price: 59, category: 'fantasy' },
  { id: 2, title: 'Чистый код', price: 109, category: 'science' },
  { id: 3, title: 'Темная Башня', price: 149, category: 'fantasy' },
  { id: 4, title: 'Грохаем алгоритмы', price: 173, category: 'science' },
  { id: 5, title: 'Многопоточный JavaScript', price: 79, category: 'science' }
];

const totalPrice = books.reduce((sum, book) => sum + book.price, 0);
log(totalPrice); // 569

// {
//   fantasy: 2,
//   science: 3
// }

const categoryMap = books.reduce((res, book) => {
  if (book.category in res) { // если есть в объекте такое поле
    res[book.category]++
  } else {
    res[book.category] = 1;
  }

  return res;
}, {});

// или второе решение 
let categoriesCount = 0;
const categoryMap2 = books.reduce((res, book) => {
  if (book.category in res) { // если есть в объекте такое поле
    res[book.category]++;
  } else {
    res[book.category] = 1;
    categoriesCount++;
  }

  return res;
}, {});

log(categoryMap); // Object { fantasy: 2, science: 3 }
log(categoriesCount); // 2

log(Object.keys(categoryMap)); // Array [ "fantasy", "science" ]
log(Object.keys(categoryMap).length); // 2  
 


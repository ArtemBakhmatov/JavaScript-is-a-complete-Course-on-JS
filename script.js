// Array (массивы) - for of, методы, деструктуризация, spread, rest

const styles = `background: lightsalmon`;
const log = console.log;
 
const cars = ['audi', 'ford', 'mercedes', 'mazda', 'tesla'];

const users = [
  { id: 1, name: 'Alex', age: 35, position: 'manager' },
  { id: 2, name: 'Kate', age: 22, position: 'qa' },
  { id: 3, name: 'Nikita', age: 29, position: 'developer' }
];

// for of (цикл по массиву)

for (const car of cars) {
  log(`Car -> ${ car }`);
}

/* 
  Car -> audi 
  Car -> ford 
  Car -> mercedes 
  Car -> mazda 
  Car -> tesla 
*/

for (const user of users) {
  log(`User -> ${ user.name } ${ user.age } ${ user.position }`);
}

/* 
  User -> Alex 35 manager 
  User -> Kate 22 qa 
  User -> Nikita 29 developer 
*/

// ----------- Методы ------------

const numbers1 = [4, 33, 2, 1];

log(numbers1.sort()); // Array(4) [ 1, 2, 33, 4 ] // изменяет массив
log(numbers1.sort((a, b) => a - b)); // Array(4) [ 1, 2, 4, 33 ] // это правильный вариант

log('reverse', numbers1.reverse()); // reverse Array(4) [ 33, 4, 2, 1 ]
log(numbers1); // Array(4) [ 33, 4, 2, 1 ] // после мутации перем-я изменилась

const numbers2 = [4, 33, 2, 1];

log(numbers2.toSorted((a, b) => a - b)) // Array(4) [ 1, 2, 4, 33 ]
log(numbers2); // Array(4) [ 4, 33, 2, 1 ] // тут после мутации перемен-я не изменилась

const newNumbers2 = numbers2.toSorted((a, b) => a - b);
log(newNumbers2); // Array(4) [ 1, 2, 4, 33 ] // чтобы пер-я изменилась, делаем через новую пер-ю

log(numbers2.toSorted((a, b) => a - b).toReversed()); // Array(4) [ 33, 4, 2, 1 ]

// sort() -> изменяет массив
// toSorted() -> создает копию нового массива

// ---------------------------------

const newCars = ['nissan', 'volvo'];
const allCars = cars.concat(newCars); // объединяем два массива в один

log(allCars); // Array(7) [ "audi", "ford", "mercedes", "mazda", "tesla", "nissan", "volvo" ]

log(allCars.toString()); // превращает массив в строку // audi,ford,mercedes,mazda,tesla,nissan,volvo
log(allCars.join()); // превращает массив в строку // audi,ford,mercedes,mazda,tesla,nissan,volvo
log(allCars.join('')); // audifordmercedesmazdateslanissanvolvo
log(allCars.join(' ')); // audi ford mercedes mazda tesla nissan volvo
log(allCars.join(',')); // audi,ford,mercedes,mazda,tesla,nissan,volvo
log(allCars.join('-')); // audi-ford-mercedes-mazda-tesla-nissan-volvo

// ----------------------------------

const nestedArrays = [1, 2, [3, 4], [5, 6], [7, [8, 9]], 10];

log(nestedArrays[2]); // Array [ 3, 4 ]
log(nestedArrays[2][0]); // 3 // здесь получим строку

log(nestedArrays.flat()); // Array(9) [ 1, 2, 3, 4, 5, 6, 7, (2) [8, 9], 10 ];
// [3, 4] -> первый уровень вложенности
// [8, 9] -> второй уровень вложенности

log(nestedArrays.flat(2)); // Array(10) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
log(nestedArrays.flat(Infinity)); // Array(10) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] // такой же ответ
// Infinity -> прописываем если мы не знаем сколько уровней вложенности

// ----------------------------------
// cars = ['audi', 'ford', 'mercedes', 'mazda', 'tesla'];
log(cars.includes('audi')); // true // есть в массиве cars
log(cars.includes('lada')); // false

log('hello world'.includes('lo')); // true

log(cars.at(1)); // ford // строка
log(cars.at(-1)); // tesla // строка

// ---------- static methods ----------
// статические методы объекта/массива

const num = 123;
log(Array.isArray(num)); // false
log(Array.isArray(cars)); // true

const arrayOf = Array.of(1, 2, 'Hello');
log(arrayOf); // Array(3) [ 1, 2, "Hello" ]

const arrayFrom = Array.from('12345');
log(arrayFrom); // Array(5) [ "1", "2", "3", "4", "5" ]

// ------------ Деструктуризация -------------

const names = ['Alex', 'Mike', 'Angelina'];
// const nameAlex = names[0];
//const nameMike = names[1];

// log(nameAlex, nameMike); // Alex Mike

const [nameAlex, nameMike] = names;
log(nameAlex, nameMike); // Alex Mike

const name2 = ['Kate'];
const [nameKate, nameOlga] = name2;
log(nameKate, nameOlga); // Kate undefined

const [nameKate2, nameOlga2 = 'Olga'] = name2;
log(nameKate2, nameOlga2); // Kate Olga

// const [counter, setCounter] = useState(0);

// ---------------- spread ------------------
// оператор расширения 
// spread -> Раскладывает массив

const allNames = [...names, 'Nik', ...name2];
log(allNames); // Array(5) [ "Alex", "Mike", "Angelina", "Nik", "Kate" ]

const strHello = 'Hello';
log([...strHello]); // Array(5) [ "H", "e", "l", "l", "o" ]

const allNumbers = [1, 55, 9, 33, 124, 765, 0, 3, 4];

log(Math.max(...allNumbers)); // 765

// --------------- rest --------------------
// Остаточные параметры
// rest -> создает массив

const sum = (...numbers) => {
  let sum = 0;

  for (const value of numbers) {
    sum += value;
  }

  return sum;
}

log(sum(1, 2, 3)); // 6

const [firstName, ...restNames] = names;
log(firstName, restNames); // Alex Array [ "Mike", "Angelina" ]

const fn = (arg1, arg2, ...rest) => {
  // тут всё будет работать
}

// const fn2 = (arg1, ...rest, ...arg) => {
//   // тут код сломается так как ...rest должен быть в самом конце
// }

const getTitleAndDescription = (title, ...description) => {
  log(`%c${ title }`, styles);

  for (const value of description) {
    log(`- ${ value }`);
  }
}

getTitleAndDescription('JavaScript', 'Язык программирования', 'на нем можно писать всё что угодно', 'гибкий и очень популярный');

/* 
  JavaScript 
  - Язык программирования 
  - на нем можно писать всё что угодно 
  - гибкий и очень популярный 
*/
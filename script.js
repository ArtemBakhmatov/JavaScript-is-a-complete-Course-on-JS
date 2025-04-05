// Циклы, for, while
const styles = `background: lightsalmon`;
const log = console.log;

// ------- Циклы for ----------

const cars = ['audi', 'ford', 'mercedes', 'mazda', 'tesla'];

log('1: ', cars[0]);
log('2: ', cars[1]);
log('3: ', cars[2]);
log('4: ', cars[3]);
log('5: ', cars[4]);

/* 
  for(стартовое выражение (начало); условное выражение (условие); 
  инкремент или декремент, повторяется на каждом шаге (итерация)) {
    логика на каждом шаге (итерации)
  }
*/
// 1 способ
for(let i = 0; i <= 5; i++) { // когда цикл дойдет до 6 и сразу цикл заканчивается, i - локаль-я пере-я
  log('--->', i);
}
// будет такой ответ
/* 
  ---> 0 
  ---> 1 
  ---> 2 
  ---> 3 
  ---> 4 
  ---> 5 
*/

// 2 способ
let i = 0; // i - глобальная переменная
for(; i < 5; i++) {
  log('число: ', i);
}

// будет такой ответ
/* 
  число:  0
  число:  1
  число:  2
  число:  3
  число:  4 
*/

// 3 способ
let y = 0; // i - глобальная переменная
for(; y < 5;) {
  log('число: ', y++);
}
// ответ будет такой как и во втором способе

// for(;;) {
//   log('Тут будет вечный цикла и браузер зависнет');
// }

// -----------------------------------
// 1 вариант с машинами
for (let i = 0; i < cars.length; i++) {
  log(`${ i + 1 }: ${ cars[i] }`);
}

/* 
  1: audi 
  2: ford 
  3: mercedes 
  4: mazda 
  5: tesla
*/

// 2 вариант с машинами
for (let i = cars.length - 1; i >= 0; i--) {
  log(`${ i + 1 }: ${ cars[i] }`);
}

/* 
  5: tesla 
  4: mazda 
  3: mercedes 
  2: ford 
  1: audi
*/

// --------------------------------------------

for (let i = 0; i < cars.length; i++) {
  if (cars[i] === 'mercedes') continue; // эту итерацию он пропустит и пойдет дальше
  log(`${ i + 1 }: ${ cars[i] }`);
}

/* 
  1: audi 
  2: ford 
  4: mazda 
  5: tesla 
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i] === 'mercedes') break; // тут цикл останавливается
  log(`${ i + 1 }: ${ cars[i] }`);
}

/* 
  1: audi 
  2: ford 
*/

// --------------------------------------------
const users = [
  { id: 1, name: 'Alex', age: 35, position: 'manager' },
  { id: 2, name: 'Kate', age: 22, position: 'qa' },
  { id: 3, name: 'Nikita', age: 29, position: 'developer' } 
];

for (let x = 0; x < users.length; x++) {
  console.group(`Employee ${ x + 1 }`); 
  log(`Name: ${ users[x].name }`);
  log(`Age: ${ users[x].age }`);
  log(`Position: ${ users[x].position }`);
  console.groupEnd();
}

/* 
  Employee 1 
    Name: Alex
    Age: 35 
    Position: manager   
  Employee 2 
    Name: Kate
    Age: 22
    Position: qa 
  Employee 3
    Name: Nikita 
    Age: 29
    Position: developer 
*/

// ------------------------------
// 1) Вычислить сумму всех чисел

const numbers1 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers1.length; i++) {
  // sum = sum + numbers1[i];
  sum += numbers1[i];
}

log(sum); // 15

// 2) Посчитать количество четных чисел в массиве

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let eventCount = 0; // Четное число
for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] % 2 === 0) { // условие на четное число
    eventCount++
  }
}
log(eventCount); // 5

// -----------------------------------
// Вложенные циклы

for (let i = 0; i < 3; i++) {
  log(`%c${ i + 1 } - loop[1]`, styles);
  for (let j = 0; j < 3; j++) {
    log(`%c${ j + 1 } - loop[2]`);
  }
}

/* 
  1 - loop[1] 
    %c1 - loop[2] 
    %c2 - loop[2] 
    %c3 - loop[2] 
  2 - loop[1] 
    %c1 - loop[2] 
    %c2 - loop[2] 
    %c3 - loop[2] 
  3 - loop[1] 
    %c1 - loop[2] 
    %c2 - loop[2] 
    %c3 - loop[2] 
*/

// ---------------------------------- 
// while нужен для бесконечного цикла
let i1 = 0;

while (i1 < cars.length) {
  log(`while - ${ i1 + 1 }`);
  i1++;
}

/* 
  while (true) {
    тут будет бесконечный цикл  
    break; // тут можем прервать цикл если будет ключевое слово break
  }
*/

while (true) {
  log(`while(true)`);
  if ( i1 >= 10) {
    log(`i1 = ${ i1}`);
    break;
  }
  i1++;
}

// -------------------------------------
// do - while

// let i2 = 0;

// do {
//   log(`do-while - ${ i2 + 1 }`);
//   //i2++;
// } while (i2 < cars.length);

// 3) Отсортируйте массив пузырьковой сортировкой

const array = [4, 33, 2, 1];

for (let i = 0; i < array.length; i++) {
  log(`%c${ i - 1 } - loop[1]`, styles); // если в обратную сторону то ставим знак -
  for (let y = 0; y < array.length - 1 - i; y++) {
    log(`%c${ y + 1 } - loop[2] ${ array[y] > array[y + 1] }`);
    if (array[y] > array[y + 1]) {
      let temp = array[y];
      array[y] = array[y + 1];
      array[y + 1] = temp;
    }
  }
}

log(array); // [1, 2, 4, 33]

// есть другой вариант решения
log(array.sort((a, b) => a - b)); // по возрастанию // [1, 2, 4, 33]
log(array.sort((a, b) => a - b).reverse()); // тут по убыванию
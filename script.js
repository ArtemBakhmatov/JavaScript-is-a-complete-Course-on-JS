// Objects - Объекты 

// Объекты это ссылочный тип переменной 
/* 
  У объектов есть свойства.
  Свойство - это пара "ключ: значение", где ключ - это строка (также называется "именем свойства"),
  а значение может быть чем угодно.
*/

const log = console.log;

const hobby = 'hobby';
const id = '13#smIsd@';

// const const person = new Object();
const person = {
  name: 'Artem',
  age: 37,
  isDeveloper: true,
  address: {
    country: 'Poland',
    city: 'Gdansk',
    street: 'Main street 999'
  },
  0: 'just 0',
  'last name': 'Miracle',
  greet: function() {
    log('Hello, I am Artem!');
  },
  greetSecond: () => log('greetSecond!'),
  hobby: 'skiing, coding',
  // [hobby]: 'skiing, coding', можно писать и таким вариантом
  id, // тут можем просто ключ прописать, если не будем присваивать другое значение
  // id: id // результат тот же 
}

log(person); // Object { name: "Artem", age: 37 }
log(person.name); // 'Artem'
log(person.age);  // 33

log(person['name']);// 'Artem'
log(person['age']); // 33

log(person.isDeveloper); // true
log(person.isPositive); // undefined // так как нет этого ключа в объекте
// log(person.isPositive.qwerty); // error

log(person.address); // Object { country: "Poland", city: "Gdansk", street: "Main street 999" }
log(person.address.city, person.address.country, person.address.street); // Gdansk Poland Main street 999

// -----------------------

log(person[0], person['0']); // just 0 just 0 // тут уже ключ пишем массивом
log(person["last name"]); // Miracle // правильно писать так 

delete person[0]; // удаляем ключ 0
log(person); // Object { name: "Artem", age: 37, isDeveloper: true, address: {…}, "last name": "Miracle" }

// ------------------------------

log(person.greet()); // Hello, I am Artem!
log(person.greetSecond()); // greetSecond!

const prevName = person.name;
log(prevName); // Artem

person.name = 'Алёша!';
log(person.name); // Алёша!

// ----------------------------

log(person.isHappy); // undefined // так как нет этого ключа в объекте
person.isHappy = true;
log(person.isHappy); // true

// ---------------------------

log(person.hobby); // skiing, coding
log(person);
/* 
  Object { 
    name: "Алёша!", 
    age: 37, isDeveloper: 
    true, address: {…}, 
    "last name": "Miracle", 
    greet: greet(), 
    greetSecond: greetSecond(), 
    hobby: "skiing, coding", 
    id: "13#smIsd@", 
    isHappy: true 
  }

*/
log(person.id); // 13#smIsd@

// -----------------------------

log('age' in person); // true // 
log('qwerty' in person); // false // 

// -------------------------- 

const newPerson = person; // присваиваем не объект, а ссылку,
// поменяли в newPerson , тут же сразу меняется и в person

log(newPerson === person); // true

newPerson.age = 20;

log(newPerson === person); // true
log(newPerson.age, person.age); // 20 20
// this

// 1) Глобальный объект
console.log(this); // В браузере выведет window, в Node.js - глобальный объект

// 2) Методы объекта 

const person = {
  name: 'Alex',
  sayHello: function () {
    console.log(`Hello, ${ this.name }`); // Выведет 'Hello, Alex' 
    console.log(`Hello, ${ JSON.stringify(this) }`); // Hello, {"name":"Alex"}
  }
}

person.sayHello(); // Выведет 'Hello, Alex' 

// ----------------------------------------------------------------
// this и  стрелочные функции

const person1 = {
  age: 33,
  sayAge: () => {
      console.log(`Age: ${this.age}`);
  },
  sayAgeWithContext: function () {
      console.log(`Age: ${this.age}`);
  }
};

const say = person1.sayAgeWithContext;
say(); // Выведет "Age: undefined" 

const boundSay = person1.sayAgeWithContext.bind(person1);
boundSay(); // Выведет "Age: 33"

// 4) см в index.html
// -------------------------------------------------------
// 5) call, apply и bind

function greet (greeting, emoji) { // function, не стрелочная функция
  console.log(`${ greeting }, ${ this.name } - ${ emoji }`);
}

const person2 = { name: 'Alex' };

greet('Hello', '🔥'); //Hello,  - 🔥
greet.call(person2, 'Hello', '🔥'); // Hello, Alex - 🔥
greet.apply(person2, ['Hi', '💋']); // Hi, Alex - 💋

const say1 = greet.bind(person2);
say1('Hey', '🍷'); // Hey, Alex - 🍷

// ------------------------------------------------------
// Потеря контекста
const sayAge = person1.sayAgeWithContext;
sayAge(); // Age: undefined

const boundSayAge = person1.sayAgeWithContext.bind(person1);
boundSayAge(); // Age: 33
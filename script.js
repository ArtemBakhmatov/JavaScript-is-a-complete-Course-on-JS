// Объекты, методы, деструктуризация, for in, строгий режим (strict mode)
"use strict";

const log = console.log;

// -------------------------------------------
// for in (цикл по объекту)

const user = {
  id: 4,
  name: 'Alice',
  age: 25,
  position: 'Developer',
  address: {
    country: 'Australia',
    city: 'Sidney'
  }
};

for (const key in user) {
  log(`New User -> ${ key } : ${ user[key]}`);
};

/* 
  New User -> id : 4 
  New User -> name : Alice 
  New User -> age : 25 
  New User -> position : Developer 
*/

log(Object.keys(user)); // Array(4) [ "id", "name", "age", "position" ] // массива ключей

for (const key of Object.keys(user)) { // цикл массива
  log(`New User -> ${ key } : ${ user[key]}`);
}

/* 
  New User -> id : 4 
  New User -> name : Alice 
  New User -> age : 25 
  New User -> position : Developer 
*/

// ------ Деструктуризация, деструктуризующее присваивание --------
// если массив, то вытягиваем по порядку, а если объект, то в любой последовательности
const { name, ...restProps } = user;
log(name, restProps); // Alice Object { id: 4, age: 25, position: "Developer" }

const newUser = {
  ...user // тут только поверхностное копирование // копирует только примитивы  
}

log(newUser); // Object { id: 4, name: "Alice", age: 25, position: "Developer" }

log(newUser === user); // false

newUser.name = 'Alex';
log(newUser, user);
/* 
  Object { id: 4, name: "Alex", age: 25, position: "Developer" }
  Object { id: 4, name: "Alice", age: 25, position: "Developer" } 
*/

newUser.address.city = 'Melbourne'; // он поменяется в двух объектах

delete newUser.address.city; // удалиться у обоих объектов 
delete newUser.address.country; // // удалиться у обоих объектов 

log(newUser, user);


const obj1 = { a: 10, b: 20 };
const obj2 = { c: 30, d: 40 };

const obj3 = {
  ...obj1,
  ...obj2,
  e: 50
}

log(obj3); // Object { a: 10, b: 20, c: 30, d: 40, e: 50 }

const obj4 = Object.assign({}, obj1, obj2);
log(obj4); // Object { a: 10, b: 20, c: 30, d: 40 }

// -------------- Методы --------------------

let x = Object.keys(user);
log(x); // Array(5) [ "id", "name", "age", "position", "address" ]

x = Object.values(user);
log(x); // Array(5) [ 4, "Alice", 25, "Developer", {} ]

x = Object.entries(user);
log(x); // [ [ "id", 4 ], [ "name", "Alice" ], [ "age", 25 ], [ "position", "Developer" ], ["address", {}] ]

x = Object.hasOwn(user, 'address');
log(x); // true // так как в есть ключ address в объекте user

x = Object.hasOwn(user, 'skills');
log(x); // false 

// есть по проще вариант
x = 'address' in user;
log(x); // true

Object.freeze(user); // он замораживает объект // он будет выводится в консоли, но не получится
// перезаписать ключи и не можем удалять

function example(a, b) {
  return a
}


 


// prototypes - прототипы 

const animal = {
  eats: true
}

const rabbit = {
  jumps: true
}

rabbit.__proto__ = animal; // rabbit присваиваем animal

console.log(rabbit.eats); // true

// ----------------------------------------------------------------

const animal1 = {
  eat() {
    console.log('Я ем!');
  }
};

const dog = Object.create(animal1);

dog.eat();  // 'Я ем!

dog.bark = function() { // расширили наш объект
  console.log('Гав!');
}

dog.bark(); // Гав!

// ----------------------------------------------------------------
// Функция - конструктор

function Person(name) {
  this.name = name;
}

const john = new Person('John');

console.log(john); // Person {name: 'John'}

Person.prototype.sayHello = function () { // sayHello -> придумываем название
  console.log(`Привет, меня зовут ${ this.name }`);
}

john.sayHello(); // Привет, меня зовут John

console.log(john instanceof Person); // true
console.log(john.__proto__ === Person.prototype); // true

// ----------------------------------------------------------------
// можно добавить собственные методы к встроенным объектам

Array.prototype.printElements = function () { // добавляем новые метод ко всем массивам
  this.forEach((element, index) => {        // this указывает на массив, на котором метод вызывается
      console.log(`Элемент ${index + 1}: ${element}`);
  });
};

const myArray = [10, 20, 30, 40, 50];
myArray.printElements();

/* 
  Элемент 1: 10
  Элемент 2: 20
  Элемент 3: 30
  Элемент 4: 40
  Элемент 5: 50 
*/


// Classes - Классы

const log = console.log;

// ------- Базовый синтаксис --------
/* 
    class MyClass {
        // методы класса
        constructor() { ... }
        method1() { ... }
        method2() { ... }
        method3() { ... }
        ...
    }

    - Вызов new MyClass() создает новый объект со всеми перечисленными методами;
    - При этом автоматически вызывается метод constructor(), в нём можно инициализировать объект;
*/

class User {
  constructor(name) {
    this.name = name;
  }

  greeting () {
    log(`Hello, I am ${ this.name }`);
  }

  greet = () => {
    log(`Hello, I am ${ this.name }`);
  }
}

const userAles = new User('Alex');
log(userAles); // User {name: 'Alex'}
log(userAles.name); // Alex

userAles.greeting(); // Hello, I am Alex
userAles.greet(); // Hello, I am Alex

const userOlga = new User('Olga');
userOlga.greeting(); // Hello, I am Olga
userOlga.greet(); // Hello, I am Olga

log(typeof User); // function



// ------- new Function - Функция-конструктор --------

function UserFnClass (name) {
  this.name = name;

  this.greeting = function () {
    log(`Hello, I am ${this.name}`);
  }
}

UserFnClass.prototype.greet = function () {
  log(`Hello, I am ${this.name}`);
}

/* 
  со стрелочной функцией тут потеря контекста (this)

  UserFnClass.prototype.greet = () => {
      log(`Hello, I am ${this.name}`)
  } 
*/

const userFnVlad = new UserFnClass("Vlad");

log(userFnVlad.name); // Vlad
userFnVlad.greeting();  // Hello, I am Vlad
userFnVlad.greet(); // Hello, I am Vlad

// ------- Геттеры и Сеттеры. Класс с приватными полями --------

class User1 {
  profession = 'software engineer' // создали статичную переменную
  #skills = ''; // приватное поле // можем менять с помощью get и set

  constructor(name) {
    this.name = name;
  }

  get skills() {
    return this.#skills;
  }

  set skills(newSkills) {
    if (typeof newSkills !== 'string') return
    this.#skills = newSkills;
  }
}

const userAnna = new User1('Anna');

log(userAnna); // User1 {profession: 'software engineer', name: 'Anna'}

userAnna.name = 'Anna Viktorovna';
userAnna.profession = 'manager';

log(userAnna); // User1 {profession: 'manager', name: 'Anna Viktorovna'}

userAnna.skills = 'html, css, js';
log(userAnna.skills); // html, css, js


// ------- Класс со статическими методами и свойствами --------

class User2 {
  static #instanceCount = 0;

  constructor(name) {
    this.name = name;
    User2.#instanceCount++;
  }

  greeting() {
    log(`Hello, I am ${this.name}`)
  }

  static getInstanceCount() {  // static работает только в самом классе, не на экземплярах
    return log(User2.#instanceCount);
  }
}

const userKen = new User2("Ken");
userKen.greeting(); // Hello, I am Ken

const userNatalia = new User2("Natalia");
userNatalia.greeting(); // Hello, I am Natalia

User2.getInstanceCount(); // 2
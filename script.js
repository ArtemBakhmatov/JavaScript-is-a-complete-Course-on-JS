// JSON, local $ session storage

const log = console.log;

/*
  У нас есть объект, и мы хотели бы его преобразовать в строку, 
  чтобы отправить по сети или просто вывести для логирования

  JSON (JavaScript Object Notation) - это общий формат данных для представления значений
  и объектов, который имеет собственный независимый формат

  JSON легко использовать для ОТМЕНА ДАННЫМИ по сети, когда клиент 
  использует JavaScript, а сервер может быть написан на любом языке программирования

  2 основных метода для работы с JSON 

  -JSON.stringify для преобразования объектов в JSON.
  -JSON.parse для преобразования JSON обратно в объект.

  ключ и значение всегда в двойных кавычках (значения числовые и boolean можно писать без кавычек)
*/

const car = {
  year: new Date(2024, 3, 1),
  brand: 'audi',
  color: 'blue',
  power: 3.2
};

log(car); 
// { year: Date Mon Apr 01 2024 00:00:00 GMT+0300, brand: "audi", color: "blue", power: 3.2 }

const carJSON = JSON.stringify(car);
log(carJSON);
// {"year":"2024-03-31T21:00:00.000Z","brand":"audi","color":"blue","power":3.2}

const carObject = JSON.parse(carJSON);
log(carObject);
// Object { year: "2024-03-31T21:00:00.000Z", brand: "audi", color: "blue", power: 3.2 }

// log(carObject.year.getFullYear()); // будет ошибкой т.к. дата теперь строка, а не объект
log(car.year.getFullYear()); // 2024

const carObject2 = JSON.parse(carJSON, (key, value) => { // из строки дата делаем объект
  if (key === 'year') {
    return new Date(value);
  }

  return value;
});

log(carObject2); // теперь дата стала объектом 
// { year: Date Mon Apr 01 2024 00:00:00 GMT+0300, brand: "audi", color: "blue", power: 3.2 }

const car2 = {
  inFast: true,
  getInfo: () => log('Car info'),
  isExpensive: undefined
}

const car2JSON = JSON.stringify(car2);
log(car2JSON); // {"inFast":true} 
// JSON понимает boolean тип, но не понимает функцию getInfo, поэтому его и не видно
// JSON также не понимает undefined, поэтому ключа isExpensive и не видим 

const car2Object = JSON.parse(car2JSON);

log(car2Object); // Object { inFast: true }

// ---------------------------------
/*
  Объекты веб-хранилища localStorage и sessionStorage позволяют хранить пары
  ключ/значение в браузере

  Что в них важно - данные, которые в них записаны, сохраняются после обновления страницы
  (в случае sessionStorage) и даже после перезапуска браузера (при использовании localStorage)
*/

// localStorage.setItem("test", 123); // создает ключ со значением 123
// localStorage.removeItem('test'); // удаляет ключ
// localStorage.clear(); // очистить всё

// log(localStorage.length); // 1 // одни ключ test
// log(localStorage.key(0)) //  test

const clients = [
  { id: 1, level: 3, name: 'Lucy', status: 'online' },
  { id: 2, level: 1, name: 'Rick', status: 'offline' },
  { id: 3, level: 3, name: 'Jack', status: 'online' },
  { id: 4, level: 2, name: 'Helen', status: 'online' },
  { id: 5, level: 1, name: 'Alice', status: 'offline' },
  { id: 6, level: 1, name: 'Derek', status: 'offline' },
  { id: 7, level: 3, name: 'Megan', status: 'online' },
];

localStorage.setItem('clients', JSON.stringify(clients));

const clientsFromStorage = localStorage.getItem('clients');
log(clientsFromStorage);
/* 
  [
    {"id":1,"level":3,"name":"Lucy","status":"online"},
    {"id":2,"level":1,"name":"Rick","status":"offline"},
    {"id":3,"level":3,"name":"Jack","status":"online"},
    {"id":4,"level":2,"name":"Helen","status":"online"},
    {"id":5,"level":1,"name":"Alice","status":"offline"},
    {"id":6,"level":1,"name":"Derek","status":"offline"},
    {"id":7,"level":3,"name":"Megan","status":"online"}
  ] 
*/

const clientsFromStorage2 = JSON.parse(localStorage.getItem('clients'));
log(clientsFromStorage2);

/* 
  [
    {id:1,level:3,name:"Lucy",status:"online"},
    {id:2,level:1,name:"Rick",status:"offline"},
    {id:3,level:3,name:"Jack",status:"online"},
    {id:4,level:2,name:"Helen",status:"online"},
    {id:5,level:1,name:"Alice",status:"offline"},
    {id:6,level:1,name:"Derek",status:"offline"},
    {id:7,level:3,name:"Megan",status:"online"}
  ] 
*/

const clientsFromStorage3 = JSON.parse(localStorage.getItem('clients1') ?? '{}');
log(clientsFromStorage3); // {}

// ---------------------------------------

sessionStorage.setItem('test', 123)
 
 




 


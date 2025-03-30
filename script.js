// Date & Time
// Объект Date - содержит дату и время, также методы управления ими.

const log = console.log;

let d = new Date(); // Date Sat Mar 29 2025 20:20:54 GMT+0300 (Moscow Standard Time)
d = new Date(0); // Date Thu Jan 01 1970 03:00:00 GMT+0300 (Moscow Standard Time) // начальное время
d = Date.now(); // 1743269008974 // количество миллисекунд

/* 
  Объект Date с временем, равным количеством миллисекунд (тысяча доля секунды).
  прошедших с 1 января 1970 года UTC+0
  Целое число, представляющее собой количество миллисекунд, прошедших с начала 1970 года,
  называется таймстамп (англ. timestamp)
*/

d = new Date(2024, 10); // Date Fri Nov 01 2024 00:00:00 GMT+0300 (Moscow Standard Time)
// d = new Date(год, месяц); // месяц начинается с нуля и до 11

d = new Date(2024, 10, 15, 9, 30, 43); // Date Fri Nov 15 2024 09:30:43 GMT+0300 (Moscow Standard Time)
// d = new Date(год, месяц, число, час, минуты, секунды); 

d = new Date('2024-10-15'); // Date Tue Oct 15 2024 03:00:00 // можно передать в виде строки
d = new Date('2024-10-15 09:30'); // Date Tue Oct 15 2024 09:30:00 GMT+0300 

d = new Date('08-14-2024'); // Date Wed Aug 14 2024 00:00:00 GMT+0300 (Moscow Standard Time)
d = new Date('2024-10-15T00:00:00'); // Date Tue Oct 15 2024 00:00:00 GMT+0300 (Moscow Standard Time)

d = d.getTime(); // 1728939600000 // количество миллисекунд от 1970 до 2024

d = Math.floor(Date.now() / 1000 / 60 / 60 / 24 / 365 ); // 55 // 
// 55 лет прошло с 01.01.1970 года
// (Date.now() / 1000 миллисекунд / 60 минут / 60 секунд / 24 часа / 365 дней );


// ------------- Методы -------------------

d = Date.parse('2024-10-15T00:00:00'); // 1728939600000 // парсит в миллисекунды

d = new Date(); // Date Sat Mar 29 2025 20:56:10 GMT+0300 (Moscow Standard Time)

// Сеттеры (установщики)

// d.setDate(1); // Date Sat Mar 01 2025 21:00:28 GMT+0300 (Moscow Standard Time) // число 1 марта
// d.setDate(31); // Date Mon Mar 31 2025 21:08:55 GMT+0300 (Moscow Standard Time) крайний день месяца
// d.setDate(0); // Date Fri Feb 28 2025 21:10:06 GMT+0300 (Moscow Standard Time)
// d.setDate(-1); // Date Thu Feb 27 2025 21:10:39 GMT+0300 (Moscow Standard Time)

d.setHours(0); // Date Sun Mar 30 2025 00:09:12 GMT+0300 (Moscow Standard Time)
d.setMinutes(0); // Date Sun Mar 30 2025 00:00:56 GMT+0300 (Moscow Standard Time)
d.setSeconds(0); // Date Sun Mar 30 2025 00:00:00 GMT+0300 (Moscow Standard Time)
d.setFullYear(2026); // Date Mon Mar 30 2026 00:00:00 GMT+0300 (Moscow Standard Time)
d.setFullYear(2026, 0, 10); // Date Sat Jan 10 2026 00:00:00 GMT+0300 (Moscow Standard Time)

let d1 = new Date();
log(d1, '', d);
log(d1.getTime()); // 1743344272873
log(d.getTime());  // 1767992400787
log(d.getTime() - d1.getTime()); // 24648014000 // разница
log((d.getTime() - d1.getTime()) / 1000 / 60 / 60 / 24 ); // 285.27663194444443 (285 дней)

log(d);

// Геттеры (получатели)

d = new Date(); // Date Sun Mar 30 2025 17:24:39 GMT+0300 (Moscow Standard Time)
log(d.getDate()); // 30 // получаем сегодняшнее число
log(d.valueOf()); // 1743344730436 // количество миллисекунд
log(d.getFullYear()); // 2025
log(d.getMonth()); // 2 // месяц начинается с нуля // месяц март 
log(d.getMonth() + 1); // 3 // можем так написать, чтобы нам было проще
log(d.getDay()); // 0 // это воскресенье // отчет с нуля начинается , т.е. с вс
log(d.getHours()); // 17

// представление даты 
d = new Date();

let date = Intl.DateTimeFormat('default').format(d); // 3/30/2025

date = Intl.DateTimeFormat('en-GB').format(d); // 30/03/2025
date = Intl.DateTimeFormat('ru-RU').format(d); // 30.03.2025

date = Intl.DateTimeFormat('ru-RU', { // для производительности от лучше 
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).format(d); // 30 марта 2025 г.

date = d.toLocaleString('ru-RU', { 
  minute: 'numeric',
  hour: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Berlin' // часовой пояс 
}); // 30 марта 2025 г. в 16:46 (берлинское время)

// Intl.DateTimeFormat() и d.toLocaleString() одинаковые, но лучше использовать первый вариант

log(date);

// ------------ UTC vs ISO ---------------
// UTC (Coordinated Universal Time)

/* 
  UTC (Координированное универсальное время) - это стандарт времени, который пользуется по всему миру
  --> UTC: Подходит для отображения даты и времени в текстовом виде, когда важна читаемость.
*/

/* 
  ISO (International Organization for Standardization)
  ISO 8601 - это международный стандарт для предоставления дат и времени.

  --> ISO: Предпочтительно использовать для хранения данных и передачи между системами, 
  так как формат строгий и однозначный
*/

const now = new Date();

console.group('UTC & ISO'); // UTC & ISO
log(now.toUTCString()); // Sun, 30 Mar 2025 14:57:56 GMT
log(now.toISOString()); // 2025-03-30T14:58:25.558Z
console.groupEnd();
// Window, DOM, BOM, Browser API
// Про то, что такое API было рассказано во второму уроке

const log = console.log;

/*
  Объект window поддерживается всеми браузерами. Он представляет собой окно браузера

  Все глобальные объекты , функции и переменные JS автоматически становятся
  членами объекта window.

  Глобальные переменные - это свойства объекта window.
  Глобальные функции - это методы объекта window.
*/

// ------------- BROWSER API ------------------
// ------- BOM (Browser Object Model) -------
// Объектная модель браузера (BOM) позволят JS общаться с браузером

log(window);
log(window.innerHeight); // 951 // высота страницы
log(window.innerWidth); // 933 // ширина страницы

// window.open(); // открывает новую вкладку
// window.open('https://ya.ru', '_blank'); //
// window.open('https://ya.ru', '_self'); //
// window.close(); // закрывает страницу

// Объект window.screen содержит информацию об экране пользователя.
// window.screen может быть записан без префикса window.

log(screen.width); // 1707 // ширина экрана 
log(screen.height); // 1067 // высота экрана
log(screen.pixelDepth); // 24 // глубина пикселя

// Объект window.location можно использовать для получения адреса текущей страницы (URL)
// и для перенаправления браузера на новую строку.

log(location.href); // http://127.0.0.1:5500/ // возвращает текущую страницу
log(location.hostname); // 127.0.0.1 // доменное имя
log(location.pathname); // / -> в нашем случае данные после http://127.0.0.1:5500/тут данные 
log(location.protocol); // http:

// Объект window.navigator содержит информацию о браузере посетителя.

log(navigator); // все данные о пользователе
log(navigator.userAgent); // Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0
log(navigator.userAgentData); // в сафари будет undefined
log(navigator.geolocation);
log(navigator.language); // en-US

// Объект window.history содержит историю браузера
log(history); // History { length: 1, scrollRestoration: "auto", state: null }

// -------------------- alerts ----------------------
// window.alert('Hello!');


// ---------- DOM (Document Object Model) --------------

// DOM - это представление всей страницы как объекта.
// Объект document - основная "входная точка".
// С его помощью мы можем что-то создавать или менять на странице

log(window.document);
console.dir(window.document);
log(document.body);
log(document.head);
log(document.head.innerHTML)
document.body.style.backgroundColor = '#ff000069';

// --------------- JavaScript -----------------

log(window.Array.prototype);
log(window.Object.prototype);






 


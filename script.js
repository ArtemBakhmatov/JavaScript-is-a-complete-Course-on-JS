// DOM - basics, navigation
/*
  DOM позволяет нам делать что угодно с элементами и их содержим, но для начала
  нужно получить соответствующий DOM-объект.

  Все операции с DOM начинаются с объекта document. Это главная "точка".
  Из него мы можем получить доступ к любому узлу.
*/

const log = console.log;
const dir = console.dir;

// dir(document.documentElement);
// dir(document.head);
// dir(document.body);

dir(document.children); // HTMLCollection { 0: html, length: 1 }
dir(document.children[0].children); // HTMLCollection { 0: head, 1: body, length: 2 }

dir(document.body.children); // HTMLCollection { 0: h1, 1: h2, 2: h3, 3: script, length: 4 }
dir(document.body.children[0]); // <h1>
dir(document.body.childElementCount); // 4 // т.е. всего четыре элемента в body

dir(document.body.childNodes); // 13 // они также включают еще и текст и пробелы, перенос строки

// NodeList - text, HTMLElements...
// HTMLCollection - only HTMLElements...

for (const child of document.body.children) {
  if (child.tagName !== 'SCRIPT') {
    dir(child); // dir может принимать только один документ
    log('child: ', child); // 
  }
  // получим все элементы кроме элемента <script></script>
}
/* 
  <h1>
  <h2>
  <h3>
*/

const body = document.body;
dir(body.firstChild); // #text "\n  " // тут также и с пробелами и с отступами // текстовая нода
dir(body.firstElementChild); // h1> 
dir(body.lastChild); //  // тут также и с пробелами и с отступами // текстовая нода
dir(body.lastElementChild); 

body.firstElementChild.style.color = 'red';
log(body.parentElement); // <html lang="en">, т.е. родителем является <html lang="en"> у body
log(body.parentNode);
log(body.parentElement.parentElement); // null
log(body.parentNode.parentNode); // HTMLDocument http://127.0.0.1:5500/index.html

const h2 = document.body.children[1];
log(h2);

log(h2.previousElementSibling); // h1 // получаем элемент который выше h2
log(h2.nextElementSibling); // h3 // получаем элемент который ниже h2
log(h2.textContent); // my

// h2.textContent = 'Awesome!!'; // Awesome!!
h2.textContent += ' Awesome!!'; // my Awesome!!








 


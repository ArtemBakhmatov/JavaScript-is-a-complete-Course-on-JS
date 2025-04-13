// DOM - создание, получение, добавление, удаление элементов

const log = console.log;
const dir = console.dir;

// querySelector - самый универсальный, удобный и популярный

const p = document.querySelector('p');
log(p); // <p>text 1</p>
dir(p); // p // тут получаем объект тега p

const allP = document.querySelectorAll('p');
log(allP); // NodeList(3) [p, p, p]
dir(allP); // NodeList(3)

log(Array.from(allP)); // (3) [p, p, p]

const lastText = document.querySelector('.last-text');
// const lastText = document.querySelector('p[class="last-text"]');
// const lastText = document.querySelector('[class="last-text"]');

dir(lastText); // p.last-text

// const firstText = document.querySelector('#first-text');
const firstText = document.getElementById('first-text');
dir(firstText); // p#first-text

const wrapper = document.querySelector('.wrapper');
log(wrapper); 

const firstText1 = wrapper.querySelector('#first-text');
// const firstText1 = wrapper.getElementById('first-text'); // работать не будет

// --------------------------------------------------------------------
// getElementById* - возвращают живые коллекции, но лучше использовать querySelector

const allTexts = document.getElementsByTagName('p');
log(allTexts); // HTMLCollection(4) [p#first-text, p, p, p.last-text, first-text: p#first-text]

// allTexts.forEach(element => log(element)); // получим ошибку
allP.forEach(element => log(element)); 

// Array.from(allP).forEach(element => log(element));

// ------------------------------------------------------------------

log(wrapper.textContent);
log(wrapper.innerHTML);
log(wrapper.outerHTML);

// wrapper.textContent = 'hello';
wrapper.innerHTML = '<p>text from js</p>';
wrapper.innerHTML += '<p>text from js</p>';

wrapper.prepend('text with prepend'); // текст добавился в начале wrapper
wrapper.append('text with append'); // текст добавился в конце wrapper

wrapper.before('text with before'); // текст добавился перед wrapper
wrapper.after('text with after'); // текст добавился после wrapper

wrapper.append('<p>text from js</p>'); // text from js // тут теги уберутся из за безопасности

const h2 = document.createElement('h2');
h2.textContent = 'Наш созданный h2';
log(h2); // <h2>Наш созданный H2</h2>

wrapper.append(h2);

lastText.innerHTML = ''; // очищает содержимое в lastText
lastText.remove(); // удаляется весь тег

// ----------------------------------------------------------
// insertAdjacentHTML / Text / Element 

const container = document.querySelector('.container');
const h3 = document.createElement('h3');
h3.textContent = 'наш созданный h3';

// -- beforeBegin, afterBegin, beforeend, afterend --

container.insertAdjacentElement('afterbegin', h3);

container.insertAdjacentText('beforebegin','1) текст над контейнером');
container.insertAdjacentText('afterBegin','2) текст в начале контейнера');
container.insertAdjacentText('beforeend','3) текст в конце контейнера');
container.insertAdjacentText('afterend','4) текст после контейнера');

const buttonID = 123;
container.insertAdjacentHTML('afterbegin', `
  <hr>
  <button id=${ buttonID }>кнопка</button>
  <hr>
`);

// -----------------------------------------------------------
// копирование документов

const deepCopiedContainer = container.cloneNode(true);
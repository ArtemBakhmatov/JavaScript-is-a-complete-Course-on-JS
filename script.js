// DOM - styles and attributes

const log = console.log;
const dir = console.dir;

document.body.style.backgroundColor = 'lightgrey';

const block = document.querySelector('#block-1');

// 1-й способ стилизации
// block.style.backgroundColor = '#123456';
// block.style.color = '#fff';
// block.style.padding = '1em';

// 2-й способ стилизации (лучше использовать 1-й)
// block.style.cssText = `
//   background-color = #123456;
//   color = #fff;
//   padding = 1em;
// `;

// 3-й способ стилизации
block.classList.add('block'); // добавили класс block
log(block.classList.contains('block')); // true
// block.classList.remove('block'); // удалили класс block

block.classList.toggle('block'); // удалится класс block
block.classList.toggle('block'); // добавиться класс block

block.classList.add('block', 'block--xl'); // добавляются два класса через запятую

// ------------------------------------------------------
// getComputedStyle()

const button = document.querySelector('button');
log(button.style.color); // в консоли ничего не получаем 
log(button.style.backgroundColor); // в консоли ничего не получаем 

const buttonComputedStyles = getComputedStyle(button);
log(buttonComputedStyles.color); // rgb(0, 0, 0)
log(buttonComputedStyles.backgroundColor); // rgb(240, 240, 240)

button.style.fontSize = '16px';
log(buttonComputedStyles.fontSize); // 16px

log(buttonComputedStyles.paddingLeft); // 6px
log(buttonComputedStyles.paddingRight); // 6px

// button.style.paddingRight = '30px'; // 30px
// button.style.paddingRight = 30 + buttonComputedStyles.paddingRight; // 306px
button.style.paddingRight = `${ 20 + parseInt(buttonComputedStyles.paddingRight) }px`; // 26px
button.style.paddingLeft = `${ 20 + parseInt(buttonComputedStyles.paddingLeft) }px`; // 26px

// ---------------------------------------------------------
// getBoundingClientRect()
log(button.getBoundingClientRect()); 
// DOMRect {x: 8, y: 351.3333435058594, width: 113.78125, height: 24.666667938232422, top: 351.3333435058594, …}

// ----------------------------------------------------------
// Атрибуты
log(block.hasAttribute('id')); // true
log(block.hasAttribute('class')); // true
log(block.hasAttribute('href')); // false

log(block.getAttribute('class')); // block block--xl
log(block.removeAttribute('id')); // undefined

block.setAttribute('title', 'Наш большой блок!');

const link = document.createElement('a');
link.textContent = 'ссылка на ютуб';
link.href = 'https://youtube.com';
link.target = '_blank';

document.body.prepend(link);
link.setAttribute('qwerty', 'Просто для текста!');

// ------------------------------------------------------
// Data - Атрибуты

const product = document.getElementById('product');

log(product.dataset);
// DOMStringMap {id: '123#@%45', category: 'electronics', produceYear: ''}

log(product.dataset.id); // 123#@%45
log(product.dataset.category); // electronics
log(product.dataset.produceYear); // тут пустая строка

product.dataset.produceYear = 1999;
log(product.dataset.produceYear); // 1999
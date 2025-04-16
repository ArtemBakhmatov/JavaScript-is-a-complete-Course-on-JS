// Event - События

const log = console.log;

const btn = document.querySelector('#btn');
const block = document.querySelector('#block');
const input = document.querySelector('input');
const text = document.querySelector('p');

// btn.onclick = () => log('Кнопка была нажата!');

const btnClickListener = () => {
  log('Кнопка была нажата!');
}

btn.addEventListener('click', btnClickListener);

block.addEventListener('click', () => {
  log('блок была нажат!');
});

input.addEventListener('input', () => {
  log('пользователь что-то ввел!');
});

window.addEventListener('resize', () => {
  log('изменился размер окна!');
});

// -------------- removeEventListener ------------------

block.addEventListener('click', () => {
  btn.removeEventListener('click', btnClickListener);
});

// --------------- Объект Event --------------


input.addEventListener('input', (e) => {
  log(e);
  log(e.target);
  log(e.target.value);
});

btn.addEventListener('click', (e) => {
  log(e.clientX, e.clientY);
  log(e.offsetX, e.offsetY);
});

window.addEventListener('resize', (e) => {
  log(e.target.innerWidth, e.target.innerHeight);
});

text.addEventListener('copy', (e) => {
  e.preventDefault();
  log('Копирование запрещено!');
});

window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
});
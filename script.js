import { setItemToLocalStorage } from './helpers.js';
import greetingFn from './helpers.js';

console.dir(document.getElementById('heading'));

const numbersArray = [1, 2, 3, 4, 5];

setItemToLocalStorage('numbers', numbersArray);
greetingFn();
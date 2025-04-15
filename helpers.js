export const setItemToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const removeItemFromLocalStorage = (key) => {
  localStorage.removeItem(key);
}

export const getItemToLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

const greetingFn = () => console.log('Hello My Friends!');

export default greetingFn;


const input = document.querySelector('[data-text-field]');
const addTodoBtn = document.querySelector('[data-add-todo-btn]');
const container = document.querySelector('[data-todo-container]');

const todoList = JSON.parse(localStorage.getItem('todos')) || [];
const saveToLocalStorage = (key = 'todos') => {
  localStorage.setItem(key, JSON.stringify(todoList));
}

addTodoBtn.addEventListener('click', () => {
  if (input.value.trim()) {
    todoList.push(input.value);
    input.value = '';

    saveToLocalStorage();

    render();
  }
});

const createElement = (tagName, textContent) => {
  const todo = document.createElement(tagName);
  todo.textContent = textContent;
  return todo;
};

const removeTodo = (i) => {
  todoList.splice(i, 1);
  saveToLocalStorage()
  render();
}

const render = () => {
  container.innerHTML = '';
  todoList.forEach((item, i) => {
    const todoElement = createElement('div', item);
    const removeBtn = createElement('button', '❌');

    removeBtn.addEventListener('click', () => removeTodo(i));

    todoElement.classList.add('todo-item');
    todoElement.append(removeBtn);
    container.append(todoElement);
  });
}

render();
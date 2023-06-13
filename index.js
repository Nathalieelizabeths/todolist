const input = document.getElementById('java');
const deleteButton = input.nextElementSibling;

deleteButton.addEventListener('click', () => {
  input.value = '';
});
const addButton = document.querySelector('.add i');
const todoList = document.querySelector('.form');

addButton.addEventListener('click', () => {
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.placeholder = 'New Task';
  todoList.appendChild(newInput);
});

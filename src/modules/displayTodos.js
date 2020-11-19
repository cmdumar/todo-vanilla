import { createTodoDOM } from './helpers';

export default function displayTodos() {
  const todos = JSON.parse(localStorage.getItem('allTodos'));
  const content = document.querySelector('#todo-content');
  content.textContent = '';

  todos.forEach((item, idx) => createTodoDOM(item, idx));
}
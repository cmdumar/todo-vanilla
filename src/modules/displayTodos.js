import { createTodoDOM, deleteTodo, editTodo } from './helpers';

export default function displayTodos(project = 'allTodos') {
  const todos = JSON.parse(localStorage.getItem(project));
  const content = document.querySelector('#todo-content');
  content.textContent = '';

  todos.forEach((todo, idx) => {
    content.append(createTodoDOM(todo, idx));
    deleteTodo(todo, idx);
    editTodo(todo, idx);
  });
}

export function projectEvent() {
  const lis = document.querySelectorAll('.project-btn');
  lis.forEach(li => {
    li.addEventListener('click', () => {
      displayTodos(li.textContent);
    });
  });
}
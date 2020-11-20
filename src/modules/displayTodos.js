import {
  createTodoDOM, deleteTodo, editTodo, expandHidden,
} from './helpers';

export default function displayTodos(project = 'allTodos') {
  const todos = JSON.parse(localStorage.getItem(project));
  const content = document.querySelector('#todo-content');
  content.textContent = '';

  todos.forEach((todo, idx) => {
    content.append(createTodoDOM(todo, idx));
    deleteTodo(todo, idx);
    editTodo(todo, idx);
    expandHidden(idx);
  });
}

export function projectEvent() {
  const lis = document.querySelectorAll('.project-btn');
  const allTodos = document.querySelector('.all-todos');
  lis.forEach(li => {
    li.addEventListener('click', () => {
      const groupTitle = document.getElementById('group-title');
      groupTitle.textContent = li.textContent;
      displayTodos(li.textContent);
    });
  });

  allTodos.addEventListener('click', () => {
    const groupTitle = document.getElementById('group-title');
    groupTitle.textContent = 'Home';
    displayTodos('allTodos');
  });
}
import { createTodoDOM, deleteTodo, editTodo } from './helpers';

export default function displayTodos() {
  const todos = JSON.parse(localStorage.getItem('allTodos'));
  const content = document.querySelector('#todo-content');
  content.textContent = '';

  todos.forEach((todo, idx) => {
    content.append(createTodoDOM(todo, idx));
    deleteTodo(todo, idx);
    editTodo(todo, idx);
  });
}
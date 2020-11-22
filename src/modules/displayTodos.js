import {
  createTodoDOM, deleteTodo, editTodo, expandHidden,
} from './helpers';

const displayTodos = (project = 'allTodos') => {
  const todos = JSON.parse(localStorage.getItem(project));
  const content = document.querySelector('#todo-content');
  content.textContent = '';

  todos.forEach((todo, idx) => {
    content.append(createTodoDOM(todo, idx));
    deleteTodo(todo, idx);
    editTodo(todo, idx);
    expandHidden(idx);
  });
};

const projectEvent = () => {
  const projects = document.querySelectorAll('.project-btn');
  const allTodos = document.querySelector('#all-todos');
  projects.forEach(btn => {
    btn.addEventListener('click', () => {
      const groupTitle = document.getElementById('group-title');
      groupTitle.textContent = btn.value;
      displayTodos(btn.value);
    });
  });

  allTodos.addEventListener('click', () => {
    const groupTitle = document.getElementById('group-title');
    groupTitle.textContent = 'Home';
    displayTodos();
  });
};

export default displayTodos;
export { projectEvent };
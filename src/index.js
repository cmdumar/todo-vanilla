import './style.scss';
import init from './modules/domElements';
import createTodoInstance from './modules/createTodo';
import {
  validateForm,
  validateProject,
  initProject,
  refreshProjects,
} from './modules/helpers';
import displayTodos from './modules/displayTodos';
import createProject from './modules/createProject';

init();
initProject();

const todoForm = document.querySelector('#new-todo');
const submit = document.querySelector('#create-todo');
const createProjectBtn = document.querySelector('#create-project');
const projectForm = document.querySelector('#project-form');


if (localStorage.getItem('allTodos') != null) {
  displayTodos();
}

submit.addEventListener('click', e => {
  e.preventDefault();
  if (validateForm(todoForm)) {
    createTodoInstance(todoForm);
    displayTodos();
    todoForm.reset();
  }
  return null;
});

createProjectBtn.addEventListener('click', e => {
  e.preventDefault();
  if (validateProject(projectForm)) {
    createProject(projectForm);
    refreshProjects();
    projectForm.reset();
  }
  return null;
});

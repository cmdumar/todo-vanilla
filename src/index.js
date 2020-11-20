import './style.scss';
import init from './modules/domElements';
import createTodoInstance from './modules/createTodo';
import {
  validateForm,
  validateProject,
  initProject,
  refreshProjects,
} from './modules/helpers';
import displayTodos, { projectEvent } from './modules/displayTodos';
import createProject from './modules/createProject';

init();
initProject();
projectEvent();

const todoForm = document.querySelector('#new-todo');
const submit = document.querySelector('#create-todo');
const createProjectBtn = document.querySelector('#create-project');
const projectForm = document.querySelector('#project-form');
// const todos = document.getElementById('todo-content');

submit.addEventListener('click', e => {
  e.preventDefault();
  const { projects } = todoForm.elements;
  if (validateForm(todoForm)) {
    createTodoInstance(todoForm);
    displayTodos(projects.value);
    todoForm.reset();
  }
  return null;
});

createProjectBtn.addEventListener('click', e => {
  e.preventDefault();
  if (validateProject(projectForm)) {
    createProject(projectForm);
    refreshProjects();
    projectEvent();
    projectForm.reset();
  }
  return null;
});

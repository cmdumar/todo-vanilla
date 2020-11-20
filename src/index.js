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

submit.addEventListener('click', e => {
  e.preventDefault();
  const { projects } = todoForm.elements;
  const groupTitle = document.getElementById('group-title');
  if (validateForm(todoForm)) {
    createTodoInstance(todoForm);
    groupTitle.textContent = String(projects.value) === 'allTodos' ? 'Home' : projects.value;
    displayTodos(String(projects.value));
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

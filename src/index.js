import './style.scss';
import init from './modules/domElements';
import createTodo from './modules/createTodo';
import { validateForm, initProject } from './modules/helpers';
import displayTodos from './modules/displayTodos';
import createProject from './modules/createProject';

init();
initProject();

const newTodo = document.querySelector('#new-todo');
const submit = document.querySelector('#create-todo');
const createProjectBtn = document.querySelector('#create-project');
const projectForm = document.querySelector('#project-form');
const content = document.querySelector('#todo-content');
const errorMsg = document.createElement('div');
errorMsg.textContent = 'Invalid Inputs!';

if (localStorage.getItem('allTodos') != null) {
  displayTodos();
}

submit.addEventListener('click', e => {
  e.preventDefault();
  if (validateForm(newTodo)) {
    createTodo(newTodo);
    displayTodos();
    newTodo.reset();
  } else {
    content.insertBefore(errorMsg, newTodo);
  }
});

createProjectBtn.addEventListener('click', e => {
  e.preventDefault();
  console.log(projectForm.elements.projectName.value);
  createProject(projectForm);
});

import displayTodos from './displayTodos';

const body = document.querySelector('body');
const keys = Object.keys(localStorage);

const container = document.createElement('div');
container.id = 'container';

const sideNav = document.createElement('div');
sideNav.id = 'side-nav';

const navList = document.createElement('ul');
navList.id = 'nav-list';

const main = document.createElement('div');
main.id = 'main-content';

const heading = document.createElement('h1');
heading.id = 'heading';
heading.textContent = 'Simple Todolist';

const newProjectTitle = document.createElement('h2');
newProjectTitle.textContent = 'New Project';

const projectForm = document.createElement('form');
projectForm.id = 'project-form';

const inputProjectName = document.createElement('input');
inputProjectName.setAttribute('type', 'text');
inputProjectName.setAttribute('name', 'projectName');
inputProjectName.required = true;

const createProjectBtn = document.createElement('button');
createProjectBtn.textContent = 'Create Project';
createProjectBtn.id = 'create-project';

projectForm.append(inputProjectName, createProjectBtn);

const content = document.createElement('div');
content.id = 'todo-content';

const todoForm = document.createElement('form');
todoForm.id = 'new-todo';

const title = document.createElement('input');
title.setAttribute('type', 'text');
title.setAttribute('name', 'title');
title.setAttribute('placeholder', 'Task Title');
title.required = true;

const desc = document.createElement('textarea');
desc.setAttribute('name', 'description');
desc.setAttribute('placeholder', 'Task Description');
desc.required = true;

const dueDate = document.createElement('input');
dueDate.setAttribute('type', 'date');
dueDate.setAttribute('name', 'dueDate');
dueDate.required = true;

const selectProject = document.createElement('select');
selectProject.setAttribute('name', 'projects');
selectProject.id = 'project-options';

keys.forEach(item => {
  const li = document.createElement('li');
  const anchor = document.createElement('button');
  anchor.classList.add('project-btn');
  anchor.textContent = item;
  li.append(anchor);
  navList.append(li);
  const option = document.createElement('option');
  option.textContent = item;
  option.value = item;
  selectProject.append(option);
});

const submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.id = 'create-todo';

sideNav.append(navList);

todoForm.append(title, desc, dueDate, selectProject, submit);

main.append(heading, newProjectTitle, projectForm, todoForm, content);

container.append(sideNav, main);

const init = function init() {
  body.append(container);
  displayTodos('allTodos');
};

export default init;
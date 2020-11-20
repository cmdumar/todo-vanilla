import displayTodos from './displayTodos';

const body = document.querySelector('body');
const keys = Object.keys(localStorage);
keys.splice(keys.indexOf('allTodos'), 1);

const container = document.createElement('div');
container.id = 'container';

const sideNav = document.createElement('div');
sideNav.id = 'side-nav';

const allTodos = document.createElement('button');
allTodos.classList.add('all-todos');
allTodos.textContent = 'Home';

const projectsTitle = document.createElement('h2');
projectsTitle.textContent = 'Projects';

const navList = document.createElement('ul');
navList.id = 'nav-list';

const main = document.createElement('div');
main.id = 'main-content';

const newProjectTitle = document.createElement('h2');
newProjectTitle.textContent = 'New Project';

const projectForm = document.createElement('form');
projectForm.id = 'project-form';

const inputProjectName = document.createElement('input');
inputProjectName.setAttribute('type', 'text');
inputProjectName.setAttribute('name', 'projectName');
inputProjectName.placeholder = 'Project';
inputProjectName.required = true;

const createProjectBtn = document.createElement('button');
createProjectBtn.textContent = 'Create Project';
createProjectBtn.id = 'create-project';

projectForm.append(inputProjectName, createProjectBtn);

const content = document.createElement('div');
content.id = 'todo-content';

const group = document.createElement('div');

const groupTitle = document.createElement('h2');
groupTitle.id = 'group-title';
groupTitle.textContent = 'Home';


const todoForm = document.createElement('form');
todoForm.id = 'new-todo';

const title = document.createElement('input');
title.setAttribute('type', 'text');
title.setAttribute('name', 'title');
title.setAttribute('placeholder', 'New To-Do');
title.required = true;

const desc = document.createElement('textarea');
desc.setAttribute('name', 'description');
desc.setAttribute('placeholder', 'Notes');
desc.required = true;

const dueDate = document.createElement('input');
dueDate.setAttribute('type', 'date');
dueDate.setAttribute('name', 'dueDate');
dueDate.required = true;

const selectProject = document.createElement('select');
selectProject.setAttribute('name', 'projects');
selectProject.id = 'project-options';

keys.forEach(item => {
  const len = JSON.parse(localStorage.getItem(item)).length;
  const li = document.createElement('li');
  const anchor = document.createElement('button');
  const totalTodos = document.createElement('span');
  anchor.classList.add('project-btn');
  anchor.textContent = item;

  totalTodos.textContent = len;

  li.append(anchor, totalTodos);
  navList.append(li);
  const option = document.createElement('option');
  option.textContent = item;
  option.value = item;
  selectProject.append(option);
});

const submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.id = 'create-todo';

sideNav.append(allTodos, projectsTitle, navList, projectForm);

todoForm.append(title, desc, dueDate, selectProject, submit);

group.append(groupTitle, content, newProjectTitle, todoForm);

main.append(group);

container.append(sideNav, main);

const init = function init() {
  body.append(container);
  displayTodos('allTodos');
};

export default init;
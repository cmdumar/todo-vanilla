import displayTodos from './displayTodos';

const body = document.querySelector('body');
const keys = Object.keys(localStorage);
keys.splice(keys.indexOf('allTodos'), 1);

const container = document.createElement('div');
container.id = 'container';

const sideNav = document.createElement('div');
sideNav.id = 'side-nav';

const allTodos = document.createElement('button');
allTodos.id = 'all-todos';
allTodos.textContent = 'Home';

const projectsTitle = document.createElement('h2');
projectsTitle.textContent = 'Projects';

const navList = document.createElement('ul');
navList.id = 'nav-list';

const main = document.createElement('div');
main.id = 'main-content';

const newTodoTitle = document.createElement('h2');
newTodoTitle.textContent = 'Add Task';

const projectForm = document.createElement('form');
projectForm.id = 'project-form';

const inputProjectName = document.createElement('input');
inputProjectName.setAttribute('type', 'text');
inputProjectName.setAttribute('name', 'projectName');
inputProjectName.placeholder = 'New Project';
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
todoForm.id = 'todo-form';

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

const selectLabel = document.createElement('label');
selectLabel.textContent = 'Select a Project';

const selectProject = document.createElement('select');
selectProject.setAttribute('name', 'projects');
selectProject.id = 'project-options';

selectLabel.setAttribute('for', 'projects');

if (keys.length) {
  keys.forEach(item => {
    const len = JSON.parse(localStorage.getItem(item)).length;
    const li = document.createElement('li');
    const anchor = document.createElement('button');
    const totalTodos = document.createElement('span');
    anchor.classList.add('project-btn');
    anchor.textContent = item;
    anchor.value = item;

    totalTodos.textContent = len;

    anchor.append(totalTodos);

    li.append(anchor);
    navList.append(li);
  });
}

keys.push('allTodos');
keys.forEach(item => {
  const option = document.createElement('option');
  option.textContent = item;
  option.value = item;
  selectProject.append(option);
});

const priorityLabel = document.createElement('label');
priorityLabel.textContent = 'Select Priority';

const priority = document.createElement('select');
priority.setAttribute('name', 'priority');
priority.id = 'select-priority';

priorityLabel.setAttribute('for', 'priority');

const options = ['priority 1', 'priority 2', 'priority 3', 'priority 4'];

options.forEach(i => {
  const opt = document.createElement('option');
  opt.value = i;
  opt.textContent = i;

  priority.append(opt);
});


const submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.id = 'create-todo';

sideNav.append(allTodos, projectsTitle, navList, projectForm);

todoForm.append(title, desc, dueDate, selectLabel, selectProject, priorityLabel, priority, submit);

group.append(groupTitle, content, newTodoTitle, todoForm);

main.append(group);

container.append(sideNav, main);

const init = function init() {
  body.append(container);
  displayTodos('allTodos');
};

export default init;
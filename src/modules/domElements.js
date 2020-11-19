const body = document.querySelector('body');

const container = document.createElement('div');
container.id = 'container';

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

const keys = Object.keys(localStorage);

keys.forEach(item => {
  const option = document.createElement('option');
  option.textContent = item;
  option.value = item;
  selectProject.append(option);
});

const submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.id = 'create-todo';

todoForm.append(title, desc, dueDate, selectProject, submit);

container.append(heading, newProjectTitle, projectForm, todoForm, content);

const init = function init() {
  body.append(container);
};

export default init;
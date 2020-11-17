const body = document.querySelector('body');

const container = document.createElement('div');
container.id = 'container';

const heading = document.createElement('h1');
heading.id = 'heading';
heading.textContent = 'Simple Todolist';

const content = document.createElement('div');
content.id = 'todo-content';

container.append(heading, content);

const init = function init() {
  body.append(container);
};

export default init;
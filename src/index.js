import './style.scss';

const heading = document.createElement('h1');
heading.textContent = 'Hello World!';

const body = document.querySelector('body');

body.append(heading);
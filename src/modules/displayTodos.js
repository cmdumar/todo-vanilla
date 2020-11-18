export default function displayTodos() {
  const todos = JSON.parse(localStorage.getItem('allTodos'));
  const content = document.querySelector('#todo-content');
  content.innerHTML = '';

  todos.forEach(item => {
    const todoCard = document.createElement('div');
    todoCard.classList.add('card');

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = item.title;

    const desc = document.createElement('p');
    desc.classList.add('desc-text');
    desc.textContent = item.description;

    const date = document.createElement('p');
    date.classList.add('date-text');
    date.textContent = item.dueDate;

    todoCard.append(title, desc, date);
    content.append(todoCard);
  });
}
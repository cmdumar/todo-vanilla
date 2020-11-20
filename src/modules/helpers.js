function validateForm(form) {
  const { title, description, dueDate } = form.elements;

  if (title.value.length > 4 && description.value.length > 4 && dueDate.value) {
    return true;
  }

  return false;
}

function validateProject(form) {
  const { projectName } = form.elements;

  if (projectName.value.length > 4) {
    return true;
  }

  return false;
}

function initProject() {
  if (localStorage.getItem('allTodos') == null) {
    localStorage.setItem('allTodos', '[]');
  }
}

function errorMsg(element, formEle) {
  const container = document.querySelector(`#${element}`);
  const form = document.querySelector(`#${formEle}`);
  const error = document.createElement('div');
  if (error) {
    error.remove();
  }
  error.id = 'error-msg';
  error.textContent = 'Invalid input!';
  container.insertBefore(error, form);
}

function refreshProjects() {
  const navList = document.getElementById('nav-list');
  const projects = document.querySelector('#project-options');
  projects.textContent = '';
  navList.textContent = '';

  const keys = Object.keys(localStorage);
  keys.forEach(item => {
    const li = document.createElement('li');
    const anchor = document.createElement('button');
    anchor.textContent = item;
    li.append(anchor);
    navList.append(li);

    const option = document.createElement('option');
    option.textContent = item;
    option.value = item;
    projects.append(option);
  });
}

function deleteTodo(item, idx) {
  const deleteBtn = document.getElementById(`delete-btn-${idx}`);

  deleteBtn.addEventListener('click', e => {
    e.preventDefault();
    const arr = JSON.parse(localStorage.getItem(item.project));
    const allArr = JSON.parse(localStorage.getItem('allTodos'));
    allArr.splice(allArr.indexOf(item), 1);
    arr.splice(arr.indexOf(item), 1);
    localStorage.setItem(item.project, JSON.stringify(arr));
    localStorage.setItem('allTodos', JSON.stringify(allArr));
    document.getElementById(`card-${idx}`).remove();
  });
}

function createTodoDOM(item, idx) {
  const todoCard = document.createElement('div');
  todoCard.classList.add('card');
  todoCard.id = `card-${idx}`;

  const title = document.createElement('h2');
  title.classList.add('title');
  title.textContent = item.title;

  const desc = document.createElement('p');
  desc.classList.add('desc-text');
  desc.textContent = item.description;

  const date = document.createElement('p');
  date.classList.add('date-text');
  date.textContent = item.dueDate;

  const project = document.createElement('p');
  project.classList.add('project');
  project.textContent = item.project;

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit Todo';
  editBtn.classList.add('edit-btn');
  editBtn.id = `edit-btn-${idx}`;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete Todo';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.id = `delete-btn-${idx}`;

  todoCard.append(title, desc, date, project, editBtn, deleteBtn);

  return todoCard;
}

function editTodo(item, idx) {
  const card = document.getElementById(`card-${idx}`);
  const editBtn = document.getElementById(`edit-btn-${idx}`);

  editBtn.addEventListener('click', e => {
    e.preventDefault();
    card.textContent = '';

    const editForm = document.createElement('form');
    editForm.id = 'edit-form';

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('name', 'etitle');
    title.value = item.title;

    const desc = document.createElement('textarea');
    desc.setAttribute('name', 'edescription');
    desc.value = item.description;

    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.setAttribute('name', 'edueDate');
    date.value = item.dueDate;

    const save = document.createElement('button');
    const cancel = document.createElement('button');

    save.textContent = 'save changes';
    cancel.textContent = 'cancel';

    save.id = `save-btn-${idx}`;
    cancel.id = `save-btn-${idx}`;

    editForm.append(title, desc, date, save, cancel);
    card.append(editForm);

    cancel.addEventListener('click', e => {
      e.preventDefault();
      card.replaceWith(createTodoDOM(item, idx));
      deleteTodo(item, idx);
      editTodo(item, idx);
    });

    save.addEventListener('click', e => {
      e.preventDefault();
      const all = JSON.parse(localStorage.getItem('allTodos'));
      const todo = all[idx];
      todo.title = title.value;
      todo.description = desc.value;
      todo.dueDate = date.value;
      localStorage.setItem('allTodos', JSON.stringify(all));
      card.replaceWith(createTodoDOM(todo, idx));
      deleteTodo(item, idx);
      editTodo(item, idx);
    });
  });
}

export {
  validateForm,
  validateProject,
  initProject,
  errorMsg,
  refreshProjects,
  createTodoDOM,
  deleteTodo,
  editTodo,
};
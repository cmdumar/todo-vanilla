import editIcon from '../images/pencil.svg';
import delIcon from '../images/remove.svg';
import expandIcon from '../images/expand.svg';

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

function refreshProjects() {
  const navList = document.getElementById('nav-list');
  const selectProject = document.querySelector('#project-options');
  selectProject.textContent = '';
  navList.textContent = '';

  const keys = Object.keys(localStorage);
  keys.splice(keys.indexOf('allTodos'), 1);
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
}

function deleteTodo(item, idx) {
  const deleteBtn = document.getElementById(`delete-btn-${idx}`);
  deleteBtn.addEventListener('click', e => {
    e.preventDefault();
    const allArr = JSON.parse(localStorage.getItem('allTodos'));
    const arr = JSON.parse(localStorage.getItem(item.project));

    allArr.splice(allArr.indexOf(item), 1);
    if (item.project !== 'allTodos') {
      arr.splice(arr.indexOf(item), 1);
      localStorage.setItem(item.project, JSON.stringify(arr));
    }

    localStorage.setItem('allTodos', JSON.stringify(allArr));
    document.getElementById(`card-${idx}`).remove();
  });
}

function createTodoDOM(item, idx) {
  const todoCard = document.createElement('div');
  todoCard.classList.add('card');
  todoCard.id = `card-${idx}`;

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('titleDiv');

  const title = document.createElement('button');
  title.classList.add('title');
  title.textContent = item.title;
  titleDiv.id = `toggle-${idx}`;

  const expand = document.createElement('span');
  expand.textContent = 'Expand';
  expand.classList.add('expand');

  const exIcon = document.createElement('img');
  exIcon.src = expandIcon;
  expand.append(exIcon);

  titleDiv.append(title, expand);

  const hidden = document.createElement('div');
  hidden.id = `hidden-${idx}`;
  hidden.classList.add('todo-details');
  hidden.classList.add('hidden');

  const desc = document.createElement('p');
  desc.classList.add('desc-text');
  desc.textContent = item.description;

  const meta = document.createElement('div');
  meta.classList.add('meta');

  const date = document.createElement('p');
  date.classList.add('date-text');
  date.textContent = item.dueDate;

  const priority = document.createElement('p');
  priority.classList.add('priority');
  priority.textContent = item.priority;

  const project = document.createElement('p');
  project.classList.add('project');
  project.textContent = item.project;

  const btns = document.createElement('div');
  btns.classList.add('btns');

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit Todo';
  editBtn.classList.add('edit-btn');
  editBtn.id = `edit-btn-${idx}`;

  const svgedit = document.createElement('img');

  svgedit.src = editIcon;

  editBtn.prepend(svgedit);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete Todo';
  deleteBtn.classList.add('del-btn');
  deleteBtn.id = `delete-btn-${idx}`;

  const svgdel = document.createElement('img');

  svgdel.src = delIcon;

  deleteBtn.prepend(svgdel);

  meta.append(date, priority, project);

  btns.append(editBtn, deleteBtn);

  hidden.append(desc, meta, btns);

  todoCard.append(titleDiv, hidden);

  return todoCard;
}

function expandHidden(idx) {
  const hidden = document.getElementById(`hidden-${idx}`);
  const toggleBtn = document.getElementById(`toggle-${idx}`);

  toggleBtn.addEventListener('dblclick', () => {
    hidden.classList.toggle('hidden');
  });
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

    const save = document.createElement('button');
    const cancel = document.createElement('button');

    save.textContent = 'save changes';
    cancel.textContent = 'cancel';

    save.id = `save-btn-${idx}`;
    cancel.id = `save-btn-${idx}`;

    editForm.append(title, desc, date, priorityLabel, priority, save, cancel);
    card.append(editForm);

    cancel.addEventListener('click', e => {
      e.preventDefault();
      card.replaceWith(createTodoDOM(item, idx));
      deleteTodo(item, idx);
      editTodo(item, idx);
      expandHidden(idx);
    });

    save.addEventListener('click', e => {
      e.preventDefault();
      const all = JSON.parse(localStorage.getItem('allTodos'));
      const todo = all[idx];
      const project = JSON.parse(localStorage.getItem(item.project));
      const projectTodo = project[idx];

      todo.title = title.value;
      todo.description = desc.value;
      todo.dueDate = date.value;
      todo.priority = priority.value;
      if (item.project !== 'allTodos') {
        projectTodo.title = title.value;
        projectTodo.description = desc.value;
        projectTodo.dueDate = date.value;
        projectTodo.priority = priority.value;

        project.splice(idx, 1, projectTodo);
        localStorage.setItem(item.project, JSON.stringify(project));
      }
      all.splice(idx, 1, todo);
      localStorage.setItem('allTodos', JSON.stringify(all));
      card.replaceWith(createTodoDOM(todo, idx));
      deleteTodo(item, idx);
      editTodo(item, idx);
      expandHidden(idx);
    });
  });
}

export {
  validateForm,
  validateProject,
  initProject,
  refreshProjects,
  createTodoDOM,
  deleteTodo,
  editTodo,
  expandHidden,
};
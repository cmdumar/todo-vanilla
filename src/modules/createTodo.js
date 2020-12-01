import Todo from './todoClass';

const createTodoInstance = (form) => {
  let allTodos;
  let project;
  const {
    title,
    description,
    dueDate,
    projects,
    priority,
  } = form.elements;

  const newTodo = new Todo(
    title.value, description.value, dueDate.value, projects.value, priority.value,
  );

  if (localStorage.getItem('allTodos') != null) {
    allTodos = JSON.parse(localStorage.getItem('allTodos'));
    allTodos.push(newTodo);
    localStorage.setItem('allTodos', JSON.stringify(allTodos));
  }

  if (localStorage.getItem(projects.value)) {
    project = JSON.parse(localStorage.getItem(projects.value));
    project.push(newTodo);
    localStorage.setItem(projects.value, JSON.stringify(project));
  }
};

export default createTodoInstance;
import Todo from './todoClass';

const createTodoInstance = (form) => {
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

  const allTodos = JSON.parse(localStorage.getItem('allTodos'));
  const project = JSON.parse(localStorage.getItem(projects.value));
  allTodos.push(newTodo);
  project.push(newTodo);

  localStorage.setItem('allTodos', JSON.stringify(allTodos));
  localStorage.setItem(projects.value, JSON.stringify(project));
};

export default createTodoInstance;
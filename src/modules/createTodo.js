import Todo from './todoClass';

export default function createTodoInstance(form) {
  const {
    title,
    description,
    dueDate,
    projects,
  } = form.elements;
  const newTodo = new Todo(title.value, description.value, dueDate.value, projects.value);

  const allTodos = JSON.parse(localStorage.getItem('allTodos'));
  const project = JSON.parse(localStorage.getItem(projects.value));
  allTodos.push(newTodo);
  project.push(newTodo);

  localStorage.setItem('allTodos', JSON.stringify(allTodos));
  localStorage.setItem(projects.value, JSON.stringify(project));
}
import Todo from '../modules/todoClass';

test('Create a Todo instance', () => {
  const todo = new Todo('title', 'description', 'dueDate', 'projects', 'priority');

  expect(new Todo()).toBeDefined();
  expect(new Todo('title', 'description', 'dueDate', 'projects', 'priority')).toStrictEqual(todo);
});
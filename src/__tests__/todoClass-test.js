import Todo from '../modules/todoClass';

test('Make a Todo Object', () => {
  expect(new Todo('title', 'description', 'dueDate', 'projects', 'priority')).toBeDefined();
});
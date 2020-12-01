import Todo from '../modules/todoClass';
import createTodoInstance from '../modules/createTodo';

jest.mock('../modules/todoClass.js');

beforeEach(() => {
  Todo.mockClear();
});

it('Check if the createTodo fn called the Todo class', () => {
  const form = {
    elements: {
      title: { value: 'Some title' },
      description: { value: 'Some description' },
      dueDate: { value: '2020-12-12' },
      projects: { value: 'some project' },
      priority: { value: 'some priority' },
    },
  };

  createTodoInstance(form);
  expect(Todo).toHaveBeenCalledTimes(1);
});

test('Throw error when no form is passed', () => {
  expect(() => createTodoInstance()).toThrow();
});
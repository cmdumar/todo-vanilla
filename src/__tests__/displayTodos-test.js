import displayTodos, { projectEvent } from '../modules/displayTodos';

test('displayTodos function to have been defined', () => {
  expect(displayTodos).toBeDefined();
});

test('projectEvent function to have been defined', () => {
  expect(projectEvent).toBeDefined();
});

test('displayTodos to throw error when there is no project', () => {
  expect(() => displayTodos()).toThrow();
});

test('projectEvent to throw error when there is no project', () => {
  expect(() => projectEvent()).toThrow();
});
import { validateForm, validateProject, createTodoDOM } from '../modules/helpers';

it('should validate the create todo form', () => {
  const form = {
    elements: {
      title: { value: 'Some title' },
      description: { value: 'Some description' },
      dueDate: { value: '2020-12-12' },
    },
  };

  const invalidForm = {
    elements: {
      title: { value: 'Some' },
      description: { value: 'Some description' },
      dueDate: { value: '2020-12-12' },
    },
  };

  expect(validateForm).toBeDefined();
  expect(validateForm(form)).toBe(true);
  expect(validateForm(invalidForm)).toBe(false);
  expect(validateForm()).toBe(false);
});

it('should validate the create project form', () => {
  const form = {
    elements: {
      projectName: { value: 'Some projectName' },
    },
  };

  const invalidProject = {
    elements: {
      projectName: { value: 'Some' },
    },
  };

  expect(validateProject(form)).toBe(true);
  expect(validateProject(invalidProject)).not.toBe(true);
  expect(validateProject()).toBe(false);
});

test('create a todo item card', () => {
  expect(createTodoDOM).toBeDefined();
});

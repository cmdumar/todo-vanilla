import { validateForm } from '../modules/helpers';


it('Validate the create todo form', () => {
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
});

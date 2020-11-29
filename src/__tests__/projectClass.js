import Project from '../modules/projectClass';

test('Create a Project instance', () => {
  const today = new Project('Today');

  expect(new Project()).toBeDefined();
  expect(new Project('Today')).toStrictEqual(today);
});
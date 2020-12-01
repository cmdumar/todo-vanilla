import Project from '../modules/projectClass';
import createProject from '../modules/createProject';

jest.mock('../modules/projectClass.js');

beforeEach(() => {
  Project.mockClear();
});

it('Check if the createProject fn called the Project class', () => {
  const form = {
    elements: {
      projectName: { value: 'Some name' },
    },
  };

  createProject(form);
  expect(Project).toHaveBeenCalledTimes(1);
});

test('Throw error when no form is passed', () => {
  expect(() => createProject()).toThrow();
});
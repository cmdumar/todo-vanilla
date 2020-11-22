import Project from './projectClass';

const createProject = (form) => {
  const { projectName } = form.elements;
  const newProject = new Project(projectName.value);
  const project = newProject.name;
  localStorage.setItem(project, '[]');
};

export default createProject;
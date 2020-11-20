import Project from './projectClass';

export default function createProject(form) {
  const { projectName } = form.elements;
  const newProject = new Project(projectName.value);
  const project = newProject.name;
  localStorage.setItem(project, '[]');
}
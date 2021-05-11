function createApp() {
  let projects = [];

  const addProject = (project) => {
    projects.push(project);
  };

  const getProjects = () => projects;

  const setProjects = (newProjects) => {
    projects = newProjects;
  };

  const getProjectByTitle = (projectTitle) => {
    let thisProject;
    projects.forEach((project) => {
      if (project.getTitle() === projectTitle) {
        thisProject = project;
      }
    });
    return thisProject;
  };

  return {
    addProject, getProjects, getProjectByTitle, setProjects,
  };
}
const myProjects = JSON.parse(localStorage.getItem('projects'));

const app = createApp();
if (myProjects !== null) app.setProjects(myProjects);

export default app;

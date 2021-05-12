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

  const removeProjectByTitle = (projectTitle) => {
    projects.forEach((project, index) => {
      if (project.getTitle() === projectTitle) {
        projects.splice(index, 1);
      }
    });
  };

  return {
    addProject,
    getProjects,
    getProjectByTitle,
    setProjects,
    removeProjectByTitle,
  };
}

const app = createApp();

module.exports = app;
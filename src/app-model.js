function createApp() {
  const projects = [];

  const addProject = (project) => {
    projects.push(project);
  };

  const getProjects = () => projects;

  const getProjectByTitle = (projectTitle) => {
    let thisProject;
    projects.forEach((project) => {
      if (project.getTitle() === projectTitle) {
        thisProject = project;
      }
    });
    return thisProject;
  };

  return { addProject, getProjects, getProjectByTitle };
}

const app = createApp();

export default app;

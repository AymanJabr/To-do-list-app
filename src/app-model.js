function createApp() {
  let projects = [];

  const addProject = (project) => {
    projects.push(project);
  };

  const getProjects = () => {
    return projects;
  };

  const getProjectByTitle = (projectTitle) => {
    let thisProject
    projects.forEach((project) => {
      if (project.getTitle() == projectTitle) {
        thisProject = project}
    })
    return thisProject
  }

  return { addProject, getProjects, getProjectByTitle };
}

var app = createApp();

export default app;

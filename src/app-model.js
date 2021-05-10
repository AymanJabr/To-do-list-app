function createApp() {
  let projects = [];

  const addProject = (project) => {
    projects.push(project);
  };

  const getProjects = () => {
    return projects;
  };

  return { addProject, getProjects };
}

var app = createApp();

export default createApp;
export { app };

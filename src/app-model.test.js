const app = require('./app-model')
const createProject = require('./project-model')


let newProject = createProject("New Project Title");

test("Project Is correctly added to the app", () => {
    app.addProject(newProject)
    expect(app.getProjects()).toStrictEqual([newProject]);
});
test("Get project by title correctly", () => {
    expect(app.getProjectByTitle("New Project Title")).toStrictEqual(newProject);
});

test("Projects array are correctly changed", () => {
    let otherNewProject = createProject("Other Project Title")
    app.setProjects([otherNewProject])
    expect(app.getProjects()).toStrictEqual([otherNewProject]);
});

test("Project is correctly removed from Projects array", () => {
    app.removeProjectByTitle("Other Project Title")
    expect(app.getProjects()).toStrictEqual([]);
});
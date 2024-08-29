//buttons.js

import { Project, Todo } from "./objects.js";
import { display, projects, currentProject, clearForms } from "./index.js";

// adds functionality to buttons
export function setUpButtons() {
    const newProjectButton = document.querySelector("button.new-project");
    newProjectButton.addEventListener("click", () => {
        display.displayNewProjectForm();
    });

    const newProjectSubmit = document.querySelector(".new-project .submit");
    newProjectSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        display.hideAllForms();
        const projectName = document.getElementById("project-name").value;
        const newProject = new Project(projectName);
        projects.push(newProject);
        display.displayProjects(projects);
        clearForms();
    });

    const newTodoButton = document.querySelector("button.new-todo");
    newTodoButton.addEventListener("click", () => {
        display.displayNewTodoForm();
    });

    const newTodoSubmit = document.querySelector(".new-todo .submit");
    newTodoSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        display.hideAllForms();
        const title = document.getElementById("title").value;
        const newTodo = new Todo(title, "", "", "");
        currentProject.addTodo(newTodo);
        display.displayTodos(currentProject);
        clearForms();
    });
}
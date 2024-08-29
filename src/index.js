// index.js

"use strict";

import "./styles.css";
import {Todo, Project} from "./classes.js";

const projects = []; // list of projects
const dialog = document.querySelector("dialog"); // dialog for submitting new project

// displays all projects on the sidebar
function displayProjects() {
    const projectList = document.querySelector(".project-list");
    projectList.textContent = "";
    for (const project of projects) {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-div");
        projectDiv.textContent = project.name;
        projectDiv.addEventListener("click", () => {
            // show the tasks for the project on the main
            alert(project.name);
        });
        projectList.appendChild(projectDiv);
    }
}

const newProjectButton = document.querySelector("button.new-project");
newProjectButton.addEventListener("click", () => {
    dialog.showModal();
});

const newProjectSubmit = document.querySelector(".new-project .submit");
newProjectSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
    const projectName = document.getElementById("project-name").value;
    const newProject = new Project(projectName);
    projects.push(newProject);
    displayProjects();
});

const today = new Project("Today");
projects.push(today);
displayProjects();


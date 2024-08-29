// index.js

"use strict";

import "./styles.css";
import {Display} from "./display.js";
import {Todo, Project} from "./objects.js";
import { setUpButtons } from "./buttons.js";

export const display = new Display();
export const projects = []; // list of projects
export let currentProject = null;

// given a project, sets currentProject to project and displays the todo's of that project
export function switchProject(project) {
    currentProject = project;
    display.displayTodos(project)
}

// clears all inputs of all forms
export function clearForms() {
    const inputs = document.querySelectorAll("input");
    for (const input of inputs) {
        input.value = "";
    }
}

setUpButtons();

currentProject = new Project("Today");
projects.push(currentProject);
const doLeetCode = new Todo("Do LeetCode", "", "", "");
currentProject.addTodo(doLeetCode);
display.displayProjects(projects);
switchProject(currentProject);
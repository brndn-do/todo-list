// index.js

"use strict";

import "./styles.css";
import { Display } from "./display.js";
import { Todo, Project } from "./objects.js";
import { setUpButtons } from "./buttons.js";
import { format, toDate } from "date-fns";

export const display = new Display();
export const projects = []; // list of projects
export let currentProject = null;
export let currentTodo = null;

// given a project, sets it as the currentProject and displays the todo's of that project
export function switchProject(project) {
    currentProject = project;
    display.displayTodos()
}

export function switchTodo(todo) {
    currentTodo = todo;
}

// clears all inputs of all forms
export function clearForms() {
    const inputs = document.querySelectorAll("input");
    for (const input of inputs) {
        input.value = "";
    }
}

// adds functionality to buttons
setUpButtons();

currentProject = new Project("Today");
projects.push(currentProject);
const task = new Todo("Finish todo list", "", format(toDate("8/31/2024"), "MMM dd"), "");
currentProject.addTodo(task);
display.displayProjects();
switchProject(currentProject);
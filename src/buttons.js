// buttons.js
// Responsible for setting up buttons related to forms by adding event listeners

import { Project, Todo } from "./objects.js";
import { display, projects, currentProject, currentTodo, clearForms } from "./index.js";
import { format, toDate } from "date-fns";

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
        const title = document.querySelector(".new-todo #title").value;
        const description = document.querySelector(".new-todo #description").value;
        let dueDate = document.querySelector(".new-todo #due-date").value;
        dueDate = format(toDate(dueDate), 'MMM dd');
        const priority = document.querySelector(".new-todo #priority").value;
        const newTodo = new Todo(title, description, dueDate, priority);
        currentProject.addTodo(newTodo);
        display.displayTodos(currentProject);
        clearForms();
    });

    const todoDetailsSubmit = document.querySelector(".todo-details .submit");
    todoDetailsSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        display.hideAllForms();
        currentTodo.title = document.querySelector(".todo-details #title").value;
        currentTodo.description = document.querySelector(".todo-details #description").value;
        const dueDate = document.querySelector(".todo-details #due-date").value;
        currentTodo.dueDate = format(toDate(dueDate), 'MMM dd');
        currentTodo.priority = document.querySelector(".todo-details #priority").value;
        display.displayTodos(currentProject);
        clearForms();
    });

    const todoDetailsComplete = document.querySelector(".todo-details .complete");
    todoDetailsComplete.addEventListener("click", (event) => {
        event.preventDefault();
        display.hideAllForms();
        currentTodo.changeComplete();
        display.displayTodos(currentProject);
        clearForms();
    });

    const todoDetailsDelete = document.querySelector(".todo-details .delete");
    todoDetailsDelete.addEventListener("click", (event) => {
        event.preventDefault();
        display.hideAllForms();
        currentTodo.delete();
        display.displayTodos(currentProject);
        clearForms();
    });
}
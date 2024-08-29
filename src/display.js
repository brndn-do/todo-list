// display.js

import { projects, currentProject, switchProject } from "./index.js"

export class Display {
    // given a project, displays all todos of that project on the main container
    displayTodos() {
        const projectName = document.querySelector(".project-name");
        projectName.textContent = currentProject.name;
        const todoList = document.querySelector(".todo-list");
        todoList.textContent = "";
        for (const todo of currentProject.todos) {
            if (todo.deleted) {
                continue;
            }
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo-div");
            todoDiv.textContent = todo.title;

            todoList.appendChild(todoDiv);
        }
    }

    // given an array projects, displays all projects on the sidebar
    displayProjects() {
        const projectList = document.querySelector(".project-list");
        projectList.textContent = "";
        for (const project of projects) {
            if (project.deleted) {
                continue;
            }
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("project-div");
            projectDiv.textContent = project.name;
            projectDiv.addEventListener("click", () => {
                switchProject(project);
            });
            projectList.appendChild(projectDiv);
        }
    }

    // displays the form to create a new project
    displayNewProjectForm() {
        const dialog = document.querySelector("dialog.new-project");
        dialog.showModal();
    }

    // displays the form to create a new todo item
    displayNewTodoForm() {
        const dialog = document.querySelector("dialog.new-todo");
        dialog.showModal();
    }

    // hides all forms
    hideAllForms() {
        const dialogs = document.querySelectorAll("dialog");
        dialogs.forEach((dialog) => {
            dialog.close();
        });
    }
}
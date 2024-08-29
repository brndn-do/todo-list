// display.js

import {switchProject} from "./index.js"

export class Display {
    // given a project, displays all todos of that project on the main container
    displayTodos(project) {
        const todoList = document.querySelector(".todo-list");
        todoList.textContent = "";
        for (const todo of project.todos) {
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
    displayProjects(projects) {
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

    displayNewProjectForm() {
        const dialog = document.querySelector("dialog.new-project");
        dialog.showModal();
    }

    displayNewTodoForm() {
        const dialog = document.querySelector("dialog.new-todo");
        dialog.showModal();
    }

    hideAllForms() {
        const dialogs = document.querySelectorAll("dialog");
        dialogs.forEach((dialog) => {
            dialog.close();
        });
    }
}
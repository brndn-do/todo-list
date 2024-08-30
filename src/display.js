// display.js

import { projects, currentProject, currentTodo, switchProject, switchTodo } from "./index.js"

export class Display {
    expandTodo(todo) {
        switchTodo(todo);
        const title = document.querySelector(".todo-details #title");
        const description = document.querySelector(".todo-details #description");
        const dueDate = document.querySelector(".todo-details #due-date");
        const priority = document.querySelector(".todo-details #priority");
        const complete = document.querySelector(".todo-details .complete");
        title.value = todo.title;
        description.value = todo.description;
        dueDate.value = todo.dueDate;
        priority.value = todo.priority;
        if (currentTodo.complete) {
            complete.textContent = "Mark Incomplete";
        }
        else {
            complete.textContent = "Mark Complete";
        }
        const dialog = document.querySelector(".todo-details");
        dialog.showModal();
    }

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
            if (todo.complete) {
                todoDiv.classList.add("complete");
            }
            const todoTitle = document.createElement("div");
            todoTitle.classList.add("todo-title");
            todoTitle.textContent = todo.title;
            const todoDue = document.createElement("div");
            todoDue.classList.add("todo-due");
            todoDue.textContent = todo.dueDate;
            todoDiv.appendChild(todoTitle);
            todoDiv.appendChild(todoDue);
            todoDiv.addEventListener("click", () => {
                this.expandTodo(todo);
            });
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
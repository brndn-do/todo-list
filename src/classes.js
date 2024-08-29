// classes.js

export class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
        this.deleted = false;
    }

    changeComplete() {
        this.complete = !this.complete;
    }

    delete() {
        this.delete = true;
    }
}

export class Project {
    #todos
    #size
    constructor(name) {
        this.name = name;
        this.#todos = [];
        this.#size = 0;
    }

    addTodo(todo) {
        this.#todos.push(todo);
        this.#size++;
    }

    get todos() {
        return this.#todos;
    }

    get size() {
        return this.#size;
    }
}
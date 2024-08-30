// objects.js
// Todo and Project objects

export class Todo {
    #deleted
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
        this.#deleted = false;
    }

    changeComplete() {
        this.complete = !this.complete;
    }

    delete() {
        this.#deleted = true;
    }

    get deleted() {
        return this.#deleted;
    }
}

export class Project {
    #todos
    #size
    #deleted
    constructor(name) {
        this.name = name;
        this.#todos = [];
        this.#size = 0;
        this.#deleted = false;
    }

    addTodo(todo) {
        this.#todos.push(todo);
        this.#size++;
    }

    removeTodo(todo) {
        todo.delete();
        this.#size--;
    }

    delete() {
        this.#deleted = true;
    }

    get deleted() {
        return this.#deleted;
    }

    get todos() {
        return this.#todos;
    }

    get size() {
        return this.#size;
    }
}
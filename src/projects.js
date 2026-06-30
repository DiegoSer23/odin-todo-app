class Project {
    constructor(name, todos) {
        this.name = name;
        this.todos = todos;
    }

    AddToDo(todo) {
        this.todos.push(todo);
    }
}

export { Project }
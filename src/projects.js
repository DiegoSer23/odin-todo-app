import { Todo } from "./todos";

class Project {
    constructor(name, todos) {
        this.name = name;
        this.todos = todos;
    }

    AddToDo(todo) {
        this.todos.push(todo);
    }
}

document.getElementById("add-project-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newTodo = new Todo()
    const newProject = new Project(formData.get("project-name"));
});

export { Project }
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
    const todoName = formData.get("todo-name");
    const todoDescription = formData.get("todo-description");
    const todoDate = formData.get("todo-duedate");
    const todoPriority = formData.get("todo-priority");
    const newTodo = new Todo(todoName, todoDescription, todoDate, todoPriority, false);
    const projectName = formData.get("project-name");
    const newProject = new Project(projectName, newTodo);
    const projectId = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem(`project-${projectId}`, JSON.stringify(newProject));
    //Show message and close form DOM
});

document.getElementById("CurrentProjectsBtn").addEventListener("click", function(event) {
    const keys = Object.keys(localStorage);
    for (const key of keys) {
        const project = localStorage.getItem(key);
        //display projects elements
    }
});

document.getElementById("btn-add-todo-project").addEventListener("click", function(event) {
    const parentProject = event.currentTarget.parentElement;
    const parentID = parentProject.id;
    const project = JSON.parse(localStorage.getItem(parentID));
    //refresh DOM elements add todo
});

document.getElementById

export { Project }
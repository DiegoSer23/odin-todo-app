import { Todo } from "./todos.js";

class Project {
    constructor(name, todos) {
        this.name = name;
        this.todos = todos;
    }

    AddToDo(todo) {
        this.todos.push(todo);
    }

    DeleteToDo(todoId) {
        const newTodos = this.todos.filter(item => item.id !== todoId);
        this.todos = newTodos;
    }
}

function addNewProject(submittedForm) {
    const formData = new FormData(submittedForm);
    const todoName = formData.get("todo-name");
    const todoDescription = formData.get("todo-description");
    const todoDate = formData.get("todo-duedate");
    const todoPriority = formData.get("todo-priority");
    const newTodo = new Todo(todoName, todoDescription, todoDate, todoPriority, false);
    const projectName = formData.get("project-name");
    const newProject = new Project(projectName, newTodo);
    const projectId = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem(`project-${projectId}`, JSON.stringify(newProject));
}

function displayProjects() {
    const keys = Object.keys(localStorage);
    for (const key of keys) {
        const project = localStorage.getItem(key);
        //display projects elements
    }
}

function addTodoProject(parentProject, projectId, todoForm) {
    const formData = new FormData(todoForm);
    const todoName = formData.get("todo-name");
    const todoDescription = formData.get("todo-description");
    const todoDate = formData.get("todo-duedate");
    const todoPriority = formData.get("todo-priority");
    const newTodo = new Todo(todoName, todoDescription, todoDate, todoPriority, false);
    parentProject.AddToDo(newTodo); 
    localStorage.setItem(projectId, JSON.stringify(parentProject));
}

function deleteTodoProject(parentProject, projectId, todoId) {
    parentProject.DeleteToDo(todoId);
    localStorage.setItem(projectId, JSON.stringify(parentProject));
}

export { Project, addNewProject, displayProjects, addTodoProject, deleteTodoProject }
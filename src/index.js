import { Project, addNewProject, displayProjects, addTodoProject, deleteTodoProject } from "./projects.js"
import './styles.css';

document.getElementById("add-project-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addNewProject(event.target);
    alert("Project added succesfully!");
});

document.getElementById("CurrentProjectsBtn").addEventListener("click", function(event) {
    displayProjects();
});

document.getElementById("btn-add-todo-project").addEventListener("click", function(event) {
    //show hidden todo form
});

document.getElementById("add-project-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const parentProject = event.currentTarget.parentElement;
    const parentID = parentProject.id;
    const project = JSON.parse(localStorage.getItem(parentID));
    addTodoProject(project, parentID, event.target);
    //refresh projects DOM
});

document.getElementById("delete-todo").addEventListener("submit", function(event) {
    deleteTodoProject();
});
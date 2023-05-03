// import modules
import { setDisplayTitle } from './modules/setDisplayTitle'
import { createBlankTask } from './modules/createBlankTask';
import { Project } from './modules/createProject';
import { Task } from './modules/createTask'

// import handlers for style sheets and images
import './style.css';

// create an array to handle all of the projects, each project will have properties
// for task name, description, associated project, project due date and priority
const projectArray = [];

// create a function to change the project display area title to either inbox, 
// today's tasks or this week's task
setDisplayTitle();

// select the task display area to append new tasks created 
const projectList = document.querySelector('#project-list');

// create a blank task and append it to the selected projectList
const newBlankTask = createBlankTask()
projectList.appendChild(newBlankTask);

const newProj =  new Project();
console.log(newProj.pname);

// create a new task and append it to the projectArray
// new Task(project, desc, dueDate, priority)
const newTask = new Task('inbox','clean outside cage','5-30-2023', 'high');
console.log(newTask.desc);

projectArray.push(newTask)
console.log(projectArray[0].project);

const newProjBtn = document.querySelector('#add-project-icon');

// newProjBtn.onclick = function() {alert('Add a project')};

newProjBtn.onclick = function (){
    const projToAdd = document.querySelector('#new-project-input');
    if(projToAdd.value === ''){
        alert("Add new project in field then click the + button again");
    } else{
        let newProjectName = projToAdd.value
        console.log(newProjectName)
    }
}

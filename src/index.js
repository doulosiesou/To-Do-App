// import modules
import { setDisplayTitle } from './modules/setDisplayTitle'
import { createBlankTask } from './modules/createBlankTask';
import { Task } from './modules/createTask'
import { createProjectList } from './modules/createProjectList';
import { assignDelBtns } from './modules/deleteBtns';


// import webpack handlers for style sheets and images
import './style.css';


// create an array to handle all of the projects, each project will have properties
// for task name, description, associated project, project due date and priority
var projectArray = [];
localStorage.projectArray = projectArray;

// create an array to handle tasks the associated project will be a field/property 
// of a task
const taskArray = [];

// declare a global variable for newProjectName
var newProjectName = '';

// create a function to change the project display area title to either inbox, 
// today's tasks or this week's task
setDisplayTitle();

// select the task display area to append new tasks created 
const taskList = document.querySelector('#task-list');

// create a blank task and append it to the selected projectList
const newBlankTask = createBlankTask()
taskList.appendChild(newBlankTask);

// create a new task and append it to the taskArray
// new Task(project, desc, dueDate, priority)
let newTask = new Task('inbox','clean outside cage','5-30-2023', 'high');
console.log(`The newTask.desc value is ${newTask.desc}`);

taskArray.push(newTask)
console.log(`The new tasks project is ${taskArray[0].project}`);

const newProjBtn = document.querySelector('#add-project-icon');
const projToAdd = document.querySelector('#new-project-input');
var projectList = document.querySelector('#project-list');

newProjBtn.onclick = function(){

    let pTemp = localStorage.getItem("projectArray").split(',');
    projectArray = pTemp;
    localStorage.clear();
    console.log(`localStorage.projectArray is ${localStorage.projectArray}`);

    if (projToAdd.value === ''){
        alert("Add new project in field then click the + button again");
    } else{
        newProjectName = projToAdd.value
    }

    projectArray.push(newProjectName);
    
    localStorage.projectArray = projectArray;
        
    projectList.innerHTML = '';
    let projListText 
    projListText = createProjectList();
    projectList.appendChild(projListText);

    let deleteButtons = document.getElementsByClassName('proj-del-button')
    assignDelBtns(deleteButtons, projectArray, projectList, projListText);
};







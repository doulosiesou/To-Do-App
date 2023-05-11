// import modules
import { setDisplayTitle } from './modules/setDisplayTitle'
import { createBlankTask } from './modules/createBlankTask';
import { Task } from './modules/createTask'
import { createProjectList } from './modules/createProjectList';
import { assignDelProjBtns } from './modules/deleteBtns';
import { populateTaskList } from './modules/populateTaskList';

// import webpack handlers for style sheets and images
import './style.css';

// create an array to handle all of the projects, each project will have properties
// for task name, description, associated project, project due date and priority
var projectArray = [];
localStorage.projectArray = projectArray;

// create an array to handle tasks the associated project will be a field/property 
// of a task
var taskArray = [];

// declare a global variable for newProjectName
var newProjectName = '';

// create a function to change the project display area title to either inbox, 
// today's tasks or this week's task
setDisplayTitle();

// select the task display area to append new tasks created 
const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('#task-list');

// create a blank task and append it to the selected projectList
const newBlankTask = createBlankTask()
taskForm.appendChild(newBlankTask);

// create some new tasks and push them to the taskArray
// new Task(project, desc, dueDate, priority)
let newTask1 = new Task('Home Cleaning','Clean outside cage','5-20-2023', 'high');
let newTask2 = new Task('Home Cleaning', 'Clean inside cage', '5-23-2023', 'high');
let newTask3 = new Task('Home Cleaning', 'Clean refrigerator', '6-05-2023', 'low');
let newTask4 = new Task('Yard Work','Mow grass', '06-15-2023', 'low');
let newTask5 = new Task('Yard Work', 'Rake leaves', '06-16-2023', 'low');
let newTask6 = new Task('Yard Work', 'Trim bushes', '06-20-2023', 'low');

taskArray.push(newTask1);
taskArray.push(newTask2);
taskArray.push(newTask3);
taskArray.push(newTask4);
taskArray.push(newTask5);
taskArray.push(newTask6);

// Create a function to add a new project
const newProjBtn = document.querySelector('#add-project-icon');
const projToAdd = document.querySelector('#new-project-input');
var projectList = document.querySelector('#project-list');

newProjBtn.onclick = function(){

    let pTemp = localStorage.getItem("projectArray").split(',');
    projectArray = pTemp;
    localStorage.clear();
    
    if (projToAdd.value === ''){
        alert("Add new project in field then click the + button again");
    } else{
        newProjectName = projToAdd.value
    }

    projectArray.push(newProjectName);
    localStorage.projectArray = projectArray;
        
    projectList.innerHTML = '';
    let projListText 
    projListText = createProjectList(taskArray);
    projectList.appendChild(projListText);
     
    let deleteButtons = document.getElementsByClassName('proj-del-button')
    assignDelProjBtns(deleteButtons, projectArray, projectList, projListText);
};

// Create a new function to add tasks to a project
const addTaskBtn = document.getElementById('add-task-icon');

addTaskBtn.onclick = function() {

    for(let task of taskArray) {
        console.log(`task in ${task.project} is ${task.desc}`);
    };
    
    let taskProj = document.getElementById('task-project');
    console.log(`In addTaskBtn, taskProj is ${taskProj.value}`);
    let taskDesc = document.getElementById('task-desc');
    let taskDueDate = document.getElementById('task-dueDate');
    let taskPriority = document.getElementById('task-priority');

    let pname = taskProj.value;
    let newTask = new Task(taskProj.value, taskDesc.value, taskDueDate.value, taskPriority.value)
    console.log(`newTask is ${newTask}`);
    console.log(`taskArray is type ${typeof(taskArray)}`);

    taskArray.push(newTask);
    populateTaskList(taskArray, pname);

    let taskDeleteButtons = document.querySelector('.task-delete-button')

};











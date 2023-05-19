// import modules
import { setDisplayTitle } from './modules/setDisplayTitle'
import { createTaskForm } from './modules/createTaskForm';
import { Task } from './modules/createTask'
import { initializeProjectList } from './modules/initializeProjectList';
import { createProjectList } from './modules/createProjectList';
import { projDelBtn } from './modules/deleteBtns';
import { populateTaskList } from './modules/populateTaskList';

// import webpack handlers for style sheets and images
import './style.css';

// create an array to handle all of the projects, each project will have properties
// for task name, description, associated project, project due date and priority
var projectArray = [];

// declare a global variable for newProjectName
var newProjectName = '';

// create a function to change the project display area title to either inbox, 
// today's tasks or this week's task
setDisplayTitle();

// select the task display area to append new tasks created 
const taskForm = document.querySelector('#task-form');

// create a blank task and append it to the selected projectList
const newBlankTask = createTaskForm()
taskForm.appendChild(newBlankTask);

// create some new tasks for a sample project House Cleaning
// new Task(project, desc, dueDate, priority, taskArray)
let project1 = 'House Cleaning';
let newTask1 = new Task('House Cleaning','Clean outside cage','5-20-2023', 'high');
let newTask2 = new Task('House Cleaning', 'Clean inside cage', '5-23-2023', 'high');
let newTask3 = new Task('House Cleaning', 'Clean refrigerator', '6-05-2023', 'low');

const tasksP1 = [newTask1, newTask2, newTask3];
projectArray.push(project1);

// create some more tasks for another sample project Yard Work
let project2 = 'Yard Work';
let newTask4 = new Task('Yard Work','Mow grass', '06-15-2023', 'low');
let newTask5 = new Task('Yard Work', 'Rake leaves', '06-16-2023', 'low');
let newTask6 = new Task('Yard Work', 'Trim bushes', '06-20-2023', 'low');

const tasksP2 = [newTask4, newTask5, newTask6];
projectArray.push(project2);

// Create localStorage keys and values for new tasks
localStorage.setItem("House Cleaning", JSON.stringify(tasksP1));
localStorage.setItem("Yard Work", JSON.stringify(tasksP2));

// Create another localStorage key and save projectArray to localStorage
localStorage.setItem(`projects`, JSON.stringify(projectArray));

// Create a function to add a new project
var projectList = document.querySelector('#project-list');
const newProjBtn = document.querySelector('#add-project-icon');
var projToAdd = document.querySelector('#new-project-input');

//Populate project list with the 2 above created projects
let newProjectDiv = initializeProjectList();
projectList.appendChild(newProjectDiv);

newProjBtn.onclick = function(){

    let projectArray = JSON.parse(localStorage.getItem('projects'));
    console.log(`In newProjBtn and projectArray is ${projectArray}`);
            
    if (projToAdd.value === ''){
        alert("Add new project in field then click the + button again");
    } else{
        newProjectName = projToAdd.value
    }

    projectArray.push(newProjectName);
    localStorage.removeItem('projects');
    localStorage.setItem('projects', JSON.stringify(projectArray));    
    projectList.innerHTML = '';
    let projListText = createProjectList();
    projectList.appendChild(projListText);
};

// Create a new function to add tasks to a project
const addTaskBtn = document.getElementById('add-task-icon');

addTaskBtn.onclick = function() {

    // Select fields in task creation form

    let taskProj = document.getElementById('task-project');
    let taskDesc = document.getElementById('task-desc');
    let taskDueDate = document.getElementById('task-dueDate');
    let taskPriority = document.getElementById('task-priority');

    // Create a new task based on form values and push to taskArray
    let pname = taskProj.value;
    let taskArray = JSON.parse(localStorage.getItem(pname));
    let newTask = new Task(taskProj.value, taskDesc.value, taskDueDate.value, taskPriority.value, taskArray)
   
    taskArray.push(newTask);
    localStorage.removeItem(pname);
    localStorage.setItem(pname, JSON.stringify(taskArray));

    // Call function populateTaskList for selected project
    var taskTableBody = document.getElementById('task-table-body');
    let taskRow = populateTaskList(pname);
    taskTableBody.insertRow(taskRow);
};




// Create a function to refresh the task table
// const refreshButton = document.querySelector('#refresh-button');

// refreshButton.onclick = function(){
//     // alert('You clicked the refresh button');
//     var taskTableBody = document.getElementById('task-table-body');
//     let taskTableRows = document.querySelectorAll('.task-row');
//     let taskProj = document.getElementById('task-project');
//     let pname = taskProj.value;
//     if(taskTableRows) {
//         for(let task of taskTableRows){
//             taskTableBody.removeChild(task);
//         };

//     populateTaskList(taskArray, pname);
//     };
// };
















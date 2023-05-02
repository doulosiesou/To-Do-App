// import modules
import { setDisplayTitle } from './modules/setDisplayTitle'
import { createBlankTask } from './modules/createBlankTask';
import { Project } from './modules/createProject';
import { createTask } from './modules/createTask'

// import handlers for style sheets and images
import './style.css';

// create an array to handle all of the projects, each project will have properties
// for task name, description, associated project, project due date and priority
const projectArray = [];
console.log(typeof(projectArray));

// create a function to change the project display area title to either inbox, 
// today's tasks or this week's task
setDisplayTitle();

// select the task display area to append new tasks created 
const projectList = document.querySelector('#project-list');

// create a new task and append it to the selected projectList
const newBlankTask = createBlankTask()
projectList.appendChild(newBlankTask);

const newProj =  new Project();
console.log(newProj.pname);

const newTask = new createTask('Cages', 'clean outside cage', 'cages', '5-30-2023', 'high');
console.log(newTask.desc);


// import modules
import { setDisplayTitle } from "./modules/setDisplayTitle";
import { createTaskForm } from "./modules/createTaskForm";
import { Task } from "./modules/createTask";
import { initializeProjectList } from "./modules/initializeProjectList";
import { createProjectList } from "./modules/createProjectList";
import { populateTaskList } from "./modules/populateTaskList";
import { populateInboxTasks } from "./modules/populateInboxTasks";
import { checkLSTasks } from "./modules/checkLSTasks";
import { upcomingTasks } from "./modules/todaysTasks";

// import webpack handlers for style sheets and images
import "./style.css";

const todaysDate = new Date();
console.log(todaysDate);

// declare projectArray and taskArray then check local storage to load up projects and task array
// projects are stored as strings in key 'projects'
// tasks are stored as objects JSON.parse is necessary to read tasks from localStorage
checkLSTasks();

var projectArray = [];

// declare a global variable for newProjectName
var newProjectName = "";

// create a function to change the project display area title to either inbox,
// today's tasks or this week's task
setDisplayTitle("Projects");

// select the task display area to append the tasks form
const taskFormContainer = document.querySelector("#task-form-container");

// create task form and append it to the selected projectList
const taskForm = createTaskForm();
taskFormContainer.appendChild(taskForm);

// Create a function to add a new project
var projectList = document.querySelector("#project-list");
const newProjBtn = document.querySelector("#add-project-icon");
var projToAdd = document.querySelector("#new-project-input");

//Populate project list with the 2 above created projects
let newProjectDiv = initializeProjectList();
projectList.appendChild(newProjectDiv);

newProjBtn.onclick = function () {

  // Get localStorage array of projects
  let projectArray = JSON.parse(localStorage.getItem("projects"));
  console.log(`In newProjBtn line 54 and projectArray is ${projectArray}`);

  // Check to see if user input new project name
  if (projToAdd.value === "") {
    alert("Add new project in field then click the + button again");
  } else {
    newProjectName = projToAdd.value;
    console.log(
      `In newProjBtn line 62 and the new project to add is ${newProjectName}`
  );

    // Push new project into projectArray, then remove the old projects from localStorage
    // and set the new projects array 
    projectArray.push(newProjectName);
    console.log(`In newProjBtn line 68 and projectArray is ${projectArray}`);
    localStorage.removeItem("projects");
    localStorage.setItem("projects", JSON.stringify(projectArray));

    // Clear out the old project list and render the new project array
    projectList.innerHTML = "";
    let projListText = createProjectList();
    projectList.appendChild(projListText);
  }
};

// Create a new function to add tasks to a project
const addTaskBtn = document.getElementById("add-task-icon");

addTaskBtn.onclick = function () {
  // Select fields in task creation form

  let taskProj = document.getElementById("task-project");
  let taskDesc = document.getElementById("task-desc");
  let taskDueDate = document.getElementById("task-dueDate");
  let taskPriority = document.getElementById("task-priority");

  // Create a new task based on form values and push to taskArray
  let pname = taskProj.value;
  let taskArray = JSON.parse(localStorage.getItem(pname));

  if (taskArray === null) {
    let newTask = new Task(
      pname,
      taskDesc.value,
      taskDueDate.value,
      taskPriority.value,
      "in-progress"
    );
    taskArray = [newTask];
    let taskProj = document.getElementById("task-project");
    taskProj.value = pname;
    localStorage.setItem(pname, JSON.stringify(taskArray));
  } else {
    let newTask = new Task(
      taskProj.value,
      taskDesc.value,
      taskDueDate.value,
      taskPriority.value,
      "in-progress"
    );
    taskArray.push(newTask);
    localStorage.removeItem(pname);
    localStorage.setItem(pname, JSON.stringify(taskArray));
  }
  // Call function populateTaskList for selected project

  let taskTable = populateTaskList(pname);
  let display = document.getElementById("display");
  display.appendChild(taskTable);
};

// Create a function to refresh the task table
const refreshButton = document.querySelector("#refresh-icon");
refreshButton.addEventListener("click", function () {
  // alert('You clicked the refresh button');
  let displayTitle = document.getElementById("display-title");
  let currentProject = displayTitle.textContent;
  let display = document.getElementById("display");
  let taskTableContainer = document.getElementById("task-table-container");
  taskTableContainer.innerHTML = "";
  let refreshList = populateTaskList(currentProject);
  display.appendChild(refreshList);
});

// Create a new function to populate the inbox tasks table
const inboxIconDiv = document.getElementById("inbox-icon-div");
inboxIconDiv.addEventListener("click", function(){
  let displayTitle = document.getElementById("display-title");
  displayTitle.textContent = "Inbox"
  populateInboxTasks('Inbox');
  // Create a new function to populate the inbox tasks table with tasks due today
})

// Create a new function to populate the task list with tasks due today.
const todayIconDiv = document.getElementById('today-icon-div');
todayIconDiv.addEventListener("click", function() {
  let displayTitle = document.getElementById("display-title");
  displayTitle.textContent = "Upcoming Tasks";
  upcomingTasks(todaysDate);
  
})



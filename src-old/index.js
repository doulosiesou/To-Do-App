// import modules
import { setDisplayTitle } from './modules/setDisplayTitle'
import { createTaskForm } from './modules/createTaskForm';
import { Task } from './modules/createTask'
import { initializeProjectList } from './modules/initializeProjectList';
import { createProjectList } from './modules/createProjectList';
import { populateTaskList } from './modules/populateTaskList';
import { format, compareAsc } from 'date-fns';

const date = new Date();
console.log(date);

// import webpack handlers for style sheets and images
import './style.css';

// declare projectArray and taskArray then check local storage to load up projects and task array
// projects are stored as strings in key 'projects'
// tasks are stored as objects JSON.parse is necessary to read tasks from localStorage

var taskArray = [];
var projectArray = [];

var checkLSTasks = function(projectArray){
    let checkProjectArray = JSON.parse(localStorage.getItem('projects'))
    // console.log(`Index line 21 checkLSTasks and checkProjectArray is ${checkProjectArray}`);

    if(checkProjectArray){
        projectArray = checkProjectArray
        // console.log(`projectArray from localStorage exists and is ${projectArray}`);
    } else{
        // console.log(`projectArray from localStorage does not exist and will be created `);
        let project1 = 'House Cleaning';
        let project2 = 'Yard Work';
        projectArray = [project1, project2];
        localStorage.setItem(`projects`, JSON.stringify(projectArray));
    };
    // console.log(`in index.js line 56 in checkLSTasks and projectArray is ${projectArray}`);

    for(let project of projectArray){
        // console.log(`inside checkLSTasks line 59 and checkLSTasks project is ${project}`);
        let checkTaskArray = JSON.parse(localStorage.getItem(project));
        // console.log(`checkTaskArray line 61 checkTaskArray is ${checkTaskArray}`);
        
        if(checkTaskArray){
            // console.log(`checkTaskArray line 64 and checkTaskArray[0] is ${checkTaskArray[0]}`);
            taskArray = checkTaskArray;
            console.log(`inside checkLSTasks lin 66 and now taskArray is ${taskArray}`);
            return taskArray
        } else{
            let newTask1 = new Task('House Cleaning','Clean outside cage','5-20-2023', 'high', 'in-progress');
            let newTask2 = new Task('House Cleaning', 'Clean inside cage', '5-23-2023', 'high', 'in-progress');
            let newTask3 = new Task('House Cleaning', 'Clean refrigerator', '6-05-2023', 'low', 'in-progress');
            let newTask4 = new Task('Yard Work','Mow grass', '06-15-2023', 'low', 'in-progress');
            let newTask5 = new Task('Yard Work', 'Rake leaves', '06-16-2023', 'low', 'in-progress');
            let newTask6 = new Task('Yard Work', 'Trim bushes', '06-20-2023', 'low', 'in-progress');
            let tasksP1 = [newTask1, newTask2, newTask3];
            let tasksP2 = [newTask4, newTask5, newTask6];
            localStorage.setItem("House Cleaning", JSON.stringify(tasksP1));
            localStorage.setItem("Yard Work", JSON.stringify(tasksP2));
            taskArray = [tasksP1, tasksP2];
            console.log(`inside checkLSTasks and taskArray is ${taskArray}`);
            return taskArray;
        }
    };
};
checkLSTasks();


// declare a global variable for newProjectName
var newProjectName = '';

// create a function to change the project display area title to either inbox, 
// today's tasks or this week's task
setDisplayTitle('Projects');

// select the task display area to append the tasks form 
const taskFormContainer = document.querySelector('#task-form-container');

// create task form and append it to the selected projectList
const taskForm = createTaskForm()
taskFormContainer.appendChild(taskForm);

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
        console.log(`In newProjBtn line 74 and the new project to add is ${newProjectName}`);
        projectArray.push(newProjectName);
        console.log(`In newProjBtn line 76 and projectArray is ${projectArray}`)
        localStorage.removeItem('projects');
        localStorage.setItem('projects', JSON.stringify(projectArray));    
        projectList.innerHTML = '';
        let projListText = createProjectList();
        projectList.appendChild(projListText);
    };
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
        
    if(taskArray === null){
        let newTask = new Task(pname,taskDesc.value, taskDueDate.value, taskPriority.value, 'in-progress');
        taskArray = [newTask];
        let taskProj = document.getElementById('task-project');
        taskProj.value = pname;
        localStorage.setItem(pname, JSON.stringify(taskArray));
    } else {
        let newTask = new Task(taskProj.value, taskDesc.value, taskDueDate.value, taskPriority.value, 'in-progress');
        taskArray.push(newTask);
        localStorage.removeItem(pname);
        localStorage.setItem(pname, JSON.stringify(taskArray));
    }
    // Call function populateTaskList for selected project
    
    let taskTable = populateTaskList(pname);
    let display = document.getElementById('display');
    display.appendChild(taskTable);
}


// Create a function to refresh the task table
const refreshButton = document.querySelector('#refresh-button');
refreshButton.addEventListener('click', function(){
    // alert('You clicked the refresh button');
    let displayTitle = document.getElementById('display-title');
    let currentProject = displayTitle.textContent;
    let display = document.getElementById('display');
    let taskTableContainer = document.getElementById('task-table-container')
    taskTableContainer.innerHTML = '';
    let refreshList = populateTaskList(currentProject);
    display.appendChild(refreshList);    
});
















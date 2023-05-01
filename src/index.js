// import modules
import {setDisplayTitle} from './modules/setDisplayTitle'
import {createBlankTask} from './modules/createBlankTask'

// import handlers for style sheets and images
import './style.css';

setDisplayTitle();

let projectList = document.querySelector('#project-list');
let blankTask = createBlankTask()

projectList.appendChild(blankTask);

// projectList.appendChild(createBlankTask);

// function Project(projName, ptype = 'inbox'){
//     this.name = projName
//     this.ptype = ptype

//     this.createTask = function(taskName, ptype) {
//         this.checkmark 
//         this.taskName = taskName
//         this.description 
//         this.project = projName
//         this.dueDate 
//         this.priority = 'low'
//         this.deleteCheck 
//     }
// }
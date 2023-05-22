import { Task } from "./createTask";

export function populateTaskList(pname){
    console.log(`Inside populateTaskList line2 and pname is ${pname} and is type${typeof(pname)}`);

    let taskTable = document.getElementById('task-table');
    let taskTableRows = document.getElementsByClassName('task-row');
    let taskTableBody = document.getElementById('task-table-body');
    let taskTableContainer = document.getElementById('task-table-container');
    taskTableContainer.innerHTML = '';

    let prjTaskArray =  JSON.parse(localStorage.getItem(pname));
                   
    // Clear input fields in task form and change display title in 
    // task area for current project
    let taskProj = document.getElementById('task-project');
    taskProj.value = pname;
    
    let taskDesc = document.getElementById('task-desc');
    taskDesc.value = '';
    
    let taskDueDate = document.getElementById('task-dueDate');
    taskDueDate.value = '';
    
    let taskPriority = document.getElementById('task-priority')
    taskPriority.value = '';
    
    // Create the task table and task table body to append rows from taskArray
    taskTable = document.createElement('table');
    taskTable.id = 'task-table';
    taskTableBody = document.createElement('tbody');
    taskTableBody.className = 'task-table-body'
    taskTableBody.id = 'task-table-body';

    for(let task of prjTaskArray){

        // console.log(`In populateTaskList Line 58 and task for project ${pname} is ${task.desc}`);
        let indx = prjTaskArray.indexOf(task);
        // console.log(`in populateTaskList on line 60 the index of the task to delete is ${indx}`);

        let taskRow = document.createElement('tr');
        taskRow.className = 'task-row'

        // create checkboxes
        let checkBox = document.createElement("INPUT"); 
        checkBox.setAttribute("type", "checkbox");
        checkBox.className = 'checkbox';
        checkBox.id = `cb${indx}`
        // checkBoxContainer.appendChild(checkBox);

        // create task rows and append each to taskTableBody
        let c0 = document.createElement("td");
        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");
        let c5 = document.createElement("td");

        c0.appendChild(checkBox);
        c1.innerText = pname;
        c2.innerText = task.desc;
        c3.innerText = task.dueDate;
        c4.innerText = task.priority;

        let btn = document.createElement('input');
        btn.type = 'button';
        btn.value = 'x'
        btn.id = `db${indx}`;
        btn.className = 'task-delete-button';
        btn.addEventListener("click", function(){
            let userInput = prompt(`Are you sure you want to delete this task: ${task.desc}? Answer y/n`);
            if(userInput.toLowerCase === 'n') {
                alert('You entered no to delete this task');
                } else {
                    indx = btn.id.split('-')[1];
                    prjTaskArray.splice(indx, 1);
                    localStorage.removeItem(pname);
                    localStorage.setItem(pname, JSON.stringify(prjTaskArray));
                };
            }
        )
        c5.appendChild(btn);

        taskRow.appendChild(c0);
        taskRow.appendChild(c1);
        taskRow.appendChild(c2);
        taskRow.appendChild(c3);
        taskRow.appendChild(c4);
        taskRow.appendChild(c5);
       
        taskTableBody.appendChild(taskRow);
                
    };

    taskTable.appendChild(taskTableBody);
    taskTableContainer.appendChild(taskTable);

    return taskTableContainer;
}




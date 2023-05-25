// import { Task } from "./createTask";

export function populateTaskList(pname){
    console.log(`Inside populateTaskList line4 and pname is ${pname} and is type${typeof(pname)}`);

    // let taskTable = document.getElementById('task-table');
    // let taskTableRows = document.getElementsByClassName('task-row');
    // let taskTableBody = document.getElementById('task-table-body');
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
    
    var taskTable = document.createElement('table');
    let tableHeader = document.createElement('thead');
    tableHeader.className = 'task-table-header';
    tableHeader.id = 'task-table-header';
    let taskTableBody = document.createElement('tbody');
    taskTableBody.className = 'task-table-body'
    taskTableBody.id = 'task-table-body';
    
    let thc0 = document.createElement('th');
    let thc1 = document.createElement('th');
    let thc2 = document.createElement('th');
    let thc3 = document.createElement('th');
    let thc4 = document.createElement('th')
    let thc5 = document.createElement('th');
    let thc6 = document.createElement('th');

    thc0.innerText = 'Complete?';
    thc1.innerText = 'Project';
    thc2.innerText = 'Description';
    thc3.innerText = 'Due Date';
    thc4.innerText = 'Priority';
    thc5.innerText = 'Complete Date'
    thc6.innerText = 'Delete?';

    tableHeader.appendChild(thc0);
    tableHeader.appendChild(thc1);
    tableHeader.appendChild(thc2);
    tableHeader.appendChild(thc3);
    tableHeader.appendChild(thc4);
    tableHeader.appendChild(thc5);
    tableHeader.appendChild(thc6);
    
    taskTable.appendChild(tableHeader);
    
    for(let task of prjTaskArray){

        console.log(`In populateTaskList Line 67 and task for project ${pname} and task.status is ${task.status}`);
        let indx = prjTaskArray.indexOf(task);
        // console.log(`in populateTaskList on line 60 the index of the task to delete is ${indx}`);

        let taskRow = document.createElement('tr');
        taskRow.className = 'task-row'

        // add a button that strikes out text in row for completed
        let btn1 = document.createElement('input');
        btn1.type = 'button';
        btn1.textContent = 'C'
        btn1.id = `db${indx}`;
        btn1.className = 'task-strikeout-button';
        btn1.addEventListener("click", function (){
                                c1.className = 'strikeout';
                                c2.className = 'strikeout';
                                c3.className = 'strikeout';
                                c4.className = 'strikeout';
                                c5.className = 'strikeout';
                                task.status = 'complete';
                                c5.textContent = `${task.status}`;
                                // alert(`in btn1 click event and project is ${pname} and the task completed is ${prjTaskArray[indx].desc}`);
                                localStorage.removeItem(pname);
                                localStorage.setItem(pname, JSON.stringify(prjTaskArray));
                                });
               
        // create task rows and append each to taskTableBody
        let c0 = document.createElement("td");
        c0.className = 'strikeout-button-container'
        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");
        let c5 = document.createElement("td");
        let c6 = document.createElement("td");
        c6.className = 'delete-task-button-container'

        c1.innerText = pname;
        c2.innerText = task.desc;
        c3.innerText = task.dueDate;
        c4.innerText = task.priority;
        c5.innerText = String(task.status);

        if(task.status === 'complete'){
            c1.className = 'strikeout'
            c2.className = 'strikeout'
            c3.className = 'strikeout'
            c4.className = 'strikeout'
        };
        
        let btn2 = document.createElement('input');
        btn2.type = 'button';
        btn2.textContent = 'D'
        btn2.id = `db-${indx}`;
        btn2.className = 'task-delete-button';
        btn2.addEventListener("click", function(){
            let userInput = prompt(`Are you sure you want to delete this task: ${task.desc}? Answer y/n`);
            if(userInput.toLowerCase === 'n') {
                alert('You entered no to delete this task');
                } else {
                    indx = btn2.id.split('-')[1];
                    prjTaskArray.splice(indx, 1);
                    localStorage.removeItem(pname);
                    localStorage.setItem(pname, JSON.stringify(prjTaskArray));
                };
            }
        )
        c6.appendChild(btn2);
        c0.appendChild(btn1);
        
        taskRow.appendChild(c0);
        taskRow.appendChild(c1);
        taskRow.appendChild(c2);
        taskRow.appendChild(c3);
        taskRow.appendChild(c4);
        taskRow.appendChild(c5);
        taskRow.appendChild(c6);
       
        taskTableBody.appendChild(taskRow);
                
    };

    taskTable.appendChild(taskTableBody);
    taskTableContainer.appendChild(taskTable);

return taskTableContainer;
}




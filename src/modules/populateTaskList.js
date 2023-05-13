export function populateTaskList(taskArray, pname){

    // Clear input fields in task form
    let taskProj = document.getElementById('task-project');
    taskProj.value = pname;
    let taskDesc = document.getElementById('task-desc');
    taskDesc.value = '';
    let taskDueDate = document.getElementById('task-dueDate');
    taskDueDate.value = '';
    let taskPriority = document.getElementById('task-priority')
    taskPriority.value = '';
    
    // Change display title in task area for current project
    // const displayTitleTxt = document.querySelector('#display-title').textContent;
    // let taskTable = document.getElementById('task-table');
    // taskTable.innerHTML = '';
    var taskTableBody = document.getElementById('task-table-body');

    // Iterate through taskArray and find projects equal to current project
    for(let task of taskArray){
        console.log(`Task project is ${task.project}`);

        // if the current task is equal to the selected project create row entry
        //  with the task display area (table)
        if(task.project === pname){

            let taskProject = document.querySelector('.task-project');
            taskProject.value = pname;
            
            let taskRow = document.createElement('tr');
            taskRow.className = 'task-row'

            let c1 = document.createElement("td");
            let c2 = document.createElement("td");
            let c3 = document.createElement("td");
            let c4 = document.createElement("td");
            let c5 = document.createElement("td");

            c1.innerText = pname;
            c2.innerText = task.desc;
            c3.innerText = task.dueDate;
            c4.innerText = task.priority;
            // c5.innerHTML = <button class="delete-button" onclick="delRow(${Number(ID)})">Delete</button>`;
            c5.innerHTML = `<button class="task-delete-button">x</button>`

            taskRow.appendChild(c1);
            taskRow.appendChild(c2);
            taskRow.appendChild(c3);
            taskRow.appendChild(c4);
            taskRow.appendChild(c5);

            console.log(`taskRow is type ${typeof(taskRow)}`);
            console.log(taskRow);
            taskTableBody.appendChild(taskRow);
        };

    };

    return taskTableBody;
}


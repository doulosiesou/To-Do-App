export function populateTaskList(taskArrayPrj, pname){

    // let projectArray = window.localStorage.getItem('projects').split(',');
    
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
    
     
    // Select task table body to append rows from taskArrayPrj
    var taskTableBody = document.getElementById('task-table-body');
    let taskTableRows = document.querySelectorAll('.task-row')
    if(taskTableRows){
        for(let task of taskTableRows){
            taskTableBody.removeChild(task);
    }}


    // Iterate through taskArrayPrj and create cells for task items to append to a new table row
    for(let task of taskArrayPrj){
        
        console.log(`In populateTaskList Line 32 and task is ${task}`);

        let taskProject = document.querySelector('.task-project');
        taskProject.value = pname;
        
        let taskRow = document.createElement('tr');
        taskRow.className = 'task-row'

        // let c0 = document.createElement("td");
        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");
        let c5 = document.createElement("td");
        let c6 = document.createElement("td");
        let c7 = document.createElement("td");
        
        // c0.innerText = task.indx;
        c1.innerHTML = `<input type="checkbox">`
        c2.innerText = pname;
        c3.innerText = task.desc;
        c4.innerText = task.dueDate;
        c5.innerText = "completed date"
        c6.innerText = task.priority;
        c7.innerHTML = `<button class="task-delete-button" id = "${task.indx}">x</button>`

        // taskRow.appendChild(c0);
        taskRow.appendChild(c1);
        taskRow.appendChild(c2);
        taskRow.appendChild(c3);
        taskRow.appendChild(c4);
        taskRow.appendChild(c5);
        taskRow.appendChild(c6);
        taskRow.appendChild(c7);

        taskTableBody.appendChild(taskRow);
    };

    let taskDeleteButtons = document.getElementsByClassName('task-delete-button');
    console.log(taskDeleteButtons);
    // for(let tdb of taskDeleteButtons){
    //     // console.log(`adding event listener to ${tdb} task`)
    //     console.log(`tdb is ${tdb.indx}`);
    //     var indx = tdb.indx;
    //     tdb.addEventListener('click', function(indx){
            
    //         console.log(`task index is ${task.indx}`);
    //         taskArray.splice(indx + 1, 1);
    //         console.log(`Now taskArray is ${taskArray}`);
    //     });
    // }

    return taskTableBody;
};



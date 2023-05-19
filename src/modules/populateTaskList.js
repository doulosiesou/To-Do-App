export function populateTaskList(pname){

    // let projectArray = JSON.parse(localStorage.getItem('projects'));
    let prjTaskArray =  JSON.parse(localStorage.getItem(pname));
    for(let task in prjTaskArray){
        console.log(`in populateTaskList line 6 and task is ${task.desc}`);
    }
    
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
    
     
    // Select task table body to append rows from taskArray
    let taskTableBody = document.getElementById('task-table-body');
    let taskTableRows = document.querySelectorAll('.task-row')
    if(taskTableRows){
        for(let task of taskTableRows){
            taskTableBody.removeChild(task);
    }}


    // Iterate through taskArrayPrj and create cells for task items to append to a new table row
    for(let task of prjTaskArray){
        
        console.log(`In populateTaskList Line 33 and taskArray for project ${pname} is ${task.desc}`);
        let indx = prjTaskArray.indexOf(task);
        console.log(`line 35 the index of the task to delete is ${indx}`);

        // let taskProject = document.querySelector('.task-project');
        // taskProject.value = pname;
        
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
        // c7.innerHTML = `<button class="task-delete-button" id = "${indx}">x</button>`
        c7.innerHTML = `<input type="button" class="task-delete-button" id = "${indx}" value='x'>`

        // taskRow.appendChild(c0);
        taskRow.appendChild(c1);
        taskRow.appendChild(c2);
        taskRow.appendChild(c3);
        taskRow.appendChild(c4);
        taskRow.appendChild(c5);
        taskRow.appendChild(c6);
        taskRow.appendChild(c7);

        taskTableBody.appendChild(taskRow);

        // const delTaskRow = function(task){
        //     console.log(`Inside delTaskRow line 71 and task is ${task}`);
        //     prjTaskArray.splice(task.id,1);
        //     localStorage.removeItem(pname)
        //     localStorage.setItem(pname, JSON.stringify(prjTaskArray))};

        // }
    }
    
    return taskTableBody;
};

export function populateTaskList(pname){

    let taskTable = document.getElementById('task-table');
    let taskTableRows = document.getElementsByClassName('task-row');
    let taskTableBody = document.getElementById('task-table-body');
    let taskTableContainer = document.getElementById('task-table-container');
    let taskCbTableDbContainer = document.getElementById('task-cb-table-db-container');
    taskCbTableDbContainer.innerHTML = ''; 
            
    // let projectArray = JSON.parse(localStorage.getItem('projects'));
    let prjTaskArray =  JSON.parse(localStorage.getItem(pname));
    console.log(`In populateTaskList line 5 and prjTaskArray is ${prjTaskArray}`);
    for(let task of prjTaskArray){
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
    
    // Create the task table and task table body
    taskTableContainer = document.createElement('div')
    taskTableContainer.id = 'task-table-container'
    taskTable = document.createElement('table');
    taskTable.id = 'task-table';

    // Create task table body to append rows from taskArray
    taskTableBody = document.createElement('tbody');
    taskTableBody.className = 'task-table-body'
    taskTableBody.id = 'task-table-body';

    var checkBoxContainer = document.createElement('div');
    checkBoxContainer.id = "checkbox-container"

    var buttonContainer = document.createElement('div');
    buttonContainer.id = 'task-delete-btn-container';
    buttonContainer.className = 'task-delete-btn-container';

    // Iterate through taskArrayPrj and create cells for task items to append to a new table row
    // the new table row is appended to the table body then table body is appended to table
    // then table is appended to table container alongside the checkbox and delete buttons container
    for(let task of prjTaskArray){

        console.log(`In populateTaskList Line 58 and task for project ${pname} is ${task.desc}`);
        let indx = prjTaskArray.indexOf(task);
        console.log(`in populateTaskList on line 60 the index of the task to delete is ${indx}`);

        let taskRow = document.createElement('tr');
        taskRow.className = 'task-row'

        // create checkboxes append to checkBoxContainer
        var checkBox = document.createElement("INPUT"); 
        checkBox.setAttribute("type", "checkbox");
        checkBox.className = 'checkbox';
        checkBox.id = `cb-${indx}`
        checkBoxContainer.appendChild(checkBox);

        // create task rows and append each to taskTableBody
        let c0 = document.createElement("td");
        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");

        c0.innerText = pname;
        c1.innerText = task.desc;
        c2.innerText = task.dueDate;
        c3.innerText = task.priority;

        taskRow.appendChild(c0);
        taskRow.appendChild(c1);
        taskRow.appendChild(c2);
        taskRow.appendChild(c3);
       
        taskTableBody.appendChild(taskRow);
                
        // Create task delete buttons and append them to the buttonContainer
        
        let btn = document.createElement('button');
        btn.className = 'task-delete-button'
        btn.id = `db-${indx}`;
        btn.textContent = 'x'
        btn.addEventListener("click", function(){
                let userInput = prompt('Are you sure you want to delete this task? Answer y/n');
                
                if(userInput.toLowerCase === 'n') {
                    console.log('You entered no to delete this task');
                    } else {
                        indx = btn.id.split('-')[1];
                        prjTaskArray.splice(indx, 1);
                        localStorage.removeItem(pname);
                        localStorage.setItem(pname, JSON.stringify(prjTaskArray));
                        
                    }

            }
        );
        

        buttonContainer.appendChild(btn);
    };

    taskTable.appendChild(taskTableBody);
    taskTableContainer.appendChild(taskTable);


    
    taskCbTableDbContainer.appendChild(checkBoxContainer);
    taskCbTableDbContainer.appendChild(taskTableContainer);
    taskCbTableDbContainer.appendChild(buttonContainer);
    
    return taskCbTableDbContainer;
}




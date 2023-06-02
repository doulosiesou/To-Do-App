import { format } from "date-fns";

export function todaysTasks(todaysDate) {
    todaysDate = format(todaysDate, "MM-dd-yyyy");
    console.log(`Inside todaysTasks line 5 and today's date is ${todaysDate}`);
    let taskTableContainer = document.getElementById("task-table-container");
    taskTableContainer.innerHTML = "";

    let moveProjectDiv = document.getElementById('move-project');
    moveProjectDiv.innerHTML = '';

    let projectArray = JSON.parse(localStorage.getItem('projects'));
    let todaysTasks = [];

    for(let prj of projectArray){
        
        let prjTaskArray = JSON.parse(localStorage.getItem(prj));
        for(let task of prjTaskArray){
            if(task.dueDate === todaysDate){
                todaysTasks.push(task);
            }
        }
    }

    //try{
    //  prjTaskArray = JSON.parse(localStorage.getItem(pname));
    //  } catch (error){
    //      console.log(`in populateTaskList line 12 ${error}`);
    //      prjTaskArray = [];    
    //}
 
    // Clear input fields in task form and change display title in
    // task area for current project
    let taskFormContainer = document.getElementById('task-form-container');
    taskFormContainer.innerHTML = '';
    
    // If todaysTasks exists create the task table and task table body to append rows from taskArray
    if(todaysTasks){
        var taskTable = document.createElement("table");

        let tableHeader = document.createElement("thead");
        tableHeader.className = "task-table-header";
        tableHeader.id = "task-table-header";

        let taskTableBody = document.createElement("tbody");
        taskTableBody.className = "task-table-body";
        taskTableBody.id = "task-table-body";

        let thc0 = document.createElement("th");
        let thc1 = document.createElement("th");
        let thc2 = document.createElement("th");
        let thc3 = document.createElement("th");
        let thc4 = document.createElement("th");
        
        thc0.innerText = "Project";
        thc1.innerText = "Description";
        thc2.innerText = "Due Date";
        thc3.innerText = "Priority";
        thc4.innerText = "Complete Date";
        
        tableHeader.appendChild(thc0);
        tableHeader.appendChild(thc1);
        tableHeader.appendChild(thc2);
        tableHeader.appendChild(thc3);
        tableHeader.appendChild(thc4);
        
        taskTable.appendChild(tableHeader);

        for(let task of todaysTasks){
            console.log(`Inside todaysTasks line 70 and todaysTasks are ${task.dueDate}`);

            // let indx = todaysTasks.indexOf(task);
            // console.log(`in todaysTasks on line 77 the index of this task is ${indx}`);

            let taskRow = document.createElement("tr");
            taskRow.className = "task-row";

            // create task rows and append each to taskTableBody

            // project name
            let c0 = document.createElement("td");

            // task description
            let c1 = document.createElement("td");

            // task due date
            let c2 = document.createElement("td");

            // task priority
            let c3 = document.createElement("td");

            // task complete date if complete or else in-progress
            let c4 = document.createElement("td");

            c0.innerText = task.project;
            c1.innerText = task.desc;
            c2.innerText = format(new Date(String(task.dueDate)), "MM-dd-yyyy");
            c3.innerText = task.priority;
            c4.innerText = task.status;
            if (task.status === "complete") {
                c4.innerText = task.completeDate;
            } else {
                c4.innerText = task.status;
            }

            if (task.status === "complete") {
                c0.className = "strikeout";
                c1.className = "strikeout";
                c2.className = "strikeout";
                c3.className = "strikeout";
                c4.className = "complete-date";
            }
        
            taskRow.appendChild(c0);
            taskRow.appendChild(c1);
            taskRow.appendChild(c2);
            taskRow.appendChild(c3);
            taskRow.appendChild(c4);

            taskTableBody.appendChild(taskRow);
            taskTable.appendChild(taskTableBody);
            taskTableContainer.appendChild(taskTable);
        }
       
        return taskTableContainer;

    } else{
        taskTableContainer.innerText = 'There are no tasks due today'
    }
};


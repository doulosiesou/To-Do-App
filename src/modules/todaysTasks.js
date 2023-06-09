import { format, addDays, getDayOfYear } from "date-fns";

export function upcomingTasks(todaysDate) {

    console.log(`in upcomingTasks line 5 and todaysDate is ${todaysDate}`)

    let todaysDay = getDayOfYear(new Date(todaysDate));
    todaysDate = format(todaysDate, "MM-dd-yyyy");
    console.log(`Inside upcomingTasks line 9 and today's day is ${todaysDay}`);

    let taskTableContainer = document.getElementById("task-table-container");
    taskTableContainer.innerHTML = "";

    const projectArray = JSON.parse(localStorage.getItem('projects'));
        
    let todaysTasks = [];
    let thisweeksTasks = [];

    console.log(`In upcomingTasks line 19 and todaysDay = ${todaysDay}`);
    let forwardDate = addDays(todaysDay, 7);
    console.log(`In upcomingTasks line 21 and forwardDate = ${forwardDate}`)

    for(let prj of projectArray){
        
        let prjTaskArray = JSON.parse(localStorage.getItem(prj));

        for(let task of prjTaskArray){
            
            let taskDueDate = getDayOfYear(new Date(task.dueDate));
            console.log(`in upcomingTasks line 30 and taskDueDate is ${taskDueDate}`);

            if(taskDueDate === todaysDay){
                todaysTasks.push(task);
            } if(taskDueDate >= todaysDay && taskDueDate <= forwardDate ){
                thisweeksTasks.push(task);
            };
        };
    };

    // Clear input fields in task form and change display title in
    // task area for current project
    let taskFormContainer = document.getElementById('task-form-container');
    taskFormContainer.innerHTML = '';
    
    // If todaysTasks exists create the task table and task table body to append rows from taskArray
    if(todaysTasks){
        for(let task of todaysTasks){
            console.log(`in upcomingTasks line 46 and todaysTasks are ${task}`);
        }
        
        var tasksTodayTable = document.createElement("table");
        let tasksTodayTableCaption = document.createElement("caption")
        tasksTodayTableCaption.id = "today-task-table-caption"
        tasksTodayTableCaption.textContent = 'Today\'s Tasks'
        tasksTodayTable.appendChild(tasksTodayTableCaption);

        let tableTodayHeader = document.createElement("thead");
        tableTodayHeader.className = "today-task-table-header";
        tableTodayHeader.id = "today-task-table-header";

        var tasksTodayTableBody = document.createElement("tbody");
        tasksTodayTableBody.className = "today-tasks-table-body";
        tasksTodayTableBody.id = "today-tasks-table-body";

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
        
        tableTodayHeader.appendChild(thc0);
        tableTodayHeader.appendChild(thc1);
        tableTodayHeader.appendChild(thc2);
        tableTodayHeader.appendChild(thc3);
        tableTodayHeader.appendChild(thc4);
        
        tasksTodayTable.appendChild(tableTodayHeader);

        for(let task of todaysTasks){
            console.log(`Inside todaysTasks line 79 and todaysTasks are ${task.dueDate}`);

            // let indx = todaysTasks.indexOf(task);
            // console.log(`in todaysTasks on line 77 the index of this task is ${indx}`);

            let taskRow = document.createElement("tr");
            taskRow.className = "task-row";

            // create task rows and append each to tasksTodayTableBody

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

            tasksTodayTableBody.appendChild(taskRow);
        } 
    } else{

        taskTableContainer.innerText = 'There are no tasks due today'
    }
    
    tasksTodayTable.appendChild(tasksTodayTableBody);
    taskTableContainer.appendChild(tasksTodayTable);
    
    if(thisweeksTasks){
        var tasksThisweekTable = document.createElement("table");
        let tasksThisweekTableCaption = document.createElement("caption")
        tasksThisweekTableCaption.id = "thisweek-task-table-caption"
        tasksThisweekTableCaption.textContent = 'This Week\'s Tasks'
        tasksThisweekTable.appendChild(tasksThisweekTableCaption);

        let tableThisweekHeader = document.createElement("thead");
        tableThisweekHeader.className = "today-task-table-header";
        tableThisweekHeader.id = "today-task-table-header";

        let tasksThisweekTableBody = document.createElement("tbody");
        tasksThisweekTableBody.className = "thisweek-tasks-table-body";
        tasksThisweekTableBody.id = "thisweek-tasks-table-body";

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
        
        tableThisweekHeader.appendChild(thc0);
        tableThisweekHeader.appendChild(thc1);
        tableThisweekHeader.appendChild(thc2);
        tableThisweekHeader.appendChild(thc3);
        tableThisweekHeader.appendChild(thc4);
        
        tasksThisweekTable.appendChild(tableThisweekHeader);

        for(let task of thisweeksTasks){
            console.log(`Inside todaysTasks line 179 and thisweeksTasks are ${task.dueDate}`);

            // let indx = todaysTasks.indexOf(task);
            // console.log(`in todaysTasks on line 77 the index of this task is ${indx}`);

            let taskRow = document.createElement("tr");
            taskRow.className = "task-row";

            // create task rows and append each to tasksTodayTableBody

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

            tasksThisweekTableBody.appendChild(taskRow);
            
        } 
        
        tasksThisweekTable.appendChild(tasksThisweekTableBody);
        taskTableContainer.appendChild(tasksThisweekTable);
    }
    return taskTableContainer;
} 



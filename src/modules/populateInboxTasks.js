export function populateInboxTasks(pname) {
    let taskTableContainer = document.getElementById("task-table-container");
    taskTableContainer.innerHTML = "";

    let projectArray = JSONA.parse(localStorage.getItem('projects'));
    let inboxTaskArray = [];

    for(let prj of projectArray){
        let prjTaskArray = JSON.parse(localStorage.getItem(pname));
        for(let task of prjTaskArray){
            if(task.project === 'Inbox'){
                inboxTaskArray.push(task);
            };
        };
    };

    inboxTaskArray.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        return new Date(a.dueDate) - new Date(b.dueDate);
    });

    let taskProj = document.getElementById("task-project");
    taskProj.value = 'inbox';

    let taskDesc = document.getElementById("task-desc");
    taskDesc.value = "";

    let taskDueDate = document.getElementById("task-dueDate");
    taskDueDate.value = "";

    let taskPriority = document.getElementById("task-priority");
    taskPriority.value = "";

    for (let task of inboxTaskArray) {
        console.log(
          `In populateTaskList Line 36 and task for project ${pname} and task.status is ${task.status}`
        );
        let indx = prjTaskArray.indexOf(task);
        // console.log(`in populateTaskList on line 60 the index of the task to delete is ${indx}`);
    
        let taskRow = document.createElement("tr");
        taskRow.className = "task-row";
    
        // add a button that strikes out text in row for completed
        let btn1 = document.createElement("input");
        btn1.type = "button";
        btn1.id = `db${indx}`;
        btn1.className = "task-strikeout-button";
        btn1.addEventListener("click", function () {
          c1.className = "strikeout";
          c2.className = "strikeout";
          c3.className = "strikeout";
          c4.className = "strikeout";
          task.status = "complete";
          c5.className = "complete-date";
          const cDate = format(new Date(), "MM/dd/yyyy");
          task.completeDate = cDate;
          c5.textContent = `${cDate}`;
    
          localStorage.removeItem(pname);
          localStorage.setItem(pname, JSON.stringify(prjTaskArray));
        });
    
        // create task rows and append each to taskTableBody
    
        // Complete? button
        let c0 = document.createElement("td");
        c0.className = "strikeout-button-container";
    
        // project name
        let c1 = document.createElement("td");
    
        // task description
        let c2 = document.createElement("td");
    
        // task due date
        let c3 = document.createElement("td");
    
        // task priority
        let c4 = document.createElement("td");
    
        // task complete date if complete
        let c5 = document.createElement("td");
    
        // delete button
        let c6 = document.createElement("td");
        c6.className = "delete-task-button-container";
    
        c1.innerText = pname;
        c2.innerText = task.desc;
        c3.innerText = format(new Date(String(task.dueDate)), "MM-dd-yyyy");
        c4.innerText = task.priority;
        c5.innerText = task.status;
        if (task.status === "complete") {
          c5.innerText = task.completeDate;
        } else {
          c5.innerText = task.status;
        }
    
        if (task.status === "complete") {
          c1.className = "strikeout";
          c2.className = "strikeout";
          c3.className = "strikeout";
          c4.className = "strikeout";
          c5.className = "complete-date";
        }
    
        let btn2 = document.createElement("input");
        btn2.type = "button";
        btn2.id = `db-${indx}`;
        btn2.className = "task-delete-button";
        btn2.addEventListener("click", function () {
          let userInput = prompt(
            `Are you sure you want to delete this task: ${task.desc}? Answer y/n`
          );
          alert("Use delete button only once then refresh list");
          if (userInput.toLowerCase === "n") {
            alert("You entered no to delete this task");
          } else {
            indx = btn2.id.split("-")[1];
            prjTaskArray.splice(indx, 1);
            localStorage.removeItem(pname);
            localStorage.setItem(pname, JSON.stringify(prjTaskArray));
          }
        });
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
      }
    
      taskTable.appendChild(taskTableBody);
      taskTableContainer.appendChild(taskTable);
    
      return taskTableContainer;
}
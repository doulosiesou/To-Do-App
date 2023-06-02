import { format } from "date-fns";
import { Task } from "./createTask";
import { populateTaskList } from "./populateTaskList";

export function populateInboxTasks(pname) {

    let taskTableContainer = document.getElementById("task-table-container");
    taskTableContainer.innerHTML = "";

    let inboxTaskArray = JSON.parse(localStorage.getItem('Inbox'));
    console.log(`in populateInboxTasks line 9 and inboxTaskArray is ${inboxTaskArray}`);

    inboxTaskArray.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        return new Date(a.dueDate) - new Date(b.dueDate);
    });

    var taskProj = document.getElementById("task-project");
    taskProj.value = 'Inbox';

    var taskDesc = document.getElementById("task-desc");
    taskDesc.value = "";

    var taskDueDate = document.getElementById("task-dueDate");
    taskDueDate.value = "";

    var taskPriority = document.getElementById("task-priority");
    taskPriority.value = "";

    // Select the currently hidden move-project-dropdown div
    var moveProjectDiv = document.getElementById('move-project');

    // Create table and table header
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
    let thc5 = document.createElement("th");
    let thc6 = document.createElement("th");
    let thc7 = document.createElement("th");
  
    thc0.innerText = "Complete?";
    thc1.innerText = "Move?";
    thc2.innerText = "Project";
    thc3.innerText = "Description";
    thc4.innerText = "Due Date";
    thc5.innerText = "Priority";
    thc6.innerText = "Complete Date";
    thc7.innerText = "Delete?";
      
    tableHeader.appendChild(thc0);
    tableHeader.appendChild(thc1);
    tableHeader.appendChild(thc2);
    tableHeader.appendChild(thc3);
    tableHeader.appendChild(thc4);
    tableHeader.appendChild(thc5);
    tableHeader.appendChild(thc6);
    tableHeader.appendChild(thc7);
  
    taskTable.appendChild(tableHeader);

    for (let task of inboxTaskArray) {

      let indx = inboxTaskArray.indexOf(task);
      let taskRow = document.createElement("tr");
      taskRow.className = "task-row";
    
      // create task rows and append each to taskTableBody
      // Complete? button
      let c0 = document.createElement("td");
      c0.className = "strikeout-button-container";

      // Move task to another project button
      let c1 = document.createElement("td");
      c1.className = "move-task-button-container"
  
      // project name
      let c2 = document.createElement("td");
  
      // task description
      let c3 = document.createElement("td");
  
      // task due date
      let c4 = document.createElement("td");
  
      // task priority
      let c5 = document.createElement("td");
  
      // task complete date if complete
      let c6 = document.createElement("td");
  
      // delete button
      let c7 = document.createElement("td");
      c7.className = "delete-task-button-container";
  
      c2.innerText = 'Inbox';
      c3.innerText = task.desc;
      c4.innerText = format(new Date(String(task.dueDate)), "MM-dd-yyyy");
      c5.innerText = task.priority;
      c6.innerText = task.status;
        
      if (task.status === "complete") {
        c6.innerText = task.completeDate;
        c2.className = "strikeout";
        c3.className = "strikeout";
        c4.className = "strikeout";
        c5.className = "strikeout";
        c6.className = "complete-date";
      } else {
        c6.innerText = task.status;
      }
  
      // add a button that strikes out text in row for completed
      let btn1 = document.createElement("input");
      btn1.type = "button";
      btn1.id = `btn1-${indx}`;
      btn1.className = "task-strikeout-button";
      btn1.addEventListener("click", function () {
        c2.className = "strikeout";
        c3.className = "strikeout";
        c4.className = "strikeout";
        c5.className = "strikeout";
        task.status = "complete";
        c6.className = "complete-date";
        const cDate = format(new Date(), "MM-dd-yyyy");
        task.completeDate = String(cDate);
        c6.textContent = `${String(cDate)}`;
  
        localStorage.removeItem('Inbox');
        localStorage.setItem('Inbox', JSON.stringify(inboxTaskArray));
      });

      // Add a button that moves this task to a project

      let btn2 = document.createElement('button');
      btn2.id = "move-task-button";
      btn2.addEventListener('click', function(){
        let userPrompt = prompt(`Do you want to move this task to another project? y/n`);
        if(userPrompt === 'y'){
          alert('The form fields above are populated with the tasks editable values, Click to move task to apply changes');
          // console.log('The form fields above are populated with the tasks editable values, click Submit Edits to apply changes');
          taskProj.value = '';
          taskDesc.value = task.desc;
          let tdd = format(new Date(task.dueDate), "MM-dd-yyyy");
          taskDueDate.value = tdd;
          taskPriority.value = task.priority;
          let moveTaskBtn = document.createElement('button');
          moveTaskBtn.className = 'submit-move-button'
          moveTaskBtn.textContent = 'Click to move task';
          console.log(`inside populateInboxTasks line 158 and the task is ${task.project}`)
          moveTaskBtn.addEventListener("click", function(task){
            task.project = taskProj.value
            console.log(`inside populateInboxTasks line 161 and the task is ${task.project} and index is ${indx}`);
            
            // Modify inboxTaskArray for removed project then save to localStorage
            inboxTaskArray.splice(indx,1);
            localStorage.removeItem('Inbox');
            localStorage.setItem('Inbox', JSON.stringify(inboxTaskArray));
            
            let prjTaskArray = JSON.parse(localStorage.getItem(`${task.project}`))
            task.desc = taskDesc.value
            task.dueDate = format(new Date(taskDueDate.value), "MM-dd-yyyy");
            task.priority = taskPriority.value
            console.log(`inside populateInboxTasks line 173 and task info is:'\n ${task.project}'\n${task.desc}'\n${task.dueDate}'\n${task.priority}`);
            console.log(`inside populateInboxTasks line 174 and the task project is ${task.project} and the task project is ${task.desc}`);
            if(prjTaskArray){
              prjTaskArray.push(task);
            } else{
              let newTask = new Task(task.project, task.desc, task.dueDate, task.priority, task.status);
              prjTaskArray = [newTask]
            }

            console.log(`inside populateInboxTasks line 176 and the prjTaskArray is ${prjTaskArray.project}`);            
            localStorage.removeItem(`${task.project}`);
            localStorage.setItem(`${task.project}`, JSON.stringify(prjTaskArray));

          })
          moveProjectDiv.appendChild(moveTaskBtn);
        }
        // taskTableContainer.innerHTML = "";
        // populateTaskList('Inbox');
      });

      let btn3 = document.createElement("input");
      btn3.type = "button";
      btn3.id = `btn3-${indx}`;
      btn3.className = "task-delete-button";
      btn3.addEventListener("click", function () {
        let userInput = prompt(
          `Are you sure you want to delete this task: ${task.desc}? Answer y/n`
        );
        alert("Use delete button only once then refresh list");
        if (userInput.toLowerCase === "n") {
          alert("You entered no to delete this task");
        } else {
          indx = btn3.id.split("-")[1];
          inboxTaskArray.splice(indx, 1);
          localStorage.removeItem('Inbox');
          localStorage.setItem('Inbox', JSON.stringify(inboxTaskArray));
        }
      });
      
      c0.appendChild(btn1);
      c1.appendChild(btn2);
      c7.appendChild(btn3);

      taskRow.appendChild(c0);
      taskRow.appendChild(c1);
      taskRow.appendChild(c2);
      taskRow.appendChild(c3);
      taskRow.appendChild(c4);
      taskRow.appendChild(c5);
      taskRow.appendChild(c6);
      taskRow.appendChild(c7);
  
      taskTableBody.appendChild(taskRow);
    }
  
    taskTable.appendChild(taskTableBody);
    taskTableContainer.appendChild(taskTable);
    
    return taskTableContainer;
}
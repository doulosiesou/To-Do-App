export function initializeTaskList(pname){
    let taskTableContainer = document.getElementById("task-table-container");
    taskTableContainer.innerHTML = "";

    let taskProj = document.getElementById("task-project");
    taskProj.value = pname;

    let taskDesc = document.getElementById("task-desc");
    taskDesc.value = "";

    let taskDueDate = document.getElementById("task-dueDate");
    taskDueDate.value = "";

    let taskPriority = document.getElementById("task-priority");
    taskPriority.value = "";

}
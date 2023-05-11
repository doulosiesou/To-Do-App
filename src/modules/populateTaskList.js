export function populateTaskList(taskArray, pname){

    // Clear input fields
    let taskProj = document.getElementById('task-project');
    taskProj.value = pname;
    let taskDesc = document.getElementById('task-desc');
    taskDesc.value = '';
    let taskDueDate = document.getElementById('task-dueDate');
    taskDueDate.value = '';
    let taskPriority = document.getElementById('task-priority')
    taskPriority.value = '';
    
    const displayTitleTxt = document.querySelector('#display-title').textContent;
    let taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    for(let task of taskArray){
        console.log(`Task project is ${task.project}`)
        if(task.project === pname){
            let taskProject = document.querySelector('.task-project');
            taskProject.value = pname;
            let taskLineItem = document.createElement('div');
            taskLineItem.className = 'task-line-item'
            taskLineItem.innerHTML = 
            `
                <input type="checkbox" id="done" name="done" value="yes">
                <p class = "task-project">${task.project}</p>
                <p class = "task-desc">${task.desc}</p>
                <p class = "task-dueDate">${task.dueDate}</p>
                <p class = "task-priority">${task.priority}</p>
                <button class = "task-delete-button">x</button>
            `
            taskList.appendChild(taskLineItem);
    }};
    
    return taskList
};


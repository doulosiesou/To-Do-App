
export function createBlankTask(){

    const addDiv = document.createElement('div');
    addDiv.className = 'task-row';
    
    let taskDesc = 'description';
    let taskDetail = 'details';
    let project = 'project';
    let dueDate = 'date';
    let priority = 'priority';

    addDiv.innerHTML = 
            `<input type="checkbox" id="done" name="done" value="yes">
            <p class = "task_detail" id = "task-desc">${taskDesc}</p>
            <p class = "task_detail" id = "task-detail">${taskDetail}</p>
            <p class = "task_detail" id= "task-project">${project}</p>
            <p class = "task_detail" id= "task-dueDate">${dueDate}</p>
            <p class = "task_priority" id= "task-priority">${priority}</p>
            <button class = "task_delete_button">x</button>
            `
     return addDiv;
};
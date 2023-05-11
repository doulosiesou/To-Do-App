
export function createBlankTask(){

    const addDiv = document.createElement('div');
    addDiv.className = 'task-row-form';
    
    addDiv.innerHTML = 
        `<form action="#" method="post">
            <input type="text" class = "task-project" id = "task-project" placeholder="project">
            <input type="text" class = "task-desc" id = "task-desc" placeholder="description">
            <input type="text" class = "task-dueDate" id = "task-dueDate" placeholder="due date">
            <input type="text" class = "task-priority" id = "task-priority" placeholder="priority">
        </form>`

    return addDiv;
};
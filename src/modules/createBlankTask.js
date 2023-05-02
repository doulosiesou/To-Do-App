
export function createBlankTask(){

    const addDiv = document.createElement('div');
    addDiv.className = 'task-row-form';
    
    addDiv.innerHTML = 
        `<form action="#" method="post">
            <input type="checkbox" id="done" name="done" value="yes">
            <input type="text" class = "task-desc" placeholder="description">
            <input type="text" class = "task-detail" placeholder="details">
            <input type="text" class = "task-project" placeholder="project">
            <input type="text" class = "task-dueDate" placeholder="due date">
            <input type="text" class = "task-priority" placeholder="priority">
            <button class = "task_delete_button">x</button>
        </form>`

    return addDiv;
};
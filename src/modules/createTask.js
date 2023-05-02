export function createTask(desc, detail, project, dueDate, priority){

    this.desc = desc;
    this.detail = detail;
    this.project = project;
    this.dueDate = dueDate;
    this.priority = priority;

    // const addDiv = document.createElement('div');
    // addDiv.className = 'task-row-form';
    
    // addDiv.innerHTML = 
    //     `<form action="#" method="post">
    //         <input type="checkbox" id="done" name="done" value="yes">
    //         <input type="text" class = "task-desc" ${this.desc}>
    //         <input type="text" class = "task-detail" ${this.detail}>
    //         <input type="text" class = "task-project" ${this.project}>
    //         <input type="text" class = "task-dueDate" ${this.dueDate}">
    //         <input type="text" class = "task-priority" ${this.priority}>
    //         <button class = "task_delete_button">x</button>
    //     </form>
    //     `
    //return addDiv;
};
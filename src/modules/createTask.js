export function Task(project='inbox',desc, dueDate, priority, status='in-progress'){

    this.project = project;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status
};
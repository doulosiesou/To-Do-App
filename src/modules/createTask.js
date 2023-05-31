export function Task(
  project = "Inbox",
  desc,
  dueDate, //String In fornat of MM,dd,yyyy
  priority,
  status = "in-progress"
) {
  
  this.project = project;
  this.desc = desc;
  this.dueDate = dueDate;
  this.priority = priority;
  this.status = status;
  this.completeDate;
}

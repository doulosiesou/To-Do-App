export function createTaskForm() {
  const addDiv = document.createElement("div");
  addDiv.id = "task-form";

  addDiv.innerHTML = `<form action="#" method="post">
            <input type="text" class = "task-form-item" id = "task-project" placeholder="project">
            <input type="text" class = "task-form-item" id = "task-desc" placeholder="description">
            <input type="date" class = "task-form-item" id = "task-dueDate" placeholder="MM-dd-yyyy due date">
            <input type="text" class = "task-form-item" id = "task-priority" placeholder="priority">
        </form>`;

  return addDiv;
}

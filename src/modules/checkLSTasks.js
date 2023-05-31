import { Task } from "./createTask";

export function checkLSTasks(projectArray){

    let taskArray = [];
    let checkProjectArray = JSON.parse(localStorage.getItem("projects"));
  
    if (checkProjectArray) {
        projectArray = checkProjectArray;
    } else {
        let project1 = "House Cleaning";
        let project2 = "Yard Work";
        let project3 = "Inbox"
        projectArray = [project1, project2, project3];
        localStorage.setItem(`projects`, JSON.stringify(projectArray));
    }
  
    for (let project of projectArray) {
        let checkTaskArray = JSON.parse(localStorage.getItem(project));
        if (checkTaskArray) {
            taskArray = checkTaskArray;
            console.log(`inside checkLSTasks line 22 and now taskArray is ${taskArray}`);
            return taskArray;
        } else {
            let newTask1 = new Task(
                "House Cleaning",
                "Clean outside cage",
                "2023,05,31",
                "high",
                "in-progress"
            );
            let newTask2 = new Task(
                "House Cleaning",
                "Clean inside cage",
                "2023,05,26",
                "high",
                "in-progress"
            );
            let newTask3 = new Task(
                "House Cleaning",
                "Clean refrigerator",
                "2023,06,15",
                "low",
                "in-progress"
            );
            let newTask4 = new Task(
                "Yard Work",
                "Mow grass",
                "2023,06,05",
                "low",
                "in-progress"
            );
            let newTask5 = new Task(
                "Yard Work",
                "Rake leaves",
                "2023,06,16",
                "low",
                "in-progress"
            );
            let newTask6 = new Task(
                "Yard Work",
                "Trim bushes",
                "2023,06,26",
                "low",
                "in-progress"
            );
            let newTask7 = new Task(
                "Inbox",
                "Sort through canned foods",
                "2023,06,01",
                "low",
                "in-progress"
            );
            let newTask8 = new Task(
                "Inbox",
                "Check tire pressure on truck",
                "2023,06,05",
                "low",
                "in-progress"
            );
            let newTask9 = new Task(
                "Inbox",
                "Paint mailbox white",
                "2023,07,15",
                "low",
                "in-progress"
            );

            let tasksP1 = [newTask1, newTask2, newTask3];
            let tasksP2 = [newTask4, newTask5, newTask6];
            let tasksP3 = [newTask7, newTask8, newTask9];
            localStorage.setItem("House Cleaning", JSON.stringify(tasksP1));
            localStorage.setItem("Yard Work", JSON.stringify(tasksP2));
            localStorage.setItem("Inbox", JSON.stringify(tasksP3));
      
            taskArray = [tasksP1, tasksP2, tasksP3];
            console.log(`inside checkLSTasks and taskArray is ${taskArray}`);
        }
  } return taskArray;
};

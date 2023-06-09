import { Task } from "./createTask";
import { format, addDays } from "date-fns";

export function checkLSTasks(){

    let taskArray = [];
    let projectArray = [];
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
            console.log(`inside checkLSTasks line 23 and now taskArray is ${taskArray}`);
            return taskArray;
        } else {
            let tDate = new Date();
            let tDateNext1 = addDays(tDate, 2);
            let tDateNext2 = addDays(tDate, 4);
            let tDateNext3 = addDays(tDate, 5);
            let newTask1 = new Task(
                "House Cleaning",
                "Clean laundry room",
                tDate,
                "high",
                "in-progress"
            );
            let newTask2 = new Task(
                "House Cleaning",
                "Clean windows",
                tDateNext1,
                "high",
                "in-progress"
            );
            let newTask3 = new Task(
                "House Cleaning",
                "Mop floor",
                tDateNext2,
                "high",
                "in-progress"
            );
            let newTask4 = new Task(
                "House Cleaning",
                "Clean refrigerator",
                tDateNext1,
                "low",
                "in-progress"
            );
            let newTask5 = new Task(
                "Yard Work",
                "Mow grass",
                tDate,
                "low",
                "in-progress"
            );
            let newTask6 = new Task(
                "Yard Work",
                "Rake leaves",
                tDateNext2,
                "low",
                "in-progress"
            );
            let newTask7 = new Task(
                "Yard Work",
                "Trim bushes",
                tDate,
                "low",
                "in-progress"
            );
            let newTask8 = new Task(
                "Inbox",
                "Sort through canned foods",
                tDateNext1,
                "low",
                "in-progress"
            );
            let newTask9 = new Task(
                "Inbox",
                "Check tire pressure on truck",
                tDate,
                "low",
                "in-progress"
            );
            let newTask10 = new Task(
                "Inbox",
                "Sweep front porch",
                tDateNext3,
                "low",
                "in-progress"
            );

            let tasksP1 = [newTask1, newTask2, newTask3, newTask4];
            let tasksP2 = [newTask5, newTask6, newTask7];
            let tasksP3 = [newTask8, newTask9, newTask10];
            localStorage.setItem("House Cleaning", JSON.stringify(tasksP1));
            localStorage.setItem("Yard Work", JSON.stringify(tasksP2));
            localStorage.setItem("Inbox", JSON.stringify(tasksP3));
      
            taskArray = [tasksP1, tasksP2, tasksP3];
            console.log(`inside checkLSTasks and taskArray is ${taskArray}`);
        }
  } return taskArray;
};

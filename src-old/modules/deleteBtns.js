import { createProjectList } from "./createProjectList";

export function projDelBtn(prj){
        
    let projectArray = JSON.parse(localStorage.getItem('projects'));
    let indx = projectArray.indexOf(prj);
    console.log(`In projeDelBtn line 5 amd index of project to delete ${prj} is ${indx}`);
    
    let userIn = prompt(`Are you sure you want to delete the project ${projectArray[indx]}?\nEnter y/n`).toLowerCase;
    console.log(`Inside deleteBtns and user prompt value was ${userIn}`);

    // modify project array to delete project and modify localStorage
    projectArray.splice(indx, 1);
    localStorage.removeItem('projects');

    console.log(`in deleteBtns line 12 and new projectArray is ${projectArray}`);
    localStorage.setItem(`projects`, JSON.stringify(projectArray));

    localStorage.removeItem(prj)

    let projectList = document.querySelector('#project-list');
    projectList.innerHTML = '';
    let projListText = createProjectList();
    projectList.appendChild(projListText);
};

    
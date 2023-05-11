import { createProjectList } from "./createProjectList";

export function assignDelProjBtns(deleteButtons, projectArray, projectList, projListText){


    for(let i of deleteButtons){
            
        i.onclick = function(){
            
            projectArray = localStorage.getItem("projectArray");
            let pTemp = projectArray.split(',');
            projectArray = pTemp;

            let indx = Number(i.id);
            console.log(`i.id is ${i.id}`);
            
            let userIn = prompt(`Are you sure you want to delete the project ${projectArray[indx]}?\nEnter y for yes or n for no`);
            userIn.toLowerCase
            if (userIn ===  'y'){

                localStorage.clear();
                
                projectArray.splice(indx, 1);
                localStorage.projectArray = projectArray;

                console.log(`new projectArray is ${projectArray}`);
                projectList = document.querySelector('#project-list');
                projectList.innerHTML = '';
                projListText = createProjectList(projectArray);
                projectList.appendChild(projListText);
                deleteButtons = document.getElementsByClassName('proj-del-button');
                assignDelBtns(deleteButtons);
            };
        };
    };
}
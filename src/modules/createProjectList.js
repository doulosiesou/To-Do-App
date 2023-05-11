import { populateTaskList } from './populateTaskList';

export function createProjectList(taskArray){

    let projectList = document.querySelector('#project-list');
    let projectArray=[];
    let pTemp = localStorage.getItem("projectArray").split(',');
    projectArray = pTemp;

    let newDiv = document.createElement('div');
    newDiv.className = 'new-div';
    
    for(let prj of projectArray){

        let pname = String(prj);
        console.log(pname);
        let index = projectArray.indexOf(prj);

        const displayTitle = document.querySelector('#display-title');

        let projLineDiv = document.createElement('div');
        projLineDiv.className = 'projItem'

        let addPara = document.createElement('p');
        addPara.textContent = prj;

        let projDelBtn = document.createElement('button')
        projDelBtn.textContent = 'X'
        projDelBtn.className = 'proj-del-button';
        projDelBtn.id = index;

        projLineDiv.appendChild(addPara);
        projLineDiv.appendChild(projDelBtn);

        projLineDiv.onclick = function() {
            console.log(`pname = ${pname}`)
            displayTitle.textContent = `${pname} ToDos`;
            populateTaskList(taskArray, pname)
        }

        newDiv.appendChild(projLineDiv); 
    };
    
    return newDiv
}


// import { populateTaskList } from './populateTaskList';
import { populateTaskList } from './populateTaskList';
import { projDelBtn } from './deleteBtns';
import { setDisplayTitle } from './setDisplayTitle';

export function initializeProjectList(){

    let projectArray = JSON.parse(localStorage.getItem('projects'));
    
    let newDiv = document.createElement('div');
    newDiv.className = 'new-div';
    
    for(let prj of projectArray){

        let pname = String(prj);
        console.log(`Inside initializeProjectList line16 and project pname is ${pname}`);
        let index = projectArray.indexOf(prj);
        console.log(`In initializeProjectList line 18 project is ${prj} index in projectArray is ${index}`);

        let projLineDiv = document.createElement('div');
        projLineDiv.className = 'projItem'

        let addPara = document.createElement('p');
        addPara.className = 'project-click'
        addPara.textContent = pname;
        addPara.onclick = function(){
            setDisplayTitle(prj);
        };

        let projectDeleteBtn = document.createElement('button')
        projectDeleteBtn.textContent = 'x'
        projectDeleteBtn.className = 'proj-del-button';
        projectDeleteBtn.id = index;
        projectDeleteBtn.onclick = function(){
            projDelBtn(prj)
        }

        projLineDiv.appendChild(addPara);
        projLineDiv.appendChild(projectDeleteBtn);

        addPara.onclick = function() {
            let displayTitle = document.querySelector('#display-title');
            displayTitle.textContent = `${pname} ToDos`;
            populateTaskList(pname);
        }

        newDiv.appendChild(projLineDiv); 
    };
    
    return newDiv
}
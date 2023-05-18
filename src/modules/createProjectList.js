import { populateTaskList } from './populateTaskList';
import { projDelBtn } from './deleteBtns'
import { setDisplayTitle } from './setDisplayTitle'

export function createProjectList(){

    let projectArray = JSON.parse(localStorage.getItem('projects'));
        
    let newDiv = document.createElement('div');
    newDiv.className = 'new-div';

    for(let prj of projectArray){

        let pname = String(prj);
        let index = projectArray.indexOf(prj);

        let displayTitle = document.querySelector('#display-title');

        let projLineDiv = document.createElement('div');
        projLineDiv.className = 'projItem'

        let addPara = document.createElement('p');
        addPara.className = 'project-click'
        addPara.textContent = pname;
        addPara.onclick = function(){
            setDisplayTitle(prj);
            // populateTaskList(projectArray);
        };

        let projDeleteBtn = document.createElement('button')
        projDeleteBtn.textContent = 'X'
        projDeleteBtn.className = 'proj-del-button';
        projDeleteBtn.id = index;
        projDeleteBtn.onclick = function(){
            projDelBtn(prj);
        }

        projLineDiv.appendChild(addPara);
        projLineDiv.appendChild(projDeleteBtn);

        console.log(`In createProjectList Line 42 prj is ${prj}`)

        // let taskArrayPrj = JSON.parse(localStorage.getItem(prj));

        projLineDiv.onclick = function() {
            console.log(`pname = ${pname}`)
            displayTitle.textContent = `${pname} ToDos`;
            // populateTaskList(taskArrayPrj, pname);
        }

        newDiv.appendChild(projLineDiv); 
    };
    
    return newDiv
}


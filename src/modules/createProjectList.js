export function createProjectList(){

    let projectList = document.querySelector('#project-list');
    let projectArray=[];
    let pTemp = localStorage.getItem("projectArray").split(',');
    projectArray = pTemp;

    let newDiv = document.createElement('div');
    newDiv.className = 'new-div';
    
    for(let prj of projectArray){

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

        projLineDiv.onclick = function() {
            displayTitle.textContent = `${prj} ToDos`;
        }

        projLineDiv.appendChild(addPara);
        projLineDiv.appendChild(projDelBtn);

        newDiv.appendChild(projLineDiv); 
    };
    
    return newDiv
}


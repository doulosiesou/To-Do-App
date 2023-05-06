export function createProjectList(projectArray){

    let newDiv = document.createElement('div');
    newDiv.className = 'new-div';

    for(let prj of projectArray){

        let projLineDiv = document.createElement('div');
        projLineDiv.className = 'projItem'

        let addPara = document.createElement('p');
        addPara.textContent = prj;

        let projDelBtn = document.createElement('button')
        projDelBtn.textContent = 'X'
        projDelBtn.className = 'proj-del-button';

        projLineDiv.appendChild(addPara);
        projLineDiv.appendChild(projDelBtn);

        newDiv.appendChild(projLineDiv); 
    };
    
    return newDiv
}
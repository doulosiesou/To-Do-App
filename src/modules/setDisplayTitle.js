export function setDisplayTitle(){

    const displayTitle = document.querySelector('#display-title');

    const inbox = document.querySelector('#inbox-icon');
    inbox.onclick = function() {
        displayTitle.textContent = 'Inbox ToDos';
    };

    const today = document.querySelector('#today-icon');
    today.onclick = function() {
        displayTitle.textContent = 'Today ToDos';
    };

    const thisWeek = document.querySelector('#this-week-icon');
    thisWeek.onclick = function(){
        displayTitle.textContent = 'This Week\'s ToDo\'s';
    };

}
const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const fullList = document.querySelector('.list-tasks')

let myItemList = []

function addNewItem() {
    myItemList.push({
        task: input.value,
        complete: false
    })

    input.value='';
    
    showTasks();
}

function showTasks() {
    let newLi = ''
    myItemList.forEach((item, position) => {
        newLi = newLi + `
       
        <li class="task" ${item.complete && "done"}">
            <img src="./img/checked.png" alt="check-in-task" onclick="completeTask(${position})">
            <p>${item.task}</p>
            <img src="./img/trash.png" alt="task-for-trash" onclick="deleteItem(${position})">
            </li>
            
            `
    })

    fullList.innerHTML=newLi;
    localStorage.setItem    ('lista', JSON.stringify(myItemList))

}


function completeTask(position){
    myItemList[position].complete = !myItemList[position].complete  //valor true e false
    showTasks();
}

function deleteItem(position){
    myItemList.splice(position, 1);
    showTasks();

}

function reloadTasks(){
    const localStorageTasks = localStorage.getItem('lista');
    
    if(localStorageTasks){
    myItemList = JSON.parse(localStorageTasks)
    }
    showTasks();
}

reloadTasks();
button.addEventListener('click', addNewItem)
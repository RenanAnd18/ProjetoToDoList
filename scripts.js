const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const fullList = document.querySelector('.list-tasks')

let myItemList = []

function addNewItem() {
    myItemList.push(input.value);
    input.value='';
    
    showTasks();
}

function showTasks() {
    let newLi = ''
    myItemList.forEach((task, position) => {
        newLi = newLi + `
       
        <li class="task">
            <img src="./img/checked.png" alt="check-in-task">
            <p>${task}</p>
            <img src="./img/trash.png" alt="task-for-trash" onclick="deleteItem(${position})">
            </li>
            
            `
    })

    fullList.innerHTML=newLi;

}


function deleteItem(position){
    myItemList.splice(position, 1);
    showTasks();

}


button.addEventListener('click', addNewItem)
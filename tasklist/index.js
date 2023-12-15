const taskList = document.getElementById("taskList");
const clear = document.querySelector(".clear");
const addTask = document.querySelector(".addTask");

function createNewTask(value) {
    const el = `<li class="taskList__item">
    ${value}
    <button class="deleteButton btn btn-danger">Удалить</button>
    <button class="cloneButton btn btn-warning">Клонировать</button>
</li>`;
    return el;
    /*const newTaskEl = document.createElement("li");
    newTaskEl.classList.add("taskList__item");
    const delButton = document.createElement("button");
    delButton.classList.add("deleteButton");
    const cloneButton = document.createElement("button");
    cloneButton.classList.add("cloneButton btn btn-warning");
    newTaskEl.innerHTML = value;
    newTaskEl.insertAdjacentElement("beforeend", delButton);
    newTaskEl.insertAdjacentElement("beforeend", cloneButton);
    console.log(newTaskEl);
    */
}

addTask.addEventListener("click", e => {
    e.preventDefault();
    const newTaskValue = document.getElementById('newTask').value;
    console.log(newTaskValue);
    const newTask = createNewTask(newTaskValue);
    taskList.insertAdjacentHTML("beforeend", newTask);

    localStorage.setItem("taskList", taskList.innerHTML);
});

taskList.addEventListener("click", e => {
    if (e.target.classList.contains("deleteButton")) {
        const taskItem = e.target.closest("li");
        taskItem.remove();

        localStorage.setItem("taskList", taskList.innerHTML);
    }

    if (e.target.classList.contains('cloneButton')) {
        const taskItem = e.target.closest("li");
        const clonedTaskItem = taskItem.cloneNode(true);
        taskItem.after(clonedTaskItem);

        localStorage.setItem("taskList", taskList.innerHTML);
    }
});

if (localStorage.getItem("taskList")) {
    taskList.innerHTML = localStorage.getItem("taskList");
}

clear.addEventListener("click", e => {
    localStorage.clear();
});
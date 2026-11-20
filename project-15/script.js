let taskInput = document.querySelector("#taskInput");
let addButton = document.querySelector("#addButton");
let taskCounter = document.querySelector("#taskCounter");
let taskList = document.querySelector("#taskList");

function updateCounter() {
    let count = taskList.querySelectorAll('li').length;
    taskCounter.textContent = count;
}

function addTask() {
    let text = taskInput.value.trim()

    if (text === "") {
        alert("Please enter a task");
        return;
    }
    let li = document.createElement("li");
    li.classList.add("task");
    let span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = text;

    let doneButton = document.createElement("button");
    doneButton.textContent = "Done";

    doneButton.addEventListener("click", () => {
        li.classList.toggle("done");
    })

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");

    editButton.addEventListener("click", () => {
        let newText = prompt("Edit task", span.textContent);
        if (newText === null) {
            return;
        }
        if (newText.trim() === "") {
            alert("Please enter a task");
            return;
        }
        span.textContent = newText.trim();
    });




    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => {
        let answer = confirm("Are you sure?");
        if (answer) {
            li.remove();
            updateCounter();
        }
    });




    li.append(span, doneButton, editButton, deleteButton);
    taskList.append(li);
    updateCounter();

    taskInput.value = '';
}

addButton.addEventListener("click", addTask);

let numberOfTasks = 0;
const form = document.getElementById("add-task-form");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    if (form.elements[0].value === "")
    {
        alert("Write a task!");
        return;
    }
    numberOfTasks = numberOfTasks + 1;
    let not = numberOfTasks;

    let newTask = document.createElement("p");
    newTask.className = "taskTexts";
    newTask.append(document.createTextNode(form.elements[0].value))

    let newTaskObject = document.createElement("div");
    newTaskObject.id = "task"+numberOfTasks.toString();
    newTaskObject.className = "taskObjects";

    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.id = "taskCheckbox"+numberOfTasks.toString();
    newCheckbox.className = "taskCheckboxes";
    newCheckbox.onclick = function() {taskCheckedFunction(not, newCheckbox.checked)};

    let newDeleteButton = document.createElement("input");
    newDeleteButton.type = "button";
    newDeleteButton.id = "taskDeleteButton"+numberOfTasks.toString();
    newDeleteButton.className = "deleteButtons";
    newDeleteButton.value = "delete";
    newDeleteButton.onclick = function() {deleteTaskFunction(not)};

    newTaskObject.appendChild(newCheckbox);
    newTaskObject.appendChild(newTask);
    newTaskObject.appendChild(newDeleteButton);


    let box = document.getElementById("tasks");
    box.appendChild(newTaskObject);


    form.elements[0].value="";
})

function deleteTaskFunction(not)
{
    let box = document.getElementById("tasks");
    let taskToDelete = document.getElementById("task" + not.toString())
    box.removeChild(taskToDelete);
}

function taskCheckedFunction(not, checked)
{
    let task = document.getElementById("task" + not.toString());
    if(checked)
    {
        task.style.color = "green";
        task.style.textDecoration = "line-through";
    }
    else {
        task.style.color = "indianred";
        task.style.textDecoration = "none";
    }
}
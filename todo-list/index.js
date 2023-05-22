document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addButton = document.getElementById("addButton");

    addButton.addEventListener("click", function() {
        addTask();
    });

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    }

    function createTaskItem(taskText) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const span = document.createElement("span");
        span.textContent = taskText;
        const button = document.createElement("button");
        button.textContent = "Delete";

        button.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(button);

        return li;
    }
});

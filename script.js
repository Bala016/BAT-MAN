function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    let taskList = document.getElementById("taskList");
    let row = document.createElement("tr");
    
    let checkboxCell = document.createElement("td");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        taskSpan.classList.toggle("completed", this.checked);
    });
    checkboxCell.appendChild(checkbox);
    
    let taskCell = document.createElement("td");
    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskCell.appendChild(taskSpan);
    
    let actionCell = document.createElement("td");
    let editInput = document.createElement("input");
    editInput.type = "text";
    editInput.style.display = "none";
    
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";
    editButton.addEventListener("click", function () {
        if (editInput.style.display === "none") {
            editInput.style.display = "inline";
            editInput.value = taskSpan.textContent;
            editButton.textContent = "Update";
        } else {
            taskSpan.textContent = editInput.value.trim();
            editInput.style.display = "none";
            editButton.textContent = "Edit";
        }
    });
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(row);
    });
    
    actionCell.appendChild(editInput);
    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);
    
    row.appendChild(checkboxCell);
    row.appendChild(taskCell);
    row.appendChild(actionCell);
    
    taskList.appendChild(row);
    taskInput.value = "";
}

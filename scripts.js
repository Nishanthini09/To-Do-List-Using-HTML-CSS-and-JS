document.getElementById("addForm").addEventListener("submit", addItem);

function addItem(e) {
    e.preventDefault();

    const itemInput = document.getElementById("item");
    const dueDateInput = document.getElementById("dueDate");

    const taskText = itemInput.value.trim();
    const dueDateText = dueDateInput.value;

    // Ensure the task text is provided
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const itemsList = document.getElementById("items");

    // Create a new list item
    const li = document.createElement("li");
    li.className = "list-group-item";

    // Construct the task information
    let taskInfo = `<strong>Task:</strong> ${taskText}`;

    // Include due date only if set
    if (dueDateText) {
        taskInfo += ` <br> <strong>Due Date:</strong> ${dueDateText}`;
    }

    li.innerHTML = taskInfo;

    // Create the complete button
    const completeButton = document.createElement("button");
    completeButton.className = "btn btn-success btn-sm float-right";
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", () => {
        li.classList.add("completed");
        completeButton.disabled = true;

        // Show congratulatory message
        const congratsMessage = document.getElementById("congratsMessage");
        congratsMessage.style.display = "block";
        setTimeout(() => {
            congratsMessage.style.display = "none";
        }, 4000);
    });

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm float-right";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        itemsList.removeChild(li);
    });

    // Append buttons to the list item
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    // Append the new task to the list
    itemsList.appendChild(li);

    // Clear the input fields
    itemInput.value = "";
    dueDateInput.value = "";

    // Display success message
    const successLabel = document.getElementById("lblsuccess");
    successLabel.textContent = "Task added successfully!!!";
    successLabel.style.display = "block";
    setTimeout(() => {
        successLabel.style.display = "none";
    }, 2000);

    // Disable submit button again
    document.getElementById("submit").disabled = true;
}

// Enable/Disable the submit button based on input
function toggleButton(input, buttonId) {
    const submitButton = document.getElementById(buttonId);
    submitButton.disabled = input.value.trim() === "";
}

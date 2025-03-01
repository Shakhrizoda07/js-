document.getElementById("addTaskButton").addEventListener("click", function () {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.textContent = taskText;

        
        taskElement.addEventListener("click", function () {
            this.remove();
        });

        document.getElementById("tasks").appendChild(taskElement);
        taskInput.value = ""; // Очистка поля
    }
});


document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
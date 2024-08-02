document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("You must write something!");
        return;
    }


const li = document.createElement("li")
li.textContent = taskInput.value;
li.addEventListener('click', () => {
    li.classList.toggle("completed");
    saveTasks();
});

    const removeBtn = document.createElement("button");
    removeBtn.textContent ="Remove";
    removeBtn.addEventListener("click", () => {
        taskList.removeChild(li);
        saveTasks();
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    

    taskInput.value = "";
    saveTasks();
};

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#taskList li').
        forEach((li) => {
            tasks.push({
                text: li.childNodes[0].textContent,
                completed: li.classList.contains("completed"),
            })
        })
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("TASKS")) || [];
        tasks.forEach((task) => {
            const i = document.createElement("li");
            li.textContent = task.text;
            if (task.completed) {
                li.classList.add("completed");
            }
            li.addEventListener("click", () => {
                li.classList.toggle("completed");
                saveTasks();
            });
            const removeBtn = document.createElement("button")
        })

    }
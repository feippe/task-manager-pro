// DOM elements
const form = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priorityInput");
const taskList = document.getElementById("taskList");

// Load tasks
let tasks = loadTasks();

// Render tasks
function render() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";
        li.innerHTML = `
            ${task.text} <strong>[${task.priority}]</strong>
            <button onclick="toggleTask(${index})">Done</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    render();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks(tasks);
    render();
}

// Add task
form.addEventListener("submit", e => {
    e.preventDefault();
    tasks.push({
        text: taskInput.value,
        priority: priorityInput.value,
        completed: false
    });
    saveTasks(tasks);
    taskInput.value = "";
    render();
});

render();

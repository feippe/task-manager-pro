const stats = document.getElementById("stats");
const highList = document.getElementById("highPriorityList");

const tasks = loadTasks();

const total = tasks.length;
const completed = tasks.filter(t => t.completed).length;
const highPriority = tasks.filter(t => t.priority === "High");

stats.innerHTML = `
Total tasks: <strong>${total}</strong><br>
Completed: <strong>${completed}</strong><br>
High Priority: <strong>${highPriority.length}</strong>
`;

highPriority.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.text;
    highList.appendChild(li);
});


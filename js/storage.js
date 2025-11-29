const loadTasks = () => {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
};

const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
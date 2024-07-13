//a
let tasks = [{
    id: 1,
    description: "House work",
    dueDate: "2 hour",
    status: "Complete"
}, {
    id: 2,
    description: "Office work",
    dueDate: "3 hour",
    status: "Not complete"
}, {
    id: 3,
    description: "Project",
    dueDate: "5 hour",
    status: "Half complete"
}];
console.log(tasks);

//b
class Task {
    constructor(id, description, dueDate, status) {
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
    };
};

//c
function addTask(id, description, dueDate, status) {
    const task = new Task(id, description, dueDate, status);
    tasks.push(task)
};
addTask(4, "outside work", "2 hours" , "Done");
console.log("addTask");
displayTasks();

function updateTask(taskId, newdueDate) {
    const task = tasks.find(function(task) {
        return task.id === taskId;
    });

    if (task) {
        task.dueDate = newdueDate;
    };
};
updateTask(2, 15);
console.log("updateTask");
displayTasks();

function removeTask(taskId) {
    tasks = tasks.filter(function(task) {
        if (task.id != taskId) {
            return true;
        };
    });

};
removeTask(1);
console.log("removeTask");
displayTasks();

function displayTasks() {
    tasks.forEach(function(task) {
        console.log(`${task.description} - ${task.dueDate} (${task.status})`);
    });
};






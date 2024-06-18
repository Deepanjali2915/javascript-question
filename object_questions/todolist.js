class Todo_list {
    constructor(id, work, time, status) {
        this.id = id;
        this.work = work;
        this.time = time;
        this.status = status;
    }
}

const list = [];

function add(id, work, time, status) {
    const todolist = new Todo_list(id, work, time, status);
    list.push(todolist)
}

function update(todolistId, newtime) {
    const todolist = list.find(todolist => todolist.id === todolistId);
    if (todolist) {
        todolist.time = newtime;
    }
}

function remove(todolistId) {
    const index = list.find(todolist => todolist.id === todolistId);
    list.splice(index, 2);
}

function display() {
    list.forEach(product => {
        console.log(+ product.id + "." + product.work + "-" + product.time + "(" + product.status + ")");
    });
}


add(1, "room", 2, "yes");
add(2, "dress", 4, "no");
add(3, "outside", 2, "yes");
console.log("add");
// console.log(list);
display();

update(2, 15);
console.log("update");
// console.log(list);
display();


remove(2);
console.log("remove");
// console.log(list);
display();

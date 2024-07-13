//a
let expenses = [{
    id: 1,
    name: "Laptop",
    amount: 45000,
    date: "08-02-2023"
}, {
    id: 2,
    name: "Mobile",
    amount: 65000,
    date: "07-12-2023"
}, {
    id: 3,
    name: "Charger",
    amount: 12000,
    date: "17-02-2023"
}];
console.log(expenses);

//b
class Expense {
    constructor(id, name, amount, date) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.date = date;
    };
};

//c
function addExpense(id, name, amount, date) {
    let expense = new Expense(id, name, amount, date);
    expenses.push(expense);
};
addExpense(4, "Mango", 200, "01-03-2023");

console.log("addExpense");
displayExpenses();


function updateExpense(expenseId, newDate) {
    let expense = expenses.find(function(expense){
        return expense.id === expenseId;
    }) 
    if (expense) {
        expense.date = newDate
    };
};

updateExpense(2, "10-03-2023");
console.log("updateExpense");
displayExpenses();

function removeExpense(expenseID) {
    expenses.splice(expenseID, 1);
}

removeExpense(3);
console.log("removeExpense");
displayExpenses();


function displayExpenses() {
    expenses.map(function(product) {
        console.log(`${product.name} - ${product.amount} (${product.date})`);
    });
};

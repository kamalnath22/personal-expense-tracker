// Initialize an empty array to hold expenses
let expenses = [];

// Function to update the expense list and total amount
function updateExpenseList() {
    const expenseList = document.getElementById("expenseList");
    const totalAmount = document.getElementById("totalAmount");
    expenseList.innerHTML = ""; // Clear existing list
    let total = 0;

    // Iterate through expenses and create list items
    expenses.forEach((expense, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="expense-name">${expense.name}</span>
            <span class="expense-amount">$${expense.amount.toFixed(2)}</span>
            <button onclick="removeExpense(${index})" class="remove-btn">Remove</button>
        `;
        expenseList.appendChild(li);
        total += expense.amount; // Add to total
    });

    totalAmount.innerText = total.toFixed(2); // Update total amount display
}

// Function to add an expense
function addExpense() {
    const expenseName = document.getElementById("expenseName").value;
    const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);

    // Validate inputs
    if (expenseName === "" || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert("Please enter a valid expense name and amount.");
        return;
    }

    // Add new expense to the array
    expenses.push({ name: expenseName, amount: expenseAmount });

    // Clear input fields
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";

    // Update the expense list and total
    updateExpenseList();
}

// Function to remove an expense
function removeExpense(index) {
    // Remove expense from the array by index
    expenses.splice(index, 1);

    // Update the expense list and total
    updateExpenseList();
}

// Attach event listener to the button
document.getElementById("addExpenseBtn").addEventListener("click", addExpense);

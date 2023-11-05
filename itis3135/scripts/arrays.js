let persons = [];
let salaries = [];

document.getElementById("name").focus();

function addSalary() {
    const name = document.getElementById("name").value;
    const salary = document.getElementById("salary").value;

    if (name.trim() === '' || isNaN(salary)) {
        alert("Please enter a valid name and numeric salary.");
        return;
    }

    persons.push(name);
    salaries.push(parseInt(salary));

    document.getElementById("name").value = '';
    document.getElementById("salary").value = '';

    displaySalary();
}

function displaySalary() {
    const table = document.querySelector("#results_table tbody");
    table.innerHTML = '';

    for (let i = 0; i < persons.length; i++) {
        const row = table.insertRow(table.rows.length);
        row.insertCell(0).textContent = persons[i];
        row.insertCell(1).textContent = salaries[i];
    }
}

function displayResults() {
    const average = document.getElementById("average");
    const highest = document.getElementById("highest");

    if (salaries.length > 0) {
        const sum = salaries.reduce((total, salary) => total + salary);
        const avg = sum / salaries.length;
        const max = Math.max(...salaries);

        average.textContent = avg.toFixed(2);
        highest.textContent = max;
    } else {
        average.textContent = 0;
        highest.textContent = 0;
    }
}

document.getElementById("add").addEventListener("click", addSalary);
document.getElementById("display").addEventListener("click", displayResults);

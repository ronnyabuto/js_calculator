let history = [];

function addToHistory(num1, num2, operator, result) {
    const entry = {
        num1: num1,
        num2: num2,
        operator: operator,
        result: result,
        timestamp: new Date().toLocaleTimeString()
    };
    history.push(entry);
}

function add(num1, num2) {
    const result = num1 + num2;
    addToHistory(num1, num2, "+", result);
    return result;
}

function subtract(num1, num2) {
    const result = num1 - num2;
    addToHistory(num1, num2, "-", result);
    return result;
}

function multiply(num1, num2) {
    const result = num1 * num2;
    addToHistory(num1, num2, "*", result);
    return result;
}

function divide(num1, num2) {
    if (num2 === 0) {
        console.error("Error: Cannot divide by zero.");
        return null;
    }
    const result = num1 / num2;
    addToHistory(num1, num2, "/", result);
    return result;
}

function displayHistory() {
    console.log("\n--- Calculation History ---");
    
    if (history.length === 0) {
        console.log("No calculations performed yet.");
        return;
    }

    history.forEach((entry, index) => {
        console.log(
            `${index + 1}. [${entry.timestamp}] ${entry.num1} ${entry.operator} ${entry.num2} = ${entry.result}`
        );
    });
    console.log("---------------------------\n");
}

console.log("Adding 5 + 10:", add(5, 10));
console.log("Multiplying 4 * 4:", multiply(4, 4));
console.log("Subtracting 10 - 3:", subtract(10, 3));
console.log("Dividing 20 / 2:", divide(20, 2));
displayHistory();

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    displayHistory,
    history
};

// ✅ Step 1: Create arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Cannot divide by 0";
    }
    return number1 / number2;
}

// ✅ Step 2: Function to get input values
function getNumbers() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    return { num1, num2 };
}

// ✅ Step 3: Update the result display
function showResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// ✅ Step 4: Add event listeners to buttons
document.getElementById('add').addEventListener('click', function() {
    const { num1, num2 } = getNumbers();
    showResult(add(num1, num2));
});

document.getElementById('subtract').addEventListener('click', function() {
    const { num1, num2 } = getNumbers();
    showResult(subtract(num1, num2));
});

document.getElementById('multiply').addEventListener('click', function() {
    const { num1, num2 } = getNumbers();
    showResult(multiply(num1, num2));
});

document.getElementById('divide').addEventListener('click', function() {
    const { num1, num2 } = getNumbers();
    showResult(divide(num1, num2));
});

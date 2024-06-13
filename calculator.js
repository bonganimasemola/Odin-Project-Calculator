function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

let firstNumber = null;
let secondNumber = null;
let operator = null;

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}

let displayValue = '0';

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (!isNaN(value)){
            if (displayValue === '0'){
                displayValue = value;
            } else {
                displayValue += value;
            }
        } else if (value === 'C'){
            displayValue = '0';
            firstNumber = null;
            secondNumber = null;
            operator = null;
        }
    })
})
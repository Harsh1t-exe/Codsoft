let display = document.getElementById('display');
let currentInput = '0';
let operator = '';
let operand1 = 0;
let operand2 = 0;
let result = 0;

function appendToDisplay(value) {
    if (currentInput === '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    operator = '';
    operand1 = 0;
    operand2 = 0;
    result = 0;
    display.textContent = currentInput;
}

function operate(op) {
    operator = op;
    operand1 = parseFloat(currentInput);
    currentInput = '0';
}

function calculate() {
    operand2 = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            return;
    }
    display.textContent = result;
    currentInput = '0';
}

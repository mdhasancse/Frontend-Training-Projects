let currentInput = '';

function appendNumber(number) {
    console.log(number);
    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    currentInput += ` ${operation} `;
    updateDisplay();
}

function clearInput() {
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        currentInput = `${currentInput} = ${result}`;
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}

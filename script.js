function display(value) {
    const display = document.getElementById("display");
    const currentText = display.value;
    if (isOperator(value) && currentText === '') {
        if (value !== '-') {
            return;
        } else {
            display.value = value;
            return;
        }
   }
    if (isOperator(value) && isOperator(currentText[currentText.length - 1])) {
        return;// Do not allow multiple operators together
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}
//function to calculate square root
function sqrtDisplay() {
    const display = document.getElementById("display");
    const value = display.value;
    const result = Math.sqrt(value);
    display.value = result;
    }


function deleteDisplay(){
    document.getElementById('display').value = document.getElementById('display').value.slice(0, -1) ;
}

function calculateResult() {
    const display = document.getElementById("display");
    const expression = display.value;

    try {
        const result = calculate(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function calculate(expression) {
    const numbers = expression.split(/[\+\-\*\/\%]/).map(Number);
    const operators = expression.split(/[0-9.]+/).filter(op => op !== "");

    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const number = numbers[i + 1];

        if (operator === '+') result += number;
        else if (operator === '-') result -= number;
        else if (operator === '*') result *= number;
        else if(value === '.' && currentText.split(/[\+\-\*\/]/).pop().includes('.')) {
            return;
        }
        else if (operator === '/') {
            if (number === 0) throw new Error('Division by zero');
            result /= number;
        }
    }
    return result;
}
//returns true or false
function isOperator(character) {
    return ['+', '-', '*', '/'].includes(character);
}

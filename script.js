const display = document.getElementById('display');
let currentValue = '';
let operator = null;
let firstValue = null;

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const value = this.textContent;

        if (!isNaN(value) || value === '.') {
            currentValue += value;
            display.value = currentValue;
        } else if (value === 'C') {
            currentValue = '';
            operator = null;
            firstValue = null;
            display.value = '';
        } else if (value === '⌫') {
            currentValue = currentValue.slice(0, -1);
            display.value = currentValue;
        } else if (value === '=') {
            if (operator && firstValue !== null && currentValue !== '') {
                currentValue = calculate(firstValue, operator, parseFloat(currentValue));
                display.value = currentValue;
                firstValue = null;
                operator = null;
            }
        } else {
            operator = value;
            firstValue = parseFloat(currentValue);
            currentValue = '';
        }
    });
});

function calculate(first, operator, second) {
    switch (operator) {
        case '÷':
            return first / second;
        case '×':
            return first * second;
        case '−':
            return first - second;
        case '+':
            return first + second;
        default:
            return second;
    }
}

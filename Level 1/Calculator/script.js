// script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let operand1 = '';

    const updateDisplay = () => {
        display.textContent = currentInput || '0';
    };

    const handleButtonClick = (e) => {
        const value = e.target.getAttribute('data-value');

        if (value >= '0' && value <= '9' || value === '.') {
            currentInput += value;
            updateDisplay();
        } else if (value === 'C') {
            currentInput = '';
            operator = '';
            operand1 = '';
            updateDisplay();
        } else if (value === '=') {
            if (operand1 && currentInput) {
                try {
                    const result = eval(`${operand1} ${operator} ${currentInput}`);
                    currentInput = result.toString();
                    operator = '';
                    operand1 = '';
                    updateDisplay();
                } catch (e) {
                    display.textContent = 'Error';
                }
            }
        } else {
            if (currentInput) {
                operand1 = currentInput;
                currentInput = '';
                operator = value;
                updateDisplay();
            }
        }
    };

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});


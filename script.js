const weightInput = document.getElementById('weight');
const outputDiv = document.getElementById('output');
const swapButton = document.getElementById('swap');
const clearButton = document.getElementById('clear');
const inputUnitSpan = document.getElementById('inputUnit'); // New element
const outputUnitSpan = document.getElementById('outputUnit'); // New element

let currentConversion = 'kgToLbs'; // Default conversion direction

function convertWeight() {
    const weight = parseFloat(weightInput.value);

    if (isNaN(weight)) {
        outputDiv.textContent = '0.00';
        return;
    }

    let result;
    if (currentConversion === 'kgToLbs') {
        result = weight * 2.20462;
    } else {
        result = weight / 2.20462;
    }

    outputDiv.textContent = result.toFixed(2);
}

function swapConversionDirection() {
    if (currentConversion === 'kgToLbs') {
        currentConversion = 'lbsToKg';
        inputUnitSpan.textContent = 'Pounds';
        outputUnitSpan.textContent = 'Kilograms';
    } else {
        currentConversion = 'kgToLbs';
        inputUnitSpan.textContent = 'Kilograms';
        outputUnitSpan.textContent = 'Pounds';
    }
    convertWeight(); // Convert based on the new direction
}

function clearInput() {
    weightInput.value = '';
    outputDiv.textContent = '0.00';
}

// Event listeners
weightInput.addEventListener('input', convertWeight);
swapButton.addEventListener('click', swapConversionDirection);
clearButton.addEventListener('click', clearInput);

// Set initial units on page load
inputUnitSpan.textContent = 'Kilograms';
outputUnitSpan.textContent = 'Pounds';

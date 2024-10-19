import { parseMathExpression } from '../src/mathParser.js'; // Import the parseMathExpression function

let calculationHistory = []; // Array to store calculation history
let memoryValue = 0; // Memory store

// Function to calculate and display result
function calculate() {
    try {
        const expression = document.getElementById('expressionInput').value; // Use the correct input ID
        const result = parseMathExpression(expression); // Use the imported function
        document.getElementById('result').innerText = result;
        
        // Add to history
        calculationHistory.push(`${expression} = ${result}`);
        updateHistory();  // Function to update the history display
    } catch (error) {
        document.getElementById('result').innerText = 'Error: ' + error.message; // Display error message
    }
}

// Save calculations to localStorage
function saveToHistory(expression, result) {
    let history = JSON.parse(localStorage.getItem('calcHistory')) || [];
    history.push({ expression, result });
    localStorage.setItem('calcHistory', JSON.stringify(history));
}

// Display calculation history
function displayHistory() {
    let history = JSON.parse(localStorage.getItem('calcHistory')) || [];
    const historyList = document.getElementById('history');
    historyList.innerHTML = ''; // Clear previous entries
    history.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `${entry.expression} = ${entry.result}`;
        historyList.appendChild(listItem);
    });
}

// Clear history
function clearHistory() {
    calculationHistory = []; // Clear the history array
    updateHistory(); // Update the displayed history
}

// Initialize
document.addEventListener('DOMContentLoaded', displayHistory);

// Function to update the displayed history
function updateHistory() {
    const historyElement = document.getElementById('history');
    historyElement.innerHTML = ''; // Clear the current list
    calculationHistory.forEach(item => {
        const historyItem = document.createElement('li');
        historyItem.textContent = item; // Add each history item to the list
        historyElement.appendChild(historyItem);
    });
}

// Memory add
function memoryAdd() {
    const currentResult = parseFloat(document.getElementById('result').innerText);
    if (!isNaN(currentResult)) {
        memoryValue += currentResult;
        alert('Added to memory: ' + memoryValue);
    }
}

// Memory subtract
function memorySubtract() {
    const currentResult = parseFloat(document.getElementById('result').innerText);
    if (!isNaN(currentResult)) {
        memoryValue -= currentResult;
        alert('Subtracted from memory: ' + memoryValue);
    }
}

// Memory recall
function memoryRecall() {
    document.getElementById('expressionInput').value = memoryValue; // Use the correct input ID
    alert('Recalled from memory: ' + memoryValue);
}

// Add event listener for keyboard support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculate(); // Calculate on Enter
    }
});

// Toggle theme between light and dark mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// In your script.js file
window.toggleTheme = function() {
    const body = document.body;
    body.classList.toggle('dark-mode');
};

window.memoryAdd = function() {
    const currentResult = parseFloat(document.getElementById('result').innerText);
    if (!isNaN(currentResult)) {
        memoryValue += currentResult;
        alert('Added to memory: ' + memoryValue);
    }
};

window.memorySubtract = function() {
    const currentResult = parseFloat(document.getElementById('result').innerText);
    if (!isNaN(currentResult)) {
        memoryValue -= currentResult;
        alert('Subtracted from memory: ' + memoryValue);
    }
};

window.memoryRecall = function() {
    document.getElementById('expressionInput').value = memoryValue; // Use the correct input ID
    alert('Recalled from memory: ' + memoryValue);
};

import React, { useState } from 'react';
import { parseMathExpression } from '../mathParser'; // Adjust the path to go up one directory

const Calculator = ({ onCalculate }) => {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleCalculate = () => {
        try {
            const result = parseMathExpression(input); // Use the custom parser
            onCalculate(result, input);
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    return (
        <div>
            <h2>Calculator</h2>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter your problem..."
            />
            <button onClick={handleCalculate}>Calculate</button>
        </div>
    );
};

export default Calculator;

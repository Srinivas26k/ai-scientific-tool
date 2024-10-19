import React, { useState } from 'react';

const Calculator = ({ onCalculate }) => {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleCalculate = () => {
        try {
            // Using eval for simplicity; consider a proper parser for production
            const result = eval(input);
            onCalculate(result, input);
        } catch (error) {
            alert('Invalid expression');
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

import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleCalculate = () => {
        // Placeholder for calculation logic
        alert(`Calculating: ${input}`);
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

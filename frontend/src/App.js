import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Display from './components/Display';
import MethodDetails from './components/MethodDetails';

function App() {
    const [result, setResult] = useState(null);
    const [input, setInput] = useState('');

    const handleCalculate = (result, input) => {
        setResult(result);
        setInput(input);
    };

    return (
        <div className="App">
            <h1>AI Scientific Tool</h1>
            <Calculator onCalculate={handleCalculate} />
            <Display result={result} />
            <MethodDetails input={input} />
        </div>
    );
}

export default App;

import React from 'react';
import Calculator from './components/Calculator';
import Display from './components/Display';
import MethodDetails from './components/MethodDetails';
import './App.css';


function App() {
    return (
        <div className="App">
            <h1>AI Scientific Tool</h1>
            <Calculator />
            <Display />
            <MethodDetails />
        </div>
    );
}

export default App;

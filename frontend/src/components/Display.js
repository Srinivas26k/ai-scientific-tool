import React from 'react';

const Display = ({ result }) => {
    return (
        <div>
            <h2>Results</h2>
            {result !== null ? <p>Result: {result}</p> : <p>Results will be displayed here.</p>}
        </div>
    );
};

export default Display;

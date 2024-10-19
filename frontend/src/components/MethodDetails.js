import React from 'react';

const MethodDetails = ({ input }) => {
    return (
        <div>
            <h2>Method Details</h2>
            {input ? <p>Method used: {input}</p> : <p>Details of the methods used will be displayed here.</p>}
        </div>
    );
};

export default MethodDetails;

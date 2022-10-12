import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    
    const data = useLoaderData(1);
    console.log(data)
    return (
        <div>
            <h1>this is quiz</h1>

        </div>
    );
};

export default Quiz;
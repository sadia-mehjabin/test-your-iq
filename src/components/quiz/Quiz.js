import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    
    const data = useLoaderData();
    const array = data.data.questions;
    // console.log(data.data.questions)
    return (
        <div>
            <h1>this is quiz</h1>
            {
            array.map(d => <h2>{d.question}</h2>)
            }
        </div>
    );
};

export default Quiz;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDisplay from '../quiz-display/Quiz-display';

const Quiz = () => {
    
    const data = useLoaderData();
    const array = data.data.questions;
    console.log()
    return (
        <div>
            <h1>{data.data.name}</h1>
            {
            array.map(item => <QuizDisplay
            key={data.data.id}
            item={item}
            ></QuizDisplay>)
            }
        </div>
    );
};

export default Quiz;
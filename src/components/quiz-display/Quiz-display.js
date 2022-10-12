import React from 'react';

const QuizDisplay = ({item}) => {
    const {question, options} = item;
    const input = options.map(option=> option);
    return (
        <div>
            <h3>{question}</h3>
            <ul>
            <input type="radio" value={input[0]} name="quiz" /> {input[0]} <br />
            <input type="radio" value={input[1]} name="quiz" /> {input[1]} <br />
            <input type="radio" value={input[2]} name="quiz" /> {input[2]} <br />
            <input type="radio" value={input[3]} name="quiz" /> {input[3]} <br />

            </ul>

        </div>
    );
};

export default QuizDisplay;
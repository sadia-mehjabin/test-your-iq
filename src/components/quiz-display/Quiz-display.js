import React from 'react';

const QuizDisplay = ({item}) => {
    const {question, options} = item;
    const input = options.map(option=> option);
    const optionHandler = (id)=> {
       if(id === item.correctAnswer){
        alert('this is right')
        } 
        else{
            alert('this is wrong')
        }
    }
    
    return (
        <div>
            <h3>{question}</h3>
            <ul>
            <input type="radio" value={input[0]} onClick={()=>optionHandler(input[0])} name="quiz" /> {input[0]} <br />
            <input type="radio" value={input[1]} onClick={()=>optionHandler(input[1])} name="quiz" /> {input[1]} <br />
            <input type="radio" value={input[2]} onClick={()=>optionHandler(input[2])} name="quiz" /> {input[2]} <br />
            <input type="radio" value={input[3]} onClick={()=>optionHandler(input[3])} name="quiz" /> {input[3]} <br />

            </ul>

        </div>
    );
};

export default QuizDisplay;
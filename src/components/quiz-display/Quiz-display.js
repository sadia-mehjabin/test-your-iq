import React from 'react';
import './quizDisplay.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/20/solid'

const QuizDisplay = ({item}) => {
    const {question, options} = item;
    const input = options.map(option=> option);
    // const notify = () => 
    const optionHandler = (id)=> {
       if(id === item.correctAnswer){
        toast("this is right");
        } 
        else{
            toast("this is wrong");  
        }
    }
    const eyeButtonHandler = ()=>{
        toast(item.correctAnswer)
    }
    
    return (
        <div>
            <h3>{question}<EyeIcon className='eyebutton' onClick={eyeButtonHandler}></EyeIcon></h3>
            <ul>
            <input type="radio" value={input[0]} onClick={()=>optionHandler(input[0])} name="quiz" /> {input[0]} <br />
            <input type="radio" value={input[1]} onClick={()=>optionHandler(input[1])} name="quiz" /> {input[1]} <br />
            <input type="radio" value={input[2]} onClick={()=>optionHandler(input[2])} name="quiz" /> {input[2]} <br />
            <input type="radio" value={input[3]} onClick={()=>optionHandler(input[3])} name="quiz" /> {input[3]} <br />
            <ToastContainer></ToastContainer>

            </ul>

        </div>
    );
};

export default QuizDisplay;
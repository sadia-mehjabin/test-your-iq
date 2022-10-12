import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './topicDataLoader.css'

const TopicsDataLoader = ({topic}) => {
    const {name, logo, total, id} = topic;
    
    
        // fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
        // .then(res => res.json()
        // .then(data =>console.log(data) ))
        
    
    const idHandlerButton = () => {
        // console.log(dataLoader)
        // dataLoader()
        
    }
    

    // const idHandlerButton = async () => {
    //     const loadData = await fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
    //     const loadDataurl = await loadData.json()
    //     const array1 = loadDataurl.data.questions;
    //     console.log(array1);
    //     return array1;
        
    // }
//    
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
           {/* <Link to={`/Quiz/${id}`}>  */}
           {/* <button onClick={()=>idHandlerButton()}>Practice Now</button> */}
           {/* </Link> */}
           <Link to={`/quiz/${id}`}>Practice</Link>
            <p>Total Quizes : {total} </p>
            
        </div>
    );
};

export default TopicsDataLoader;
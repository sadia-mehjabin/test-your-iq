import React, { useEffect } from 'react';
import './topicDataLoader.css'
const TopicsDataLoader = ({topic}) => {
    const {name, logo, total, id} = topic;
    
    const idHandlerButton = async () => {
       const loadData = await fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
       const loadDataurl = await loadData.json()
        console.log(loadDataurl);
    }
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            
            <button onClick={idHandlerButton}>Practice Now</button>
            
            <p>Total Quizes : {total} </p>
            
        </div>
    );
};

export default TopicsDataLoader;
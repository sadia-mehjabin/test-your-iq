import React from 'react';
import './topicDataLoader.css'
const TopicsDataLoader = ({topic}) => {
    const {name, logo, total} = topic;
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <button>{name}</button>
            <p>Total Quizes : {total} </p>
            
        </div>
    );
};

export default TopicsDataLoader;
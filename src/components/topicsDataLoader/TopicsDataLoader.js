import React from 'react';
import { Link } from 'react-router-dom';
import './topicDataLoader.css'

const TopicsDataLoader = ({topic}) => {
    const {name, logo, total, id} = topic;
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <Link to={`/quiz/${id}`} className='topic-link'>Start Practice</Link>
            <p>Total Quizes : {total} </p>
            
        </div>
    );
};

export default TopicsDataLoader;
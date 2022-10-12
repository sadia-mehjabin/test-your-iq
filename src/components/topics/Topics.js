import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicsDataLoader from '../topicsDataLoader/TopicsDataLoader';
import './topics.css'

const Topics = () => {
    const topics = useLoaderData();
    
 
    const topicArray = topics.data;
    const id = 1;
    // const dataLoader = useLoaderData({id});
    //    console.log(dataLoader)
    return (
        <div className='topic-container'>
            {
                topicArray.map(topic=> <TopicsDataLoader
                key={topic.id}
                topic={topic}
                ></TopicsDataLoader>)
            }
        </div>
    );
};

export default Topics;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../topics/Topics';
const Home = () => {
    const topics = useLoaderData();
    const topicArray = topics.data;
    console.log(topicArray)
    return (
        <div>
            <h2>this is home</h2>
            {
                topicArray.map(topic=> <Topics
                key={topic.id}
                topic={topic}
                ></Topics>)
            }
        </div>
    );
};

export default Home;
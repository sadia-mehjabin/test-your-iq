import React from 'react';


const Topics = ({topic}) => {
    console.log(topic.length)
    const {name, id, logo, total} = topic;
    return (
        <div>
            <img src={logo} alt="" />
            <h3>Topics Name: {name}</h3>
            <p>Total Quizes: {total}</p>
        </div>
    );
};

export default Topics;
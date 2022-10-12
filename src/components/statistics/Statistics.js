import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const dataLoader = useLoaderData()
    const data = dataLoader.data;
    
    // console.log(arr)

    return (
        <div>
            <h2>this is statistic</h2>
            <LineChart width={400} height={500} data={data.map(b => b)}>
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Statistics;
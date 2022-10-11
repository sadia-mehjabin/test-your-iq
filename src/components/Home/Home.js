import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img from './gettyimages-1200298816-170667a.jpg'
const Home = () => {
    // console.log(img)
    return (
        <div className='home-div'>
            <h2>this is home</h2>
            <img src={img} alt="" />
            <h3>Do You Love To Code? Are You Fond Of Programming? Then Check your Coding Skill. Challenge Yourself. Pass The IQ Testes. And Be Your Own King .  </h3>
            
            
        </div>
    );
};

export default Home;
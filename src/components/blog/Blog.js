import React from 'react';
import './blog.css'
const Blog = () => {
    return (
        <div>
            <h1>Welcome To Blog Page</h1>
            <div className='blog'>
                <h3>Question: What Is The Purpose Of React Router?</h3>
                <p>Ans: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='blog'>
                <h3>Question: How Does Context Api Works?</h3>
                <p>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='blog'>
                <h3>Question: What Is The Uses Of UseRef?</h3>
                <p>Ans: The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. </p>
            </div>
            
        </div>
    );
};

export default Blog;
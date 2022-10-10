import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h2>Test Your IQ</h2>
            <div className="routes">
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/statistics'>Statistics</Link>
            <Link className='link' to='/topics'>Topics</Link>
            <Link className='link' to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;
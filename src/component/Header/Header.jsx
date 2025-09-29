import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='py-[28px] shadow-[0_4px_6px_rgba(0,0,0,0.1)]'>
            <div className='container flex justify-between items-center'>
                <nav className='flex items-center gap-[15px]'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/gallery">Gallery</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/users">Users</NavLink>
                </nav>
                <button className='btn'>Sign In</button>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
            <NavLink className={({isActive})=> isActive ?'active':undefined} to='/home'>Home </NavLink>
            <NavLink to='/about'>About </NavLink>
            <NavLink to='/products'>Product</NavLink>
            <NavLink to='/friends'>Friends</NavLink>
            <NavLink to='/posts'>Post</NavLink>
            </nav>
            <h5>Here is The Header Section</h5>
        </div>
    );
};

export default Header;
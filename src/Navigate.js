import React from 'react'
import './App.css';
import logo from './WaynesWorld.png';
import { Link } from 'react-router-dom';


const Navigate = () => {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return (
        <nav >
            <Link to='/waynesworld'>
                <img src={logo} alt="logo" width='170' />
            </Link>
            <ul className='nav-links'>
                <Link style={navStyle} to='/waynesworld'>
                    <li> Home </li>
                </Link>
                |
                <Link style={navStyle} to='/form'>
                    <li> Form </li>
                </Link>
                |
                <Link style={navStyle} to='/movies'>
                    <li> Movies </li>
                </Link>
                |
                <Link style={navStyle} to='/table'>
                    <li> Table </li>
                </Link>
                |
                <Link style={navStyle} to='/tempcontrol'>
                    <li> Temperature </li>
                </Link>
                |
                <Link style={navStyle} to='/quiz'>
                    <li> Quiz </li>
                </Link>
                |
                <Link style={navStyle} to='/shoppinglist'>
                    <li> Shopping </li>
                </Link>
                |
                <Link style={navStyle} to='/contactslist'>
                    <li> Contacts </li>
                </Link>
                |
                <Link style={navStyle} to='/shop'>
                    <li> DynamicNav </li>
                </Link>
                |
                <Link style={navStyle} to='/about'>
                    <li> About </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navigate;

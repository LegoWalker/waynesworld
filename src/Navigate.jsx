import React, { useState, useEffect } from 'react'
import './App.css';
import ContactsList from './ContactCards/ContactsList';
import TempControl from './TempControl/TempControl';


const Navigate = () => {

  return(
    <nav >
        <h3>Logo</h3>
        <ul className='nav-links'>
            <li>About</li>
            <li>Contacts</li>
            <li>Temperature</li>
        </ul>
    </nav>
  );
}

export default Navigate;

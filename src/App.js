import React, { useState, useEffect } from 'react'
import About from './About';
import './App.css';
import ContactsList from './ContactCards/ContactsList';
import Navigate from './Navigate';
import TempControl from './TempControl/TempControl';

const App = () => {

  return(
    <div>
      <Navigate />
      <br/>
      <About />
      <br/>
      <TempControl />
      <br/>
      <ContactsList />
      <br/>
    </div>
  );
}

export default App;

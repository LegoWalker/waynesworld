import React, { useState, useEffect } from 'react'
import About from './About';
import './App.css';
import ContactsList from './ContactCards/ContactsList';
import Navigate from './Navigate';
import TempControl from './TempControl/TempControl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  return(
    <Router>
      <div>
          <Navigate />
          <Switch>
            <Route path="/waynesworld" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/tempcontrol" component={TempControl}/>
            <Route path="/contactslist" component={ContactsList}/>        
          </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default App;

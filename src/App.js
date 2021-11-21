import React from 'react'
import About from './About';
import './App.css';
import ContactsList from './ContactCards/ContactsList';
import Shop from './DynamicNav/Shop'
import ItemDetail from './DynamicNav/ItemDetail'; 
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
            <Route path="/shop" exact component={Shop}/>
            <Route path="/shop/:id" component={ItemDetail}/>
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

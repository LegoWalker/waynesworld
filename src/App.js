import React from 'react';
import About from './About';
import './App.css';
import ShoppingList from './ShoppingList/ShoppingList';
import ContactsList from './ContactCards/ContactsList';
import Shop from './DynamicNav/Shop';
import Form from './Forms/Form';
import ItemDetail from './DynamicNav/ItemDetail';
import Navigate from './Navigate';
import TempControl from './TempControl/TempControl';
import Quiz from './Quiz/Quiz';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Movies from './Movies/Movies';
import Table from './TableExample/Table';

const App = () => {

  return (
    <Router>
      <div>
        <Navigate />
        <Switch>
          <Route path="/waynesworld" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/tempcontrol" component={TempControl} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/shoppinglist" component={ShoppingList} />
          <Route path="/contactslist" component={ContactsList} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
          <Route path="/form" component={Form} />
          <Route path="/movies" component={Movies} />
          <Route path="/table" component={Table} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <h3>Version 3.0</h3>
    </div>
  );
}

export default App;

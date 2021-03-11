import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router,  Switch,Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ContextArtWork from './components/contextArtWork';
import CartPage from './components/CartPage';
import Checkout from './components/Checkout';
import './components/styles/style.css'

import { NavBar } from './components/NavBar';



class App extends Component {
  render() { 
    return (
      <Router >
      <div className="container">
     <NavBar/>
      <Switch>
      <Route exact path='/'><HomePage/></Route>
      <Route exact path='/login' component={LoginPage}></Route>
      <Route exact path='/register' component={RegisterPage}></Route>
    <Route path='/artwork/:id' component={ContextArtWork}></Route>
      <Route exact path='/cart'><CartPage/></Route>
       <Route exact path='/Checkout'><Checkout/></Route>
     
     </Switch>
      </div>
      </Router>
    );
  }
}

export default App;

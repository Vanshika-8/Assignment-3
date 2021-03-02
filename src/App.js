import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,  Switch,Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ArtWork from './components/Artwork';
import CartPage from './components/CartPage';
// import Checkout from './components/Checkout';
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
      <Route exact path='/login'><LoginPage/></Route>
      <Route exact path='/register'><RegisterPage/></Route>
      <Route path='/artwork/:id' component={ArtWork}></Route>
      <Route exact path='/cart'><CartPage/></Route>
      {/* <Route exact path='/Checkout'><Checkout/></Route>*/}
     
     </Switch>
      </div>
      </Router>
    );
  }
}

export default App;

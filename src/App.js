import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch,Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ArtWork from './components/Artwork';
import CartPage from './components/CartPage';
// import Checkout from './components/Checkout';
import './components/styles/style.css'
class App extends Component {
  render() {
    return (
      <Router >
      <div className="container">
      <nav className="navBar">
      <ul className="navBar__list">
      <li ><Link className="redirecting__links" to='/'>Home</Link></li>
      <li><Link className="redirecting__links" to='/login'>Login</Link></li>
      <li><Link className="redirecting__links" to='/register'>Register</Link></li>
      <li><Link className="redirecting__links" to='/artwork'>Art-Work</Link></li>
      <li><Link className="redirecting__links" to='/cart'>Cart</Link></li>
     
     {/* <li><Link className="redirecting__links"  to='/Checkout'>Checkout</Link></li> */}
      </ul>
      </nav>
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

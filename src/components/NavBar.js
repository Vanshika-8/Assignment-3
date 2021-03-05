import React from 'react';
import '../components/styles/style.css'
import { Logo,ShoppingBag } from '../reusableComponents/Logo';
import { useLocation, NavLink } from 'react-router-dom';

export const NavBar=()=>{
     let {pathname}=useLocation()

  

return(
    <nav className="navBar">
    <ul className="navBar__list">
    <div className="logo">
   <NavLink  to='/'><Logo /></NavLink> 
    <span className="logo__name">Galleria</span>
    </div>
  <li><NavLink exact activeStyle={{color:'red'}} className="redirecting__links " to='/'>Art-Work</NavLink></li>
    <li><NavLink exact activeStyle={{color:'red'}} className="redirecting__links" to='/login'>Login</NavLink></li>
    <li><NavLink exact  activeStyle={{color:'red'}} className="redirecting__links" to='/register'>Register</NavLink></li>
     <li><NavLink  exact  to='/cart' 
     className={pathname === '/cart' ? 'redirecting__links shoppingLink' : 'redirecting__links activeLink'} >
     <ShoppingBag /></NavLink></li>
   
    </ul> 
    </nav>

)
}

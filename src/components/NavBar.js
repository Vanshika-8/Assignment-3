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
    <Logo />
    <span className="logo__name">Galleria</span>
    </div>
  {/* <li ><Link className="redirecting__links" to='/'>Home</Link></li>*/} 
  <li><NavLink exact activeClassName="activeLink" className="redirecting__links" to='/'>Art-Work</NavLink></li>
    <li><NavLink exact activeClassName="activeLink" className="redirecting__links" to='/login'>Login</NavLink></li>
    <li><NavLink exact  activeClassName="activeLink" className="redirecting__links" to='/register'>Register</NavLink></li>
     <li><NavLink  exact className="redirecting__links" to='/cart' 
     className={pathname === '/cart' ? 'active__shoppingLink' : 'activeLink'} ><ShoppingBag /></NavLink></li>
   
   {/* <li><Link className="redirecting__links"  to='/Checkout'>Checkout</Link></li> */}
    </ul> 
    </nav>

)
}

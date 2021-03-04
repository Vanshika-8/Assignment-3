import React, { Component } from 'react';
import {  FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { Arrow } from '../reusableComponents/Logo';
class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems:[]
        }
    }

   componentDidMount(){
     const itemsInCart=this.getStorage('data')
     console.log(itemsInCart)
       if(itemsInCart.length > 0){
        this.setState({
            cartItems:itemsInCart
        })
       }
     
  }

    cartItems=()=>{
        return(
            <span>{this.state.cartItems.map((item) => {
                return <div className="cart__container" key={item.id}>
                    <div >
                        <img className="cart__image"
                            src={item.path}
                            alt={item.name} /></div>
                    <div className="cart__artname-genre" >
                        <span className="artname-cart">{item.name}</span>
                        <span className="artname-genre">Genre:{item.genre}</span>
                        <div className="cart__price-count">
                            <div className="count">
                                <FaMinus className="minus__items" />
                                <span className="art-count">{item.count}</span>
                                <FaPlus className="plus__items" />
                            </div>
                            <span className="art-price">${item.price}</span></div>
                    </div>  </div>
            })}</span>
        )
    }

    startShopping=()=>{
        return(
            <div className="shopping__items">
            <Link className="continueShopping " to='/'><Arrow className="arrow__logo" /><span>Continue Shopping</span></Link>
                </div>
            
        )
    }

    shoppingCart=()=>{
        return(
    <React.Fragment>
            <div className="total__price-shopping">
            <span className="heading__total">Total</span>
                  <span className="total">${this.getStorage('data').map(item=>item.price).reduce((acc,total)=>{
                return acc+total
            },0)}</span>
            </div>
            </React.Fragment>
        )
    }


    checkout=()=>{
        return(
            <React.Fragment>
            <div className="checkout"><Link className="continueShopping" to='/Checkout'><Arrow className="arrow__logo" /><span>Checkout</span></Link></div>
            </React.Fragment>
        )
    }


    getStorage = (key) => {
        const result = localStorage.getItem(key)
        if (result) {
            return JSON.parse(result)
        } else {
            return []
        }
    }
    
  clearStorage=(key)=>{
      const res=localStorage.getItem(key)
      if(res===null){
          return <div style={{display:'flex' , flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'75px' }}>
         <div><h2 >The Cart is empty</h2></div> 
         <div>{this.startShopping()}</div> 
          </div>
         
      }

  }

    render() {
 
 
        return (
            <div className="cartpage">
            <h1 className="cart__heading">Cart</h1>
                   {this.state.cartItems.length > 0  &&    this.cartItems()}
               {this.state.cartItems.length>0 ? this.shoppingCart() :''}
               {this.state.cartItems.length>0 ? this.startShopping() : ''}
               {this.state.cartItems.length>0 ? this.checkout() : ''}
            
             
              <div>{this.clearStorage('data')}</div>
            </div>
        );
    }
}

export default CartPage;
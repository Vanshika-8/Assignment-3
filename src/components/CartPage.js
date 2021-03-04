import React, { Component } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Arrow } from '../reusableComponents/Logo';
class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            total: 0
        }
    }

    componentDidMount() {
        const itemsInCart = this.getStorage('data')
    if (itemsInCart.length > 0) {
            const totalAmount=this.totalPrice(itemsInCart)
            console.log(totalAmount)
            this.setState({
                cartItems: itemsInCart,
                total:totalAmount
            })
        }


    }
    


    totalPrice=(item)=>{
   return item.map(item => item).reduce((acc, item) => {
            return acc + (item.price*item.count)
        }, 0)
        
    }

    cartItems = () => {
        return (
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
                                <FaMinus onClick={() => this.decrementCounter(item.id)} className="minus__items" />
                                <span className="art-count">{item.count}</span>
                                <FaPlus onClick={() => this.incrementCounter(item.id)} className="plus__items" />
                            </div>
                            <span className="art-price">${item.price}</span></div>
                    </div>  </div>
            })}</span>
        )
    }

    startShopping = () => {

        return (
            <div className="shopping__items">
                <Link className="continueShopping " to='/'><Arrow className="arrow__logo" /><span >Continue Shopping</span></Link>
            </div>

        )
    }

    shoppingCart = () => {
        return (
            <React.Fragment>
                <div className="total__price-shopping">
                <span>{this.startShopping()}</span>
                <div className="total__price">
                <span className="heading__total">Total</span>
                    <span className="total">${this.state.total}</span></div>
                    
                </div>
            </React.Fragment>
        )
    }


    clearingItems = () => {
        localStorage.clear()

    }


    checkout = () => {
        //There are 2 types of calling for onclick-->
        //1.Anonymous function
        //2.Simple calling of a function.
        return (
            <React.Fragment>
                <div onClick={this.clearingItems} className="checkout"><Link className="shoppingCheckout" to='/Checkout'><span  >Checkout</span></Link></div>
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

    setStorage = (key, value) => { localStorage.setItem(key, JSON.stringify(value)) }

    clearStorage = (key) => {
    
            return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '75px' }}>
                <div ><h2 className="cart__empty">The Cart is empty</h2></div>
                <div>{this.startShopping()}</div>
            </div>

    

    }



    incrementCounter = (id) => {
        // let incrementer = this.state.cartItems.find(item => item.id === id)
        // let filteringId = this.state.cartItems.filter(item => item.id !== id)
        let updateCount = this.state.cartItems.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    count: item.count + 1
                }
            }
            else {
                return item
            }

        })
        console.log(updateCount)
        const incrementPrice=this.totalPrice(updateCount)
        console.log(incrementPrice)
        this.setState({
            cartItems: updateCount,
        total:incrementPrice
        })
        this.setStorage('data', updateCount)
    }

    decrementCounter = (id) => {
        let updatedCount = this.state.cartItems.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    count: item.count - 1
                }
            }
            else {
                return item
            }
        })
        console.log(updatedCount)
        const decrementPrice=this.totalPrice(updatedCount)
        console.log(decrementPrice)
        const findingItems = updatedCount.find(item => item.id === id)
        if (findingItems.count === 0) {
            const filterItem = updatedCount.filter(item => item.id !== id)
            this.setState({ cartItems: filterItem })
            this.setStorage('data', filterItem)
            return
        }

        this.setState({ cartItems: updatedCount,
        total:decrementPrice
        })
        this.setStorage('data', updatedCount)



    }



    render() {


        return (
            <div className="cartpage">
                <h1 className="cart__heading">Cart</h1>
                {this.state.cartItems.length > 0 && this.cartItems()}
                {this.state.cartItems.length > 0 ? this.shoppingCart() : ''}
               {this.state.cartItems.length > 0 ? this.checkout() : ''}



                <div> {this.state.cartItems.length > 0 ? '' : this.clearStorage('data')}</div>
            </div>
        );
    }
}

export default CartPage;
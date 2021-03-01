import React, { Component } from 'react';
class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }

    getStorage = (key) => {
        const result = localStorage.getItem(key)
        if (result) {
            return JSON.parse(result)
        } else {
            return []
        }
    }

    render() { 
        return ( 
            <div>
            <span>{this.getStorage('data').map((item) => {
                return <div key={item.id}>
                    <div>
                        <img
                            src={item.path}
                            alt={item.name} /></div>
                    <div > <h1>{item.name}</h1>
                        <span>Genre:{item.genre}</span>
                <span>{item.count}</span>
                        <span><h1  >Specifications: </h1>{item.description}</span>
                        <span>Price:${item.price}</span>
                        {/* ON the on click when we have to pass a parameter we use this function call*/}

        

                    </div>

                </div>
            })}</span>
            </div>
         );
    }
}
 
export default CartPage;
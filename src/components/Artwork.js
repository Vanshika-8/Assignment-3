import React, { Component } from 'react';
import { data } from '../imageJson';
import { FaShoppingCart } from 'react-icons/fa';
class ArtWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentId: this.props.match.params.id,

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

    setStorage = (key, value) => { localStorage.setItem(key, JSON.stringify(value)) }


    addToCart = (item) => {
        //Checking if there is any product in local storage
        //test case 1:If the item exists in the local storage , we will save it in the array
        //test case2: if the item does not exist the cart will be empty , then we will add an item to the cart by using this function
        //test 3:if the item is on the array 
        const localStorageProduct = this.getStorage('data')
        console.log(localStorageProduct)
        let newProduct = [item]
     if (localStorageProduct.length > 0) {
            const storedCurrrentItem = localStorageProduct.find(item => item.id.toString() === this.state.currentId)
            console.log(storedCurrrentItem)
            const currentCount = storedCurrrentItem.count
            console.log(currentCount)
            const updatedItem = { ...storedCurrrentItem, count: currentCount + 1 }
            console.log(updatedItem)
            // newProduct = [updatedItem, ...localStorageProduct]
            newProduct=[updatedItem]
            console.log(newProduct)

        }


        //adding a new product 
  this.setStorage('data', newProduct) }


    render() {
        // console.log(this.props)
        // console.log(this.state.currentId)

        const filteredData = (data.filter(item => item.id.toString() === this.state.currentId))
        return (
            <div>
                {filteredData.map((item) => {
                    return <div key={item.id} className="homepage">
                        <img className="homepage__images"
                            src={item.path}
                            alt={item.name} />
                        <h1 className="title">{item.name}</h1>
                        <h1>{item.price}</h1>
                        <h1>{item.genre}</h1>
                        <span>{item.description}</span>
                        {/* ON the on click when we have to pass a parameter we use this function call*/}
                        <FaShoppingCart onClick={() => this.addToCart(item)} />
                    </div>
                })}
            </div>
        );
    }
}

export default ArtWork;
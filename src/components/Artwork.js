import React, { Component } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { data } from '../imageJson';
import { Button } from '../reusableComponents/button';
import { AddToCart } from '../reusableComponents/button'


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

    addItems = (item) => {
        item.count += 1
        return item

    }

    addToCart = (item) => {
        const localStorageProduct = this.getStorage('data')

        const localItem = localStorageProduct.find(item => item.id.toString() === this.state.currentId)
        console.log(localItem)

        const filteringIds = localStorageProduct.filter(item => item.id.toString() !== this.state.currentId)
        console.log(filteringIds)
        let updatedArray
        if (localItem) {
            const updatedItem = this.addItems(localItem)
            updatedArray = [...filteringIds, updatedItem]
        } else {
            const itemsInCart = data.find(item => item.id.toString() === this.state.currentId)
            const updatedItems = this.addItems(itemsInCart)
            updatedArray = [...filteringIds, updatedItems]
        }

        this.setStorage('data', updatedArray)

    }



    render() {

        const filteredData = (data.filter(item => item.id.toString() === this.state.currentId))
        return (
            <div>
                {filteredData.map((item) => {
                    return <div key={item.id} className="artwork__page">
                        <div><Link style={{ textDecoration: 'none' }} to='/'> <Button title='Back to home' /> </Link>
                            <img className="artwork__img"
                                src={item.path}
                                alt={item.name} /></div>
                        <div className="artwork__details"> <h1 className="artname">{item.name}</h1>
                            <span className="genre__artwork">Genre:{item.genre}</span>
                            <div className="description__container">
                            <h1 className="artname">Specifications: </h1>
                            <span className="description">{item.description}</span>
                          
                            </div>
                           
                           
                            <div className="price">
                                <span className="artPrice">Price:</span>
                                <span className="item__price">${item.price}</span>
                            </div>

                            {/* ON the on click when we have to pass a parameter we use this function call*/}

                            <div className="artwork__addtocart">
                                <AddToCart onClick={() => this.addToCart(item)} title='Add to cart' />
                                <FaBookmark className="bookmark__addtocart"/>
                            </div>

                        </div>

                    </div>
                })}
            </div>
        );
    }
}

export default ArtWork;
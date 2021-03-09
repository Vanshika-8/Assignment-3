import React, { useState } from 'react';
import { FaBookmark,FaCheckCircle } from 'react-icons/fa';
import { data } from '../imageJson';
import { AddToCart, Button } from '../reusableComponents/button';


const ArtWork=(props)=> {
    const [currentId, setCurrentId] = useState(props.match.params.id)
    const [showSuccessSnackbar,setShowSuccessSnackbar]=useState(false)
    
    
    const getStorage = (key) => {
        const result = localStorage.getItem(key)
        if (result) {
            return JSON.parse(result)
        } else {
            return []
        }
    }

    const setStorage = (key, value) => { localStorage.setItem(key, JSON.stringify(value)) }

    const addItems = (item) => {
        item.count += 1
        return item

    }





    const addToCart = (item) => {
        const localStorageProduct = getStorage('data')

        const localItem = localStorageProduct.find(item => item.id.toString() === currentId)


        const filteringIds = localStorageProduct.filter(item => item.id.toString() !== currentId)

        let updatedArray
        if (localItem) {
            const updatedItem = addItems(localItem)
            updatedArray = [...filteringIds, updatedItem]
        } else {
            const itemsInCart = data.find(item => item.id.toString() === currentId)
            const updatedItems = addItems(itemsInCart)
            updatedArray = [...filteringIds, updatedItems]
        }
        setShowSuccessSnackbar(!showSuccessSnackbar)
        setStorage('data', updatedArray)
 }



    const snackBar = (item) => {
        return (<div className="snackbar__message">
            <span><FaCheckCircle/>{item.name} is added to the cart</span>
        </div>)
    }


  const settingTimeOut = () => {
        setShowSuccessSnackbar(true, () => {
            setTimeout(() => {
               setShowSuccessSnackbar(false)
            }, 2000);
        })
    }


 const filteredData = (data.filter(item => item.id.toString() === currentId))
        return (
            <div className="artwork-cards">
                {filteredData.map((item) => {
                    return <div key={item.id} className="artwork__page">
                        <div><Button history={props.history} title='Back to home' />
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
                            {showSuccessSnackbar ? snackBar(item) : ''}

                            <div onClick={settingTimeOut} className="artwork__addtocart" >
                                <AddToCart
                                    item={item}
                                    clickHandler={addToCart}
                                    title='Add to cart' />
                                <FaBookmark className="bookmark__addtocart" />
                            </div>

                        </div>

                    </div>
                })}
            </div>
        );
    
}

export default ArtWork;



import React, { createContext, useContext, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { AddItemsContext } from "../App";
import { data } from "../imageJson";
import { AddToCart, Button } from "../reusableComponents/button";
export const locationItemContext=createContext()
const ArtWork = (props) => {
  console.log(props)
const [currentId]=useState(props.match.params.id)
  const {
    showSuccessSnackbar,
    addToCart,
    snackBar,
    settingTimeOut,
  } = useContext(AddItemsContext);
  const filteredData = data.filter((item) => item.id.toString() === currentId);
  return (
    <locationItemContext.Provider value={{currentId}}>
    <div className="artwork-cards">
      {filteredData.map((item) => {
        return (
          <div key={item.id} className="artwork__page">
            <div>
              <Button title="Back to home" />
              <img className="artwork__img" src={item.path} alt={item.name} />
            </div>
            <div className="artwork__details">
              {" "}
              <h1 className="artname">{item.name}</h1>
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
              {showSuccessSnackbar ? snackBar(item) : ""}
              <div onClick={settingTimeOut} className="artwork__addtocart">
                <AddToCart
                  item={item}
                  clickHandler={()=>addToCart(currentId)}
                  title="Add to cart"
                />
                <FaBookmark className="bookmark__addtocart" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </locationItemContext.Provider>
  );
};

export default ArtWork;

import React, { useEffect, useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Arrow } from "../reusableComponents/Logo";
import { AddItemsContext } from "../components/Context";

const CartPage = () => {
  const {
    cartItem,
    decrementCounter,
    incrementCounter,
    total,
    totalPrice,
    setCartItems,
    setTotal,
    data,
    clearingItems,
  } = useContext(AddItemsContext);
  useEffect(() => {
    const itemsInCart = getStorage("data");
    if (itemsInCart.length > 0) {
      const totalAmount = totalPrice(itemsInCart);
      setCartItems(itemsInCart);
      setTotal(totalAmount);
    }
  }, [data]);
  const cartItems = () => {
    return (
      <div className="cartpage__header">
        {cartItem.map((item) => {
          return (
            <div className="cart__container" key={item.id}>
              <div className="cards__items">
                <img className="cart__image" src={item.path} alt={item.name} />
              </div>
              <div className="cart__artname-genre">
                <span className="artname-cart">{item.name}</span>
                <span className="artname-genre">Genre:{item.genre}</span>
                <div className="cart__price-count">
                  <div className="count">
                    <FaMinus
                      onClick={() => decrementCounter(item.id)}
                      className="minus__items"
                    />
                    <span className="art-count">{item.count}</span>
                    <FaPlus
                      onClick={() => incrementCounter(item.id)}
                      className="plus__items"
                    />
                  </div>
                  <span className="art-price">${item.price}</span>
                </div>
              </div>{" "}
            </div>
          );
        })}
      </div>
    );
  };

  const startShopping = () => {
    return (
      <div className="shopping__items">
        <Link className="continueShopping " to="/">
          <Arrow className="arrow__logo" />
          <span>Continue Shopping</span>
        </Link>
      </div>
    );
  };

  const shoppingCart = () => {
    return (
      <React.Fragment>
        <div className="total__price-shopping">
          {startShopping()}
          <div className="total__price">
            <span className="heading__total">Total</span>
            <span className="total">${total}</span>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const checkout = () => {
    return (
      <div className="checkout__name">
        <div onClick={clearingItems} className="checkout">
          <Link className="shoppingCheckout" to="/Checkout">
            <div>Checkout</div>
          </Link>
        </div>
      </div>
    );
  };

  const getStorage = (key) => {
    const result = localStorage.getItem(key);
    if (result) {
      return JSON.parse(result);
    } else {
      return [];
    }
  };

  //    const setStorage = (key, value) => { localStorage.setItem(key, JSON.stringify(value)) }

  const clearStorage = (key) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "75px",
        }}
      >
        <div>
          <h2 className="cart__empty">The Cart is empty</h2>
        </div>
        <div>{startShopping()}</div>
      </div>
    );
  };
  return (
    <div className="cartpage">
      <h1 className="cart__heading">Cart</h1>
      {cartItem.length > 0 && cartItems()}
      {cartItem.length > 0 ? shoppingCart() : ""}
      {cartItem.length > 0 ? checkout() : ""}
      <div> {cartItem.length > 0 ? "" : clearStorage("data")}</div>
    </div>
  );
};

export default CartPage;

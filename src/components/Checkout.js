import React from "react";
import { Link } from "react-router-dom";
import { Arrow } from "../reusableComponents/Logo";
const Checkout = () => {
  return (
    <div className="maincheckout__container">
      <h1 className="thankyou__message">Thank You</h1>
      <h2 className="successmessage__shopping">Your order has been placed!</h2>
      <div className="shopping__items">
        <Link className="continueShopping items" to="/">
          <Arrow className="arrow__logo" />
          <span>Continue Shopping</span>
        </Link>{" "}
      </div>
    </div>
  );
};

export default Checkout;

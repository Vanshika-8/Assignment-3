import React, { createContext, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Artwork from "./components/Artwork";
import CartPage from "./components/CartPage";
import Checkout from "./components/Checkout";
import HomePage from "./components/HomePage";
import { NavBar } from "./components/NavBar";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import "./components/styles/style.css";
import { data as metaData } from "./imageJson";

export const AddItemsContext = createContext();
const App = () => {
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);

  const getStorage = (key) => {
    const result = localStorage.getItem(key);
    if (result) {
      return JSON.parse(result);
    } else {
      return [];
    }
  };

  const [data, setData] = useState(getStorage("data"));

  const setStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setData(getStorage("data"));
  };

  

  const addToCart = (currentId) => {
    const localStorageProduct = getStorage("data");
    const localItem = localStorageProduct.find(
      (item) => item.id.toString() === currentId
    );
    let updatedArray;
    if (localItem) {
      updatedArray = localStorageProduct.map((item) =>
        item.id == currentId ? { ...item, count: item.count + 1 } : item
      );
    } else {
      const itemsInCart = metaData.find(
        (item) => item.id.toString() === currentId
      );
      updatedArray = [...localStorageProduct, itemsInCart];
    }
    setShowSuccessSnackbar(!showSuccessSnackbar);
    setStorage("data", updatedArray);
  };

  const snackBar = (item) => {
    return (
      <div className="snackbar__message">
        <span>
          <FaCheckCircle />
          {item.name} is added to the cart
        </span>
      </div>
    );
  };

  const settingTimeOut = () => {
    setShowSuccessSnackbar(true);
    setTimeout(() => {
      setShowSuccessSnackbar(false);
    }, 2000);
  };

  const artworkContextValues = {
    showSuccessSnackbar,
    data,
    getStorage,
    setStorage,
    addToCart,
    snackBar,
    settingTimeOut,
  };

  return (
    <AddItemsContext.Provider value={artworkContextValues}>
      <Router>
        <div className="container">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/register" component={RegisterPage}></Route>
            <Route path="/artwork/:id" component={Artwork}></Route>
            <Route exact path="/cart">
              <CartPage />
            </Route>
            <Route exact path="/Checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
      </Router>
    </AddItemsContext.Provider>
  );
};

export default App;

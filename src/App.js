import React, { createContext, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CartPage from "./components/CartPage";
import Checkout from "./components/Checkout";
import ContextArtWork from "./components/contextArtWork";
import HomePage from "./components/HomePage";
import { NavBar } from "./components/NavBar";
import ParentRef from "./components/reference";
import RegisterPage from "./components/RegisterPage";
import "./components/styles/style.css";


export const AddItemsContext = createContext();
const App=()=> {

  const [currentId] = useState("");
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

  const addItems = (item) => {
    //check if the count is available
    item.count += 1;
    return item;
  };

  const addToCart = (item) => {
    const localStorageProduct = getStorage("data");

    const localItem = localStorageProduct.find(
      (item) => item.id.toString() === currentId
    );

    const filteringIds = localStorageProduct.filter(
      (item) => item.id.toString() !== currentId
    );

    let updatedArray;
    if (localItem) {
      const updatedItem = addItems(localItem);
      updatedArray = [...filteringIds, updatedItem];
    } else {
      const itemsInCart = data.find((item) => item.id.toString() === currentId);
      const updatedItems = addItems(itemsInCart);
      updatedArray = [...filteringIds, updatedItems];
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
    currentId,
    showSuccessSnackbar,
    data,
    getStorage,
    setStorage,
    addItems,
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
            <Route exact path="/login" component={ParentRef}></Route>
            <Route exact path="/register" component={RegisterPage}></Route>
            <Route path="/artwork/:id" component={ContextArtWork}></Route>
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
}

export default App;

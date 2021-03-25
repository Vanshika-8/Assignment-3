import React, {createContext, useState,useReducer } from "react";
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
import AppReducer from './components/AppReducer';


export const AddItemsContext = createContext();
const App = ({children}) => {

  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false)
  const [cartItem, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

 
      

//   const  incrementCounter = (id) => {
//     let updateCount = cartItem.map((item) => {
//         if (item.id === id) {
//             return {
//                 ...item,
//                 count: item.count + 1
//             }
//         }
//         else {
//             return item
//         }})
//     const incrementPrice=totalPrice(updateCount)
//     setCartItems(updateCount)
//     setTotal(incrementPrice)
// setStorage('data', updateCount)
// }

// const decrementCounter = (id) => {
//     let updatedCount = cartItem.map((item) => {
//         if (item.id === id) {
//             return {
//                 ...item,
//                 count: item.count - 1
//             }
//         }
//         else {
//             return item
//         }
//     })
//     const decrementPrice=totalPrice(updatedCount)
//     const findingItems = updatedCount.find(item => item.id === id)
//     if (findingItems.count === 0) {
//         const filterItem = updatedCount.filter(item => item.id !== id)
//         setCartItems(filterItem)
//         setStorage('data', filterItem)
//         return
//     }
//    setCartItems(updatedCount)
//     setTotal(decrementPrice)
//    setStorage('data', updatedCount)
// }
  


  const totalPrice=(item)=>{
    return item.map(item => item).reduce((acc, item) => {
             return acc + (item.price*item.count)
         }, 0)
         
     }

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


  const initialState={
    count:data
    .map((item) => item.count)
    .reduce((acc, ite) => acc + ite, 0)
  }
  
  const [state, dispatch] = useReducer(AppReducer, initialState)
  
  const  incrementCounter = (id) => {
    dispatch({
      type:'INCREMENT_COUNT',
      payload:id,
    })
    }
    
    const decrementCounter = (id) => {
      dispatch({
        type:'DECREMENT_COUNT',
        payload:id,
      })
    }

  const addToCart = (currentId) => {
    const localStorageProduct = getStorage("data");
    const localItem = localStorageProduct.find(
      (item) => item.id.toString() === currentId
    );
    let updatedArray;
    if (localItem) {
      updatedArray = localStorageProduct.map((item) =>
        item.id.toString() === currentId ? { ...item, count: item.count + 1 } : item
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
    count:state.count,
    showSuccessSnackbar,
    data,
    getStorage,
    setStorage,
    addToCart,
    snackBar,
    settingTimeOut,
    incrementCounter,
    decrementCounter,
    total,
    cartItem,
    totalPrice,
    setCartItems,
    setTotal
  };

  return (
    <AddItemsContext.Provider value={artworkContextValues}>
      <Router>
      {children}
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

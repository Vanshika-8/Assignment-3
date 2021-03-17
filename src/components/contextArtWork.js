import React, { createContext, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { data } from '../imageJson';
import ArtWork from './Artwork';
import {NavBar} from './NavBar';
// export const AddItemsContext=createContext();

const AddItemsContextProvider=(props)=>{
    
console.log(props)
    const [currentId] = useState(props.match.params.id)
//     const [showSuccessSnackbar,setShowSuccessSnackbar]=useState(false)
   
   
    
//     const getStorage = (key) => {
//         const result = localStorage.getItem(key)
//         if (result) {
//             return JSON.parse(result)
//         } else {
//             return []
//         }
//     }

//     const [data,setData]=useState(getStorage('data'))
   
//     const setStorage = (key, value) => { localStorage.setItem(key, JSON.stringify(value))
//     setData(getStorage('data'))
//     }

//     const addItems = (item) => {
//     //check if the count is available 
//         item.count += 1
//         return item

//     }
    




//     const addToCart = (item) => {
//         const localStorageProduct = getStorage('data')

//         const localItem = localStorageProduct.find(item => item.id.toString() === currentId)


//         const filteringIds = localStorageProduct.filter(item => item.id.toString() !== currentId)

//         let updatedArray
//         if (localItem) {
//             const updatedItem = addItems(localItem)
//             updatedArray = [...filteringIds, updatedItem]
//         } else {
//             const itemsInCart = data.find(item => item.id.toString() === currentId)
//             const updatedItems = addItems(itemsInCart)
//             updatedArray = [...filteringIds, updatedItems]
//         }
//         setShowSuccessSnackbar(!showSuccessSnackbar)
//         setStorage('data', updatedArray)
//  }



//     const snackBar = (item) => {
//         return (<div className="snackbar__message">
//             <span><FaCheckCircle/>{item.name} is added to the cart</span>
//         </div>)
//     }



//     const settingTimeOut = () => {
//         setShowSuccessSnackbar(true)
//             setTimeout(() => {
//                setShowSuccessSnackbar(false)
//             }, 2000);
//     }


// const artworkContextValues={currentId , showSuccessSnackbar,data,  getStorage,setStorage,addItems,addToCart,snackBar,settingTimeOut}

 return(
    
   

     <ArtWork value={currentId}  />
    
    
     
     
 )
    
}

export default AddItemsContextProvider;
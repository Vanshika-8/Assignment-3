// import AppReducer from './components/AppReducer';
// import { AddItemsContext } from '../App';
// import React, {useContext } from "react";
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

const AppReducer=(state,action)=>{
    const {id,setCartItems,setTotal,setStorage,totalPrice,cartItem}=action.payload
    switch(action.type){
        case 'INCREMENT_COUNT':
           
            console.log('increment')
            console.log(state)
            const newCountIN=state.count+1
            console.log(newCountIN)
            console.log(action.payload.totalPrice,'total')
            let updateCount = cartItem.map((item) => {
                        if (item.id === id) {
                            return {
                                ...item,
                                count: newCountIN
                            }
                        }
                        else {
                            return item
                        }})
                    const incrementPrice=totalPrice(updateCount)
                    setCartItems(updateCount)
                    setTotal(incrementPrice)
                setStorage('data', updateCount)
            return{
                ...state,
                count:newCountIN
            }
    case 'DECREMENT_COUNT':
       
        console.log('decrement')
        console.log(state)
        const newCount=state.count-1
        let updatedCount = cartItem.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            count: item.count - 1
                        }
                    }
                    else {
                        return item
                    }
                })
                const decrementPrice=totalPrice(updatedCount)
                const findingItems = updatedCount.find(item => item.id === id)
                if (findingItems.count === 0) {
                    const filterItem = updatedCount.filter(item => item.id !== id)
                    setCartItems(filterItem)
                    setStorage('data', filterItem)
                    return
                }
               setCartItems(updatedCount)
                setTotal(decrementPrice)
               setStorage('data', updatedCount)
        
        return{
            ...state,
            count:newCount
        }

        default:
            return state;
    }
}




export default AppReducer;
  
  
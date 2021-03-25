import React, {useContext } from "react";
import { AddItemsContext } from "../App";

const {setCartItems,setTotal,setStorage,totalPrice} = useContext(AddItemsContext);

const AppReducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT_COUNT':
            console.log('increment')
            console.log(state)
            const newCountIN=state.count+1
            const incrementPrice=totalPrice(newCountIN)
                setCartItems(newCountIN)
                setTotal(incrementPrice)
            setStorage('data', newCountIN)
            return{
                ...state,
                count:newCountIN
            }
    case 'DECREMENT_COUNT':
        console.log('decrement')
        console.log(state)
        const newCount=state.count-1
        const decrementPrice=totalPrice(newCount)
    const findingItems = newCount.find(item => item.id === id)
    if (findingItems.count === 0) {
        const filterItem = newCount.filter(item => item.id !== id)
        setCartItems(filterItem)
        setStorage('data', filterItem)
        return
    }
   setCartItems(newCount)
    setTotal(decrementPrice)
   setStorage('data', newCount)
        
        return{
            ...state,
            count:newCount
        }

        default:
            return state;
    }
}




export default AppReducer;
  
  
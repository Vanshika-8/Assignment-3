import React from 'react';
import { Arrow } from '../Logo';
import './styles/button-styles.css';


export const Button=(props)=>{

  const clickBackToHome=()=>{
    
    props.history.push('/')
  }

return(
    <div className="backtohome__btn" onClick={clickBackToHome}>
   
    <span className="backtohome__link">  <Arrow className="arrow__logo"/> {props.title}</span>
    </div>
)
}

export const AddToCart=(props)=>{

    const addingItems=(item)=>{
    
props.clickHandler(props.item)
    }

    return(
       
        <div className="backtohome__btn" onClick={addingItems}>

    <div className="addtocart__link"> {props.title}</div>
    </div>
    )
}
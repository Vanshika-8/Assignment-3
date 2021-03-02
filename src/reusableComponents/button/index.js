import React from 'react';
import { Arrow } from '../Logo';
import './styles/button-styles.css';


export const Button=(props)=>{
return(
    <div className="backtohome__btn">
  
    <span className="backtohome__link">  <Arrow className="arrow__logo"/> {props.title}</span>
    </div>
)
}

export const AddToCart=(props)=>{
    return(
       
        <div className="backtohome__btn">
    <div className="addtocart__link"> {props.title}</div>
    </div>
    )
}
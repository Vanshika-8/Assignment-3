import React from 'react';
import { Arrow } from '../Logo';
import './styles/button-styles.css';
import {Link} from 'react-router-dom';

export const Button=(props)=>{
return(
    <Link to='/' className="backtohome__btn" >
   
    <span className="backtohome__link">  <Arrow className="arrow__logo"/> {props.title}</span>
    </Link>
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
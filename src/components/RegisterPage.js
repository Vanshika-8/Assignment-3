import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {FaEnvelope} from 'react-icons/fa';
import {FaLock} from 'react-icons/fa';
class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="maincontainer__form">
            <form className="login__form">
                <h1 className="login__heading">Register</h1>
                <div className="login__email">
                    <label>  Email </label>
                    <div className="email__input">
                    <FaEnvelope className="logo__input"/>
                    <input placeholder="Enter email" type="text"  /> 
                   
                    </div>
                   
                </div>
                <div className="login__password">
                    <label>  Password </label> 
                    <div className="email__input">
                    <FaLock className="logo__input"/>
                    <input placeholder="Enter password" type="password" />
                    </div>
                   </div>
                <div className="login__password">
                <label> Confirm Password </label> 
                    <div className="email__input">
                    <FaLock className="logo__input"/>
                    <input placeholder="Enter password" type="password" />
                    </div>
                </div>

                    <Link to="/"><button className="register__submitbtn">Submit</button></Link>
                </form>
            </div>

        );
    }
}

export default RegisterPage;
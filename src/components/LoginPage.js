import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="maincontainer__form">
                <form className="login__form">
                    <h1 className="login__heading">LOGIN Form</h1>
                    <div className="login__username">
                        <label>UserName</label>
                        <input placeholder="Enter Username" type="text" />
                    </div>
                    <div className="login__email">
                        <label>  Email </label>
                         <input placeholder="Enter email" type="text" />
                    </div>
                    <div className="login__password">
                        <label>  Password </label> 
                        <input placeholder="Enter password" type="password" />
                    </div>

                    <Link  to="/"><button className="login__submitbtn">Submit</button></Link>
                </form>
            </div>


        );
    }
}

export default LoginPage;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="maincontainer__form">
                <form className="register__form">
                    <h1 className="register__heading">Register Here</h1>
                    <div className="register__username">
                        <label>Email</label>
                        <input placeholder="Enter email" type="text" />
                    </div>
                    <div className="register__email">
                        <label>Password</label>
                        <input placeholder="Enter password" type="password" />
                    </div>
                    <div className="register__password">
                        <label>Confirm-Password</label>
                        <input placeholder="Confirm-password" type="password" />
                    </div>

                    <Link to="/"><button className="register__submitbtn">Submit</button></Link>
                </form>
            </div>

        );
    }
}

export default RegisterPage;
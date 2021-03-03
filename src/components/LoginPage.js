import React, { Component } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
const passwordRegex= /^[\d\w@-]{8,20}$/i
const emailRegex=/^([a-z\d-]+)@([a-z\d-]+)([a-z]{2,8})?$/i

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailErrorMessage: '',
            passwordErrorMessage: '',
           
        }
    }

    validateHandler = (e) => {
        e.preventDefault();
        const { email, password } = this.state
        if (email === '' && password === '') {
            this.setState({
                emailErrorMessage: 'Please enter a valid email address',
                passwordErrorMessage: 'Please enter a valid password'
            })

        }
        if ((email === '') && password !== '') {
            this.setState({
                emailErrorMessage: 'Please enter a valid email address',
                passwordErrorMessage: ''
            })
        }
        if ((email !== '') && password === '') {
            this.setState({
                emailErrorMessage: '',
                passwordErrorMessage: 'Please enter a valid password'
            })
        }

        if((!passwordRegex.test(password)) && password!==''){
            this.setState({
                passwordErrorMessage:'Please enter a valid password with 20 digits and special char'
            })
        }
       if((!emailRegex.test(email))  && email!==''){
           this.setState({
               emailErrorMessage:'Please enter a valid email with @ and proper email'
           })
       }
       if(email!=='' && password!=='')
       {
          this.redirectHandler()
       }
       return
     
    }

     redirectHandler = () => {
         console.log(this.props)
        this.props.history.push('/')
    }

    handleChange = (e) => {

        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value
        })

    }


    render() {

        return (

            <div className="maincontainer__form">
                <form  className="login__form">
                    <h1 className="login__heading">Login</h1>
                    <div className="login__email">

                        <div className="email__input-wrapper">
                            <FaEnvelope className="logo__input" />
                            <input
                             className={ this.state.emailErrorMessage ?  "email__input errorBorder" : 'email__input' } 
                                name='email' value={this.state.email} onChange={this.handleChange} placeholder="Enter email" type="text" />
                        </div>
                        <div className="errorMessages">{this.state.emailErrorMessage}</div>

                    </div>
                    <div className="login__password">

                        <div className="password__input-wrapper">
                            <FaLock className="logo__input" />
                            <input 
                            className={ this.state.passwordErrorMessage ?  "password__input errorBorder" : 'password__input' }
                            value={this.state.password}
                                name='password' onChange={this.handleChange} placeholder="Enter password" type="password" />

                        </div>
                        <div className="errorMessages">{this.state.passwordErrorMessage}</div>


                    </div>
                  
                    <button onClick={this.validateHandler } className="login__submitbtn">Submit</button>
                </form>
            </div>


        );
    }
}

export default LoginPage;
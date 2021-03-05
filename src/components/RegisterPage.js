import React, { Component } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const passwordRegex= /^[\d\w@-]{8,20}$/i
const emailRegex=/^([a-z\d-]+)@([a-z\d-]+)([a-z]{2,8})?$/i
class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword:'',
            emailErrorMessage: '',
            passwordErrorMessage: '',
            confirmPasswordErrMessage:''
        }
    }


    validateHandler = (e) => {
        e.preventDefault();
        const { email, password,confirmPassword } = this.state
        console.log(this.state)
        if (email === '' && password === '' && confirmPassword==='') {
            this.setState({
                emailErrorMessage: 'Please enter a valid email address',
                passwordErrorMessage: 'Please enter a valid password',
                confirmPasswordErrMessage:'Please enter a valid confirm password'
            })

        }
        if ((email === '') && (password !== '' && confirmPassword!=='')) {
            this.setState({
                emailErrorMessage: 'Please enter a valid email address',
                passwordErrorMessage: '',
                confirmPasswordErrMessage:''
                
            })
            return
        }
        if ((email !== '') && password === '' && confirmPassword==='') {
            this.setState({
                emailErrorMessage: '',
                passwordErrorMessage: 'Please enter a valid password',
                confirmPasswordErrMessage:'Please enter a valid confirm password'
            })
            return
        }
        if((email!=='' && password!=='') && confirmPassword===''){
            this.setState({
                emailErrorMessage:'',
                passwordErrorMessage:'',
                confirmPasswordErrMessage:'Please enter a valid confirm password'
            })
            return
        }
        if((!passwordRegex.test(password)) && password!==''){
            this.setState({
                emailErrorMessage:'',
                passwordErrorMessage:'Please enter a valid password with 20 digits and special char',

            })
            return
        }
       if((!emailRegex.test(email))  && email!=='' ){
           this.setState({
               emailErrorMessage:'Please enter a valid email with @ and proper email'
           })
           return
       }
       if((!passwordRegex.test(confirmPassword)) && password!=='' && !email!==''){
        this.setState({
            confirmPasswordErrMessage:'Enter a valid confirm password with special characters',
            emailErrorMessage:'',
            passwordErrorMessage:''
        })
        return
       }

       if(confirmPassword!==password){
           this.setState({confirmPasswordErrMessage:'Confirm password does not match password'})
           return
       }

       if(email!=='' && password!=='' && confirmPassword!=='')
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
            <div className="form-register">
            <div className="maincontainer__form">
            <form className="register__form">
                <h1 className="register__heading">Register</h1>
                <div className="register__email">

                        <div className="email__input-wrapper">
                            <FaEnvelope className="logo__input" />
                            <input
                             className={ this.state.emailErrorMessage ?  "email__input errorBorder" : 'email__input' } 
                                name='email' value={this.state.email} onChange={this.handleChange} placeholder="Enter email" type="text" />
                        </div>
                        <div className="errorMessages">{this.state.emailErrorMessage}</div>

                    </div>
                    <div className="register__password">

                    <div className="password__input-wrapper">
                        <FaLock className="logo__input" />
                        <input 
                        className={ this.state.passwordErrorMessage ?  "password__input errorBorder" : 'password__input' }
                        value={this.state.password}
                            name='password' onChange={this.handleChange} placeholder="Enter password" type="password" />

                    </div>
                    <div className="errorMessages">{this.state.passwordErrorMessage}</div>


                </div>
                <div className="register__password">

                        <div className="password__input-wrapper">
                            <FaLock className="logo__input" />
                            <input 
                            className={ this.state.confirmPasswordErrMessage ?  "password__input errorBorder" : 'password__input' }
                            value={this.state.confirmPassword}
                                name='confirmPassword' onChange={this.handleChange} placeholder="Confirm password" type="password" />

                        </div>
                        <div className="errorMessages">{this.state.confirmPasswordErrMessage}</div>


                    </div>

                <button onClick={this.validateHandler} className="register__submitbtn">Submit</button>
                </form>
            </div>
            </div>

        );
    }
}

export default RegisterPage;
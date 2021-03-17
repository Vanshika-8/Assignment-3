import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const LoginPage =React.forwardRef((props,ref)=> {
    const passwordRegex= /^[\d\w@-]{8,20}$/i
    const emailRegex=/^([a-z\d-]+)@([a-z\d-]+)([a-z]{2,8})?$/i
    
    const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [emailErrorMessage, setemailErrorMessage] = useState('')
        const [passwordErrorMessage, setpasswordErrorMessage] = useState('')
        const [inputs, setInputs] = useState({});
        


        const validateHandler = (e) => {
            e.preventDefault();
            console.log('test1')
            if (email === '' && password === '') {
        
                setemailErrorMessage('Please enter a valid email address')
                setpasswordErrorMessage('Please enter a valid password')
                console.log('test2')
            }
           else if ((email === '') && password !== '') {
                setemailErrorMessage('Please enter a valid email address')
                setpasswordErrorMessage('')
                console.log('test3')
            }
           else if ((email !== '') && password === '') {
                setemailErrorMessage('')
                setpasswordErrorMessage('Please enter a valid password')
                console.log('test3')
            }
    
        //    else if((!passwordRegex.test(password)) && password!==''){
        //         setpasswordErrorMessage('Please enter a valid password with 20 digits and special char')
        //         console.log('test4')
        //          }
        //   else if((!emailRegex.test(email))  && email!==''){
        //        setemailErrorMessage('Please enter a valid email with @ and proper email') 
        //        console.log('test5')
        //     }
           else
           {
              redirectHandler()
           }
           return
         
        }
    
       const redirectHandler = () => {
          window.location.assign('/')
        }
    
       const handleChange = (e) => {
        const {name, value} = e.target
        console.log(name,'name')
        console.log(value,'value')
        if(name==='email'){
            setEmail(inputs=>({...inputs , 'email':value}))
            console.log(inputs)
        }else{
            setPassword(inputs=>({...inputs , 'password':value}))
            console.log(inputs)
        }
        }
    
    
        
    
            return (
    <div className="form-login">
                <div className="maincontainer__form">
                    <form  className="login__form">
                        <h1 className="login__heading">Login</h1>
                        <div className="login__email">
    
                            <div className="email__input-wrapper">
                                <FaEnvelope className="logo__input" />
                                <input
                                 className={emailErrorMessage ?  "email__input errorBorder" : 'email__input' } 
                                   name='email' value={inputs.email} onChange={handleChange} placeholder="Enter email" type="text"  ref={ref}/>
                            </div>
                            <div className="errorMessages">{emailErrorMessage}</div>
    
                        </div>
                        <div className="login__password">
    
                            <div className="password__input-wrapper">
                                <FaLock className="logo__input" />
                                <input 
                                className={ passwordErrorMessage ?  "password__input errorBorder" : 'password__input' }
                                value={inputs.password}
                                    name='password' onChange={handleChange} placeholder="Enter password" type="password" />
    
                            </div>
                            <div className="errorMessages">{passwordErrorMessage}</div>
    
    
                        </div>
                      
                        <button onClick={validateHandler} className="login__submitbtn">Submit</button>
                    </form>
                </div>
                </div>
    
    
            );
        })


export default LoginPage;
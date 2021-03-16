import React, { Component } from 'react';
import LoginPage from './LoginPage';


class ParentRef extends Component {
    constructor(props) {
        super(props);
        this.inputRef=React.createRef()
    }
    componentDidMount(){
        console.log(this.inputRef)
        this.inputRef.current.focus()
    } 
    render() { 
        return (  
            <div>
            <LoginPage ref={this.inputRef}/>
            
            </div>
        );
    }
}
 
export default ParentRef;
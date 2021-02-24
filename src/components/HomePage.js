import React, { Component } from 'react';
import { data } from '../imageJson';
import './styles/style.css'
import { Link } from 'react-router-dom';
import {FaThumbsUp} from 'react-icons/fa';
import {FaThumbsDown} from 'react-icons/fa';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [data],
            like: false,
            unlike: false
        }
    }

    likeHandler = () => {
        this.setState({
            like:!this.state.like,
            unlike:this.state.unlike
        })
    }
    dislikeHandler = () => {
        this.setState({
            unlike:!this.state.unlike,
            like:this.state.like
        })
    }

    render() {
        const myData = data.map(item =>
            <div key={item.id} className="homepage"> <Link to='/Artwork'>
                <img className="homepage__images"
                src={item.path}
                    alt={item.name} />
            </Link>
            <h1 className="title">{item.name}</h1>
            <div className="thumps__up">
            
            <FaThumbsUp onClick={this.likeHandler}  style={this.state.like ? {color:'green'} : {color:'red'} }/>
            <FaThumbsDown onClick={this.dislikeHandler} style={this.state.unlike ? {color:'red'} : {color:'grey'}}/> </div>
          
            </div>
        )


        return (
            <div>
           
                <li className="homePage__list">{myData}</li>


            </div>
        );
    }
}

export default HomePage;
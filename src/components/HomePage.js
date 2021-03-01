import React, { Component } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { data } from '../imageJson';
import './styles/style.css';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [data],
            like: false,
        }
    }

    likeHandler = () => {
        this.setState({
            like:!this.state.like,
        })
    }

    render() {
        const myData = data.map(item =>

            <div key={item.id} className="homepage__cards">
            <div  className="homepage"> <Link to={`/artwork/${item.id}`}>
                <img className="homepage__images"
                src={item.path}
                    alt={item.name} />
            </Link>  
           <div className="details__homepage">
           
           <span className="title">{item.name}</span>
           <span ><FaBookmark className="bookmark" onClick={this.likeHandler}  style={this.state.like ? {color:'red'} : null }/></span>
          </div>
          <span className="artwork__genre">Genre:{item.genre}</span>
            </div>
            </div>
        )


        return (
            <div>
           
                <span className="homePage__list">{myData}</span>

         
            </div>
        );
    }
}

export default HomePage;


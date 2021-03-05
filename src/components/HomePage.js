import React, { Component } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { data } from '../imageJson';
import './styles/style.css';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: data,

        }
    }



    bookmarkHandler = (id) => {
        let updateBookMark = this.state.cards.map((item) => {
            if (item.id === id) {
                item.bookmark = !item.bookmark
            }
            return item
        })
        this.setState({
            cards: updateBookMark,
        })
    }

    getCards = () => {

        return (
            this.state.cards.map(item =>

                <div key={item.id} className="homepage__cards">
                    <div className="homepage"> <Link to={`/artwork/${item.id}`}>
                        <img className="homepage__images"
                            src={item.path}
                            alt={item.name} />
                    </Link>
                        <div className="details__homepage">

                            <span className="title">{item.name}</span>
                            <span style={item.bookmark ? { color: 'red' } : { color: 'black' }}><FaBookmark className="bookmark" onClick={() => this.bookmarkHandler(item.id)} /></span>
                        </div>
                        <span className="artwork__genre">Genre:{item.genre}</span>
                    </div>
                </div>
            )
        )
    }

    render() {
        return (
            <div className="homePage__list" >
                {this.getCards()}
            </div>
        );
    }
}

export default HomePage;


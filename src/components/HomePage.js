import React, { useState} from 'react';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { data } from '../imageJson';
import './styles/style.css';

const HomePage=(props)=> {

const [cards, setCards] = useState(data)

   const bookmarkHandler = (id) => {
        let updateBookMark = cards.map((item) => {
            if (item.id === id) {
                item.bookmark = !item.bookmark

            }
            return item
        })
        setCards(updateBookMark)

    }

   const getCards = () => {
    return (
            cards.map(item =>

                <div key={item.id} className="homepage__cards">
                    <div className="homepage"> <Link to={`/artwork/${item.id}`}>
                        <img className="homepage__images"
                            src={item.path}
                            alt={item.name} />
                    </Link>
                        <div className="details__homepage">

                            <span className="title">{item.name}</span>
                            <span style={item.bookmark ? { color: 'red' } : { color: 'black' }}><FaBookmark className="bookmark" onClick={() => bookmarkHandler(item.id)} /></span>
                        </div>
                        <span className="artwork__genre">Genre:{item.genre}</span>
                    </div>
                </div>
            )
        )
    }

     
        return (
            <div className="homePage__list" >
                {getCards()}
            </div>
        );
    
}

export default HomePage;


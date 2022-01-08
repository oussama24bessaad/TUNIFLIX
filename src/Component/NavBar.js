import React, { useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const NavBar = ({ getData }) => {
    const [rating, setRating] = useState(0);
    const [searchInput, setSearchInput] = useState('');
    const onStarClick = (e) => {
        setRating(e);
    }
    const handleInput = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
        return (e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        getData(rating, searchInput);
    }


    return (
        <nav className='navBar'>
            <ul className='navList'>
                <li><a href='#Home' id='Home'>Home</a></li>
                <li><a href='#Home'>Movies</a></li>
                
            </ul>
            <span onClick={() => { getData(rating, searchInput) }}>
                <StarRatingComponent
                    className='starRatingFilter'
                    name="movieRating"
                    starCount={5}
                    value={rating}
                    onStarClick={onStarClick}
                />
            </span>
            <form onSubmit={handleSubmit}>
                <input
                    id='search'
                    type='text'
                    name='search'
                    placeholder='search . .'
                    value={searchInput}
                    onChange={(e) => getData(rating, handleInput(e))}
                />
                <button type='submit' >Search</button>
            </form>
        </nav>
    )
}

export default NavBar

import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';

const movieCard = ({ movieName, movieImg, movieRating, id }) => {
    return (
        <article className='MovieCard'>
            <Link to={`/movies/${id}`}>
                <img
                    src={movieImg}
                    alt="Please submit a valid link"
                    width='230px'
                />
                <span>{movieName}</span>
                <div className='starRating'>
                    <StarRatingComponent
                        className='starRatingComp'
                        name="movieRating"
                        starCount={5}
                        value={movieRating}
                    />
                </div>
            </Link>
        </article>
    )
}

export default movieCard

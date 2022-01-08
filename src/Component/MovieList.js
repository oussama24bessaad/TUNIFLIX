import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import ModalInput from './ModalInput'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Description from './Description';


const MovieList = ({ movies, rating, searchInput }) => {
    const [newMovies, setNewMovies] = useState(movies);
    const [filterList, setFilterList] = useState(newMovies);

    const getNewMovie = (data) => {
        setNewMovies([...newMovies, data])
        setFilterList([...newMovies, data])
    }
    useEffect(() => {
        let filteredMovies = newMovies.filter((movie) => {
            let check = movie.movieName.toLowerCase().includes(searchInput)
            if (movie.movieRating >= rating && check) {
                return movie;
            }
        }
        );
        setFilterList(filteredMovies)
    }, [searchInput, rating]);

    return (
        <>
            <BrowserRouter>
                <Route path='/movies/:id' render={(props) => <Description {...props} filterList={filterList} />} />
                <div className='main'>
                    {filterList.map((el, index) => {
                        return (
                            <>
                                <MovieCard key={index} {...el} />
                            </>
                        )
                    })}
                    <ModalInput movies={movies} getNewMovie={getNewMovie} />
                </div>
            </BrowserRouter>
        </>
    )
}

export default MovieList

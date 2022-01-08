import './App.css';
import React, { useState } from 'react'
import { uuid } from 'uuidv4';
// import Filter from './Component/Filter'
import MovieList from './Component/MovieList'
import NavBar from './Component/NavBar'

const movies = [
  {
    id: uuid(),
    movieName: 'John Wick 1',
    movieImg: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg',
    movieRating: 5,
    trailer: 'https://www.youtube.com/embed/C0BMx-qxsP4'
  }, {
    id: uuid(),
    movieName: 'Creed',
    movieImg: 'https://upload.wikimedia.org/wikipedia/en/2/24/Creed_poster.jpg',
    movieRating: 4,
    trailer: 'https://www.youtube.com/embed/Uv554B7YHk4'
  }, {
    id: uuid(),
    movieName: 'Avengers Endgame',
    movieImg: 'https://images-na.ssl-images-amazon.com/images/I/81ExhpBEbHL._SY445_.jpg',
    movieRating: 3,
    trailer: 'https://www.youtube.com/embed/TcMBFSGVi1c'
  }, {
    id: uuid(),
    movieName: 'Spiderman Homecoming',
    movieImg: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg',
    movieRating: 3,
    trailer: 'https://www.youtube.com/embed/n9DwoQ7HWvI'
  }, {
    id: uuid(),
    movieName: 'Star Trek',
    movieImg:  "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg",
    movieRating: 3,
    trailer: 'https://www.youtube.com/watch?v=iGAHnZ555nI'
  }

]

function App() {
  const [rating, setRating] = useState(1)
  const [searchInput, setSearchInput] = useState('')
  const getData = (rate, textSearch) => {
    setRating(rate);
    setSearchInput(textSearch);
  }


  return (
    <div>
      <NavBar getData={getData} ></NavBar>
      <MovieList
        movies={movies}
        rating={rating}
        searchInput={searchInput}
      >
      </MovieList>
    </div>
  );
}


export default App;

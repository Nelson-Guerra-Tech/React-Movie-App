import React from 'react';
import axios from '../axios.js';
import './Row.css';
import { useState, useEffect } from 'react';

// path for the images
const baseURL = 'https://image.tmdb.org/t/p/original/';

export default function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // snippet of code that runs on a specific variable/condition
  useEffect(() => {
    //   if brackets are black, run once when row runs and not again
    const fetchMovies = async () => {
      const request = await axios.get(fetchURL);
      console.log(request);
      setMovies(request.data.results);
      return request;
    };
    fetchMovies();
  }, [fetchURL]);

  console.log(movies);

  return (
    <div className='row'>
      {/* title */}
      <h2>{title}</h2>

      {/* container - posters */}
      <div className='row_posters'>
        {/* row posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

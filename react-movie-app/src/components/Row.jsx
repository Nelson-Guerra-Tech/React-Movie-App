import React from 'react';
import axios from '../axios.js';
import './Row.css';
import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

// path for the images
const baseURL = 'https://image.tmdb.org/t/p/original/';

export default function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

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

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  // handle click function to show trailer when img is clicked
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_title || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row_posters'>
        {/* row posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            src={`${baseURL}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import axios from '../axios.js';
import requests from '../request.js';
import './Banner.css';

export default function Banner() {
  const [movie, setMovie] = useState([]);

  // useEffect is a piece of code that runs with a given condition
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  console.log(movie);

  return (
    //   header will have a background img
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgrounfPosition: 'center center',
      }}
    >
      <div className='banner_content'>
        {/* title */}
        <h1 className='banner_title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>{movie?.overview}</h1>
        {/* description */}
      </div>
    </header>
  );
}

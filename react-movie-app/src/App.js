import { useEffect, useState } from 'react';
import axios from 'axios';
import requests from './request';
import Row from './components/Row';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  // app
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      ></Row>
      <Row title='Trending Now' fetchURL={requests.fetchTrending}></Row>
      <Row title='Top Rated' fetchURL={requests.fetchTopRated}></Row>
      <Row title='Action Movies' fetchURL={requests.fetchActionMovies}></Row>
      <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies}></Row>
      <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies}></Row>
      <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies}></Row>
      <Row title='Documentaries' fetchURL={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;

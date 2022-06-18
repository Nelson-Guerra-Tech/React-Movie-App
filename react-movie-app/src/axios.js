import axios from 'axios';

// axios function from retrieving data
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

// requesting from the api
instance.get('');

export default instance;

// API URL
const apiKey = 'b47e9d20c3d948b1e0a8036ce77795fa';

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,

  fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
};

export default requests;

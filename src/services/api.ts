import axios from 'axios';
import { Movie } from '../types/Movie';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

// Função para buscar filmes pelo título
export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}&s=${query}&type=movie`);

  if (response.data.Response === 'True') {
    const movies = response.data.Search;

    // Realiza uma requisição adicional para obter os detalhes de cada filme
    const detailedMovies: Movie[] = await Promise.all(
      movies.map(async (item: any) => {
        const movieDetails = await getMovieDetails(item.imdbID);
        return movieDetails;
      })
    );

    return detailedMovies;
  } else {
    return [];
  }
};

// Função para obter detalhes completos de um filme
export const getMovieDetails = async (id: string): Promise<Movie> => {
  const response = await axios.get(`${BASE_URL}&i=${id}&plot=full`);

  if (response.data.Response === 'True') {
    return {
      id: response.data.imdbID,
      title: response.data.Title,
      description: response.data.Plot,
      rating: parseFloat(response.data.imdbRating),
      poster:
        response.data.Poster !== 'N/A'
          ? response.data.Poster
          : 'https://via.placeholder.com/300x450?text=No+Image',
    };
  } else {
    throw new Error('Movie not found');
  }
};

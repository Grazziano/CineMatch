import axios from 'axios';
import { Movie } from '../types/Movie';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}&s=${query}&type=movie`);

  if (response.data.Response === 'True') {
    return response.data.Search.map((item: any) => ({
      id: item.imdbID,
      title: item.Title,
      description: '', // TODO A API OMDb não traz a descrição na busca. Ela deve ser requisitada no detalhe.
      rating: 0, // TODO O rating também pode ser obtido em uma requisição separada.
      poster:
        item.Poster !== 'N/A'
          ? item.Poster
          : 'https://via.placeholder.com/300x450?text=No+Image',
    }));
  } else {
    return [];
  }
};

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

// Função para buscar filmes por título ou categoria (tipo)
export const searchMoviesByCategory = async (
  query: string = '',
  type: string = ''
): Promise<Movie[]> => {
  const response = await axios.get(
    `${BASE_URL}&s=${query}${type ? `&type=${type}` : ''}`
  );

  if (response.data.Response === 'True') {
    return response.data.Search.map((item: any) => ({
      id: item.imdbID,
      title: item.Title,
      description: '',
      rating: 0,
      poster:
        item.Poster !== 'N/A'
          ? item.Poster
          : 'https://via.placeholder.com/300x450?text=No+Image',
    }));
  } else {
    return [];
  }
};

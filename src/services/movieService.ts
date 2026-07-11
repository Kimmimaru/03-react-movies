import axios, { AxiosError } from 'axios';
import type { Movie, MovieResponse } from '../types/movie';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

interface FetchMoviesParams {
  query: string;
  page?: number;
}

export const fetchMovies = async (
  params: FetchMoviesParams,
): Promise<Movie[]> => {
  try {
    const response = await axiosInstance.get<MovieResponse>('/search/movie', {
      params: {
        query: params.query,
        page: params.page || 1,
      },
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return response.data.results;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(
      `Failed to fetch movies: ${axiosError.message || 'Unknown error'}`,
      { cause: error },
    );
  }
};

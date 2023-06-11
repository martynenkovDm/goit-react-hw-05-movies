import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: `7936da9f8864de7ea98146d0f43f51e5`,
  include_adult: false,
  language: 'en-US',
};

export const getMoviesByQuery = async (query = '') => {
  try {
    const urlParam = query
      ? `/search/movie?&query=${query}`
      : `/movie/upcoming`;
    const { data } = await axios.get(urlParam);
    return data.results;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};

export async function getMovies() {
  try {
    const { data } = await axios.get('/trending/movie/day');
    return data.results;
  } catch (error) {
    throw new Error('Oops, there is no movies');
  }
}

export const getMoviesDetails = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}`);
    return data;
  } catch (error) {
    throw new Error('Oops, there is no cast movie');
  }
};
export const getMoviesCast = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/credits`, {
      params: {
        id: movieId,
        language: 'en-US',
      },
    });
    return data.cast;
  } catch (error) {
    throw new Error('Oops, there is no cast movie');
  }
};

export const getMoviesReviews = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/reviews`, {
      params: {
        id: movieId,
        language: 'en-US',
      },
    });
    return data.results;
  } catch (error) {
    throw new Error('Oops, we don`t have any reviews');
  }
};

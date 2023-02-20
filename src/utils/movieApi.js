import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '1db949d546d8184041e5d93169d90d9f',
  },
});

export const getTrending = async page => {
  const { data } = await instance.get('/trending/movie/day', {
    params: {
      page: page,
    },
  });
  return data.results;
};

export const getMovie = async id => {
  const { data } = await instance.get(`/movie/${id}`, {
    params: {
      append_to_response: 'videos',
    },
  });
  return data;
};

export const searchMovies = async (query, page) => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query: query,
      page: page,
    },
  });

  return data;
};

export const getReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);

  return data.results;
};

export const getCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);

  return data.cast;
};

import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MoviesUnorderedList,
  MovieLink,
  MovieItem,
  MovieTitle,
  MoviePoster,
} from './MoviesList.styles';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesUnorderedList>
      {movies.map(({ original_title, poster_path, id }) => {
        return (
          <MovieItem key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <MoviePoster
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w400${poster_path}`
                    : `https://via.placeholder.com/400x600`
                }
                alt={original_title}
              />

              <MovieTitle>{original_title}</MovieTitle>
            </MovieLink>
          </MovieItem>
        );
      })}
    </MoviesUnorderedList>
  );
};

MoviesList.propTypes = {
  map: PropTypes.array,
};

MoviesList.defaultProps = {
  movies: [],
};

export default MoviesList;

import React from 'react';
import PropTypes from 'prop-types';
import {
  MoviesUnorderedList,
  MovieLink,
  MovieItem,
  MovieTitle,
  MoviePoster,
} from './MoviesList.styles';

const MoviesList = ({ movies }) => {
  return (
    <MoviesUnorderedList>
      {movies.map(({ original_title, poster_path, id }) => {
        return (
          <MovieItem key={id}>
            <MovieLink to={`/movies/${id}`}>
              <MoviePoster
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w400${poster_path}`
                    : `https://via.placeholder.com/320x480`
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

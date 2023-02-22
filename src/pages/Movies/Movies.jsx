//import { Test } from './Movies.styles';
import { useEffect, useState } from 'react';
import Searchbar from 'components/Searchbar';
import MoviesList from 'components/MoviesList';
import { searchMovies } from 'utils/movieApi';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (searchQuery === '') return;

    const fetchMovies = async () => {
      try {
        const movies = await searchMovies(searchQuery, 1);
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [searchQuery]);

  const onFormSubmit = value => {
    setSearchParams({ query: value });
    console.log(value);
  };

  return (
    <>
      <Searchbar onSubmit={onFormSubmit} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;

import { useEffect, useState } from 'react';
import { getTrending } from 'utils/movieApi';
import MoviesList from 'components/MoviesList';
//import { Test } from './Home.styles';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies?.length) {
      return;
    }

    const initialFetch = async () => {
      try {
        const movies = await getTrending();
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      }
    };
    initialFetch(1);
  });

  if (!movies) {
    return;
  }

  console.log(movies);

  return <MoviesList movies={movies} />;
};

export default Home;

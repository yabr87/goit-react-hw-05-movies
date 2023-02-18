import { useEffect, useState } from 'react';
import { getTrending } from 'utils/movieApi';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies?.length) {
      return;
    }

    const initialFetch = async () => {
      try {
        const movies = await getTrending(1);
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      }
    };
    initialFetch();
  });

  if (!movies.length) {
    return;
  }

  return <MoviesList movies={movies} />;
};

export default Home;

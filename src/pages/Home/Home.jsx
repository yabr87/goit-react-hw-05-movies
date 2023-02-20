import useFetch from 'utils/useFetch';
import { getTrending } from 'utils/movieApi';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const movies = useFetch(1, getTrending);
 

  if (!movies) {
    return;
  }

  return <MoviesList movies={movies} />;
};

export default Home;

// useEffect(() => {
  //   if (movies) {
  //     return;
  //   }

  //   const initialFetch = async () => {
  //     try {
  //       const movies = await getTrending(1);
  //       setMovies(movies);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   initialFetch();
  // });
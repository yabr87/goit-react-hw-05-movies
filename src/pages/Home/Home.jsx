import { useEffect, useState } from 'react';
import { getTrending } from 'utils/movieApi';
import { Link } from 'react-router-dom';
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

  return (
    <ul>
      {movies.map(({ original_title, poster_path, id }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <img
                width="320"
                height="480"
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w400${poster_path}`
                    : `https://via.placeholder.com/320x480`
                }
                alt=""
              />
              <p>{original_title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;

import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovie } from 'utils/movieApi';
import { TfiArrowLeft } from 'react-icons/tfi';
import {
  MovieBox,
  MovieText,
  MoviePoster,
  GoBackLink,
} from './MovieDetails.styles';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/test';

  useEffect(() => {
    if (movie) {
      return;
    }

    const initialFetch = async () => {
      try {
        const movie = await getMovie(id);
        console.log(movie);
        const {
          poster_path,
          original_title,
          overview,
          vote_average,
          release_date,
          genres,
        } = movie;

        setMovie({
          poster_path: poster_path
            ? `https://image.tmdb.org/t/p/w400${poster_path}`
            : `https://via.placeholder.com/400x600`,
          original_title,
          overview,
          vote_average: Math.round(vote_average * 10),
          release_date: release_date.slice(0, 4),
          genres: genres.map(genre => genre.name).join(', '),
        });
      } catch (error) {
        console.log(error);
      }
    };
    initialFetch();
  }, [id, movie]);

  if (!movie) {
    return;
  }

  const {
    poster_path,
    original_title,
    vote_average,
    release_date,
    genres,
    overview,
  } = movie;

  return (
    <main>
      <MovieBox>
        <GoBackLink to={backLinkHref}>
          <TfiArrowLeft size="16" /> Go back
        </GoBackLink>
        <MoviePoster src={poster_path} alt={original_title} />
        <div>
          <h2>
            {original_title} ({release_date})
          </h2>
          <MovieText>
            <b>User Score:</b> {vote_average}%
          </MovieText>
          <MovieText>
            <b>Overview:</b> {overview}
          </MovieText>
          <MovieText>
            <b>Genres:</b> {genres}
          </MovieText>
        </div>
        <Outlet />
      </MovieBox>
    </main>
  );
};

export default MovieDetails;

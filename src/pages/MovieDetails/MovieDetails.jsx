import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import { getMovie } from 'utils/movieApi';
import { TfiArrowLeft } from 'react-icons/tfi';
import Spiner from 'components/Spiner';
import {
  MovieBox,
  MovieText,
  MoviePoster,
  GoBackLink,
  InformationLink,
  LinkBox,
} from './MovieDetails.styles';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();
  const location = useLocation();

  const initialPath = useRef(location?.state?.from || null);
  let backLink = '';
  if (initialPath.current?.pathname === '/') {
    backLink = '/';
  } else {
    backLink = initialPath.current?.search
      ? `/movies${initialPath.current?.search}`
      : '/movies';
  }

  useEffect(() => {
    if (movie) {
      return;
    }

    const fetchMovie = async () => {
      try {
        const movie = await getMovie(id);

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
        navigate('/');
      }
    };
    fetchMovie();
  }, [id, movie, navigate]);

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
    <>
      <main>
        <MovieBox>
          <GoBackLink to={backLink}>
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
          <LinkBox>
            <p>Additional Information</p>
            <div>
              <InformationLink to="cast" state={{ from: location }}>
                Cast
              </InformationLink>
              <InformationLink to="reviews" state={{ from: location }}>
                Reviews
              </InformationLink>
            </div>
          </LinkBox>
        </MovieBox>
      </main>
      <Suspense fallback={<Spiner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

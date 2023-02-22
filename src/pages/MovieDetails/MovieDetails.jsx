import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import useFetch from 'utils/useFetch';
import { getMovie } from 'utils/movieApi';
import { TfiArrowLeft } from 'react-icons/tfi';
import Spiner from 'components/Spiner';
import { normalizeMovieDetails } from './normalizeMovieDetails';
import {
  MovieBox,
  MovieText,
  MoviePoster,
  GoBackLink,
  InformationLink,
  LinkBox,
} from './MovieDetails.styles';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = useFetch(id, getMovie);
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

  if (!movie) {
    return <Spiner />;
  }

  const normalizeMovie = normalizeMovieDetails(movie);
  const {
    poster_path,
    original_title,
    vote_average,
    release_date,
    genres,
    overview,
  } = normalizeMovie;

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
              <InformationLink to="cast">Cast</InformationLink>
              <InformationLink to="reviews">Reviews</InformationLink>
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

// useEffect(() => {
//   if (movie) {
//     return;
//   }

//   const fetchMovie = async () => {
//     try {
//       const movie = await getMovie(id);
//       setMovie(normalizeMovieDetails(movie));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   fetchMovie();
// }, [id, movie]);

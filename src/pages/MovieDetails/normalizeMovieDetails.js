export const normalizeMovieDetails = ({
  poster_path,
  original_title,
  overview,
  vote_average,
  release_date,
  genres,
}) => {
  return {
    poster_path: poster_path
      ? `https://image.tmdb.org/t/p/w400${poster_path}`
      : `https://via.placeholder.com/400x600`,
    original_title,
    overview,
    vote_average: Math.round(vote_average * 10),
    release_date: release_date.slice(0, 4),
    genres: genres.map(genre => genre.name).join(', '),
  };
};

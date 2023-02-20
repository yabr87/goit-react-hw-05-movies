import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Cast from '../Cast';
import Reviews from '../Reviews';
import Spiner from '../Spiner';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

const AppRoutes = props => {
  return (
    <Suspense fallback={<Spiner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

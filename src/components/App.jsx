import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './Layout';
import Cast from './Cast';
import Reviews from './Reviews';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

const App = () => {
  return (
    <div className="AppWrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

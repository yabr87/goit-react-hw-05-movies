// import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPage';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Layout from './Layout';
import MovieDetails from './MovieDetails';

const App = () => {
  return (
    <div className="AppWrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

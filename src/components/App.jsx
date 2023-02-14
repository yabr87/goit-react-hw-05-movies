// import React, { useState, useEffect, useCallback } from 'react';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';

const App = () => {
  return (
    <div className="AppWrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<div>dsdsdsdsss</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

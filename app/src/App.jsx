import React, { useEffect, useState } from 'react';
import './App.css';
import 'animate.css';
import Home from './pages/Home/Home';
import Photos from './pages/Photos/Photos';
import Explore from './pages/Explore/Explore';
import Category from './pages/Category/Category';
import { Route, Routes } from 'react-router-dom';

// TODO: routes
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/category/:title" element={<Category />} />
      </Routes>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import './App.css';
import 'animate.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Photos from './pages/Photos/Photos';
import Explore from './pages/Explore/Explore';
import { Route, Routes } from 'react-router-dom';

// TODO: routes
export default function App() {
  // console.log(faClose);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  );
}

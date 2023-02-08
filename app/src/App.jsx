import React, { useEffect, useState } from 'react';
import './App.css';
import 'animate.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Photos from './pages/Photos/Photos';
import Explore from './pages/Explore/Explore';

// TODO: routes
export default function App() {
  // console.log(faClose);
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Photos /> */}
      <Explore />
      <Footer />
    </>
  );
}

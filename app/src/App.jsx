import React, { useEffect, useState } from 'react';
import './App.css';
import 'animate.css';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
export default function App() {
  // console.log(faClose);
  return (
    <>
      {/* <Test /> */}
      {/* <AccessAlarm /> */}
      <Navbar />
      <Home />
      {/* <FontAwesomeIcon
        icon={faClose}
        className={`ml-auto fa-xl ease-in-out duration-150 hover:text-primary-blue hover:cursor-pointer sm:hidden`}
      /> */}
    </>
  );
}

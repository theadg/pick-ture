import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'animate.css';
import Home from './pages/Home/Home';
function App() {
  return (
    <>
      {/* <Navbar /> */}

      <Home />
    </>
    // <div className="App">
    //   <h1 className="text-rose-400 font-bold">Hello world</h1>
    // </div>
  );
}

export default App;

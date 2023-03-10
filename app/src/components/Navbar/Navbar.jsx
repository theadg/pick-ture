import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import 'animate.css/animate.min.css';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const { isLoggedIn, logout } = useAuth();

  const menuRef = useRef();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (width >= 550) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [width]);
  useEffect(() => {
    if (isOpen) {
      setHidden(false);
    } else {
      menuRef.current.addEventListener('animationend', handleAnimationEnd);
    }

    // CLEAN UP FUNCTION
    return () => {
      if (menuRef.current) {
        menuRef.current.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [isOpen]);

  const handleAnimationEnd = () => {
    setHidden(true);
  };

  const toggle = () => {
    console.log('I GOT CALLED');
    setIsOpen(!isOpen);
  };

  return (
    <div className="animate__animated animate__fadeInDown z-50">
      <nav className="relative lg:px-60 md:px-20 sm:px-10 w-screen px-8 py-5 flex justify-between sm:items-center">
        <h3 className="font-main uppercase text-2xl font-bold">
          <span className="text-primary-blue">Pick</span>ture
        </h3>

        <button
          onClick={toggle}
          className={`${
            hidden ? '' : 'hidden'
          } h-6 sm:hidden  hover:text-primary-blue ease-in-out text-3xl duration-150 hover:cursor-pointer`}
        >
          ☰
        </button>
        {/* <img
        src={Menu}
        
      /> */}

        {/* DIV */}
        <div
          className={`animate__animated ${
            isOpen ? 'animate__fadeInDown' : 'animate__fadeOutUp'
          }   ${
            hidden ? 'hidden' : ''
          }   right-0  sm:p-0 sm:bg-opacity-0 sm:flex-row  sm:w-3/5 sm:justify-between  w-60 bg-secondary-bg h-auto p-8 font-medium rounded-lg flex flex-col ease-in-out duration-150`}
          ref={menuRef}
        >
          <button
            onClick={toggle}
            className={`ml-auto fa-xl ease-in-out duration-150 hover:text-primary-blue hover:cursor-pointer sm:hidden`}
          >
            ✕
          </button>
          <ul className="flex sm:flex-row flex-col justify-center items-center gap-4">
            <li>
              <Link
                to="/"
                className="text-white hover:text-primary-blue hover:border-solid  ease-in-out duration-150"
                href=""
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/contest"
                className="text-white hover:text-primary-blue hover:border-solid  ease-in-out duration-150"
                href=""
              >
                Contest
              </Link>
            </li>

            <li>
              <Link
                to="/photos"
                className="text-white hover:text-primary-blue hover:border-solid  ease-in-out duration-150"
              >
                Photos
              </Link>
            </li>

            <li>
              <Link
                to="/explore"
                className="text-white hover:text-primary-blue hover:border-solid  ease-in-out duration-150"
                href=""
              >
                Explore
              </Link>
            </li>
          </ul>
          {!isLoggedIn ? (
            <Link
              to="/sign-up"
              className="text-white hover:text-primary-bg hover:border-solid  ease-in-out duration-150"
              href=""
            >
              <button className="sm:mt-0 sm:w-auto mt-5 bg-primary-blue p-2 rounded font-main text-sm w-full">
                Sign Up
              </button>
            </Link>
          ) : (
            <Link
              to="/photos"
              className="text-white hover:text-primary-bg hover:border-solid  ease-in-out duration-150"
              href=""
            >
              <button className="sm:mt-0 sm:w-auto mt-5 bg-primary-blue p-2 rounded font-main text-sm w-full">
                View
              </button>
            </Link>
          )}
        </div>

        <div className="hidden" id="navMenu"></div>
      </nav>
    </div>
  );
}

export default Navbar;

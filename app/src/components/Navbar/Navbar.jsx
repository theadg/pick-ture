import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faWindowClose,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
// mobile first baby <3
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(true);
  const menuRef = useRef();

  const [width, setWidth] = useState(window.innerWidth);

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
    // kind of lesson learned here
    if (isOpen) {
      setHidden(false);
    } else {
      menuRef.current.addEventListener('animationend', handleAnimationEnd);
    }
    // CLEAN UP FUNCTION
    return () => {
      menuRef.current.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [isOpen]);

  const handleAnimationEnd = () => {
    setHidden(true);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative md:px-40 sm:px-10 w-screen px-8 py-5 flex justify-between sm:items-center">
      <h3 className="font-main uppercase text-2xl">
        <span className="text-primary-blue">Pick</span>ture
      </h3>

      <FontAwesomeIcon
        icon={faBars}
        onClick={toggle}
        className={`${
          hidden ? '' : 'hidden'
        } sm:hidden fa-2x hover:text-primary-blue ease-in-out duration-150 hover:cursor-pointer`}
      />

      {/* DIV */}
      <div
        className={`animate__animated ${
          isOpen ? 'animate__fadeInDown' : 'animate__fadeOutUp'
        }   ${
          hidden ? 'hidden' : ''
        } fixed top-10 right-0  sm:p-0 sm:bg-opacity-0 sm:flex-row  sm:w-3/5 sm:justify-between  w-60 bg-secondary-bg h-auto p-8 font-medium rounded-lg flex flex-col ease-in-out duration-150`}
        ref={menuRef}
      >
        <FontAwesomeIcon
          icon={faClose}
          onClick={toggle}
          className={`ml-auto fa-xl ease-in-out duration-150 hover:text-primary-blue hover:cursor-pointer sm:hidden`}
        />
        <ul className="flex  justify-center">
          <li className=" grid sm:grid-flow-col  gap-4 font-sans items-center h-full">
            <a
              className="text-white hover:text-primary-blue hover:border-solid  ease-in-out duration-150"
              href=""
            >
              Home
            </a>
            <a className="text-white hover:text-primary-blue hover:border-solid  ease-in-out duration-150">
              Photos
            </a>
            <a
              className="text-white hover:text-primary-blue hover:border-solid  ease-in-out duration-150"
              href=""
            >
              Explore
            </a>
          </li>
        </ul>

        <button className="sm:mt-0 sm:w-auto mt-5 bg-primary-blue p-2 rounded font-main text-sm w-full">
          Sign Up
        </button>
      </div>

      <div className="hidden" id="navMenu"></div>
    </nav>
  );
}

export default Navbar;

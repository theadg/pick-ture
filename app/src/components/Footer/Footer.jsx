import React from 'react';
import apple from '../../assets/apple.svg';
import ig from '../../assets/ig.svg';
import figma from '../../assets/figma.svg';
import google from '../../assets/google.svg';
import twitter from '../../assets/twitter.svg';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <footer className="pt-14 flex flex-col w-full items-center justify-center gap-4">
          <h3 className="font-main uppercase text-2xl">
            <span className="text-primary-blue">Pick</span>ture
          </h3>

          <ul className="flex justify-center gap-8 w-100">
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

          {/* <hr className="h-0 w-full text-primary-blue bg-primary-blue" /> */}
          <div className="flex flex-row-reverse gap-6">
            <img className="w-8" src={apple} alt="" />
            <img className="w-8" src={twitter} alt="" />
            <img className="w-8" src={ig} alt="" />
            <img className="w-8" src={figma} alt="" />
            <img className="w-8" src={google} alt="" />
          </div>

          <div className="mt-8 mb-4 text-center font-main">
            Designed and Developed by{' '}
            <span className="text-primary-blue">Bernard Andrew De Guzman</span>
          </div>
        </footer>
      </AnimationOnScroll>
    </>
  );
}

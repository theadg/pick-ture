import React from 'react';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Steps(props) {
  const { icon, heading, para, index } = props;

  console.table(icon, heading, para, index);
  return (
    <>
      <AnimationOnScroll
        animateIn={
          index % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'
        }
      >
        <div className="  max-w-sm grid grid-cols-5 grid-rows-3 align justify-center items-center relative">
          <h1 className="absolute  z-0 text-max font-bold font-main row-auto text-secondary-bg">
            {index}
          </h1>
          <h3 className="z-10 col-start-1 col-end-6 capitalize font-bold font-main text-2xl text-center">
            {heading}
          </h3>
          <p className="z-10 col-start-1 col-end-6 font-sans text-center px-4">
            {para}
          </p>

          <img
            className="absolute col-z-0 right-0 opacity-60 h-40 w-28"
            src={icon}
            alt=""
          />
        </div>
      </AnimationOnScroll>
    </>
  );
}

export default Steps;

import React, { useEffect } from 'react';
import heroImg from '../../assets/heroImg.avif';
import { steps } from './steps';
import Steps from '../../components/Hero/Steps';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Lamborghini from '../../assets/lambo.svg';
import Remington from '../../assets/remington.svg';
import Champion from '../../assets/champ.svg';
import heartAccent from '../../assets/heartAccent.svg';
import underline from '../../assets/underline.svg';
import enumAccent from '../../assets/enumAccent.svg';

function Home() {
  return (
    <>
      {/* TODO: Perhaps, animate once */}
      <div className="gap-6 px-8 flex flex-col items-center mt-12 justify-center bg-rose-900 ">
        <div className="grid grid-header justify-center justify-items-center sm:justify-items-end">
          <img
            className="grid-row row-start-2 animate__animated animate__fadeInUp animate__delay-1s top-16 w-3/5 sm:w-1/2"
            src={underline}
            alt=""
          />
          <h1 className="z-10 max-h-min max-w-desk  animate__animated animate__fadeInUp font-bold font-main text-3xl text-center">
            SHOW OFF YOUR <span className="text-primary-blue">BEST SHOTS</span>
          </h1>
        </div>
        <p className="max-w-desk md:px-20 animate__animated animate__fadeInUp  font-sans text-center ">
          Discover the power of community in photography. Share your best
          moments, vote on others', and rise to fame with every click.
        </p>

        <button className="animate__animated animate__fadeInUp animate__delay sm:mt-0 sm:w-auto mt-5 bg-primary-blue p-2 rounded font-main text-sm px-8">
          VIEW PHOTOS
        </button>
        {/* TODO: box shadow */}

        <div className="relative md:max-w-desk w-full  flex justify-center ">
          <img
            className=" absolute z-10 sm:right-0 md:w-min w-1/3 md:top-3/4 right-0 top-52 animate__animated animate__fadeInUp animate__delay-1s"
            src={heartAccent}
            alt=""
          />
          <img
            className="z-0 col-span-3 row-start-2 col-start-1 row-span-5 hero__img  min-w-auto animate__animated animate__fadeInUp animate__delay mt-8 rounded-2xl "
            src={heroImg}
            alt="Hero Image"
          />
        </div>
      </div>
      <div className=" gap-4 px-8 flex flex-col items-center  justify-center py-16 ">
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className="grid  grid__header--sub relative pt-20">
            <img className="z-0 h-24  top-6 absolute " src={enumAccent} />
            <h2 className="z-10 row-start-3 col-span-3 md:text-3xl max-w-desk md:px-20 uppercase font-bold font-main text-2xl text-center">
              expressing yourself has{' '}
              <span className="text-primary-blue">never been so easy </span>
            </h2>
          </div>
        </AnimationOnScroll>
        {/* STEPS */}
        {steps.map((step) => (
          <Steps
            key={step.index}
            icon={step.icon}
            heading={step.heading}
            para={step.para}
            index={step.index}
          />
        ))}
      </div>

      <div className=" gap-10 px-8 flex flex-col items-center  justify-center py-4 mb-14">
        <AnimationOnScroll className="mr-0" animateIn="animate__fadeInLeft">
          <h2 className="md:text-3xl uppercase font-bold  font-main text-3xl text-center ">
            As <span className="text-primary-blue">featured </span> in
          </h2>
        </AnimationOnScroll>
        <div className="flex md:flex-row  flex-col gap-12 items-center justify-center">
          <AnimationOnScroll animateIn="animate__flip">
            <img className="" src={Lamborghini} alt="Lamborghini Logo" />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__flip">
            <img className="" src={Champion} alt="Lamborghini Logo" />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__flip">
            <img className="" src={Remington} alt="Lamborghini Logo" />
          </AnimationOnScroll>
        </div>
      </div>

      <AnimationOnScroll className="mr-0" animateIn="animate__fadeInUp">
        <div className="bg-secondary-bg gap-10 px-8 flex flex-col items-center  justify-center py-16 md:gap-4">
          <h2 className="md:text-3xl uppercase font-bold font-main text-3xl text-center ">
            <span className="text-primary-blue">Never miss </span> a pic
          </h2>

          <p className="font-sans px-8 text-center text-white">
            Sign up to our news letter to keep-up to date news and updates.
          </p>

          <div className="md:gap-6 flex flex-col items-center w-full">
            <input
              className="rounded w-full text-center px-8 py-3 font-sans md:w-min md:px-12 bg-primary-bg"
              type="text"
              name=""
              id=""
              placeholder="johndoe@address.com"
            />
            <button className="font-bold text-primary-bg animate__animated animate__fadeInUp animate__delay sm:mt-0 sm:w-auto mt-5 bg-primary-blue p-2 rounded font-main text-sm px-8">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </AnimationOnScroll>
    </>
  );
}

export default Home;

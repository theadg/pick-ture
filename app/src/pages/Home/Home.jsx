import React, { useEffect } from 'react';
import heroImg from '../../assets/heroImg.avif';
import steps from './steps';
import Steps from '../../components/Navbar/Hero/Steps';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Lamborghini from '../../assets/lambo.png';
import Remington from '../../assets/remington.png';
import Champion from '../../assets/champ.png';

function Home() {
  return (
    <>
      {/* TODO: desktop responsiveness */}
      <div className=" gap-4 px-8 flex flex-col items-center mt-12 justify-center bg-rose-900">
        <h1 className="animate__animated animate__fadeInUp font-bold font-main text-3xl text-center">
          SHOW OFF YOUR <span className="text-primary-blue">BEST SHOTS</span>
        </h1>

        <p className="animate__animated animate__fadeInUp  font-sans text-center ">
          Discover the power of community in photography. Share your best
          moments, vote on others', and rise to fame with every click.
        </p>

        <button className="animate__animated animate__fadeInUp animate__delay sm:mt-0 sm:w-auto mt-5 bg-primary-blue p-2 rounded font-main text-sm px-8">
          VIEW PHOTOS
        </button>
        {/* TODO: box shadow */}
        <img
          className="animate__animated animate__fadeInUp animate__delay mt-8 rounded-2xl "
          src={heroImg}
          alt="Hero Image"
        />
      </div>

      <div className=" gap-4 px-8 flex flex-col items-center mt-12 justify-center py-16">
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <h2 className="uppercase font-bold font-main text-2xl text-center">
            expressing yourself has{' '}
            <span className="text-primary-blue">never been so easy </span>
          </h2>
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
          <h2 className="uppercase font-bold  font-main text-3xl text-center ">
            As <span className="text-primary-blue">featured </span> in
          </h2>
        </AnimationOnScroll>
        <div className="flex flex-col gap-12 items-center justify-center">
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

      <div className="bg-secondary-bg gap-10 px-8 flex flex-col items-center  justify-center py-16">
        <AnimationOnScroll className="mr-0" animateIn="animate__fadeInLeft">
          <h2 className="uppercase font-bold font-main text-3xl text-center ">
            <span className="text-primary-blue">Never miss </span> a pic
          </h2>

          <p className="font-sans px-8 text-center text-white">
            Sign up to our news letter to keep-up to date news and updates.
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll className="mr-0" animateIn="animate__fadeInRight">
          <div className="flex flex-col items-center w-full">
            <input
              className="rounded w-full text-center px-8 py-3 font-sans  focus:border-{primary-blue-}-75 bg-primary-bg"
              type="text"
              name=""
              id=""
              placeholder="johndoe@address.com"
            />
            <button className="font-bold text-primary-bg animate__animated animate__fadeInUp animate__delay sm:mt-0 sm:w-auto mt-5 bg-primary-blue p-2 rounded font-main text-sm px-8">
              SUBSCRIBE
            </button>
          </div>
        </AnimationOnScroll>
      </div>
    </>
  );
}

export default Home;

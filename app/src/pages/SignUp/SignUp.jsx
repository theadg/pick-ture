import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  // TODO: validation here
  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    console.log(account);
  };

  const handleSubmit = async (e) => {
    if (account.password !== account.confirmPassword) {
      // HANDLE ERROR HERE
      alert('mali yan eh');
      return;
    }
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/user/signup', account);
      alert('submitted eh');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* TODO: add svg */}

      <Navbar />
      <div className="flex  flex-col items-center justify-center h-full ">
        <div className="flex px-10 py-10 mt-20 bg-card rounded-2xl flex-col items-center justify-center   w-max gap-4 shadow-xl">
          <div className="">
            <h1 class="font-main text-4xl font-bold text-primary-blue">
              Sign In
            </h1>
            <p class="font-sans">Share your shots to the world</p>
          </div>
          {/* form itself */}
          <form action="" className="grid gap-4" onSubmit={handleSubmit}>
            <input
              className="pb-1 border-b-2 font-sans w-half input duration-200"
              type="text"
              name="name"
              id=""
              placeholder="Name"
              onChange={handleChange}
              required
            />

            <input
              className="pb-1  border-b-2 font-sans w-half input  duration-200"
              type="email"
              name="email"
              id=""
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              className="pb-1  border-b-2 font-sans w-half input  duration-200"
              type="password"
              name="password"
              id=""
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <input
              className="pb-1  border-b-2 font-sans w-half input  duration-200"
              type="password"
              name="confirmPassword"
              id=""
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
            <div className="flex align-center gap-2 justify-center">
              <input
                type="checkbox"
                name=""
                id="privacy"
                className="accent-primary-blue"
                required
              />
              <label for="privacy" className=" text-sm text-[#9ca3a7]">
                I agree to privacy and terms
              </label>
            </div>
            <button
              type="submit"
              className="font-bold text-primary-bg animate__animated animate__fadeInUp animate__delay sm:mt-0 sm:w-auto  mt-5 bg-primary-blue  w-full p-2 rounded font-main text-sm px-8"
            >
              Sign Up
            </button>

            <p className="text-sm">
              Already have an account?{' '}
              <Link to="/log-in">
                <span class="text-primary-blue font-bold hover:cursor-pointer">
                  {' '}
                  Log in.{' '}
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;

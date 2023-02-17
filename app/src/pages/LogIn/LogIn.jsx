import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import { useAuth } from '../../AuthContext';

function LogIn() {
  const { login } = useAuth();

  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    console.log(account);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(account);
    try {
      await axios.post('http://localhost:5000/user/login', account);
      login();
      navigate('/');
    } catch (err) {
      alert('Invalid credentials');
      throw new err();
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex  flex-col items-center justify-center h-full  animate__animated animate__fadeInUp">
        <div className="flex px-10 py-10 mt-20 bg-card rounded-2xl flex-col items-center justify-center   w-max gap-4 shadow-xl">
          <div className="">
            <h1 className="font-main text-4xl font-bold text-primary-blue">
              Log In
            </h1>
            <p className="font-sans">Welcome back!</p>
          </div>
          {/* form itself */}
          <form action="" className="grid gap-4" onSubmit={handleSubmit}>
            <input
              className="pb-1  border-b-2 font-sans w-half input  duration-200"
              type="email"
              name="email"
              id=""
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <input
              className="pb-1  border-b-2 font-sans w-half input  duration-200"
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required
              onChange={handleChange}
            />

            <div className="flex align-center gap-2 justify-center">
              <input
                type="checkbox"
                name=""
                id="privacy"
                className="accent-primary-blue"
              />
              <label for="privacy" className=" text-sm text-[#9ca3a7]">
                Remember Me
              </label>
            </div>
            <button className="font-bold text-primary-bg animate__animated animate__fadeInUp animate__delay sm:mt-0 sm:w-auto  mt-5 bg-primary-blue  w-full p-2 rounded font-main text-sm px-8">
              Log In
            </button>

            <p className="text-sm">
              Don't have an account?{' '}
              <Link to="/sign-up">
                <span className="text-primary-blue font-bold hover:cursor-pointer">
                  {' '}
                  Sign Up.{' '}
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

export default LogIn;

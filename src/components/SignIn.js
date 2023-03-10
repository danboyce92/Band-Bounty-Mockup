import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../styles/Auth.css';

const SignIn = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errorDisplay, setErrorDisplay] = useState('');

  const navigate = useNavigate();

  const loginButton = async (e) => {
    try {
      e.preventDefault();
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate('/livebounties');
    } catch (error) {
      setErrorDisplay(error.message.slice(10));
    }
  };

  return (
    <div
      id="auth-text"
      className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mx-auto w-8/12 sm:w-6/12 bg-slate-200 mt-4 rounded-md max-w-[36rem]"
    >
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-800">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link
              to="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {' '}
              sign up here for free
            </Link>
          </p>
          <div className="text-red-500">{errorDisplay}</div>
        </div>
        <form className="mt-8 space-y-6">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="/"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              onClick={loginButton}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>

    // <div>
    //   <form>
    //     <label>Sign In</label>
    //     <input onChange={(e) => {setLoginEmail(e.target.value)}} type="text" placeholder="email"></input>
    //     <input onChange={(e) => {setLoginPassword(e.target.value)}} type="password" placeholder="password"></input>
    //     <button onClick={loginButton}>Login here</button>
    //   </form>
    // </div>
  );
};

export default SignIn;

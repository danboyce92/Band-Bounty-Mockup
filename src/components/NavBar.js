import React from 'react';
import Logo from '../bandbountylogo.png';
import { Link } from 'react-router-dom';
import '../styles/index.css';

import SignoutButton from './SignoutButton';
// import Link from "./Link";

const NavBar = ({ user }) => {
  return (
    <div id="nav-text" className="bg-gray-100">
      <div className="max-w-8xl mx-auto border border-gray-500">
        <div className="flex justify-between space-x-4 ml-5">
          <div className="flex">
            <div className="flex items-center py-3 px-2 text-gray-700 ">
              <Link to="/">
                <img height="220px" width="220px" src={Logo} alt="bb logo" />
              </Link>
            </div>

            <div className="flex items-center space-x-4 pl-8">
              <Link to="livebounties" className="py-2 px-3 text-gray-700">
                Live Bounties
              </Link>
              <Link to="/venues" className="py-2 px-3 text-gray-700">
                Venues
              </Link>
            </div>
          </div>

          <div className="relative sign-in flex items-center right-5">
            {!user ? (
              <Link to="/signin" className="py-2 px-3 text-gray-700">
                Sign in
              </Link>
            ) : (
              <div className="flex items-center">
                <div className="mr-6">{user.email}</div>
                <div className="mr-3">
                  <SignoutButton />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

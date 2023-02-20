import React from 'react';
import { Link } from 'react-router-dom';
import LivePic from '../../gig2.jpg';
import LivePic2 from '../../gig4.webp';
import '../../styles/LandingPage.css';

const Divider = ({ user }) => {
  //Creates a link to signUp page
  //Only active if not signed in
  let signupLinkTo;
  let signupLinkClass;

  if (!user) {
    signupLinkTo = '/signup';
    signupLinkClass = 'font-medium text-indigo-400 hover:text-indigo-200';
  } else {
    signupLinkTo = '';
    signupLinkClass = '';
  }

  return (
    <div id="divider-section">
      <div className=" w-full bg-gray-900 grid grid-rows-7 grid-cols-10 gap-4 mt-6">
        <div className="h-full w-full col-span-5 row-span-6 col-start-1 row-start-1">
          <div className="h-full w-full bg-gray-900 top-0 left-0 opacity-50 z-5">
            <img
              src={LivePic}
              alt="concert"
              className="border-8 border-double rounded-lg border-slate-800"
            />
          </div>
        </div>

        <div className="col-span-3 row-span-6 col-start-7 divide-y-2 divide-solid divide-gray-400 my-auto">
          <div className=" col-span-3 col-start-6 row-start-1 row-span-2  text-white text-center mb-4">
            <Link to={signupLinkTo} className={signupLinkClass}>
              Sign up here
            </Link>
            and launch the bounty for your favourite artists today
          </div>

          <div className="col-span-3 col-start-7 row-start-3 row-span-2 text-white text-center mb-4">
            Just pick your artist, choose your city and spread the word
          </div>

          <div className="col-span-3 col-start-7 row-start-5 row-span-2 text-white text-center mb-4">
            If enough funds are raised and the artist is available, the show
            will become a reality
          </div>
        </div>
      </div>

      <div className="w-full h-20"></div>

      <div className=" w-full bg-gray-900 grid grid-rows-8 grid-cols-10 gap-4">
        <div className="col-span-3 row-span-6 col-start-2 divide-y-2 divide-solid divide-gray-400 my-auto">
          <div className=" col-span-3 col-start-2 row-start-1 row-span-2 text-white text-center mb-4">
            Keep watch on your upcoming events as some will have VIP tickets
            available too
          </div>

          <div className="col-span-4 col-start-2 row-start-3 row-span-2 text-white text-center mb-4">
            The artist has a window of 90 days to green-light the show
          </div>

          <div className="col-span-4 col-start-2 row-start-5 row-span-2 text-white text-center mb-4">
            If after 90 days from being green-lit the bounty target has not been
            met, the bounty will expire and all funds will be returned
          </div>
        </div>

        <div className="h-full w-full top-0 left-0 col-span-5 row-span-6 col-start-6 row-start-1 bg-gray-900 opacity-40 z-5">
          <img
            src={LivePic2}
            alt="concert"
            className="ml-6 border-8 border-double rounded-lg border-slate-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Divider;

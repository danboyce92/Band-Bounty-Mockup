import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Venues.css';

import {
  renderedDublinVenues,
  renderedCorkVenues,
  renderedStockholmVenues,
  renderedVanVenues,
} from './VenueList';

const Venues = () => {
  return (
    <div id="venues">
      <div className="h-screen  bg-[url('../venues.jpg')] bg-cover bg-no-repeat bg-bottom max-w-7xl mx-auto">
        <div className="h-full w-full bg-gray-900 top-0 left-0 opacity-90 z-1 ">
          <div
            id="venues-title"
            className="text-center text-white  mt-10 underline underline-offset-8 py-8"
          >
            Venues
          </div>

          <div
            id="venues-text"
            className=" text-white text-center pt-8 pb-36 w-1/2 mx-auto"
          >
            We openly encourage discussions with new potential venue partners.
            If you run a venue that might be a suitable host for some of our
            shows please get in touch{' '}
            <Link
              to="/contact"
              className="text-indigo-400 hover:text-indigo-200"
            >
              here
            </Link>
          </div>

          <div
            id="venues-title"
            className="my-auto text-white text-center underline underline-offset-8 py-16"
          >
            Venues we work with
          </div>

          <div
            id="venues-list"
            className="grid grid-cols-4 grid-rows-12 sm:grid-rows-3"
          >
            <div className="row-start-1 col-span-1 col-start-1 row-span-3 text-white mx-auto">
              <div className="underline underline-offset-8 text-[19px] sm:text-[24px]">
                Dublin
              </div>
              {renderedDublinVenues}
            </div>
            <div className="col-span-1 col-start-2 row-start-1 row-span-3 text-white mx-auto">
              <div className="underline underline-offset-8 text-[19px] sm:text-[24px]">
                Cork
              </div>
              {renderedCorkVenues}
            </div>
            <div className="col-span-1 col-start-3 row-start-1 row-span-3 text-white mx-auto">
              <div className="underline underline-offset-8 text-[19px] sm:text-[24px]">
                Vancouver
              </div>
              {renderedVanVenues}
            </div>
            <div className="col-span-1 col-start-4 row-start-1 row-span-3 text-white mx-auto">
              <div className="underline underline-offset-8 text-[19px] sm:text-[24px]">
                Stockholm
              </div>
              {renderedStockholmVenues}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venues;

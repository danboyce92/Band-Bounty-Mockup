import React from 'react';
import '../../styles/LandingPage.css';
import LandingLogo from '../../bandbountylogo2.png';

const Hero = () => {
  return (
    <div id="hero-section">
      <div className="h-screen  bg-[url('../gig.jpg')] bg-cover bg-no-repeat bg-bottom">
        <div className="h-full w-full bg-gray-900 top-0 left-0 opacity-90 z-1  grid grid-rows-6 grid-cols-6 gap-4">
          <span
            id="hero-section-top"
            className="relative col-span-3 col-start-2 row-start-2 flex  justify-items-center line text-white leading-normal "
          >
            Welcome to
          </span>

          <div className="h-full w-full top-0 left-0  col-span-4 col-start-2 row-start-3">
            <img height="fill" width="fill" src={LandingLogo} alt="bb logo" />
          </div>

          <div
            id="hero-section-bottom"
            className="h-full w-full top-0 left-0 col-span-2 row-span-2 col-start-4 row-start-4 text-white text-[42px] text-center z-20"
          >
            <br />
            The internet's first crowd sourcing live event coordinating platform
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

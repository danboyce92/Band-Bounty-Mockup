import React from "react";
import LandingLogo from '../bandbountylogo2.png';
import '../index.css'



const LandingPage = () => {


    return (
        <div className="container relative mx-auto">
            <div className="h-screen  bg-[url('../gig.jpg')] bg-cover bg-no-repeat bg-bottom">
                <div className="h-full w-full bg-gray-900 top-0 left-0 opacity-90 z-1  grid grid-rows-6 grid-cols-6 gap-4">
                    <span className="relative col-span-2 col-start-2 row-start-2 flex text-xl justify-items-center text-white text-[64px]">Welcome to</span>

                    <div className="h-full w-full top-0 left-0  col-span-4 col-start-2 row-start-3">
                    <img height="fill" width="fill" src={LandingLogo} alt="bb logo" />
                    </div>
                
                    <div className="h-full w-full top-0 left-0 col-span-2 row-span-2 col-start-4 row-start-4 text-white text-[42px]">
                        The internet's first crowd sourcing live event coordinating platform
                    </div>
                
                
                </div>
            </div>
            
            <div className="h-96 w-full bg-gray-900">

            </div>
            <canvas className="particleBackground w-full"></canvas>

        </div>
    )
}

export default LandingPage;
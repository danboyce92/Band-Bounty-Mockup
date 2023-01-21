import React from "react";
import LandingLogo from '../bandbountylogo2.png';
import LivePic from '../gig2.jpg';
import LivePic2 from '../gig4.webp';
import '../index.css'
import Particle from "./Particle";



const LandingPage = () => {


    return (
        <div className="container relative mx-auto ">
            <div className="h-screen  bg-[url('../gig.jpg')] bg-cover bg-no-repeat bg-bottom">
                <div className="h-full w-full bg-gray-900 top-0 left-0 opacity-90 z-1  grid grid-rows-6 grid-cols-6 gap-4">
                    <span className="relative col-span-3 col-start-2 row-start-2 flex text-xl justify-items-center line text-gray-400 leading-normal text-[64px]">Welcome to</span>

                    <div className="h-full w-full top-0 left-0  col-span-4 col-start-2 row-start-3">
                    <img height="fill" width="fill" src={LandingLogo} alt="bb logo" />
                    </div>
                
                    <div className="h-full w-full top-0 left-0 col-span-2 row-span-2 col-start-4 row-start-4 text-gray-400 text-[42px]">
                        <br/>
                        The internet's first crowd sourcing live event coordinating platform
                    </div>
                
                
                </div>
            </div>



            <div className="relative">
                <Particle />
            </div>

            <div className="w-full h-4"></div>
            

            <div className="h-full w-full ">

                <div className="h-96 w-full bg-gray-900 grid grid-rows-7 grid-cols-10 gap-4">
                    <div className="h-full w-full col-span-5 row-span-6 col-start-1 row-start-1 border-8 border-double rounded-lg border-slate-800">
                        <div className="h-full w-full bg-gray-900 top-0 left-0 opacity-50 z-5">
                        <img src={LivePic} alt="concert" />
                        </div>

                    </div>

                    <div className="col-span-3 row-span-6 col-start-7 divide-y divide-solid divide-white">
                        <div className=" col-span-3 col-start-6 row-start-1 row-span-2 text-[2rem] text-gray-400 text-center">
                            Sign up and start the bounty for your favourite artists today
                        </div>

                        <div className="col-span-3 col-start-7 row-start-3 row-span-2 text-[2rem] text-gray-400 text-center">
                            Just pick your artist and choose your city 
                        </div>

                        <div className="col-span-3 col-start-7 row-start-5 row-span-2 text-[2rem] text-gray-400 text-center">
                            
                        </div>

                    </div>

                </div>

                <div className="w-full h-36"></div>

                <div className="h-96 w-full bg-gray-900 grid grid-rows-6 grid-cols-8 gap-4">
                    <div className="h-full w-full top-0 left-0 col-span-5 row-span-6 col-start-5 row-start-1 bg-gray-900 opacity-40 z-5 border-4 border-double rounded-lg border-slate-800">
                        <img src={LivePic2} alt="concert" />
                    </div>

                </div>

            </div>



        </div>
    )
}

export default LandingPage;
import React from "react";
import { Link } from "react-router-dom";

import { renderedDublinVenues, renderedCorkVenues, renderedStockholmVenues, renderedVanVenues } from "./VenueList";

const Venues = () => {

    return (
        <div>
            <div className="h-screen  bg-[url('./venues.jpg')] bg-cover bg-no-repeat bg-bottom max-w-7xl mx-auto">
                <div className="h-full w-full bg-gray-900 top-0 left-0 opacity-90 z-1  grid grid-rows-6 grid-cols-6 gap-4">

                <div className="col-span-2 row-span-1 col-start-3 row-start-1 text-center text-white text-[52px] mt-10 underline underline-offset-8">
                    Venues
                </div>

                <div className="col-span-4 row-span-1 col-start-2 row-start-2 text-white text-center text-[32px]">
                    We openly encourage discussions with new potential venue partners. If you run a venue that might be a suitable host for some of our shows please get in touch <Link to="/contact" className="text-indigo-600 hover:text-indigo-500"> here </Link>
                </div>

                <div className="my-auto col-start-3 row-start-4 col-span-2 row-span-1 text-white text-center text-[34px] underline underline-offset-8">
                Venues we work with
                </div>

                <div className="col-start-2 row-start-5 row-span-3 text-white">
                    <div className="underline underline-offset-8 text-[24px]">Dublin</div>
                    {renderedDublinVenues}
                </div>
                <div className="col-start-3 row-start-5 row-span-3 text-white">
                    <div className="underline underline-offset-8 text-[24px]">Cork</div>
                    {renderedCorkVenues}
                </div>
                <div className="col-start-4 row-start-5 row-span-3 text-white">
                    <div className="underline underline-offset-8 text-[24px]">Vancouver</div>
                    {renderedVanVenues}
                </div>
                <div className="col-start-5 row-start-5 row-span-3 text-white">
                    <div className="underline underline-offset-8 text-[24px]">Stockholm</div>
                    {renderedStockholmVenues}
                </div>

                </div>
            </div>
        </div>
    )
}

export default Venues;
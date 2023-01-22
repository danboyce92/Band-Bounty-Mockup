import React from "react";

const Venues = () => {

    return (
        <div>
            <div className="h-screen  bg-[url('./venues.jpg')] bg-cover bg-no-repeat bg-bottom max-w-7xl mx-auto">
                <div className="h-full w-full bg-gray-900 top-0 left-0 opacity-90 z-1  grid grid-rows-6 grid-cols-6 gap-4">

                <div className="col-span-2 row-span-1 col-start-3 row-start-1 text-center text-white text-[52px] mt-10 underline underline-offset-8">
                    Venues
                </div>

                <div className="col-span-2 row-span-2 col-start-3 row-start-2 text-white text-center text-[28px]">
                    Hello
                </div>

                </div>
            </div>
        </div>
    )
}

export default Venues;
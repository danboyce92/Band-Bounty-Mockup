import React from "react";
import { FaLock, FaRegMoneyBillAlt, FaHandsHelping, FaJediOrder } from "react-icons/fa";

const FeatureSection = () => {

    return (
        <div>
            <div className="bg-white py-24 sm:py-32 lg:py-40">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="sm:text-center">
      <h2 className="text-lg font-semibold leading-8 text-indigo-600">Band Bounty</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A new chapter for live event organisation</p>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">As we grow and continue to expand our operations, we hope that band bounty will revolutionise the way live shows are coordinated.</p>
    </div>

    <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
        <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">

           <FaRegMoneyBillAlt size={22}/> 

          </div>
          <div className="sm:min-w-0 sm:flex-1">
            <p className="text-lg font-semibold leading-8 text-gray-900">No hidden costs</p>
            <p className="mt-2 text-base leading-7 text-gray-600">It doesn't cost anything extra to start a bounty. All you have to pay is the initial cost for your admission ticket to the actual show.</p>
          </div>
        </div>

        <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">

            <FaLock size={22}/>

          </div>
          <div className="sm:min-w-0 sm:flex-1">
            <p className="text-lg font-semibold leading-8 text-gray-900">100% Secure</p>
            <p className="mt-2 text-base leading-7 text-gray-600">The funds are 100% secure and refundable on the condition that the artist cannot commit to the event or a suitable target has not been reached.</p>
          </div>
        </div>

        <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">

            <FaJediOrder size={22}/>

          </div>
          <div className="sm:min-w-0 sm:flex-1">
            <p className="text-lg font-semibold leading-8 text-gray-900">Helping the industry</p>
            <p className="mt-2 text-base leading-7 text-gray-600">Giving a much welcomed alternative stream of revenue for musicians and venues </p>
          </div>
        </div>

        <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">

          <FaHandsHelping size={22}/>

          </div>
          <div className="sm:min-w-0 sm:flex-1">
            <p className="text-lg font-semibold leading-8 text-gray-900">Helping Artists</p>
            <p className="mt-2 text-base leading-7 text-gray-600">Providing artists with an insight regarding their current fanbase in certain locations.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default FeatureSection;
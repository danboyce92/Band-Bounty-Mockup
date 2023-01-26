import React, { useState, useEffect } from "react";
import { collection, onSnapshot  } from "firebase/firestore";
import { db } from "../firebase/firebase";

import Timer from "./Timer";

const LiveBounties = () => {

    const [ bounties, setBounties ] = useState([]);



    useEffect(() => {
        const unsub = onSnapshot(collection(db, "Bounties"), (snapshot) => {
            setBounties(snapshot.docs.map((doc) => doc.data()))
        });
        return unsub
    }, [])

    return (
        <div>
            <div className="relative ml-4 flex items-center">
               
                <div className=" mx-auto my-4 bg-white w-11/12 max-w-6xl h-16 rounded-md flex flex-row divide-x-4 divide-slate-400">
                    <div className="basis-2/12 text-center mt-5">Artist</div>
                    <div className="basis-2/12 text-center mt-5">City</div>
                    <div className="basis-2/12 text-center mt-5">Funds raised</div>
                    <div className="basis-2/12 text-center mt-5">Target</div>
                    <div className="basis-4/12 text-center mt-5">Expiration timer</div>

                </div>
                </div>

            {
            bounties.map((bounty) => (
                <div key={bounty.artist} className="ml-4 relative flex flex-col">

                    <div className={`${bounty.active && "border-4 bg-green-300"} ${!bounty.active && "border-4 bg-red-600"} mx-auto my-3  w-11/12 max-w-6xl h-16 rounded-md flex flex-row divide-x-2 divide-slate-400`}>
                        <div className="basis-2/12 text-center mt-5">{bounty.artist}</div>
                        <div className="basis-2/12 text-center mt-5">{bounty.city}</div>
                        <div className="basis-2/12 text-center mt-5">{bounty.funds}</div>
                        <div className="basis-2/12 text-center mt-5">{bounty.target}</div>
                        {bounty.expiration &&
                        <div className="basis-4/12 text-center mt-5">{<Timer date={bounty.expiration.seconds} />} <div id="time-left"></div></div>
                        }
                    </div>

                </div>
                
            ))
            
            }


            <button className="bg-orange-400 right-4 float-right mr-14 py-4 px-8 rounded-xl font-medium hover:bg-orange-200">Create Bounty</button>


        </div>
    )
}

export default LiveBounties;
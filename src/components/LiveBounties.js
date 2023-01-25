import React, { useState, useEffect } from "react";
import { collection, onSnapshot  } from "firebase/firestore";
import { db } from "../firebase/firebase";

import Timer from "./Timer";

const LiveBounties = () => {

    const [ bounties, setBounties ] = useState([]);

    console.log(bounties[0]?.expiration.seconds)

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "Bounties"), (snapshot) => {
            setBounties(snapshot.docs.map((doc) => doc.data()))
        });
        return unsub
    }, [])

    return (
        <div>
            <div className="relative ml-4 flex items-center">
               
                <div className=" mx-auto my-4 bg-white w-11/12 max-w-6xl h-16 rounded-md flex flex-row divide-x-2 divide-slate-400">
                    <div className="basis-2/12 text-center mt-5">Artist</div>
                    <div className="basis-2/12 text-center mt-5">City</div>
                    <div className="basis-2/12 text-center mt-5">Funds raised</div>
                    <div className="basis-2/12 text-center mt-5">Target</div>
                    <div className="basis-2/12 text-center mt-5">Expiration timer</div>
                    <div className="basis-2/12 text-center mt-5"></div>
                </div>
                </div>

            {
            bounties.map((bounty) => (
                <div key={bounty.artist} className="ml-4 relative flex flex-col">

                    <div className={`${bounty.active && "border-4 border-green-300"} ${!bounty.active && "border-4 border-red-600"} mx-auto my-3 bg-white w-11/12 max-w-6xl h-16 rounded-md flex flex-row divide-x-2 divide-slate-400`}>
                        <div className="basis-2/12 text-center mt-5">{bounty.artist}</div>
                        <div className="basis-2/12 text-center mt-5">{bounty.city}</div>
                        <div className="basis-2/12 text-center mt-5">{bounty.funds}</div>
                        <div className="basis-2/12 text-center mt-5">{bounty.target}</div>
                        {/* <div className="basis-2/12 text-center mt-5">{<Timer date={bounty.expiration.seconds} />}</div> */}
                    </div>

                </div>
                
            ))
            
            }


        </div>
    )
}

export default LiveBounties;
import React from "react";


import '../../index.css'
import Particle from "./Particle";
import ParticleTwo from "./ParticleTwo";
import FeatureSection from "./FeatureSection";
import Divider from "./DividerSection";
import Hero from "./HeroSection";


const LandingPage = ({ user }) => {




    return (
        <div className="container relative mx-auto ">
            {/* Hero section */}
            <Hero />

            <div className="relative">
                <Particle />
            </div>
            
            <div>
                <Divider user={user}/>
            </div>

            <div className="mt-40 mb-12 pt-24 h-full w-full">
                <ParticleTwo />
            </div>

                <div>
                    <FeatureSection />
                </div>

        </div>
    )
}

export default LandingPage;
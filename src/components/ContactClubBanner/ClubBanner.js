import React from "react";
import clubBanner from '../../Assets/images/clubB.jpg';
import './ClubBanner.css';
import Typewriter from 'typewriter-effect'

const ClubBanner = () => {
  return (
    <div className=" flex items-center justify-center py-2">
      <div
        class=" w-3/4 "
        style={{
          backgroundImage: `url(${clubBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",


        }}
      >
        <div class="hero-overlay bg-opacity-75 "></div>
        <div class="hero-content text-center text-neutral-content py-24">
          <div class="max-w-[625px]">
            <h1 class="mb-5 text-primary text-center text-2xl lg:text-5xl md:text-lg font-bold inline">  <Typewriter options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings: ["Join Our Readers Club"]
                            }} /> </h1>
            <p class="mb-5 ">
              Join Our Readers Club. It's a coummuity for books lover. we can discus every user about to books details.
            </p>
            <button class="btn btn-primary text-white">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubBanner;

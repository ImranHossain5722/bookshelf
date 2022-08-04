import React from "react";
import clubBanner from '../../Assets/images/clubB.jpg';
import { FaChevronRight, FaArrowRight } from 'react-icons/fa';

import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";

const ClubBanner = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-[60px] lg:mt-[120px]">
      <div
        class="w-full"
        style={{
          backgroundImage: `url(${clubBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",


        }}>
        {/* <div class="hero-overlay bg-opacity-75 "></div> */}
        <div class="hero-content text-center text-neutral-content py-24">
          <div class="max-w-[625px]">
            <h1 class="text-primary text-center text-2xl lg:text-5xl md:text-lg font-bold inline">  <Typewriter options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: ["Join Our Readers Club"]
            }} /> </h1>
            <p class="my-5 ">
              Join Our Readers Club. It's a coummuity for books lover. we can discus every user about to books details.
            </p>
            <Link to='/comingsoon' class="btn btn-primary text-white hover:text-white hover:bg-accent">Join <FaArrowRight className='ml-2' /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubBanner;

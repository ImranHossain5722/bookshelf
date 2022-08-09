import React from "react";
import Typewriter from 'typewriter-effect';
const CommingSoon = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-[60px] lg:mt-[120px]">
    <div
      className="w-full">
      {/* <div className="hero-overlay bg-opacity-75 "></div> */}
      <div className="hero-content text-center text-neutral-content py-24">
        <div className="max-w-[625px]">
          <h1 className="text-primary text-center text-2xl lg:text-5xl md:text-lg font-bold inline">  <Typewriter options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: ["COMING SOON"]
          }} /> </h1>
          <p className="my-5 ">
             This page is coming soon 
          </p>
         
        </div>
      </div>
    </div>
  </div>
  );
};

export default CommingSoon;

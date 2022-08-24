import React from "react";
import clubBanner from "../../Assets/images/cul-books-banner.jpg";
import { FaChevronRight, FaArrowRight } from "react-icons/fa";

import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const ClubBanner = () => {
  return (
    <div className="section_spacing">
      <div
        className="w-full py-11 shadow-xl rounded-lg container mx-auto"
        style={{
          backgroundImage: `url(${clubBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="hero-overlay bg-opacity-75 "></div> */}
        <div className="hero-content text-center text-neutral-content py-24">
          <div className="max-w-[625px]">
            <h1 className="text-secondary text-center text-2xl lg:text-5xl md:text-lg font-bold inline">
              {" "}
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 45,
                  strings: ["Join Our Readers Club"],
                }}
              />{" "}
            </h1>
            <p className="my-5 text-lg text-secondary ">
              Join Our Readers Club. It's a coummuity for books lover. we can
              discus every user about to books details.
            </p>
            <Link
              to="/readershome"
              className="btn btn-primary text-white hover:text-white hover:bg-accent"
            >
              Join Readers Club <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubBanner;

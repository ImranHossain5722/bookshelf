import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ReleaseBook from "../../Assets/images/Banner-images/ebook3-slider-pic1.png"
import './Release.css';

const Release = () => {
  const [countDays, setCountDays] = useState("00");
  const [countMinutes, setCountMinutes] = useState("00");
  const [countHour, setCountHour] = useState("00");
  const [countSeconds, setCountSeconds] = useState("00");

  let interval = useRef();
  const startCounting = () => {
    const releaseDate = new Date("September 20,2022 00:00:00 ").getTime();
    interval = setInterval(() => {
      const today = new Date().getTime();
      const duration = releaseDate - today;

      const days = Math.floor(duration / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((duration % (1000 * 60)) / 1000);

      if (duration < 0) {
        clearInterval(interval.current);
      } else {
        setCountDays(days);
        setCountHour(hours);
        setCountMinutes(minutes);
        setCountSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startCounting();

    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <div className="px-10 bg-white mx-auto max-w-[1240px] mt-[60px] lg:mt-[120px] shadow-xl rounded-xl border-solid border-2 border-primary">
      <div className="card lg:card-side p-10">
        <figure>
          <img
            className="rounded w-full h-96"
            src={ReleaseBook}
            alt="Album"
          />
        </figure>
        <div className="card-body flex justify-center items-center">
          <div>
            <p className=" text-xl lg:text-[35px] mb-5 font-semibold text-primary">
              {" "}
              An Up Comming Book
            </p>
            <p className="  text-xl lg:text-[30px]  my-5 font-semibold text-accent">
              Publishing time is running out!{" "}
            </p>
            {/* <p className=' text-xl lg:text-[30px] lg:text-[40px] mb-5 font-semibold text-accent' >Publishing!
            </p> */}

            <div className="lg:flex lg:justify-around ">
              <div className="text-center bg-">
                <p className="text-5xl text-accent font-semibold bg-base-100 p-10 rounded-xl ">
                  {countDays}
                </p>
                <p className="text-accent font-semibold pt-4">Days</p>
              </div>
              <div className="text-center  ">
                <p className="text-5xl text-accent font-semibold bg-base-100 p-10 rounded-xl mx-4">
                  {countHour}
                </p>
                <p className="text-accent font-semibold pt-4">Hours</p>
              </div>
              <div className="text-center  ">
                <p className="text-5xl text-accent font-semibold bg-base-100 p-10 rounded-xl mx-4">
                  {countMinutes}
                </p>
                <p className="text-accent font-semibold pt-4 ">Minutes</p>
              </div>
              <div className="text-center ">
                <p className="text-5xl text-accent font-semibold bg-base-100 p-10 rounded-xl">
                  {countSeconds}
                </p>
                <p className="text-accent font-semibold pt-4">Seconds</p>
              </div>
            </div>
            <Link to='/productReleaseLandingpage' className="button w-[180px] ">
                  <div class="svg-wrapper-1 ">
                    <div class="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span>See Details</span>
                </Link>
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Release;

import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ReleaseBook from "../../Assets/images/Banner-images/ebook3-slider-pic1.png";
import { FaChevronRight, FaArrowRight } from "react-icons/fa";
import "./Release.css";
import Button from "../../components/Button/Button";

const Release = () => {
  const [countDays, setCountDays] = useState("00");
  const [countMinutes, setCountMinutes] = useState("00");
  const [countHour, setCountHour] = useState("00");
  const [countSeconds, setCountSeconds] = useState("00");
  const navigate = useNavigate();

  // const ProductDetailHandaler = (e) => {
  //   navigate("/productReleaseLandingpage");
  // };

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
    <div className="px-10 bg-white mx-auto max-w-[1240px] my-[60px] lg:my-[120px] shadow-xl rounded-xl border-solid border-2 border-primary">
      <div className="card lg:card-side p-10 container mx-auto">
        <figure>
          <img className="rounded w-full h-96" src={ReleaseBook} alt="Album" />
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

            <div className="lg:flex lg:justify-around mb-4">
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
            <NavLink className='bg-primary p-3 text-white rounded-lg font-semibold' to='/productReleaseLandingpage' >See Details </NavLink>
          </div>
         
        </div>
        
      </div>
      
    </div>
  );
};

export default Release;

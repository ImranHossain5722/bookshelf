import React from "react";
import aboutBanner from "../../Assets/images/aboutUs-banner-1.jpg";
import Bannerbook from "../../Assets/images/Banner-images/img1-13.png";
import Review from "../../components/Review/Review";
import wahtWeDo from "../../Assets/images/wahtWeAreDo.png";
import misson from "../../Assets/images/Business mission-pana.png";
import vision from "../../Assets/images/vision.png";
import sliderBanner from "../../Assets/images/slider__bag.png";
import "./Aboutus.css";
const AboutUs = () => {
  return (
    <div className="">
      <div
        style={{
          background: `url(${aboutBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-96 flex items-center justify-center "
      >
        <div className=" ">
          <h1 className=" text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>
      <div
        npm className="card lg:card-side bg-white mx-auto max-w-[1240px] mt-[60px] lg:mt-[120px] py-10 
      grid lg:grid-cols-2
      "
      >
        <div className="pl-28">
          <p className="text-4xl lg:text-5xl font-semibold text-secondary ">
            What We Are
          </p>
          <div className="pb-10">
            <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
          </div>
          <p className=" ">
            Text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy.
          </p>
          <p className=" ">
            Typesetting, remaining essentially unchanged. It was popularised
            with the release of Contrary to popular belief, Lorem Ipsum is
            random text.
          </p>
          <p className="">
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing.
          </p>
        </div>
        <div className="">
          <figure className="">
            <img className=" shadow-lg rounded-md w-1/2 h-1/2 lg:ml-7" src={wahtWeDo} alt="Album" />
          </figure>
        </div>
      </div>{" "}
      {/* our misson */}
      <div
        className="card lg:card-side bg-white mx-auto max-w-[1240px] mt-[60px] lg:mt-[120px] py-10 
      grid lg:grid-cols-2
      "
      >
        <div className="">
          <figure className="">
            <img className=" shadow-lg rounded-md w-1/2 h-1/2" src={misson} alt="Album" />
          </figure>
        </div>

        <div className="pl-28">
          <p className="text-4xl lg:text-5xl font-semibold text-secondary ">
            Our Mession
          </p>
          <div className="pb-10">
            <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
          </div>
          <p className=" ">
            Text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy.
          </p>
          <p className=" ">
            Typesetting, remaining essentially unchanged. It was popularised
            with the release of Contrary to popular belief, Lorem Ipsum is
            random text.
          </p>
          <p className="">
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing.
          </p>
        </div>
      </div>{" "}
      {/* Our Vision  */}
      <div
        className="card lg:card-side bg-white mx-auto max-w-[1240px] mt-[60px] lg:mt-[120px] py-10 
      grid lg:grid-cols-2
      "
      >
        <div className="pl-28">
          <p className="text-4xl lg:text-5xl font-semibold text-secondary ">
            Our Vision
          </p>
          <div className="pb-10">
            <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
          </div>
          <p className=" ">
            Text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy.
          </p>
          <p className=" ">
            Typesetting, remaining essentially unchanged. It was popularised
            with the release of Contrary to popular belief, Lorem Ipsum is
            random text.
          </p>
          <p className="">
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing.
          </p>
        </div>
        <div className="">
          <figure className="">
            <img className=" shadow-lg rounded-md w-1/2 h-1/2 lg:ml-7" src={vision} alt="Album" />
          </figure>
        </div>
      </div>{" "}
      <div
        style={{
          background: `url(${sliderBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Review />
      </div>
    </div>
  );
};

export default AboutUs;

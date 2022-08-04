import React from "react";
import aboutBanner from "../../Assets/images/aboutUs-banner-1.jpg";
import Bannerbook from "../../Assets/images/Banner-images/img1-13.png";
import Review from "../../components/Review/Review";
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
        <div class=" ">
          <h1 class=" text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>
      <div
        npm class="card lg:card-side bg-white mx-auto max-w-[1240px] mt-[60px] lg:mt-[120px] py-10 
      grid lg:grid-cols-2
      "
      >
        <div class="pl-28">
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
            <img className=" lg:ml-7" src={Bannerbook} alt="Album" />
          </figure>
        </div>
      </div>{" "}
      {/* our misson */}
      <div
        class="card lg:card-side bg-white mx-auto max-w-[1240px] mt-[60px] lg:mt-[120px] py-10 
      grid lg:grid-cols-2
      "
      >
        <div className="">
          <figure className="">
            <img className=" " src={Bannerbook} alt="Album" />
          </figure>
        </div>

        <div class="pl-28">
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
        class="card lg:card-side bg-white mx-auto max-w-[1240px] mt-[60px] lg:mt-[120px] py-10 
      grid lg:grid-cols-2
      "
      >
        <div class="pl-28">
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
            <img className=" lg:ml-7" src={Bannerbook} alt="Album" />
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

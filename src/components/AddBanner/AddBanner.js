import React from "react";
import { Link } from "react-router-dom";
import Bannerbook from "../../Assets/images/Banner-images/img1-13.png";
import Button from "../Button/Button";

const AddBanner = () => {
  //dynamic api needed to make the banner image and link change form the dashboard

  return (
    <div

      class="card lg:card-side bg-white mx-auto max-w-[1240px] mt-[60px] lg:mt-[120px] py-10 ">

      <div class="card-body">
        <h2 class="card-title ml-28 text-4xl"><span className="text-black">Get</span><span className="text-accent">Extra
        </span></h2>
        <p className="pl-28 text-4xl lg:text-7xl font-semibold text-primary">Sale -25%</p>
        <p className="pl-28 text-4xl font-semibold text-accent">ON ORDER OVER</p>
        <div class="card-actions pl-28">
          <Button>SEE MORE</Button>
        </div>
      </div>
      <figure>
        <img className="pr-28" src={Bannerbook} alt="Album" />
      </figure>
    </div>
  );
};

export default AddBanner;

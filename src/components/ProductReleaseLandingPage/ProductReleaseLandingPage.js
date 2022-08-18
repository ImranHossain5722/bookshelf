import React from "react";
import ReleaseBook from "../../Assets/images/Banner-images/ebook3-slider-pic1.png"
import Button from "../Button/Button";
const ProductReleaseLandingPage = () => {
  return (
      <div>
    <div className="card lg:card-side bg-[#F8F8F8] mx-auto max-w-[1240px] lg:mt-[20px] py-10 mb-[120px] ">
      <div className="card-body">
        <h2 className="card-title ml-28 text-4xl">
          <span className="text-black">New</span>
          <span className="text-accent">Book</span>
          
        </h2>
        <p className="pl-28 text-4xl lg:text-5xl mt-5 font-semibold text-primary uppercase">
        “The intelligent  <span className="text-secondary">investor”</span> 
        </p>
        <p className="pl-28 mt-[-20px] font-semibold text-secondary ">
        Buy a book that will help you grow
        </p>
     
        <div className="card-actions pl-28  "  >
        <button disabled className="bg-gray-200 text-white py-4 px-4 rounded-lg ">Order Now  </button>
        </div>
      </div>
      <figure>
        <img className="pr-28 w-full  h-96"  src={ReleaseBook} alt="Album" />
      </figure>
    </div>
</div>
  );
};

export default ProductReleaseLandingPage;

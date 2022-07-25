import React, { useRef, useState } from "react";

// images
import img1 from '../../Assets/images/category-images/Open Book.png';
import img2 from '../../Assets/images/category-images/Vector.png';
import img3 from '../../Assets/images/category-images/Computer.png';
import img4 from '../../Assets/images/category-images/Done.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";


// fake data
const categories = [
  {
    image: img1,
    name: "CHILDREN'S BOOK",
  },
  {
    image: img2,
    name: "SCIENCE FICTION",
  },
  {
    image: img3,
    name: "COMPUTER BOOKS",
  },
  {
    image: img1,
    name: "CHILDREN'S BOOK",
  },
  {
    image: img1,
    name: "CHILDREN'S BOOK",
  },
  {
    image: img2,
    name: "SCIENCE FICTION",
  },
  {
    image: img3,
    name: "COMPUTER BOOKS",
  },
  {
    image: img1,
    name: "CHILDREN'S BOOK",
  },
  {
    image: img2,
    name: "SCIENCE FICTION",
  },
  {
    image: img3,
    name: "COMPUTER BOOKS",
  },
];

const Categorys = () => {
  return (
    <div className="mt-[120px]">
      {/* ------title section----- */}
      <div className="text-center">
        <h2 className="text-[40px] text-[#00124E] font-bold">Would you like to see any particular books?</h2>
        <p className="text-xl text-[#00124E] font-bold">Select category to view books of choice - maximum <span className="text-primary">2</span></p>
      </div>

      {/* ------categories slider----- */}
      <div className="bg-white max-w-[1240px] mx-auto mt-14 py-6">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          slidesPerGroup={5}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper px-5"
          style={{ "--swiper-theme-color": "#27AE61" }}
        >
          {
            categories.map(category => <SwiperSlide>
              <div className="h-56 w-52 bg-[#27AE612B] rounded-lg flex items-center justify-center p-2">
                <div>
                  <img src={category.image} className="mx-auto" alt="" />
                  <h2 className="text-2xl text-center text-[#00124E] font-bold mt-2">{category.name}</h2>
                </div>
              </div>
            </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Categorys;

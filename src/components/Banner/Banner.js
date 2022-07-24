import React, { useRef, useState } from "react";

// Banner Images
import img1 from "../../Assets/images/Banner-images/slider_top_1.png";
import img2 from "../../Assets/images/Banner-images/slider_top_2.png";
import img3 from "../../Assets/images/Banner-images/slider_top_3.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const data = [
  {
    image: img1,
    subtitle: "THE BOOKSELF EDITORS",
    title: "Featured Book of the",
    month: "February",
  },
  {
    image: img2,
    subtitle: "THE BOOKSELF EDITORS",
    title: "Featured Book of the",
    month: "February",
  },
  {
    image: img3,
    subtitle: "THE BOOKSELF EDITORS",
    title: "Featured Book of the",
    month: "February",
  },
];

const Banner = () => {
  return (
    <div className="lg:px-10 mt-20">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper my-auto"
      >
        {data.map((bnrData) => (
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2  items-center justify-center px-4 pb-10 lg:px-20">
              <div>
                <h3
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="750"
                >
                  {bnrData.subtitle}
                </h3>
                <h2
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  className="text-[40px]"
                >
                  {bnrData.title} <br />
                  <span className="font-semibold">{bnrData.month}</span>
                </h2>
                <button
                  data-aos="fade-right"
                  data-aos-delay="750"
                  data-aos-duration="1000"
                  class="px-8 py-4 bg-[#293661] hover:bg-[#27AE61] duration-500 rounded-full text-[#ffffff] mt-8"
                >
                  Explore More
                </button>
              </div>

              <div
                className="mx-auto"
                data-aos="fade-left"
                data-aos-delay="750"
                data-aos-duration="1000"
              >
                <img src={bnrData.image} className="h-96" alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

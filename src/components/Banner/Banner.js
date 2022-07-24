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
import Button from "../Button/Button";

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
    <div className="lg:max-w-[1240px] mx-auto bg-white">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper my-auto"
        style={{ "--swiper-theme-color": "#27AE61" }}
      >
        {data.map((bnrData) => (
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2  items-center justify-center px-4 pb-10 lg:px-20">
              <div className="lg:mt-6">
                <h3
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="750"
                  className="text-2xl"
                >
                  {bnrData.subtitle}
                </h3>
                <h2
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  className="text-[40px] font-semibold"
                >
                  {bnrData.title} <br />
                  <span className="font-semibold">{bnrData.month}</span>
                </h2>
                {/* <button
                  data-aos="fade-right"
                  data-aos-delay="750"
                  data-aos-duration="1000"
                  class="btn btn-primary text-white font-normal mt-8">
                  Explore More
                </button> */}
                <div
                  data-aos="fade-right"
                  data-aos-delay="750"
                  data-aos-duration="1000"
                  className="mt-8"
                >
                  <Button>Explore More</Button>
                </div>
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

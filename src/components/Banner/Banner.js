import React, { useRef, useState } from "react";
import newsBanner from "../../Assets/images/slider-3.png";
// Banner Images
import img1 from "../../Assets/images/slider-1.png";
import img2 from "../../Assets/images/slider-2.png";
import img3 from "../../Assets/images/slider-3.png";

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
    subtitle: "Upto 50% off on BookSelf product",
    title: "BookSelf is your Curious",
    month: "February",
  },
  {
    image: img2,
    subtitle: "Upto 50% off on BookSelf product",
    title: "BookSelf is your Curious",
    month: "February",
  },
  {
    image: img3,
    subtitle: "Upto 20% off on BookSelf product",
    title: "Featured Book of the ",
    month: "February",
  },
];

const Banner = () => {
  return (
    <div className="hero_Banner  ">
      <Swiper
        navigation={false}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper my-auto"
        style={{ "--swiper-theme-color": "#27AE61" }}
      >
        {data.map((bnrData) => (
          <SwiperSlide>
          <div class="banner_single" 
            style={{
            backgroundImage: `url(${bnrData.image})`,
            backgroundSize: "content",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", }}>
              <div class="container mx-auto">
                <div class="grid">
                  <div class="banner__text">
                    <span
                      data-aos="fade-left"
                      data-aos-delay="100"
                      data-aos-duration="500"
                    >
                      {bnrData.subtitle}
                    </span>
                    <h3
                      data-aos="fade-left"
                      data-aos-delay="150"
                      data-aos-duration="700"
                    >
                      {bnrData.title} of {bnrData.month}
                    </h3>
                    <h5
                      data-aos="fade-left"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                    >
                      This is perfect to start your very own bookstore!
                    </h5>
                    <a
                      href="#"
                      class="theme_btn_white"
                      data-aos="fade-left"
                      data-aos-delay="250"
                      data-aos-duration="1200"
                    >
                      Explore now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

           
          
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

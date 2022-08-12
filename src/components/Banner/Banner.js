import React, { useRef, useState } from "react";
import newsBanner from "../../Assets/images/slider-3.png";
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
    <div className="hero_Banner">
      <Swiper
        navigation={false}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper my-auto"
        style={{ "--swiper-theme-color": "#27AE61" }}
      >
        {data.map((bnrData) => (
          <SwiperSlide>
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0  items-center justify-center px-4 py-16 lg:px-20">
              <div className="mt-6 mx-auto">
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
                  className="text-[30px] lg:text-[40px] font-semibold"
                >
                  {bnrData.title} <br />
                  <span className="font-semibold">{bnrData.month}</span>
                </h2>
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
            </div> */}
            <div class="banner_single" 
            style={{
            backgroundImage: `url(${newsBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "top center !importent",
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

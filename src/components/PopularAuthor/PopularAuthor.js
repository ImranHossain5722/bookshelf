import React, { useRef, useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { author } from "../Redux/actions/bookActions";

const PopularAuthor = () => {
  const authors = useSelector((state) => state.author.author);
  const dispatch = useDispatch();
  const [size, setSize] = useState(1);

  useEffect(() => {
    // add author route
    fetch("reviews/review.json")
      .then((res) => res.json())
      .then((data) => dispatch(author(data)));
  }, []);

  return (
    <div className="bg-white sction_padding">
      <div className="container mx-auto relative ">
        {/* ------title section----- */}
        <h1 className="text-[30px] lg:text-[40px] font-bold text-[#00124E] section_title">
          Popular Author
        </h1>
        {/* ------categories slider----- */}
        <div className="mt-8">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1500: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={24}
            loop={true}
            navigation={{
              prevEl: "#prev_slide",
              nextEl: "#next_slide",
            }}
            modules={[Autoplay, Navigation]}
            autoplay={true}
            className="mySwiper"
            style={{ "--swiper-theme-color": "#27AE61" }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {authors?.map((author) => (
              <SwiperSlide key={author.id}>
                <div className="flex flex-col justify-center hover:fill-blue-500">
                  <div
                    className="thumb w-52 h-52 rounded-full bg-cover bg-center mx-auto"
                    style={{
                      backgroundImage: `url(${author.image})`,
                    }}
                  ></div>
                  <span className="uppercase font-normal text-center text-sm mt-6 mb-[7px]">
                    FOUNDER & CEO
                  </span>
                  <h4 className="text-center text-xl font-semibold mb-[7px] capitalize">
                    {author.name}
                  </h4>
                  <p className="text-base font-normal text-center max-w-[240px] mx-auto">
                    Except sint occaecat cupidatat nonproid sunt culpa qui
                    officia deserunt
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularAuthor;

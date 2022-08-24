import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import { Autoplay, Navigation } from "swiper";
import "./review.css";
import useWindowDimensions from "../windowSize/windowSize";
import axios from "axios";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [size, setSize] = useState(1);
  const { width } = useWindowDimensions();

  // fetched  review data
  useEffect(() => {
    axios
      .get(`https://book-shelf-webapp.herokuapp.com/all-reviews`)
      .then((data) => setReviews(data.data));
  }, []);

  return (
    <div className="bg-white py-[120px]">
      <div className="container mx-auto relative">
        <h2 className="text-[30px] lg:text-[40px] text-[#00124E] font-bold  pb-1">
          Client Testimonial
        </h2>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 2,
            },
            1500: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={24}
          loop={true}
          modules={[Autoplay]}
          autoplay={true}
          className="mySwiper mt-8"
        >
          {reviews?.map((review) => (
            <SwiperSlide key={review.id} className="swiper-review">
              <div class="single_testmonial">
                <div class="testmonial_header flex items-center">
                  <div class="thumb">
                    <img src={review?.user_id?.user_photo_url} alt="" />
                  </div>
                  <div class="reviewer_name">
                    <h4>{review?.user_id?.user_name}</h4>
                    <div class="rate flex items-center">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p>“{review?.review}”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;

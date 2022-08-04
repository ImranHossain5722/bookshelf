import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import { Navigation } from "swiper";
import './review.css'
import useWindowDimensions from "../windowSize/windowSize";

import sliderBanner from "../../Assets/images/slider__bag.png"

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [size, setSize] = useState(1);
  const { width } = useWindowDimensions();

  // fetched  review data
  useEffect(() => {
    fetch('reviews/review.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, []);

  useEffect(() => {
    //  responsiveness added by width change
    if (width >= 900) {
      setSize(3)
    }
    else if (width >= 576) {
      setSize(2)
    }
    else {
      setSize(1)
    }

  }, [width])

  return (
    <div 
    style={{
      background: `url(${sliderBanner})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    className=" px-8 mx-auto  mt-[60px] lg:mt-[120px] py-4">
      <h2 className="text-[30px] lg:text-[40px] text-[#00124E] font-bold text-center pb-1">Our Clients Feedback</h2>
      
      <div className=" flex justify-center ">
      <progress className="progress progress-success  h-2 w-5  "></progress>
      </div>
      <Swiper
        slidesPerView={size}
        spaceBetween={30}
        slidesPerGroup={size}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper px-7 py-6"
        style={{ "--swiper-theme-color": "#27AE61" }}
      >
        {
          reviews.map(review => <SwiperSlide key={review.id} className="swiper-review">
            <div className="text-center p-4">
              <p>{review.review}</p>
              <div class="avatar pt-6">
                <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={review.image} alt="" />
                </div>
              </div>
              <p className="pt-2 font-semibold">{review.name} </p>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  )
}

export default Review;
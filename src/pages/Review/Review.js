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
import useWindowDimensions from "../../components/windowSize/windowSize";

const Review = () => {
  const [reviews, setReviews] = useState([])
  const [size, setSize] = useState(1)
  const { width } = useWindowDimensions()

  // fetched  review data
  useEffect(() => {
    fetch('reviews/review.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  useEffect(() => {
    //  responsiveness added by width change
    if (width >= 900) {
      setSize(3)
    }
    else {
      setSize(1)
    }

  }, [width])

  return (
    <div className="max-w-[1240px] mx-auto bg-white mt-[120px] py-4">
      <h2 className="text-[40px] text-[#00124E] font-bold text-center pb-14">Clients Feedback</h2>
      <Swiper
        navigation={true}
        slidesPerView={size}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper px-8"
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
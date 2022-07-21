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

const Review = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('reviews/review.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])


  return (
    <div className="p-5 my-20">
      <Swiper navigation={true} slidesPerView={3} loop={true} grabCursor={true}
        centeredSlides={true}
        spaceBetween={30} modules={[Navigation]} className="mySwiper">
        {
          reviews.map(review => <SwiperSlide>
            <p className="p-2">{review.review}</p>
            <div class="avatar p-2">
              <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={review.image} alt="" />
              </div>
              <p className="pl-4 pt-2">{review.name}</p>
            </div>


          </SwiperSlide>)
        }
      </Swiper>
    </div>
  )
}

export default Review
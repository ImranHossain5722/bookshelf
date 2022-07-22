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
  const {width , height} = useWindowDimensions()
  useEffect(() => {
    fetch('reviews/review.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

useEffect(() => {
 
  if(width >= 900){
      setSize(2) 
  }
  else{
    setSize(1)
  }

  
}, [width])

  return (
    <div className="p-5 my-20">
      <Swiper navigation={true} slidesPerView={size} loop={true} grabCursor={true}
        centeredSlides={true}
        spaceBetween={30} modules={[Navigation]} className="mySwiper" 
    
        >
        {
          reviews.map(review => <SwiperSlide className="swiper-review">
            <div >
            <p className="p-2">{review.review}</p>
            <div class="avatar p-2">
              <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={review.image} alt="" />
              </div>
              <p className="pl-4 pt-2">{review.name} </p> 
            </div>
            </div>


          </SwiperSlide>)
        }
      </Swiper>
    </div>
  )
}

export default Review
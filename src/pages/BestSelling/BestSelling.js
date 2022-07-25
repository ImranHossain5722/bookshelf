import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import { Navigation } from "swiper";
import Card from '../../components/Card/Card';
import useWindowDimensions from '../../components/windowSize/windowSize';
const BestSelling = () => {
  const [sellings, setSellings] = useState([])
  const { width } = useWindowDimensions()
  const [size, setSize] = useState(5)

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setSellings(data))
  }, [])

  useEffect(() => {
    //  responsiveness added by width change
    if (width >= 1150) {
      setSize(5)
    }
    else if (width >= 900) {
      setSize(4)
    }
    else if (width >= 500) {
      setSize(2)
    }


    else {
      setSize(1)
    }

  }, [width])
  return (
    <div>
      <p className='pl-6 text-[20px] '>Last week Best sellings</p>
      <div className="p-6">
        <Swiper navigation={true} slidesPerView={size} loop={true} grabCursor={true}
          centeredSlides={true}
          spaceBetween={30} modules={[Navigation]} className="mySwiper flex-wrap">
          {
            sellings && sellings.map(selling => <SwiperSlide key={selling._id} className='swiper-other  flex-wrap'>
              <Card data={selling} key={selling.id} />
            </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  )
}

export default BestSelling
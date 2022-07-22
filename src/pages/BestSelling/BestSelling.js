import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import { Navigation } from "swiper";
import Card from '../../components/Card/Card';
const BestSelling = () => {
    const [sellings, setSellings] = useState([])
    useEffect(() => {
      fetch('data/data.json')
        .then(res => res.json())
        .then(data => setSellings(data))
    }, [])
  return (
    <div>
        <p className='pl-6 text-[20px] '>Last week Best sellings</p>
<div className="p-6">
      <Swiper navigation={true} slidesPerView={5} loop={true} grabCursor={true}
        centeredSlides={true}
        spaceBetween={30} modules={[Navigation]} className="mySwiper">
        {
          sellings && sellings.map(selling => <SwiperSlide className='swiper-other'> 
            <Card data={selling} key={selling.id}/>
          </SwiperSlide>)
        } 
      </Swiper>
    </div>
    </div>
  )
}

export default BestSelling
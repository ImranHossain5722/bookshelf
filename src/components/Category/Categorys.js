import React, { useRef, useState, useEffect } from "react";

// images
import img1 from '../../Assets/images/category-images/Open Book.png';
import img2 from '../../Assets/images/category-images/Vector.png';
import img3 from '../../Assets/images/category-images/Computer.png';
import img4 from '../../Assets/images/category-images/Done.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import useWindowDimensions from "../windowSize/windowSize";


// fake data
const categories = [
  {
    _id: 1,
    image: img1,
    name: "CHILDREN'S BOOK",
  },
  {
    _id: 2,
    image: img2,
    name: "SCIENCE FICTION",
  },
  {
    _id: 3,
    image: img3,
    name: "COMPUTER BOOKS",
  },
  {
    _id: 4,
    image: img1,
    name: "CHILDREN'S BOOK",
  },
  {
    _id: 5,
    image: img1,
    name: "CHILDREN'S BOOK",
  },
  {
    _id: 6,
    image: img2,
    name: "SCIENCE FICTION",
  },
  {
    _id: 7,
    image: img3,
    name: "COMPUTER BOOKS",
  },
  {
    _id: 8,
    image: img1,
    name: "CHILDREN'S BOOK",
  },
  {
    _id: 9,
    image: img2,
    name: "SCIENCE FICTION",
  },
  {
    _id: 10,
    image: img3,
    name: "COMPUTER BOOKS",
  },
];

const Categorys = () => {
  const [size, setSize] = useState(1);
  const { width } = useWindowDimensions();

  useEffect(() => {
    //  responsiveness added by width change
    if (width >= 992) {
      setSize(5)
    }
    // else if (width >= 768) {
    //     setSize(3)
    // }
    else if (width >= 576) {
      setSize(2)
    }
    else {
      setSize(1)
    }
  }, [width]);
  return (
    <div className="mt-[120px]">
      {/* ------title section----- */}
      <div className="text-center">
        <h2 className="text-[40px] text-[#00124E] font-bold">Would you like to see any particular books?</h2>
        <p className="text-xl text-[#00124E] font-bold">Select category to view books of choice - maximum <span className="text-primary">2</span></p>
      </div>

      {/* ------categories slider----- */}
      <div className="bg-white max-w-[1240px] mx-auto mt-14 py-16">
        <Swiper
          slidesPerView={size}
          spaceBetween={30}
          slidesPerGroup={size}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper px-6"
          style={{ "--swiper-theme-color": "#27AE61" }}
        >
          {
            categories.map(category => <SwiperSlide key={category._id}>
              <div className="h-56 w-52 bg-[#27AE612B] rounded-lg flex items-center justify-center p-2">
                <div>
                  <img src={category.image} className="mx-auto" alt="" />
                  <h2 className="text-2xl text-center text-[#00124E] font-bold mt-2">{category.name}</h2>
                </div>
              </div>
            </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Categorys;

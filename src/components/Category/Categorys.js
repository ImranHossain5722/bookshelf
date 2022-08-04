import React, { useState, useEffect } from "react";

//icons
import { FaHeart, FaEye } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import useWindowDimensions from "../windowSize/windowSize";
import { useSelector } from "react-redux";
import Stars from "../Stars/Stars";
import CartButton from "../CartButton/CartButton";
import { NavLink } from "react-router-dom";




const Categorys = () => {
  const books = useSelector((state) => state?.sellBooks?.books);
  // Get Categories from database 
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const options = { method: 'GET' };
    fetch('https://book-shelf-webapp.herokuapp.com/all-categories', options)
      .then(response => response.json())
      .then(data => setAllCategories(data))
    // .catch(err => console.error(err));

  }, [])

  console.log(allCategories);

  const [selectedCatId, setSelectedCatId] = useState('');


  console.log(selectedCatId);
  // get selected Category 
  const getCategoryIdOnClick = (id) => {
    if (selectedCatId.length <= 0) {
      setSelectedCatId(id)
    } else {
      setSelectedCatId('')
    }

  }


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
    <div className="mt-[60px] lg:mt-[120px]">
      {/* ------title section----- */}
      <div className="text-center">
        <h2 className="text-[30px] lg:text-[40px] text-[#00124E] font-bold">Would you like to see any particular books?</h2>
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
            allCategories.map(category => <SwiperSlide key={category._id}>
              <div onClick={() => getCategoryIdOnClick(category._id)} className="h-56 w-52 bg-[#27AE612B] rounded-lg flex items-center justify-center p-2">
                <div>
                  <img src={category?.category_icon_url} className="mx-auto" width={70} alt="" />
                  <h2 className="text-2xl mt-6 text-center text-[#00124E] font-bold">{category?.category_title}</h2>
                </div>
              </div>
            </SwiperSlide>)
          }
        </Swiper>
      </div>
      {/* show book after category select  */}

      {selectedCatId &&
        <div className="bg-white max-w-[1240px] mx-auto mt-[10px] lg:mt-[10px] py-10">
          <div className="mt-8">
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
                books?.map(book => <SwiperSlide key={book._id}>
                  <NavLink to={`/selectedBook/${book._id}`}>
                    <div className="book-shadow rounded-lg h-[460px] pt-6 flex justify-center">
                      <div className="for-hover relative">
                        {/* relative */}
                        <img src={book.book_cover_photo_url} className="h-64 w-44 image-full" alt="" />
                        {/* absolute hover effect */}
                        <div className="bg-[#00124ea4] h-64 w-44 flex items-center justify-center absolute top-0 hover-button hidden">
                          <button className="text-3xl text-white hover:text-primary duration-500">
                            <FaEye />
                          </button>
                          <button className="mx-5 text-3xl text-white hover:text-primary duration-500">
                            <FaHeart />
                          </button>
                          <CartButton _id={book._id} />
                        </div>
                        <div className="w-44 mt-2">
                          <h3>{book.book_title}</h3>
                          <h2 className="text-xl font-semibold text-primary mt-2 mb-1">${book.book_price}</h2>
                          <Stars />
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </SwiperSlide>)
              }
            </Swiper>
          </div>
        </div>}
    </div>
  );
};

export default Categorys;

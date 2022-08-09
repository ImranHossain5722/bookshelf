import React, { useRef, useState, useEffect } from "react";

//icons
import {
  FaHeart,
  FaEye,
  FaShoppingCart,
  FaRegHeart,
  FaRegEye,
  FaShoppingBasket,
} from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Stars from "../Stars/Stars";
import useWindowDimensions from "../windowSize/windowSize";
import CartButton from "../CartButton/CartButton";

const RecentlyViewed = () => {
  const [books, setBooks] = useState([]);
  const [size, setSize] = useState(1);
  const { width } = useWindowDimensions();

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    //  responsiveness added by width change

    if (width >= 1600) {
      setSize(4);
    } else if (width >= 992) {
      setSize(4);
    }
    // else if (width >= 768) {
    //     setSize(3)
    // }
    else if (width >= 576) {
      setSize(2);
    } else {
      setSize(1);
    }
  }, [width]);

  return (
    <div className="bg-white sction_padding">
      <div className="container mx-auto">
        {/* ------title section----- */}
        <h1 className="text-[30px] lg:text-[40px] font-bold text-[#00124E]">
          Recently View
        </h1>

        {/* ------categories slider----- */}
        <div className="mt-8">
          <Swiper
            slidesPerView={size}
            spaceBetween={24}
            slidesPerGroup={size}
            loop={true}
            navigation={false}
            modules={[Autoplay, Navigation]}
            autoplay={true}
            className="mySwiper"
            style={{ "--swiper-theme-color": "#27AE61" }}
          >
            {books?.map((book) => (
              <SwiperSlide key={book._id}>
                <div className="product_widget26 mb_30">
                  <div className="product_thumb_upper position-relative">
                    <span className="offer_badge">-0%</span>
                    <a href="product_details.php" className="thumb text-center">
                      <img src={book.image} alt="" />
                    </a>
                    <div className="product_action">
                      <a href="#">
                        <FaRegHeart />
                      </a>
                      <a href="#">
                        <FaRegEye />
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#theme_modal">
                        <FaShoppingBasket />
                      </a>
                    </div>
                  </div>
                  <div className="product__meta">
                    <a href="product_details.php">
                      <h4>{book.title}</h4>
                    </a>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span className="text-sm font-medium">(02 Rating)</span>
                    </div>
                    <div className="product_prise">
                      <p>${book.price}</p>
                    </div>
                    <button className="home22_addCard_btn add_to_cart flex border-0 items-center">
                      <div className="circle_icon">
                        <FaShoppingBasket />
                      </div>
                      <h5 className="text-sm font-bold text-uppercase m-0">
                        ADD TO CART
                      </h5>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
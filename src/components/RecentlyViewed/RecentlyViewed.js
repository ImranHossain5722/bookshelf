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
import CartButton from "../CartButton/CartButton";

const RecentlyViewed = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  // for swiper slider
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="bg-white sction_padding">
      <div className="container mx-auto relative ">
        {/* ------title section----- */}
        <div className="flex justify-between items-center ">
          <h1 className="text-[30px] lg:text-[40px] font-bold text-[#00124E] section_title">
            Recently View
          </h1>
          <div className="swiperSlide_button_group">
            <div className="swiper_button swiper_button_prev" ref={prevRef}>
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="swiper_button swiper_button_next" ref={nextRef}>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>

        {/* ------categories slider----- */}
        <div className="mt-8">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1500: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={24}
            loop={true}
            navigation={{
              prevEl: "#prev_slide",
              nextEl: "#next_slide",
            }}
            modules={[Autoplay, Navigation]}
            autoplay={true}
            className="mySwiper"
            style={{ "--swiper-theme-color": "#27AE61" }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
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

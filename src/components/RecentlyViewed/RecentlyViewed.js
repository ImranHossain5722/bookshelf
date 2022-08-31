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
import AddCartButton from "../AddCartButton/AddCartButton";
import Wishlistbutton from "../wishlistButton/Wishlistbutton";
import { Link } from "react-router-dom";
import QuickViewButton from "../QuickViewButton/QuickViewButton";

const RecentlyViewed = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-shelf-webapp.herokuapp.com/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  // for swiper slider
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="bg-white  section_spacing">
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
                    {book.discount > 0 && (
                      <span className="offer_badge">-{book.discount}%</span>
                    )}
                    <Link
                      to={`/selectedBook/${book?._id}`}
                      className="thumb text-center"
                    >
                      <img src={book.book_cover_photo_url} alt="" />
                    </Link>
                    <div className="product_action">
                      <Wishlistbutton _id={book._id} />
                      <QuickViewButton _id={book._id} />
                      <CartButton _id={book._id} />
                    </div>
                  </div>
                  <div className="product__meta">
                    <Link to={`/selectedBook/${book?._id}`}>
                      <h4>{book.book_title}</h4>
                    </Link>
                    <p className="text-[16px] text-[#00124e] font-semibold">
                      {book?.book_author?.author_name}
                    </p>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span className="text-sm font-medium">(02 Rating)</span>
                    </div>
                    <div className="product_prise flex items-center gap-2">
                      <span className="line-through">
                        {book.discount > 0 &&
                          `$${book.discount + book.book_price}.00`}
                      </span>
                      <p>${book.book_price}.00</p>
                    </div>
                    <AddCartButton _id={book._id} />
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

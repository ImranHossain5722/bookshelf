import React, { useRef, useState, useEffect } from "react";

//icons
import { FaHeart, FaEye, FaShoppingCart, FaRegEye } from "react-icons/fa";

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
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Wishlistbutton from "../wishlistButton/Wishlistbutton";
import AddCartButton from "../AddCartButton/AddCartButton";
import QuickViewButton from "../QuickViewButton/QuickViewButton";

const SecondCategoryBooks = () => {
  const books = useSelector((state) => state?.sellBooks?.books);

  const [size, setSize] = useState(1);
  const { width } = useWindowDimensions();

  // useEffect(() => {
  //     fetch('data.json')
  //         .then(res => res.json())
  //         .then(data => setBooks(data));
  // }, []);

  useEffect(() => {
    //  responsiveness added by width change
    if (width >= 992) {
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
  // The Story
  const navigate = useNavigate();
  const catHandeler = (e) => {
    navigate("/categoryView");
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="bg-white sction_padding_2 ">
      <div className="container mx-auto relative ">
        {/* ------title section----- */}
        <div className="flex justify-between items-center ">
          <h1 className="text-[30px] lg:text-[40px] font-bold text-[#00124E] section_title">
            The Story
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
                    <Link to={`/selectedBook/${book?._id}`} className="thumb text-center">
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
                    <div className="product_prise">
                      <p>${book.book_price}</p>
                    </div>
                    <AddCartButton _id={book._id} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" text-center mt-8">
          <button
            onClick={() => catHandeler()}
            className="btn btn-primary text-white hover:text-white hover:bg-accent  "
          >
            view all
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondCategoryBooks;

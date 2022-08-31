import React, { useRef, useState, useEffect } from "react";

// images
import img1 from "../../Assets/images/category-images/Open Book.png";
import img2 from "../../Assets/images/category-images/Vector.png";
import img3 from "../../Assets/images/category-images/Computer.png";
import img4 from "../../Assets/images/category-images/Done.png";
//icons
import { FaHeart, FaEye } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import useWindowDimensions from "../windowSize/windowSize";
import { useSelector } from "react-redux";
import Stars from "../Stars/Stars";
import CartButton from "../CartButton/CartButton";
import { Link, NavLink } from "react-router-dom";
import AddCartButton from "../AddCartButton/AddCartButton";
import Wishlistbutton from "../wishlistButton/Wishlistbutton";
import QuickViewButton from "../QuickViewButton/QuickViewButton";
import { toast } from "react-toastify";

const Categorys = () => {

  // Get Categories from database
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCatId, setSelectedCatId] = useState("");
  const [selectedCatTitle, setSelectedCatTitle] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const options = { method: "GET" };
    fetch("https://book-shelf-webapp.herokuapp.com/all-categories", options)
      .then((response) => response.json())
      .then((data) => setAllCategories(data));
  }, []);

  // get books by category id
  useEffect(() => {
    const options = { method: "GET" };
    fetch(
      `https://book-shelf-webapp.herokuapp.com/get-book-by-category?ct=${selectedCatId}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setBooks(response))
      .catch((err) => toast.error(err));
  }, [selectedCatId]);

  // get selected Category
  const getCategoryIdOnClick = (id, title) => {
    if (selectedCatId === id) {
      setSelectedCatId("");
    } else {
      setSelectedCatId(id);
      setSelectedCatTitle(title);
    }
  };

  // for swiper slider
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="section_spacing">
      <div className="container mx-auto">
        {/* ------title section----- */}
        <div className="flex justify-between items-center mb-4">
          <div className="">
            <h2 className="text-[30px] lg:text-[40px] text-[#00124E] font-bold capitalize ">
              particular books
            </h2>
            <p className="text-md font-semibold text-[#00124E] ">
              Select your categories of books
            </p>
          </div>
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

        <div>
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
            autoplay={false}
            className="mySwiper"
            style={{ "--swiper-theme-color": "#27AE61" }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {allCategories?.map((category) => (
              <SwiperSlide key={category._id}>
                {category._id === selectedCatId ? (
                  <div
                    class="category_widget text-center relative "
                    onClick={() =>
                      getCategoryIdOnClick(
                        category._id,
                        category.category_title
                      )
                    }
                  >
                    <div class="icon">
                      <img src={category?.category_icon_url} alt="" />
                    </div>
                    <a href="#">
                      <h4>{category?.category_title}</h4>
                    </a>

                    <div className="checked_cat flex absolute top-0 left-0 right-0 bottom-0 items-center justify-center  rounded-[10px]">
                      <BsCheckLg className="text-[60px] text-[#ffffff] font-extrabold" />
                    </div>
                  </div>
                ) : (
                  <>
                    <div
                      class="category_widget text-center relative"
                      onClick={() =>
                        getCategoryIdOnClick(
                          category._id,
                          category.category_title
                        )
                      }
                    >
                      <div class="icon">
                        <img src={category?.category_icon_url} alt="" />
                      </div>
                      <a href="#">
                        <h4>{category?.category_title}</h4>
                      </a>
                    </div>
                  </>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* show book after category select  */}

        {selectedCatId && (
          <div className="section_spacing_top">
            <div className="container mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-[30px] lg:text-[40px] font-bold text-[#00124E] section_title">
                  {selectedCatTitle}
                </h1>
                <div className="swiperSlide_button_group">
                  <div
                    className="swiper_button swiper_button_prev"
                    ref={prevRef}
                  >
                    <i class="fa-solid fa-angle-left"></i>
                  </div>
                  <div
                    className="swiper_button swiper_button_next"
                    ref={nextRef}
                  >
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </div>
              {books.length === 0 && (
                <h2 className="pl-6 text-[15px] lg:text-[20px] font-bold text-red-600 mb-8">
                  No Books Found
                </h2>
              )}
              {books.length === 0 || (
                <div className="mt-1">
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
                        <div className="product_widget26 mb_30 bg-white">
                          <div className="product_thumb_upper position-relative">
                              {book.discount>0 && <span className="offer_badge">-{book.discount}%</span>}
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
                              <span className="text-sm font-medium">
                                (02 Rating)
                              </span>
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
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categorys;

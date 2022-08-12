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

const Categorys = () => {
  // const books = useSelector((state) => state?.sellBooks?.books);
  // Get Categories from database
  const [allCategories, setAllCategories] = useState([]);
  useEffect(() => {
    const options = { method: "GET" };
    fetch("https://book-shelf-webapp.herokuapp.com/all-categories", options)
      .then((response) => response.json())
      .then((data) => setAllCategories(data));
    // .catch(err => console.error(err));
  }, []);

  // console.log(allCategories)
  const [selectedCatId, setSelectedCatId] = useState("");
  const [selectedCatTitle, setSelectedCatTitle] = useState("");

  const [books, setBooks] = useState([]);
  // get books by category id
  useEffect(() => {
    const options = { method: "GET" };
    fetch(
      `https://book-shelf-webapp.herokuapp.com/get-book-by-category?ct=${selectedCatId}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setBooks(response))
      .catch((err) => console.error(err));
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

  const [size, setSize] = useState(1);
  const { width } = useWindowDimensions();

  useEffect(() => {
    //  responsiveness added by width change
    if (width >= 992) {
      setSize(5);
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
  // for swiper slider
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="container mx-auto py-[120px]">
      {/* ------title section----- */}
      <div className="flex justify-between items-center mb-4">
        <div className="">
          <h2 className="text-[30px] lg:text-[40px] text-[#00124E] font-bold capitalize ">
            particular books
          </h2>
          <p className="text-xl text-[#00124E] font-normal">
            books of choice - maximum <span className="text-primary">2</span>
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
          {allCategories.map((category) => (
            <SwiperSlide key={category._id}>
              {category._id === selectedCatId ? (
                <div
                  class="category_widget text-center relative "
                  onClick={() =>
                    getCategoryIdOnClick(category._id, category.category_title)
                  }
                >
                  <div class="icon">
                    <img src={category?.category_icon_url} alt="" />
                  </div>
                  <a href="#">
                    <h4>{category?.category_title}</h4>
                  </a>
                  <span>207 Products</span>
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
                    <span>207 Products</span>
                  </div>
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* show book after category select  */}

      {selectedCatId && (
        <div className="bg-white max-w-[1240px] mx-auto mt-[10px] lg:mt-[10px] py-10">
          <h1 className="pl-6 text-[30px] lg:text-[40px] font-bold text-[#00124E]">
            {selectedCatTitle}
          </h1>
          {books.length === 0 && (
            <h2 className="pl-6 text-[15px] lg:text-[20px] font-bold text-red-600 mb-8">
              No Books Found
            </h2>
          )}
          {books.length === 0 || (
            <div className="mt-1">
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
                {books?.map((book) => (
                  <SwiperSlide key={book._id}>
                     <div className="product_widget26 mb_30">
                  <div className="product_thumb_upper position-relative">
                    <span className="offer_badge">-0%</span>
                    <a href="product_details.php" className="thumb text-center">
                      <img src={book.book_cover_photo_url} alt="" />
                    </a>
                    <div className="product_action">
                    <Wishlistbutton _id={book._id} />
                    <QuickViewButton _id={book._id} />
                    <CartButton _id={book._id}  />
                    </div>
                  </div>
                  <div className="product__meta">
                    <Link to={`/selectedBook/${book?._id}`}>
                      <h4 >{book.book_title}</h4>
                    </Link>
                      <p className="text-[16px] text-[#00124e] font-semibold">{book?.book_author?.author_name}</p>
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
                  <AddCartButton _id={book._id}/>
                  </div>
                </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Categorys;

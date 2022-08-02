import React, { useRef, useState, useEffect } from "react";

//icons
import { FaHeart, FaEye, FaShoppingCart } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./BestSelling.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Stars from "../Stars/Stars";
import useWindowDimensions from "../windowSize/windowSize";
import { useDispatch, useSelector } from 'react-redux'
import Loading from "../Loading/Loading";
import { sellBooks } from "../Redux/actions/bookActions";
import CartButton from "../CartButton/CartButton";
import { NavLink } from "react-router-dom";
import Wishlistbutton from "../wishlistButton/Wishlistbutton";
const BestSelling = () => {
    const books = useSelector((state) => state?.sellBooks?.books);
    const [size, setSize] = useState(1);
    const { width } = useWindowDimensions();
    const dispatch = useDispatch();


    useEffect(() => {
        fetch('https://book-shelf-webapp.herokuapp.com/all-books')
            .then(res => res.json())
            .then(data => dispatch(sellBooks(data)));
    }, [])

    useEffect(() => {
        //  responsiveness added by width change
        if (width >= 992) {
            setSize(4)
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
        <div className="bg-white max-w-[1240px] mx-auto mt-[60px] lg:mt-[120px] py-10">
            {/* ------title section----- */}
            <h1 className="pl-6 text-[30px] lg:text-[40px] font-bold text-[#00124E]">Last Week Best Selling</h1>

            {/* ------categories slider----- */}
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
                             {/* <NavLink to={`/selectedBook/${book._id}`}> */}
                            <div className="book-shadow rounded-lg h-[460px] pt-6 flex justify-center">
                                <div className="for-hover relative">
                                    {/* relative */}
                                    <img src={book.book_cover_photo_url} className="h-64 w-44 image-full" alt="" />
                                    {/* absolute hover effect */}
                                    <div className="bg-[#00124ea4] h-64 w-44 flex items-center justify-center absolute top-0 hover-button hidden">
                                        <button className="text-3xl text-white hover:text-primary duration-500">
                                            <FaEye />
                                        </button>
                                       <Wishlistbutton _id={book._id}/>
                                       <CartButton _id={book._id}/>
                                    </div>
                                    <div className="w-44 mt-2">
                                        <h3>{book.book_title}</h3>
                                        <h2 className="text-xl font-semibold text-primary mt-2 mb-1">${book.book_price}</h2>
                                        <Stars />
                                    </div>
                                </div>
                            </div>
                            {/* </NavLink> */}
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default BestSelling;
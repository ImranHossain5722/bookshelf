import React, { useRef, useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Stars from "../Stars/Stars";

const BestSelling = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);
    return (
        <div className="bg-white max-w-[1240px] mx-auto mt-[120px] py-10">
            {/* ------title section----- */}
            <h1 className="pl-6 text-[40px] font-bold text-[#00124E]">Last Week Best Selling</h1>

            {/* ------categories slider----- */}
            <div className="mt-8">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    slidesPerGroup={4}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper px-7 py-6"
                    style={{ "--swiper-theme-color": "#27AE61" }}
                >
                    {
                        books.map(book => <SwiperSlide key={book._id}>
                            <div className="shadow-lg rounded-lg py-6 flex items-center justify-center hover:fill-blue-500">
                                <div>
                                    <img src={book.image} className="h-64 w-44 image-full" alt="" />
                                    <div className="w-44 mt-2">
                                        <h3>{book.title}</h3>
                                        <p className="mt-2">{book.author}</p>
                                        <h2 className="text-xl font-semibold text-primary mt-2 mb-1">${book.price}</h2>
                                        <Stars />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default BestSelling;
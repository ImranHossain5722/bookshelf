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
import useWindowDimensions from "../windowSize/windowSize";


const PreOrderBooks = () => {
    const [books, setBooks] = useState([]);
    const [size, setSize] = useState(1);
    const { width } = useWindowDimensions();

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

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
        <div className="bg-white max-w-[1240px] mx-auto mt-[120px] py-10">
            {/* ------title section----- */}
            <h1 className="pl-6 text-[40px] font-bold text-[#00124E]">The Novel</h1>

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
                        books.map(book => <SwiperSlide key={book._id}>
                            <div className="book-shadow rounded-lg h-[460px] pt-6 flex justify-center hover:fill-blue-500">
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

export default PreOrderBooks;
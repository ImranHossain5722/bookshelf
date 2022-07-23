import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Stars from "../Stars/Stars";


const PopularBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    // console.log(books);

    return (
        <div className="px-10 mt-28">
            <Swiper
                slidesPerView={6}
                spaceBetween={5}
                slidesPerGroup={6}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper px-8"
            >
                {
                    books.map(book => <SwiperSlide>
                        <div className="mb-10 py-5 hover:shadow-xl cursor-pointer rounded-md">
                            <img src={book.image} className='w-32 h-52 bg-cover mx-auto' alt="" />
                            <div className="text-center mt-2 px-5">
                                <h2>{book.title}</h2>
                                <p className="my-2">{book.author}</p>
                                <Stars />
                                <h2 className="mt-2 font-semibold">TK. {book.price}</h2>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default PopularBooks;
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

const PopularAuthor = () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        fetch('reviews/review.json')
            .then(res => res.json())
            .then(data => setAuthors(data));
    }, []);
    return (
        <div className="bg-white max-w-[1240px] mx-auto my-[120px] py-10">
            {/* ------title section----- */}
            <h1 className="pl-6 text-[40px] font-bold text-[#00124E]">Popular Author</h1>

            {/* ------categories slider----- */}
            <div className="mt-8">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    slidesPerGroup={5}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper px-9 py-6"
                    style={{ "--swiper-theme-color": "#27AE61" }}
                >
                    {
                        authors.map(author => <SwiperSlide key={author.id}>
                            <div className="py-6 flex items-center justify-center hover:fill-blue-500">
                                <div>
                                    <img src={author.image} className="w-48 h-48 rounded-full image-full bg-cover" alt="" />
                                    <p className="mt-2 text-center text-xl font-bold">{author.name}</p>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default PopularAuthor;
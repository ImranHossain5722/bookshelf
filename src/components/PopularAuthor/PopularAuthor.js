import React, { useRef, useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import useWindowDimensions from "../windowSize/windowSize";
import { useDispatch, useSelector } from "react-redux";
import { author } from "../Redux/actions/bookActions";

const PopularAuthor = () => {
   const authors = useSelector((state)=> state.author.author)
   const dispatch = useDispatch()
    const [size, setSize] = useState(1);
    const { width } = useWindowDimensions();

    useEffect(() => {
        fetch('reviews/review.json')
            .then(res => res.json())
            .then(data => dispatch(author(data))); 
    }, []);

    useEffect(() => {
        //  responsiveness added by width change
        if (width >= 992) {
            setSize(5)
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
        <div className="bg-white max-w-[1240px] mx-auto my-[120px] py-10">
            {/* ------title section----- */}
            <h1 className="pl-6 text-[40px] font-bold text-[#00124E]">Popular Author</h1>

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
                    className="mySwiper px-9 py-6"
                    style={{ "--swiper-theme-color": "#27AE61" }}
                >
                    {
                        authors?.map(author => <SwiperSlide key={author.id}>
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
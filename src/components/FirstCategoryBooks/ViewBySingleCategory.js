import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import CartButton from "../CartButton/CartButton";
import Stars from "../Stars/Stars";
const ViewBySingleCategory = () => {
  const books = useSelector((state) => state?.sellBooks?.books);
  return (
    <div className="pt-[60px] md:pt-[80px] lg:pt-[120px]  pb-[60px] md:pb-[80px] lg:pb-[120px] ">
      <div className="container m-auto flex gap-6 justify-between">
        <div className="w-full">
          <h1 className=" text-[30px] lg:text-[40px] font-bold text-[#00124E] flex-1 mb-4 capitalize ">
            all from The Novel
          </h1>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
            {books?.map((book) => (
              <NavLink to={`/selectedBook/${book._id}`}>
                <div className="book-shadow rounded-lg h-[460px] pt-6 flex justify-center bg-white">
                  <div className="for-hover relative">
                    {/* relative */}
                    <img
                      src={book.book_cover_photo_url}
                      className="h-64 w-44 image-full"
                      alt=""
                    />
                    {/* absolute hover effect */}
                    <div className="bg-[#00124ea4] h-64 w-44 flex items-center justify-center absolute top-0 hover-button hidden">
                      <button className="text-3xl text-white hover:text-primary duration-500">
                        <FaEye />
                      </button>
                      <button className="mx-5 text-3xl text-white hover:text-primary duration-500">
                        <FaHeart />
                      </button>
                      <CartButton _id={book._id} />
                    </div>
                    <div className="w-44 mt-2">
                      <h3>{book.book_title}</h3>
                      <h2 className="text-xl font-semibold text-primary mt-2 mb-1">
                        ${book.book_price}
                      </h2>
                      <Stars />
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBySingleCategory;

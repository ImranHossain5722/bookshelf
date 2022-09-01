import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import CartButton from "../CartButton/CartButton";
import Stars from "../Stars/Stars";

import QuickViewButton from '../QuickViewButton/QuickViewButton';
import Wishlistbutton from '../wishlistButton/Wishlistbutton';
import { Link } from 'react-router-dom';
import AddCartButton from '../AddCartButton/AddCartButton';
import Button from '../Button/Button';


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
              <div className="product_widget26 mb_30">
                <div className="product_thumb_upper position-relative">
                  {book.discount > 0 && <span className="offer_badge">-{book.discount}%</span>}
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
                    <i className={book?.average_rating >= 1 ? "fas fa-star text-[#ffc107]" : "fas fa-star"}></i>
                    <i className={book?.average_rating >= 2 ? "fas fa-star text-[#ffc107]" : "fas fa-star"}></i>
                    <i className={book?.average_rating >= 3 ? "fas fa-star text-[#ffc107]" : "fas fa-star"}></i>
                    <i className={book?.average_rating >= 4 ? "fas fa-star text-[#ffc107]" : "fas fa-star"}></i>
                    <i className={book?.average_rating === 5 ? "fas fa-star text-[#ffc107]" : "fas fa-star"}></i>
                    <span className="text-sm font-medium">
                      ({book?.book_reviews.length})
                    </span>
                  </div>
                  <div className="product_prise">
                    <p>${book.book_price}</p>
                  </div>
                   {book.book_qnt ? <AddCartButton _id={book._id} /> : <AddCartButton  />}
                      
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBySingleCategory;

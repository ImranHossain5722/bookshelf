import React, { useEffect, useState } from "react";
//icons
import { FaHeart, FaEye, FaShoppingCart, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddCartButton from "../AddCartButton/AddCartButton";
import Button from "../Button/Button";
import CartButton from "../CartButton/CartButton";
import Loading from "../Loading/Loading";
import QuickViewButton from "../QuickViewButton/QuickViewButton";
import Stars from "../Stars/Stars";
import Wishlistbutton from "../wishlistButton/Wishlistbutton";
import { BsStar } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const PopularWritersBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://book-shelf-webapp.herokuapp.com/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
    setLoading(false);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books?.splice(0, 8).map((book) => (
          <div className="product_widget26 mb_30 bg-white">
            <div className="product_thumb_upper position-relative">
              {book.discount > 0 && <span className="offer_badge">-{book.discount}%</span>}
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
              {book?.average_rating >= 1 ?<AiFillStar className="text-[#ffc107]" />:<BsStar/>} 
                    {book?.average_rating >= 2 ?<AiFillStar className="text-[#ffc107]"/>:<BsStar/>} 
                    {book?.average_rating >= 3 ?<AiFillStar className="text-[#ffc107]"/>:<BsStar/>} 
                    {book?.average_rating >= 4 ?<AiFillStar className="text-[#ffc107]"/>:<BsStar/>} 
                    {book?.average_rating === 5?<AiFillStar className="text-[#ffc107]"/>:<BsStar/>} 
                <span className="text-sm font-medium">
                  ({book?.book_reviews.length})
                </span>
              </div>
              <div className="product_prise flex items-center gap-2">
              <span className="line-through">
                        {book.discount > 0 &&
                          `$${book.discount + book.book_price}.00`}
                      </span>
                      <p>${book.book_price}.00</p>
              </div>
               {book.book_qnt ? <AddCartButton _id={book._id} /> : <AddCartButton  />}
                      
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-12">
        <Button>See More</Button>
      </div>
    </>
  );
};

export default PopularWritersBooks;

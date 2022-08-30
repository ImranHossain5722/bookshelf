import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddCartButton from "../../components/AddCartButton/AddCartButton";
import Button from "../../components/Button/Button";
import CartButton from "../../components/CartButton/CartButton";
import Loading from "../../components/Loading/Loading";
import QuickViewButton from "../../components/QuickViewButton/QuickViewButton";
import {
  bestOfferBooks,
} from "../../components/Redux/actions/bookActions";
import Wishlistbutton from "../../components/wishlistButton/Wishlistbutton";

const BestOfferPage = () => {
  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(false);

  const offerBooks = useSelector((state) => state?.bestOffer?.bestOffer);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://book-shelf-webapp.herokuapp.com/all-books")
      .then((res) => res.json())
      .then((data) => dispatch(bestOfferBooks(data.slice(2, 10))));
  }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 mx-4 mt-4">
        {loading ? (
          <Loading />
        ) : (
          offerBooks?.map((book) => (
            // <Link to={`/selectedBook/${book?._id}`}>
            <div className="product_widget26 mb_30 bg-white">
              <div className="product_thumb_upper position-relative">
                {book.discount > 0 && <span className="offer_badge">-{book.discount}%</span>}
                <Link to={`/selectedBook/${book?._id}`} className="thumb text-center">
                  <img src={book?.book_cover_photo_url} alt="" />
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
                  {book.author}
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
                <AddCartButton _id={book._id} />
              </div>
            </div>
            // </Link>
          ))
        )}
      </div>

    </div>

  )
};

export default BestOfferPage;

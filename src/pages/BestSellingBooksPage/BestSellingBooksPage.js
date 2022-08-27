import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import AddCartButton from "../../components/AddCartButton/AddCartButton";
import CartButton from "../../components/CartButton/CartButton";
import Loading from "../../components/Loading/Loading";
import QuickViewButton from "../../components//QuickViewButton/QuickViewButton";
import Wishlistbutton from "../../components//wishlistButton/Wishlistbutton";
const BestSellingBooksPage = () => {

    const [books, setBooks] = useState([]);
  
 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      
        setLoading(true);
          fetch("https://book-shelf-webapp.herokuapp.com/all-books")
            .then((res) => res.json())
            .then((data) => setBooks(data));
          setLoading(false);
 
    }, [])
    if (loading) {
     return <Loading/>;
   }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 mt-5 mx-4">
    {
      books?.map((book) => (
        <div className="product_widget26 mb_30 bg-white">
          <div className="product_thumb_upper position-relative">
              {book.discount>0 && <span className="offer_badge">-{book.discount}%</span>}
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
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <span className="text-sm font-medium">(02 Rating)</span>
            </div>
            <div className="product_prise">
              <p>${book.book_price}</p>
            </div>
            <AddCartButton _id={book._id} />
          </div>
        </div>
      ))
    }
  </div>
        </div>
    );
};

export default BestSellingBooksPage;
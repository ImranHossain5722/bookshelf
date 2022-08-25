import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AddCartButton from "../AddCartButton/AddCartButton";
import Button from "../Button/Button";
import CartButton from "../CartButton/CartButton";
import Loading from "../Loading/Loading";
import QuickViewButton from "../QuickViewButton/QuickViewButton";
import Stars from "../Stars/Stars";
import Wishlistbutton from "../wishlistButton/Wishlistbutton";

const PopularBooks = () => {
   const [books, setBooks] = useState([]);
   const [clicked, setclicked] = useState("best_selling");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
   
    if(clicked === "best_selling"){

      setLoading(true);
      fetch("https://book-shelf-webapp.herokuapp.com/all-books")
        .then((res) => res.json())
        .then((data) => setBooks(data));
      setLoading(false);

    }
   else if(clicked === "popular_writer"){

      setLoading(true);
      fetch("https://book-shelf-webapp.herokuapp.com/all-books")
        .then((res) => res.json())
        .then((data) => setBooks(data));
      setLoading(false);

    }
   else if(clicked === "best_offer"){

      setLoading(true);
      fetch("https://book-shelf-webapp.herokuapp.com/all-books")
        .then((res) => res.json())
        .then((data) => setBooks(data));
      setLoading(false);
    }else{
      setLoading(true);
      fetch("https://book-shelf-webapp.herokuapp.com/all-books")
        .then((res) => res.json())
        .then((data) => setBooks(data));
      setLoading(false);
    }
  }, [clicked,books]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="section_spacing">
      <div className=" container mx-auto ">
        <h1 className="pl-6 text-[30px] lg:text-[40px] font-bold text-[#00124E] text-center">
          Popular Books
        </h1>
        <div className="flex justify-center mt-5 mb-16 text-[#00124E] font-bold">
          <ul className="flex">
            <li className="hover:text-primary duration-500">
              <button onClick={() => setclicked("best_selling")} >Best Selling Books</button>
            </li>
            <li className="mx-10 hover:text-primary duration-500">
              <button  onClick={() => setclicked("popular_writer")}>Popular Writer's Books</button>
            </li>
            <li className="hover:text-primary duration-500">
              <button onClick={() => setclicked("best_offer")} >Best Offers Books</button>
            </li>
          </ul>
        </div>
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books?.splice(0, 8).map((book) => (
          <div className="product_widget26 mb_30 bg-white">
            <div className="product_thumb_upper position-relative">
              <span className="offer_badge">-{book.discount}%</span>
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
        ))}
      </div>
      <div className="flex justify-center my-12">
        <Button>See More</Button>
      </div>

      </div>
    </div>
  );
};

export default PopularBooks;

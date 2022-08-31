import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import AddCartButton from "../AddCartButton/AddCartButton";
import Button from "../Button/Button";
import CartButton from "../CartButton/CartButton";
import Loading from "../Loading/Loading";
import QuickViewButton from "../QuickViewButton/QuickViewButton";
import { bestOfferBooks, bestSelllingBooks, popularBooks, populerWriterBooks } from "../Redux/actions/bookActions";
import Wishlistbutton from "../wishlistButton/Wishlistbutton";

const PopularBooks = () => {
   const [books, setBooks] = useState([]);
   const [clicked, setclicked] = useState("best_selling");
   const [selectedRoute, setselectedRoute] = useState("/bestSelling");
  const [loading, setLoading] = useState(false);
  const sellBooks = useSelector(state => state?.bestSelling?.bestSelling)
  const authorBooks = useSelector(state => state?.popularWriter?.popularWriter)
  const offerBooks = useSelector(state => state?.bestOffer?.bestOffer)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    fetch("https://book-shelf-webapp.herokuapp.com/get-popular-books")
        .then((res) => res.json())
        .then((data) => dispatch(bestSelllingBooks(data)));
    setLoading(false)

  }, []);
  

  useEffect(() => {
    fetch("https://book-shelf-webapp.herokuapp.com/all-books")
    .then((res) => res.json())
    .then((data) => dispatch(populerWriterBooks(data.slice(0,8))));
  }, []);
    

  useEffect(() => {
  fetch("https://book-shelf-webapp.herokuapp.com/get-best-discount-books")
        .then((res) => res.json())
        .then((data) => dispatch(bestOfferBooks(data)));
  }, []);
  
  useEffect(() => {
   if(clicked === "best_selling"){
    setBooks(sellBooks)
    setselectedRoute("/bestSelling")
   } 
  }, [books,sellBooks]); 

  useEffect(() => {
   
    if(clicked === "best_selling"){
      setBooks(sellBooks)
      setselectedRoute("/bestSelling")

    }
   else if(clicked === "popular_writer"){
    
    setBooks(authorBooks)
    setselectedRoute("/Poplerwriters")

  }
  else if(clicked === "best_offer"){
   
      setBooks(offerBooks)
      setselectedRoute("/BestOffers")

    }
  }, [clicked]); 

  if (loading  || books.length === 0) {
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
              <button onClick={() => setclicked("best_selling")} >Best Selling</button>
            </li>
            <li className="mx-10 hover:text-primary duration-500">
            <button  onClick={() => setclicked("popular_writer")}>Popular Writer's </button>
            </li>
            <li className="hover:text-primary duration-500">
              <button onClick={() => setclicked("best_offer")} >Best Offers </button>
            </li>
          </ul>
        </div>
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books?.map((book) => (
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
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span className="text-sm font-medium">(02 Rating)</span>
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
        <Link to={selectedRoute}>
        <Button>See More</Button>
        </Link>
      </div>

      </div>
    </div>
  );
};

export default PopularBooks;

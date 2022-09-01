import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AddCartButton from "../AddCartButton/AddCartButton";
import CartButton from "../CartButton/CartButton";
import Loading from "../Loading/Loading";
import QuickViewButton from "../QuickViewButton/QuickViewButton";
import Wishlistbutton from "../wishlistButton/Wishlistbutton";
import axios from "axios";

const BestSellingBooks = () => {

  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostPerPage] = useState(10);
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false);





  useEffect(() => {
    const loadBooks = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://book-shelf-webapp.herokuapp.com/all-books"
      );

      setPosts(res.data);
      setLoading(false);
    };

    loadBooks();
  }, [])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts?.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (loading) {
    return <Loading />;
  }
  return (<div>

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-10 md:w-3/4">
      {loading ? (
        <Loading />
      ) : (
        currentPosts?.map((book) => (
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

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 ">
              {loading ? (
                <Loading />
              ) : (
                currentPosts?.map((book) => (
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
                      <AddCartButton _id={book._id} />
                    </div>
                  </div>
                  // </Link>
                ))
              )}
            </div>
         
         

          </div>
          // </Link>
        ))
      )}
    </div>
    {/* pagenation */}
    <div className="flex justify-center p-3 ">
      {pageNumbers.map((number) => (
        <button
          onClick={() => paginate(number)}
          className="page-link btn btn-primary mx-2"
        >
          {number}
        </button>
      ))}
      <select
        className="select select-primary "
        onChange={(event) => setpostPerPage(event.target.value)}
      >
        <option value="5">5</option>
        <option value="10" selected>
          10
        </option>
        <option value="15">15</option>
      </select>
    </div>
  </div >
  )
}

export default BestSellingBooks
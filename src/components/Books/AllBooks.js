import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartButton from "../CartButton/CartButton";
import Loading from "../Loading/Loading";
import { allBooks } from "../Redux/actions/bookActions";
import Stars from "../Stars/Stars";
import { FaPlus, FaMinus } from "react-icons/fa";
import Wishlistbutton from "../wishlistButton/Wishlistbutton";
import QuickViewButton from "../QuickViewButton/QuickViewButton";
import AddCartButton from "../AddCartButton/AddCartButton";
// import { useQuery } from "react-query";

const AllBooks = () => {
  // const [bookpagi, setBookpagi] = useState([]);
  // const [pageCount, setPageCount] = useState(1);
  // const [size, setSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState(false);

  const [countBooks, setCountBooks] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostPerPage] = useState(10);

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

    // get all categories data
    const loadCategories = async () => {
      const categoriesData = await axios.get(
        "https://book-shelf-webapp.herokuapp.com/all-categories"
      );
      setCategories(categoriesData.data);
    };

    loadCategories();

    // get all author data
    const loadAuthors = async () => {
      const authorsData = await axios.get(
        "https://book-shelf-webapp.herokuapp.com/all-authors"
      );
      setAuthors(authorsData.data);
    };

    loadAuthors();

    console.log(authors);
  }, []);

  // filtering all books by category or author
  const filterBooks = async (categoryTitle, authorTitle) => {
    setLoading(true);
    const res = await axios.get(
      "https://book-shelf-webapp.herokuapp.com/all-books"
    );

    if (categoryTitle) {
      const filteredCategory = res.data.filter((matched) =>
        matched.book_category
          .map((eachCg) => eachCg?.category_id?.category_title)
          .includes(categoryTitle)
      );
      // console.log(filteredCategory);
      setPosts(filteredCategory);

      setCountBooks(filteredCategory.length);

      setLoading(false);
    } else if (authorTitle) {
      const filteredAuthor = res.data.filter((matched) =>
        matched?.book_author?.author_name.includes(authorTitle)
      );
      // console.log(filteredAuthor);
      setPosts(filteredAuthor);

      setLoading(false);
    }
  };

  // toggle accordian fucntion
  const toggleShow = (id_options) => {
    if (!hidden) {
      document.querySelector(id_options).classList.remove("hidden");
      setActive(id_options);
    } else {
      document.querySelector(id_options).classList.add("hidden");
      setActive("");
    }
  };

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

  return (
    <div className="section_padding">
      <div style={{ background: "#FBF6F6" }} className=" container mx-auto ">
        <div className="md:flex gap-6 items-start ">
          {/* filter options left-side */}
          <div className="flex-1 md:w-1/4 mb-4">
            <h5 className="mb-3 text-xl text-xl font-semibold capitalize">
              filter category
            </h5>

            <div className="border-x border-t  bg-white ">
              {/* ======= categories filter ======= */}

              <div className="single_filterBox border-b p-6">
                <div
                  onClick={() => {
                    setHidden(!hidden);
                    toggleShow("#show-categories");
                  }}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="text-xl font-semibold capitalize">
                    categories
                  </h3>
                  {active === "#show-categories" ? <FaMinus /> : <FaPlus />}
                </div>
                <ul id="show-categories" className="hidden mt-6">
                  {categories?.map((singleCg) => (
                    // filtering books by category
                    <li
                      onClick={() => filterBooks(singleCg.category_title, "")}
                      key={singleCg._id}
                      className="flex justify-between items-center mt-4 cursor-pointer"
                    >
                      <p className="hover:text-primary duration-200">
                        {singleCg.category_title}
                      </p>
                      {/* {countBooks ? <span>({countBooks})</span> : ''} */}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ======= author filter ======= */}
              <div className="single_filterBox  border-b p-6">
                <div
                  onClick={() => {
                    setHidden(!hidden);
                    toggleShow("#show-authors");
                  }}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="text-xl font-semibold capitalize">Author</h3>
                  {active === "#show-authors" ? <FaMinus /> : <FaPlus />}
                </div>
                <ul id="show-authors" className="hidden mt-6">
                  {authors?.map((singleAuthor) => (
                    <li
                      onClick={() => filterBooks("", singleAuthor.author_name)}
                      key={singleAuthor._id}
                      className="flex justify-between items-center mt-4 cursor-pointer"
                    >
                      <p className="hover:text-primary duration-200">
                        {singleAuthor.author_name}
                      </p>
                      {/* <span>(1)</span> */}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ======= price filter ======= */}
              <div className="single_filterBox border-b p-6">
                <div
                  onClick={() => {
                    setHidden(!hidden);
                    toggleShow("#show-price");
                  }}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="text-xl font-semibold capitalize">
                    Filter Price
                  </h3>
                  {active === "#show-price" ? <FaMinus /> : <FaPlus />}
                </div>
                <div id="show-price" className="hidden mt-6">
                  <input type="range" min="0" max="100" value="70" />
                </div>
              </div>
            </div>
          </div>
          {/* filter results right-side */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-10 md:w-3/4">
            {loading ? (
              <Loading />
            ) : (
              currentPosts?.map((book) => (
                // <Link to={`/selectedBook/${book?._id}`}>
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
                // </Link>
              ))
            )}
          </div>
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
      </div>
    </div>
  );
};

export default AllBooks;

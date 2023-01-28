import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartButton from "../CartButton/CartButton";
import Loading from "../Loading/Loading";
import { FaPlus, FaMinus } from "react-icons/fa";
import Wishlistbutton from "../wishlistButton/Wishlistbutton";
import QuickViewButton from "../QuickViewButton/QuickViewButton";
import AddCartButton from "../AddCartButton/AddCartButton";
import { FaHome } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { RiLayoutGridFill } from "react-icons/ri";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { BsStar } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const AllBooks = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState(false);
  const [countBooks, setCountBooks] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostPerPage] = useState(10);
  const [showList, setShowLIst] = useState(false);
  const user = useSelector((state) => state?.newUser?.user);
  const userId = user?._id;
  useEffect(() => {
    const loadBooks = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://bookshelf-server-s8lf.onrender.com/all-books"
      );

      setPosts(res.data);

      setLoading(false);
    };

    loadBooks();

    // get all categories data
    const loadCategories = async () => {
      const categoriesData = await axios.get(
        "https://bookshelf-server-s8lf.onrender.com/all-categories"
      );
      setCategories(categoriesData.data);
    };

    loadCategories();

    // get all author data
    const loadAuthors = async () => {
      const authorsData = await axios.get(
        "https://bookshelf-server-s8lf.onrender.com/all-authors"
      );
      setAuthors(authorsData.data);
    };

    loadAuthors();
  }, []);

  // filtering all books by category or author
  const filterBooks = async (categoryTitle, authorTitle) => {
    setLoading(true);
    const res = await axios.get(
      "https://bookshelf-server-s8lf.onrender.com/all-books"
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

  const AddCart = (id) => {
    const cartData = {
      user_id: userId,
      cart_data: {
        book: id,
        qnt: 1,
      },
    };
    if (userId) {
      axios
        .post(
          "https://bookshelf-server-s8lf.onrender.com/add-to-cart",
          cartData
        )
        .then((data) => {
          toast.success("successfully added to cart");
        });
    } else {
      console.log("user id not found", userId);
    }
  };

  // adding to  wishlist
  const AddWishlist = async (id) => {
    const cardData = {
      user_id: userId,
      wishlist_data: {
        book: id,
      },
    };
    if (userId) {
      await axios
        .post(
          "https://bookshelf-server-s8lf.onrender.com/add-to-wishlist",
          cardData
        )
        .then((data) => toast.success("added to wishlist"));
    } else {
      console.log(" the user id is not found");
    }
  };

  return (
    <div className="section_padding">
      <div className="flex w-full mb-4 justify-between  ">
        <div class="text-sm  breadcrumbs justify-center ">
          <ul className=" text-center mx-auto">
            <li>
              <Link to="/">
                <FaHome className="text-[20px] mr-2" />

                <p className="text-[20px] ">Home</p>
              </Link>
            </li>
            <li>
              <GiBookCover className="text-[20px] mr-2" />
              <p className="text-[20px] ">Book</p>
            </li>
          </ul>
        </div>
        <div>
          <button
            className="btn btn-sm mr-2 text-primary border-primary border-2 hover:bg-primary hover:text-white hover:border-primary focus:bg-primary focus:text-white focus:border-primary"
            onClick={() => setShowLIst(false)}
          >
            <RiLayoutGridFill className="text-[18px] font-bold" />
          </button>
          <button
            className="btn btn-sm mr-2 text-primary border-primary border-2 hover:bg-primary hover:text-white hover:border-primary focus:bg-primary focus:text-white focus:border-primary"
            onClick={() => setShowLIst(true)}
          >
            <AiOutlineUnorderedList className="text-[18px] font-bold" />
          </button>
        </div>
      </div>
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
          {showList ? (
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-10 md:w-3/4">
              {loading ? (
                <Loading />
              ) : (
                currentPosts?.map((book) => (
                  <div class="product_widget26  bg-white lg:flex gap-2">
                    <div className="product_thumb_upper position-relative">
                      {book.discount > 0 && (
                        <span className="offer_badge">-{book.discount}%</span>
                      )}
                      <Link
                        to={`/selectedBook/${book?._id}`}
                        className="thumb text-center"
                      >
                        <img
                          src={book?.book_cover_photo_url}
                          alt=""
                          className="min-w-[300px] h-full"
                        />
                      </Link>
                      <div className="product_action">
                        <Wishlistbutton _id={book._id} />
                        <QuickViewButton _id={book._id} />
                        <CartButton _id={book._id} />
                      </div>
                    </div>
                    <div class="product__meta my-10">
                      <h2 class="card-title">
                        <Link to={`/selectedBook/${book?._id}`}>
                          <h4>{book.book_title}</h4>
                        </Link>
                      </h2>
                      <p className="h-fit mb-1">{book.book_description}</p>
                      <div className="product_prise flex items-center gap-2">
                        <span className="line-through">
                          {book.discount > 0 &&
                            `$${book.discount + book.book_price}.00`}
                        </span>
                        <p>${book.book_price}.00</p>
                      </div>
                      <div className="stars">
                        {book?.average_rating >= 2 ? (
                          <AiFillStar className="text-[#ffc107]" />
                        ) : (
                          <BsStar />
                        )}
                        {book?.average_rating >= 3 ? (
                          <AiFillStar className="text-[#ffc107]" />
                        ) : (
                          <BsStar />
                        )}
                        {book?.average_rating >= 4 ? (
                          <AiFillStar className="text-[#ffc107]" />
                        ) : (
                          <BsStar />
                        )}
                        {book?.average_rating === 5 ? (
                          <AiFillStar className="text-[#ffc107]" />
                        ) : (
                          <BsStar />
                        )}
                        <span className="text-sm font-medium">
                          ({book?.book_reviews.length})
                        </span>
                      </div>
                      <div className="flex items-center text-black mb-3 gap-2">
                        <button
                          className="icon-btn add-btn"
                          onClick={() => AddCart(book._id)}
                        >
                          <FaCartPlus className="add-icon  text-primary text-2xl" />

                          <div className="btn-txt">Add to cart</div>
                        </button>

                        <button
                          className="icon-btn add-btn"
                          onClick={() => AddWishlist(book._id)}
                        >
                          <FaHeart className="add-icon text-primary text-2xl" />
                          <div className="btn-txt">Add to wishlist</div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-10 md:w-3/4">
              {loading ? (
                <Loading />
              ) : (
                currentPosts?.map((book) => (
                  <div className="product_widget26 mb_30 bg-white">
                    <div className="product_thumb_upper position-relative">
                      {book.discount > 0 && (
                        <span className="offer_badge">-{book.discount}%</span>
                      )}
                      <Link
                        to={`/selectedBook/${book?._id}`}
                        className="thumb text-center"
                      >
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
                        {book?.average_rating >= 2 ? (
                          <AiFillStar className="text-[#ffc107]" />
                        ) : (
                          <BsStar />
                        )}
                        {book?.average_rating >= 3 ? (
                          <AiFillStar className="text-[#ffc107]" />
                        ) : (
                          <BsStar />
                        )}
                        {book?.average_rating >= 4 ? (
                          <AiFillStar className="text-[#ffc107]" />
                        ) : (
                          <BsStar />
                        )}
                        {book?.average_rating === 5 ? (
                          <AiFillStar className="text-[#ffc107]" />
                        ) : (
                          <BsStar />
                        )}
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
                      {book.book_qnt ? (
                        <AddCartButton _id={book._id} />
                      ) : (
                        <AddCartButton />
                      )}
                    </div>
                  </div>
                  // </Link>
                ))
              )}
            </div>
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
      </div>
    </div>
  );
};

export default AllBooks;

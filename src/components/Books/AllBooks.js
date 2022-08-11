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

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostPerPage] = useState(10);

  useEffect(() => {
    // get all categories data 
    const loadCategories = async () => {
      const categoriesData = await axios.get('https://book-shelf-webapp.herokuapp.com/all-categories');
      setCategories(categoriesData.data);
    };

    loadCategories();


    // get all author data
    const loadAuthors = async () => {
      const authorsData = await axios.get('https://book-shelf-webapp.herokuapp.com/all-authors');
      setAuthors(authorsData.data);
    };

    loadAuthors();

    console.log(authors);
  }, []);

  // filtering all books 
  const filterBooks = async (categoryTitle) => {
    setLoading(true);
    const res = await axios.get(
      "https://book-shelf-webapp.herokuapp.com/all-books"
    );

    const filteredData = res.data.filter(matched =>
      matched.book_category.map(eachCg => eachCg?.category_id?.category_title).includes(categoryTitle)
    )

    console.log(filteredData);


    setPosts(filteredData);

    setLoading(false);
  };


  // toggle accordian fucntion
  const toggleShow = (id_options) => {
    if (!hidden) {
      document.querySelector(id_options).classList.remove('hidden');
      setActive(id_options);
    } else {
      document.querySelector(id_options).classList.add('hidden');
      setActive('');
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

  // if (loading) {
  //   return <Loading />;
  // }





  return (
    <div
      style={{ background: "#FBF6F6" }}
      className=" max-w-[1440px] p-6 w-full mx-auto ">
      <div className="md:flex gap-6 items-start ">
        {/* filter options left-side */}
        <div className="border-x border-t flex-1 max-w-[240px]">
          {/* ======= categories filter ======= */}
          <div className="single_filterBox border-b p-6">
            <div onClick={() => {
              setHidden(!hidden);
              toggleShow("#show-categories");
            }} className="flex justify-between items-center cursor-pointer">
              <h3 className="text-xl font-semibold capitalize">categories</h3>
              {active === '#show-categories' ? <FaMinus /> : <FaPlus />}
            </div>
            <ul id="show-categories" className="hidden mt-6">
              {
                categories?.map(singleCg =>
                  // filtering books by category
                  <li onClick={() => filterBooks(singleCg.category_title)} key={singleCg._id} className="flex justify-between items-center mt-4 cursor-pointer">
                    <p className="hover:text-primary duration-200">{singleCg.category_title}</p>
                    <span>(1)</span>
                  </li>)
              }
            </ul>
          </div>

          {/* ======= author filter ======= */}
          <div className="single_filterBox mb-5 border-b p-6">
            <div onClick={() => {
              setHidden(!hidden);
              toggleShow("#show-authors");
            }} className="flex justify-between items-center cursor-pointer">
              <h3 className="text-xl font-semibold capitalize">Author</h3>
              {active === '#show-authors' ? <FaMinus /> : <FaPlus />}
            </div>
            <ul id="show-authors" className="hidden mt-6">
              {
                authors?.map(singleAuthor =>
                  <li key={singleAuthor._id} className="flex justify-between items-center mt-4">
                    <p>{singleAuthor.author_name}</p>
                    <span>(1)</span>
                  </li>)
              }
            </ul>
          </div>
        </div>

        {/* filter results right-side */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14 mb-10 grow">
          {loading ? <Loading /> : currentPosts?.map((book) => (
            <Link to={`/selectedBook/${book?._id}`}>
              <div className="book-shadow rounded-lg h-[460px] pt-6 flex justify-center bg-white">
                <div className="for-hover relative">
                  {/* relative */}
                  <img
                    src={book?.book_cover_photo_url}
                    className="h-64 w-44 image-full"
                    alt="Books-images"
                  />
                  {/* absolute hover effect */}
                  <div className="bg-[#00124ea4] h-64 w-44 flex items-center justify-center absolute top-0 hover-button hidden">
                    <button className="text-3xl text-white hover:text-primary duration-500">
                      <FaEye />
                    </button>
                    <button className="mx-5 text-3xl text-white hover:text-primary duration-500">
                      <FaHeart />
                    </button>
                    <CartButton _id={book?._id} />
                  </div>
                  <div className="w-44 mt-2">
                    <h3>{book.book_title}</h3>
                    <p className="mt-2">{book.author}</p>
                    <h2 className="text-xl font-semibold text-primary mt-2 mb-1">
                      ${book.book_price}
                    </h2>
                    <Stars />
                  </div>
                </div>
              </div>
            </Link>
          ))}
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
  );
};

export default AllBooks;

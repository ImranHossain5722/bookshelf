import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartButton from "../CartButton/CartButton";
import Loading from "../Loading/Loading";
import { allBooks } from "../Redux/actions/bookActions";
import Stars from "../Stars/Stars";
import { useQuery} from 'react-query'

const AllBooks = () => {
  const [bookpagi, setBookpagi] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  // const [size, setSize] = useState(10);
  const [loading,setLoading] = useState(false)
  const [posts, setPosts] = useState([]); 

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setpostPerPage] = useState(10);

   

 useEffect(() => {
  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get('https://book-shelf-webapp.herokuapp.com/all-books');
    setPosts(res.data);
    setLoading(false);

  };

  fetchPosts();
}, []);



 
   // Get current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

   // Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);
 if(loading){
   return <Loading/>
 }
 const pageNumbers = [];
 for (let i = 1; i <= Math.ceil(posts?.length / postsPerPage); i++) {
  pageNumbers.push(i);
}
  return (
    <div
      style={{ background: "#FBF6F6" }}
      className=" max-w-[1440px] p-6 w-full mx-auto "
    >
      <div className="md:flex gap-6 items-start ">
        <div className=" p-6 border flex-1 mb-4">
          <div className="single_filterBox mb-5">
            <h3 className="text-xl font-semibold capitalize mb-5">
              categories (0)
            </h3>
            <ul>
              <li>
                <a
                  className="text-base capitalize py-2 block capitalize"
                  href="#"
                >
                  category name
                </a>
              </li>
              <li>
                <a
                  className="text-base capitalize py-2 block capitalize"
                  href="#"
                >
                  category name
                </a>
              </li>
              <li>
                <a
                  className="text-base capitalize py-2 block capitalize"
                  href="#"
                >
                  category name
                </a>
              </li>
              <li>
                <a
                  className="text-base capitalize py-2 block capitalize"
                  href="#"
                >
                  category name
                </a>
              </li>
            </ul>
          </div>
          <div className="single_filterBox mb-5">
            <h3 className="text-xl font-semibold mb-5">Author (0)</h3>
            <ul>
              <li>
                <a
                  className="text-base capitalize py-2 block capitalize"
                  href="#"
                >
                  Author name
                </a>
              </li>
              <li>
                <a
                  className="text-base capitalize py-2 block capitalize"
                  href="#"
                >
                  Author name
                </a>
              </li>
              <li>
                <a
                  className="text-base capitalize py-2 block capitalize"
                  href="#"
                >
                  Author name
                </a>
              </li>
              <li>
                <a
                  className="text-base capitalize py-2 block capitalize"
                  href="#"
                >
                  Author name
                </a>
              </li>
            </ul>
          </div>
          <div className="single_filterBox">
            <h3 className="text-xl font-semibold mb-5">Price filter</h3>
            <ul>
              <li>
                <a
                  className="text-base capitalize py-2 block capitalize"
                  href="#"
                >
                  Heigh to Low
                </a>
              </li>
              <li>
                <a
                  className="text-base capitalize py-2 block capitalize"
                  href="#"
                >
                  Low to Heigh
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14 mb-10 grow">
          {currentPosts?.map((book) => (
            <Link to={`/selectedBook/${book?._id}`}>
              <div className="book-shadow rounded-lg h-[460px] pt-6 flex justify-center bg-white">
                <div className="for-hover relative">
                  {/* relative */}
                  <img
                    src={book?.book_cover_photo_url}
                    className="h-64 w-44 image-full"
                    alt="Books image"
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
      {pageNumbers.map(number => (

<button onClick={() => paginate(number)} className='page-link btn btn-primary mx-2'>
  {number}
</button>
        ))}
      <select class="select select-primary " onChange={(event) => setpostPerPage(event.target.value)}>
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

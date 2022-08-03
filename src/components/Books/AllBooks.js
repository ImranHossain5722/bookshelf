import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaEye, FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartButton from '../CartButton/CartButton'
import { allBooks } from '../Redux/actions/bookActions'
import Stars from '../Stars/Stars'


const AllBooks = () => {

  const [books , setBooks] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [size, setSize] = useState(10);
  

    // pagination count
  useEffect(() => {
    fetch(`https://book-shelf-webapp.herokuapp.com/books?page=${pageCount}&limit=${size}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.books)
        setPageCount(data.pages);
        setBooks(data.books)
      });
      console.log(size)
  }, [pageCount, size]);
    

  return (
    <div style={{background:"#FBF6F6"}} className=' max-w-[1440px] p-6 '>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14 mb-10">
            {
                books.map(book =>  <Link to={`/selectedBook/${book._id}`}>
                  <div className="book-shadow rounded-lg h-[460px] pt-6 flex justify-center bg-white">
                <div className="for-hover relative">
                    {/* relative */}
                    <img src={book.book_cover_photo_url} className="h-64 w-44 image-full" alt="Books image" />
                    {/* absolute hover effect */}
                    <div className="bg-[#00124ea4] h-64 w-44 flex items-center justify-center absolute top-0 hover-button hidden">
                        <button className="text-3xl text-white hover:text-primary duration-500">
                            <FaEye />
                        </button>
                        <button className="mx-5 text-3xl text-white hover:text-primary duration-500">
                            <FaHeart />
                        </button>
                          <CartButton _id={book._id}/>
                    </div>
                    <div className="w-44 mt-2">
                        <h3>{book.book_title}</h3>
                        <p className="mt-2">{book.author}</p>
                        <h2 className="text-xl font-semibold text-primary mt-2 mb-1">${book.book_price}</h2>
                        <Stars />
                    </div>
                </div>
            </div>
                </Link>
                )
     }
              
            
        </div>

          {/* pagenation */}
          <div className="flex justify-center p-3 ">
            {[...Array(size).keys()].map((number) => (
              <button
                className="p-2 mr-2 border-2 border-secondary bg-primary text-white hover:bg-secondary active:bg-secondary"
                onClick={() => setPageCount(number)}
              >
                {number + 1}
              </button>
            ))}
            <select onChange={(event) => setSize(event.target.value)}>
              <option value="5">5</option>
              <option value="10" selected>
                10
              </option>
              <option value="15">15</option>
            </select>
          </div>
    </div>
  )
}

export default AllBooks



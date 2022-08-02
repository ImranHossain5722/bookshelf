import axios from 'axios'
import React, { useEffect } from 'react'
import { FaEye, FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartButton from '../CartButton/CartButton'
import { allBooks } from '../Redux/actions/bookActions'
import Stars from '../Stars/Stars'

const AllBooks = () => {
    const books = useSelector((state) => state.allBooks.allBooks)
    const dispatch = useDispatch()
    useEffect(() => {
  axios.get('https://book-shelf-webapp.herokuapp.com/all-books').then(data => dispatch(allBooks(data.data))) 
 
    }, [])
    

  return (
    <div className='my-6'>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14">
            {
                books.map(book =>  <Link to={`/selectedBook/${book._id}`}>
                  <div className="book-shadow rounded-lg h-[460px] pt-6 flex justify-center">
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
    </div>
  )
}

export default AllBooks
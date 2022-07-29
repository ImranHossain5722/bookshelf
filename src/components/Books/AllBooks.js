import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allBooks } from '../Redux/actions/bookActions'
import Stars from '../Stars/Stars'

const AllBooks = () => {
    const books = useSelector((state) => state.allBooks.allBooks)
    const dispatch = useDispatch()
    useEffect(() => {
  axios.get('data.json').then(data => dispatch(allBooks(data.data))) 
 
    }, [books])
    

  return (
    <div className='my-6'>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14">
            {
                books.map(book => <div className="on-book relative">
                       <div className="book-shadow rounded-lg h-[460px] pt-6 flex justify-center">
                    <div>
                        <img src={book.image} className="h-64 w-44 image-full" alt="" />
                        <div className="w-44 mt-2">
                            <h3>{book.title}</h3>
                            <p className="mt-2">{book.author}</p>
                            <h2 className="text-xl font-semibold text-primary mt-2 mb-1">${book.price}</h2>
                            <Stars />
                        </div>
                        </div> 
                    </div>
                </div> )
            }
        </div>
    </div>
  )
}

export default AllBooks
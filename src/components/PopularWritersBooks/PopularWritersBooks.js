import React, { useEffect, useState } from 'react';
//icons
import { FaHeart, FaEye, FaShoppingCart } from 'react-icons/fa';
import Button from '../Button/Button';
import CartButton from '../CartButton/CartButton';
import Stars from '../Stars/Stars';

const PopularWritersBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14'>
                {
                    books?.splice(0, 8).map(book =>
                        <div className="on-book relative" key={book._id}>
                            <div className="book-shadow rounded-lg h-[460px] pt-6 flex justify-center">
                                <div className="for-hover relative">
                                    {/* relative */}
                                    <img src={book.image} className="h-64 w-44 image-full" alt="" />
                                    {/* absolute hover effect */}
                                    <div className="bg-[#00124ea4] h-64 w-44 flex items-center justify-center absolute top-0 hover-button hidden">
                                        <button className="text-3xl text-white hover:text-primary duration-500">
                                            <FaEye />
                                        </button>
                                        <button className="mx-5 text-3xl text-white hover:text-primary duration-500">
                                            <FaHeart />
                                        </button>
                                        <CartButton _id={book._id} />
                                    </div>
                                    <div className="w-44 mt-2">
                                        <h3>{book.title}</h3>
                                        <p className="mt-2">{book.author}</p>
                                        <h2 className="text-xl font-semibold text-primary mt-2 mb-1">${book.price}</h2>
                                        <Stars />
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <div className="flex justify-center my-12">
                <Button>See More</Button>
            </div>
        </>
    );
};

export default PopularWritersBooks;
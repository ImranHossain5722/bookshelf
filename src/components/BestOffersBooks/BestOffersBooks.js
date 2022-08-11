import React, { useEffect, useState } from 'react';
//icons
import { FaHeart, FaEye, FaShoppingCart, FaRegEye } from 'react-icons/fa';
import AddCartButton from '../AddCartButton/AddCartButton';
import Button from '../Button/Button';
import CartButton from '../CartButton/CartButton';
import Stars from '../Stars/Stars';
import Wishlistbutton from '../wishlistButton/Wishlistbutton';

const BestOffersBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://book-shelf-webapp.herokuapp.com/all-books')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14'>
                {
                    books?.splice(0, 8).map(book =>
                        <div className="product_widget26 mb_30">
                        <div className="product_thumb_upper position-relative">
                          <span className="offer_badge">-0%</span>
                          <a href="product_details.php" className="thumb text-center">
                            <img src={book.book_cover_photo_url} alt="" />
                          </a>
                          <div className="product_action">
                          <Wishlistbutton _id={book._id} />
                            <a href="#" className="a">
                              <FaRegEye />
                            </a>
                          <CartButton _id={book._id}  />
                          </div>
                        </div>
                        <div className="product__meta">
                          <a href="product_details">
                            <h4 >{book.book_title}</h4>
                          </a>
                            <p className="text-[16px] text-[#00124e] font-semibold">{book?.book_author?.author_name}</p>
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
                        <AddCartButton _id={book._id}/>
                        </div>
                      </div>
                      )
                }
            </div>
            <div className="flex justify-center my-12">
                <Button>See More</Button>
            </div>
        </>
    );
};

export default BestOffersBooks;
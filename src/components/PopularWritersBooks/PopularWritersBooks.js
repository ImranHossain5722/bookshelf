import React, { useEffect, useState } from 'react';
//icons
import { FaHeart, FaEye, FaShoppingCart, FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AddCartButton from '../AddCartButton/AddCartButton';
import Button from '../Button/Button';
import CartButton from '../CartButton/CartButton';
import Loading from '../Loading/Loading';
import QuickViewButton from '../QuickViewButton/QuickViewButton';
import Stars from '../Stars/Stars';
import Wishlistbutton from '../wishlistButton/Wishlistbutton';

const PopularWritersBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      setLoading(true);
        fetch('https://book-shelf-webapp.herokuapp.com/all-books')
            .then(res => res.json())
            .then(data => setBooks(data));
            setLoading(false)
    }, []);
    if(loading){
      return <Loading/>
    }
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
                    <QuickViewButton _id={book._id} />
                    <CartButton _id={book._id}  />
                    </div>
                  </div>
                  <div className="product__meta">
                    <Link to={`/selectedBook/${book?._id}`}>
                      <h4 >{book.book_title}</h4>
                    </Link>
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
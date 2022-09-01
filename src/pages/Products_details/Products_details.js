import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Product_details.css";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { BiSad } from "react-icons/bi";
import { toast } from "react-toastify";
import RecentlyViewed from "../../components/RecentlyViewed/RecentlyViewed";
import Loading from "../../components/Loading/Loading";
const Products_details = () => {
  const { _id } = useParams();
  const [book, setbook] = useState({});
  const [quantity, setqnt] = useState(1);

  const {
    book_cover_photo_url,
    book_title,
    book_price,
    book_country,
    book_description,
    book_pages,
    book_language,
    discount,
  } = book;

  useEffect(() => {
    setbook([])
    axios
      .get(`https://book-shelf-webapp.herokuapp.com/get-book?id=${_id}`)
      .then((data) => setbook(data.data[0]));
  }, []);

  const user = useSelector((state) => state?.newUser?.user);
  const userId = user?._id;
  // adding to cart

  const AddCart = (id) => {
    const cartData = {
      user_id: userId,
      cart_data: {
        book: id,
        qnt: quantity,
      },
    };
    if (userId) {
      axios
        .post("https://book-shelf-webapp.herokuapp.com/add-to-cart", cartData)
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
          "https://book-shelf-webapp.herokuapp.com/add-to-wishlist",
          cardData
        )
        .then((data) => toast.success("added to wishlist"));
    } else {
      console.log(" the user id is not found");
    }
  };

  const increaseQnt = () => {
    setqnt(quantity + 1);
  };
  const decreaseQnt = () => {
    if (quantity !== 1) {
      setqnt(quantity - 1);
    }
  };


  let totalReview = book?.book_reviews?.length;

  let fiveStarCount = 0;
  let fourStarCount = 0;
  let threeStarCount = 0;
  let twoStarCount = 0;
  let oneStarCount = 0;
  console.log(book)
  book?.book_reviews?.map(review => {
    const rating = review?.review_id?.ratings;

    if (rating === 5) {
      fiveStarCount = fiveStarCount + 1;
    }
    if (rating === 4) {
      fourStarCount = fourStarCount + 1;
    }
    if (rating === 3) {
      threeStarCount = threeStarCount + 1;
    }
    if (rating === 2) {
      twoStarCount = twoStarCount + 1;
    }
    if (rating === 1) {
      oneStarCount = oneStarCount + 1;
    }
  }

  )
  const calAverageRating = ((fiveStarCount * 5) + (fourStarCount * 4) + (threeStarCount * 3) + (twoStarCount * 2) + (oneStarCount * 1)) / totalReview;

  return (
    <>
      <div className="pt-[60px] md:pt-[80px] lg:pt-[120px]  pb-[60px] md:pb-[80px] lg:pb-[120px] ">
        <div className="container m-auto flex gap-6 justify-center">
          <div className="w-5/12">
            <div className="thumb w-full">
              <img className="w-full" src={book_cover_photo_url} alt="" />
            </div>
          </div>
          <div className="w-6/12">
            <div className="cart_summery ">
              {/* <div className="flex items-center gap-2 mb-3">
              <p className="text-[16px]">Availability : 1 in stock</p>
            </div> */}
              <h4 className="text-black text-[24px] capitalize font-semibold mb-3">
                {book_title}
              </h4>
             
              <div className="product_prise flex items-center gap-2">
                        <span className="line-through">
                          {book.discount > 0 &&
                            `$${book.discount + book.book_price}.00`}
                        </span>
                        <h3 className="text-black text-[18px] font-semibold mb-3">${book_price}.00</h3>

                      </div>

              <div className="flex items-center text-black mb-3">
                <p>({book?.book_reviews?.length} reviews)</p>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <p className="text-black text-[16px]">Quantity</p>
                <div className="flex">
                  <button
                    className="bg-[#f9f9fd] w-[40px] h-[40px] flex items-center justify-center rounded-none border-[#e1e2e6] border-solid border text-black"
                    onClick={increaseQnt}
                  >
                    +
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    className="input  w-[50px] h-[40px] max-w-xs rounded-none text-center border-[#e1e2e6] border-solid border-y-1 border-x-0 text-black"
                  />
                  <button
                    className="bg-[#f9f9fd] w-[40px] h-[40px] flex items-center justify-center rounded-none border-[#e1e2e6 border-solid border text-black"
                    onClick={decreaseQnt}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="flex items-center text-black mb-3 gap-2">
                <button
                  className="icon-btn add-btn"
                  onClick={() => AddCart(_id)}
                >
                  <FaCartPlus className="add-icon  text-primary text-2xl" />
                  <div className="btn-txt">Add to cart</div>
                </button>

                <button
                  className="icon-btn add-btn"
                  onClick={() => AddWishlist(_id)}
                >
                  <FaHeart className="add-icon text-primary text-2xl" />
                  <div className="btn-txt">Add to wishlist</div>
                </button>
              </div>
              <h5 className="text-black text-[30px] font-medium mt-8">
                Guaranteed Safe Checkout
              </h5>
              <div className=" single_description_wrap border-b-[1px] border-[#e1e2e6] pb-4 mb-4">
                <div className="description_box">
                  <p className="Information_text text-black mb-3">
                    <span className=" font-semibold"> Language: </span> {book_language}
                  </p>
                  <p className="Information_text text-black mb-3">
                    {" "}
                    <span className=" font-semibold">Pages: </span> {book_pages}
                  </p>
                  <p className="Information_text text-black mb-3">
                    {" "}
                    <span className=" font-semibold">Country: </span> {book_country}
                  </p>
                  <p className="Information_text text-black mb-3">
                    {" "}
                    <span className=" font-semibold">Tags: </span> Vintage, Awesome, Summer, Beachwear
                  </p>
                </div>
              </div>
              <div className="single_description_wrap border-b-[1px] border-[#e1e2e6] pb-4 mb-4">
                <div className="details_title">
                  <h4 className="text-black text-[18px]" className=" font-semibold">Description</h4>
                </div>
                <div className="description_box">
                  <p className="mb-4">{book_description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Rating and Review Section  */}
      {book ? <div className="pt-[60px] md:pt-[80px] lg:pt-[120px]  pb-[60px] md:pb-[80px] lg:pb-[120px] bg-white mb-[60px]">
        <div className="container m-auto  gap-6  ">
          <h1 className="text-[18px] lg:text-[25px] font-bold text-[#00124E] section_title">
            Ratings &amp; Reviews of {book_title}
          </h1>
          {/* rating section  */}
          <div>

            <div className="mt-8 py-6 flex">
              <div>
                <div className="text-3xl">
                  <span className="font-bold">{book?.average_rating ? book?.average_rating : (calAverageRating ? calAverageRating : 0)}</span>
                  <span>/</span>
                  <span>5</span>
                </div>
                <div className="stars text-3xl mt-2">
                  <i className={(book?.average_rating ? book?.average_rating : calAverageRating) >= 1 ? "fas fa-star text-[#ffc107]" : "fas fa-star"}></i>
                  <i className={(book?.average_rating ? book?.average_rating : calAverageRating) >= 2 ? "fas fa-star text-[#ffc107]" : "fas fa-star"}></i>
                  <i className={(book?.average_rating ? book?.average_rating : calAverageRating) >= 3 ? "fas fa-star text-[#ffc107]" : "fas fa-star"}></i>
                  <i className={(book?.average_rating ? book?.average_rating : calAverageRating) >= 4 ? "fas fa-star text-[#ffc107]" : "fas fa-star"}></i>
                  <i className={(book?.average_rating ? book?.average_rating : calAverageRating) === 5 ? "fas fa-star text-[#ffc107]" : "fas fa-star"}></i>
                  <div>
                    <span className="text-sm font-medium">
                      ({book?.book_reviews?.length}) Ratings
                    </span>
                  </div>
                </div>
              </div>
              <div className="ml-8">
                <div className="flex">
                  <div className="stars text-sm mt-1">
                    <i className="fas fa-star text-[#ffc107]"></i>
                    <i className="fas fa-star text-[#ffc107]"></i>
                    <i className="fas fa-star text-[#ffc107]"></i>
                    <i className="fas fa-star text-[#ffc107]"></i>
                    <i className="fas fa-star text-[#ffc107]"></i>
                  </div>
                  <div className="ml-2">
                    <progress class="progress bg-gray-300 progress-warning w-56" value={fiveStarCount / totalReview * 100} max="100"></progress>
                    <span className="ml-2">{fiveStarCount}</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="stars text-sm mt-1">
                    <i className="fas fa-star text-[#ffc107]"></i>
                    <i className="fas fa-star text-[#ffc107]"></i>
                    <i className="fas fa-star text-[#ffc107]"></i>
                    <i className="fas fa-star text-[#ffc107]"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="ml-2">
                    <progress class="progress bg-gray-300 progress-warning w-56" value={fourStarCount / totalReview * 100} max="100"></progress>
                    <span className="ml-2">{fourStarCount}</span>
                  </div>
                </div>

                <div className="flex">
                  <div className="stars text-sm mt-1">
                    <i className="fas fa-star text-[#ffc107]"></i>
                    <i className="fas fa-star text-[#ffc107]"></i>
                    <i className="fas fa-star text-[#ffc107]"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="ml-2">
                    <progress class="progress bg-gray-300 progress-warning w-56" value={threeStarCount / totalReview * 100} max="100"></progress>
                    <span className="ml-2">{threeStarCount}</span>
                  </div>
                </div>

                <div className="flex">
                  <div className="stars text-sm mt-1">
                    <i className="fas fa-star text-[#ffc107]"></i>
                    <i className="fas fa-star text-[#ffc107]"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="ml-2">
                    <progress class="progress bg-gray-300 progress-warning w-56" value={twoStarCount / totalReview * 100} max="100"></progress>
                    <span className="ml-2">{twoStarCount}</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="stars text-sm mt-1">
                    <i className="fas fa-star text-[#ffc107]"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="ml-2">
                    <progress class="progress bg-gray-300 progress-warning w-56" value={oneStarCount / totalReview * 100} max="100"></progress>
                    <span className="ml-2">{oneStarCount}</span>
                  </div>
                </div>


              </div>
            </div>
          </div>
          {/* Review Section  */}
          <div >
            <h3 className="border-y py-3 my-4 font-bold text-2xl">Book Reviews </h3>
            {book?.book_reviews?.length ? <div>
              {book?.book_reviews?.map(review => <div className="border-b py-4" key={review?._id}>
                <div className="flex justify-between">
                  <div className="stars mx-1 ">
                    <i className={review?.review_id?.ratings >= 1 ? "fas fa-star text-[#ffc107]" : "fas fa-star"}></i>
                    <i className={review?.review_id?.ratings >= 2 ? "fas fa-star text-[#ffc107]" : "fas fa-star"}></i>
                    <i className={review?.review_id?.ratings >= 3 ? "fas fa-star text-[#ffc107]" : "fas fa-star"}></i>
                    <i className={review?.review_id?.ratings >= 4 ? "fas fa-star text-[#ffc107]" : "fas fa-star"}></i>
                    <i className={review?.review_id?.ratings === 5 ? "fas fa-star text-[#ffc107]" : "fas fa-star"}></i>
                  </div>
                  <div className="">
                    {
                      review?.reviewedAt?.slice(0, 10)
                    }
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  by {review?.review_id?.user_id?.user_name}
                </div>
                <div className="text-black">
                  {review?.review_id?.review}
                </div>
              </div>
              )}
            </div> :
              <div className="text-center py-6">
                <BiSad className="mx-auto text-3xl" />
                <p>This product has no reviews. <br /> Let others know what you think and be the first to write a review.</p>
              </div>

            }
          </div>

        </div>
      </div> : <Loading></Loading>}
      <RecentlyViewed />
    </>
  );
};

export default Products_details;

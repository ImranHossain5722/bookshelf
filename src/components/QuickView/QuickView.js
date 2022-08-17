import React from "react";
import { useSelector } from "react-redux";
import Stars from "../Stars/Stars";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "../Loading/Loading";

const QuickView = () => {
  const selecItem = useSelector((state) => state.quickView.quickView[0]);
  const user = useSelector((state) => state?.newUser?.user);
  const userId = user?._id;
  const AddCart = (id) => {
    const cartData = {
      user_id: userId,
      cart_data: {
        book: id,
        qnt: 2,
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

  const AddWishlist = async (id) => {
    const cartData = {
      user_id: userId,
      wishlist_data: {
        book: id,
      },
    };
    if (userId) {
      await axios
        .post(
          "https://book-shelf-webapp.herokuapp.com/add-to-wishlist",
          cartData
        )
        .then((data) => toast.success("Added to wishlist"));
    } else {
      console.log(" the user id is not found");
    }
  };

  if (!selecItem) {
    return <Loading />;
  }

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden quickView_wrapper">
        <div className="quickView_wrapper_inner" bis_skin_checked="1">
          <div className="product_quickViewThumb">
            <img
              alt="ecommerce"
              className="object-cover object-center rounded "
              src={selecItem?.book_cover_photo_url}
            />
          </div>
          <div className="product_quickView_content" bis_skin_checked="1">
            <h1 className="text-gray-900 text-3xl mb-2 title-font font-medium mb-1">
              {selecItem?.book_title}
            </h1>
            <h3 className="title-font font-medium text-2xl text-gray-900">
              ${selecItem?.book_price}.00
            </h3>
            <Stars />
            <p className="leading-relaxed mt-4 mb-5">
              {selecItem?.book_description}
            </p>

            <div
              className="flex items-center gap-2 flex-wrap justify-start"
              bis_skin_checked="1"
            >
              <button
                className="flex  text-white bg-green-500 border-0 p-2 px-3 focus:outline-none hover:bg-green-600 rounded"
                onClick={() => AddCart(selecItem._id)}
              >
                Add to Cart
              </button>
              <button
                className="flex  text-white bg-green-500 border-0 p-2 px-3 focus:outline-none hover:bg-green-600 rounded"
                onClick={() => AddWishlist(selecItem._id)}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuickView;

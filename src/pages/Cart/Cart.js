import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartDeleteButton from "../../components/CartDeleteButton/CartDeleteButton";
import {
  cartBooks,
  cartdata,
} from "../../components/Redux/actions/bookActions";
import { toast } from "react-toastify";
const Cart = () => {
  const books = useSelector((state) => state?.cartBooks?.cartBooks);
  const user = useSelector((state) => state?.newUser?.user);
  const dispatch = useDispatch();
  let subtotal;
  const userId = user?._id;
  //  getting subtotal value
  const sub = books?.map((book) => book?.book?.book_price * book?.qnt);
  subtotal = sub.reduce((a, b) => a + b, 0);
  const carts = books?.map(function (book) {
    return {
      book_id: book?.book?._id,
      qnt: book?.qnt,
    };
  });

  const checkout = async (id) => {
    const cart = {
      user_id: id,
      ordered_items: carts,
      ordered_price_amount: subtotal,
      payment_info: {
        payment_type: "cash_on",
      },
    };

    await axios
      .post("https://bookshelf-server-s8lf.onrender.com/place-order", cart)
      .then((data) => dispatch(cartdata(data.data)));
    await axios.delete(
      `https://bookshelf-server-s8lf.onrender.com/delete-cart?id=${userId}`
    );
  };

  const increaseQnt = (_id, qnt) => {
    if (_id) {
      axios.patch(
        `https://bookshelf-server-s8lf.onrender.com/update-cart-quantity?cid=${_id}&qnt=${
          qnt + 1
        }`
      );
    }
  };
  const decreaseQnt = (_id, qnt) => {
    if (_id && qnt !== 1) {
      axios.patch(
        `https://bookshelf-server-s8lf.onrender.com/update-cart-quantity?cid=${_id}&qnt=${
          qnt - 1
        }`
      );
    } else if (qnt === 1) {
      toast.error("Quantity can't be decreaced below 1");
    }
  };

  return (
    <div className="pt-[60px] md:pt-[80px]  pb-[60px] md:pb-[80px] lg:pb-[120px]  ">
      <p className="text-5xl text-center mb-5 flex justify-center">
        My Cart{" "}
        <span>
          <MdShoppingCart className="text-5xl text-primary " />
        </span>
      </p>
      <div className="container m-auto ">
        <div className="w-full">
          <div className="overflow-auto mt-4  max-h-[460px]">
            <table className="table w-full ">
              <thead>
                <tr>
                  <th className="rounded-none">products</th>
                  <th>name</th>
                  <th>price</th>
                  <th>quentity</th>
                  <th>subtotal</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody className="">
                {books?.map((book) => (
                  <tr>
                    <td className="border-[#e1e2e6]">
                      <div className="product gap-2">
                        <div className="avatar">
                          <div className="w-20 rounded">
                            <img src={book.book?.book_cover_photo_url} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className=" ">
                        <h3 className="text-[18px] capitalize text-[#00124E] font-semibold">
                          {book.book?.book_title}
                        </h3>
                      </div>
                    </td>
                    <td className="text-[16px] border-[#e1e2e6] text-black">
                      ${book.book?.book_price}.00
                    </td>
                    <td className="border-[#e1e2e6]">
                      <div className="flex">
                        <button
                          className="bg-[#f9f9fd] w-[40px] h-[40px] flex items-center justify-center rounded-none border-[#e1e2e6] border-solid border text-black"
                          onClick={() => increaseQnt(book._id, book?.qnt)}
                        >
                          +
                        </button>
                        <input
                          type="text"
                          value={book?.qnt}
                          className="input  w-[50px] h-[40px] max-w-xs rounded-none text-center border-[#e1e2e6] border-solid border-y-1 border-x-0 text-black"
                        />
                        <button
                          className="bg-[#f9f9fd] w-[40px] h-[40px] flex items-center justify-center rounded-none border-[#e1e2e6 border-solid border text-black"
                          onClick={() => decreaseQnt(book._id, book?.qnt)}
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td className="text-[16px] text-black border-[#e1e2e6]">
                      ${book.book?.book_price * book?.qnt}.00
                    </td>
                    <td className="border-[#e1e2e6]">
                      <CartDeleteButton _id={book.book?._id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="gap-2 flex justify-end">
            <NavLink to="/">
              <button className="btn btn-primary text-white">
                Continue shoping
              </button>
            </NavLink>
            <NavLink to="/checkout">
              <button
                className="btn btn-primary text-white "
                onClick={() => checkout(user?._id)}
              >
                Prossed to checkout
              </button>
            </NavLink>
          </div>
        </div>
        <div className="w-4/12 ml-auto mt-4">
          <div className="cart_summery  px-8">
            <h4 className="text-black text-[24px] capitalize font-medium mb-4">
              Order Summary
            </h4>
            <div className="">
              <div className="flex justify-between mb-3">
                <h5 className="text-black text-[18px] font-medium">Subtotal</h5>
                <p>${subtotal}.00</p>
              </div>
              <div className="flex justify-between mb-3">
                <h5 className="text-black text-[18px] font-medium">
                  Shiping charge
                </h5>
                <p>+ 00.00</p>
              </div>
              <div className="flex justify-between mb-3">
                <h5 className="text-black text-[18px] font-medium">Discount</h5>
                <p>- 00.00</p>
              </div>
              <div className="flex justify-between border-t-[1px] border-[#e1e2e6] pt-2 mt-3 items-center">
                <h5 className="text-black text-[18px] font-medium">
                  Total (Incl. VAT)
                </h5>
                <p> ${subtotal}.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

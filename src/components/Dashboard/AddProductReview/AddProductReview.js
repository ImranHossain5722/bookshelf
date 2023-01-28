import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading/Loading";
import { toast } from "react-toastify";

const AddProductReview = () => {
  const user = useSelector((state) => state?.newUser?.user);

  const [rating, setRating] = useState(0);

  const { bookid } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { isLoading, data: book } = useQuery(["getBookDataReview"], () =>
    fetch(
      `https://bookshelf-server-s8lf.onrender.com/get-book?id=${bookid}`
    ).then((res) => res.json())
  );

  const rateNumber = (rate) => {
    setRating(rate);
  };

  const navigate = useNavigate();
  const onSubmit = (data) => {
    const reviewData = {
      user_id: user._id,
      book_id: bookid,
      review: data.review,
      ratings: rating,
    };
    axios
      .post(
        "https://bookshelf-server-s8lf.onrender.com/add-book-review",
        reviewData
      )
      .then((res) => toast.success("Successfully Added Your Review"));

    navigate("/dashboard/addproductreviews");
  };

  return (
    <div>
      <div>
        <h2 className="text-center font-semibold uppercase text-secondary text-[40px]">
          Product Review{" "}
        </h2>
        <div className=" flex items-center justify-center pb-10">
          <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
        </div>
      </div>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="">
          <div className="bg-white w-5/6  mx-auto rounded-md  py-8 flex justify-around">
            <div className="mt-20">
              <img
                src={book[0]?.book_cover_photo_url}
                className="h-[350px] w-300px"
                alt=""
              />
            </div>
            <div className="max-w-[499px] mt-14">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" justify-center gap-7">
                  <div>
                    <p className="text-2xl font-bold">{book[0]?.book_title}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="font-semibold pl-1">Add Rating</label>
                </div>
                <div class="rating rating-lg mt-2 mb-2">
                  <input type="radio" name="rating-9" class="rating-hidden" />
                  <input
                    onClick={() => rateNumber(1)}
                    type="radio"
                    name="rating-9"
                    class=" bg-green-500 mask mask-star-2"
                  />
                  <input
                    onClick={() => rateNumber(2)}
                    type="radio"
                    name="rating-9"
                    class=" bg-green-500 mask mask-star-2"
                  />
                  <input
                    onClick={() => rateNumber(3)}
                    type="radio"
                    name="rating-9"
                    class=" bg-green-500 mask mask-star-2"
                  />
                  <input
                    onClick={() => rateNumber(4)}
                    type="radio"
                    name="rating-9"
                    class=" bg-green-500 mask mask-star-2"
                  />
                  <input
                    onClick={() => rateNumber(5)}
                    type="radio"
                    name="rating-9"
                    class=" bg-green-500 mask mask-star-2"
                  />
                </div>
                <div className="mt-4">
                  <label className="font-semibold pl-1">Add a Review</label>
                  <textarea
                    name=""
                    id="textarea"
                    cols="30"
                    rows="40"
                    {...register("review", {
                      required: "required*",
                    })}
                    placeholder="Write the words of your heart"
                    className="input input-bordered bg-white w-full mt-2 h-[150px]"
                  />
                  {errors?.review && (
                    <p>
                      <small className="pl-1 text-red-600">
                        {errors?.review?.message}
                      </small>
                    </p>
                  )}
                </div>

                <input
                  type="submit"
                  value="Submit Review"
                  className="mt-4 btn btn-primary text-white"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProductReview;

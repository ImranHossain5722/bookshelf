import React, { useEffect, useState } from "react";
import leftSideProfileImage from "../../Assets/images/left-side_profile_imran_hossain.jpg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { allAuthors } from "../Redux/actions/bookActions";
import Loading from "../Loading/Loading";
import { RiWechatPayLine } from "react-icons/ri";
import { toast } from "react-toastify";
import "./LeftSideBar.css";

const LeftSideBar = () => {
  const authors = useSelector((state) => state.allAuthors.allAuthors);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const { data } = await axios.get(
        "https://book-shelf-webapp.herokuapp.com/all-authors"
      );
      dispatch(allAuthors(data));
      setLoading(false);
    };

    if (authors.length === 0) {
      fetchPosts();
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  const reqHndeler = () => {
    toast.success("Your request sent successfully.We are notified you");
  };

  return (
    <div className="mt-6">
      <h2 className="px-4 text-lg font-semibold">Meet Your Favorite Authors</h2>
      {/* profile */}
      {authors?.map((author) => (
        <div class="flex items-center   dark:bg-gray-700 hover:bg-slate-200 cursor-pointer dark:border-gray-600 dark:text-white px-4 mt-2">
          <img
            className=" w-9 h-9  text-[#056BE1] rounded-full"
            src={
              author?.photo_url
                ? author?.photo_url
                : "https://icon-library.com/images/profile-pic-icon/profile-pic-icon-8.jpg"
            }
            alt="author"
          />
          <div className="flex items-center " onClick={reqHndeler}>
            <p className="py-2 px-4 w-full text-black text-sm  dark:bg-gray-800 dark:border-gray-600">
              {author?.author_name}
            </p>
            <div className="tooltip tooltip-secondary text-white" data-tip="Meet your Authors">
              <button className="btn btn-primary text-white">Send Request</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSideBar;

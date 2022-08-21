import React, { useEffect, useState } from "react";
import imran from "../../Assets/images/story_image.jpg";
import { RiVideoAddFill } from "react-icons/ri";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { GoSmiley } from "react-icons/go";
// import CreateRoom from "../CreateRoom/CreateRoom";
import ShowPost from "../ShowPost/ShowPost";

const Post = () => {
  const [userPost, setUserPost] = useState([]);
  useEffect(() => {
    fetch("user.json")
      .then((response) => response.json())
      .then((data) => setUserPost(data[1].post_data));
      
  }, []);

  return (
    <div className="">
      <div className="post  bg-white rounded-xl shadow-md  mx-auto max-w-sm md:max-w-md lg:max-w-[100%]">
        <div className="flex justify-center items-center">
          <div
            className="w-14 h-14 bg-gray-300 m-4 rounded-full"
            style={{
              background: `url(${imran})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          {/* input field  */}
          <input
            className="flex justify-center  mr-3  bg-gray-200 px-7 mx-auto  w-5/6 h-12 rounded-xl focus:outline-none hover:bg-gray-100"
            placeholder="Whats on your mind"
          />
        </div>
        <div className="  h-[1px] bg-gray-200 "> </div>

        <div className="flex mx-auto max-w-sm md:max-w-md lg:max-w-lg py-3">
          <div className=" flex items-center lg:gap-2 px-3 ">
            <RiVideoAddFill className="text-[16px] lg:text-[20px] text-red-500" />
            <h2 className="text-gray-400 font-semibold text-[13px] lg:text-[16px]">
              Live Video{" "}
            </h2>
          </div>
          <div className=" flex items-center gap-2 ">
            <MdOutlinePhotoLibrary className=" text-[16px] lg:text-[20px] text-green-800 " />
            <h2 className="text-gray-400 font-semibold text-[13px] lg:text-[16px] pr-2">
              {" "}
              Photo/ Video{" "}
            </h2>
          </div>
          <div className=" flex items-center gap-2">
            <GoSmiley className="text-[16px] lg:text-[20px] text-yellow-400" />
            <h2 className="text-gray-400 font-semibold text-[13px] lg:text-[16px]">
              {" "}
              Feeling/activity{" "}
            </h2>
          </div>
        </div>
      </div>

      {/* <div className="mt-6">
        <CreateRoom />
      </div> */}

      <div className="mt-6">
        {userPost?.map(singlePost => (
          <ShowPost key={singlePost?.id} singlePost={singlePost} />
        ))}
      </div>
    </div>
  );
};

export default Post;

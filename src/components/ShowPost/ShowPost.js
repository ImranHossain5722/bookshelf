import React, { useEffect, useState } from "react";
import heart from "../../Assets/images/heart.svg";
import { BiComment } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import "./ShowPost.css";
import CommentModal from "./CommentModal";
import CommentView from "./CommentView";
import { useDispatch, useSelector } from "react-redux";
import { commentId } from "../Redux/actions/bookActions";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import axios from "axios";

const ShowPost = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const [open, setOpen] = useState(0);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state?.newUser?.user);

  useEffect(() => {
    fetch("https://bookshelf-server-s8lf.onrender.com/get-posts")
      .then((response) => response.json())
      .then((data) => setAllPosts(data));
  }, [allPosts, showModal]);

  const showCommentModal = (id) => {
    dispatch(commentId(id));
    setshowModal(!showModal);
  };

  // for showing comment
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const lovePost = (postLoves, id) => {
    const ids = postLoves.map((post) => post.user_email);

    const data = {
      user_id: currentUser._id,
      post_id: id,
    };

    if (ids.includes(currentUser.user_email)) {
      axios
        .patch("https://bookshelf-server-s8lf.onrender.com/downvote-post", data)
        .then((data) => console.log(data));
    } else {
      axios
        .patch("https://bookshelf-server-s8lf.onrender.com/upvote-post", data)
        .then((data) => console.log(data));
    }
  };

  return (
    <div>
      {allPosts?.map((post, i) => (
        <div
          className=" mx-auto max-w-sm md:max-w-md lg:max-w-[750px] bg-white shadow-md rounded-xl mb-4 "
          key={post._id}
        >
          <div className="flex justify-start items-center relative ">
            <div class="avatar">
              <div class="w-14 m-4  rounded-full">
                <img
                  src={
                    post?.user_id?.user_photo_url
                      ? post?.user_id?.user_photo_url
                      : `https://xsgames.co/randomusers/assets/avatars/male/${post?.user_id?.user_name.length}.jpg` ||
                        `https://api.multiavatar.com/${post?.user_id?.user_name}.png`
                  }
                />
              </div>
            </div>

            <p className="text-[18px] font-semibold mt- ml-1">
              {post?.user_id?.user_name}
            </p>
          </div>
          <div>
            {/* post details */}
            <p className="px-4">{post?.post_content}</p>
            <img className="pt-4 w-full " src={post?.post_image} alt="" />
          </div>
          {/* like comment share */}
          <div className="likeCommentShar mb- relative ">
            <div className="flex justify-between p-2 pb-4">
              {/* imoge */}
              <div className="flex ml-2">
                <img className="w-6 h-6" src={heart} alt="" />
                <p className="pl-1">{post?.up_votes?.length}</p>
              </div>
              {/* comment */}
            </div>
            <div className=" flex justify-between p-4 px-8 mx-8 pb-4 border-y-2">
              <div
                className="flex items-center gap-1 p-2 cursor-pointer "
                onClick={() => lovePost(post?.up_votes, post._id)}
              >
                <FcLike />
                <p>Love</p>
              </div>
              <div className="border-2"></div>
              <label
                for="comment_modal"
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => showCommentModal(post._id)}
              >
                <BiComment />
                <p>Comment</p>
              </label>
            </div>
            {/* for showing comments of other users */}
            <Accordion
              open={open === i + 1}
              icon={
                <div className="flex text-[18px]   relative  bottom-[115px] left-[320px]  cursor-pointer">
                  <p className="hover:underline flex">
                    {" "}
                    <span className="mr-2">
                      {" "}
                      {post?.post_comments.length}
                    </span>{" "}
                    Comments
                  </p>
                </div>
              }
              onClick={() => handleOpen(i + 1)}
            >
              <AccordionHeader className="h-[0px]"></AccordionHeader>

              {/* // input field */}
              <AccordionBody>
                {post?.post_comments?.map((comment) => (
                  <div className="flex items-center">
                    <div class="avatar">
                      <div class="w-14 m-4  rounded-full">
                        <img
                          src={
                            comment?.user_id?.user_photo_url
                              ? comment?.user_id?.user_photo_url
                              : `https://xsgames.co/randomusers/assets/avatars/male/${comment?.user_id?.user_name.length}.jpg` ||
                                `https://api.multiavatar.com/${comment?.user_id?.user_name}.png`
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold">
                        {" "}
                        {comment?.user_id?.user_name}{" "}
                      </p>
                      <p>{comment?.comment}</p>
                    </div>
                  </div>
                ))}
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      ))}
      {showModal && (
        <CommentModal modal={"comment_modal"}>
          <CommentView setshowModal={setshowModal} />
        </CommentModal>
      )}
    </div>
  );
};

export default ShowPost;

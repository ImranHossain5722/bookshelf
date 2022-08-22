import React, { useEffect, useState } from "react";
import imran from "../../Assets/images/story_image.jpg";
import { GiEarthAmerica } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import Pogramming from "../../Assets/images/post1.jpg";
import likeImage from "../../Assets/images/like.svg";
import heart from "../../Assets/images/heart.svg";
import care from "../../Assets/images/care.svg";
import sad from "../../Assets/images/sad.svg";
import haha from "../../Assets/images/haha.svg";
import angry from "../../Assets/images/angry.svg";
import wow from "../../Assets/images/wow.svg";
import { comment } from "postcss";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
const ShowPost = ({ singlePost }) => {
  //  console.log(singlePost)
  const [allPosts, setAllPosts] = useState([]);
  
  // const {
  //   post,
  //   post_image_url,
  //   user_photo_url,
  //   user_name,
  //   post_time,
  //   conments,
  // } = singlePost;

  // const [post_likes, setPost_likes] = useState(singlePost.post_likes);
  // const [islike, seIstLike] = useState(false);
  // const likeHandeler = () => {
  //   setPost_likes(islike ? post_likes - 1 : post_likes + 1);
  //   seIstLike(!islike);
  // };

  const [userComments, setUseComments] = useState([]);
  useEffect(() => {
    fetch("https://book-shelf-webapp.herokuapp.com/get-posts")
      .then((response) => response.json())
      .then((data) => setAllPosts(data));
      
  }, []);
  return (
    <div >
      {allPosts?.map(post => 
        <div className=" mx-auto max-w-sm md:max-w-md lg:max-w-[750px] bg-white shadow-md rounded-xl mb-4 " key={post._id}>
          <div  className="flex justify-start items-center relative ">
           
       <div class="avatar">
<div class="w-14 m-4  rounded-full">
 <img src={post?.user_photo_url} />
</div>
</div>
            <h3 className="text-[18px] font-semibold mt-3 ml-[-8px]">
              {post?.user_name}
            </h3>
            
          </div>
          <div>
            {/* post des */}
            <p className="px-4">{post.post_content}</p>
            <img className="pt-4 w-full " src={post?.post_image} alt="" />
          </div>
          {/* like comment share */}
          <div className="likeCommentShar mb- ">
            <div className="flex justify-between p-2 pb-4">
              {/* imoje */}
              <div className="flex gap-1">
                <img className="w-6 h-6" src={likeImage} alt="" />
                <img className="w-6 h-6" src={heart} alt="" />
                <p>{post?.post_likes}</p>
                {/* <img className="w-6 h-6" src={care} alt=""/>
                  <img className="w-6 h-6" src={angry} alt=""/>
                  <img className="w-6 h-6" src={sad} alt=""/>
                  <img className="w-6 h-6" src={haha} alt=""/>
                  <img className="w-6 h-6" src={wow} alt=""/> */}
              </div>
              {/* comment */}
              <div className="flex hover:underline cursor-pointer">
                <p> {post?.length} Comments</p>
              </div>
            </div>

            <div
              className=" flex justify-between p-4 px-8 mx-8 pb-4 border-y-2

"
            >
              <div
                className="flex items-center gap-1 hover:bg-gray-200 p-2 cursor-pointer"
        
              >
                <AiOutlineLike />
                <p>Like</p>
              </div>
              <div className="flex items-center gap-1">
                <BiComment />
                <p>Comment</p>
              </div>
              <div className="flex items-center gap-1">
                <RiShareForwardLine />
                <p>Share</p>
              </div>
            </div>
          </div>
        </div>
        )}
      
    </div>
  );
};

export default ShowPost;

// user comment and image
// {conments?.map((comment) => (
             
//   {/* <p>{comment?.comment}</p> */}
//   <img src={comment?.user_photo_url} alt="" />
//   {/* {console.log(comment?.user_photo_url)} */}

//   ))}
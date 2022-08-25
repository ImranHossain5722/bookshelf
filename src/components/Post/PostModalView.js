import React, {useRef} from 'react'
import { MdOutlinePhotoLibrary } from 'react-icons/md'
import {  useSelector } from "react-redux";
import axios from "axios";
import {toast} from 'react-toastify'



const PostModalView = () => {
  const image = useRef()
  const text = useRef()
  const currentUser = useSelector((state) => state?.newUser?.user) 
  // console.log("user",currentUser)
  const sentPost = () => {
    const imgbbKey = '5e72e46e329464d233a1bc1128fc1a76';
    const img = image?.current?.files[0];
    const formData = new FormData();
    formData.append('image', img);
    console.log(text.current.value)
    if (img) {
      fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(result => {
          if(result.data.url){
            const postData = {
              user_id : currentUser?._id, 
              post_content : text.current.value,
              post_image :  result.data.url
            }
            // sending post
            if(postData){
              console.log(postData);
              console.log(postData.user_id)
              axios.post("https://book-shelf-webapp.herokuapp.com/add-post",postData).then(data => {
                toast.success("Successfully uploaded your post")
                text.current.value = ""
                image.current.value = ""
            })
            }
          }})
    }
 
}

  return (
    <>
    <div className="">
   <textarea name="" id="" rows="10" placeholder="what's on your minds" className='w-full mt-8 focus:outline-none p-2' ref={text}></textarea>

   <input type="file" ref={image}  class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:outline-none
      file:text-sm file:font-semibold
      file:bg-primary file:text-white
      hover:file:bg-white hover:file:text-primary file:border-primary file:border-0
    "/>
 
   <button class="post_button  bg-primary focus:outline-none  " onClick={sentPost}>Sent Post
<div class="icon">
  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
</div>
</button>

    </div>
</>
  )
}

export default PostModalView
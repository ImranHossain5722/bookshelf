import React,{useRef} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import auth from '../../firebase.init'
import axios from "axios";
import {toast} from 'react-toastify'


const CommentView = ({setshowModal}) => {
    const [user] = useAuthState(auth)
    const userPhoto = user?.photoURL || `https://xsgames.co/randomusers/assets/avatars/male/${user?.displayName.length}.jpg`
    const currentUser = useSelector((state) => state?.newUser?.user) 
    const commentId = useSelector((state) => state?.commentId?.commentId)
    const comment = useRef()
    const sendComment = () => {
      const commentText = comment.current.value
      if(commentText){

        const data = {
          user_id : currentUser?._id,
          post_id : commentId,
          comment : comment.current.value
        }
        axios.patch("https://book-shelf-webapp.herokuapp.com/add-comment",data).then(data => toast.success("Successfully uploaded your post"))
      }
        setshowModal(false)
    }
  return (
    <div className="flex items-center relative">
    <div class="avatar">
<div class="w-10 m-4  rounded-full">
<img src={userPhoto} />
</div>
</div>
<div class="form__group field ">
<input required="" placeholder="Name" class="form__field  " type="input"  ref={comment}  />
<label class="form__label" for="name">Type your comment</label>
</div>
<button class=" post_button bg-primary focus:outline-none" onClick={sendComment}> sent
<div class="icon" >
<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
</div>
</button>
    </div>
  )
}

export default CommentView
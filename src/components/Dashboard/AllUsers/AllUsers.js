import React, { useEffect, useState } from 'react'
import { IoMdMail } from 'react-icons/io'
import { MdPhoneInTalk } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, sellBooks } from '../../Redux/actions/bookActions'
import axios from 'axios'
import { BsClipboardData } from 'react-icons/bs'
import Loading from '../../Loading/Loading'
const AllUsers = () => {
  const users = useSelector((state) => state.allUser.allUsers)
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(false)

 
console.log("users",users)
  useEffect(() => {
    
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get('https://book-shelf-webapp.herokuapp.com/all-users');
      dispatch(allUsers(res.data))
      setLoading(false);
  
    };
  if(users.length === 0 ){ 
    console.log("user is not present")
    fetchUsers();
  }
  }, [])

  if(loading){
    return <Loading/>
  }

  return (
    <div className="bg-base-100 my-8 p-3">
      <h2 className='text-center font-semibold uppercase text-secondary text-[40px]'>All Users </h2>
       <div className=" flex items-center justify-center pb-10">
       
            <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
          </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 g-4 gy-8'>


        {users?.map(user => <div className="mx-[12px] card user-shadow  w-[370px] h-[160px] p-7 font-semibold m-3 bg-white">
          <p className="pl-8 relative bottom-2 text-secondary text-lg font-semibold capitalize ">{user.user_name}</p>
          <div className='flex items-center'>
            <div className="avatar">
              <div className="w-16 rounded">
                <img src={user?.user_photo_url ? user?.user_photo_url : 'https://icon-library.com/images/profile-pic-icon/profile-pic-icon-8.jpg'} alt="user photo" />
              </div>
            </div>
            <div className=''>
              <p className='flex items-center break-all'><IoMdMail className='text-[#B7B7B7] text-[25px] mr-4' />{user.user_email}</p>
              <p className='flex items-center'><MdPhoneInTalk className='text-[#B7B7B7] text-[25px] mr-4' />{user.user_phone ? user.user_phone : "+8801688615454"}</p>

            </div>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default AllUsers
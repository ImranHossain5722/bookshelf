import React, { useEffect } from 'react'
import { IoMdMail } from 'react-icons/io'
import { MdPhoneInTalk } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, sellBooks } from '../../Redux/actions/bookActions'
import axios from 'axios'
import { BsClipboardData } from 'react-icons/bs'
const AllUsers = () => {
  const users = useSelector((state) =>  state) 
  const dispatch = useDispatch();
// useEffect(() => {
//   const {data} = axios.get('https://bookshelf-web.herokuapp.com/all-books')
//   console.log(data)
// }, [])

  return (
    <div className='grid grid-cols-3 g-4'>
      <p>users</p>
     {/* {users?.map(user =>  <div className="mx-[12px] card user-shadow  w-[370px] h-[160px] p-7 font-semibold">
        <p className="pl-8 relative bottom-2">mark don</p>
      <div className='flex items-center'>
      <div class="avatar">
  <div class="w-16 rounded">
    <img src="https://placeimg.com/192/192/people" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
        <div className='pl-4'>
        <p className='flex items-center'><IoMdMail className='text-[#B7B7B7] text-[20px] mr-3'  />markdon12@gmail.com</p>
        <p className='flex items-center'><MdPhoneInTalk className='text-[#B7B7B7] text-[20px] mr-3' />+8801688615454</p>
        
        </div>
      </div>
    </div>)} */}
    </div>
  )
}

export default AllUsers
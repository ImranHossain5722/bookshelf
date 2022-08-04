import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allPublishers } from '../../Redux/actions/bookActions';

const AllPublishers = () => {
  const users = useSelector((state) => state.allPublishers.allPublishers)
  const dispatch = useDispatch();

  const getUsers = () => {
    fetch('https://book-shelf-webapp.herokuapp.com/all-publishers').then(res => res.json()).then(data => dispatch(allPublishers(data)))
  }

  useEffect(() => {
    getUsers()
  }, [])
  return (
    <div className="bg-base-100 my-8 p-3">
       <h2 className='text-center font-semibold uppercase text-secondary text-[40px]'>All Publishers</h2>
       <div className=" flex items-center justify-center pb-10">
       
            <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
          </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 g-4 gy-8 '>

      {users?.map(user => <div className="mx-[12px] card user-shadow  w-[320px] h-[130px] p-7 font-semibold m-3 bg-white">
        <div className='flex items-center'>
          <div class="avatar">
            <div class="w-16 rounded">
              <img src={user?.photo_url ? user?.photo_url : 'https://icon-library.com/images/profile-pic-icon/profile-pic-icon-8.jpg'} alt="Publishers photo" />
            </div>
          </div>
          <div className='pl-4'>
            <p className='flex items-center'>{user.publisher_name}</p>
           

          </div>
        </div>
      </div>)}
    </div>
  </div>
  )
}

export default AllPublishers
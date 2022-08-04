import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allAuthors } from '../../Redux/actions/bookActions';

const AllAuthors = () => {
  const users = useSelector((state) => state.allAuthors.allAuthors)
  const dispatch = useDispatch();

  const getUsers = () => {
    fetch('https://book-shelf-webapp.herokuapp.com/all-authors').then(res => res.json()).then(data => dispatch(allAuthors(data)))
  }

  useEffect(() => {
    getUsers()
  }, [])
  return (
    <div className="bg-base-100 my-8 p-3">
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 g-4 gy-8'>

      {users?.map(user => <div className="mx-[12px] card user-shadow  w-[370px] h-[160px] p-7 font-semibold m-3">
        <p className="pl-8 relative bottom-2">{user.user_name}</p>
        <div className='flex items-center'>
          <div class="avatar">
            <div class="w-16 rounded">
              <img src={user?.photo_url ? user?.photo_url : 'https://icon-library.com/images/profile-pic-icon/profile-pic-icon-8.jpg'} alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
          <div className='pl-4'>
            <p className='flex items-center'>{user.author_name}</p>
           

          </div>
        </div>
      </div>)}
    </div>
  </div>
  )
}

export default AllAuthors
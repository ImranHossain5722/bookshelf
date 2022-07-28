import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init'

const Myprofile = () => {
  const [user] = useAuthState(auth);
  const [userRold, setUserRole] = useState('')
  const [allUsers, setAllUsers] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  // console.log(user);
  useEffect(() => {
    fetch('https://bookshelf-web.herokuapp.com/all-user')
      .then(res => res.json())
      .then(data => console.log(data));
  }, [])

  // get user role form database 
  const currentUserRole = user?.role;

  if (currentUserRole === 'author') {
    setUserRole('author');
  }
  if (currentUserRole === 'publisher') {
    setUserRole('publisher');
  }
  if (currentUserRole === 'user') {
    setUserRole('user');
  }
  if (currentUserRole === 'admin') {
    setUserRole('admin');
  }
  else {
    setUserRole('publisher');

  }

  // const onSubmit = data => {

  //   const updatedProfileData = {

  //   };
  //   if (user?.email) {
  //     fetch(``, {
  //       method: 'PUT',
  //       headers: {
  //         'content-type': 'application/json',
  //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
  //       },
  //       body: JSON.stringify(updatedProfileData)
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         toast.success(`Profile update Successfully`);
  //         // reset();
  //       })

  //   }


  // }

  return (
    <div>
      <div className='text-4xl text-center py-12 font-bold'>My Profile</div>
      <div className='flex w-3/6 mr-auto ml-20 '>
        <div className='flex-1 p-12 rounded-xl shadow-lg drop-shadow-lg' >
          <img className='block mx-auto' height={200} width={200} src={user?.photoURL ? user?.photoURL : 'https://icon-library.com/images/profile-pic-icon/profile-pic-icon-8.jpg '} alt="" />
          <h2 className='text-2xl font-bold my-4 text-center text-black'>{user?.displayName}</h2>
          <h3 className='font-bold text-lg'>Contact Informatin</h3>
          <div>
            <h4 className='font-bold'>Email Address</h4>
            <p>{user?.email}</p>
          </div>
          <div>
            <h4 className='font-bold'>Phone Number</h4>
            <p>{user?.phoneNumber ? user?.phoneNumber : 'Number not available'}</p>
          </div>
          <div>
            <h4 className='font-bold'>Birthday</h4>
            <p>{user?.birthday ? user?.birthday : 'Birthday Not available'}</p>
          </div>
        </div>
        <div className='border-2 border-black flex-1 p-12 ml-6'>
          {/* cards  */}
          <div >

          </div>
          {/* Information Update Form  */}
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Myprofile
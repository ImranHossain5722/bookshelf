import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { BsFillBagCheckFill, BsFillHeartFill, BsFillJournalBookmarkFill } from "react-icons/bs";
import { FaCommentDollar, FaDollarSign } from "react-icons/fa";

const Myprofile = () => {
  const [user] = useAuthState(auth);
  const [userRole, setUserRole] = useState('publisher')
  const [getUser, setGetUser] = useState([]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  console.log(getUser[0])
  useEffect(() => {
    const userEmail = {
      email: user?.email
    };
    fetch('https://book-shelf-webapp.herokuapp.com/get-user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userEmail)
    })
      .then((res) => res.json())
      .then(data => setGetUser(data)
      );
  }, [user?.email])

  // // get user role form database 
  useEffect(() => {
    const currentUserRole = getUser[0]?.user_role;

    if (currentUserRole === 'author') {
      setUserRole('author');
    }
    else if (currentUserRole === 'publisher') {
      setUserRole('publisher');
    }
    else if (currentUserRole === 'user') {
      setUserRole('user');
    }
    else if (currentUserRole === 'admin') {
      setUserRole('admin');
    }
  }, [getUser])


  const onSubmit = data => {

    const updatedProfileData = {
      user_name: data?.name ? data?.name : user?.user?.displayName,
      user_phone: data?.phone,
      user_address: data?.address,
      user_birthday: data?.date
    };
    console.log(updatedProfileData)
    if (user?.email) {
      axios.put('https://book-shelf-webapp.herokuapp.com/add-user', updatedProfileData).then(data => console.log(data))
      fetch(``, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updatedProfileData)
      })
        .then(res => res.json())
        .then(data => {
          toast.success(`Profile update Successfully`);
          // reset();
        })

    }


  }

  return (
    <div>
      <div className='text-4xl text-center py-12 font-bold'>My Profile</div>
      <div className='flex w-4/6 mr-auto ml-20 '>
        <div className='w-[600px] p-[78px] rounded-xl shadow-lg drop-shadow-lg text-black' >
          <img className='block mx-auto' height={200} width={200} src={user?.photoURL ? user?.photoURL : 'https://icon-library.com/images/profile-pic-icon/profile-pic-icon-8.jpg '} alt="" />
          <h2 className='text-[40px] font-bold mt-3 mb-1 text-center text-black'>{user?.displayName}</h2>
          <p className='text-center mb-3 text-[20px]'>{userRole}</p>
          <h3 className='font-bold text-[30px] mb-[19px]'>Contact Informatin</h3>
          <div>
            <h4 className='font-[600] text-[25px] py-[7px]'>Email Address</h4>
            <p className='font-[600] text-[16px] py-[7px]'>{user?.email}</p>
          </div>
          <div>
            <h4 className='font-[600] text-[25px] py-[7px]'>Phone Number </h4>
            <p className='font-[600] text-[16px] py-[7px]'>{getUser[0]?.user_phone}</p>
          </div>
          <div>
            <h4 className='font-[600] text-[25px] py-[7px]'>Address</h4>
            <p className='font-[600] text-[16px] py-[7px]'>{'Dhaka'}</p>
          </div>
          <div>
            <h4 className='font-[600] text-[25px] py-[7px]'>Birthday</h4>
            <p className='font-[600] text-[16px] py-[7px]'>{'26/03/1971'}</p>
          </div>
        </div>
        <div className='p-12 pt-0 ml-6'>
          {/* cards  */}
          {/* card raw container */}
          {userRole === 'user' && <div className='flex mt-[22px]'>
            <div className='flex w-[260px] border-[#27AE61] border-[1px] p-[29px] rounded-[15px] drop-shadow-md shadow-xl'>
              <div className='w-[170px]  text-[#00124E]'>
                <h2 className='text-[40px] font-[600]'>{103}</h2>
                <p className='text-[18px] font-[600]'>Brought</p>
              </div>
              <div className='flex align-items-center justify-center text-primary text-[70px] w-[90px]'><BsFillBagCheckFill /></div>
            </div>
            <div className=' ml-[24px] flex w-[260px] border-[#27AE61] border-[1px] p-[29px] rounded-[15px] shadow-xl'>
              <div className='w-[170px] text-[#00124E]'>
                <h2 className='text-[40px] font-[600]'>{1053}</h2>
                <p className='text-[18px] font-[600]'>Wish List</p>
              </div>
              <div className='flex align-items-center justify-center text-primary text-[70px] w-[90px]'><BsFillHeartFill /></div>
            </div>
          </div>}


          {/* card raw container */}
          {(userRole === 'publisher' || userRole === 'author') &&
            <div>
              <div className='flex mt-[22px]'>
                <div className='flex w-[260px] border-[#27AE61] border-[1px] p-[29px] rounded-[15px] drop-shadow-md shadow-xl'>
                  <div className='w-[170px]  text-[#00124E]'>
                    <h2 className='text-[40px] font-[600]'>{10}</h2>
                    <p className='text-[18px] font-[600]'>Total Books</p>
                  </div>
                  <div className=' flex align-items-center justify-center text-primary text-[70px] w-[90px]'><BsFillJournalBookmarkFill /></div>
                </div>
                <div className=' ml-[24px] flex w-[260px] border-[#27AE61] border-[1px] p-[29px] rounded-[15px] shadow-xl'>
                  <div className='w-[170px]  text-[#00124E]'>
                    <h2 className='text-[40px] font-[600]'>{50}</h2>
                    <p className='text-[18px] font-[600]'>Total Sell</p>
                  </div>
                  <div className='flex align-items-center justify-center text-primary text-[70px] w-[90px]'><FaCommentDollar /></div>
                </div>
              </div>

              {/* card raw container */}
              <div className='flex mt-[22px]'>
                <div className='flex w-[260px] border-[#27AE61] border-[1px] p-[29px] rounded-[15px] drop-shadow-md shadow-xl'>
                  <div className='w-[170px]  text-[#00124E]'>
                    <h2 className='text-[40px] font-[600]'>{100}</h2>
                    <p className='text-[18px] font-[600]'>This Month Earning</p>
                  </div>
                  <div className=' flex align-items-center justify-center text-primary text-[70px] w-[90px]'><FaDollarSign /></div>
                </div>
                <div className=' ml-[24px] flex w-[260px] border-[#27AE61] border-[1px] p-[29px] rounded-[15px] shadow-xl'>
                  <div className='w-[170px]  text-[#00124E]'>
                    <h2 className='text-[40px] font-[600]'>{500}</h2>
                    <p className='text-[18px] font-[600]'>Total Earning</p>
                  </div>
                  <div className='flex align-items-center justify-center text-primary text-[70px] w-[90px]'><FaDollarSign /></div>
                </div>
              </div>

              {/* card raw container */}
              <div className='flex mt-[22px]'>
                <div className='flex w-[260px] border-[#27AE61] border-[1px] p-[29px] rounded-[15px] drop-shadow-md shadow-xl'>
                  <div className='w-[170px]  text-[#00124E]'>
                    <h2 className='text-[40px] font-[600]'>{100}</h2>
                    <p className='text-[18px] font-[600]'>Balance</p>
                  </div>
                  <div className=' flex align-items-center justify-center text-primary text-[70px] w-[90px]'><FaDollarSign /></div>
                </div>
                <div className=' ml-[24px] flex w-[260px] border-[#27AE61] border-[1px] p-[29px] rounded-[15px] shadow-xl'>
                  <div className='w-[170px]  text-[#00124E]'>
                    <h2 className='text-[40px] font-[600]'>{500}</h2>
                    <p className='text-[18px] font-[600]'>Withdrawn</p>
                  </div>
                  <div className='flex align-items-center justify-center text-primary text-[70px] w-[90px]'><FaDollarSign /></div>
                </div>
              </div>
            </div>
          }

          {/* Information Update Form  */}

          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex mx-auto py-2 '>
                <div className=' flex-1 ' >
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-lg">Full Name</span>
                    </label>
                    <input
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Name is Required"
                        }
                      })}
                      type="text"
                      placeholder={user?.displayName}
                      className="input input-bordered w-full bg-secondary text-white" />
                    <label className="label">
                      <span className="label-text-alt text-red-500">{errors.author_name?.type === 'required' && `${errors?.author_name?.message}`}</span>
                    </label>
                  </div>


                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-lg">Your Phone</span>
                    </label>
                    <input
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Email is Required"
                        }
                      })}
                      type="phone"
                      placeholder="Update Your Phone"
                      className="input input-bordered w-full bg-secondary text-white" />
                    <label className="label">
                      <span className="label-text-alt text-red-500">{errors.phone?.type === 'required' && `${errors?.phone?.message}`}</span>
                    </label>
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text text-lg">Your Address</span>
                    </label>
                    <input
                      {...register("address", {
                        required: {
                          value: true,
                          message: "Address is Required"
                        }
                      })}
                      type="text"
                      placeholder="Update Your Address"
                      className="input input-bordered w-full  bg-secondary text-white" />
                    <label className="label">
                      <span className="label-text-alt text-red-500">{errors.address?.type === 'required' && `${errors?.address?.message}`}</span>
                    </label>
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text text-lg">Your Birthday </span>
                    </label>
                    <input
                      {...register("date", {
                        required: {
                          value: true,
                          message: "Date is Required"
                        }
                      })}
                      type="date"
                      placeholder="Update Your Address"
                      className="input input-bordered w-full  bg-secondary text-white" />
                    <label className="label">
                      <span className="label-text-alt text-red-500">{errors.address?.type === 'required' && `${errors?.address?.message}`}</span>
                    </label>
                  </div>
                </div>
              </div>
              <input type="submit" className='btn btn-primary text-white w-full' value='Update Profile' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Myprofile
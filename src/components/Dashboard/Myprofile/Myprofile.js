import React, { useEffect } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { BsFillBagCheckFill, BsFillHeartFill, BsFillJournalBookmarkFill } from "react-icons/bs";
import { FaCommentDollar, FaDollarSign } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { newUser } from '../../Redux/actions/bookActions';
import useGetUserData from '../../../hooks/useGetUserData';
import useViewAs from '../../../hooks/useViewAs';
import { useState } from 'react';
const Myprofile = () => {
  const [user] = useAuthState(auth);
  // const [getUser, setGetUser] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const { getUser, userRole, setUserRole } = useGetUserData();


  useEffect(() => {

    dispatch(newUser(getUser[0]))

  }, [getUser, dispatch])

  const currentUserId = getUser[0]?._id;

  const onSubmit = data => {
    const imgbbKey = '5e72e46e329464d233a1bc1128fc1a76';
    const image = data?.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const updateData = (updatedProfileData) => {
      axios.put(`https://book-shelf-webapp.herokuapp.com/update-user?id=${currentUserId}`, updatedProfileData)
        .then(data => {
          toast.success('Profile Updated Successfully!');
        })
    }
    if (image) {
      fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(result => {
          if (result.success) {
            const phoneNo = parseInt(data?.phone)
            const updatedProfileData = {
              user_name: data?.name ? data?.name : user?.user?.displayName,
              user_phone: phoneNo,
              user_address: data?.address,
              user_birthday: data?.date,
              user_photo_url: result?.data?.url ? result?.data?.url : user?.user_photo_url
            };
            updateData(updatedProfileData);
          }
        })

    } else {
      const phoneNo = parseInt(data?.phone)
      const updatedProfileData = {
        user_name: data?.name ? data?.name : user?.user?.displayName,
        user_phone: phoneNo,
        user_address: data?.address,
        user_birthday: data?.date,
      };
      updateData(updatedProfileData);
    }
  }

  const updateRole = role => {
    const userId = getUser[0]?._id;


    const updatedRole = {
      "user_role": role
    };
    axios.patch(`https://book-shelf-webapp.herokuapp.com/update-user-role?id=${userId}`, updatedRole)
      .then(data => {
        toast.success(`You are now viewing as ${role}`);
      })
  }




  return (
    <div>
      {/* View As  */}
      <div>
        <span className='ml-6 text-2xl font-bold'>View As </span>
        <button className={userRole === "user" ? 'btn btn-primary ml-2 mt-2 text-white' : 'btn btn-red ml-2 mt-2 text-white'} onClick={() => updateRole('user')} disabled={userRole === "user" ? true : false}>User</button>
        <button className={userRole === "author" ? 'btn btn-primary ml-2 mt-2 text-white' : 'btn btn-red ml-2 mt-2 text-white'} onClick={() => updateRole('author')} disabled={userRole === "author" ? true : false}>Auther</button>
        <button className={userRole === "publisher" ? 'btn btn-primary ml-2 mt-2 text-white' : 'btn btn-red ml-2 mt-2 text-white'} onClick={() => updateRole('publisher')} disabled={userRole === "publisher" ? true : false}>Publiser</button>
        <button className={userRole === "admin" ? 'btn btn-primary ml-2 mt-2 text-white' : 'btn btn-grey ml-2 mt-2 text-white'} onClick={() => updateRole('admin')} disabled={userRole === "admin" ? true : false}>Admin</button>
      </div>
      <h2 className='text-center font-semibold uppercase text-secondary text-[40px]'>My Profile</h2>
      <div className=" flex items-center justify-center pb-10">
        <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
      </div>


      <div className='md:flex  mr-auto mx-[20px] md:ml-20'>
        <div className='md:w-[50%] p-[20px] md:p-[78px] rounded-xl shadow-lg drop-shadow-lg text-black bg-white' >
          <img className='block mx-auto' height={200} width={200} src={getUser[0]?.user_photo_url ? getUser[0]?.user_photo_url : (user?.photoURL || 'https://icon-library.com/images/profile-pic-icon/profile-pic-icon-8.jpg ')} alt="" />
          <h2 className='text-[20px] font-bold mt-3 mb-1 text-center text-black'>{getUser[0]?.user_name ? getUser[0]?.user_name : user?.displayName}</h2>
          <p className='text-center mb-3 font-semibold text-[16px]'>{userRole}</p>
          <h3 className='font-bold text-[25px] uppercase text-secondary mb-[19px]'>Contact Informatin</h3>
          <div>
            <h4 className='font-[600] text-[25px] text-secondary py-[7px]'>Email Address</h4>
            <p className='font-[600] text-[16px] py-[7px]'>{user?.email}</p>
          </div>
          <div>
            <h4 className='font-[600] text-[25px]  text-secondary py-[7px]'>Phone Number </h4>
            <p className='font-[600] text-[16px] py-[7px]'>{getUser[0]?.user_phone}</p>
          </div>
          <div>
            <h4 className='font-[600] text-[25px] text-secondary py-[7px]'>Address</h4>
            <p className='font-[600] text-[16px] py-[7px]'>{getUser[0]?.user_address}</p>
          </div>
          <div>
            <h4 className='font-[600] text-[25px]  text-secondary py-[7px]'>Birthday</h4>
            <p className='font-[600] text-[16px] py-[7px]'>{getUser[0]?.user_birthday}</p>
          </div>
        </div>

        <div className='p-[20px] md:p-12 pt-0 md:ml-6 md:w-[50%] bg-white rounded' >
          {/* cards  */}
          {/* card raw container */}
          {userRole === 'user' && <div className='flex mt-[22px]'>
            <div className='flex w-[50%] border-[#27AE61] border-[1px] p-[29px] rounded-[15px] drop-shadow-md shadow-xl'>
              <div className='w-[70%]  text-[#00124E]'>
                <h2 className='text-[30px] md:text-[40px]  font-[600]'>{103}</h2>
                <p className='text-[18px] font-[600]'>Brought</p>
              </div>
              <div className='flex align-items-center justify-center text-primary text-[70px] w-[30%]'><BsFillBagCheckFill /></div>
            </div>
            <div className=' ml-[24px] flex w-[50%] border-[#27AE61] border-[1px] p-[29px] rounded-[15px] shadow-xl'>
              <div className='w-[70%] text-[#00124E]'>
                <h2 className='text-[30px] md:text-[40px]  font-[600]'>{1053}</h2>
                <p className='text-[18px] font-[600]'>Wish List</p>
              </div>
              <div className='flex align-items-center justify-center text-primary text-[70px] w-[30%]'><BsFillHeartFill /></div>
            </div>
          </div>}


          {/* card raw container */}
          {(userRole === 'publisher' || userRole === 'author') &&
            <div>
              <div className='flex mt-[22px]'>
                <div className='flex w-[50%] border-[#27AE61] border-[1px] p-[29px] rounded-[15px] drop-shadow-md shadow-xl'>
                  <div className='w-[70%]  text-[#00124E]'>
                    <h2 className='text-[30px] md:text-[40px] font-[600]'>{10}</h2>
                    <p className='text-[16px] font-[600]'>Total Books</p>
                  </div>
                  <div className=' flex align-items-center justify-center text-primary text-[70px] w-[30%]'><BsFillJournalBookmarkFill /></div>
                </div>
                <div className=' ml-[24px] flex w-[50%] border-[#27AE61] border-[1px] p-[29px] rounded-[15px] shadow-xl'>
                  <div className='w-[70%]  text-[#00124E]'>
                    <h2 className='text-[30px] md:text-[40px]  font-[600]'>{50}</h2>
                    <p className='text-[18px] font-[600]'>Total Sell</p>
                  </div>
                  <div className='flex align-items-center justify-center text-primary text-[70px] w-[30%]'><FaCommentDollar /></div>
                </div>
              </div>

              {/* card raw container */}
              <div className='flex mt-[22px]'>
                <div className='flex w-[50%] border-[#27AE61] border-[1px] p-[29px] rounded-[15px] drop-shadow-md shadow-xl'>
                  <div className='w-[70%]  text-[#00124E]'>
                    <h2 className='text-[30px] md:text-[40px] font-[600]'>{100}</h2>
                    <p className='text-[18px] font-[600]'>This Month Earning</p>
                  </div>
                  <div className=' flex align-items-center justify-center text-primary text-[70px] w-[30%]'><FaDollarSign /></div>
                </div>
                <div className=' ml-[24px] flex w-[50%] border-[#27AE61] border-[1px] p-[29px] rounded-[15px] shadow-xl'>
                  <div className='w-[70%]  text-[#00124E]'>
                    <h2 className='text-[30px] md:text-[40px]  font-[600]'>{500}</h2>
                    <p className='text-[18px] font-[600]'>Total Earning</p>
                  </div>
                  <div className='flex align-items-center justify-center text-primary text-[70px] w-[30%]'><FaDollarSign /></div>
                </div>
              </div>

              {/* card raw container */}
              <div className='flex mt-[22px]'>
                <div className='flex w-[50%] border-[#27AE61] border-[1px] p-[29px] rounded-[15px] drop-shadow-md shadow-xl'>
                  <div className='w-[70%]  text-[#00124E]'>
                    <h2 className='text-[30px] md:text-[40px]  font-[600]'>{100}</h2>
                    <p className='text-[18px] font-[600]'>Balance</p>
                  </div>
                  <div className=' flex align-items-center justify-center text-primary text-[70px] w-[30%]'><FaDollarSign /></div>
                </div>
                <div className=' ml-[24px] flex w-[50%] border-[#27AE61] border-[1px] p-[29px] rounded-[15px] shadow-xl'>
                  <div className='w-[70%]  text-[#00124E]'>
                    <h2 className='text-[30px] md:text-[40px]  font-[600]'>{500}</h2>
                    <p className='text-[18px] font-[600]'>Withdrawn</p>
                  </div>
                  <div className='flex align-items-center justify-center text-primary text-[70px] w-[30%]'><FaDollarSign /></div>
                </div>
              </div>
            </div>
          }

          {/* Information Update Form  */}

          <div>
            <h2 className='font-semibold uppercase text-secondary mt-2 text-[16px]'>Update Form</h2>
            <div className="">

              <progress className="progress progress-primary bg-white h-2 w-5  "></progress>
            </div>
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
                          value: false,
                          message: "Name is Required"
                        }
                      })}
                      type="text"
                      defaultValue={getUser[0]?.user_name ? getUser[0]?.user_name : user?.displayName}
                      className="input input-bordered w-full bg-[#0000000d]  text-secondary" />
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
                          value: false,
                          message: "Email is Required"
                        }
                      })}
                      type="phone"
                      defaultValue={getUser[0]?.user_phone}
                      placeholder={'Your Phone Number'}
                      className="input input-bordered w-full bg-[#0000000d]  text-secondary" />
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
                          value: false,
                          message: "Address is Required"
                        }
                      })}
                      type="text"
                      defaultValue={getUser[0]?.user_address}
                      placeholder={'Your Address here'}
                      className="input input-bordered w-full  bg-[#0000000d]  text-secondary" />
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
                          value: false,
                          message: "Date is Required"
                        }
                      })}
                      type="date"
                      defaultValue={getUser[0]?.user_birthday}
                      className="input input-bordered w-full bg-[#0000000d]  text-secondary" />
                    <label className="label">
                      <span className="label-text-alt text-red-500">{errors.date?.type === 'required' && `${errors?.date?.message}`}</span>
                    </label>
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text text-lg">Upload Image</span>
                    </label>
                    <input
                      {...register("image", {
                        required: {
                          value: false,
                          message: "image is Required"
                        }
                      })}
                      type="file"
                      className="input input-bordered w-full pt-[5px] bg-[#0000000d]  text-secondary" />
                    <label className="label">
                      <span className="label-text-alt text-red-500">{errors.image?.type === 'required' && `${errors?.image?.message}`}</span>
                    </label>
                  </div>
                </div>
              </div>
              <input type="submit" className='btn btn-primary text-white w-full' value='Update Profile' />
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Myprofile
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { BsFillBagCheckFill, BsFillHeartFill, BsFillJournalBookmarkFill } from "react-icons/bs";
import { FaCommentDollar, FaDollarSign } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { newUser } from '../../Redux/actions/bookActions';

const Myprofile = () => {
  const [user] = useAuthState(auth);
  const [userRole, setUserRole] = useState('');
  const [getUser, setGetUser] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch()

  useEffect(() => {
   

    const userUid = { uid: user?.uid };

    const options = {
      method: 'GET',
      url: 'https://book-shelf-webapp.herokuapp.com/get-user',
      params: userUid
    };
    axios.request(options).then(function (response) {
      setGetUser(response.data);
    }).catch(function (error) {
      console.error(error);
    });

  }, [user?.email])

  // upload image to imgbb and get image url 


  useEffect(() => {

    dispatch(newUser(getUser[0]))


  }, [getUser,user])




  // console.log(getUser);
  // // get current user role form database 
  const currentUserId = getUser[0]?._id;
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


  const [upImgUrl, setUpImgUrl] = useState('');
  console.log(upImgUrl); 
  const onSubmit = data => {
    const imgbbKey = '5e72e46e329464d233a1bc1128fc1a76';
    const image = data?.image[0];
    const formData = new FormData();
    formData.append('image', image);
    if (image) {
      fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(result => {
          if (result.success) {
            setUpImgUrl(result?.data?.url)
            const phoneNo = parseInt(data?.phone)
            const updatedProfileData = {
              user_name: data?.name ? data?.name : user?.user?.displayName,
              user_phone: phoneNo,
              user_address: data?.address,
              user_birthday: data?.date,
              user_photo_url: result?.data?.url ? result?.data?.url : user?.user_photo_url
            };
            const updateData = async () => {
              await axios.put(`https://book-shelf-webapp.herokuapp.com/update-user?id=${currentUserId}`, updatedProfileData).then(data => console.log(data))
            }
            updateData();
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

      const updateData = async () => {
        await axios.put(`https://book-shelf-webapp.herokuapp.com/update-user?id=${currentUserId}`, updatedProfileData).then(data => console.log(data))
      }
      updateData();

    }





  }

  return (
    <div>
       <h2 className='text-center font-semibold uppercase text-secondary text-[40px]'>My Profile</h2>
       <div className=" flex items-center justify-center pb-10">
       
            <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
          </div>

      <div className='md:flex  mr-auto mx-[20px] md:ml-20'>
        <div className='md:w-[50%] p-[20px] md:p-[78px] rounded-xl shadow-lg drop-shadow-lg text-black bg-white' >
          <img className='block mx-auto' height={200} width={200} src={user?.photoURL ? user?.photoURL : 'https://icon-library.com/images/profile-pic-icon/profile-pic-icon-8.jpg '} alt="" />
          <h2 className='text-[20px] font-bold mt-3 mb-1 text-center text-black'>{user?.displayName}</h2>
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
                      defaultValue={user?.displayName}
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
                      placeholder={getUser[0]?.user_birthday}
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
    </div>
  )
}

export default Myprofile
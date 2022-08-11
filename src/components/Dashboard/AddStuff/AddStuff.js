import axios from 'axios';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const AddStuff = () => {
    const [sendEmailVerification, sending, vError] = useSendEmailVerification(auth);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [phoneNo, setPhoneNo] = useState('');
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);

    if (loading || updating || sending) {
        return <Loading></Loading>
    }

    if (error || uError || vError) {
        toast(`Error: ${error?.message}` || uError?.message)
    }
    let confirmPassError;



    const onChangePicture = e => {
        if (e.target.files[0]) {
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    }


    const onSubmit = async (data) => {
        const pass = data?.password;
        const confirmPass = data?.cpassword;

        setPhoneNo(data?.phone)
        console.log(data);
        if (pass === confirmPass) {
            await createUserWithEmailAndPassword(data?.email, data?.password);
            await updateProfile({ displayName: data?.name });
            await sendEmailVerification();
            toast('Verification Email Sent');
            console.log('user created on firebase');

            const imgbbKey = '5e72e46e329464d233a1bc1128fc1a76';
            const image = data?.image[0];
            const formData = new FormData();
            formData.append('image', image);

            fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(result => {
                    if (result.success) {
                        const imgbbUrl = result?.data?.url;
                        const addStuff = {
                            user_name: data?.name,
                            user_email: data?.email,
                            user_phone: phoneNo,
                            user_address: data?.address,
                            user_photo_url: imgbbUrl ? imgbbUrl : "https://icon-library.com/images/profile-pic-icon/profile-pic-icon-8.jpg ",
                            user_role: data?.role
                        };
                        const postAuthorData = async () => {
                            await axios.post('https://book-shelf-webapp.herokuapp.com/   ', addStuff).then(data => {
                                console.log('Server Data', data)
                            })
                        }
                        postAuthorData();
                    }
                })

        }
        else {
            toast('Password and Confirm Password Dose not match');
        }


    }
    return (
        <div className="pt-12 pb-12 w-1/2 mx-auto">
            <h2 className='text-center font-bold text-3xl mb-3'>Add A New Stuff</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='md:flex '>
                    <div className='md:w-[30%]'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-lg">Upload Image</span>
                            </label>
                            <input
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: "image is Required"
                                    }
                                })}
                                type="file"
                                onChange={onChangePicture}
                                placeholder="Update Your Address"
                                className="input input-bordered w-full pt-[5px] bg-secondary text-white" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.image?.type === 'required' && `${errors?.image?.message}`}</span>
                            </label>
                        </div>
                        <div className="previewProfilePic">
                            <img className="playerProfilePic_home_tile max-w-[100%] mx-auto max-h-[300px] rounded-3xl" src={imgData ? imgData : "https://virtualpaintbrush.com/vpport/wp-content/uploads/2019/07/M-1984.jpg"} alt='' />
                        </div>
                    </div>
                    <div className=' md:w-[70%] mt-12 md:mt-0  md:ml-12' >
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Stuff Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Author Name is Required"
                                    }
                                })}
                                type="text"
                                placeholder="Enter Author Name"
                                className="input input-bordered w-full bg-secondary text-white" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.name?.type === 'required' && `${errors?.name?.message}`}</span>
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Email Address</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                                type="text"
                                placeholder="Enter Email"
                                className="input input-bordered w-full  bg-secondary text-white" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.email?.type === 'required' && `${errors?.email?.message}`}</span>
                                <span className="label-text-alt text-red-500">{errors.email?.type === 'pattern' && `${errors?.email?.message}`}</span>
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
                                        message: "Phone is Required"
                                    }
                                })}
                                type="phone"
                                placeholder="Enter Phone"
                                className="input input-bordered w-full bg-secondary text-white" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.phone?.type === 'required' && `${errors?.phone?.message}`}</span>
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-lg">Stuff Role</span>
                            </label>
                            <select {...register("role", {
                                required: {
                                    value: true,
                                    message: "role is Required"
                                }
                            })}
                                className="input input-bordered w-full  bg-secondary text-white"
                            >
                                <option value="admin">Admin</option>
                                <option value="delivery_man">Delivery Man</option>
                            </select>

                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.role?.type === 'required' && `${errors?.role?.message}`}</span>
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-lg">Address</span>
                            </label>
                            <input
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: "Address is Required"
                                    }
                                })}
                                type="text"
                                placeholder="Enter Address"
                                className="input input-bordered w-full  bg-secondary text-white" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.address?.type === 'required' && `${errors?.address?.message}`}</span>
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                                type="password"
                                placeholder="Enter Your Password"
                                className="input input-bordered w-full  bg-secondary text-white" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.password?.type === 'required' && `${errors?.password?.message}`}</span>
                                <span className="label-text-alt text-red-500">{errors.password?.type === 'minLength' && `${errors?.password?.message}`}</span>
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-lg">Confirm Password</span>
                            </label>
                            <input
                                {...register("cpassword", {
                                    required: {
                                        value: true,
                                        message: "Confirm Password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                                type="password"
                                placeholder="Confirm Your Password"
                                className="input input-bordered w-full bg-secondary text-white" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.cpassword?.type === 'required' && `${errors?.cpassword?.message}`}</span>
                                <span className="label-text-alt text-red-500">{errors.cpassword?.type === 'minLength' && `${errors?.cpassword?.message}`}</span>
                                <span className="label-text-alt text-red-500">{confirmPassError ? confirmPassError : ''}</span>
                            </label>
                        </div>
                    </div>
                </div>
                <input type="submit" className='btn btn-primary text-white w-full' value='Add Stuff' />
            </form>

        </div>
    );
};

export default AddStuff;
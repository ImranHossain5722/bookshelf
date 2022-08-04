import axios from 'axios';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';

const AddAuthor = () => {
    const [sendEmailVerification, sending, vError] = useSendEmailVerification(auth);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const [phoneNo, setPhoneNo] = useState('');


    if (loading || updating || sending) {
        return <Loading></Loading>
    }

    if (error || uError || vError) {
        toast(`Error: ${error?.message}` || uError?.message)
    }
    let confirmPassError;
    const authorInfo = {
        user_name: user?.user?.displayName,
        user_email: user?.user?.email,
        user_phone: user?.user?.phoneNumber ? user?.user?.phoneNumber : phoneNo,
        user_photo_url: user?.user?.photoURL ? user?.user?.photoURL : "https://icon-library.com/images/profile-pic-icon/profile-pic-icon-8.jpg ",
        uid: user?.user?.uid,
        user_role: 'author'
    };


    const onSubmit = async (data) => {
        const pass = data?.password;
        const confirmPass = data?.cpassword;

        setPhoneNo(data?.phone)
        if (pass === confirmPass) {
            await createUserWithEmailAndPassword(data?.author_email, data?.password);
            await updateProfile({ displayName: data?.author_name, phoneNumber: data?.phone });
            await sendEmailVerification();
            toast('Verification Email Sent');
            // navigate('/dashboard');
            console.log('user created on firebase');

        }
        else {
            toast('Password and Confirm Password Dose not match');
        }
        reset();
    }
    if (user) {
        console.log('Got User')
        const postAuthorData = async () => {

            await axios.post('https://book-shelf-webapp.herokuapp.com/add-user', authorInfo).then(data => {
                console.log('Server Data', data)
                navigate('/dashboard');
            })

        }
        postAuthorData();

    } else {
        console.log('user data not found')
    }
    return (
        <div className="pt-0 pb-12 w-1/2 mx-auto">
            <h2 className='text-center font-bold text-3xl mb-3'>Became an Author</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex mx-auto py-2 '>
                    <div className=' flex-1 ' >
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Author Name</span>
                            </label>
                            <input
                                {...register("author_name", {
                                    required: {
                                        value: true,
                                        message: "Author Name is Required"
                                    }
                                })}
                                type="text"
                                placeholder="Enter Author Name"
                                className="input input-bordered w-full bg-secondary text-white" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.author_name?.type === 'required' && `${errors?.author_name?.message}`}</span>
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Email Address</span>
                            </label>
                            <input
                                {...register("author_email", {
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
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full  bg-secondary text-white" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.author_email?.type === 'required' && `${errors?.author_email?.message}`}</span>
                                <span className="label-text-alt text-red-500">{errors.author_email?.type === 'pattern' && `${errors?.author_email?.message}`}</span>
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
                                placeholder="Enter Your Phone"
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
                                placeholder="Enter Your Address"
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
                <input type="submit" className='btn btn-primary text-white w-full' value='Became an Author' />
            </form>

        </div>




    );
};

export default AddAuthor;
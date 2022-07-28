import './Login.css';
import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SocialLogin from './SocialLogin';
import useToken from '../../../hooks/useToken';
import auth from '../../../firebase.init';
import Loading from '../../../components/Loading/Loading';
import logo from '../../../Assets/images/Logo/bookshelf-.png';

const SignUp = () => {
    const [sendEmailVerification, sending, vError] = useSendEmailVerification(auth);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [socialUser] = useAuthState(auth);

    const navigate = useNavigate();
    const [token] = useToken(user || socialUser);

    console.log(socialUser)
    if (loading || updating || sending) {
        return <Loading></Loading>
    }

    if (error || uError || vError) {
        toast(`Error: ${error?.message}` || uError?.message)
    }

    if (user || socialUser) {
        navigate('/dashboard');
    }

    let confirmPassError;

    const onSubmit = async (data) => {
        const pass = data?.password;
        const confirmPass = data?.cpassword;

        if (pass === confirmPass) {
            await createUserWithEmailAndPassword(data.email, data.password);
            await updateProfile({ displayName: data.name });
            await sendEmailVerification();
            toast('Verification Email Sent');
            reset();
        } else {
            toast('Password and Confirm Password Dose not match');
        }





    }
    return (
        <div className='flex justify-center items-center h-full my-12'>

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className='text-center'>
                    <img className='mx-auto' src={logo} alt="" />
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Your Name is Required"
                                    }
                                })}
                                type="text"
                                placeholder="Enter Your Name"
                                className="input input-bordered w-full max-w-xs bg-secondary text-white" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.name?.type === 'required' && `${errors?.name?.message}`}</span>

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
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
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full max-w-xs bg-secondary text-white" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.email?.type === 'required' && `${errors?.email?.message}`}</span>
                                <span className="label-text-alt text-red-500">{errors.email?.type === 'pattern' && `${errors?.email?.message}`}</span>
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input
                                {...register("mobile", {
                                    required: {
                                        value: true,
                                        message: "Mobile no is Required"
                                    }
                                })}
                                type="number"
                                placeholder="Enter Your Mobile no"
                                className="input input-bordered w-full max-w-xs bg-secondary text-white" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.mobile?.type === 'required' && `${errors?.mobile?.message}`}</span>
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
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
                                className="input input-bordered w-full max-w-xs bg-secondary text-white" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.password?.type === 'required' && `${errors?.password?.message}`}</span>
                                <span className="label-text-alt text-red-500">{errors.password?.type === 'minLength' && `${errors?.password?.message}`}</span>
                            </label>
                        </div>



                        <div className="form-control w-full max-w-xs">
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
                                className="input input-bordered w-full max-w-xs bg-secondary text-white" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.cpassword?.type === 'required' && `${errors?.cpassword?.message}`}</span>
                                <span className="label-text-alt text-red-500">{errors.cpassword?.type === 'minLength' && `${errors?.cpassword?.message}`}</span>
                                <span className="label-text-alt text-red-500">{confirmPassError ? confirmPassError : ''}</span>
                            </label>
                        </div>


                        <input type="submit" className='btn btn-primary text-white w-full max-w-xs' value='SignUp' />
                    </form>
                    <p className='mt-4'>Already have an account? <Link to='/login' className='text-primary font-bold'>Login</Link></p>
                </div>
                <div className='lg:hidden sm:flex  m-4'>
                <SocialLogin></SocialLogin>
            </div>
            </div>

            <div class=" hidden lg:flex  outer" >
                <div class="inner"></div>
            </div>
            <div className='hidden lg:flex '>
                <SocialLogin></SocialLogin>
            </div>


        </div>
    );
};


export default SignUp;
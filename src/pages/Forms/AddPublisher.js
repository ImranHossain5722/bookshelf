// import { useEffect } from 'react';
import axios from 'axios';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';

const AddPublisher = () => {
    const [sendEmailVerification, sending, vError] = useSendEmailVerification(auth);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // const navigate = useNavigate();


    // useEffect(() => {
    //     if (user) {
    //         fetch(`https://bookshelf-web.herokuapp.com/add-user`, {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json',
    //                 'Accept': 'application/json'
    //             },
    //             body: JSON.stringify(publisherInfo)
    //         })
    //             .then(res => {
    //                 if (res.status === 403) {
    //                     toast.error('Unauthorized');
    //                 }
    //                 return res.json()
    //             })
    //             .then(data => {
    //                 console.log("DB :", data)
    //                 toast.success(`Account created Successfully`);
    //             })
    //     }

    // }, [user])

    if (loading || updating || sending) {
        return <Loading></Loading>
    }

    if (error || uError || vError) {
        toast(`Error: ${error?.message}` || uError?.message)
    }

    let confirmPassError;


    const onSubmit = async (data) => {
        const pass = data?.password;
        const confirmPass = data?.cpassword;
        console.log(user.user)
        const publisherInfo = {
            user_name: user?.user?.displayName,
            user_email: user?.user?.email,
            user_phone: user?.user?.phoneNumber ? user?.user?.phoneNumber : data?.phone,
            user_photo_url: user?.user?.photoURL ? user?.user?.photoURL : "https://icon-library.com/images/profile-pic-icon/profile-pic-icon-8.jpg ",
            uid: user?.user?.uid,
            user_role: 'publisher'
        };
        if (pass === confirmPass) {
            await createUserWithEmailAndPassword(data?.publisher_email, data?.password);
            await updateProfile({ displayName: data?.publisher_name, phoneNumber: data?.phone });
            await sendEmailVerification();
            toast('Verification Email Sent');
            // navigate('/dashboard');
            console.log('user created on firebase');
            if (user) {
                console.log('Got User')
                const postPublisherData = async () => {
                    // try {
                    //     console.log('inside try', publisherInfo)
                    //     await fetch(`https://bookshelf-web.herokuapp.com/add-user`, {
                    //         method: 'POST',
                    //         headers: {
                    //             'content-type': 'application/json',
                    //             'Accept': 'application/json'
                    //         },
                    //         body: JSON.stringify(publisherInfo)
                    //     })
                    //         .then(res => {
                    //             console.log(res.json())
                    //         })
                    //         .then(data => {
                    //             console.log("DB :", data)
                    //             toast.success(`Account created Successfully`);
                    //         })
                    // }
                    // catch (error) {
                    //     console.error(error)
                    // }
                    axios.post('https://bookshelf-web.herokuapp.com/add-user',publisherInfo).then(data => console.log(data))
                }
                postPublisherData();

            } else {
                console.log('user data not found')
            }
        }
        else {
            toast('Password and Confirm Password Dose not match');
        }
        // reset();
    }
    return (
        <div className="pt-0 pb-12 w-1/2 mx-auto">
            <h2 className='text-center font-bold text-3xl mb-3'>Became an Publisher</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex mx-auto py-2 '>
                    <div className=' flex-1 ' >
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Publisher Name</span>
                            </label>
                            <input
                                {...register("publisher_name", {
                                    required: {
                                        value: true,
                                        message: "Publisher Name is Required"
                                    }
                                })}
                                type="text"
                                placeholder="Enter Publisher Name"
                                className="input input-bordered w-full bg-secondary text-white" />
                            <label className="label">
                                <span className="label-text-alt text-red-500">{errors.publisher_name?.type === 'required' && `${errors?.publisher_name?.message}`}</span>
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Email Address</span>
                            </label>
                            <input
                                {...register("publisher_email", {
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
                                <span className="label-text-alt text-red-500">{errors.publisher_email?.type === 'required' && `${errors?.publisher_email?.message}`}</span>
                                <span className="label-text-alt text-red-500">{errors.publisher_email?.type === 'pattern' && `${errors?.publisher_email?.message}`}</span>
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
                <input type="submit" className='btn btn-primary text-white w-full' value='Became an Publisher' />
            </form>

        </div>




    );
};

export default AddPublisher;
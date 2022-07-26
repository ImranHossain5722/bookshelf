import { useForm } from 'react-hook-form';
// import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';

const AddAuthor = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // const [user] = useAuthState(auth);
    let confirmPassError;

    const onSubmit = data => {
        fetch(``, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.status === 403) {
                    signOut(auth);
                    toast.error('Unauthorized');
                }
                return res.json()
            })
            .then(data => {
                toast.success(`Review Added Successfully`);
                reset();
            })

        reset();
    }
    return (
        <div className=' justify-center items-center py-12'>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-center font-bold text-3xl mb-3'>Became an Author</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex'>
                            <div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg">Author Name</span>
                                    </label>
                                    <input
                                        {...register("author", {
                                            required: {
                                                value: true,
                                                message: "Author Name is Required"
                                            }
                                        })}
                                        type="text"
                                        placeholder="Enter Author Name"
                                        className="input input-bordered w-full max-w-xs bg-secondary text-white" />
                                    <label className="label">
                                        <span className="label-text-alt text-red-500">{errors.author?.type === 'required' && `${errors?.author?.message}`}</span>
                                    </label>
                                </div>

                                <div className="form-control w-full max-w-sm">
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
                                        placeholder="Enter Your Email"
                                        className="input input-bordered w-full max-w-xs bg-secondary text-white" />
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
                                                message: "Email is Required"
                                            }
                                        })}
                                        type="number"
                                        placeholder="Enter Your Phone"
                                        className="input input-bordered w-full max-w-xs bg-secondary text-white" />
                                    <label className="label">
                                        <span className="label-text-alt text-red-500">{errors.phone?.type === 'required' && `${errors?.phone?.message}`}</span>
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-sm">
                                    <label className="label">
                                        <span className="label-text text-lg">Your Address</span>
                                    </label>
                                    <input
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: "Email is Required"
                                            }
                                        })}
                                        type="text"
                                        placeholder="Enter Your Address"
                                        className="input input-bordered w-full max-w-xs bg-secondary text-white" />
                                    <label className="label">
                                        <span className="label-text-alt text-red-500">{errors.address?.type === 'required' && `${errors?.address?.message}`}</span>
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-sm">
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
                                        className="input input-bordered w-full max-w-xs bg-secondary text-white" />
                                    <label className="label">
                                        <span className="label-text-alt text-red-500">{errors.password?.type === 'required' && `${errors?.password?.message}`}</span>
                                        <span className="label-text-alt text-red-500">{errors.password?.type === 'minLength' && `${errors?.password?.message}`}</span>
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
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
                                        className="input input-bordered w-full max-w-xs bg-secondary text-white" />
                                    <label className="label">
                                        <span className="label-text-alt text-red-500">{errors.cpassword?.type === 'required' && `${errors?.cpassword?.message}`}</span>
                                        <span className="label-text-alt text-red-500">{errors.cpassword?.type === 'minLength' && `${errors?.cpassword?.message}`}</span>
                                        <span className="label-text-alt text-red-500">{confirmPassError ? confirmPassError : ''}</span>
                                    </label>
                                </div>
                            </div>

                            <div className="form-control w-full max-w-sm ml-3">
                                <label className="label">
                                    <span className="label-text  text-lg">Book Cover</span>
                                </label>
                                <input
                                    {...register("cover", {
                                        required: {
                                            value: true,
                                            message: "Icon Link is Required"
                                        }

                                    })}
                                    type="file"
                                    className="input input-bordered w-full max-w-xs bg-secondary text-white py-36 px-12 " />
                                <label className="label">
                                    <span className="label-text-alt text-red-500">{errors.cover?.type === 'required' && `${errors?.cover?.message}`}</span>
                                </label>
                            </div>
                        </div>

                        <input type="submit" className='btn btn-primary text-white w-full' value='Became an Author' />
                    </form>

                </div>



            </div>

        </div>
    );
};

export default AddAuthor;
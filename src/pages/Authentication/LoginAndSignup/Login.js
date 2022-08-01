import './Login.css';
import { useForm } from 'react-hook-form';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Loading from '../../../components/Loading/Loading';
import auth from '../../../firebase.init';
import logo from '../../../Assets/images/Logo/bookshelf-.png';
// import useToken from '../../../hooks/useToken';
import SocialLogin from './SocialLogin';
import axios from 'axios';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [socialUser] = useAuthState(auth);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/dashboard";


    useEffect(() => {
        const userInfo = {
            user_name: user?.user?.displayName,
            user_email: user?.user?.email,
            uid: user?.user?.uid,
            user_role: 'user'
        };
        if (user || socialUser) {
            console.log('Got User')
            const postAuthorData = async () => {
                await axios.post('https://book-shelf-webapp.herokuapp.com/add-user', userInfo).then(data => console.log(data))
                navigate(from, { replace: true });

            }
            postAuthorData();

        }
    }, [user, socialUser, from, navigate])

    if (user) {


    }
    if (error) {
        toast(`Error: ${error?.message}`);
    }
    if (loading) {
        <Loading></Loading>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        reset();
    }

    return (
        <div className='flex justify-center items-center  h-full my-5'>
            <div className="card bg-base-100 shadow-xl">
                <div className='text-center'>
                    <img className='mx-auto' src={logo} alt="" />
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-sm">
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
                        <div className="form-control w-full max-w-sm">
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
                        <input type="submit" className='btn btn-primary text-white w-full max-w-xs' value='Login' />
                    </form>
                    <p className='mt-4'>New to BookShelf? <Link to='/signup' className='text-primary font-bold'>Create a new account</Link></p>
                    <p className='mt-1'>Forgot Your Password? <span style={{ cursor: "pointer" }} className='pointer text-primary font-bold'>Reset</span></p>

                    <div className='lg:hidden sm:flex '>
                        <SocialLogin></SocialLogin>
                    </div>

                </div>



            </div>
            <div class="hidden lg:flex outer">
                <div class="inner"></div>
            </div>
            <div className='hidden lg:flex'>
                <SocialLogin></SocialLogin>
            </div>


        </div>
    );
};

export default Login;
import React, { useEffect } from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../components/Loading/Loading';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import google from '../../../Assets/images/Social-Icons/google.png';
import fb from '../../../Assets/images/Social-Icons/facebook.png';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/dashboard";
    const [token] = useToken(user || fUser);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (error || fError) {
        toast(`Error: ${error?.message}`);
    }
    if (loading || fLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=''>
            <div className=' mt-4'>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn bg-white text-secondary hover:bg-secondary hover:text-white w-full"
                >
                    Continute With Google
                    <img className='ml-2' src={google} alt="" width={25} height={25} />
                </button>
            </div>
            <div className=' mt-4'>
                <button
                    onClick={() => signInWithFacebook()}
                    className="btn bg-white text-secondary hover:bg-secondary hover:text-white w-full"
                >
                    Continute With Facebook
                    <img className='ml-2' src={fb} alt="" width={25} height={25} />
                </button>
            </div>
        </div>

    );
};

export default SocialLogin;
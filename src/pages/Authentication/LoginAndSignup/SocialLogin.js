import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import fb from "../../../Assets/images/Social-Icons/facebook.png";
import google from "../../../Assets/images/Social-Icons/google.png";
import Loading from "../../../components/Loading/Loading";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fUser, fLoading, fError] =
    useSignInWithFacebook(auth);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard";
  const { userLogin } = useToken();

  if (error) {
    toast(`Error: ${error?.message}`);
  }
  if (fError) {
    toast(`Error: ${fError?.message}`);
  }

  if (loading || fLoading) {
    return <Loading></Loading>;
  }

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    await userLogin();
    navigate(from, { replace: true });
  };
  return (
    <div className="">
      <div className=" mt-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-secondary hover:bg-secondary hover:text-white w-full"
        >
          Continute With Google
          <img className="ml-2" src={google} alt="" width={25} height={25} />
        </button>
      </div>
      <div className=" mt-4">
        <button
          onClick={() => signInWithFacebook()}
          className="btn bg-white text-secondary hover:bg-secondary hover:text-white w-full"
        >
          Continute With Facebook
          <img className="ml-2" src={fb} alt="" width={25} height={25} />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

import React from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../Assets/images/Logo/bookshelf-.png";
import Loading from "../../../components/Loading/Loading";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import "./Login.css";
import SocialLogin from "./SocialLogin";
// import { onAuthStateChanged } from "firebase/auth";
// import axios from "axios";

const SignUp = () => {
  const [sendEmailVerification, sending, vError] =
    useSendEmailVerification(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, uError] = useUpdateProfile(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [socialUser] = useAuthState(auth);
  //   const [phoneNo, setPhoneNo] = useState("");

  const navigate = useNavigate();
  const { token } = useToken();

  //   const userInfo = {
  //     user_name: user?.user?.displayName,
  //     user_email: user?.user?.email,
  //     user_phone: user?.user?.phoneNumber ? user?.user?.phoneNumber : phoneNo,
  //     user_photo_url: user?.user?.photoURL
  //       ? user?.user?.photoURL
  //       : "https://icon-library.com/images/profile-pic-icon/profile-pic-icon-8.jpg ",
  //     uid: user?.user?.uid,
  //     user_role: "user",
  //   };
  //   if (user) {
  //     console.log("Got User");
  //     const postAuthorData = async () => {
  //       await axios
  //         .post("https://book-shelf-webapp.herokuapp.com/add-user", userInfo)
  //         .then((data) => console.log(data));
  //       navigate("/dashboard");
  //     };
  //     postAuthorData();
  //   } else {
  //     console.log("user data not found");
  //   }
  // console.log(socialUser);
  if (loading || updating || sending) {
    return <Loading></Loading>;
  }

  if (error || uError || vError) {
    toast(`Error: ${error?.message}` || uError?.message);
  }

  if (user || socialUser || token) {
    navigate("/dashboard");

    // console.log(user);
  }

  let confirmPassError;

  const onSubmit = async (data) => {
    const pass = data?.password;
    const confirmPass = data?.cpassword;
    // setPhoneNo(data?.phone);

    if (pass === confirmPass) {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
      // await onAuthStateChanged(auth, async (user) => {
      //   if (user) {
      //     const data = await axios.post(
      //       "https://book-shelf-webapp.herokuapp.com/login-user", user);
      //     console.log(user)
      //   }
      // });
      await sendEmailVerification();
      toast("Verification Email Sent");
      reset();
    } else {
      toast("Password and Confirm Password Dose not match");
    }
  };
  return (
    <div className="flex justify-center items-center h-full my-12">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="text-center">
          <img className="mx-auto" src={logo} alt="" />
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Your Name is Required",
                  },
                })}
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered w-full max-w-xs bg-secondary text-white"
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.name?.type === "required" &&
                    `${errors?.name?.message}`}
                </span>
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered w-full max-w-xs bg-secondary text-white"
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.email?.type === "required" &&
                    `${errors?.email?.message}`}
                </span>
                <span className="label-text-alt text-red-500">
                  {errors.email?.type === "pattern" &&
                    `${errors?.email?.message}`}
                </span>
              </label>
            </div>

       

            <div className="form-control w-full max-w-xs">
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
                type="password"
                placeholder="Enter Your Password"
                className="input input-bordered w-full max-w-xs bg-secondary text-white"
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.password?.type === "required" &&
                    `${errors?.password?.message}`}
                </span>
                <span className="label-text-alt text-red-500">
                  {errors.password?.type === "minLength" &&
                    `${errors?.password?.message}`}
                </span>
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <input
                {...register("cpassword", {
                  required: {
                    value: true,
                    message: "Confirm Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
                type="password"
                placeholder="Confirm Your Password"
                className="input input-bordered w-full max-w-xs bg-secondary text-white"
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.cpassword?.type === "required" &&
                    `${errors?.cpassword?.message}`}
                </span>
                <span className="label-text-alt text-red-500">
                  {errors.cpassword?.type === "minLength" &&
                    `${errors?.cpassword?.message}`}
                </span>
                <span className="label-text-alt text-red-500">
                  {confirmPassError ? confirmPassError : ""}
                </span>
              </label>
            </div>

            <input
              type="submit"
              className="btn btn-primary text-white w-full max-w-xs"
              value="SignUp"
            />
          </form>
          <p className="mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-bold">
              Login
            </Link>
          </p>
        </div>
        <div className="lg:hidden sm:flex  m-4">
          <SocialLogin></SocialLogin>
        </div>
      </div>

      <div className=" hidden lg:flex  outer">
        <div className="inner"></div>
      </div>
      <div className="hidden lg:flex ">
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;

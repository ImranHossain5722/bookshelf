import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import auth from "../../firebase.init";

const AddAuthor = () => {
  const [sendEmailVerification, sending, vError] = useSendEmailVerification(auth);
  const [createUserWithEmailAndPassword, user1, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, uError] = useUpdateProfile(auth);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [phoneNo, setPhoneNo] = useState("");

  const [imgData, setImgData] = useState(null);

  if (loading || updating || sending) {
    return <Loading></Loading>;
  }

  if (error || uError || vError) {
    toast(`Error: ${error?.message}` || uError?.message);
  }
  let confirmPassError;

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onSubmit = async (data) => {
    const pass = data?.password;
    const confirmPass = data?.cpassword;

    setPhoneNo(data?.phone);
    if (pass === confirmPass) {
      await createUserWithEmailAndPassword(data?.author_email, data?.password);
      await updateProfile({ displayName: data?.author_name });

      await sendEmailVerification();
      toast("Verification Email Sent");
      console.log("user created on firebase");

      await onAuthStateChanged(auth, async (user) => {
        if (user) {
          console.log('user', user);
          const imgbbKey = "5e72e46e329464d233a1bc1128fc1a76";
          const image = data?.image[0];
          const formData = new FormData();
          formData.append("image", image);

          fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
            method: "POST",
            body: formData,
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.success) {
                const imgbbUrl = result?.data?.url;
                const authorInfo = {
                  user_name: user?.user?.displayName ? user?.user?.displayName : data?.author_name,
                  user_email: user?.user?.email ? user?.user?.email : data?.author_email,
                  user_phone: user?.user?.phoneNumber ? user?.user?.phoneNumber : phoneNo,
                  user_photo_url: imgbbUrl ? imgbbUrl : "https://icon-library.com/images/profile-pic-icon/profile-pic-icon-8.jpg ",
                  uid: user?.uid
                };

                const postAuthorData = async () => {
                  await axios
                    .post(
                      "https://book-shelf-webapp.herokuapp.com/register-author",
                      authorInfo
                    )
                    .then((data) => {
                      // console.log("Server Data", data);
                      navigate("/dashboard");
                    });
                };
                postAuthorData();
              }
            });
        }
        else {
          console.log("user data not found");
        }
      });


    } else {
      toast("Password and Confirm Password Dose not match");
    }
  };
  return (
    <div className="section_padding pt-0">
      <div className="pt-0  w-1/2 mx-auto">
        <h2 className="text-center font-bold text-3xl mb-3">
          Became an Author
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex ">
            <div className="md:w-[30%]">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text text-lg">Upload Image</span>
                </label>
                <input
                  {...register("image", {
                    required: {
                      value: true,
                      message: "image is Required",
                    },
                  })}
                  type="file"
                  onChange={onChangePicture}
                  placeholder="Update Your Address"
                  className="input input-bordered w-full pt-[5px] bg-secondary text-white"
                />
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.image?.type === "required" &&
                      `${errors?.image?.message}`}
                  </span>
                </label>
              </div>
              <div className="previewProfilePic">
                <img
                  className="playerProfilePic_home_tile max-w-[100%] mx-auto max-h-[300px] rounded-3xl"
                  src={
                    imgData
                      ? imgData
                      : "https://virtualpaintbrush.com/vpport/wp-content/uploads/2019/07/M-1984.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
            <div className=" md:w-[70%] mt-12 md:mt-0  md:ml-12">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg">Author Name</span>
                </label>
                <input
                  {...register("author_name", {
                    required: {
                      value: true,
                      message: "Author Name is Required",
                    },
                  })}
                  type="text"
                  placeholder="Enter Author Name"
                  className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none bg-white"
                />
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.author_name?.type === "required" &&
                      `${errors?.author_name?.message}`}
                  </span>
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
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                  type="text"
                  placeholder="Enter Your Email"
                  className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none bg-white"
                />
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.author_email?.type === "required" &&
                      `${errors?.author_email?.message}`}
                  </span>
                  <span className="label-text-alt text-red-500">
                    {errors.author_email?.type === "pattern" &&
                      `${errors?.author_email?.message}`}
                  </span>
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
                      message: "Email is Required",
                    },
                  })}
                  type="phone"
                  placeholder="Enter Your Phone"
                  className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none bg-white"
                />
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.phone?.type === "required" &&
                      `${errors?.phone?.message}`}
                  </span>
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
                      message: "Address is Required",
                    },
                  })}
                  type="text"
                  placeholder="Enter Your Address"
                  className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none bg-white"
                />
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.address?.type === "required" &&
                      `${errors?.address?.message}`}
                  </span>
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
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                  type="password"
                  placeholder="Enter Your Password"
                  className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none bg-white"
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
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text text-lg">Confirm Password</span>
                </label>
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
                  className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none bg-white"
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
              <div className="form-control w-full">
                <input
                  type="submit"
                  className="btn btn-primary text-white w-full"
                  value="Became an Author"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAuthor;

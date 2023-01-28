import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { newUser } from "../components/Redux/actions/bookActions";
import auth from "../firebase.init";

const useToken = (cUser) => {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const userLogin = async () => {
    await onAuthStateChanged(auth, async (user) => {
      if (user) {
        const data = await axios.post(
          "https://bookshelf-server-s8lf.onrender.com/login-user",
          user
        );
        if (data.data._id) {
          dispatch(newUser(data.data));
          console.log(data.data);
        }
      }
    });
  };

  return { token, userLogin };
};

export default useToken;

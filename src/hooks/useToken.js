import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import auth from "../firebase.init";

const useToken = (cUser) => {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});

  const handleLogin = async () => {
    await onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = {
          user,
          role: "user",
        };
        const data = await axios.post(
          "http://localhost:4000/add-user",
          userData
        );
        if (data.data._id) {
          setUserData(data.data);
        }
      }
    });
    console.log(userData);
  };

  return { token, handleLogin };
};

export default useToken;

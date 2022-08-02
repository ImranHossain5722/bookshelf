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
          "https://book-shelf-webapp.herokuapp.com/add-user",
          userData
        );
        if (data.data._id) {
          setUserData(data.data);
          console.log(data.data);
        }
      }
    });
  };

  return { token, handleLogin };
};

export default useToken;

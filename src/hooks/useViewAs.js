import axios from "axios";
import useGetUserData from "./useGetUserData";

const useViewAs = (role) => {
  const { getUser } = useGetUserData();
  const userId = getUser[0]?._id;

  // console.log(role);
  const updatedRole = {
    user_role: role,
  };
  axios
    .post(
      `https://bookshelf-server-s8lf.onrender.com/update-user-role?id=${role}`,
      updatedRole
    )
    .then((data) => {});

  return { userId };
};

export default useViewAs;

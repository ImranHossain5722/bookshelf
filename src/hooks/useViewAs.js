import axios from 'axios';
import useGetUserData from './useGetUserData';

const useViewAs = (role) => {
    const { getUser } = useGetUserData();
    const userId = getUser[0]?._id;

    // console.log(role);
    const updatedRole = {
        "user_role": role
    };
    axios.post(`https://book-shelf-webapp.herokuapp.com/update-user-role?id=${role}`, updatedRole).then(data => { })

    return { userId };
};

export default useViewAs;